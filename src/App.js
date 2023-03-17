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
import Mode from './components/Mode';


export default function App() {
  const [progress, setProgress] = useState(0);

  const [mode, setMode] = useState({
    navbar : "#8AB6F9",
    background : "#CADCFC",
    text : "black"
  })

  const handleMode = (navbar,background,text) => {
    setMode({
      navbar : navbar,
      background : background,
      text : text
    })
  }

    return (
      <>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Navbar mode={mode}/>
          <Mode handleMode={handleMode} mode={mode}/>
          <Routes>
            <Route exact path='/' element={<NewsItem mode={mode} setProgress={setProgress} category="general" key="general" />}></Route>
            <Route exact path='/business' element={<NewsItem mode={mode} setProgress={setProgress} category="business" key="business" />}></Route>
            <Route exact path='/entertainment' element={<NewsItem mode={mode} setProgress={setProgress} category="entertainment" key="entertainment" />}></Route>
            <Route exact path='/health' element={<NewsItem mode={mode} setProgress={setProgress} category="health" key="health" />}></Route>
            <Route exact path='/science' element={<NewsItem mode={mode} setProgress={setProgress} category="science" key="science" />}></Route>
            <Route exact path='/sports' element={<NewsItem mode={mode} setProgress={setProgress} category="sports" key="sports" />}></Route>
            <Route exact path='/technology' element={<NewsItem mode={mode} setProgress={setProgress} category="technology" key="technology" />}></Route>
          </Routes>
        </Router>
      </>
    )
  }


