import { Link } from 'react-router-dom';

import './App.css';
import {AppRouter} from "./router/AppRouter";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/" data-testid="home-link">Home</Link></li>
            <li><Link to="/about" data-testid="about-link">About</Link></li>
            <li><Link to="/users" data-testid="users-link">Users</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <AppRouter />
      </main>
    </>
);
}

export default App;
