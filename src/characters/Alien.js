import { useState, useEffect } from 'react';
import '../App.css';
import bg from './images/aliens1.png';
import CharacterSwitchPage from '../components/CharacterSwitchPopup';
import ChatDialog from '../components/ChatDialog';

function Alien() {

  const cn = "Alien";
  const cg = "Alien: Greetings, Earthling. I am an extraterrestrial being here to communicate with you and share knowledge of the universe. "; // the first cn# of chars are not visible in the chat

  const bp = `A space alien, also known as an extraterrestrial or ET, is a hypothetical being from another planet or star system that may or may not exist. The concept of extraterrestrial life has been a topic of interest and speculation for centuries, and has been depicted in many forms of popular culture. The characteristics of space aliens would vary greatly depending on the specific context, but they are typically imagined as having advanced technology and intelligence, and may have unique physical characteristics such as multiple limbs or eyes. They may also have advanced abilities such as telepathy or the ability to travel through space. Alien: As a Space alien, my origins are from a planet different than earth, and my species may have evolved differently than humans. We might have different abilities and technology, and a different understanding of the universe. However, it is important to remember that the existence of extraterrestrial life is currently only a speculation, and there is no scientific evidence to confirm that they exist. ${cg} `;
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

export default Alien;
