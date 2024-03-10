// Import required modules
const express = require("express");
const request = require('request');
const mongoose = require('mongoose');
const axios = require('axios');
const { PupProfile, pupProfileRoutes } = require('./pupprofile');
require('dotenv').config();
const { OpenAI } = require('openai');
const FormData = require('form-data');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;
const database_uri = process.env.ATLAS_URI;
const removeBackgroundAPI = process.env.REMOVEBG;

// set up client key
const openai = new OpenAI({ apiKey: process.env.APIKEY });

// app.use(express.json());
app.use(bodyParser.json({ limit: '1000000mb' }));
app.use(bodyParser.urlencoded({ limit: '1000000mb', extended: true }));

// Use the pup profile routes
app.use(pupProfileRoutes);

//APIS
app.post("/create-profile", async (req, res) => {
  console.log('backend')
  try {
    // const data = {
    //     DogName: 'Helen',
    //     DogBirthday: 'April',
    //     DogSex: 'Female',
    //     DogColor: 'Brown',
    //     DogBreed: 'Labrador',
    //     DogFeatures: 'Spotted',
    //     DogFur: 'Short',
    //     DogEyeColor: 'Hazel',
    //     DogSnoutColor: 'Black',
    //     DogEarColor: 'Brown'
    // }
    const data = req.body.formData
    const color = data.DogColor
    const breed = data.DogBreed
    const features = data.DogFeatures
    const fur = data.DogFur
    const eye = data.DogEyeColor
    const snout = data.DogSnoutColor
    const ear = data.DogEarColor

    const icon = await createPupIcon(breed, color, fur, eye, snout, ear, features);
    // console.log(icon)
    const removebgImage = await removeBackground(icon);
    // console.log(removebgImage)
    const binaryData = Buffer.from(removebgImage, 'base64');
    // console.log(binaryData)
    const newProfileData = {
      dogName: data.DogName,
      breed: breed,
      birthday: data.DogBirthday,
      gender: data.DogSex,
      icon: binaryData
    }

    const addResponse = await axios.post('http://localhost:3001/pup-profile/add', newProfileData);

    console.log('Add Response:', addResponse.data);

    res.status(200).json({ base64Image: removebgImage });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
    console.log('error');
  }
});


async function createPupIcon(breed, color, fur, eye, snout, ear, features) {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `Make a simple flat icon of a dog's head. The dog is a ${breed} breed, but make it look like the following description: The dog is ${color}. The dog has ${fur} hair. The dogs eyes are ${eye}. The dog has a ${snout} snout. The dog's ears are ${ear}. Please include it's ${features}.`,
      // response_format: "b64_json"
    });
    console.log(response.data[0].url);
    return response.data[0].url;
  } catch (err) {
    console.log("Failed to create a description.");
    console.log(err)
  }
}

async function removeBackground(imageUrl) {
  try {
    const formData = new FormData();
    formData.append('size', 'auto');
    formData.append('image_url', imageUrl);

    const response = await axios({
      method: 'post',
      url: 'https://api.remove.bg/v1.0/removebg',
      data: formData,
      responseType: 'arraybuffer',
      headers: {
        ...formData.getHeaders(),
        'X-Api-Key': removeBackgroundAPI,
      },
      encoding: null,
    });

    if (response.status !== 200) {
      console.error('Error:', response.status, response.statusText);
      return null; // or throw an error if you prefer
    }

    return Buffer.from(response.data, 'binary').toString('base64');

    //   if (response.status !== 200) {
    //     console.error('Error:', response.status, response.statusText);
    //     return null; // or throw an error if you prefer
    //   }

    //   fs.writeFileSync('no-bg.png', response.data);
    //   return 'no-bg.png'; // Return the filename or other meaningful result
  } catch (error) {
    console.error('Request failed:', error);
    return null; // or throw an error if you prefer
  }
}

// Connect to MongoDB using the ATLAS_URI
mongoose.connect(database_uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Create reference to database connection
const db = mongoose.connection;

// Connect the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Successfully connected to MongoDB.');

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
});