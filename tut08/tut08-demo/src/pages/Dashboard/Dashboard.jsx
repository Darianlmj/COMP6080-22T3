import React from 'react'
import { StoreContext } from '../../utils/store'

const Dashboard = () => {
  const {
    token: [token]
  } = React.useContext(StoreContext);


  return (
    <div>
    {
      token !== ''
      ? (
        <div>
          <h1>Dashboard</h1>
          <p>{token}</p>
        </div>
      ) : (
        <div>
          <h1>Dashboard</h1>
          <p>You are not logged in.</p>
        </div>
      )
    }
  </div>
  )
}

export default Dashboard