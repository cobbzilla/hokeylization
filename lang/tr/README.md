hokeyleşme
 =============
 Adı, 'hokey yerelleştirme' anlamına gelen bir portmanteau'dur.

 Çok basit çünkü çok basit: Google Translate'e dizeler gönderiyor

 Tercüme edebilirsin:
 * mesajları içeren bir JavaScript nesnesi
 * özyinelemeli bir dosya dizini

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
 Orijinal [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)'nin bu özel çevirisi
 kusurlu olabilir -- *düzeltmeler memnuniyetle karşılanır!* Lütfen bir [GitHub üzerinden çekme isteği gönderin](https://github.com/cobbzilla/yuebing/pulls),
 veya bunu yapmaktan çekiniyorsanız [bir sorun açın](https://github.com/cobbzilla/yuebing/issues)

 Bir çeviriyle ilgili yeni bir GitHub sorunu oluşturduğunuzda lütfen şunları yapın:
 * sayfa URL'sini ekleyin (tarayıcı adres çubuğundan kopyala/yapıştır)
 * yanlış olan metni tam olarak ekleyin (tarayıcıdan kopyala/yapıştır)
 * lütfen daha iyi bir çeviri önerisi sunun
 * **Teşekkürler!**

 # İçindekiler
 * [Kaynak](#Kaynak)
 * [Destek ve Finansman](#Destek-ve-Finansman)
 * [Kurulum](#Kurulum)
 * [Kurulum](#Kurulum)
 * [JavaScript dize kaynak dosyasını çevirme](#Translating-a-JavaScript-string-resource-file)
 * [Metin dosyalarının bir dizinini çevirme](#Metin dosyalarının-dizinini çevirme)
 * [Diğer seçenekler](#Diğer seçenekler)

 ## Kaynak
 * [GitHub'da hokeylization](https://github.com/cobbzilla/hokeylization)
 * [npm'de hokeylization](https://www.npmjs.com/package/hokeylization)

 ## Destek ve Finansman
 Profesyonel bir açık kaynaklı yazılım geliştiricisi olmaya çalışıyorum. çalışıyorum
 yazılım sektöründe uzun yıllar başarılı şirketler kurdum ve bunları halka açık şirketlere sattım.
 Son zamanlarda işimi kaybettim ve sıralanmış başka işim yok

 Bu yüzden yararlı bir yazılım yazmayı deneyeceğim ve işe yarayıp yaramadığını göreceğim.

 En küçük [Patreon aracılığıyla aylık katkıyı] bile içtenlikle takdir ediyorum(https://www.patreon.com/cobbzilla)

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

 Hokeylizer işleri iyi idare eder, ancak işaretleme dosyalarıyla çoğu zaman şu sorunları yaşayabilirsiniz:
 * Bozuk bağlantılar. Çeviride, bir işaretleme bağlantısı açıklaması sona erdikten sonra ( `]` ile) bir boşluk karakteri görünür, ancak
 hedef bağlantısı başlamadan önce ( `(` ile). Bu, işaretlemenin yanlış oluşturulmasına neden olur ve bağlantı
 belgeyi görüntülerken bozuldu.
 * Kod blokları çevrilir. Google çeviri, hangi işaretlemenin kodu dikkate aldığını ve neyin olmadığını bilmiyor
 * Girintili kod blokları için yanlış boşluk. Çeviride aralığı korumak zordur
 * Neredeyse her zaman değişmez değerler olmasını istediğinizde, `backticks` içindeki şeyler çevrilecektir.

 `-M` / `--markdown` bayrağı etkinleştirildiğinde:
 * `] (` kalıbı `] (` `](` yoğunlaştırılacak ve böylece bozuk işaretleme bağlantıları düzeltilecektir.
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

 ### Yardım
 Yardımı göstermek için `-h` / `--help` kullanın

 ## Mutlu Çeviri!

</pre>
