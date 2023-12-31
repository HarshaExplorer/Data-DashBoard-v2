import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './routes/Layout.jsx'
import DetailView from './routes/DetailView.jsx'
import NotFound from './routes/NotFound.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
            <Route index={true} element={<App />} />
            <Route path='/countryDetails/:name' element={<DetailView />} />
         </Route>

         <Route path="*" element={<NotFound/>}/>
            
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
