import { Avatar, Button, Container, Grid, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../..'
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app';
import Loader from '../Loader/Loader';

const Chat = () => {
  const { auth, firestore } = useContext(Context)
  const [user] = useAuthState(auth)
  const [message, loading] = useCollection(
    firestore.collection('messages').orderBy('createdAt')
  )
  const [value, setValue] = useState('')

  const changeInput = (e) => {
    setValue(e.target.value)
  }

  
  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setValue('')
    console.log(message.docs);
  }
  // console.log(message.docs);

  if (loading) {
    return <Loader />
  }

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50, marginTop: 20 }}
        justifyContent={'center'}
      >
        <div style={{ width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto' }}>
          {message.docs.map((doc) => {
            return (
              <div style={{
                margin: 10,
                border: user.uid === doc.data().uid ? '2px solid green' : '2px dashed red',
                marginLeft: user.uid === doc.data().uid ? 'auto' : '10px',
                width: 'fit-content',
                padding: 5
              }}>
                <Grid container>
                  <Avatar src={doc.data().photoURL} />
                  <div>{doc.data().displayName}</div>
                </Grid>
                <div>{doc.data().text}</div>
              </div>
              )
          } )}
        </div>
        <Grid
          container
          direction={'column'}
          alignItems={'flex-end'}
          style={{ width: '80%' }}>
          <TextField value={value} onChange={changeInput} fullWidth variant='outlined' maxRows={2} />
          <Button onClick={sendMessage} variant='outlined' style={{ marginTop: 10 }}>Отправить</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Chat