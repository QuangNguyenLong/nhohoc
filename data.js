// Dữ liệu Tứ Thư — trích và biên soạn từ các bản dịch nguồn (xem trường "source" mỗi sách).
// Cấu trúc: mỗi sách (book) gồm nhiều thiên/chương (chapters), mỗi thiên gồm nhiều câu/mục (passages).
// Muốn bổ sung sách mới: copy một object trong mảng "books" và sửa lại nội dung.

const TU_THU_LIBRARY = {
  books: [
  {
    "id": "luan-ngu",
    "title": "Luận Ngữ",
    "subtitle": "Lời dạy của Khổng Tử, do học trò ghi chép",
    "source": "Phùng Hoài Ngọc biên dịch, chú giải, bàn luận — Đại học An Giang, 2011",
    "chapters": [
      {
        "id": "hoc-nhi",
        "number": 1,
        "name": "Học Nhi",
        "note": "",
        "passages": [
          {
            "id": "1.1",
            "hanviet": "Tử viết: Học nhi thời tập chi, bất diệc duyệt hồ ? Hữu bằng tự viễn phương lai, bất diệc lạc hồ ? Nhân bất tri nhi bất uấn, bất diệc quân tử hồ ?",
            "nghia": "Khổng tử nói: Học thì phải luyện tập, chẳng vui lắm sao ? Có bạn hữu nơi xa đến thăm, chẳng mừng lắm sao? Người chẳng hiểu ta mà ta không buồn giận họ, thế chẳng phải người quân tử ư ?",
            "binh": "Bài học đầu tiên, Khổng tử nói về niềm vui “học và hành”, niềm vui đón “bạn phương xa” và…nhắc đừng buồn khi có người hiểu lầm ta"
          },
          {
            "id": "1.2",
            "hanviet": "Hữu tử viết: Kỳ vi nhân dã hiếu đễ, nhi hiếu phạm thượng giả, tiển hĩ; bất hiếu phạm thượng, nhi hiếu tác loạn giả, vị chi hữu dã. Quân tử vụ bản, bản lập nhi đạo sinh. Hiếu đễ dã giả, kỳ vi nhân chi bản dữ !",
            "nghia": "Hữu tử nói: Người biết hiếu thuận với cha mẹ, kính trọng người lớn tuổi hơn mà lại thích cãi cọ xung đột mạo phạm cấp trên là hiếm có; Người không thích mạo phạm cấp trên mà lại thích làm loạn là không có. Quân tử chuyên tâm lo cái gốc tu thân thì đạo lập thân tự nhiên phát sinh. Hiếu và đễ là cái gốc của đạo Nhân.",
            "binh": "Hữu tử tức Hữu Nhược, tự Tử Hữu người nước Lỗ, là học trò Khổng tử. Hiếu: hiếu thảo với cha mẹ, đễ : tôn trọng anh, chị, các bề trên"
          },
          {
            "id": "1.3",
            "hanviet": "Tử viết: Xảo ngôn, lệnh sắc, tiển hĩ nhân.",
            "nghia": "Khổng tử nói: Người ưa dùng lời nói khéo hay, làm vẻ mặt hiền lành, như vậy chưa hẳn là người có lòng nhân.",
            "binh": "Chữ “lệnh sắc” nghĩa là “làm ra vẻ mặt theo ý muốn”, “giả bộ”, thay vì vẻ mặt thể hiện tự nhiên tâm trạng bên trong. Theo mạch câu văn, tạm dịch là “làm vẻ mặt hiền lành”)."
          },
          {
            "id": "1.4",
            "hanviet": "Tăng tử viết: Ngô nhật tam tỉnh ngô thân. Vị nhân mưu nhi bất trung hồ? Dữ bằng hữu giao nhi bất tín hồ ? Truyền, bất tập hồ ?",
            "nghia": "Tăng tử nói: Tôi mỗi ngày xét mình ba điều. Mưu việc cho người khác thành tâm chưa ? Kết giao bạn bè đã giữ chữ tín chưa ? Kiến thức thầy truyền dạy, đã luyện tập chưa ? Phần cuối có người dịch là: Kiến thức ta sắp đi truyền dạy, đã luyện tập chưa? )",
            "binh": "Tăng tử tức Tăng Sâm, học trò giogỉ của Khổng tử, sau này viết ra sách “Đại học”."
          },
          {
            "id": "1.5",
            "hanviet": ":,,, Tử viết: Đạo thiên thừa chi quốc, kính sự nhi tín, tiết dụng nhi, ái nhân, sử dân dĩ thời.",
            "nghia": "Khổng tử nói: Lãnh đạo quốc gia có nghìn cỗ xe, phải giữ điều tín mọi việc, tiết kiệm chi tiêu, yêu mến dân, sử dụng sức dân theo thời gian thích hợp",
            "binh": "Vua quan sử dụng sức dân cần phải nghĩ tới mùa vụ, tránh sai khiến tùy tiện khiến nông dân lỡ thời vụ)."
          },
          {
            "id": "1.6",
            "hanviet": ": ,, , Tử viết: Đệ tử, nhập tắc hiếu, xuất tắc đễ, cẩn nhi tín, phiếm ái chúng nhi thân nhân, hành hữu dư lực, tắc dĩ học văn.",
            "nghia": "Khổng tử nói: Này trò, ở nhà phải hiếu thuận với cha mẹ, ra ngoài tôn kính người hơn tuổi, cẩn thận giữ điều tín, gần gũi thân cận với người nhân đức, được như vậy mà còn dư sức thì học tập tri thức nữa.",
            "binh": ""
          },
          {
            "id": "1.7",
            "hanviet": "Tử Hạ viết: Hiền hiền dịch sắc; sự phụ mẫu năng kiệt kỳ lực; sự quân, năng trí kỳ thân; dữ bằng hữu giao ngôn nhi hữu tín. Tuy viết vị học, ngô tất vị chi học hĩ. Tử",
            "nghia": "Hạ nói: Tôn trọng hiền tài hơn nữ sắc; đối đãi với cha mẹ tận lực; thờ vua liều chết quên thân, giao lưu bạn hữu nói lời tin cậy. Người như vậy tuy không đi học, ta coi là người có học.",
            "binh": "Tử Hạ là học trò của Khổng tử. Người có học (trí thức), là người có bốn phẩm chất trên, không cần bằng cấp học vị"
          },
          {
            "id": "1.8",
            "hanviet": "Tử viết: Quân tử, bất trọng tắc bất uy, học tắc bất cố. Chủ trung tín. Vô hữu bất như kỷ giả; Quá tắc vật đạn cải.",
            "nghia": "Khổng tử nói: Quân tử thiếu thái độ trang trọng thì không uy nghiêm; học cũng không củng cố được kết quả. Quân tử lấy chữ tín và trung làm chủ. Không kết bạn với người không giống mình. Có sai lầm không ngại sửa chữa.",
            "binh": "Bạn đọc thử nghĩ xem có nên “kết bạn với người không giống mình” ?"
          },
          {
            "id": "1.9",
            "hanviet": "Tăng tử viết: Thận chung truy viễn, dân đức quy hậu hĩ.",
            "nghia": "Tăng tử nói: Cẩn thận lo tang lễ cha mẹ, thường tưởng nhớ tổ tiên xưa, dân chúng cảm đức mà theo về.",
            "binh": "“truy viễn” (nhớ người xưa) rất đa nghĩa. Tưởng nhớ ông bà tổ tiên, nhớ họ hàng nơi xa, nhớ lời dạy của bậc thánh nhân thời trước… Đây là lời khuyên dành cho vua chúa, quan chức"
          },
          {
            "id": "1.10",
            "hanviet": ":,, ,,, ? Tử Cầm vấn ư Tử Cống viết: Phu tử chí ư thị bang dã; tất văn kỳ chính, cầu chi dự, ức dữ chi dự ? Tử Cống viết: Phu tử ôn, lương, cung, kiệm, nhượng dĩ đắc chi. Phu tử chi cầu chi dã, kỳ chư dị hồ nhân chi cầu chi dự ?",
            "nghia": "Tử Cầm hỏi Tử Cống rằng: Thầy Khổng đi qua các nước đều được tham dự chính sự ở các nước ấy. Là do thầy cầu xin hay do người ta yêu cầu ? Tử Cống đáp: Thầy Khổng có đức tính ôn, lương, cung, kiệm, nhường nhịn nên được như vậy. Cách cầu việc của thầy khác với lối xin việc của người khác.",
            "binh": "ôn: ôn hòa, lương: hiền dịu, cung: cung kính, kiệm: tiết kiệm, nhượng: nhường nhịn. Tử Cầm và Tử Cống có tên là Đoan Mộc Tứ đều là học trò Khổng tử)."
          },
          {
            "id": "1.11",
            "hanviet": "Tử viết: Phụ tại, quan kỳ chí; phụ một, quan kỳ hành; Tam niên vô cải ư phụ chi đạo, khả vị hiếu hĩ.",
            "nghia": "Khổng tử nói “Khi cha còn tại thế, chú ý quan sát chí hướng của cha, khi cha mất đi thì suy ngẫm về cách hành sự của cha. Nếu ba năm sau khi cha mất, người con không thay đổi lời dạy của cha thì gọi là có hiếu”.",
            "binh": ""
          },
          {
            "id": "1.12",
            "hanviet": ":,,,,, . Hữu tử viết: Lễ chi dụng, hòa vi quí. Tiên vương chi đạo, tư vi mĩ, tiểu đại do chi, hữu sở bất hành. Tri hòa nhi hòa, bất dĩ lễ tiết chi, diệc bất khả hành dã.",
            "nghia": "Hữu tử nói: Giữ lễ mà đạt được sự hài hòa là quí. Đạo trị nước của vua chúa thời trước, việc lớn nhỏ đều tuân theo sự hài hòa. Nhưng nếu chỉ biết hài hòa, không lấy chữ “lễ” để ràng buộc thì việc nào cũng không xong.",
            "binh": ""
          },
          {
            "id": "1.13",
            "hanviet": "Hữu tử viết: Tín cận ư nghĩa, ngôn khả phục dã; cung cận ư lễ, viễn sỉ nhục dã; Nhân bất thất kỳ thân, diệc khả tông dã.",
            "nghia": "Hữu tử nói: Giữ được chữ tín là gần với nghĩa, lời hứa có thể thực hiện được. Cung kính là gần với chữ Lễ, vậy tránh xa được điều sỉ nhục; Vì không mất đi sự thân cận lễ nghĩa đó nên giữ được tông pháp.",
            "binh": ""
          },
          {
            "id": "1.14",
            "hanviet": ":,,, , Quân tử thực vô cầu bão, cư vô cầu an, mẫn ư sự nhi thận ư ngôn, tựu hữu đạo nhi chính yên, khả vị hiếu học dã dĩ.",
            "nghia": "Quân tử ăn không cầu no, chỗ ở không cầu an toàn quá mức, làm việc minh mẫn mà lời nói thận trọng, là kẻ có đạo chính đáng, có thể gọi là người hiếu học.",
            "binh": "“an cư” nghĩa rất rộng: nơi ở an toàn, nghiêm mật lại thoải mái rộng rãi, cầu kỳ, ở được lâu, ít thay đổi chỗ… Quan điểm “cư vô cầu an” của quân tử trái với phương châm thông thường “an cư lạc nghiệp”"
          },
          {
            "id": "1.15",
            "hanviet": "Tử Cống viết “Bần nhi vô siểm, phú nhi vô kiêu, hà như ? ”. Tử viết “Khả dã. Vị nhược bần nhi lạc, phú nhi hiếu lễ giả dã”. Tử Cống viết “Thi vân, như thiết như tha ! Như trác như ma, kỳ tư chi vị dư ?”. Tử viết “Tứ dã ! Thỉ khả dữ ngôn “Thi” dĩ hĩ, cáo chư vãng nhi tri lai giả”. Tử Cống hỏi “Kinh Thi viết: như cắt như gọt (xương, sừng), như mài như giũa (đá ngọc) để tạo ra vật quí, là nói điều này phải chăng ?”.",
            "nghia": "Tử Cống hỏi “Nghèo khổ mà không nịnh bợ, giàu có mà không kiêu ngạo, như vậy được chưa ?”. Khổng tử đáp “Như vậy là được, nhưng không bằng nghèo mà lạc quan, giàu mà chuộng học lễ nghĩa”. Khổng tử nói “Tứ này, có thể bắt đầu bàn luận Kinh Thi được rồi, bởi vì nói cho ngươi việc quá khứ, ngươi đã hiểu việc tương lai”.",
            "binh": "“Nghèo lạc quan” nghĩa là vẫn ước mơ, phấn đấu làm giàu chứ không phải lạc quan chịu nghèo. “Như cắt như gọt, như mài như giũa” ý nói việc học hành rèn luyện phải kiên trì và khéo léo)."
          },
          {
            "id": "1.16",
            "hanviet": "Tử viết: Bất hoạn nhân chi bất kỷ tri, hoạn bất tri nhân dã.",
            "nghia": "Khổng tử nói: Không sợ người không hiểu ta, chỉ sợ (ta) không hiểu người. Hết thiên 1",
            "binh": ""
          }
        ]
      },
      {
        "id": "vi-chinh",
        "number": 2,
        "name": "Vi Chính",
        "note": "",
        "passages": [
          {
            "id": "2.1",
            "hanviet": ", Tử viết: Vi chính dĩ đức, thí như Bắc thần, cư kỳ sở nhi chúng tinh cung chi",
            "nghia": "Khổng tử nói: Cầm quyền phải có đức, giống như sao Bắc đẩu ở nơi cố định cho các ngôi sao vây quanh.",
            "binh": ""
          },
          {
            "id": "2.2",
            "hanviet": "Tử viết: Thi tam bách, nhất ngôn dĩ tế chi, viết: “Tư vô tà”.",
            "nghia": "Khổng tử nói: Kinh Thi có 300 bài, một câu tóm tắt là: không có suy nghĩ tà xấu ở trong.",
            "binh": ""
          },
          {
            "id": "2.3",
            "hanviet": "Tử viết: Đạo chi dĩ chính, tề chi dĩ hình, dân miễn nhi vô sỉ, đạo chi dĩ đức, tề chi dĩ lễ, hữu sỉ thả cách.",
            "nghia": "Khổng tử nói: Lãnh đạo dân bằng pháp luật đều dùng hình phạt, dân có thể tránh được sai phạm nhưng mất lòng tự trọng. Lãnh đạo dân bằng đức độ và lễ khiến người ta biết xấu hổ mà tự cảm hóa.",
            "binh": ""
          },
          {
            "id": "2.4",
            "hanviet": "Tử viết: Ngô thập ngũ nhi chí ư học, tam thập nhi lập, tứ thập nhi bất hoặc, ngũ thập nhi tri thiên mệnh, lục thập nhi nhĩ thuận, thất thập nhi tòng tâm sở dục bất du củ..",
            "nghia": "Khổng tử nói: Lúc mười lăm tuổi ta đã lo nỗ lực học tập. Ba mươi tuổi đã xác định được chí hướng. Bốn mươi tuổi đã hiểu được lý sự, không còn bị lầm lẫn. Năm mươi tuổi đã hiểu được mệnh trời. Sáu mươi tuổi nghe người khác nói đều thuận tai cả. Bảy mươi tuổi có thể theo lòng mong muốn mà không vượt ra ngoài giới hạn. 15 tuổi mà chưa có chí học hành thì nên chọn con đường lao động chân tay thích hợp. Chưa tới 30 tuổi mà chưa ổn định nghề nghiệp thì vẫn chưa đáng lo, đừng sốt ruột… 40 tuổi: hiểu rõ mọi sự, không nhầm lẫn nữa. 50 tuổi: nhìn rõ quãng đời còn lại, ung dung đi tới tương lai (tri thiên mệnh) 60 tuổi: hiểu và đồng tình với lời nói đúng, biết lời nói sai mà không bực bội. 70 tuổi: nhu cầu cá nhân được thực hiện, tự hài lòng mà không quá trớn, vẫn phù hợp khách quan. Khổng tử phân chia cuộc đời của một người bình thường thành 6 giai đoạn, có tính chất tương đối…Nếu người có năng lực (lại gặp hoàn cảnh thuận lợi) thì 6 cột mốc sẽ đến sớm hơn. Trái lại, người yếu kém hoặc ít may mắn thì mỗi cột mốc đến muộn hơn.",
            "binh": ""
          },
          {
            "id": "2.5",
            "hanviet": "Mạnh Ý tử vấn hiếu, Tử viết “Vô vi”, Phàn Trì ngữ, Tử cáo chi viết: “Mạnh Tôn vân hiếu ư ngã, ngã đối viết vô vi. Phàn Trì viết: “Hà vị dã ?”. Tử viết “Sinh, sự chi dĩ lễ; tử, táng chi dĩ lễ, tế chi dĩ lễ.”",
            "nghia": "Mạnh Ý tử hỏi về đạo Hiếu. Khổng tử nói “Không được làm trái (lễ)”. Phàn Trì đánh xe cho Khổng tử, Khổng tử kể lại rằng Mạnh Ý tử có hỏi ta về đạo hiếu, ta trả lời là không được vi phạm lễ. Phàn Trì hỏi lại “Như thế là ý gì ?”. Khổng tử nói “Cha mẹ lúc còn sống, ta phải theo lễ mà phụng sự. Cha mẹ chết, phải theo lễ mà an táng, theo lễ mà cúng tế”.",
            "binh": ""
          },
          {
            "id": "2.6",
            "hanviet": "Mạnh Vũ Bá vấn hiếu, Tử viết: “Phụ mẫu duy kỳ tật chi ưu” Mạnh Vũ Bá hỏi về đạo Hiếu.",
            "nghia": "Khổng tử đáp: Cha mẹ chỉ lo sợ con mắc bệnh tật mà thôi.",
            "binh": "Con phải giữ gìn thân thể (do cha mẹ sinh ra) khỏe mạnh mới là có Hiếu. Trái lại, không biết giữ sức khỏe thân thể cũng là bất Hiếu)."
          },
          {
            "id": "2.7",
            "hanviet": "Tử Du vấn hiếu, Tử viết: “Kim chi hiếu giả, thị vị năng dưỡng. Chí ư khuyển mã, giai năng hữu dưỡng, bất kính, hà dĩ biệt hồ ?”. Tử Du hỏi về đạo Hiếu.",
            "nghia": "Khổng tử đáp: Thông thường, những người có thể nuôi dưỡng được cha mẹ thì được gọi là có hiếu. Đến cả giống chó ngựa thì người ta vẫn nuôi được, nếu không kính trọng cha mẹ trong khi nuôi dưỡng, thì có khác chi nuôi chó ngựa ?!",
            "binh": ""
          },
          {
            "id": "2.8",
            "hanviet": "Tử Hạ vấn hiếu, Tử viết: Sắc nan. Hữu sự, đệ tử phục kỳ lao; hữu tửu thực, tiên sinh soạn, tằng thị dĩ vi hiếu hồ ? Tử Hạ hỏi về đạo Hiếu.",
            "nghia": "Khổng tử nói: Khó nhất là con cái có giữ được vẻ hòa vui thường xuyên lúc phụng dưỡng cha mẹ hay không. Khi có việc cực nhọc, con cái chủ động làm thay, có gì ngon mang cho cha mẹ ăn…Như thế chắc gì đã là có hiếu?",
            "binh": ""
          },
          {
            "id": "2.9",
            "hanviet": "Tử viết: Ngô dữ Hồi ngôn, chung nhật bất vi, như ngu. Thoái nhi tỉnh kỳ tư, diệc túc dĩ phát, Hồi dã bất ngu.",
            "nghia": "Khổng tử nói: Ta tham dự việc học của Nhan Hồi, suốt ngày nó không làm trái, như kẻ ngu đần. Nhưng khi ngẫm kỹ thấy Hồi phát huy thực hành đầy đủ, như thế Hồi không phải kẻ ngu.",
            "binh": "Nhan Hồi là học trò quí nhất của đức Khổng"
          },
          {
            "id": "2.10",
            "hanviet": ":, Tử viết: Thị kỳ sở dĩ, quan kỳ sở do, sát kỳ sở an, nhân yên sưu tai ? Nhân yên sưu tai ?",
            "nghia": "Khổng tử nói: Nhìn kỹ cách người làm, xét xem người làm vì cái gì, xem kỹ người làm có vui vẻ không, như thế người ta có gì mà giấu được ? Có gì mà giấu được ?",
            "binh": ""
          },
          {
            "id": "2.11",
            "hanviet": ", Tử viết: Ôn cố nhi tri tân, khả dĩ vi sư hĩ",
            "nghia": "Khổng tử nói: Ôn tập cái cũ để hiểu cái mới, có thể làm thầy được rồi.",
            "binh": ""
          },
          {
            "id": "2.12",
            "hanviet": "Tử viết: Quân tử bất khí.",
            "nghia": "Khổng tử nói: Quân tử chẳng phải như công cụ",
            "binh": "“công cụ” chỉ làm một việc. Khổng tử đòi hỏi quân tử phải làm được việc khác khi cần thiết"
          },
          {
            "id": "2.13",
            "hanviet": "Tử Cống vấn quân tử. Tử viết: Tiên hành kì ngôn nhi hậu tòng chi. Tử Cống hỏi về quân tử.",
            "nghia": "Khổng tử đáp: Trước hết, thực hành lời mình nói, sau mới nói ra.",
            "binh": "Tử Cống là học trò giỏi của Khổng tử)."
          },
          {
            "id": "2.14",
            "hanviet": "Tử viết: Quân tử chu nhi bất tỉ, tiểu nhân tỉ nhi bất chu.",
            "nghia": "Khổng tử nói: Quân tử đoàn kết rộng rãi mọi người chứ không kéo bè cánh. Tiểu nhân kéo bè kết cánh mà không đoàn kết.",
            "binh": ""
          },
          {
            "id": "2.15",
            "hanviet": "Tử viết: Học nhi bất tư tắc võng, tư nhi bất học tắc đãi.",
            "nghia": "Khổng tử nói: Học mà không suy nghĩ sẽ trở nên rối rắm, chỉ suy nghĩ mà không học sẽ rất mỏi mệt.",
            "binh": ""
          },
          {
            "id": "2.16",
            "hanviet": "Tử viết: Công hồ dị đoan, tư hại dã dĩ.",
            "nghia": "Khổng tử nói: Phá bỏ mê tín dị đoan, cái hại sẽ tiêu tan.",
            "binh": ""
          },
          {
            "id": "2.17",
            "hanviet": ": ,,,, Tử viết: Do, hối nhữ, tri chi hồ ? Tri chi vi tri chi, bất tri vi bất tri, thị tri dã.",
            "nghia": "Khổng tử nói: Này trò Do, ta dạy ngươi, có hiểu bài không ? Biết thì nói là biết, không biết thì nói không biết. Đó là biết vậy.",
            "binh": ""
          },
          {
            "id": "2.18",
            "hanviet": "Tử Trương học can lộc, Tử viết: “Đa văn khuyết nghi, thận ngôn kỳ dư, tắc quả vưu; Đa kiến khuyết đãi, thận hành kỳ dư, tắc quả hối. Ngôn quả vưu, hành quả hối, lộc tại kỳ trung hĩ ”.",
            "nghia": "Tử Trương hỏi cách học cầu bổng lộc, Khổng tử nói: Cần nghe nhiều, điều nghi ngờ giữ lại, điều gì hiểu rõ thì nói ra, như thế ít sai lầm. Phải quan sát nhiều, giữ lại điều nghi ngờ đừng làm, chỉ làm cái điều chắc chắn, như vậy ít hối hận. Nói năng ít sai, làm ít hối hận thì bổng lộc nằm trong ấy rồi.",
            "binh": ""
          },
          {
            "id": "2.19",
            "hanviet": "Lỗ Ai Công vấn viết: “Hà vi tắc dân phục?”. Khổng tử đối viết: “Cử trực thố chư uổng, tắc dân phục; Cử uổng thố chư trực, tắc dân bất phục.”.",
            "nghia": "Lỗ Ai Công (vua nước Lỗ, quê Khổng tử) hỏi: Làm sao cho dân phục ? Khổng tử đáp: Bổ nhiệm người ngay thẳng trên kẻ ác, ắt dân phục. Xếp kẻ ác trên người ngay thẳng thì dân không phục.",
            "binh": ""
          },
          {
            "id": "2.20",
            "hanviet": "Quí Khang tử vấn: “Sử dân kính, trung dĩ khuyến, như chi hà ?”. Khổng tử viết: “Lâm chi dĩ trang, tắc kính; Hiếu từ, tắc trung; Cử thiện nhi giáo bất năng, tắc khuyến”.",
            "nghia": "Quí Khang tử hỏi: Làm thế nào cho dân kính trọng, trung thành với ta và tự khuyên bảo nhau ? Khổng tử đáp: Đối xử mọi việc trang trọng, dân sẽ kính trọng; Hiếu thảo với cha mẹ, hiền từ với mọi người thì dân sẽ trung thành. Sử dụng người tốt và giáo dục người kém, dân chúng sẽ tự khuyên bảo nhau.",
            "binh": "Quí Khang tử là đại thần nước Lỗ"
          },
          {
            "id": "2.21",
            "hanviet": "Tử viết: Thư vân “Hiếu hồ duy hiếu, hữu ư huynh đệ. Thi ư hữu chính, thị diệc vi chính, hề kỳ vi vi chính ?”",
            "nghia": "Có người hỏi Khổng tử: Sao Thầy không ra làm chính trị ? Khổng tử đáp: Kinh Thượng Thư viết rằng “Ta chỉ thực hiện đạo hiếu, sống với anh em. Phổ biến đạo ra khắp chính trường, cũng là làm chính trị rồi, cứ gì phải ra làm chính trị ?”.",
            "binh": "Khổng tử tin rằng mình khuyên dạy các nhà chính trị, như vậy cũng là làm chính trị"
          },
          {
            "id": "2.22",
            "hanviet": "Tử viết: “Nhân nhi vô tín, bất tri kỳ hà dã. Đại xa vô nghê, tiểu xa vô nghê, kỳ hà dĩ hành chi tai”.",
            "nghia": "Khổng tử nói: Người không có chữ tín, chẳng biết sẽ làm được việc gì. Cỗ xe lớn không có chốt (hãm), cỗ xe nhỏ cũng không có chốt thì làm sao chạy được ?!.",
            "binh": ""
          },
          {
            "id": "2.23",
            "hanviet": "Tử Trương vấn: “Thập thế khả tri dã ?”. Tử viết: “Ân nhân ư Hạ lễ, sở tổn ích khả tri dã; Chunhân ư Ân lễ, sở tổn ích khả tri dã. Kỳ hoặc kếChugiả, tuy bách thế, khả tri dã”. Tử",
            "nghia": "Trương hỏi: Có thể biết được (về lễ) 10 đời sau không ? Khổng tử đáp: Nhà Ân dựa theo lễ nhà Hạ, bớt hay thêm có thể hiểu được. Nhà Chu theo lễ nhà Ân, thêm bớt có thể hiểu được. Tương lai nhà Chu hoặc trăm đời sau cũng có thể đoán được.",
            "binh": ""
          },
          {
            "id": "2.24",
            "hanviet": "Tử viết: “Phi kỳ quỷ nhi tế chi, siểm dã. Kiến nghĩa bất vi, vô dũng dã”. Kiến ngãi bất vi vô dũng dã Lâm nguy bất cứu mạc anh hùng",
            "nghia": "Khổng tử nói: Không phải tổ tiên của mình mà lại cúng tế, đó là siểm nịnh. Thấy việc chính nghiã mà không làm, chẳng phải kẻ dũng. Câu “Không phải tổ tiên…” e khó tính quá, thầy Khổng cố chấp chăng? Người dịch từng nghe một câu ca trên sân khấu cải lương như sau: Hết thiên 2",
            "binh": "Lời bàn: (thấy người mắc nguy hiểm không cứu thì chẳng phải anh hùng"
          }
        ]
      },
      {
        "id": "bat-dat",
        "number": 3,
        "name": "Bát Dật",
        "note": "",
        "passages": [
          {
            "id": "3.1",
            "hanviet": ": , Khổng tử vị Quí Thị: Bát Dật vũ ư đình, thị khả nhẫn, thục bất khả nhẫn dã!",
            "nghia": "Khổng tử nói về Quí Thị: Múa điệu Bát Dật ở sân đình, sự ấy chấp nhận được thì việc gì chẳng dám làm ! Khổng tử sống vào thời Xuân thu, thời này có hai bậc vua. Thiên tử (hoàng đế nhà Chu) là vua lớn nhất bao trùm Trung Hoa, mỗi nước chư hầu có một vua (hầu), dưới vua chư hầu là quan đại phu, dưới quan đại phu là quan sĩ, dưới nữa là gia thần. Kinh Lễ của nhà Chu qui định mọi thứ quyền lợi, nghi thức kể cả trang phục, lối giải trí văn nghệ…gắn liền với cấp bậc. Khổng tử cho rằng nếu vi phạm một lễ, dù nhỏ (như nhảy múa) thì sau có thể vi phạm lớn hơn, thậm chí làm phản. Ngài phê phán Quí Thị lúc này mới giữ chức đại phu nước Lỗ mà dám cho nhảy múa theo nghi thức thiên tử nhà Chu !… Thực tế giai đoạn này (Đông Chu từ 778 đến 256 trCN) đã nảy sinh một bậc vua thứ 2 chen vào giữa đế và hầu, gọi là vương (hoặc bá). Bá vương chỉ muốn chinh phục các chư hầu mà ngoi lên ngôi đế… Do vương chưa được danh chính ngôn thuận nên chưa có lễ qui định. Khổng tử chỉ thừa nhận có hai bậc là đế và hầu. Nhiều thời phong kiến về sau, các vua chúa chính thức đặt ra tước vương để làm yên lòng công thần và hoàng tộc nhưng không phong đất.)",
            "binh": "Theo qui định lễ nhạc nhà Chu, hoàng đế được dùng 8 đội bát dật, mỗi đội 8 người (8 x 8 = 64 vũ công), vua chư hầu được dùng 6 đội, quan đại phu dùng 4 đội, quan sĩ dùng 2 đội. Họ Quí là đại phu mà dám dùng 8 đội, vậy là khi quân phạm thượng."
          },
          {
            "id": "3.2",
            "hanviet": ":„,‟, Tam gia giả dĩ Ung triệt. Tử viết: Tướng duy tịch công, thiên tử mục mục, hề thủ ư tam gia chi đường ?",
            "nghia": "Ba đại gia tấu bài nhạc “Ung” nghe sau khi cúng lễ. Khổng tử nói: “Trợ tế là vua chư hầu hoặc thiên tử chủ tế uy nghiêm sâu xa, bây giờ ba nhà làm thế là có ý gì ?”",
            "binh": "Ba vị đại phu nước Lỗ là Trọng Tôn, Thúc Tôn, Quí Tôn lén dùng lễ chế thiên tử, tế tự xong còn ca tụng nhạc “Ung”. Khổng tử cảnh báo ba người ấy dám chơi bản nhạc “Ung” tức là phạm thượng, có mầm mống phản nghịch"
          },
          {
            "id": "3.3",
            "hanviet": "Tử viết: “Nhân nhi bất nhân, như lễ hà ? Nhân nhi bất nhân, như nhạc hà ?”",
            "nghia": "Khổng tử nói: Một người bất nhân, coi chữ lễ có ra gì ? Một người không có lòng nhân sao có thể tấu nhạc? Quan điểm mỹ học của Khổng tử bền vững muôn đời và rất hiện đại. Ngày nay chúng ta nghĩ đến phần lớn âm nhạc trẻ dễ dãi đầu thế kỷ 21, game onlines. v.v…thật nhố nhăng, chỉ là giải trí giết thời gian. Lại nghĩ đến mối quan hệ biện chứng giữa nội dung và hình thức, nếu hình thức nhố nhăng (nhạc, game) có thể gây tác động xấu, dần dần tác hại vào bản chất của “nhân”)",
            "binh": "nhân là cốt lõi chi phối tất cả, lễ và nhạc là hình thức bên ngoài, thiếu “nhân” thì “lễ và nhạc” chỉ là phô trương giả dối, sẽ không có tác dụng gì tốt. Như vậy lễ-nhạc- nhân là một thể hữu cơ thống nhất."
          },
          {
            "id": "3.4",
            "hanviet": "Lâm Phóng vấn lễ chi bản. Tử viết: “Đại tai vấn ! Lễ, dự kỳ xa, ninh kiệm; Tang, dự kỳ dị dã, ninh thích.”",
            "nghia": "Lâm Phóng (người nước Lỗ) hỏi về bản chất của lễ. Khổng tử nói: Vấn đề này rất quan trọng ! Lễ nói chung mà đi kèm với xa hoa, không bằng tiết kiệm. Đám tang mà cầu kỳ phô trương, chẳng bằng đau buồn trong lòng.",
            "binh": ""
          },
          {
            "id": "3.5",
            "hanviet": "Tử viết: Di Địch chi hữu quân, bất như chư Hạ chi vong dã.",
            "nghia": "Khổng tử nói: “Các dân tộc mọi rợ còn có vua, chẳng như các dân tộc Hoa Hạ cứ như thể không có vua vậy”.",
            "binh": "thời Chu loạn lạc, vua chư hầu lấn át quyền thiên tử, đại phu lấn lướt vua chư hầu, chẳng có kỷ cương nữa… Khổng tử buồn bã mà than thở. Khổng tử sao nỡ gọi tất cả các dân tộc láng giềng là “mọi rợ”. Thôi, chúng ta hãy tha thứ cho ông (chữ thứ của Khổng tử) bị hạn chế bởi thời đại. Hồi ấy ông chưa từng biết nước Văn Lang của vua Hùng đâu nhỉ)."
          },
          {
            "id": "3.6",
            "hanviet": "Quí Thị lữ ư Thái Sơn, Tử vị Nhiễm Hữu viết: “Nhữ phất năng cứu dự? Đối viết “Bất năng”. Tử viết: “Ô hô ! Tằng vị Thái Sơn bất như Lâm Phóng hồ ?”.",
            "nghia": "Quí Thị đi lễ núi Thái Sơn, Khổng tử nói với Nhiễm Hữu rằng: “Ngươi không can thiệp việc đó ư?”. Nhiễm Hữu đáp: “Không thể được!”. Không tử nói: “Than ôi, đã như thần núi Thái Sơn lại không bằng Lâm Phóng ư?”.",
            "binh": "Núi Thái Sơn ở nước Lỗ (tỉnh Sơn Đông ngày nay) rất linh thiêng, thiên tử ủy nhiệm vua Lỗ đi cúng tế, vậy mà Quí Thị đại phu nước Lỗ dám vượt lễ đi cúng. Khổng tử trách thần núi Thái Sơn vẫn nhận lễ của Quí Thị tức là không bằng Lâm Phóng một người dân Lỗ hiểu biết lễ (xem lại câu 3.4 ở trên)."
          },
          {
            "id": "3.7",
            "hanviet": "Tử viết: “Quân tử vô sở tranh, tất dã xạ hồ ! Ấp nhượng nhi thăng, hạ nhi ẩm, kỳ tranh dã quân tử”.",
            "nghia": "Khổng tử nói: “Quân tử không cần tranh đua, có thể tranh đua khi bắn cung thôi. Vái chào khi bước lên bắn, xong ngồi uống rượu nâng chén mừng nhau – đó mới chính là lối tranh đua của quân tử”.",
            "binh": "Tranh đua cũng như thi bắn cung, cần trổ tài hết sức, nhưng vẫn phải giữ lễ với nhau. Bắn cung là môn thi không đối kháng, còn dễ thực hiện. Như môn thi đối kháng thì quả là khó giữ chữ Lễ, vậy cần phải có luật chơi và trọng tài rắn"
          },
          {
            "id": "3.8",
            "hanviet": "Tử Hạ vấn viết: “Xảo tiếu thiến hề, mỹ mục phán hề. Tố dĩ vi huyến hề. Hà vi dã ?”. Tử viết: “Hội sự hậu tố”. Tử Hạ viết: “Lễ hậu hồ?”. Tử viết “Khởi dư giả thương dã, thỉ khả dữ ngôn thi dĩ hĩ ”. Tử",
            "nghia": "Hạ hỏi: “Cười khéo đẹp làm sao, đôi mắt thật có duyên. Nền trắng vẽ bức tranh rực rỡ”. Kinh Thi nói thế nghĩa là gì ? Khổng tử đáp: Phải có nền trắng đẹp trước, sau mới vẽ tranh. Tử Hạ tiếp: Vậy lễ nhạc cũng đến sau “nhân”ư ? Khổng tử nói: Như thế là trò hiểu biết đấy, ngươi có thể cùng ta thảo luận Kinh Thi được rồi.",
            "binh": "Nhân đức và lễ là nền tảng của nghệ thuật, kẻ bất nhân không thể làm nghệ sĩ tử tế được"
          },
          {
            "id": "3.9",
            "hanviet": "Tử viết: Hạ lễ ngô năng ngôn chi, Kỷ bất túc trưng dã; Ân lễ ngô năng ngôn chi, Tống bất túc trưng dã, Văn hiến bất túc cố dã. Túc, tắc ngô năng trưng chi hĩ.",
            "nghia": "Khổng tử nói: Lễ nghĩa đời Hạ ta có thể nói ra được, nhưng nước Kỉ (cũng dòng dõi nhà Hạ) do thiếu sách vở nên ta không khảo chứng thực tình được. Lễ triều Ân ta cũng có thể nói ra được, nhưng nước Tống do thiếu tài liệu nên ta không khảo chứng tỏ tường được. Tất cả đều do thư tịch sách vở không đủ. Nếu có đủ, ắt ta đã có thể khảo cứu tường tận hết rồi.",
            "binh": "Lễ nghĩa cũng cần ghi thành văn bản qui định. “Nói có sách, mách có chứng”"
          },
          {
            "id": "3.10",
            "hanviet": "Tử viết: Đế tự ký quán nhi vãng giả, ngô bất dục quan chi hĩ.",
            "nghia": "Khổng tử nói: Lễ tế đế ư, ta xem xong đợt chúc rượu thứ nhất thì đã không muốn xem rồi.",
            "binh": "Khổng tử xem lễ tế Đế của vua chư hầu nước Lỗ, thấy họ lạm quyền thiên tử nên phê phán"
          },
          {
            "id": "3.11",
            "hanviet": ",,! Hoặc vấn Đế chi thuyết, Tử viết: Bất tri dã. Tri kỳ thuyết giả chi ư thiên hạ dã, kỳ như kì chư tư hồ ! Chỉ kỳ chưởng.",
            "nghia": "Có người hỏi về chuyện tế Đế (hoàng đế cúng tế tổ tiên và trời), Khổng tử đáp: “Ta không biết. Người biết việc ấy thì cai trị thiên hạ cũng dễ như đưa vật vào chỗ này”, Khổng tử chỉ vào bàn tay.",
            "binh": ""
          },
          {
            "id": "3.12",
            "hanviet": "Tế như tại, tế thần như thần tại. Tử viết: Ngô bất dự tế, như bất tế.",
            "nghia": "Tế lễ cha mẹ phải coi như người đó ở trước mặt mình, tế lễ chư thần cũng coi như thần linh ở trước mặt mình. Khổng tử nói: Nếu ta không tham dự lễ tế (có người thay mặt ta tế lễ đi nữa) thì cũng như không tế lễ mà thôi.",
            "binh": ""
          },
          {
            "id": "3.13",
            "hanviet": "Vương Tôn Giả vấn viết: “Dự kỳ mị ư Áo, ninh mị ư Táo, hà vị dã?”. Tử viết: “Bất nhiên. Hoạch tội ư thiên, vô sở đảo dã.” Vương Tôn",
            "nghia": "Giả hỏi: “Nịnh thần Áo, chẳng bằng nịnh thần Táo” nghĩa là sao ? Khổng tử đáp: Không đúng. Định tội do Trời, còn nơi nào để cầu xin!",
            "binh": "Thần Áo thờ ở nhà trên, thần Táo thờ ở dưới bếp. Thần Táo lo việc ăn no mặc ấm nên người dân nghèo coi trọng hơn thần Áo… Khổng tử bảo không nên phân biệt đối xử các thần, Trời cao sẽ phán xét tất cả)."
          },
          {
            "id": "3.14",
            "hanviet": "Tử viết: Chu giám ư nhị đại, úc úc hồ văn tai, ngô tòngChu.",
            "nghia": "Khổng tử nói: Lễ nhà Chu theo hai triều đại (Hạ, Ân), phong phú rực rỡ thay, ta theo nhà Chu.",
            "binh": ""
          },
          {
            "id": "3.15",
            "hanviet": "Tử nhập thái miếu, mỗi sự vấn. Hoặc viết: “Thục vị Trâu nhân chi Tử tri lễ hồ? Nhập thái miếu, mỗi sự vấn”. Tử văn chi, viết: “Thị lễ dã”.",
            "nghia": "Khổng tử đi vào thái miếu (nước Lỗ), gặp mỗi việc đều hỏi kỹ. Có người nói: “Ai bảo con trai ấp Trâu (chỉ Khổng tử) biết lễ ? Anh ta đến thái miếu mà cái gì cũng không biết, phải hỏi”. Khổng tử nói: “Thế là biết lễ vậy”.",
            "binh": ""
          },
          {
            "id": "3.16",
            "hanviet": "Tử viết: “Xạ bất chủ bì, vị lực bất đồng khoa. Cổ chi đạo dã”.",
            "nghia": "Khổng tử nói: Thi bắn cung không nhất thiết phải xuyên qua tấm da (làm bia), vì sức lực không giống nhau. Đó là qui tắc bắn cung thời cổ.",
            "binh": "Bắn cung miễn là toàn tâm toàn ý bắn vào đích, xuyên qua hay không là tùy theo sức người)."
          },
          {
            "id": "3.17",
            "hanviet": "Tử Cống dục khứ cáo sóc chi hí dương. Tử viết: “Tứ dã ! Nhĩ ái kỳ dương, ngã ái kỳ lễ”.",
            "nghia": "Tử Cống làm lễ sóc muốn bỏ tục lệ cúng dê. Khổng tử nói “anh Tứ này ! Ngươi yêu dê của ngươi, ta tiếc lễ của ta”.",
            "binh": "lễ Sóc là ngày mồng một đầu tháng, theo Lỗ lễ qui định cúng một con dê. Vua Lỗ bỏ không cúng dê nhưng vẫn bắt dân nộp dê. Tử Cống bèn đòi bỏ luôn tục cúng dê. Khổng tử bất đồng, kiên trì giữ lễ, nên nói rằng cúng con dê là nhắc ta giữ lễ)."
          },
          {
            "id": "3.18",
            "hanviet": "Tử viết: Sự quân tận lễ, nhân dĩ vi siểm dã.",
            "nghia": "Khổng tử nói: Phụng sự vua cho đúng lễ, vậy mà có người bảo ta siểm nịnh.",
            "binh": ""
          },
          {
            "id": "3.19",
            "hanviet": "Định Công vấn: “Quân sử thần, thần sự quân, như chi hà? Khổng tử đối viết: Quân sử thần dĩ lễ, thần sự quân dĩ trung. Vua Lỗ Định",
            "nghia": "Công hỏi: Vua sai khiển bề tôi, bề tôi phụng sự vua, phải như thế nào là tốt ? Khổng tử thưa: Vua sử dụng bề tôi theo lễ, bề tôi thờ vua phải trung thành.",
            "binh": ""
          },
          {
            "id": "3.20",
            "hanviet": "Tử viết: “Quan thư”, lạc nhi bất dâm, ai nhi bất thương.",
            "nghia": "Khổng tử nói: Bài “Quan thư” vui mà không quá đà, buồn mà không bi thương.",
            "binh": "Bài Quan thư mở đầu tập Kinh Thi, có chương “Yểu điệu thục nữ. Quân tử hảo cầu. Cầu chi bất đắc, Triển chuyển phản tắc”: dịch nghĩa “Cô gái xinh tươi kia, Có chàng tài giỏi muốn gặp cô, không gặp được, năm canh trằn trọc trở mình”. Bài thơ vui vẻ mức độ vừa phải. Quân tử mong nhớ buồn bâng khuâng, chưa đến nỗi sầu muộn quá mức. Khổng tử khen là vui và buồn hài hòa, không quá độ)."
          },
          {
            "id": "3.21",
            "hanviet": "Ai Công vấn xã ư Tể Ngã, Tể Ngã đối viết: Hạ hậu thị dĩ tùng, Ân nhân dĩ bách,Chunhân dĩ lật, viết: Sử dân chiến lật”. Tử văn chi, viết: “Thành sự bất thuyết, toại sự bất gián, ký vãng bất cữu”.",
            "nghia": "Lỗ Ai Công hỏi Tể Ngã về việc lập đàn xã, Tể Ngã trả lời: Đời Hạ dùng cây tùng, đời Ân dùng cây bách, đời Chu dùng cây lật là có ý khiến cho dân nhìn thấy cây lật mà sợ hãi”. Khổng tử nghe biết, trách Tể Ngã rằng “Việc đã thành, không nên nói lại. Việc nhất định xảy ra, không nên can ngăn. Việc đã qua, không nên trách”. Xã () là thần Đất và tắc () là thần Lúa. Nhà vua mỗi năm có nhiệm vụ thay mặt dân chúng tế lễ ở bàn thờ xã tắc. Nếu là một giang sơn thì ắt phải có xã tắc vậy).",
            "binh": "Xã là nơi thờ thần đất, triều đại nào thích cây gì trồng cây đó hoặc tùy theo chất đất. Cái tên cây không có ý nghĩa gì. Tể Ngã thuyết minh về 3 loại cây là có ý xui vua dựng đàn xã sao cho dân sợ. Khổng tử không hài lòng, có ý trách Tể Ngã."
          },
          {
            "id": "3.22",
            "hanviet": "Tử viết: Quản Trọng chi khí tiểu tai ! Hoặc viết: Quản Trọng kiệm hồ ? Viết: Quản thị hữu tam quy, quan sự bất nhiếp, yên đắc kiệm ? Nhiên tắc Quản Trọng tri lễ hồ ?. Viết: Bang quân thụ tắc môn, Quản thị diệc thụ tắc môn; Bang quân vi lưỡng quân chi hảo hữu phản điếm, Quản thị diệc hữu phản điếm. Quản thị nhi tri lễ, thục bất tri lễ ?",
            "nghia": "Khổng tử nói: Quản Trọng bụng dạ hẹp hòi. Có người hỏi: Hay là Quản Trọng tiết kiệm ? Khổng tử nói: Quản Trọng qui ra ba lỗi, thu nhiều thuế má của dân thị thành, trong nhà nuôi nhiều đầy tớ, mỗi người chỉ làm một việc không kiêm nhiệm, thế sao gọi là tiết kiệm ? Người kia hỏi tiếp: Quản Trọng có biết lễ không ? Khổng tử đáp: Vua chư hầu dựng bình phong trước nhà, Quản Trọng cũng dựng bình phong trước nhà. Vua chư hầu mở tiệc tiếp vua khác được dùng giá úp chén, Quản Trọng đãi khách cũng dùng giá úp chén. Ôi Quản Trọng mà biết lễ, thì còn ai không biết lễ !",
            "binh": ""
          },
          {
            "id": "3.23",
            "hanviet": "Tử ngữ Lỗ đại sư nhạc, viết: Nhạc kỳ khả tri dã: thỉ tác, hợp như dã; Tòng chi, đồn như dã, kiểu như dã, dĩ thành”.",
            "nghia": "Khổng tử nói với quan nhạc nước Lỗ: Ta cũng có biết về nhạc: khởi đầu phải tương hợp, (nhạc khớp lời ca), tiếp tục khai triển quấn quít hài hòa, rõ ràng trong sáng, liên tục, như thế là thành công.",
            "binh": ""
          },
          {
            "id": "3.24",
            "hanviet": "Nghi phong nhân thỉnh kiến, viết: “Quân tử chi chí ư tư dã, ngô vị thưởng bất đắc kiến dã”. Tòng giả kiến chi. Xuất viết: “Nhị tam tử hà hoạn ư tang hồ ? Thiên hạ chi vô đạo dã cửu hĩ, thiên tương dĩ phu tử vi mộc đạc”.",
            "nghia": "Quan trấn thủ ấp Nghi xin gặp (Khổng tử), nói: “Quân tử các nơi đến đây, chưa có ai tôi chưa được tiếp kiến”. Học trò dẫn vào gặp Khổng tử. Khi trở ra, vị quan đó nói với học trò của thầy Khổng: “Các vị đừng lo buồn việc Khổng tử mất chức. Thiên hạ vô đạo đã lâu, trời sai Khổng tử làm cái mõ cây (gõ mõ cảnh báo người đời).",
            "binh": "Khổng tử từ bỏ chức tướng quốc nước Lỗ, đi chu du sang nước Vệ, ở đây gặp quan ấp tên Nghi. Ông Nghi sùng bái, đánh giá cao vai trò thầy Khổng còn hơn mọi chức quan"
          },
          {
            "id": "3.25",
            "hanviet": "Tử vị Thiều: “Tận mỹ hĩ, hựu tận thiện dã;” vị Vũ: “Tận mỹ hĩ, vị tận thiện dã”.",
            "nghia": "Khổng tử nói về bản nhạc Thiều: “Đẹp tuyệt vời, nội dung lại hay, tốt”, và nhận xét về bản nhạc Vũ: “Rất hay, nhưng nội dung kém hơn một chút”.",
            "binh": "Thiều là khúc nhạc thời vua Thuấn, Vũ là khúc nhạc thời Chu Vũ Vương"
          },
          {
            "id": "3.26",
            "hanviet": "Tử viết: Cư thượng bất khoan, vi lễ bất kính, lâm tang bất ai, ngô hà dĩ quan chi tai?”.",
            "nghia": "Khổng tử nói: Cấp trên thiếu khoan dung kẻ dưới, hành lễ thiếu kính cẩn, gặp việc tang không đau buồn, làm sao ta có thể chịu họ được ? Hết thiên 3",
            "binh": ""
          }
        ]
      },
      {
        "id": "ly-nhan",
        "number": 4,
        "name": "Lý Nhân",
        "note": "",
        "passages": [
          {
            "id": "4.1",
            "hanviet": "Tử viết: “Lý nhân vi mỹ, trạch bất xứ nhân, yên đắc tri ?”",
            "nghia": "Khổng tử viết: Ở nơi có nhân đức là tốt đẹp, sống nơi thiếu nhân đức sao gọi là hiểu biết ?",
            "binh": ""
          },
          {
            "id": "4.2",
            "hanviet": "Tử viết: Bất nhân giả bất khả dĩ cửu xứ chung, bất khả dĩ trường xứ lạc. Nhân giả an nhân, tri giả lợi nhân.",
            "nghia": "Khổng tử nói: Kẻ bất nhân không ở lâu cảnh cùng khốn được, cũng không thể ở lâu nơi sung sướng được. Người có nhân yên tâm sống làm điều nhân, người hiểu biết làm lợi cho đức nhân.",
            "binh": ""
          },
          {
            "id": "4.3",
            "hanviet": "Tử viết: Duy nhân giả năng hiếu nhân, năng ố nhân.",
            "nghia": "Khổng tử nói: Chỉ có người nhân đức mới biết yêu và ghét rõ ràng.",
            "binh": ""
          },
          {
            "id": "4.4",
            "hanviet": "Tử viết: Cẩu chí ư nhân hĩ, vô ố dã.",
            "nghia": "Khổng tử viết: Nếu quyết chí thực hành đức nhân thì không làm điều ác.",
            "binh": ""
          },
          {
            "id": "4.5",
            "hanviet": "Tử viết: Phú dữ quí, thị nhân chi sở dục dã. Bất dĩ kỳ đạo đắc chi, bất xứ dã; Bần dữ tiện, thị nhân chi sở ố dã; bất dĩ kỳ đạo đắc chi, bất khứ dã. Quân tử khứ nhân, ố hồ thành danh ? Quân tử vô chung thực chi gian vi nhân, tạo thứ tất ư thị, điên phái tất ư thị.",
            "nghia": "Khổng tử viết: Giàu và sang thì ai cũng thích. Không dùng đạo nhân mà đạt được thì không nên chọn làm. Nghèo và thấp hèn, chẳng ai thích. Không dùng đạo nhân để thoát nghèo hèn thì không làm. Người quân tử mà bỏ mất điều nhân, sao có thể gọi là quân tử ? Quân tử không làm trái điều nhân dù chỉ trong khoảng cách một bữa ăn (*), dù vội vã cấp thiết cũng không như vậy, dù phải khốn cùng phiêu dạt cũng không xa rời đạo nhân.",
            "binh": "* “Trong khoảng cách một bữa ăn”: tức là trong nửa ngày quân tử cũng không quên làm điều nhân đức)."
          },
          {
            "id": "4.6",
            "hanviet": "Tử viết: Ngã vị kiến hảo nhân giả, ố bất nhân giả. Hiếu nhân giả vô dĩ thượng chi; Ố bất nhân giả, kỳ vi nhân hĩ, bất sử bất nhân giả gia hồ kỳ thân. Hữu năng nhất nhật dụng kỳ lực ư nhân hĩ hồ ? Ngã vị kiến lực bất túc giả. Cái hữu chi hĩ, ngã vị chi kiến dã.",
            "nghia": "Khổng tử nói: Ta chưa thấy người nào thích điều nhân và ghét kẻ bất nhân. Người có nhân không đặt cái gì trên chữ nhân. Người ghét điều ác, thực tế biết làm điều nhân, không chịu thân thích với kẻ bất nhân. Có ai dốc sức làm điều nhân suốt ngày chưa ? Ta chưa thấy người đạt điều nhân mà không phải dốc sức rèn luyện. Có người không cần dốc sức cũng làm được điều nhân, nhưng ta chưa thấy bao giờ.",
            "binh": ""
          },
          {
            "id": "4.7",
            "hanviet": "Tử viết: Nhân chi quá dã, các ư kỳ đảng.Quan quá, tư tri nhân hĩ.",
            "nghia": "Khổng tử nói: Người mắc sai lầm, còn tùy theo loại người nào. Nhìn sai lầm của họ, ta biết có phải người đức nhân không.",
            "binh": "Có nhiều kiểu sai lầm, quân tử cũng có thể mắc sai lầm nhưng vẫn khác với sai lầm của kẻ tiểu nhân)."
          },
          {
            "id": "4.8",
            "hanviet": "Tử viết: Triêu văn đạo, tịch tử khả hĩ.",
            "nghia": "Khổng tử nói: Buổi sáng nghe được đạo, chiều tối chết cũng cam lòng.",
            "binh": ""
          },
          {
            "id": "4.9",
            "hanviet": "Tử viết: Sĩ chí ư đạo nhi sỉ ố y ố thực giả, vị túc dữ nghị dã.",
            "nghia": "Khổng tử nói: Kẻ sĩ lập chí vì đạo nhân mà cảm thấy xấu hổ vì ăn đói mặc rách, chưa thể cùng bàn luận (về đạo nhân) được.",
            "binh": ""
          },
          {
            "id": "4.10",
            "hanviet": "Tử viết: Quân tử chi ư thiên hạ dã, vô đích dã, vô mạc dã, nghĩa chi dự bỉ.",
            "nghia": "Khổng tử nói: Quân tử sống trong thiên hạ, không kể to nhỏ, sang hèn, đều phải ngẫm xem có hợp đạo nghĩa không.",
            "binh": ""
          },
          {
            "id": "4.11",
            "hanviet": ", Tử viết: quân tử hoài đức, tiểu nhân hoài thổ; Quân tử hoài hình, tiểu nhân hoài huệ Quân tử coi trọng hình thức phép tắc, tiểu nhân chỉ mong ân huệ.",
            "nghia": "Khổng tử nói: Quân tử nghĩ đến đạo đức, tiểu nhân nghĩ đến đất đai.",
            "binh": ""
          },
          {
            "id": "4.12",
            "hanviet": "Tử viết: Phóng ư lợi nhi hành, đa oán Khổng tử viết:",
            "nghia": "Kẻ chỉ biết tính đến lợi ích của mình, sẽ chuốc lấy nhiều oán hận.",
            "binh": ""
          },
          {
            "id": "4.13",
            "hanviet": "Tử viết: Năng dĩ lễ nhượng vi quốc hồ, hà hữu ? Bất năng dĩ lễ nhượng vi quốc, như lễ hà ?",
            "nghia": "Khổng tử nói: Dùng lễ nhượng để trị quốc, được không ? Nếu không dùng lễ nhượng để trị quốc được thì lễ còn có tác dụng gì nữa.",
            "binh": "“lễ nhượng trị quốc” là lãnh đạo mềm dẻo, nhường nhịn lẫn nhau. Chắc hẳn điều này lạc hậu so với thời đại “pháp quyền”. Hình như chế độ “pháp quyền xã hội chủ nghĩa” ưa dùng “lễ nhượng” kiểu Khổng tử"
          },
          {
            "id": "4.14",
            "hanviet": ". Tử viết: Bất hoạn vô vị, hoạn sở dĩ lập; Bất hoạn mạc kỷ tri, cầu vi khả tri dã.",
            "nghia": "Khổng tử nói: Chẳng lo buồn vì không có địa vị, chỉ lo không có đức tài xứng với địa vị ấy. Không cần lo người khác không hiểu mình, nên lo làm sao có năng lực khiến cho người khác biết mình.",
            "binh": ""
          },
          {
            "id": "4.15",
            "hanviet": "Tử viết: Sâm hồ, ngô đạo nhất dĩ quán chi.”. Tăng tử viết: “Duy”. Tử xuất, môn nhân vấn viết: “Hà vị dã ?”. Tăng tử viết: “Phu tử chi đạo, trung thứ nhi dĩ hĩ”.",
            "nghia": "Khổng tử nói: Trò Sâm à, đạo của ta nhất quán một điểm thôi. Tăng tử: Đúng ạ. Khổng tử đi ra, một người khác hỏi: “Thầy nói như vậy có ý gì?”. Tăng tử nói: Đạo của thầy chỉ có một chữ “trung thứ” thôi. [ Chú thích: Tăng tử là Tăng Sâm. Trung nghĩa là trung thành, tận tâm theo đạo nhân. Mình làm được rồi thì muốn người khác cũng làm được (kỷ dục đạt nhi đạt nhân). Thứ là: Cái gì mình không muốn thì cũng đừng làm cho người khác (kỷ sở bất dục, vật thi ư nhân) ]",
            "binh": ""
          },
          {
            "id": "4.16",
            "hanviet": "Tử viết: Quân tử dụ ư nghĩa, tiểu nhân dụ ư lợi.",
            "nghia": "Khổng tử nói: Người quân tử chỉ biết điều nghĩa, kẻ tiểu nhân chỉ biết điều lợi.",
            "binh": ""
          },
          {
            "id": "4.17",
            "hanviet": "Tử viết: Kiến hiền tư tế yên, kiến bất hiền nhi nội tự tỉnh dã.",
            "nghia": "Khổng tử nói: Nhìn thấy người hiền thì noi theo, thấy kẻ không hiền thì xem xét lại mình.",
            "binh": ""
          },
          {
            "id": "4.18",
            "hanviet": ",,, Tử viết: Sự phụ mẫu kỷ gián, kiến chí bất tòng, hựu kính bất vi, lao nhi bất oán.",
            "nghia": "Khổng tử nói: Phụng dưỡng cha mẹ phải can ngăn khuyên giải, nếu can không được, vẫn phải tôn kính không làm trái, đừng để cha mẹ mệt vì oán giận.",
            "binh": ""
          },
          {
            "id": "4.19",
            "hanviet": "Tử viết: Phụ mẫu tại, bất viễn du, du tất hữu phương",
            "nghia": "Khổng tử: Cha mẹ còn sống, không được đi xa, nếu đi phải nói rõ nơi cụ thể.",
            "binh": "Thời đại ngày nay thực khó làm theo lời Khổng tử, chỉ cần nhớ phần chót câu nói"
          },
          {
            "id": "4.20",
            "hanviet": "Tử viết: Tam niên vô cải ư phụ chi đạo, khả vi hiếu hĩ.",
            "nghia": "Khổng tử: Ba năm không thay đổi cách đối xử với cha mẹ, có thể gọi là con hiếu.",
            "binh": ""
          },
          {
            "id": "4.21",
            "hanviet": "Tử viết: Phụ mẫu chi niên, bất khả bất tri dã. Nhất tắc dĩ hỉ, nhất tắc dĩ cụ.",
            "nghia": "Khổng tử nói: Tuổi tác của cha mẹ, con không thể không biết. Biết là để vui mừng hoặc là lo sợ. (Lời bàn: Vui mừng cha mẹ thượng thọ, lo sợ cha mẹ già yếu bệnh tật và cần lo hậu sự)",
            "binh": ""
          },
          {
            "id": "4.22",
            "hanviet": "Tử viết: Cổ giả ngôn chi bất xuất, sỉ cung chi bất đãi dã.",
            "nghia": "Khổng tử: Người xưa thận trọng lời nói ra, bởi sợ xấu hổ không thực hiện được lời nói.",
            "binh": ""
          },
          {
            "id": "4.23",
            "hanviet": "Tử viết: Dĩ ước thất chi giả tiển hĩ.",
            "nghia": "Khổng tử: Người biết tự kiềm chế mình mà phạm sai lầm là rất ít.",
            "binh": ""
          },
          {
            "id": "4.24",
            "hanviet": "Tử viết: Quân tử dục nột ư ngôn nhi mẫn ư hành.",
            "nghia": "Khổng tử: Quân tử nói năng chậm rãi, thực hành thì nhanh nhẹn.",
            "binh": ""
          },
          {
            "id": "4.25",
            "hanviet": "Tử viết: Đức bất cô, tất hữu lân.",
            "nghia": "Khổng tử: Người đạo đức không bao giờ bị cô lập, ắt có bạn hữu gần gũi.",
            "binh": ""
          },
          {
            "id": "4.26",
            "hanviet": "Tử Du viết: Sự quân sác, tư nhục hĩ; Bằng hữu sác, tư sơ hĩ. Tử",
            "nghia": "Du nói: Thờ vua mà luôn kể sai lầm của vua, dễ chuốc lấy phiền toái lăng nhục; kết giao bạn bè mà luôn góp ý sai lầm của bạn, dễ bị mọi người xa lánh. Hết thiên 4",
            "binh": ""
          }
        ]
      },
      {
        "id": "cong-da-trang",
        "number": 5,
        "name": "Công Dã Tràng",
        "note": "",
        "passages": [
          {
            "id": "5.1",
            "hanviet": "Tử vị Công Dã Tràng, “Khả thế dã, tuy tại luy tiết chi trung, phi kì tội dã”. Dĩ kỳ tử thế chi.",
            "nghia": "Khổng tử nói về Công Dã Tràng:”Có thể gả con cho Tràng, tuy nó bị ngồi tù nhưng tội này không do nó gây ra”. Sau đó Khổng tử gả con gái cho Tràng.",
            "binh": ""
          },
          {
            "id": "5.2",
            "hanviet": "Tử vị Nam Dung, bang hữu đạo, bất phế; Bang vô đạo, miễn ư hình lục. Dĩ kỳ huynh chi tử thế chi.",
            "nghia": "Khổng tử nói về Nam Dung:”Nước có đạo, không bị phế truất; Nước vô đạo, không bị hình phạt”. Sau đó Khổng tử đem gả cháu gái cho Dung.",
            "binh": "Nam Dung thờ vua theo đạo Trung dung, khi nước nhà thịnh vượng được khen ngợi, khi nước nhà suy đốn cũng không bị chê trách, trừng phạt"
          },
          {
            "id": "5.3",
            "hanviet": "Tử vị Tử Tiện, quân tử tai nhược nhân, Lỗ vô quân tử giả, tư yên thủ tư",
            "nghia": "Khổng tử nói về Tử Tiện: Người này quả đúng là quân tử. Nếu nói nước Lỗ không có người quân tử, thì Tử Tiện học từ đâu được những phẩm chất như vậy chứ.",
            "binh": ""
          },
          {
            "id": "5.4",
            "hanviet": "Tử Cống vấn viết: Tứ dã hà như ? Tử viết: Nhữ, khí dã. Viết: Hà khí dã ? Viết: Hồ liễn dã. Tử Khổng tử: Như cái hồ liễn",
            "nghia": "Cống hỏi: Tứ là người thế nào ạ? Khổng tử đáp: Ngươi giống như một công cụ. Tử Cống hỏi : Như công cụ nào ? Ý nói Tử Cống (tên là Tứ) là người tài nhưng chỉ giỏi một loại công việc).",
            "binh": "Hồ liễn là cái bình đựng thức ăn cúng trong tông miếu"
          },
          {
            "id": "5.5",
            "hanviet": "Hoặc viết: Ung dã nhân nhi bất nịnh. Tử viết: Yên dụng nịnh ? Ngự nhân dĩ khẩu cấp, lũ tăng ư nhân, bất tri kỳ nhân. Yên dụng nịnh?",
            "nghia": "Có người nói: Ung là người có đức nhân, không biết nịnh (kém tài ăn nói). Khổng tử nói: Tại sao phải có tài nói khéo? Nhanh mồm miệng để cãi thay cho người ta, thường bị người ta ghét, ta chẳng biết anh ta có nhân không. Sao cần phải nịnh ?",
            "binh": ""
          },
          {
            "id": "5.6",
            "hanviet": "Tử sử Tất Điêu Khai sĩ, đối viết: Ngô tư chi vị năng tín. Tử duyệt.",
            "nghia": "Khổng tử bảo Tất Điêu Khai ra làm quan, anh ta trả lời: Con nghĩ con chưa tự tin ra làm quan. Khổng tử nghe rất vui lòng.",
            "binh": "Thầy mừng vì học trò khiêm tốn, thận trọng, chẳng hăng máu vồ vập ra làm quan như nhiều trò khác. Lại không coi nhẹ việc quan"
          },
          {
            "id": "5.7",
            "hanviet": "Tử viết: Đạo bất hành, thừa phù phù ư hải, tòng ngã giả, kỳ Do dư !. Tử Lộ văn chi hỉ. Tử viết: Do dã hảo dũng quá ngã, vô sở thủ tài.",
            "nghia": "Khổng tử viết: Nếu Đạo của ta không được thực hiện, ta sẽ ngồi bè gỗ trôi ra biển, theo ta đi có lẽ chỉ có Trọng Do… Tử Lộ nghe thấy rất vui. Khổng tử nói tiếp: Do này, chí dũng cảm của người cao hơn ta, tìm đâu ra người như thế.",
            "binh": "Khổng tử biểu lộ ý chí quyết tâm truyền bá đạo nhân tới cùng. Ông khen học trò Trọng Do tức Tử Lộ có được đức “dũng” để làm việc nghĩa"
          },
          {
            "id": "5.8",
            "hanviet": "Mạnh Vũ Bá vấn Tử Lộ nhân hồ ? Tử viết: Bất tri dã. Hựu vấn. Tử viết: “Do dã, thiên thừa chi quốc, khả sử trị kỳ phú dã, bất tri kỳ nhân dã. “Cầu dã hà như?”. Tử viết: “Cầu dã, thiên thất chi ấp, bách thừa chi gia, khả sử vi chi tể dã, bất tri kỳ nhân dã. “Xích dã hà như ?”. Tử viết: Xích dã, thúc đới lập ư triều, khả sử dữ tân khách ngôn dã, bất tri kỳ nhân dã.",
            "nghia": "Mạnh Vũ Bá hỏi rằng Tử Lộ có đức nhân không. Khổng tử nói: Không biết. Bá lại hỏi. Khổng tử nói: Trọng Do có thể giao quản lý nước nghìn cỗ xe, nhưng ta không biết hắn là người có nhân hay không. Lại hỏi tiếp: “Cầu là người thế nào?”. Khổng tử nói: Nhiễm Cầu có thể giao làm quan tể một ấp có nghìn hộ, chỉ huy lính trăm binh xa, còn nó có nhân hay không, ta không biết. “Còn Công Tây Xích thế nào ?”. Khổng tử đáp: Xích à, mặc lễ phục đứng trong triều đình, phụ trách tiếp đãi khách nước ngoài. Nhưng ta cũng không biết anh ta là người có đức nhân không.",
            "binh": "Con người có năng lực làm việc thì được tín nhiệm. Nhưng phải qua thực tế mới đánh giá được đức nhân của họ)."
          },
          {
            "id": "5.9",
            "hanviet": "Tử vị Tử Cống viết: “Nhữ dữ Hồi dã thục dũ ?. Đối viết: “Tứ dã hà cảm vọng Hồi ? Hồi dã văn nhất dĩ tri thập, tứ dã văn nhất dĩ tri nhị. Tử viết: “Phất như dã. Ngô dữ nhữ phất như dã.”.",
            "nghia": "Khổng tử nói với Tử Cống: Ngươi với Nhan Hồi ai giỏi hơn ? Tử Công đáp: Con làm sao dám sánh với Nhan Hồi. Hồi nghe một việc thì suy ra được mười việc, con nghe một việc chỉ suy ra được 2 việc thôi. Khổng tử nói: Chẳng bằng. Ta và ngươi chẳng bằng Hồi.",
            "binh": "Thế giới bao la phong phú nhưng việc này có liên quan với việc kia. Học cần biết suy luận từ việc này đến việc khác theo các qui luật biện chứng…Tử Cống tự biết mình không bằng Nhan Hồi, đó là Cống hiểu biết. Ngay cả Khổng tử cũng nói mình chẳng bằng trò Hồi)."
          },
          {
            "id": "5.10",
            "hanviet": "Tể Dữ trú tẩm, Tử viết: Hủ mộc bất khả điêu dã, phân thổ chi tường bất khả ô dã, ư Dữ dữ hà tru !. Tử viết: Thỉ ngô ư nhân dã, thính kỳ ngôn nhi tín kỳ hành; Kim ngô ư nhân dã, thính kỳ ngôn nhi quan kỳ hành. Ư Dữ dữ cải thị. Tể Dữ ngủ ban ngày,",
            "nghia": "Khổng tử nói: Gỗ mục thì không thể đẽo thành công cụ, bức tường bằng đất xấu không thể quét vôi mới được. Còn gì để trách cứ anh ấy nữa. Khổng tử nói thêm: trước đây ta chỉ nghe người khác nói thì tin (anh ta), bây giờ ta nghe rồi còn phải quan sát (anh ta) nữa. Tể Dữ ngủ ngày khiến ta thay đối suy nghĩ (về anh ta).",
            "binh": "Khổng tử khuyên trò học tập tích cực…Tể Dữ nói thì hay nhưng không chăm chỉ. Nay thầy Khổng chính mắt nhìn thấy mới đánh giá đúng về anh ta)."
          },
          {
            "id": "5.11",
            "hanviet": ":. : Tử viết: Ngô vị kiến cương giả. Hoặc đối viết: Thân Trành. Tử viết Trành dã dục, yên đắc cương ?.",
            "nghia": "Khổng tử nói: Ta chưa thấy người nào kiên cường. Có người đáp “Thân Trành là người như vậy”. Khổng tử nói: Thân Trành nhiều dục vọng, sao gọi là kiên cường ?",
            "binh": "Thân Trành là người kiêu hãnh, vị kỷ, người ta tưởng nhầm là kiên cường"
          },
          {
            "id": "5.12",
            "hanviet": "Tử Cống viết: Ngã bất dục nhân chi gia chư ngã dã, ngô diệc dục vô gia chư nhân. Tử viết: Tứ dã, phi nhĩ sở cập dã Tử",
            "nghia": "Cống nói: Con không chịu để người đổ cái xấu cho con, cũng không muốn đem việc không tốt đổ cho người khác. Khổng tử nói: Trò Tứ, ngươi chưa phải là người làm được việc đó.",
            "binh": "Khổng tử cho rằng “Không muốn người khác đổ tội cho mình”- đó là thiên tính của con người, điều này dễ hiểu. Không đổ việc xấu cho người khác thì chỉ người có đức nhân mới làm được. Đạo Nhân là vấn đề rộng lớn, phức tạp ông chưa đề cập, trò Tứ chưa thể theo kịp)."
          },
          {
            "id": "5.13",
            "hanviet": "Tử Cống viết: Phu tử chi văn chương khả đắc nhi văn dã; phu tử chi ngôn tính dữ thiên đạo, bất khả đắc nhi văn dã. Tử",
            "nghia": "Cống nói: Văn chương của thầy, chúng ta đã được biết. Còn luận bàn của thầy về nhân tính và đạo trời thì chúng ta chưa biết.",
            "binh": "Nhân tính và đạo trời là hai vấn đề triết lý cao xa, Khổng tử ít bàn tới bởi khả năng nhận thức của học trò chưa tới…"
          },
          {
            "id": "5.14",
            "hanviet": "Tử Lộ hữu văn, vị chi năng hành, duy khủng hữu văn.",
            "nghia": "Tử Lộ mỗi khi nghe được một việc, nếu thấy vẫn chưa làm được, thì rất sợ nghe thêm những việc khác.",
            "binh": ""
          },
          {
            "id": "5.15",
            "hanviet": "Tử Cống vấn viết: Khổng Văn tử hà dĩ vị chi “văn” dã ? Tử viết: Mẫn nhi hiếu học, bất sỉ hạ vấn, thị dĩ vị chi “văn” dã. Tử",
            "nghia": "Cống hỏi: Khổng Văn tử vì sao đặt tên thụy là “văn” ? Khổng tử nói: Ông ta thông minh lại ham học, không cho là nhục khi cần hỏi người dưới mình, nên đặt tên thụy là “văn”.",
            "binh": ""
          },
          {
            "id": "5.16",
            "hanviet": ":,,, Tử vị Tử Sản hữu quân tử chi đạo tứ yên: Kỳ hành kỷ dã cung, kỳ sự thượng dã kính, kỳ dưỡng dân dã huệ, kỳ sử dân dã nghĩa.",
            "nghia": "Khổng tử nói về Tử Sản có bốn phẩm chất của người quân tử: Làm người xử sự rất khiêm cung. Phụng thờ vua cung kính, có trách nhiệm, nuôi dưỡng dân cho nhiều ân huệ, điều khiển dân hợp lý.",
            "binh": "Công Tôn Tử Sản là cháu của Trịnh Mục công, cầm quyền nước Trịnh hơn 20 năm, nhà cải cách nổi tiếng. Bài này nói về 4 phẩm chất của người quản lý quốc gia"
          },
          {
            "id": "5.17",
            "hanviet": "Tử viết: Án Bình Trọng thiện dữ nhân giao, cửu nhi kính chi.",
            "nghia": "Khổng tử nói: Án Bình Trọng giỏi về kết giao bằng hữu, cả khi quan hệ với bạn lâu ngày vẫn tôn trọng bạn.",
            "binh": ""
          },
          {
            "id": "5.18",
            "hanviet": "Tử viết: Tang Văn Trọng cư thái, sơn tiết tảo chuyết, hà như kỳ tri dã !",
            "nghia": "Khổng tử nói: Tang Văn Trọng nuôi một con rùa lớn, quanh cột nhà chạm khắc núi non và hình rong biển, người như vậy sao gọi là người có trí !",
            "binh": "Tang Văn Trọng sưu tầm rùa lớn, quanh cột nhà chạm khắc núi non, trên kèo chạm trổ hoa văn đẹp đẽ, bị Khổng tử chê trách. Người xưa thường tìm bắt rùa lấy mai để bói toán cát hung, nhà vua thường dùng rùa to, quan đại phu chỉ được dùng rùa nhỏ. Tang Văn Trọng dùng rùa to là không đúng phép tắc. Việc chạm khắc núi non và hoa văn đẹp đẽ thường chỉ có trong cung điện hay tông miếu nhà vua, người dân thường không được tùy tiện làm như vậy)."
          },
          {
            "id": "5.19",
            "hanviet": "Tử Trương vấn viết: Lệnh doãn tử Văn tam sĩ vi lệnh doãn, vô hỉ sắc; tam dĩ chi, vô uẩn sắc. Cựu mệnh quân chi chính, tất dĩ cáo tân lệnh doãn. Hà như ? Tử viết: Trung hĩ. Viết: Nhân hĩ hồ ? Viết: Vị tri. Yên đắc nhân ? Viết: Thôi tử thí Tề quân, Trần tử văn hữu mã thập thừa, khí nhi vi chi, chí ư tha bang, tắc viết: Do ngô đại phu Thôi tử dã. Vi chi. Chi nhất bang, tắc hựu viết: Do ngô đại phu Thôi tử dã, vi chi, hà như ?. Tử viết: Thanh hĩ. Viết: Nhân hĩ hồ ? Viết : Vị tri, yên đắc nhân ? Tử",
            "nghia": "Trương hỏi: Tử Văn ba lần làm quan lệnh doãn nước Sở, không tỏ vẻ vui mừng; Ba lần bị bãi quan mà không oán hận. Mỗi lần thay đổi chức vụ, đều đem chính sự bàn giao đầy đủ cho quan mới. Nên đánh giá ông ta thế nào ? Khổng tử nói: Là người trung thành. Tử Trương hỏi thêm: Tử Văn là người có nhân, được không ? Khổng tử đáp: Ta không biết, làm sao đánh giá có nhân được. Tử Trương lại hỏi: Khi Thôi tử (Thôi Trữ) giết vua Tề Trang công, Trần Văn tử có 10 cỗ xe ngựa dám vứt bỏ mà rời nước Tề sang nước khác, lại nhận xét: “Người chấp chính ở đây cũng giống như Thôi tử nước tôi”. Nói rồi lại bỏ đi nước khác, được một thời gian lại chê “Cũng giống như Thôi tử nước chúng tôi”… Rồi lại bỏ đi qua nước khác, vậy đánh giá ông ta thế nào ? Khổng tử đáp: Người ấy rất trong sạch. Tử Trương nói: có phải là người nhân không ? Khổng tử nói: Không biết, sao vội đánh giá được!",
            "binh": ""
          },
          {
            "id": "5.20",
            "hanviet": "Quí Văn tử tam tư nhi hậu hành. Tử văn chi, viết: Tái, tư khả hĩ.",
            "nghia": "Quí Văn tử ba lần nghĩ rồi mới làm. Khổng tử nghe biết, nói: Nghĩ thêm lần nữa là được rồi.",
            "binh": ""
          },
          {
            "id": "5.21",
            "hanviet": "Tử viết: Ninh Vũ tử, bang hữu đạo tắc tri, bang vô đạo tắc ngu, kỳ tri hà cập dã, kỳ ngu bất khả cập dã.",
            "nghia": "Khổng tử nói: Ninh Vũ tử, khi nước nhà có đạo, thái bình thì được tiếng là có đức trí, khi nước nhà loạn lạc thì mang tiếng ngu đần. Có trí như Ninh thì thiên hạ theo kịp, giả ngu như Ninh thì thiên hạ không ai đuổi kịp.",
            "binh": ""
          },
          {
            "id": "5.22",
            "hanviet": ": , , Tử tại Trần viết: Qui dư ! Qui dư ! Ngô đảng chi tiểu tử cuồng giản, phỉ nhiên thành chương, bất tri sở dĩ tài chi.",
            "nghia": "Khổng tử (lúc còn ở nước Trần) nói: Về đi, về đi. Học trò quê hương ta kinh nghiệm còn it ỏi, văn chương học vấn tuy có chỗ khả quan nhưng chưa biết đào sâu sự lí, mở mang đạo đức và hiểu biết bản thân.",
            "binh": ""
          },
          {
            "id": "5.23",
            "hanviet": "Tử viết: Bá Di, Thúc Tề bất niệm cựu ố, oán thị dụng hy.",
            "nghia": "Khổng tử nói: Bá Di, Thúc Tề không nhớ oán giận cũ, nên hiếm người giận họ.",
            "binh": ""
          },
          {
            "id": "5.24",
            "hanviet": "Tử viết: Thục vị Vi Sinh Cao trực ? Hoặc khất ê yên, khất chư kỳ lân nhi dự chi.",
            "nghia": "Khổng tử nói: Ai bảo Vi Sinh Cao là người thẳng thắn ? Có người đến xin giấm, nhà không có không dám nói thực, rồi sang nhà hàng xóm xin cho người ta (kể như của nhà mình).",
            "binh": ""
          },
          {
            "id": "5.25",
            "hanviet": ": ,,,, Tử viết: Xảo ngôn lệnh sắc túc cung, Tả Khâu Minh sỉ chi, Khâu diệc sỉ chi. Nặc oán nhi hữu kỳ nhân, Tả Khâu Minh sỉ chi, Khâu diệc sỉ chi.",
            "nghia": "Khổng tử nói: Những người nói khéo, ngọt ngào, giả bộ hiền lành, cung kính quá độ, Tả Khâu Minh cho như thế là đáng sỉ nhục, Khâu ta cũng cho là sỉ nhục. Giấu kín oán hận trong lòng mà giả bộ hữu hảo, Tả Khâu Minh cho đó là sỉ nhục, Khâu ta cũng cho là đáng nhục.",
            "binh": "Tả Khâu Minh là tác giả bộ Chiến quốc sách"
          },
          {
            "id": "5.26",
            "hanviet": "Nhan Uyên, Tử Lộ thị. Tử viết: Hạp các ngôn nhĩ chí ? Tử Lộ viết: Nguyện xa mã, y khinh cừu, dữ bằng hữu cộng, tệ chi nhi vô hám. Nhan Uyên viết: Nguyện vô phạt thiện, vô thi lao. Tử Lộ viết: Nguyện văn tử chi chí. Tử viết: Lão giả an chi, bằng hữu tín chi, thiếu giả hoài chi.",
            "nghia": "Nhan Uyên, Tử Lộ theo hầu. Khổng tử nói: Sao các anh chẳng nói ý chí của mình (cho ta nghe) ? Tử Lộ thưa: Con nguyện mang xe ngựa, áo da cừu của con cho bạn hữu dùng, dù đến hỏng cũng không oán giận. Nhan Uyên nói: Con nguyện không phô trương ưu điểm của con, không tỏ rõ công lao của mình. Tử Lộ thưa: chúng con muốn nghe thầy nói nguyện vọng của thầy. Khổng tử đáp: Người già được nuôi dưỡng đầy đủ, bạn bè tin cậy lẫn nhau, trẻ em được quan tâm chăm sóc.",
            "binh": ""
          },
          {
            "id": "5.27",
            "hanviet": ": . Tử viết: Dĩ hĩ hồ ! Ngô vị kiến năng kiến kỳ quá nhi nội tự tụng giả dã.",
            "nghia": "Khổng tử nói: Thôi hết rồi ! Ta chưa từng thấy người nào có thể tự phát hiện sai lầm và tự phê phán bản thân.",
            "binh": ""
          },
          {
            "id": "5.28",
            "hanviet": "Tử viết: Thập thất chi ấp, tất hữu trung tín như Khâu giả yên, bất như Khâu chi hiếu học dã.",
            "nghia": "Khổng tử: Một thôn có chục nhà thì nhất định có một người trung tín như ta, nhưng không hiếu học như ta.",
            "binh": "(Khổng tử tin tưởng rằng nơi nào cũng có người nhân đức, nhưng chưa hẳn đã hiếu học) Hết thiên 5"
          }
        ]
      },
      {
        "id": "ung-da",
        "number": 6,
        "name": "Ung Dã",
        "note": "",
        "passages": [
          {
            "id": "6.1",
            "hanviet": "Tử viết: Ung dã khả sử nam diện",
            "nghia": "Khổng tử nói: Nhiễm Ung có thể ngồi quay mặt hướng nam. (Chú giải: Phương Nam ánh nắng nhiều nhất, có ý nói ghế ngồi quan chức. Quan chức ngồi ghế tựa lưng phương Bắc, mặt ngoảnh hướng Nam. Nhiễm Ung học trò Khổng tử học giỏi ung dung, khoan thứ có đức quân tử nên Khổng tử tin rằng anh này sẽ làm quan)",
            "binh": ""
          },
          {
            "id": "6.2",
            "hanviet": "Trọng Cung vấn tử Tang Bá Tử. Tử viết: Khả dã, giản. Trọng Cung vấn: Cư kính nhi hành giản, dĩ lâm kỳ dân, bất diệc khả hồ ? Cư giản nhi hành giản, vô nãi đại giản hồ ? Tử viết: Ung chi ngôn nhiên. Trọng Cung (tức Nhiễm Ung) hỏi Khổng tử về Tang Bá Tử.",
            "nghia": "Khổng tử nói: Được đấy, con người này giản dị chất phác. Trọng Cung lại hỏi: Sống kính nhường, làm việc giản dị, gần gũi dân chúng, như vậy chẳng tốt sao? Còn nếu chỉ có kính nhường, làm việc giản dị mộc mạc thì e rằng thái quá chăng? Khổng tử đáp: Ngươi nói rất đúng.",
            "binh": ""
          },
          {
            "id": "6.3",
            "hanviet": ":?. :,,, , Ai Công vấn: Đệ tử thục vi hiếu học ? Khổng tử đối viết: Hữu Nhan Hồi giả hiếu học, bất thiên nộ, bất nhị quá, bất hạnh đoản mệnh tử hĩ. Kim dã tắc vong, vị văn hiếu học giả dã. Vua Lỗ Ai",
            "nghia": "Công hỏi: Đệ tử của ngài có ai ham học nhất ? Khổng tử đáp: Có Nhan Hồi là học trò ham học, khi giận không lệch lạc giận qua người khác, không bao giờ phạm lỗi lầm cũ nhưng bất hạnh đoản mệnh. Nay đã chết rồi, chẳng nghe thấy ai hiếu học như thế nữa.",
            "binh": ""
          },
          {
            "id": "6.4",
            "hanviet": "Tử Hoa sứ ư Tề, Nhiễm tử vi kỳ mẫu thỉnh túc. Tử viết: Dữ chi phủ. Thỉnh ích. Viết: Dữ chi dữu. Nhiễm tử dữ chi túc ngũ bính. Tử viết: Xích chi thích Tề dã, thừa phì mã, y khinh cừu.. Ngô văn chi dã: quân tử chu cấp bất tế phú. Tử Hoa đi sứ sang nước Tề, Nhiễm Hữu thưa với Khổng tử: tiện xe đi nước Tề gửi cho mẹ Tử Hoa một ít lương thực. Khổng tử bảo cho một vò gạo. Nhiễm nài thêm ít nữa. Khổng tử bảo cho thêm một hũ nữa. Nhiễm Hữu mang cho năm bính (80 đấu). Thấy thế,",
            "nghia": "Khổng tử nói: Tử Hoa (tức Công Tây Xích) đi sứ nước Tề ngồi xe có ngựa kéo, mặc áo da vừa nhẹ vừa ấm. Ta nghe nói người quân tử chỉ cứu tế cho người nghèo, không cứu tế người giàu.",
            "binh": ""
          },
          {
            "id": "6.5",
            "hanviet": "Nguyên Tư vi chi tể, dữ chi túc cửu bách, từ. Tử viết: Vô. Dĩ dữ nhĩ lân lý hương đảng hồ! Nguyên Tư làm chức quản gia, Khổng tử cấp tiền lương chín trăm đấu. Nguyên Tư từ chối.",
            "nghia": "Khổng tử nói: Đừng từ chối, cứ mang về cho người nghèo trong xóm.",
            "binh": ""
          },
          {
            "id": "6.6",
            "hanviet": "Tử vị Trọng Cung, viết: Lê ngưu vi chi tuynh thả giác. Tuy dục vật dụng, sơn xuyên bổng xá chư ?",
            "nghia": "Khổng tử nói về Trọng Cung: Con bê là con của bò lang lông đỏ hai sừng cân đối. Người ta cho là mẹ nó lang nên không dùng nó làm vật tế. Thần núi thần sông có nỡ bỏ rơi nó đâu?",
            "binh": "Người xưa cúng tế bằng con bò màu lông đỏ vì rất quí màu đỏ. Trọng Cung có người cha độc ác hèn hạ, nên nhà cầm quyền không muốn dùng Cung làm quan. Khổng tử nói vậy để an ủi Cung và phản đối quan niệm coi trọng lý lịch, dòng dõi"
          },
          {
            "id": "6.7",
            "hanviet": "Tử viết: Hồi dã kỳ tâm tam nguyệt bất vi nhân, kỳ dư tắc nhật nguyệt chí yên nhi dĩ hĩ",
            "nghia": "Khổng tử nói: Nhan Hồi, tấm lòng trò ấy ba tháng không trái đạo nhân, trò khác không được vậy, có chăng chỉ là ngẫu nhiên mà thôi.",
            "binh": ""
          },
          {
            "id": "6.8",
            "hanviet": "Quí Khang tử vấn: Trọng Do khả sử tòng chính dã dư ?. Tử viết: Do dã quả, ư tòng chính hồ hà hữu Viết: Tứ dã khả sử tòng chính dã dư ? Viết: Tài dã đạt, ư tòng chính hồ hà hữu Viết: Cầu dã khả sử tòng chính dã dư ? Viết: Cầu dã nghệ, ư tòng chính hồ hà hữu Quí Khang tử hỏi: Trọng Do có thể giao làm lãnh đạo được không ?",
            "nghia": "Khổng tử nói: Do là người quyết đoán, làm lãnh đạo còn có gì khó khăn. Quí Khang tử hỏi: Đoan Mộc Tứ giao làm quan chức được không ? Khổng tử: Tứ có tài năng, làm quan chắc sẽ thuận lợi thôi. Quí hỏi tiếp: Nhiễm Cầu làm quan được không? Khổng tử đáp: Cầu đa tài đa nghệ, làm quan có gì khó khăn đâu.",
            "binh": ""
          },
          {
            "id": "6.9",
            "hanviet": "Quí thị sử Mẫn Tử Khiên vi Phí tể, Mẫn Tử Khiên viết: Thiện vi ngã từ yên ! Như hữu phục ngã giả, tắc ngô tất tại Vấn thượng hĩ.",
            "nghia": "Quí thị cho mời Mẫn Tử Khiên làm quan tể ấp Phí. Mẫn nói (với người báo tin): Xin vui lòng từ chối giúp tôi. Nếu có người lại đến mời, tôi đành phải trốn lên ở thượng nguồn sông Vấn thôi.",
            "binh": "quan tể là quan đứng đầu. Mẫn Tử Khiên oán trách họ Quí tiếm quyền nên không chịu ra hợp tác"
          },
          {
            "id": "6.10",
            "hanviet": "Bá Ngưu hữu tật, Tử vấn chi, tự dũ chấp kỳ thủ, viết: Vong chi, mệnh hĩ phu, tư nhân dã nhi hữu tư tật dã ! Tư nhân dã nhi hữu tư tật dã !",
            "nghia": "Bá Ngưu nằm bệnh, Khổng tử đến thăm, cầm tay nói: Thôi rồi, đây là mệnh rồi. Người tốt thế này mà mắc bệnh này. Người tốt thế này mà mắc bệnh này !",
            "binh": "Người tốt mà mắc bệnh này, chẳng phải do mình gây ra, là mệnh trời không tránh khỏi"
          },
          {
            "id": "6.11",
            "hanviet": "Tử viết: Hiền tai Hồi dã, nhất đan thực, nhất biều ẩm, tại lậu hạng, nhân bất kham kỳ ưu, Hồi dã bất cải kỳ lạc. Hiền tai Hồi dã",
            "nghia": "Khổng tử nói: Nhan Hồi rất hiền, một giỏ cơm, một bầu nước, ở tại ngõ nhỏ, người khác không chịu nổi, còn Hồi vẫn không thay đổi niềm vui, Hồi thật là hiền đức.",
            "binh": ""
          },
          {
            "id": "6.12",
            "hanviet": "Nhiễm Cầu viết: Phi bất duyệt tử chi đạo, lực bất túc dã. Tử viết: Lực bất túc giả, trung đạo nhi phế, kim nhữ hoạch. Nhiễm",
            "nghia": "Cầu nói: Không phải con không thích đạo của mình, do con không đủ sức mà thôi. Khổng tử nói: Nếu không đủ sức, nửa đường sẽ bỏ dở. Con đã tự vạch giới hạn cho mình rồi, không muốn tiến nữa.",
            "binh": "(Ý Khổng tử: vấn đề không phải do thiếu lực mà là thích hay không thích đạo nhân mà thôi"
          },
          {
            "id": "6.13",
            "hanviet": "Tử vị Tử Hạ viết: Nhĩ vi quân tử nho, vô vi tiểu nhân nho.",
            "nghia": "Khổng tử nói với Tử Hạ: Ngươi nên trở thành học trò quân tử, không nên trở thành học trò tiểu nhân.",
            "binh": ""
          },
          {
            "id": "6.14",
            "hanviet": "Tử Du vi Vũ Thành tể. Tử viết: Nhữ đắc nhân yên nhĩ lạc hồ ? Viết: Hữu Đạm Đài Diệt Minh giả, hành bất do kinh, phi công sự vị thường chí ư yển chi thất dã. Tử Du làm quan tể ấp Vũ Thành.",
            "nghia": "Khổng tử nói: Ở đây ngươi có thích ai không? Trả lời: có người tên Đạm Đài Diệt Minh, đi không qua lối tắt, không có việc công thì không đến công sở.",
            "binh": ""
          },
          {
            "id": "6.15",
            "hanviet": "Tử viết: Mạnh Chi Phản bất phạt, bôn nhi điến, thương nhập môn, sách kỳ mã, viết: phi cảm hậu dã, mã bất tiến dã.",
            "nghia": "Khổng tử nói: Mạnh Chi Phản không thích khoe công lao, chạy đằng sau (khi quân rút lui), khi về đến cửa thành, cầm roi quất ngựa mắng: “chẳng phải ta dám chạy sau, do ngươi không chịu tiến lên trước”.",
            "binh": "Mạnh là người khiêm tốn, khi thua trận, sau khi dũng cảm chạy sau về, cũng không nhận mình như vậy)."
          },
          {
            "id": "6.16",
            "hanviet": ": Tử viết: Bất hữu Chúc Đà chi nịnh, nhi hữu Tống Triều chi mỹ, nan hồ miễn ư kim chi thế hĩ.",
            "nghia": "Khổng tử nói: Nếu không nói khéo như Chúc Đà mà có sắc đẹp như công tử Triều nước Tống, đời nay khó mà tránh bị người ta ghét bỏ.",
            "binh": ""
          },
          {
            "id": "6.17",
            "hanviet": "Tử viết: Thùy năng xuất bất do hộ, hà mạc do tư đạo dã?",
            "nghia": "Khổng tử nói: Có ai ra khỏi nhà mà không qua cửa ? Làm người cớ sao không theo đạo lí chung đó mà làm ?",
            "binh": ""
          },
          {
            "id": "6.18",
            "hanviet": "Tử viết: Chất thắng văn tắc dã, văn thắng chất tắc sử. Văn chất bân bân, nhiên hậu quân tử.",
            "nghia": "Khổng tử nói: Chất phác mà thiếu văn vẻ thì hoang dã, văn vẻ mà bỏ qua chất phác thì phù phiếm (mang tính sách vở/ lý thuyết suông). Văn vẻ và chất phác hoàn hảo, ấy là người quân tử.",
            "binh": ""
          },
          {
            "id": "6.19",
            "hanviet": "Tử viết: Nhân chi sinh dã trực, võng chi sinh dã hạnh nhi miễn",
            "nghia": "Khổng tử nói: Người sống được nhờ thẳng ngay. Không ngay thẳng cũng sống được, ấy là nhờ may mắn tránh khỏi tai họa mà thôi.",
            "binh": ""
          },
          {
            "id": "6.20",
            "hanviet": "Tử viết: Tri chi giả bất như hiếu chi giả, hiếu chi giả bất như lạc chi giả.",
            "nghia": "Khổng tử nói: Người hiểu biết (đạo lí) không bằng kẻ thích đạo lí, thich đạo lí không bằng thi hành đạo lí làm vui.",
            "binh": ""
          },
          {
            "id": "6.21",
            "hanviet": "Tử viết:: Trung nhân dĩ thượng, khả dĩ ngữ thượng dã; Trung nhân dĩ hạ, bất khả dĩ ngữ thượng dã.",
            "nghia": "Khổng tử nói: Người bậc trung trở lên có thể dạy cao sâu; Bậc trung trở xuống thì không thể dạy cao sâu được.",
            "binh": ""
          },
          {
            "id": "6.22",
            "hanviet": "Phàn Trì vấn trí, Tử viết: Vụ dân chi nghĩa, kính quỷ thần nhi viễn chi, khả vị tri hĩ. Vấn nhân, viết: Nhân giả tiên nan nhi hậu hoạch, khả vị nhân hĩ. Phàn Trì hỏi về trí,",
            "nghia": "Khổng tử đáp: Phục vụ dân vì nghĩa. Tôn kính quỷ thần mà đứng xa, thế là hiểu chữ trí. Lại hỏi về đức nhân. Khổng tử đáp: Người nhân chịu gian khó trước, thu hoạch sau, đó là người nhân.",
            "binh": "(Phàn Trì là người đánh xe, học vấn thấp, Khổng tử giải thích chữ trí, chữ nhân rất đơn giản dễ hiểu"
          },
          {
            "id": "6.23",
            "hanviet": "Tử viết: Trí giả nhạo thủy, nhân giả nhạo sơn; trí giả động, nhân giả tĩnh; trí giả lạc, nhân giả thọ.",
            "nghia": "Khổng tử nói: Người trí ưa nước, người nhân thích núi; Người trí hoạt động, người nhân yên tĩnh; Người trí sống vui, người nhân sống thọ.",
            "binh": ""
          },
          {
            "id": "6.24",
            "hanviet": "Tử viết: Tề nhất biến, chí ư Lỗ; Lỗ nhất biến, chí ư đạo.",
            "nghia": "Khổng tử nói: Nước Tề thay đổi, tiến đến nước Lỗ; nước Lỗ thay đổi tiến đến Đạo.",
            "binh": "Khổng tử so sánh sự tiến bộ của hai nước…"
          },
          {
            "id": "6.25",
            "hanviet": "Tử viết: Cô bất cô, cô tai ! Cô tai !",
            "nghia": "Khổng tử nói: Cái bình rượu không ra bình rượu. Bình rượu đây ư! sao có thể gọi là bình rượu ?",
            "binh": "Chú thích: thời xưa bình rượu lễ có 6 góc cạnh là đúng mẫu mực, nếu thay bằng cái bình khác chứng tỏ chữ lễ bị coi thường, nên Khổng tử lo lắng. Lời bàn: Người bình thường, thực dụng sẽ chê trách Khổng tử là “quá máy móc, công thức, cứng nhắc”. Cốt yếu là có rượu cúng, cần gì cái bình đựng phải đúng mẫu mực (!). Đây là câu chuyện tiêu biểu cho tính lễ giáo nghiêm túc mà Khổng tử, đạo Nho yêu cầu."
          },
          {
            "id": "6.26",
            "hanviet": "Tể Ngã vấn viết: Nhân giả tuy cáo chi viết tỉnh hữu nhân yên, kỳ tòng chi dã ? Khổng tử viết: Hà vi kỳ nhiên dã ? Quân tử khả thệ dã, bất khả hãm; Khả khi dã, bất khả võng dã. Tể",
            "nghia": "Ngã hỏi: Người nhân đức được báo có người rơi xuống giếng, anh ta có nhảy xuống cứu không? Khổng tử đáp: Sao phải làm vậy ? Quân tử tìm cách cứu người, không thể tự hãm hại thân mình; Quân tử có thể bị lừa bởi những điều có lý, nhưng không thể bị hại vì lời xằng bậy.",
            "binh": ""
          },
          {
            "id": "6.27",
            "hanviet": "Tử viết: Quân tử bác học ư văn, ước chi dĩ lễ, diệc khả dĩ phất bạn hĩ phu.",
            "nghia": "Khổng tử nói: người quân tử trước học văn, sau học lễ, nhờ vậy khỏi trái đạo.",
            "binh": ""
          },
          {
            "id": "6.28",
            "hanviet": "Tử kiếnNamtử, Tử Lộ bất duyệt. Phu tử thỉ chi viết: “Dư sở phủ giả. Thiên yếm chi! Thiên yếm chi !",
            "nghia": "Khổng tử gặp nàng Nam tử, Tử Lộ không vui. Khổng tử thề rằng: Như ta mà làm gì trái lễ thì trời phạt ta”.",
            "binh": "nàngNamtử là vợ vua Vệ Linh công nước Vệ, nàng rất đẹp nhưng nhiều tai tiếng. Ai muốn làm quan đều ra mắtNamtử trước… Tử Lộ nghĩ rằng thầy Khổng cũng làm như người thường…Nhưng Khổng tử vì việc công mà đến chứ không nhờ cậy, ngài phải thề với học trò"
          },
          {
            "id": "6.29",
            "hanviet": "Tử viết: Trung dung chi vi đức dã, kỳ chí hĩ hồ! Dân tiển cửu hĩ.",
            "nghia": "Trung dung là đạo đức tốt đẹp cao nhất ! Dân chúng từ lâu thiếu hẳn đạo đức này.",
            "binh": ""
          },
          {
            "id": "6.30",
            "hanviet": "Tử Cống viết: Như hữu bác thi ư dân nhi năng tế chúng, hà như ? Khả vị nhân hồ? Tử viết: Hà sự ư nhân ? Tất dã thánh hồ ! Nghiêu Thuấn kỳ do bệnh chư. Phu nhân giả, kỷ dục lập nhi lập nhân, kỷ dục đạt nhi đạt nhân. Năng cận thủ thí khả vị nhân chi, phương dã dĩ. Tử",
            "nghia": "Cống nói: Nếu có một người đưa nhiều điều tốt đến cho dân, giúp dân sống tốt, có phải là người nhân không ? Khổng tử đáp: Không chỉ là người nhân mà là bậc thánh nhân. Vua Nghiêu vua Thuấn cũng khó làm được như vậy. Người có nhân muốn thành người nhân đức thì cũng muốn người khác như mình, người có nhân đã làm được việc gì cũng muốn người khác đạt như thế. Lấy bản thân mình làm thí dụ để hiểu người khác, đức nhân là vậy. Hết thiên 6",
            "binh": ""
          }
        ]
      },
      {
        "id": "thuat-nhi",
        "number": 7,
        "name": "Thuật Nhi",
        "note": "",
        "passages": [
          {
            "id": "7.1",
            "hanviet": "Tử viết: Thuật nhi bất tác, tín nhi hiếu cổ, thiết tỉ ư ngã lão Bành",
            "nghia": "Khổng tử nói: Ta chỉ thuật lại chứ không sáng tác, ta yêu và tin văn hoá cổ, trộm ví mình như lão Bành.",
            "binh": "Khổng tử khiêm tốn nói mình chỉ thuật lại lời dạy cổ nhân chứ không sáng tạo, cốt sao cho mọi người do tin tưởng cổ nhân mà tiếp thu đạo thánh hiền là được, thầy chả cần “bản quyền tác giả”. Lão Bành tổ truyền thuyết là người sống lâu. Khổng tử khiêm tốn nói ta biết nhiều chỉ vì ta sống lâu thôi)."
          },
          {
            "id": "7.2",
            "hanviet": "Tử viết: Mặc nhi thức chi, học nhi bất yếm, hối nhân bất quyện, hà hữu ư ngã tai ?",
            "nghia": "Khổng tử: Lặng yên nhớ điều đã học, kiên trì học tập không biết chán, dạy bảo người khác không biết mệt mỏi, ta đã làm được việc nào trong ba việc ấy ?",
            "binh": ""
          },
          {
            "id": "7.3",
            "hanviet": ", ,,, Tử viết: Đức chi bất tu, học chi bất giảng, văn nghĩa bất năng tỉ, bất thiện bất năng cải, thị ngô ưu dã.",
            "nghia": "Khổng tử nói: Đức hạnh mà không tu dưỡng, học không giảng giải, thấy việc nghĩa không làm, mắc điều sai không chịu sửa chữa, đó là những nỗi lo của ta.",
            "binh": ""
          },
          {
            "id": "7.4",
            "hanviet": "Tử chi yến cư, thân thân như dã, yêu yêu như dã.",
            "nghia": "Khổng tử khi ở nhà an nhàn, chân tay thoải mái buông lỏng, sắc mặt vui vẻ",
            "binh": ""
          },
          {
            "id": "7.5",
            "hanviet": "Tử viết: Thậm hĩ ngô suy dã ! Cửu hĩ ngô bất phục mộng kiếnChucông.",
            "nghia": "Khổng tử: Ta già yếu lắm rồi, từ lâu ta không nằm mộng thấy Chu công.",
            "binh": "Chu công tức Chu Công Đán, phò giúp anh là Chu Vũ Vương diệt trừ vua Trụ, lập ra nhà Chu. Khi anh chết, lại phò cháu ruột lên ngôi là Chu Thành Vương, đóng vai trò cố vấn tối cao xây dựng nhà Chu cai trị ngàn nước chư hầu. Chu công tiếp tục công việc của cha là Chu Văn Vương chú giải bộ sách Kinh Dịch- bộ sách triết học cổ điển nhất xứ Trung Hoa. Khổng tử rất sùng bái Chu công, kiến trúc sư nhà Chu, thường gọi là thánh nhân. Lời nói của Khổng tử có hai ý: lo buồn vì sức khỏe đã suy yếu mà lễ chế nhà Chuchưa được phục hồi"
          },
          {
            "id": "7.6",
            "hanviet": "Tử viết: Chí ư đạo, cứ ư đức, y ư nhân, du ư nghệ.",
            "nghia": "Khổng tử nói: Có chí học hành theo đạo, dựa vào đức, ung dung học nghề.",
            "binh": ""
          },
          {
            "id": "7.7",
            "hanviet": "Tử viết: Tự hành thúc tu dĩ thượng, ngô vị thường vô hối yên.",
            "nghia": "Khổng tử nói: Tự mình dâng lên một bó nem, ta chưa từ chối dạy bảo ai bao giờ.",
            "binh": ""
          },
          {
            "id": "7.8",
            "hanviet": ":,, Tử viết: Bất phẫn bất khải, bất phỉ bất phát. Cử nhất ngung bất dĩ tam ngung phản, tắc bất phục dã.",
            "nghia": "Khổng tử nói: Kẻ nào chưa uất ức vì chưa hiểu được thì ta không gợi mở cho. Kẻ nào không hậm hực vì chưa thể nói ra được thì ta chẳng hướng dẫn cho nói. Kẻ đã được ta chỉ cho một góc (vuông) mà chẳng biết tự xét ba góc kia thì ta chẳng dạy nó nữa.",
            "binh": ""
          },
          {
            "id": "7.9",
            "hanviet": "Tử thực ư hữu tang giả chi trắc, vị thường bão dã. Tử ư thị nhật khốc, tắc bất ca",
            "nghia": "Khổng tử đến viếng nhà có tang, không bao giờ ăn no. 7.10. Hôm nào Khổng tử đi viếng đám tang, suốt ngày hôm ấy không ca hát.",
            "binh": "Khổng tử đi viếng tang rất thực lòng, chẳng chiếu lệ qua loa"
          },
          {
            "id": "7.10",
            "hanviet": ":,, Tử vị Nhan Uyên viết: Dụng chi tắc hành, xá chi tắc tàng, duy ngã dữ nhĩ hữu thị phu!. Tử Lộ viết: Tử hành tam quân, tắc thùy dự ? Tử viết: Bạo hổ bằng hà, tử nhi vô hối giả, ngô bất dữ dã. Tất dã lâm sự nhi cụ. Hiếu mưu nhi thành giả dã.",
            "nghia": "Khổng tử nói với Nhan Uyên: Dùng ta thì ta giúp cho sự nghiệp, không dùng thì ta đi ở ẩn, chỉ có ta với ngươi làm được thế thôi. Tử Lộ hỏi: Nếu Thầy cầm quân đi đánh giặc, thầy chọn ai theo ? Khổng tử đáp: Kẻ tay không mà bắt cọp, không thuyền mà lội qua sông, chết không tiếc thân, những kẻ ấy ta không cho theo với ta. Khi lâm sự ắt phải biết lo lắng thận trọng, suy tính mưu lược để thành công, những người đó ta mới cho theo.",
            "binh": "Tử Lộ tự hào mình có dũng khí, ắt được thầy đánh giá cao. Nhưng Khổng tử chỉ đánh giá cao những người mưu trí, cẩn trọng"
          },
          {
            "id": "7.11",
            "hanviet": "Tử viết: Phú nhi khả cầu dã; tuy chấp tiên chi sĩ, ngô diệc vi chi. Như bất khả cầu, tòng ngô sở hiếu.",
            "nghia": "Khổng tử nói: giàu sang mà có thể cầu được thì dù có phải làm kẻ đầu sai thấp kém ta cũng làm. Nếu không thể giàu được thì ta chỉ làm việc ta thích thôi.",
            "binh": ""
          },
          {
            "id": "7.12",
            "hanviet": "Tử chi sở thận: Trai, chiến, tật.",
            "nghia": "Khổng tử có tính thận trọng (đối với 3 thứ): Trai giới, chiến tranh và bệnh tật.",
            "binh": "Trai giới là ăn chay và cúng lễ đúng qui cách"
          },
          {
            "id": "7.13",
            "hanviet": "Tử tại Tề văn Thiều, tam nguyệt bất tri nhục vị, viết: Bất đồ vi nhạc chi chí ư tư dã.",
            "nghia": "Khổng tử ở nước Tề nghe được bản nhạc Thiều, ba tháng sau ăn thịt không thấy mùi vị gì cả, bèn nói: Không ngờ nhạc thiều (của vua Thuấn) điêu luyện đến thế.",
            "binh": "Bản nhạc tên “Thiều” sáng tác thời vua Thuấn được dùng làm lễ trong cung đình, có dịp Khổng tử được nghe, mãi ba tháng sau còn dư âm…Ngày nay không còn lưu được bản nhạc này. Về sau Trung Quốc và ViệtNam gọi quốc ca là “quốc thiều”"
          },
          {
            "id": "7.14",
            "hanviet": "Nhiễm Hữu viêt: Phu tử vi Vệ quân hồ ? Tử Cống viết: Nặc, ngô thương vấn chi. Nhập, viết: Bá Di, Thúc Tề hà nhân dã ? Viêt: Cổ chi hiền nhân dã. Viết: Oán hồ ?. Viết: Cầu nhân nhi đắc nhân, hữu hà oán. Xuất, viết: Phu tử bất vi dã. Nhiễm",
            "nghia": "Hữu hỏi: Có phải thầy ta đi giúp vua nước Vệ không? Tử Cống nói: Thế à, để ta đi hỏi thầy xem. Nói rồi đến gặp Khổng tử thưa: “Bá Di, Thúc Tề là con người như thế nào ?”. Khổng tử đáp: Họ là người hiền ngày xưa. Tử Cống hỏi tiếp: Họ có oán hận gì không ? Khổng tử nói: Theo đuổi điều nhân mà được điều nhân, còn gì phải oán hận. Tử Cống quay về nói với Nhiễm Hữu: Thầy ta chẳng đi giúp nước Vệ đâu. (Chú thích: Bá Di, Thúc Tề là con của vua Cô Trúc, tranh nhau nhường ngôi cho người họ khác, đến mức phải trốn đi để khỏi bị ép làm vua. Ở nước Vệ, sau khi Vệ Linh Công mất, cháu nội của vua là Khoái Hốt được cử làm vua, cha là Khoái Quí âm mưu tranh ngôi vua. Hai cha con giành ngôi vua là bất nhân. Cả hai thầy trò Khổng tử – Tử Lộ đều tránh nói thẳng cái bất nhân của vua nước Vệ mà diễn đạt quan điểm của mình thông qua tấm gương Bá Di, Thúc Tề. Hai thầy trò quả là người thận trọng tinh tế trong ứng xử).",
            "binh": ""
          },
          {
            "id": "7.15",
            "hanviet": "Tử viết: Phạn sơ thực ẩm thủy, khúc quăng nhi chẩm chi, lạc diệc tại kỳ trung hĩ. Bất nghĩa nhi phú thả quí, ư ngã như phù vân.",
            "nghia": "Khổng tử nói: Ăn cơm gạo thô uống nước lã, ngủ kéo cánh tay mà gối, niềm vui ở trong đó rồi. Bất nghĩa mà giàu có phú quý, ta coi như đám mây trôi vậy.",
            "binh": ""
          },
          {
            "id": "7.16",
            "hanviet": "Tử viết: Gia ngã sác niên, ngũ thập dĩ học Dịch, khả dĩ vô đại quá hĩ.",
            "nghia": "Khổng tử nói: Trời cho ta sống thêm ít năm nữa, nếu có 5 hoặc 10 năm nghiên cứu thông Kinh Dịch, có thể không mắc phải sai lầm lớn.",
            "binh": ""
          },
          {
            "id": "7.17",
            "hanviet": "Tử sở nhã ngôn, “Thi”, “ Thư”, chấp Lễ, giai nhã ngôn dã.",
            "nghia": "Khổng tử thích lời nói nhã nhặn, Kinh Thi, Kinh Thư và chấp hành Lễ, đều là những lời thanh nhã cả.",
            "binh": ""
          },
          {
            "id": "7.18",
            "hanviet": ",: ,, Diệp Công vấn Tử Lộ ư Khổng tử, Tử Lộ bất đối. Tử viết: Nhữ hề bất viết, kỳ vi nhân dã, phát phẫn vong thực, lạc dĩ vong ưu, bất tri lão chi thương chí vân nhĩ.",
            "nghia": "Diệp Công hỏi Tử Lộ về Khổng tử, Tử Lộ không trả lời… Khổng tử (biết vậy) nói với Tử Lộ: Sao ngươi không nói thầy của ngươi theo đạo nhân, lo lắng quên ăn, vui quên cả sầu, chẳng hề biết tuổi già đã đến.",
            "binh": ""
          },
          {
            "id": "7.19",
            "hanviet": "Tử viết: Ngã phi sinh nhi tri chi giả, hiếu cổ, mẫn dĩ cầu chi giả dã.",
            "nghia": "Khổng tử nói: Ta chẳng phải sinh ra đã biết tất cả, là do ưa thích đạo cổ xưa, cần mẫn tìm học hỏi mà nên.",
            "binh": ""
          },
          {
            "id": "7.20",
            "hanviet": "Tử bất ngữ: quái, lực, loạn, thần.",
            "nghia": "Khổng tử không bàn tới chuyện: kì quái, bạo lực, phản loạn, quỷ thần.",
            "binh": "Khổng tử là người thận trọng, cho rằng nếu bàn tán mãi 4 chuyện ấy sẽ bị ảnh hưởng. Chỉ nên bàn những chuyện đáng bàn, có ích lợi theo hướng nhân nghĩa thôi"
          },
          {
            "id": "7.21",
            "hanviet": "Tử viết: Tam nhân hành, tất hữu ngã sư yên. Trạch kỳ thiện giả nhi tòng chi, kỳ bất thiện giả nhi cải chi.",
            "nghia": "Khổng tử nói: Ba người cùng đi, tất có người là thầy ta. Ta chọn điều tốt để đi theo, còn điều không tốt thì tránh đi.",
            "binh": "Ba người khó giống nhau, vậy ta có thể học người khác điều gì đó"
          },
          {
            "id": "7.22",
            "hanviet": "Tử viết: Thiên sinh đức ư dư, Hoàn Đồi kỳ như dư hà ?",
            "nghia": "Khổng tử nói: Trời phú cho ta đạo đức, Hoàn Đồi làm gì được ta ?",
            "binh": "Khổng tử đi dạy học về, làm lễ dưới một gốc cây cổ thụ, quan tư mã nước Tống là Hoàn Đồi sai chặt cây nhằm giết Khổng tử…"
          },
          {
            "id": "7.23",
            "hanviet": "Tử viết: Nhị tam tử dĩ ngã vi ẩn hồ ? Ngô vô ẩn hồ nhĩ. Ngô vô hành nhi bất dự nhị tam tử giả, thị Khâu dã.",
            "nghia": "Khổng tử nói: Các người cứ nghĩ ta còn điều gì giấu diếm ư ? Ta chẳng giấu diếm điều gì. Ta chẳng có việc gì đã làm mà không cho các ngươi biết, như chính ta là Khâu vậy.",
            "binh": ""
          },
          {
            "id": "7.24",
            "hanviet": "",
            "nghia": "Tử dĩ tứ giáo: Văn, hạnh, trung, tín Khổng tử lấy 4 điều để dạy học trò là: Văn học, đức hạnh, trung thành và tín nghĩa.",
            "binh": ""
          },
          {
            "id": "7.25",
            "hanviet": "Tử viết: Thánh nhân ngô bất đắc nhi kiến chi hĩ ! Đắc kiến quân tử giả, tư khả hĩ. Tử viết: Thiện nhân ngô bât đắc nhi kiến chi hĩ ! Đắc kiến hữu hằng giả, tư khả hĩ. Vong nhi vi hữu, hư nhi vi doanh, ước nhi vi thái, nan hồ hữu hằng hĩ.",
            "nghia": "Khổng tử nói: Bậc thánh nhân thì ta chưa nhìn thấy ! Người quân tử thì ta gặp rồi. Khổng tử lại nói: Bậc thiện nhân ta cũng chưa nhìn thấy, mới được thấy bậc hằng giả (người giữ tấm lòng nhân son sắt, không thay đổi). Những kẻ không có mà giả như có, thiếu thốn mà giả bộ đầy đủ, nghèo hèn mà giả bộ giàu sang thì kẻ ấy cũng chẳng giữ được tấm lòng chung thủy.",
            "binh": ""
          },
          {
            "id": "7.26",
            "hanviet": "Tử điếu nhi bất cương, dặc bất xạ túc.",
            "nghia": "Khổng tử câu cá mà không bao giờ dùng lưới vét, săn thú không bắn con chim đã về tổ nghỉ",
            "binh": "Đức nhân của Khổng tử bao gồm cả loài vật . Ngài tránh đánh lưới vét cả những con cá nhỏ, tránh bắn chim trong tổ vì có thể nó đang ấp trứng"
          },
          {
            "id": "7.27",
            "hanviet": "Tử viết: Cái hữu bất tri nhi tác chi giả, ngã vô thị dã. Đa văn, trạch kỳ thiện giả bất nhi tòng chi, đa kiến nhi thức chi, trí chi thứ dã.",
            "nghia": "Khổng tử nói: Có loại người không biết gì nhưng tỏ ra cái gì cũng biết, ta không phải người như thế. Lắng nghe nhiều, chọn lấy điều hay mà làm, quan sát nhiều, ghi nhớ kỹ làm kiến thức của mình. Người như vậy có thể xem là bậc thượng trí rồi.",
            "binh": ""
          },
          {
            "id": "7.28",
            "hanviet": "Hỗ hương nan dữ ngôn, đồng tử kiến, môn nhân hoặc. Tử viết: Dự kỳ tiến dã, bất dự kỳ thoái dã, duy hà thậm ? Nhân khiết kỷ dĩ tiến. Dự kỳ khiết dã. Bất bảo kỳ vãng dã.",
            "nghia": "Người làng Hỗ khó trò chuyện, một đứa bé làng Hỗ gặp Khổng tử xin vào học, những học trò khác thấy nghi ngờ. Khổng tử nói: Ta ủng hộ sự tiến bộ, không thích cái suy thoái, sao lại đối xử thậm tệ ? Họ chân thành đến với mình, ta tán thành sự trong sạch vô tư. Không nên nghĩ đến quá khứ của họ.",
            "binh": ""
          },
          {
            "id": "7.29",
            "hanviet": "Tử viết: Nhân viễn hồ tai ? Ngã dục nhân, tư nhân chí hĩ.",
            "nghia": "Khổng tử nói: Chẳng lẽ điều nhân xa xôi vậy ư ? Ta muốn đạt điều nhân thì điều nhân sẽ đến.",
            "binh": ""
          },
          {
            "id": "7.30",
            "hanviet": "Trần tư bại vấn: Chiêu Công tri lễ hồ ? Khổng tử viết: Tri lễ. Khổng tử thoái, ấp Vu Mã Kỳ nhi tiến chi viết: Ngô văn quân tử bất đảng, quân tử diệc đảng hồ ? Quân thủ ư Ngô, vi đồng tính, vị chi Ngô mạnh tử. Quân nhi tri lễ, thục bất tri lễ ? Vu Mã Kỳ dĩ cáo. Tử viết: Khâu dã hạnh, cẩu hữu quá, nhân tất tri chi. Quan tư bại nước",
            "nghia": "Trần hỏi: Vua Lỗ Chiêu Công có biết lễ không ? Khổng tử trả lời: Biết lễ. Sau khi Khổng tử ra ngoài, quan tư bại vái chào Vu Mã Kỳ rồi tiến đến nói: Ta nghe nói quân tử không thiên vị, sao người quân tử như Khổng tử lại thiên vị ? Vua (Lỗ) cưới con gái nước Ngô là người cùng họ, gọi bà ấy là Ngô mạnh tử (dòng thứ họ Ngô). Vua Lỗ mà biết lễ thì còn ai không biết lễ ?! Sau Vu Mã Kỳ nói lại, Khổng tử nói: Ta thật may mắn, chỉ mắc chút sai lầm thì có người phát hiện chỉ ra cho.",
            "binh": "Khổng tử không biết việc vua Lỗ (đồng hương) lấy người cùng họ, khi được người khác nói ra, ông lấy làm vui chứ không giận. Đó là bản lĩnh của người có đức nhân"
          },
          {
            "id": "7.31",
            "hanviet": "Tử dữ nhân ca nhi thiện, tất sử phản chi, nhi hậu hòa chi.",
            "nghia": "Khổng tử ngồi hát cùng người khác mà thấy ai hát hay, ắt sẽ mời họ hát lại để mình được cùng hát theo.",
            "binh": ""
          },
          {
            "id": "7.32",
            "hanviet": "Tử viết: Văn, mạc ngô do nhân dã. Cung hành quân tử, tắc ngô vị chi hữu đắc.",
            "nghia": "Khổng tử nói: Về tri thức văn hoá, ta cũng chỉ bằng người khác. Ta tự mình thực hành đạo nhân thì chưa thỏa mãn được bao nhiêu.",
            "binh": ""
          },
          {
            "id": "7.33",
            "hanviet": "Tử viết: Nhược thánh dữ nhân, tắc ngô khải cảm ? Ức vi chi bất yếm, hối nhân bất quyện, tắc khả vị vân nhĩ dĩ hĩ. Công Tây Hoa viết: Chính duy đệ tử bất năng học dã.",
            "nghia": "Khổng tử nói: Nếu bảo là người nhân đức, ta đâu dám nhận ? Hành động theo thánh nhân thì ta chưa biết chán, dạy người chưa biết mệt mỏi, chỉ có thể nói vậy thôi. Công Tây Hoa nói: Những điều đó, học trò tụi con không học nổi.",
            "binh": ""
          },
          {
            "id": "7.34",
            "hanviet": "Tử tật bệnh, Tử Lộ thỉnh đảo. Tử viết: Hữu chư ? Tử Lộ đối viết: Hữu chi. “Lụy” viết: Đảo nhĩ ư thượng thần kì.”. Tử viết: Khâu chi đảo cữu hĩ. Khổng tử bị bệnh, Tử Lộ định làm lễ cầu cúng thần linh.",
            "nghia": "Khổng tử nói: Có việc đó ư? Tử Lộ đáp: Có, sách Lụy viết: Cầu xin các vị thần ở trên. Khổng tử nói: Ta đã cầu khẩn từ lâu rồi.",
            "binh": "Thói thường, con người khi cần thiết mới đi cầu xin thần linh. Khổng tử nói “cầu khấn từ lâu” nghĩa là ông đã thực hành điều nhân đức hợp với thần linh, ắt sẽ được phù trợ"
          },
          {
            "id": "7.35",
            "hanviet": "Tử viết: Xa tắc bất tôn, kiệm tắc cố. Dữ kỳ bất tôn dã, ninh cố.",
            "nghia": "Khổng tử nói: Xa xỉ quá thì ngạo mạn thiếu khiêm tốn, tiết kiệm quá thì tủn mủn. Nếu không được rộng rãi thì thà tiết kiệm còn hơn.",
            "binh": ""
          },
          {
            "id": "7.36",
            "hanviet": "Tử viết: Quân tử thản đãng đãng, tiểu nhân trường thích thích",
            "nghia": "Khổng tử nói: Quân tử luôn luôn thẳng thắn ung dung vô tư, tiểu nhân lúc nào cũng u sầu lo lắng.",
            "binh": ""
          },
          {
            "id": "7.37",
            "hanviet": "Tử ôn nhi lệ, uy nhi bất mãnh, cung nhi an.",
            "nghia": "Khổng tử ôn hòa mà nghiêm túc, uy nghi nhưng không thô bạo, cung kính mà an nhàn. Hết thiên 7",
            "binh": ""
          }
        ]
      },
      {
        "id": "thai-ba",
        "number": 8,
        "name": "Thái Bá",
        "note": "",
        "passages": [
          {
            "id": "8.1",
            "hanviet": ":, Tử viết: Thái Bá, kỳ khả vị chí đức dã dĩ hĩ. Tam dĩ thiên hạ nhượng, dân vô đắc nhi xưng yên.",
            "nghia": "Khổng tử nói: Thái Bá là con người có đức hết mực. Ba lần đem thiên hạ nhường cho người khác, không để dân chúng biết mà ca ngợi. nguyện vua cha, bèn bàn với người em là Trọng Ung cùng trốn sang xứ Ngô Việt để cha dễ dàng thực hiện ý nguyện)",
            "binh": "Thái Bá là con trưởng của vua chư hầu Cổ Công Đán Phụ (tổ phụ nhà Chu), biết nhà vua muốn chọn Cơ Xương, con người em trai út là Quý Lịch của mình làm vua. Thái Bá biết ý"
          },
          {
            "id": "8.2",
            "hanviet": "Tử viết: Cung nhi vô lễ tắc lao, thận nhi vô lễ tắc tỉ, dũng nhi vô lễ tắc loạn, trực nhi vô lễ tắc giảo. Quân tử đốc ư thân, tắc dân hưng ư nhân, cố cựu bất di, tắc dân bất thâu.",
            "nghia": "Khổng tử nói: Cung kính mà không biết lễ thì mệt nhọc, cẩn thận mà không biết lễ thì sợ hãi, dũng cảm mà thiếu lễ thì sinh loạn nghịch, ngay thẳng mà không biết lễ thì dễ nóng nảy. Quân tử ngồi cấp trên nếu biết đối đãi nồng hậu với người thân thích thì dân chúng hăng hái theo điều nhân, không lạnh nhạt với bạn cũ, quan chức cũ thì dân chúng không đối xử bạc bẽo với nhau.",
            "binh": ""
          },
          {
            "id": "8.3",
            "hanviet": "Tăng Tử hữu bệnh, triệu môn đệ tử viết: Khải dư túc ! Khải dư thủ ! Thi vân: “Chiến chiến căng căng căng, như lâm thâm uyên, như lý bạc băng” nhi kim nhi hậu, ngô tri miễn phu, tiểu tử ! Tăng Tử ốm nặng, gọi học trò",
            "nghia": "đến nói: Xem chân của ta, xem tay ta… Kinh Thi viết “Run rẩy nơm nớp, như đi ven vực thẳm, như bước trên lớp băng mỏng nước sâu”, từ nay về sau, ta không còn lo lỡ làm thương tổn thân thể vốn của mẹ cha nữa, các trò ơi !",
            "binh": "Câu thơ trong Kinh Thi nhắc con người thường xuyên cẩn thận giữ gìn thân thể … Tăng tử sắp chết, nhận thấy thân thể mình nguyên vẹn thì yên tâm rằng chưa làm xúc phạm tổn thương thân thể, tức là đã giữ được chữ hiếu"
          },
          {
            "id": "8.4",
            "hanviet": "Tăng Tử hữu tật, Mạnh Kính tử vấn chi. Tăng Tử ngôn viết: Điểu chi thương tử, kỳ minh dã ai ; Nhân chi thương tử, kỳ ngôn dã thiện. Quân tử sở quý hồ đạo giả tam: động dung mạo, tư viễn bạo mạn hĩ; Chính nhan sắc, tư cận tín hĩ; Xuất từ khí, tư viễn bỉ bội hĩ. Biên đậu chi sự, tắc hữu ti tồn.",
            "nghia": "Tăng tử ốm nặng, Mạnh Kính tử đến thăm. Tăng tử nói: Con chim sắp chết tiếng kêu bi thương, con người sắp chết lời nói rất thực. Quân tử theo đạo cần chú ý ba điều: Cử chỉ nên khoan thai điềm đạm; ắt rời xa thô bạo ngạo mạn); Sắc mặt đoan trang nên được tín nhiệm, cất lời nói thì chú ý giọng điệu tránh thô bỉ sai sót. Còn việc cúng tế khác đã có quan chủ sự lo toan.",
            "binh": ""
          },
          {
            "id": "8.5",
            "hanviet": "Tăng Tử viết: Dĩ năng vấn ư bất năng, dĩ đa vấn ư quả, hữu nhược vô, thực nhược hư; Phạm nhi bất giáo…..Tích giả ngô hữu thường tòng sự ư tư hĩ.",
            "nghia": "Tăng tử nói: Người làm được lại dám đi hỏi người không biết, người biết nhiều lại đi hỏi kẻ biết ít. Có tài năng mà nhìn qua như không có, có học thức mà thể hiện như không. Bị xúc phạm mà không tranh cãi so đo. Ta từng có những người bạn cũ như thế.",
            "binh": ""
          },
          {
            "id": "8.6",
            "hanviet": "Tăng tử thuyết: Khả dĩ thác lục xích chi cô, khả dĩ ký bách lý chi mệnh, lâm đại tiết nhi bất đoạt dã. Quân tử nhân dư ? Quân tử nhân dã. Tăng",
            "nghia": "Tử nói: Có thể gửi gắm vua còn nhỏ tuổi, có thể giao vận mệnh quốc gia, nguy hiểm thân mình không mất khí tiết. Người ấy có phải quân tử không ? Đúng là người quân tử.",
            "binh": ""
          },
          {
            "id": "8.7",
            "hanviet": "Tăng Tử viết: Sĩ bất khả dĩ bất hoằng nghị, nhậm trọng nhi đạo viễn. Nhân dĩ vi kỷ nhậm, bất diệc trọng hồ? Tử nhi hậu dĩ, bất diệc viễn hồ ? Tăng",
            "nghia": "Tử nói: Kẻ sĩ không thể thiếu lý tưởng lớn lao và ý chí kiên cường bởi vì bởi vì họ phải gánh vác trách nhiệm lớn lao. Gánh điều nhân chẳng phải rất nặng ư ? Đến chết mới được ngừng nghỉ, chẳng phải đường dài ư ?",
            "binh": ""
          },
          {
            "id": "8.8",
            "hanviet": "Tử viết: Hưng ư thi, lập ư lễ, thành ư nhạc.",
            "nghia": "Khổng tử nói: Thơ có thể gây hứng thú làm điều tốt, lễ giúp ta lập thân, âm nhạc giúp ta tu dưỡng, hoàn thành nhân cách.",
            "binh": ""
          },
          {
            "id": "8.9",
            "hanviet": "Tử viết: Dân khả sử do chi, bất khả sử tri chi.",
            "nghia": "Khổng tử nói: Có thể khiến cho dân chúng đi theo đường của ta, không thể để họ hiểu vì sao phải như vậy.",
            "binh": "Câu nói trên có một cách hiểu khác, nếu đánh dấu phảy khác đi thì câu nói sẽ là: “Dân khả sử, do chi; Bất khả sử, tri chi”: Nếu dân đồng ý làm theo thì để họ làm; Nếu dân chưa hiểu thì phải giải thích cho họ biết)."
          },
          {
            "id": "8.10",
            "hanviet": "Tử viết: Hiếu dũng tật bần, loạn dã. Nhân nhi bất nhân, tật chi dĩ thậm, loạn dã.",
            "nghia": "Khổng tử nói: Kẻ dũng mà ghét sự nghèo hèn của mình thì dễ làm loạn. Kẻ bất nhân mà bị ghét bỏ quá mức cũng dễ làm loạn.",
            "binh": ""
          },
          {
            "id": "8.11",
            "hanviet": "Tử viết:: Như hữuChucông chi tài chi mỹ, sử kiêu thả lận, kỳ dư bất túc quan dã dĩ",
            "nghia": "Khổng tử nói: Nếu có người tài năng và nghệ thuật giỏi như Chu công mà kiêu ngạo, keo kiệt thì những phẩm chất khác của người đó không cần quan sát nữa làm chi.",
            "binh": ""
          },
          {
            "id": "8.12",
            "hanviet": "Tử viết: Tam niên học, bất chí ư lộc, bất dị đắc dã",
            "nghia": "Người đi học ba năm chẳng chú ý cầu bổng lộc, ít thấy người được như vậy.",
            "binh": ""
          },
          {
            "id": "8.13",
            "hanviet": "Tử viết: Đốc tín hiếu học, thủ tử thiện đạo. Nguy bang bất nhập, loạn bang bất cư. Thiên hạ hữu đạo tắc kiến, vô đạo tắc ẩn. Bang hữu đạo, bần thả tiện yên, sỉ dã; Bang vô đạo, phú thả quý yên, sỉ dã.",
            "nghia": "Khổng tử nói: Dốc lòng tin vào học đạo, quyết tử quên thân giữ đạo, không đến những nước nguy hiểm, không ở đất loạn lạc. Thiên hạ có đạo thì ra làm quan, vô đạo thì đi ở ẩn. Nước có đạo mà nghèo nàn thì đáng sỉ nhục. Nước nhà loạn lạc mà mình giàu có cũng đáng sỉ nhục.",
            "binh": ""
          },
          {
            "id": "8.14",
            "hanviet": "Tử viết: Bất tại kỳ vị, bất mưu kỳ chính.",
            "nghia": "Khổng tử nói: Không giữ chức vụ nào thì đừng bàn về việc ấy.",
            "binh": ""
          },
          {
            "id": "8.15",
            "hanviet": "Tử viết: Sư Chí chi thỉ “Quan thư” chi loạn, dương dương hồ doanh nhĩ tai.",
            "nghia": "Khổng tử nói: Nhạc sư Chí mới phổ nhạc bài “Quan thư”mới nghe ồn ào, sau thấy dào dạt vui thích thuận tai lắm.",
            "binh": ""
          },
          {
            "id": "8.16",
            "hanviet": "Tử viết: Cuồng nhi bất trực, đồng nhi bất nguyện, không không nhi bất tín, ngô bất tri chi hĩ.",
            "nghia": "Khổng tử nói: Cuồng vọng mà thiếu ngay thẳng, kém hiểu biết mà không chân thành, bất tài mà không tín nghĩa. Ta không hiểu loại người này.",
            "binh": ""
          },
          {
            "id": "8.17",
            "hanviet": "Tử viết: Học như bất cập, do khủng thất chi.",
            "nghia": "Khổng tử nói: Học tập phải như đuổi không kịp, dù có đuổi kịp còn sợ mất mát điều đã học.",
            "binh": ""
          },
          {
            "id": "8.18",
            "hanviet": "Tử viết: Nguy nguy hồ, Thuấn Vũ chi hữu thiên hạ dã nhi bất dự yên.",
            "nghia": "Khổng tử nói: Lồng lộng cao cả thay vua Thuấn vua Vũ, có cả thiên hạ rồi mà không kiêu hãnh tự mãn.",
            "binh": ""
          },
          {
            "id": "8.19",
            "hanviet": "Tử viết: Đại tai Nghiêu chi vi quân dã ! Nguy nguy hồ duy thiên vi đại, duy Nghiêu tắc chi. Đãng đãng hồ, dân vô năng danh yên. Nguy nguy hồ kỳ hữu thành công dã, hoán hồ kỳ hữu văn chương.",
            "nghia": "Khổng tử nói: Vĩ đại thay vua Nghiêu ! Cao quí thay, chỉ có trời là cao lớn nhất, và chỉ có vua Nghiêu theo kịp đạo trời. Mênh mông bát ngát dân chúng không ca ngợi xiết. Công lao vua Nghiêu thật vĩ đại, văn chương lễ nhạc ban ra tươi sáng khắp nơi.",
            "binh": ""
          },
          {
            "id": "8.20",
            "hanviet": "Thuấn hữu thần ngũ nhân nhi thiên hạ trị. Vũ vương viết: Dư hữu thập nhân. Khổng tử viết: Tài nan, bất kỳ nhiên hồ ? Đường Ngu chi tế, ư tư kỳ thịnh, hữu phụ nhân yên cửu nhân nhi dĩ. Tam phân thiên hạ hữu kỳ nhị, dĩ phục sự Ân.Chuchi đức, kỳ khả vị chí đức dã dĩ hĩ.",
            "nghia": "Vua Thuấn chỉ có năm hiền thần mà thiên hạ bền vững. Vua Vũ Vương từng nói: Ta có mười người. Khổng tử nói: Có được nhân tài khó thay, chẳng phải vậy ư? Sau thời Đường Ngu có lúc Vũ vương đạt đến thịnh vượng, nhưng trong 10 người chỉ có 1 người là nữ, nên thực ra chỉ có 9 người mà thôi. Được hai phần ba thiên hạ, vua Vũ vẫn lấy thân phận chư hầu phục vụ nhà Ân. Đức của vua Chu Vũ Vương là cao quí nhất.",
            "binh": ""
          },
          {
            "id": "8.21",
            "hanviet": "Tử viết: Vũ, ngô vô gian nhiên hĩ. Phỉ ẩm thực nhi trí hiếu hồ quỷ thần, ố y phục nhi trí mỹ hồ phất miện; Ti cung thất nhi tận lực hồ câu hức. Vũ, ngô vô gian nhiên hĩ.",
            "nghia": "Khổng tử nói: Vua Vũ, ta chẳng thấy có khuyết điểm nào để nói nữa. Ăn uống đạm bạc mà tế lễ quỷ thần rất thịnh soạn, trang phục bình thường giản dị mà tế lễ thì mặc đẹp, mũ miện đầy đủ. Nơi ở thì chật hẹp, dốc toàn lực ra xây dựng đê điều thủy lợi. Về vua Vũ, ta chẳng có gì để nói. Hết thiên 8",
            "binh": ""
          }
        ]
      },
      {
        "id": "tu-han",
        "number": 9,
        "name": "Tử Hãn",
        "note": "",
        "passages": [
          {
            "id": "9.1",
            "hanviet": "Tử hãn ngôn lợi dữ mệnh dữ nhân Xin xem thiên 5.13 Công Dã Tràng (Tử",
            "nghia": "Khổng tử it bàn về lợi, mệnh trời và nhân tính. Chúng tôi đã tham khảo hai cách chú giải: 1. GS. Cao Xuân Huy giải thích:”Khổng tử ít khi bàn về lợi ích liên quan đến thiên mệnh và nhân” (GS Nguyễn Huệ Chi thuật lại qua một email khi tôi hỏi ý kiến thầy). Nghĩa là chỉ bàn về lợi nếu không liên quan đến mệnh và nhân. 2. Một số học giả Trung Quốc và Đài Loan cho rằng: Khổng tử ít khi bàn về lợi nhưng có bàn về mệnh trời và nhân tính (do phiên âm như sau: Tử hãn ngôn lợi dự mệnh dự nhân) Sau cùng chúng tôi chọn cách chú giải khác và tin tưởng là đúng hơn: “Lợi”: Khổng tử it bàn về lợi, vì lợi mình mà hại người, hại đạo. Quan điểm của cổ nhân thường là:Trọng nghĩa khinh lợi, Trọng nghĩa khinh tài, Nghĩa trước, lợi sau. Quan điểm đó phù hợp với lời Khổng tử. “Thiên mệnh” huyền bí, con người chưa thể thấu hiểu được, nói tùy tiện khiến người ta lo lắng. Do đó Khổng tử không muốn bàn về “Trời”. “Nhân” là khái niệm mở rộng, rất phức tạp, không thể đơn giản bàn lý thuyết, do vậy Khổng tử chỉ xem xét những trường hợp cụ thể của chữ Nhân. Cống nói: Văn chương của thầy, chúng ta đã được biết. Còn luận bàn của thầy về nhân tính và đạo trời thì chúng ta chưa biết).",
            "binh": "(Nguyễn Thanh Phong NCS ở Đài Loan cung cấp tư liệu)."
          },
          {
            "id": "9.2",
            "hanviet": "Đạt Hạng đảng nhân viết: Đại tai Khổng tử ! Bác học nhi vô sở thành danh. Tử văn chi, vị môn đệ tử viết: Ngô hà chấp? Chấp ngự hồ ? Chấp xạ hồ ? Ngô chấp ngự hĩ.",
            "nghia": "Một người ở làng Đạt Hạng nói: “Khổng tử thật là vĩ đại ! Người học rộng nhưng rất tiếc chẳng có chức danh gì”. Khổng tử nghe được, nói với học trò: “Ta làm cái gì ư? Ta đánh xe hay là bắn cung? Thôi, ta làm nghề đánh xe vậy.”",
            "binh": "Người dân ca ngợi Khổng tử vĩ đại nhưng họ tiếc rằng ngài chẳng có danh hiệu gì. Thực ra Khổng tử vĩ đại ở đức nhân. Đây là điều cốt lõi của con người và nền tảng văn minh của xã hội…Con người không nhất thiết phải có một cái danh gì cụ thể. Nếu nhất định phải có thì ngài nhận mình là nghề đánh xe. Tức là đánh xe dẫn đường cho con người vậy !"
          },
          {
            "id": "9.3",
            "hanviet": "Tử viết: Ma miện, lễ dã; Kim dã đồn, kiệm, ngô tòng chúng. Bái hạ, lễ dã; kim bái hồ thượng, thái dã. Tuy vi chúng, ngô tòng hạ.",
            "nghia": "Khổng tử nói: Đội mũ tang bằng vải gai đen là theo lễ xưa, nay dùng vải tơ rẻ tiền hơn. Vậy ta làm theo mọi người. Còn trong việc bái yết vua, theo đúng lễ là vái từ bậc thềm dưới, đời nay người ta vái từ bậc thềm trên, như thế là kiêu mạn, ta khác với họ. ta vẫn vái ở bậc thềm dưới.",
            "binh": ""
          },
          {
            "id": "9.4",
            "hanviet": "Tử tuyệt tứ: vô ý, vô tất, vô cố, vô ngã.",
            "nghia": "Khổng tử không bao giờ mắc bốn sai lầm này: chỉ dựa vào ý riêng, áp đặt phán đoán, cố chấp, tự cho mình là đúng.",
            "binh": ""
          },
          {
            "id": "9.5",
            "hanviet": "Tử úy ư Khuông, viết: Văn Vương kí một, văn bất tại tư hồ? Thiên chi thương tang tư văn dã, hậu tử giả bất đắc dữ ư tư văn dã; Thiên chi vị táng tư văn dã, Khuông nhân kỳ như dư hà ?",
            "nghia": "Khi qua đất Khuông bị vây khốn, Khổng tử nói: Vua Văn Vương đã mất đi, chẳng phải lễ nhạc, văn hóa đều còn ở nơi ta cả ư? Nếu Trời muốn hủy diệt nền văn hoá này thì sao vua Văn Vương mất đi lại ủy thác cho ta nắm lấy làm chi ? Còn nếu Trời không muốn mất nền văn hoá này thì người Khuông làm gì được ta !",
            "binh": ""
          },
          {
            "id": "9.6",
            "hanviet": ":. :, ,:, Thái Tể vấn ư Tử Cống viết: Phu tử thánh giả dự ? Hà kỳ đa năng dã ? Tử Cống viết: Cố thiên tung chi thương thánh, hữu đa năng dã. Tử văn chi, viết: Thái Tể tri ngã hồ ? Ngô thiểu dã tiện, cổ đa năng bỉ sự. Quân tử đa hồ tai ? Bất đa dã.",
            "nghia": "Quan Thái tể hỏi Tử Cống: Khổng tử là bậc thánh phải không? Vì sao ngài nhiều tài nghệ như vậy?. Tử Cống nói: Đây do Trời để cho Khổng tử làm thánh nhân, có nhiều tài… Khổng tử biết việc này, nói: “Quan Thái tể làm sao hiểu được ta. Lúc nhỏ ta nghèo hèn, phải làm nhiều nghề nên biết nhiều việc nhỏ mọn. Người quân tử có cần biết nhiều vậy không ? Ta nghĩ không cần biết nhiều như vậy”",
            "binh": ""
          },
          {
            "id": "9.7",
            "hanviet": "„‟ Lao viết: Tử vân, ngô bất thí, cố nghệ Ông",
            "nghia": "Lao nói: “Khổng tử từng nói ta không thành danh, nên biết một số công nghệ”. biết làm gì… Còn những người không được làm quan thì ra sức tìm tòi, mưu cầu cuộc sống, rèn luyện trong gian khổ, tài năng được bộc lộ).",
            "binh": "Khổng tử ít được trọng dụng làm quan (chỉ có mấy năm làm quan nước Lỗ). Ông cho rằng làm quan thì bận rộn, đắc chí, không có chí tiến bộ nữa. Khi hết quan về làm dân thì chẳng"
          },
          {
            "id": "9.8",
            "hanviet": ": , Tử viết: Ngô hữu tri hồ tai ? Vô tri dã. Hữu bỉ phu vấn ư ngã, không không như dã. Ngã khấu kỳ lưỡng đoan nhi kiệt yên.",
            "nghia": "Khổng tử nói: Ta có nhiều hiểu biết ư ? Không, ta không hiểu biết nhiều đâu. Có một nông dân hỏi ta một việc, lúc đầu ta chưa hiểu gì cả. Sau, ta phải hỏi lại trước sau đầu đuôi, rồi ta giải thích tường tận cho họ.",
            "binh": ""
          },
          {
            "id": "9.9",
            "hanviet": "Tử viết:: Phượng điểu bất chí, hà bất xuất đồ, ngô dĩ hĩ phù !",
            "nghia": "Khổng tử nói: Phượng hoàng không bay đến, sông Hoàng Hà không xuất hiện đồ thư, đời ta thế là hết rồi !",
            "binh": "Theo truyền thuyết, thiên hạ thái bình thì chim phượng hoàng bay đến, thánh nhân xuất hiện thì trên sông Hoàng nổi tấm đồ thư (truyền thuyết về Hà đồ / bức vẽ bát quái trên sông- nguồn gốc của Kinh Dịch). Khổng tử buồn bã vì thời Xuân thu loạn lạc, chư hầu phân tranh, mất hết đạo đức lễ nghĩa, không ai theo lễ nhàChunữa"
          },
          {
            "id": "9.10",
            "hanviet": "Tử kiến tề thôi giả, miện y thường giả dữ cổ giả, kiến chi, tuy thiểu, tất tác; Quá chi, tất xu.",
            "nghia": "Khổng tử gặp người mặc tang phục, một người đội mũ miện mặc lễ phục và người mù dù họ còn trẻ, ngài cũng nhất định đứng lại hoặc nếu qua rồi thì đi nhanh hơn.",
            "binh": "Là người có đức nhân, Khổng tử thương cảm người có tang, người khuyết tật và tôn trọng người có chức tước"
          },
          {
            "id": "9.11",
            "hanviet": "Nhan Uyên vị nhiên thán viết: Ngưỡng chi di cao, toàn chi di kiên, chiêm chi tại tiền, hốt yên tại hậu. Phu tử tuần tuần nhiên thiện dụ nhân, bác ngã dĩ văn, ước ngã dĩ lễ, dục bãi bất năng. Tức kiệt ngô tài, như hữu sở lập trác nhĩ. Tuy dục tòng chi, mạt do dã dĩ",
            "nghia": "Nhan Uyên ngậm ngùi than rằng: Đạo của thầy càng ngước lên nhìn, càng thấy cao, càng nghiên cứu càng thấy sâu xa. Mới thấy phía trước, lại thấy phía sau. Thầy khéo léo dẫn giải cho ta hiểu. Thầy dùng đủ loại văn chương làm cho ta hiểu, lại dùng lễ tiết để đưa hành vi của ta vào khuôn phép, khiến ta muốn thôi cũng không được. Ta cố sức học mà vẫn thấy thầy đứng sừng sững trước mặt…Ta muốn theo đến cùng mà khó đạt yêu cầu của thầy ta.",
            "binh": ""
          },
          {
            "id": "9.12",
            "hanviet": "Tử tật bệnh, Tử Lộ sử môn nhân vi thần. Bệnh gián, viết: Cửu hĩ tai, di chi hành trá dã. Vô thần nhi vi hữu thần. Ngô thùy khi ? Khi thiên hồ? Thả dư dữ kỳ tử ư thần chi thủ dã, vô ninh tử ư nhị tam tử chi thủ hồ? Thả dư tung bất đắc đại táng, dư tử ư đạo lộ hồ ?",
            "nghia": "Khổng tử ốm nặng, Tử Lộ bảo học trò của thầy đóng vai gia thần lo liệu hậu sự. Bệnh tình thuyên giảm, Khổng tử nói: Quá lắm rồi, Trọng Do, thật quá bày vẽ. Không thực tế lại còn dối trá nữa. Ta làm gì có gia thần mà lại giả bộ thế. Ta lừa ai ? lừa trời chăng ? Giả sử ta chết trong tay gia thần, sao bằng chết trong tay học trò của ta ! Dù không được tang lễ trọng thể, chả lẽ ta chết ở ngoài đường hay sao ?",
            "binh": "Tử Lộ vì tôn kính thầy mà đạo diễn đám tang thầy theo kiểu quan chức, quí tộc. Khổng tử thì muốn hành xử theo đúng chính danh, nếu làm như trò là dối người lừa trời, chết mà còn mắc thêm tội"
          },
          {
            "id": "9.13",
            "hanviet": ": Tử Cống viết: Hữu mỹ ngọc ư tư, uẩn độc nhi tàng chư ? Cầu thiện giá nhi cô chư ? Tử viết: Cô chi tai, cô chi tai ! Ngã đãi giá giả dã. Tử",
            "nghia": "Cống nói: Đây có viên ngọc đẹp, bây giờ cất vào trong tráp hay là đem tìm người biết giá trị của nó mà bán đi ? Khổng tử đáp: Bán đi, bán đi…Ta đang đợi người biết giá của nó đây.",
            "binh": "Viên ngọc là ẩn dụ chỉ tài năng. Khổng tử nói mình chờ vua chúa mời đi làm quan"
          },
          {
            "id": "9.14",
            "hanviet": "Tử dục cư Cửu Di. Hoặc viết: Lậu, như chi hà?. Tử viết: Quân tử cư chi, hà lậu chi hữu ?",
            "nghia": "Khổng tử muốn đến đất Cửu Di để ở. Có người nói “Đất ấy quá lạc hậu, làm sao ở được”. Khổng tử nói: Có người quân tử ở đó, làm sao còn lạc hậu nữa.",
            "binh": ""
          },
          {
            "id": "9.15",
            "hanviet": "Tử viết: Ngô tự Vệ phản Lỗ, nhiên hậu nhạc chính, nhã tụng các đắc kỳ sở.",
            "nghia": "Khổng tử nói: sau khi ta từ nước Vệ trở về Lỗ, chỉnh lý lại các bản nhạc, khiến cho Nhã và Tụng có vị trí thích đáng của nó (như lễ, nhạc thời nhà Chu).",
            "binh": ""
          },
          {
            "id": "9.16",
            "hanviet": "Tử viết: Xuất tắc sự công khanh, nhập tắc sự phụ huynh, tang sự bất cảm bất miễn, bất vi tửu khốn, hà hữu ư ngã tai.",
            "nghia": "Khổng tử nói: Ở triều đình thì tôn kính công khanh. Ở nhà hiếu đễ với cha mẹ, anh chị, gặp việc tang thì chu toàn lễ tiết, rượu chè không quá say sưa. Những việc đó ta đã làm được ít nào chăng ?",
            "binh": ""
          },
          {
            "id": "9.17",
            "hanviet": "Tử tại xuyên thượng viết: Thệ giả như tư phù, bất xá trú dạ.",
            "nghia": "Khổng tử ngồi bờ sông nói: Kẻ ra đi mãi không trở lại, ngày đêm không ngừng trôi.",
            "binh": "Nhìn nước sông (kẻ ra đi) nghĩ tới thời gian, trôi đi mãi không trở lại được, Khổng tử nhận ra qui luật khách quan, nghĩ về sự phấn đấu không mệt mỏi của con người… Nhà triết học Hi Lạp cổ đại Heraclet cũng viết: “Không ai tắm hai lần trên một dòng sông”. Từ hai phương trời xa, hai tư tưởng lớn gặp nhau"
          },
          {
            "id": "9.18",
            "hanviet": "Tử viết: Ngô vị kiến hiếu đức như hiếu sắc giả dã.",
            "nghia": "Khổng tử nói: Ta chưa thấy người nào thích đức nhân như thích sắc đẹp.",
            "binh": "Ngài biết bản tính tự nhiên của con người là thích sắc đẹp, nhưng yêu cầu họ nên rèn luyện tu dưỡng chữ Nhân"
          },
          {
            "id": "9.19",
            "hanviet": ",,, Tử viết: Thí như vi sơn, vị thành nhất trách, chỉ, ngô chỉ dã; Thí như bình địa, tuy phúc nhất trách, tiến, ngô vãng dã.",
            "nghia": "Khổng tử nói: Cũng như đắp núi, nếu thêm một sọt nữa thì thành núi, nếu ta đột nhiên ngưng lại là do ta tự dừng lại. Lại ví như ta đắp hang hố thành đất bằng, chỉ đổ thêm một sọt đất nữa thôi, ta cũng cố gắng tiếp tục, đó là do ta muốn tiến đến thành công.",
            "binh": ""
          },
          {
            "id": "9.20",
            "hanviet": "Tử viết: Ngữ chi nhi bất nọa giả, kỳ Hồi dã dư !",
            "nghia": "Khổng tử nói: Người nghe ta nói mà không uể oải, có lẽ chỉ có Nhan Hồi.",
            "binh": ""
          },
          {
            "id": "9.21",
            "hanviet": "Tử vị Nhan Uyên: Tích hồ ! Ngô kiến kỳ tiến dã, vị kiến kỳ chỉ dã.",
            "nghia": "Khổng tử nói về Nhan Uyên than rằng: Tiếc thay ! Ta chỉ thấy trò Hồi không ngừng tiến lên, chứ chưa bao giờ thấy trò ấy ngừng phấn đấu.",
            "binh": ""
          },
          {
            "id": "9.22",
            "hanviet": "Tử viết: Miêu nhi bất tú giả hữu hĩ phù; Tú nhi bất thực giả hữu hĩ phù !",
            "nghia": "Khổng tử nói: Lúa nảy mầm mà không ra đòng nở hoa, chuyện này đích xác là có đây ! Làm đòng nở hoa mà không kết hạt, chuyện này đích xác là có đây!",
            "binh": "Khổng tử ví người quân tử cũng như cây lúa vậy, nghĩa là phải có ích"
          },
          {
            "id": "9.23",
            "hanviet": "Tử viết: Hậu sinh khả úy, yên tri lai giả chi bất như kim dã ? Tứ thập, ngũ thập nhi vô văn yên, tư diệc bất túc úy dã dĩ.",
            "nghia": "Khổng tử nói: Những người sinh sau rất đáng sợ, nhưng biết đâu tương lai của họ không bằng hiện nay ! Nếu họ đến bốn chục, năm chục tuổi mà chưa có tiếng tăm gì thì không phải sợ họ nữa.",
            "binh": ""
          },
          {
            "id": "9.24",
            "hanviet": "Tử viết: Pháp ngữ chi ngôn, năng vô tòng hồ ? Cải chi vi quí. Tốn dữ chi ngôn, năng vô duyệt hồ ? Dịch chi vi quí. Duyệt nhi bất dịch, tòng nhi bất cải, ngô mạt như chi hà dã dĩ hĩ.",
            "nghia": "Khổng tử nói: Lời nói đúng đắn có thể không nghe theo ư ? Làm theo lời ấy mà sửa chữa mới là quý. Lời nói từ tốn nhẹ nhàng nghe không vui sướng sao ? Vui thích chưa đủ, còn phải suy nghĩ nữa. Chỉ biết tiếp thu mà không sửa chữa, biết vui thích mà không suy nghĩ, ta chả biết loại người ấy thế nào nữa.",
            "binh": ""
          },
          {
            "id": "9.25",
            "hanviet": "Tử viết:: Chủ trung tín, vô hữu bất như kỷ giả, quá tắc vật đạn cải.",
            "nghia": "Khổng tử nói: Cốt yếu là phải biết giữ trung và tín, không kết bạn với kẻ không giống mình, có lỗi thì biết sửa chữa.",
            "binh": ""
          },
          {
            "id": "9.26",
            "hanviet": "Tử viết: Tam quân khả đoạt soái dã, thất phu bất khả đoạt chí dã.",
            "nghia": "Khổng tử nói: Trước ba quân, có thể cướp cờ, đoạt tướng nhưng không thể cướp đoạt ý chí của người dân bình thường.",
            "binh": "Khổng tử muốn nhắn nhủ các chính khách, tướng lĩnh, nhà lãnh đạo phải nghĩ đến ý chí nhân dân, không thể áp đặt chính kiến cho họ"
          },
          {
            "id": "9.27",
            "hanviet": "Tử viết: Ý tệ uân bào, dự ý hồ hạc giả lập nhi bất sỉ giả, kỳ Do dã dư ? Bất kỵ bất cầu, hà dụng bất tang ? Tử Lộ chung thân tụng chi. Tử viết: Thị đạo dã, hà túc dĩ tang ?",
            "nghia": "Khổng tử nói: Mặc áo vải cũ rách dám đứng chung với người áo lông gấm mà không hổ thẹn, ta thấy chỉ có Tử Lộ thôi. Kinh Thi có câu: Không đố kỵ, chẳng tham cầu, làm gì mà chẳng tốt đẹp”. Tử Lộ nghe được, thích lắm cứ đọc mãi hai câu này… Thấy vậy Khổng tử bảo: Chỉ có đọc thuộc như vậy, chưa đủ tốt đẹp được.",
            "binh": ""
          },
          {
            "id": "9.28",
            "hanviet": "Tử viết: Tuế hàn nhiên hậu tri tùng bá chi hậu điêu hậu dã.",
            "nghia": "Khổng tử nói: Mùa lạnh, mới biết cây tùng cây bách rụng lá sau cùng",
            "binh": "người quân tử được ví như cây tùng cây bách chịu đựng mọi thời tiết"
          },
          {
            "id": "9.29",
            "hanviet": "Tử viết: Trí giả bất hoặc, nhân giả bất ưu, dũng giả bất cụ",
            "nghia": "Khổng tử nói: Người có trí tuệ không nhầm lẫn, người đức nhân không bao giờ ưu lo, người dũng khí chẳng bao giờ sợ hãi.",
            "binh": ""
          },
          {
            "id": "9.30",
            "hanviet": "Tử viết: Khả dự cộng học, vị khả dự thích đạo; Khả dự thích đạo, vị khả dự lập; Khả dự lập, vị khả dự quyền.",
            "nghia": "Khổng tử nói: Cùng học với nhau chưa chắc cùng đắc đạo như nhau. Có thể cùng đạt như nhau nhưng chưa chắc kiên định đạo lý như nhau. Có thể cùng kiên định như nhau, chưa chắc hành xử phù hợp hoàn cảnh như nhau.",
            "binh": "Có thể suy ra: có bằng cấp như nhau chưa chắc trình độ ngang nhau…Cùng chức vụ ngang nhau, chưa chắc làm tốt như nhau."
          },
          {
            "id": "9.31",
            "hanviet": "thiên kỳ phản nhi. Khải bất nhĩ tư, thất thị viễn nhi. Tử viết: Vị chi tư dã, phù hà viễn chi hữu? “Cây đường lệ nở hoa Đung đưa nở rồi khép Anh đâu quên nhớ em Chỉ vì nhà xa quá !”",
            "nghia": "Đọc xong 4 câu thơ trên, Khổng tử bình luận: Vậy là chẳng “nhớ” gì đâu. Nhớ thật thì có gì là xa xôi ?! Khổng tử ?! Khổng tử còn mượn bài thơ nói về một chuyện khác: Yêu đạo lý là thật lòng nhưng người học kêu khó quá, kêu thiếu thời gian, nại ra mọi lý do lý trấu để trì hoãn việc học đạo…) Hết thiên 9",
            "binh": "; Khổng tử là một nhà phê bình văn học sắc sảo đến lạnh lùng…Những người làm thơ viết nhạc trẻ đã viết ra những thơ tình, nhạc tình sướt mướt, uốn éo giả tạo nghĩ gì khi đọc"
          }
        ]
      },
      {
        "id": "huong-dang",
        "number": 10,
        "name": "Hương Đảng",
        "note": "",
        "passages": [
          {
            "id": "10.1",
            "hanviet": "Khổng tử ư hương đảng, tuân tuân như dã, tự bất năng ngôn giả. Kỳ tại tông miếu, triều đình, tiện tiện ngôn, duy cẩn nhĩ.",
            "nghia": "Khổng tử ở quê nhà, đối với bậc trên, kính cẩn chậm chạp, như không biết nói gì làm gì. Nhưng khi ở nơi tông miếu triều đình làm việc, Khổng tử làm việc chắc chắn, thận trọng.",
            "binh": ""
          },
          {
            "id": "10.2",
            "hanviet": "Triều, dữ hạ đại phu ngôn, khản khản như dã; Dữ thượng đại phu ngôn, ngân ngân như dã. Quân tại, địch địch như dã, dữ dữ như dã.",
            "nghia": "Ở triều đình, (Khổng tử) nói chuyện với quan đại phu dưới quyền thì thẳng thắn, với quan cấp trên thì giữ thái độ từ tốn. Khi vua đến thì ngài cung kính rụt rè như không yên tâm, không thể hiện cử chỉ gì thất lễ.",
            "binh": ""
          },
          {
            "id": "10.3",
            "hanviet": "Quân triêụ sử thấn, sắc bột như dã; Túc khước như dã. Ấp sở dự lập, tả hữu thủ, y tiền hậu, xiêm như dã. Xu tiến, dực như dã. Tân thoái, tất phục mệnh viết: Tân bất cố hĩ. Vua triệu đến tiếp khách, Khổng tử tiếp chỉ xong thái độ nghiêm trang.Trước mặt khách, Khổng tử cẩn thận chu đáo, chân bước nhanh hơn. Đứng chào khách, ngài chắp hai tay cúi",
            "nghia": "đầu, bên trái rồi bên phải, trang phục ngay ngắn chỉnh tề phía trước và phía sau. Dẫn khách vào, đi nhanh lên trước đưa thẳng hai tay như cánh chim. Khách ra về, ngài quay lại vua thưa: Khách không còn ngoảnh mặt lại nữa.",
            "binh": ""
          },
          {
            "id": "10.4",
            "hanviet": "Nhập cung môn, cúc cung như dã, như bất dung. Lập bất trung môn, hành bất lý vực. Quá vị, sắc bột như dã, túc khước như dã, kỳ ngôn tự bất túc giả. Nhiếp tư thăng đường, cúc cung như dã, bình khí tựa bất tức giã. Xuất, hàng nhất đẳng, sính nhan sắc, di di như dã. Một giai, xu tiến, dực như dã. Phục kỳ vị, địch địch như dã.",
            "nghia": "Khi vào cửa cung điện, Ngài kính cẩn khom lưng, như mình không có chỗ dung thân (cảm thấy mình không xứng đáng). Không đứng giữa cửa, không dẫm chân lên ngưỡng cửa; Khi đi ngang chỗ vua ngồi, sắc mặt hơi đổi, chân bước nhanh hơn, nói khe khẽ. Khi vén áo bước lên công đường, ngài cúi mình nín thở. Khi trở ra, xuống một bậc thềm thì sắc mặt ngài thư giãn vui vẻ, xuống tới bậc chót rảo bước, hai tay đưa như chim xòe cánh. Trở lại vị trí của mình thì ngài giữ vẻ cung kính.",
            "binh": ""
          },
          {
            "id": "10.5",
            "hanviet": "Chấp Khuê, cúc cung như dã, như bất thăng. Thượng như ấp, hạ như thụ. Bột như chiến sắc, túc súc súc, như hữu tuần. Hưởng lễ, hữu dung sắc. Tư địch, du du như dã.",
            "nghia": "Mang ngọc Khuê (đi sứ, dâng lên vua chư hầu) hai tay dâng lên như bưng không nổi, Khổng tử giơ ngọc lên (như chào) rồi hạ xuống ngang ngực, báo hiệu sắp dâng lễ, nét mặt kính sợ. Khi dâng lễ vật, ngài tươi tắn trang trọng. Khi đưa lễ của riêng mình thì ngài thoải mái vui tươi.",
            "binh": ""
          },
          {
            "id": "10.6",
            "hanviet": "Quân tử bất dĩ cám tưu sức, hồng tử bất dĩ vi tiết phục. Đương thử, chẩn hi khích, tất biểu nhi xuất chi. Tri y, cao cừu; Tố y, nghê cứu; Hoàng y, hồ cừu, tiết tiết trường, đoản hữu mệ. Tất hữu tẩm y, trường nhất thân hữu bán. Hồ hạc chi hậu di cư. Khứ tang, vô sở bất bội. Phi duy thường, tất sát chi. Cao cừu huyền quan bất dĩ điếu. Cát nguyệt, tất phục nhi triều. Quân tử không dùng màu xanh da trời và màu đỏ nâu để viền quần áo (màu xanh da trời là màu dùng khi cúng tế, màu đỏ nâu dùng khi có tang). Trời nóng, Khổng tử mặc áo đơn",
            "nghia": "mỏng nhất định có lót bên trong. Mùa lạnh áo da cừu đen bên trong, áo dài đen ở ngoài; hoặc áo da hươu trắng bên trong thì áo dài trắng ở ngoài, nếu mặc áo da cáo màu vàng ở trong thì áo dà vàng ở ngoài. Áo thường ngày mặc ở nhà dài hơn lễ phục một ít, ống tay phải ngắn hơn ống trái một ít cho dễ làm việc. Khi ngủ ngài mặc áo dài bằng nửa người. Áo da hạc da cáo mặc làm việc nhà có lông dày và ấm. Khi mãn tang thì ngài thường đeo ngọc. Nói chung áo mặc ở nhà thì giản dị hơn. Không mặc áo da cừu màu đen và mũ đen đi viếng tang. Ngày đầu tháng, Khổng tử mặc triều phục vào chầu vua.",
            "binh": ""
          },
          {
            "id": "10.7",
            "hanviet": "Trai, tất hữu minh y, bố. Trai, tất biến thực, cư tất thiên tọa.",
            "nghia": "Vào kỳ tế lễ, Khổng tử giữ mình sạch sẽ, mặc áo vải trắng. Trong kỳ tế lễ, thay đổi thức ăn, dời phòng nghỉ (tạm không ở chung phòng với thê, thiếp)",
            "binh": ""
          },
          {
            "id": "10.8",
            "hanviet": ",,, ,,, Thực bất yếm tinh, khoái bất yếm tế. Thực bất nhi ế, ngư nỗi nhi nhục bại, bất thực. Sắc ố, bất thực. Xú ố, bất thực. Thất nhẫm, bất thực. Bất thời, bất thực, cát bất chính, bất thực. Bất đắc kỳ tương, bất thực. Nhục tuy đa, bất sử thắng thực khí. Duy tửu vô lượng, bất cập loạn. Cô tửu thị bô, bất thực. Bất triệt khương thực, bất đa thực.",
            "nghia": "Về ăn uống Khổng tử không cần cao lương mỹ vị nhưng chọn thực phẩm vệ sinh và hợp đạo lí quân tử. Gạo giã trắng, thịt thái mỏng. Ngài không ăn tám loại sau đây: lương thực để lâu đổi màu, thức ăn ôi thiu, rau quả héo úa, thịt cá sống đã ngả màu, thức ăn có mùi khó ngửi, nấu sống hay chín quá, thực phẩm trái mùa, thức ăn nêm nếm không đúng cách, miếng thịt thái không vuông vắn. Thức ăn nhiều ngài cũng không ăn quá no, rượu không giới hạn nhưng không quá say. Không mua rượu và thịt khô ngoài chợ. Mỗi bữa ăn đều có gừng, chỉ vừa đủ.",
            "binh": ""
          },
          {
            "id": "10.9",
            "hanviet": "Tế ư công, bất túc nhục, tế nhục bất xuất tam nhật. Xuất tam nhật, bất thực chi hĩ.",
            "nghia": "Khổng tử dự lễ ở tông miếu, không để thịt qua đêm. Khi tế ở nhà, ngài không để thịt quá ba ngày. Nếu quá ba ngày, ngài không ăn nữa.",
            "binh": ""
          },
          {
            "id": "10.10",
            "hanviet": "Thực bất ngữ, tẩm bất ngôn.",
            "nghia": "Khi ăn không trò chuyện, khi ngủ cũng không nói chuyện với ai.",
            "binh": ""
          },
          {
            "id": "10.11",
            "hanviet": "Tuy sơ thực thái canh, qua tế, tất trai như dã.",
            "nghia": "Tuy ăn cơm rau cải bình thường, Khổng tử cũng cúng một ít dưa, thành tâm như cúng lễ.",
            "binh": ""
          },
          {
            "id": "10.12",
            "hanviet": "Tịch bất chính, bất tọa.",
            "nghia": "Chiếu trải không ngay ngắn, (ngài) không ngồi.",
            "binh": ""
          },
          {
            "id": "10.13",
            "hanviet": "Hương nhân ẩm tửu, trượng gỉa xuất, tư xuất hĩ.",
            "nghia": "Khi uống rượu với người làng, đợi các cụ cao tuổi rời khỏi mâm, Khổng tử mới rời sau.",
            "binh": ""
          },
          {
            "id": "10.14",
            "hanviet": "Hương nhân na, triều phục nhi lập ư tộ giai.",
            "nghia": "Người làng làm lễ tống quỷ nghênh thần, Khổng tử mặc triều phục đứng bậc thềm phía đông.",
            "binh": "Khổng tử quen lệ cúng tế ở triều đình, quan chức đứng phiá đông. Về quê thầy vẫn coi trọng lễ như thế"
          },
          {
            "id": "10.15",
            "hanviet": "Vấn nhân ư tha bang, tái bái nhi tống chi.",
            "nghia": "Khi nhờ người thăm hỏi bạn hữu ở nước khác, Khổng tử vái người đưa tin hai cái để tiễn người ấy.",
            "binh": "Môt vái cảm tạ và tống tiễn người đưa tin, một vái gửi người bạn hữu ở nước kia"
          },
          {
            "id": "10.16",
            "hanviet": "Khang tử quĩ dược, bái nhi thụ chi. Viết: Khâu vị đạt, bất cảm thường .",
            "nghia": "Quí Khang tử biếu thuốc, Khổng tử bái tạ rồi mới nhận, rồi nói: Khâu này chưa rõ tính thuốc nên chưa dám nếm.",
            "binh": ""
          },
          {
            "id": "10.17",
            "hanviet": "Cứu phần. Tử thoái trào, viết: Thương nhân hồ ? Bất vấn mã.",
            "nghia": "Chuồng ngựa cháy. Khổng tử rời khỏi triều đình, về đến nhà chỉ hỏi “Có ai bị thương không?”. Không hỏi ngựa.",
            "binh": "những người nuôi ngựa là nô lệ nhưng vẫn được Khổng tử coi trọng như người bình thường, người thân thích"
          },
          {
            "id": "10.18",
            "hanviet": "Quân tứ thực, tất chính tịch tiên thường chi. Quân tứ tinh, tất thục nhi tiến chi. Quân tứ sinh, tất súc chi. Thị thực ư quân, quân tế, tiên phạn.",
            "nghia": "Vua ban cho thức ăn chín, Khổng tử nhất định trải chiếu ngay ngắn rồi mới ngồi ăn. Vua ban thức ăn sống, Khổng tử nấu xong, cúng tổ tiên rồi mới ăn. Vua ban cho con vật còn sống, Khổng tử giữ lại nuôi. Khi ngồi hầu cơm vua, vua đang tế lễ, Khổng tử nếm trước.",
            "binh": "Khổng tử nếm trước như một vệ sĩ để kiểm tra an toàn thực phẩm)."
          },
          {
            "id": "10.19",
            "hanviet": "Tật, quân thị chi, đông thủ, gia triều phục, tha thân.",
            "nghia": "Khổng tử bệnh nằm ở nhà, vua đến thăm, Khổng tử chuyển đầu hướng phiá đông, đem triều phục đắp lên người, dây đeo ở trên cùng.",
            "binh": ""
          },
          {
            "id": "10.20",
            "hanviet": "Quân mệnh triệu, bất sĩ giá hành hĩ.",
            "nghia": "Khi vua gọi, Khổng tử đi bộ tới ngay, không cần xe.",
            "binh": "Theo nghi lễ, các quan được quyền đi xe ngựa theo cấp bậc, Khổng tử đi bộ để khỏi phải chờ xe lâu, tận tụy với nhiệm vụ"
          },
          {
            "id": "10.21",
            "hanviet": "Nhập thái miếu, mỗi sự vấn.",
            "nghia": "Khi vào lễ thái miếu, Khổng tử gặp điều gì cũng hỏi.",
            "binh": "Thái miếu là miếu thờ tổ tiên của vua. Khổng tử hỏi lại nghi lễ cho chắc ăn, để tránh sai sót"
          },
          {
            "id": "10.22",
            "hanviet": "Bằng hữu tử, vô sở quy, viết: Ư ngã thấn. Bạn hữu qua đời, không có thân thuộc,",
            "nghia": "Khổng tử nói: Việc này do ta chịu trách nhiệm.",
            "binh": ""
          },
          {
            "id": "10.23",
            "hanviet": "Bằng hữu chi quĩ, tuy xa mã, phi tế nhục, bất bái.",
            "nghia": "Bạn hữu tặng quà, dù là vật quí như xe ngựa nhưng không phải vật cúng tế được thì khi nhận, Khổng tử không bái tạ.",
            "binh": ""
          },
          {
            "id": "10.24",
            "hanviet": "Tẩm bất thi, cư bất dung.",
            "nghia": "Ngủ ở nhà Khổng tử không nằm duỗi thẳng như cái xác, ở nhà dung mạo bình thường, không quá nghiêm túc",
            "binh": ""
          },
          {
            "id": "10.25",
            "hanviet": ", Kiến tế thôi giả, tuy hiệp, tất biến. Kiến miện giả dự cổ giả, tuy tiết, tất dĩ mạo. Hung phục giả thức chi. Thức phụ bản giả. Hữu thịnh soạn, tất biến sắc nhi tác.Tấn lôi phong liệt ất biến.",
            "nghia": "Gặp người có tang tuy là quan hệ thân cận, Khổng tử vẫn thay đổi thái độ tỏ lòng thương xót. Nhìn thấy người mặc triều phục đội mũ miện hoặc người mù tuy là người quen, Khổng tử vẫn giữ thái độ lịch sự. Đi xe trên đường, gặp người mặc tang phục, Khổng tử cúi người phía trước gật đầu như chia sẻ với họ, tay vịn thành xe. Gặp người cầm sổ sách nhà nước cũng cúi chào như vậy để tỏ lòng kính trọng. Khi làm khách, thấy chủ nhà dọn mâm thịnh soạn, Khổng tử cũng thay đổi thái độ, cảm ơn rồi mới cầm đũa. Thấy cơn sấm to gió lớn, Khổng tử cũng tỏ vẻ lo lắng thiên tai gây họa cho dân.",
            "binh": ""
          },
          {
            "id": "10.26",
            "hanviet": "Thăng xa, tất chính lập, chấp tuy, xa trung, bất nội cố, bất tật ngôn, bất thân chỉ.",
            "nghia": "Lên xe, phải đứng thẳng, nắm sợi dây vịn rồi bước lên, vào trong xe. Lên xe rồi, không nhìn vào trong (tránh tò mò), không nói chuyện ngay, không giơ tay chỉ trỏ.",
            "binh": ""
          },
          {
            "id": "10.27",
            "hanviet": "Sắc tư cử hĩ, tường nhi hậu tập. Viết: Sơn lương thư trĩ, thời tai thời tai !. Tử Lộ cộng chi, tam khữu nhi tác.",
            "nghia": "Con chim thấy người có khí sắc dữ tợn, nó cất cánh bay đi vòng lại, rồi mới đỗ xuống. Khổng tử nói: Con chim trĩ mái trên sườn núi kia nó biết thời cơ lắm thay ! Tử Lộ định vồ bắt, nó kêu ba tiếng mà bay đi. Hết thiên 10",
            "binh": "Con chim trước khi đỗ xuống thì quan sát, thấy người lạ, nó lượn vòng một lát, thấy yên tâm mới hạ cánh. Khổng tử lấy việc đó khuyên bảo học trò đi tới đâu cũng phải quan sát sự an nguy rồi hãy ở)."
          }
        ]
      },
      {
        "id": "tien-tien",
        "number": 11,
        "name": "Tiên Tiến",
        "note": "",
        "passages": [
          {
            "id": "11.1",
            "hanviet": "Tử viết: Tiên tiến ư lễ nhạc, dã nhân dã; hậu tiến ư lễ nhạc, quân tử dã. Như dụng chi, tắc ngô tòng tiên tiến.",
            "nghia": "Khổng tử nói: Đời trước dùng lễ nhạc coi trọng phối hợp nội dung và hình thức, về sau bị coi là quê mùa. Đời sau coi trọng hình thức hơn nội dung thì được xem là quân tử. Khi dùng lễ nhạc, ta vẫn theo đời trước. Thời thượng cổ, chưa có lễ nhạc nên loài người còn lẫn lộn với các loài vật khác. Dần dần con người trải qua kinh nghiệm, đặt ra lễ và nhạc, đặc biệt đầu nhà Chu có những thành tựu đầu tiên (Nhà Chu bắt đầu từ thế kỷ 11 trước CN đến thế kỷ 3 tr.CN gồm 2 hai thời kỳ Tây Chu và Đông Chu, Đông Chu lại chia ra hai giai đoạn Xuân thu và Chiến quốc). Khổng tử sinh trưởng vào cuối giai đoạn Xuân thu (778 – 455 tr CN) nên ông gọi các bậc tiền bối thời Tây Chu và trước nữa là các vị vua Nghiêu, Thuấn, Vũ, Chu Công Đán (thời kỳ truyền thuyết) là cổ nhân, coi đó là mẫu mực của Lễ và Nhạc… Đến thời Khổng tử, lễ nhạc đã thay đổi nhiều, phong phú hơn với hình thức chải truốt văn vẻ nhưng lại mất đi tính chất phác, chân thực của cổ nhân [Nhà Tây Chu có một vị quan được phân công coi việc lễ-nhạc gọi là Nho quan () tương tự bộ trưởng Bộ văn hóa ngày nay…Đời sau nhận thấy học thuyết Khổng tử rất coi trọng lễ nhạc (Nho) nên tạm gọi tên học thuyết của ngài là Nho học . Khổng tử thất vọng vì thấy lễ nhạc cổ nhân bị thay đổi, ông cho rằng đó chính là nguyên nhân dẫn đến sự suy đồi, bại hoại của chính trị, xã hội, luân lý, đạo đức.",
            "binh": "Chú thích: “Lễ” là những qui định, trật tự thích hợp với mọi việc trong cuộc sống, “nhạc” là sự hòa hợp của mọi việc, biểu hiện ra bằng bản nhạc, lời ca, điệu múa. Lễ và nhạc là hạt nhân của văn hóa truyền thống Trung Hoa, gắn liền với lịch sử phát triển văn hóa dân tộc."
          },
          {
            "id": "11.2",
            "hanviet": "Tử viết: Tòng ngã ư Trần, Thái giả, giai bất cập môn dã. Đức hạnh: Nhan Hồi, Mẫn Tử Khiên, Nhiễm Bá Ngưu, Trọng Cung. Ngôn ngữ: Tể Ngã, Tử Cống. Chính sự: Nhiễm Hữu, Quý Lộ. Văn học: Tử Du, Tử Hạ.",
            "nghia": "Khổng tử nói: Những người cùng theo ta sang nước Trần, nước Thái nay không còn ở bên ta nữa. Về đức hạnh tốt có: Nhan Hồi, Mẫn Tử Khiên, Nhiễm Bá Ngưu, Trọng Cung. Khéo ăn nói giao tiếp có: Tể Ngã, Tử Cống. Giỏi chính trị có: Nhiễm Hữu, Quý Lộ. Tài văn học có: Tử Du, Tử Hạ.",
            "binh": "Dạy học, Khổng tử biết rằng mỗi học trò có khả năng khác nhau dù cùng học một thầy, chung một bài giảng"
          },
          {
            "id": "11.3",
            "hanviet": "Tử viết: Hồi dã phi trợ ngã giả dã, ư ngô ngôn vô sở bất thuyết",
            "nghia": "Khổng tử nói: Nhan Hồi không phải người giúp ta mở mang kiến thức. Không lời nào ta nói mà trò ấy không thích. (Lời bàn: Khổng tử nêu ra một tư tưởng độc đáo và hiện đại: Thầy và trò cùng mở mang nâng cao kiến thức cho nhau… gọi là giáo dục tương tác)",
            "binh": ""
          },
          {
            "id": "11.4",
            "hanviet": "Tử viết: Hiếu tai Mẫn Tử Khiêm ! Nhân bất gian ư kỳ phụ mẫu côn đệ chi ngôn.",
            "nghia": "Khổng tử nói: Mẫn Tử Khiêm thật là người hiếu thuận. Lời khen của người ngoài giống như lời khen của cha mẹ. Nhị thập tứ hiếu là một tác phẩm văn học thời Nguyên do Quách Cư Nghiệp (1277- 1367) biên soạn, kể lại sự tích 24 tấm gương hiếu thảo nổi tiếng. Trong đó có ba tấm gương vốn là học trò của Khổng tử: Tăng tử (Mẹ cắn ngón tay, tim con đau xót). Mẫn Tử Khiêm (Mẫn Tồn) chịu rét giữ hiếu. Tử Lộ (Trọng Do): vác gạo đường xa nuôi cha mẹ.",
            "binh": "Chú thích: Mẫn Tử Khiêm, tên chữ là Mẫn Tồn, học trò Khổng Tử, mẹ mất sớm, người cha có vợ khác và sinh hạ được hai con. Người dì ghẻ đối với Mẫn vô cùng khắc nghiệt, nhưng anh vẫn một lòng hiếu thuận. Mùa Đông giá rét, hai con riêng của bà thì được mặc áo lót bông, riêng Mẫn Tử Khiên thì mặc áo độn hoa lau ở bên trong. Tuy không đủ ấm, nhưng Mẫn chẳng bao giờ hở môi kêu ca. Một hôm, cha Mẫn đi dạo chơi, anh theo đẩy xe, vì quá rét, tay cóng nên rời tay xe ra. Người cha thấy thế biết là người kế mẫu ác nghiệt để cho con ông chịu rét lạnh, liền định đuổi người đàn bà cay nghiệt kia đi. Mẫn khóc lóc và kêu van với cha, xin đừng đuổi kế mẫu đi. Mẫn nói kế mẫu còn ở thì chỉ mình anh chịu rét, nếu bà đi rồi, cả hai em chịu rét và khổ lây. Cha anh nghe theo, và người kế mẫu biết chuyện hiếu thảo của người con chồng, từ đó bà thay đổi tính nết trở nên một bậc hiền mẫu."
          },
          {
            "id": "11.5",
            "hanviet": "Nam Dung tam phục Bạch Khuê, Khổng tử dĩ kỳ huynh chi tử thê chi.",
            "nghia": "Nam Dung ba lần đọc thông mấy câu thơ Bạch Khuê. Khổng tử đem con gái của anh trai mình gả cho Dung.",
            "binh": "Trong Kinh Thi có hình tượng “bạch khuê” là viên ngọc trắng. Câu thơ nói rằng vết nhơ trên viên ngọc trắng còn mài bỏ đi được, vết nhơ trong lời nói không thể xóa bỏ…Nam Dung thích câu này nên hay đọc. Khổng tử khen ngợi Dung có đức hạnh"
          },
          {
            "id": "11.6",
            "hanviet": "Quý Khang tử vấn: Đệ tử thục chi vi hiếu học ? Khổng tử đối viết: Hữu Nhan Hồi giả hiếu học, bất hạnh đoản mệnh tử hĩ, kim dã tắc vong.",
            "nghia": "Quý Khang tử hỏi: Trong số học trò của ngài, ai là người hiếu học nhất? Khổng tử nói: Có Nhan Hồi ham học nhất, không may đoản mệnh, chết mất rồi. Bây giờ chẳng còn ai nữa.",
            "binh": ""
          },
          {
            "id": "11.7",
            "hanviet": "Nhan Uyên tử, Nhan Lộ vị tử chi xa dĩ vi chi quách. Tử viết: Tài bất tài, diệc các ngôn kỳ tử dã. Lý dã tử, hữu quan nhi vô quách. Ngô bất đồ hành dĩ vi chi quách. Dĩ ngô tòng đại phu chi hậu, bất khả đồ hành dã.",
            "nghia": "Nhan Uyên chết, Nhan Lộ đề nghị với Khổng tử bán cái xe để mua cái quách (ngoài quan tài). Khổng tử nói: Dù có tài hay bất tài, đều là hàng con cháu chúng ta cả. Đến như Lý chết cũng chỉ có quan tài không có quách. Ta không thẻ bán xe để mua quách. Ta đã từng làm quan đại phu, không thể đi bộ được.",
            "binh": "Nhà Nhan Uyên quá nghèo không thể mua quách được. Nhan Lộ là cha Nhan Uyên xin thầy Khổng bán xe mua quách cho Uyên, Khổng tử không đồng ý, cho rằng làm việc tang cũng nên lượng sức mình, tránh tốn kém, ngay cả Lý là con trai Khổng tử chết cũng không có quách"
          },
          {
            "id": "11.8",
            "hanviet": "Nhan Uyên tử, Tử viết: Ức ! Thiên tang dư ! Thiên tang dư !",
            "nghia": "Nhan Uyên chết, Khổng tử kêu: Hỡi ôi, Trời hại ta, Trời hại ta rồi !",
            "binh": ""
          },
          {
            "id": "11.9",
            "hanviet": "Nhan Uyên tử, tử khấp chi đỗng. Tòng giả viết: Tử đỗng hồ ? Phi phu nhân chi vi đỗng nhi thùy vi ?",
            "nghia": "Nhan Uyên chết, Khổng tử khóc lóc thảm thiết. Người đi theo Khổng tử nói: Thầy quá buồn bã. Khổng tử đáp: Ta buồn lắm sao? Ta không buồn vì người này thì còn buồn vì ai nữa !",
            "binh": "Khổng tử nghĩ rằng Nhan Uyên là người kế tục sự nghiệp truyền đạo Nhân của mình mà nay anh ta chết nên thầy thất vọng rất lớn"
          },
          {
            "id": "11.10",
            "hanviet": "Nhan Uyên tử, môn nhân dục hậu táng, Tử viết: Bất khả. Môn nhân hậu táng chi. Tử viết: Hồi dã thị dư do phụ dã, dư bất đắc thị do tử dã. Phi ngã dã, phu nhị tam tử dã. Nhan Uyên chết, bạn học muốn chôn cất trọng thể,",
            "nghia": "Khổng tử nói: “Không thể được”. Học trò vẫn hậu táng Nhan Uyên. Khổng tử nói: “Nhan Uyên coi ta như cha, còn ta không được đối xử với trò đó như con ta. Đây chẳng phải là cái sai của ta, mà do các trò đứng ra tổ chức”.",
            "binh": "Khổng tử cho rằng Nhan Uyên là người cao thượng, cách sống giản dị nên cũng an táng giản dị mới phải, như Khổng tử đã an táng con trai mình. Theo Khổng tử, nên an táng người chết theo như phẩm hạnh và tập quán của người đó, như vậy mới là tôn trọng người đã khuất)."
          },
          {
            "id": "11.11",
            "hanviet": "Quý Lộ vấn sự quỉ thần. Tử viết: Vị năng sự nhân, yên năng sự quỉ ? Viết: Cảm vấn tử. Viết: Vị tri sinh, yên tri tử? Quý Lộ hỏi về quỷ thần.",
            "nghia": "Khổng tử nói: Chưa biết việc người, làm sao biết được việc quỷ thần? Tử Lộ lại hỏi: Con xin hỏi về đạo lý của sự chết? Khổng tử nói: Chưa biết đạo lý sự sống, sao biết được đạo lý của sự chết.",
            "binh": "Khổng tử có quan niệm rất thực tế, phải lo âu về cái cuộc sống trước mắt, khi nó chưa ổn định thì chưa bàn đến những việc trừu tượng xa xôi khác… Có quan điểm chê rằng Khổng tử quá thực dụng, nhưng ai là người không thực dụng với mức độ nào đó"
          },
          {
            "id": "11.12",
            "hanviet": "Mẫn tử thị trắc, ngân ngân như dã; Tử Lộ, hành hành như dã; Nhiễm Hữu, Tử Cống, khản khản như dã. Tử lạc: Nhược Do dã, bất đắc kỳ tử nhiên”.",
            "nghia": "Mẫn Tử Khiên hầu bên cạnh (Khổng tử) thường giữ vẻ mặt từ tốn tươi vui; Tử Lộ thì kiên cường thẳng thắn; Nhiễm Hữu, Tử Cống đĩnh đạc, khoan thai. Thầy rất vui, nói: Như trò Do (Tử Lộ) chỉ e chết bất đắc kỳ tử.",
            "binh": "“bất đắc kỳ tử”: Chết không yên lành. Khổng tử thấy Tử Lộ quá căng thẳng, thiếu bình tĩnh nên ông dự đoán, về sau quả nhiên Tử Lộ chết bất đắc kỳ tử"
          },
          {
            "id": "11.13",
            "hanviet": "Lỗ nhân vi Trường Phủ. Mẫn Tử Khiên viết: Nhưng cựu quán, như chi hà ? Hà tất cải tác? Tử viết: Phu nhân bất ngôn, ngôn tất hữu trung.",
            "nghia": "Người Lỗ muốn xây Trường Phủ. Mẫn Tử Khiên nói: “Dùng cái cũ có được không, cần gì xây mới ?”. Khổng tử nghe được, nói: Người này không nói thì thôi, đã nói là rất đúng.",
            "binh": ""
          },
          {
            "id": "11.14",
            "hanviet": ": : , Tử viết: Do chi sắt hề vi ư Khâu chi môn? Môn nhân bất kính Tử Lộ. Tử viết: Do dã thăng đường hĩ, vị nhập ư thất dã.",
            "nghia": "Khổng tử nói: Sao Trọng Do gảy đàn sắt ở nhà thầy? Các bạn học của Tử Lộ (Do) nghe vậy, không còn kính trọng Tử Lộ nữa. Khổng tử thấy vậy lại nói: “Học vấn của Do đã lên tới nhà (đường) rồi, chứ chưa vào tới phòng (thất) đấy thôi.",
            "binh": "Ngôi nhà người Trung Quốc xưa có ba cấp từ ngoài vào trong: Cửa (môn), nhà chính (đường) rồi mới đến phòng (thất). Tử Lộ gảy thứ đàn sắt 25 dây, âm thanh như đoàn giặc phương Bắc hành quân, nghe không hợp thái độ trung hoà của thầy nên thầy mới trách chưa đạt đến đạo học trung hòa. Lời nói của thầy với Tử Lộ nhằm nhắc khéo rằng kỹ thuật của Lộ mới chỉ đến mức gảy đàn ở nhà chính (đường), chưa uyên thâm đến mức gảy trong phòng (thất). Nhưng lời thày giải thích với các học trò là để họ khỏi hiểu lầm Tử Lộ)."
          },
          {
            "id": "11.15",
            "hanviet": "Tử Cống vấn: Sư dữ Thương dã thục hiền ? Viết: “Sư dã quá, Thương dã bất cập”. Viết: Nhiên tắc Sư dũ dự ? Tử viết: Quá do bất cập. Tử",
            "nghia": "Cống hỏi: Sư và Thương ai hiền tài hơn ? Khổng tử nói: Trò Sư có chỗ hơi quá, còn trò Thương lại chưa đạt tới. Tử Cống lại hỏi: Vậy là Sư giỏi hơn phải không? Khổng tử đáp: Quá đi và chưa đạt thì đều như nhau.",
            "binh": "Đây là cách diễn đạt cụ thể đạo trungdung: vừa phải thì tốt hơn thái quá"
          },
          {
            "id": "11.16",
            "hanviet": "Quý thị phú ư Chu Công, nhi cầu dã vi chi tụ liễm nhi phụ ích chi. Tử viết: Phi ngô đồ dã. Tiểu tử minh cổ nhi công chi khả dã.",
            "nghia": "Họ Quý giàu hơn Chu công nhiều, vậy mà Nhiễm Cầu lại giúp đỡ họ Quý, làm cho họ Quý càng giàu hơn. Khổng tử nói: Nhiễm Cầu không còn là học trò ta nữa. Các con có thể công khai chỉ trích Nhiễm Cầu.",
            "binh": ""
          },
          {
            "id": "11.17",
            "hanviet": "Sài dã ngu, Sâm dã lỗ, Sư dã tịch, Do dã ngạn.",
            "nghia": "Trò Sài kém thông minh, trò Sâm chậm chạp, trò Sư cố chấp, trò Do thô tục.",
            "binh": ""
          },
          {
            "id": "11.18",
            "hanviet": ": ,,, Tử viết: Hồi dã kỳ thứ hồ, lũ không. Tứ bất thụ mệnh, nhi hóa thực yên, ức tắc lũ trung.",
            "nghia": "Khổng tử nói: Nhan Hồi đạo học đã khá rồi, mà vẫn còn nghèo. Đoan Mộc Tứ (tức Tử Cống) không nghe thầy, bỏ đi buôn bán, tính toán hàng hóa, thường là tính đúng.",
            "binh": "Đoan Mộc Tứ tức Tử Cống"
          },
          {
            "id": "11.19",
            "hanviet": "Tử Trương vấn thiện nhân chi đạo, Tử viết: Bất tiễn tích, diệc bất nhập ư thất.",
            "nghia": "Tử Trương hỏi về đạo của người thiện, Khổng tử nói: Người thiện không theo dấu chân người khác mà đi, nhưng học vấn của họ chưa hoàn thiện.",
            "binh": "Người thiện vốn có phẩm chất cơ bản tốt nhưng chưa học được Đạo thì chưa hoàn thiện"
          },
          {
            "id": "11.20",
            "hanviet": "Tử viết: Luận đốc thị dự, quân tử giả hồ? Sắc trang giả hồ?",
            "nghia": "Khổng tử nói: Người bàn bạc nhiều về đạo, có phải quân tử không ? Hay chỉ là người có vẻ ngoài trang trọng?",
            "binh": ""
          },
          {
            "id": "11.21",
            "hanviet": "Nhiễm Hữu vấn: Văn tư hành giả? Tử viết: Văn tư hành chi. Công Tây Hoa viết: Do dã vấn văn tư hành giả, tử viết hữu phụ huynh tại; Cầu dã vấn văn tư hành giả, Tử viết: Văn tư hành chi. Diệc dã hoặc, cảm vấn. Tử viết: Cầu dã thoái, cố tiến chi; Do dã kiêm nhân, cố thoái chi. Tử",
            "nghia": "Lộ hỏi: Nghe rồi thì nên thực hành ngay phải không ? Khổng tử nói: Có mặt cha ngươi, làm sao nghe rồi thực hành ngay ? Nhiễm Hữu hỏi: Nghe rồi thì nên thực hành ngay phải không ? Khổng tử lại bảo: Nghe được thì thực hành ngay. Công Tây Hoa lại nói: Sao hai câu hỏi giống nhau mà thầy trả lời mỗi người một khác vậy? Khổng tử giải thích: Nhiễm Hữu làm việc gì cũng nhút nhát rụt rè nên ta cổ vũ nó. Còn Tử Lộ dũng khí hơn người, hăng hái dám làm nên ta kìm bớt nó một chút.",
            "binh": ""
          },
          {
            "id": "11.22",
            "hanviet": "Tử úy ư Khuông, Nhan Uyên hậu. Tử viết: Ngô dĩ nhữ vi tử hĩ. Viết: Tử tại, Hồi hà cảm tử ?!",
            "nghia": "Khổng tử một phen hoảng sợ ở đất Khuông, Nhan Uyên đi sau, bị lạc, cuối cùng mới gặp nhau. Khổng tử nói: Ta tưởng ngươi chết rồi. Nhan Uyên đáp: Thầy còn sống, làm sao con dám chết ?!",
            "binh": ""
          },
          {
            "id": "11.23",
            "hanviet": "Quý Tử Nhiên vấn: Trọng Do, Nhiễm Cầu khả vị đại thần dự? Tử viết: Ngô dĩ tử vi di chi vấn, tằng Do dự Cầu chi gian. Sở vị đại thần giả, dĩ đạo sự quân, bất khả tắc chỉ. Kim Do dự Cầu dã, khả vị cụ thần hĩ. Viết: Nhiên tắc tòng chi giả dự ? Tử viết: Thí phụ dự quân, diệc bất tòng dã. Quý Tử",
            "nghia": "Nhiên hỏi: Trọng Do và Nhiễm Cầu có thể gọi là đại thần không? Khổng tử nói: Ta tưởng hỏi ai, hoá ra Do và Cầu. Được gọi là đại thần phải là người biết lấy đạo tiên vương để thờ vua, nếu không được vậy thì từ chức quan đi. Hiện nay Do và Cầu mới chỉ đủ đức hạnh làm quan (thường) thôi. Quý Tử Nhiên lại hỏi: Thế bọn họ đều làm việc cho họ Quý chứ? Khổng tử nói: Những việc như giết cha và vua thì chúng chẳng bao giờ thuận theo cả (họ Quý đã từng giết cha, giết vua)",
            "binh": ""
          },
          {
            "id": "11.24",
            "hanviet": "Tử Lộ sử Tử Cao vi Phí tể. Tử viết: Tắc phu nhân chi tử. Tử Lộ viết: Hữu thị nhân yên, hữu xã tắc yên, hà tất độc thư, nhiên hậu vi học ? Tử viết: Thị cố ố phu nịnh giả. Tử Lộ cử Tử Cao đi làm huyện trưởng huyện Phí.",
            "nghia": "Khổng tử nói: Thế là làm hại con người ta rồi. Tử Lộ cãi lại: làm quan thì cai trị dân, tế lễ thần xã tắc, không cần phải chọn kẻ có học, làm quan sau rồi học cũng được. Khổng tử nói: Cho nên ta ghét kẻ ba hoa khéo mồm mép.",
            "binh": ""
          },
          {
            "id": "11.25",
            "hanviet": "Tử Lộ, Tăng Tích, Nhiễm Hữu, Công Tây Hoa thị tọa. Tử viết: Dĩ ngô nhất nhật trường hồ nhĩ, vô ngô dĩ dã. Cư tắc viết: bất ngô tri dã ! Như hoặc tri nhĩ, tắc hà dĩ tai? Tử Lộ, Tăng Tích, Nhiễm Hữu, Công Tây Hoa ngồi hầu chuyện Khổng tử. Tử Lộ suất nhĩ nhi đối viết: Thiên thừa chi quốc,nhiếp hồ đại quốc chi gian, gia chi dĩ sư lữ, nhân chi dĩ cơ cận, do dã vi chi, bỉ cập tam niên, khả sử hữu dũng, thả tri phương dã. Phu tử sẩn chi. “Cầu, nhĩ hà như ?” Đối viết: Phương lục thất thập, như ngũ lục thập, Cầu dã vi chi, bỉ cập tam niên, khả sử túc dân như kỳ lễ nhạc, dĩ sĩ quân tử. “Xích, nhĩ hà như?” Đối viết: Phi viết năng chi, nguyện học yên. Tông miếu chi sự, như hội đồng, đoan chương phủ, nguyện vi tiểu tướng yên. “Điểm, nhĩ hà như?”. Cổ sắt hy, khanh nhĩ, xá sắt nhi tác, đối viết: “Di hồ tam tử giả chi soạn”. Tử viết: Hà thương hồ? Diệc các ngôn kỳ chí dã”. Viết: Mạc xuân giả, xuân phục ký thành, quan giả ngũ lục nhân, đồng tử lục thất nhân, dục hồ Nghi, phong hồ Vũ Vu, vịnh nhi quy”. Phu tử vị nhiên thán viết: Ngô dự Điểm dã!”. Tam tử giả xuất, Tăng Tích hậu. Tăng Tích viết: Phu tam tử giả chi ngôn hà như? Tử viết: Diệc các ngôn kỳ chí dã dĩ hĩ. Viết: Phu tử hà sẩn do dã ? Viết: “Vi quốc dĩ lễ. Kỳ ngôn bất nhượng, thị cố sẩn chi”. Duy Cầu tắc phi bang dã dự ? “An kiến phương lục thất thập như ngũ lục thập nhi phi bang dã giả ? ” Duy diệc tắc phi bang dã dự ? “Tông miếu hội đồng, phi chư hầu nhi hà? Diệc dã vi chi tiểu, thục năng vi chi đại?",
            "nghia": "Khổng tử nói: Ta nhiều tuổi hơn các trò, nhưng đừng vì thế mà các ngươi không dám phát biểu ý kiến. Lúc ngồi rỗi các ngươi thường nói không ai biết đến mình. Giả dụ có người muốn bổ nhiệm thì các ngươi định làm gì ? Tử Lộ vội nói: Nếu có một nước với nghìn binh xa, bị kẹp giữa các nước lớn, bên ngoài bị nước khác đến xâm phạm, trong nước thiên tai mất mùa, đói kém. Nếu con được quản lý nước đó, chỉ cần ba năm con làm cho dân dũng cảm vùng lên, lại hiểu biết đạo lý nữa. Khổng tử hỏi chí hướng của Nhiễm Cầu. Anh khiêm tốn thưa: Nếu một quốc gia rộng cỡ sáu bảy chục dặm hoặc nhỏ hơn một ít, chừng năm sáu chục dặm để cho con quản lý thì trong ba năm con làm cho dân no đủ. Còn về lễ nhạc thì xin đợi bậc quân tử. Khổng tử lại hỏi “Xích, ngươi thì sao?”. Công Tây Hoa (tên Xich) thưa: Con không dám nói có thể làm được, nhưng cũng sẽ học theo. Việc tế lễ ở tông miếu, việc hội các nước đồng minh con chỉ muốn mặc lễ phục, giữ một chức quan nhỏ giúp vua tế lễ. Khổng tử lại hỏi về chí hướng của Tăng Tích (tên Điểm). Anh đang gảy đàn đến phần cuối, tiếng đàn hùng hồn, nghe hỏi vội buông đàn đứng dậy đáp: Con suy nghĩ khác ba người kia. Khổng tử nói: Có gì khó đâu, mỗi người tự nói chí của mình. Tăng Tích thưa: Tháng ba cuối xuân mặc trang phục đẹp, rủ năm sáu bạn nhỏ đến sông Nghi tung tăng bơi lội tắm mát, lên đài cầu mưa Vũ Vu húng gió nhảy múa, vừa đi vừa ngâm vịnh thơ từ mà trở về nhà…Khổng tử bùi ngùi than rằng: Ta đồng ý với Điểm vậy! Ba người đi ra ngoài, Tăng Tích ở lại sau hỏi Khổng tử: Lời nói của ba người ấy như thế nào ? Khổng tử nói: Chẳng qua mỗi người nói chí hướng của họ thôi. Tăng Tích hỏi: vì sao thầy lại cười Tử Lộ ? Khổng tử nói: Quản lý nhà nước cần đến lễ với khiêm nhường nhưng Tử Lộ nói năng chả có chút khiêm nhường nên ta cười. Tăng Tích lại hỏi: Những điều Nhiễm Cầu nói chẳng phải là việc quốc gia ư? Khổng tử nói: Sáu bảy chục dặm đất không phải là một quốc gia ư ? Tăng Tích lại hỏi: Điều mà Công Tây Hoa nói đó không phải là việc quốc gia ư? Khổng tử đáp: Có tông miếu, có liên minh nước khác, chả phải việc quốc gia thì là gì ? Hết thiên 11",
            "binh": "Công Tây Hoa biết mình có khả năng ngoại giao nên chỉ nhận việc thích hợp, tức là phụ trách việc “lễ nhạc”) (Lời bàn: Quan điểm của Tăng Tích phù hợp Khổng tử lúc ấy nên ông tán thành)."
          }
        ]
      },
      {
        "id": "nhan-uyen",
        "number": 12,
        "name": "Nhan Uyên",
        "note": "",
        "passages": [
          {
            "id": "12.1",
            "hanviet": "Nhan Uyên vấn nhân. Tử viết: Khắc kỷ phục lễ vi nhân. Nhất nhật khắc kỷ phục lễ, thiên hạ qui nhân yên. Vi nhân do kỷ, nhi do nhân hồ tai ? Nhan Uyên viết: Thỉnh vấn kỳ mục. Tử viết: Phi lễ vật thị, phi lễ vật thính, phi lễ vật ngôn, phi lễ vật động. Nhan Uyên viết: Hồi tuy bất mẫn, thỉnh sự tư ngữ hĩ. Nhan Uyên hỏi về đạo nhân.",
            "nghia": "Khổng tử nói: Khắc phục ham muốn của mình theo lễ. Nếu một ngày làm được vậy, thiên hạ sẽ theo về đức nhân. Thực hiện đức nhân do mình thôi, lẽ nào phải nhờ người khác sao? Nhan Uyên nói: Xin thầy cho biết từng mục nhỏ để thực hiện đức nhân. Khổng tử nói: Việc trái lễ chớ xem, không hợp lễ chớ nghe, không hợp lễ chớ nói, không hợp lễ chớ làm. Nhan Uyên nói: Con không minh mẫn cũng xin làm đúng lời thầy.",
            "binh": ""
          },
          {
            "id": "12.2",
            "hanviet": "Trọng Cung vấn nhân. Tử viết: “Xuất môn như kiến đại tân, sử dân như thừa đại tế; Kỷ sở bất dục, vật thi ư nhân; Tại bang vô oán, tại gia vô oán”. Trọng Cung viết: Ung tuy bất mẫn, thỉnh sự tư ngữ hĩ. Trọng Cung hỏi về chữ nhân,",
            "nghia": "Khổng tử nói: Ra khỏi cửa, bước đi như sắp đón khách quý, sai khiến dân giống như đang làm tế lễ lớn. Việc mình không muốn, đừng làm cho người khác. Ở trong nước hay trong nhà đừng để cho ai oán giận mình. Trọng Cung nói: Con không minh mẫn cũng xin làm đúng lời thầy.",
            "binh": ""
          },
          {
            "id": "12.3",
            "hanviet": "Tư Mã Ngưu vấn nhân. Tử viết: Nhân giả, kỳ ngôn dã nhẫn. Viết: Kỳ ngôn dã nhẫn, tư vị chi nhân dĩ hồ ? Tử viết: Vi chi nan, ngôn chi đắc vô nhẫn hồ ? Tư Mã Ngưu hỏi về đức nhân.",
            "nghia": "Khổng tử nói: Người đức nhân không nói năng tùy tiện, phải nhẫn nại. Ngưu hỏi lại: Không nói tùy tiện và nhẫn nại là người nhân ư? Khổng tử nói: Làm đã khó, nói chả lẽ có thể tùy tiện ư?",
            "binh": ""
          },
          {
            "id": "12.4",
            "hanviet": "Tư Mã Ngưu vấn quân tử. Tử viết: Quân tử bất ưu bất cụ. Viết: Bất ưu bất cụ, tư vị chi quân tử dĩ hồ ? Tử viết: Nội tỉnh bất cứu, phu hà ưu hà cụ? Tư Mã Ngưu hỏi về quân tử.",
            "nghia": "Khổng tử nói: Quân tử không lo, không sợ. Ngưu lại hỏi: Chẳng lo chẳng sợ mà đủ gọi là quân tử ư? Khổng tử nói: Tự xét mình không có tội thì còn gì phải lo lắng sợ hãi ?",
            "binh": ""
          },
          {
            "id": "12.5",
            "hanviet": "Tư Mã Ngưu ưu viết: Nhân giai hữu huynh đệ, ngã độc vong. Tử Hạ viết: Thương văn chi hĩ, tử sinh hữu mệnh, phú quý tại thiên. Quân tử kính nhi vô thất, dự nhân cung nhi hữu lễ, tứ hải chi nội, giai huynh đệ dã. Quân tử hà hoạn hồ vô huynh đệ dã ?",
            "nghia": "Tư Mã Ngưu buồn rầu nói: Mọi người đều có anh em, riêng tôi không có. Tử Hạ nói: Ta từng nghe sống chết có số mệnh, phú quý do trời. Quân tử chỉ cần làm việc chu đáo, đối xử cung kính lễ độ với người thì bốn bể một nhà, là anh em cả. Quân tử lo gì không có anh em ?",
            "binh": "Dân gian thường nói tóm tắt: “Tứ hải giai huynh đệ”"
          },
          {
            "id": "12.6",
            "hanviet": "Tử Trương vấn minh. Tử viết: Tẩm nhuận chi trẩm, phu thụ chi tố, bất hành yên, khả vị minh dã dĩ hĩ. Tẩm nhuận chi trẩm, phu thụ chi tố, bất hành yên, khả vị viễn dã dĩ hĩ. Tử Trương hỏi về sự sáng suốt.",
            "nghia": "Khổng tử nói: Lời nói xấu ngấm dần, lời vu cáo đau nhức đến da đều không làm ảnh hưởng đến mình, được như vậy gọi là sáng suốt. Lời nói xấu và lời vu cáo chẳng có tác dụng tới mình thì có thể nói là người nhìn xa trông rộng.",
            "binh": ""
          },
          {
            "id": "12.7",
            "hanviet": ":,, :, : :, ?:,. Tử Cống vấn chính. Tử viết: Túc thực, túc binh, dân tín chi hĩ. Tử Cống viết: Tất bất đắc dĩ nhi khứ, ư tư tam giả hà tiên? Viết: Khứ binh. Tử Cống viết: Tất bất đắc dĩ nhi khứ, ư tư nhị giả hà tiên? Viết: Khứ thực. Tự cổ giai hữu tử, dân vô tín bất lập. Tử Cống hỏi về chính trị quốc gia.",
            "nghia": "Khổng tử nói: “Phải đủ lương thực, đủ binh lính, nhân dân tin phục”. Tử Cống hỏi: Nếu buộc phải bỏ một cái thì bỏ cái nào? Khổng tử đáp: Bỏ quân lính. Tử Cống lại hỏi: Nếu buộc phải bỏ một trong hai điều còn lại thì bỏ cái gì? Khổng tử nói: Bỏ lương thực. Xưa nay không ai tránh được cái chết. Nếu nhân dân không còn tin tưởng nữa thì nước không đứng vững.",
            "binh": ""
          },
          {
            "id": "12.8",
            "hanviet": "Cức Tử Thành viết: Quân tử chất nhi dĩ hĩ, hà dĩ văn vi ? Tử Cống viết: Tích hồ phu tử chi thuyết quân tử dã ! Tứ bất cập thiệt. Văn do chất dã, chất do văn dã, hổ báo chi khuếch do khuyển dương chi khuếch. Cức Tử",
            "nghia": "Thành nói: Quân tử chỉ cần phẩm chất tốt là được, cần chi văn nữa. Tử Cống nói: Tiếc thay ngài bàn về quân tử như vậy không đúng rồi. Bốn ngựa không đuổi kịp cái lưỡi. Văn cũng quan trọng như chất, chất quan trọng như văn. Da hổ, da báo lột đi thì làm sao phân biệt với da chó, da dê?",
            "binh": "Chất và văn cũng như nội dung và hình thức. Văn là lễ tiết, nghi thức, là hình thức. Ăn mặc nói năng tuy chỉ là vẻ ngoài nhưng cũng thể hiện cái phẩm chất bên trong. Vậy ta không nên coi thường hình thức."
          },
          {
            "id": "12.9",
            "hanviet": "Ai Công vấn ư Hữu Nhược viết: Niên cơ, dụng bất túc, như chi hà? Hữu Nhược đối viết: Hạp triệt hồ ? Viết: Nhị, ngô do bất túc, như chi hà kỳ triệt dã ? Đối viết: Bách tính túc, quân tử dự bất túc ? Bách tính bất túc, quân thục dự túc ? Lỗ Ai Công hỏi Hữu Nhược: Năm mât mùa, không đủ tiêu xài, làm thế nào? Hữu",
            "nghia": "Nhược nói: Sao ta không đánh thuế triệt (thu một phần 10 hoa lợi) của dân? Lỗ Ai Công nói: Thu hai phần mười, ta chưa đủ dùng, làm sao áp dụng biện pháp gia tăng đây? Hữu Nhược thưa rằng: Nếu dân đủ ăn, sao vua lại không đủ. Nếu dân thiếu ăn thì làm sao mà vua đủ được ?",
            "binh": ""
          },
          {
            "id": "12.10",
            "hanviet": "Tử Trương vấn sùng đức biện hoặc. Tử viết: Chủ trung tín, tỉ nghĩa, sùng đắc dã. Ái chi dục kỳ sinh, ố chi dục kỳ tử, ký dục kỳ sinh, hựu dục kỳ tử, thị hoặc dã. Thành bất dĩ phú, diệc chi dĩ dị.",
            "nghia": "Tử Trương hỏi về cách làm sao nâng cao đạo đức, nhìn ra được sự mê hoặc. Khổng tử nói: Lấy trung thực và tín nghĩa làm chính, ra sức làm việc nghĩa, đó là đề cao đạo đức. Yêu ai thì muốn họ sống, ghét ai thì muốn họ chết. Vừa mong người này sống, vừa muốn người kia chết – ấy là sự mê hoặc. Có câu „Thực chẳng vì giàu, chỉ vì lạ thôi”. nói: Giàu có mà vẫn thiếu phẩm chất tinh thần, ấy là chỉ có tài sản nhiều mà thôi).",
            "binh": "Theo Nho giáo, sống và chết là do mệnh trời. Không thể vì yêu ghét mà cầu được. Muốn cầu xin là người mê hoặc. “Thực chẳng vì giàu, chỉ vì lạ thôi” là câu trong Kinh Thi. Ý"
          },
          {
            "id": "12.11",
            "hanviet": ":,,, , ,,, Tề Cảnh Công vấn chính ư Khổng tử. Khổng tử đối viết: Quân quân, thần thần, phụ phụ, tử tử. Công viết: Thiện tai ! Tín như quân bất quân, thần bất thần, phụ bất phụ, tử bất tử, tuy hữu túc, ngô đắc nhi thực chư ? Tề Cảnh Công hỏi Khổng tử về việc cai trị quốc gia.",
            "nghia": "Khổng tử đáp: Làm vua ra vua, quan ra quan, cha ra cha, con ra con (làm đúng danh vị của mình). Vua nói: Hay quá ! Nếu vua chẳng trọn đạo vua, tôi chẳng trọn đạo làm tôi, cha không trọn đạo làm cha, con chẳng trọn đạo con, tuy có lương thực đấy, ta có thể ăn được ư?",
            "binh": "Câu nói trên của Khổng tử là cốt lõi của học thuyết chính danh. Mỗi người đều phải làm đúng với danh hiệu, có vậy thì yên nhà, yên nước, xã hội ổn định và phát triển"
          },
          {
            "id": "12.12",
            "hanviet": "Tử viết: Phiến ngôn khả dĩ chiết ngục giả, kỳ Do dã dự? Tử Lộ vô túc nặc",
            "nghia": "Khổng tử nói: Dùng một câu nói giản dị mà phán đoán vụ án, có lẽ chỉ có Trọng Do ! Tử Lộ đã hứa là nhất định đúng hạn.",
            "binh": "Tử Lộ tức Trọng Do có khả năng quyết đoán đúng sai, bản tính trung thực, vậy có thể xử án được"
          },
          {
            "id": "12.13",
            "hanviet": "Tử viết: Thính tụng, ngô ưu nhân dã. Tất dã sử vô tụng hồ !",
            "nghia": "Khổng tử nói: Xem xử án, ta lo buồn như mọi người. Ta chỉ muốn không bao giờ xảy ra kiện tụng.",
            "binh": "Khổng tử coi trong giáo dục, giáo hóa, nhờ đó sẽ không còn xảy ra xung đột và kiện tụng"
          },
          {
            "id": "12.14",
            "hanviet": "Tử Trương vấn chính. Tử viết: Cư chi vô quyện, hành chi dĩ trung. Tử Trương hỏi về quản lý chính sự.",
            "nghia": "Khổng tử nói: Giữ chức không được trễ nải, làm việc phải giữ trung thực.",
            "binh": ""
          },
          {
            "id": "12.15",
            "hanviet": ": Tử viết: Bác học ư văn, yêu chi dĩ lễ, diệc khả dĩ phất bạn hĩ phu !",
            "nghia": "Khổng tử nói: Người quân tử trước học sâu rộng về văn, sau học lễ ràng buộc mình, nhờ vậy khỏi trái đạo.",
            "binh": ""
          },
          {
            "id": "12.16",
            "hanviet": "Tử viết: Quân tử thành nhân chi mỹ, bất thành nhân chi ố. Tiểu nhân phản thị.",
            "nghia": "Khổng tử nói: Quân tử giúp người làm điều tốt đẹp, không khiến người trở nên ác xấu. Kẻ tiểu nhân làm ngược lại.",
            "binh": ""
          },
          {
            "id": "12.17",
            "hanviet": "Quý Khang tử vấn chính ư Khổng tử. Khổng tử đối viết: Chính giả chính dã. Tử sư dĩ chính, thục cảm bất chính ? Quý Khang tử hỏi Khổng tử về chính sự.",
            "nghia": "Khổng tử nói: Chữ “chính” nghĩa là “chính trực”. Ngài gương mẫu giữ đạo chính thì ai dám bất chính?",
            "binh": "lưu ý hai chữ chính. việc chính trị, quan chức. chính đáng, đúng đắn"
          },
          {
            "id": "12.18",
            "hanviet": "Quý Khang tử hoạn đạo, vấn ư Khổng tử. Khổng tử đối viết: Cẩu tử chi bất dục, tuy thưởng chi bất thiết. Quý Khang tử lo lắng nạn trộm cướp (rất nhiều ở nước Lỗ lúc ấy) bèn hỏi Khổng tử.",
            "nghia": "Khổng tử nói: Nếu ngài không tham lam, dù có thưởng cho họ, họ cũng chẳng dám ăn trộm nữa.",
            "binh": ""
          },
          {
            "id": "12.19",
            "hanviet": "Quý Khang tử vấn chính ư Khổng tử viết: Như sát vô đạo, dĩ tựu hữu đạo, hà như? Khổng tử đối viết: “Tử vi chính, yên dụng sát ? Tử dục thiện nhi dân thiện hĩ. Quân tử chi đức phong, nhân tiểu chi đức thảo, thảo thượng chi phong, tất yển.",
            "nghia": "Quý Khang tử hỏi Khổng tử về chính sự: Giết kẻ vô đạo, khiến dân biết mà theo đạo, được không ? Khổng tử đáp: Ngài cầm quyền quốc gia, cần gì phải giết người ? Ngài thực sự làm điều thiện thì dân sẽ làm điều thiện. Đức hạnh quân tử như gió, đức hạnh kẻ tiểu nhân như cỏ. Gió thổi trên cỏ thì cỏ nhất định rạp theo chiều gió.",
            "binh": ""
          },
          {
            "id": "12.20",
            "hanviet": ": Tử Trương vấn: Sĩ hà như tư khả vị chi đạt hĩ? Tử viết: Hà tai, nhĩ sở vị đạt giả? Tử Trương đối viết: Tại bang tất văn, tại gia tất văn. Tử viết: Thị văn dã, phi đạt dã. Phu đạt dã giả, chất trực nhi hiếu nghĩa, sát ngôn nhi quan sắc, lự dĩ hạ nhân. Tại bang tất đạt, tại gia tất đạt. Phu văn dã giả, sắc thủ nhân nhi hành vi, cư chi bất nghi. Tại bang tất văn, tại gia tất văn. Tử",
            "nghia": "Trương hỏi: Kẻ sĩ như thế nào gọi là thành đạt ? Khổng tử nói: “Theo ngươi nghĩ đạt là gì?”. Tử Trương thưa: Khi làm quan ở triều đình có danh tiếng, ở quê nhà cũng có danh tiếng. Khổng tử nói: Đó gọi là văn chứ không phải đạt. Đạt nghĩa là phải có phẩm chất chính trực, thích làm việc nghĩa, giỏi phân tích lời nói và giỏi quan sát sắc mặt người khác, khiêm tốn nhường nhịn người khác. Người như vậy làm quan triều đình nhất định đạt, ở nhà cũng đạt.",
            "binh": ""
          },
          {
            "id": "12.21",
            "hanviet": "Phàn Trì tòng du ư Vũ Vu chi hạ, viết: Cảm vấn sùng đức, tu thắc biện hoặc. Tử viết: Thiện tai vấn ! Tiên sự hậu đắc, phi sùng đức dự? Công kỳ ố, vô công nhân chi ố, phi tu thắc dự ? Nhất triều chi phẫn, vong kỳ thân, dĩ cập kỳ thân, phi cảm dự ?",
            "nghia": "Phàn Trì theo chân Khổng tử đi thăm đài Vũ Vu, hỏi: Dám hỏi thầy làm thế nào để tu dưỡng đạo đức, diệt ác trừ mê hoặc ? Khổng tử nói: Câu hỏi hay quá! Trước hãy làm việc thiện, chẳng phải là sùng đạo à? Phê phán cái xấu của mình, không chỉ trich cái sai của người khác, đó chẳng phải trừ bỏ lòng ác ư? Nhất thời nóng giận mà quên bản thân, lại làm liên lụy cả cha mẹ, đó không phải mê hoặc ư?",
            "binh": ""
          },
          {
            "id": "12.22",
            "hanviet": "Phàn Trì vấn nhân. Tử viết: Ái nhân. Vấn tri. Tử viết: Tri nhân.Phàn Trì vị đạt. Tử viết: Cử trực thố chư uổng. Năng sử uổng giả trực. Phàn Trì thoái, kiến Tử Hạ viết: Hương dã ngô liến ư phu tử nhi vấn trí, Tử viết: Cử trực thố chư uổng. Năng sử uổng giả trực, hà vị dã?. Tử Hạ viết: Phú tai ngôn hồ! Thuấn hữu thiên hạ, tuyển ư chúng, cử Cao Đào, bất nhân giả viễn hĩ. Thang hữu thiên hạ, tuyển ư chúng, cử Y Doãn, bất nhân giả viễn hĩ. Phàn Trì hỏi về chữ nhân.",
            "nghia": "Khổng tử nói: “Yêu người”. Hỏi về sự hiểu biết, Khổng tử nói: “Biết người”. Phàn Trì không hiểu được. Khổng tử nói tiếp: “Cử người ngay thẳng ở trên kẻ ác thì có thể biến kẻ ác thành ngay thẳng”. Phàn Trì ra về, gặp Tử Hạ, nói: “Vừa rồi tôi gặp thầy hỏi về đức trí, thầy bảo „đem người ngay thẳng ở trên kẻ ác thì có thể biến kẻ ác thành ngay thẳng‟. Như vậy là thế nào? Tử Hạ nói: Câu nói này rất phong phú ! Vua Thuấn xưa được thiên hạ, chọn nhân tài trong quần chúng là ông Cao Đào, kẻ bất nhân dần dần không còn nữa. Vua Thang được thiên hạ cũng chọn nhân tài trong dân chúng cất nhắc được ông Y Doãn. Dần dần kẻ bất nhân cũng không còn.",
            "binh": ""
          },
          {
            "id": "12.23",
            "hanviet": "Tử Cống vấn hữu. Tử viết: Trung cáo nhi thiện đạo chi, bất khả tắc chỉ, vô tự nhục dã. Tử Cống hỏi về quan hệ bằng hữu.",
            "nghia": "Khổng tử nói: Đem lòng trung thành mà khuyên bạn làm điều tốt, không được thì thôi, đừng tự chuốc lấy nhục nhã.",
            "binh": ""
          },
          {
            "id": "12.24",
            "hanviet": "Tăng Tử viết: Quân tử dĩ văn hội hữu, dĩ hữu phụ nhân. Tăng",
            "nghia": "Tử nói: Quân tử dùng văn chương để tập hợp bạn bè, dùng bạn mà bồi dưỡng nhân đức. Hết thiên 12",
            "binh": ""
          }
        ]
      },
      {
        "id": "tu-lo",
        "number": 13,
        "name": "Tử Lộ",
        "note": "",
        "passages": [
          {
            "id": "13.1",
            "hanviet": "Tử Lộ vấn chính. Tử viết: Tiên chi lao chi. Thỉnh ích. Viết: Vô quyện. Tử Lộ hỏi về quản lý chính sự.",
            "nghia": "Khổng tử nói: Phải chịu vất vả cùng dân khó nhọc. Tử Lộ xin giảng thêm. Khổng tử nói: Không biết mệt mỏi.",
            "binh": ""
          },
          {
            "id": "13.2",
            "hanviet": "Trọng Cung vi Quý thị tể, vấn chính. Tử viết: Tiên hữu ti, xá tiểu quá, cử hiền tài. Viết: Yên tri hiền tài nhi cử chi?. Viết: Cử nhĩ sở tri. Nhĩ sở bất tri, nhân kỳ xá giả ?",
            "nghia": "Trọng Cung làm tổng quản cho họ Quý, hỏi về chính sự. Khổng tử nói: Trước hãy giao việc và kiểm soát người dưới quyền, bỏ qua lỗi nhỏ, chọn cử hiền tài. Cung nói: Làm sao biết hiền tài để cử ra? Khổng tử nói: Cử người mà mình biết, còn người mà mình không biết, người ta có bỏ họ đâu.",
            "binh": ""
          },
          {
            "id": "13.3",
            "hanviet": ":,?:!: ? ,,, ,, ,, Tử Lộ viết: Vệ quân đãi tử vi chính, tử thương hề tiên ? Tử viết: Tất dã chính danh hồ! Tử Lộ viết: Hữu thị tai, tử chi vu dã ! Hề kỳ chính ? Tử viết: Dã tai, Do dã ! Quân tử ư kỳ sở bất tri, thiện khuyết như dã. Danh bất chính tắc ngôn bất thuận, ngôn bất thuận tắc sự bất thành, sự bất thành tắc lễ nhạc bất hưng, lễ nhạc bất hưng tắc hình phạt bất trung, hình phạt bất trung tắc dân vô sở thố thủ túc. Cố quân tử danh chi tất khả ngôn dã, ngôn chi tất khả hành dã. Quân tử ư kỳ ngôn, vô sở cẩu nhi dĩ hĩ. Tử",
            "nghia": "Lộ nói: Nếu vua nước Vệ mời thầy đi làm quan, thầy làm gì trước tiên? Khổng tử nói: Tất phải chính danh đã. Tử Lộ nói: Phải vậy ư ? Thầy nói viển vông quá, sao phải chính danh ? Khổng tử nói: Trò Do sao nói năng thô thiển thế? Quân tử gặp việc mình chưa rõ thì không nên nói tùy tiện…Danh không hợp thì lời nói sẽ không thuận, nói không thuận thì việc không thành. Việc không thành thì lễ nhạc mất trật tự. Lễ nhạc mất trật tự thì hình phạt không đúng đắn, hình phạt không đúng thì dân không biết làm thế nào cho đúng. Vậy người quân tử khi có danh phù hợp với thực thì có thể nói ra được, nói được thì thực hành thông suốt. Quân tử không bao giờ sơ suất với lời nói của mình.",
            "binh": "Bài này thể hiện rõ Thuyết chính danh của Khổng tử"
          },
          {
            "id": "13.4",
            "hanviet": ":: ,, , Phàn Trì thỉnh học giá. Tử viết: Ngô bất như lão nông. Thỉnh học chi phố. Viết: Ngô bất như lão phố. Phàn Trì xuất. Tử viết: Tiểu nhân tai, Phàn tu dã! Thượng hiếu lễ, tắc dân mạc cảm bất kính, thượng hiếu nghĩa tắc dân mạc cảm bất phục; Thượng hiếu tín, tắc dân mạc cảm bất dụng tình. Phu như thị, tắc tứ phương chi dân cưỡng phụ kỳ tử nhi chí hĩ, yên dụng giá ?. Phàn Trì xin học làm ruộng.",
            "nghia": "Khổng tử nói: Ta đâu phải lão nông. Phàn lại xin học làm vườn. Khổng tử đáp: Ta đâu biết làm vườn. Phàn Trì ra ngoài. Khổng tử nói: Phàn Trì đúng là kẻ tiểu nhân. Người trên trọng lễ thì dân đâu dám coi thường. Người trên trọng nghĩa thì dân ai dám không phục tùng. Người trên coi trọng tín thì dân nào dám giả dối. Làm được như vậy thì dân chúng bốn phương cõng con tới theo mình hết. Cần gì phải học trồng trọt.",
            "binh": ""
          },
          {
            "id": "13.5",
            "hanviet": "Tử viết: Thông thi tam bách, thụ chi dĩ chính, bất đạt; Sử ư tứ phương, bất năng chuyên đối. Tuy đa, diệc hề dĩ vi?",
            "nghia": "Khổng tử nói: Học thông ba trăm bài Kinh Thi, khi được giao chính sự thì làm không nổi, đi sứ nước ngoài không ứng đối được. Học nhiều thế có ích gì ?",
            "binh": "Khổng tử chê cái anh thuộc lòng mà không hiểu nghĩa lý"
          },
          {
            "id": "13.6",
            "hanviet": "Tử viết: Kỳ thân chính, bất mệnh nhi hành; Kỳ thân bất chính, tuy lệnh bất tòng.",
            "nghia": "Khổng tử nói: Bản thân chính đáng, dù không ra lệnh người dưới vẫn chấp hành.; Bề trên thiếu ngay thẳng, tuy ra mệnh lệnh người dưới cũng chẳng thi hành.",
            "binh": ""
          },
          {
            "id": "13.7",
            "hanviet": ": Tử viết: Lỗ Vệ chi chính, huynh đệ dã.",
            "nghia": "Khổng tử nói: Chính sự nước Lỗ và nước Vệ giống như hai anh em vậy.",
            "binh": ""
          },
          {
            "id": "13.8",
            "hanviet": "Tử vị Vệ công tử Kinh: Thiện cư thất. Thỉ hữu, viết: Cẩu hợp hĩ. Thiếu hữu, viết: Cẩu hoàn hĩ. Phú hữu, viết: Cẩu mỹ hĩ.",
            "nghia": "Khổng tử nói về công tử Kinh nước Vệ: “Thật khéo cư xử việc nhà. Vừa mới có của ông ấy đã bảo „Thế là đủ rồi‟. Vừa có thêm một ít, ông ấy lại bảo: „Vậy là đầy đủ rồi‟. Về sau giàu có hơn, ông ấy bảo: „Thế là hoàn mỹ rồi‟.",
            "binh": "Công tử Kinh là người giản dị, có thế nào cũng hài lòng, không ham muốn, dễ thỏa mãn"
          },
          {
            "id": "13.9",
            "hanviet": "Tử đích Vệ, Nhiễm Hữu bộc. Tử viết: Thứ hĩ tai! Nhiễm Hữu viết: Kí thứ hĩ, hựu hà gia yên ? Viết : Phú chi. Viết : Kí phú hĩ, hựu hà gia yên ? Viết: Giáo chi.",
            "nghia": "Khổng tử đến nước Vệ có Nhiễm Hữu theo hầu. Khổng tử nói: Dân chúng đông quá!. Nhiễm Hữu hỏi: Dân đã đông thì làm thế nào? Khổng tử đáp: Phải làm cho họ giàu lên. Nhiễm Hữu lại hỏi: Dân giàu rồi thì làm gì nữa? Khổng tử nói: Phải giáo hóa họ.",
            "binh": ""
          },
          {
            "id": "13.10",
            "hanviet": "Tử viết: Cẩu hữu dụng ngã giả, tư nguyệt nhi dĩ khả dã, tam niên hữu thành.",
            "nghia": "Khổng tử nói: Nếu có ai bổ dụng ta làm quản lý một nước, một năm sau đã khá rồi, ba năm nhất định thành công lớn.",
            "binh": ""
          },
          {
            "id": "13.11",
            "hanviet": "Tử viết: Thiện nhân vi bang bách niên, diệc khả dĩ thắng tàn khứ sát hĩ. Thành tai thị ngôn dã !",
            "nghia": "Khổng tử nói: Người xưa bảo nếu bậc thiện nhân nối nhau trị nước thì sau một trăm năm có thể cảm hoá kẻ tàn bạo thành lương thiện, không cần hình phạt chém giết nữa. Lời này thật hay.",
            "binh": ""
          },
          {
            "id": "13.12",
            "hanviet": "Tử viết: Như hữu vương giả, tất thế nhi hậu nhân.",
            "nghia": "Khổng tử nói: Nếu bậc thánh nhân cai trị, cũng phải đời sau mới thực hiện được nhân chính (cai trị bằng lòng nhân)",
            "binh": "Cai trị bằng đức nhân là một quá trình lâu dài, kiên trì, không thể thấy ngay kết quả, phải mất nhiều thế hệ mới thực hiện rộng rãi toàn xã hội."
          },
          {
            "id": "13.13",
            "hanviet": "Tử viết: Cẩu chính kỳ thân hĩ, ư tòng chính hồ hà hữu? Bất năng chính kỳ thân, như chính nhân hà?",
            "nghia": "Khổng tử nói: Nếu sửa mình ngay thẳng thì lãnh đạo chẳng thành công ư? Không thể tự mình ngay thẳng thì làm sao cho người khác ngay thẳng được?",
            "binh": ""
          },
          {
            "id": "13.14",
            "hanviet": "Nhiễm tử thoái trào. Tử viết: Hà yến dã? Đối viết “Hữu chính”. Tử viết: Kỳ sự dã ? Như hữu chính, tuy bất bất ngô dĩ , ngô kỳ dự văn chi. Nhiễm Hữu từ nhà họ Quý về.",
            "nghia": "Khổng tử nói: Sao về muộn thế? Nhiễm đáp: Có việc chính sự. Khổng tử nói: Đó chỉ là việc nhà họ Quý thôi. Nếu là chính sự, ta bây giờ tuy thôi làm quan vẫn biết được.",
            "binh": "Nhiễm Hữu làm tổng quản cho nhà họ Quý quan đại phu nước Lỗ. Họ Quý lộng quyền thường mang việc nước về nhà bàn bạc. Nếu là việc nước thì Khổng tử phải được tham dự… Lời nói của Khổng tử chỉ nhằm răn dạy Nhiễm Hữu về cách làm việc quan đúng đắn vậy)."
          },
          {
            "id": "13.15",
            "hanviet": "Định công vấn: Nhất ngôn nhi dĩ hưng bang, hữu giả? Khổng tử đối viết: Ngôn bất khả dĩ nhược thị kỳ kỷ dã. Nhân chi ngôn viết: „Vi quân nan, vi thần bất dịch‟. Như tri vi quân chi nan dã, bất kỷ hồ ngôn nhi hưng bang hồ”. Viết: Nhất ngôn nhi tang bang, hữu giả? Khổng tử đối viết: Ngôn bất khả dĩ nhược thị kỳ kỷ dã. Nhân chi ngôn viết: Dư vô lạc hồ vi quân, duy kỳ ngôn nhi mạc dư vi dã. Như kỳ thiện nhi mạc chi vi dã, bất diệc thiện hồ ? Như bất thiện nhi mạc chi vi dã, bất kỷ hồ nhất ngôn nhi tang bang hồ? Vua Định",
            "nghia": "Công hỏi: Một lời nói có thể làm đất nước phát triển phải không? Khổng tử đáp: Lời nói khó có thể đạt nhanh như vậy. Người ta từng nói „Làm vua khó, làm bề tôi cũng chẳng dễ‟. Nếu biết làm vua khó thì đấy là lời nói chẳng phải có thể làm cho nước hưng thịnh được sao? Định Công hỏi tiếp: Một lời nói có thể làm cho đất nước tan hoang, phải không? Khổng tử đáp: Một lời nói chưa thể tác hại nhanh như vậy được. Như có người từng nói „Ta làm vua chưa thấy sung sướng gì, chỉ sướng khi nào ta nói ra mà không có ai dám trái lời‟. Nếu vua nói phải thì chẳng ai cãi, như thế thì tốt quá. Nếu vua nói sai mà chẳng ai phản đối, đó chẳng phải một lời nói có thể làm tan nát đất nước sao?",
            "binh": ""
          },
          {
            "id": "13.16",
            "hanviet": "Diệp Công vấn chính. Tử viết: Cận giả duyệt, viễn giả lai. Diệp Công hỏi về chính sự.",
            "nghia": "Khổng tử đáp: Người ở gần vui vẻ, người ở xa kéo tới.",
            "binh": ""
          },
          {
            "id": "13.17",
            "hanviet": ",:,, Tử Hạ vi Cử Phụ tể, vấn chính. Tử viết: Vô dục tốc, vô kiến tiểu lợi. Dục tốc tắc bất đạt, kiến tiểu lợi tắc đại sự bất thành. Tử Hạ làm huyện trưởng huyện Cử Phụ, hỏi về chính sự.",
            "nghia": "Khổng tử nói: Chớ vội vàng, đừng tham lợi nhỏ. Muốn nhanh thì không đến đích, tham lợi nhỏ thì bỏ mất việc lớn.",
            "binh": ""
          },
          {
            "id": "13.18",
            "hanviet": "Diệp Công ngữ Khổng tử viết: Ngô đảng hữu trực cung giả, kỳ phụ nhương dương, nhi tử chứng chi. Khổng tử viết: Ngô đảng chi trực giả di ư thị: Phụ vi tử ẩn, bất vi phụ ẩn, trực tại kỳ trung hĩ.",
            "nghia": "Diệp Công nói với Khổng tử: Nơi con làm việc có một người rất ngay thẳng. Cha ăn trộm dê, con ra làm chứng. Khổng tử nói: Người ngay thẳng ở nơi ta khác với chỗ ngươi. Cha che giấu cho con, con che giấu cho cha. Sự ngay thẳng cũng ở trong đó.",
            "binh": "Theo Khổng tử, cha và con che giấu lỗi cho nhau là lẽ thường tình vì có tình phụ tử, nên không thể nói là không ngay thẳng. Vậy, lý và tình có khi không nhất trí với nhau mà là quan hệ tư pháp còn chứa đựng mâu thuẫn. Về lý, con làm chứng cha phạm tội là theo lý ngay thẳng, không sai. Nhưng về tình, cha che giấu tội con cũng thường xảy ra. Quan điểm Khổng tử là phải đem lý và tình thống nhất được với nhau mới phù hợp thực tế thời bấy giờ)."
          },
          {
            "id": "13.19",
            "hanviet": "Phàn Trì vấn nhân. Tử viết: Cư xứ cung, chấp sự kính, dự nhân trung. Tuy chi di địch, bất khả khi dã. Phàn Trì hỏi về đức nhân.",
            "nghia": "Khổng tử nói: Cư xử cung kính, làm việc thì nghiêm túc cẩn thận, giúp việc người thì tận lực. Dù đi tới xứ mọi rợ cũng không thể vứt bỏ đức tính này.",
            "binh": ""
          },
          {
            "id": "13.20",
            "hanviet": ":? Tử Cống vấn viết: Hà như tư khả vị chi sĩ hĩ ? Tử viết: Hành dĩ hữu sỉ, sử ư tứ phương, bất hổ quân mệnh, khả vị sĩ hĩ. Viết: Cảm vấn kỳ thứ. Viết: Tông tộc xứng hiếu yên, hương đảng xứng đệ yên. Viết: Cảm vấn kỳ thứ. Viết: Ngôn tất tín, hành tất quả, khanh khanh nhiên tiểu nhân tai ! Ức diệc khả dĩ vi thứ hĩ. Viết: Kim lệnh chi tòng chính giả hà như? Tử viết: Ái ! đấu sao chi nhân, hà túc toán dã ? Tử",
            "nghia": "Cống hỏi: Người thế nào đáng được gọi là kẻ sĩ? Khổng tử nói: Làm trái phải biết xấu hổ. Đi sứ nước ngoài không làm mất thể diện vua mình, như thế có thể gọi là kẻ sĩ. Tử Cống hỏi; Xin hỏi kém kẻ sĩ một bậc gọi là người gì? Khổng tử nói: Đó là người mà họ hàng bảo là kẻ có hiếu, làng xóm cho là biết đạo anh em. Tử Cống lại hỏi: Kém một bậc nữa thì gọi là gì ạ? Khổng tử: Đó là người có lời nói tin cậy, hành động quả quyết, cũng là những kẻ nhỏ nhen, kiến thức hẹp hòi. Tuy vậy cũng gọi họ là kẻ sĩ kém hai bậc. Tử Cống hỏi tiếp: Những người đang làm quan nước Lỗ là loại người nào? Khổng tử đáp: Ai chà! Những kẻ bụng dạ hẹp hòi, có gì đáng nói!",
            "binh": ""
          },
          {
            "id": "13.21",
            "hanviet": ", Tử viết: Bất đắc trung hành nhi dự chi, tất dã cuồng quyến hồ! Cuồng giả tiến thủ, quyến giả hữu sở bất vi dã.",
            "nghia": "Khổng tử nói: Chẳng gặp được người đạt được tính trung dung để truyền đạo, đành phải tìm đến hạng cuồng giả, quyến giả. Cuồng giả có chí tiến thủ mãnh liệt, quyến giả biết giữ lòng ngay thẳng không làm chuyện bất nghĩa.",
            "binh": "“Cuồng giả” có chí lớn, tính cách mạnh mẽ thái quá, “quyến giả” thì lại rụt rè, biết giữ bổn phận không làm điều bất nghĩa. Cả hai loại người này đều chưa đạt trung dung (vừa phải). Khổng tử nói vậy để khuyến khích cả hai đều tiến về phiá đạo lý trung dung thì tốt hơn"
          },
          {
            "id": "13.22",
            "hanviet": "Tử viết:Namnhân hữu ngôn viết „ Nhân nhi vô hằng, bất khả dĩ tác vu y‟. Thiện phu !” „Bất hằng kỳ đức, hoặc thừa chi tu‟. Tử viết: Bất chiêm nhi dĩ hĩ.",
            "nghia": "Khổng tử nói: Người phương nam có câu „Người không có hằng tâm thì không thể làm thầy cúng hay thầy thuốc được‟. Câu này rất hay! Kinh Dịch lại có câu „Người không có đức hạnh bền vững thì thế nào cũng có lúc chuốc lấy sự hổ thẹn‟. Khổng tử nói tiếp: Người như thế thì làm thầy bói cũng chả được.",
            "binh": "Hằng tâm là bền lòng, bền chí, kiên định đạo lý, dù thế nào cũng không thay đổi"
          },
          {
            "id": "13.23",
            "hanviet": "Tử viết: Quân tử hòa nhi bất đồng, tiểu nhân đồng nhi bất hòa.",
            "nghia": "Khổng tử nói: Quân tử hoà hợp nhưng không nhất thiết giống nhau, tiểu nhân a dua mà không hoà hợp.",
            "binh": "Hòa hợp và a dua () bề ngoài có vẻ giống nhau. Hòa hợp là thống nhất về tinh thần đạo lý, a dua là mù quáng làm giống người khác để vụ lợi)."
          },
          {
            "id": "13.24",
            "hanviet": "Tử Cống vấn viết: Hương nhân giai hiếu chi, hà như? Tử viết: Vị khả dã. Tử viết: Vị khả dã. Bất như hương nhân chi thiện giả hiếu chi, kỳ bất thiện giả ố chi.",
            "nghia": "Lại hỏi: Hương nhân giai ố chi, hà như? Tử Cống hỏi: Người được cả làng đều khen thì thế nào? Khổng tử nói: Chưa hẳn là người tốt. Tử Cống lại hỏi: Người mà cả làng đều ghét thì sao ? Khổng tử đáp: Chưa hẳn là kẻ xấu. Người thiện trong làng đều khen, kẻ ác đều ghét, ấy mới là người tốt.",
            "binh": "Người được cả làng (gồm cả tốt, xấu) khen – ấy là người “ba phải”. Người bị cả làng ghét, có thể người ấy ngay thẳng, không chịu a dua"
          },
          {
            "id": "13.25",
            "hanviet": "Tử viết: Quân tử dịch sự nhi nan thuyết dã. Thuyết chi bất dĩ đạo, bất thuyết dã; Cập kỳ sử nhân dã, khí chi. Tiểu nhân nan sự nhi thuyết dã. Thuyết chi tuy bất dĩ đạo, thuyết dã; Cập kỳ sử nhân dã, cầu bị yên.",
            "nghia": "Khổng tử nói: Làm việc với người quân tửn thì dễ, nhưng được lòng quân tử thì khó. Nếu lấy lòng quân tử bằng cách không chính đáng thì quân tử không thích; Người quân tử sử dụng người thì dựa theo tài năng, đạo đức mà giao việc. Làm việc với kẻ tiểu nhân thì rất khó. Lấy lòng họ bằng cách không chính đáng thì rất dễ. Kẻ tiểu nhân sai khiến người khác lại đòi người ta phải hoàn hảo.",
            "binh": ""
          },
          {
            "id": "13.26",
            "hanviet": "Tử viết: Quân tử thái nhi bất kiêu, tiểu nhân kiêu nhi bất thái.",
            "nghia": "Khổng tử nói: người quân tử rộng rãi mà không kiêu, tiểu nhân kiêu mà không rộng rãi.",
            "binh": ""
          },
          {
            "id": "13.27",
            "hanviet": "Tử viết: Cương, nghị, mộc, nột cận nhân.",
            "nghia": "Khổng tử nói: Người có tính cương trực, chí quyết đoán, lòng mộc mạc, nói cẩn thận là gần với đạo nhân.",
            "binh": ""
          },
          {
            "id": "13.28",
            "hanviet": "Tử viết: Thiết thiết ti ti, di di như dã, khả vi sĩ hĩ. Bằng hữu thiết thiết ti ti, huynh đệ di di. Tử",
            "nghia": "Lộ hỏi : Như thế nào được gọi là kẻ sĩ ? Khổng tử nói: Thân mật khuyên bảo, nhẹ nhàng vui vẻ có thể là kẻ sĩ. Bạn hữu thân thiết, anh em vui vẻ.",
            "binh": ""
          },
          {
            "id": "13.29",
            "hanviet": "Tử viết: Thiện nhân giáo dân thất niên, diệc khả dĩ tức nhung hĩ.",
            "nghia": "Khổng tử nói: Người thiện nắm quyền giáo hóa dân bảy năm có thể bảo họ ra trận được.",
            "binh": ""
          },
          {
            "id": "13.30",
            "hanviet": "Tử viết: Dĩ bất giáo dân chiến, thị vị khi chi.",
            "nghia": "Khổng tử nói: Dùng dân chưa huấn luyện đi đánh trận, là vứt bỏ họ. Hết thiên 13",
            "binh": ""
          }
        ]
      },
      {
        "id": "hien-van",
        "number": 14,
        "name": "Hiến Vấn",
        "note": "",
        "passages": [
          {
            "id": "14.1",
            "hanviet": "Hiến vấn sỉ. Tử viết: Bang hữu đạo, lộc; Bang vô đạo, lộc, sỉ dã. “ Khắc, phạt, oán, dục bất hành yên, khả dĩ vi nhân hĩ ?”. Tử viết: Khả dĩ vi nan hĩ, nhân tắc ngô bất tri dã. Nguyên Hiến hỏi về chữ sỉ (hổ thẹn).",
            "nghia": "Khổng tử nói: Nước có đạo thì làm quan hưởng lộc; Nước vô đạo cũng làm quan hưởng lộc- ấy là sự hổ thẹn. Lại hỏi: “Nếu không hiếu thắng, phô trương, oán hận, tham lam thì có thể xem là người nhân không?”. Khổng tử nói: Có thể coi là người làm được việc khó. Ta chưa biết người ấy có thể là người nhân không.",
            "binh": ""
          },
          {
            "id": "14.2",
            "hanviet": "Tử viết: Sĩ nhi hoài cư, bất túc dĩ diệc sĩ hĩ.",
            "nghia": "Khổng tử :Kẻ chỉ biết tìm cách được an nhàn thì không thể gọi là kẻ sĩ.",
            "binh": ""
          },
          {
            "id": "14.3",
            "hanviet": "Tử viết: Bang hữu đạo, nguy ngôn nguy hành; Bang vô đạo, nguy hành ngôn tôn.",
            "nghia": "Khổng tử nói : Nước có đạo thì lời nói ngay thẳng (dám nói lời nguy hiểm), việc làm táo bạo mà đúng đắn. Nước vô đạo thì lời nói phải nhún nhường e dè, nhưng việc làm vẫn phải giữ đúng đắn.",
            "binh": "Nước có đạo tức là do những người anh minh sáng suốt nắm giữ, họ nghe hiểu được những lời nói thẳng (nguy), việc làm táo bạo (nguy)… Nước vô đạo do những kẻ độc tài tàn ác cai trị, họ rất ghét những lời nói ngay thẳng trái ý họ, những việc làm không có lợi cho họ"
          },
          {
            "id": "14.4",
            "hanviet": "Tử viết: Hữu đức giả tất hữu ngôn, hữu ngôn giả bất tất hữu đức. Nhân giả tất hữu dũng, dũng giả bất tất hữu nhân.",
            "nghia": "Khổng tử nói: Người đạo đức thì lời nói có đạo lý; Còn người nói đạo lý chưa chắc đã có đạo đức. Người có nhân rất dũng cảm, nhưng người dũng cảm chưa chắc có nhân.",
            "binh": ""
          },
          {
            "id": "14.5",
            "hanviet": ":, Nam Cung Đích vấn ư Khổng tử viết: Nghệ thiện xạ, Ngạo đãng chu, câu bất đắc kỳ tử nhiên Vũ Tắc cung giá nhi hữu thiên hạ. Phu tử bất đáp. Nam Cung Đích xuất. Tử cung viết: Quân tử tai giả nhân ! Thướng đức tai giả nhân!",
            "nghia": "Nam Cung Quát hỏi Khổng tử: Nghệ bắn giỏi, Ngạo đánh trận thủy chiến thành thạo thế mà cuối cùng phải chết bất đắc kỳ tử. Ông Vũ ông Tắc chỉ cần cù làm ruộng mà được cả thiên hạ (?) Khổng tử không đáp. Nam Cung Quát ra ngoài. Khổng tử nói: “Quát thật là người quân tử ! Thật là người ham chuộng đạo đức!”.",
            "binh": "NamCung Quát tức Nam Dung con người hoàn hảo đã được Khổng tử gả cháu gái cho. Nam Dung hỏi về Nghê, Ngạo là quyền thần đời trước cậy tài sức, không được hưởng phúc, Vũ, Tắc có đức nên thành đạt. Câu hỏi của Dung rất khó, lúc đó Khổng tử chưa hiểu được nên ngài khen Dung"
          },
          {
            "id": "14.6",
            "hanviet": "Tử viết: Quân tử nhi bất nhân giả hữu hĩ phu, vị hữu tiểu nhân nhi nhân giả dã.",
            "nghia": "Khổng tử nói: Người quân tử có khi lỡ làm việc bất nhân, nhưng kẻ tiểu nhân chẳng bao giờ làm được việc nhân.",
            "binh": "Khi người tử tế mắc sai lầm cũng cần châm chước bởi hoàn cảnh nào đó mà người ấy lỡ làm sai…"
          },
          {
            "id": "14.7",
            "hanviet": "Tử viết: Ái chi, năng vật lao hồ? Trung yên, năng vật hối hồ?",
            "nghia": "Khổng tử nói: Yêu con mà không cho con làm việc nặng nhọc ư? Trung với vua mà không khuyên can vua làm cho đúng ư ?",
            "binh": ""
          },
          {
            "id": "14.8",
            "hanviet": ":,,,, Tử viết: Vi mệnh, Tỳ Thầm thảo sáng chi, Thế Thúc thảo luận chi, hành nhân Tử Vũ tu sức chi, đông lý Tử Sản nhuận sắc chi.",
            "nghia": "Khổng tử nói: Theo mệnh vua,Tỳ Thầm viết văn bản, đến Thế Thúc thảo luận, qua Tử Vũ tu sửa, đến phần Tử Sản trau chuốt lần cuối.",
            "binh": "Nước Trịnh có tập quán coi trọng việc làm ra văn bản. Có bốn viên quan phụ trách viết văn bản ngoại giao. Kể chuyện này, Khổng tử nhắc nhở học trò sau này làm quan khi viết văn bản phải cẩn thận vì tầm quan trọng của văn bản với quốc gia)."
          },
          {
            "id": "14.9",
            "hanviet": "Hoặc vấn Tử Sản. Tử viết: Huệ nhân dã. Vấn Tử Tây. Viết: Bỉ tai ! Bỉ tai! Vấn Quản Trọng. Viết: Nhân dã. Đoạt Bá Thị Biền ấp tam bách, phạn sơ thực, một xỉ vô oán ngôn.",
            "nghia": "Có người hỏi Khổng tử về Tử Sản. Khổng tử nói: Người ấy rất khoan dung và yêu dân. Lại hỏi về Tử Tây, Khổng tử nói: “Người ấy… người ấy…”. Lại hỏi về Quản Trọng, Khổng tử nói: Người này ư, vua Tề lấy ấp Biền ba trăm nhà của Bá Thị thưởng công cho Quản Trọng khiến Bá Thị nghèo khổ suốt đời mà không hề oán hận.",
            "binh": "Tử Tây là tể tướng nước Sở chẳng có công tích gì, khi Khổng tử đến nước Sở thì Tử Tây đem lòng đố kỵ vì sợ vua Sở tín nhiệm Khổng tử hơn. Nay nhắc đến hắn, Khổng tử không nỡ đả kích mà rất bao dung độ lượng. Quản Trọng là quan tài giỏi, có công lao lớn của nước Tề. Bá Thị bị vua lấy bớt đất cấp cho Quản Trọng mà Bá Thị tâm phục Quản Trọng nên không chút oán giận"
          },
          {
            "id": "14.10",
            "hanviet": "Tử viết: Bần nhi vô oán nan, phú nhi vô kiêu dịch.",
            "nghia": "Khổng tử nói: Nghèo mà không oán hận thì rất khó, giàu mà không kiêu rất dễ làm.",
            "binh": ""
          },
          {
            "id": "14.11",
            "hanviet": "Tử viết: Mạnh Công Xước vi Triệu, Ngụy lão tắc ưu, bất khả dĩ vi Đằng, Tiết đại phu.",
            "nghia": "Khổng tử nói: Mạnh Công Xước làm gia thần cho họ Triệu, họ Ngụy thì còn dư tài năng, nếu làm đại thần nước Đằng, nước Tiết thì chưa đủ năng lực.",
            "binh": ""
          },
          {
            "id": "14.12",
            "hanviet": "Tử Lộ vấn thành nhân. Tử viết: Nhược Tang Vũ Trọng chi tri, công xước chi bất dục, biện trang tử chi dũng, Nhiễm Cầu chi nghệ, văn chi dĩ lễ nhạc, diệc khả dĩ vi thành nhân hĩ. Viết: Kim chi thành nhân giả hà tất nhiên? Kiến lợi tư nghĩa, kiến nguy thụ mệnh, cữu yếu bất vong bình sinh chi ngôn, diệc khả dĩ vi thành nhân hĩ.",
            "nghia": "Tử Lộ hỏi về một người thành đạt. Khổng tử nói: Có trí tuệ như Tang Vũ Trọng, liêm khiết như Mạnh Công Xước, dũng cảm như Biện Trang Tử, tài nghệ như Nhiễm Cầu, lại nắm được lễ nhạc nữa thì xem như những người toàn tài. Rồi Khổng tử nói thêm: Bây giờ người thành nhân có cần như thế nữa không ? Chỉ cần thấy lợi thì trước hết nghĩ đến nghĩa, gặp việc nguy nan thì sẵn sàng đối phó, lời hứa dù lâu cũng không quên, được như vậy thì xem như thành nhân rồi.",
            "binh": ""
          },
          {
            "id": "14.13",
            "hanviet": ". Tử vấn Công Thúc Văn Tử ư Công Minh Giả viết: Tín hồ, phu tử bất ngôn, bất tiếu, bất thủ hồ? Công minh thúc đối viết: Dĩ cáo giả quá dã. Phu tử thời nhiên hậu ngôn, nhân bất yếm kỳ ngôn; nhạc nhiên hậu tiếu, nhân bất yếm kỳ tiếu; Nghĩa nhiên hậu thủ, nhân bất yếm kỳ thủ. Tử viết: Kỳ nhiên ? Khải kỳ nhiên hồ?",
            "nghia": "Khổng tử hỏi Công Minh Giả về Công Thúc Văn Tử: “Ta nghe nói Công Thúc Văn Tử không nói, không cười, không nhận cái gì của ai, điều đó đúng không? Công Minh Giả đáp: “Là người ta nói quá đấy. Văn Tử chỉ nói lúc đáng nói, nên người ta nghe không chán; Khi vui mới cười nên người ta thấy cười mà không chê; Của hợp nghĩa mới nhận nên người ta thấy nhận là thích hợp, không khinh bỉ”. Khổng tử nói: Thật vậy ư? Chẳng lẽ thật vậy ư?",
            "binh": ""
          },
          {
            "id": "14.14",
            "hanviet": "Tử viết: Tang Vũ Trọng dĩ Phòng cầu vi hậu ư Lỗ, tuy viết bất yêu cư, ngô bất tín dã.",
            "nghia": "Khổng tử nói: Tang Vũ Trọng lấy đất ấp Phòng để ép vua Lỗ cho con ông ta làm chủ ấp ấy. Tuy có người nói ông ta không ép vua nhưng riêng ta không tin.",
            "binh": ""
          },
          {
            "id": "14.15",
            "hanviet": "Tử viết: Tấn Văn Công quyệt nhi bất chính, Tề Hoàn Công chính nhi bất quyệt.",
            "nghia": "Khổng tử nói: Tấn Văn Công xảo trá mà bất chính, Tề Hoàn Công chính trực mà không xảo trá.",
            "binh": ""
          },
          {
            "id": "14.16",
            "hanviet": "Tử Lộ viết: Hoàn Công sát công tử Củ, Triệu Hốt tử chi, Quản Trọng bất tử. Viết: Vị nhân hồ? Tử viết: Hoàn Công cửu hợp chư hầu, bất dĩ binh xa, Quản Trọng chi lực dã. Như kỳ nhân, như kỳ nhân. Tử",
            "nghia": "Lộ nói: Tề Hoàn Công giết em là công tử Củ, Triệu Hốt vì thế mà tự sát, còn Quản Trọng không tự sát. Như thế Quản Trọng không được coi là người có nhân chăng? Khổng tử nói: Vua Tề Hoàn Công nhiều lần triệu tập họp chư hầu mà không dùng binh lực. Đó là nhờ công sức của Quản Trọng, như thế còn ai nhân bằng? Quản Trọng để lại một tấm gương sáng rực trong lịch sử Trung Quốc về chính trị, kinh tế, văn hóa và đạo đức).",
            "binh": "Khi Tề Hoàn công và em trai là công tử Củ tranh giành ngôi vua thì Quản Trọng và Triệu Hốt theo giúp công tử Củ. Nghe tin Tề Hoàn Công giết công tử Củ, Triệu Hốt liền tự sát, còn Quản Trọng thì không. Quản Trọng còn theo đuổi lý tưởng lớn lao hơn một ngôi vua- đó là liên minh chư hầu tránh dùng vũ lực gây chiến tranh, đó là người theo đuổi đạo nhân, Vì thế Khổng tử đánh giá cao công trạng của Quản Trọng. Còn Triệu Hốt chỉ được tiếng khen là người trung thành với chủ."
          },
          {
            "id": "14.17",
            "hanviet": "Tử Cống viết: Quản Trọng phi nhân giả dự? Quản Công sát công tử Củ, bất năng tử, hựu tương chi. Tử viết: Quản Trọng tương Quản Công, bá chư hầu, nhất khuông thiên hạ, dân đáo ư kim thụ kỳ tứ. Vi Quản Trọng, ngô kỳ bị phát tả nhẫm hĩ. Khải nhược thất phu phụ chi vi luộng dã, tự kinh ưcâu độc nhi mạc chi tri dã. Tử",
            "nghia": "Cống nói: Quản Trọng không phải là người có nhân chăng? Vua Tề Hoàn Công giết công tử Củ, Quản Trọng đã không tự sát lại còn làm tể tướng cho Tề Hoàn Công. Khổng tử nói: Quản Trọng làm tể tướng cho Tề Hoàn Công, giúp ông ta làm bá chủ chư hầu, khiến cho thiên hạ thái bình, đời nay dân chúng vẫn còn chịu ơn. Nếu không có Quản Trọng, sợ rằng hôm nay chúng ta còn đầu bù tóc rối, áo quần rách rưới, lang thang đó đây. Quản Trọng đâu phải như người thường vì việc nhỏ mà tự sát ở khe núi để chẳng ai biết đến.",
            "binh": ""
          },
          {
            "id": "14.18",
            "hanviet": ": Công Thúc Văn Tử chi thần đại phu soạn dự văn tử đồng thăng giả công. Tử văn chi, viết: Khả dĩ vi văn hĩ.",
            "nghia": "Gia thần của Công Thúc Văn Tử là đại phu Soạn nhờ Công tiến cử mà được thăng chức đại thần. Khổng tử nghe tin, nói: Công Thúc Văn Tử đáng được đặt tên thụy là “văn”.",
            "binh": "“văn” là có kiến thức"
          },
          {
            "id": "14.19",
            "hanviet": "Tử ngôn Vệ Linh Công chi vô đạo dã, Khang tử viết: Phu như thị, hề nhi bất tang. Khổng tử viết: Trọng Thúc Ngữ trì tân khách, Chúc Đà thỉ tông miếu, Vương Tôn Giả thỉ quân lữ, phu như thị, hề kỳ tang ?",
            "nghia": "Khổng tử chê vua Vệ Linh Công là kẻ vô đạo. Quý Khang tử hỏi: Dù cho Vệ Linh Công như vậy, sao nước Vệ không diệt vong? Khổng tử đáp: Bởi vì nước Vệ có Trọng Thúc Ngữ giỏi việc ngoại giao, tiếp đãi tân khách, Chúc Đà quản lý tốt việc tế lễ tông miếu, Vương Tôn Giả giỏi cầm quân. Biết dùng người như vậy thì làm sao mất nước được?",
            "binh": "Vua nước Vệ vô đạo nhưng còn biết dùng nhân tài, do vây còn giữ được đất nước. Nếu vua Vệ có đạo thì đất nước còn phát triển tốt đẹp hơn)."
          },
          {
            "id": "14.20",
            "hanviet": "Tử viết: Kỳ ngôn chi bất tạc, tắc vi chi dã nan.",
            "nghia": "Khổng tử nói: Kẻ nói khoác mà không biết tủi thẹn, ắt là khó làm đúng lời đã nói.",
            "binh": ""
          },
          {
            "id": "14.21",
            "hanviet": ",„‟ , , Trần Thành Tử thí Giản Công. Khổng tử mộc dục nhi triêu, cáo ư Ai Công viết: Trần Hằng thí kỳ quân, thỉnh thảo chi. Công viết: Cáo phu tam tử. Khổng tử viết: Dĩ ngô tòng đại phu chi hậu, bất cảm bất cáo dã. Quân viết „cáo phu tam tử‟giả. Chi tam tử cáo, bất khả. Khổng tử viết: Dĩ ngô tòng đại phu chi hậu, bất cảm bất cáo dã.",
            "nghia": "Trần Thành Tử giết vua Tề Giản Công. Khổng tử tắm gội sạch sẽ, vào triều thưa với vua Lỗ Ai Công: “Trần Hằng đã giết vua của hắn, xin bệ hạ cho cử binh đi phạt tội hắn”. Vua Lỗ nói: Việc này báo cho ba đại phu biết đã. Khổng tử lui ra nói: “Ta tuy thôi làm quan nhưng còn đứng sau hàng đại phu, cho nên biết việc này mà không thể không đi báo vua, thế mà vua lại bảo cứ đi hỏi ba đại phu kia”. Khổng tử đến báo cho ba đại phu kia, nhưng chẳng ai ưng thuận. Khổng tử nói: Ta đứng sau hàng đại phu, cho nên biết việc này thì không thể không đi báo",
            "binh": "Theo phép thời Xuân thu, kẻ giết vua là vô đạo, trái lẽ trời, phải bị trừng phạt. Trách nhiệm Khổng tử đã từng làm quan đại phu nên phải tâu lên nhà vua. Ba quan đại phu nước Lỗ cũng là loại quyền thần lấn át vua nên việc làm của Khổng tủ tuy không đạt yêu cầu những cũng có ý răn đe ba vị đai phu ấy)."
          },
          {
            "id": "14.22",
            "hanviet": "Tử Lộ vấn sự quân. Tử viết: Vật khi dã, nhi phạm chi Tử Lộ hỏi về đạo thờ vua,",
            "nghia": "Khổng tử nói: Không được lừa dối vua, dám can ngăn dù xúc phạm vua.",
            "binh": ""
          },
          {
            "id": "14.23",
            "hanviet": "Tử viết: Quân tử thượng đạt, tiểu nhân hạ đạt.",
            "nghia": "Khổng tử nói: Quân tử càng hướng về đạo cao, tiểu nhân càng sa xuống thấp hèn.",
            "binh": ""
          },
          {
            "id": "14.24",
            "hanviet": "Tử viết: Cổ chi học giả vi kỷ, kim chi học giả vi nhân.",
            "nghia": "Khổng tử nói: Người xưa học cho mình, người đời nay học cho người khác.",
            "binh": "Người xưa đi học là tu thân rồi ra giúp nước để thực hành tri thức. Nay thiên hạ đi học để lấy bằng cấp cho người ta biết mình, học vì danh lợi"
          },
          {
            "id": "14.25",
            "hanviet": "Cừ Bá Ngọc sử nhân ư Khổng tử, Khổng tử dự chi tọa nhi vấn yên. Viết: Phu tử hà vi? Đối viết: Phú tử dục quả kỳ quá nhi vị năng dã. Sứ giả xuất, Tử viết: Sứ hồ! Sứ hồ !",
            "nghia": "Cừ Bá Ngọc sai người tới thăm Khổng tử, Khổng tử mời khách ngồi rồi hỏi thăm: Phu tử Cừ nay làm gì? Sứ giả đáp: Ông chủ con muốn giảm lỗi lầm mà chưa làm được. Sau khi sứ giả từ biệt ra về, Khổng tử khen: Thật là một sứ giả giỏi, sứ giả giỏi !",
            "binh": "Sứ giả ngoại giao thật khôn ngoan đúng mực, không phô trương công tích của chủ mà nói chủ đang lo sửa lỗi"
          },
          {
            "id": "14.26",
            "hanviet": "Tử viết: Bất tại kỳ vị, bất mưu kỳ chính. Tằng Tử viết: Quân tử tư bất xuất kỳ vị.",
            "nghia": "Khổng tử nói: Không giữ chức vụ gì thì đừng lo nghĩ về chức vị ấy.",
            "binh": "Khổng tử cho rằng ai nên lo phận nấy. Việc người khác mình không hiểu được nội tình nên nhận xét có thể sai lạc; lại làm cho tình hình rối loạn hơn)."
          },
          {
            "id": "14.27",
            "hanviet": "Tử viết: Quân tử sỉ kỳ ngôn nhi quá kỳ hành.",
            "nghia": "Khổng tử nói: Quân tử phải biết hổ thẹn vì lời nói quá so với việc làm.",
            "binh": ""
          },
          {
            "id": "14.28",
            "hanviet": "Tử viết: Quân tử đạo giả tam, ngã vô năng yên: nhân giả bất ưu, tri giả bất hoặc, dũng giả bất cụ. Tử Cống viết: Phu tử tự đạo dã.",
            "nghia": "Khổng tử nói: Đạo quân tử có ba điều mà ta chẳng làm được một. Người nhân không lo buồn, kẻ trí không nghi hoặc, người dũng không sợ hãi”. Tử Cống thưa: Thầy nói khiêm tốn quá đấy.",
            "binh": ""
          },
          {
            "id": "14.29",
            "hanviet": "Tử Cống phương nhân. Tử viết: Tứ dã hiền hồ tai ? Phu ngã tắc bất hạ.",
            "nghia": "Tử Cống hay so sánh người hơn kẻ kém. Khổng tử nói: Người giỏi vậy ư ? Ta thì không nhàn rỗi nói chuyện đó.",
            "binh": "Tử Cống có óc phân tích, so sánh lại thẳng thắn, nhưng gây cho người khác mất lòng. Khổng tử khuyên anh ta chẳng nên thế"
          },
          {
            "id": "14.30",
            "hanviet": "Tử viết: Bất hoạn nhân chi bất kỷ tri, hoạn kỳ bất năng dã.",
            "nghia": "Khổng tử nói: Chẳng lo người ta không biết đến mình, chỉ lo mình không có khả năng đức độ để người ta biết đến.",
            "binh": ""
          },
          {
            "id": "14.31",
            "hanviet": "Tử viết : Bất nghịch tác, bất ức bất tín, ức diệc tiên giác giả, thị hiền hồ !",
            "nghia": "Khổng tử nói: Không cần đoán trước sự lừa dối, sự bất tín của người khác, nhưng nếu có thì biết ngay. Như vậy coi là người hiền rồi.",
            "binh": ""
          },
          {
            "id": "14.32",
            "hanviet": "Vi Sinh Mẫu vị Khổng tử viết: Khâu, hà vi thị tê tê giả dự ? Vô nãi vi nịnh hồ? Khổng tử viết : Phi cảm vi nịnh dã, tật cố dã.",
            "nghia": "Vi Sinh Mẫu nói với Khổng tử: Ông Khâu, sao cứ phải miệt mài dạy dỗ người đời như thế ? Phải chăng ông khoe tài ăn nói, đặng lấy lòng người ư? Khổng tử đáp: Tôi không dám khoe tài, chỉ vì ghét những kẻ cố chấp không chịu hiểu đạo lý.",
            "binh": ""
          },
          {
            "id": "14.33",
            "hanviet": "Tử viết : Ký bất xứng kỳ lực, xứng kỳ đức dã.",
            "nghia": "Khổng tử nói: Không nên khen sức mạnh ngựa thiên lý, mà khen cái đức tính của nó.",
            "binh": "Đức tính của ngựa đáng khen là dễ sai khiến, trung thành, có tình. Người xưa từng nói “khuyển mã chi tình” (tình chó, ngựa). Ý Khổng tử so sánh với con người: nên trọng người trung thành có tình hơn kẻ tài giỏi mà vô đức"
          },
          {
            "id": "14.34",
            "hanviet": ", Hoặc viết „Dĩ đức báo oán, hà như?‟ .Tử viết: Hà dĩ báo đức ? Dĩ trực báo oán, dĩ đức báo đức.",
            "nghia": "Có người hỏi: Lấy đức báo oán thù, vậy được không? Khổng tử đáp: “Thế lấy gì báo ân đức ? Hãy lấy ngay thẳng báo oán, dùng ân đức để báo đáp ân đức”",
            "binh": ""
          },
          {
            "id": "14.35",
            "hanviet": "Tử viết : Mạc ngã tri dã phu ! Tử Cống viết: Hà vi kỳ mạc tri tử dã? Tử viết: Bất oán thiên, bất vưu nhân. Hạ học nhi thượng đạt, tri ngã giả kỳ thiên hồ !",
            "nghia": "Khổng tử nói: Chẳng có ai hiểu ta cả! Tử Cống hỏi: Sao không có ai hiểu thầy? Khổng tử nói: Ta không oán trời, không trách người, ta học việc con người từ nơi thấp cạn mà hiểu được việc trời cao siêu. Hiểu ta may ra chỉ có trời.",
            "binh": ""
          },
          {
            "id": "14.36",
            "hanviet": "Công Bá Liêu tố Tử Lộ ư Quí Tôn. Tử Phục Cảnh Bá dĩ cáo, viết: “Phu tử cố hữu hoặc chí ư Công Bá Liêu, ngô lực do năng tứ chư thị triêu”. Tử viết: “Đạo chi thương hành dã dự, mệnh dã; Đạo chi thương phế dã dự, mệnh dã. Công Bá Liêu kỳ như mênh hà !”.",
            "nghia": "Công Bá Liêu nói xấu Tử Lộ ở nhà Quí Tôn. Tử Phục Cảnh Bá nghe được, nói: Quý Tôn đã bị Công Bá Liêu mê hoặc rồi. Con có thể làm cho Quý Tôn giết Công Bá Liêu đem bêu xác ngoài chợ để thị uy. Khổng tử nói: Đạo của ta có thực hiện được hay không là do mệnh trời. Công Bá Liêu làm sao bằng mệnh trời được.",
            "binh": "Công Bá Liêu là kẻ xấu, muốn phá hoại sự nghiệp của thầy trò Khổng tử nên thường nói xấu với nhà Quý Tôn đại thần nước Lỗ. Tử Phục Cảnh Bá là một học trò của Khổng tử muốn giết Công Bá Liêu nhưng Khổng tử không đồng ý, ngài tin ở mệnh trời"
          },
          {
            "id": "14.37",
            "hanviet": "Tử viết : Hiền giả tịch thế, kỳ thứ tịch địa, kỳ thứ tịch sắc, kỳ thứ tịch ngôn. Tử viết: Tác giả thất nhân hĩ.",
            "nghia": "Khổng tử nói: Hiền giả tránh đời vô đạo đi ở ẩn, một số tránh nước loạn mà chạy qua nước khác, một số tránh mặt vua trở mặt, không biết lễ, một số khác tránh kẻ tiểu nhân hay gièm pha. Lại nói thêm: Những người ấy đã có đến bảy người rồi.",
            "binh": "Bá Di, Thúc Tề, Ngu Trọng, Di Dật, Chu Trương, Liễu Hạ Huệ, Thiếu Liên là bảy người hiền đi ở ẩn"
          },
          {
            "id": "14.38",
            "hanviet": ": ?.:.: Tử Lộ túc ư Thạch Môn. Thần môn viết:Hề tự?. Tử Lộ viết: Tự Khổng thị. Viết: Thị tri kỳ bất khả nhi vi chi giả dự ?",
            "nghia": "Tử Lộ nghỉ đêm ở Thạch Môn. Người giữ của thành hỏi: Thầy ở đâu đến? Tử Lộ trả lời: Từ chỗ thầy Khổng tử đến. Người giữ thành hỏi: Có phải (Khổng tử) là người biết chủ trương của mình không thực hiện nổi mà cứ cố làm không ?",
            "binh": ""
          },
          {
            "id": "14.39",
            "hanviet": ":. : Tử kích khánh ư Vệ, hữu hà khoái nhi quá Khổng thị chi môn giả, viết: Hữu tâm tai, Kích khánh hồ ! Kí nhi viết: Bỉ tai ! Khanh khanh hồ ! Mạc kỷ tri dã, tư kỷ nhi dĩ hĩ. Thâm tắc lệ, thiển tắc yết. Tử viết: Quả tai! Mạt chi nan hĩ.",
            "nghia": "Khổng tử ở nước Vệ đang gõ khánh, có người bán sọt đựng cỏ đi ngang, nói “Nghe tiếng khánh, biết người gõ khánh là kẻ có tâm”. Lát sau lại nói: “Tiếng khánh rất khiêm tốn Không có ai biết mình thì chỉ giữ mình thôi. Nước sâu để nguyên quần áo lội qua, nước cạn thì xắn quần lên đi”. Khổng tử nói: “Quả quyết tự tin chưa kìa! Vậy trên đời chẳng còn có gì khó ư?!”",
            "binh": "Người bàn sọt muốn khuyên Khổng tử chẳng nên cố chấp. Không thể cứu được đại sự thì mặc nó trôi qua, còn Khổng tử thì luôn luôn bền chí lo đến sự an nguy của thời cuộc mà tim cách phổ biến đạo lý thánh hiền. “Nước sâu để nguyên áo quần lội qua”: câu này đa nghĩa, tạm hiểu: lỡ có chết đuối thì còn nguyên trang phục, mất thân mà giữ được danh dự- chữ lễ )."
          },
          {
            "id": "14.40",
            "hanviet": "Tử Trương viết: Thư vân: Cao tông Lương Âm, tam niên bất ngôn. Hà vị dã? Tử viết: Hà tất Cao tông? Cổ chi nhân giai nhiên. Quân hoăng, bách quan tổng kỷ dĩ thính ư trủng tể tam niên. Tử",
            "nghia": "Trương nói: Kinh Thư viết „Vua Cao Tông nhà Lương Âm ba năm không nói chuyện chính sự‟ là ý gì? Khổng tử nói: Đâu phải chỉ có vua Cao Tông ? mà người xưa đều vậy. Vua mất, trăm quan đều lo chức vụ mình, nghe theo lệnh quan tể tướng và vua kế vị để thụ tang ba năm.",
            "binh": "Vua Cao tông để tang, ba năm không bàn việc chính sự"
          },
          {
            "id": "14.41",
            "hanviet": "Tử viết : Thượng hiếu lễ, tắc dân dị sử dã.",
            "nghia": "Khổng tử nói: Người trên coi trọng lễ thì dễ sai bảo dân chúng.",
            "binh": ""
          },
          {
            "id": "14.42",
            "hanviet": "Tử Lộ vấn quân tử. Tử viết: Tu kỷ dĩ kính. Viết: Như tư nhi dĩ hồ?. Viết: Tu kỷ dĩ an nhân. Viết: Như tư nhi dĩ hồ ? Viết: Tu kỷ dĩ an bách tính. Tu kỷ dĩ an bách tính, Nghiêu Thuấn kỳ do bệnh chư ?",
            "nghia": "Tử Lộ hỏi về người quân tử. Khổng tử nói: Tu dưỡng mình kính cẩn. Tử Lộ hỏi: Như thế là đủ ư? Khổng tử nói: Tu dưỡng mình để làm yên người khác. Lại hỏi: Như thế là đủ ư? Khổng tử đáp: Tu dưỡng bản thân để làm yên trăm họ. Việc này khó đến nỗi vua Nghiêu, vua Thuấn còn khó làm được.",
            "binh": ""
          },
          {
            "id": "14.43",
            "hanviet": "Nguyên Nhưỡng di sĩ. Tử viết: Ấu nhi bất tôn đệ, trưởng nhi vô thuật yên, lão nhi bất tử, thị vi tặc. Dĩ trượng khấu kỳ hĩnh. Nguyên Nhưỡng ngồi xổm đợi.",
            "nghia": "Khổng tử nói: Lúc nhỏ ngươi không biết tôn trọng anh em và người lớn, khi lớn không làm được việc đáng khen, về già mà chưa chịu chết, ấy là làm hại luân thường, phong tục. Nói xong Khổng tử lấy gậy gõ vào ống chân Nhưỡng.",
            "binh": "Nguyên Nhưỡng người quen cũ của Khổng tử thuộc dòng đạo khác, không biết đạo cư xử của thầy"
          },
          {
            "id": "14.44",
            "hanviet": "Khuyết Đảng đồng tử thương mệnh. Hoặc vấn chi viết: Ích giả hĩ? Tử viết: Ngô kỳ cư ư vị dã, kiến kỳ dự tiên sinh bính hành dã. Phi cầu ích giả dã, dục tốc thành giả dã.",
            "nghia": "Một đứa bé ở làng Khuyết Đảng được lệnh Khổng tử truyền lời đến các vị khách. Có người hỏi Khổng tử: “Nó học đã tiến bộ ư?”. Khổng tử nói: Ta nhìn thấy nó ngồi chỗ người lớn, lại đi ngang hàng với người lớn. Nó không phải người cầu tiến mà là người vội vàng muốn thành người lớn. Hết thiên 14",
            "binh": "Khổng tử thấy đứa bé muốn chóng làm người lớn, đáng lẽ nó chỉ đi theo hầu. Nên ngài sai bảo nó đi theo phục vụ để nhắc nhở nó biết phép tắc thứ bậc (lễ"
          }
        ]
      },
      {
        "id": "ve-linh-cong",
        "number": 15,
        "name": "Vệ Linh Công",
        "note": "",
        "passages": [
          {
            "id": "15.1",
            "hanviet": "",
            "nghia": ", Vệ Linh Công vấn trận ư Khổng tử. Khổng tử đối viết: Trở đậu chi sự, tắc thường văn chi hĩ; Quân lữ chi sự, vị chi học dã. Minh nhật toại hành. Vệ Linh Công hỏi Khổng tử về nước trận mạc. Khổng tử trả lời: Tôi thường nghe về văn (lễ nghĩa), chưa học về chiến trận. Ngày hôm sau Khổng tử dời nước Vệ.",
            "binh": "Vệ Linh Công là vua vô đạo, hỏi dò Khổng tử để gây việc binh đao. Khổng tử từ chối khéo và bỏ đi"
          },
          {
            "id": "15.2",
            "hanviet": "Tại Trần tuyệt lương, tòng giả bệnh, mạc năng hưng. Tử Lộ uấn kiến viết: Quân tử diệc hữu cùng hồ ? Tử viết : Quân tử cố cùng tiểu nhân cùng tư lạm hĩ.",
            "nghia": "Khi ở nước Trần bị tuyệt lương thực, học trò đi theo mắc bệnh, đi không nổi. Tử Lộ buồn rầu gặp Khổng tử nói: “Quân tử cũng có lúc khốn cùng phải không?”. Khổng tử nói: Quân tử gặp cùng khốn thì cố chịu đựng, kẻ tiểu nhân thì lạm dụng, làm liều.",
            "binh": ""
          },
          {
            "id": "15.3",
            "hanviet": "Tử viết: Tứ dã ! Nhữ dĩ dư vi đa học nhi chí giả dữ? Đối viết: Nhiên, phi dự ? Viết: Phi dã. Dư nhất dĩ quán chi.",
            "nghia": "Khổng tử nói: Trò Tứ, ngươi tưởng ta có nhiều học thức ư? Tử Cống thưa: Vâng ạ, chẳng lẽ không phải vậy sao ? Khổng tử đáp: Không phải, ta chỉ biết dùng một đạo lý cơ bản mà thông suốt mọi vấn đề.",
            "binh": "; Khổng tử cho rằng chỉ cần học những điều cơ bản mà tự nhìn thấy nhiều kiến thức khác, không cần đọc nhiều nhớ nhiều. Kiến thức cơ bản ấy chính là đạo nhân"
          },
          {
            "id": "15.4",
            "hanviet": "Tử viết: Do! Tri đức giả tiển hĩ.",
            "nghia": "Khổng tử nói: Trò Do ơi, người hiểu biết về chữ đức bây giờ hiếm quá.",
            "binh": ""
          },
          {
            "id": "15.5",
            "hanviet": "Tử viết: Vô vi nhi trị giả, kỳ Thuấn dã dự ? Phu hà vi tai ? Cung kỷ chính Nam diện nhi dĩ hĩ.",
            "nghia": "Khổng tử nói: Không cần làm gì mà trị yên được thiên hạ, chỉ có vua Thuấn phải không ? Vua Thuấn có làm gì đâu? Người chỉ giữ trang nghiêm đoan chính, ngồi ngoảnh mặt về phương Nam.",
            "binh": "Học thuyết „Vô vi nhi trị‟. Người lãnh đạo tài cao đức trọng đủ cảm hoá mọi người, phát huy năng lực người cấp dưới mà làm việc"
          },
          {
            "id": "15.6",
            "hanviet": ":, ,, Tử Trương vấn hành. Tử viết Ngôn trung tín, hành đốc kính, tuy Man Mạch chi bang, hành hĩ. Ngôn bất trung tín, hành bất đốc kính, tuy châu lý, hành hồ tai ? Lập tắc kiến kỳ tham ư tiền dã, tại dư tắc kiến kỳ ỷ ư hành dã, phu nhiên hậu hành. Tử Trương thư chư thân. Tử Trương hỏi về việc đi lại.",
            "nghia": "Khổng tử nói: Lời nói phải trung tín, làm việc cẩn trọng thì dù đi tới nước thiểu số Man Mạch vẫn thông suốt. Lời nói thiếu trung tín, làm việc cẩu thả thì dù ở ngay quê hương mình cũng vấp váp. Khi đứng, như thấy chữ “trung tín, cẩn trọng” đang ở trước mặt. Khi ngồi xe, như thấy chữ “trung tín, cẩn trọng” khắc trên thành xe. Như vậy thì thực hành thông suốt. Tử Trương chép lời dặn ấy vào dải áo thắt ngang lưng",
            "binh": ""
          },
          {
            "id": "15.7",
            "hanviet": "Tử viết: Trực tai Sử Ngư ! Bang hữu đạo, như thỉ; bang vô đạo, như thỉ. Quân tử tai Cừ Bá Ngọc ! Bang hữu đạo, tắc sĩ; Bang vô đạo tắc khả quyển như hoài chi.",
            "nghia": "Khổng tử nói: Ngay thẳng như Sử Ngư ! Nước có đạo, ông ngay thẳng như cái tên; Khi nước vô đạo, ông vẫn ngay thẳng như cái tên. Quân tử như Cừ Bá Ngọc, nước có đạo thì ra làm quan, khi nước vô đạo biết lui về ở ẩn.",
            "binh": ""
          },
          {
            "id": "15.8",
            "hanviet": "Tử viết: Khả dữ ngôn nhi bất dự chi ngôn, thất nhân; Bất khả dự ngôn nhi dự ngôn. Trí giả bất thất nhân, diệc bất thất ngôn.",
            "nghia": "Khổng tử nói: Người có thể cùng nói chuyện mà không nói, thế là mất người. Người không thể bàn chuyện cùng mà lại nói, thế là uổng lời. Người trí thức không bỏ mất người và không uổng lời.",
            "binh": ""
          },
          {
            "id": "15.9",
            "hanviet": "Tử viết: Chí sĩ nhân nhân, vô cầu sinh dĩ hại nhân, hữu sát thân dĩ thành nhân.",
            "nghia": "Khổng tử nói: Chí sĩ là người nhân đức, không bao giờ cầu sống để hại người khác, có khi còn dám hy sinh thân mình để thi hành đạo nhân.",
            "binh": ""
          },
          {
            "id": "15.10",
            "hanviet": "Tử Cống vấn vi nhân. Tử viết: Công dục thiện kỳ sự, tất tiên lợi kỳ khí. Cư thị bang dã, sự kỳ đại phu chi hiền giả, hữu kỳ sĩ chi nhân giả. Tử Cống hỏi về đạo nhân:",
            "nghia": "Khổng tử nói: Người thợ muốn làm ra sản phẩm tốt thì tất phải có dụng cụ tốt trước đã. Trong nước phải tôn người hiền tài trong số đại phu làm thầy, kết giao bạn bè với người nhân đức trong số kẻ sĩ.",
            "binh": ""
          },
          {
            "id": "15.11",
            "hanviet": "Nhan Uyên vấn vi bang. Tử viết: Hành Hạ chi thời, thừa Ân chi lộ, phục Chu chi miện, nhạc tắc Thiều Vũ. Phóng Trịnh thanh, viễn vọng nhân. Trịnh thanh dâm, vọng nhân đãi. Nhan Uyên hỏi về việc trị nước.",
            "nghia": "Khổng tử nói: Dùng lịch pháp nhà Hạ, đi xe nhà Ân, đội mũ nhà Chu, dùng nhạc thiều nhà Vũ. Bỏ nhạc nhà Trịnh vì âm thanh dâm dật, bậy bạ làm hỏng người, rất nguy hiểm.",
            "binh": ""
          },
          {
            "id": "15.12",
            "hanviet": "Tử viết: Nhân vô viễn lự, tất hữu cận ưu.",
            "nghia": "Khổng tử nói: Người không lo nghĩ xa thì ắt có nỗi buồn gần.",
            "binh": "Người cần nhìn xa trông rộng, nếu chỉ biết lợi ích trước mắt không suy tính dài hơi thì hoạn nạn đến nhanh. Mọi việc nên có phòng bị trước (từ sớm) thì sẽ đối phó được việc bất ngờ"
          },
          {
            "id": "15.13",
            "hanviet": "Tử viết: Dĩ hĩ hồ ! Ngô vị kiến hiếu đức như hiếu sắc giả dã.",
            "nghia": "Khổng tử nói: Thôi hết rồi ! Ta chưa nhìn thấy ai ham đức như ham sắc vậy.",
            "binh": ""
          },
          {
            "id": "15.14",
            "hanviet": "Tử viết: Tang Văn Trọng kỳ thiết vị giả dự ! Tri Liễu Hạ Huệ chi hiền nhi bất dự lập dã.",
            "nghia": "Khổng tử nói: Tang Văn Trọng hình như là kẻ ăn cắp chức vụ ? Người ấy biết rất rõ Liễu Hạ Huệ thật sự là hiền tài mà không cử Liễu ra làm quan.",
            "binh": "Liễu Hạ Huệ là hiền tài, Tang Văn Trọng ngồi ghế quan cao, biết rõ Liễu xứng đáng mà không đề bạt là do bụng hẹp hòi. Đó là tội che giấu hiền tài, kể như ăn cắp vậy."
          },
          {
            "id": "15.15",
            "hanviet": "Tử viết: Cung tự hậu nhi bạc trách ư nhân, tắc viễn oán hĩ.",
            "nghia": "Khổng tử nói: Nên tự trách mình nhiều, trách người ít hơn, được vậy thì ít đem lại oán hận.",
            "binh": ""
          },
          {
            "id": "15.16",
            "hanviet": "Tử viết: Bất viết như chi hà, như chi hà giả, ngô mạt như chi hà dã dĩ hĩ.",
            "nghia": "Khổng tử nói: Một người không biết bàn về sự việc như thế nào, nên làm ra sao ư? Ta chẳng biết dạy bảo kẻ ấy thế nào nữa.",
            "binh": "Khổng tử thất vọng với người chỉ biết kêu ca khi gặp khó chứ không biết bàn tính, suy nghĩ ra sao"
          },
          {
            "id": "15.17",
            "hanviet": "Tử viết: Quần cư chung nhật, ngôn bất cập nghĩa, hiếu hành tiểu tuệ, nan dĩ tai!",
            "nghia": "Khổng tử nói: Ngồi trò chuyện cả đám suốt ngày mà không bàn chuyện đạo nghĩa, chỉ nói chuyện khôn vặt. Kẻ ấy thực khó thành đạo.",
            "binh": ""
          },
          {
            "id": "15.18",
            "hanviet": "Tử viết: Quân tử nghĩa dĩ vi chất, lễ dĩ hành chi, tôn dĩ xuất chi, tín dĩ thành chi. Quân tử tai!",
            "nghia": "Khổng tử nói: Quân tử lấy nghĩa lý làm gốc, lấy lễ để thực hành, lấy tôn kính biểu hiện ra, dùng đức tín để làm việc. Đó là người quân tử.",
            "binh": ""
          },
          {
            "id": "15.19",
            "hanviet": "Tử viết: Quân tử tật vô năng yên, bất bệnh nhân chi bất kỷ tri dã.",
            "nghia": "Khổng tử nói: Quân tử chỉ sợ mình mắc lỗi, không sợ người ta không biết mình.",
            "binh": ""
          },
          {
            "id": "15.20",
            "hanviet": "Tử viết: Quân tử tật một thế nhi danh bất xứng yên.",
            "nghia": "Khổng tử nói: Quân tử sẽ mang hận suốt đời nếu không xứng đáng với danh phận.",
            "binh": ""
          },
          {
            "id": "15.21",
            "hanviet": "Tử viết: Quân tử cầu giả kỷ, tiểu nhân cầu giả nhân.",
            "nghia": "Khổng tử nói: Quân tử mọi thứ đều dựa vào mình, tiểu nhân đều dựa tất cả vào người khác.",
            "binh": ""
          },
          {
            "id": "15.22",
            "hanviet": "Tử viết: Quân tử căng nhi bất tranh, quần nhi bất đảng.",
            "nghia": "Khổng tử nói: Quân tử trang nghiêm mà không tranh giành, hoà hợp với người nhưng không kết bè phái.",
            "binh": ""
          },
          {
            "id": "15.23",
            "hanviet": "Tử viết: Quân tử bất dĩ ngôn cử nhân, bất dĩ nhân phế ngôn.",
            "nghia": "Khổng tử nói: Quân tử không vì lời nói mà cất nhắc người, cũng không vì người mà bỏ lời nói.",
            "binh": "Không nên chỉ vì lời nói hay mà tin tưởng, cất nhắc. Một kẻ ta không ưa nhưng có lời hay thì cũng cần lưu ý suy nghĩ chứ không nên bỏ qua. Tóm lại, nhìn người phải suy xét cả lời nói và việc làm)."
          },
          {
            "id": "15.24",
            "hanviet": "Tử Cống vấn viết: Hữu nhất ngôn dĩ chung thân hành chi giả hồ ? Tử viết: Kỳ thứ hồ! Kỷ sở bất dục, vật thi ư nhân. Tử",
            "nghia": "Cống hỏi: Có câu nói nào mà dùng được suốt đời không ? Khổng tử nói: Đó là chữ “thứ”. Việc gì mình không muốn thì đừng làm cho người khác.",
            "binh": ""
          },
          {
            "id": "15.25",
            "hanviet": "Tử viết: Ngô chi ư nhân dã, thùy hủy thùy dự ? Như hữu sở dự giả, kỳ hữu sở thí hĩ. Tư dân dã, tam đại chi sở dĩ trực đạo nhi hành dã.",
            "nghia": "Khổng tử nói: Ta sống với người, có chê ai khen ai quá lố đâu? Nếu khen ai ta phải xem xét thực tế để biết rõ người ấy. Phê phán người đời nay, ta dựa theo đạo đức ngay thẳng ba đời Hạ, Thương, Chu.",
            "binh": "Khổng tử nhắc việc khen, chê người khác cần thận trọng, có căn cứ. Nếu không thì lại xa rời đạo lý. Khổng tử coi việc khen chê thời Hạ, Thương, Chu là mẫu mực"
          },
          {
            "id": "15.26",
            "hanviet": ", Tử viết: Ngô do cập sử chi khuyết văn dã, hữu mã giả tá nhân thừa chi, kim vong hĩ phu.",
            "nghia": "Khổng tử nói: Ta thấy quan chép sử bỏ trống những điều nghi vấn, lại biết có người chủ ngựa dám cho người khác mượn ngựa. Bây giờ không còn loại người ấy nữa.",
            "binh": "Cuối thời Xuân thu Khổng tử chứng kiến xã hội suy vi trước mắt nên rất lo lắng u sầu… Quan chép sử cẩn thận chỉ viết điều chắc chắn, người cho bạn mượn ngựa- là hai việc bình thường ngày xưa mà ngày nay hiếm hoi tới mức không thấy nữa)."
          },
          {
            "id": "15.27",
            "hanviet": "Tử viết: Xảo ngôn loạn đức. Tiểu bất nhẫn tắc loạn đại mưu.",
            "nghia": "Khổng tử nói: Lời xảo trá có thể làm bại hoại đạo đức. Không nhẫn nại việc nhỏ thì có thể làm hỏng việc lớn.",
            "binh": ""
          },
          {
            "id": "15.28",
            "hanviet": "Tử viết: Chúng ố chi, tất sát yên; Chúng hiếu chi, tất sát yên.",
            "nghia": "Khổng tử nói: Người bị mọi người ghét, ta phải xét xem có đúng không. Người được mọi người ưa thích, ta cũng phải xem có thực không.",
            "binh": ""
          },
          {
            "id": "15.29",
            "hanviet": "Tử viết: Nhân năng hoằng đạo, phi đạo hoằng nhân.",
            "nghia": "Khổng tử nói: Người phải làm cho đạo được mở rộng, chứ không dùng đạo để phô trương cho mình.",
            "binh": ""
          },
          {
            "id": "15.30",
            "hanviet": "Tử viết: Quá nhi bất cải, thị vị quá hĩ.",
            "nghia": "Khổng tử nói: Có sai lầm mà không sửa, đấy mới thật là sai lầm.",
            "binh": ""
          },
          {
            "id": "15.31",
            "hanviet": "Tử viết: Ngô thường chung nhật bất thực, chung dạ bất tẩm, dĩ tư, vô ích, bất như học dã.",
            "nghia": "Khổng tử nói: Ta từng suốt ngày không ăn cơm, thức trắng cả đêm để suy tư. Nhưng vô ích, không bằng đi học.",
            "binh": ""
          },
          {
            "id": "15.32",
            "hanviet": ": ,, Tử viết: Quân tử mưu đạo bất mưu thực. Canh dã, nỗi tại kỳ trung hĩ; Học dã, lộc tại kỳ trung hĩ. Quân tử ưu đạo bất ưu bần.",
            "nghia": "Khổng tử nói: Quân tử chăm lo cầu đạo chứ không cầu ăn. Người cày ruộng khi gặp mất mùa khó tránh khỏi đói kém. Người chăm học có thể làm quan. Quân tử chỉ lo đạo chứ không lo về nghèo.",
            "binh": ""
          },
          {
            "id": "15.33",
            "hanviet": "Tử viết: Tri cập chi, nhân bất năng thủ chi; Tuy đắc chi, tất thất chi; Tri cập chi, nhân năng thủ chi, bất trang dĩ lị chi, tắc dân bất kính. Tri cập chi, nhân năng thủ chi, trang dĩ lị chi, động chi bất dĩ lễ, vị thiện dã.",
            "nghia": "Khổng tử nói: Người có đủ trí tuệ nhưng không biết giữ đức nhân thì có nhiều kiến thức rồi cũng bỏ mất. Người có đủ trí tuệ lại biết giữ đức nhân nhưng nếu thiếu thái độ nghiêm túc khi đến với dân thì dân cũng không kính trọng. Người có đủ trí tuệ, biết giữ đức nhân lại đến với dân nghiêm túc cẩn thận nhưng không biết dùng lễ tiết kết hợp để cổ vũ dân làm việc thiện thì cũng không hoàn toàn tốt đẹp.",
            "binh": "; Khổng tử nêu ra 04 phẩm chất, tăng dần để đảm bảo thành công"
          },
          {
            "id": "15.34",
            "hanviet": "Tử viết: Quân tử bất khả tiểu tri nhi khả đại thụ dã, tiểu nhân bất khả đại thụ nhi khả tiểu tri dã.",
            "nghia": "Khổng tử nói: Quân tử có thể không biết việc nhỏ nhặt, nhưng có thể đảm đương việc lớn. Kẻ tiểu nhân không làm được việc lớn nhưng có thể biết việc nhỏ nhặt.",
            "binh": ""
          },
          {
            "id": "15.35",
            "hanviet": "Tử viết: Dân chi ư nhân dã, thậm ư thủy hỏa. Thủy hỏa, ngô kiến đạo nhi tử giả hĩ, vị kiến đạo nhân nhi tử giả dã.",
            "nghia": "Khổng tử nói: Nhân dân cần đức nhân hơn cần lửa và nước. Ta từng thấy người dẫm vào lửa và nước mà chết, chưa thấy ai dẫm vào đức nhân mà chết bao giờ.",
            "binh": "Nước và lửa rất cần cho đời sống con người. Khổng tử bảo rằng đức nhân còn cần thiết hơn, thiếu nó cũng co thể nguy hại hơn cả nước, lửa. Làm việc nhân đức thì chẳng bao giờ lo sợ cả."
          },
          {
            "id": "15.36",
            "hanviet": "Tử viết: Đương nhân, bất nhượng ư sư.",
            "nghia": "Khổng tử nói: Người thẳng thắn thì không nhường nhịn cả thầy dạy mình.",
            "binh": ""
          },
          {
            "id": "15.37",
            "hanviet": ". Tử viết: Quân tử trinh nhi bất lượng.",
            "nghia": "Khổng tử nói: Quân tử giữ vững khí tiết nhưng biết bao dung người khác (kém hơn mình).",
            "binh": ""
          },
          {
            "id": "15.38",
            "hanviet": "Tử viết: Sự quân, kính kỳ sự nhi hậu kỳ thực.",
            "nghia": "Khổng tử nói: Thờ vua phải tận tâm, sau mới nghĩ đến bổng lộc.",
            "binh": ""
          },
          {
            "id": "15.39",
            "hanviet": "Tử viết: Hữu giáo vô loại.",
            "nghia": "Khổng tử nói: Dạy người, ta không phân biệt thứ hạng, giàu nghèo, thiện, ác, dở hay.",
            "binh": ""
          },
          {
            "id": "15.40",
            "hanviet": "Tử viết: Đạo bất đồng, bất tương vi mưu.",
            "nghia": "Khổng tử nói: Người không cùng theo một đạo lý thì không thể ngồi bàn việc cùng được.",
            "binh": ""
          },
          {
            "id": "15.41",
            "hanviet": "Tử viết: Từ đạt nhi dĩ hĩ.",
            "nghia": "Khổng tử nói: Lời văn đủ diễn tả ý tứ là được rồi.",
            "binh": ""
          },
          {
            "id": "15.42",
            "hanviet": "Sư Miện kiến, cập giai, Tử viết: Giai dã cập tịch, tử viết: Tịch dã. Giai tọa, Tử cáo chi viết “Mỗ tại tư, mỗ tại tư”. Sư Miện xuất, Tự Trương vấn viết: Dự sư ngôn chi đạo dự ? Tử viết: Nhiên, cố tương sư chi đạo dã. Sư Miện (quan nhạc bị mù) đi tới bậc thềm,",
            "nghia": "Khổng tử nói: „Đây là bậc thềm‟, rồi nói: „Tới chỗ chiếu ngồi‟. Khi mọi người an tọa, Khổng tử giới thiệu từng người „Người này là… Người này là…‟. Khi Sư Miện về rồi, Tử Trương hỏi Khổng tử: Đó là đạo nói chuyện với quan nhạc sư phải không? Khổng tử đáp: Phải rồi, đạo giúp đỡ quan nhạc sư mù lòa. Hết thiên 15",
            "binh": "Mọi người phải tôn trọng và giúp đỡ người mù lòa, huống chi Sư Miện mù lòa lại là người có tài năng, giữ nhạc lễ. Đó là đạo lý xưa nay, chẳng những với người mù lòa mà cả những người bị khiếm khuyết, người già neo đơn, trẻ mồ côi, nam góa vợ, nữ góa chồng…cũng cần được giúp đỡ)."
          }
        ]
      },
      {
        "id": "qui-thi",
        "number": 16,
        "name": "Quý Thị",
        "note": "",
        "passages": [
          {
            "id": "16.1",
            "hanviet": "Khổng tử viết: Ích giả tam hữu, tổn giả tam hữu. Hữu trực, hữu lượng, hữu đa văn, ích hĩ. Hữu tiện tịch, hữu thiện nhu, hữu tiện vọng, tổn hĩ.",
            "nghia": "Bạn có ich gồm ba loại: bạn ngay thẳng, bạn thành thực, bạn có kiến thức sâu rộng. Bạn có hại cũng ba loại: Bạn giả bộ uy nghi, bạn khéo chiều chuộng, bạn ưa siểm nịnh.",
            "binh": ""
          },
          {
            "id": "16.2",
            "hanviet": "Khổng tử viết: Ích giả tam lạc, tổn giả tam lạc. Lạc tiết lễ nhạc, lạc đạo nhân chi hỉ. Lạc đa hiền hữu, ích hĩ. Lạc kiêu nhạc, lạc dật du, lạc yến lạc, tổn hĩ.",
            "nghia": "Điều thích thú có ích gồm ba loại: Thích nghi thức lễ phép, thích nói điều hay của kẻ khác, thích có nhiều bạn hiền. Sự thích thú có hại cũng gồm 3 thứ: Thích nhạc ủy mị, ru ngủ, nhố nhăng. Thích chơi bừa bãi phóng túng Thích yến tiệc say sưa quá độ.",
            "binh": ""
          },
          {
            "id": "16.3",
            "hanviet": "Khổng tử viết: Hầu ư quân tử hữu tam khiên: ngôn vị cập chi nhi ngôn vị chi táo, ngôn cập chi nhi bất ngôn vị chi ẩn, vị kiến nhan sắc nhi ngôn vị chi cổ.",
            "nghia": "Khổng tử nói “Ngồi hầu chuyện người quân tử có thể mắc 3 sai lầm này. Chưa đến lúc nói đã tranh nói, gọi là hấp tấp. Đến lúc nói lại không chịu nói là người giấu diếm. Không nhìn sắc mặt của người quân tử mà cứ thao thao bất tuyệt là kẻ mù quáng”.",
            "binh": ""
          },
          {
            "id": "16.4",
            "hanviet": "Khổng tử viết: Quân tử hữu tam giới: thiếu chi thì, huyết khí vị túc, giới chi tại sắc; cập kì tráng dã, huyết khí phương cương, giới chi tại đấu; cập kì lão dã, huyết khí kí suy, giới chi tại đắc.",
            "nghia": "Khổng tử nói: Quân tử có ba việc phòng ngừa. 1. Lúc nhỏ tuổi huyết khí chưa ổn định phải tránh ham nữ sắc. 2. Khi đã trưởng thành huyết khí đã thịnh vượng phải phòng ngừa tính ham tranh đấu 3. Khi về già huyết khí suy nhược, cần tránh tính tự đắc ham được hơn người khác",
            "binh": ""
          },
          {
            "id": "16.5",
            "hanviet": "Khổng tử viết: Quân tử hữu tam úy. Úy thiên mệnh. Úy đại nhân. Úy thánh nhân chi ngôn. Tiểu nhân bất tri thiên mệnh nhi bất úy dã, hiệp đại nhân, vũ thánh nhân chi ngôn.",
            "nghia": "Khổng tử nói: Quân tử có ba điều sợ. Sợ mệnh trời. Sợ bậc đại nhân. Sợ lời nói của thánh nhân. Tiểu nhân không biết thiên mệnh nên không sợ, coi nhờn đại nhân, khinh lời thánh nhân.",
            "binh": ""
          },
          {
            "id": "16.6",
            "hanviet": "Khổng tử viết: Sinh nhi tri chi giả, thượng dã. Học nhi tri chi giả, thứ dã. Khốn nhi học chi, hựu kì thứ dã. Dân tư vi hạ hĩ .",
            "nghia": "Khổng tử nói:(Có ba loại người). Sinh ra đã biết đạo lí là người bậc trên cùng. Học rồi mới biết đạo lí là bậc thứ nhì. Gặp khó khăn mới chịu đi học là bậc thấp hơn, người kém nhất.",
            "binh": ""
          },
          {
            "id": "16.7",
            "hanviet": "Khổng tử viết: Quân tử hữu cửu tư: Thị tư minh, thính tư thông, sắc tư ôn, mạo tư cung, ngôn tư trung, sự tư kính, nghi tư vấn, phẫn tư nan, kiến đắc tư nghĩa.",
            "nghia": "Khổng tử nói: Quân tử có 9 điều lo nghĩ 1. Khi nhìn, phải xem cho kĩ . 2. Khi nghe, phải biết chắc đã nghe thông tỏ. 3. Khi chưa rõ việc gì, cần tìm người hỏi. 4. Sắc mặt khi đối đãi giao tiếp có ôn hòa không. 5. Thái độ giao tiếp với người đã cung kính chưa 6. Nói chuyện với người có trung thực không. 7. Làm việc với người đã nghiêm túc chưa. 8. Khi giận dữ phải nghĩ đến hậu hoạ, khó khăn về sau. 9. Khi thấy mối lợi, nghĩ xem có phạm vào điều bất nghĩa không",
            "binh": ""
          },
          {
            "id": "16.8",
            "hanviet": "Tử viết: Kiến thiện như bất cập, kiến bất thiện như thám thang. Ngô kiến kỳ nhân hĩ. ngô văn kỳ ngữ hĩ. Ẩn cư dĩ cầu kỳ chí, hành nghĩa dĩ đạt kỳ đạo. Ngô văn kỳ ngữ hĩ, vị kiến kỳ nhân dã.",
            "nghia": "Khổng tử: Nhìn thấy người thiện như theo chẳng kịp, thấy kẻ bất thiện thì như rờ tay phải nước sôi. Ta đã nhìn thấy người như vậy, nghe người xưa nói như thế. Đi ở ẩn để giữ trọn cái chí của mình, làm việc nghĩa để đạt được cái đạo của mình. Ta đã nghe người xưa nói vậy nhưng chưa thấy người nào như vậy.",
            "binh": ""
          },
          {
            "id": "16.9",
            "hanviet": "Tề Cảnh công hữu mã thiên tứ, tử chi nhật, dân vô đức nhi xứng yên. Bá Di, Thúc Tề ngạ tử ư Thủ Dương chi hạ, dân đáo ư kim xứng chi.Kỳ tư chi vị dự ?",
            "nghia": "Vua Tề Cảnh công có nghìn cỗ xe bốn ngựa. Ngày vua chết, dân chúng chẳng thấy ngài có đức hạnh gì để ca tụng. Bá Di, Thúc Tề chịu chết đói dưới chân núi Thủ Dương để lại đạo đức ngày nay dân chúng vẫn ca tụng. Những người ấy chẳng phải như vậy sao ?",
            "binh": ""
          },
          {
            "id": "16.10",
            "hanviet": "Trần Cao vấn ư Bá Ngư viết: “Tử diệc hữu dị văn hồ? Đối viết: Vị dã. Thưởng độc lập, lý xu nhi quá đình. Viết: “Học thi hồ?”. Đối viết: Vị dã. Bất học thi, vô dĩ ngôn. Lý thoái nhi học thi. Tha viết hựu độc lập, lý xu nhi quá đình. Viết: “Học lễ hồ?”. Đối viết: “Vị dã. Bất học lễ, vô dĩ lập. Lý thoái nhi học lễ. Văn tư nhị giả. Trần Cao thoái nhi hỉ viết: “Vấn nhất đắc tam.Văn thi, văn lễ, hựu văn quân tử chi viễn kỳ tử dã”. Trần Cao hỏi Bá Ngư (con Khổng tử): Nghe thầy dạy có điều gì lạ không ? Bá Ngư trả lời: Chưa thấy. Một hôm cha tôi đứng một mình, tôi nhẹ nhàng đi qua sân. Cha tôi hỏi: Đã học Kinh Thi chưa ?",
            "nghia": "Tôi đáp: con chưa học. Cha nói: Không học Kinh Thi biết gì mà nói chuyện. Sau tôi lui về học Kinh Thi. Lại hôm khác, cha tôi cũng đứng một mình tôi lễ phép đi qua, cha tôi lại hỏi “đã học kinh Lễ chưa ?”. Tôi thưa rằng chưa học. Cha tôi bảo: Không học kinh Lễ thì không có cách gì lập thân. Sau đó tôi học kinh Lễ… Đó, tôi chỉ nghe thấy hai việc này. Trần Cao trở về vui mừng nói: Mình hỏi một việc mà biết được ba việc, đó là phải học Kinh Thi, kinh Lễ, lại biết rằng bậc quân tử đối với con cái cũng không thân cận hơn hay dạy dỗ đặc biệt hơn.",
            "binh": ""
          },
          {
            "id": "16.11",
            "hanviet": "Bang quân chi thê, quân xưng chi viết phu nhân, phu nhân tự xưng viết tiểu đồng; Bang nhân xưng chi viết quân phu nhân, xưng chư dị bang viết quả tiểu quân; dị bang nhân xưng chi diệc viết quân phu nhân.",
            "nghia": "Vợ vua chư hầu gọi là “phu nhân”, phu nhân tự xưng mình là “tiểu đồng”. Người dân gọi các bà là “quân phu nhân”. Vua xưng với vua nước bạn là “quả tiểu quân”, người nước khác vẫn gọi vợ vua là “quân phu nhân”. Quả: ít đức, lời khiêm tốn, như xưng “quả nhân”, gọi phụ nữ góa chồng là “quả phụ” với ý nghĩa ấy. Khổng tử coi trọng thuyết chính danh nên nhắc nhở học trò xưng hô chuẩn mực). Hết thiên 16",
            "binh": "Phu còn có nghĩa phù (giúp đỡ), vợ là người giúp đỡ chồng (phu nhân)."
          }
        ]
      },
      {
        "id": "duong-hoa",
        "number": 17,
        "name": "Dương Hóa",
        "note": "",
        "passages": [
          {
            "id": "17.1",
            "hanviet": "Dương Hóa dục kiến Khổng tử, Khổng tử bất kiến, qui Khổng tử đồn. Khổng tử thời kỳ vong dã, nhi vãng bái chi, ngộ chư đồ. Vị Khổng tử viết: “Lai ! Dư dự nhĩ ngôn”. Viết: Hoài kỳ bảo nhi mê kỳ bái, khả vị nhân hồ? Viết: Bất khả. Hảo tòng sự nhi cức thất thì, khả vị tri hồ? Viết: Bất khả. Nhật nguyệt thệ hĩ, tuế bất ngã dự. Khổng tử viết: Nặc ngô thương sĩ hĩ. đạo…)",
            "nghia": "Dương Hóa muốn gặp Khổng tử nhưng ông tránh mặt. Dương Hoá để lại một con lợn luộc làm quà biếu. Khổng tử nhân dịp Dương Hóa đi vắng, đến nhà bái tạ. Không ngờ hai người gặp nhau giữa đường. Dương Hóa nói, lại đây ta có chuyện muốn nói với ông. Dương Hóa hỏi: “Có đạo đức nhưng mặc cho quốc gia mê muội, có thể gọi là người có nhân được không?”. Khổng tử đáp: Không thể. Dương Hóa lại hỏi: Thích làm quan nhưng lại luôn bỏ lỡ thời cơ, có thể gọi là người trí được không? Khổng tử đáp: Không thể.. Dương Hóa lại nói: Ngày tháng trôi qua không bao giờ trở lại, tuổi chẳng đợi chờ ta. Khổng tử nói: Được, ta ra làm quan vậy.",
            "binh": "Dương Hóa là gia thần của họ Quý giữ chức đại phu, muốn đưa Khổng tử ra làm quan. Khổng tử không muốn giúp Dương Hóa làm loạn trong tình thế nước Lỗ đang suy vi vô"
          },
          {
            "id": "17.2",
            "hanviet": "Tử viết: Tính tương cận dã, tập tương viễn dã.",
            "nghia": "Khổng tử nói: Khi mới sinh ra, tính nết người ta gần giống nhau, về sau tập quán khác nhau nên tính tình sẽ khác xa nhau.",
            "binh": "(Chú thich:Vấn đề bản tính con người có nhiều quan điểm khác nhau: Lão tử cho rằng bản tính người có thiện có ác, cùng tồn tại tương tác lẫn nhau. Tuân tử cho rằng bản chất con người là ác, phải có sự giáo dục thì mới cải được cái ác thành thiện. Hàn Phi tử cực đoan nhất, cho là bản tính con người là rất ác, chỉ có hình phạt mới ngăn ngừa được phần nào… Khổng tử cho rằng bản tính con người vốn không khác nhau mấy, chỉ vì tập phải những thói quen khác nhau (hoàn cảnh khác nhau) và được giáo dục khác nhau nên khác xa nhau. Sách Tam tự kinh do Vương Ứng Lân (1223-1296) thời nhà Tống biên soạn có câu “Nhân chi sơ/ tính bản thiện/ Tính tương cận ; tập tương viễn” đã đi theo quan điểm Khổng tử"
          },
          {
            "id": "17.3",
            "hanviet": "Tử viết: Duy thượng trí dữ hạ ngu bất di.",
            "nghia": "Khổng tử nói: Chỉ có bậc thượng trí (trí tuệ cao nhất) và bậc hạ ngu (ngu hết cỡ) là không thể thay đổi được.",
            "binh": "vậy là hầu hết mọi người đều có thể thay đổi, bởi có mấy ai thuộc hai bậc nói trên !. Khổng tử thật lạc quan, có niềm tin vào sự tiến bộ của con người)."
          },
          {
            "id": "17.4",
            "hanviet": "Tử chi Vũ Thành, văn huyền ca chi thanh. Phu tử hoàn nhĩ nhi tiếu, viết: “Cát kê yên dụng ngưu đao ?”. Tử Du đối viết: Tích giả yển dã văn chư phu tử viết: “Quân tử học đạo tắc ái nhân, tiểu nhân học đạo tắc dịch sử dã”. Tử viết: Nhị tam tử !Yển chi ngôn thị dã. Tiền ngôn hí chi nhĩ.",
            "nghia": "Khổng tử đến ấp Vũ Thành, nghe tiếng đàn tiếng hát. Khổng tử mỉm cười nói: Giết gà sao phải dùng dao mổ trâu? Tử Du thưa rằng: “Trước con nghe thầy giảng rằng quân tử học đạo sẽ yêu người, tiểu nhân học đạo dễ sai khiến”. Khổng tử liền nói: Này các ngươi, trò Yển (Tử Lộ) nói phải đấy. Ta chỉ nói đùa đó thôi.",
            "binh": "Tử Lộ cai trị ở ấp Vũ Thành, cho dân học nhạc tức là học đạo. Ý Khổng tử nói dân đen cần chi dùng nhạc lễ để giáo hóa"
          },
          {
            "id": "17.5",
            "hanviet": ": Công Sơn Phất Nhiễu dĩ Phí bạn, triệu, tử dục vãng. Tử Lộ bất duyệt, viết: Mạt chi dã dĩ, hà tất Công Sơn thị chi chi dã. Tử viết: Phu triệu ngã giả, nhi khải đồ tai ? Như hữu dụng ngã giả, ngô kỳ vi Đông Chu hồ ?",
            "nghia": "Công Sơn Phất Nhiễu giữ đất Phí gây chính biến, mời Khổng tử đến giúp. Khổng tử muốn đi. Tử Lộ không vui nói “Không có chỗ đi thì thôi, sao phải đến chỗ Công Sơn Phất Nhiễu ?”. Khổng tử trả lời: “Người gọi ta đâu phải để ta ngồi không. Nếu dùng ta thì ta sẽ làm cho đạo nhà Chu ở phương Đông phục hưng được”.",
            "binh": "Công Sơn Phất Nhiễu định nổi loạn ở đất Phí, lúc đầu Khổng tử sốt sắng định đi để thuyết phục họ theo lễ nhà Chu…Sau xét kỹ thấy Công Sơn nhiều lỗi lầm khó cải hoá nên không đi nữa… Khổng tử cũng biết nghe lời can ngăn của học trò vậy"
          },
          {
            "id": "17.6",
            "hanviet": "Tử Trương vấn nhân ư Khổng tử. Khổng tử viết: Năng hành ngũ giả ư thiên hạ vi nhân hĩ. Vị vấn chi.Viết: “Cung, khoan, tín, mẫn, huệ. Cung tắc bất vũ, khoan tắc đắc chúng, tín tắc nhân nhậm yên, mẫn tắc hữu công, huệ tắc túc dĩ sử nhân. Tử Trương hỏi về đạo nhân.",
            "nghia": "Khổng tử nói: Làm được 5 điều mới gọi là người nhân. Tử Trương xin giải thích. Khổng tử nói: Cung, khoan, tín, mẫn, huệ. Cung kính thì không bị khinh nhờn, khoan dung thì được lòng người, tín thực thì được tin cậy, mẫn cán thì có công, ban ân huệ thì dễ sử dụng người.",
            "binh": ""
          },
          {
            "id": "17.7",
            "hanviet": "Phật Hật triệu, Tử dục vãng. Tử Lộ viết: Tích giả do dã văn chư phu tử viết: “Thân ư kỳ thân vi bất thiện giả, quân tử bất nhập dã. Phật Hật dĩ Trung Mâu bạn, Tử chi vãng dã, như chi hà ?. Tử viết: “Nhiên, hữu thị ngôn dã. Bất viết kiên hồ, ma nhi bất lân; Bất viết bạch hồ, niết nhi bất truy. Ngô khải bào qua dã tai ? yên năng hệ nhi bất thực ? Phật Hật mời thầy, Khổng tử muốn đi. Tử Tử viết: Do dã, nhữ văn lục ngôn lục tế hĩ hồ ?. Đối viết: Vị dã. “Cư, ngô ngữ nhữ. Hiếu nhân bất hiếu học, kỳ tế dã ngu; Hiếu tri bất hiếu học, kỳ tế dã đãng; Hiếu tín bất hiếu học, kỳ tế dã tặc; Hiếu trực bất hiếu học, kỳ tế dã giảo; Hiếu dũng bất hiếu học. Kỳ tế dã loạn; Hiếu cương bất hiếu học, kỳ tế dã cuồng.",
            "nghia": "Lộ nói: Ngày trước con nghe thầy giảng người quân tử không đến chỗ kẻ tự làm điều xấu. Nay Phật Hật làm loạn chiếm cứ Trung Mâu, thầy lại muốn đi, sao như vậy? Khổng tử nói: “Đúng ta đã nói vậy. Nhưng một vật cứng không thể mài mòn được, một vật trắng không thể nhuộm đen được. Lẽ nào ta chỉ như cái quả bầu khô treo lên, mà không để người ta ăn được sao ? 17· 8 Khổng tử nói: Này trò Do, ngươi đã được nghe về 6 đức tốt bị che lấp chưa? Tử Lộ đáp: Dạ chưa. Khổng tử bảo: Ngồi xuống, ta nói cho nghe. Ham đức nhân mà không học, gặp cái xấu che lấp là ngu muội. Thích trí tuệ mà không học, gặp cái xấu là phóng đãng. Trọng chữ tín mà không học, gặp tệ xấu là tổn hại. Ưa tính ngay thẳng mà không học, gặp cái xấu che khuất là nóng nảy. Ham đức dũng mà không học hỏi, gặp thói xấu là phản loạn. Tính cương quyết mà thiếu học hỏi, gặp cái xấu là thành cuồng bạo.",
            "binh": "Khổng tử nghĩ là có thể cải hóa Phật Hật nên muốn đi giúp… Nhưng sau biết rằng Phật Hật không thể thay đổi nên lại không đi"
          },
          {
            "id": "17.8",
            "hanviet": "Tử viết: Tiểu tử hà mạc học phu thi. Thi, khả dĩ hưng, khả dĩ quan, khả dĩ quần, khả dĩ oán. Nhĩ chi sự phụ, viễn chi sự quân; Đa chí ư điểu thú thảo mộc chi danh.",
            "nghia": "Khổng tử nói: Sao các trò không học Kinh Thi ? Học Thi có thể hưng khởi tâm trí (trí tưởng tượng), có khả năng quan sát, hòa hợp quần tụ với người khác, hiểu đúng về oán hận. Gần thì biết đạo thờ cha mẹ, xa hơn thì biết thờ vua; Lại còn biết tên nhiều loài chim thú cỏ cây nữa.",
            "binh": "gọi tắt quan điểm về thơ của Khổng tử là “Hưng, quan, quần, oán”"
          },
          {
            "id": "17.9",
            "hanviet": "Tử vị Bá Ngư viết: Nhữ vi “Chu Nam”, “Triệu Nam” hĩ hồ? Nhân nhi bất vi “Chu Nam” “Triệu Nam” kỳ do chính tường diện nhi ; lập dã dự ?",
            "nghia": "Khổng tử nói với con là Bá Ngư: Con đã học hai bài Chu Nam và Triệu Nam chưa? Người nào không đọc hai bài ấy thì như đứng úp mặt vào vách tường vậy.",
            "binh": "Đó là hai nhóm bài ca dao trong Kinh Thi, sưu tầm ở đất Chu Nam và Triệu Nam, nói về đạo lý tu thân và tề gia"
          },
          {
            "id": "17.10",
            "hanviet": "Tử viết: Lễ vân lễ vân, ngọc bạch vân hồ tai ? Nhạc vân nhạc vân, chung cổ vân hồ tai?",
            "nghia": "Khổng tử nói: Lễ có nghĩa phong phú (vân vân), phải chăng chỉ là tơ lụa ngọc quí ! Nhạc cần sự hòa hợp chứ phải đâu chỉ là chuông với trống !",
            "binh": "Nói đến lễ, hãy chú ý tinh thần, không nên trọng vật chất. Nhạc không chỉ là nhạc cụ mà là sự hài hòa"
          },
          {
            "id": "17.11",
            "hanviet": "Tử viêt: Sắc lệ nhi nội nhẫm, thí chư tiểu nhân, kỳ do xuyên du chi đạo dã dư ?",
            "nghia": "Khổng tử nói: Kẻ bề ngoài uy nghi mà bên trong yếu ớt thì cũng như tiểu nhân thôi, cũng như kẻ đào tường khoét vách ăn trộm vậy.",
            "binh": ""
          },
          {
            "id": "17.12",
            "hanviet": "Tử viết: “Hương nguyện”, đức chi tặc dã.",
            "nghia": "Khổng tử nói: Loại người giả bộ thật thà chất phác, kì thực là kẻ hại đạo.",
            "binh": ""
          },
          {
            "id": "17.13",
            "hanviet": "Tử viết: Đạo thính nhi đồ thuyết, đức chi khí dã.",
            "nghia": "Khổng tử nói: Cái lối nghe chuyện ngoài đường rồi nói chuyện giữa đường, ấy là bỏ mất cái đức vậy.",
            "binh": "Khổng tử nhắc nhở không nên tin những lời xuyên tạc, vu vơ. Nghe rồi chớ bàn cãi, người ta nghe thấy lại còn chê cười cho"
          },
          {
            "id": "17.14",
            "hanviet": "Tử viết: Bỉ phu khả dự sự quân dã dự tai? Kỳ vị đắc chi dã, hoạn đắc chi. Ký đắc chi, hoạn thất chi. Cẩu hoạn thất chi, vô sở bất chí hĩ.",
            "nghia": "Khổng tử nói: Kẻ thô bỉ lại có thể cùng ta thờ vua được ư? Khi chưa có địa vị thì cố chạy chọt, khi được rồi thì chỉ sợ mất chức vị. Lo sợ mất chức nên chẳng có việc gì xấu mà kẻ ấy không dám làm.",
            "binh": ""
          },
          {
            "id": "17.15",
            "hanviet": "Tử viết: Cổ giả dân hữu tam tật, kim dã hoặc thị chi vong dã. Cổ chi cuồng dã tứ, kim chi cuồng dã đãng; Cổ chi căng dã liêm, kim chi căng dã phẫn lệ; Cổ chi ngu dã trực, kim chi ngu dã tác nhi dĩ hĩ.",
            "nghia": "Khổng tử nói: Người xưa có ba tật xấu, có lẽ đời nay không còn nữa… Kẻ cuồng vọng xưa còn ở mức thấp, nay thì cuồng vọng vô hạn độ. Kẻ kiêu căng xưa còn liêm chính, nay thì còn vô lễ liều lĩnh. Người ngu dốt xưa còn có ngay thẳng, ngu thời nay đến mức biết gian trá lừa đảo nữa.",
            "binh": ""
          },
          {
            "id": "17.16",
            "hanviet": "Tử viết: Ố tử chi ký chu dã, ố Trịnh thanh chi loạn Nhã dã, ố lợi khẩu chi phúc bang gia giả.",
            "nghia": "Khổng tử nói: Ta ghét sắc tía cướp mất sắc đỏ, nhạc nước Trịnh lấn át nhạc Nhã, ghét kẻ bẻm mép làm bại hoại nước nhà.",
            "binh": "Sắc đỏ là chính thống, sắc tía/ tím là pha tạp, bất chính…Âm nhạc nước Trịnh hồi Xuân thu là thứ nhạc hạ lưu, dâm loạn… Theo ý Khổng tử, nghe ca khúc của một nước có thể thấy được xã hội ấy tốt hay xấu)."
          },
          {
            "id": "17.17",
            "hanviet": "Tử viết: Dư dục vô ngôn. Tử Cống viết: Tử như bất ngôn, tắc tiểu tử hà thuật yên? Tử viết: Thiên hà ngôn tai? Tứ thì hành yên, bách vật sinh yên, thiên hà ngôn tai?",
            "nghia": "Khổng tử nói: “Ta chẳng muốn nói gì nữa”. Tử Cống thưa: “Thầy không nói nữa thì chúng con biết đi truyền bá gì nữa”. Khổng tử bảo: “Trời có nói gì đâu ! Bốn mùa vẫn vận hành trôi chảy, muôn vật sinh trưởng, trời có nói gì đâu !”.",
            "binh": "Khổng tử muốn nói rằng cứ chịu khó quan sát thế giới mà hiểu được qui luật, mặt khác nhìn vào những tấm gương sống mà noi theo"
          },
          {
            "id": "17.18",
            "hanviet": "Nhũ Bi dục kiến Khổng tử, Khổng tử từ dĩ tật. Thương mệnh giả xuất hộ, thủ săt nhi ca, sử chi văn chi.",
            "nghia": "Nhũ Bi muốn gặp Khổng tử, thầy cáo bệnh không tiếp. Khi người truyền lệnh bước ra khỏi phòng, Khổng tử liền gảy đàn sắt, có ý cho Nhũ Bi nghe thấy.",
            "binh": "Nhũ Bi trước là học trò thầy Khổng, sau có lẽ trở thành kẻ xấu nên thầy không muốn tiếp. Nhưng thầy cố ý cho y biết thầy không bệnh, mà dạy y một bài học không lời, rằng thầy chê trách Nhũ Bì và không muốn dạy nữa)."
          },
          {
            "id": "17.19",
            "hanviet": "Tể Ngã vấn: “Tam niên chi tang, kỳ dĩ cữu hĩ. Quân tử tam niên bất vi lễ, lễ tất phôi; Tam niên bất vi nhạc, nhạc tất băng. Cựu cốc ký một, tân cốc ký thăng, toàn toại cải hỏa, kỳ khả dĩ hĩ”. Tử viết: Thực phu đạo, y phu cẩm, ư nhữ an hồ? Tể Ngã viết “An”. Tử viết: Nhữ an tắc vi chi. Phu quân tử chi cư tang, thực chỉ bất cam, văn nhạc bất lạc, cư xứ bất an, cố bất vi dã. Kim nhữ an, tắc vi chi”. Tể Ngã xuất, Tử viết: “Dữ chi bất nhân dã ! Tử sinh tam niên, nhiên hậu miễn ư phụ mẫu chi hoài, phu tam niên chi tang, thiên hạ chi thông tang dã. Dữ dã hữu tam niên chi ái ư kỳ phụ mẫu hồ ? Tể",
            "nghia": "Ngã hỏi: Để tang ba năm, như thế quá lâu ! Ba năm quân tử không ôn tập việc lễ, lễ sẽ phôi pha. Ba năm không luyện nhạc, nhạc quên hết. Lúa cũ ăn hết, lúa mới đã chín (một năm) những thứ cây để đánh lửa cũng dùng hết rồi. Khổng tử hỏi: Ăn gạo thơm, mặc áo gấm (trong lúc để tang) ngươi có an tâm không ? Tể Ngã đáp: An tâm. Khổng tử bảo: Ngươi an tâm thì cứ làm vậy đi. Quân tử để tang ăn không biết ngon, nghe nhạc mà không vui, ở đâu cũng thấy bất an, lí do để tang (ba năm) là vậy. Nay ngươi thấy an tâm thì cứ làm đi. Tể Ngã về rồi, Khổng tử nói: Ta cho rằng Tể Ngã là kẻ bất nhân. Anh ta sinh ra ba năm mới có thể rời khỏi cánh tay ẵm bồng của cha mẹ, thiên hạ đều để tang ba năm. Chẳng lẽ Tể Ngã không được cha mẹ ẵm bồng ba năm sao ?",
            "binh": ""
          },
          {
            "id": "17.20",
            "hanviet": "Tử viết: Bão thực chung nhật, vô sở dụng tâm, nan hĩ tai ! Bất hữu bác dịch giả hồ ? Vi chi, do hiền hồ dĩ.",
            "nghia": "Khổng tử nói: Người nào suốt ngày chỉ biết ăn no ở không, chẳng bận tâm việc gì, thật khó làm nên. Sao chẳng biết chơi cờ bạc ? Thà làm việc ấy còn hơn ngồi không. (Lời bàn: Có lẽ Khổng tử không nên xúi người đánh bạc, chỉ nên chơi cờ giải trí thôi. Hay là thời cổ đại, đánh bạc chưa tai hại như bây giờ ?)",
            "binh": ""
          },
          {
            "id": "17.21",
            "hanviet": "Tử Lộ viết: Quân tử thượng dũng hồ? Tử viết: Quân tử nghĩa vi thượng. Quân tử hữu dũng nhi vô nghĩa vi loạn, tiểu nhân hữu dũng nhi vô nghĩa vi đạo. Tử",
            "nghia": "Lộ nói: Quân tử có chuộng “dũng” không? Khổng tử đáp: Quân tử xem nghĩa là trên hết. Quân tử có dũng mà bất nghĩa thì làm loạn, tiểu nhân có dũng mà bất nghĩa thì làm trộm cướp.",
            "binh": ""
          },
          {
            "id": "17.22",
            "hanviet": "Tử Cống viết: Quân tử diệc hữu ố hồ ? Tử viết: Hữu ố. Ố xứng nhân chi ố giả, ố cư hạ lưu nhi san thượng giả, ố dũng nhi vô lễ giả, ố quả cảm nhi trất giả. Viết: Tứ dã diệc hữu ố hồ ? Ố kiếu dĩ vi tri giả, ố bất tôn dĩ vi dũng giả, ố kiết dĩ vi trực giả. Tử",
            "nghia": "Cống hỏi: Người quân tử có ghét ai không? Khổng tử nói: Có ghét. Ghét kẻ đi nói xấu người khác, ghét cấp dười gièm pha cấp trên, ghét người dũng mà không giữ lễ, ghét người quả quyết mà không thông hiểu lý lẽ. Ngươi nói xem có ghét ai không? Tử Cống đáp: Con ghét kẻ hay rình mò người khác mà tự nhận người trí, ghét kẻ thiếu khiêm tốn mà nhận mình là dũng, ghét người bới móc chuyện riêng tư người khác mà tự nhận mình ngay thẳng.",
            "binh": "Tử Cống ghét ba loại người nhưng e rằng bậc quân tử không được ghét người nên mới hỏi thầy)."
          },
          {
            "id": "17.23",
            "hanviet": "Tử viết: Duy nữ tử dữ tiểu nhân vi nan dưỡng dã, cận chi tắc bất tôn, viễn chi tắc oán.",
            "nghia": "Khổng tử nói: Chỉ có phụ nữ và tiểu nhân là khó dạy nhất, gần gũi thì họ thiếu tôn kính, cách xa thì họ oán giận.",
            "binh": "Quan điểm này thực khó được phụ nữ chấp nhận. Chả trách người ta bảo cụ Khổng phong kiến coi rẻ phụ nữ. Nhưng đó chỉ là trải nghiệm riêng của Khổng tử"
          },
          {
            "id": "17.24",
            "hanviet": "Tử viết: Niên tứ thập nhi kiến ố yên, kỳ chung dã dĩ.",
            "nghia": "Khổng tử nói: Kẻ bốn chục tuổi còn làm điều ác thì không thể tốt được nữa. Hết thiên 17",
            "binh": ""
          }
        ]
      },
      {
        "id": "vi-tu",
        "number": 18,
        "name": "Vi Tử",
        "note": "",
        "passages": [
          {
            "id": "18.1",
            "hanviet": "Vi Tử khứ chi, Cơ Tử vi chi nô, Tỷ Can gián nhi tử. Khổng tử viết: Ân hữu tam nhân yên Vi Tử từ quan ra đi, Cơ Tử bị giáng làm nô bộc, Tỷ Can vì can ngăn vua mà bị xử tội chết.",
            "nghia": "Khổng tử nói: Nhà Ân chỉ có ba người ấy là người nhân.",
            "binh": "Cuối triều Ân, vua Trụ tàn bạo ăn chơi trác táng lại tàn hại các trung thần như Vi Tử, Tỷ Can, Cơ Tử…"
          },
          {
            "id": "18.2",
            "hanviet": "Liễu Hạ Huệ vi sĩ sư, tam truất. Nhân viết: Tử vị khả dĩ khứ hồ ? Viết: Trực đạo nhi sự nhân, yên vãng nhi bất tam truất ? Uổng đạo nhi sự nhân, hà tất khứ phụ mẫu chi bang.",
            "nghia": "Liễu Hạ Huệ làm quan, chức sĩ sư, ba lần bị giáng chức. Có người nói: Sao ông chưa bỏ đi ? Liễu Hạ Huệ đáp: Tôi đem đạo chính trực đi phục vụ người thì ở đâu mà chẳng bị cách chức ba lần như trước đây? Làm vậy là uổng phí đạo phục vụ người, lại còn xa rời đất nước cha mẹ tôi đang ở.",
            "binh": "(Chú thich: Liễu Hạ Huệ quan nước Lỗ thời Xuân thu, bị vua bạc đãi nhưng vẫn kiên trì làm việc vì ông tin rằng mình phục vụ nhân dân chứ không phục vụ nhà vua…"
          },
          {
            "id": "18.3",
            "hanviet": "Tề Cảnh Công đãi Khổng tử viết: Nhược Quý thị, tắc ngô bất năng; Dĩ Quý, Mạnh chi gian đãi chi. Viết: Ngô lão hĩ, bất năng dụng dã. Khổng tử hành",
            "nghia": "Vua Tề Cảnh Công tiếp đãi Khổng tử, nói: Đãi như (vua Lỗ) đãi họ Quý (đại phu), ta không làm được; Chỉ đãi như họ Quý tiếp họ Mạnh (quan sĩ) thì ta làm được. Lại nói tiếp: Ta già rồi, không thể dùng ông được nữa. Nghe vậy, Khổng tử liền dời khỏi nước Tề.",
            "binh": ""
          },
          {
            "id": "18.4",
            "hanviet": "Tề nhân qui nữ lạc, Quý Hoàn tử thụ chi, tam nhật bất triều. Khổng tử hành.",
            "nghia": "Nước Tề đưa tặng mỹ nữ làm vui, Quý Hoàn tử nhận quà, triều đình ba ngày liền không họp. Khổng tử liền dời bỏ nuớc Lỗ.",
            "binh": "Quý Hoàn tử là quan đại phu nước Lỗ, quyền lực chỉ dưới vua, có thói lộng quyền"
          },
          {
            "id": "18.5",
            "hanviet": ":, ! ,, , Sở cuồng Tiếp Dư ca nhi quá Khổng tử viết: Phượng hề Phượng hề ! Hà đức chi suy ? Vãng giả bất khả gián, lai giả do khả truy. Dĩ nhi dĩ nhi ! Kim chi tòng chính giả đãi nhi!. Khổng tử hạ, dục dự chi ngôn. Xu nhi tịch chi, bất đắc dự chi ngôn.",
            "nghia": "Cuồng sĩ nước Sở tên Tiếp Dư đi qua xe Khổng tử, hát rằng: “Phượng hoàng ơi, phượng hoàng ơi ! Vì sao đức nhân suy đến thế ? Việc đã qua không thể ngăn cản, việc sắp tới có thể còn kịp. Thôi đi, thôi đi ! Làm quan ngày nay nguy lắm đó”. Khổng tử xuống xe, định nói thì anh kia bỏ đi, khiến ngài không thể tiếp chuyện. (Chú thích: Theo tín ngưỡng xưa, khi thấy phượng hoàng hay kỳ lân xuất hiện là báo điềm lành cho đất nước…Tiếp Dư có ý nhắn bảo Khổng tử không nên làm chính trị nữa)",
            "binh": ""
          },
          {
            "id": "18.6",
            "hanviet": "Tràng Thư, Kiệt Nịch ngẫu nhi canh. Khổng tử quá chi, sử Tử Lộ vấn tân yên. Tràng Thư viết: Phu chấp dư giả vi thùy ?Tử Lộ viết: Vi Khổng Khâu. Viết: Thị Lỗ Khổng Khâu dữ ? Viết: Thị dã ? Viết: Thị tri tân hĩ. Vấn ư Kiệt Nịch. Kiệt Nịch viết: Tử vi thùy ? Viết: Vi Trọng Do. Viết: Thị Khổng Khâu chi đồ dữ ? Đối viết: Nhiên. Viết: Thao thao giả thiên hạ giai thị dã, nhi thùy dĩ dịch chi ? Thả nhi dự kỳ tòng tịch nhân chi sĩ dã, khải nhược tòng tịch thế chi sĩ tai ? Ưu nhi bất chuyết. Tử Lộ hành dĩ cáo. Phu tử vũ nhiên viết: Mã thú bất khả dự đồng quần. Ngô phi tư nhân chi đồ dữ nhi thùy dự. Thiên hạ hữu đạo, Khâu bất dự dịch dã. Tràng Thư và Kiệt Nịch đang làm ruộng cùng nhau, Khổng tử đi qua đó, bảo Tử Lộ tới hỏi thăm đường đến bến đò. Tràng Thư hỏi Tử Lộ: “Người cầm cương ngựa kia là ai?”. Tử",
            "nghia": "Lộ đáp: “Là thầy Khổng Khâu”. Tràng Thư hỏi lại: Có phải Khổng Khâu nước Lỗ không ? Tử Lộ nói phải. Tràng Thư hỏi tiếp: Thế thì Khổng Khâu đã biết bến đò rồi… Tử Lộ hỏi Kiệt Nịch. Kiệt Nịch hỏi: Ngươi là ai ? Tử Lộ trả lời: Tôi là Trọng Do. Kiệt Nịch hỏi lại: Có phải là học trò của Khổng Khâu nước Lỗ không ? Trả lời : Phải. Kiệt Nịch nói: Thiên hạ loạn lạc như nước chảy cuồn cuộn rồi, Khổng Tử sẽ cùng ai thay đổi được đây? Ngươi đi theo kẻ sĩ chỉ lo tránh kẻ vô đạo, không thể bằng chúng ta là kẻ sĩ tránh đời? Nói rồi Kiệt Nịch vẫn tiếp tục làm ruộng. Tử Lộ đành phải quay về xe thưa lại với Khổng tử. Khổng tử nghe rồi ngậm ngùi thở dài nói: Loài chim và loài thú không thể cùng họp bầy. Nếu không sống chung với người đời thì ta biết sống với ai ? Nếu thiên hạ có đạo, Khổng Khâu này không cần phải thay đổi nữa.",
            "binh": "Tràng Thư và Kiệt Nịch là bậc hiền sĩ bỏ đi ở ẩn. Khổng tử không đồng ý với họ, nói mình là con người thì phải giúp người cùng loài)."
          },
          {
            "id": "18.7",
            "hanviet": "Tử Lộ tòng nhi hậu, ngộ trượng nhân, dĩ trượng hà điệu. Tử Lộ vấn viết: Tử kiến phu tử hồ ? Trượng nhân viết: Tứ thể bất cần, ngũ cốc bất phân, thục vi phu tử? Thực kỳ trượng nhi vân. Tử Lộ củng nhi lập. Chỉ Tử Lộ túc, sát kê vi thử nhi thực chi. Kiến kỳ nhị tử yên. Minh nhật, Tử Lộ hành dĩ cáo. Tử viết: “Ẩn giả dã”.Sử Tử Lộ phản kiến chi. Chí, tắc hành hĩ. Tử Lộ viết: Bất sĩ vô nghĩa. Trưởng ấu chi tiết, bất khả phế dã; Quân thần chi nghĩa, như chi hà kỳ phế chi ? Dục khiết kỳ thân, nhi loạn đại luân. Quân tử chi sĩ dã; Hành kỳ nghĩa dã. Đạo chi bất hành, dĩ tri chi hĩ.",
            "nghia": "Tử Lộ đi theo thầy, lạc lại sau, gặp một lão trượng cầm cây gậy quảy cái cuốc. Tử Lộ hỏi: Cụ có thấy thầy tôi không? Lão trượng đáp: Tay chân chả siêng năng, không phân biệt được năm giống lương thực, biết ai là phu tử thầy ngươi?! Nói xong cắm cây gậy xuống đất, bắt đầu làm cỏ. Tử Lộ cung kính đứng chờ bên cạnh. Sau đó lão trượng mời Tử Lộ nghỉ lại đêm ấy, mổ gà làm cơm đãi khách, lại cho hai con ra chào Tử Lộ. Ngày hôm sau, đuổi kịp Khổng tử, Tử Lộ thuật lại chuyện. Khổng tử nghe xong bảo: Đây là một ẩn sĩ, rồi bảo Tử Lộ quay lại thăm một lần nữa. Đến nơi thì cụ già đi vắng rồi. Tử Lộ nói nhắn (với người nhà): “Không làm quan là không hợp đạo nghĩa. Lễ tiết của người lớn với trẻ nhỏ đã không thể vứt bỏ thì đạo nghĩa vua tôi sao lại có thế bỏ đi ? Chỉ muốn giữ thân mình trong sạch, như vậy là làm loạn đại luân. Quân tử làm quan để thực hiện nghĩa vua tôi. Còn việc hành Đạo không thể thực hiện thì đã biết trước rồi”.",
            "binh": "Cụ già có ý trách thầy trò Khổng tử đã không thực hành đạo được thì sao chẳng ở nhà làm ruộng. Tử Lộ nêu ra cái chí quân tử, coi nghĩa vua tôi là đại luân (luân lý lớn nhất) làm trọng, cũng như trong gia đình, nghiã cha con không thể bỏ, phải ra cống hiến cho đất nước)."
          },
          {
            "id": "18.8",
            "hanviet": "Dật dân: Bá Di, Thúc Tề, Ngu Trọng, Di Dật, Chu Trương, Liễu Hạ Huệ, Thiếu Liên. Tử viết: Bất hàng kỳ chí, bất nhục kỳ thân, Bá Di, Thúc Tề dự ? Vị Liễu Hạ Huệ, Thiếu Liên hàng chí nhục thân hĩ, ngôn trung luân, hành trung lự, kỳ tư nhi dĩ hĩ. Vị Ngu Trọng, Di Dật, hàng cư phóng ngôn, thân trung thanh, phế trung quyền. Ngã tắc dị ư thị, vô khả vô bất khả.",
            "nghia": "Những người đi ở ẩn có: Bá Di, Thúc Tề, Ngu Trọng, Di Dật, Chu Trương, Liễu Hạ Huệ, Thiếu Liên. Khổng tử nói: “Không chịu hàng phục, không chịu thân nhục có Bá Di, Thuc Tề. Nói về Liễu Hạ Huệ, Thiếu Liên: dù phải chịu hàng, chịu nhục thân nhưng lời nói của hai vị hợp luân lý, hành động có cân nhắc, hai ông chỉ có thế mà thôi. Nói về Ngu Trọng, Di Dật, ẩn cư tránh đời nói năng phóng túng, giữ được danh trong sạch, hợp lẽ quyền biến. Ta khác mấy người này, không cái gì có thể, chẳng cái gì mà không thể”.",
            "binh": ""
          },
          {
            "id": "18.9",
            "hanviet": "Đại sư Chí đích Tề, á phạn Can đích Sở, tam phạn Liễu đích Thái, tứ phạn Khuyết đích Tần, cổ Phương Thúc nhập ư Hà, bá đào Vũ nhập ư Hán, thiếu sư Dương, kích khánh Tương nhập ư hải.",
            "nghia": "Quan thái sư tên Chí chạy sang nước Tề, quan á phạn tên Can chạy sang nước Sở, quan tam phạm tên Liễu bỏ sang nước Thái,. Quan tứ phạn tên Khuyết chạy qua nước Tần. Người đánh trống tên Phương Thúc chạy về vùng sông Hoàng Hà, người đánh trống con tên Vũ lánh đến vùng sông Hán. Thiếu sư tên Dương, người gõ khánh tên Tương chạy về miền biển.",
            "binh": "Thời kỳ này nước Lỗ suy bại, nhân tài bỏ nước ra đi"
          },
          {
            "id": "18.10",
            "hanviet": "Chu Công vị Lỗ Công viết: Quân tử bất thí kỳ thân, bất sử đại thần oán hồ bất dĩ. Cố cựu vô đại cố, tắc bất khí dã. Vô cầu bị ư nhất nhân.",
            "nghia": "Chu Công nói với Lỗ Công: Quân tử không nên bỏ quên người thân, không nên làm đại thần oán hận vì không được trọng dụng. Lão thần nếu không có lỗi lớn thì không nên ruồng bỏ họ. Không nên yêu cầu mỗi con người phải hoàn hảo.",
            "binh": ""
          },
          {
            "id": "18.11",
            "hanviet": "Chu hữu bát sĩ: Bá Đạt, Bá Quát, Trọng Đột, Trọng Hốt, Thúc Dạ, Thúc Hạ, Quý Tùy, Quý Oa.",
            "nghia": "Nhà Chu có tám hiền sĩ: Bá Đạt, Bá Quát, Trọng Đột, Trọng Hốt, Thúc Dạ, Thúc Hạ, Quý Tùy, Quý Oa. Hết thiên 18",
            "binh": "Đây là 4 cặp sinh đôi do bốn bà mẹ hạ sinh, trở thành tám hiền tài trụ cột của nhà Chu)."
          }
        ]
      },
      {
        "id": "tu-truong",
        "number": 19,
        "name": "Tử Trương",
        "note": "",
        "passages": [
          {
            "id": "19.1",
            "hanviet": "Tử Trương viết: Sĩ kiến nguy trí mệnh, kiến đắc tư nghĩa, tế tư kính, tang tư ai, kỳ khả dĩ hĩ. Tử",
            "nghia": "Trương nói: Kẻ sĩ khi gặp việc nguy dám hi sinh tính mệnh, thấy mối lợi thì nghĩ đến nghĩa, cúng tế với lòng thành kính, để tang thì đau thương, làm được vậy mới là kẻ sĩ.",
            "binh": ""
          },
          {
            "id": "19.2",
            "hanviet": "Tử Trương viết: Chấp đức bất hoằng, tín đạo bất đốc, yên năng vi hữu ? Yên năng vi vong ? Tử",
            "nghia": "Trương nói: Giữ được đức mà không biết phát huy, tin phục đạo lý mà không kiên định làm theo. Có người ấy thì ích lợi gì ? Không có người ấy thì hại gì ?",
            "binh": ""
          },
          {
            "id": "19.3",
            "hanviet": "Tử Hạ chi môn nhân vấn giao ư Tử Trương. Tử Trương viết: Tử Hạ vân hà? Đối viết: “Tử Hạ viết: Khả giả dự chi, kỳ bất khả giả cự chi”. Tử Trương viết: “Dị hồ ngô sở văn. Quân tử tôn hiền nhi dung chúng, gia thiện nhi căng bất năng. Ngã chi đại hiền dự, ư nhân hà sở bất dung ? Ngã chi bất hiền dự, nhân thương cự ngã, như chi hà kỳ cự nhân dã ?",
            "nghia": "Học trò của Tử Hạ hỏi Tử Trương về việc giao tiếp bạn bè. Tử Trương hỏi lại: Thầy Tử Hạ đã nói thế nào ? Học trò Tử Hạ đáp: Có thể kết giao thì kết giao, không thể thì cự tuyệt. Tử Trương nói: Điều ta từng nghe thì lại khác. Quân tử tôn trọng người hiền và dung nạp người bình thường, khen người hoàn thiện nhưng cũng thương cho người yếu kém. Nếu ta là bậc đại hiền thì sao ta không thể dung nạp họ ? Nếu ta không phải bậc hiền tài, người khác có thể cự tuyệt ta, làm sao ta có thể cự tuyệt họ ?",
            "binh": ""
          },
          {
            "id": "19.4",
            "hanviet": "Tử Hạ viết: Tuy tiểu đạo, tất hữu khả quan giả yên, trí viễn khủng nệ, thị dĩ quân tử bất vi dã. Tử",
            "nghia": "Hạ nói: Dù là việc nhỏ cũng có nghĩa lý cần xem xét, Nhưng nếu cố tìm ý nghĩa cao xa của việc nhỏ thì cũng trở ngại, khó lòng. Người quân tử chẳng làm như vậy.",
            "binh": ""
          },
          {
            "id": "19.5",
            "hanviet": "Tử Hạ viết: Nhật tri kỳ sở vong, nguyệt vô vong kỳ sở năng, khả vị hiếu học dã dĩ hĩ. Tử",
            "nghia": "Hạ nói: Mỗi ngày biết thêm điều chưa biết. Mỗi tháng quên đi những điều đã biết. Như vậy gọi là người ham học.",
            "binh": ""
          },
          {
            "id": "19.6",
            "hanviet": "Tử Hạ viết: Bác học nhi đốc chí, thiết vấn nhi cận tư, nhân tại kỳ trung hĩ. Tử",
            "nghia": "Hạ nói: Học rộng mà chuyên tâm điều nghiên cứu, hỏi điều thiết thực, nghĩ tới việc gần, đức nhân ở trong ấy vậy.",
            "binh": ""
          },
          {
            "id": "19.7",
            "hanviet": "Tử Hạ viết: Bách công cư tứ dĩ thành kỳ sự, quân tử học dĩ trí kỳ đạo. Tử",
            "nghia": "Hạ nói: Thợ ngành nghề phải ở lại nơi làm việc mới hoàn thành tốt công việc. Quân tử phải chuyên tâm nghiên cứu mới nắm chắc đạo lý.",
            "binh": ""
          },
          {
            "id": "19.8",
            "hanviet": "Tử Hạ thuyết: Tiểu nhân chi quá dã tất văn.: Tử",
            "nghia": "Hạ nói: Kẻ tiểu nhân thấy mình làm sai thì tìm cách che đậy.",
            "binh": ""
          },
          {
            "id": "19.9",
            "hanviet": "Tử Hạ viết: Quân tử hữu tam biến: Vọng chi nghiễm nhiên, tức chi dã ôn, thính kỳ ngôn dã lệ. Tử",
            "nghia": "Hạ nói: Quân tử có ba điều biến đổi: trông xa thấy trang nghiêm, đến gần thấy ôn hòa, nghe lời nói thấy nghiêm khắc, chính xác.",
            "binh": ""
          },
          {
            "id": "19.10",
            "hanviet": "Tử Hạ viết: Quân tử tín nhi hậu lao kỳ dân; Vị tín, tắc dĩ vi lệ kỷ dã. Tín nhi hậu gián; Vị tín, tắc dĩ vi báng kỷ dã.. Tử",
            "nghia": "Hạ nói: Quân tử làm quan sao cho dân tin cậy, sau đó mới khiến cho họ làm việc khó nhọc. Nếu dân chưa tin đã vội sai khiến họ làm, họ sẽ cho là mình làm hại họ. Với người bậc trên, phải đạt được lòng tin trước, sau mới can gián, nếu không người trên cho rằng mình chê trách họ.",
            "binh": ""
          },
          {
            "id": "19.11",
            "hanviet": "Tử Hạ viết: Đại đức bất du nhàn, tiểu đức xuất nhập khả dã. Tử",
            "nghia": "Hạ nói: Việc lớn thì không được vượt qua giới hạn, việc nhỏ thì có thể thêm bớt một ít.",
            "binh": "Việc lớn cần phải làm chính xác, không được tùy tiện thêm bớt"
          },
          {
            "id": "19.12",
            "hanviet": ":,,,,, , :, Tử Du viết: Tử Hạ chi môn nhân tiểu tử, đương sái tảo, ứng đối, tiến thoái tắc khả hĩ, ức mạt dã. Bản chi tắc vô, như chi hà? Tử Hạ văn chi, viết: Ôi, ngôn Du quá hĩ ! Quân tử chi đạo, thục hậu quyện yên, thục tiên truyền yên? Thí chư thảo mộc, khu dĩ biệt hĩ. Quân tử chi đạo, yên khả vu dã ? Hữu thỉ hữu tốt giả, kỳ duy thánh nhân hồ ? Tử",
            "nghia": "Du nói: Học trò của thầy Tử Hạ vảy nước quét dọn giỏi, đối đáp nhanh, đi lại đúng phép, chỉ có cái ngọn vậy thôi. Còn cái gốc chưa học được. Học như thế sẽ ra sao? Tử Hạ nghe vậy, nói: “Ôi, thầy Tử Du sai rồi! Đạo quân tử phải đem cái ngọn dạy trước, việc gốc truyền sau. Học trò như cỏ cây có phân biệt lớn nhỏ, đạo dạy học của người quân tử sao có thể tùy tiện. Dạy điều mở đầu mà biết được kết cục, chẳng phải chỉ có thánh nhân mới được vậy ư?",
            "binh": ""
          },
          {
            "id": "19.13",
            "hanviet": "Tử Hạ viết: Sĩ nhi ưu tắc học, học nhi ưu tắc sĩ. Tử",
            "nghia": "Hạ nói: Làm quan dư thì giờ thì nên học thêm. Người có học thì đi làm quan.",
            "binh": "Khi làm quan giỏi vẫn không ngừng học hỏi, học giỏi rồi thì đi làm quan giúp đời"
          },
          {
            "id": "19.14",
            "hanviet": "Tử Du viết: Tang trí hồ ai nhi chỉ. Tử",
            "nghia": "Du nói: Việc tang lễ thể hiện lòng thương xót là được rồi.",
            "binh": ""
          },
          {
            "id": "19.15",
            "hanviet": "Tử Du viết: Ngô hữu Trương dã vi nan năng dã, nhiên nhi vị nhân. Tử",
            "nghia": "Du nói: Bạn ta là Tử Trương làm được những việc mà người khác khó làm được, nhưng vẫn chưa phải là người nhân.",
            "binh": "Người nhân còn phải khiến cho người khác cũng làm được như mình"
          },
          {
            "id": "19.16",
            "hanviet": "Tăng tử viết: Đường đường hồ trương dã, nan dự bính vi nhân hĩ.",
            "nghia": "Tăng tử nói: Đúng rồi, Tử Trương là con người dung mạo đường hoàng uy nghi nhưng khó cùng người khác làm việc nhân.",
            "binh": "(Lời bình: Tử Trương tài giỏi nhưng khá kiêu ngạo, tự mãn"
          },
          {
            "id": "19.17",
            "hanviet": "Tăng tử viết: Ngô văn chư phu tử, nhân vị hữu tự trí giả dã, tất dã thân tang hồ ?",
            "nghia": "Tăng tử nói: Ta nghe thầy Khổng dạy rằng người chưa đem hết tình cảm ra làm việc khác nhưng trong việc tang cha mẹ lại không thể đem hết tình ra hay sao ?",
            "binh": ""
          },
          {
            "id": "19.18",
            "hanviet": ":,,;, Tăng tử viết: Ngô văn chư phu tử, Mạnh Trang tử chi hiếu dã, kỳ tha khả năng dã; Kỳ bất cải phụ chi thần dư phụ chi chính, thị nan năng dã.",
            "nghia": "Tăng tử nói: Ta nghe thầy Khổng khen đức hiếu của Mạnh Trang tử, rằng những điều khác người ta có thể làm theo được, còn cái việc Mạnh không thay đổi bề tôi và phép cai trị của cha thì thiên hạ khó làm theo.",
            "binh": "Mạnh Trang tử là con Mạnh Hiếu tử, một trong ba dòng họ quan đại thần nước Lỗ thời ấy (họ Mạnh, họ Quí, họ Thúc). Khi được kế nhiệm địa vị của cha, Mạnh Trang tử có hiếu nên không thay đổi những việc cha từng làm, mà kế thừa điều hay của cha)."
          },
          {
            "id": "19.19",
            "hanviet": "Mạnh thị sử Dương Phu vi sĩ sư, vấn ư Tăng tử. Tăng tử viết: Thượng thất kỳ đạo, dân tán cửu hĩ. Như đắc kỳ tình, tắc ai căng nhi vật hỉ.",
            "nghia": "Họ Mạnh bổ nhiệm Dương Phu làm quan sĩ sư coi việc hình pháp. Dương Phu đến hỏi ý kiến thầy mình là Tăng tử. Thầy Tăng nói: Người cấp trên lỗi đạo, nhân tâm li tán lâu rồi. Khi xét xử hiểu được tình thật của phạm nhân thì nên thương họ, đừng lấy làm vui mừng.",
            "binh": ""
          },
          {
            "id": "19.20",
            "hanviet": "Tử Cống viết: Trụ chi bất thiện, bất như thị chi thậm dã. Thị dĩ quân tử ố cư hạ lưu, thiên hạ chi ác giai quy yên Tử",
            "nghia": "Cống nói: Những điều bất thiện của vua Trụ không đến nỗi như thiên hạ nói. Người quân tử rất ghét ở chung với đám hạ lưu, vì mọi điều xấu trong xã hội đều đổ dồn về chỗ họ.",
            "binh": "“Hạ lưu” là đám người dồn cặn như rác rưởi cuối dòng nước chảy. Đám này thường nói xấu tất cả những gì họ muốn. Vua Trụ có xấu xa nhưng kẻ hạ lưu thường dậu đổ bìm leo nói thêm vào. Tử Cống đòi hỏi sự công bằng ngay cả đối với kẻ xâu"
          },
          {
            "id": "19.21",
            "hanviet": ", Tử Cống viết: Quân tử chi quá dã, như nhật nguyệt chi thực yên. Quá dã, nhân giai kiến chi; Canh dã, nhân giai ngưỡng chi. Tử",
            "nghia": "Cống nói: Sai lầm của người quân tử như nhật thực và nguyệt thực, ai cũng nhìn thấy. Quân tử sửa chữa lỗi được rồi thì ai cũng vẫn ngưỡng mộ.",
            "binh": ""
          },
          {
            "id": "19.22",
            "hanviet": ":? :,,, , Vệ Công Tôn Triều vấn ư Tử Cống viết: Trọng Ni yên học ? Tử Cống viết: Văn vũ chi đạo, vị trụy ư địa, tại nhân.Hiền giả chí kỳ đại giả, bất hiền giả chí kỳ tiểu giả, mạc bất hữu văn vũ chi đạo yên. Phu tử yên bất học? Nhi diệc hà thường sư chi hữu?",
            "nghia": "Đại phu nước Vệ là Công Tôn Triều hỏi Tử Cống: “Khổng tử học với ai vậy?”. Tử Cống nói: Đạo của vua Văn Vương, vua Vũ Vương bị chôn vùi dưới đất vẫn còn lưu lại trong dân gian. Người hiền tài học thì biết việc rộng lớn, người thường học được việc nhỏ. Đạo của hai vua chỗ nào cũng có. Thầy tôi không chỗ nào không học, cần gì phải có một thầy nào !",
            "binh": ""
          },
          {
            "id": "19.23",
            "hanviet": "Thúc Tôn Vũ Thúc ngữ đại phu ư triều viết: Tử Cống hiền ư Trọng Ni. Tử Phục Cảnh Bá dĩ cáo Tử Cống. Tử Cống viết: Thí chi cung tường, tứ chi từng dã cập kiên, khuy kiến thất gia chi hảo. Phu tử chi tường số nhận, bất đắc kỳ môn nhi nhập, bất kiến tông miếu chi loại, bách quan chi phú. Đắc kỳ môn giả hoặc quả hĩ. Phu tử chi vân, bất diệc nghi hồ !",
            "nghia": "Thúc Tôn Vũ Thúc nói với các vị đai phu trong triều nước Lỗ rằng: “Tử Cống có đạo đức tài năng hơn hẳn Khổng tử”. Tử Phục Cảnh Bá nói lại với Tử Cống. Tử Cống nói: “Lấy bức tường làm thí dụ vậy. Tường nhà tôi chỉ cao bằng vai, ai nhìn vào có thể thấy hết những cái tốt đẹp trong nhà. Còn bức tường của thầy tôi cao đến mấy thước, nếu không tìm được cửa vào thì không thể thấy được kiến trúc tráng lệ đa dạng bên trong. Chỉ có ít người tìm được cửa vào. Thúc Tôn Vũ Thúc nói như thế thật chẳng thích hợp.",
            "binh": ""
          },
          {
            "id": "19.24",
            "hanviet": "Thúc Tôn Vũ Thúc hủy Trọng Ni. Tử Cống viết: Vô dĩ vi dã ! Trọng Ni bất khả hủy dã. Tha nhân chi hiền giả, khâu lăng dã, do khả du dã; Trọng Ni. Nhật nguyệt dã, vô đắc nhi du yên. Nhân tuy dục tự tuyệt, kỳ hà thương ư nhật nguyệt hồ ? Đa kiến kỳ bất tri lượng dã. Thúc Tôn Vũ Thúc chê Khổng tử. Tử",
            "nghia": "Cống nói: Làm thế chả có ích gì. Không thể làm mất uy tín của thầy tôi được! Tài đức của người khác ví như cái núi nhỏ, có thể vượt qua được. Còn tài đức của Khổng tử cao xa như mặt trăng mặt trời, chẳng có ai qua được. Ai đó muốn đoạn tuyệt với đạo của thầy tôi thì cũng chẳng hại gì được mặt trăng mặt trời. Chê trách như thế chỉ chứng tỏ ông ta không biết lượng sức mình mà thôi.",
            "binh": ""
          },
          {
            "id": "19.25",
            "hanviet": "Trần Tử Cầm vị Tử Cống viết: Tử vi cung dã, Trọng Ni khải hiền ư tử hồ? Tử Cống viết: Quân tử nhất ngôn dĩ vi tri, nhất ngôn dĩ vi bất tri, ngôn bất khả thận dã. Phu tử chi bất khả cập dã, do thiên chi bất khả giai nhi thăng dã. Phu tử chi đắc bang gia giả. Sở vị lập chi tư lập, đạo chi tư hành, nỗi chi tư lai, đông chi tư hòa. Kỳ sinh dã vinh, kỳ tử dã ai, như chi hà kỳ khả cập dã ?",
            "nghia": "Trần Tử Cầm nói với Tử Cống: Anh quá khiêm tốn và cung kính với thầy Khổng tử đó thôi. Khổng tử chắc gì đã hơn anh ? Tử Cống nói: Người quân tử nói ra một câu khiến người ta có thể hiểu rõ anh ta thông minh hay ngu dốt, vì vậy phải thận trọng khi nói. Chúng ta không thể đuổi kịp thầy như là không thể bắc thang trèo lên trời vậy. Thầy chúng ta nếu được nắm giữ một nước thì sẽ như lời cổ nhân: “Gây sinh kế cho dân thì dân tự hiểu lễ mà làm, hướng dẫn dân thì dân tự đi theo, săn sóc an ủi dân thì dân sẽ qui thuận, cổ vũ dân thì dân nhất định đồng tâm hiệp lực”. Khi sống, thầy chúng ta được mọi người tôn vinh, chết được nhân dân thương xót. Như thế còn ai theo kịp được thầy chúng ta? Hết thiên 19",
            "binh": ""
          }
        ]
      },
      {
        "id": "nghieu-viet",
        "number": 20,
        "name": "Nghiêu Viết",
        "note": "",
        "passages": [
          {
            "id": "20.1",
            "hanviet": "Nghiêu viết: Tư, nhĩ Thuấn ! Thiên chi lịch sác tại nhĩ cung, doãn chấp kỳ trung. Tứ hải khốn cùng, thiên lộc vĩnh chung. Thuấn diệc dĩ mệnh Vũ. Vua",
            "nghia": "Nghiêu nói: Hỡi ngươi Thuấn, mệnh trời đã định đến lúc ngươi nối ngôi của ta, hãy thành thực chấp hành đạo trung chính. Dân bốn biển (mà) khốn cùng thì lộc trời ban cho ngươi cũng hết. Vua Thuấn (sau này khi nhường ngôi cho vua Vũ) cũng truyền lại mệnh ấy.",
            "binh": ""
          },
          {
            "id": "20.2",
            "hanviet": "Viết: “Dư tiểu tử Lý, cảm dụng huyền mẫu, cảm chiêu cáo ư hoàng hoàng hậu đế: Hữu tội bất cảm xá. Đế thần bất tế, giản tại đế tâm”. Trẫm cung hữu tội, vô dĩ vạn phương; Vạn phương hữu tội, tội tại trẫm cung.",
            "nghia": "Khấn rằng:“Kẻ tiểu tử này (1) tên Lý, dám dùng bò đực đen để tế lễ, khẩn cầu Trời vô cùng tôn kính rằng: Kẻ có tội (2), con không dám tha. Con không che giấu người hiền đức làm thần tử của Trời, chỉ vì con làm theo lòng Trời. Nếu trẫm có tội, xin đừng để lụy đến dân chúng bốn phương, nếu dân bốn phương có tội thì đó là tội của trẫm”. [Chú thích: Trong đoạn văn trên, vua Thành Thang thay đổi xưng hô, từ “tiểu tử” (con) sang “trẫm” nhưng đối tượng nghe vẫn là Trời (Đế) đồng thời hướng về cử tọa gồm: quan chức dân chúng tham dự tế lễ cùng nghe.",
            "binh": "(1) Vua Thành Thang nguyên tên là Lý. (2) Vua Kiệt nhà Hạ tội nặng, bị vua Thành Thang trừng phạt."
          },
          {
            "id": "20.3",
            "hanviet": "Chu hữu đại lại, thiện nhân thị phú. “Tuy hữu Chu thân, bất như nhân nhân. Bách tính hữu quá, tại dư nhất nhân”...Cẩn quyền lượng, thẩm pháp độ, tu phế quan, tứ phương chi chính hành yên. Hưng diệt quốc, kế tuyệt thế, cử dật dân, thiên hạ chi dân qui tâm yên. Sở trọng dân: thực, tang, tế. Khoan tắc đắc chúng, tín tắc dân nhiệm yên. Mẫn tắc hữu công, công tắc duyệt.",
            "nghia": "Nhà Chu (sau khi diệt được vua Trụ) xuất của cải chia cho dân, người hiền trở nên giàu có. (Khi đem quân đánh vua Trụ, vua Chu Vũ vương thề rằng):“Tuy (vua Trụ) có nhiều người thân họ Chu, chẳng bằng (ta có) nhiều người nhân đức. Nếu trăm họ mắc tội, lỗi chỉ tại một người (là ta) thôi”… (Vua Vũ vương) định lại cân,dụng cụ đo lường và phép tắc luật lệ, dùng lại những quan chức bị (nhà Trụ) bãi bỏ, cai quản bốn phương thông suốt. Khôi phục lại những nước chư hầu đã bị diệt, cho người nối tiếp những dòng họ bị đứt quãng. Mời kẻ hiền sĩ ẩn dật ra làm việc, người trong thiên hạ hết lòng qui phục.",
            "binh": "(Vua Vũ vương) coi trọng ba việc của dân là: lương thực, tang lễ và tế tự. Khoan dung ắt được dân ủng hộ, trung tín thành thực được dân dựa vào mình. Cần mẫn làm việc thu được công lao, công bằng sẽ làm vui lòng người."
          },
          {
            "id": "20.4",
            "hanviet": "Tử Trương vấn Khổng tử viết: Hà như tư khả dĩ tòng chính hĩ ?. Tử viết: Tôn ngũ mỹ, bính tứ ố, kỳ khả dĩ tòng chính hĩ. Tử Trương viết: Hà vị ngũ mỹ ?. Tử viết: Quân tử huệ nhi bất phí, lao nhi bất oán, dục nhi bất tham, thái nhi bất kiêu, uy nhi bất mãnh. Tử Trương viết: Khả vị huệ nhi bất phí ? Tử viết: Nhân dân chi sở lợi nhi lợi chi, tư bất diệc huệ nhi bất phí hồ ? Trạch khả lao nhi lao chi, hựu thùy oán ? Dục nhân nhi đắc nhân, hựu yên tham ? Quân tử vô chúng quả, vô đại tiểu, vô cảm mạn, tư bất diệc thái nhi bất kiêu hồ ? Quân tử chính kỳ y quan, tôn kỳ chiêm thị, nghiễm nhiên nhân vọng nhi úy chi, tư bất diệc uy nhi bất mãnh hồ ? Tử Trương viết: Hà vị tứ ố ? Tử viết: Bất giáo nhi sát vị chi ngược, bất giới thị thành vị chi bạo; mạn lệnh trí kỳ vị chi tặc; do chi dự nhân dã, xuất nạp chi lận vị chi hữu tư. Tử Trương hỏi Khổng tử: Như thế nào mới làm được quan chính trực ?",
            "nghia": "Khổng tử nói: Biết tôn trọng 5 việc tốt, loại trừ 4 việc xấu, có thể làm quan chính trực. Tử Trương hỏi tiếp: Thế nào là 5 việc tốt ? Khổng tử đáp: Quân tử làm ân huệ cho dân mà không hao tổn tiền bạc, bảo dân làm viêc khó nhọc mà dân chẳng oán ghét, ham muốn mà không tham lam, trang trọng mà không kiêu ngạo, uy nghiêm mà không hung bạo. Tử Trương lại hỏi: Thế nào là làm ân huệ mà không hao tiền bạc? Khổng tử nói: Thuận theo lợi của dân mà hướng dẫn họ làm lợi, như thế là ân huệ cho dân mà không tốn tiền. Chọn việc đáng làm vào lúc thích hợp, đúng mùa vụ, thời tiết, đôn đốc dân làm việc khó nhọc, như thế thì có ai lại oán ghét mình ? Ham muốn làm việc nhân đức mà được điều nhân sao gọi là tham lam ?! Quân tử làm việc không kể việc lớn nhỏ đều không dám coi thường, vậy là trang trọng mà không ngạo mạn. Quân tử áo mũ chỉnh tề, ánh mắt nghiêm túc khiến người khác nhìn thấy nể sợ, đó là uy nghiêm mà không hung bạo.",
            "binh": ""
          },
          {
            "id": "20.5",
            "hanviet": "Khổng tử viết: Bất tri mệnh, vô dĩ vi quân tử dã ; Bất tri lễ, vô dĩ lập dã; Bất tri tín, vô dĩ tri nhân dã.",
            "nghia": "Khổng tử nói: Không biết mệnh trời thì không thể làm người quân tử. Không biết lễ thì không thể tự lập thân. Không biết chữ tín thì không hiểu được người. [ Lời bàn: Khó nhất là làm sao biết được mệnh trời ! Mệnh trời là thời cơ chăng ? Liệu có nhà tiên tri nào báo trước? Tuy nhiên, người quân tử hãy tự mình làm hai điều sau (tín, lễ) coi như hai điều kiện tiên quyết / điều kiện cần. Chữ Lễ là cội nguồn cảm hứng nghiên cứu, du thuyết và dạy học của Khổng tử, kết thúc Luận ngữ cũng là chữLễ, thêm Tín và Mệnh . Hết",
            "binh": ""
          }
        ]
      }
    ]
  },
  {
    "id": "trung-dung",
    "title": "Trung Dung",
    "subtitle": "Tương truyền của Tử Tư, cháu nội Khổng Tử",
    "source": "Phan Văn Các giới thiệu và dịch chú",
    "chapters": [
      {
        "id": "chuong-1",
        "number": 1,
        "name": "Chương Một",
        "note": "",
        "passages": [
          {
            "id": "1.1",
            "hanviet": "Thiên mệnh chi vị tính; suất tính chi vi đạo, tu đạo chi vị giáo.",
            "nghia": "Mệnh Trời gọi là “tính”, phát triển thuận theo “tính” gọi là “đạo”, tu dưỡng theo “đạo” gọi là “giáo”.",
            "binh": "Ba mệnh đề mở đầu này đặt nền cho toàn bộ Trung Dung: bản tính con người vốn từ Trời phú cho, sống thuận theo tính ấy là đạo, và rèn giũa theo đạo ấy chính là việc giáo hoá."
          },
          {
            "id": "1.2",
            "hanviet": "Đạo dã giả bất khả tu du ly dã; khả ly phi đạo dã; thị cố quân tử giới thận hồ kỳ sở bất đổ, khủng cụ hồ kỳ sở bất văn, mạc hiện hồ ẩn, mạc hiển hồ vi; cố quân tử thận kỳ độc dã.",
            "nghia": "Đạo là cái không thể xa rời dù chỉ trong chốc lát; nếu có thể xa rời được, thì đã không phải là đạo. Bởi thế quân tử đặc biệt cảnh giác thận trọng ở chỗ người ta không nhìn thấy, lo lắng sợ hãi ở chỗ người ta không nghe thấy. Chẳng có gì rõ hơn vật che giấu, chẳng có gì làm hiển lộ chân tướng hơn những việc nhỏ bé. Cho nên người quân tử đặc biệt thận trọng khi chỉ có một mình mình vậy.",
            "binh": "Đây là nguồn gốc khái niệm “thận độc” (thận trọng khi ở một mình) của Nho gia — đạo đức thật sự được kiểm chứng không phải lúc có người nhìn, mà lúc chỉ có mình ta biết."
          },
          {
            "id": "1.3",
            "hanviet": "Hỷ, nộ, ai, lạc chi vị phát, vị chi trung; phát nhi giai trúng tiết vị chi hoà. Trung dã giả, thiên hạ chi đại bản dã; hoà dã giả, thiên hạ chi đạt đạo dã. Trí trung hoà: thiên địa vị yên, vạn vật dục yên.",
            "nghia": "Mừng, giận, buồn, vui khi chưa biểu hiện ra, gọi là “trung”, biểu hiện ra mà phù hợp với quy củ mức độ, thì gọi là “hoà”. Trung là gốc lớn của thiên hạ, hoà là đạo lí thông đạt trong thiên hạ. Gắng sức đạt tới trung hoà, thì trời đất có được vị trí thoả đáng, muôn vật được phát dục sinh trưởng.",
            "binh": "Định nghĩa cốt lõi của “trung” và “hoà” — hai chữ đặt tên cho cả cuốn sách. Trung là trạng thái cân bằng trước khi cảm xúc bộc lộ, hoà là cảm xúc bộc lộ đúng mực."
          }
        ]
      },
      {
        "id": "chuong-2",
        "number": 2,
        "name": "Chương Hai",
        "note": "",
        "passages": [
          {
            "id": "2.1",
            "hanviet": "Trọng Ni viết: Quân tử trung dung, tiểu nhân phản trung dung; quân tử chi trung dung dã, quân tử nhi thì trung; tiểu nhân chi phản trung dung dã, tiểu nhân nhi vô kỵ đạn dã.",
            "nghia": "Trọng Ni nói: “Người quân tử thì trung dung, kẻ tiểu nhân thì phản trung dung. Người quân tử trung dung, là vì người quân tử luôn luôn ở vào vị trí thích đáng vừa phải. Kẻ tiểu nhân phản trung dung, là vì kẻ tiểu nhân không biết kiêng nể điều gì (nên cứ làm bừa).",
            "binh": "Phân biệt then chốt: trung dung không phải là thoả hiệp lưng chừng, mà là luôn giữ đúng mức trong mọi hoàn cảnh — trái với sự liều lĩnh vô nguyên tắc của kẻ tiểu nhân."
          }
        ]
      },
      {
        "id": "chuong-3",
        "number": 3,
        "name": "Chương Ba",
        "note": "",
        "passages": [
          {
            "id": "3.1",
            "hanviet": "Trung dung kỳ chí hỹ hồ! Dân tiển năng cửu hỹ.",
            "nghia": "Đạo trung dung thật là tuyệt vời! Dân chúng đã từ rất lâu rồi, ít ai có thể làm được.",
            "binh": "Một lời than ngắn nhưng cho thấy trung dung tuy nghe giản dị lại cực khó giữ được lâu dài trong đời sống thực."
          }
        ]
      },
      {
        "id": "chuong-4",
        "number": 4,
        "name": "Chương Bốn",
        "note": "",
        "passages": [
          {
            "id": "4.1",
            "hanviet": "Tử viết: Đạo chi bất hành dã, ngã tri chi hỹ; trí giả quá chi, ngu giả bất cập dã. Đạo chi bất minh dã, ngã tri chi hỹ; hiền giả quá chi, bất tiếu giả, bất cập dã; nhân mạc bất ẩm thực dã, tiển năng tri vị dã.",
            "nghia": "Khổng Tử nói: “Nguyên nhân khiến Đạo không thực hành được, ta đã biết rồi: người trí thì thái quá, kẻ ngu thì bất cập. Nguyên nhân khiến đạo chẳng được người đời hiểu rõ, ta đã biết rồi: người hiền thì thái quá, kẻ bất tiếu thì bất cập. Người ta chẳng có ai không ăn không uống, nhưng rất ít người biết được mùi vị.",
            "binh": "Hình ảnh “ăn mà không biết vị” rất đắt: ai cũng sống theo đạo lý mỗi ngày mà ít người thực sự hiểu mình đang sống ra sao — cả người quá thông minh lẫn người quá kém đều lệch khỏi điểm cân bằng."
          }
        ]
      },
      {
        "id": "chuong-5",
        "number": 5,
        "name": "Chương Năm",
        "note": "",
        "passages": [
          {
            "id": "5.1",
            "hanviet": "Tử viết: Đạo kỳ bất hành hỹ phù.",
            "nghia": "Khổng Tử nói: “Đạo có lẽ không thi hành được!”",
            "binh": "Một tiếng thở dài ngắn gọn, tiếp nối nỗi trăn trở ở chương trước."
          }
        ]
      },
      {
        "id": "chuong-6",
        "number": 6,
        "name": "Chương Sáu",
        "note": "",
        "passages": [
          {
            "id": "6.1",
            "hanviet": "Tử viết: Thuấn kỳ đại trí dã dư! Thuấn hiếu vấn nhi hiểu sát nhĩ ngôn, ẩn ác nhi dương thiện, chấp kỳ lưỡng đoan, dụng kỳ trung ư dân, kỳ tư dĩ vi Thuấn hồ?",
            "nghia": "Khổng Tử nói: “Thuấn có lẽ là bậc đại trí vậy! Thuấn ham học hỏi và khéo xem xét những lời thiển cận của mọi người, che lấp những điều sai lầm xấu xa trong đó, mà phát huy những điều đứng đắn tốt lành trong đó, nắm lấy hai phía đối lập, chọn lấy cái đúng đắn thích hợp mà vận dụng vào trong dân chúng, đó là cái cách để Thuấn trở thành Thuấn chăng?",
            "binh": "Vua Thuấn được nêu làm gương mẫu của trung dung trong thực hành: biết lắng nghe, biết cân nhắc hai thái cực rồi chọn điểm vừa phải để áp dụng cho dân, chứ không áp đặt một phía."
          }
        ]
      },
      {
        "id": "chuong-7",
        "number": 7,
        "name": "Chương Bảy",
        "note": "",
        "passages": [
          {
            "id": "7.1",
            "hanviet": "Tử viết: Nhân giai viết dư trí, khu nhi nạp chư cổ hộ hãm tỉnh chi trung nhi mạc chi tri tỵ dã. Nhân giai viết dư trí, trạch hồ trung dung nhi bất năng kỳ nguyệt thủ dã.",
            "nghia": "Khổng Tử nói: “Người ta đều cho mình là trí, nhưng bị xua đuổi dồn vào trong lưới rập và hố cạm bẫy mà chẳng biết tránh. Người ta đều cho mình là trí, nhưng khi đã chọn được đạo Trung dung rồi, thì lại không thể giữ trọn được một tháng”.",
            "binh": "Biết đạo lý là một chuyện, giữ được đạo lý bền lâu là chuyện khác hẳn — đây là lời cảnh tỉnh về khoảng cách giữa nhận thức và thực hành kiên trì."
          }
        ]
      },
      {
        "id": "chuong-8",
        "number": 8,
        "name": "Chương Tám",
        "note": "",
        "passages": [
          {
            "id": "8.1",
            "hanviet": "Tử viết: Hồi chi vi nhân dã, trạch hồ Trung dung, đắc nhất thiện tắc quyền quyền phục ưng nhi phất thất chi hỹ.",
            "nghia": "Khổng Tử nói: “Cách sống của Nhan Hồi là sau khi nhận rõ được đạo Trung dung, được một điểm đúng thì cẩn thận giữ lấy, ôm vào lòng, không để cho nó mất đi nữa”.",
            "binh": "Đối lập với chương trước: Nhan Hồi là hình mẫu của người giữ vững điều tốt đã nhận ra, không đánh mất chỉ sau một thời gian ngắn."
          }
        ]
      },
      {
        "id": "chuong-9",
        "number": 9,
        "name": "Chương Chín",
        "note": "",
        "passages": [
          {
            "id": "9.1",
            "hanviet": "Tử viết: Thiên hạ quốc gia khả quân dã, tước lộc khả từ dã, bạch nhẫn khả đạo dã. Trung dung bất khả năng dã.",
            "nghia": "Khổng Tử nói: “Thiên hạ, quốc gia có thể chia đều ra cùng cai trị; tước vị bổng lộc có thể từ chối không nhận; lưỡi đao sáng trắng cũng có thể dám giẫm lên. Nhưng thực hiện cho được đạo trung dung thì khó hơn nhiều”.",
            "binh": "Ba việc tưởng như phi thường (chia thiên hạ, từ chối quyền lợi, liều mạng) lại dễ hơn việc bình dị là sống trung dung mỗi ngày — nghịch lý này là trọng tâm của cả chương."
          }
        ]
      },
      {
        "id": "chuong-10",
        "number": 10,
        "name": "Chương Mười",
        "note": "",
        "passages": [
          {
            "id": "10.1",
            "hanviet": "Tử Lộ vấn cường. Tử viết: Nam phương chi cường dư? Bắc phương chi cường dư? Ức chi cường dư? Khoan nhu dĩ giáo, bất báo vô đạo, nam phương chi cường dã, quân tử cư chi. Nhậm kim cách, tử nhi bất yếm, bắc phương chi cường dã, nhi cường giả cư chi. Cố quân tử hoà nhi bất lưu; cường tai kiểu; trung lập nhi bất ỷ, cường tai kiểu; quốc hữu đạo bất biến tắc yên, cường tai kiểu; quốc vô đạo chí tử bất biến, cường tai kiểu!",
            "nghia": "Tử Lộ hỏi về sự cang cường. Khổng Tử nói: “Là cái cang cường của người phương nam ư? Hay của người phương bắc? Hay là cái cang cường của riêng ngươi? Dạy bảo người ta một cách khoan dung dịu dàng, không trả thù kẻ vô đạo, đó là cái cang cường của người phương nam, người quân tử giữ sự cang cường đó. Còn ngày đêm bạn cùng giáp bền gươm sắc, dẫu chết cũng không ngán, đó là cái cang cường của người phương bắc. Người quân tử sống hoà mục với mọi người, nhưng không buông trôi theo thói tục — đấy mới là sự cang cường chân chính! Đứng giữa không ngả về bên nào, đấy mới là sự cang cường chân chính! Nước có đạo, người ấy không đổi thay tiết tháo lúc còn hàn vi, đấy mới là sự cang cường chân chính! Nước vô đạo, người ấy thà chết chứ không đổi thay phẩm chất, đấy mới là sự cang cường chân chính!”",
            "binh": "Khổng Tử định nghĩa lại chữ “cường” (mạnh mẽ): không phải sức mạnh vũ lực kiểu phương bắc, mà là sự kiên định nội tâm — hoà nhã với người nhưng không đánh mất lập trường, dù giàu sang hay khốn cùng."
          }
        ]
      },
      {
        "id": "chuong-11",
        "number": 11,
        "name": "Chương Mười Một",
        "note": "",
        "passages": [
          {
            "id": "11.1",
            "hanviet": "Tử viết: Sách ẩn, hành quái, hậu thế hữu thuật yên, ngô phất vi chi hĩ. Quân tử tuân đạo nhi hành. Bán đồ nhi phế, ngô phất năng dĩ hĩ. Quân tử y hồ trung dung, độn thế, bất kiến tri nhi bất hối, duy thánh giả năng chi.",
            "nghia": "Khổng Tử nói: “Cố tình tìm kiếm cuộc sống ẩn dật, hành động quái dị, đời sau có thể được nhắc đến mà ca ngợi, song ta không làm như vậy. Người quân tử phải theo Đạo mà đi. Bỏ dở nửa đường thì ta không làm. Người quân tử theo đạo Trung dung. Dẫu trốn đời ở ẩn chẳng được ai biết đến, cũng không bao giờ hối hận, chỉ có Thánh nhân mới làm được như vậy”.",
            "binh": "Phân biệt giữa việc “nổi tiếng vì khác người” và việc thực sự kiên trì theo đạo dù không ai biết đến — Khổng Tử chọn con đường thứ hai, khó hơn nhiều."
          }
        ]
      },
      {
        "id": "chuong-12",
        "number": 12,
        "name": "Chương Mười Hai",
        "note": "",
        "passages": [
          {
            "id": "12.1",
            "hanviet": "Quân tử chi đạo phí nhi ẩn. Phu phụ chi ngu, khả dĩ dự tri yên. Cập kì chí dã, tuy thánh nhân diệc hữu sở bất tri yên. Phu phụ chi bất tiếu khả dĩ năng hành yên. Cập kì chí dã, tuy thánh nhân diệc hữu sở bất năng yên. Thiên địa chi đại dã, nhân do hữu sở hám. Cố quân tử ngữ đại, thiên hạ mạc năng tải yên; ngữ tiểu, thiên hạ mạc năng phá yên. Thi vân: “Diên phi lệ thiên, Ngư dược vu uyên”. Ngôn kì thượng hạ sát dã.",
            "nghia": "Đạo của người quân tử thật rộng lớn nhưng cũng rất vi diệu khó xét. Dẫu là những người bình thường, cũng có thể biết được phần nào; nhưng đến đỉnh điểm của nó thì dẫu thánh nhân cũng còn có điều không biết. Rộng lớn như trời đất, mà người ta còn cảm thấy có chỗ không vừa ý. Cho nên đạo của người quân tử, nói chỗ lớn thì thiên hạ chẳng có gì bao chứa được, nói chỗ nhỏ thì thiên hạ chẳng có gì tách chia được nó. Kinh Thi nói: “Con diều bay lên trời cao, con cá lặn xuống vực sâu” — tức là nói cả trên trời dưới đất vậy.",
            "binh": "Đạo vừa gần gũi (ai cũng chạm tới được phần nào) vừa sâu thẳm vô cùng (thánh nhân cũng chưa biết hết) — hai thái cực “rộng lớn” và “vi diệu” cùng tồn tại trong một đạo lý duy nhất."
          }
        ]
      },
      {
        "id": "chuong-13",
        "number": 13,
        "name": "Chương Mười Ba",
        "note": "",
        "passages": [
          {
            "id": "13.1",
            "hanviet": "Tử viết: đạo bất viễn nhân; nhân chi vi đạo nhi viễn nhân, bất khả dĩ vi đạo. Trung thứ vi đạo bất viễn, thi chư kỷ nhi bất nguyện, diệc vật thi ư nhân.",
            "nghia": "Khổng Tử nói: “Đạo vốn chẳng xa người. Người ta nếu muốn thực hành đạo mà rời xa con người, như thế thì không thể thực hành được đạo”. Phẩm chất “trung thứ” khác với đạo Trung dung không xa. Điều gì thực hiện cho bản thân mình mà mình không muốn, thì cũng đừng áp đặt cho người khác.",
            "binh": "Đây là gốc của “kỷ sở bất dục, vật thi ư nhân” nổi tiếng trong Luận Ngữ — đạo lý cao xa nhất hoá ra lại bắt đầu từ một quy tắc đối nhân xử thế rất đơn giản."
          }
        ]
      },
      {
        "id": "chuong-14",
        "number": 14,
        "name": "Chương Mười Bốn",
        "note": "",
        "passages": [
          {
            "id": "14.1",
            "hanviet": "Quân tử tố kỳ vị nhi hành, bất nguyện hồ kỳ ngoại. Tố phú quý, hành hồ phú quý; tố bần tiện, hành hồ bần tiện; tố di địch, hành hồ di địch; tố hoạn nạn hành hồ hoạn nạn; quân tử vô nhập nhi bất tự đắc yên.",
            "nghia": "Người quân tử căn cứ vào địa vị hiện tại của mình mà hành động, không ham cái ở ngoài bổn phận của mình. Ở vào địa vị giàu sang, thì làm theo cách giàu sang; ở vào địa vị nghèo hèn, thì làm theo cách nghèo hèn. Quân tử dù ở vào hoàn cảnh nào cũng tự tìm thấy niềm vui của mình.",
            "binh": "Trung dung áp dụng vào hoàn cảnh sống: không phải thay đổi nguyên tắc theo địa vị, mà là chấp nhận và sống trọn vẹn, đúng mực với vị trí thực tế của mình, dù sang hay hèn."
          }
        ]
      },
      {
        "id": "chuong-15",
        "number": 15,
        "name": "Chương Mười Lăm",
        "note": "",
        "passages": [
          {
            "id": "15.1",
            "hanviet": "Quân tử chi đạo, thí như hành viễn tất tự nhĩ; thí như đăng cao, tất tự ty.",
            "nghia": "Đạo của người quân tử cũng ví như đi đường xa, tất phải bắt đầu từ chỗ gần, ví như leo lên đỉnh cao, tất phải bắt đầu từ nơi thấp.",
            "binh": "Một ẩn dụ giản dị nhưng nền tảng: tu dưỡng đạo đức không có đường tắt, phải đi từng bước từ gần đến xa, từ thấp lên cao."
          }
        ]
      },
      {
        "id": "chuong-16",
        "number": 16,
        "name": "Chương Mười Sáu",
        "note": "",
        "passages": [
          {
            "id": "16.1",
            "hanviet": "Tử viết: quỷ thần chi vi đức, kỳ thịnh hỹ hồ; thị chi nhi phất kiến, thính chi nhi phất văn, thể vật nhi bất khả di.",
            "nghia": "Khổng Tử nói: “Công đức của quỷ thần, thật to lớn xiết bao! Dẫu là nhìn thì không thấy, tai cũng không nghe, nhưng thể hiện ra ở mọi vật thì chẳng thể sót thứ gì.",
            "binh": "Chương này dùng hình ảnh quỷ thần (vô hình nhưng hiện diện khắp nơi) để nói về sự “thành” — cái chân thật không phô trương nhưng không thể che giấu, ý tưởng sẽ được khai triển đầy đủ ở các chương 20 trở đi."
          }
        ]
      },
      {
        "id": "chuong-17",
        "number": 17,
        "name": "Chương Mười Bảy",
        "note": "",
        "passages": [
          {
            "id": "17.1",
            "hanviet": "Tử viết: Thuấn kỳ đại hiếu dã dư! Đức vi Thánh nhân, tôn vi Thiên Tử, phú hữu tứ hải chi nội; tông miếu hưởng chi; tử tôn bảo chi. Cố đại đức tất đắc kỳ vị, tất đắc kỳ lộc, tất đắc kỳ danh, tất đắc kỳ thọ.",
            "nghia": "Khổng Tử nói: “Thuấn thật là đại hiếu! Đức đáng gọi là thánh nhân, địa vị tôn quý là thiên tử, của cải bao gồm cả bốn biển. Cho nên người có đức lớn ắt có được địa vị, ắt có được hậu lộc, ắt có được danh dự, ắt có được trường thọ”.",
            "binh": "Vua Thuấn được nêu làm minh chứng cho luận điểm: đức lớn tất được đền đáp xứng đáng — địa vị, lộc, danh, thọ đều là hệ quả tự nhiên của đại đức, không phải mục đích để theo đuổi."
          }
        ]
      },
      {
        "id": "chuong-18",
        "number": 18,
        "name": "Chương Mười Tám",
        "note": "",
        "passages": [
          {
            "id": "18.1",
            "hanviet": "Tử viết: Vô ưu giả, kỳ duy Văn Vương hồ. Dĩ Vương Quí vi phụ, dĩ Võ Vương vi tử; phụ tác chi, tử thuật chi.",
            "nghia": "Khổng Tử nói: “Không lo lắng gì, có lẽ chỉ có Văn Vương? Có được Vương Quý làm bố, có được Võ Vương làm con. Bố thì sáng nghiệp, con thì kế thừa.",
            "binh": "Văn Vương được nêu làm gương về một loại phúc phận đặc biệt: có tiền nhân gây dựng nền móng vững chắc và hậu duệ đủ sức kế thừa — sự nghiệp đạo đức không đứt gãy qua các thế hệ."
          }
        ]
      },
      {
        "id": "chuong-19",
        "number": 19,
        "name": "Chương Mười Chín",
        "note": "",
        "passages": [
          {
            "id": "19.1",
            "hanviet": "Tử viết: Võ Vương, Châu Công kỳ đạt hiếu hỹ hồ. Phù hiếu giả, thiện kế nhân chi chí, thiện thuật nhân chi sự giả dã.",
            "nghia": "Khổng Tử nói: “Võ Vương và Chu Công có thể nói là đạt tới tột bậc đạo hiếu rồi chăng? Gọi rằng hiếu, tức là khéo biết nối chí tiền nhân, khéo biết hoàn thành sự nghiệp của tiền nhân.",
            "binh": "Định nghĩa hiếu ở tầm vóc quốc gia: không chỉ là phụng dưỡng cha mẹ, mà là kế thừa và hoàn thành được chí hướng, sự nghiệp mà tiền nhân để lại — áp dụng cho cả việc tế tự tổ tiên và trị quốc."
          }
        ]
      },
      {
        "id": "chuong-20",
        "number": 20,
        "name": "Chương Hai Mươi",
        "note": "",
        "passages": [
          {
            "id": "20.1",
            "hanviet": "Ai công vấn chính. Tử viết: Văn, Võ chi chính, bố tại phương sách. Kỳ nhân tồn, tắc kỳ chính cử; kỳ nhân vong, tắc kỳ chính tức. Cố vi chính tại nhân; thủ nhân dĩ thân; tu thân dĩ đạo; tu đạo dĩ nhân.",
            "nghia": "[Lỗ] Ai Công hỏi việc chính trị. Khổng Tử đáp: “Chính sự của Văn Vương, Võ Vương đều ghi chép ở trong điển tịch cả. Nếu ngày nay vẫn còn những con người như vậy, thì chính sự ấy có thể thi hành được; không còn, thì chính sự ấy cũng chấm dứt. Cho nên thi hành chính sự, cốt ở con người. Chọn dùng được người là cốt ở mình. Sửa mình thì phải theo Đạo, theo Đạo thì trước hết phải noi theo nhân”.",
            "binh": "Mở đầu chương dài nhất và quan trọng nhất của Trung Dung: chính sự tốt hay xấu phụ thuộc vào con người, con người tốt hay xấu bắt đầu từ việc tu thân — một chuỗi nhân quả nối liền đạo đức cá nhân với việc trị quốc."
          },
          {
            "id": "20.2",
            "hanviet": "Thiên hạ chi đạt đạo ngũ; sở dĩ hành chi giả tam. Viết quân thần dã, phụ tử dã, phu phụ dã, côn đệ dã, bằng hữu chi giao dã, ngũ giả thiên hạ chi đạt đạo dã. Trí, nhân, dũng tam giả; thiên hạ chi đạt đức dã.",
            "nghia": "Đạo lí luân thường chung trong thiên hạ có năm điều: đó là vua tôi, cha con, chồng vợ, anh em, bằng hữu — năm mối quan hệ ấy là đạo lí luân thường chung trong thiên hạ. Còn ba điểm trí, nhân, dũng là những phẩm đức chung trong thiên hạ để thực hành năm đạo ấy.",
            "binh": "“Ngũ luân” (năm mối quan hệ nền tảng) và “tam đức” (trí, nhân, dũng) trở thành khung đạo đức kinh điển của Nho gia, được nhắc lại xuyên suốt lịch sử Nho học."
          },
          {
            "id": "20.3",
            "hanviet": "Thành giả, thiên chi Đạo dã, Thành chi giả, nhân chi Đạo dã. Thành giả, bất miễn nhi trúng; bất tư nhi đắc; thung dung Trung đạo; Thánh nhân dã. Thành chi giả, trạch thiện nhi cố chấp chi giả dã. Bác học chi, thẩm vấn chi, thận tư chi, minh biện chi, đốc hành chi.",
            "nghia": "“Thành” vốn là đạo của Trời. Cố gắng đạt được thành, là đạo của người. “Thành” của Trời là không miễn cưỡng cũng tự nhiên thích hợp, không cần suy nghĩ cũng tự nhiên đạt được, cứ ung dung mà hợp đạo — chỉ thánh nhân mới được thế. Còn đạt tới thành bằng thực tiễn thì phải chọn điều thiện mà kiên trì giữ vững: học cho rộng, hỏi cho kĩ, suy nghĩ cho cẩn thận, phân biện cho rạch ròi, thực hành cho kiên định.",
            "binh": "Đây là chỗ then chốt nhất của cả sách: khái niệm “Thành” được nâng lên thành phạm trù triết học trung tâm, và năm bước “học – hỏi – nghĩ – biện – hành” trở thành quy trình tu dưỡng kinh điển của Nho gia."
          }
        ]
      },
      {
        "id": "chuong-21",
        "number": 21,
        "name": "Chương Hai Mươi Mốt",
        "note": "",
        "passages": [
          {
            "id": "21.1",
            "hanviet": "Tự thành minh, vị chi tính. Tự minh thành, vị chi giáo. Thành, tắc minh hỹ. Minh, tắc thành hỹ.",
            "nghia": "Do nội tâm chân thành mà sáng tỏ được sự lí, đó gọi là bản tính. Do sáng tỏ sự lí mà trở nên chân thành, đó gọi là giáo hoá. Chân thành thì nhất định sẽ sáng tỏ được sự lí, sáng tỏ sự lí cũng nhất định sẽ chân thành.",
            "binh": "Hai con đường tới cùng một đích: bậc thánh nhân đi từ thành đến sáng suốt một cách tự nhiên (tính), người thường phải đi từ học hỏi sáng suốt để dần đạt tới thành (giáo). Mười hai chương sau đều khai triển ý này."
          }
        ]
      },
      {
        "id": "chuong-22",
        "number": 22,
        "name": "Chương Hai Mươi Hai",
        "note": "",
        "passages": [
          {
            "id": "22.1",
            "hanviet": "Duy thiên hạ chí Thành vi năng tận kỳ tính. Năng tận kỳ tính, tắc năng tận nhân chi tính. Năng tận nhân chi tính, tắc năng tận vật chi tính. Năng tận vật chi tính, tắc khả dĩ tán Thiên Địa chi hoá dục. Khả dĩ tán Thiên Địa chi hoá dục, tắc khả dĩ dữ Thiên Địa tham hỹ.",
            "nghia": "Chỉ có người có được đức “thành” tối cao trong thiên hạ mới có thể thể hiện được hết bản tính của mình. Thể hiện được hết bản tính của mình thì phát huy được hết bản tính của người. Phát huy được hết bản tính của người thì phát huy được hết bản tính của vật. Phát huy được hết bản tính của vật thì có thể giúp cho sự hoá dục của Trời Đất, có thể cùng Trời Đất đứng sánh làm ba.",
            "binh": "Một chuỗi lập luận leo thang: từ hiểu chính mình, đến hiểu người, đến hiểu vạn vật, và cuối cùng là tham dự vào công cuộc sinh hoá của trời đất — “thành” được đẩy tới tầm vũ trụ luận."
          }
        ]
      },
      {
        "id": "chuong-23",
        "number": 23,
        "name": "Chương Hai Mươi Ba",
        "note": "",
        "passages": [
          {
            "id": "23.1",
            "hanviet": "Kỳ thứ trí khúc. Khúc năng hữu thành. Thành, tắc hình; hình tắc trứ; trứ, tắc minh; minh, tắc động; động, tắc biến; biến, tắc hoá. Duy thiên hạ chí thành vi năng hoá.",
            "nghia": "Sau đó một bậc là “khúc”, tức là bắt đầu từ việc suy cứu một phương diện nào đó của sự lí. “Khúc” cũng có thể đạt tới “thành”. “Thành” thì sẽ biểu hiện ra ngoài, biểu hiện ra ngoài thì sẽ rõ, rõ thì sẽ sáng, sáng thì sẽ động, động thì sẽ biến, biến thì sẽ hoá. Chỉ có đạt tới chí thành trong thiên hạ thì mới có thể có công hoá dục.",
            "binh": "Dành cho người thường (không phải bậc thánh sinh ra đã “thành”): có thể bắt đầu từ một điểm nhỏ, kiên trì mài giũa, rồi từng bước lan toả thành ảnh hưởng lớn."
          }
        ]
      },
      {
        "id": "chuong-24",
        "number": 24,
        "name": "Chương Hai Mươi Bốn",
        "note": "",
        "passages": [
          {
            "id": "24.1",
            "hanviet": "Chí Thành chi đạo khả dĩ tiền tri. Quốc gia tương hưng, tất hữu trinh tường; quốc gia tương vong, tất hữu yêu nghiệt. Hoạ phúc tương chí, thiện tất tiên tri chi, bất thiện tất tiên tri chi. Cố chí thành như thần.",
            "nghia": "Đạo “thành” tối cao có thể dùng để biết trước tương lai. Quốc gia sắp hưng thịnh, ắt có điềm lành; quốc gia sắp diệt vong, ắt có điềm xấu. Hoạ phúc sắp đến, đều có thể biết trước. Bởi thế nói rằng bậc chí thành là như thần.",
            "binh": "Một tuyên bố táo bạo: người đạt tới mức độ chân thành tuyệt đối sẽ nhạy bén với những dấu hiệu tinh vi nhất của sự thay đổi, gần như có khả năng “biết trước” — không phải phép thuật, mà là sự thấu suốt tột cùng."
          }
        ]
      },
      {
        "id": "chuong-25",
        "number": 25,
        "name": "Chương Hai Mươi Nhăm",
        "note": "",
        "passages": [
          {
            "id": "25.1",
            "hanviet": "Thành giả, tự thành dã; nhi Đạo, tự đạo dã. Thành giả, vật chi chung thuỷ. Bất thành vô vật. Thị cố quân tử thành chi vi quí. Thành giả, phi tự thành kỷ nhi dĩ đã, sở dĩ thành vật dã. Thành kỷ, nhân dã, thành vật, trí dã.",
            "nghia": "Thành tự nó hoàn thành, còn Đạo tự nó vận hành. Thành là căn bản của muôn vật, không có thành thì không có muôn vật. Bởi thế người quân tử lấy việc đạt tới “thành” làm quý. Thành chẳng phải là tự mình hoàn thành mà thôi, mà còn là hoàn thành muôn vật. Tự mình hoàn thành là “nhân”, hoàn thành muôn vật là “trí”.",
            "binh": "“Thành” không chỉ là chuyện tu dưỡng riêng tư — hoàn thiện bản thân (nhân) và giúp hoàn thiện thế giới xung quanh (trí) là hai mặt không thể tách rời của cùng một đức."
          }
        ]
      },
      {
        "id": "chuong-26",
        "number": 26,
        "name": "Chương Hai Mươi Sáu",
        "note": "",
        "passages": [
          {
            "id": "26.1",
            "hanviet": "Cố chí Thành vô tức. Bất tức tắc cửu; cửu tắc trưng; trưng tắc du viễn; du viễn tắc bác hậu; bác hậu tắc cao minh.",
            "nghia": "Cho nên Chí Thành không bao giờ ngưng nghỉ. Không ngưng nghỉ thì có thể dài lâu; dài lâu thì có hiệu nghiệm; có hiệu nghiệm thì có thể lâu xa vô cùng; lâu xa vô cùng thì rộng và dày; rộng và dày thì cao và sáng.",
            "binh": "Một chuỗi suy luận theo kiểu domino: từ “không ngừng nghỉ” dẫn tới rộng lớn, cao minh, sánh ngang trời đất — nhấn mạnh tính bền bỉ, tích luỹ theo thời gian của đức thành, không có gì đến trong chốc lát."
          }
        ]
      },
      {
        "id": "chuong-27",
        "number": 27,
        "name": "Chương Hai Mươi Bảy",
        "note": "",
        "passages": [
          {
            "id": "27.1",
            "hanviet": "Đại tai Thánh nhân chi đạo! Dương dương hồ, phát dục vạn vật; tuấn, cực vu thiên. Cố quân tử tôn đức tính, nhi đạo vấn học, trí quảng đại, nhi tận tinh vi; cực cao minh, nhi đạo Trung dung, ôn cố, nhi tri tân; đôn hậu dĩ sùng lễ.",
            "nghia": "Lớn thay, Đạo của thánh nhân! Mênh mông vô bờ, phát dục muôn vật, cao vút tận trời cao. Cho nên người quân tử vừa tôn trọng bản lĩnh đạo đức tiên thiên, lại vừa chăm lo học hỏi. Vừa cố gắng đạt tới những lĩnh vực rộng lớn, lại vừa hết sức đi sâu vào chốn tinh vi; vừa đạt tới cõi cao minh, lại vừa theo đạo Trung dung. Ôn cũ để biết mới, tăng cường đạo đức cho sâu dày để sùng chuộng lễ nghĩa.",
            "binh": "Câu “ôn cố nhi tri tân” quen thuộc trong Luận Ngữ xuất hiện lại ở đây, đặt trong một loạt cặp đối lập bổ sung cho nhau: rộng lớn — tinh vi, cao minh — trung dung, cũ — mới. Người quân tử phải giữ được cả hai đầu cùng lúc."
          }
        ]
      },
      {
        "id": "chuong-28",
        "number": 28,
        "name": "Chương Hai Mươi Tám",
        "note": "",
        "passages": [
          {
            "id": "28.1",
            "hanviet": "Tử viết: Ngu nhi hiếu tự dụng, tiện nhi hiếu tự chuyên, sinh hồ kim chi thế, phản cổ chi đạo; như thử giả, tai cập kỳ thân giả dã.",
            "nghia": "Khổng Tử nói: “Kẻ ngu dốt mà thích tự tiện làm bừa, kẻ ti tiện mà thích độc đoán chuyên quyền, sống ở đời nay mà muốn quay lại cách làm thời xưa. Những người như vậy tai hoạ nhất định sẽ rơi vào thân”.",
            "binh": "Lời cảnh báo về việc làm trái thẩm quyền và trái thời — dù với ý định tốt, hành động vượt quá vị trí và bối cảnh của mình đều dễ dẫn tới hoạ."
          }
        ]
      },
      {
        "id": "chuong-29",
        "number": 29,
        "name": "Chương Hai Mươi Chín",
        "note": "",
        "passages": [
          {
            "id": "29.1",
            "hanviet": "Vương thiên hạ hữu tam trọng yên. Kỳ quả quá hỹ hồ! Cố quân tử chi đạo, bản chư thân, trưng chư thứ dân. Khảo chư tam vương, nhi bất mậu; kiến chư Thiên Địa, nhi bất bội; chất chư quỉ thần, nhi vô nghi. Bách thế dĩ sĩ Thánh nhân, nhi bất hoặc.",
            "nghia": "Cai trị thiên hạ có ba việc trọng yếu, làm được thì có lẽ ít mắc sai lầm vậy. Cho nên đạo của người quân tử, lấy đức tính bản thân mình làm gốc, đồng thời được nghiệm chứng ở thứ dân, đối chiếu với lễ pháp của Tam vương mà không sai lầm, dựng lên trong Trời Đất mà không trái ngược, đối xét với quỷ thần mà không nghi ngờ, đợi đến thánh nhân trăm đời sau xem xét cũng không nhầm lẫn.",
            "binh": "Tiêu chuẩn kiểm định một đạo lý đúng đắn: phải đứng vững qua năm phép thử — gốc ở bản thân, nghiệm ở dân chúng, đối chiếu lịch sử, hợp với tự nhiên, và chịu được sự phán xét của hậu thế."
          }
        ]
      },
      {
        "id": "chuong-30",
        "number": 30,
        "name": "Chương Ba Mươi",
        "note": "",
        "passages": [
          {
            "id": "30.1",
            "hanviet": "Trọng Ni tổ thuật Nghiêu Thuấn, hiến chương Văn Võ. Thượng luật thiên thời, hạ tập thuỷ thổ. Thí như Thiên Địa chi vô bất trì tải, vô bất phúc đảo. Thí như tứ thì thác hành; như nhật nguyệt chi đại minh.",
            "nghia": "Trọng Ni kế thừa truyền thống của Nghiêu Thuấn từ xa xưa, noi theo mà làm sáng tỏ phép tắc của Văn Vương và Võ Vương, trên thì tuân theo Thiên thời, dưới thì dựa vào thuỷ thổ. Cũng ví như Trời Đất không có cái gì là không bao chứa, không có cái gì là không che chở. Lại ví như bốn mùa đắp đổi tuần hoàn, như Mặt Trời Mặt Trăng thay nhau toả sáng.",
            "binh": "Đạo của Khổng Tử được ví với quy luật vận hành của trời đất, bốn mùa, nhật nguyệt — không phải vì ông tự xưng, mà vì đạo ấy bao dung, tuần hoàn, không loại trừ điều gì như chính tự nhiên vậy."
          }
        ]
      },
      {
        "id": "chuong-31",
        "number": 31,
        "name": "Chương Ba Mươi Mốt",
        "note": "",
        "passages": [
          {
            "id": "31.1",
            "hanviet": "Duy thiên hạ chí Thánh, vi năng thông, minh, duệ, trí, túc dĩ hữu lâm dã; khoan, dũ, ôn, nhu, túc dĩ hữu dung dã; phát, cường, cương, nghị, túc dĩ hữu chấp dã; trai trang, trung chính, túc dĩ hữu kính dã; văn, lý, mật, sát túc dĩ hữu biệt dã.",
            "nghia": "Chỉ có bậc Chí Thánh trong thiên hạ mới có thể thông minh duệ trí đủ để trị vì thiên hạ; khoan dung, dồi dào, ôn hoà, nhu thuận đủ để bao chứa tất cả; phấn phát, kiên cường, cương nghị, quyết đoán đủ để cầm nắm đại sự; cung kính trang trọng, trung chính công bằng đủ để khiến mọi người kính sợ; văn chương điều lí tinh tế sáng suốt đủ để phân biệt phải trái.",
            "binh": "Năm cặp phẩm chất của bậc Chí Thánh, mỗi cặp phục vụ một chức năng khác nhau (trị vì, bao dung, quyết đoán, uy nghiêm, phân định) — cho thấy trung dung không có nghĩa là thiếu cá tính, mà là hội đủ nhiều phẩm chất tưởng như đối lập."
          }
        ]
      },
      {
        "id": "chuong-32",
        "number": 32,
        "name": "Chương Ba Mươi Hai",
        "note": "",
        "passages": [
          {
            "id": "32.1",
            "hanviet": "Duy thiên hạ chí Thành, vi năng kinh luân thiên hạ chi đại kinh, lập thiên hạ chi đại bản, tri Thiên Địa chi hoá dục. Phù yên hữu sở ỷ? Truân truân kỳ nhân; uyên uyên kỳ uyên; hạo hạo kỳ Thiên.",
            "nghia": "Chỉ có bậc Chí Thành trong thiên hạ mới có thể quy hoạch được cương lĩnh lớn của thiên hạ, xác lập nên căn bản lớn của thiên hạ, và biết được công hoá dục của Trời Đất. Mà đâu cần dựa vào cái gì khác? Nhân ái của bậc chí thành ấy xiết bao thành khẩn! Sự thâm trầm của người sâu sắc biết bao! Sự cao rộng của người khác nào bầu trời?",
            "binh": "Bậc Chí Thành không cần vay mượn quyền uy bên ngoài — chính lòng nhân thành khẩn, chiều sâu và sự rộng lớn tự thân đã đủ làm nền tảng cho việc gánh vác thiên hạ."
          }
        ]
      },
      {
        "id": "chuong-33",
        "number": 33,
        "name": "Chương Ba Mươi Ba",
        "note": "",
        "passages": [
          {
            "id": "33.1",
            "hanviet": "Thi viết: “Ý cẩm thượng quýnh”. Ố kỳ văn chi trứ dã. Cố quân tử chi đạo, ám nhiên nhi nhật chương. Tiểu nhân chi đạo, chước nhiên nhi nhật vong. Quân tử chi đạo, đạm nhi bất yếm; giản, nhi văn; ôn, nhi lý.",
            "nghia": "Kinh Thi nói: “Mặc áo gấm rồi mặc thêm áo mỏng ở ngoài” — ấy là vì ngại hoa văn gấm quá rực rỡ. Cho nên đạo của người quân tử, thoạt đầu nhạt tối, nhưng càng ngày càng toả rạng thêm lên. Đạo của kẻ tiểu nhân thì sặc sỡ nhưng ngày càng mờ nhạt dần đi. Đạo của người quân tử, thanh đạm nhưng người ta không chán, giản phác nhưng văn nhã, ôn hoà nhưng rành rọt.",
            "binh": "Chương kết sách quay lại tinh thần “thận độc” ở chương 1: đạo chân chính không phô trương ồn ào như tiểu nhân, mà âm thầm toả sáng dần theo thời gian — hình ảnh chiếc áo gấm được che thêm lớp áo mỏng là một ẩn dụ đẹp cho sự khiêm nhường của người có đức thật."
          }
        ]
      }
    ]
  }
]
};
