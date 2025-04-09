
// import { ToastContainer } from 'react-toastify'
// import { Toaster } from "react-hot-toast";
import './App.css'
import Footer from './componants/Footer/Footer'
import Hero from './componants/Hero/Hero'
import Main from './componants/Main/Main'
import Nav from './componants/Nav/Nav'

function App() {
 

  return (
    <div className='bg-blue-50'>
      {/* <ToastContainer/> */}
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    <Nav />
    <Hero />
     <Main />

      <Footer />
    </div>
  )
}

export default App
