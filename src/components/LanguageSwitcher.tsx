import React from 'react';
import { useTranslation } from 'react-i18next';

const btn = (active: boolean): React.CSSProperties => ({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    padding: '4px 8px',
    textDecoration: active ? 'underline' : 'none',
    fontWeight: active ? 700 : 400,
    color: 'inherit',
});

export interface LanguageSwitcherProps {
    style?: React.CSSProperties;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ style }) => {
    const { i18n } = useTranslation();
    const lng = i18n.language?.startsWith('pt') ? 'pt-BR' : 'en';

    return (
        <div
            role="group"
            aria-label={i18n.t('languageSwitcher.aria')}
            style={Object.assign(
                {
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 4,
                },
                style,
            )}
        >
            <button
                type="button"
                style={btn(lng === 'en')}
                onClick={() => void i18n.changeLanguage('en')}
            >
                EN
            </button>
            <span aria-hidden="true">|</span>
            <button
                type="button"
                style={btn(lng === 'pt-BR')}
                onClick={() => void i18n.changeLanguage('pt-BR')}
            >
                PT-BR
            </button>
        </div>
    );
};

export default LanguageSwitcher;
