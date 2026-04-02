import React from 'react';
import { useTranslation } from 'react-i18next';
// @ts-ignore
import rd from '../../../assets/pictures/projects/rd.mp4';
// @ts-ignore
import spteleva from '../../../assets/pictures/projects/spteleva.jpg';
// @ts-ignore
import schon from '../../../assets/pictures/projects/schon.webp';
// @ts-ignore
import forrageiras from '../../../assets/pictures/projects/forrageiras.png';
// @ts-ignore
import simploapp from '../../../assets/pictures/projects/simploapp.webp';
// @ts-ignore
import simploweb from '../../../assets/pictures/projects/simploweb.jpeg';
// @ts-ignore
import corpvslog from '../../../assets/pictures/projects/corpvslog.png';
// @ts-ignore
import carteira from '../../../assets/pictures/projects/carteira.png';
// @ts-ignore
// import magalu from '../../../assets/pictures/projects/magalu.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = () => {
    const { t } = useTranslation();
    const githubFooter = (
        <p>
            {t('softwarePage.moreGithubBefore')}
            <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/davimoreira24"
                aria-label="GitHub @davimoreira24"
            >
                GitHub (@davimoreira24)
            </a>
            {t('softwarePage.moreGithubAfter')}
        </p>
    );
    return (
        <div className="site-page-content">
            <h1>{t('software.title')}</h1>
            <h3>{t('software.subtitle')}</h3>
            <br />
            <p>{t('software.intro')}</p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>{t('software.drogasil.title')}</h2>
                <br />
                <p>{t('software.drogasil.body')}</p>
                <br />
                <div className="captioned-image">
                    <div style={styles.rdVideoWrap}>
                        <VideoAsset src={rd} />
                    </div>
                    <p style={styles.caption}>
                        <sub>
                            <b>{t('software.drogasil.figure')}</b>
                        </sub>
                    </p>
                </div>
                <br />
                <h3>{t('software.linksHeading')}</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.drogasil.com.br/"
                        >
                            <p>
                                <b>{t('software.drogasil.linkDrogasil')}</b>
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://rdsaude.com.br/"
                        >
                            <p>
                                <b>{t('software.drogasil.linkRd')}</b>
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>{t('software.meris.title')}</h2>
                <br />
                <p>{t('software.meris.body')}</p>
                <br />
                <div className="captioned-image">
                    <div style={styles.merisVideoWrap}>
                        <iframe
                            title={t('software.meris.iframeTitle')}
                            src="https://player.vimeo.com/video/1136166961?background=1"
                            style={styles.vimeoIframe}
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <p style={styles.caption}>
                        <sub>
                            <b>{t('software.meris.figure')}</b>
                        </sub>
                    </p>
                </div>
                <br />
                <h3>{t('software.linksHeading')}</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://coodex.ai/meris"
                        >
                            <p>
                                <b>{t('software.meris.linkMeris')}</b>
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://coodex.ai/"
                        >
                            <p>
                                <b>{t('software.meris.linkCoodex')}</b>
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>{t('software.spteleva.title')}</h2>
                <br />
                <p>{t('software.spteleva.body')}</p>
                <br />
                <div className="captioned-image">
                    <div style={styles.sptelevaWrap}>
                        <img
                            src={spteleva}
                            alt=""
                            style={styles.projectImage}
                        />
                    </div>
                    <p style={styles.caption}>
                        <sub>
                            <b>{t('software.spteleva.figure')}</b>
                        </sub>
                    </p>
                </div>
                <br />
                <h3>{t('software.linksHeading')}</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://sptleva.com.br/"
                        >
                            <p>
                                <b>{t('software.spteleva.linkSite')}</b>
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://apps.apple.com/br/app/sp-tleva/id1626327175"
                        >
                            <p>
                                <b>{t('software.spteleva.linkAppStore')}</b>
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>{t('software.schon.title')}</h2>
                <br />
                <p>{t('software.schon.body')}</p>
                <br />
                <div className="captioned-image">
                    <div style={styles.schonWrap}>
                        <img src={schon} alt="" style={styles.projectImage} />
                    </div>
                    <p style={styles.caption}>
                        <sub>
                            <b>{t('software.schon.figure')}</b>
                        </sub>
                    </p>
                </div>
            </div>

            <div className="text-block">
                <h2>{t('software.forrageiras.title')}</h2>
                <br />
                <p>{t('software.forrageiras.body')}</p>
                <br />
                <div className="captioned-image">
                    <div style={styles.forrageirasWrap}>
                        <img
                            src={forrageiras}
                            alt=""
                            style={styles.projectImage}
                        />
                    </div>
                    <p style={styles.caption}>
                        <sub>
                            <b>{t('software.forrageiras.figure')}</b>
                        </sub>
                    </p>
                </div>
            </div>

            <div className="text-block">
                <h2>{t('software.simplo.title')}</h2>
                <br />
                <p>{t('software.simplo.p1')}</p>
                <br />
                <p>{t('software.simplo.p2')}</p>
                <br />
                <div className="captioned-image">
                    <div style={styles.simploWrap}>
                        <img
                            src={simploweb}
                            alt=""
                            style={styles.projectImage}
                        />
                    </div>
                    <p style={styles.caption}>
                        <sub>
                            <b>{t('software.simplo.figureWeb')}</b>
                        </sub>
                    </p>
                </div>
                <br />
                <div className="captioned-image">
                    <div style={styles.simploWrap}>
                        <img
                            src={simploapp}
                            alt=""
                            style={styles.projectImage}
                        />
                    </div>
                    <p style={styles.caption}>
                        <sub>
                            <b>{t('software.simplo.figureApp')}</b>
                        </sub>
                    </p>
                </div>
                <br />
                <h3>{t('software.linksHeading')}</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.simplusbr.com/"
                        >
                            <p>
                                <b>{t('software.simplo.linkBrasil')}</b>
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.simplusbr.com/simplo-online"
                        >
                            <p>
                                <b>{t('software.simplo.linkOnline')}</b>
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>{t('software.corpvs.title')}</h2>
                <br />
                <p>{t('software.corpvs.body')}</p>
                <br />
                <div className="captioned-image">
                    <div style={styles.corpvsWrap}>
                        <img
                            src={corpvslog}
                            alt=""
                            style={styles.projectImage}
                        />
                    </div>
                    <p style={styles.caption}>
                        <sub>
                            <b>{t('software.corpvs.figure')}</b>
                        </sub>
                    </p>
                </div>
                <br />
                <h3>{t('software.linksHeading')}</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.corpvs.com.br/servicos/corpvs-log"
                        >
                            <p>
                                <b>{t('software.corpvs.linkService')}</b>
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>{t('software.carteira.title')}</h2>
                <br />
                <p>{t('software.carteira.body')}</p>
                <br />
                <div className="captioned-image">
                    <div style={styles.carteiraWrap}>
                        <img
                            src={carteira}
                            alt=""
                            style={styles.projectImage}
                        />
                    </div>
                    <p style={styles.caption}>
                        <sub>
                            <b>{t('software.carteira.figure')}</b>
                        </sub>
                    </p>
                </div>
            </div>

            {/*
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
            */}
            <div className="text-block">{githubFooter}</div>
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
    merisVideoWrap: {
        maxWidth: 640,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    vimeoIframe: {
        width: '100%',
        aspectRatio: '16 / 9',
        border: 0,
        borderRadius: 8,
        display: 'block',
    },
    sptelevaWrap: {
        maxWidth: 640,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    schonWrap: {
        maxWidth: 480,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    forrageirasWrap: {
        maxWidth: 500,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    simploWrap: {
        maxWidth: 560,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    corpvsWrap: {
        maxWidth: 520,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    carteiraWrap: {
        maxWidth: 520,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    projectImage: {
        width: '100%',
        height: 'auto',
        display: 'block',
        borderRadius: 8,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
