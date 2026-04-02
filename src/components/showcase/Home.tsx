import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '../general';
import LanguageSwitcher from '../LanguageSwitcher';

import { useNavigate } from 'react-router';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const goToContact = () => {
        navigate('/contact');
    };

    return (
        <div style={styles.page}>
            <LanguageSwitcher style={styles.langSwitch} />
            <div style={styles.header}>
                <h1 style={styles.name}>Davi Moreira</h1>
                <h2>{t('home.role')}</h2>
            </div>
            <div style={styles.buttons}>
                <Link containerStyle={styles.link} to="about" text={t('nav.about')} />
                <Link
                    containerStyle={styles.link}
                    to="experience"
                    text={t('nav.experience')}
                />
                <Link
                    containerStyle={styles.link}
                    to="projects"
                    text={t('nav.projects')}
                />
                <Link
                    containerStyle={styles.link}
                    to="contact"
                    text={t('nav.contact')}
                />
            </div>
            <div style={styles.forHireContainer} onMouseDown={goToContact}>
                {/* <img src={forhire} alt="" /> */}
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
    },
    langSwitch: {
        position: 'absolute',
        top: 24,
        right: 24,
    },
    header: {
        textAlign: 'center',
        marginBottom: 64,
        marginTop: 64,

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        justifyContent: 'space-between',
    },
    image: {
        width: 800,
    },
    link: {
        padding: 16,
    },
    nowHiring: {
        backgroundColor: 'red',
        padding: 16,
    },
    forHireContainer: {
        marginTop: 64,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    name: {
        fontSize: 72,
        marginBottom: 16,
        lineHeight: 0.9,
    },
};

export default Home;
