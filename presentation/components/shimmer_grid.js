import React from "react";
import styles from '../../styles/Movies.module.sass'
import Image from "next/image";

const ShimmerGrid = (props) => {
    const { type } = props

    return (

        <div className={styles.moviesGrid}>
            <div className={styles.movieHeader}>
                <span>New Relezases</span>
                <p>View More</p>
            </div>

            <div className={styles.grid}>
                {
                    ['', '', '', '', '', '', '', '', ''].map((e) =>
                        <div key={e.movieId} className={`${styles.item} ${type == 'main' ? '' : styles.extendedItem} ${styles.shimmerEffect}`}>
                            <div className={styles.shadowBox}>
                                <div className={styles.tag}>
                                    Genre
                                </div>
                                <div className={styles.details}>

                                    <div className={styles.info}>
                                        <div className={styles.moreInfo}>
                                            <Image src='/clock.svg' alt="" width={'24px'} height={'24px'} />
                                            Duration
                                        </div>
                                        <div className={styles.moreInfo}>
                                            <Image src='/Eye.svg' alt="" width={'24px'} height={'24px'} />
                                            Views
                                        </div>
                                    </div>
                                    Title
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );

}


export default ShimmerGrid