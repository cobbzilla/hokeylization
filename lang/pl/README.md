Hokeylizacja
 =======
 Nazwa to portmanteau, co oznacza „lokalizację hokeja”

 To hojne, ponieważ jest bardzo proste: wysyła ciągi do Tłumacza Google

 Możesz przetłumaczyć:
 * obiekt JavaScript zawierający komunikaty
 * katalog plików, rekurencyjnie

 # Przeczytaj to w innym języku
 Ten dokument README.md został przetłumaczony przy użyciu samego narzędzia do hokeylizacji na język
 **[każdy język obsługiwany przez Tłumacza Google](https://cloud.google.com/translate/docs/languages)!**

 Jestem pewien, że nie jest idealny, ale mam nadzieję, że to lepsze niż nic!

 [🇸🇦 Arabski](../ar/README.md)
 [🇧🇩 bengalski](../bn/README.md)
 [🇩🇪 niemiecki](../de/README.md)
 [🇺🇸 Polski](../en/README.md)
 [🇪🇸 Hiszpański](../es/README.md)
 [🇫🇷 Francuski](../fr/README.md)
 [🇹🇩 Hausa](język/ha/README.md)
 [🇮🇳 hindi](../hi/README.md)
 [🇮🇩 Indonezyjski](../id/README.md)
 [🇮🇹 Włoski](../it/README.md)
 [🇯🇵 Japoński](../ja/README.md)
 [🇰🇷 Koreański](../ko/README.md)
 [🇮🇳 Maranthi](język/mr/README.md)
 [🇵🇱 Polski](../pl/README.md)
 [🇧🇷 Portugalski](../pt/README.md)
 [🇷🇺 Rosyjski](../ru/README.md)
 [🇰🇪 Suahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turecki](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Wietnamski](../vi/README.md)
 [🇨🇳 chiński](../zh/README.md)


 **[📚 ... Wszystkie języki ...](../README.md)**
 ----

 ### Czy jest jakiś problem z tym tłumaczeniem README?
 To konkretne tłumaczenie oryginału [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 może być błędny -- *poprawki są mile widziane!* Wyślij [wyślij żądanie na GitHub](https://github.com/cobbzilla/yuebing/pulls),
 lub jeśli nie czujesz się z tym komfortowo, [otwórz zgłoszenie](https://github.com/cobbzilla/yuebing/issues)

 Tworząc nowy problem na GitHubie dotyczący tłumaczenia, wykonaj następujące czynności:
 * dołącz adres URL strony (skopiuj/wklej z paska adresu przeglądarki)
 * dołącz dokładny tekst, który jest błędny (skopiuj/wklej z przeglądarki)
 * uprzejmie proponuję lepsze tłumaczenie
 * **Dziękuję Ci!**

 # Zawartość
 * [Źródło](#Źródło)
 * [Wsparcie i finansowanie](#Wsparcie i finansowanie)
 * [Instalacja](#Instalacja)
 * [Konfiguracja](#Konfiguracja)
 * [Tłumaczenie pliku zasobów ciągu JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Tłumaczenie katalogu plików tekstowych](#Tłumaczenie-katalogu-plików-tekstowych)
 * [Inne opcje](#Inne-opcje)

 ## Źródło
 * [hokeylization na GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization na npm](https://www.npmjs.com/package/hokeylization)

 ## Wsparcie i finansowanie
 Próbuję zostać profesjonalnym programistą open source. pracowałem w
 od wielu lat w branży oprogramowania, zakładałem odnoszące sukcesy firmy i sprzedawałem je spółkom publicznym.
 Ostatnio straciłam pracę i właściwie nie mam żadnej innej pracy w kolejce

 Więc spróbuję napisać pomocne oprogramowanie i zobaczę, czy to działa

 Szczerze doceniłbym nawet najmniejszy [miesięczny wkład przez Patreon] (https://www.patreon.com/cobbzilla)

 ## Instalacja
 Aby użyć narzędzia wiersza poleceń, zainstaluj używając `npm` lub `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Aby użyć jako biblioteki, zainstaluj wersję `lite` , która jest znacznie mniejsza:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Następnie spójrz na pomoc dotyczącą polecenia `hokey` :

    hokey --help
    hokey -h

 Chcesz zobaczyć wyniki w swoim lub innym języku?

 `hokey` próbuje automatycznie wykryć język ze zmiennych środowiskowych powłoki

 Możesz wymusić język, ustawiając zmienną środowiskową `LC_ALL` :

    LC_ALL=it hokey --help

 Zauważ, że jeśli zainstalowałeś `hokeylization-lite` , pomoc dotycząca poleceń jest dostępna tylko w języku angielskim

 ## Organizować coś
 Ustaw zmienną środowiskową `GOOGLE_TRANSLATE_PROJECT_ID` , aby zidentyfikować projekt Tłumacza Google

 Ustaw zmienną środowiskową `GOOGLE_APPLICATION_CREDENTIALS` na pobrane dane uwierzytelniające JSON
 po ustaleniu, jak działa uwierzytelnianie w chmurze Google (może być fajnie)

 Jeśli korzystasz z kodu źródłowego, możesz również umieścić je w pliku `.env` w źródle
 katalog, który zostanie załadowany w czasie wykonywania przez [dotenv](https://www.npmjs.com/package/dotenv)

 ## Tłumaczenie pliku zasobów ciągu JavaScript
 Twoja tablica ciągów **musi** znajdować się w pliku JavaScript w jednej z tych dwóch postaci:

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

 Jeśli ten plik miał nazwę `myfile.en.js` , możesz przetłumaczyć go na hiszpański i niemiecki za pomocą:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Język `LANG` w powyższym jest szczególny — jest to zastrzeżone słowo w tym narzędziu!

 `LANG` jest zastępowany kodem języka plików wyjściowych

 W ten sposób powyższe polecenie tworzy pliki:

    myfile.es.js
    myfile.de.js

 Opcja `-l` / `--languages` to oddzielona przecinkami lista kodów języków ISO
 [obsługiwane przez Tłumacza Google](https://cloud.google.com/translate/docs/languages)

 Jeśli plik wyjściowy już istnieje, zostanie zbadany w celu ustalenia, które klucze już istnieją.
 Istniejące klucze nie zostaną przetłumaczone. Tłumaczenia brakujących kluczy zostaną wygenerowane i dołączone
 do końca obiektu JS. Cały plik jest zawsze przepisany.

 Aby wymusić ponowne tłumaczenie wszystkich kluczy, użyj opcji `-f` / `--force`

 ## Tłumaczenie katalogu plików tekstowych
 Możesz także przetłumaczyć katalog plików. hokeylization będzie rekursywnie odwiedzać co
 pliku w katalogu i uruchom jego zawartość za pomocą Tłumacza Google i zapisz wynik
 do pliku o identycznej nazwie w osobnym drzewie katalogów

 Gdy celem tłumaczenia jest katalog, ten tryb jest włączony

 Opcja `-o` / `--outfile` określa katalog wyjściowy

 **WIELKIE OSTRZEŻENIE**: Podczas tłumaczenia katalogów **NIE** określaj katalogu wyjściowego
 który znajduje się w twoim katalogu wejściowym! Jeśli to zrobisz, będziesz:
 * wywoływać nieskończoną rekurencję
 * generuj rachunek od Google
 * zapełnij swój dysk
 * baw się mniej

 Oto przykład tego, czego *nie robić*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Po uruchomieniu przetłumaczone pliki są zapisywane w `templates/es` , a zatem stają się nowe
 pliki źródłowe do przetłumaczenia, ponieważ znajdują się one w `templates/` -- ten proces jest kontynuowany
 na zawsze, nie rób tego!

 #### Prawidłowa obsługa
 OK, załóżmy, że masz kilka szablonów wiadomości e-mail w katalogu:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Aby przetłumaczyć je wszystkie na hiszpański i niemiecki, uruchom:

    hokey -l es,de -o templates/email/LANG templates/email/en

 W powyższym `LANG` jest słowem zastrzeżonym i zostanie zastąpione kodem języka ISO

 Co się dzieje, gdy powyższe działa:
 * Zostaną utworzone katalogi `templates/email/es` i `templates/email/de` (jeśli nie istnieją)
 * Każdy plik w `templates/email/en` zostanie przetłumaczony na hiszpański i niemiecki
 * Istniejące pliki wyjściowe nie zostaną odtworzone, chyba że użyjesz `-f` / `--force`
 * Otrzymasz identyczną strukturę katalogów i plików w `es` i `de` , jak w `en`

 ## Inne opcje

 ### Próba
 Przekaż `-n` / `--dry-run` aby wyświetlić, co zostałoby zrobione, ale w rzeczywistości nie wykonuj żadnych wywołań API ani nie zapisuj żadnych plików

 ### Zmuszać
 Przekaż `-f` / `--force` , aby zawsze regenerować tłumaczenia, nawet jeśli już istnieją

 ### Mecz
 Przekaż `-m` / `--match` , aby ograniczyć pliki przetwarzane podczas pracy w trybie katalogowym

 Nie zawsze możesz chcieć przetłumaczyć *każdy* plik z katalogu źródłowego na katalog docelowy

 Wartość opcji `-m` / `--match` to wyrażenie regularne (uwaga na zasady cytowania powłoki!), które określa
 które pliki należy przetłumaczyć

 W razie wątpliwości możesz połączyć tę opcję z `-n` / `--dry-run` aby zobaczyć, które pliki zostaną przetłumaczone

 ### Wyklucza
 Czasami twój `-m` pasuje do zbyt wielu plików. Użyj opcji `-e` / `--excludes` , aby jawnie wykluczyć
 pliki, które inaczej by pasowały

 Możesz podać wiele wyrażeń regularnych oddzielonych spacjami

 Typowym zastosowaniem byłoby: `--excludes node_modules dist \.git build tmp`

 ### Kierownice
 Ciągi do przetłumaczenia mogą zawierać szablony `{{ handlebars }}` z dwoma lub trzema nawiasami klamrowymi

 Prawdopodobnie *NIE* chcesz, aby zawartość tych szablonów została przetłumaczona

 Przekaż `-H` / `--handlebars` , a wszystko wewnątrz `{{ ... }}` nie zostanie przetłumaczone

 ### Przecena
 Markdown to ani tekst, ani html, więc Tłumacz Google ma z tym pewne problemy

 Flaga `-M` / `--markdown` włącza specjalną obsługę plików markdown

 W przypadku plików markdown, jeśli nie używasz flagi `-M` , prawdopodobnie napotkasz następujące problemy:
 * Zepsute połączenia. W tłumaczeniu znak spacji pojawia się po zakończeniu opisu odnośnika przeceny (z `]` ), ale
 przed rozpoczęciem linku docelowego (z `(` ). Powoduje to nieprawidłowe renderowanie znaczników i link
 jest uszkodzony podczas przeglądania dokumentu.
 * Bloki kodu są tłumaczone. Tłumacz Google nie wie, co przecena uważa za kod, a czego nie
 * Nieprawidłowe odstępy dla wciętych bloków kodu. W tłumaczeniu trudno zachować odstępy
 * Rzeczy wewnątrz `backticks` zostaną przetłumaczone, gdy prawie zawsze chcesz, aby były to wartości dosłowne

 Gdy `-M` / `--markdown` jest włączona:
 * Wzorzec `] (` zostanie skrócony do `](` w ten sposób naprawi uszkodzone linki przeceny
 * Wokół wciętych bloków kodu zostanie umieszczona otoczka „bez tłumaczenia”, zachowująca prawidłowe wcięcia i zapewniająca, że nie zostaną przetłumaczone
 * Wokół tekstu w obrębie `backticks` zostanie umieszczone opakowanie „bez tłumaczenia”, aby upewnić się, że nie są one tłumaczone

 ### Proces-jako
 Zwykle wszystko jest przetwarzane jako zwykły tekst

 Jeśli twoja treść jest HTML, zostanie zniekształcona, chyba że podasz opcję `-p html` / `--process-as html`

 ### Filtruj
 Dla żądnych przygód: podczas przetwarzania plików w katalogu możesz podać opcję `-F` / `--filter`
 filtrować dane wyjściowe przed ich zapisaniem w systemie plików

 Wartość tej opcji musi być ścieżką do pliku JS, który eksportuje funkcję o nazwie `filter`

 Funkcja `filter` musi być `async` , ponieważ zostanie `await`

 Zanim pliki zostaną zapisane na dysku, cała zawartość pliku zostanie przekazana do funkcji `filter` jako łańcuch

 Wartość zwracana przez funkcję `filter` jest tym, co faktycznie zostanie zapisane w pamięci

 Dzięki temu masz całkowitą kontrolę nad tym, co ostatecznie zostanie napisane

 ### Pomoc
 Użyj `-h` / `--help` , aby wyświetlić pomoc

 ## Miłego tłumaczenia!

</pre>
