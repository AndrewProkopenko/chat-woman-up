 

import uuid from 'react-uuid'
  
import CreateRandomColor from './CreateRandomColor'

const CreateUserOnInit = () => { 

    let user 
     
    const colorGenegate = CreateRandomColor()

    const localStorageUserKey = 'chat_women_up_user_key'
 

    const userStorage = JSON.parse(localStorage.getItem(localStorageUserKey))
      
    if(userStorage) {
        return userStorage
    }
    else {
        const createId = 'user-' + uuid()
        const createColor = colorGenegate.color
        const createContrast = colorGenegate.contrast
          
        user = {
            id: createId, 
            color: createColor, 
            contrast: createContrast
        }
        
        localStorage.setItem(localStorageUserKey, JSON.stringify(user))

        return user
    } 
}

export default CreateUserOnInit
