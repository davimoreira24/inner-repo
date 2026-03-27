import React from 'react';

const publicPath = (file: string) =>
    `${process.env.PUBLIC_URL || ''}/images/sports/${file}`;

export interface SportsProjectsProps {}

const SportsProjects: React.FC<SportsProjectsProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Sports</h1>
            <h3>Passion</h3>
            <br />
            <div className="text-block">
                <p>
                    I follow sports closely—especially <b>basketball</b> and{' '}
                    <b>football (soccer)</b>. Watching games, reading about
                    athletes, and seeing how teams prepare is something I
                    genuinely enjoy alongside work and music.
                </p>
                <br />
                <p>
                    Two athletes I look up to are <b>Stephen Curry</b> and{' '}
                    <b>Cristiano Ronaldo</b>. I&apos;m a huge fan of both:
                    Curry&apos;s work ethic, humility, and clutch mindset;
                    Ronaldo&apos;s discipline, longevity, and obsession with
                    improvement. Their mentalities inspire how I show up in my
                    own career—consistency, resilience, and always pushing the
                    next step.
                </p>
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
                            <b>Stephen Curry</b> — inspiration on and off the
                            court.
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
                            <b>Cristiano Ronaldo</b> — drive, standards, and
                            longevity.
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
