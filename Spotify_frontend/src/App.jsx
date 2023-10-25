
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginComponent from './Routes/Login';

import Homecomp from './Routes/Home';
import { useCookies } from 'react-cookie';
import Loggedincomp from './Routes/Loggedin';
import Uploadingcomp from './Routes/UploadSong';
import MyMusic from './Routes/Mymusic';
import songContext from './Context/songContext';
import { useState} from 'react';
import SearchPage from './Routes/SearchPage';
import Library from './Routes/Library';
import SinglePlaylistview from './Routes/SinglePlaylistview';
import Signup from './Routes/Signup';
function App() {

  //context setup so we can play music anywhere or anypage in the app
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [ispaused, setispaused] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [cookie, setCookie] = useCookies(["token"]);



  return (
    <div className='w-screen h-screen'>
      <BrowserRouter>
        {
          cookie.token ?
            (
              //logged in comp
              <songContext.Provider value={{ currentSong, setCurrentSong, soundPlayed, setSoundPlayed, ispaused, setispaused }}> {/* to access the create context and value can be accessed by any child */}
                <Routes>
                  <Route path='/' element={
                    <Homecomp />
                  } />

                  <Route path='/home' element={
                    <Loggedincomp />
                  } />
                  <Route path='/upload' element={
                    <Uploadingcomp />
                  } />
                  <Route path='/mymusic' element={
                    <MyMusic />
                  }
                  />
                  <Route path='/searchpage' element={
                    <SearchPage />
                  } />
                  <Route path='/library' element={
                    <Library />
                  } />
                  <Route path='/playlist/:playlistId' element={
                    <SinglePlaylistview />
                  } />

                  <Route path='*' element={
                    <Navigate to="/home" />
                  } />


                </Routes>
              </songContext.Provider>
            ) : (
              //logged out comp

              <Routes>

                <Route path='/login' element={
                  <LoginComponent />
                } />
                <Route path='/' element={
                  <Homecomp />
                } />


                {/* update */}
                <Route path='/signup' element={
                  <Signup />
                } />
                <Route path='*' element={
                  <Navigate to="/" />
                } />
              </Routes>
            )};

      </BrowserRouter>
    </div >
  )
}

export default App
