import React from 'react';
import HelloWorld from './components/helloworld'
//import CounterExemple from './components/counterExemple'
import Header from './components/Header'
import Footer from './components/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <HelloWorld name='Chris'/>

      <Router>
      <ul>
        <li>
          <Link to='/' className='text-blue-500'>Home</Link>
        </li>
      </ul>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
