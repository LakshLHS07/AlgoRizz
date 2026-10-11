// Global DOM & Text Translator Engine for AlgoRizz
// Ensures 100% of all English text on the webpage is translated to the active language

import { TRANSLATIONS } from './translations';

// Common English phrase lookup across Indian languages
export const PHRASE_DICTIONARY = {
  // Navigation & Headers
  "GOVERNMENT OF INDIA": {
    hi: "भारत सरकार",
    mr: "भारत सरकार",
    bn: "ভারত সরকার",
    te: "భారత ప్రభుత్వం",
    ta: "இந்திய அரசு",
    gu: "ભારત સરકાર",
    kn: "ಭಾರತ ಸರ್ಕಾರ",
    ml: "ഭാരത സർക്കാർ",
    pa: "ਭਾਰਤ ਸਰਕਾਰ",
    or: "ଭାରତ ସରକାର",
    ur: "حکومت ہند"
  },
  "National Semantic Welfare Scheme Discovery & Citizen Intake Portal": {
    hi: "राष्ट्रीय कल्याणकारी योजना खोज एवं नागरिक ई-केवाईसी पोर्टल",
    mr: "राष्ट्रीय कल्याणकारी योजना शोध व नागरिक ई-केवायसी पोर्टल",
    bn: "জাতীয় কল্যাণমূলক প্রকল্প সন্ধান ও নাগরিক ই-কেওয়াইসি পোর্টাল",
    te: "జాతీయ సంక్షేమ పథకాల అన్వేషణ & పౌర ఈ-కేవైసీ పోర్టల్",
    ta: "தேசிய நலத்திட்ட தேடல் மற்றும் குடிமக்கள் இ-கேஒய்சி தளம்",
    gu: "રાષ્ટ્રીય કલ્યાણ યોજના શોધ અને નાગરિક ઈ-કેવાયસી પોર્ટલ",
    kn: "ರಾಷ್ಟ್ರೀಯ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳ ಅನ್ವೇಷಣೆ ಮತ್ತು ಇ-ಕೆವೈಸಿ ಪೋರ್ಟಲ್",
    ml: "ദേശീയ ക്ഷേമപദ്ധതി കണ്ടെത്തലും പൗര ഇ-കെവൈസി പോർട്ടലും",
    pa: "ਰਾਸ਼ਟਰੀ ਭਲਾਈ ਸਕੀਮ ਖੋਜ ਅਤੇ ਨਾਗਰਿਕ ਈ-ਕੇਵਾਈਸੀ ਪੋਰਟਲ",
    or: "ଜାତୀୟ କଲ୍ୟାଣ ଯୋଜନା ଅନୁସନ୍ଧାନ ଓ ନାଗରିକ ଇ-କେୱାଇସି ପୋର୍ଟାଲ",
    ur: "قومی فلاحی اسکیم تلاش اور شہری ای کے وائی سی پورٹل"
  },
  "No Citizen Left Behind": {
    hi: "कोई भी नागरिक पीछे न छूटे",
    mr: "एकही नागरिक मागे राहणार नाही",
    bn: "কোনো নাগরিক যেন পিছিয়ে না থাকে",
    te: "ఏ పౌరుడూ వెనుకబడకూడదు",
    ta: "எந்த ஒரு குடிமகனும் விடுபடக்கூடாது",
    gu: "કોઈપણ નાગરિક પાછળ ન રહે",
    kn: "ಯಾವೊಬ್ಬ ನಾಗರಿಕನೂ ಹಿಂದುಳಿಯಬಾರದು",
    ml: "ഒരു പൗരനും പിന്നിലാകരുത്",
    pa: "ਕੋਈ ਵੀ ਨਾਗਰਿਕ ਪਿੱਛੇ ਨਾ ਰਹੇ",
    or: "କୌଣସି ନାଗରିକ ପଛରେ ରହିବେ ନାହିଁ",
    ur: "کوئی شہری پیچھے نہ رہے"
  },
  "Explore Schemes": {
    hi: "योजनाएं देखें",
    mr: "योजना पहा",
    bn: "প্রকল্প দেখুন",
    te: "పథకాలు చూడండి",
    ta: "திட்டங்களை காண்க",
    gu: "યોજનાઓ જુઓ",
    kn: "ಯೋಜನೆಗಳನ್ನು ನೋಡಿ",
    ml: "പദ്ധതികൾ കാണുക",
    pa: "ਸਕੀਮਾਂ ਵੇਖੋ",
    or: "ଯୋଜନା ଦେଖନ୍ତୁ",
    ur: "اسکیمیں دیکھیں"
  },
  "Saved": {
    hi: "सहेजे गए",
    mr: "जतन केलेले",
    bn: "সংরক্ষিত",
    te: "భద్రపరిచినవి",
    ta: "சேமிக்கப்பட்டவை",
    gu: "સાચવેલ",
    kn: "ಉಳಿಸಲಾಗಿದೆ",
    ml: "സൂക്ഷിച്ചവ",
    pa: "ਸੰਭਾਲੇ ਗਏ",
    or: "ସଂରକ୍ଷିତ",
    ur: "محفوظ شدہ"
  },
  "Compare": {
    hi: "तुलना करें",
    mr: "तुलना करा",
    bn: "তুলনা করুন",
    te: "పోల్చండి",
    ta: "ஒப்பிடுங்கள்",
    gu: "સરખામણી કરો",
    kn: "ಹೋಲಿಕೆ ಮಾಡಿ",
    ml: "താരതമ്യം ചെയ്യുക",
    pa: "ਤੁਲਨਾ ਕਰੋ",
    or: "ତୁଳନା କରନ୍ତୁ",
    ur: "موازنہ کریں"
  },
  "Sign out": {
    hi: "साइन आउट",
    mr: "बाहेर पडा",
    bn: "লগআউট",
    te: "సైన్ అవుట్",
    ta: "வெளியேறு",
    gu: "સાઇન આઉટ",
    kn: "ಸೈನ್ ಔಟ್",
    ml: "പുറത്തുകടക്കുക",
    pa: "ਸਾਈਨ ਆਊਟ",
    or: "ସାଇନ ଆଉଟ",
    ur: "سائن آؤٹ"
  },
  "Citizen": {
    hi: "नागरिक",
    mr: "नागरिक",
    bn: "নাগরিক",
    te: "పౌరుడు",
    ta: "குடிமகன்",
    gu: "નાગરિક",
    kn: "ನಾಗರಿಕ",
    ml: "പൗരൻ",
    pa: "ਨਾਗਰਿਕ",
    or: "ନାଗରିକ",
    ur: "شہری"
  },
  "CSC Official": {
    hi: "सीएससी अधिकारी",
    mr: "सीएससी अधिकारी",
    bn: "সিএসসি আধিকারিক",
    te: "CSC అధికారి",
    ta: "சிஎஸ்சி அதிகாரி",
    gu: "સીએસસી અધિકારી",
    kn: "ಸಿಎಸ್‌ಸಿ ಅಧಿಕಾರಿ",
    ml: "സിഎസ്സി ഉദ്യോഗസ്ഥൻ",
    pa: "ਸੀਐਸਸੀ ਅਧਿਕਾਰੀ",
    or: "ସିଏସ୍‌ସି ଅଧିକାରୀ",
    ur: "سی ایس سی افسر"
  },
  "Guided Journey": {
    hi: "निर्देशित यात्रा",
    mr: "मार्गदर्शित प्रवास",
    bn: "নির্দেশিত অনুসন্ধান",
    te: "మార్గదర్శక ప్రయాణం",
    ta: "வழிகாட்டப்பட்ட பயணம்",
    gu: "માર્ગદર્શિત યાત્રા",
    kn: "ಮಾರ್ಗದರ್ಶಿ ಹುಡುಕಾಟ",
    ml: "മാർഗ്ഗനിർദ്ദേശ യാത്ര",
    pa: "ਮਾਰਗਦਰਸ਼ਨ ਸਫ਼ਰ",
    or: "ମାର୍ଗଦର୍ଶିତ ଯାତ୍ରା",
    ur: "رہنمائی شدہ سفر"
  },
  "AI Prompt Search": {
    hi: "एआई स्मार्ट खोज",
    mr: "एआय स्मार्ट शोध",
    bn: "এআই স্মার্ট সার্চ",
    te: "AI స్మార్ట్ సెర్చ్",
    ta: "ஏஐ நுண்ணறிவு தேடல்",
    gu: "એઆઈ સ્માર્ટ શોધ",
    kn: "ಎಐ ಸ್ಮಾರ್ಟ್ ಹುಡುಕಾಟ",
    ml: "എഐ സ്മാർട്ട് തിരച്ചിൽ",
    pa: "ਏਆਈ ਸਮਾਰਟ ਖੋਜ",
    or: "ଏଆଇ ସ୍ମାର୍ଟ ଅନୁସନ୍ଧାନ",
    ur: "اے آئی اسمارٹ تلاش"
  },
  "All Schemes": {
    hi: "सभी योजनाएं",
    mr: "सर्व योजना",
    bn: "সমস্ত প্রকল্প",
    te: "అన్ని పథకాలు",
    ta: "அனைத்து திட்டங்கள்",
    gu: "બધી યોજનાઓ",
    kn: "ಎಲ್ಲಾ ಯೋಜನೆಗಳು",
    ml: "എല്ലാ പദ്ധതികളും",
    pa: "ਸਾਰੀਆਂ ਸਕੀਮਾਂ",
    or: "ସମସ୍ତ ଯୋଜନା",
    ur: "تمام اسکیمیں"
  },
  "Single Window": {
    hi: "एकल विंडो",
    mr: "एकल खिडकी",
    bn: "একক উইন্ডো",
    te: "సింగిల్ విండో",
    ta: "ஒற்றைச் சாளரம்",
    gu: "સિંગલ વિન્ડો",
    kn: "ಏಕ ವಿಂಡೋ",
    ml: "സിംഗിൾ വിൻഡോ",
    pa: "ਸਿੰਗਲ ਵਿੰਡੋ",
    or: "ସିଙ୍ଗଲ ୱିଣ୍ଡୋ",
    ur: "سنگل ونڈو"
  },
  "Side-by-Side Dual Window": {
    hi: "द्वि-विंडो (आमने-सामने)",
    mr: "दुहेरी खिडकी (समोरासमोर)",
    bn: "পাশাপাশি ডুয়াল উইন্ডো",
    te: "ద్వంద్వ విండో",
    ta: "இரு சாளரப் பார்வை",
    gu: "ડ્યુઅલ વિન્ડો",
    kn: "ಡ್ಯುಯಲ್ ವಿಂಡೋ",
    ml: "ഡ്യുവൽ വിൻഡോ",
    pa: "ਦੋਹਰੀ ਵਿੰਡੋ",
    or: "ଡୁଆଲ ୱିଣ୍ଡୋ",
    ur: "ڈبل ونڈو"
  },
  "Next Step →": {
    hi: "अगला चरण →",
    mr: "पुढील पायरी →",
    bn: "পরবর্তী ধাপ →",
    te: "తదుపరి దశ →",
    ta: "அடுத்த படி →",
    gu: "આગળનું પગલું →",
    kn: "ಮುಂದಿನ ಹಂತ →",
    ml: "അടുത്ത ഘട്ടം →",
    pa: "ਅਗਲਾ ਪੜਾਅ →",
    or: "ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ →",
    ur: "اگلا مرحلہ →"
  },
  "← Back": {
    hi: "← पीछे",
    mr: "← मागे",
    bn: "← পিছনে",
    te: "← వెనుకకు",
    ta: "← பின்செல்",
    gu: "← પાછા",
    kn: "← ಹಿಂದಕ್ಕೆ",
    ml: "← പിന്നോട്ട്",
    pa: "← ਪਿੱਛੇ",
    or: "← ପଛକୁ",
    ur: "← واپس"
  },
  "View Guidelines & Checklist →": {
    hi: "योजना दिशानिर्देश एवं चेकलिस्ट देखें →",
    mr: "मार्गदर्शक तत्त्वे व यादी पहा →",
    bn: "নির্দেশিকা ও তালিকা দেখুন →",
    te: "మార్గదర్శకాలు చూడండి →",
    ta: "வழிகாட்டுதல்களை காண்க →",
    gu: "માર્ગદર્શિકા જુઓ →",
    kn: "ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ನೋಡಿ →",
    ml: "മാർഗ്ഗനിർദ്ദേശങ്ങൾ കാണുക →",
    pa: "ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼ ਵੇਖੋ →",
    or: "ଦିଗ୍‌ଦର୍ଶନ ଦେଖନ୍ତୁ →",
    ur: "رہنما خطوط دیکھیں →"
  },
  "Watch AI Video Guide": {
    hi: "एआई वीडियो गाइड देखें",
    mr: "एआय व्हिडिओ मार्गदर्शक पहा",
    bn: "এআই ভিডিও গাইড দেখুন",
    te: "AI వీడియో గైడ్ చూడండి",
    ta: "ஏஐ வீடியோ வழிகாட்டியை காண்க",
    gu: "એઆઈ વિડિઓ ગાઈડ જુઓ",
    kn: "ಎಐ ವೀಡಿಯೊ ಮಾರ್ಗದರ್ಶಿ ನೋಡಿ",
    ml: "എഐ വീഡിയോ ഗൈഡ് കാണുക",
    pa: "ਏਆਈ ਵੀਡੀਓ ਗਾਈਡ ਵੇਖੋ",
    or: "ଏଆଇ ଭିଡିଓ ଗାଇଡ୍ ଦେଖନ୍ତୁ",
    ur: "اے آئی ویڈیو گائیڈ دیکھیں"
  },
  "Clear Search": {
    hi: "खोज साफ़ करें",
    mr: "शोध पुसा",
    bn: "অনুসন্ধান মুছুন",
    te: "శోధన క్లియర్ చేయండి",
    ta: "தேடலை அழி",
    gu: "શોધ સાફ કરો",
    kn: "ಹುಡುಕಾಟ ತೆರವುಗೊಳಿಸಿ",
    ml: "തിരച്ചിൽ ഒഴിവാക്കുക",
    pa: "ਖੋਜ ਸਾਫ਼ ਕਰੋ",
    or: "ସର୍ଚ୍ଚ କ୍ଲିଅର କରନ୍ତୁ",
    ur: "تلاش صاف کریں"
  },
  "Reset All": {
    hi: "सभी रीसेट करें",
    mr: "सर्व रीसेट करा",
    bn: "সব রিসেট করুন",
    te: "అన్నీ రీసెట్ చేయండి",
    ta: "அனைத்தையும் மீட்டமை",
    gu: "બધું રીસેટ કરો",
    kn: "ಎಲ್ಲವನ್ನೂ ಮರುಹೊಂದಿಸಿ",
    ml: "എല്ലാം പുനഃക്രമീകരിക്കുക",
    pa: "ਸਭ ਰੀਸੈੱਟ ਕਰੋ",
    or: "ସବୁ ରିସେଟ୍ କରନ୍ତୁ",
    ur: "سب ری سیٹ کریں"
  },
  "Save": {
    hi: "सहेजें",
    mr: "जतन करा",
    bn: "সংরক্ষণ করুন",
    te: "భద్రపరచండి",
    ta: "சேமிக்கவும்",
    gu: "સાચવો",
    kn: "ಉಳಿಸಿ",
    ml: "സൂക്ഷിക്കുക",
    pa: "ਸੰਭਾਲੋ",
    or: "ସଂରକ୍ଷଣ କରନ୍ତୁ",
    ur: "محفوظ کریں"
  },
  "Close": {
    hi: "बंद करें",
    mr: "बंद करा",
    bn: "বন্ধ করুন",
    te: "మూసివేయండి",
    ta: "மூடு",
    gu: "બંધ કરો",
    kn: "ಮುಚ್ಚಿ",
    ml: "അടയ്ക്കുക",
    pa: "ਬੰਦ ਕਰੋ",
    or: "ବନ୍ଦ କରନ୍ତୁ",
    ur: "بند کریں"
  }
};

