import { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
    const [loading,setLoading] = useState(true);
    const [loadingText,setLoadingText] = useState("Hello");
    const Texts = [
        "Hello",            // English
        "नमस्ते",             // Hindi
        "Bonjour",          // French
        "வணக்கம்",         // Tamil (Vanakkam)
        "Hola",             // Spanish
        "Hallo",            // German
        "你好",               // Chinese (Mandarin) (Nǐ hǎo)
        "مرحباً",            // Arabic (Marhaba)
        "Привет",           // Russian (Privet)
        "Ciao",             // Italian
        "こんにちは",           // Japanese (Konnichiwa)
        "안녕하세요",          // Korean (Annyeonghaseyo)
        "Olá",              // Portuguese
        "Hallo",            // Dutch
        "Merhaba",          // Turkish
        "Γειά σας",          // Greek (Yia sas)
        "Hej",              // Swedish, Danish
        "Cześć",            // Polish
        "Hei",              // Norwegian, Finnish
      ];
      
      useEffect(() => {
        window.scrollTo(0,0);
        let index = 0;
      
        const animationTimeout = setTimeout(() => {
          const changeLoadingText = setInterval(() => {
            setLoadingText(Texts[index % Texts.length]);
            index++;
          }, 130);
      
          setTimeout(() => {
            clearInterval(changeLoadingText);
            setLoading(false);
          }, 2800); // Stop changing the loading text after 2000ms
          
        }, 100); // Start loading animation after 2000ms
      
        return () => {
          clearTimeout(animationTimeout);
        };
      }, []);

  return (
    <div className={`loader ${loading ? "" : "remove"}`}>
        {
            <div className={`loader-text`}>
                {loadingText}
            </div>
        }
    </div>
  )
}

export default Loader