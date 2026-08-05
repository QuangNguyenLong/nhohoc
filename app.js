// ============ Helpers ============
const STORAGE_KEY = "luanngu_srs_v1";
const SETTINGS_KEY = "luanngu_settings_v1";
const todayStr = () => new Date().toISOString().slice(0, 10);
const addDays = (dateStr, days) => {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
};
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

function getAllPassages() {
  return TU_THU_LIBRARY.books.flatMap(book =>
    book.chapters.flatMap(ch =>
      ch.passages.map(p => ({
        ...p,
        uid: `${book.id}::${p.id}`,
        bookId: book.id,
        bookTitle: book.title,
        chapterId: ch.id,
        chapterNumber: ch.number,
        chapterName: ch.name
      }))
    )
  );
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error("Không đọc được tiến độ đã lưu:", e);
    return {};
  }
}
function saveState(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch (e) { console.error("Không lưu được tiến độ:", e); }
}

function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? JSON.parse(raw) : { sessionSize: 10 };
  } catch (e) { return { sessionSize: 10 }; }
}
function saveSettings(s) { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); }

let srsState = loadState();
let settings = loadSettings();
const allPassages = getAllPassages();
const passageById = Object.fromEntries(allPassages.map(p => [p.uid, p]));

// Mọi câu đều tự động nằm trong bộ ôn tập ngay từ đầu — không cần thao tác thủ công.
function ensureEntry(uid) {
  if (!srsState[uid]) {
    srsState[uid] = { ease: 2.5, interval: 0, reps: 0, due: todayStr() };
  }
  return srsState[uid];
}
allPassages.forEach(p => ensureEntry(p.uid));
saveState(srsState);

function passagesOfBook(bookId) {
  return allPassages.filter(p => p.bookId === bookId);
}

// ============ Book (top-level) navigation ============
const bookTabsEl = document.getElementById("book-tabs");
const brandTitleEl = document.getElementById("brand-title");
const brandSubEl = document.getElementById("brand-sub");

let currentBookId = TU_THU_LIBRARY.books[0].id;
let currentChapterId = TU_THU_LIBRARY.books[0].chapters[0].id;

function currentBook() {
  return TU_THU_LIBRARY.books.find(b => b.id === currentBookId);
}

function renderBookTabs() {
  bookTabsEl.innerHTML = "";
  TU_THU_LIBRARY.books.forEach(book => {
    const btn = document.createElement("button");
    btn.className = "tab book-tab" + (book.id === currentBookId ? " active" : "");
    btn.setAttribute("role", "tab");
    btn.textContent = book.title;
    btn.addEventListener("click", () => switchBook(book.id));
    bookTabsEl.appendChild(btn);
  });
  const book = currentBook();
  brandTitleEl.textContent = book.title;
  brandSubEl.textContent = book.subtitle;
}

function switchBook(bookId) {
  if (bookId === currentBookId) return;
  currentBookId = bookId;
  currentChapterId = currentBook().chapters[0].id;
  renderBookTabs();
  renderChapterRail();
  renderPassages();
  updateDueBadge();
  const activeSection = document.querySelector("#section-tabs .tab.active").dataset.tab;
  if (activeSection === "review") startReviewSession();
  if (activeSection === "progress") renderProgress();
}

// ============ Section-level tabs (Đọc hiểu / Ôn tập / Tiến độ) ============
const sectionTabs = document.querySelectorAll("#section-tabs .tab");
const views = document.querySelectorAll(".view");

sectionTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    sectionTabs.forEach(t => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    const target = tab.dataset.tab;
    views.forEach(v => v.classList.remove("active"));
    document.getElementById(`view-${target}`).classList.add("active");

    if (target === "review") startReviewSession();
    if (target === "progress") renderProgress();
  });
});

// ============ Reading view ============
const chapterRail = document.getElementById("chapter-rail");
const chapterNumberEl = document.getElementById("chapter-number");
const chapterNameEl = document.getElementById("chapter-name");
const chapterNoteEl = document.getElementById("chapter-note");
const passageListEl = document.getElementById("passage-list");