/**
 * Translates a single text string to the target language
 */
export function translateText(text, lang = 'en') {
  if (!text || typeof text !== 'string') return text;
  const trimmed = text.trim();
  if (!trimmed || lang === 'en') return text;

  // Direct phrase lookup
  const exact = PHRASE_DICTIONARY[trimmed];
  if (exact) {
    const val = exact[lang] || exact['hi'];
    if (val) return text.replace(trimmed, val);
  }

  // Check TRANSLATIONS dictionary reverse lookup
  const enTranslations = TRANSLATIONS.en || {};
  const targetTranslations = TRANSLATIONS[lang] || TRANSLATIONS.hi || {};

  for (const [key, enVal] of Object.entries(enTranslations)) {
    if (typeof enVal === 'string' && enVal.trim() === trimmed) {
      const localizedVal = targetTranslations[key] || TRANSLATIONS.hi[key];
      if (localizedVal) {
        return text.replace(trimmed, localizedVal);
      }
    }
  }

  return text;
}

/**
 * Performs DOM traversal and replaces residual English text nodes
 */
export function translateDOM(container = document.body, lang = 'en') {
  if (!container || typeof window === 'undefined') return;

  if (lang === 'en') {
    // Restore original text
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = walker.nextNode())) {
      if (node.__origText) {
        node.nodeValue = node.__origText;
      }
    }

    // Restore inputs
    const inputs = container.querySelectorAll('input[placeholder], textarea[placeholder]');
    inputs.forEach(input => {
      if (input.__origPlaceholder) {
        input.placeholder = input.__origPlaceholder;
      }
    });
    return;
  }

  // Walk text nodes
  const walker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        // Skip script and style tags
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName.toUpperCase();
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') {
          return NodeFilter.FILTER_REJECT;
        }
        if (!node.nodeValue || !node.nodeValue.trim()) {
          return NodeFilter.FILTER_SKIP;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    },
    false
  );

  let node;
  while ((node = walker.nextNode())) {
    if (!node.__origText) {
      node.__origText = node.nodeValue;
    }
    const currentText = node.__origText;
    const translated = translateText(currentText, lang);
    if (translated !== currentText) {
      node.nodeValue = translated;
    }
  }

  // Translate placeholders
  const inputs = container.querySelectorAll('input[placeholder], textarea[placeholder]');
  inputs.forEach(input => {
    if (!input.__origPlaceholder) {
      input.__origPlaceholder = input.placeholder;
    }
    const translated = translateText(input.__origPlaceholder, lang);
    if (translated !== input.__origPlaceholder) {
      input.placeholder = translated;
    }
  });
}
