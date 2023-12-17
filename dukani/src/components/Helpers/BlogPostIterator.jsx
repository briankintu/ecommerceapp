
  import { useFrappeGetDocList } from 'frappe-react-sdk';
  import BlogCardTwo from './Cards/BlogCardTwo';
  
  const BlogPostIterator = () => {
    // Fetch data using useFrappeGetDocList
    const { data, loading, error } = useFrappeGetDocList('Blog Post', {
      fields: ['name', 'meta_title', 'blogger', 'blog_intro', 'meta_image' ],
      
  })
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  
    // Render child components with data
  
    if (data) {
      return (
          <div>
            {data.map(doc => (
              <BlogCardTwo key={doc.name} doc={doc} />
            ))}
          </div>
        )
      }
  
    }
    
  
  export default BlogPostIterator;
  
    