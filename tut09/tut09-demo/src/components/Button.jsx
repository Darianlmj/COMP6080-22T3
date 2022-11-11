import React from 'react'

const Button = ({ title }) => {
  const [buttonText, setButtonText] = React.useState(title)

  const handleClick = () => {
    if (buttonText === 'Click Me!') {
      setButtonText('Do not click me!')
    } else {
      setButtonText('Click Me!')
    }
  }

  return (
    <div>
      <button onClick={handleClick}>
        { buttonText }
      </button>
      {
        buttonText === 'Do not click me!' &&
        <div>Don't do it!</div>
      }
    </div>
  )
}

export default Button