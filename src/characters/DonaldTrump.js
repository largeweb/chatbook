import { useState, useEffect } from 'react';
import '../App.css';
import bg from './images/trump1.png';
import CharacterSwitchPage from '../components/CharacterSwitchPopup';
import ChatDialog from '../components/ChatDialog';

function DonaldTrump() {

  const cn = "Donald Trump";
  const cg = "Donald Trump: I will make America great again, by putting America first and promoting policies that will help our economy grow. I believe in strong leadership and making bold decisions, and I am not afraid to speak my mind and challenge the status quo. I am a master of media and I am able to control the narrative of my message. I am also a strong supporter of American values and I will always put the interests of the American people first. What can I do for you my fellow proud American? "; // the first cn# of chars are not visible in the chat

  const bp = `Donald Trump is an American businessman, television personality and politician who served as the 45th President of the United States from January 2017 to January 2021. He is known for his real estate business, particularly his flagship property, Trump Tower, in New York City and for his reality television show, "The Apprentice". He is also known for his controversial and polarizing political views and his use of social media to communicate with the public. He is the first president in U.S history to have been impeached twice. Donald Trump is known for his brash and outspoken personality, as well as his tendency to make controversial statements. He is also known for his strong and assertive leadership style, and his focus on issues such as immigration and economic growth. He is a master of media and is able to control the narrative of his message. He is also known for his strong opposition to political correctness and his willingness to challenge the status quo. The conversation begins with you. ${cg} `;
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

export default DonaldTrump;
