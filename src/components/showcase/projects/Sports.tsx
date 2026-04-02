import React from 'react';
import { useTranslation } from 'react-i18next';

const publicPath = (file: string) =>
    `${process.env.PUBLIC_URL || ''}/images/sports/${file}`;

export interface SportsProjectsProps {}

const SportsProjects: React.FC<SportsProjectsProps> = () => {
    const { t } = useTranslation();
    return (
        <div className="site-page-content">
            <h1>{t('sports.title')}</h1>
            <h3>{t('sports.subtitle')}</h3>
            <br />
            <div className="text-block">
                <p>{t('sports.p1')}</p>
                <br />
                <p>{t('sports.p2')}</p>
            </div>
            <br />
            <div style={styles.photoRow}>
                <div style={styles.photoCard}>
                    <img
                        src={publicPath('curry.jpg')}
                        alt="Stephen Curry"
                        style={styles.photo}
                        loading="lazy"
                    />
                    <p style={styles.caption}>
                        <sub>
                            <b>{t('sports.curryCaption')}</b>
                        </sub>
                    </p>
                </div>
                <div style={styles.photoCard}>
                    <img
                        src={publicPath('cr7.jpeg')}
                        alt="Cristiano Ronaldo"
                        style={styles.photo}
                        loading="lazy"
                    />
                    <p style={styles.caption}>
                        <sub>
                            <b>{t('sports.cr7Caption')}</b>
                        </sub>
                    </p>
                </div>
            </div>
            <br />
        </div>
    );
};

const styles: StyleSheetCSS = {
    photoRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 24,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
    },
    photoCard: {
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 320,
        flex: '1 1 260px',
    },
    photo: {
        width: '100%',
        height: 'auto',
        maxWidth: 320,
        border: '2px solid #000',
        imageRendering: 'auto',
    },
    caption: {
        marginTop: 8,
        textAlign: 'center',
    },
};

export default SportsProjects;
