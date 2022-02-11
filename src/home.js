import styled from 'styled-components';
import second from './images/second.png';
import first from './images/first.png';
import logo from './images/img1.png';
import letter from './images/img2.png';

export default function Home() {
  return (
    <Container>
      <Top>
        <Logo>
          <img src={logo} alt='logo' />
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
      <SecondMessage></SecondMessage>
      <Bottom></Bottom>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh; // alterar
  width: 100vw; // alterar
  background: pink;
`;

const Top = styled.div`
  height: 110px;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
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
`;

const SecondMessage = styled.div`
  height: 1024px;
  width: 100%;
  background: #506fa9;
`;

const Bottom = styled.div`
  height: 226px;
  width: 100%;
  background: #e9e9e9;
`;
