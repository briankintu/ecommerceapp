import React from 'react'
import { useRef } from "react";
import { Link } from "react-router-dom";
import Layout from '../../components/Layout'
import Banner from './Banner'
import ViewMoreTitle from '../../components/Helpers/ViewMoreTitle'
import CategoriesSection from './CategoriesSection'
import DataIteration from '../../components/Helpers/DataIteration'
import blog from '../../data/blogs.json'
import BlogCard from '../../components/Helpers/Cards/BlogCard'
import Star from '../../components/Helpers/icons/Star'
import SimpleSlider from "../../components/Helpers/SliderCom";









const Home = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    dots: false,
    responsive: [
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  const slider = useRef(null);
  const prev = () => {
    slider.current.slickPrev();
  };
  const next = () => {
    slider.current.slickNext();
  };

 
 

  return (
    <>
     <Layout>
     <Banner className="banner-wrapper mb-[46px]" />
     <ViewMoreTitle
        className="my-categories mb-[60px]"
        seeMoreUrl="/all-products"
        categoryTitle="My Market Category"
      >
        <CategoriesSection />

      </ViewMoreTitle>
      <div className="about-page-wrapper w-full">
      <div className="customer-feedback w-full bg-white py-[60px]">
        
 
      <div className="blog-post-wrapper w-full mb-[30px]">
          <div className="container-x mx-auto">
            <div className="blog-post-title flex justify-center items-cente mb-[30px]">
              <h1 className="text-3xl font-semibold text-qblack">
                Our Projects
              </h1>
            </div>

            <div className="blogs-wrapper w-full">
              <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-5">
                <DataIteration datas={blog.blogs} startLength={0} endLength={2}>
                  {({ datas }) => (
                    <div
                      data-aos="fade-up"
                      key={datas.id}
                      className="item w-full"
                    >
                      <BlogCard datas={datas} />
                    </div>
                  )}
                </DataIteration>
              </div>
            </div>
          </div>
        </div>


        <div className="title flex justify-center mb-5">
            <h1 className="text-[30px] font-semibold text-qblack">
              Customers Feedback
            </h1>
          </div>
          <div className="feedback-slider-wrapper w-vw relative overflow-hidden">
            <SimpleSlider selector={slider} settings={settings}>
              <div className="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="rating flex space-x-1 items-center">
                    <div className="flex items-center">
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                    </div>
                    <span className="text-[13px] text-qblack">(5.0)</span>
                  </div>
                  <div className="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an into the
                    find unknown printer took a galley of type and scrambled it
                    to make a type inot the specimen book. It has survived not
                    only five centuries but also the on leap into find it a
                    electronic typesetting, remaining end to make it.
                  </div>
                  <div className="flex items-center space-x-2.5 mt-3">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      {/* <img
                        src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                        alt="user"
                      /> */}
                    </div>
                    <div>
                      <p className="text-[18px] text-qblack font-medium">
                        Ridoy Rock
                      </p>
                      <p className="text-qgraytwo text-[13px]">London,UK</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="rating flex space-x-1 items-center">
                    <div className="flex items-center">
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                    </div>
                    <span className="text-[13px] text-qblack">(5.0)</span>
                  </div>
                  <div className="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an into the
                    find unknown printer took a galley of type and scrambled it
                    to make a type inot the specimen book. It has survived not
                    only five centuries but also the on leap into find it a
                    electronic typesetting, remaining end to make it.
                  </div>
                  <div className="flex items-center space-x-2.5 mt-3">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      {/* <img
                        src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                        alt="user"
                      /> */}
                    </div>
                    <div>
                      <p className="text-[18px] text-qblack font-medium">
                        Ridoy Rock
                      </p>
                      <p className="text-qgraytwo text-[13px]">London,UK</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="rating flex space-x-1 items-center">
                    <div className="flex items-center">
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                    </div>
                    <span className="text-[13px] text-qblack">(5.0)</span>
                  </div>
                  <div className="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an into the
                    find unknown printer took a galley of type and scrambled it
                    to make a type inot the specimen book. It has survived not
                    only five centuries but also the on leap into find it a
                    electronic typesetting, remaining end to make it.
                  </div>
                  <div className="flex items-center space-x-2.5 mt-3">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      {/* <img
                        src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                        alt="user"
                      /> */}
                    </div>
                    <div>
                      <p className="text-[18px] text-qblack font-medium">
                        Ridoy Rock
                      </p>
                      <p className="text-qgraytwo text-[13px]">London,UK</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="rating flex space-x-1 items-center">
                    <div className="flex items-center">
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                    </div>
                    <span className="text-[13px] text-qblack">(5.0)</span>
                  </div>
                  <div className="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an into the
                    find unknown printer took a galley of type and scrambled it
                    to make a type inot the specimen book. It has survived not
                    only five centuries but also the on leap into find it a
                    electronic typesetting, remaining end to make it.
                  </div>
                  <div className="flex items-center space-x-2.5 mt-3">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      {/* <img
                        src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                        alt="user"
                      /> */}
                    </div>
                    <div>
                      <p className="text-[18px] text-qblack font-medium">
                        Ridoy Rock
                      </p>
                      <p className="text-qgraytwo text-[13px]">London,UK</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="rating flex space-x-1 items-center">
                    <div className="flex items-center">
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                    </div>
                    <span className="text-[13px] text-qblack">(5.0)</span>
                  </div>
                  <div className="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an into the
                    find unknown printer took a galley of type and scrambled it
                    to make a type inot the specimen book. It has survived not
                    only five centuries but also the on leap into find it a
                    electronic typesetting, remaining end to make it.
                  </div>
                  <div className="flex items-center space-x-2.5 mt-3">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      {/* <img
                        src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                        alt="user"
                      /> */}
                    </div>
                    <div>
                      <p className="text-[18px] text-qblack font-medium">
                        Ridoy Rock
                      </p>
                      <p className="text-qgraytwo text-[13px]">London,UK</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="rating flex space-x-1 items-center">
                    <div className="flex items-center">
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                    </div>
                    <span className="text-[13px] text-qblack">(5.0)</span>
                  </div>
                  <div className="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an into the
                    find unknown printer took a galley of type and scrambled it
                    to make a type inot the specimen book. It has survived not
                    only five centuries but also the on leap into find it a
                    electronic typesetting, remaining end to make it.
                  </div>
                  <div className="flex items-center space-x-2.5 mt-3">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      {/* <img
                        src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                        alt="user"
                      /> */}
                    </div>
                    <div>
                      <p className="text-[18px] text-qblack font-medium">
                        Ridoy Rock
                      </p>
                      <p className="text-qgraytwo text-[13px]">London,UK</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="rating flex space-x-1 items-center">
                    <div className="flex items-center">
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                    </div>
                    <span className="text-[13px] text-qblack">(5.0)</span>
                  </div>
                  <div className="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an into the
                    find unknown printer took a galley of type and scrambled it
                    to make a type inot the specimen book. It has survived not
                    only five centuries but also the on leap into find it a
                    electronic typesetting, remaining end to make it.
                  </div>
                  <div className="flex items-center space-x-2.5 mt-3">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      {/* <img
                        src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                        alt="user"
                      /> */}
                    </div>
                    <div>
                      <p className="text-[18px] text-qblack font-medium">
                        Ridoy Rock
                      </p>
                      <p className="text-qgraytwo text-[13px]">London,UK</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="rating flex space-x-1 items-center">
                    <div className="flex items-center">
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                    </div>
                    <span className="text-[13px] text-qblack">(5.0)</span>
                  </div>
                  <div className="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an into the
                    find unknown printer took a galley of type and scrambled it
                    to make a type inot the specimen book. It has survived not
                    only five centuries but also the on leap into find it a
                    electronic typesetting, remaining end to make it.
                  </div>
                  <div className="flex items-center space-x-2.5 mt-3">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      {/* <img
                        src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                        alt="user"
                      /> */}
                    </div>
                    <div>
                      <p className="text-[18px] text-qblack font-medium">
                        Ridoy Rock
                      </p>
                      <p className="text-qgraytwo text-[13px]">London,UK</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="rating flex space-x-1 items-center">
                    <div className="flex items-center">
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                      <Star w="20" h="20" />
                    </div>
                    <span className="text-[13px] text-qblack">(5.0)</span>
                  </div>
                  <div className="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an into the
                    find unknown printer took a galley of type and scrambled it
                    to make a type inot the specimen book. It has survived not
                    only five centuries but also the on leap into find it a
                    electronic typesetting, remaining end to make it.
                  </div>
                  <div className="flex items-center space-x-2.5 mt-3">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      {/* <img
                        src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                        alt="user"
                      /> */}
                    </div>
                    <div>
                      <p className="text-[18px] text-qblack font-medium">
                        Ridoy Rock
                      </p>
                      <p className="text-qgraytwo text-[13px]">London,UK</p>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleSlider>

            <div className="slider-btns flex justify-center mt-[40px]">
              <div className="flex space-x-5 item-center">
                <button
                  onClick={prev}
                  type="button"
                  className="w-[48px] h-[48px] rounded-full overflow-hidden flex justify-center items-center border border-qyellow text-qyellow focus:bg-qyellow focus:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={next}
                  type="button"
                  className="w-[48px] h-[48px] rounded-full overflow-hidden flex justify-center items-center border border-qyellow text-qyellow focus:bg-qyellow focus:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>



        </div>
        </div>
     </Layout>
    </>
  )
}

export default Home