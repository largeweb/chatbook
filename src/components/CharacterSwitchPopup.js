import { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function CharacterSwitchPopup() {

  const [o,so] = useState(false);

  const open = () => {
    so(true);
    }

    const close = () => {
    so(false);
    }

  return (
    <div className="App">
        {o && <button style={{position:"fixed",zIndex:"11",top:"6%",left:"78%",width:"16%",height:"8%",opacity:"0.9", border:"5px solid blue",fontSize:"100%"}} onClick={close}>❌</button>}
        {!o && <button style={{position:"fixed",zIndex:"11",top:"6%",left:"78%",width:"16%",height:"8%",opacity:"0.5",border:"5px solid brown"}} onClick={open}>Menu</button>}
        {o && <div style={{position:"fixed",zIndex:"10",top:"10%",left:"5%",bottom:"10%",right:"5%",background:"white",borderRadius:"10%",border:"5px solid blue"}}>
            <Link to={'/socrates'}><button style={{position:"fixed",zIndex:"11",top:"15%",left:"10%",width:"15%",height:"10%",opacity:"0.6"}}>Socrates</button></Link>
            <Link to={'/grant-cardone'}><button style={{position:"fixed",zIndex:"11",top:"15%",left:"30%",width:"15%",height:"10%",opacity:"0.6"}}>Grant</button></Link>
            <Link to={'/kanye-west'}><button style={{position:"fixed",zIndex:"11",top:"15%",left:"50%",width:"15%",height:"10%",opacity:"0.6"}}>Ye</button></Link>
            <Link to={'/wolf-of-wall-street'}><button style={{position:"fixed",zIndex:"11",top:"15%",left:"70%",width:"15%",height:"10%",opacity:"0.6"}}>Wolf</button></Link>
            <Link to={'/travis-scott'}><button style={{position:"fixed",zIndex:"11",top:"30%",left:"10%",width:"15%",height:"10%",opacity:"0.6"}}>Travis</button></Link>
            <Link to={'/andrew-tate'}><button style={{position:"fixed",zIndex:"11",top:"30%",left:"30%",width:"15%",height:"10%",opacity:"0.6"}}>Tate</button></Link>
            <Link to={'/tech-support'}><button style={{position:"fixed",zIndex:"11",top:"30%",left:"50%",width:"15%",height:"10%",opacity:"0.6"}}>Support</button></Link>
            <Link to={'/the-rock'}><button style={{position:"fixed",zIndex:"11",top:"30%",left:"70%",width:"15%",height:"10%",opacity:"0.6"}}>Rock</button></Link>
            <Link to={'/elon-musk'}><button style={{position:"fixed",zIndex:"11",top:"45%",left:"10%",width:"15%",height:"10%",opacity:"0.6"}}>Elon</button></Link>
            <Link to={'/onlyfans-model'}><button style={{position:"fixed",zIndex:"11",top:"45%",left:"30%",width:"15%",height:"10%",opacity:"0.6"}}>OnlyFans</button></Link>
            <Link to={'/dealer'}><button style={{position:"fixed",zIndex:"11",top:"45%",left:"50%",width:"15%",height:"10%",opacity:"0.6"}}>Dealer</button></Link>
            <Link to={'/alien'}><button style={{position:"fixed",zIndex:"11",top:"45%",left:"70%",width:"15%",height:"10%",opacity:"0.6"}}>Alien</button></Link>
            <Link to={'/god'}><button style={{position:"fixed",zIndex:"11",top:"60%",left:"10%",width:"15%",height:"10%",opacity:"0.6"}}>God</button></Link>
            <Link to={'/rosalina'}><button style={{position:"fixed",zIndex:"11",top:"60%",left:"30%",width:"15%",height:"10%",opacity:"0.6"}}>Rosalina</button></Link>
            <Link to={'/joe-rogan'}><button style={{position:"fixed",zIndex:"11",top:"60%",left:"50%",width:"15%",height:"10%",opacity:"0.6"}}>Joe</button></Link>
            <Link to={'/jack-harlow'}><button style={{position:"fixed",zIndex:"11",top:"60%",left:"70%",width:"15%",height:"10%",opacity:"0.6"}}>Harlow</button></Link>
            <Link to={'/snoop-dogg'}><button style={{position:"fixed",zIndex:"11",top:"75%",left:"10%",width:"15%",height:"10%",opacity:"0.6"}}>Snoop</button></Link>
            <Link to={'/donald-trump'}><button style={{position:"fixed",zIndex:"11",top:"75%",left:"30%",width:"15%",height:"10%",opacity:"0.6"}}>Trump</button></Link>
            <Link to={'/joe-biden'}><button style={{position:"fixed",zIndex:"11",top:"75%",left:"50%",width:"15%",height:"10%",opacity:"0.6"}}>Biden</button></Link>
            <Link to={'/putin'}><button style={{position:"fixed",zIndex:"11",top:"75%",left:"70%",width:"15%",height:"10%",opacity:"0.6"}}>Putin</button></Link>
        </div>}
    </div>
  );
}

export default CharacterSwitchPopup;
