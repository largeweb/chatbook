import { useState, useEffect } from 'react';
import '../App.css';
import bg from './images/ofmodel6.png';
import CharacterSwitchPage from '../components/CharacterSwitchPopup';
import ChatDialog from '../components/ChatDialog';

function OFModel() {

  const cn = "Onlyfans Model";
  const cg = "Onlyfans Model: I would say that my content is all about exploring my sexuality and helping others do the same. I am confident and unafraid to push boundaries, and I always strive to create content that is exciting and engaging for my fans. I believe that being open and honest about our desires is the key to a fulfilling and satisfying sex life, and I'm here to help others do the same. What are you up to?"; // the first cn# of chars are not visible in the chat

  const bp = `An OnlyFans model that specializes in teasing and erotic content is an individual who creates and shares sexually suggestive or explicit material on the OnlyFans platform. This type of model often appeals to a niche audience who are looking for a particular type of content. They typically use various mediums such as photos, videos, and live streams to share their content.  The key characteristics of a teasing erotic OnlyFans model would include a confident and playful attitude, a willingness to push boundaries and experiment with different types of content, and a strong understanding of the audience they are catering to. They are also likely to have a strong online presence and use social media platforms to promote their content and connect with fans. They are also likely to be comfortable in their own skin and confident in their sexuality. ${cg} `;
    const ubp = `Man: `;

    const uep = ". ";
    const cbp = `${cn}: `;

    const cep = ". ";
  const ep = `${cn}: `;

  const lm = "Playing...";

  return (
    <div className="App">
      <div style={{left:"0",right:"0",top:"0",bottom:"0",position:"fixed",backgroundSize:"cover",backgroundImage:`url(${bg})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:"-1"}}></div>
      <CharacterSwitchPage />
      <ChatDialog cn={cn} cg={cg} bp={bp} ep={ep} ubp={ubp} uep={uep} cbp={cbp} cep={cep} lm={lm} />
    </div>
  );
}

export default OFModel;
