import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import React, { useContext } from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../..';

const Navbar = () => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <AppBar position="static">
      <Toolbar variant={'dense'}>
        <Grid container justifyContent={'flex-end'}>
          {user ? (<Button onClick={() => auth.signOut()} variant="contained">Выйти</Button>) :
            <NavLink to={LOGIN_ROUTE}>
              <Button variant="contained">Логин</Button>
            </NavLink>
          }
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar