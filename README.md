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

- This project utilizes the MERN stack for web development. The MERN stack comprises MongoDB, Express.js, React.js, and Node.js. It enables the creation of full-stack web applications using JavaScript across the entire development process, from backend to frontend.
- For the Admin Dashboard this project leverages Electron for desktop application development. Electron is a framework that allows developers to build cross-platform desktop applications using web technologies such as React. It enables the creation of native-like applications for Windows, macOS, and Linux using a single codebase.

![title4](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/b22bd441-ef7a-4712-b4da-0ca64e7b6d13)

>
> We crafted Foodie Pal using wireframes and mockups, meticulously iterating on the design to achieve the perfect layout for effortless navigation and a smooth user experience.
>
- Link: [Foodie Pal Figma Design](https://www.figma.com/file/2OH0ml41Aa8RTLZ81gs10A/Final-Project?type=design&node-id=157%3A1176&mode=design&t=eOk50Z7wTfzsyJyz-1)

### Mockups
| Home screen  | Recipe Description | Nutrition Plan |
| ---| ---| ---| 
| ![Home Screen](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/c55249cc-c61f-4a0c-88c1-1befe1680216) | ![Reciep Desc](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/56858864-c364-44b6-8fa1-e58365ef8e2b) | ![Nutrition Plan](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/e5249d1c-9a3e-4513-9e59-f5e9d2e168a6)

 



![title5](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/97de820e-a3a9-4918-af84-34d18e907a20)

###  Architecting Data Excellence: Innovative Database Design Strategies:

![Database](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/e0af338d-ee08-4fc1-a7bc-61fd70f6e46a)


![title6](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/b57d10a3-4f33-4d4b-a4d1-ec9b93506e74)

### User Screens (Mobile)
| Login screen  | Register screen | Landing screen | 
| ---| ---| ---|
| ![login](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/99420bf2-e085-4bb2-ba97-b2e5f5c10e9f) | ![Register Mobile](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/b9908d09-e491-4eb2-9612-13123ced0616) | ![Landing Mobile](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/cbe2a82e-8098-4d77-8657-98182cae9dea) |



| Recipe Screen  | Instructions Screen | Profile Screen |
| ---| ---| ---|
| ![Recipe Desc Mobile](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/474174a3-3b6b-4df4-8091-9168dcb4b739) | ![Recipe Instructions](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/8ced98cc-abcd-4655-83a4-567886ad80fa) | ![Profile Mobile](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/ecba5793-83f9-479f-899a-d2c33716e8c9) |




### User Screens (Desktop)
| Login screen | Register screen |
| --- | --- |
| ![Login](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/562bf944-7cb2-4103-af88-13b2a3c37cab) | ![Register Desktop](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/80349bf3-1fc6-4b87-b1a4-1d1e75e4481e) |

| Landing screen |
| --- |
| ![Landing Desktop](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/7de610a2-3ebd-4a59-84a4-0f8cdd838643) |


### Admin Screens (Electron)
| Login screen | Landing screen |
| --- | --- |
| ![Admin Login](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/e81cc0cb-b1d3-46d2-9955-f49c6a3f5f59) | ![Admin Landing (1)](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/b477524f-d4a7-4ffa-a5fe-4c5f31989b28) |

| Users screen |
| --- |
| ![Admin Users](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/52c821b4-2f06-4288-9e4e-12e931c32dd5) |


![title7](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/0bbadd23-dc6c-4176-889e-e8038396c15b)

### Mastering Prompt Engineering:

- This project uses advanced prompt engineering techniques to optimize the interaction with LLMs (large language models).

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

###  Efficient AI Deployment: Unleashing the Potential with AWS Integration:

- This project leverages AWS deployment strategies to seamlessly integrate and deploy natural language processing models. With a focus on scalability, reliability, and performance, we ensure that AI applications powered by these models deliver robust and responsive solutions for diverse use cases.

![title9](https://github.com/edgard-habanbou/foodie-pal/assets/57774147/5073bb0f-7a32-40ac-876e-cdaf5be5c019)

###  Precision in Development: Harnessing the Power of Unit Testing:

- This project employs rigorous unit testing methodologies to ensure the reliability and accuracy of code components. By systematically evaluating individual units of the software, we guarantee a robust foundation, identifying and addressing potential issues early in the development process.

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
   1. Create a Free API Key for [clairify](https://clarifai.com/)
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


