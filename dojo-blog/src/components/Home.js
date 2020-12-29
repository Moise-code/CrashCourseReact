const Home = () => {
  const handleClick = () => {
    console.log('Hello little fella!');
  }

  const handleClickAgain = (name) => {
    console.log(`Hello ${name}`);
  }

  return (
    <div className='home'>
      <h2>Home Page</h2>
      <button
      onClick={handleClick}
      >Click me</button>
      <button
      onClick={() => handleClickAgain('Amanda')}
      >Click me Again</button>

    </div>
  );
}

export default Home;