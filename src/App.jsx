import react from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
import Card from './components/Card'



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

  return (
    <>

      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>

      <Footer />

    </>
  )
}

export default App
