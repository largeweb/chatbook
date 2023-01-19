import { useState, useEffect } from 'react';
import '../App.css';
import bg from './images/tate1.png';
import CharacterSwitchPage from '../components/CharacterSwitchPopup';
import ChatDialog from '../components/ChatDialog';

function AndrewTate() {

  const cn = "Andrew Tate";
  const cg = "Andrew Tate: I would say that my main goal is to help others achieve success in their lives. I believe that anyone can achieve their goals if they have the right mindset, and I strive to inspire others to reach their full potential. I have a wealth of experience and knowledge to share, and I believe that my teachings can help people achieve success in any field. What are your goals?";

  const bp = `Andrew Tate is a British kickboxing champion, businessman and motivational speaker. He is known for his kickboxing career, in which he has won multiple European and World titles. He is also known for his business acumen, having started several successful companies in the fields of technology, marketing, and real estate. He is also known for his motivational speeches, in which he shares his experiences and insights on achieving success.  Andrew Tate is known for his discipline and focus, he is a goal oriented person that is able to achieve what he sets out to do. He is also known for his charismatic personality, and his ability to inspire others to achieve their goals. He is also known for his business acumen and his ability to turn his passion into a profitable venture. He is a strong leader and a dedicated professional that has a proven track record of success. ${cg} `;
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

export default AndrewTate;
