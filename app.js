let express = require('express'),
    firebase = require('firebase');

firebase.initializeApp({
    apiKey: "AIzaSyAmLHddTDim48x7KEXgA2Ue7UPzMRLLF-4",
    authDomain: "bc21-room-checking-app.firebaseapp.com",
    databaseURL: "https://bc21-room-checking-app.firebaseio.com",
    projectId: "bc21-room-checking-app",
});

let dbRef = firebase.database().ref();
let app = express();

app.use(express.static('./assets'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.get('/rooms/meetings', (req, res) => {
    let roomRef = dbRef.child('meetings');
    roomRef.on('value', (snap) => {
        res.send(snap.val());
    });

})


app.get('/rooms/games', (req, res) => {
    let roomRef = dbRef.child('game');
    roomRef.on('value', (snap) => {
        res.send(snap)
    })
})


app.get('/rooms/working', (req, res) => {
    let roomRef = dbRef.child('working');
    roomRef.on('value', (snap) => {
        res.send(snap.val())
    });

});

app.get('/rooms/quiet', (req, res) => {

    let roomRef = dbRef.child('quiet');
    roomRef.on('value', (snap) => {
        res.send(snap.val())
    })
});

app.get('/rooms/learning', (req, res) => {

    let roomRef = dbRef.child('learning');
    roomRef.on('value', (snap) => {
        res.send(snap.val())
    })
});



app.listen(4001, () => {
    console.log("listening");
});