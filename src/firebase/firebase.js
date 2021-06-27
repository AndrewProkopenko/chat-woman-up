import firebase from 'firebase'

const config = { 
    apiKey: "AIzaSyA1fsH2XtSm-VkO1WMP2Ed_NzW_q33UzNI",
    authDomain: "chat-women-up.firebaseapp.com",
    projectId: "chat-women-up", 
    appId: "1:186000390466:web:6202215c3b7d64305cf0db"
}

firebase.initializeApp(config);
 

const database = firebase.database();

export {database} 
