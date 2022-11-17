import { Button, Grid } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

const Loader = () => {
    return (
        <Container>
            <Grid
                container
                style={{ height: window.innerHeight - 50 }}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Grid
                    container
                    alignItems={'center'}
                    direction={'column'}
                >
                    <div className="lds-hourglass"></div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Loader