Hokeylization
 =============
 Mengapa saya tidak boleh menjalankan keseluruhan apl atau tapak saya melalui Terjemahan Google dan mendapatkan terjemahan asas dalam bahasa lain?

 ***Sekarang kamu boleh!***

 Nama `hokeylization` ialah portmanteau, yang bermaksud 'penyetempatan hokey'

 Ia agak hokey kerana ia sangat mudah: ia menghantar rentetan ke Terjemahan Google

 Dan ia mudah, tetapi juga sangat berkuasa. Ia mempunyai sokongan khas untuk dokumen HTML,
 Templat [HandlebarsJS](https://handlebarsjs.com/),
 dan fail [Markdown](https://daringfireball.net/projects/markdown).

 Anda boleh menterjemah:
 * objek JavaScript yang mengandungi mesej
 * sebarang bilangan fail atau direktori, sentiasa merentasi direktori secara rekursif

 # Baca ini dalam bahasa lain
 Dokumen README.md ini telah diterjemahkan, menggunakan alat hokeylization itu sendiri, ke dalam
 **[setiap bahasa disokong oleh Terjemahan Google](https://cloud.google.com/translate/docs/languages)!**

 Saya pasti ia tidak sempurna, tetapi saya harap ia lebih baik daripada tiada!

 [🇸🇦 Bahasa Arab](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Jerman](../de/README.md)
 [🇺🇸 Bahasa Inggeris](../ms/README.md)
 [🇪🇸 Bahasa Sepanyol](../es/README.md)
 [🇫🇷 Perancis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesia](../id/README.md)
 [🇮🇹 Itali](../it/README.md)
 [🇯🇵 Jepun](../ja/README.md)
 [🇰🇷 Korea](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Poland](../pl/README.md)
 [🇧🇷 Portugis](../pt/README.md)
 [🇷🇺 Rusia](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turki](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnam](../vi/README.md)
 [🇨🇳 Cina](../zh/README.md)


 **[📚 ... Semua Bahasa ...](../README.md)**
 ----

 ### Adakah terdapat masalah dengan terjemahan README ini?
 Terjemahan khusus [README] asal ini (https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 mungkin cacat -- *pembetulan sangat dialu-alukan!* Sila hantar [permintaan tarik pada GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 atau jika anda tidak selesa berbuat demikian, [buka isu](https://github.com/cobbzilla/hokeylization/issues)

 Apabila anda membuat isu GitHub baharu tentang terjemahan, sila lakukan:
 * sertakan URL halaman (salin/tampal dari bar alamat penyemak imbas)
 * sertakan teks tepat yang salah (salin/tampal dari penyemak imbas)
 * sila terangkan apa yang salah -- adakah terjemahan itu salah? adakah pemformatan rosak entah bagaimana?
 * sila tawarkan cadangan terjemahan yang lebih baik, atau cara teks harus diformat dengan betul
 * **Terima kasih!**

 # Kandungan
 * [Sumber](#Source)
 * [Sokongan dan Pembiayaan](#Sokongan-dan-Pembiayaan)
 * [Pemasangan](#Pemasangan)
 * [Persediaan](#Persediaan)
 * [Menterjemah fail sumber rentetan JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Menterjemah direktori fail teks](#Translating-a-directory-of-text-files)
 * [Pilihan lain](#Other-options)
 * [Arahan kelompok JSON](#JSON-batch-commands)

 ## Sumber
 * [hokeylization pada GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization pada npm](https://www.npmjs.com/package/hokeylization)

 ## Sokongan dan Pembiayaan
 Saya cuba menjadi pembangun perisian sumber terbuka profesional. Saya telah bekerja di
 industri perisian selama bertahun-tahun, saya telah memulakan syarikat yang berjaya dan menjualnya kepada syarikat awam.
 Baru-baru ini saya kehilangan pekerjaan, dan saya tidak mempunyai sebarang kerja lain yang disediakan

 Jadi saya akan cuba menulis perisian yang berguna dan melihat sama ada ia berfungsi

 Saya amat menghargai walaupun yang terkecil [sumbangan bulanan melalui Patreon](https://www.patreon.com/cobbzilla)

 ## Pemasangan
 Untuk menggunakan alat baris arahan, pasang menggunakan `npm` atau `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Untuk digunakan sebagai pustaka, pasang versi `lite` , yang jauh lebih kecil:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Kemudian lihat bantuan untuk arahan `hokey` :

    hokey --help
    hokey -h

 Ingin melihat output dalam bahasa anda atau bahasa lain?

 `hokey` cuba mengesan bahasa secara automatik daripada pembolehubah persekitaran shell anda

 Anda boleh memaksa bahasa dengan menetapkan pembolehubah persekitaran `LC_ALL` :

    LC_ALL=it hokey --help

 Ambil perhatian bahawa jika anda telah memasang `hokeylization-lite` , bantuan arahan hanya tersedia dalam bahasa Inggeris

 ## Persediaan
 Tetapkan pembolehubah persekitaran `GOOGLE_TRANSLATE_PROJECT_ID` untuk mengenal pasti projek Terjemahan Google anda

 Tetapkan pembolehubah persekitaran `GOOGLE_APPLICATION_CREDENTIALS` kepada bukti kelayakan JSON yang anda muat turun
 selepas mengetahui cara pengesahan berfungsi pada awan Google (ia boleh menjadi menyeronokkan)

 Jika anda menjalankan kod sumber, anda juga boleh meletakkannya dalam fail `.env` dalam sumber
 direktori mereka akan dimuatkan pada masa jalan melalui [dotenv](https://www.npmjs.com/package/dotenv)

 ## Menterjemah fail sumber rentetan JavaScript
 Jadual rentetan anda **mesti** berada dalam fail JavaScript dalam salah satu daripada dua bentuk ini:

 Eksport ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Eksport CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Jika fail ini dinamakan `myfile.en.js` , anda boleh menterjemahkannya ke bahasa Sepanyol dan Jerman dengan:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` di atas adalah istimewa -- ia adalah perkataan terpelihara dalam alat ini!

 `LANG` digantikan dengan kod bahasa untuk fail output

 Oleh itu arahan di atas mencipta fail:

    myfile.es.js
    myfile.de.js

 Pilihan `-l` / `--languages` ialah senarai kod bahasa ISO yang dipisahkan koma
 [disokong oleh Terjemahan Google](https://cloud.google.com/translate/docs/languages)

 Jika fail output sudah wujud, ia akan diperiksa untuk menentukan kekunci yang sudah wujud.
 Kunci sedia ada tidak akan diterjemahkan. Terjemahan untuk kunci yang hilang akan dijana dan dilampirkan
 ke penghujung objek JS. Keseluruhan fail sentiasa ditulis semula.

 Untuk memaksa terjemahan semula semua kekunci, gunakan pilihan `-f` / `--force`

 ## Menterjemah direktori fail teks
 Anda juga boleh menterjemah direktori fail. hokeylization akan melawati setiap
 fail dalam direktori dan jalankan kandungannya melalui Terjemahan Google, dan simpan output
 kepada fail yang dinamakan sama dalam pepohon direktori yang berasingan

 Apabila sasaran terjemahan anda ialah direktori, mod ini didayakan

 Pilihan `-o` / `--outfile` menentukan direktori output

 **AMARAN BESAR**: Semasa menterjemah direktori, **JANGAN** nyatakan direktori output
 yang terdapat dalam direktori input anda! Jika anda melakukan ini, anda akan:
 * mendorong rekursi tak terhingga
 * jalankan bil Google anda
 * isikan cakera anda
 * kurang seronok

 Berikut ialah contoh perkara yang *tidak boleh dilakukan*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Apabila ini dijalankan, fail yang diterjemahkan ditulis ke `templates/es` , dan dengan itu menjadi baharu
 fail sumber untuk diterjemahkan, kerana ia berada di bawah `templates/` -- proses ini diteruskan
 selama-lamanya, jangan lakukannya!

 #### Penggunaan yang betul
 OK, katakan anda mempunyai beberapa templat e-mel dalam direktori:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Untuk menterjemah semua ini ke bahasa Sepanyol dan Jerman, jalankan:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Dalam perkara di atas, `LANG` ialah perkataan terpelihara dan akan digantikan dengan kod bahasa ISO

 Apa yang berlaku apabila perkara di atas dijalankan:
 * `templates/email/es` dan `templates/email/de` akan dibuat (jika ia tidak wujud)
 * Setiap fail dalam `templates/email/en` akan diterjemahkan ke bahasa Sepanyol dan Jerman
 * Fail keluaran sedia ada tidak akan dijana semula melainkan anda menggunakan `-f` / `--force`
 * Anda akan mendapat struktur direktori dan fail yang sama dalam `es` dan `de` seperti yang anda ada di bawah `en`

 ## Pilihan lain

 ### Larian kering
 Lulus `-n` / `--dry-run` untuk memaparkan perkara yang akan dilakukan, tetapi jangan benar-benar membuat sebarang panggilan API atau menulis sebarang fail

 ### Paksa
 Lulus `-f` / `--force` untuk sentiasa menjana semula terjemahan, walaupun telah wujud

 ### Padan
 Lulus `-m` / `--match` untuk mengehadkan fail yang diproses apabila berjalan dalam mod direktori

 Anda mungkin tidak sentiasa mahu menterjemah *setiap* fail dalam direktori sumber anda kepada direktori sasaran anda

 Nilai pilihan `-m` / `--match` ialah regex (berhati-hati peraturan petik shell!) yang menentukan
 fail mana yang patut diterjemahkan

 Apabila ragu-ragu, anda boleh menggabungkan pilihan ini dengan `-n` / `--dry-run` untuk melihat fail yang akan diterjemahkan

 ### Tidak termasuk
 Kadangkala `-m` anda sepadan dengan terlalu banyak fail. Gunakan pilihan `-e` / `--excludes` untuk mengecualikan secara eksplisit
 fail yang sebaliknya akan sepadan

 Anda boleh menyenaraikan berbilang regex, dipisahkan oleh ruang

 Penggunaan biasa ialah: `--excludes node_modules dist \.git build tmp`

 ### Bar hendal
 Rentetan untuk diterjemahkan mungkin mengandungi templat `{{ handlebars }}` , sama ada dengan dua atau tiga pendakap kerinting

 Anda mungkin *TIDAK* mahu bahan di dalam templat tersebut diterjemahkan

 Lulus `-H` / `--handlebars` dan apa-apa sahaja dalam `{{ ... }}` tidak akan diterjemahkan

 ### Markdown
 Penurunan harga bukanlah teks mahupun html, jadi Terjemahan Google menghadapi beberapa kesukaran dengannya

 `-M` / `--markdown` membolehkan pengendalian khas untuk fail markdown

 Dengan fail penurunan nilai, jika anda tidak menggunakan bendera `-M` , anda mungkin akan menemui masalah ini:
 * Pautan terputus. Dalam terjemahan, aksara ruang muncul selepas perihalan pautan markdown tamat (dengan `]` ) tetapi
 sebelum pautan sasarannya bermula (dengan `(` ). Ini menyebabkan penurunan nilai menjadi tidak betul dan pautan
 rosak apabila melihat dokumen.
 * Blok kod diterjemahkan. Terjemahan Google tidak tahu apa yang dianggap penurunan nilai kod dan apa yang tidak
 * Jarak yang salah untuk blok kod inden. Jarak adalah sukar untuk dikekalkan dalam terjemahan
 * Perkara di dalam `backticks` akan diterjemahkan, apabila anda hampir sentiasa mahu ia menjadi nilai literal

 Apabila `-M` / `--markdown` didayakan:
 * Corak `](` akan dipekatkan kepada `](` sekali gus membetulkan pautan penurunan nilai yang rosak
 * Pembalut "tiada terjemah" akan diletakkan di sekeliling blok kod yang diinden, mengekalkan lekukan yang betul dan memastikan ia tidak diterjemahkan
 * Pembalut "tiada terjemah" akan diletakkan di sekeliling teks dalam `backticks` untuk memastikan bahawa ia tidak diterjemahkan

 ### Proses-sebagai
 Biasanya semuanya diproses sebagai teks biasa

 Jika kandungan anda ialah HTML, ia akan rosak melainkan anda melepasi pilihan `-p html` / `--process-as html`

 ### Penapis
 Untuk pengembaraan: semasa memproses fail dalam direktori, anda boleh lulus pilihan `-F` / `--filter`
 untuk menapis output sebelum ia ditulis ke sistem fail

 Nilai pilihan ini mestilah laluan ke fail JS yang mengeksport fungsi bernama `filter`

 Fungsi `filter` mestilah `async` kerana `await` akan dipanggil padanya

 Sebelum fail ditulis ke cakera, keseluruhan kandungan fail akan dihantar ke fungsi `filter` sebagai rentetan

 Nilai pulangan daripada fungsi `filter` ialah apa yang sebenarnya akan ditulis ke storan

 Oleh itu, anda mempunyai kawalan penuh ke atas apa yang akhirnya akan ditulis

 Skrip `filter` akan dicari di lokasi berikut (dengan `.js` akan dilampirkan pada penapis
 nama, melainkan ia sudah berakhir dengan `.js` )
 * Direktori semasa
 * Direktori bernama `.hokey-filters` dalam direktori semasa
 * Direktori bernama `${HOME}/.hokey-filters` , dengan `${HOME}` ialah direktori rumah pengguna semasa
 * [Direktori penapis] terbina dalam(https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### Parameter Penapis
 Rentetan `filter` boleh terdiri daripada berbilang perkataan. Dalam kes ini, perkataan pertama ialah nama penapis, dan
 perkataan yang selebihnya akan dihantar sebagai hujah kepada fungsi `filter`

 ### Bantuan
 Gunakan `-h` / `--help` untuk menunjukkan bantuan

 ## Perintah kelompok JSON
 Dengan pilihan `-j` / `--json` , anda boleh menjalankan berbilang arahan `hokey` yang diselaraskan

 Mengikut konvensyen fail ini dipanggil `hokey.json` , tetapi anda boleh menamakannya apa sahaja yang anda mahu

 Jika anda menghantar direktori sebagai pilihan `-j` , `hokey` akan mencari `hokey.json` dalam direktori tersebut

 Fail JSON harus mengandungi satu objek. Dalam objek itu, nama hartanya adalah sama dengan
 pilihan baris arahan, ditambah satu sifat tambahan bernama `hokey`

 Sifat `hokey` ialah susunan perintah untuk dijalankan. Sifat yang diisytiharkan dalam arahan ini akan
 mengatasi sebarang pengisytiharan pendua dalam objek luar.

 Dalam setiap objek dalam `hokey` , anda harus menentukan `name` , dan fail input dan output

 Berikut ialah contoh `hokey.json`

    {
        "inputLanguage": "en",
        "languages": "es,fr,ja", # can also be an array of strings
        "force": false,
        "match": null,
        "processAs": null,
        "excludes": ["exclude-1", "exclude-2"],
        "handlebars": false,
        "markdown": false,
        "regular": false,
        "dryRun": false,
        "filter": "theFilter.js",
        "hokey": [
          {
            "name": "locale names",
            "infile": "messages/locales_en.js",
            "outfile": "messages/locales_LANG.js",
            "handlebars": true
          },
          {
            "name": "CLI messages",
            "infile": "messages/en_messages.js",
            "outfile": "messages/LANG_messages.js",
            "handlebars": true
          },
          {
            "name": "README",
            "infile": "README.md",
            "outfile": "lang/LANG/",
            "excludes": ["lang/", "node_modules/", "\\.git/", "tmp/"],
            "filter": "relativizeMarkdownLinks lang",
            "markdown": true,
            "index": "lang/README.md"
          }
        ]
    }

 ### Berbilang fail input
 Lulus tatasusunan laluan fail sebagai `infiles` dan bukannya satu laluan `infile` , seperti dalam contoh ini:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Indeks
 Apabila menterjemah kepada banyak bahasa, `hokey` boleh mencipta fail indeks yang menyenaraikan semua terjemahan yang dibuat
 dan menyediakan pautan kepada mereka

 *Apabila menjana indeks, anda hanya boleh mempunyai satu sumber input*

 Lulus pilihan `-I` / `--index` , nilai adalah tempat fail indeks akan dijana, yang boleh menjadi fail
 atau direktori. Jika ia adalah direktori, nama fail lalai akan digunakan, berdasarkan templat (lihat di bawah)

 Gunakan `-A` / `--index-template` untuk menentukan cara output indeks diformatkan. Anda boleh menentukan 'html',
 'markdown', 'text' atau laluan fail ke templat [HandlebarsJS](https://handlebarsjs.com/) anda sendiri

 Jika anda menentukan templat anda sendiri, anda juga mesti menentukan fail (bukan direktori) untuk `-I` / `--index`
 pilihan

 ## Berseronoklah menterjemah bahasa!

</pre>
