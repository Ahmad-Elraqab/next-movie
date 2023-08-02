import styles from '../../styles/Navbar.module.sass'
import Image from 'next/image';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_ACTIONS } from '../redux/actions/common_actions';

const Navbar = (props) => (

    <div className={styles.navbar}>

        <nav>

            <h4>PcariMovie</h4>

            <ul>
                <li className={styles.navActive}>Home</li>
                <li className={styles.navInActive}>Movies</li>
                <li className={styles.navInActive}>TV Show</li>
                <li className={styles.navInActive}>Video</li>
                <li className={styles.navInActive}>FAQ</li>
                <li className={styles.navInActive}>Pricing</li>
                <li className={styles.navInActive}>Contact Us</li>
            </ul>

            <span className={styles.navSearch}>
                <Image src='/Search.svg' width={'24px'} height={'24px'} alt='' onClick={() => props.onSearch(SEARCH_ACTIONS.THEATER)} onDoubleClick={() => props.onSearch(SEARCH_ACTIONS.DATE)} />

                <div className={styles.navProfile}>
                    <div className={styles.profileAvatar}> </div>
                    <span>John Glich</span>
                </div>
            </span>
        </nav>

    </div>
);



export default Navbar