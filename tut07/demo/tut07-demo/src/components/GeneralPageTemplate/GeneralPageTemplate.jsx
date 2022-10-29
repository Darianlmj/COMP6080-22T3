import React from 'react'
import styles from './styles.module.scss'

const GeneralPageTemplate = ({ title, children }) => {
  document.title = title;

  return (
    <div className={styles.page}>
      { children }
    </div>
  )
}

export default GeneralPageTemplate