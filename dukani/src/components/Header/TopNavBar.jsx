import React from 'react'
import { Link } from "react-router-dom";
import Arrow from "../Helpers/icons/Arrow"
import Selectbox from "../Helpers/Selectbox"

const TopNavBar = ({ className}) => {
  return (
    <>
    <div
        className={`w-full bg-white h-10 border-b border-qgray-border ${
          className || ""
        }`}
      >
        <div className="container-x mx-auto h-full">
          <div className="flex justify-between items-center h-full">
            <div className="topbar-nav">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/">
                    <span className="text-xs leading-6 text-qblack font-500">
                      Account
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/tracking-order">
                    <span className="text-xs leading-6 text-qblack font-500">
                      Track Order
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/faq">
                    <span className="text-xs leading-6 text-qblack font-500">
                      Support
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/become-seller">
                    <span className="text-xs leading-6 text-qblack font-500">
                      Become a Seller
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="https://angalia.aicl.co.tz/login?redirect-to=%2Fapp%2Fwebsite-settings%2FWebsite%2520Settings#login">
                    <span className="text-xs leading-6 text-qblack font-500">
                      Desk-Login
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="topbar-dropdowns sm:block hidden">
              <div className="flex space-x-6">
            
                <div className="currency-select flex space-x-1 items-center">
                   <Selectbox className="w-fit" datas={["TZS", "USD"]} /> 
                  <Arrow className="fill-current qblack" /> 
                </div>
                <div className="language-select flex space-x-1 items-center">
                   <Selectbox className="w-fit" datas={["English", "Swahili"]} /> 
                   <Arrow className="fill-current qblack" /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>

  )
}

export default TopNavBar