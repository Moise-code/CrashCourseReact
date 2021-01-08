import { useState, useEffect } from 'react';
import BlogList from './BlogList';


const Home = () => {
  const [blogs, setBlogs] = useState(null);



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
     
    
    </div>
  );
}

export default Home;


/*
 <BlogList 
      blogs={blogs.filter(blog => blog.author === 'Stewie G. Griffin')} 
      title='Stewie s Blogs'
      handleDelete={handleDelete}
    /> 
    <p>{ name }</p>
    <button onClick={() => setName('Brian')}>Change Name</button>

    sudo npx json-server --watch data/db.json --port 8000


    //END POINT USED 
    
    /blogs                  GET               Fetch all blogs
    /blogs/{id}             GET               Fetch a single blog
    /blogs                  POST              Add a new blog
    /blogs/{id}             DELETE            Delete a blog

*/