import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className='home'>
      { error && <div>{ error }</div> }
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