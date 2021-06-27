import React from 'react'

import {CircularProgress, Box} from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';


const  Preloader = () => {
    
const useStyles = makeStyles((theme) => ({
    preloaderBox: { 
        display: 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        background: theme.palette.background.paper, 
        minHeight: 400
    } 
}))

const classes = useStyles()

    return (
        <Box className={classes.preloaderBox} >
            <CircularProgress />
        </Box>
    )
}

export default Preloader
