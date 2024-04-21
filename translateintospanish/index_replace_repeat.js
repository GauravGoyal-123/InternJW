// const key = ['Announcement', 'Please select an address from the suggestions', 'Top to rate', 'Your order is on the way!', 'Know more', 'Item In Cart']
// const key2 = []
const axios = require('axios');
const fs = require("fs");
// const keys = [
// {"pay_via_vuka": "Vuka"}, {"pay_via_Razorpay_UPI":"Razorpay_UPI"}, {"pay_via_Paytm_UPI":"Paytm_UPI"}, {"pay_via_stripeGpay":"GooglePay"}, {"pay_via_stripeApplePay":"ApplePay"}, {"pay_via_cmi": "CMI"}, {"pay_via_nmi": "NMI"}, {"pay_via_tap": "Tap"}, {"pay_via_azul": "Azul"}, {"pay_via_doku": "Doku"}, {"pay_via_eway": "Eway"}, {"pay_via_viva": "Viva"}, {"pay_via_adyen": "Adyen"}, {"pay_via_culqi": "Culqi"}, {"pay_via_cevnn": "Cevnn"}, {"pay_via_cxpay": "Cxpay"}, {"pay_via_telr" : "Telr"}, {"pay_via_gtpay": "GTPay"}, { "pay_via_paymaya": "Paymaya"}, {"pay_via_unipay": "Unipay"}, {"pay_via_hypur": "Hypur"}, {"pay_via_mpesa": "Mpesa"}, {"pay_via_peach": "Peach"}, {"pay_via_wipay": "Wipay"}, {"pay_via_urway": "Urway"}, {"pay_via_telr" : "Telr"}, 
// {"pay_via_curlec": "Curlec"}, {"pay_via_ipay88": "IPay88"}, {"pay_via_onepay": "OnePay"}, {"pay_via_kanoo" : "Kanoo"}, {"pay_via_OrangePay" : "OrangePay"}, {"pay_via_Spotii" : "Spotii"}, {"pay_via_apcopay" : "Apcopay"}, {"pay_via_paytabs" : "Paytabs"}, {"pay_via_Redsys" : "Redsys"}, {"pay_via_payfortV2" : "PayfortV2"}, {"pay_via_BillPlzV2" : "BillPlzV2"}, {"pay_via_wompi" : "Wompi"}, {"pay_via_payzenV2" : "PayzenV2"}, {"pay_via_halykBank" : "HalykBank"}, { "pay_via_webpay" : "WebPay"}, {"pay_via_afterpay" : "AfterPay"}, {"pay_via_paypalV2" : "PayPal"}, { "pay_via_Quadpay" : "Quadpay"}, {"pay_via_paynet": "Paynet"}, {"pay_via_keypay" : "Keypay"}];

const keys2 = [
  {"pay_via_payzen": "Payzen"},
  {"pay_via_truevo": "Truevo"},
  {"pay_via_whoosh": "Whoosh"},
  {"pay_via_bambora": "Bambora"},
  {"pay_via_paygate": "Paygate"},
  {"pay_via_benefit": "Benefit"},
  {"pay_via_niubiz" : "Niubiz"},
  {"pay_via_noqoody": "Noqoody"},
  {"pay_via_openpay": "Openpay"},
  {"pay_via_sbm"    : "SBM"},
  {"pay_via_qpay"    : "QPAY"},
  {"pay_via_pagarme": "Pagarme"},
  {"pay_via_payhere": "Payhere"},
  {"pay_via_paymark": "Paymark"},
  {"pay_via_revolut": "Revolut"},
  {"pay_via_suncash": "Suncash"},
  {"pay_via_valitor": "Valitor"},
  {"pay_via_payku"  :"Payku"},
  {"pay_via_athMovil": "ATH Movil"},
  {"pay_via_bankOpen": "BankOpen"},
  {"pay_via_bharatpe": "BharatPe"},
  {"pay_via_credimax": "Credimax"},
  {"pay_via_etisalat": "Card"},
  {"pay_via_hyperpay": "Hyperpay"},
  {"pay_via_pagoplux": "Pagoplux"},
  {"pay_via_pixelpay": "Pixelpay"},
  {"pay_via_squareup": "Square"},
  {"pay_via_firstdata": "Firstdata"},
  {"pay_via_paywayone": "Paywayone"},
  {"pay_via_paymentez": "Paymentez"},
  {"pay_via_theteller": "TheTeller"},
  {"pay_via_wechatPay": "Stripe-Wechat-Pay"},
  {"pay_via_gocardless": "Gocardless"},
  {"pay_via_myfatoorah": "My Fatoorah"},
  {"pay_via_paytm_link": "Paytm"},
  {"pay_via_placetopay": "PlaceToPay"},
  {"pay_via_bankAlfalah": "BankAlfalah"},
  {"pay_via_cybersource": "Cybersource"},
  {"pay_via_flutterwave": "Flutterwave"},
  {"pay_via_paguelofacil": "Paguelofacil"},
  {"pay_via_myBillPayment": "MyBillPayment"},
  {"pay_via_mtnMobileMoney": "MTN"},
  {"pay_via_fac3DS_powertranz" : "Powertranz"},
  {"pay_via_aeropay" : "Aeropay"},
  {"pay_via_card": "Card"},
  {"pay_via_cash": "Cash"},
  {"pay_via_paytm": "Paytm"},
  {"pay_via_wallet": "Wallet"},
  {"pay_via_card_netbanking": "Card/ Net Banking"},

]

