import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            {/*
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Magazine Luiza</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.magazineluiza.com.br/"
                        >
                            <h4>magazineluiza.com.br</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Senior Developer</h3>
                        <b>
                            <p>2025 – Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Building high-impact experiences for both web and mobile at
                    one of Brazil&apos;s largest retailers. I focus on scalable,
                    maintainable software that translates into real business
                    outcomes.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Member of the team that delivered a custom CRM for
                            creating dynamic pages—pairing performance with
                            flexibility for internal and customer-facing flows.
                        </p>
                    </li>
                    <li>
                        <p>
                            Own features across the stack with emphasis on code
                            quality, architecture clarity, and measurable impact
                            on conversion and operations.
                        </p>
                    </li>
                </ul>
            </div>
            */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Coodex</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://coodex.ai/meris"
                        >
                            <h4>coodex.ai — Meris</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer — Meris platform</h3>
                        <b>
                            <p>2025 – Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Coodex builds AI-powered platforms for asset-heavy
                    industries; I work on{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://coodex.ai/meris"
                    >
                        Meris
                    </a>
                    , a commissioning and EPC data platform powered by vertical
                    AI agents—shipping features end to end with a strong focus on
                    LLM-backed workflows.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Prompt engineering and iteration on AI-assisted
                            flows, aligning model behaviour with product and
                            compliance needs in production.
                        </p>
                    </li>
                    <li>
                        <p>
                            Full-stack delivery with Next.js, Vue.js, NestJS, and
                            AWS—APIs, UIs, and cloud plumbing for reliable
                            releases.
                        </p>
                    </li>
                </ul>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>RD Saúde</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://rdsaude.com.br/"
                        >
                            <h4>rdsaude.com.br</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Technical Owner — Complex Solutions</h3>
                        <b>
                            <p>2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    RD Saúde is Latin America&apos;s largest drugstore retailer.
                    I joined to own technically demanding initiatives where
                    architecture decisions, collaboration, and quality gates
                    directly affect millions of customers.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Led design and delivery of complex solutions—from
                            high-level architecture to hands-on implementation.
                        </p>
                    </li>
                    <li>
                        <p>
                            Ran coding dojos and deep code reviews to raise the
                            bar on engineering practices and shared ownership.
                        </p>
                    </li>
                    <li>
                        <p>
                            Partnered with product and leadership on technical
                            trade-offs, prioritizing reliability and maintainability
                            at scale.
                        </p>
                    </li>
                </ul>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Deway</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://deway.com.br/"
                        >
                            <h4>deway.com.br</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Intern → Tech Lead</h3>
                        <b>
                            <p>2018 – 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    I started in Fortaleza as an intern at a mobile-focused
                    startup. What began with Ionic and React Native turned into
                    six years of growth—ending as Tech Lead—shipping products from
                    zero to production alongside a growing team.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Consolidated a core stack around React, Next.js,
                            Node.js, and Python; led projects across discovery,
                            build, and deploy.
                        </p>
                    </li>
                    <li>
                        <p>
                            Mentored engineers, shaped technical direction, and
                            balanced delivery speed with long-term quality.
                        </p>
                    </li>
                    <li>
                        <p>
                            Deep experience in mobile and web ecosystems, from
                            hybrid apps to full-stack features in production
                            environments.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
};

export default Experience;
