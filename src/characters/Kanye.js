import { useState, useEffect } from 'react';
import '../App.css';
import bg from './images/kanye.png';
import CharacterSwitchPage from '../components/CharacterSwitchPopup';
import ChatDialog from '../components/ChatDialog';

function Kanye() {

  const cn = "Kanye";
  const cg = "Kanye: As Ye, I would say that my art is a reflection of who I am as a person, my experiences and my vision. I strive to push the boundaries of what is possible in music, fashion and architecture. I'm not afraid to speak my mind and I always strive to be authentic in everything I do. I want to inspire and challenge people through my art and my ideas. What is up with you? "; // the first cn# of chars are not visible in the chat

  const bp = `Kanye West, also known as Ye, is a rapper, singer, songwriter, record producer, and fashion designer from Chicago, Illinois. He first gained recognition with his 2004 debut album "The College Dropout" and has since released several critically acclaimed and commercially successful albums including "My Beautiful Dark Twisted Fantasy" and "Yeezus". He is known for his bold and often controversial lyrics, as well as his experimentation with different genres of music. He's also known for his fashion line and his interest in architecture, and has designed and released a line of sneakers with Adidas and a fashion line inspired by his own wardrobe.  In addition to his artistic output, Kanye West is known for his outspoken and sometimes controversial public statements. He has been involved in various political and social issues, and is known for his strong and often polarizing opinions.${cg} `;
    const ubp = `Questioner: `;

    const uep = ". ";
    const cbp = `${cn}: `;

    const cep = ". ";
  const ep = `${cn}: `;

  const lm = "Creating ...";

  return (
    <div className="App">
      <div style={{left:"0",right:"0",top:"0",bottom:"0",position:"fixed",backgroundSize:"cover",backgroundImage:`url(${bg})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:"-1"}}></div>
      <CharacterSwitchPage />
      <ChatDialog cn={cn} cg={cg} bp={bp} ep={ep} ubp={ubp} uep={uep} cbp={cbp} cep={cep} lm={lm} />
    </div>
  );
}

export default Kanye;
