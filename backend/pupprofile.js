// Import required modules
const express = require("express");
const mongoose = require('mongoose');

// Create an instance of the express router
const pupProfileRoutes = express.Router();

// Define the profile schema for pups
const pupProfileSchema = new mongoose.Schema({
  dogName: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  birthday: {
    type: String,
    required: true
  },
  gender: {
    type: String
  },
  likes: {
    type: String
  },
  dislikes: {
    type: String
  },
  coordinates: {
    type: String
  },
  nearby: [{
    type: Number
  }],
  friends: [{
    type: Number
  }],
  icon: {
    type: Buffer
  },
});

// Create the Pup Profile model based on the schema
const PupProfile = mongoose.model("PupProfile", pupProfileSchema);

// Define routes

// Route to get all pup profiles
pupProfileRoutes.route('/pup-profile').get(async function(req, res) {
  try {
    const result = await PupProfile.find({});
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get a single pup profile by id
pupProfileRoutes.route("/pup-profile/:id").get(async function (req, res) {
  try {
    const result = await PupProfile.findById(req.params.id);
    
    if (!result) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to create a new pup profile
pupProfileRoutes.route("/pup-profile/add").post(async function (req, res) {
  try {
    console.log(req.body)
    const newRecord = await PupProfile.create({
        dogName: req.body.dogName,
        breed: req.body.breed,
        birthday: req.body.birthday,
        gender: req.body.gender,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        coordinates: req.body.coordinates,
        nearby: req.body.nearby,
        friends: req.body.friends,
        icon: req.body.icon,
    });
    res.json(newRecord);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to update a pup profile by id
pupProfileRoutes.route("/pup-profile/update/:id").post(async function (req, res) {
  try {
    const result = await PupProfile.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          dogName: req.body.dogName,
          breed: req.body.breed,
          birthday: req.body.birthday,
          gender: req.body.gender,
          likes: req.body.likes,
          dislikes: req.body.dislikes,
          coordinates: req.body.coordinates,
          nearby: req.body.nearby,
          friends: req.body.friends,
          icon: req.body.icon,
        },
      },
      { new: true } // Return the updated document
    );

    if (!result) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    console.log("1 document updated");
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to delete a pup profile by id
pupProfileRoutes.route("/pup-profile/:id").delete(async (req, res) => {
  try {
    const result = await PupProfile.findByIdAndDelete(req.params.id);

    if (!result) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    console.log("1 document deleted");
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Export both the Pup Profile model and the pupProfileRoutes
module.exports = { PupProfile, pupProfileRoutes };