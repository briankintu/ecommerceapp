import blog from "../../../data/blogs.json"
import BlogCard from "../../../components/Helpers/Cards/BlogCard";
import DataIteration from "../../../components/Helpers/DataIteration";
import PageTitle from "../../../components/Helpers/PageTitle";
import Layout from "../../../components/Layout";
import { useFrappeGetDocList } from "frappe-react-sdk"

export default function Blogs() {
  const { data} = useFrappeGetDocList('Blog Post', {
    fields: ['name', 'title', 'blog_category', 'blogger', 'modified', 'published', 'creation', 'owner', 'content'],
    
})

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="blogs-wrapper w-full-width">
        <div className="title-bar">
          <PageTitle
            title="Our Blogs"
            breadcrumb={[
              { name: "home", path: "/" },
              { name: "blogs", path: "/blogs" },
            ]}
          />
        </div>
      </div>

      <div className="w-full py-[60px]">
        <div className="container-x mx-auto">
          <div className="w-full">
            <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-5">
              <PostsList
                datas={data}
                startLength={0}
                endLength={data.doc.length}
              >
                {({ datas }) => (
                  <div
                    data-aos="fade-up"
                    key={datas.name}
                    className="item w-full"
                  >
                    <BlogCard datas={datas} />
                  </div>
                )}
              </PostsList>
              
            </div>
          </div>
        </div>
      </div> 
       
    </Layout>
  );
}

const PostsList = () => {

  const { data, isLoading, error } = useFrappeGetDocList('Blog Post', {
      fields: ['name', 'title', 'blog_category', 'blogger', 'modified', 'published', 'creation', 'owner', 'content'],
      
  })

//   if(data){
//     {data.map(doc => (
//       console.log(doc.name)
//     ))
    
//   }
// }
}


// if (error) {
//   return <p>There is an Error</p>
// }

// return <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Column 1</th>
//           <th>Column 2</th>
//           <th>Column 3</th>
//         </tr>
//       </thead>
//       {isLoading && <p>LOADING.....</p>}
//       {data && <tbody>
        
      
//         {data.map(doc => (
//           <tr key={doc.name}>
//             <td>{doc.title}</td>
//             <td>{doc.blog_catergory}</td>
//             <td>{doc.blogger}</td>
//             <td>{doc.modified}</td>
//             <td>{doc.owner}</td>
//           </tr>
//         ))}
//       </tbody>}
//     </table> 
// }