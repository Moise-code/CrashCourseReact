import { useState, useEffect } from 'react';
import BlogList from './BlogList';


const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'Fantastic beasts and how to catch them!', body: 'Lorem ipsum', author: 'Norbert Dragonneau', id: 1},
    {title: 'Hunting like a pro', body: 'Carried away', author: 'Dean & Sam Winchester', id: 2},
    {title: '10000 ways to mess with timeline', body: 'What did you learn? you bloody bastard!', author: 'Stewie G. Griffin', id: 3},
    {title: 'Build your time machine', body: 'What did you learn? you bloody bastard!', author: 'Stewie G. Griffin', id: 4},
    {title: 'Go to a time you already exist', body: 'What did you learn? you bloody bastard!', author: 'Stewie G. Griffin', id: 5},
  ]);

  const handleDelete = (id) => {
    const newBlog = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlog);
  }

  //useEffect after the component render
  useEffect(() => {
    console.log('I am running after the component has rendered!');
  }, []);
  

  return (
    <div className='home'>
     <BlogList 
      blogs={blogs} 
      title='All Blogs' 
      handleDelete={handleDelete} 
    />
     <BlogList 
      blogs={blogs.filter(blog => blog.author === 'Stewie G. Griffin')} 
      title='Stewie s Blogs'
      handleDelete={handleDelete}
    />

    </div>
  );
}

export default Home;