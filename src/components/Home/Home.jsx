// import Nav from './components/Nav/Nav';
import Slider from '../Slider/Slider';
import News from '../News/News';
import About from '../About/About';
import NewsLetter from '../NewsLetter/NewsLetter';
import Contact from '../Contact/Contact';
import Brands from '../Brands/Brands';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import './Home.css';

function Home(){
    return(
        <div className='home-container' id='home'>

            {/* <Nav />*/}
            <Slider />
            <News />
            <About />
            <NewsLetter /> 
            <Contact />
            <Brands />
            <Footer />

        </div>
    )
}

export default Home;