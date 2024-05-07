import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";


const firebaseConfig = {
apiKey: "AIzaSyC2hJaVWRs-wNGtYn8rCYXgIVzHSnuJcCM",
authDomain: "prj-et.firebaseapp.com",
projectId: "prj-et",
storageBucket: "prj-et.appspot.com",
messagingSenderId: "865801733336",
appId: "1:865801733336:web:e84efc3aedd03791a6c3ad",
measurementId: "G-WD9YSEZS9Z",
databaseURL: "https://prj-et-default-rtdb.firebaseio.com"
};


const app = initializeApp(firebaseConfig);
const databaseInstance = getDatabase(app);
var submitted=false;
var statusInformationText = document.getElementById("information-text");
console.log(statusInformationText.innerText);
var statusBox = document.getElementById("status-box");
var blackOverlay = document.getElementById("black-overlay");
var closeBtn = document.getElementById("status-close-btn").addEventListener('click',function(){
    statusBox.style.display = "none";
    blackOverlay.style.display = "none";
    blackOverlay.classList.remove("active");
    console.log("Close button clicked");
});
var formData = {
    name: "",
    email: "",
    phone: "",
    state: "",
    role: ""
};

document.getElementById('submit-btn').addEventListener('click', async function() {
    if (submitted==true) {
        formData.name = document.getElementById('name').value;
        formData.email = document.getElementById('email').value;
        formData.phone = document.getElementById('phone').value;
        formData.state = document.getElementById('state').value;
        formData.role = document.getElementById('role').value;

        const databaseRef = ref(databaseInstance, 'joinQuery/' + formData.name);

        try {
            await set(databaseRef, formData);
            console.log("Data written successfully!");
            submitted = true;
            statusInformationText.innerText = "Your application has been successfully submitted. We'll contact you soon!";
        } 
        catch (error) {
            statusInformationText.innerText = "An error has occured due. Try again later!";
            console.error("Error writing data:", error);
        }
    } 
    else {
        statusInformationText.innerText = "You've already made a submission request. Only one request is allowed!";
        console.log(statusInformationText.innerText);
    }
    statusBox.style.display = "flex";
    blackOverlay.style.display = "flex";
    console.log(blackOverlay);
});