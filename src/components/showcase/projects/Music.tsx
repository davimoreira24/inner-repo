import React, { useState } from 'react';
// @ts-ignore
import area from '../../../assets/audio/area.mp3';
// @ts-ignore
import travisShow from '../../../assets/pictures/projects/show.mp4';
import { MusicPlayer } from '../../general';
import VideoAsset from '../../general/VideoAsset';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = () => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>Music &amp; Sound</h1>
            <h3>Personal</h3>
            <br />
            <div className="text-block">
                <p>
                    Music is a huge part of my life—I listen to almost everything,
                    from hip-hop and electronic to rock, MPB, and whatever catches
                    my ear. I don&apos;t stick to one genre; I enjoy discovering new
                    sounds and revisiting old favorites.
                </p>
                <br />
                <p>
                    I also go to a lot of live shows. There&apos;s nothing quite
                    like being in the crowd, and some of my best memories are from
                    concerts. Below is a clip from one of them—a Travis Scott
                    show—with me in the frame.
                </p>
            </div>
            <br />
            <div className="captioned-image">
                <VideoAsset src={travisShow} />
                <p style={styles.caption}>
                    <sub>
                        <b>Video:</b> Travis Scott show—footage with me in the
                        crowd.
                    </sub>
                </p>
            </div>
            <br />
            <h2>Favorite track</h2>
            <br />
            <p>
                If I had to pick one song to keep on repeat, it would be this
                one—press play below.
            </p>
            <br />
            <MusicPlayer
                src={area}
                title="Area"
                subtitle="My favorite track"
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
