const firebaseConfig = {
    apiKey: "AIzaSyAVNx1cTB98A2gTNqcLAWAVhOjVlzqMdu0",
    authDomain: "contact-w-aqi.firebaseapp.com",
    databaseURL: "https://contact-w-aqi-default-rtdb.firebaseio.com",
    projectId: "contact-w-aqi",
    storageBucket: "contact-w-aqi.appspot.com",
    messagingSenderId: "661317904644",
    appId: "1:661317904644:web:3ed3d556ac80d1f6ca0851"
  };

  //initialize firebase
  firebaseConfig.initializeApp(firebaseConfig);

  // reference your database
  var contactFormDB = firebaseConfig.databaseURL().ref('contactForm');

  document.getElementById('contactForm').addEventListener('submit', submitForm);

  function submiForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var message =getElementVal("message");

    //console.log(name, email, message);
  }
  const saveMessages =(name, email, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set{
        name : name,
        email : email,
        message : message,
    }
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }

