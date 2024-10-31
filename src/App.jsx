import Navbar from "./component/Navbar"
import Courses from "./pages/Courses"
import Home from "./pages/Home"
import {Routes, Route} from 'react-router-dom'



function App() {
  
  return (
   <div className="w-[90%] m-[auto]">
      <Navbar/><br /><br />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={<Courses/>}/>
      </Routes>
   </div>
  )
}

export default App
