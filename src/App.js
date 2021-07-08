import './App.css';
import Header from './components/Header/Header'
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer'
import GoTop from './components/GoTop/GoTop';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
      <GoTop/> 
      
    </div>
  );
}

export default App;
