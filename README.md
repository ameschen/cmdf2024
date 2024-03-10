# cmdf2024

## Inspiration💡
This project was inspired by a group members experience going to dog parks and seeing their dog play and make connections so easily. It's challenging to make in-person connections that don't feel forced or awkward, and many social media apps can feel overbearing or intimidating. Inspired by how dogs playfully make friends without effort, we wanted to build a digital space that captured the essence of light-hearted, low-stakes friendships and documents our dogs encounters in the real world.

## What it does 🔍
Our mobile app uses AI to generate a cute emoji-inspired avatar that visually looks like your dog. This icon is then displayed on a map, which uses your location to display other dogs in your vicinity. Dogs (users) can add the pups they encounter out in the real world and enjoy learning about the ones they meet through visually appealing profiles. Users can keep track of their dog friends and represent the casual, playful relationships they form through the dog community.

## How we built it 🦾
Brainstorming&Planning: We started by outlining the project requirements, features, and data structure for the MVP. This helped in creating a roadmap for development and split the team into distinct roles: two of us would focus on the elaboration of the front-end, while the two others would focus on the implementation of the backend and integration. 
Development: We bootstrapped the front-end using the Expo platform in React Native. We set up a MongoDB database and in the Express Framework. To generate the custom dog avatars, we made use of two API´s. First, we used OpenAI´s Dalle to generate the icon, and then passed it to Remove.bg to remove the background with AI. We utilized React Native maps to use geolocation features to place dog´s emoji in space to represent their location digitally. We implemented UI components such as profiles, friends, and profile generation to complete the user experience. 
Integration&Testing: Rigorous testing was performed to identify and resolve bugs. 

## Challenges we ran into 🧠
Using the Adobe Express SDK was not a familiar maneuver, so we had to switch to another solution. Synchronizing the calls to OpenAI, and then handing that to another API was challenging to make operational. Connecting the frontend and the backend was particularly complex, as well as considering how to store images efficiently.

## Accomplishments that we're proud of 🌟
No one on the team had developed in React Native, and most had never made a mobile app. 
Very few merge conflicts that reflected the great communication of the team. 
Testing prompt formats to generate dog icons that were consistently accurate and cute!

## What we learned ✍️
Constant communication and agreement upon the vision, building a functional MVP and connecting everything are the top priorities when it comes to putting together a project in such a short timespan. We also learned new technical skills in full stack development and mobile front ends- and that if this app were to actually get deployed, we'd need to learn more about architecture to handle location data and images efficiently. 

## What's next for Pupspot and why we want to keep working on our project❓
We envision so many more exciting features for Pupspot! Some of the first we'd work on are:
- Accounts for non-dog owners so that those who loves dogs, but don't currently have one, can still pup spot
- Dog status feature so that a user can update their friends on their current location or plans to encourage in-person meetups
- Expanded profile elements to allow users to document more information or memories with their dog on the app

We would like to keep working on our app because we truly feel that people would love it, and it fulfills a niche. This form of interacting in digital spaces, but tied to irl experiences is an engaging form of social media that hasn't been fully explored by existing applications. Additionally, in building the MVP, we recognize we would need to learn many more skills to build this in a way that would be deployable. As a team, we're interested in learning these skills and applying them to a project that aims to spread fun and joy in our community.

![youtube-video-gif](https://github.com/ameschen/pupspot/assets/97807473/8c0130c2-9963-4d2e-9730-2b4667e6e8cf)

## [Full Demo Video](https://youtu.be/iWexCTlNN9A)

