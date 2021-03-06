import React from 'react'
import { IconContext } from 'react-icons'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './styles.module.less'

import Comparison from "@theme/Comparison";
import Examples from "@theme/Examples";
import Features from "@theme/Features";
import Hero from '@theme/Hero'

function Home() {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context
    const { tagline } = siteConfig

    return (
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            <Layout description={tagline}>
                <Hero />

                <main className={styles.main}>
                    <Features />
                    {/* <Comparison /> */}
                    {/* <Examples /> */}
                </main>
            </Layout>
        </IconContext.Provider>
    )
}

export default Home
