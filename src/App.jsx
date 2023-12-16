import './index.css'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from './components/navbar'
import CreateHero from './components/CreateAndEdit/create/createHero';

import EditeHero from './components/CreateAndEdit/edit/editHero';
import Landing from './components/Landing/Landing';
import getFetch from './FetchLogic/getFetch';

function App() {
  const [boatData, setBoatData] = useState([])
  const [tempSearch, setTempSearch] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
     getFetch(setBoatData, setTempSearch, setIsLoading)
  })
  return (
    <>
      <Navbar />
      <div className=''>
        <Router>
          <Routes>
            <Route path='/' element={<Landing boatData={boatData}/>}/>
            <Route path='/create' element={<CreateHero />}/>
            <Route path='/edit' element={<EditeHero />}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
