/*
/ Candle JS Module
/ - Export index with init method
*/
document.firebaseInit = function (){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDCnddLRPb6LclP-42Fm9cH_uVgL8DXIlE",
        authDomain: "spartapp-0.firebaseapp.com",
        databaseURL: "https://spartapp-0.firebaseio.com",
        projectId: "spartapp-0",
        storageBucket: "spartapp-0.appspot.com",
        messagingSenderId: "1025959757783"
    };
    firebase.initializeApp(config);
    var db = firebase.firestore();

    // Marketing
    var askingUsers = db.collection("askingUsers");
    var i = 0;
    var data = "";
    var allAskingUsers = askingUsers.get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                i++;
            });
            document.getElementById('numberListM').innerText = i;
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });

    // User
    var users = db.collection("users");
    var j = 0;
    var data = "";
    var allUsers = users.get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                j++;
            });
            document.getElementById('numberListU').innerText = j;
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
    // Coach
    var coachs = db.collection("coachs");
    var k = 0;
    var data = "";
    var allCoach = coachs.get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                k++;
            });
            document.getElementById('numberListC').innerText = k;
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
};

export const init = function(){

};
