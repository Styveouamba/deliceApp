// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require('./Local/en.json')
      },
      fr: {
        translation: require('./locales/fr.json')
      }
    },
    lng: 'fr', // Langue par défaut
    fallbackLng: 'en', // Langue de secours si la traduction n'est pas disponible
    interpolation: {
      escapeValue: false // Ne pas échapper les valeurs
    }
  });

export default i18n;
