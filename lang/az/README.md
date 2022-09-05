Hokeyləşmə
 ==============
 Niyə mən bütün tətbiqimi və ya saytımı Google Translate vasitəsilə işlədə və başqa dildə əsas tərcümə əldə edə bilmirəm?

 ***İndi bilərsən!***

 `hokeylization` ' adı bir portmantodur, 'hokey localization' mənasını verir

 Bu, bir qədər hokeydir, çünki çox sadədir: o, Google Translate-ə sətirlər göndərir

 Və sadə, eyni zamanda çox güclüdür. HTML sənədləri üçün xüsusi dəstəyə malikdir,
 [HandlebarsJS](https://handlebarsjs.com/) şablonları,
 və [Markdown](https://daringfireball.net/projects/markdown) faylları.

 Tərcümə edə bilərsiniz:
 * mesajları ehtiva edən JavaScript obyekti
 * İstənilən sayda fayl və ya qovluq, həmişə qovluqları rekursiv şəkildə keçərək

 # Bunu başqa dildə oxuyun
 Bu README.md sənədi hokeyləşdirmə alətinin özündən istifadə etməklə tərcümə edilmişdir
 **[Google Translate tərəfindən dəstəklənən bütün dillər](https://cloud.google.com/translate/docs/languages)!**

 Əminəm ki, mükəmməl deyil, amma ümid edirəm ki, heç nədən yaxşıdır!

 [🇸🇦 Ərəb](../ar/README.md)
 [🇧🇩 Benqal dili](../bn/README.md)
 [🇩🇪 Almanca](../de/README.md)
 [🇺🇸 İngilis dili](../az/README.md)
 [🇪🇸 İspan](../es/README.md)
 [🇫🇷 Fransızca](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 İndoneziya dili](../id/README.md)
 [🇮🇹 İtalyanca](../it/README.md)
 [🇯🇵 Yapon](../ja/README.md)
 [🇰🇷 Koreya](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polyak dili](../pl/README.md)
 [🇧🇷 Portuqal dili](../pt/README.md)
 [🇷🇺 Rus dili](../ru/README.md)
 [🇰🇪 Suahili](../sw/README.md)
 [🇵🇭 Taqaloq](../tl/README.md)
 [🇹🇷 Türkcə](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vyetnam dili](../vi/README.md)
 [🇨🇳 Çin](../zh/README.md)


 **[📚 ... Bütün Dillər ...](../README.md)**
 ----

 ### README-nin bu tərcüməsində problem varmı?
 Orijinalın bu xüsusi tərcüməsi [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 qüsurlu ola bilər -- *düzəlişlər çox xoşdur!* Lütfən, [GitHub-da çəkmə sorğusu] göndərin (https://github.com/cobbzilla/hokeylization/pulls),
 və ya bunu etməkdə rahat deyilsinizsə, [məsələ açın](https://github.com/cobbzilla/hokeylization/issues)

 Tərcümə ilə bağlı yeni GitHub məsələsi yaratdığınız zaman, lütfən:
 * səhifənin URL-ni daxil edin (brauzerin ünvan çubuğundan kopyalayın/yapışdırın)
 * səhv olan mətni daxil edin (brauzerdən kopyalayın/yapışdırın)
 * zəhmət olmasa nəyin səhv olduğunu təsvir edin -- tərcümə səhvdir? formatlama birtəhər pozuldu?
 * lütfən daha yaxşı tərcümə təklifi və ya mətnin düzgün formatlaşdırılması ilə bağlı təklif verin
 * **Çox sağ ol!**

 # Məzmun
 * [Mənbə](#Mənbə)
 * [Dəstək və Maliyyələşdirmə](#Dəstək və Maliyyələşdirmə)
 * [Quraşdırma](#Quraşdırma)
 * [Quraşdırma](#Quraşdırma)
 * [JavaScript sətir resurs faylının tərcüməsi](#Translating-a-JavaScript-string-resource-file)
 * [Mətn faylları kataloqunun tərcüməsi](#Mətn fayllarının kataloqunun tərcüməsi)
 * [Digər seçimlər](#Digər-seçimlər)
 * [JSON toplu əmrləri](#JSON toplu əmrləri)

 ## Mənbə
 * [GitHub-da hokeylizasiya](https://github.com/cobbzilla/hokeylization)
 * [npm-də hokeylizasiya](https://www.npmjs.com/package/hokeylization)

 ## Dəstək və Maliyyələşdirmə
 Mən peşəkar açıq mənbə proqram təminatı tərtibatçısı olmağa çalışıram. məndə işləmişəm
 Uzun illər proqram sektorunda müvəffəqiyyətli şirkətlər qurdum və onları açıq şirkətlərə satdım.
 Bu yaxınlarda işimi itirdim və başqa işim yoxdur

 Beləliklə, mən faydalı proqram yazmağa çalışacağam və bunun işlədiyini görəcəyəm

 Ən kiçik [Patreon vasitəsilə aylıq töhfəni] belə səmimi qəlbdən qiymətləndirərdim(https://www.patreon.com/cobbzilla)

 ## Quraşdırma
 Komanda xətti alətindən istifadə etmək üçün `npm` və ya `yarn` istifadə edərək quraşdırın:

    npm install -g hokeylization
    yarn global add hokeylization

 Kitabxana kimi istifadə etmək üçün daha kiçik olan `lite` versiyasını quraşdırın:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Sonra `hokey` əmri üçün yardıma baxın:

    hokey --help
    hokey -h

 Çıxışı öz dilinizdə və ya başqa dildə görmək istəyirsiniz?

 `hokey` dili avtomatik olaraq qabığınızın mühit dəyişənlərindən aşkarlamağa çalışır

 Siz `LC_ALL` mühit dəyişənini təyin etməklə dili məcbur edə bilərsiniz:

    LC_ALL=it hokey --help

 Qeyd edək ki, əgər siz `hokeylization-lite` quraşdırmısınızsa, əmr yardımı yalnız ingilis dilində mövcuddur

 ## Qurmaq
 Google Translate layihənizi müəyyən etmək üçün `GOOGLE_TRANSLATE_PROJECT_ID` mühit dəyişənini təyin edin

 `GOOGLE_APPLICATION_CREDENTIALS` mühit dəyişənini endirdiyiniz JSON etimadnaməsinə təyin edin
 autentifikasiyanın Google buludunda necə işlədiyini anladıqdan sonra (əyləncəli ola bilər)

 Əgər mənbə kodundan işləyirsinizsə, `.env` faylına da qoya bilərsiniz
 qovluq onlar [dotenv](https://www.npmjs.com/package/dotenv) vasitəsilə iş vaxtında yüklənəcəklər

 ## JavaScript sətir resurs faylının tərcüməsi
 Sətir cədvəliniz **gərək** bu iki formadan birində JavaScript faylında olmalıdır:

 ES6 ixracı:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS ixracı

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Bu fayl `myfile.en.js` adlandırılıbsa, siz onu ispan və alman dillərinə aşağıdakılarla tərcümə edə bilərsiniz:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Yuxarıdakı `LANG` xüsusidir -- bu alətdə qorunan sözdür!

 `LANG` çıxış faylları üçün dil kodu ilə əvəz olunur

 Beləliklə, yuxarıdakı əmr faylları yaradır:

    myfile.es.js
    myfile.de.js

 `-l` / `--languages` seçimi ISO dil kodlarının vergüllə ayrılmış siyahısıdır
 [Google Translate tərəfindən dəstəklənir](https://cloud.google.com/translate/docs/languages)

 Çıxış faylı artıq mövcuddursa, hansı açarların artıq mövcud olduğunu müəyyən etmək üçün araşdırılacaq.
 Mövcud açarlar tərcümə edilməyəcək. Çatışmayan açarlar üçün tərcümələr yaradılacaq və əlavə olunacaq
 JS obyektinin sonuna qədər. Bütün fayl həmişə yenidən yazılır.

 Bütün düymələri yenidən tərcümə etməyə məcbur etmək üçün `-f` / `--force` seçimindən istifadə edin

 ## Mətn faylları kataloqunun tərcüməsi
 Siz həmçinin faylların kataloqunu tərcümə edə bilərsiniz. hokeylization recursively hər ziyarət edəcək
 faylı kataloqa daxil edin və məzmununu Google Translate vasitəsilə işə salın və nəticəni yadda saxlayın
 ayrı kataloq ağacındakı eyni adlı fayla

 Tərcümənizin hədəfi kataloq olduqda, bu rejim aktivləşdirilir

 `-o` / `--outfile` seçimi çıxış qovluğunu təyin edir

 **BÖYÜK XƏBƏRDARLIQ**: Kataloqları tərcümə edərkən, **QAYDIRMAYIN**, çıxış kataloqunu göstərin
 bu sizin giriş kataloqunuzdadır! Bunu etsəniz, aşağıdakıları edəcəksiniz:
 * sonsuz rekursiyaya səbəb olur
 * Google hesabınızı işə salın
 * diskinizi doldurun
 * daha az əylənin

 Budur *nələrin edilməməsinin* nümunəsi:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Bu işlədikdə, tərcümə edilmiş fayllar `templates/es` və beləliklə, yeni olur
 tərcümə etmək üçün mənbə faylları, çünki onlar `templates/` altındadır -- bu proses davam edir
 əbədi, bunu etmə!

 #### Düzgün istifadə
 Yaxşı, tutaq ki, kataloqda bəzi e-poçt şablonlarınız var:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Bütün bunları ispan və alman dillərinə tərcümə etmək üçün çalıştırın:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Yuxarıdakı `LANG` sözdür və ISO dil kodu ilə əvəz olunacaq

 Yuxarıdakılar işlədikdə nə baş verir:
 * `templates/email/es` " və `templates/email/de` yaradılacaq (əgər onlar mövcud deyilsə)
 * `templates/email/en` hər bir fayl ispan və alman dillərinə tərcümə olunacaq
 * `-f` / `--force` istifadə etməyincə mövcud çıxış faylları bərpa olunmayacaq
 * Siz 'en' altında olduğu kimi ' `es` və `de` daxilində eyni kataloq strukturu və faylları ilə `en`

 ## Digər seçimlər

 ### Quru qaçış
 Nə ediləcəyini göstərmək üçün `-n` / `--dry-run` , lakin əslində heç bir API zəngi etməyin və ya fayl yazmayın

 ### Güc
 Tərcümələri, hətta mövcud olsalar belə, həmişə bərpa etmək üçün `-f` / `--force`

 ### Uyğunluq
 Kataloq rejimində işləyərkən işlənmiş faylları məhdudlaşdırmaq üçün `-m` / `--match` keçin

 Mənbə kataloqunuzdakı *hər* faylı həmişə hədəf kataloqunuza tərcümə etmək istəməyə bilərsiniz

 `-m` / `--match` seçiminin dəyəri regexdir (qabıqdan sitat gətirmə qaydalarına diqqət yetirin!)
 hansı fayllar tərcümə edilməlidir

 Şübhə olduqda, hansı faylların tərcümə ediləcəyini görmək üçün bu seçimi `-n` / `--dry-run` ilə birləşdirə bilərsiniz.

 ### İstisna edir
 Bəzən `-m` çox fayla uyğun gəlir. Açıqca istisna etmək üçün `-e` / `--excludes` --excludes` seçimindən istifadə edin
 əks halda uyğunlaşacaq fayllar

 Siz boşluqlarla ayrılmış çoxlu regexləri sadalaya bilərsiniz

 Ümumi istifadə belə olardı: `--excludes node_modules dist \.git build tmp`

 ### Sükanlar
 Tərcümə ediləcək sətirlər iki və ya üç mötərizəli `{{ handlebars }}` şablonlarından ibarət ola bilər

 Siz yəqin ki, bu şablonların içindəki əşyaların tərcümə olunmasını *İSTƏMƏYİNİZ*

 `-H` / `--handlebars` bayrağını keçin və `{{ ... }}` daxilində olan heç bir şey tərcümə edilməyəcək

 ### İşarələmə
 Markdown nə mətndir, nə də html, ona görə də Google Translate-də bəzi çətinliklər var

 `-M` / `--markdown` bayrağı markdown faylları üçün xüsusi işləməyə imkan verir

 Markdown faylları ilə, əgər `-M` bayrağından istifadə etməsəniz, yəqin ki, bu problemlərlə rastlaşacaqsınız:
 * Sınıq bağlantılar. Tərcümədə, işarələmə linkinin təsviri bitdikdən sonra boşluq simvolu görünür ( `]` ilə) lakin
 hədəf linki başlamazdan əvvəl ( `(` ilə). Bu, işarələmənin səhv göstərilməsinə səbəb olur və link
 sənədə baxarkən pozulur.
 * Kod blokları tərcümə olunur. Google translate bilmir ki, markdown kodu nə hesab edir və nəyi etmir
 * Girintili kod blokları üçün səhv boşluq. Tərcümə zamanı intervalı qorumaq çətindir
 * `backticks` daxilində olan şeylər, demək olar ki, həmişə onların hərfi dəyərlər olmasını istədiyiniz zaman tərcümə ediləcək

 `-M` / `--markdown` bayrağı aktiv olduqda:
 * Nümunə `](` `](` sıxlaşdırılacaq, beləliklə, pozulmuş işarələmə bağlantıları düzəldilir.
 * "Tərcümə yoxdur" bandı girintili kod bloklarının ətrafına yerləşdiriləcək, düzgün girintiləri qoruyacaq və onların tərcümə edilməməsini təmin edəcək.
 * Tərcümə olunmamasını təmin etmək üçün mətnin ətrafında "tərcümə yoxdur" `backticks` yerləşdiriləcək

 ### Proses kimi
 Normalda hər şey düz mətn kimi işlənir

 Məzmununuz HTML-dirsə, `-p html` / `--process-as html` seçimini keçirməsəniz, məzmun pozulacaq.

 ### Filtr
 Macəra həvəskarları üçün: kataloqda faylları `-F` / `--filter` seçimini keçə bilərsiniz.
 fayl sisteminə yazılmazdan əvvəl çıxışı süzmək üçün

 Bu seçimin dəyəri `filter` adlı funksiyanı ixrac edən JS faylına yol olmalıdır

 `filter` `async` olmalıdır, çünki ona `await` çağırılacaq

 Fayllar diskə yazılmazdan əvvəl bütün fayl məzmunu sətir kimi `filter` .

 `filter` funksiyasından qaytarılan dəyər əslində yaddaşa yazılacaq dəyərdir

 Beləliklə, nəhayət yazılacaqlara tam nəzarət edirsiniz

 ### Kömək
 Yardım göstərmək üçün `-h` / `--help` istifadə edin

 ## JSON toplu əmrləri
 `-j` / `--json` seçimi ilə siz çoxlu əlaqələndirilmiş `hokey` əmrlərini işlədə bilərsiniz

 Konvensiyaya görə bu fayl `hokey.json` adlanır, lakin siz onu istədiyiniz kimi adlandıra bilərsiniz

 Əgər kataloqu `-j` seçimi kimi keçirsəniz, `hokey` `hokey.json` .

 JSON faylında bir obyekt olmalıdır. Həmin obyekt daxilində onun xassə adları ilə eynidir
 komanda xətti seçimləri, üstəgəl `hokey` adlı bir əlavə xüsusiyyət

 `hokey` . Bu əmrlər daxilində elan edilən xüsusiyyətlər olacaq
 xarici obyektdəki hər hansı dublikat bəyannamələri ləğv edin.

 `hokey` massivindəki hər bir obyekt daxilində siz `name` və giriş və çıxış fayllarını təyin etməlisiniz.

 Budur `hokey.json`

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

 ### Çoxsaylı daxiletmə faylları
 Bu misalda olduğu kimi bir sıra fayl yollarını `infiles` tək yolun əvəzinə `infile` :

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### İndekslər
 Bir çox dillərə tərcümə edərkən, `hokey` edilən bütün tərcümələri sadalayan indeks faylı yarada bilər.
 və onlara bağlantılar təqdim edir

 *İndekslər yaradan zaman yalnız bir giriş mənbəyinə sahib ola bilərsiniz*

 `-I` / `--index` seçimini keçin, dəyər indeks faylının yaradılacağı yerdir, hansı fayl ola bilər
 və ya kataloq. Əgər bu bir kataloqdursa, şablon əsasında standart fayl adı istifadə olunacaq (aşağıya bax)

 İndeks çıxışının necə formatlandığını müəyyən etmək üçün `-A` / `--index-template` şablon`dan istifadə edin. 'html' təyin edə bilərsiniz,
 'markdown', 'mətn' və ya öz [HandlebarsJS](https://handlebarsjs.com/) şablonunuza gedən fayl yolu

 Öz şablonunuzu göstərsəniz, `-I` / `--index` üçün fayl (kataloq deyil) də göstərməlisiniz.
 seçim

 ## Dilləri tərcümə etməklə əylənin!

</pre>
