hokeyleşme
 =============
 Neden tüm uygulamamı veya sitemi Google Çeviri üzerinden çalıştırıp başka bir dilde temel bir çeviri alamıyorum?

 ***Şimdi yapabilirsin!***

 `hokeylization` adı, "hokey yerelleştirme" anlamına gelen bir portmantodur.

 Biraz hokey çünkü çok basit: dizeleri Google Translate'e gönderiyor

 Ve basit, ama aynı zamanda çok güçlü. HTML belgeleri için özel desteği vardır,
 [HandlebarsJS](https://handlebarsjs.com/) şablonları,
 ve [Markdown](https://daringfireball.net/projects/markdown) dosyaları.

 Tercüme edebilirsin:
 * mesajları içeren bir JavaScript nesnesi
 * herhangi bir sayıda dosya veya dizin, her zaman dizinleri yinelemeli olarak çaprazlama

 # Bunu başka bir dilde oku
 Bu README.md belgesi, hokeylization aracının kendisi kullanılarak şu dile çevrilmiştir:
 **[Google Çeviri tarafından desteklenen her dil](https://cloud.google.com/translate/docs/languages)!**

 Mükemmel olmadığına eminim ama umarım hiç yoktan iyidir!

 [🇸🇦 Arapça](../ar/README.md)
 [🇧🇩 Bengalce](../bn/README.md)
 [🇩🇪 Almanca](../de/README.md)
 [🇺🇸 İngilizce](../en/README.md)
 [🇪🇸 İspanyolca](../es/README.md)
 [🇫🇷 Fransızca](../fr/README.md)
 [çiçek](../ha/README.md)
 [🇮🇳 Hintçe](../hi/README.md)
 [🇮🇩 Endonezyaca](../id/README.md)
 [🇮🇷 İtalyanca](../it/README.md)
 [🇯🇵 Japonca](../ja/README.md)
 [🇰🇷 Korean](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Lehçe](../pl/README.md)
 [🇧🇷 Portekizce](../pt/README.md)
 [🇷🇺 Rusça](../ru/README.md)
 [🇰🇪 Svahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Türkçe](../tr/README.md)
 [🇵🇰 Urduca](../ur/README.md)
 [🇻🇳 Vietnamca](../vi/README.md)
 [🇨🇳 Çince](../zh/README.md)


 **[📚 ... Tüm Diller ...](../README.md)**
 ----

 ### README'nin bu çevirisiyle ilgili bir sorun mu var?
 Orijinal [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)'nin bu özel çevirisi
 kusurlu olabilir -- *düzeltmelere açığız!* Lütfen bir [GitHub üzerinden çekme isteği gönderin](https://github.com/cobbzilla/hokeylization/pulls),
 veya bunu yapmaktan çekiniyorsanız [bir sorun açın](https://github.com/cobbzilla/hokeylization/issues)

 Bir çeviriyle ilgili yeni bir GitHub sorunu oluşturduğunuzda lütfen şunları yapın:
 * sayfa URL'sini ekleyin (tarayıcı adres çubuğundan kopyala/yapıştır)
 * yanlış olan metni tam olarak ekleyin (tarayıcıdan kopyala/yapıştır)
 * lütfen neyin yanlış olduğunu açıklayın -- çeviri yanlış mı? biçimlendirme bir şekilde bozuk mu?
 * lütfen daha iyi bir çeviri veya metnin nasıl düzgün biçimlendirilmesi gerektiği konusunda bir öneride bulunun
 * **Teşekkürler!**

 # İçindekiler
 * [Kaynak](#Kaynak)
 * [Destek ve Finansman](#Destek-ve-Finansman)
 * [Kurulum](#Kurulum)
 * [Kurulum](#Kurulum)
 * [JavaScript dize kaynak dosyasını çevirme](#Translating-a-JavaScript-string-resource-file)
 * [Metin dosyalarının bir dizinini çevirme](#Metin dosyalarının-dizinini çevirme)
 * [Diğer seçenekler](#Diğer seçenekler)
 * [JSON toplu komutları](#JSON-toplu komutlar)

 ## Kaynak
 * [GitHub'da hokeylization](https://github.com/cobbzilla/hokeylization)
 * [npm'de hokeylization](https://www.npmjs.com/package/hokeylization)

 ## Destek ve Finansman
 Profesyonel bir açık kaynaklı yazılım geliştiricisi olmaya çalışıyorum. çalışıyorum
 yazılım sektöründe uzun yıllar başarılı şirketler kurdum ve bunları halka açık şirketlere sattım.
 Son zamanlarda işimi kaybettim ve sıralanmış başka işim yok

 Bu yüzden yararlı bir yazılım yazmayı deneyeceğim ve işe yarayıp yaramadığını göreceğim.

 Bu yazılımı kullanmaktan hoşlanıyorsanız,
 en küçük [Patreon aracılığıyla aylık katkı](https://www.patreon.com/cobbzilla)

 *Teşekkürler!*

 ## Kurulum
 Komut satırı aracını kullanmak için `npm` veya `yarn` kullanarak kurun:

    npm install -g hokeylization
    yarn global add hokeylization

 Kitaplık olarak kullanmak için çok daha küçük olan `lite` sürümünü yükleyin:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Ardından `hokey` komutu için yardıma bakın:

    hokey --help
    hokey -h

 Çıktıyı kendi dilinizde veya başka bir dilde görmek ister misiniz?

 `hokey` , kabuğunuzun ortam değişkenlerinden dili otomatik olarak algılamaya çalışır

 `LC_ALL` ortam değişkenini ayarlayarak bir dili zorlayabilirsiniz:

    LC_ALL=it hokey --help

 `hokeylization-lite` , komut yardımının yalnızca İngilizce olarak mevcut olduğunu unutmayın.

 ## Kurmak
 Google Çeviri projenizi tanımlamak için `GOOGLE_TRANSLATE_PROJECT_ID` ortam değişkenini ayarlayın

 `GOOGLE_APPLICATION_CREDENTIALS` ortam değişkenini indirdiğiniz JSON kimlik bilgilerine ayarlayın
 Google bulutta kimlik doğrulamanın nasıl çalıştığını bulduktan sonra (eğlenceli olabilir)

 Kaynak koddan çalışıyorsanız, bunları kaynaktaki bir `.env` dosyasına da koyabilirsiniz.
 çalışma zamanında [dotenv](https://www.npmjs.com/package/dotenv) aracılığıyla yüklenecekleri dizin

 ## JavaScript dizesi kaynak dosyasını çevirme
 Dize tablonuz şu iki biçimden birinde bir JavaScript dosyasında **olmalıdır**:

 ES6 dışa aktarma:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS dışa aktarma

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Bu dosyanın adı `myfile.en.js` ise, onu İspanyolca ve Almanca'ya şu şekilde çevirebilirsiniz:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Yukarıdaki `LANG` özeldir -- bu araçta ayrılmış bir kelimedir!

 `LANG` çıktı dosyalarının dil koduyla değiştirilir

 Böylece yukarıdaki komut dosyaları oluşturur:

    myfile.es.js
    myfile.de.js

 `-l` -l` / `--languages` seçeneği, ISO dil kodlarının virgülle ayrılmış bir listesidir.
 [Google Çeviri tarafından desteklenir](https://cloud.google.com/translate/docs/languages)

 Çıktı dosyası zaten mevcutsa, hangi anahtarların zaten mevcut olduğunu belirlemek için incelenecektir.
 Mevcut anahtarlar çevrilmeyecek. Eksik anahtarların çevirileri oluşturulacak ve eklenecek
 JS nesnesinin sonuna. Tüm dosya her zaman yeniden yazılır.

 Tüm tuşları yeniden çevirmeye zorlamak için `-f` / `--force` seçeneğini kullanın

 ## Metin dosyaları dizinini çevirme
 Ayrıca bir dosya dizinini de çevirebilirsiniz. hokeylization her birini tekrar tekrar ziyaret edecek
 dizine kaydedin ve içeriğini Google Translate üzerinden çalıştırın ve çıktıyı kaydedin
 ayrı bir dizin ağacında aynı adlı bir dosyaya

 Çevirinizin hedefi bir dizin olduğunda, bu mod etkinleştirilir

 `-o` / `--outfile` seçeneği çıktı dizinini belirtir

 **BÜYÜK UYARI**: Dizinleri çevirirken, bir çıktı dizini **BELİRTMEYİN**
 bu, giriş dizininizin içinde! Bunu yaparsanız, şunları yapacaksınız:
 * sonsuz özyinelemeye neden olur
 * Google faturanızı artırın
 * diskinizi doldurun
 * daha az eğlenmek

 İşte *yapılmaması gerekenler* ile ilgili bir örnek:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Bu çalıştığında, çevrilen dosyalar `templates/es` e yazılır ve böylece yeni olurlar.
 `templates/` altında oldukları için çevrilecek kaynak dosyalar -- bu işlem devam eder
 sonsuza kadar, yapma!

 #### Doğru kullanım
 Tamam, bir dizinde bazı e-posta şablonlarınız olduğunu varsayalım:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Tüm bunları İspanyolca ve Almancaya çevirmek için şunu çalıştırın:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Yukarıda, `LANG` ayrılmış bir kelimedir ve ISO dil kodu ile değiştirilecektir.

 Yukarıdakiler çalıştığında ne olur:
 * `templates/email/es` " ve `templates/email/de` dizinleri oluşturulacak (eğer yoksa)
 * `templates/email/en` içindeki her dosya İspanyolca ve Almanca'ya çevrilecektir.
 * `-f` / `--force` kullanmadığınız sürece mevcut çıktı dosyaları yenilenmeyecektir.
 * Sonunda aynı dizin yapısı ve 'en' altında olduğu gibi `es` ve `de` ' içindeki dosyalara sahip `en`

 ## Diğer seçenekler

 ### Kuru çalışma
 Ne yapılacağını görüntülemek için `-n` / `--dry-run` , ancak gerçekte herhangi bir API çağrısı yapmayın veya herhangi bir dosya yazmayın

 ### Kuvvet
 Zaten var olsalar bile çevirileri her zaman yeniden oluşturmak için "-f" / `--force` `-f`

 ### Kibrit
 Dizin modunda çalışırken işlenen dosyaları sınırlamak için `-m` / `--match`

 Kaynak dizininizdeki *her* dosyayı her zaman hedef dizininize çevirmek istemeyebilirsiniz.

 `-m` / `--match` seçeneğinin değeri, aşağıdakileri belirten bir normal ifadedir (kabuk alıntı kurallarına dikkat edin!)
 hangi dosyalar çevrilmeli

 Şüphe duyduğunuzda, hangi dosyaların çevrileceğini görmek için bu seçeneği `-n` / `--dry-run` ile birleştirebilirsiniz.

 ### Hariç
 Bazen `-m` çok fazla dosyayla eşleşir. Açıkça hariç tutmak için `-e` / `--excludes` --excludes` seçeneğini kullanın
 aksi takdirde eşleşecek dosyalar

 Birden çok normal ifadeyi boşluklarla ayırarak listeleyebilirsiniz.

 Yaygın bir kullanım şöyle olacaktır: `--excludes node_modules dist \.git build tmp`

 ### Gidon
 Çevrilecek dizeler, iki veya üç kaşlı `{{ handlebars }}` şablonlarını içerebilir.

 Muhtemelen bu şablonların içindekilerin çevrilmesini *İSTEMİYORSUNUZ*

 `-H` / `--handlebars` bayrağını iletin ve `{{ ... }}` içindeki hiçbir şey çevrilmeyecek

 ### İşaretleme
 Markdown ne metin ne de html olduğundan, Google Çeviri'nin bununla ilgili bazı zorlukları var

 `-M` / `--markdown` bayrağı, işaretleme dosyaları için özel işleme sağlar

 Markdown dosyalarıyla, `-M` bayrağını kullanmazsanız, muhtemelen şu sorunları bulacaksınız:
 * Bozuk bağlantılar. Çeviride, bir işaretleme bağlantısı açıklaması sona erdikten sonra ( `]` ile) bir boşluk karakteri görünür, ancak
 hedef bağlantısı başlamadan önce ( `(` ile). Bu, işaretlemenin yanlış oluşturulmasına neden olur ve bağlantı
 belgeyi görüntülerken bozuldu.
 * Kod blokları çevrilir. Google çeviri, hangi işaretlemenin kodu dikkate aldığını ve neyin olmadığını bilmiyor
 * Girintili kod blokları için yanlış boşluk. Çeviride aralığı korumak zordur
 * Neredeyse her zaman değişmez değerler olmasını istediğinizde, `backticks` içindeki şeyler çevrilecektir.

 `-M` / `--markdown` bayrağı etkinleştirildiğinde:
 * `](` kalıbı `](` `](` yoğunlaştırılacak ve böylece bozuk işaretleme bağlantıları düzeltilecektir.
 * Girintili kod bloklarının çevresine, uygun girintiyi koruyarak ve çevrilmemelerini sağlayan bir "çeviri yok" sarmalayıcı yerleştirilecektir.
 * Tercüme edilmediklerinden emin olmak için "geri dönüş işaretleri `backticks` içindeki metnin etrafına "çeviri yok" sarmalayıcı yerleştirilecektir.

 ### Süreç olarak
 Normalde her şey düz metin olarak işlenir

 İçeriğiniz HTML ise, `-p html` / `--process-as html` seçeneğini geçmezseniz karışık olur

 ### Filtre
 Maceraperestler için: Bir dizindeki dosyaları işlerken `-F` / `--filter` seçeneğini iletebilirsiniz.
 çıktıyı dosya sistemine yazılmadan önce filtrelemek için

 Bu seçeneğin değeri, `filter` bir JS dosyasının yolu olmalıdır.

 `filter` işlevi "zaman `async` çünkü buna `await` çağrılır

 Dosyalar diske yazılmadan önce, tüm dosya içeriği bir dizge olarak `filter` işlevine iletilecektir.

 `filter` işlevinden gelen dönüş değeri, gerçekte depoya yazılacak olan değerdir.

 Böylece, sonunda ne yazılacağı üzerinde tam kontrole sahip olursunuz.

 `filter` komut dosyası aşağıdaki konumlarda aranacaktır ( `.js` ile eklenecektir)
 ad, zaten `.js` ile bitmiyorsa)
 * Geçerli dizin
 * Geçerli dizinde `.hokey-filters` adlı bir dizin
 * `${HOME}/.hokey-filters` adlı bir dizin, burada `${HOME}` geçerli kullanıcının ana dizini
 * Yerleşik [filtreler dizini](https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### Filtre Parametreleri
 `filter` dizesi birden çok kelime olabilir. Bu durumda, ilk sözcük filtre adıdır ve
 kalan kelimeler `filter` işlevine argüman olarak iletilecektir.

 ### Yardım
 Yardımı göstermek için `-h` / `--help` kullanın

 ## JSON toplu komutları
 `-j` / `--json` seçeneği ile birden çok koordineli `hokey` komutunu çalıştırabilirsiniz.

 Geleneksel olarak bu dosyaya `hokey.json` adı verilir, ancak onu istediğiniz şekilde adlandırabilirsiniz.

 Bir dizini `-j` seçeneği olarak iletirseniz, `hokey` " o dizinde bir `hokey.json` .

 JSON dosyası bir nesne içermelidir. Bu nesne içinde, özellik adları ile aynıdır.
 komut satırı seçenekleri ve `hokey` adlı bir ek özellik

 `hokey` özelliği çalıştırılacak bir dizi komuttur. Bu komutlar içinde bildirilen özellikler,
 dış nesnedeki yinelenen bildirimleri geçersiz kılar.

 `hokey` dizisindeki her nesne içinde bir `name` ve giriş ve çıkış dosyalarını belirtmelisiniz.

 İşte bir `hokey.json`

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

 ### Çoklu giriş dosyaları
 Bu örnekte olduğu gibi, tek bir yol "infile" yerine bir dizi dosya yolunu `infile` `infiles` iletin:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Dizinler
 Birçok dile çeviri yaparken, `hokey` yapılan tüm çevirileri listeleyen bir dizin dosyası oluşturabilir.
 ve onlara bağlantılar sağlar

 *İndeks oluştururken yalnızca bir giriş kaynağınız olabilir*

 `-I` / `--index` seçeneğini iletin, değer, bir dosya olabilen indeks dosyasının oluşturulacağı yerdir.
 veya bir dizin. Bu bir dizinse, şablona dayalı olarak varsayılan bir dosya adı kullanılacaktır (aşağıya bakın)

 Dizin çıktısının nasıl biçimlendirildiğini belirlemek için `-A` / `--index-template` kullanın. 'html' belirtebilirsiniz,
 'markdown', 'text' veya kendi [HandlebarsJS](https://handlebarsjs.com/) şablonunuzun dosya yolu

 Kendi şablonunuzu belirtirseniz, `-I` / `--index` için de bir dosya (bir dizin değil) belirtmelisiniz.
 seçenek

 ## Dil çevirirken iyi eğlenceler!

</pre>
