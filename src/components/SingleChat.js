
import { useEffect , useState} from 'react' 

import { Divider, Typography, Card, CardHeader, Avatar, lighten, Box  } from '@material-ui/core'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import SendForm from './SendForm';
import Preloader from './Preloader';

import {database} from '../firebase/firebase'

import CreateRandomColor from '../functions/CreateRandomColor'

import { makeStyles } from '@material-ui/core/styles';
import uuid from 'react-uuid';

const useStyles = makeStyles((theme) => ({
    messageCard: {
      marginTop: 10, 
      marginBottom: 5 , 
      boxShadow: 'none'
    },
    message: { 
      marginRight: '40%',
      background: lighten(theme.palette.background.paper, .1),
      borderRadius: 4, 
      [theme.breakpoints.down('sm')] : {
        marginRight: '20%',
      },
      [theme.breakpoints.down('xs')] : {
        marginRight: 40,
      }
    },  
    messageOwner: { 
      flexDirection: 'row-reverse',
      textAlign: 'right',
      marginRight: 0, 
      marginLeft: '50%', 
      background: lighten(theme.palette.background.paper, .2),
      borderRadius: 4, 
      [theme.breakpoints.down('sm')] : {
        marginLeft: '20%', 
      },
      [theme.breakpoints.down('sm')] : {
        marginLeft: 40, 
      }
    }
}))

const  SingleChat = ({user}) => {
    
    const [isLoading, setIsLoading] = useState(true)
    const [activeChat, setActiveChat] = useState([])
    
    const colorGenegate = CreateRandomColor()
    const activeChatHardcode = 'chat1'
    const classes = useStyles()
    
    useEffect( () => { 
        fetchActiveChat() 
        // eslint-disable-next-line
    }, [])
    
    const fetchActiveChat = () => { 
        const chat = database.ref('chat-list') 
        chat.on('value', (snapshot) => {
          const data = snapshot.val(); 
          if(!data) {
            database.ref('chat-list').set({
                chat1: {
                  messages: [
                    {
                      id: 123,
                      user: 'User-Admin', 
                      text: 'Chat is Created, Lets Messaging!', 
                      userColor: colorGenegate.color, 
                      userColorContrast: colorGenegate.contrast
                    }
                  ],
                  chat_id: 1,
                  chat_name : 'Chat №1'
                }
              })
          }
          else {
            setActiveChat(data[activeChatHardcode])  
          }
          setIsLoading(false)
        }); 
    }

    
    const sendMessage = (text) => {
        const newMessage = {
            id: uuid(),
            text: text, 
            user: user.id, 
            userColor: user.color, 
            userContrast: user.contrast || '#fff'
        }

        const chat = database.ref('chat-list').child('chat1/messages')   
        chat.push(newMessage)
    }
 
    const renderMessages = () => (
        activeChat.messages &&  
        Object.keys(activeChat.messages).map( messageKey => {
            const message = activeChat.messages[messageKey]
            return (
                <Card key={message.id} className={classes.messageCard} > 
                    <CardHeader
                        className={ message.user === user.id ? classes.messageOwner : classes.message }
                        avatar={
                            <Avatar style={{ background: message.userColor, marginLeft: '8px' }}> 
                                <PermIdentityIcon  style={{ color: message.userContrast }}  />
                            </Avatar>
                        } 
                        title={message.text}
                        subheader={message.user}
                    />  
                </Card>
            )
        })
    )

    return ( 
        <>
            {
                isLoading ?  
                <Preloader/> : 
                <>
                    <Box p={2}>
                        <Typography variant="h5">
                            {activeChat.chat_name}
                        </Typography>
                        <Divider/>
                        {
                            renderMessages()
                        }
                    </Box>
                    <Divider/>  
                    <Box px={2} py={1}  > 
                        <SendForm sendMessage={sendMessage}  />
                    </Box> 
                </>
            }
            
            
        </>   
    )
}

export default SingleChat
