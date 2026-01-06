import react, { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
import Card from './components/Card'
import axios from 'axios'



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

      <button onClick={fetchData} className='bg-emerald-950'>get data</button>
      

      <Footer />

    </>
  )
}

export default App
