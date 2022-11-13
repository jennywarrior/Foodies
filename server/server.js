import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createRequire } from "module";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getFirestore , collection, getDoc, doc } from "firebase/firestore";
import { VerifyToken } from "./middlewares/verifyToken";

const firebaseConfig = {
  apiKey: "AIzaSyA-EPw1DcysN_pWWr609kJZmW5RECc-pz0",
  authDomain: "testing-70520.firebaseapp.com",
  projectId: "testing-70520",
  storageBucket: "testing-70520.appspot.com",
  messagingSenderId: "832349890420",
  appId: "1:832349890420:web:2635cdfb8c39821a23ee21",
  measurementId: "G-Z6JJXR1HBW"
};
const require = createRequire(import.meta.url);
const restaurant_data = require("./data/restaurant_data.json");
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const params = {
  location: "32.98583687176648%2C-96.75025276660631",
  radius: "1500",
  type: "restaurant",
  key: "AIzaSyCeeAjKW3hefYIt0pYIIfQxiJP9cpo-QP0",
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(VerifyToken())

app.get("/api/map/", (request, response) => {
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${params.location}&radius=${params.radius}&type=${params.type}&key=${params.key}`,
      {
        params,
      }
    )
    .then((res) => {
      convert(request.params.token, res.data.results).then((json) => response.send(json)); 
    }).catch((error) => {
      response.send(error);
    })
});

app.post("/api/users/create", (request, response) => {
  
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

async function convert(token, maps){
  const docRef = doc(db, "users", token);
  const docSnap = await getDoc(docRef);
  const preferences = docSnap.data().preferences;

  return new Promise((resolve, reject) => {
    var finalData = [];
    for(let restaurant of maps){
      let meetsCriteria = true;
      const diet_restrictions = restaurant_data[restaurant.place_id]?.diet_restrictions;
      
      if(!diet_restrictions){
        continue;
      }

      for(let userP of preferences){
          if(!diet_restrictions.includes(userP)){
            meetsCriteria = false;
            break;
          }
      }

      if(meetsCriteria){
        finalData.push(restaurant);
      }
    }
    resolve(finalData);
  })
}
