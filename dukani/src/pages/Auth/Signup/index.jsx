import { useState } from "react";
import { useForm } from "react-hook-form";
import InputCom from "../../../components/Helpers/InputCom";
import Layout from "../../../components/Layout";
import Thumbnail from "./Thumbnail";
import { useFrappeCreateDoc } from "frappe-react-sdk";
import { isEmailValid } from "../../../utils/validations";

export default function Signup() {
  const [ error, setError] = useState(null);
  const [checked, setValue] = useState(false);


  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const { createDoc } = useFrappeCreateDoc()

  const onSubmit = (data) => {
      createDoc('User', data)
      .then(() => {
          reset()
          alert("Please check your email , to finish your registration!")
          
      })
  }


  const rememberMe = () => {
    setValue(!checked);
  };




  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="login-page-wrapper w-full py-10">
        <div className="container-x mx-auto">
          <div className="lg:flex items-center relative">
            <div className="lg:w-[572px] w-full lg:h-[783px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
              <div className="w-full">
                <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
                  <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
                    Create Account
                  </h1>
                  <div className="shape -mt-6">
                    <svg
                      width="354"
                      height="30"
                      viewBox="0 0 354 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
                        stroke="#FFBB38"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} >
                <div className="input-area">
                  <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                  <div className="input-com w-full h-full">
                  <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
                    First Name*
                  </h6>
                  <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                  <input className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                    
                    type="text" {...register("first_name", {
                      
                      required: "true"
                    })}
                  
                    placeholder="Enter First Name"
                    aria-invalid={errors.first_name ? "true" : "false"}
                    name="first_name"
                   
                    
                  />
                   {errors.first_name?.type === "required"
                                                && <p role="alert">{errors.first_name.message}</p>}
                  </div>


                    </div>

                    <div className="input-com w-full h-full">
                  <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
                    Last Name*
                  </h6>
                  <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                  <input className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                    
                    type="text" {...register("last_name", {
                      
                      required: "true"
                    })}
                  
                    placeholder="Enter Last Name"
                    aria-invalid={errors.first_name ? "true" : "false"}
                    name="last_name"
                   
                    
                  />
                   {errors.last_name?.type === "required"
                                                && <p role="alert">{errors.last_name.message}</p>}
                  </div>


                    </div>


                    
                  </div>
                  <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                  <div className="input-com w-full h-full">
                  <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
                    Email*
                  </h6>
                  <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                  <input className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                    
                    type="email" {...register("email", {
                      validate: (email) => isEmailValid(email) || "Please enter a valid email address. ",
                      required: "Email Address is Required"
                    })}
                    name="email"
                    placeholder="example@gmail.com"
                    autoComplete="email"
                    required
                    tabIndex={0}
                    aria-invalid={errors.email ? "true" : "false"}
                    
                   
                    
                  />
                   {errors.email?.type === "required"
                                                && <p role="alert">{errors.email.message}</p>}
                  </div>


                    </div>

                    <div className="input-com w-full h-full">
                  <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
                    Phone/ Mobile*
                  </h6>
                  <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                  <input className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                    
                    type="t" {...register("mobile_no", {
                      
                      required: "true"
                    })}
                  
                    placeholder="0213 *********"
                    aria-invalid={errors.mobile_no ? "true" : "false"}
                    name="mobile_no"
                   
                    
                  />
                   {errors.mobile_no?.type === "required"
                                                && <p role="alert">{errors.mobile_no.message}</p>}
                  </div>


                    </div>
                   
                  </div>


                  <div className="input-item mb-5">
                  <div className="input-com w-full h-full">
                  <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
                    Address*
                  </h6>
                  <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                  <input className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                    
                    type="text" {...register("location", {
                      
                      required: "true"
                    })}
                  
                    placeholder="Your address Here"
                    aria-invalid={errors.location ? "true" : "false"}
                    name="location"
                   
                    
                  />
                   {errors.mobile_no?.type === "required"
                                                && <p role="alert">{errors.location.message}</p>}
                  </div>


                    </div>
                    {/* <InputCom
                      placeholder="Your address Here"
                      label="Address*"
                      name="address"
                      type="text"
                      inputClasses="h-[50px]"
                    /> */}
                  </div>
                  
                  <div className="forgot-password-area mb-7">
                    <div className="remember-checkbox flex items-center space-x-2.5">
                      <button
                        onClick={rememberMe}
                        type="button"
                        className="w-5 h-5 text-qblack flex justify-center items-center border border-light-gray"
                      >
                        {checked && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                      <span
                        onClick={rememberMe}
                        className="text-base text-black"
                      >
                        I agree all
                        <span className="text-qblack">terms and condition</span> &nbsp;
                         in Solar Planet.
                      </span>
                    </div>
                  </div>
                  <div className="signin-area mb-3">
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="black-btn text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
                      >
                        <span>Create Account</span>
                      </button>
                    </div>
                  </div>

                  <div className="signup-area flex justify-center">
                    <p className="text-base text-qgraytwo font-normal">
                      Alrady have an Account?
                      <a href="/ingia" className="ml-2 text-qblack">
                        Log In
                      </a>
                    </p>
                  </div>
                </div>
                </form>
              </div>
            </div>
            <div className="flex-1 lg:flex hidden transform scale-60 xl:scale-100   xl:justify-center">
              <div
                className="absolute xl:-right-20 -right-[138px]"
                style={{ top: "calc(50% - 258px)" }}
              >
                <Thumbnail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
