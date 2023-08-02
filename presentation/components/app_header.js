import React from "react";
import { SEARCH_ACTIONS } from '../../presentation/redux/actions/common_actions'
import Image from "next/image";
import styles from '../../styles/Home.module.sass'

const AppHeader = (props) => {

    const { theater_name, d_date, s_date, type, onSubmit } = props

    return (

        < div className={styles.playButton} >

            <Image src={'/PlayButton.svg'} alt='' width={'274px'} height={'274px'} />
            {
                type == SEARCH_ACTIONS.NEW_MOVIES ?
                    <div>

                        <span>Find your movies here!</span>

                        <p>Explore our gallery full of exciting films from all around the globe only your yor entertainments. No hidden charges or disturbing ads.</p>

                    </div>
                    : type == SEARCH_ACTIONS.THEATER ?

                        <div className={styles.searchBox}>
                            Search your movies here!
                            <div className={styles.searchTypeBox} type={'row'}>

                                <div className={styles.inputTheatre}>
                                    <Image src={'/search_filled.svg'} alt='' width={'24px'} height={'24px'} />
                                    <input atr='searchTypeBoxTheater' id="searchInput" placeholder={'Search by theater....'} defaultValue={theater_name ?? ''} />
                                </div>

                                <div className={styles.inputDate}>
                                    <Image src={'/calendar.svg'} alt='' width={'24px'} height={'24px'} />
                                    <input atr='searchTypeBoxDate' id="s_date" type='date' placeholder={'23/12/2021'} defaultValue={d_date ?? ''} />
                                </div>


                            </div>

                            <div className={styles.searchSubmitButton} onClick={onSubmit}><p>Search</p></div>

                        </div>
                        : type == SEARCH_ACTIONS.DATE ?

                            <div className={styles.searchBox}>
                                Search your movies here!
                                <div className={styles.searchTypeBox} type={'col'}>

                                    <div className={styles.inputTheatre}>
                                        <Image src={'/search_filled.svg'} alt='' width={'24px'} height={'24px'} />
                                        <input atr='searchTypeBoxRowTheater' id="searchInput" placeholder={'Search by theater....'} defaultValue={theater_name ?? ''} />
                                    </div>

                                    <div className={styles.searchTypeBox} type={'row2'}>

                                        <div className={styles.inputDate}>
                                            <Image src={'/calendar.svg'} alt='' width={'24px'} height={'24px'} />
                                            <input atr='searchTypeBoxRowDate' id="s_date" type='date' placeholder={'23/12/2021'} defaultValue={s_date ?? ''} />
                                        </div>

                                        <div className={styles.inputDate}>
                                            <Image src={'/calendar.svg'} alt='' width={'24px'} height={'24px'} />
                                            <input atr='searchTypeBoxRowDate' id="d_date" type='date' placeholder={'25/12/2021'} defaultValue={d_date ?? ''} />
                                        </div>

                                    </div>

                                </div>

                                <div className={styles.searchSubmitButton} onClick={onSubmit}><p>Search</p></div>

                            </div>
                            : <div></div>
            }


        </div >
    )

}


export default AppHeader