const ROMAN = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX",
  "XXI","XXII","XXIII","XXIV","XXV","XXVI","XXVII","XXVIII","XXIX","XXX","XXXI","XXXII","XXXIII"];

function renderChapterRail() {
  chapterRail.innerHTML = "";
  currentBook().chapters.forEach(ch => {
    const btn = document.createElement("button");
    btn.className = "rail-item" + (ch.id === currentChapterId ? " active" : "");
    btn.textContent = ROMAN[ch.number - 1] || ch.number;
    btn.title = ch.name;
    btn.addEventListener("click", () => {
      currentChapterId = ch.id;
      renderChapterRail();
      renderPassages();
    });
    chapterRail.appendChild(btn);
  });
}

function renderPassages() {
  const book = currentBook();
  const chapter = book.chapters.find(c => c.id === currentChapterId);
  chapterNumberEl.textContent = ROMAN[chapter.number - 1] || chapter.number;
  chapterNameEl.textContent = chapter.name;
  chapterNoteEl.textContent = chapter.note || "";

  passageListEl.innerHTML = "";

  const sourceNote = document.createElement("p");
  sourceNote.className = "book-source";
  sourceNote.textContent = `Nguồn: ${book.source}`;
  passageListEl.appendChild(sourceNote);

  chapter.passages.forEach(p => {
    const card = document.createElement("article");
    card.className = "passage-card";
    const hanvietHtml = p.hanviet ? `<p class="passage-hanviet">${p.hanviet}</p>` : "";
    const binhHtml = p.binh
      ? `<button class="binh-toggle" type="button">Xem lời bình</button><p class="passage-binh">${p.binh}</p>`
      : "";
    card.innerHTML = `
      <span class="seal">${p.id}</span>
      ${hanvietHtml}
      <p class="passage-nghia"><strong>Nghĩa</strong>${p.nghia}</p>
      ${binhHtml}
    `;
    const toggleBtn = card.querySelector(".binh-toggle");
    if (toggleBtn) {
      const binhEl = card.querySelector(".passage-binh");
      toggleBtn.addEventListener("click", () => {
        const isOpen = binhEl.classList.toggle("open");
        toggleBtn.textContent = isOpen ? "Ẩn lời bình" : "Xem lời bình";
      });
    }
    passageListEl.appendChild(card);
  });
}

// ============ Review (spaced repetition, randomized daily session, per book) ============
const dueBadge = document.getElementById("due-badge");
const reviewRemainingEl = document.getElementById("review-remaining");
const shuffleBtn = document.getElementById("shuffle-btn");
const sessionSizeInput = document.getElementById("session-size");
const flashcard = document.getElementById("flashcard");
const cardWrap = document.getElementById("card-wrap");
const cardSeal = document.getElementById("card-seal");
const cardHanviet = document.getElementById("card-hanviet");
const cardNghia = document.getElementById("card-nghia");
const cardBinh = document.getElementById("card-binh");
const rateRow = document.getElementById("rate-row");
const reviewEmpty = document.getElementById("review-empty");

sessionSizeInput.value = settings.sessionSize;

let reviewQueue = [];
let currentCardId = null;

function buildDailySession() {
  const size = settings.sessionSize;
  const pool = passagesOfBook(currentBookId);
  const due = pool.filter(p => {
    const s = ensureEntry(p.uid);
    return s.reps > 0 && s.due <= todayStr();
  }).map(p => p.uid);
  const fresh = pool.filter(p => ensureEntry(p.uid).reps === 0).map(p => p.uid);

  const merged = shuffle([...shuffle(due), ...shuffle(fresh)]);
  return merged.slice(0, size);
}

function updateDueBadge() {
  const count = passagesOfBook(currentBookId).filter(p => {
    const s = ensureEntry(p.uid);
    return s.due <= todayStr();
  }).length;
  if (count > 0) { dueBadge.hidden = false; dueBadge.textContent = count; }
  else { dueBadge.hidden = true; }
}

function startReviewSession() {
  reviewQueue = buildDailySession();
  showNextCard();
}

