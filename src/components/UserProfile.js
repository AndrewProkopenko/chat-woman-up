import { Box , Typography, Avatar } from '@material-ui/core'
 
import PermIdentityIcon from '@material-ui/icons/PermIdentity';


const  UserProfile = ({user}) => {  
    return (
        <>
            <Box display='flex' flexDirection='column' alignItems='center' >
                <Box mb={2} >
                    <Avatar style={{ background: user.color }}> 
                        <PermIdentityIcon  style={{ color: user.contrast }}  />
                    </Avatar> 
                </Box>
                <Typography variant='caption'>
                    Your nickname:  
                </Typography>
                <Typography variant='subtitle2' align='center'> 
                    <b>{user.id}</b> 
                </Typography> 
            </Box> 
        </>
    )
}

export default UserProfile
