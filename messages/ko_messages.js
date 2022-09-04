export default {
  err_fatal: '치명적인 오류: {{error}}',
  err_env_googleProjectId: '환경 변수 GOOGLE_TRANSLATE_PROJECT_ID가 정의되지 않았습니다.',
  err_env_googleCredentials: '환경 변수 GOOGLE_APPLICATION_CREDENTIALS가 정의되지 않았습니다.',
  err_option_processAs_invalid: '-p / --process-as에 대한 잘못된 옵션 값: 이 옵션은 \'text\' 또는 \'html\' 값만 지원합니다.',
  err_infileNotFound: '입력 파일 또는 디렉토리를 찾을 수 없음: {{ jsFile }}',
  err_cannotWriteSource: '입력 소스 덮어쓰기 거부(출력 언어로 지정됨): {{source}}',
  err_invalidOutfile: '\'LANG\'을 포함할 것으로 예상되는 출력 파일( {{lang}} 로 대체됨)',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: 파일 {{ file }} 이(가) \'export default\' 또는 \'module.exports\'로 시작해야 하지만 발견됨: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: '{{file}} 의 잘못된 json',
  err_processFile_writeFile: '*** {{lang}} 에 대한 outfile 쓰기 오류 : {{langOut}} : {{e}}',
  err_processFile_error: '*** 번역 오류: {{e}}',
  err_processing: '*** 예기치 않은 오류: {{e}}',
  info_summary: 'Google 번역을 사용한 빠른 번역 서비스\n 버전 {{VERSION}}',
  info_description: '=== 출처 ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === 필수 환경 변수 ===\n * GOOGLE_TRANSLATE_PROJECT_ID: Google 번역 프로젝트\n * GOOGLE_APPLICATION_CREDENTIALS: 자격 증명 JSON 파일\n\n === ISO 언어 코드 ===\n ISO 코드(입력 언어 또는 대상 언어)를 지정할 때 다음 코드를 사용하십시오.\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: '번역할 언어의 ISO 코드입니다. 기본값은 {{DEFAULT_LOCALE}} 입니다.',
  info_option_processAs: '유형은 텍스트 또는 html일 수 있습니다. 기본값은 텍스트입니다.',
  info_option_match: '디렉토리를 처리할 때 이 정규식과 일치하는 파일만 고려하십시오.',
  info_option_excludes: '디렉토리를 처리할 때 `-m` / `--match` 정규식과 일치하더라도 이러한 정규식과 일치하는 파일을 명시적으로 제외합니다.',
  info_option_filter: '디렉토리를 처리할 때: 1) 이 JS 파일이 필요합니다. 이 파일은 문자열 매개변수를 사용하고 문자열을 반환하는 \'filter\'라는 이름의 함수를 내보내고 2) 모든 출력 파일이 작성되기 전에 이 필터 함수를 적용해야 합니다.',
  info_option_dryRun: '파일을 작성하거나 Google 번역에 API를 호출하지 말고 수행되었을 작업을 기록하십시오.',
  info_option_languages: '번역할 언어에 대한 쉼표로 구분된 ISO 코드 목록',
  info_option_outfile: 'JS 파일 처리의 경우: 이 파일에 JS 출력 쓰기\n 디렉토리 처리의 경우: 이 디렉토리에 파일을 쓰십시오. 이 디렉토리가 없으면 생성됩니다.',
  info_option_force: '항상 새로운 번역을 생성하고 기존 출력 파일을 덮어씁니다.',
  info_option_handlebars: '{{ handlebars }} 콘텐츠가 번역되지 않고 있는 그대로 유지되도록 합니다.',
  info_option_markdown: '[markdown](https://links)이 올바르게 유지되었는지 확인하십시오. 그렇지 않으면 대괄호로 묶인 링크 설명의 끝과 괄호로 묶인 링크 자체 사이에 공백이 도입됩니다.',
  info_arg_source: '번역의 출처; JS 파일 또는 번역할 파일 디렉토리일 수 있습니다.',
  info_filter_applied: '쓰기 전에 필터가 성공적으로 적용됨: {{langFile}}',
  info_dryRun_key: '(테스트 실행) 키에 대한 번역을 작성하지 않음: {{key}}',
  info_dryRun_file: '(테스트 실행)은 파일을 작성했을 것입니다: {{langOut}}',
  warn_walk_readDir: 'walk( {{dir}} ): 읽기 오류: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): 디렉토리의 파일을 나열하는 동안 오류가 발생했습니다: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): 이 경로는 디렉토리가 아닙니다.',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): 기존 파일 건너뛰기: {{langFile.file}}',
  info_processDirectory_fileWritten: '파일이 작성되었습니다: {{langFile}}'
}