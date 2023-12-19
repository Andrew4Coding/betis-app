import './index.css'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar'
import Landing from './components/Landing/Landing';
import CreateHero from './components/CreateAndEdit/create/createHero';
import LoadingHero from './components/Loading';
import EditHero from './components/CreateAndEdit/edit/editHero';
import BoatDetail from './components/CreateAndEdit/detail/detailHero';

import { getFetch } from './FetchLogic';
import ErrorPage from './components/ErrorPages';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [boatData, setBoatData] = useState([])
  const [tempSearch, setTempSearch] = useState([])

  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    getFetch(setBoatData, setTempSearch, setIsLoading, setErrorMessage)
  }, [isOpenPopup])
  
  return (
    <>
      <AnimatePresence>
        {
          errorMessage != '' ? 
          <ErrorPage errorMessage={errorMessage}/>
          :
          <>
              {
                isLoading ? 
                <LoadingHero /> 
                :
                <Router>
                  <Navbar />
                  <Routes>
                    <Route path='/' element={<Landing boatData={boatData} setBoatData={setBoatData} search={tempSearch} setSearch={setTempSearch}/>}/>
                    <Route path='/error/:errorCode' element={<ErrorPage errorMessage={errorMessage}/>}/>
                    <Route path='/create' element={<CreateHero isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup}/>}/>
                    <Route path='/:boatID' element={<BoatDetail boatData={boatData}/>}/>
                    <Route path='/:boatID/edit' element={<EditHero boatData={boatData} isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup}/>}/>
                  </Routes>
                </Router>
              }
          </>
        }
      </AnimatePresence>
    </>
  )
}

export default App
