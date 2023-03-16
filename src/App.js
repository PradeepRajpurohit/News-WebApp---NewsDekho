import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import NewsItem from './components/NewsItem'
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default function App() {
  const [progress, setProgress] = useState(0)

    return (
      <>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Navbar />
          <Routes>
            <Route exact path='/' element={<NewsItem setProgress={setProgress} category="general" key="general" />}></Route>
            <Route exact path='/business' element={<NewsItem setProgress={setProgress} category="business" key="business" />}></Route>
            <Route exact path='/entertainment' element={<NewsItem setProgress={setProgress} category="entertainment" key="entertainment" />}></Route>
            <Route exact path='/health' element={<NewsItem setProgress={setProgress} category="health" key="health" />}></Route>
            <Route exact path='/science' element={<NewsItem setProgress={setProgress} category="science" key="science" />}></Route>
            <Route exact path='/sports' element={<NewsItem setProgress={setProgress} category="sports" key="sports" />}></Route>
            <Route exact path='/technology' element={<NewsItem setProgress={setProgress} category="technology" key="technology" />}></Route>
          </Routes>
        </Router>
      </>
    )
  }


