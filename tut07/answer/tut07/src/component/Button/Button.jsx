import React, {useState} from 'react'
import styles from './styles.module.scss'

const Button = ({ text }) => {
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.replace('https://techspire.csesoc.unsw.edu.au/')
    }, 2000);
  }

  return (
    <>
      <a 
        className={styles.button}
        onClick={handleClick}
      >
        { text }
      </a>
      {
        isLoading && <div className={styles.loading}>Loading...</div>
      }
      
    </>
  )
}

export default Button