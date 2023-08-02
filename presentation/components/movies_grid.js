import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/Movies.module.sass'
import Image from 'next/image';

const MoviesGrid = (props) => {

    const { movies, type } = props
    return (
        <div className={styles.moviesGrid}>
            <div className={styles.movieHeader}>
                {
                    type == 'main' ?
                        <span>New Releases</span> :
                        <span>Search Results</span>
                }
                <p>View More</p>
            </div>

            <div className={styles.grid} type={type != 'main' ? 'grid2' : ''}>
                {
                    movies.map((e) =>
                        <div key={e.movieId} className={`${styles.item}`}>
                            <div className={styles.shadowBox}>
                                <div className={styles.tag}>
                                    {e.genre}
                                </div>
                                <img src={e.poster} className={styles.bgImg} />
                                <div className={styles.details}>

                                    <div className={styles.info}>
                                        <div className={styles.moreInfo}>
                                            <Image src='/clock.svg' alt="" width={'24px'} height={'24px'} />

                                            {e.duration}
                                        </div>
                                        <div className={styles.moreInfo}>
                                            <Image src='/Eye.svg' alt="" width={'24px'} height={'24px'} />

                                            {e.views}
                                        </div>
                                    </div>
                                    {e.title}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
}


export default MoviesGrid