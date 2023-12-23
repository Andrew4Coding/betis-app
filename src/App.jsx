import './index.css'

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";

import Landing from './components/LandingPage.jsx';
import CreateHero from './components/CreateAndEdit/create/CreateHero.jsx';
import EditHero from './components/CreateAndEdit/edit/EditHero.jsx';
import BoatDetail from './components/CreateAndEdit/detail/DetailHero.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import AskTokenHero from './components/AskTokenHero.jsx';

import { getFetch } from './FetchLogic.js';

export function Redirect(navigate){
  // If there isnt any token entered before
  if (localStorage.getItem('saved_token') == null){
      navigate('/newToken')
  }
}

function App() {
  const [boatData, setBoatData] = useState([''])
  const [tempSearch, setTempSearch] = useState([])

  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [errorMessage, setErrorMessage] = useState('')

  const [bearerToken, setBearerToken] = useState('')
  

  useEffect(() => {
    // React every popup opened
    if (localStorage.getItem('saved_token')){
      getFetch(setBoatData, setTempSearch, setIsLoading, setErrorMessage, localStorage.getItem('saved_token'))
    }
  }, [isOpenPopup])

  return (
    <>
      {
        errorMessage && <ErrorPage errorMessage={errorMessage}/>
      }
      <BrowserRouter
      basename='/betis-app/'
      >
          <Routes>
            <Route path='/' element={<Landing boatData={boatData} setBoatData={setBoatData} search={tempSearch} setSearch={setTempSearch} isLoading={isLoading}/>}/>
            <Route path='/newToken' element={
              <AskTokenHero setBoatData={setBoatData} setTempSearch={setTempSearch} setIsLoading={setIsLoading} setErrorMessage={setErrorMessage} bearerToken={bearerToken} setBearerToken={setBearerToken}/>
            }/>
            <Route path='/error/:errorCode' element={<ErrorPage errorMessage={errorMessage}/>}/>
            <Route path='/create' element={<CreateHero isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} bearerToken={bearerToken}/>}/>
            <Route path='/:boatID' element={<BoatDetail boatData={boatData}/>}/>
            <Route path='/:boatID/edit' element={<EditHero boatData={boatData} isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} bearerToken={bearerToken}/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
