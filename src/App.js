import './App.css';
import  {Header, Portfolio, Contact, Footer} from './containers';
import  {Navbar, PortfolioItem, Skills} from './components';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
