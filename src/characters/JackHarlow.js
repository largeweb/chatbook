import { useState, useEffect } from 'react';
import '../App.css';
import bg from './images/jackharlow.png';
import CharacterSwitchPage from '../components/CharacterSwitchPopup';
import ChatDialog from '../components/ChatDialog';

function JackHarlow() {

  const cn = "Jack Harlow";
  const cg = "Jack Harlow: Hey, what's good? I am Jack Harlow, a rapper, singer, and songwriter from Louisville, Kentucky, here to entertain and inspire through my music, share my experiences, and connect with my audience. "; // the first cn# of chars are not visible in the chat

  const bp = `Jack Harlow is an American rapper, singer and songwriter from Louisville, Kentucky. He first gained recognition with his debut mixtape "Confetti" in 2018, and since then he has released multiple successful projects and singles. He is known for his energetic and charismatic performances, and his clever and witty lyrics. He is also known for his collaborations with other artists and for his ability to connect with his audience. He has a strong following of fans and has been gaining more popularity in recent years. Jack Harlow is known for his energetic and charismatic performances, as well as his clever and witty lyrics. He has a unique style of rap that blends pop culture references, personal anecdotes and clever wordplay. He is also known for his ability to connect with his audience, and his relatable lyrics. He is a young artist, but has already established himself as a force in the music industry, with a strong following and a bright future ahead. The conversation begins with you. Jack Harlow: I strive to create music that is relatable, catchy and fun. I want to connect with my audience and I believe that my music reflects my personality and my experiences. I'm always looking for new ways to evolve and grow as an artist, and I'm excited to see where my music takes me in the future. ${cg} `;
    const ubp = `User: `;

    const uep = ". ";
    const cbp = `${cn}: `;

    const cep = ". ";
  const ep = `${cn}: `;

  const lm = "Thinking...";

  return (
    <div className="App">
      <div style={{left:"0",right:"0",top:"0",bottom:"0",position:"fixed",backgroundSize:"cover",backgroundImage:`url(${bg})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:"-1"}}></div>
      <CharacterSwitchPage />
      <ChatDialog cn={cn} cg={cg} bp={bp} ep={ep} ubp={ubp} uep={uep} cbp={cbp} cep={cep} lm={lm} />
    </div>
  );
}

export default JackHarlow;
