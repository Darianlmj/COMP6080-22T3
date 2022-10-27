import React from 'react'
import { useEffect, useState } from 'react';
import styles from './styles.module.css'

const GeneralTemplate = ({ title, children }) => {
  document.title = title;
  
  // const [count, setCount] = useState(0);

  // setCount(count + 1);
  // console.log(count);

  return (
    <div
      className={styles.page}
    >
      { children }
    </div>
  )
}

export default GeneralTemplate