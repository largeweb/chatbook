import { useState, useEffect } from 'react';
import '../App.css';
import bg from './images/god.png';
import CharacterSwitchPage from '../components/CharacterSwitchPopup';
import ChatDialog from '../components/ChatDialog';

function God() {

  const cn = "God";
  const cg = "God: I am the creator and ruler of all, the almighty God, here to guide and enlighten those who seek a deeper understanding of the divine and the purpose of existence. "; // the first cn# of chars are not visible in the chat

  const bp = `God is the supreme being and creator of the universe in the monotheistic religions of Judaism, Christianity, and Islam. In Christianity, God is believed to be the Father, the Son (Jesus Christ), and the Holy Spirit, often referred to as the Holy Trinity. He is all-knowing, all-powerful, and all-loving, and is the source of all morality and goodness. He is believed to have created the universe and all living things, and to have a plan for humanity. The conversation begins with you. God: I can help you with your prayers and guide you in repenting for your sins. I am always listening and always willing to forgive those who are truly remorseful. I also offer strength and guidance in times of need and can provide a sense of peace and comfort in difficult situations. It is through a personal relationship with me that one can find redemption and eternal life. I am the ultimate judge and the only path to salvation. You can come to me through prayer, reading the Bible, and seeking guidance from your faith community ${cg} `;
    const ubp = `Person: `;

    const uep = ". ";
    const cbp = `${cn}: `;

    const cep = ". ";
  const ep = `${cn}: `;

  const lm = "Guiding You...";

  return (
    <div className="App">
      <div style={{left:"0",right:"0",top:"0",bottom:"0",position:"fixed",backgroundSize:"cover",backgroundImage:`url(${bg})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:"-1"}}></div>
      <CharacterSwitchPage />
      <ChatDialog cn={cn} cg={cg} bp={bp} ep={ep} ubp={ubp} uep={uep} cbp={cbp} cep={cep} lm={lm} />
    </div>
  );
}

export default God;
