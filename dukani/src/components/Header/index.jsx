import { useContext } from 'react'
import ThinBag from '../Helpers/icons/ThinBag'
import TopNavBar from './TopNavBar'
import Middlebar from './MiddleBar'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { UserContext } from '../../utils/auth/UserProvider'
import { useUserData } from '../../hooks/useUserData'


const Header = ({className, drawerAction}) => {
  const userData = useUserData()
  const { logout, currentUser  } = useContext(UserContext)
  
  return (
    <header className={` ${className || ""} header-section-wrapper relative`}>
        <TopNavBar className="quomodo-shop-top-bar"/>
        <Middlebar className="quomodo-shop-middle-bar lg:block hidden" />
        <div className="quomodo-shop-drawer lg:hidden block w-full h-[60px] bg-white">
        <div className="w-full h-full flex justify-between items-center px-5">
        <div onClick={drawerAction}>
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          {/* Logo <div>
            <a href="/">
              <img
                width="152"
                height="36"
                src=
                alt="logo"
              />
            </a>
          </div> */}
          { currentUser ? 
          <div className="become-seller-btn  w-[60px] h-[40px]" onClick={logout}>
            
            <div className="yellow-btn flex justify-center items-center cursor-pointer">
              
                <span className="text-xs font-500">Log Out</span>
                <span>
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.08984"
                      width="6.94106"
                      height="1.54246"
                      transform="rotate(45 1.08984 0)"
                    />
                    <rect
                      x="6"
                      y="4.9082"
                      width="6.94106"
                      height="1.54246"
                      transform="rotate(135 6 4.9082)"
                    />
                  </svg>
                </span>
              
            </div>
          
        </div> : 
        <><div className="become-seller-btn relative  w-[60px] h-[30px]">
                <Link to="/ingia">
                  <div className="yellow-btn flex  cursor-pointer relative">
                    <span className="text-xs font-500">Login</span>
                    <span>
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.08984"
                          width="6.94106"
                          height="1.54246"
                          transform="rotate(45 1.08984 0)" />
                        <rect
                          x="6"
                          y="4.9082"
                          width="6.94106"
                          height="1.54246"
                          transform="rotate(135 6 4.9082)" />
                      </svg>
                    </span>

                  </div>
                </Link>
              </div><div className="become-seller-btn relative  w-[63px] h-[30px]">
                  <Link to="/jiunge">
                    <div className="yellow-btn flex  cursor-pointer">

                      <span className="text-xs font-500">Sign Up</span>
                      <span>
                        <svg
                          width="6"
                          height="10"
                          viewBox="0 0 6 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="1.08984"
                            width="6.94106"
                            height="1.54246"
                            transform="rotate(45 1.08984 0)" />
                          <rect
                            x="6"
                            y="4.9082"
                            width="6.94106"
                            height="1.54246"
                            transform="rotate(135 6 4.9082)" />
                        </svg>
                      </span>

                    </div>
                  </Link>
                </div></>

         }
          <div className="cart relative cursor-pointer">
            <a href="/cart">
              <span>
                <ThinBag />
              </span>
            </a>
            <span className="w-[18px] h-[18px] rounded-full bg-qh2-green absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
              3
            </span>
          </div>
          </div>
        </div>
        <Navbar className="quomodo-shop-nav-bar lg:block hidden" />


    </header>
    
  )
}

export default Header