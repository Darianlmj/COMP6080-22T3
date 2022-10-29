import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const Button = ({ text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    console.log(count);
  }, [])

  



  return (
    <a
    >
      {text}
    </a>

  )
}

export default Button