shuffleBtn.addEventListener("click", () => {
  reviewQueue = shuffle(reviewQueue);
  showNextCard();
});

sessionSizeInput.addEventListener("change", () => {
  let v = parseInt(sessionSizeInput.value, 10);
  if (isNaN(v) || v < 1) v = 1;
  if (v > 50) v = 50;
  sessionSizeInput.value = v;
  settings.sessionSize = v;
  saveSettings(settings);
  startReviewSession();
});

function showNextCard() {
  rateRow.hidden = true;
  flashcard.classList.remove("flipped");

  if (reviewQueue.length === 0) {
    cardWrap.hidden = true;
    reviewEmpty.hidden = false;
    shuffleBtn.hidden = true;
    reviewRemainingEl.textContent = "0 thẻ trong phiên này";
    return;
  }

  cardWrap.hidden = false;
  reviewEmpty.hidden = true;
  shuffleBtn.hidden = false;
  currentCardId = reviewQueue[0];
  const p = passageById[currentCardId];
  cardSeal.textContent = p.id;
  cardHanviet.textContent = p.hanviet || "(Đoạn này chỉ có bản dịch nghĩa, không có phiên âm riêng)";
  cardNghia.textContent = p.nghia;
  cardBinh.textContent = p.binh || "(Chưa có lời bình cho câu này)";
  reviewRemainingEl.textContent = `${reviewQueue.length} thẻ còn lại trong phiên này`;
}

flashcard.addEventListener("click", () => {
  if (!currentCardId) return;
  const willShowBack = !flashcard.classList.contains("flipped");
  flashcard.classList.toggle("flipped");
  rateRow.hidden = !willShowBack;
});

document.querySelectorAll(".rate-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!currentCardId) return;
    rate(currentCardId, btn.dataset.rate);
    reviewQueue.shift();
    showNextCard();
    updateDueBadge();
  });
});

function rate(uid, rating) {
  const s = ensureEntry(uid);
  if (rating === "hard") {
    s.ease = Math.max(1.3, s.ease - 0.2);
    s.reps = 0;
    s.interval = 1;
  } else if (rating === "ok") {
    s.reps += 1;
    s.interval = s.reps === 1 ? 1 : Math.max(1, Math.round(s.interval * s.ease));
  } else if (rating === "easy") {
    s.ease = s.ease + 0.15;
    s.reps += 1;
    s.interval = s.reps === 1 ? 2 : Math.max(1, Math.round(s.interval * s.ease * 1.3));
  }
  s.due = addDays(todayStr(), s.interval);
  saveState(srsState);
}

// ============ Progress (per book) + backup (whole library) ============
function renderProgress() {
  const pool = passagesOfBook(currentBookId);
  let studied = 0, mastered = 0;
  pool.forEach(p => {
    const s = ensureEntry(p.uid);
    if (s.reps > 0) studied++;
    if (s.interval > 30) mastered++;
  });
  document.getElementById("stat-total").textContent = pool.length;
  document.getElementById("stat-added").textContent = studied;
  document.getElementById("stat-mastered").textContent = mastered;
}

document.getElementById("reset-btn").addEventListener("click", () => {
  if (confirm("Xoá toàn bộ tiến độ ôn tập (cho tất cả các sách)? Hành động này không thể hoàn tác.")) {
    localStorage.removeItem(STORAGE_KEY);
    srsState = {};
    allPassages.forEach(p => ensureEntry(p.uid));
    saveState(srsState);
    renderPassages();
    updateDueBadge();
    renderProgress();
  }
});

document.getElementById("export-btn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(srsState, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `tu-thu-tien-do-${todayStr()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

document.getElementById("import-input").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      srsState = { ...srsState, ...imported };
      saveState(srsState);
      renderProgress();
      updateDueBadge();
      alert("Đã nhập tiến độ thành công.");
    } catch (err) {
      alert("File không hợp lệ, không thể nhập tiến độ.");
      console.error(err);
    }
  };
  reader.readAsText(file);
  e.target.value = "";
});

// ============ Init ============
renderBookTabs();
renderChapterRail();
renderPassages();
updateDueBadge();
