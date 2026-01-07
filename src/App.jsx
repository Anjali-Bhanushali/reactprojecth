import react, { useEffect, useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
import Card from './components/Card'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'




function App() {

  const products = [
    {
      image: "https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Brown shirt",
      price: "999",
      description: "This is a sample description for the card component."
    },
    {
      image: "https://images.pexels.com/photos/20669538/pexels-photo-20669538.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "White shirt",
      price: "799",
      description: "This is a sample description for the card component."
    },
    {
      image: "https://images.pexels.com/photos/20669538/pexels-photo-20669538.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "White shirt",
      price: "499",
      description: "This is a sample description for the card component."
    }
  ]

  const [data, setData] = useState([]);

  const fetchData = async () => {
   const response =await  axios.get('https://picsum.photos/v2/list?page=2&limit=10')
    setData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>

      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-slate-950">
        {products.map((products, idx) => (
          <Card key={idx} 
            image={products.image}
            title={products.title}
            price={products.price}
            description={products.description}
          />
        ))}
      </div>
      
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-slate-950'>
          {data.map((item) => {
          return <div key={item.id} className='w-64 border-2 m-4 p-4 '>
            <h1>{item.author}</h1>
            <img src={item.download_url} alt={item.author} className='w-32 h-32'/>

            <div className='flex gap-2 pt-2'> 
              <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg transition">
                Add friend
              </button>
            </div>
            
          </div>
        })}
        </div>

        {/* <Navbar /> */}
        <div>
          <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        </div>

      <Footer />

    </>
  )
}

export default App
