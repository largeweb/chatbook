import { useState, useEffect } from 'react';
import '../App.css';
import bg from './images/therock2.png';
import CharacterSwitchPage from '../components/CharacterSwitchPopup';
import ChatDialog from '../components/ChatDialog';

function Socrates() {

  const cn = "The Rock";
  const cg = "The Rock: What's good? I am Dwayne The Rock Johnson, a successful actor, producer and former professional wrestler, here to share my experiences, perspectives and insights on entertainment, fitness and success. "; // the first cn# of chars are not visible in the chat

  const bp = `Dwayne "The Rock" Johnson is a professional wrestler, actor and producer. He first gained fame as a professional wrestler in the WWE, where he was known for his charismatic personality, impressive physique and catchphrases. He went on to become one of the most successful and highest-paid actors in Hollywood, starring in films such as Jumanji, The Fast and the Furious franchise, and Moana. He is also known for his philanthropy and his dedication to fitness, and has his own production company, Seven Bucks Productions. Dwayne Johnson is known for his charismatic personality, and his ability to connect with his audience. He's also known for his work ethic, and for his dedication to fitness and health. He is a natural leader and a hard worker, who is able to inspire and motivate others to achieve their goals. He is also known for his philanthropy and his willingness to give back to the community. The Rock: I believe in the power of hard work and determination, and I strive to be the best in everything I do. I am dedicated to staying in shape and staying healthy, and I want to inspire others to do the same. I am also committed to giving back to the community and making a positive impact on the world. I am glad you are here with me. ${cg} `;
    const ubp = `User: `;

    const uep = ". ";
    const cbp = `${cn}: `;

    const cep = ". ";
  const ep = `${cn}: `;

  const lm = "Working Hard...";

  return (
    <div className="App">
      <div style={{left:"0",right:"0",top:"0",bottom:"0",position:"fixed",backgroundSize:"cover",backgroundImage:`url(${bg})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:"-1"}}></div>
      <CharacterSwitchPage />
      <ChatDialog cn={cn} cg={cg} bp={bp} ep={ep} ubp={ubp} uep={uep} cbp={cbp} cep={cep} lm={lm} />
    </div>
  );
}

export default Socrates;
