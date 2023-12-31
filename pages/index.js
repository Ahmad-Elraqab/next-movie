import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import Navbar from '../presentation/components/navbar'
import MoviesGrid from '../presentation/components/movies_grid'
import Footer from '../presentation/components/footer'
import ShimmerGrid from '../presentation/components/shimmer_grid'
import AppHeader from '../presentation/components/app_header'
import $ from "jquery"

import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewMovies, fetchMoviesByTheaterName, fetchMoviesByDate } from '../presentation/redux/actions/movie_actions'
import { SEARCH_ACTIONS } from '../presentation/redux/actions/common_actions'
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();

  // Access query parameters using router.query
  const { theater_name } = router.query;
  const { d_date } = router.query;
  const { s_date } = router.query;

  const dispatch = useDispatch();

  // component loading  
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(SEARCH_ACTIONS.NEW_MOVIES);

  const movies = useSelector((state) => state.movies.movies);
  const error = useSelector((state) => state.movies.error);

  useEffect(() => {

    setTimeout(() => {

      if (theater_name && d_date && s_date) {

        setSearch(SEARCH_ACTIONS.DATE)
        dispatch(fetchMoviesByTheaterName(theater_name, d_date))

      }
      else if (theater_name && d_date) {

        setSearch(SEARCH_ACTIONS.THEATER)
        dispatch(fetchMoviesByTheaterName(theater_name, d_date))

      } else {

        setSearch(SEARCH_ACTIONS.NEW_MOVIES)
        dispatch(fetchNewMovies())
      }

      setLoading(false)
    }, 3000);


  }, [dispatch, d_date, s_date, theater_name])


  const scrollAxis = () => {
    $(document).ready(function () {
      $('html, body').animate({
        scrollTop: $('#mainBody').offset().top
      }, 300);
    });
  }

  async function submit() {

    const theater = document.getElementById('searchInput').value;
    const s_date = document.getElementById('s_date').value;

    setLoading(() => true)

    switch (search) {
      case SEARCH_ACTIONS.THEATER:

        if (theater && s_date) {

          scrollAxis()
          await dispatch(fetchMoviesByTheaterName(theater, s_date))

        } else {
          alert('Required Fields')
        }

        break;

      case SEARCH_ACTIONS.DATE:

        const d_date = document.getElementById('d_date').value;

        if (theater && s_date && d_date) {
          scrollAxis()
          await dispatch(fetchMoviesByDate(theater, d_date, s_date))

        } else {
          alert('Required Fields')
        }
        break;

      default:
        break;
    }
    setLoading(() => false)

  }


  return (

    <div>

      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/PlayButton.svg" />
      </Head>

      <main className={styles.app}>

        <div className={styles.firstContainer}>

          <div className={styles.shadowBox}>

            <Navbar onSearch={(val) => setSearch(val)} />

            <AppHeader type={search} theater_name={theater_name} d_date={d_date} s_date={s_date} onSubmit={() => submit()} />

          </div>

        </div>
        <div id='mainBody' className={styles.mainBodyBox}>
          {
            loading ? <ShimmerGrid type={'main'} /> :
              error ? <div className={styles.error}>{error}</div> :
                <MoviesGrid movies={movies} type={search == SEARCH_ACTIONS.NEW_MOVIES ? 'main' : 'row'} />
          }
        </div>

      </main>

      <Footer />
    </div>
  )
}
