import React from 'react';
import HelloWorld from './components/helloworld'
//import CounterExemple from './components/counterExemple'
import Header from './components/Header'
import Footer from './components/footer';



function App() {
  return (
    <div>
      <Header />
      <HelloWorld name='Chris'/>
      <Footer/>
    </div>
  );
}

export default App;
