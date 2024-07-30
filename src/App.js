import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import ResumeState from './Context/ResumeState';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Login';
import BuilderArea from './Pages/BuilderArea';
import SignUp from './SignUp';
import Introduction from './Components/Intro/Introduction';
import Navbar from './Pages/Home/Navbar';
function App() {
  const location = useLocation();
  const noNavbarRoutes = ['/', '/reg'];

  return (
    <ResumeState>
    <div className="App">
    <Helmet>
    
          <title>Resume Builder - Create Professional Resumes Online</title>
          <meta name="description" content="Build and customize professional resumes online with Resume Builder. Choose from a variety of templates and create your perfect resume easily." />
          <meta name="keywords" content="resume builder, professional resumes, online resumes, resume templates" />
          <meta name="author" content="Hardik Desai" />
          <meta property="og:title" content="Resume Builder - Create Professional Resumes Online" />
          <meta property="og:description" content="Build and customize professional resumes online with Resume Builder. Choose from a variety of templates and create your perfect resume easily." />
          <meta property="og:image" content="https://avatars.githubusercontent.com/u/87645745?v=4" />
          <meta property="og:url" content="https://quick-resume.netlify.app/" />
          <meta property="og:type" content="website" />
        </Helmet>
       
        <Routes>
        
          <Route exact path="/" element={<Login />} />
          <Route exact path="/reg" element={<SignUp />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/intro" element={<Introduction />} />
          <Route exact path="/build" element={<BuilderArea />} />
        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;
