export default {
  err_fatal: 'ข้อผิดพลาดร้ายแรง: {{error}}',
  err_env_googleProjectId: 'ไม่ได้กำหนดตัวแปรสภาพแวดล้อม GOOGLE_TRANSLATE_PROJECT_ID',
  err_env_googleCredentials: 'ไม่ได้กำหนดตัวแปรสภาพแวดล้อม GOOGLE_APPLICATION_CREDENTIALS',
  err_option_processAs_invalid: 'ค่าตัวเลือกไม่ถูกต้องสำหรับ -p / --process-as : ตัวเลือกนี้รองรับเฉพาะค่าของ \'text\' หรือ \'html\'',
  err_infileNotFound: 'ไม่พบไฟล์อินพุตหรือไดเรกทอรี: {{ jsFile }}',
  err_cannotWriteSource: 'ปฏิเสธที่จะเขียนทับแหล่งสัญญาณเข้า (ระบุในภาษาที่ส่งออก): {{source}}',
  err_invalidOutfile: 'outfile ที่คาดว่าจะมี \'LANG\' (จะถูกแทนที่ด้วย {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: ไฟล์ที่คาดไว้ {{ file }} จะเริ่มต้นด้วย \'ค่าเริ่มต้นการส่งออก\' หรือ \'module.exports\' แต่พบ: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json ไม่ถูกต้องใน {{file}}',
  err_processFile_writeFile: '*** เกิดข้อผิดพลาดในการเขียนลงไฟล์สำหรับ {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** เกิดข้อผิดพลาดในการแปล: {{e}}',
  err_processing: '*** ข้อผิดพลาดที่ไม่คาดคิด: {{e}}',
  warn_missing_close_notranslate_tag: 'ผลลัพธ์จากการแปลไม่มีแท็กปิดที่คาดว่าจะมี ป้าย {{ label }} , หมายเลขบรรทัด {{ lineNumber }} , บรรทัด: {{ line }}',
  info_summary: 'บริการแปลด่วนโดยใช้ Google Translate\n รุ่น {{VERSION}}',
  info_description: 'เครื่องมือสำหรับนักพัฒนา ด้วย hokeylization การแปลแอปของคุณได้อย่างรวดเร็ว สนุก และง่ายดาย!\n\n === ที่มา ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === ตัวแปรสภาพแวดล้อมที่ต้องการ ===\n * GOOGLE_TRANSLATE_PROJECT_ID: โครงการ Google แปลภาษาของคุณ\n * GOOGLE_APPLICATION_CREDENTIALS: ไฟล์ JSON ข้อมูลรับรองของคุณ\n\n === รหัสภาษา ISO ===\n เมื่อระบุรหัส ISO (ภาษาอินพุตหรือภาษาเป้าหมาย) ให้ใช้รหัสเหล่านี้:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'รหัส ISO สำหรับภาษาที่จะแปล ค่าเริ่มต้นคือ {{DEFAULT_LOCALE}}',
  info_option_processAs: 'ประเภทสามารถเป็นข้อความหรือ html ค่าเริ่มต้นคือข้อความ',
  info_option_match: 'เมื่อประมวลผลไดเร็กทอรี ให้พิจารณาเฉพาะไฟล์ที่ตรงกับ regex . นี้',
  info_option_excludes: 'เมื่อประมวลผลไดเร็กทอรี ให้แยกไฟล์ที่ตรงกับ regexes เหล่านี้อย่างชัดเจน แม้ว่าจะตรงกับ `-m` / `--match` regex',
  info_option_filter: 'เมื่อประมวลผลไดเร็กทอรี: 1) ต้องการไฟล์ JS นี้ ซึ่งต้องเอ็กซ์พอร์ตฟังก์ชันที่ชื่อ `filter\' ซึ่งรับพารามิเตอร์สตริงและส่งกลับสตริง และ 2) ใช้ฟังก์ชันตัวกรองนี้กับไฟล์เอาต์พุตทั้งหมดก่อนที่จะเขียน',
  info_option_dryRun: 'อย่าเขียนไฟล์ใดๆ หรือเรียกใช้ API ใดๆ ไปยัง Google Translate แต่ให้บันทึกสิ่งที่ควรทำไว้',
  info_option_languages: 'รายการรหัส ISO ที่คั่นด้วยเครื่องหมายจุลภาคสำหรับภาษาที่จะแปลเป็น',
  info_option_outfile: 'สำหรับการประมวลผลไฟล์ JS: เขียนเอาต์พุต JS ไปยังไฟล์นี้\n สำหรับการประมวลผลไดเร็กทอรี: เขียนไฟล์ไปยังไดเร็กทอรีนี้ ซึ่งจะถูกสร้างขึ้นหากไม่มีอยู่',
  info_option_force: 'สร้างการแปลใหม่เสมอ เขียนทับไฟล์เอาต์พุตที่มีอยู่',
  info_option_handlebars: 'ตรวจสอบให้แน่ใจว่าเนื้อหา {{ handlebars }} ได้รับการเก็บรักษาไว้ตามที่เป็นอยู่และไม่ได้แปล',
  info_option_markdown: 'ตรวจสอบให้แน่ใจว่าได้รักษา [markdown](https://links) ไว้อย่างถูกต้อง ไม่เช่นนั้นจะมีการเว้นวรรคระหว่างส่วนท้ายของคำอธิบายลิงก์ในวงเล็บเหลี่ยมและตัวลิงก์ในวงเล็บ',
  info_arg_source: 'แหล่งที่มาของการแปล; สามารถเป็นไฟล์ JS หรือไดเร็กทอรีของไฟล์ที่จะแปล',
  info_filter_applied: 'ใช้ตัวกรองสำเร็จก่อนเขียน: {{langFile}}',
  info_dryRun_key: '(dry run) ไม่เขียนคำแปลสำหรับคีย์: {{key}}',
  info_dryRun_file: '(dry run) จะได้เขียนไฟล์: {{langOut}}',
  warn_walk_readDir: 'เดิน ( {{dir}} ): ข้อผิดพลาดในการอ่าน: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): เกิดข้อผิดพลาดขณะพยายามแสดงรายการไฟล์ในไดเรกทอรี: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): เส้นทางนี้ไม่ใช่ไดเร็กทอรี',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): ข้ามไฟล์ที่มีอยู่: {{langFile.file}}',
  info_processDirectory_fileWritten: 'ไฟล์ถูกเขียน: {{langFile}}',
  err_option_json_notFound: 'ไม่พบไฟล์ JSON: {{ jsonFile }}',
  err_option_json_errorReading: 'เกิดข้อผิดพลาดในการอ่านหรือแยกวิเคราะห์ไฟล์ JSON {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'ไม่ได้ระบุภาษาแปล ใช้ `-l` / `--languages\' และระบุรายการรหัสภาษา ISO ที่คั่นด้วยเครื่องหมายจุลภาค',
  err_option_outfile_required: 'ไม่ได้ระบุไฟล์เอาต์พุตหรือไดเร็กทอรี ใช้ `-o` / `--outfile\' เพื่อระบุไฟล์เอาต์พุตหรือไดเร็กทอรี',
  err_noSources: 'ไม่มีไฟล์ต้นฉบับสำหรับการแปล',
  info_option_jsonFile: 'เรียกใช้คำสั่ง hokey หลายคำสั่งที่ระบุในไฟล์ JSON หากไม่มีไฟล์ JSON ไว้ คำสั่งจะค้นหาไฟล์ชื่อ \'hokey.json\' ในไดเร็กทอรีปัจจุบัน',
  info_option_indexFile: 'สร้างไฟล์ดัชนีสำหรับการแปล ชื่อไฟล์ต้องลงท้ายด้วย ".html", ".md" หรือ ".txt" เว้นแต่คุณจะจัดหาเทมเพลตที่มี "-A" / "--index-template"',
  info_option_indexTemplate: 'ซึ่งอาจเป็น \'html\', \'markdown\', \'text\' หรือเส้นทางไปยังเทมเพลตแฮนด์บาร์ของคุณเอง เทมเพลตนี้ใช้ในการสร้างไฟล์ดัชนี ดูเทมเพลตเริ่มต้นในซอร์สโค้ด hokeylization เพื่อดูตัวอย่าง',
  info_option_regular: 'แปลไฟล์ต้นฉบับเป็นไฟล์ปกติ ไม่ใช่แปลอ็อบเจ็กต์ JavaScript ที่มีทรัพยากรสตริง แฟล็ก `-M` / `--markdown\' หมายถึงแฟล็กนี้',
  info_arg_sources: 'แหล่งที่มาของการแปล; นี่อาจเป็นไฟล์ JavaScript หรือไดเร็กทอรีหนึ่งไฟล์ขึ้นไป',
  info_jsonProcessing_start: 'การกำหนดค่าการประมวลผล JSON: {{name}}',
  err_index_singleFileMultipleSources: 'มีการระบุไฟล์ดัชนีเดียว แต่มีหลายไฟล์อินพุต ระบุไดเร็กทอรีแทนไฟล์สำหรับ index',
  err_index_targetDirAndNoTypeOrTemplate: 'ไดเร็กทอรีเป้าหมายถูกระบุสำหรับดัชนี แต่ไม่มีการระบุเท็มเพลตดัชนี ใช้ `-A` / `--indexTemplate` เพื่อเลือกเทมเพลต',
  err_index_parentDirDoesNotExist: 'ไม่มีไดเรกทอรีหลักของดัชนี: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'ชื่อไฟล์ไม่มีนามสกุล ดังนั้นจึงไม่สามารถกำหนดประเภทเทมเพลตได้: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'ชื่อไฟล์มีนามสกุลที่ไม่ถูกต้อง ดังนั้นจึงไม่สามารถระบุประเภทเทมเพลตได้: {{ file }}',
  err_index_templateLoadingError: 'เกิดข้อผิดพลาดในการโหลดเทมเพลตที่กำหนดเอง {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'เกิดข้อผิดพลาดในการรวบรวมเทมเพลตที่กำหนดเอง {{ file }} : {{ e }}',
  info_index_wroteFile: 'สร้างไฟล์ดัชนีสำเร็จแล้ว: {{ indexFile }}',
  label_indexOfTranslations: 'ดัชนีการแปล',
  label_findYourLanguageCode: 'ค้นหารหัสภาษาของคุณ',
  err_processing_unknown: '*** ข้อผิดพลาดที่ไม่คาดคิด: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'ไม่มีการสร้างไฟล์เอาต์พุตสำหรับภาษา {{ lang }} ดังนั้นจะถูกแยกออกจากดัชนี',
  err_filter_loading: 'ไม่พบตัวกรอง: {{ filter }}\n ไม่พบตัวกรองในใด ๆ ต่อไปนี้: ไดเร็กทอรีปัจจุบัน ไดเร็กทอรี ./.hokey-filters ไดเร็กทอรี ${HOME}/.hokey-filters หรือไดเร็กทอรีตัวกรองในตัว'
}