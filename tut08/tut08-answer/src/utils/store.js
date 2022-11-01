import React from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {
  const [token, setToken] = React.useState([])

  const store = {
    token: [token, setToken],
  }

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
}
