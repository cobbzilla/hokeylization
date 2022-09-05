Hokeylization
 =============
 Naha kuring henteu tiasa ngajalankeun sadaya aplikasi atanapi situs ngalangkungan Google Tarjamah sareng nampi tarjamahan dasar dina basa sanés?

 ***Ayeuna, anjeun tiasa!***

 Ngaran `hokeylization` mangrupakeun portmanteau, hartina 'hokey lokalisasi'

 Ieu rada hokey sabab basajan pisan: ngirim string ka Google Tarjamah

 Tur éta basajan, tapi ogé pohara kuat. Éta gaduh dukungan khusus pikeun dokumén HTML,
 [HandlebarsJS](https://handlebarsjs.com/) témplat,
 jeung [Markdown](https://daringfireball.net/projects/markdown) file.

 Anjeun tiasa narjamahkeun:
 * objék JavaScript ngandung pesen
 * sajumlah file atanapi diréktori, sok ngaliwat diréktori sacara rekursif

 # Baca ieu dina basa sanés
 Ieu dokumén README.md geus ditarjamahkeun, ngagunakeun alat hokeylization sorangan, kana
 **[sagala basa dirojong ku Google Tarjamah](https://cloud.google.com/translate/docs/languages)!**

 Kuring yakin éta teu sampurna, tapi kuring miharep éta leuwih hade tinimbang nanaon!

 [🇸🇦 Arab](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Jerman](../de/README.md)
 [🇺🇸 Inggris](../id/README.md)
 [🇪🇸 Spanyol](../es/README.md)
 [🇫🇷 Perancis](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 basa Indonesia](../id/README.md)
 [🇮🇹 Italia](../it/README.md)
 [🇯🇵 Jepang](../ja/README.md)
 [🇰🇷 Koréa](../ko/README.md)
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


 **[📚 ... Sadaya Basa ...](../README.md)**
 ----

 ### Naha aya masalah sareng tarjamahan README ieu?
 Tarjamahan khusus ieu tina [README] asli (https://github.com/cobbzilla/yuebing/blob/master/README.md)
 meureun cacad -- *koreksi pisan wilujeng sumping!* Punten kirimkeun [permintaan tarik dina GitHub](https://github.com/cobbzilla/yuebing/pulls),
 atanapi upami anjeun teu nyaman ngalakukeun éta, [buka masalah](https://github.com/cobbzilla/yuebing/issues)

 Lamun anjeun nyieun masalah GitHub anyar ngeunaan tarjamahan, mangga ngalakukeun:
 * kalebet URL halaman (salinan/témpél tina bar alamat browser)
 * kalebet téks anu leres anu salah (salin/témpél tina browser)
 * Punten terangkeun naon anu lepat -- naha tarjamahanna lepat? formatna rusak kumaha bae?
 * punten nawiskeun usulan tarjamahan anu langkung saé, atanapi kumaha téks kedah diformat leres
 * **Hatur nuhun!**

 # Eusi
 * [Sumber](#Sumber)
 * [Rojongan sareng Pembiayaan](#Rojongan-sareng-Dana)
 * [Pamasangan](#Pasang)
 * [Setup](#Setup)
 * [Narjamahkeun file sumberdaya string JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Narjamahkeun diréktori file téks](#Translating-a-directory-of-text-files)
 * [Pilihan séjén](#Other-options)
 * [Paréntah angkatan JSON](#JSON-batch-commands)

 ## Sumber
 * [hokeylization dina GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization on npm](https://www.npmjs.com/package/hokeylization)

 ## Rojongan sareng Pembiayaan
 Kuring nyobian janten pamekar software open source profésional. Kuring geus digawé di
 industri software salila sababaraha taun, Kuring geus dimimitian pausahaan suksés jeung dijual ka pausahaan umum.
 Anyar-anyar ieu kuring kaleungitan padamelan, sareng kuring henteu ngagaduhan padamelan anu sanés

 Janten kuring badé nyobian nyerat parangkat lunak anu mangpaat sareng ningali upami éta jalanna

 Abdi bakal ngahargaan pisan bahkan anu pangleutikna [kontribusi bulanan via Patreon](https://www.patreon.com/cobbzilla)

 ## Pamasangan
 Pikeun nganggo alat baris paréntah, pasang nganggo `npm` atanapi `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Pikeun dianggo salaku perpustakaan, pasang versi `lite` , anu langkung alit:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Teras tingali pitulung pikeun paréntah `hokey` :

    hokey --help
    hokey -h

 Hoyong ningali kaluaran dina basa anjeun atanapi basa sanés?

 `hokey` nyoba ngadeteksi basa sacara otomatis tina variabel lingkungan cangkang anjeun

 Anjeun tiasa maksa hiji basa ku netepkeun variabel lingkungan `LC_ALL` :

    LC_ALL=it hokey --help

 Catet yén upami anjeun parantos masang `hokeylization-lite` , bantosan paréntah ngan sayogi dina basa Inggris

 ## Disetél
 Setel variabel lingkungan `GOOGLE_TRANSLATE_PROJECT_ID` pikeun ngidentipikasi proyék Google Tarjamah anjeun

 Setel variabel lingkungan `GOOGLE_APPLICATION_CREDENTIALS` kana kredensial JSON anu anjeun unduh
 sanggeus figuring kaluar kumaha auténtikasi jalan dina Google awan (tiasa senang)

 Upami anjeun ngajalankeun kode sumber, anjeun ogé tiasa nempatkeun ieu dina file `.env` dina sumberna
 diréktori aranjeunna bakal dimuat dina runtime via [dotenv](https://www.npmjs.com/package/dotenv)

 ## Narjamahkeun file sumberdaya string JavaScript
 Tabel string anjeun **kedah** aya dina file JavaScript dina salah sahiji tina dua bentuk ieu:

 ékspor ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Ékspor CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Upami file ieu dingaranan `myfile.en.js` , anjeun tiasa narjamahkeun kana basa Spanyol sareng Jerman nganggo:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 The `LANG` di luhur husus - mangrupa kecap ditangtayungan dina alat ieu!

 `LANG` diganti ku kode basa pikeun file kaluaran

 Janten paréntah di luhur nyiptakeun file:

    myfile.es.js
    myfile.de.js

 Pilihan `-l` / `--languages` nyaéta daptar kode basa ISO anu dipisahkeun koma.
 [dirojong ku Google Tarjamah](https://cloud.google.com/translate/docs/languages)

 Upami file kaluaran parantos aya, éta bakal ditaliti pikeun nangtukeun konci mana anu parantos aya.
 Konci anu aya moal ditarjamahkeun. Tarjamahan pikeun konci anu leungit bakal didamel sareng ditambihan
 nepi ka ahir objék JS. Sakabéh file sok ditulis ulang.

 Pikeun maksa tarjamahan deui sadaya konci, paké pilihan `-f` / `--force`

 ## Narjamahkeun diréktori file téks
 Anjeun ogé tiasa narjamahkeun diréktori file. hokeylization bakal recursively didatangan unggal
 file dina diréktori tur ngajalankeun eusina ngaliwatan Google Tarjamah, tur nyimpen kaluaran
 ka hiji file idéntik ngaranna dina tangkal diréktori misah

 Lamun udagan tarjamahan anjeun diréktori, mode ieu diaktipkeun

 Pilihan `-o` / `--outfile` nangtukeun diréktori kaluaran

 **PERHATOSAN BESAR**: Nalika narjamahkeun diréktori, **ULAH** tangtukeun diréktori kaluaran
 anu aya dina diréktori input anjeun! Upami anjeun ngalakukeun ieu, anjeun bakal:
 * induce recursion taya wates
 * ngajalankeun up tagihan Google Anjeun
 * eusian disk anjeun
 *kurang senang

 Ieu conto naon anu * henteu kedah dilakukeun *:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Nalika ieu jalan, file tarjamahan ditulis kana `templates/es` , sahingga jadi anyar
 file sumber pikeun ditarjamahkeun, sabab aya dina `templates/` -- prosés ieu diteruskeun
 salamina, ulah ngalakukeun eta!

 #### Pamakéan anu leres
 OKÉ, anggap anjeun gaduh sababaraha témplat email dina diréktori:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Pikeun narjamahkeun sadayana ieu ka Spanyol sareng Jerman, jalankeun:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Di luhur, `LANG` mangrupikeun kecap anu ditangtayungan sareng bakal diganti ku kode basa ISO

 Naon anu lumangsung nalika di luhur ngajalankeun:
 * `templates/email/es` jeung `templates/email/de` bakal dijieun (upami teu aya)
 * Unggal file dina `templates/email/en` bakal ditarjamahkeun ka Spanyol jeung Jerman
 * File kaluaran anu aya moal didamel deui upami anjeun nganggo `-f` / `--force`
 * Anjeun bakal gaduh struktur diréktori sareng file anu sami dina `es` sareng `de` sapertos anu anjeun gaduh dina `en`

 ## Pilihan séjén

 ### Lumpat garing
 `-n` / `--dry-run` pikeun ningalikeun naon anu bakal dilakukeun, tapi henteu leres-leres nelepon API atanapi nyerat file naon waé.

 ### Angkatan
 `-f` / `--force` pikeun salawasna ngahasilkeun deui tarjamahan, sanajan tarjamahanna geus aya

 ### Cocog
 `-m` / `--match` pikeun ngawatesan file anu diolah nalika ngajalankeun dina modeu diréktori

 Anjeun moal salawasna hoyong narjamahkeun *unggal* file dina diréktori sumber anjeun ka diréktori target anjeun

 Nilai pilihan `-m` / `--match` nyaéta regex (awas aturan kutipan cangkang!) anu nangtukeun
 file mana anu kedah ditarjamahkeun

 Upami aya ragu, anjeun tiasa ngagabungkeun pilihan ieu sareng `-n` / `--dry-run` pikeun ningali file mana anu bakal ditarjamahkeun.

 ### Teu kaasup
 Kadang `-m` anjeun cocog sareng seueur teuing file. Anggo pilihan `-e` / `--excludes` pikeun sacara eksplisit ngaluarkeun
 file nu disebutkeun bakal cocog

 Anjeun tiasa daptar sababaraha regexes, dipisahkeun ku spasi

 Pamakéan umum nyaéta: `--excludes node_modules dist \.git build tmp`

 ### Stang
 Senar anu ditarjamahkeun tiasa ngandung témplat `{{ handlebars }}` , boh dua atanapi tilu kurung kurung

 Anjeun meureun *TIDAK* hoyong barang-barang di jero témplat éta ditarjamahkeun

 Lebetkeun bandéra `-H` / `--handlebars` , sareng naon waé anu aya dina `{{ ... }}` moal ditarjamahkeun

 ### Markdown
 Markdown sanes téks atanapi html, janten Google Translate ngagaduhan sababaraha kasusah

 Bandéra `-M` / `--markdown` ngamungkinkeun penanganan husus pikeun file markdown

 Kalayan file markdown, upami anjeun henteu nganggo bandéra `-M` , anjeun panginten bakal mendakan masalah ieu:
 * Tumbu rusak. Dina tarjamahan, karakter spasi muncul sanggeus pedaran link markdown ends (kalawan `]` ) tapi
 sateuacan tautan targétna dimimitian (kalayan `(` ). Hal ieu nyababkeun markdown teu leres, sareng tautan
 rusak nalika ningali dokumén.
 * Blok kode ditarjamahkeun. Google narjamahkeun henteu terang naon anu dianggap markdown kode sareng naon anu henteu
 * Spasi lepat pikeun blok kode indented. Spasi hese dilestarikan dina tarjamah
 * Hal-hal di jero `backticks` bakal ditarjamahkeun, nalika anjeun ampir sok hoyong aranjeunna janten nilai literal

 Nalika `-M` / `--markdown` diaktipkeun:
 * Pola `](` bakal dikondensasi jadi `](` sahingga ngalereskeun tautan markdown anu rusak
 * Bungkus "henteu narjamahkeun" bakal disimpen di sabudeureun blok kode anu indented, ngajaga indentasi anu leres sareng mastikeun aranjeunna henteu ditarjamahkeun
 * Bungkus "henteu narjamahkeun" bakal disimpen di sabudeureun téks dina `backticks` pikeun mastikeun yén éta henteu ditarjamahkeun

 ### Prosés-sakumaha
 Biasana sadayana diolah salaku téks polos

 Upami eusi anjeun HTML, éta bakal diganggu kecuali anjeun ngalangkungan pilihan `-p html` / `--process-as html`

 ### Saringan
 Pikeun petualang: nalika ngolah file dina diréktori, anjeun tiasa ngalangkungan pilihan `-F` / `--filter`
 pikeun nyaring kaluaran sateuacan ditulis kana filesystem

 Nilai pilihan ieu kedah janten jalur ka file JS anu ngékspor fungsi anu dingaranan `filter`

 Fungsi `filter` kudu `async` sabab `await` bakal disebut kana eta

 Saméméh file ditulis kana disk, sakabéh eusi file bakal dibikeun ka fungsi `filter` salaku string a

 Nilai balik ti fungsi `filter` nyaeta naon sabenerna bakal ditulis ka gudang

 Ku kituna, anjeun boga kontrol total leuwih naon tungtungna bakal ditulis

 ### Tulung
 Anggo `-h` / `--help` pikeun nunjukkeun pitulung

 ## Paréntah bets JSON
 Kalayan pilihan `-j` / `--json` , anjeun tiasa ngajalankeun sababaraha paréntah `hokey` anu ngagabung

 Ku konvénsi file ieu disebut `hokey.json` , tapi anjeun bisa ngaranan eta naon rék

 Upami anjeun ngalangkungan diréktori salaku pilihan `-j` , `hokey` bakal milarian `hokey.json` dina diréktori éta

 Berkas JSON kedah ngandung hiji obyék. Dina obyék éta, nami milikna sami sareng
 pilihan garis paréntah, ditambah hiji sipat tambahan ngaranna `hokey`

 `hokey` mangrupa susunan paréntah pikeun ngajalankeun. Sipat anu dinyatakeun dina paréntah ieu bakal
 override sagala duplikat deklarasi dina objék luar.

 Dina unggal obyék dina `hokey` Asép Sunandar Sunarya, anjeun kudu nangtukeun hiji `name` , sarta input sarta output file.

 Ieu conto `hokey.json`

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
            "filter": "util/filterReadme.js",
            "markdown": true,
            "index": "lang/README.md"
          }
        ]
    }

 ### Sababaraha file input
 Lebetkeun sakumpulan jalur file salaku `infiles` tinimbang hiji jalur `infile` , sapertos dina conto ieu:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Indéks
 Nalika narjamahkeun kana seueur basa, `hokey` tiasa nyiptakeun file indéks anu daptar sadaya tarjamahan anu dilakukeun.
 sarta nyadiakeun Tumbu ka aranjeunna

 *Nalika ngahasilkeun indéks, anjeun ngan ukur tiasa gaduh hiji sumber input*

 Lebetkeun pilihan `-I` / `--index` , nilaina dimana file indéks bakal dibangkitkeun, anu tiasa janten file
 atawa diréktori. Upami éta diréktori, nami file standar bakal dianggo, dumasar kana citakan (tingali di handap)

 Anggo `-A` / `--index-template` pikeun nangtukeun kumaha kaluaran indéks diformat. Anjeun tiasa nangtukeun 'html',
 'markdown', 'text', atawa jalur file ka template [HandlebarsJS](https://handlebarsjs.com/) anjeun sorangan

 Upami anjeun netepkeun template anjeun nyalira, anjeun ogé kedah netepkeun file (sanés diréktori) pikeun `-I` / `--index`
 pilihan

 ## Wilujeng narjamahkeun basa!

</pre>
