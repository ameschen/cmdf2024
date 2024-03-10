// Import required modules
const express = require("express");
const request = require('request');
const mongoose = require('mongoose');
const axios = require('axios');
const { PupProfile, pupProfileRoutes } = require('./pupprofile');
require('dotenv').config();
const { OpenAI } = require('openai');

const app = express();
const port = process.env.PORT || 3001;
const database_uri = process.env.ATLAS_URI;

// set up client key
const openai = new OpenAI({apiKey: process.env.APIKEY});

app.use(express.json());

// Use the pup profile routes
app.use(pupProfileRoutes);

//APIS
app.get("/", async (req, res) => {
    try {
        const icon = await createPupIcon();
        console.log(icon)
        res.status(200).send(icon);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});


async function createPupIcon() {
    try {
    //   const user_message = `Given the top music genres a user listens to ${genreArray}, and a list of some of their most listened to and liked musical artists ${artistArray}, can you write a short, friendly, 1 paragraph, introduction description about this user's music interests from a first person perspective for others to read and relate to. You do not need to say the user's name.`;
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: "Make a simple flat icon of a dog's head. The dog is a bernadoodle breed, but make it look like the following description: The dog is mostly white. The dog has fluffy white hair. The dogs eyes are brown. The dog has a black nose. The dog’s snout is white. The dog's ears are black. please include it's black hair around it's eyes. The dog has a mostly white face, with black hair on it's ears and around it's eyes.",
        response_format: "b64_json"
      });
      console.log(response.data[0].b64_json);
      return response.data[0].b64_json;
    } catch (err) {
      console.log("Failed to create a description.");
      console.log(err)
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