import image1 from './images/logo.png';
import './pag1.css';
import tachyons from 'tachyons';
import 'material-design-icons';
import logo1 from './images/email.png';
import logo2 from './images/facebook.png';
import logo3 from './images/instagram.png';
import logo4 from './images/twitter.png';
import logo5 from './images/youtube.png';
import logo6 from './images/linkedin.png';
import logo7 from './images/spotify.png';

function pag1({name,photoshop,youtube,support,telegram,grow,recommend,hire,whatsapp}) {
  return (
    <div className="div1">
      <img src={image1} className="logo grow"></img>
      <p className='mb0 white name'>{name}</p>
      <p className="f5 white">GRAPHIC DESIGNER</p>
      { (photoshop!="") &&
      <button className="br3 btn btn1 bg-white tc grow"><a href={photoshop} className="black">PHOTOSHOP COURSE</a></button>
      }
      { (youtube!="") &&
      <button className="br3 btn btn2 tc white grow"><a href={youtube} className="white">YOUTUBE</a></button>
      }
      { (support!="") &&
      <button className="br3 btn btn3 tc white grow"><a href={support} className="white">SUPPORT ME</a></button>
      }
      { (telegram!="") &&
      <button className="br3 btn btn4 tc grow white"><a href={telegram} className="white">TELEGRAM CHANNEL</a></button>
      }
      { (grow!="") &&
      <button className="br3 btn btn5 tc grow white"><a href={grow} className="white">HOW TO GROW YOUR INSTAGRAM</a></button>
      }
      { (recommend!="") &&
      <button className="br3 btn btn6 tc grow"><a href={recommend} className="black">RECOMMENDED LAPTOPS</a></button>
      }
      { (hire!="") &&
      <button className="br3 btn btn7 tc grow white"><a href={hire} className="white">HIRE ON FIVERR</a></button>
      }
      { (whatsapp!="") &&
      <button className="br3 btn btn8 \tc grow white"><a href={whatsapp} className="white">WHATSAPP GROUP</a></button>
      }
      <div className="pa4">
        <a href="#"><img src={logo1} className="logos" alt=""></img></a>
        <a href="#"><img src={logo2} className="logos" alt=""></img></a>
        <a href="#"><img src={logo3} className="logos" alt=""></img></a>
        <a href="#"><img src={logo4} className="logos" alt=""></img></a>
        <a href="#"><img src={logo5} className="logos" alt=""></img></a>
        <a href="#"><img src={logo6} className="logos" alt=""></img></a>
        <a href="#"><img src={logo7} className="logos" alt=""></img></a>
      </div>
      <p className="f6 tc white">{name}</p>
    </div>
  );
}

export default pag1;