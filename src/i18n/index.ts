import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from '../locales/en/common.json';
import enSoftware from '../locales/en/software.json';
import ptCommon from '../locales/pt-BR/common.json';
import ptSoftware from '../locales/pt-BR/software.json';

const STORAGE_KEY = 'i18nextLng';

function getInitialLanguage(): string {
    if (typeof localStorage === 'undefined') return 'en';
    const s = localStorage.getItem(STORAGE_KEY);
    return s === 'pt-BR' ? 'pt-BR' : 'en';
}

const enTranslation = { ...enCommon, software: enSoftware };
const ptTranslation = { ...ptCommon, software: ptSoftware };

void i18n.use(initReactI18next).init({
    resources: {
        en: { translation: enTranslation },
        'pt-BR': { translation: ptTranslation },
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt-BR'],
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
});

// i18next emits languageChanged; typings omit EventEmitter in some versions
const i18nEmitter = i18n as typeof i18n & {
    on: (ev: string, fn: (lng: string) => void) => void;
};
i18nEmitter.on('languageChanged', (lng: string) => {
    localStorage.setItem(STORAGE_KEY, lng);
});

export default i18n;
