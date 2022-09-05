호키화
 =============
 Google 번역을 통해 전체 앱 또는 사이트를 실행하고 다른 언어로 기본 번역을 얻을 수 없는 이유는 무엇입니까?

 ***이제 할 수 있습니다!***

 `hokeylization` 이라는 이름은 'hokey localization'을 의미하는 portmanteau입니다.

 매우 간단하기 때문에 다소 엉터리입니다. 문자열을 Google 번역으로 보냅니다.

 그리고 간단하면서도 매우 강력합니다. HTML 문서에 대한 특별한 지원이 있습니다.
 [HandlebarsJS](https://handlebarsjs.com/) 템플릿,
 및 [Markdown](https://daringfireball.net/projects/markdown) 파일.

 다음을 번역할 수 있습니다.
 * 메시지를 포함하는 JavaScript 객체
 * 임의의 수의 파일 또는 디렉터리, 항상 디렉터리를 재귀적으로 순회

 # 다른 언어로 읽어보세요
 이 README.md 문서는 hokeylization 도구 자체를 사용하여 다음으로 번역되었습니다.
 **[Google 번역에서 지원하는 모든 언어](https://cloud.google.com/translate/docs/languages)!**

 나는 그것이 완벽하지 않다고 확신하지만, 없는 것보다 나을 수 있기를 바랍니다!

 [🇸🇦 아랍어](../ar/README.md)
 [🇧🇩 벵골어](../bn/README.md)
 [🇩🇪 독일어](../de/README.md)
 [🇺🇸 영어](../en/README.md)
 [🇪🇸 스페인어](../es/README.md)
 [🇫🇷 프랑스어](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 힌디어](../hi/README.md)
 [🇮🇩 인도네시아어](../id/README.md)
 [🇮🇹 이탈리아어](../it/README.md)
 [🇯🇵 일본어](../ja/README.md)
 [🇰🇷 한국어](../ko/README.md)
 [🇮🇳 마란티](../mr/README.md)
 [🇵🇱 폴란드어](../pl/README.md)
 [🇧🇷 포르투갈어](../pt/README.md)
 [🇷🇺 러시아어](../ru/README.md)
 [🇰🇪 스와힐리어](../sw/README.md)
 [🇵🇭 타갈로그어](../tl/README.md)
 [🇹🇷 터키어](../tr/README.md)
 [🇵🇰 우르두어](../ur/README.md)
 [🇻🇳 베트남어](../vi/README.md)
 [🇨🇳 중국어](../zh/README.md)


 **[📚 ... 모든 언어 ...](../README.md)**
 ----

 ### 이 README 번역에 문제가 있습니까?
 원본 [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)의 이 특정 번역
 결함이 있을 수 있음 -- *수정은 매우 환영합니다!* [GitHub에서 pull 요청](https://github.com/cobbzilla/hokeylization/pulls)을 보내주십시오.
 또는 그렇게 하는 것이 불편하다면 [문제를 여십시오](https://github.com/cobbzilla/hokeylization/issues)

 번역에 대한 새 GitHub 문제를 만들 때 다음을 수행하십시오.
 * 페이지 URL 포함(브라우저 주소 표시줄에서 복사/붙여넣기)
 * 잘못된 정확한 텍스트 포함(브라우저에서 복사/붙여넣기)
 * 무엇이 잘못되었는지 설명해주세요 -- 번역이 잘못되었습니까? 형식이 어떻게 든 깨졌습니까?
 * 더 나은 번역을 제안하거나 텍스트 형식을 올바르게 지정하는 방법을 알려주세요.
 * **고맙습니다!**

 # 내용물
 * [출처](#출처)
 * [지원 및 펀딩](#지원 및 펀딩)
 * [설치](#설치)
 * [설정](#설정)
 * [JavaScript 문자열 리소스 파일 번역](#Translating-a-JavaScript-string-resource-file)
 * [텍스트 파일 디렉토리 번역](#텍스트 파일 디렉토리 번역)
 * [기타옵션](#기타옵션)
 * [JSON 일괄 명령](#JSON-batch-commands)

 ## 원천
 * [GitHub의 hokeylization](https://github.com/cobbzilla/hokeylization)
 * [npm의 호키화](https://www.npmjs.com/package/hokeylization)

 ## 지원 및 자금 지원
 저는 전문 오픈 소스 소프트웨어 개발자가 되기 위해 노력하고 있습니다. 나는에서 일하고있다
 소프트웨어 업계에서 수년간 성공적인 회사를 시작하여 공기업에 매각했습니다.
 최근에 실직을 했고 다른 할 일이 없습니다.

 그래서 도움이 되는 소프트웨어를 작성하고 작동하는지 확인하려고 합니다.

 [Patreon을 통한 월간 기부](https://www.patreon.com/cobbzilla)

 ## 설치
 명령줄 도구를 사용하려면 `npm` 또는 `yarn` 을 사용하여 설치하세요.

    npm install -g hokeylization
    yarn global add hokeylization

 라이브러리로 사용하려면 훨씬 작은 `lite` 버전을 설치하세요.

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 그런 다음 `hokey` 명령에 대한 도움말을 살펴보세요.

    hokey --help
    hokey -h

 귀하의 언어 또는 다른 언어로 출력을 보고 싶으십니까?

 `hokey` 는 쉘의 환경 변수에서 자동으로 언어를 감지하려고 시도합니다.

 `LC_ALL` 환경 변수를 설정하여 언어를 강제 실행할 수 있습니다.

    LC_ALL=it hokey --help

 `hokeylization-lite` 를 설치한 경우 명령 도움말은 영어로만 제공됩니다.

 ## 설정
 `GOOGLE_TRANSLATE_PROJECT_ID` 환경 변수를 설정하여 Google 번역 프로젝트를 식별하세요.

 `GOOGLE_APPLICATION_CREDENTIALS` 환경 변수를 다운로드한 JSON 자격 증명으로 설정합니다.
 Google 클라우드에서 인증이 작동하는 방식을 파악한 후(재미있을 수 있음)

 소스 코드에서 실행하는 경우 이를 소스의 `.env` 파일에 넣을 수도 있습니다.
 [dotenv](https://www.npmjs.com/package/dotenv)를 통해 런타임에 로드될 디렉토리

 ## 자바스크립트 문자열 리소스 파일 번역
 문자열 테이블은 **반드시** 다음 두 가지 형식 중 하나로 자바스크립트 파일에 있어야 합니다.

 ES6 내보내기:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS 내보내기

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 이 파일의 이름이 `myfile.en.js` 인 경우 다음을 사용하여 스페인어와 독일어로 번역할 수 있습니다.

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 위의 `LANG` 은 특별합니다. 이 도구의 예약어입니다!

 `LANG` 는 출력 파일의 언어 코드로 대체됩니다.

 따라서 위의 명령은 파일을 생성합니다.

    myfile.es.js
    myfile.de.js

 `-l` / `--languages` 옵션은 쉼표로 구분된 ISO 언어 코드 목록입니다.
 [Google 번역에서 지원](https://cloud.google.com/translate/docs/languages)

 출력 파일이 이미 존재하는 경우 이미 존재하는 키를 확인하기 위해 검사됩니다.
 기존 키는 번역되지 않습니다. 누락된 키에 대한 번역이 생성되고 추가됩니다.
 JS 객체의 끝까지. 전체 파일은 항상 다시 작성됩니다.

 모든 키를 강제로 재번역하려면 `-f` / `--force` 옵션을 사용하세요.

 ## 텍스트 파일 디렉토리 번역
 파일 디렉토리를 번역할 수도 있습니다. hokeylization은 다음을 재귀적으로 방문합니다.
 디렉토리에 파일을 만들고 Google 번역을 통해 내용을 실행하고 출력을 저장합니다.
 별도의 디렉토리 트리에 있는 동일한 이름의 파일로

 번역 대상이 디렉토리인 경우 이 모드가 활성화됩니다.

 `-o` / `--outfile` 옵션은 출력 디렉토리를 지정합니다.

 **중대한 경고**: 디렉토리를 번역할 때 **출력 디렉토리를 지정하지 마세요**
 그것은 당신의 입력 디렉토리 안에 있습니다! 이렇게 하면 다음을 수행할 수 있습니다.
 * 무한 재귀 유도
 * Google 청구서를 실행
 * 디스크 채우기
 * 재미가 덜하다

 다음은 *하지 말아야 할 일*의 예입니다.

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 이것이 실행될 때, 번역된 파일은 `templates/es` 에 쓰여지고, 따라서 새로운 파일이 됩니다.
 번역할 소스 파일은 `templates/` 아래에 있으므로 이 프로세스는 계속됩니다.
 영원히, 하지마!

 #### 올바른 사용법
 예, 디렉토리에 이메일 템플릿이 있다고 가정해 보겠습니다.

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 이 모든 것을 스페인어와 독일어로 번역하려면 다음을 실행하십시오.

    hokey -l es,de -o templates/email/LANG templates/email/en

 위의 `LANG` 은 예약어이며 ISO 언어 코드로 대체됩니다.

 위의 내용이 실행되면 어떻게 됩니까?
 * `templates/email/es` 및 `templates/email/de` 디렉토리가 생성됩니다(존재하지 않는 경우).
 * `templates/email/en` 의 모든 파일은 스페인어와 독일어로 번역됩니다.
 * `-f` / `--force` 를 사용하지 않으면 기존 출력 파일이 재생성되지 않습니다.
 * `en` 아래에 있는 것처럼 `es` 와 `de` 안에 동일한 디렉토리 구조와 파일이 `en`

 ## 다른 옵션

 ### 드라이런
 `-n` / `--dry-run` 을 전달하여 수행할 작업을 표시하지만 실제로 API를 호출하거나 파일을 작성하지 마십시오.

 ### 힘
 이미 존재하는 경우에도 항상 번역을 재생성하려면 `-f` / `--force` 를 전달합니다.

 ### 성냥
 디렉토리 모드에서 실행할 때 처리되는 파일을 제한하려면 `-m` / `--match` 를 전달하십시오.

 소스 디렉토리의 *모든* 파일을 항상 대상 디렉토리로 번역하고 싶지는 않을 수 있습니다.

 `-m` / `--match` 옵션의 값은 다음을 지정하는 정규식입니다(셸 인용 규칙에 주의!).
 어떤 파일을 번역해야 하는지

 확실하지 않은 경우 이 옵션을 `-n` / `--dry-run` 과 결합하여 번역할 파일을 확인할 수 있습니다.

 ### 제외
 때때로 `-m` 이 너무 많은 파일과 일치합니다. `-e` / `--excludes` 옵션을 사용하여 명시적으로 제외
 그렇지 않으면 일치했을 파일

 공백으로 구분하여 여러 정규식을 나열할 수 있습니다.

 일반적인 사용법은 `--excludes node_modules dist \.git build tmp`

 ### 핸들바
 번역할 문자열에는 2개 또는 3개의 중괄호가 있는 `{{ handlebars }}` 템플릿이 포함될 수 있습니다.

 템플릿 안의 내용이 번역되는 것을 *원하지 않을* 것입니다.

 `-H` / `--handlebars` 플래그를 전달하면 `{{ ... }}` 내의 모든 항목이 번역되지 않습니다.

 ### 마크다운
 마크다운은 텍스트도 html도 아니므로 Google 번역에 약간의 어려움이 있습니다.

 `-M` / `--markdown` 플래그는 마크다운 파일에 대한 특수 처리를 활성화합니다.

 마크다운 파일에서 `-M` 플래그를 사용하지 않으면 다음과 같은 문제가 발생할 수 있습니다.
 * 깨진 링크. 번역에서 마크다운 링크 설명이 끝난 뒤에 공백 문자가 나타납니다( `]` ).
 대상 링크가 시작되기 전에( `(` )) 이로 인해 마크다운이 잘못 렌더링되고 링크가
 문서를 볼 때 깨집니다.
 * 코드 블록이 번역됩니다. Google 번역은 마크다운이 코드로 간주하는 것과 코드가 고려하지 않는 것을 알지 못합니다.
 * 들여쓴 코드 블록의 간격이 잘못되었습니다. 번역 시 간격을 유지하기 어렵습니다.
 * 거의 항상 리터럴 값을 원할 때 `backticks` 내부의 내용이 번역됩니다.

 `-M` / `--markdown` 플래그가 활성화된 경우:
 * 패턴 `](` 은 `]( `](` 로 압축되어 끊어진 마크다운 링크를 수정합니다.
 * "번역 없음" 래퍼가 들여쓰기된 코드 블록 주위에 배치되어 적절한 들여쓰기를 유지하고 번역되지 않도록 합니다.
 * 번역되지 않도록 `backticks` 내의 텍스트 주위에 "번역 없음" 래퍼가 배치됩니다.

 ### 처리 방식
 일반적으로 모든 것은 일반 텍스트로 처리됩니다.

 콘텐츠가 HTML인 경우 `-p html` / `--process-as html` 옵션을 전달하지 않으면 엉망이 됩니다.

 ### 필터
 모험심이 강한 경우: 디렉토리에서 파일을 처리할 때 `-F` / `--filter` 옵션을 전달할 수 있습니다.
 파일 시스템에 쓰기 전에 출력을 필터링하기 위해

 이 옵션의 값은 `filter` 라는 함수를 내보내는 JS 파일의 경로여야 합니다.

 `filter` 함수는 `async` '가 호출되므로 `await` 합니다.

 파일을 디스크에 쓰기 전에 전체 파일 내용이 `filter` 함수에 문자열로 전달됩니다.

 `filter` 함수의 반환 값은 실제로 저장소에 기록되는 값입니다.

 따라서 최종적으로 작성될 내용을 완전히 제어할 수 있습니다.

 `filter` 스크립트는 다음 위치에서 검색됩니다( `.js` 를 사용하면 필터에 추가됩니다.
 이미 `.js` 로 끝나지 않는 한 이름)
 * 현재 디렉토리
 * 현재 디렉토리 내의 `.hokey-filters` 라는 디렉토리
 * `${HOME}/.hokey-filters` 라는 디렉토리, 여기서 `${HOME}` 은 현재 사용자의 홈 디렉토리입니다.
 * 내장 [필터 디렉토리](https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### 필터 매개변수
 `filter` 문자열은 여러 단어일 수 있습니다. 이 경우 첫 번째 단어는 필터 이름이고
 나머지 단어는 `filter` 함수에 인수로 전달됩니다.

 ### 돕다
 `-h` / `--help` 를 사용하여 도움말 표시

 ## JSON 배치 명령
 `-j` / `--json` 옵션을 사용하면 여러 개의 조정된 `hokey` 명령을 실행할 수 있습니다.

 관례상 이 파일의 이름은 `hokey.json` 이지만 원하는 대로 이름을 지정할 수 있습니다.

 디렉토리를 `-j` 옵션으로 전달하면 `hokey.json` `hokey` 찾습니다.

 JSON 파일에는 하나의 개체가 포함되어야 합니다. 해당 개체 내에서 속성 이름은 다음과 같습니다.
 명령줄 옵션과 `hokey` 라는 추가 속성

 `hokey` 속성은 실행할 명령의 배열입니다. 이러한 명령 내에서 선언된 속성은
 외부 개체의 중복 선언을 재정의합니다.

 `hokey` 배열의 각 객체 내에서 ` `name` 과 입력 및 출력 파일을 지정해야 합니다.

 다음은 `hokey.json` 의 예입니다.

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

 ### 여러 입력 파일
 다음 예에서와 같이 단일 경로 `infile` `infiles` 대신에 파일 경로 배열을 `infiles`로 전달합니다.

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### 인덱스
 여러 언어로 번역할 때 `hokey` 는 모든 번역을 나열하는 색인 파일을 만들 수 있습니다.
 그리고 그들에 대한 링크를 제공합니다

 *인덱스 생성 시 입력 소스는 하나만 사용할 수 있습니다.*

 `-I` / `--index` 옵션을 전달합니다. 값은 인덱스 파일이 생성될 위치이며 파일일 수 있습니다.
 또는 디렉토리. 디렉토리인 경우 템플릿에 따라 기본 파일 이름이 사용됩니다(아래 참조).

 색인 출력 형식을 결정하려면 `-A` / `--index-template` 을 사용하세요. 'html'을 지정할 수 있습니다.
 'markdown', 'text' 또는 자신의 [HandlebarsJS](https://handlebarsjs.com/) 템플릿에 대한 파일 경로

 고유한 템플릿을 지정하는 경우 `-I` / `--index` 에 대한 파일(디렉토리 아님)도 지정해야 합니다.
 옵션

 ## 즐거운 시간 보내세요!

</pre>
