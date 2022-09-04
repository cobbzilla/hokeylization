Hokeylization
 =============
 Jeneng kasebut minangka portmanteau, tegese 'lokalisasi hokey'

 Iku hokey amarga iku banget prasaja: ngirim strings menyang Google Translate

 Sampeyan bisa nerjemahake:
 * obyek JavaScript sing ngemot pesen
 * direktori file, rekursif

 # Waca iki ing basa liya
 Dokumen README.md iki wis diterjemahake, nggunakake alat hokeylization dhewe,
 menyang **[saben basa sing didhukung Google Translate](../README.md)!**

 Aku yakin ora sampurna, nanging muga-muga luwih apik tinimbang ora ana!

 [🇸🇦 Arab](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Jerman](../de/README.md)
 [🇺🇸 Inggris](../id/README.md)
 [🇪🇸 Spanyol](../es/README.md)
 [🇫🇷 Prancis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesia](../id/README.md)
 [🇮🇹 Italia](../it/README.md)
 [🇯🇵 Jepang](../ja/README.md)
 [🇰🇷 Korea](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polandia](../pl/README.md)
 [🇧🇷 Portugis](../pt/README.md)
 [🇷🇺 Rusia](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turki](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnam](../vi/README.md)
 [🇨🇳 Cina](../zh/README.md)


 **[📚 ... Kabeh Basa ...](../README.md)**
 ----

 ### Apa ana masalah karo terjemahan README iki?
 Terjemahan khusus iki saka [README] asli (https://github.com/cobbzilla/yuebing/blob/master/README.md)
 bisa uga ana cacat -- *koreksi banget ditampa!* Kirimi [panyuwunan tarik ing GitHub](https://github.com/cobbzilla/yuebing/pulls),
 utawa yen sampeyan ora kepenak nglakoni, [mbukak masalah](https://github.com/cobbzilla/yuebing/issues)

 Nalika sampeyan nggawe masalah GitHub anyar babagan terjemahan, mangga tindakake:
 * kalebu URL kaca (salinan / tempel saka bilah alamat browser)
 * Lebokna teks pas sing salah (salin/tempel saka browser)
 * nyuwun saran terjemahan sing luwih apik
 **Matur nuwun!**

 # Isi
 * [Sumber](#Sumber)
 * [Dhukungan lan Pendanaan](#Support-and-Funding)
 * [Pasang](#Pasang)
 * [Setup](#Setup)
 * [Nerjemahake file sumber daya string JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Nerjemahake direktori file teks](#Translating-a-directory-of-text-files)
 * [Opsi liyane](#Opsi-Other)

 ## Sumber
 * [hokeylization ing GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization ing npm](https://www.npmjs.com/package/hokeylization)

 ## Dhukungan lan Pendanaan
 Aku nyoba dadi pangembang piranti lunak sumber terbuka profesional. Aku wis kerja ing
 industri lunak kanggo akèh taun, Aku wis miwiti perusahaan sukses lan didol menyang perusahaan umum.
 Bubar iki aku kelangan pegaweyan, lan aku ora duwe gaweyan liyane

 Dadi aku bakal nyoba nulis piranti lunak sing migunani lan ndeleng manawa bisa digunakake

 Aku bakal ngormati sing paling cilik [kontribusi saben wulan liwat Patreon] (https://www.patreon.com/cobbzilla)

 ## Instalasi
 Kanggo nggunakake alat baris perintah, instal nggunakake `npm` utawa `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Kanggo digunakake minangka perpustakaan, instal versi `lite` , sing luwih cilik:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Banjur goleki pitulung kanggo perintah `hokey` :

    hokey --help
    hokey -h

 Pengin ndeleng output ing basa utawa basa liyane?

 `hokey` nyoba ndeteksi basa kanthi otomatis saka variabel lingkungan cangkang sampeyan

 Sampeyan bisa meksa basa kanthi nyetel variabel lingkungan `LC_ALL` :

    LC_ALL=it hokey --help

 Elinga yen sampeyan wis nginstal `hokeylization-lite` , bantuan printah mung kasedhiya ing basa Inggris

 ## Setup
 Setel variabel lingkungan `GOOGLE_TRANSLATE_PROJECT_ID` kanggo ngenali proyek Google Translate sampeyan

 Setel variabel lingkungan `GOOGLE_APPLICATION_CREDENTIALS` menyang kredensial JSON sing diundhuh
 sawise ngerteni cara otentikasi ing awan Google (bisa nyenengake)

 Yen sampeyan mbukak saka kode sumber, sampeyan uga bisa nyelehake iki ing file `.env` ing sumber kasebut
 direktori bakal dimuat nalika runtime liwat [dotenv](https://www.npmjs.com/package/dotenv)

 ## Nerjemahake file sumber string JavaScript
 Tabel string **kudu** ana ing file JavaScript ing salah siji saka rong formulir iki:

 Ekspor ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Ekspor CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Yen file iki dijenengi `myfile.en.js` , sampeyan bisa nerjemahake menyang Spanyol lan Jerman nganggo:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` ing ndhuwur iku khusus - iki minangka tembung sing dilindhungi ing piranti iki!

 `LANG` diganti karo kode basa kanggo file output

 Mangkono printah ing ndhuwur nggawe file:

    myfile.es.js
    myfile.de.js

 `-l` / `--languages` minangka dhaptar kode basa ISO sing dipisahake koma
 [didhukung Google Terjemahan](https://cloud.google.com/translate/docs/languages)

 Yen file output wis ana, bakal ditliti kanggo nemtokake kunci sing wis ana.
 Tombol sing ana ora bakal diterjemahake. Terjemahan kanggo kunci sing ilang bakal digawe lan ditambahake
 kanggo mburi obyek JS. Kabeh file tansah ditulis maneh.

 Kanggo meksa terjemahan maneh kabeh tombol, gunakake `-f` / `--force`

 ## Nerjemahake direktori file teks
 Sampeyan uga bisa nerjemahake direktori file. hokeylization bakal recursively ngunjungi saben
 file ing direktori lan mbukak isine liwat Google Translate, lan simpen output
 menyang file kanthi jeneng sing padha ing wit direktori sing kapisah

 Yen target terjemahan sampeyan yaiku direktori, mode iki diaktifake

 `-o` / `--outfile` nemtokake direktori output

 **PÈNGET BESAR**: Nalika nerjemahake direktori, **Aja** nemtokake direktori output
 sing ana ing direktori input sampeyan! Yen sampeyan nindakake iki, sampeyan bakal:
 * ngindhuksi rekursi tanpa wates
 * mbukak tagihan Google sampeyan
 * ngisi disk sampeyan
 *kurang seneng

 Iki minangka conto * sing ora kudu ditindakake *:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Nalika iki mlaku, file terjemahan ditulis menyang `templates/es` , lan dadi anyar
 file sumber kanggo nerjemahake, amarga ana ing `templates/` -- proses iki terus
 ing salawas-lawase, aja nglakoni!

 #### Panggunaan sing bener
 OK, umpamane sampeyan duwe sawetara template email ing direktori:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Kanggo nerjemahake kabeh iki menyang Spanyol lan Jerman, bukak:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Ing ndhuwur, `LANG` minangka tembung sing dilindhungi lan bakal diganti karo kode basa ISO

 Apa sing kedadeyan nalika ndhuwur mlaku:
 * `templates/email/es` lan `templates/email/de` bakal digawe (yen ora ana)
 * Saben file ing `templates/email/en` bakal diterjemahake menyang Spanyol lan Jerman
 * File output sing ana ora bakal digawe maneh kajaba sampeyan nggunakake `-f` / `--force`
 * Sampeyan bakal entuk struktur direktori lan file sing padha ing `es` lan `de` kaya sing sampeyan duwe `en`

 ## Pilihan liyane

 ### Lari garing
 Lulus `-n` / `--dry-run` kanggo nampilake apa sing bakal ditindakake, nanging aja nggawe panggilan API utawa nulis file apa wae

 ### Paksa
 `-f` / `--force` kanggo tansah ngasilake terjemahan, sanajan terjemahan kasebut wis ana

 ### Cocokake
 `-m` / `--match` kanggo mbatesi file sing diproses nalika mlaku ing mode direktori

 Sampeyan bisa uga ora mesthi pengin nerjemahake *saben* file ing direktori sumber menyang direktori target

 Nilai saka `-m` / `--match` yaiku regex (ati-ati aturan ngutip cangkang!) sing nemtokake
 file sing kudu diterjemahake

 Yen ragu, sampeyan bisa gabungke pilihan iki karo `-n` / `--dry-run` kanggo ndeleng file sing bakal diterjemahake

 ### Ora kalebu
 Kadhangkala `-m` cocog karo akeh file. Gunakake `-e` / `--excludes` kanggo ngilangi kanthi jelas
 file sing digunakake bakal cocog

 Sampeyan bisa dhaptar macem-macem regex, dipisahake kanthi spasi

 Panggunaan umum yaiku: `--excludes node_modules dist \.git build tmp`

 ### Setang
 String sing arep diterjemahake bisa uga ngemot cithakan `{{ handlebars }}` , kanthi rong utawa telung kurung kriting.

 Sampeyan mbokmenawa * ORA * pengin barang sing ana ing cithakan kasebut diterjemahake

 Lewati gendéra `-H` / `--handlebars` , lan apa wae ing `{{ ... }}` ora bakal diterjemahake

 ### Markdown
 Markdown dudu teks utawa html, mula Google Translate duwe sawetara kesulitan

 `-M` / `--markdown` mbisakake penanganan khusus kanggo file markdown

 Hokeylizer nangani samubarang kanthi apik, nanging kanthi file markdown, sampeyan bisa uga ngalami masalah iki:
 * Link rusak. Ing terjemahan, karakter spasi katon sawise deskripsi link markdown rampung (karo `]` ) nanging
 sadurunge pranala target diwiwiti (karo `(` ). Iki nyebabake markdown dadi salah, lan link
 rusak nalika ndeleng dokumen.
 * Blok kode diterjemahake. Google nerjemahake ora ngerti apa markdown dianggep kode lan apa ora
 * Spasi salah kanggo pamblokiran kode indented. Spasi angel dilestarekake ing terjemahan
 * Bab-bab `backticks` bakal diterjemahake, yen sampeyan pengin dadi nilai harfiah

 Nalika `-M` / `--markdown` diaktifake:
 * Pola `] (` bakal dikondensasi dadi `](` saéngga ndandani pranala markdown sing rusak
 * Bungkus "ora ana terjemahake" bakal diselehake ing saubengé blok kode indentasi, njaga indentasi sing tepat lan mesthekake yen ora diterjemahake
 * Bungkus "ora ana terjemahake" bakal diselehake ing sakubenge teks ing `backticks` kanggo mesthekake yen ora diterjemahake

 ### Proses-minangka
 Biasane kabeh diproses minangka teks biasa

 Yen konten sampeyan HTML, bakal rusak kajaba sampeyan ngliwati `-p html` / `--process-as html`

 ### Filter
 Kanggo petualang: nalika ngolah file ing direktori, sampeyan bisa ngliwati pilihan `-F` / `--filter`
 kanggo nyaring output sadurunge ditulis menyang filesystem

 Nilai pilihan iki kudu dadi path menyang file JS sing ngekspor fungsi sing jenenge `filter`

 Fungsi `filter` kudu `async` amarga `await` bakal diarani

 Sadurunge file ditulis menyang disk, kabeh isi file bakal diterusake menyang fungsi `filter` minangka string

 Nilai bali saka fungsi `filter` yaiku apa sing bakal ditulis ing panyimpenan

 Mangkono, sampeyan duwe kontrol total babagan apa sing bakal ditulis

 ### Bantuan
 Gunakake `-h` / `--help` kanggo nuduhake pitulung

 ## Sugeng Nerjemahake!

</pre>
