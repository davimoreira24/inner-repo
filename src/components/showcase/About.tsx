import React from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16, lineHeight: 1.25 }}>
                From startup code to millions-scale: my journey as a Software
                Engineer.
            </h1>

            <br />
            <div className="text-block">
                <p>
                    My path in software started in 2018 in Fortaleza, when I
                    joined Deway as an intern. What began with Ionic and React
                    Native at a mobile-focused startup turned into six years of
                    steady growth, eventually leading me to Tech Lead. There I
                    solidified my core stack—React, Next.js, Node.js, and
                    Python—and led projects from zero to production.
                </p>
                <br />
                <p>
                    In 2024 I took on a role at RD Saúde (Latin America&apos;s
                    largest drugstore retailer), where I owned complex technical
                    solutions: shaping architecture, joining coding dojos, and
                    driving quality through code reviews and high-level
                    technical discussion.
                </p>
                <br />
                <p>
                    Since 2025 I&apos;ve been a Senior Developer at Magazine
                    Luiza, focused on high-impact experiences for both web and
                    mobile. I work on the team that built a custom CRM for
                    dynamic page creation, balancing performance and
                    flexibility. My goal is scalable, clean software that
                    delivers real business value.
                </p>
                <br />
                <p>
                    Thanks for visiting the portfolio. Questions or
                    opportunities? <Link to="/contact">Get in touch</Link> or
                    email{' '}
                    <a href="mailto:contato@sharkmind.com.br">
                        contato@sharkmind.com.br
                    </a>
                    .
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
                            <b>Figure 1:</b> me on my first day as an intern.
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                    Follow along on{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/davimoreira"
                    >
                        GitHub (@davimoreira)
                    </a>
                    .
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
