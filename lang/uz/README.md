Hokeylizatsiya
 ==============
 Bu portmanto bo'lib, "xokey mahalliylashtirish" degan ma'noni anglatadi.

 Bu xokey, chunki bu juda oddiy: u Google Tarjimonga satrlarni yuboradi

 Siz tarjima qilishingiz mumkin:
 * xabarlarni o'z ichiga olgan JavaScript ob'ekti
 * rekursiv fayllar katalogi

 # Buni boshqa tilda o'qing
 Ushbu README.md hujjati hokeylizatsiya vositasi yordamida tarjima qilingan
 **[Google Translate tomonidan qo‘llab-quvvatlanadigan barcha tillar](https://cloud.google.com/translate/docs/languages)!**

 Ishonchim komilki, bu mukammal emas, lekin umid qilamanki, bu hech narsadan yaxshiroq!

 [🇸🇦 Arabcha](../ar/README.md)
 [🇧🇩 Bengal](../bn/README.md)
 [🇩🇪 Nemis](../de/README.md)
 [🇺🇸 Ingliz tili](../en/README.md)
 [🇪🇸 Ispancha](../es/README.md)
 [🇫🇷 Fransuzcha](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indoneziya](../id/README.md)
 [🇮🇹 Italiancha](../it/README.md)
 [🇯🇵 Yaponcha](../ja/README.md)
 [🇰🇷 Koreys](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polsha](../pl/README.md)
 [🇧🇷 Portugalcha](../pt/README.md)
 [🇷🇺 Ruscha](../ru/README.md)
 [🇰🇪 Suahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turkcha](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vetnamcha](../vi/README.md)
 [🇨🇳 Xitoy](../zh/README.md)


 **[📚 ... Barcha tillar ...](../README.md)**
 ----

 ### README tarjimasida muammo bormi?
 Asl nusxaning ushbu maxsus tarjimasi [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 noto'g'ri bo'lishi mumkin -- *tuzatishlar qabul qilinadi!* Iltimos, [GitHub'da tortish so'rovi](https://github.com/cobbzilla/yuebing/pulls) yuboring
 yoki buni qilish sizga mos kelmasa, [muammoni oching](https://github.com/cobbzilla/yuebing/issues)

 Tarjima haqida yangi GitHub muammosini yaratganingizda, iltimos:
 * sahifa URL manzilini qo'shing (brauzer manzil satridan nusxalash/joylashtirish)
 * noto'g'ri bo'lgan aniq matnni kiriting (brauzerdan nusxalash/joylashtirish)
 * Yaxshiroq tarjima taklifini bering
 * **Rahmat!**

 # Tarkib
 * [Manba](#Manba)
 * [Yordam va moliyalashtirish](#Yordam va moliyalashtirish)
 * [O'rnatish](#O'rnatish)
 * [Sozlash](#Sozlash)
 * [JavaScript string manba faylini tarjima qilish](#Translating-a-JavaScript-string-resource-fayl)
 * [Matnli fayllar katalogini tarjima qilish](#Matnli fayllar katalogini tarjima qilish)
 * [Boshqa variantlar](#Boshqa variantlar)

 ## Manba
 * [GitHub-da hokeylizatsiya](https://github.com/cobbzilla/hokeylization)
 * [npm da hokeylizatsiya](https://www.npmjs.com/package/hokeylization)

 ## Qo'llab-quvvatlash va moliyalashtirish
 Men professional ochiq kodli dasturiy ta'minot ishlab chiqaruvchisi bo'lishga harakat qilaman. Men ishlaganman
 ko'p yillar davomida dasturiy ta'minot sanoatida men muvaffaqiyatli kompaniyalarni ishga tushirdim va ularni ommaviy kompaniyalarga sotdim.
 Yaqinda men ishimni yo'qotdim va boshqa ishim yo'q

 Shuning uchun men foydali dasturiy ta'minot yozishga harakat qilaman va bu ishlayotganligini tekshiraman

 Men hatto eng kichik [Patreon orqali oylik hissa] uchun chin dildan minnatdorman (https://www.patreon.com/cobbzilla)

 ## O'rnatish
 Buyruqlar qatori vositasidan foydalanish uchun " `npm` yoki `yarn` " yordamida o'rnating:

    npm install -g hokeylization
    yarn global add hokeylization

 Kutubxona sifatida foydalanish uchun ancha kichikroq `lite` versiyasini o'rnating:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Keyin " `hokey` buyrug'i uchun yordamga qarang:

    hokey --help
    hokey -h

 O'z tilingizda yoki boshqa tilda chiqishni ko'rishni xohlaysizmi?

 " `hokey` " sizning qobiq muhit o'zgaruvchilaridan tilni avtomatik ravishda aniqlashga harakat qiladi

 “ `LC_ALL` muhit oʻzgaruvchisini oʻrnatish orqali tilni majburlashingiz mumkin:

    LC_ALL=it hokey --help

 E'tibor bering, agar siz " `hokeylization-lite` " ni o'rnatgan bo'lsangiz, buyruq yordami faqat ingliz tilida mavjud

 ## Sozlash; o'rnatish
 Google Translate loyihangizni aniqlash uchun `GOOGLE_TRANSLATE_PROJECT_ID` muhit oʻzgaruvchisini oʻrnating

 “ `GOOGLE_APPLICATION_CREDENTIALS` ” muhit oʻzgaruvchisini siz yuklab olgan JSON hisob maʼlumotlariga oʻrnating
 autentifikatsiya Google bulutida qanday ishlashini aniqlagandan so'ng (bu qiziqarli bo'lishi mumkin)

 Agar siz manba kodidan ishlayotgan bo'lsangiz, ularni manbadagi " `.env` " fayliga ham qo'yishingiz mumkin
 katalogga ular ish vaqtida [dotenv] orqali yuklanadi (https://www.npmjs.com/package/dotenv)

 ## JavaScript string resurs faylini tarjima qilish
 Sizning string jadvalingiz **kerak** quyidagi ikki shakldan birida JavaScript faylida bo'lishi kerak:

 ES6 eksporti:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS eksporti

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Agar bu fayl `myfile.en.js` deb nomlangan boʻlsa, uni ispan va nemis tillariga quyidagi bilan tarjima qilishingiz mumkin:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Yuqoridagi `LANG` maxsus -- bu vositada ajratilgan so'z!

 “ `LANG` ” chiqish fayllari uchun til kodi bilan almashtiriladi

 Shunday qilib, yuqoridagi buyruq fayllarni yaratadi:

    myfile.es.js
    myfile.de.js

 `-l` / `--languages` varianti ISO til kodlarining vergul bilan ajratilgan ro`yxatidir.
 [Google Translate tomonidan qo'llab-quvvatlanadi](https://cloud.google.com/translate/docs/languages)

 Agar chiqish fayli allaqachon mavjud bo'lsa, u qaysi kalitlar mavjudligini aniqlash uchun tekshiriladi.
 Mavjud kalitlar tarjima qilinmaydi. Yo'qolgan kalitlar uchun tarjimalar yaratiladi va qo'shiladi
 JS ob'ektining oxirigacha. Butun fayl har doim qayta yoziladi.

 Barcha kalitlarni qayta tarjima qilishga majburlash uchun “ `-f` / “ `--force` opsiyasidan foydalaning

 ## Matnli fayllar katalogini tarjima qilish
 Siz fayllar katalogini ham tarjima qilishingiz mumkin. hokeylizatsiya har biriga rekursiv tashrif buyuradi
 faylni katalogga kiriting va uning mazmunini Google Translate orqali ishga tushiring va natijani saqlang
 alohida katalog daraxtidagi bir xil nomdagi faylga

 Tarjimangizning maqsadi katalog bo'lsa, bu rejim yoqiladi

 `-o` / `--outfile` opsiyasi chiqish katalogini belgilaydi

 **KATTA OGOHLANTIRISH**: Kataloglarni tarjima qilishda, **MAG**** chiqish katalogini ko'rsating.
 bu sizning kirish katalogingizda! Agar buni qilsangiz, siz:
 * cheksiz rekursiyani keltirib chiqaradi
 * Google hisobingizni oshiring
 * diskingizni to'ldiring
 * kamroq zavqlaning

 Bu erda nima qilmaslik kerakligi haqidagi misol:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Bu ishga tushganda, tarjima qilingan fayllar `templates/es` ga yoziladi va shu bilan yangi bo'ladi
 tarjima qilish uchun manba fayllar, chunki ular " `templates/` " ostida -- bu jarayon davom etadi
 abadiy, buni qilmang!

 #### To'g'ri foydalanish
 OK, deylik, katalogda elektron pochta shablonlari mavjud:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Bularning barchasini ispan va nemis tillariga tarjima qilish uchun quyidagilarni bajaring:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Yuqoridagi `LANG` ajratilgan so'z bo'lib, ISO til kodi bilan almashtiriladi

 Yuqoridagilar bajarilganda nima bo'ladi:
 * `templates/email/es` va `templates/email/de` kataloglari yaratiladi (agar ular mavjud bo'lmasa)
 * `templates/email/en` har bir fayl ispan va nemis tillariga tarjima qilinadi
 * Mavjud chiqish fayllari `-f` / `--force` ishlatilmaguningizcha qayta tiklanmaydi.
 * Siz `en` ostida bo'lgani kabi `es` va `de` ichida bir xil katalog tuzilmasi va fayllarga ega `en` .

 ## Boshqa variantlar

 ### Quruq yugurish
 Nima qilish kerakligini ko'rsatish uchun `-n` / `--dry-run` ni o'tkazing, lekin aslida hech qanday API qo'ng'iroqlarini qilmang yoki hech qanday fayl yozmang

 ### Kuch
 Tarjimalarni, hatto ular allaqachon mavjud boʻlsa ham, har doim qayta tiklash uchun `-f` / `--force` ” tugmalarini oʻtkazing

 ### Moslik
 Katalog rejimida ishlayotgan fayllarni qayta ishlashni cheklash uchun `-m` / `--match` ni o'tkazing

 Siz har doim ham manba katalogingizdagi *har bir* faylni maqsadli katalogingizga tarjima qilishni xohlamasligingiz mumkin

 `-m` / `--match` parametrining qiymati regexdir (qobiq iqtibos qoidalariga ehtiyot bo`ling!)
 qaysi fayllarni tarjima qilish kerak

 Agar shubhangiz bo'lsa, qaysi fayllar tarjima qilinishini ko'rish uchun ushbu parametrni `-n` / `--dry-run` bilan birlashtira olasiz.

 ### Istisno
 Ba'zan `-m` juda ko'p fayllarga mos keladi. Aniq istisno qilish uchun `-e` / `--excludes` variantidan foydalaning
 aks holda mos keladigan fayllar

 Siz bo'sh joylar bilan ajratilgan bir nechta regexlarni ro'yxatga olishingiz mumkin

 Umumiy foydalanish: `--excludes node_modules dist \.git build tmp`

 ### Tutqichlar
 Tarjima qilinadigan satrlar ikki yoki uchta jingalak `{{ handlebars }}` shablonlarini o'z ichiga olishi mumkin.

 Siz oʻsha andozalar ichidagi maʼlumotlar tarjima qilinishini istamaysiz

 `-H` / `--handlebars` bayrog'ini o'tkazing va `{{ ... }}` ichidagi hech narsa tarjima qilinmaydi

 ### Belgilanish
 Markdown matn ham, html ham emas, shuning uchun Google Tarjimonda u bilan ba'zi qiyinchiliklar mavjud

 `-M` / `--markdown` markdown fayllari uchun maxsus ishlov berish imkonini beradi

 Markdown fayllari bilan " `-M` bayrog'idan foydalanmasangiz, ehtimol siz quyidagi muammolarni topasiz:
 * Buzilgan havolalar. Tarjimada belgilash havolasi tavsifi tugagandan so'ng bo'sh joy belgisi paydo bo'ladi ( `]` bilan), lekin
 maqsadli havola boshlanishidan oldin ( `(` ) bilan). Bu belgining notoʻgʻri koʻrsatilishiga olib keladi va havola
 hujjatni ko'rishda buziladi.
 * Kod bloklari tarjima qilinadi. Google tarjimoni markdown nima kod deb hisoblanishini va nima emasligini bilmaydi
 * Chiqib ketgan kod bloklari uchun noto'g'ri oraliq. Tarjimada intervallarni saqlash qiyin
 * " `backticks` " ichidagi narsalar deyarli har doim tom ma'noda bo'lishini xohlasangiz, tarjima qilinadi.

 `-M` / `--markdown` bayrog'i yoqilganda:
 * `](` naqsh `](` `](` qisqartiriladi, shu bilan buzilgan belgilash havolalarini tuzatadi.
 * "Tarjima qilinmagan" o'rami chuqurlashtirilgan kod bloklari atrofida joylashtiriladi, bu to'g'ri chekinishni saqlaydi va ular tarjima qilinmasligini ta'minlaydi.
 * "Tarjima qilinmagan" o'rami matnning tarjima qilinmasligiga ishonch hosil qilish uchun " `backticks` " ichidagi matn atrofida joylashtiriladi.

 ### Jarayon sifatida
 Odatda hamma narsa oddiy matn sifatida qayta ishlanadi

 Agar kontentingiz HTML bo'lsa, `-p html` / `--process-as html` opsiyasidan o'tmasangiz, u buziladi.

 ### Filtr
 Sarguzashtlar uchun: katalogdagi fayllarni qayta ishlashda siz `-F` / `--filter` opsiyasidan o`tishingiz mumkin.
 chiqish fayl tizimiga yozilgunga qadar filtrlash uchun

 Ushbu parametr qiymati `filter` nomli funksiyani eksport qiluvchi JS fayliga yoʻl boʻlishi kerak

 " `filter` " funksiyasi " `async` " bo'lishi kerak, chunki u " `await` " deb chaqiriladi

 Fayllar diskka yozilishidan oldin butun fayl mazmuni " `filter` funksiyasiga satr sifatida uzatiladi.

 " `filter` funksiyasidan qaytariladigan qiymat aslida saqlashga yoziladigan narsadir

 Shunday qilib, siz oxirida nima yozilishini to'liq nazorat qilasiz

 ### Yordam bering
 Yordamni ko'rsatish uchun `-h` / `--help` dan foydalaning

 ## Baxtli tarjima!

</pre>
