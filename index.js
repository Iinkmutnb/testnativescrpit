const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// var cors = require('cors')
var firebase = require('firebase')

  var config = {
    apiKey: "AIzaSyBbhTLM0IkKNL5qVEnOkueXIrsPEbaD9Js",
    authDomain: "nodeconcetfire.firebaseapp.com",
    databaseURL: "https://nodeconcetfire.firebaseio.com",
    projectId: "nodeconcetfire",
    storageBucket: "nodeconcetfire.appspot.com",
    messagingSenderId: "912502393891"
  };
  firebase.initializeApp(config);
 //ประกาศใช้ firebase

var database = firebase.database() //ใช้ database ของ firebase

// app.use(cors())

app.use(bodyParser.json())
app.get('/',async (req,res) => {
    let province = [] 
    await database.ref('peopleIncome').once('value').then(snapshot => {
        province = snapshot.val()
    })
        res.send(province)
})


app.listen(3000, () => console.log('Example app listening on post 3000!'))