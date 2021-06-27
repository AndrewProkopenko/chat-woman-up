 
import { red , pink, purple, deepPurple, indigo, blue, cyan, teal, lime, amber, brown} from '@material-ui/core/colors'

// import { useTheme } from '@material-ui/core/styles';

const colors = [ red , pink, purple, deepPurple, indigo, blue, cyan, teal, lime, amber, brown ]
const shade = [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ]
 



function CreateRandomColor() {  
    // const theme = useTheme()
     
    const random1 = Math.floor(Math.random()*9)
    const random2 = Math.floor(Math.random()*9)

    const randomColor = colors[random1]
    const randomShade = shade[random2]
  
    const contrast = "#fff"
    // let contrast = theme.palette.getContrastText(randomColor[randomShade])
   
    return {
        color: randomColor[randomShade], 
        contrast: contrast 
    }
    
}

export default CreateRandomColor
