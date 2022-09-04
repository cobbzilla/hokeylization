Hokeylization
 ==============
 ชื่อเป็นกระเป๋าหิ้ว หมายถึง 'hokey localization'

 มันเป็นเรื่องที่น่ากลัวเพราะมันง่ายมาก: มันส่งสตริงไปยัง Google แปลภาษา

 คุณสามารถแปล:
 * วัตถุ JavaScript ที่มีข้อความ
 * ไดเร็กทอรีของไฟล์แบบเรียกซ้ำ

 #อ่านเป็นภาษาอื่น
 เอกสาร README.md นี้ได้รับการแปลโดยใช้เครื่องมือ hokeylization
 เป็น **[ทุกภาษาที่ Google Translate รองรับ](../README.md)!**

 ฉันแน่ใจว่ามันไม่สมบูรณ์แบบ แต่ฉันหวังว่าจะดีกว่าไม่ทำอะไรเลย!

 [🇸🇦 ภาษาอาหรับ](../ar/README.md)
 [🇧🇩 เบงกาลี](../bn/README.md)
 [🇩🇪 ภาษาเยอรมัน](../de/README.md)
 [🇺🇸 ภาษาอังกฤษ](../th/README.md)
 [🇪🇸 ภาษาสเปน](../es/README.md)
 [🇫🇷 ภาษาฝรั่งเศส](../fr/README.md)
 [🇹🇩 เฮาซา](../ha/README.md)
 [🇮🇳 ฮินดี](../hi/README.md)
 [🇮🇩 ชาวอินโดนีเซีย](../id/README.md)
 [🇮🇹 ภาษาอิตาลี](../it/README.md)
 [🇯🇵 ญี่ปุ่น](../ja/README.md)
 [🇰🇷 ภาษาเกาหลี](../ko/README.md)
 [🇮🇳 มารันตี](../mr/README.md)
 [🇵🇱 โปแลนด์](../pl/README.md)
 [🇧🇷 ภาษาโปรตุเกส](../pt/README.md)
 [🇷🇺 รัสเซีย](../ru/README.md)
 [🇰🇪 สวาฮีลี](../sw/README.md)
 [🇵🇭 ภาษาตากาล็อก](../tl/README.md)
 [🇹🇷 ภาษาตุรกี](../tr/README.md)
 [🇵🇰 ภาษาอูรดู](../ur/README.md)
 [🇻🇳 ภาษาเวียดนาม](../vi/README.md)
 [🇨🇳 จีน](../zh/README.md)


 **[📚 ... ทุกภาษา ...](../README.md)**
 ----

 ### มีปัญหากับการแปล README นี้หรือไม่?
 การแปลเฉพาะของต้นฉบับ [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 อาจมีข้อบกพร่อง -- * ยินดีเป็นอย่างยิ่งที่จะแก้ไข! * โปรดส่ง [pull request บน GitHub](https://github.com/cobbzilla/yuebing/pulls)
 หรือถ้าไม่สะดวกใจ [open an issue](https://github.com/cobbzilla/yuebing/issues)

 เมื่อคุณสร้างปัญหา GitHub ใหม่เกี่ยวกับการแปล โปรดทำดังนี้
 * รวม URL ของหน้า (คัดลอก/วางจากแถบที่อยู่ของเบราว์เซอร์)
 * รวมข้อความที่ไม่ถูกต้อง (คัดลอก/วางจากเบราว์เซอร์)
 * กรุณาเสนอคำแนะนำในการแปลที่ดีกว่า
 * **ขอขอบคุณ!**

 # เนื้อหา
 * [ที่มา](#แหล่งที่มา)
 * [การสนับสนุนและการระดมทุน](#การสนับสนุนและการระดมทุน)
 * [การติดตั้ง](#การติดตั้ง)
 * [ตั้งค่า](#Setup)
 * [กำลังแปลไฟล์ทรัพยากรสตริง JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [การแปลไดเรกทอรีของไฟล์ข้อความ](#Translating-a-directory-of-text-files)
 * [ตัวเลือกอื่นๆ](#Other-options)

 ## แหล่งที่มา
 * [hokeylization บน GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization บน npm](https://www.npmjs.com/package/hokeylization)

 ## การสนับสนุนและเงินทุน
 ฉันกำลังพยายามเป็นนักพัฒนาซอฟต์แวร์โอเพ่นซอร์สมืออาชีพ ฉันเคยทำงานใน
 อุตสาหกรรมซอฟต์แวร์มาหลายปีแล้ว ฉันได้เริ่มต้นบริษัทที่ประสบความสำเร็จและขายให้กับบริษัทมหาชน
 ช่วงนี้ตกงาน ไม่มีงานอื่นเข้าแถวเลย

 ฉันจะลองเขียนซอฟต์แวร์ที่เป็นประโยชน์และดูว่าได้ผลหรือไม่

 ฉันจะขอบคุณอย่างจริงใจแม้เพียงเล็กน้อย [การบริจาครายเดือนผ่าน Patreon](https://www.patreon.com/cobbzilla)

 ## การติดตั้ง
 ในการใช้เครื่องมือบรรทัดคำสั่ง ติดตั้งโดยใช้ `npm` หรือ `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 หากต้องการใช้เป็นไลบรารี่ ให้ติดตั้งเวอร์ชัน `lite` ซึ่งเล็กกว่ามาก:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 จากนั้นดูที่ความช่วยเหลือสำหรับคำสั่ง `hokey` :

    hokey --help
    hokey -h

 ต้องการดูผลลัพธ์ในภาษาของคุณหรือภาษาอื่นหรือไม่?

 `hokey` พยายามตรวจจับภาษาโดยอัตโนมัติจากตัวแปรสภาพแวดล้อมของเชลล์ของคุณ

 คุณบังคับภาษาได้โดยการตั้งค่าตัวแปรสภาพแวดล้อม `LC_ALL` :

    LC_ALL=it hokey --help

 โปรดทราบว่าหากคุณได้ติดตั้ง `hokeylization-lite` แล้ว command help จะใช้ได้เฉพาะในภาษาอังกฤษ

 ## ติดตั้ง
 ตั้งค่าตัวแปรสภาพแวดล้อม `GOOGLE_TRANSLATE_PROJECT_ID` เพื่อระบุโครงการ Google แปลภาษาของคุณ

 ตั้งค่าตัวแปรสภาพแวดล้อม `GOOGLE_APPLICATION_CREDENTIALS` เป็นข้อมูลรับรอง JSON ที่คุณดาวน์โหลด
 หลังจากค้นหาวิธีการตรวจสอบสิทธิ์บน Google Cloud ได้อย่างไร (ก็สนุกดี)

 หากคุณเรียกใช้จากซอร์สโค้ด คุณสามารถใส่ไฟล์เหล่านี้ในไฟล์ `.env` ในซอร์ส
 ไดเร็กทอรีที่จะโหลดตอนรันไทม์ผ่าน [dotenv](https://www.npmjs.com/package/dotenv)

 ## กำลังแปลไฟล์ทรัพยากรสตริง JavaScript
 ตารางสตริงของคุณ **ต้อง** อยู่ในไฟล์ JavaScript ในรูปแบบใดรูปแบบหนึ่งจากสองรูปแบบนี้:

 การส่งออก ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 การส่งออก CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 หากไฟล์นี้ชื่อ `myfile.en.js` คุณสามารถแปลเป็นภาษาสเปนและเยอรมันด้วย:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` ในด้านบนเป็นแบบพิเศษ -- เป็นคำสงวนในเครื่องมือนี้!

 `LANG` ถูกแทนที่ด้วยรหัสภาษาสำหรับไฟล์เอาต์พุต

 ดังนั้นคำสั่งดังกล่าวจึงสร้างไฟล์:

    myfile.es.js
    myfile.de.js

 ตัวเลือก `-l` / `--languages` --languages' คือรายการรหัสภาษา ISO ที่คั่นด้วยเครื่องหมายจุลภาค
 [รองรับโดย Google แปลภาษา](https://cloud.google.com/translate/docs/languages)

 หากมีไฟล์เอาต์พุตอยู่แล้ว ไฟล์จะถูกตรวจสอบเพื่อพิจารณาว่าคีย์ใดมีอยู่แล้ว
 คีย์ที่มีอยู่จะไม่ถูกแปล การแปลสำหรับคีย์ที่หายไปจะถูกสร้างและต่อท้าย
 ไปที่ส่วนท้ายของวัตถุ JS ไฟล์ทั้งหมดจะถูกเขียนใหม่เสมอ

 หากต้องการบังคับให้แปลคีย์ทั้งหมดใหม่ ให้ใช้ตัวเลือก `-f` / `--force`

 ## กำลังแปลไดเร็กทอรีของไฟล์ข้อความ
 คุณยังสามารถแปลไดเร็กทอรีของไฟล์ได้อีกด้วย hokeylization จะไปเยี่ยมทุก ๆ ซ้ำ ๆ
 ไฟล์ในไดเร็กทอรีและเรียกใช้เนื้อหาผ่าน Google Translate และบันทึกผลลัพธ์
 ไปยังไฟล์ที่มีชื่อเหมือนกันในแผนผังไดเร็กทอรีแยกต่างหาก

 เมื่อเป้าหมายของการแปลของคุณคือไดเร็กทอรี โหมดนี้จะเปิดใช้งาน

 ตัวเลือก `-o` / `--outfile` ระบุไดเร็กทอรีเอาต์พุต

 **คำเตือนใหญ่**: เมื่อแปลไดเร็กทอรี **อย่า** ระบุไดเร็กทอรีเอาต์พุต
 ที่อยู่ในไดเร็กทอรีอินพุตของคุณ! หากคุณทำเช่นนี้ คุณจะ:
 * ชักนำให้เกิดการเรียกซ้ำที่ไม่สิ้นสุด
 * เปิดบิล Google ของคุณ
 * เติมดิสก์ของคุณ
 * สนุกน้อยลง

 นี่คือตัวอย่างของสิ่งที่ *ไม่ควรทำ*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 เมื่อดำเนินการนี้ ไฟล์ที่แปลแล้วจะถูกเขียนไปยัง `templates/es` และกลายเป็นไฟล์ใหม่
 ไฟล์ต้นฉบับที่จะแปล เนื่องจากอยู่ภายใต้ `templates/` - กระบวนการนี้ยังคงดำเนินต่อไป
 ตลอดไปอย่าทำ!

 #### การใช้งานที่ถูกต้อง
 ตกลง สมมติว่าคุณมีเทมเพลตอีเมลบางส่วนในไดเรกทอรี:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 หากต้องการแปลสิ่งเหล่านี้เป็นภาษาสเปนและเยอรมัน ให้เรียกใช้:

    hokey -l es,de -o templates/email/LANG templates/email/en

 ข้างต้น `LANG` เป็นคำสงวนและจะถูกแทนที่ด้วยรหัสภาษา ISO

 จะเกิดอะไรขึ้นเมื่อการทำงานข้างต้นทำงาน:
 * ไดเร็กทอรี ` `templates/email/es` และ `templates/email/de` จะถูกสร้างขึ้น (หากไม่มีอยู่)
 * ทุกไฟล์ใน `templates/email/en` จะถูกแปลเป็นภาษาสเปนและเยอรมัน
 * ไฟล์เอาต์พุตที่มีอยู่จะไม่ถูกสร้างขึ้นใหม่เว้นแต่คุณจะใช้ `-f` / `--force`
 * คุณจะจบลงด้วยโครงสร้างไดเร็กทอรีและไฟล์ที่เหมือนกันภายใน `es` และ `de` เช่นเดียวกับที่คุณมีภายใต้ `en`

 ## ตัวเลือกอื่น

 ### วิ่งแห้ง
 ผ่าน `-n` / `--dry-run` เพื่อแสดงสิ่งที่จะทำ แต่อย่าทำการเรียก API หรือเขียนไฟล์ใดๆ

 ### บังคับ
 ส่ง `-f` / `--force` เพื่อสร้างการแปลใหม่เสมอ แม้ว่าจะมีอยู่แล้วก็ตาม

 ### การแข่งขัน
 ส่ง `-m` / `--match` เพื่อจำกัดไฟล์ที่ประมวลผลเมื่อรันในโหมดไดเรกทอรี

 คุณอาจไม่ต้องการแปล *ทุกไฟล์* ในไดเร็กทอรีต้นทางไปยังไดเร็กทอรีเป้าหมายของคุณเสมอไป

 ค่าของตัวเลือก `-m` " / `--match` คือ regex (ระวังกฎการเสนอราคาเชลล์!) ที่ระบุ
 ไฟล์ไหนควรแปล

 หากมีข้อสงสัย คุณสามารถรวมตัวเลือกนี้กับ `-n` / `--dry-run` เพื่อดูว่าไฟล์ใดจะถูกแปล

 ### ไม่รวม
 บางครั้ง `-m` ของคุณตรงกับไฟล์มากเกินไป ใช้ตัวเลือก `-e` / `--excludes` เพื่อยกเว้นอย่างชัดเจน
 ไฟล์ที่มิฉะนั้นจะมีการจับคู่

 คุณสามารถแสดงรายการ regexes ได้หลายรายการ โดยคั่นด้วยช่องว่าง

 การใช้งานทั่วไปจะเป็น: `--excludes node_modules dist \.git build tmp`

 ### แฮนด์บาร์
 สตริงที่จะแปลอาจมีเทมเพลต `{{ handlebars }}` ที่มีวงเล็บปีกกาสองหรือสามอัน

 คุณอาจ *ไม่* ต้องการให้แปลเนื้อหาในเทมเพลตเหล่านั้น

 ผ่าน `-H` / `--handlebars` และสิ่งใดที่อยู่ภายใน `{{ ... }}` จะไม่ถูกแปล

 ### มาร์คดาวน์
 Markdown ไม่ใช่ข้อความหรือ html ดังนั้น Google แปลภาษาจึงมีปัญหาบางอย่าง

 `-M` / `--markdown` ช่วยให้สามารถจัดการไฟล์ markdown แบบพิเศษได้

 Hokeylizer จัดการกับสิ่งต่าง ๆ ได้ดี แต่ด้วยไฟล์ markdown คุณอาจพบปัญหาเหล่านี้บ่อยครั้ง:
 * ลิงค์เสีย ในการแปล อักขระเว้นวรรคจะปรากฏขึ้นหลังจากคำอธิบายลิงก์ markdown สิ้นสุด (ด้วย `]` ) และ
 ก่อนที่ลิงค์เป้าหมายจะเริ่มต้น (ด้วย `(` ) สิ่งนี้ทำให้ markdown แสดงผลไม่ถูกต้อง และ link
 เสียเมื่อดูเอกสาร
 * บล็อกโค้ดได้รับการแปล Google แปลภาษาไม่ทราบว่ามาร์กดาวน์ใดที่พิจารณาโค้ดและสิ่งใดที่ไม่เป็นเช่นนั้น
 * ระยะห่างไม่ถูกต้องสำหรับบล็อคโค้ดที่เยื้อง การเว้นวรรคเป็นเรื่องยากที่จะรักษาในการแปล
 * สิ่งที่อยู่ภายใน `backticks` จะได้รับการแปลเมื่อคุณต้องการให้มันเป็นค่าตามตัวอักษร

 เมื่อเปิดใช้งานแฟล็ `-M` / `--markdown` :
 * รูปแบบ `] (` จะถูกย่อเป็น `](` ดังนั้นจึงแก้ไขลิงก์ markdown ที่เสียหาย
 * เสื้อคลุม "ไม่มีการแปล" จะถูกวางไว้รอบ ๆ บล็อคโค้ดที่เยื้อง รักษาการเยื้องที่เหมาะสม และทำให้แน่ใจว่าไม่ได้แปล
 * เสื้อคลุม "ไม่มีการแปล" จะถูกวางไว้รอบข้อความภายใน `backticks` เพื่อให้แน่ใจว่าไม่ได้แปล

 ### กระบวนการเป็น
 โดยปกติทุกอย่างจะถูกประมวลผลเป็นข้อความธรรมดา

 หากเนื้อหาของคุณเป็น HTML เนื้อหาจะเสียหายเว้นแต่คุณจะผ่านตัวเลือก `-p html` / `--process-as html`

 ### กรอง
 สำหรับการผจญภัย: เมื่อประมวลผลไฟล์ในไดเร็กทอรี คุณสามารถส่งตัวเลือก `-F` / `--filter`
 เพื่อกรองเอาท์พุตก่อนที่จะเขียนลงระบบไฟล์

 ค่าของตัวเลือกนี้ต้องเป็นพาธไปยังไฟล์ JS ที่ส่งออกฟังก์ชันชื่อ `filter`

 ฟังก์ชัน `filter` ต้องเป็น `async` `await` เพราะระบบจะเรียกใช้ "รอ"

 ก่อนที่ไฟล์จะถูกเขียนลงดิสก์ เนื้อหาไฟล์ทั้งหมดจะถูกส่งไปยังฟังก์ชัน `filter` เป็นสตริง

 ค่าส่งคืนจากฟังก์ชัน `filter` คือสิ่งที่จะถูกเขียนไปยัง storage จริงๆ

 ดังนั้นคุณจึงสามารถควบคุมสิ่งที่จะเขียนได้ในที่สุด

 ### ช่วย
 ใช้ `-h` / `--help` เพื่อแสดงความช่วยเหลือ

 ## แปลอย่างมีความสุข!

</pre>