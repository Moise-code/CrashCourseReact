import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('Amanda Tapping');
  const [age, setAge] = useState('52')

  const handleClick = () => {
    setName('Helene Magnus');
    setAge('200');

  }

  

  return (
    <div className='home'>
      <h2>Home Page</h2>
      <p>{name} is {age} years old!</p>
      <button
      onClick={handleClick}
      >Click me</button>
      

    </div>
  );
}

export default Home;