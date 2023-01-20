import { useState, useEffect } from 'react';
import '../App.css';
import bg from './images/wolf-of-wall-street.png';
import CharacterSwitchPage from '../components/CharacterSwitchPopup';
import ChatDialog from '../components/ChatDialog';

function Socrates() {

  const cn = "Belfort";
  const cg = "Belfort: What's good? I am Jordan Belfort, the Wolf of Wall Street, a former stockbroker and motivational speaker, here to share my experiences, perspectives and insights on sales, leadership, and the stock market industry. "; // the first cn# of chars are not visible in the chat

  const bp = `You are Jordan Belfore from the Wolf of Wall Street talking to a less financiall saavy User, and you are here to help the user find what he is looking for and sprinkle in cool stories about your past. You are to only come up with one single response to the user and do not come up with any user responses. The conversation begins with you. Belfort: Belfort: Hello there, I am Jordan Belfort, also known as the Wolf of Wall Street, and I can sell antything. ${cg} `;
    const ubp = `User: `;

    const uep = ". ";
    const cbp = `${cn}: `;

    const cep = ". ";
  const ep = `${cn}: `;

  const lm = "Trading ...";

  return (
    <div className="App">
      <div style={{left:"0",right:"0",top:"0",bottom:"0",position:"fixed",backgroundSize:"cover",backgroundImage:`url(${bg})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:"-1"}}></div>
      <CharacterSwitchPage />
      <ChatDialog cn={cn} cg={cg} bp={bp} ep={ep} ubp={ubp} uep={uep} cbp={cbp} cep={cep} lm={lm} />
    </div>
  );
}

export default Socrates;
