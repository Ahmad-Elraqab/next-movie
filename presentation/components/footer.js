import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/Footer.module.sass'
import Image from 'next/image';

const Footer = function () {

    const subTitles = ['Movies', 'Nice Studio', 'About', 'TV Show', 'Nice News', 'Careers', 'Videos', 'Nice TV', 'Press']
    const titles = ['Product', 'Media Group', 'Sitemap']
    const data = {
        Location: '8819 Ohio St. South Gate, California 90280',
        Mail: 'ourstudio@hello.com',
        Phone: '+271 386-647-3637'
    }
    const _data = Object.keys(data);

    return <div className={styles.footer} >

        <div className={styles.footerLeft}>
            <span>PcariMovie</span>
            <p className={styles.fd}>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</p>
            <p className={styles.ffd}>Join Newsletters</p>

            <div className={styles.news}>
                <p>Insert your mail here</p>

                <div className={styles.newsButton}>
                    <Image src='/arrowRight.svg' alt="" width={'24px'} height={'24px'} />
                </div>

            </div>

        </div>
        <div className={styles.footerRight}>

            <div className={styles.footerGrid}>
                {

                    titles.map((e) => <span key={e} className={styles.footerGridTitle}>{e}</span>)

                }
                {

                    subTitles.map((e) => <span key={e} className={styles.footerGridItem}>{e}</span>)
                }

            </div>
            <div className={styles.footerBase}>
                {_data.map((key) => <div key={key} className={styles.base}>
                    <Image src={`/${key}.svg`} alt="" width={'24px'} height={'24px'} />{data[key]}</div>)}
            </div>
        </div>

    </div >
}



export default Footer