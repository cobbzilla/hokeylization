Hokeylizasiýa
 =============
 Ady portmanteau bolup, 'hokkeý lokalizasiýasy' diýmekdir.

 Bu gaty ýönekeý, sebäbi Google Translate-a setirler iberýär

 Terjime edip bilersiňiz:
 * habarlary öz içine alýan JavaScript obýekti
 * faýllaryň katalogy, yzygiderli

 # Muny başga dilde okaň
 Bu README.md resminamasy, hokeylizasiýa guralyny ulanyp terjime edildi
 ** [Google Translate tarapyndan goldanýan her dil](https://cloud.google.com/translate/docs/languages)! **

 Kämil däldigine ynanýaryn, ýöne hiç zatdan gowudyr diýip umyt edýärin!

 [🇸🇦 Arapça](lang / ar / README.md)
 [Ali Bengali](lang / bn / README.md)
 [🇩🇪 Nemesçe](lang / de / README.md)
 [🇺🇸 Iňlis](lang / en / README.md)
 [🇪🇸 Ispança](lang / es / README.md)
 [🇫🇷 Fransuzça](lang / fr / README.md)
 [🇹🇩 Hausa](lang / ha / README.md)
 [🇮🇳 Hindi](lang / hi / README.md)
 [🇮🇩 Indoneziýa](lang / id / README.md)
 [🇮🇹 Italýança](lang / it / README.md)
 [🇯🇵 Japaneseaponça](lang / ja / README.md)
 [🇰🇷 Koreýçe](lang / ko / README.md)
 [🇮🇳 Maranthi](lang / mr / README.md)
 [Ish Polýakça](lang / pl / README.md)
 [🇧🇷 Portugaliýa](lang / pt / README.md)
 [🇷🇺 Rusça](lang / ru / README.md)
 [Wa Suwaýili](lang / sw / README.md)
 [Ag Tagalog](lang / tl / README.md)
 [Ish Türkçe](lang / tr / README.md)
 [🇵🇰 urdu](lang / ur / README.md)
 [🇻🇳 Wýetnamly](lang / vi / README.md)
 [🇨🇳 Hytaýça](lang / zh / README.md)


 ** [📚 ... Languageshli diller ...](lang / README.md) **
 ----

 ### README-iň bu terjimesinde näsazlyk barmy?
 Asyl terjimesi [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 kemçilikli bolup biler - * düzedişler gaty hoş geldiňiz! * GitHub-a çekmek haýyşyny iberiň (https://github.com/cobbzilla/yuebing/pulls),
 ýa-da muny etmek üçin amatly däl bolsaňyz, [bir meseläni açyň](https://github.com/cobbzilla/yuebing/issues)

 Terjime hakda täze GitHub meselesini döredeniňizde, haýyş edýärin:
 * sahypa URL-ni goşuň (brauzeriň salgy setirinden göçüriň / göçüriň)
 * nädogry teksti goşuň (brauzerden göçüriň / göçüriň)
 * nämäniň nädogrydygyny düşündirmegiňizi haýyş edýäris - terjime nädogrymy? formatlamak nädip bozuldy?
 * has gowy terjime ýa-da tekstiň nädip formatlanmalydygy barada teklip hödürläň
 * **Sagbol!**

 # Mazmuny
 * [Çeşme](# Çeşme)
 * [Goldaw we maliýeleşdirmek](# Goldaw we maliýeleşdirmek)
 * [Gurnama](# Gurnama)
 * [Gurnama](# Gurnama)
 * [JavaScript simli çeşme faýlyny terjime etmek](# Terjime-a-JavaScript-string-source-file)
 * [Tekst faýllarynyň katalogyny terjime etmek](# Tekst-faýllaryň terjimesi-a-katalogy)
 * [Beýleki wariantlar](# Beýleki wariantlar)

 ## Çeşme
 * [GitHub-da hokeylizasiýa](https://github.com/cobbzilla/hokeylization)
 * [npm-de hokeylizasiýa](https://www.npmjs.com/package/hokeylization)

 ## Goldaw we maliýeleşdirmek
 Professional açyk çeşme programma üpjünçisi bolmaga synanyşýaryn. Men işleýärin
 programma üpjünçiligi pudagy köp ýyl bäri üstünlikli kompaniýalara başladym we olary jemgyýetçilik kompaniýalaryna satdym.
 Recentlyakynda işimi ýitirdim, hatara düzülen başga işim ýok

 Şonuň üçin peýdaly programma üpjünçiligini ýazmaga synanyşaryn we munuň işleýändigini ýa-da ýokdugyny görerin

 Iň kiçisine-de [Patreonyň üsti bilen aýlyk goşant] tüýs ýürekden minnetdar bolardym (https://www.patreon.com/cobbzilla)

 ## Gurmak
 Buýruk setiriniň guralyny ulanmak üçin " `npm` ýa-da "ýüplük" ulanyp `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Kitaphana hökmünde ulanmak üçin has kiçi bolan “ `lite` ” wersiýasyny guruň:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Soňra " `hokey` " buýrugy üçin kömege serediň:

    hokey --help
    hokey -h

 Langauge ýa-da başga bir dilde çykyş görmek isleýärsiňizmi?

 " `hokey` ", gabygyň daşky gurşaw üýtgeýjilerinden dili awtomatiki kesgitlemäge synanyşýar

 " `LC_ALL` " gurşaw üýtgeýjisini belläp, bir dili mejbur edip bilersiňiz:

    LC_ALL=it hokey --help

 " `hokeylization-lite` gurnan bolsaňyz, buýruk kömegi diňe iňlis dilinde elýeterlidir

 ## Gurmak
 Google Terjime taslamaňyzy kesgitlemek üçin " `GOOGLE_TRANSLATE_PROJECT_ID` " gurşaw üýtgeýjisini düzüň

 Göçürilen JSON şahsyýet maglumatlaryna “ `GOOGLE_APPLICATION_CREDENTIALS` ” gurşaw üýtgeýjisini düzüň.
 Google buludynda autentifikasiýanyň nähili işleýändigini anyklandan soň (gyzykly bolup biler)

 Çeşme kodundan işleýän bolsaňyz, çeşmäni " `.env` " faýlyna hem goýup bilersiňiz
 [dotenv](https://www.npmjs.com/package/dotenv) arkaly iş wagty ýüklener.

 ## JavaScript setir çeşme faýlyny terjime etmek
 Setir tablisasy ** şu iki görnüşiň birinde JavaScript faýlynda bolmaly:

 ES6 eksporty:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS eksporty

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Bu faýlyň ady " `myfile.en.js` " bolsa, ony ispan we nemes dillerine terjime edip bilersiňiz:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Aboveokardaky " `LANG` " aýratyn - bu guralda ätiýaçlandyrylan söz!

 " `LANG` " çykyş faýllary üçin dil kody bilen çalşyrylýar

 Şeýlelik bilen ýokardaky buýruk faýllary döredýär:

    myfile.es.js
    myfile.de.js

 `-l` / `--languages` opsiýasy ISO dil kodlarynyň vergul bilen bölünen sanawydyr
 [Google Translate tarapyndan goldanýar](https://cloud.google.com/translate/docs/languages)

 Çykyş faýly eýýäm bar bolsa, haýsy düwmeleriň bardygyny anyklamak üçin gözden geçiriler.
 Bar bolan düwmeler terjime edilmez. Missingitirilen düwmeler üçin terjimeler dörediler we goşular
 JS obýektiniň soňuna çenli. Bütin faýl elmydama täzeden ýazylýar.

 `-f` düwmeleri gaýtadan terjime etmäge mejbur etmek üçin "-f" / " `--force` opsiýasyny ulanyň

 ## Tekst faýllarynyň katalogyny terjime etmek
 Şeýle hem faýllaryň katalogyny terjime edip bilersiňiz. hokeylizasiýa her birine yzygiderli baryp görer
 bukjada faýl ediň we mazmunyny Google Translate arkaly işlediň we çykyşy ýatda saklaň
 aýratyn katalog agajynda birmeňzeş atlandyrylan faýla

 Terjimäňiziň maksady katalog bolanda, bu re modeim açyk bolýar

 " `--outfile` `-o` opsiýasy çykyş katalogyny kesgitleýär

 ** ULY DUNDURYŞ **: Kataloglary terjime edeniňizde, ** çykyş katalogyny görkezmäň
 bu siziň giriş katalogyňyzda! Şeýle etseňiz:
 * çäksiz gaýtalanmaga itergi bermek
 * Google tölegiňizi işlediň
 * diskiňizi dolduryň
 * az hezil ediň

 Ine * etmeli däl zadyň mysaly:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Bu işledilende terjime edilen faýllar " `templates/es` " -e ýazylýar we şeýlelik bilen täze bolýar
 terjime etmek üçin deslapky faýllar, sebäbi " `templates/` " astyndadyr - bu amal dowam edýär
 baky, etme!

 #### Dogry ulanylyşy
 Bolýar, bir katalogda käbir e-poçta şablonlaryňyz bar diýeliň:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Bularyň hemmesini ispan we nemes dillerine terjime etmek üçin işlediň:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Aboveokardaky sözlerde " `LANG` " ätiýaçlandyrylan söz bolup, onuň ýerine ISO dil kody berler

 Aboveokardakylar işledilende näme bolýar:
 * " `templates/email/es` we " `templates/email/de` kataloglary dörediler (ýok bolsa)
 * " `templates/email/en` " -däki her bir faýl ispan we nemes dillerine terjime ediler
 * "-F" / " `-f` ulanmasaňyz, bar bolan çykyş faýllary täzeden `--force`
 * Birmeňzeş katalog gurluşy we " `es` içindäki "de" ýaly `en` bilen `de`

 ## Beýleki saýlawlar

 ### Gury ylga
 Näme ediljekdigini görkezmek üçin `-n` / `--dry-run` , ýöne aslynda API jaň etmäň ýa-da faýl ýazmaň

 ### Güýç
 Terjimeleri hemişe bar bolsa-da täzeden `--force` `-f` -den geçiň

 ### Duşuşyk
 Katalog re iniminde işleýän faýllary çäklendirmek üçin `-m` / `--match` geçiň

 Elmydama çeşme katalogyňyzdaky * her * faýly maksatly katalogyňyza terjime etmek islemersiňiz

 " `-m` " / " `--match` opsiýasynyň bahasy kesgitleýän regexdir (gabyk sitatasynyň düzgünlerinden ägä boluň!)
 haýsy faýllary terjime etmeli

 Şübhesiz, haýsy faýllaryň terjime ediljekdigini görmek üçin bu opsiýany `-n` / `--dry-run` bilen birleşdirip bilersiňiz.

 ### aýyrýar
 Käwagt `-m` gaty köp faýl bilen gabat gelýär. Aç-açan aýyrmak üçin " `-e` / `--excludes` opsiýasyny ulanyň
 başgaça gabat gelýän faýllar

 Boşluklar bilen bölünen birnäçe regexleri sanap bilersiňiz

 Köplenç ulanylyş: `--excludes node_modules dist \.git build tmp`

 ### Tutuşlyklar
 Terjime etmek üçin setirlerde iki ýa-da üç sany egri ýaýly " `{{ handlebars }}` " şablonlary bolup biler

 Belki, şol galyplaryň içindäki zatlaryň terjime edilmegini islemeýärsiňiz

 "-H" / " `-H` " baýdagyny `--handlebars` we " `{{ ... }}` " içindäki zatlar terjime edilmez

 ### Markdown
 Markdown ne tekst, ne-de html, şonuň üçin Google Translate-de käbir kynçylyklar bar

 " `--markdown` `-M` baýdagy bellik faýllary üçin ýörite işlemäge mümkinçilik berýär

 Bellenen faýllar bilen, " `-M` " baýdagyny ulanmasaňyz, bu problemalary taparsyňyz:
 * Döwülen baglanyşyklar. Terjimede, baglanyşyk baglanyşygynyň beýany gutarandan soň (" `]` " bilen) boşluk nyşany peýda bolýar, ýöne
 nyşan baglanyşygy başlamazdan ozal ( `(` ) bilen. Bu bellikleriň nädogry görkezilmegine we baglanyşyk
 resminama seredende bozulýar.
 * Kod bloklary terjime edilýär. Google terjimesi markdown haýsy kody hasaplaýandygyny we nämäni hasaplamaýandygyny bilenok
 * Indentirlenen kod bloklary üçin nädogry aralyk. Aralygy terjime etmekde saklamak kyn
 * “ `backticks` ” içindäki zatlar, hemişe diýen ýaly göçme manyda bolmagyny islän wagtyňyz terjime ediler

 Haçan-da " `--markdown` `-M` açyk bolsa:
 * Nusga `](` " kondensirlener " `](` şeýlelik bilen döwülen bellik baglanyşyklaryny düzeder
 * "Terjime edilmeýän" örtük indentirlenen kod bloklarynyň töweregine ýerleşdiriler, dogry indentasiýa saklanar we terjime edilmezligini üpjün eder.
 * Terjime `backticks` üpjün etmek üçin "arka ýazgylaryň" içinde tekstiň töweregine "terjime ýok" deri ýerleşdiriler

 ### Amal
 Adatça hemme zat ýönekeý tekst hökmünde işlenýär

 Mazmunyňyz HTML bolsa, " `-p html` " / `--process-as html` opsiýasyny geçmeseňiz, gümürtik bolar.

 ### Süzgüç
 Başdangeçirme üçin: faýllary katalogda gaýtadan işlenende, " `-F` " / "- `--filter` " opsiýasyny geçip bilersiňiz
 çykyşyny faýl ulgamyna ýazylmazdan ozal süzmek

 Bu opsiýanyň gymmaty, " `filter` " atly funksiýany eksport edýän JS faýlyna barýan ýol bolmaly

 "Süzgüç" funksiýasy " `filter` " bolmaly, sebäbi `await` " `async` " çagyrylar

 Faýllar diske ýazylmazdan ozal ähli faýl mazmuny setir hökmünde “ `filter` ” funksiýasyna geçiriler

 " `filter` " funksiýasyndan yzyna gaýtaryş gymmaty, aslynda ammarda ýazylar

 Şeýlelik bilen, ahyrynda ýazyljak zatlara doly gözegçilik edýärsiňiz

 ### Kömek ediň
 `--help` görkezmek üçin "-h" / " `-h` " ulanyň

 ## Dilleri terjime etmekde hezil ediň!

</pre>
