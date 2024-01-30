![title1](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/0c8a8017-de86-4dbc-9280-36f46a5928e7)

![title2](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/0f21920f-af06-4b70-bfee-fe1daad2d213)


>
> Foodie-Pal, a user-friendly Progressive Web App, assists in meal preparation by suggesting recipes tailored to available ingredients.
> Additionally, it employs AI to create personalized nutrition plans.
>

# User Stories

## User

- As a user, I want to easily input the ingredients I have in my fridge.
- As a user, I want the app to suggest recipes based on the ingredients I have.
- As a user, I want the option to give me a personalized nutrition plan based on my dietary goals and preferences.

## Admin

- As an admin, I want to see diffirent KPIs for total users, total diet plans and more
- As an admin, I need to view user creations displayed on a timeline chart for better tracking and analysis.
- as an admin, I want to be able to see all users and be able to delete them  

 

![title3](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/7c9ccb51-064b-4497-aac2-6040b8143492)

- This project utilizes the MERN stack for web development. The MERN stack comprises [MongoDB](https://www.mongodb.com/), [Express.js](https://expressjs.com/), [React](https://react.dev/), and [Node.js](https://nodejs.org/en). It enables the creation of full-stack web applications using JavaScript across the entire development process, from backend to frontend.
- For the Admin Dashboard this project leverages Electron for desktop application development. Electron is a framework that allows developers to build cross-platform desktop applications using web technologies such as React. It enables the creation of native-like applications for Windows, macOS, and Linux using a single codebase.

![title4](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/b22bd441-ef7a-4712-b4da-0ca64e7b6d13)

>
> I crafted Foodie Pal using wireframes and mockups for a smooth user experience.
>
- Link: [Foodie Pal Figma Design](https://www.figma.com/file/2OH0ml41Aa8RTLZ81gs10A/Final-Project?type=design&node-id=157%3A1176&mode=design&t=eOk50Z7wTfzsyJyz-1)

### Mockups
| Home screen  | Recipe Description | Profile |
| ---| ---| ---| 
| ![Home](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/856eed98-26fd-45da-869c-2d6a64530085) | ![Recipe Description](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/045379d7-c825-48f2-8f09-a5bcc2968149) | ![Profile](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/26af7e7d-48be-49fb-9b7a-c022bc0c0ade) |
 



![title5](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/97de820e-a3a9-4918-af84-34d18e907a20)

###  MongoDB Schema:

![Database](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/1a6a967b-54db-413c-b131-228421621b89)


![title6](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/b57d10a3-4f33-4d4b-a4d1-ec9b93506e74)

### User Screens (Mobile)
| Login screen  | Register screen | Landing screen | 
| ---| ---| ---|
| ![login](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/d334c85e-968f-4f11-bdc3-7e8f5ec574a7) | ![Register Mobile](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/ec066d37-cda0-4fec-b252-d2fea490c84f) | ![Landing Mobile](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/319bcfdd-f912-44b7-8977-c0598be61a1c) |



| Recipe Screen  | Instructions Screen | Profile Screen |
| ---| ---| ---|
| ![Recipe Desc Mobile](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/3a172e45-330b-4f99-801a-ef5104ca64e6) | ![Recipe Instructions](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/65554543-7d9c-430e-98e0-cb1b910f48f1) | ![Profile Mobile](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/b2ec455c-bc61-4e75-a2a1-b7eea08b6a86) |




### User Screens (Desktop)
| Login screen | Register screen |
| --- | --- |
| ![Login](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/562bf944-7cb2-4103-af88-13b2a3c37cab) | ![Register Desktop](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/277a55d4-31db-4bd7-9d0a-f7d2ab712d1b) |

| Landing screen |
| --- |
| ![Landing Desktop](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/7de610a2-3ebd-4a59-84a4-0f8cdd838643) |


### Admin Screens (Electron)
| Login screen | Landing screen |
| --- | --- |
| ![Admin Login](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/8e98204b-40c9-4344-bd45-2d0756472d92) | ![Admin Landing (1)](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/b477524f-d4a7-4ffa-a5fe-4c5f31989b28) |

| Users screen |
| --- |
| ![Admin Users](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/52c821b4-2f06-4288-9e4e-12e931c32dd5) |


![title7](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/0bbadd23-dc6c-4176-889e-e8038396c15b)

### Mastering Prompt Engineering:

- This project uses advanced prompt engineering techniques to optimize the interaction with LLMs (Large Language Models).

#### Example (Getting Recipes):

>
> Consider yourself a machine-learning model that returns recipes based on items I will give you.
    the recipe's ingredients should only contain the items given but you can add spices.
    give small instructions for example: "Boil the water" or "Cut the onion into cubes".
    I might also give you dietary preferences.
    You should return only a JSON object with this format: [{"id": id(from 0 and add 1 for each item), "title": recipe name, "description":description, "calories": how many calories, "time": how much time (45m) (don't give me in hours), "instructions":["instruction1", "instruction2"...](make sure to add each instruction by itself), "ingredients": ["ingredient1", "ingredient2" ...]}]
    Don't add anything else to the object.
    { ItemsAndPreferences }
    your answer must be 12 recipes.
    Give me only the JSON object and remove all texts before and after it.
>

![title8](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/2b4081ec-1caa-4e82-9828-42e108d1cbbe)

### Deployed on AWS EC2 Instance:

- **Connecting with PUTTY**: To access the instance shell, connect using PUTTY. Refer to [this guide](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html) for instructions on setting up PUTTY and SSH keys.

- **Prerequisites**: Before running the backend on the instance, ensure you've met all the [prerequisites](https://github.com/edgard-habanbou/foodie-pal?tab=readme-ov-file#prerequisites) outlined in the README.

- **Instance Running example**:

  ![Instance Setup](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/3c62b879-f02b-470f-98c0-1a9a99a0dde3)


![title9](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/5073bb0f-7a32-40ac-876e-cdaf5be5c019)

###  Feature testing:

| Feature Test 1 | Feature Test 2 |
| -------------- | -------------- |
| ![tests1](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/2f5d6c5c-e17e-4d03-b9cf-4d0fa4a77f88) | ![tests2](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/eb897a62-6eeb-454a-ab11-cc6c9045c298) |

| Feature Test 3 | Feature Test 4 |
| -------------- | -------------- |
| ![tests3](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/93e49bfe-79cf-4c92-a688-07b85f80c537) | ![tests4](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/b9790eeb-917a-4788-8574-edb474c3db5a) |

| Test Results |
| ------------ |
| ![image](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/d2d82b03-082f-4fdc-9eae-2ce905901e15) |


![title10](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/22bf728e-9462-4f2b-a4fb-6d308ea90f80)

> To set up Foodie Pal locally, follow these steps:

### Prerequisites

- Install NPM from: [NPM](https://nodejs.org/en/download)

- Install MongoDB from: [MongoDB](https://www.mongodb.com/docs/manual/installation/)
  
- Install nodemon
   ```sh
   npm install nodemon
   ```
## Installation

### First, Cloning and Installing Packages

1. Clone the repository and then open it
   ```sh
   git clone git@github.com:edgard-habanbou/foodie-pal.git
   cd foodie-pal 
   ```
2. Create a .env file in backend and then:
   1. Create a Free API Key for [Clarifai](https://clarifai.com/)
   2. Create an API key for [OpenAI](https://openai.com/)
   3. Create an API key for [Bing Search](https://www.microsoft.com/en-us/bing/apis/bing-web-search-api)
   4. Create a [Gmail account](https://mail.google.com/) and make an app key
   Adter that add them to the env file as follows:

    ```sh
     MONGODB_URL=mongodb://127.0.0.1:27017/foodiePal
     ADMIN_ID=657f0445f4aaced6b5b8d7af #Leave it as is
     PORT=8000
     JWT_SECRET=<A random string of characters>
     
     SERVER_LINK=http://localhost:8000
     CLIENT_LINK=http://localhost:3000
     
     EMAIL_ADDRESS=<Email address>
     EMAIL_PASSWORD=<App Key>
    
     CLAIRIFY_API_KEY=<Clairify key>

     OPENAI_API_KEY=<OpenAi key>
    
     BING_API_KEY=<Bing Search key>
     
    ```
  
3. Install NPM packages for Backend, Frontend and Admin:
   ```sh
   cd foodie-pal-backend
   npm install
   cd ..
   cd foodie-pal-frontend
   npm install
   cd ..
   cd foodie-pal-admin
   npm install
   ```

### Second, let's start the server

 In `foodie-pal-backend` run this command:
   ```sh
   nodemon .
   ```
### Third, let's start the frontend

 Open a new terminal and go to `foodie-pal-frontend` and run this command:
   ```sh
   npm start 
   ```
### Lastly, let's start the Admin Dasboard
 Open a new terminal and go to `foodie-pal-admin` and run this command:
   ```sh
   npm start 
   ```

And that's it Congratulations, The App Must be Working Now.


