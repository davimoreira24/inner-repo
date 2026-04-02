import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// @ts-ignore
import liiixo from '../../../assets/audio/LIIIXO.mp3';
// @ts-ignore
import travisShow from '../../../assets/pictures/projects/show.mp4';
import { MusicPlayer } from '../../general';
import VideoAsset from '../../general/VideoAsset';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = () => {
    const { t } = useTranslation();
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>{t('music.title')}</h1>
            <h3>{t('music.subtitle')}</h3>
            <br />
            <div className="text-block">
                <p>{t('music.p1')}</p>
                <br />
                <p>{t('music.p2')}</p>
            </div>
            <br />
            <div className="captioned-image">
                <VideoAsset src={travisShow} />
                <p style={styles.caption}>
                    <sub>
                        <b>{t('music.videoCaption')}</b>
                    </sub>
                </p>
            </div>
            <br />
            <h2>{t('music.favoriteTitle')}</h2>
            <br />
            <p>{t('music.favoriteIntro')}</p>
            <br />
            <MusicPlayer
                src={liiixo}
                title="LIIIXO"
                subtitle={t('music.trackSubtitle')}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
        </div>
    );
};

const styles: StyleSheetCSS = {
    caption: {
        width: '80%',
        marginTop: 8,
    },
};

export default MusicProjects;
