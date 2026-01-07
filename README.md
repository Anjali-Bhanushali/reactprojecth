# reactprojecth

```React components ad other terminology
- Components
 name will always starts with capital letter
 export and import statement should be mentioned

-Props and Props drilling
 using props we can insert data into the components
 and make multiple components

-Multiple Components
 if we have to make multiple components in that case,
 we can make array of data.
 and the run a loop in the return function with that component along with it's props.

-Integrating API(axios)
In simple word API is like waiter in a resturant which brings
food for the customer.

lorem picsum is a api which gives free images
similarly axios tool hai backend ko call krne me help krta hai

-install axios
npm i axios

data jo aata hai API call se wo promises ke form me aata hai
learn about async and await in api calling
async function ko asychronous bnata hai taki jb tk data n aaye
function next line pe n jaye
ar await wait krwata hai
 const fetchData = async () => {
   const response =await  axios.get('https://picsum.photos/v2/list?page=2&limit=5')
   console.log(response);
  }
  <button onClick={fetchData} className='bg-emerald-950'>get data</button>

-useEffect
by using useEffect we can run the function side by side so the api calling is done automatically and the data is shown.

useEffect is used to run the function agai and again when it's dependencies changes.
mounting and unmounting ke kaam me aata hai useEffect.
lifecycle method ke liye.

-useRef
 dom element ko target krne ke kaam me aata hai

-React toastify(library hai)
flash messages ko show krne ke liye use hota hai

-Redux Toolkit
It is a independent library used for state management.

-React Router DOM
It is an external library which helps in routing in react,
beacuse react do not have inbuilt routing properties.

main.jsx - Browserouter
import { BrowserRouter } from 'react-router-dom'
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
app.jsx - routes,route(path,element)
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

     <div>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
navbar.jsx - link(to)
import { Link } from "react-router-dom";
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>






```
