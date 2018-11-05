# Reddit-app

# About
This is a webapp which works like a clone of Reddit, you will be given a list of topics from which you have to select the three which you are most intrested in, then you have to confirm it, This will take you to the page where you will be shown all posts related to your favourite topics , you can select any post and read about it in detail in the webapp.

# Technologies Used
Library :- Reactjs (An opensource javascript library for creating user interfaces)<br/>
           Redux (An opensource javascript library for managing application state)
API :-     Reddit API https://www.reddit.com/dev/api/           

# Technical summary
>> Firstly by the help of 'create-react-app' I made the initial project structure and installed all the dependecies for redux
via npm ex. 'npm install redux' , 'npm install redux-thunk', 'npm install react-redux'.

>> Redux manages the state of the application , such that for all components there will be a single global state , not individual states as it is seen with react.

>> The important files/parts of our webapp essential to understand the nework flow are as follows <br/><br/>
Containers :- This directory will conatain the files which will map statetoprops ,In short these files will interact with the global states and put in their props the important stuffs that is to be displayed.<br/><br/>
Components :- These are just the frontend tools to display the required information, they have no knowledge of the architecture of the app they just have the responsibility to render the frontend in the desired format <br/><br/>
Services :- As we are using reddit api here , we have seperated to the code to evoke out required information from the api in services directory, Here the api is used and the important information is stored in states which are passed as props to other components of the webapp. <br/><br/>
Stores :- This directory will containg two very important files thunks and reducers, In thunk we will have the action handlers which will be invoked whenever any action takes place in the webapp and do appropriate filtering, the propos from here are passed to the reducer file , which is the holder of global state . Here only global state will be modified based on the type of action performed. States from here are passed to the containers which do their bit of work.

# Screenshots of working module
<img src = "Reddit-app/Screenshot from 2018-11-05 23-24-50.png"/>
Reddit-app/Screenshot from 2018-11-05 23-25-04.png 
Reddit-app/Screenshot from 2018-11-05 23-25-12.png 
Reddit-app/Screenshot from 2018-11-05 23-25-17.png 
Reddit-app/Screenshot from 2018-11-05 23-26-06.png
