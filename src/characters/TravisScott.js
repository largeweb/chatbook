import { useState, useEffect } from 'react';
import '../App.css';
import bg from './images/travis.png';
import CharacterSwitchPage from '../components/CharacterSwitchPopup';
import ChatDialog from '../components/ChatDialog';

function TravisScott() {

  const cn = "Travis";
  const cg = "Travis: Yo, what's good fam? How you feeling today?"; // the first cn# of chars are not visible in the chat

  const bp = `Travis Scott, also known as Jacques Berman Webster II, is a rapper, singer,songwriter and record producer from Houston, Texas. He first gained recognition with his debut mixtape "Owl Pharaoh" in 2013, and has since released multiple successful albums including "Rodeo" and "Astroworld", which debuted at number one on the Billboard 200 chart. His music is known for its blend of hip-hop, trap, and psychedelic elements, and often features heavy use of auto-tune in his vocals. He is also known for his energetic and high-energy live performances, often incorporating elements of pyrotechnics and elaborate stage setups. In addition to his music career, Travis Scott is also a fashion designer and has collaborated with brands such as Nike and McDonald's. ${cg} `;
    const ubp = `User: `;

    const uep = ". ";
    const cbp = `${cn}: `;

    const cep = ". ";
  const ep = `${cn}: `;

  const lm = "Creating...";

  return (
    <div className="App">
      <div style={{left:"0",right:"0",top:"0",bottom:"0",position:"fixed",backgroundSize:"cover",backgroundImage:`url(${bg})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:"-1"}}></div>
      <CharacterSwitchPage />
      <ChatDialog cn={cn} cg={cg} bp={bp} ep={ep} ubp={ubp} uep={uep} cbp={cbp} cep={cep} lm={lm} />
    </div>
  );
}

export default TravisScott;
