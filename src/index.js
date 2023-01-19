import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Socrates from './characters/Socrates';
import Kanye from './characters/Kanye';
import GrantCardone from './characters/GrantCardone';
import WolfOfWallStreet from './characters/WolfOfWallStreet';
import AndrewTate from './characters/AndrewTate';
import TravisScott from './characters/TravisScott';
import ElonMusk from './characters/ElonMusk';
import OnlyFansModel from './characters/OFModel';
import Dealer from './characters/Dealer';
import Alien from './characters/Alien';
import God from './characters/God';
import TechSupport from './characters/TechSupport';
import TheRock from './characters/TheRock';
import Rosalina from './characters/Rosalina';
import JoeRogan from './characters/JoeRogan';
import JackHarlow from './characters/JackHarlow';
import SnoopDogg from './characters/SnoopDogg';
import DonaldTrump from './characters/DonaldTrump';
import JoeBiden from './characters/JoeBiden';
import Putin from './characters/Putin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Socrates/>} />
        <Route path="/socrates" element={<Socrates/>} />
        <Route path="/kanye-west" element={<Kanye/>} />
        <Route path="/travis-scott" element={<TravisScott/>} />
        <Route path="/andrew-tate" element={<AndrewTate/>} />
        <Route path="/grant-cardone" element={<GrantCardone/>} />
        <Route path="/wolf-of-wall-street" element={<WolfOfWallStreet/>} />
        <Route path="/tech-support" element={<TechSupport/>} />
        <Route path="/the-rock" element={<TheRock/>} />
        <Route path="/elon-musk" element={<ElonMusk/>} />
        <Route path="/onlyfans-model" element={<OnlyFansModel/>} />
        <Route path="/dealer" element={<Dealer/>} />
        <Route path="/alien" element={<Alien/>} />
        <Route path="/god" element={<God/>} />
        <Route path="/rosalina" element={<Rosalina/>} />
        <Route path="/joe-rogan" element={<JoeRogan/>} />
        <Route path="/jack-harlow" element={<JackHarlow/>} />
        <Route path="/snoop-dogg" element={<SnoopDogg/>} />
        <Route path="/donald-trump" element={<DonaldTrump/>} />
        <Route path="/joe-biden" element={<JoeBiden/>} />
        <Route path="/putin" element={<Putin/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
