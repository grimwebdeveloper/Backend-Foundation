import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default App;
