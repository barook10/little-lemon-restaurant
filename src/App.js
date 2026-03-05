
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
