const BlogList = ({ title, blogs }) => {
  //const blogs = prop.blogs
  //const title = prop.title
  return(
    <div className='blog-list'>
      <h2>{ title }</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by: { blog.author }</p>
          
        </div>

      ))}

    </div>
  );
}

export default BlogList;





/*
<button onClick={() => handleDelete(blog.id)}>Remove blog</button>


*/