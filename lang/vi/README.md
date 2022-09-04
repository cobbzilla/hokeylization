Hokeyzation
 =============
 Tên là một portmanteau, có nghĩa là 'bản địa hóa hokey'

 Đó là hokey vì nó rất đơn giản: nó gửi chuỗi đến Google Dịch

 Bạn có thể dịch:
 * một đối tượng JavaScript chứa các thông báo
 * một thư mục các tệp, đệ quy

 # Đọc sách này bằng ngôn ngữ khác
 Tài liệu README.md này đã được dịch, sử dụng chính công cụ hokeyzation,
 sang ** [mọi ngôn ngữ được Google Dịch hỗ trợ] (lang / README.md)! **

 Tôi chắc chắn rằng nó không hoàn hảo, nhưng tôi hy vọng nó còn hơn không!

 [🇸🇦 tiếng Ả Rập] (lang / ar / README.md)
 [🇧🇩 Bengali] (lang / bn / README.md)
 [🇩🇪 tiếng Đức] (lang / de / README.md)
 [🇺🇸 Tiếng Anh] (lang / en / README.md)
 [🇪🇸 Tiếng Tây Ban Nha] (lang / es / README.md)
 [🇫🇷 tiếng Pháp] (lang / fr / README.md)
 [🇹🇩 Hausa] (lang / ha / README.md)
 [🇮🇳 Hindi] (lang / hi / README.md)
 [🇮🇩 tiếng Indonesia] (lang / id / README.md)
 [🇮🇹 tiếng Ý] (lang / it / README.md)
 [🇯🇵 Tiếng Nhật] (lang / ja / README.md)
 [🇰🇷 Tiếng Hàn] (lang / ko / README.md)
 [🇮🇳 Maranthi] (lang / mr / README.md)
 [🇵🇱 Tiếng Ba Lan] (lang / pl / README.md)
 [🇧🇷 tiếng Bồ Đào Nha] (lang / pt / README.md)
 [🇷🇺 tiếng Nga] (lang / ru / README.md)
 [🇰🇪 Swahili] (lang / sw / README.md)
 [🇵🇭 Tagalog] (lang / tl / README.md)
 [🇹🇷 tiếng Thổ Nhĩ Kỳ] (lang / tr / README.md)
 [🇵🇰 Urdu] (lang / ur / README.md)
 [🇻🇳 Vietnamese] (lang / vi / README.md)
 [🇨🇳 Tiếng Trung] (lang / zh / README.md)


 ** [📚 ... Tất cả các ngôn ngữ ...] (lang / README.md) **
 ----

 ### Có sự cố với bản dịch README này không?
 Bản dịch cụ thể này của bản gốc [README] (https://github.com/cobbzilla/yuebing/blob/master/README.md)
 có thể có sai sót - * rất hoan nghênh việc sửa chữa! * Vui lòng gửi [yêu cầu kéo trên GitHub] (https://github.com/cobbzilla/yuebing/pulls),
 hoặc nếu bạn không thoải mái khi làm điều đó, hãy [mở sự cố] (https://github.com/cobbzilla/yuebing/issues)

 Khi bạn tạo một vấn đề GitHub mới về bản dịch, vui lòng thực hiện:
 * bao gồm URL của trang (sao chép / dán từ thanh địa chỉ trình duyệt)
 * bao gồm văn bản chính xác bị sai (sao chép / dán từ trình duyệt)
 * vui lòng đưa ra gợi ý về một bản dịch tốt hơn
 * **Cảm ơn bạn!**

 # Nội dung
 * [Nguồn] (# Nguồn)
 * [Hỗ trợ và Tài trợ] (# Hỗ trợ và Tài trợ)
 * [Cài đặt] (# Cài đặt)
 * [Thiết lập thiết lập)
 * [Dịch tệp tài nguyên chuỗi JavaScript] (# Dịch-a-JavaScript-chuỗi-tài nguyên-tệp)
 * [Dịch thư mục tệp văn bản] (# Dịch-một-thư-mục-của-tệp-văn-bản)
 * [Tùy chọn khác] (# Tùy chọn khác)

 ## Nguồn
 * [hokeyzation trên GitHub] (https://github.com/cobbzilla/hokeyption)
 * [hokeyfication on npm] (https://www.npmjs.com/package/hokeyption)

 ## Hỗ trợ và Tài trợ
 Tôi đang cố gắng trở thành một nhà phát triển phần mềm nguồn mở chuyên nghiệp. Tôi đã làm việc ở
 ngành công nghiệp phần mềm trong nhiều năm, tôi đã thành lập các công ty thành công và bán chúng cho các công ty đại chúng.
 Gần đây, tôi bị mất việc và tôi không thực sự có bất kỳ công việc nào khác.

 Vì vậy, tôi sẽ thử viết phần mềm hữu ích và xem nó có hoạt động không

 Tôi chân thành đánh giá cao dù là nhỏ nhất [đóng góp hàng tháng qua Patreon] (https://www.patreon.com/cobbzilla)

 ## Cài đặt
 Để sử dụng công cụ dòng lệnh, hãy cài đặt bằng cách sử dụng `npm` `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Để sử dụng làm thư viện, hãy cài đặt phiên bản `lite` nhỏ hơn nhiều:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Sau đó, xem trợ giúp cho lệnh `hokey` :

    hokey --help
    hokey -h

 Bạn muốn xem đầu ra bằng ngôn ngữ của bạn hoặc ngôn ngữ khác?

 `hokey` cố gắng phát hiện ngôn ngữ tự động từ các biến môi trường của trình bao của bạn

 Bạn có thể buộc một ngôn ngữ bằng cách đặt biến môi trường `LC_ALL` :

    LC_ALL=it hokey --help

 Lưu ý rằng nếu bạn đã cài đặt `hokeylization-lite` , trợ giúp lệnh chỉ có sẵn bằng tiếng Anh

 ## Thành lập
 Đặt biến môi trường `GOOGLE_TRANSLATE_PROJECT_ID` để xác định dự án Google Dịch của bạn

 Đặt biến môi trường `GOOGLE_APPLICATION_CREDENTIALS` thành thông tin đăng nhập JSON mà bạn đã tải xuống
 sau khi tìm hiểu cách xác thực hoạt động trên đám mây của Google (có thể rất thú vị)

 Nếu bạn đang chạy từ mã nguồn, bạn cũng có thể đặt chúng vào tệp `.env` trong nguồn
 thư mục chúng sẽ được tải trong thời gian chạy qua [dotenv] (https://www.npmjs.com/package/dotenv)

 ## Dịch tệp tài nguyên chuỗi JavaScript
 Bảng chuỗi của bạn ** phải ** ở trong tệp JavaScript ở một trong hai dạng sau:

 Xuất ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Xuất khẩu CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Nếu tệp này được đặt tên là `myfile.en.js` , bạn có thể dịch nó sang tiếng Tây Ban Nha và tiếng Đức bằng:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` trong phần trên là đặc biệt - nó là một từ dành riêng trong công cụ này!

 `LANG` được thay thế bằng mã ngôn ngữ cho các tệp đầu ra

 Do đó, lệnh trên tạo các tệp:

    myfile.es.js
    myfile.de.js

 Tùy chọn `-l` / `--languages` là danh sách mã ngôn ngữ ISO được phân tách bằng dấu phẩy
 [được hỗ trợ bởi Google Dịch] (https://cloud.google.com/translate/docs/languages)

 Nếu tệp đầu ra đã tồn tại, nó sẽ được kiểm tra để xác định khóa nào đã tồn tại.
 Các khóa hiện có sẽ không được dịch. Bản dịch cho các khóa bị thiếu sẽ được tạo và thêm vào
 vào cuối đối tượng JS. Toàn bộ tệp luôn được viết lại.

 Để buộc dịch lại tất cả các phím, hãy sử dụng tùy chọn `-f` / `--force` `-f`

 ## Dịch thư mục tệp văn bản
 Bạn cũng có thể dịch một thư mục tệp. hokeyption sẽ truy cập đệ quy mỗi
 tệp trong thư mục và chạy nội dung của nó thông qua Google Dịch và lưu kết quả đầu ra
 đến một tệp được đặt tên giống hệt nhau trong một cây thư mục riêng biệt

 Khi mục tiêu bản dịch của bạn là một thư mục, chế độ này được bật

 Tùy chọn `-o` / `--outfile` chỉ định thư mục đầu ra

 ** CẢNH BÁO LỚN **: Khi dịch thư mục, ** KHÔNG ** chỉ định thư mục đầu ra
 đó là trong thư mục đầu vào của bạn! Nếu bạn làm điều này, bạn sẽ:
 * tạo ra đệ quy vô hạn
 * chạy hết hóa đơn Google của bạn
 * lấp đầy đĩa của bạn
 * bớt vui vẻ

 Đây là một ví dụ về những việc * không nên làm *:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Khi điều này chạy, các tệp đã dịch được ghi vào `templates/es` , và do đó trở nên mới
 các tệp nguồn để dịch, vì chúng nằm dưới `templates/` - quá trình này tiếp tục
 mãi mãi không làm được!

 #### Cách sử dụng đúng
 OK, giả sử bạn có một số mẫu email trong một thư mục:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Để dịch tất cả những thứ này sang tiếng Tây Ban Nha và tiếng Đức, hãy chạy:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Ở trên, `LANG` là một từ dành riêng và sẽ được thay thế bằng mã ngôn ngữ ISO

 Điều gì xảy ra khi ở trên chạy:
 * Các `templates/email/es` `templates/email/de` sẽ được tạo (nếu chúng không tồn tại)
 * Mọi tệp trong `templates/email/en` sẽ được dịch sang tiếng Tây Ban Nha và tiếng Đức
 * Các tệp đầu ra hiện có sẽ không được tạo lại trừ khi bạn sử dụng `-f` -f` / `--force`
 * Bạn sẽ kết thúc với một cấu trúc thư mục giống hệt nhau và các tệp trong `es` `de` như bạn có trong `en`

 ## Sự lựa chọn khác

 ### Chạy khô
 `-n` / `--dry-run` để hiển thị những gì sẽ được thực hiện, nhưng không thực sự thực hiện bất kỳ lệnh gọi API nào hoặc ghi bất kỳ tệp nào

 ### Lực lượng
 Truyền `-f` / `--force` `-f` luôn tạo lại các bản dịch, ngay cả khi chúng đã tồn tại

 ### Cuộc thi đấu
 `-m` / `--match` để giới hạn các tệp được xử lý khi chạy ở chế độ thư mục

 Không phải lúc nào bạn cũng có thể muốn dịch * mọi tệp * trong thư mục nguồn sang thư mục đích của mình

 Giá trị của tùy chọn `-m` / `--match` là một regex (hãy cẩn thận với các quy tắc trích dẫn shell!) Chỉ định
 những tập tin nào nên được dịch

 Khi nghi ngờ, bạn có thể kết hợp tùy chọn này với `-n` / `--dry-run` để xem tệp nào sẽ được dịch

 ### Không bao gồm
 Đôi khi `-m` của bạn khớp với quá nhiều tệp. Sử dụng tùy chọn `-e` / `--excludes` để loại trừ rõ ràng
 các tệp nếu không sẽ khớp

 Bạn có thể liệt kê nhiều regex, được phân tách bằng dấu cách

 Cách sử dụng phổ biến sẽ là: `--excludes node_modules dist \.git build tmp`

 ### Ghi đông
 Các chuỗi cần dịch có thể chứa các mẫu `{{ handlebars }}` , có hai hoặc ba dấu ngoặc nhọn

 Bạn có thể * KHÔNG NÊN * muốn nội dung bên trong các mẫu đó được dịch

 Chuyển cờ `-H` / `--handlebars` và bất kỳ thứ gì trong `{{ ... }}` sẽ không được dịch

 ### Markdown
 Markdown không phải là văn bản hay html, vì vậy Google Dịch gặp một số khó khăn với nó

 `-M` / `--markdown` cho phép xử lý đặc biệt đối với các tệp đánh dấu

 Hokeylizer xử lý tốt mọi thứ, nhưng với các tệp đánh dấu, đôi khi bạn có thể gặp những vấn đề sau:
 * Liên kết bị hỏng. Trong bản dịch, một ký tự khoảng trắng xuất hiện sau khi mô tả liên kết đánh dấu kết thúc (với `]` ) nhưng
 trước khi liên kết đích của nó bắt đầu (với `(` ). Điều này làm cho dấu xuống hiển thị không chính xác và liên kết
 bị hỏng khi xem tài liệu.
 * Các khối mã được dịch. Google dịch không biết mã nào coi là mã và mã nào thì không
 * Khoảng cách không chính xác cho các khối mã thụt lề. Khoảng cách rất khó giữ trong bản dịch
 * Những thứ bên trong `backticks` sẽ được dịch, khi bạn hầu như luôn muốn chúng là giá trị theo nghĩa đen

 Khi cờ `-M` / `--markdown` được bật:
 * Mẫu `] (` sẽ được cô đọng thành `](` do đó sửa các liên kết đánh dấu bị hỏng
 * Một trình bao bọc "không dịch" sẽ được đặt xung quanh các khối mã được thụt lề, duy trì thụt lề phù hợp và đảm bảo chúng không được dịch
 * Một trình bao bọc "không dịch" sẽ được đặt xung quanh văn bản trong `backticks` để đảm bảo rằng chúng không được dịch

 ### Xử lý dưới dạng
 Thông thường mọi thứ được xử lý dưới dạng văn bản thuần túy

 Nếu nội dung của bạn là HTML, nó sẽ bị xáo trộn trừ khi bạn vượt qua tùy chọn `-p html` / `--process-as html`

 ### Lọc
 Đối với những người thích mạo hiểm: khi xử lý các tệp trong một thư mục, bạn có thể chuyển tùy chọn `-F` / `--filter`
 để lọc đầu ra trước khi nó được ghi vào hệ thống tệp

 Giá trị của tùy chọn này phải là một đường dẫn đến tệp JS xuất một hàm có tên là `filter`

 Hàm `filter` phải `async` vì `await` sẽ được gọi trên nó

 Trước khi tệp được ghi vào đĩa, toàn bộ nội dung tệp sẽ được chuyển đến hàm `filter` dưới dạng chuỗi

 Giá trị trả về từ hàm `filter` là giá trị thực sự sẽ được ghi vào bộ nhớ

 Do đó, bạn có toàn quyền kiểm soát những gì cuối cùng sẽ được viết

 ### Cứu giúp
 Sử dụng `-h` / `--help` để hiển thị trợ giúp

 ## Chúc bạn dịch vui vẻ!

</pre>