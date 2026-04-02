import React from 'react';
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
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Highlights from recent work—mobile and web products at scale in
                Brazilian pharmacy retail, fuel networks, beauty and barbershop
                operations, agricultural programs, automotive technical platforms,
                logistics tooling, investment and wealth platforms, plus
                enterprise AI platforms.
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
                            href="https://rdsaude.com.br/"
                        >
                            <p>
                                <b>[RD Saúde]</b> — company site
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>Meris (Coodex)</h2>
                <br />
                <p>
                    Meris is an AI-powered commissioning and EPC data platform for
                    asset-intensive industries—covering engineering, procurement,
                    and construction workflows from planning through handover. It
                    uses vertical AI agents to automate fragile, error-prone steps
                    in commissioning and validation, with LLM-backed flows that
                    keep complex projects traceable, compliant, and moving in
                    production.
                </p>
                <br />
                <div className="captioned-image">
                    <div style={styles.merisVideoWrap}>
                        <iframe
                            title="Meris — product overview"
                            src="https://player.vimeo.com/video/1136166961?background=1"
                            style={styles.vimeoIframe}
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Meris — product overview (Vimeo).
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
                            href="https://coodex.ai/meris"
                        >
                            <p>
                                <b>[Meris]</b> — coodex.ai/meris
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
                                <b>[Coodex]</b> — company site
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>SP T&apos;LEVA</h2>
                <br />
                <p>
                    SP T&apos;LEVA is a mobile app for finding and following SP
                    network fuel stations—surfacing nearby units, practical
                    driver-facing details, and a clearer picture of the network in
                    one flow. It also pulls perks and benefits into a single hub so
                    refueling stays practical, connected, and easier to navigate
                    on the road.
                </p>
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
                            <b>Figure 3:</b> SP T&apos;LEVA — product screens.
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
                            href="https://sptleva.com.br/"
                        >
                            <p>
                                <b>[SP T&apos;LEVA]</b> — official site
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
                                <b>[App Store]</b> — iOS
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>SCHON</h2>
                <br />
                <p>
                    SCHON is a management app for beauty salons, barbershops, and
                    businesses in the segment—bringing essential operational
                    routines into one place. It streamlines scheduling, client and
                    service organization, day-to-day flow, and back-office
                    support—helping teams run more efficiently, deliver better
                    service, and offer a modern experience for staff and clients.
                </p>
                <br />
                <div className="captioned-image">
                    <div style={styles.schonWrap}>
                        <img
                            src={schon}
                            alt=""
                            style={styles.projectImage}
                        />
                    </div>
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 4:</b> SCHON — product screens.
                        </sub>
                    </p>
                </div>
            </div>

            <div className="text-block">
                <h2>Forrageiras do Ceará</h2>
                <br />
                <p>
                    Forrageiras do Ceará is a full-featured, intuitive app for
                    consultants, technicians, and teams involved in managing and
                    monitoring forage production programs across the state. It
                    pairs a modern interface with essential context—local weather
                    signals such as precipitation, temperature, and wind—alongside
                    registration and management of participants, properties, and
                    program data. The product supports continuous tracking of
                    activities and technical visits, capturing progress and results
                    in real time, and delivers reports and performance indicators
                    to assess impact and how field actions are performing.
                </p>
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
                            <b>Figure 5:</b> Forrageiras do Ceará — product
                            screens.
                        </sub>
                    </p>
                </div>
            </div>

            <div className="text-block">
                <h2>Simplo</h2>
                <br />
                <p>
                    Since 1993, Simplo has worked to make automotive technical
                    knowledge easier to apply—building on early leadership in
                    embedded electronics and growing into a Latin American
                    reference for technical content trusted by tens of thousands of
                    repair professionals. The mission is to democratize that
                    knowledge: turning complex engineering information into
                    practical, day-to-day guidance for workshops.
                </p>
                <br />
                <p>
                    The Simplo digital ecosystem spans web and mobile, bringing
                    detailed manuals, electrical diagrams, diagnostic tables, and
                    maintenance procedures into one place for light and heavy
                    vehicles, hybrids, electric powertrains, motorcycles, and
                    tractors—with continuous updates that follow the market. It
                    also supports intelligent technical workflows: logging service
                    sessions, reviewing history, and receiving notifications about
                    new versions and releases—so deep expertise translates into
                    productivity, repair accuracy, and stronger results for shops
                    of every size.
                </p>
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
                            <b>Figure 6:</b> Simplo — web experience.
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
                            <b>Figure 7:</b> Simplo — app experience.
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
                            href="https://www.simplusbr.com/"
                        >
                            <p>
                                <b>[Simplo Brasil]</b> — simplusbr.com
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
                                <b>[Simplo Online]</b> — web access
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>Corpvs Log</h2>
                <br />
                <p>
                    Corpvs Log is a digital solution for organizing logistics
                    operations and making them easier to see end to end—supporting
                    process control, status tracking, and a standardized operational
                    flow. The experience is built around practicality: reducing
                    rework, improving communication across teams, and driving
                    efficiency across transport and distribution routines.
                </p>
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
                            <b>Figure 8:</b> Corpvs Log — product screens.
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
                            href="https://www.corpvs.com.br/servicos/corpvs-log"
                        >
                            <p>
                                <b>[Corpvs Log]</b> — service page
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>Carteira de Valor</h2>
                <br />
                <p>
                    Carteira de Valor is a system for following investments with
                    more clarity and structure. It brings portfolio information together
                    in one place, streamlines tracking of contributions and how net
                    worth evolves over time, and supports decision-making with an
                    intuitive, data-driven experience—focused on practicality and a
                    consolidated view of the portfolio.
                </p>
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
                            <b>Figure 9:</b> Carteira de Valor — product screens.
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
            <div className="text-block">
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
