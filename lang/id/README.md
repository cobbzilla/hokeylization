Hokeylization
 ===============
 Mengapa saya tidak dapat menjalankan seluruh aplikasi atau situs saya melalui Google Terjemahan dan mendapatkan terjemahan dasar dalam bahasa lain?

 ***Sekarang kamu bisa!***

 Nama `hokeylization` adalah portmanteau, yang berarti 'lokalisasi tipuan'

 Ini agak tipu karena sangat sederhana: mengirimkan string ke Google Terjemahan

 Dan itu sederhana, namun juga sangat kuat. Ini memiliki dukungan khusus untuk dokumen HTML,
 [HandbarsJS](https://handbarsjs.com/) template,
 dan file [Penurunan harga](https://daringfireball.net/projects/markdown).

 Anda dapat menerjemahkan:
 * objek JavaScript yang berisi pesan
 * sejumlah file atau direktori, selalu melintasi direktori secara rekursif

 # Baca ini dalam bahasa lain
 Dokumen README.md ini telah diterjemahkan, menggunakan alat tipu muslihat itu sendiri, menjadi
 **[setiap bahasa didukung oleh Google Terjemahan](https://cloud.google.com/translate/docs/languages)!**

 Saya yakin itu tidak sempurna, tapi saya harap ini lebih baik daripada tidak sama sekali!

 [🇸🇦 Bahasa Arab](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Jerman](../de/README.md)
 [🇺🇸 Bahasa Inggris](../en/README.md)
 [🇪🇸 Spanyol](../es/README.md)
 [🇫🇷 Prancis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Bahasa Indonesia](../id/README.md)
 [🇮🇹 Italia](../it/README.md)
 [🇯🇵 Bahasa Jepang](../ja/README.md)
 [🇰🇷 Bahasa Korea](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Bahasa Polandia](../pl/README.md)
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

 ### Apakah ada masalah dengan terjemahan README ini?
 Terjemahan khusus dari [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md) asli ini
 mungkin salah -- *koreksi sangat diharapkan!* Silakan kirim [permintaan tarik di GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 atau jika Anda tidak nyaman melakukannya, [buka masalah](https://github.com/cobbzilla/hokeylization/issues)

 Saat Anda membuat masalah GitHub baru tentang terjemahan, lakukan:
 * sertakan URL halaman (salin/tempel dari bilah alamat browser)
 * sertakan teks persis yang salah (salin/tempel dari browser)
 * tolong jelaskan apa yang salah -- apakah terjemahannya salah? apakah formatnya rusak entah bagaimana?
 * mohon menawarkan saran terjemahan yang lebih baik, atau bagaimana teks harus diformat dengan benar
 * **Terima kasih!**

 # Isi
 * [Sumber](#Sumber)
 * [Dukungan dan Pendanaan](#Dukungan-dan-Pendanaan)
 * [Pemasangan](#Pemasangan)
 * [Pengaturan](#Pengaturan)
 * [Menerjemahkan file sumber daya string JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Menerjemahkan direktori file teks](#Translating-a-directory-of-text-files)
 * [Opsi lain](#Opsi lainnya)
 * [Perintah batch JSON](#JSON-batch-commands)

 ## Sumber
 * [hokeylization di GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization di npm](https://www.npmjs.com/package/hokeylization)

 ## Dukungan dan Pendanaan
 Saya mencoba menjadi pengembang perangkat lunak sumber terbuka profesional. Saya telah bekerja di
 industri perangkat lunak selama bertahun-tahun, saya telah memulai perusahaan yang sukses dan menjualnya ke perusahaan publik.
 Baru-baru ini saya kehilangan pekerjaan saya, dan saya tidak memiliki pekerjaan lain yang menunggu

 Jadi saya akan mencoba menulis perangkat lunak yang bermanfaat dan melihat apakah itu berhasil

 Jika Anda menikmati menggunakan perangkat lunak ini, saya akan sangat senang menerima bahkan
 terkecil [kontribusi bulanan melalui Patreon](https://www.patreon.com/cobbzilla)

 *Terima kasih!*

 ## Instalasi
 Untuk menggunakan alat baris perintah, instal menggunakan `npm` atau `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Untuk digunakan sebagai perpustakaan, instal versi `lite` , yang jauh lebih kecil:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Kemudian lihat bantuan untuk perintah `hokey` :

    hokey --help
    hokey -h

 Ingin melihat output dalam bahasa Anda atau bahasa lain?

 `hokey` mencoba mendeteksi bahasa secara otomatis dari variabel lingkungan shell Anda

 Anda dapat memaksa bahasa dengan menyetel variabel lingkungan `LC_ALL` :

    LC_ALL=it hokey --help

 Perhatikan bahwa jika Anda telah menginstal `hokeylization-lite` , bantuan perintah hanya tersedia dalam bahasa Inggris

 ## Mempersiapkan
 Setel variabel lingkungan `GOOGLE_TRANSLATE_PROJECT_ID` untuk mengidentifikasi proyek Google Terjemahan Anda

 Setel variabel lingkungan `GOOGLE_APPLICATION_CREDENTIALS` ke kredensial JSON yang Anda unduh
 setelah mencari tahu cara kerja otentikasi di Google cloud (itu bisa menyenangkan)

 Jika Anda menjalankan dari kode sumber, Anda juga dapat meletakkannya di file `.env` di sumbernya
 direktori mereka akan dimuat saat runtime melalui [dotenv](https://www.npmjs.com/package/dotenv)

 ## Menerjemahkan file sumber daya string JavaScript
 Tabel string Anda **harus** berada dalam file JavaScript dalam salah satu dari dua bentuk berikut:

 ES6 ekspor:

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

 Jika file ini bernama `myfile.en.js` , Anda dapat menerjemahkannya ke bahasa Spanyol dan Jerman dengan:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 `LANG` di atas adalah khusus -- ini adalah kata khusus dalam alat ini!

 `LANG` diganti dengan kode bahasa untuk file output

 Jadi perintah di atas membuat file:

    myfile.es.js
    myfile.de.js

 Opsi `-l` / `--languages` adalah daftar kode bahasa ISO yang dipisahkan koma
 [didukung oleh Google Terjemahan](https://cloud.google.com/translate/docs/languages)

 Jika file output sudah ada, maka akan diperiksa untuk menentukan kunci mana yang sudah ada.
 Kunci yang ada tidak akan diterjemahkan. Terjemahan untuk kunci yang hilang akan dibuat dan ditambahkan
 ke akhir objek JS. Seluruh file selalu ditulis ulang.

 Untuk memaksa menerjemahkan ulang semua kunci, gunakan opsi `-f` / `--force`

 ## Menerjemahkan direktori file teks
 Anda juga dapat menerjemahkan direktori file. tipu muslihat akan secara rekursif mengunjungi setiap
 file di direktori dan jalankan isinya melalui Google Translate, dan simpan hasilnya
 ke file bernama identik di pohon direktori terpisah

 Ketika target terjemahan Anda adalah direktori, mode ini diaktifkan

 Opsi `-o` / `--outfile` --outfile` menentukan direktori keluaran

 **PERINGATAN BESAR**: Saat menerjemahkan direktori, **JANGAN** tentukan direktori keluaran
 yang ada di dalam direktori input Anda! Jika Anda melakukan ini, Anda akan:
 * menginduksi rekursi tak terbatas
 * habiskan tagihan Google Anda
 * isi disk Anda
 * kurang bersenang-senang

 Berikut adalah contoh dari apa yang *tidak boleh dilakukan*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Saat ini berjalan, file yang diterjemahkan ditulis ke `templates/es` , dan dengan demikian menjadi baru
 file sumber untuk diterjemahkan, karena berada di bawah `templates/` -- proses ini berlanjut
 selamanya, jangan lakukan itu!

 #### Penggunaan yang benar
 OK, katakanlah Anda memiliki beberapa template email di direktori:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Untuk menerjemahkan semua ini ke bahasa Spanyol dan Jerman, jalankan:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Di atas, `LANG` adalah kata yang dicadangkan dan akan diganti dengan kode bahasa ISO

 Apa yang terjadi ketika hal di atas berjalan:
 * Direktori `templates/email/es` dan `templates/email/de` akan dibuat (jika tidak ada)
 * Setiap file di `templates/email/en` akan diterjemahkan ke dalam bahasa Spanyol dan Jerman
 * File keluaran yang ada tidak akan dibuat ulang kecuali Anda menggunakan `-f` / `--force`
 * Anda akan mendapatkan struktur direktori dan file yang identik di dalam `es` dan `de` seperti yang Anda miliki di bawah `en`

 ## Pilihan lain

 ### Lari kering
 Lewati `-n` / `--dry-run` untuk menampilkan apa yang akan dilakukan, tetapi tidak benar-benar membuat panggilan API atau menulis file apa pun

 ### Memaksa
 Teruskan `-f` / `--force` untuk selalu membuat ulang terjemahan, meskipun sudah ada

 ### Cocok
 Lewati `-m` / `--match` untuk membatasi file yang diproses saat dijalankan dalam mode direktori

 Anda mungkin tidak selalu ingin menerjemahkan *setiap* file di direktori sumber Anda ke direktori target Anda

 Nilai opsi `-m` / `--match` adalah regex (hati-hati dengan aturan pengutipan shell!) yang menentukan
 file mana yang harus diterjemahkan

 Jika ragu, Anda dapat menggabungkan opsi ini dengan `-n` / `--dry-run` untuk melihat file mana yang akan diterjemahkan

 ### Tidak termasuk
 Terkadang `-m` Anda cocok dengan terlalu banyak file. Gunakan opsi `-e` / `--excludes` untuk mengecualikan secara eksplisit
 file yang seharusnya cocok

 Anda dapat membuat daftar beberapa regex, dipisahkan oleh spasi

 Penggunaan yang umum adalah: `--excludes node_modules dist \.git build tmp`

 ### Setang
 String yang akan diterjemahkan mungkin berisi template `{{ handlebars }}` , baik dengan dua atau tiga kurung kurawal

 Anda mungkin *TIDAK* ingin hal-hal di dalam template tersebut diterjemahkan

 Lewati `-H` / `--handlebars` --handbars`, dan apa pun di dalam `{{ ... }}` tidak akan diterjemahkan

 ### Penurunan harga
 Penurunan harga bukanlah teks atau html, jadi Google Terjemahan memiliki beberapa kesulitan dengan itu

 `-M` / `--markdown` memungkinkan penanganan khusus untuk file penurunan harga

 Dengan file penurunan harga, jika Anda tidak menggunakan flag `-M` , Anda mungkin akan menemukan masalah berikut:
 * Tautan rusak. Dalam terjemahan, karakter spasi muncul setelah deskripsi tautan penurunan harga berakhir (dengan `]` ) tetapi
 sebelum tautan target dimulai (dengan `(` ). Hal ini menyebabkan penurunan harga tidak ditampilkan dengan benar, dan tautan
 rusak saat melihat dokumen.
 * Blok kode diterjemahkan. Google translate tidak tahu penurunan harga yang dianggap kode dan apa yang tidak
 * Spasi salah untuk blok kode indentasi. Spasi sulit dipertahankan dalam terjemahan
 * Hal-hal di dalam `backticks` akan diterjemahkan, ketika Anda hampir selalu menginginkannya menjadi nilai literal

 Saat tanda `-M` / `--markdown` diaktifkan:
 * Pola `](` akan diringkas menjadi `](` sehingga memperbaiki tautan penurunan harga yang rusak
 * Pembungkus "tidak ada terjemahan" akan ditempatkan di sekitar blok kode indentasi, menjaga lekukan yang tepat dan memastikan mereka tidak diterjemahkan
 * Pembungkus "no translate" akan ditempatkan di sekitar teks dalam `backticks` untuk memastikan bahwa teks tersebut tidak diterjemahkan

 ### Proses-sebagai
 Biasanya semuanya diproses sebagai teks biasa

 Jika konten Anda HTML, itu akan rusak kecuali Anda melewati opsi `-p html` / `--process-as html`

 ### Saring
 Untuk petualang: saat memproses file dalam direktori, Anda dapat melewati opsi `-F` / `--filter`
 untuk memfilter output sebelum ditulis ke sistem file

 Nilai opsi ini harus berupa jalur ke file JS yang mengekspor fungsi bernama `filter`

 Fungsi `filter` harus `async` karena `await` akan dipanggil

 Sebelum file ditulis ke disk, seluruh isi file akan diteruskan ke fungsi `filter` sebagai string

 Nilai kembalian dari fungsi `filter` adalah apa yang sebenarnya akan ditulis ke penyimpanan

 Dengan demikian, Anda memiliki kendali penuh atas apa yang akhirnya akan ditulis

 `filter` akan dicari di lokasi berikut (dengan `.js` akan ditambahkan ke filter
 name, kecuali jika sudah diakhiri dengan `.js` )
 * Direktori saat ini
 * Direktori bernama `.hokey-filters` dalam direktori saat ini
 * Direktori bernama `${HOME}/.hokey-filters` , di mana `${HOME}` adalah direktori home pengguna saat ini
 * [Direktori filter] bawaan (https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### Parameter Filter
 `filter` dapat berupa beberapa kata. Dalam hal ini, kata pertama adalah nama filter, dan
 kata-kata yang tersisa akan diteruskan sebagai argumen ke fungsi `filter`

 ### Membantu
 Gunakan `-h` / `--help` untuk menampilkan bantuan

 ## Perintah batch JSON
 Dengan opsi `-j` / `--json` , Anda dapat menjalankan beberapa perintah `hokey`

 Berdasarkan konvensi, file ini disebut `hokey.json` , tetapi Anda dapat memberi nama apa pun yang Anda inginkan

 Jika Anda melewati direktori sebagai opsi `-j` , `hokey` akan mencari `hokey.json` di direktori itu

 File JSON harus berisi satu objek. Di dalam objek itu, nama propertinya sama dengan
 opsi baris perintah, ditambah satu properti tambahan bernama `hokey`

 Properti `hokey` adalah larik perintah untuk dijalankan. Properti yang dideklarasikan dalam perintah ini akan
 menimpa deklarasi duplikat di objek luar.

 Di dalam setiap objek dalam `hokey` , Anda harus menentukan `name` , serta file input dan output

 Berikut adalah contoh `hokey.json`

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

 ### Beberapa file masukan
 Lewati larik jalur file sebagai `infiles` alih-alih satu jalur `infile` , seperti dalam contoh ini:

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
 Saat menerjemahkan ke banyak bahasa, `hokey` dapat membuat file indeks yang mencantumkan semua terjemahan yang dibuat
 dan memberikan tautan ke mereka

 *Saat membuat indeks, Anda hanya dapat memiliki satu sumber input*

 Lewati opsi `-I` / `--index` , nilainya adalah tempat file indeks akan dihasilkan, yang dapat berupa file
 atau sebuah direktori. Jika direktori, nama file default akan digunakan, berdasarkan template (lihat di bawah)

 Gunakan `-A` / `--index-template` untuk menentukan bagaimana output indeks diformat. Anda dapat menentukan 'html',
 'penurunan harga', 'teks', atau jalur file ke template [HandbarsJS](https://handbarsjs.com/) Anda sendiri

 Jika Anda menentukan template Anda sendiri, Anda juga harus menentukan file (bukan direktori) untuk `-I` / `--index`
 pilihan

 ## Bersenang-senang menerjemahkan bahasa!

</pre>
