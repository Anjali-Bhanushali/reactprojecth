import react from 'react'
import Header from './components/Header'



function App() {
  

  return (
    <>
      <nav className="flex items-center justify-between px-10 py-4 bg-emerald-950 text-white">
      {/* Logo */}
      <h1 className="text-2xl font-bold">Anjali</h1>

      {/* Menu */}
      <ul className="flex gap-8 text-lg">
        <li className="cursor-pointer hover:text-gray-200">Home</li>
        <li className="cursor-pointer hover:text-gray-200">About</li>
        <li className="cursor-pointer hover:text-gray-200">Projects</li>
        <li className="cursor-pointer hover:text-gray-200">Contact</li>
      </ul>
    </nav>
    <Header />
    </>
  )
}

export default App
