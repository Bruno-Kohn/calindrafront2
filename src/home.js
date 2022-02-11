import styled from 'styled-components';
import second from './images/second.png';
import first from './images/first.png';
import logo from './images/img1.png';
import letter from './images/img2.png';
import { BsYoutube, BsTwitter, BsThreeDotsVertical } from 'react-icons/bs';
import { CgFacebook } from 'react-icons/cg';

export default function Home() {
  return (
    <Container>
      <Top>
        <BsThreeDotsVertical class='dots' size='40px' color='#e2e0b8' />
        <Logo>
          <img src={logo} alt='logo' className='logo' />
          <img src={letter} alt='letter' className='letter' />
        </Logo>
        <Routes>
          <h1>ABOUT US</h1>
          <h1>MODELS</h1>
          <h1>GUARANTEE</h1>
        </Routes>
      </Top>
      <FirstMessage>
        <h1>Measuring everything</h1>
        <img src={first} alt='first' />
      </FirstMessage>
      <SecondMessage>
        <Letters>
          <h1>We are Leader in Measure Tapes</h1>
          <h2>
            There are 5x the circumference of planet earth in metric tapes.
          </h2>
        </Letters>
        <img src={second} alt='second' />
      </SecondMessage>
      <Bottom>
        <Follow>
          <h1>Follow Us</h1>
          <div class='social'>
            <span class='dot'>
              <BsYoutube size='20px' color='#716565' />
            </span>
            <span class='dot'>
              <CgFacebook size='20px' color='#716565' />
            </span>
            <span class='dot'>
              <BsTwitter size='20px' color='#716565' />
            </span>
          </div>
        </Follow>
        <Contact>
          <h1>Contact</h1>
          <h2>2490 Leisure Lane</h2>
          <h2>San Luis Obispo</h2>
          <h2>California</h2>
        </Contact>
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100vw;
  background: pink;
`;

const Top = styled.div`
  height: 110px;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;

  .dots {
    display: none;
  }

  @media (max-width: 900px) {
    justify-content: center;
    .letter {
      display: none;
    }
    .dots {
      display: inherit;
      position: fixed;
      left: 10px;
      top: 35px;
    }
  }
`;

const Logo = styled.div`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  margin-left: 40px;

  img {
    height: 90px;
    cursor: pointer;
  }

  .letter {
    height: 70px;
    margin-left: 15px;
  }

  @media (max-width: 900px) {
    margin-left: 0px;
    img {
      height: 50px;
    }
  }
`;

const Routes = styled.div`
  height: auto;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 40px;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 16.2px;
  letter-spacing: 5.4px;
  color: #846219;

  h1 {
    cursor: pointer;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const FirstMessage = styled.div`
  height: 1024px;
  width: 100%;
  background: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    width: 348px;
    height: 192px;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 82.2px;
    font-weight: bold;
    color: #716565;
    line-height: 96px;
  }

  img {
    height: 335px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    height: auto;
    padding: 60px 0px;

    h1 {
      font-size: 50px;
      width: auto;
      line-height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 25px;
    }

    img {
      width: 90%;
      height: auto;
    }
  }
`;

const SecondMessage = styled.div`
  height: 1024px;
  background: #506fa9;
  display: flex;
  position: relative;

  img {
    opacity: 0.5;
    height: 689px;
    position: absolute;
    right: 0;
    top: 130px;
  }

  @media (max-width: 1100px) {
    height: 700px;
    img {
      height: 180px;
      top: 380px;
    }
  }
`;

const Letters = styled.div`
  width: 600px;
  position: absolute;
  bottom: 200px;
  left: 200px;

  h1 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 69.2px;
    font-weight: bold;
    color: #fff;
    line-height: 81px;
    margin-bottom: 40px;
  }

  h2 {
    font-family: 'Inter', sans-serif;
    font-size: 48.2px;
    color: #fff;
    line-height: 56px;
  }

  @media (max-width: 1100px) {
    width: 90%;
    height: auto;
    bottom: 390px;
    left: 0px;

    h1 {
      font-size: 40px;
      margin-left: 20px;
      margin-right: 20px;
      line-height: 40px;
    }

    h2 {
      font-size: 20px;
      margin-left: 20px;
      margin-right: 20px;
      line-height: 25px;
    }
  }
`;

const Bottom = styled.div`
  height: 226px;
  width: 100%;
  background: #e9e9e9;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    height: auto;
    flex-direction: column;
  }
`;

const Follow = styled.div`
  height: 90px;
  width: auto;
  margin-left: 200px;

  h1 {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 27.2px;
    color: #716565;
    margin-bottom: 20px;
  }

  .social {
    display: flex;
  }

  .dot {
    height: 40px;
    width: 40px;
    border: 3px solid #716565;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  }

  @media (max-width: 1100px) {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
  }
`;

const Contact = styled.div`
  width: auto;
  margin-left: 400px;

  h1 {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 27.2px;
    color: #716565;
    margin-bottom: 20px;
  }

  h2 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 16.2px;
    color: #716565;
    margin-bottom: 3px;
  }

  @media (max-width: 1100px) {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
  }
`;
