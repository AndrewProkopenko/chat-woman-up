import { useEffect , useState} from 'react' 


import { Container, Box , Grid,  Card  } from '@material-ui/core'


import CreateUserOnInit from './functions/CreateUserOnInit'
 
import SingleChat from './components/SingleChat';
import UserProfile from './components/UserProfile';

function App() {

  const [user, setUser] = useState({
    id: '', 
    color: '#fff',
    contrast: '#fff'
  }) 

 
  useEffect( () => {  
    userCheck() 
    // eslint-disable-next-line
  }, [])
 

  const userCheck = () => {
    const userValue = CreateUserOnInit() 
    setUser(userValue)
     
  }

  return (
    <Container>
      <Box my={'30px'} >
          <Grid container spacing={3} > 
            <Grid item xs={12} md={3}>
              <Card >
                <Box p={3}>
                  <UserProfile user={user} />
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={9}  >
                <Card>  
                    <SingleChat user={user} /> 
                </Card>
            </Grid>
          </Grid>
      </Box>
    </Container>
  ); 
}

export default App;
