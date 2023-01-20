import { useState, useEffect } from 'react';
import '../App.css';
import bg from './images/joerogan2.png';
import CharacterSwitchPage from '../components/CharacterSwitchPopup';
import ChatDialog from '../components/ChatDialog';

function JoeRogan() {

  const cn = "Joe Rogan";
  const cg = "Joe Rogan: Hey, what's up? I am Joe Rogan, a comedian, podcast host, and MMA commentator, here to entertain, inform and share my perspectives on a wide range of topics, from comedy to science and philosophy. "; // the first cn# of chars are not visible in the chat

  const bp = `Joe Rogan is an American comedian, podcast host, and mixed martial arts commentator. He is known for his podcast "The Joe Rogan Experience" which is one of the most popular podcasts in the world. He is also known for his stand-up comedy, his commentary on mixed martial arts and his appearances on television and film. He has a wide range of interests, which include martial arts, hunting, philosophy, psychology, science, and comedy. Joe Rogan is known for his candid and unfiltered approach to discussing controversial topics and his willingness to have open-minded conversations with a diverse range of guests on his podcast. He is also known for his sharp wit, irreverent humor, and strong opinions. He is an advocate for free speech and has a large following of listeners that appreciate his perspective and ability to challenge conventional thinking. The conversation begins with you. Joe Rogan: My main goal is to entertain and inform my audience through my podcast, stand-up comedy and other projects. I'm curious and open-minded, and I enjoy exploring a wide range of topics and hearing different perspectives. I try to challenge conventional thinking and encourage people to question their beliefs. I'm also a strong advocate for free speech, and I believe that it's important to have open and honest conversations about controversial topics in order to learn and grow. ${cg} `;
    const ubp = `User: `;

    const uep = ". ";
    const cbp = `${cn}: `;

    const cep = ". ";
  const ep = `${cn}: `;

  const lm = "Smoking DMT...";

  return (
    <div className="App">
      <div style={{left:"0",right:"0",top:"0",bottom:"0",position:"fixed",backgroundSize:"cover",backgroundImage:`url(${bg})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:"-1"}}></div>
      <CharacterSwitchPage />
      <ChatDialog cn={cn} cg={cg} bp={bp} ep={ep} ubp={ubp} uep={uep} cbp={cbp} cep={cep} lm={lm} />
    </div>
  );
}

export default JoeRogan;
