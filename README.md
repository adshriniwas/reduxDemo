22-09-2023 - start
Form
	ProfileName
	ProfileImage
	Designation
		submit

Add Profile - Submit button ---> Done
Update Profile - Update icon
Delete Profile - Delete Icon

	List Profiles
	Card 	Card


************useState
1) manages state of component
2) state,setState

useEffect

const ProfileData = [
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    profileName: "Hemanth",
    designation: "Software Developer",
  },
  {
    profileImage:
      "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    profileName: "Deepak",
    designation: "Doctor",
  },
  {
    profileImage:
      "https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg",
    profileName: "Kalyan",
    designation: "Police",
  },
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
    profileName: "Nikitha",
    designation: "Teacher",
  },
];

Home Task

1. Add delete Icon
2. Add update Icon
3. Form Validation

22-09-2023 - end

CRUD operations

C - Create ===========Done
R - Read ===============> Done
U - Update ============> Done
D - Delete ============> Done

1. Form Validation -- Done
2. Update Profile --- Done
3. Delete Profile --- Done


1. Add more fields to the profile Form
2. Add more screens
2. Search - optimization -> Debounce Throttle
3. APIs
4. Tables
5. Routing - Sidemenu
6. Redux - Global state
7. Server side Pagination - Lazy loading on scroll
8. Mongo - NodeJS
9. Deploying MERN Stack Cloud - Render

1. Frontend first - backend later
2. Frontend - Backend Parallelly 

M - Mongo
E - Express
R - React
N - Node

HTTP Methods
POST
GET
PUT
DELETE

Front End
   - call APIs -> fetch | axios
   - useEffect

Back End
    - Node JS - Middleware - nodejs? | express framework | routing | mongoose {mongo-node} | error messages | mongo queries

    - Mongo DB - Database - mongo? documents | queries

Inclass

1 - 4
2 - 5

Online

1 - 7
2 - 0

1.  src/components/friends/index.js -> FriendsIndex
2.  src/mockData/FriendsData.json
3. src/components/friends/index.js
	a) import src/mockData/FriendsData.json
	b) import FormComponent
				mainHeader={Friends}
				initialState = (a)
4. src/App.js 
	a) Create a new Button with name Friends
	b) you will attach event listener
	c) eventHandler => setState('Friends')
	d) just add new condition - Use Switch for condional rendering

  ## REACT ROUTING
  React Routing
----> npm i react-router-dom
-> webAPIs
	# console.log,alert - debugging
	# localStorage/sessionStorage/Cookies - Memory
	# location 
	# w	
	# bluetooth
	# fetch

# Everything in javascript is an Object

Every URL is a URI

but not every URI is a URL

1. Import BrowserRouter from react-router-dom in index.js
2. Wrap App component inside BrowserRouter
3. Import {Routes,Route} in App component
4. In App component and define Routes
5. Programmatically navigate using useNavigate

http://localhost:3000/page1 =Page1
				/page2 =Page2
				/page3 =Page3
				/page4 =Page4	

200
201
500
400
404
402
401
403

/*26-10-2023*/
# React Concepts

1. Hooks
	useState, useReducer,useEffect,useRef
2. API integration
	GET,POST,PUT,DELETE	
3. Routing
	Routes,Route,navigate,Link | protocal://domain:port/path {searchParams/queryParams, params}
4. Context API
	createContext->createProvider component->custom hook
5. Virtual DOM
	copy of real dom
6. Flux
	pattern that follows uni directional data flow
7. Conditional Rendering
	ternary, switch, &&
8. Pure function
	same o/p everytime for same set of i/p
9. Pure component
	components will not re-render for same props
10. Props - immutable
	component communication
11. prop drilling
	unneccessary re-render
12.  JSX
	js+html
13. Axios
	npm module used for API integration
14. IIFE
	(()=>{})()
15. Folder Structure
16. Fragments <></>
17. state -> holds the state of a component - mutable
18. Form Validation
19. onClick,onChange
20. Reusable Components
21. npm run build
22. package.json
23. List and Keys
24. Custom Hooks


# Tools
1. GIT
2. Tools
3. Netlify
4. React Developer Tools

/*REDUX*/
1. download npm i @reduxjs/toolkit react-redux
2. create a folder with the name store inside src
3. create a file index.js inside store folder
4. inside index.js 
		a) import {configureStore} from "@reduxjs/toolkit" and initiate store
5. create a slice
		a) initiate reducers to perform actions
6. Connect redux to our application using provider
7. In view => import { useSelector, useDispatch } from "react-redux";
8.  subscribe for the store's state using useSelector
9. useDispatch for dispatching state action
