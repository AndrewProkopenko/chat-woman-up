 
import { useState } from 'react';
import {  TextField, Button , Box } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';

const SendForm = ({sendMessage}) => {

    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSend = (e) => { 
        sendMessage(value)
        setValue('')
    }
    return (
        <Box display='flex'  > 
            <Box flexGrow={1} mr={1} >
                <TextField  
                    value={value}
                    onChange={handleChange} 
                    size='small' 
                    label="Send message" 
                    variant="outlined" 
                    style={{width: '100%'}}  
                />
            </Box>
            <Button 
                onClick={handleSend}
                color='primary' 
                variant='contained' 
                size="small" 
            > 
                <SendIcon/> 
            </Button>
        </Box>
    )
}

export default SendForm
