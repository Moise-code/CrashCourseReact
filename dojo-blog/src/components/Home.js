import { useState, useEffect } from 'react';
import BlogList from './BlogList';


const Home = () => {
  const [blogs, setBlogs] = useState(null);

  //useEffect after the component render
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBlogs(data);
      });

  }, []);
  

  return (
    <div className='home'>
    {
      blogs && <BlogList blogs={blogs} title='All Blogs' />
    } 
     
    
    </div>
  );
}

export default Home;


/*
const handleDelete = (id) => {
    const newBlog = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlog);
  }

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