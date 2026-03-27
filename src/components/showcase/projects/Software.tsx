import React from 'react';
// @ts-ignore
import rd from '../../../assets/pictures/projects/rd.mp4';
// @ts-ignore
import magalu from '../../../assets/pictures/projects/magalu.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Highlights from recent work—mobile and web products at scale in
                Brazilian retail and pharmacy.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Drogasil (RD Saúde)</h2>
                <br />
                <p>
                    At RD Saúde I owned complex solutions behind products like the
                    Drogasil app: Latin America&apos;s largest drugstore
                    ecosystem, where reliability, performance, and a polished
                    customer journey matter every day. I contributed across
                    architecture, quality practices (reviews, dojos), and
                    shipping features end to end.
                </p>
                <br />
                <div className="captioned-image">
                    <div style={styles.rdVideoWrap}>
                        <VideoAsset src={rd} />
                    </div>
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Screen capture from the Drogasil app
                            experience.
                        </sub>
                    </p>
                </div>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.drogasil.com.br/"
                        >
                            <p>
                                <b>[Drogasil]</b> — brand &amp; channels
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.rdsaude.com.br/"
                        >
                            <p>
                                <b>[RD Saúde]</b> — company site
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>Magazine Luiza</h2>
                <br />
                <p>
                    Since 2025 I&apos;ve been a Senior Developer at Magazine
                    Luiza, building high-impact web and mobile experiences. I work
                    on initiatives such as a custom CRM for dynamic page
                    creation—balancing flexibility for the business with strict
                    performance requirements.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={magalu} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Screen capture from Magalu product
                            work (CRM / pages context).
                        </sub>
                    </p>
                </div>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.magazineluiza.com.br/"
                        >
                            <p>
                                <b>[Magazine Luiza]</b> — magazineluiza.com.br
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    More on{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/davimoreira24"
                    >
                        GitHub (@davimoreira24)
                    </a>
                    .
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    rdVideoWrap: {
        maxWidth: 360,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
