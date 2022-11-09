## Initializing our Full stack Project

1. Getting Started with **Frontend**

   I'll be using an NPM package **create-react-app** to fast forward our setup process.

   **NOTE:** In order to use a package we need to install it first, skip the installation by using `npx` instead of `npm` .

   ### Steps to initialze React App

   1. In your terminal, navigate to your empty project folder paste the following command

      ```
      npx create-react-app .
      ```

      Wait for installation to complete

      **NOTE:** "." is required as it specifies the root directory for react app, you can also type in any name to create the react app inside that folder

   1. Use the following command to run the React app
      ```
      npm start
      ```

<!-- Divider -->
<p align=center>
   <img src="./Resources/Animations/rainbow_divider.gif" height=30 width=50%/>
</p>

2. Moving on to **Backend**

   **NOTE:** Create a seperate repository or you can create a folder inside your react app directory itself.
   **Sub-NOTE:** If creating a seperate repo, create a **.gitignore** file and paste the following code inside

   ```
   node_modules
   ```

   ### Steps to initialize Node App

   1. In your terminal, navigate to your backend folder paste the following command

      ```
      npm init -y
      ```

      - This will initialize an empty Node repository where you can install npm packages for backend.

      - -y lets you skip through all the installation questions with default values.

   1. Use the following command to install express, cors, mongoose, and dotenv

      ```
      npm i express cors mongoose dotenv
      ```

   1. Finally install **nodemon** globally using
      ```
      npm i -g nodemon
      ```
      - Nodemon is a development tool that makes working with Node.js a lot smoother and easier
      - Nodemon basically restarts the Node.js app whenever we update our code.
