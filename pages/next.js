import React, { useState, useEffect} from 'react'
import Head from 'next/head'
import styles from '../styles/Next.module.css'

export default function Home(props) {
  const [infos, setInfos] = useState([
    {
      login: '',
      name: '',
      id: null,
      html_url: '',
      hireable: false,
      public_repos: null,
      location: '',
      blog: '',
      email: '',
      twitter: ''
    }
  ])
  
  useEffect(() => {
    getData().catch((err) => console.log('Error: ', err))
  }, [props])

  async function getData() {
    const response = await fetch(`https://api.github.com/users/minsu3`)
    const info = await response.json()
    console.log('got response back')

    const infoObject = {
      login: info.login,
      name: info.name,
      id: info.id,
      html_url: info.html_url,
      hireable: info.hireable.toString(),
      public_repos: info.public_repos,
      location: info.location,
      blog: info.blog,
      email: info.email,
      twitter: info.twitter_username
    }
    setInfos(infoObject)
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Github Job Search</h1>
        <h2 className={styles.title}>Username: {infos.login}</h2>
        <div className={styles.grid}>
          <a className={styles.card}>
            <p><strong>Full Name: </strong> {infos.name}</p>
          </a>
          <a className={styles.card}>
            <p><strong>Job Availability: </strong>{infos.hireable ? "Currently open" : "no"}</p>
          </a>
          <a className={styles.card}>
            <p><strong>Location: </strong>{infos.location}</p>
          </a>
          <a className={styles.card}>
            <p><strong>Github Public Repos: </strong>{infos.public_repos}</p>
          </a>
          <a className={styles.card}>
            <p><strong>Email: </strong>{infos.email ? infos.email : "not included"}</p>
          </a>
          <a className={styles.card}>
            <p><strong>Professional Site: </strong>{infos.blog}</p>
          </a>
          <a className={styles.card}>
            <p><strong>Twitter Username: </strong>{infos.twitter ? infos.twitter : "No Account"}</p>
          </a>
        </div>
      </main>
    </div>
  )
}