const keys3 = [
  {"pay_via_card_netbanking": "Card/Net Banking"},
  {"pay_via_paymob":"PayMob"},
  {"pay_via_sslcommerz":"SSLCOMMERZ"},
  {"pay_via_fac_3ds":"FAC 3DS"},
{"pay_via_checkout_com":"Checkout.com"},
{"pay_via_hyper_pay":"HyperPay"},
{"pay_via_fatoorah":"My Fatoorah"},
{"pay_via_tap":"Tap"},
{"pay_via_pagar_dot_me":"Pagar.me"},
{"pay_via_wechat_pay":"WeChat Pay"},
{"pay_via_mybillpayment":"MyBillPayment"},
{"pay_via_payzen":"Payzen"},
{"pay_via_first_data":"First Data"},
{"pay_via_bankopen":"BankOpen"},
{"pay_via_square":"Square"},
{"pay_via_multicaixa_reference":"Multicaixa Reference"},
{"pay_via_bank_alfalah":"Bank Alfalah"},
{"pay_via_mtn" : "MTN"},
{"pay_via_paynow":"Paynow"},
{"pay_via_mpaisa":"MPaisa"},
{"pay_via_ath_movil":"ATH Movil"},
{"pay_via_gtbank":"GTBank"},
{"pay_via_paystack":"Paystack"},
{"pay_via_tapPay" : "TapPay",}
]

const keys4 = [
  {"pay_via_proxypay": "ProxyPay"},
  {"pay_via_2checkout":"2checkout"},
  {"pay_via_limelight":"Limelight"},
  {"pay_via_stripe_ideal":"Stripe Ideal"},
  {"pay_via_multicaixa_express":"Multicaixa Express"},
  {"pay_via_cx_pay":"CX Pay"},
]

const keys5 = [
  {"pay_via_paypalV2":"PayPal"},
  {"pay_via_tap" : "Tap"},
  {"pay_via-payzen" : "Payzen"}
]
const text_to_translate =  "PayzenV2";
const prev_key = "pay_via_payzenV2";

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
    let prev_idx = -1;
    while(true) {
        const language = code_lang[i], file_path = file_paths[i];
    
        const data = fs.readFileSync(file_path, { encoding: "utf8" });
    
        let file_data = data.toString();
    
        let idx = file_data.indexOf(prev_key, prev_idx + 1);
        if(idx == -1) {
            break;
        }
        else prev_idx = idx;
    
        idx = file_data.indexOf(":", idx);
        let idx2 = file_data.indexOf("\n", idx);
    
        const prev_text = file_data.substring(0, idx + 1);
    
        const after_text = file_data.substring(idx2);
    
    
        let val_to_add = text_to_translate;
    
        const text_to_add = ` "${val_to_add}",`;
    
        const final_text = prev_text + text_to_add + after_text;
        fs.writeFileSync(file_path, final_text, { encoding: 'utf8' });
    }

}