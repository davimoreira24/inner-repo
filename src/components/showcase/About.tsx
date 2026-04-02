import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
    const { t } = useTranslation();
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16, lineHeight: 1.25 }}>
                {t('about.title')}
            </h1>

            <br />
            <div className="text-block">
                <p>{t('about.p1')}</p>
                <br />
                <p>{t('about.p2')}</p>
                <br />
                <p>
                    {t('about.coodexBefore')}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://coodex.ai/meris"
                    >
                        Meris
                    </a>
                    {t('about.coodexAfter')}
                </p>
                <br />
                {/*
                <p>
                    Since 2025 I&apos;ve been a Senior Developer at Magazine
                    Luiza, focused on high-impact experiences for both web and
                    mobile. I work on the team that built a custom CRM for
                    dynamic page creation, balancing performance and
                    flexibility. My goal is scalable, clean software that
                    delivers real business value.
                </p>
                <br />
                */}
                <p>
                    {t('about.thanksBefore')}
                    <Link to="/contact">{t('about.thanksContact')}</Link>
                    {t('about.thanksMiddle')}
                    <a href="mailto:techdavimoreira@gmail.com">
                        techdavimoreira@gmail.com
                    </a>
                    {t('about.thanksAfter')}
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <div className="captioned-image" style={styles.figureWrap}>
                    <img
                        src={`${process.env.PUBLIC_URL || ''}/images/oldme.jpg`}
                        style={styles.image}
                        alt=""
                    />
                    <p style={styles.caption}>
                        <sub>
                            <b>{t('about.figure1')}</b>
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                    {t('about.githubFollowBefore')}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/davimoreira24"
                    >
                        GitHub (@davimoreira24)
                    </a>
                    {t('about.githubFollowAfter')}
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    figureWrap: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        height: 'auto',
        width: '100%',
        maxWidth: 420,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    caption: {
        textAlign: 'center',
        marginTop: 8,
    },
};

export default About;
