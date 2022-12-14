होकेलाइज़ेशन
 =============
 मैं Google अनुवाद के माध्यम से अपना पूरा ऐप या साइट क्यों नहीं चला सकता और किसी अन्य भाषा में मूल अनुवाद प्राप्त नहीं कर सकता?

 ***अब आप कर सकते हैं!***

 नाम `hokeylization` एक पोर्टमैंट्यू है, जिसका अर्थ है 'होकी स्थानीयकरण'

 यह कुछ हद तक आसान है क्योंकि यह बहुत आसान है: यह Google अनुवाद को तार भेजता है

 और यह सरल है, फिर भी बहुत शक्तिशाली भी है। इसमें HTML दस्तावेज़ों के लिए विशेष समर्थन है,
 [हैंडलबार्सजेएस](https://handlebarsjs.com/) टेम्प्लेट,
 और [मार्कडाउन](https://daringfireball.net/projects/markdown) फाइलें।

 आप अनुवाद कर सकते हो:
 * संदेश युक्त एक जावास्क्रिप्ट वस्तु
 * फ़ाइलों या निर्देशिकाओं की कोई भी संख्या, हमेशा निर्देशिकाओं को पुनरावर्ती रूप से ट्रैवर्स करना

 #इसे दूसरी भाषा में पढ़ें
 इस README.md दस्तावेज़ का अनुवाद होकेलाइज़ेशन टूल का उपयोग करके किया गया है
 **[Google अनुवाद द्वारा समर्थित प्रत्येक भाषा](https://cloud.google.com/translate/docs/languages)!**

 मुझे यकीन है कि यह सही नहीं है, लेकिन मुझे आशा है कि यह कुछ भी नहीं से बेहतर है!

 [🇸🇦 अरबी](../ar/README.md)
 [🇧🇩 बंगाली](../bn/README.md)
 [🇩🇪 जर्मन](../de/README.md)
 [🇺🇸 अंग्रेजी](../hi/README.md)
 [🇪🇸 स्पेनिश](../es/README.md)
 [🇫🇷 फ़्रेंच](../fr/README.md)
 [🇹🇩 हौसा](../ha/README.md)
 [🇮🇳 हिन्दी](../hi/README.md)
 [🇮🇩 इन्डोनेशियाई](../id/README.md)
 [🇮🇹 इटालियन](../it/README.md)
 [🇯🇵 जापानी](../ja/README.md)
 [🇰🇷 कोरियाई](../ko/README.md)
 [🇮🇳 मरांथी](../mr/README.md)
 [🇵🇱 पोलिश](../pl/README.md)
 [🇧🇷 पुर्तगाली](../pt/README.md)
 [🇷🇺 रूसी](../ru/README.md)
 [🇰🇪 स्वाहिली](../sw/README.md)
 [🇵🇭 तागालोग](../tl/README.md)
 [🇹🇷 तुर्की](../tr/README.md)
 [🇵🇰 उर्दू](../ur/README.md)
 [🇻🇳 वियतनामी](../vi/README.md)
 [🇨🇳 चीनी](../zh/README.md)


 **[📚 ... सभी भाषाएं ...](../README.md)**
 ----

 ### क्या README के इस अनुवाद में कोई समस्या है?
 मूल [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md) का यह विशेष अनुवाद
 त्रुटिपूर्ण हो सकता है -- *सुधारों का बहुत स्वागत है!* कृपया [GitHub पर पुल अनुरोध](https://github.com/cobbzilla/hokeylization/pulls) भेजें,
 या यदि आप ऐसा करने में सहज नहीं हैं, [एक मुद्दा खोलें](https://github.com/cobbzilla/hokeylization/issues)

 जब आप अनुवाद के बारे में एक नया GitHub मुद्दा बनाते हैं, तो कृपया यह करें:
 * पेज यूआरएल शामिल करें (ब्राउज़र एड्रेस बार से कॉपी/पेस्ट करें)
 * सटीक टेक्स्ट शामिल करें जो गलत है (ब्राउज़र से कॉपी/पेस्ट करें)
 * कृपया बताएं कि क्या गलत है -- क्या अनुवाद गलत है? स्वरूपण किसी भी तरह टूटा हुआ है?
 * कृपया एक बेहतर अनुवाद का सुझाव दें, या पाठ को ठीक से कैसे स्वरूपित किया जाना चाहिए
 * **आपको धन्यवाद!**

 # सामग्री
 * [स्रोत](# स्रोत)
 * [सहायता और वित्त पोषण](# समर्थन और वित्त पोषण)
 * [स्थापना](# स्थापना)
 * [सेटअप](#सेटअप)
 * [एक जावास्क्रिप्ट स्ट्रिंग संसाधन फ़ाइल का अनुवाद करना](# अनुवाद-ए-जावास्क्रिप्ट-स्ट्रिंग-संसाधन-फ़ाइल)
 * [पाठ फ़ाइलों की निर्देशिका का अनुवाद करना](# अनुवाद-ए-निर्देशिका-की-पाठ-फ़ाइलें)
 * [अन्य विकल्प](# अन्य विकल्प)
 * [JSON बैच कमांड](# JSON-बैच-कमांड)

 ## स्रोत
 * [गिटहब पर होकेलाइज़ेशन](https://github.com/cobbzilla/hokeylization)
 * [एनपीएम पर होकेलाइज़ेशन](https://www.npmjs.com/package/hokeylization)

 ## समर्थन और अनुदान
 मैं एक पेशेवर ओपन सोर्स सॉफ्टवेयर डेवलपर बनने का प्रयास कर रहा हूं। मैं में काम कर रहा हूँ
 कई वर्षों से सॉफ्टवेयर उद्योग, मैंने सफल कंपनियों को शुरू किया है और उन्हें सार्वजनिक कंपनियों को बेच दिया है।
 हाल ही में मैंने अपनी नौकरी खो दी है, और मेरे पास वास्तव में कोई अन्य काम नहीं है

 इसलिए मैं उपयोगी सॉफ़्टवेयर लिखने की कोशिश करने जा रहा हूँ और देखूँगा कि क्या यह काम करता है

 यदि आप इस सॉफ़्टवेयर का उपयोग करने का आनंद लेते हैं, तो मुझे भी प्राप्त करने में बहुत खुशी होगी
 सबसे छोटा [पैट्रियन के माध्यम से मासिक योगदान](https://www.patreon.com/cobbzilla)

 *आपको धन्यवाद!*

 ## स्थापना
 कमांड लाइन टूल का उपयोग करने के लिए, `npm` या `yarn` का उपयोग करके इंस्टॉल करें:

    npm install -g hokeylization
    yarn global add hokeylization

 पुस्तकालय के रूप में उपयोग करने के लिए, `lite` संस्करण स्थापित करें, जो बहुत छोटा है:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 फिर `hokey` कमांड के लिए सहायता देखें:

    hokey --help
    hokey -h

 अपनी भाषा या किसी अन्य भाषा में आउटपुट देखना चाहते हैं?

 `hokey` आपके शेल के पर्यावरण चर से स्वचालित रूप से भाषा का पता लगाने की कोशिश करता है

 आप `LC_ALL` पर्यावरण चर सेट करके किसी भाषा को बाध्य कर सकते हैं:

    LC_ALL=it hokey --help

 ध्यान दें कि यदि आपने `hokeylization-lite` स्थापित किया है, तो कमांड सहायता केवल अंग्रेज़ी में उपलब्ध है

 ## स्थापित करना
 अपने Google अनुवाद प्रोजेक्ट की पहचान करने के लिए `GOOGLE_TRANSLATE_PROJECT_ID` पर्यावरण चर सेट करें

 आपके द्वारा डाउनलोड किए गए JSON क्रेडेंशियल के लिए `GOOGLE_APPLICATION_CREDENTIALS` पर्यावरण चर सेट करें
 यह पता लगाने के बाद कि प्रमाणीकरण Google क्लाउड पर कैसे काम करता है (यह मजेदार हो सकता है)

 यदि आप स्रोत कोड से चल रहे हैं, तो आप इन्हें स्रोत में `.env` फ़ाइल में भी डाल सकते हैं
 निर्देशिका वे [dotenv](https://www.npmjs.com/package/dotenv) के माध्यम से रनटाइम पर लोड की जाएंगी

 ## जावास्क्रिप्ट स्ट्रिंग संसाधन फ़ाइल का अनुवाद
 आपकी स्ट्रिंग तालिका **चाहिए** इन दो रूपों में से किसी एक में JavaScript फ़ाइल में होनी चाहिए:

 ES6 निर्यात:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 कॉमनजेएस एक्सपोर्ट

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 अगर इस फ़ाइल को `myfile.en.js` नाम दिया गया था, तो आप इसका स्पेनिश और जर्मन में अनुवाद कर सकते हैं:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 उपरोक्त में `LANG` विशेष है -- यह इस उपकरण में एक आरक्षित शब्द है!

 `LANG` को आउटपुट फ़ाइलों के लिए भाषा कोड से बदल दिया जाता है

 इस प्रकार उपरोक्त आदेश फाइलें बनाता है:

    myfile.es.js
    myfile.de.js

 `-l` / `--languages` विकल्प आईएसओ भाषा कोड की अल्पविराम से अलग सूची है
 [Google अनुवाद द्वारा समर्थित](https://cloud.google.com/translate/docs/languages)

 यदि आउटपुट फ़ाइल पहले से मौजूद है, तो यह निर्धारित करने के लिए जांच की जाएगी कि कौन सी कुंजियाँ पहले से मौजूद हैं।
 मौजूदा कुंजियों का अनुवाद नहीं किया जाएगा. गुम चाबियों के अनुवाद उत्पन्न और संलग्न किए जाएंगे
 JS ऑब्जेक्ट के अंत तक। पूरी फाइल हमेशा फिर से लिखी जाती है।

 सभी कुंजियों के पुनर्अनुवाद को बाध्य करने के लिए, `-f` / `--force` विकल्प का उपयोग करें

 ## पाठ फ़ाइलों की निर्देशिका का अनुवाद
 आप फ़ाइलों की निर्देशिका का अनुवाद भी कर सकते हैं। होकेलाइज़ेशन हर बार बार-बार आएगा
 निर्देशिका में फ़ाइल करें और Google अनुवाद के माध्यम से इसकी सामग्री चलाएं, और आउटपुट सहेजें
 एक अलग निर्देशिका ट्री में एक समान रूप से नामित फ़ाइल के लिए

 जब आपके अनुवाद का लक्ष्य एक निर्देशिका है, तो यह मोड सक्षम है

 `-o` / `--outfile` विकल्प आउटपुट निर्देशिका को निर्दिष्ट करता है

 **बड़ी चेतावनी**: निर्देशिकाओं का अनुवाद करते समय, **ऐसा न करें** एक आउटपुट निर्देशिका निर्दिष्ट करें
 वह आपकी इनपुट निर्देशिका के भीतर है! यदि आप ऐसा करते हैं, तो आप:
 * अनंत रिकर्सन प्रेरित करें
 *अपना Google बिल बढ़ाएं
 * अपनी डिस्क भरें
 * कम मज़ा लें

 यहां एक उदाहरण दिया गया है कि *क्या नहीं करना है*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 जब यह चलता है, अनुवादित फ़ाइलें `templates/es` पर लिखी जाती हैं, और इस प्रकार नई हो जाती हैं
 स्रोत फ़ाइलों का अनुवाद करना है, क्योंकि वे `templates/` के अंतर्गत हैं -- यह प्रक्रिया जारी है
 हमेशा के लिए, ऐसा मत करो!

 #### सही उपयोग
 ठीक है, मान लें कि आपके पास निर्देशिका में कुछ ईमेल टेम्पलेट हैं:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 इन सभी का स्पेनिश और जर्मन में अनुवाद करने के लिए, दौड़ें:

    hokey -l es,de -o templates/email/LANG templates/email/en

 उपरोक्त में, `LANG` एक आरक्षित शब्द है और इसे ISO भाषा कोड से बदल दिया जाएगा

 क्या होता है जब उपरोक्त चलता है:
 * `templates/email/es` ' और `templates/email/de` निर्देशिका बनाई जाएगी (यदि वे मौजूद नहीं हैं)
 * `templates/email/en` की प्रत्येक फ़ाइल का स्पेनिश और जर्मन में अनुवाद किया जाएगा
 * जब तक आप `-f` / `--force` का उपयोग नहीं करते, मौजूदा आउटपुट फ़ाइलें पुन: उत्पन्न नहीं होंगी
 * आप एक समान निर्देशिका संरचना और फाइलों के साथ `es` और `de` के साथ समाप्त होंगे जैसे आपके पास `en` के तहत है

 ## अन्य विकल्प

 ### पूर्वाभ्यास
 जो किया जाएगा उसे प्रदर्शित करने के लिए `-n` / `--dry-run` पास करें, लेकिन वास्तव में कोई एपीआई कॉल न करें या कोई फाइल न लिखें

 ### ताकत
 अनुवादों को हमेशा पुन: उत्पन्न करने के लिए `-f` / `--force` पास करें, भले ही वे पहले से मौजूद हों

 ### मिलान
 निर्देशिका-मोड में चलते समय संसाधित फ़ाइलों को सीमित करने के लिए `-m` / `--match` पास करें

 हो सकता है कि आप हमेशा अपनी स्रोत निर्देशिका में *प्रत्येक* फ़ाइल को अपनी लक्षित निर्देशिका में अनुवाद नहीं करना चाहें

 `-m` / `--match` विकल्प का मान एक रेगेक्स है (नियमों को उद्धृत करने वाले शेल से सावधान रहें!) जो निर्दिष्ट करता है
 किन फाइलों का अनुवाद किया जाना चाहिए

 जब संदेह हो, तो आप इस विकल्प को `-n` / `--dry-run` साथ जोड़कर देख सकते हैं कि किन फाइलों का अनुवाद किया जाएगा

 ### बहिष्कृत
 कभी-कभी आपका `-m` बहुत अधिक फाइलों से मेल खाता है। स्पष्ट रूप से बहिष्कृत करने के लिए `-e` / `--excludes` विकल्प का उपयोग करें
 फ़ाइलें जो अन्यथा मेल खातीं

 आप रिक्त स्थान द्वारा अलग किए गए एकाधिक रेगेक्स सूचीबद्ध कर सकते हैं

 एक सामान्य उपयोग होगा: `--excludes node_modules dist \.git build tmp`

 ### हैंडलबार
 अनुवाद करने के लिए स्ट्रिंग में `{{ handlebars }}` टेम्प्लेट हो सकते हैं, या तो दो या तीन घुंघराले ब्रेसिज़ के साथ

 आप शायद *नहीं* चाहते हैं कि उन टेम्प्लेट के अंदर की सामग्री का अनुवाद किया जाए

 `-H` / `--handlebars` ध्वज पास करें, और `{{ ... }}` के भीतर कुछ भी अनुवादित नहीं किया जाएगा

 ### मार्कडाउन
 मार्कडाउन न तो टेक्स्ट है और न ही html, इसलिए Google अनुवाद में इसके साथ कुछ कठिनाइयाँ हैं

 `-M` / `--markdown` फ्लैग मार्कडाउन फाइलों के लिए विशेष हैंडलिंग को सक्षम बनाता है

 मार्कडाउन फाइलों के साथ, यदि आप `-M` ध्वज का उपयोग नहीं करते हैं, तो आपको शायद ये समस्याएं मिलेंगी:
 * टूटे हुए लिंक। अनुवाद में, एक मार्कडाउन लिंक विवरण समाप्त होने के बाद एक स्पेस कैरेक्टर दिखाई देता है ( `]` के साथ) लेकिन
 इसके लक्ष्य लिंक शुरू होने से पहले ( `(` के साथ)। इससे मार्कडाउन गलत तरीके से प्रस्तुत हो जाता है, और लिंक
 दस्तावेज़ देखते समय टूट जाता है।
 * कोड ब्लॉक का अनुवाद किया जाता है। Google अनुवाद नहीं जानता कि मार्कडाउन कोड को क्या मानता है और क्या नहीं
 * इंडेंट कोड ब्लॉक के लिए गलत स्पेसिंग। अनुवाद में रिक्ति को संरक्षित करना कठिन है
 * `backticks` के अंदर की चीजें अनुवादित हो जाएंगी, जब आप लगभग हमेशा चाहते हैं कि वे शाब्दिक मूल्य हों

 जब `-M` / `--markdown` ध्वज सक्षम होता है:
 * पैटर्न `](` को संघनित किया जाएगा `](` इस प्रकार टूटे हुए मार्कडाउन लिंक को ठीक करना
 * एक "नो ट्रांसलेशन" रैपर इंडेंट कोड ब्लॉक के आसपास रखा जाएगा, उचित इंडेंटेशन को संरक्षित करेगा और यह सुनिश्चित करेगा कि उनका अनुवाद नहीं किया गया है
 * यह सुनिश्चित करने के लिए कि उनका अनुवाद नहीं किया गया है, `backticks` के भीतर पाठ के चारों ओर "कोई अनुवाद नहीं" आवरण रखा जाएगा

 ### प्रक्रिया के रूप में
 आम तौर पर सब कुछ सादे पाठ के रूप में संसाधित किया जाता है

 यदि आपकी सामग्री HTML है, तो यह तब तक खराब हो जाएगी जब तक आप `-p html` / `--process-as html` विकल्प पास नहीं करते

 ### फ़िल्टर
 साहसी लोगों के लिए: किसी निर्देशिका में फ़ाइलों को संसाधित करते समय, आप `-F` / `--filter` विकल्प पास कर सकते हैं
 फ़ाइल सिस्टम में लिखे जाने से पहले आउटपुट को फ़िल्टर करने के लिए

 इस विकल्प का मान JS फ़ाइल का पथ होना चाहिए जो `filter` नामक फ़ंक्शन को निर्यात करता है

 `filter` फ़ंक्शन ` `async` होना चाहिए क्योंकि `await` को उस पर बुलाया जाएगा

 फ़ाइलों को डिस्क पर लिखे जाने से पहले, संपूर्ण फ़ाइल सामग्री को `filter` फ़ंक्शन में एक स्ट्रिंग के रूप में पास किया जाएगा

 `filter` फ़ंक्शन से वापसी मूल्य वह है जो वास्तव में भंडारण के लिए लिखा जाएगा

 इस प्रकार, अंत में क्या लिखा जाएगा, इस पर आपका पूरा नियंत्रण है

 `filter` स्क्रिप्ट को निम्न स्थानों में खोजा जाएगा ( `.js` के साथ फ़िल्टर में जोड़ा जाएगा)
 नाम, जब तक कि यह पहले से ही `.js` में समाप्त न हो जाए)
 *वर्तमान निर्देशिका
 * वर्तमान निर्देशिका के भीतर `.hokey-filters` नाम की एक निर्देशिका
 * `${HOME}/.hokey-filters` नामक एक निर्देशिका, जहां `${HOME}` वर्तमान उपयोगकर्ता की होम निर्देशिका है
 * अंतर्निहित [फ़िल्टर निर्देशिका](https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### फ़िल्टर पैरामीटर
 `filter` स्ट्रिंग एकाधिक शब्द हो सकती है। इस मामले में, पहला शब्द फ़िल्टर नाम है, और
 शेष शब्द `filter` फ़ंक्शन के तर्क के रूप में पारित किए जाएंगे

 ### मदद करना
 सहायता दिखाने के लिए `-h` / `--help` का प्रयोग करें

 ## JSON बैच कमांड
 `-j` / `--json` विकल्प के साथ, आप कई समन्वित `hokey` कमांड चला सकते हैं

 परंपरा के अनुसार इस फ़ाइल को `hokey.json` कहा जाता है, लेकिन आप इसे जो चाहें नाम दे सकते हैं

 यदि आप किसी निर्देशिका को `-j` विकल्प के रूप में पास करते हैं, तो `hokey` उस निर्देशिका में `hokey.json` hokey.json` की तलाश करेगा

 JSON फ़ाइल में एक ऑब्जेक्ट होना चाहिए। उस वस्तु के भीतर, उसके गुण नाम समान होते हैं
 कमांड-लाइन विकल्प, साथ ही `hokey` नामक एक अतिरिक्त संपत्ति

 `hokey` संपत्ति चलाने के लिए आदेशों की एक सरणी है। इन आदेशों के भीतर घोषित गुण होंगे
 बाहरी वस्तु में किसी भी डुप्लिकेट घोषणा को ओवरराइड करें।

 `hokey` सरणी में प्रत्येक वस्तु के भीतर, आपको एक `name` निर्दिष्ट करना चाहिए, और इनपुट और आउटपुट फ़ाइलें

 यहाँ एक `hokey.json` का एक उदाहरण दिया गया है

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

 ### एकाधिक इनपुट फ़ाइलें
 फ़ाइल पथों की एक सरणी को एक पथ `infiles` के बजाय `infile` के रूप में पास करें, जैसा कि इस उदाहरण में है:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### अनुक्रमणिका
 कई भाषाओं में अनुवाद करते समय, `hokey` एक इंडेक्स फ़ाइल बना सकता है जो किए गए सभी अनुवादों को सूचीबद्ध करता है
 और उन्हें लिंक प्रदान करता है

 *अनुक्रमणिका उत्पन्न करते समय, आपके पास केवल एक इनपुट स्रोत हो सकता है*

 `-I` / `--index` विकल्प पास करें, मान वह है जहां इंडेक्स फाइल जेनरेट की जाएगी, जो एक फाइल हो सकती है
 या एक निर्देशिका। यदि यह एक निर्देशिका है, तो टेम्पलेट के आधार पर एक डिफ़ॉल्ट फ़ाइल नाम का उपयोग किया जाएगा (नीचे देखें)

 इंडेक्स आउटपुट को कैसे फ़ॉर्मेट किया जाता है, यह निर्धारित करने के लिए `-A` / `--index-template` का उपयोग करें। आप 'एचटीएमएल' निर्दिष्ट कर सकते हैं,
 'markdown', 'text', या आपके अपने [HandlebarsJS](https://handlebarsjs.com/) टेम्पलेट का फ़ाइल पथ

 यदि आप अपना स्वयं का टेम्पलेट निर्दिष्ट करते हैं, तो आपको `-I` / `--index` के लिए एक फ़ाइल (निर्देशिका नहीं) भी निर्दिष्ट करनी होगी
 विकल्प

 ## भाषाओं का अनुवाद करने में मज़ा लें!

</pre>
