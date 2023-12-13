import { useGetbannerleftByNameQuery } from "../../Redux/bannerleft";

export default function Banner({ className }) { 
  const { data, error, isLoading } = useGetbannerleftByNameQuery('bannerlefts?populate=*')

  if(data){
    console.log(data)
  }

 
if (data) {
    return (
      <>
        <div className={`w-full ${className || ""}`}>
          <div className="container-x mx-auto">
            <div className="main-wrapper w-full">
              <div className="banner-card xl:flex xl:space-x-[30px] xl:h-[600px]  mb-[30px]">
                <div data-aos="fade-right" className="xl:w-1/2 w-full h-full">
                  <a href="/single-product">
                  

                      <picture>
                      {/* <source
                       
                        media="(min-width:1025px)"
                        srcSet={`http://localhost:1337/uploads/solarpanel_8a3be2b665.png`}
                      />
                     */}
                      {data.data.map((item) =>{ 
                        <img
                        key={item}
                        src={`http://localhost:1337${item.attributes.images.data[0].attributes.url}`}
                        alt=""
                        className="w-full max-w-full h-auto object-cover"
                      />

                      }) }
                        
                    </picture> 


                    
                   
                  </a>
                </div>
                <div
                  data-aos="fade-left"
                  className="w-1/2 flex xl:flex-col flex-row  xl:space-y-[30px] h-full"
                >
                  <div className="w-full ">
                    <a href="/single-product">
                      {/* <img
                        src={`${process.env.PUBLIC_URL}/assets/images/solarbulbbanner.png`}
                        alt=""
                        className="w-full h-full"
                      /> */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
                
}
}
  