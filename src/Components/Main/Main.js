import React, { useState } from 'react'
import styles from './styles.module.css'

function Main() {

  const [cookie, setCookie] = useState("visible")

  return (
    <div className={styles.Main}>
      <div className={styles.Text}>
        <h1 className='fs-1'>Find your inspiration.</h1>
        <h6 className='fs-4'>Join the Flickr community, home to tens of billions of photos and 2 million groups.</h6>
      </div>
      <div className={styles.Button}>
        <button type='button' className='btn btn-light text-dark fs-5'>Start for free</button>
      </div>
      <div className={`${styles.Cookie} ${cookie == "visible" ? styles.visible : styles.unvisible} bg-secondary `}>
        <p>This site uses cookies to improve your experience and to help show content that is more relevant to your interests. By using this site, you agree to the use of cookies by Flickr and our partners as described in our cookie policy.  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" onClick={() => {setCookie(cookie == "visible" ? "unvisible" : "visible")}} className="bi bi-x-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg></p> <br />
      </div>
    </div>
  )
}

export default Main
