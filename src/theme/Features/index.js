import React from 'react'
import clsx from 'clsx'
import { IoAlbumsOutline, IoPaperPlaneOutline, IoCodeWorkingOutline, IoBuildOutline } from 'react-icons/io5'

import styles from './styles.module.less'

const size = 24
const data = [
    {
        icon: <IoAlbumsOutline size={size} />,
        title: <>Y-TARO-UI</>,
        description: (
            <>
                一些介绍, 还没有想到呢一些介绍, 还没有想到呢一些介绍, 还没有想到呢一些介绍, 还没有想到呢一些介绍,
                还没有想到呢.
            </>
        )
    },
    {
        icon: <IoPaperPlaneOutline size={size} />,
        title: <>TARO-RAY</>,
        description: (
            <>
                一些介绍, 还没有想到呢一些介绍, 还没有想到呢一些介绍, 还没有想到呢一些介绍, 还没有想到呢一些介绍,
                还没有想到呢
            </>
        )
    },
    {
        icon: <IoCodeWorkingOutline size={size} />,
        title: <>Y-TARO-TEMPLATE</>,
        description: (
            <>
                一些介绍, 还没有想到呢一些介绍, 还没有想到呢一些介绍, 还没有想到呢一些介绍, 还没有想到呢一些介绍,
                还没有想到呢
            </>
        )
    },
    {
        icon: <IoBuildOutline size={size} />,
        title: <>GOING-MERRY</>,
        description: (
            <>
                一些介绍, 还没有想到呢一些介绍, 还没有想到呢一些介绍, 还没有想到呢一些介绍, 还没有想到呢一些介绍,
                还没有想到呢
            </>
        )
    }
]

function Feature({ icon, title, description }) {
    return (
        <div className={clsx('col col--6', styles.feature)}>
            <div className='item'>
                <div className={styles.header}>
                    {icon && <div className={styles.icon}>{icon}</div>}
                    <h2 className={styles.title}>{title}</h2>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}

function Features() {
    return (
        <>
            {data && data.length && (
                <section id='features' className={styles.features}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col col--11 col--offset-1'>
                                <div className='row'>
                                    {data.map((props, idx) => (
                                        <Feature key={idx} {...props} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default Features
