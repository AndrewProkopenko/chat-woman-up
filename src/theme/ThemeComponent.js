import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core'
import { teal } from '@material-ui/core/colors';
import App from '../App';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: teal[400]
        }
      }
  });

function ThemeComponent() {
    return (
        <ThemeProvider theme={theme}> 
            <CssBaseline/>  
            <App/>
        </ThemeProvider>
    )
}

export default ThemeComponent
