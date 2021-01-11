import { useState, useEffect } from 'react';
import BlogList from './BlogList';


const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setLoading] = useState(true);

  //useEffect render after the component render
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        if (!res.ok){
          throw Error('Couldn\'t fetch the data for that resource')
        }
        return res.json()
      })
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error.message);
      })
      

  }, []);
  

  return (
    <div className='home'>
      { isLoading && <div className='loader'>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title='All Blogs' /> } 
     
    
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