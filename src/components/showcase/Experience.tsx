import React from 'react';
import { useTranslation } from 'react-i18next';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
    const { t } = useTranslation();
    return (
        <div className="site-page-content">
            <ResumeDownload />
            {/*
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Magazine Luiza</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.magazineluiza.com.br/"
                        >
                            <h4>magazineluiza.com.br</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Senior Developer</h3>
                        <b>
                            <p>2025 – Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Building high-impact experiences for both web and mobile at
                    one of Brazil&apos;s largest retailers. I focus on scalable,
                    maintainable software that translates into real business
                    outcomes.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Member of the team that delivered a custom CRM for
                            creating dynamic pages—pairing performance with
                            flexibility for internal and customer-facing flows.
                        </p>
                    </li>
                    <li>
                        <p>
                            Own features across the stack with emphasis on code
                            quality, architecture clarity, and measurable impact
                            on conversion and operations.
                        </p>
                    </li>
                </ul>
            </div>
            */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>{t('experience.coodex.company')}</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://coodex.ai/meris"
                        >
                            <h4>{t('experience.coodex.linkLabel')}</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>{t('experience.coodex.role')}</h3>
                        <b>
                            <p>{t('experience.coodex.present')}</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    <>
                        {t('experience.coodex.introBefore')}
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://coodex.ai/meris"
                        >
                            Meris
                        </a>
                        {t('experience.coodex.introAfter')}
                    </>
                </p>
                <br />
                <ul>
                    <li>
                        <p>{t('experience.coodex.bullet1')}</p>
                    </li>
                    <li>
                        <p>{t('experience.coodex.bullet2')}</p>
                    </li>
                </ul>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>{t('experience.rd.company')}</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://rdsaude.com.br/"
                        >
                            <h4>{t('experience.rd.linkLabel')}</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>{t('experience.rd.role')}</h3>
                        <b>
                            <p>{t('experience.rd.year')}</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>{t('experience.rd.intro')}</p>
                <br />
                <ul>
                    <li>
                        <p>{t('experience.rd.bullet1')}</p>
                    </li>
                    <li>
                        <p>{t('experience.rd.bullet2')}</p>
                    </li>
                    <li>
                        <p>{t('experience.rd.bullet3')}</p>
                    </li>
                </ul>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>{t('experience.deway.company')}</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://deway.com.br/"
                        >
                            <h4>{t('experience.deway.linkLabel')}</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>{t('experience.deway.role')}</h3>
                        <b>
                            <p>{t('experience.deway.years')}</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>{t('experience.deway.intro')}</p>
                <br />
                <ul>
                    <li>
                        <p>{t('experience.deway.bullet1')}</p>
                    </li>
                    <li>
                        <p>{t('experience.deway.bullet2')}</p>
                    </li>
                    <li>
                        <p>{t('experience.deway.bullet3')}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
};

export default Experience;
