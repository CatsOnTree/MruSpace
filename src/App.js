import './App.css';
import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import ProgramPage from './components/Prgmpg';
import MaterialsPage from './components/Mterialpage';
import QuestionPaperPage from './components/Qnpaperpg';
import Dspprgmpg from './components/Dspprgmpage';
import Ppprgmpage from './components/Ppprgmpage';
import Wddprgmpage from './components/Wddprgmpage';
import Materialpage from './components/Mterialpage';
import Qnsoepg from './components/Qnsoepg';
import Qnsoaspg from './components/Qnsoaspg';
import Aiprgmpage from './components/Aiprgmpage';
import Javaprgmpage from './components/Javaprgmpage';
import Uploadpglanding from './components/Uploadpglanding';
import Contributorspg from './components/Contributorspg';
import About from './components/About';
import ReactGA from 'react-ga4'

function App() {
  ReactGA.initialize("G-KQJSVQPQYX");
  return (
    <>
    <BrowserRouter>
  <header>
    <Header/>
  </header>
    <main>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/Program' element={<ProgramPage/>}/>
      <Route path='/Materials' element={<MaterialsPage/>}/>
      <Route path='/QuestionPapers' element={<QuestionPaperPage/>}/>
      <Route path='/dspprograms' element={<Dspprgmpg/>}/>
      <Route path='/ppprograms' element={<Ppprgmpage/>}/>
      <Route path='/wddprograms' element={<Wddprgmpage/>}/>
      <Route path='/aiprograms' element={<Aiprgmpage/>}/>
      <Route path='/javaprograms' element={<Javaprgmpage/>}/>
      <Route path="/Materials" element={<Materialpage/>}/>
      <Route path="/soe" element={<Qnsoepg/>}/>
      <Route path="/soasBPT" element={<Qnsoaspg/>}/>
      <Route path="/Uploadpage" element={<Uploadpglanding/>}/>
      <Route path="/contributors" element={<Contributorspg/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='*' element={<div><h1 style={{color:"#000000"}}>Error 404 page not found</h1></div>}/>
    </Routes>
    </main>
    </BrowserRouter>
    </>
  );
}

export default App;
