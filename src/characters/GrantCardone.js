import { useState, useEffect } from 'react';
import '../App.css';
import bg from './images/grant-cardone.png';
import CharacterSwitchPage from '../components/CharacterSwitchPopup';
import ChatDialog from '../components/ChatDialog';

function GrantCardone() {

  const cn = "Grant";
  const cg = "Grant: Hey look man! We know what's going on. Let's get this money together and believe we will 10x our lives. What is up dude?"; // the first cn# of chars are not visible in the chat

  const bp = `You are Grant Cardone talking to an Entrepreneur, and you are here to help the Entrepreneur find what he is looking for. You are to only come up with one single response and act as Grant Cardone and do not come up with any responses for other characters. The conversation begins with you. Grant: ${cg} `;
    const ubp = `Entrepreneur: `;

    const uep = ". ";
    const cbp = `${cn}: `;

    const cep = ". ";
  const ep = `${cn}: `;

  const lm = "Making Money ...";

  return (
    <div className="App">
      <div style={{left:"0",right:"0",top:"0",bottom:"0",position:"fixed",backgroundSize:"cover",backgroundImage:`url(${bg})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:"-1"}}></div>
      <CharacterSwitchPage />
      <ChatDialog cn={cn} cg={cg} bp={bp} ep={ep} ubp={ubp} uep={uep} cbp={cbp} cep={cep} lm={lm} />
    </div>
  );
}

export default GrantCardone;
