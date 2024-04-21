const key = ['Announcement', 'Please select an address from the suggestions', 'Top to rate', 'Your order is on the way!', 'Know more', 'Item In Cart']
const key2 = []

const axios = require('axios');
const fs = require("fs");

const text_to_translate = "Policies";
const prev_key = "opens_today_at"
const key_to_add = "policies" 

const file_paths = [    
  "C:\\JW\\yelo-server\\modules\\language\\languages\\vietnamese.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\turkish.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\traditionalChinese.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\thai.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\telugu.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\tamil.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\swedish.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\spanish.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\slovak.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\sinhala.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\simplifiedChinese.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\russian.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\romanian.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\portuguese.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\norwegian.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\mexicanSpanish.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\marathi.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\malay.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\latvian.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\lao.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\kurdish.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\korean.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\khmer.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\kannada.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\japanese.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\italian.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\hungarian.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\hindi.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\hebrew.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\gujrati.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\greek.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\german.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\georgian.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\frenchCh.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\french.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\english.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\dutch.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\customLang4.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\customLang3.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\customLang2.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\customLang1.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\crnogorski.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\brazilianPortuguese.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\Bosnian.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\bengali.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\arabicSa.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\arabic.js",
  "C:\\JW\\yelo-server\\modules\\language\\languages\\arabic-kls.js",
];

const code_lang = [
  "vi", "tr", "zh-tw", "th",    "te", "ta", "sv",
  "es", "sk", "si",    "zh-cn", "ru", "ro",
  "pt", "no", "es",    "mr",    "ms", "lv",
  "lo", "ku", "ko",    "km",    "kn", "ja",
  "it", "hu", "hi",    "iw",    "gu", "el",
  "de", "ka", "fr",    "fr",    "en", "nl",
  "en", "en", "en",    "en",    "hr", "pt",
  "bs", "bn", "ar",    "ar",    "ar",
];


for (let i=0; i<file_paths.length; i++) {

    const language = code_lang[i], file_path = file_paths[i];

    const data = fs.readFileSync(file_path, { encoding: "utf8" });

    let file_data = data.toString();

    // let idx = file_data;
    let idx = file_data.indexOf(prev_key);

    idx = file_data.indexOf("\n", idx);

    const prev_text = file_data.substring(0, idx-1);

    const after_text = file_data.substring(idx);


    axios.post(`https://translation.googleapis.com/language/translate/v2/?q=${text_to_translate}&target=${language}&key=AIzaSyDHmzxIjnQCOZe_JubkRsI9fUtOygI5pTI`)
    .then(response => {

        let val_to_add = response.data.data.translations[0].translatedText;

        const text_to_add = `,\n  ${key_to_add} : "${val_to_add}"\n`;

        // const final_text = file_data + text_to_add;
        const final_text = prev_text + text_to_add + after_text;
        // console.log(final_text);
        fs.writeFileSync(file_path, final_text, { encoding: 'utf8' });

    })
    .catch(error => console.log(error));
}