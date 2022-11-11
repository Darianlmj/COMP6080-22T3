import React from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FlexyBox } from './styles';
import { StoreContext  } from '../../utils/store';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {
    token: [_token, setToken]
  } = React.useContext(StoreContext)

  return (
    <FlexyBox>
      <Paper>
        <TextField
          variant='outlined'
          autoComplete='true'
          autoFocus={true}
          label='username'
          onChange={(e) => setUsername(e.target.value)}
          />
        <TextField
          variant='outlined'
          autoComplete='true'
          autoFocus={true}
          label='password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={() => {
            if (username === 'admin' && password === 'admin') {
              setToken('Token is valid')
            } else {
              setToken('')
            }
            navigate('/dashboard')
          }}
        >
          Login
        </Button>
      </Paper>
    </FlexyBox>
  )
}

export default Home