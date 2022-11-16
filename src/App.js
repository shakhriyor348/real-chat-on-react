import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
        <Navbar />
        <AppRouter />
    </Router>
  );
}

export default App;
