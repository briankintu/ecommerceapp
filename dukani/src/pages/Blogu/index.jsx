import BlogPostIterator from "../../components/Helpers/BlogPostIterator"
import PageTitle from "../../components/Helpers/PageTitle";
import Layout from "../../components/Layout";



export default function Blogu() {

  return (
    <Layout childrenClasses="pt-0 pb-0">
     <div className="blogs-wrapper w-full-width">
        <div className="title-bar">
          <PageTitle
            title="Our Blogs"
            breadcrumb={[
              { name: "home", path: "/" },
              { name: "blogu", path: "/blogu" },
            ]}
          />
        </div>
      </div>

      <div className="w-full py-[60px]">
        <div className="container-x mx-auto">
          <div className="w-full">
            <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-5">
              <BlogPostIterator /> 
            </div>
          </div>
        </div>
      </div>
       
    </Layout>
  );
}