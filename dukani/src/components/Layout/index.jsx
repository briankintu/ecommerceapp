import React from 'react'
import { useState } from "react";
import Header from '../Header'
import Footer from '../Footer'
import Drawer from '../Mobile/Drawer'

const Layout = ({children, childrenClasses}) => {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
    
    <Drawer open={drawer} action={() => setDrawer(!drawer)} />
    <div className="w-full overflow-x-hidden">
    <Header drawerAction={() => setDrawer(!drawer)} />
    <div className={`w-full  ${childrenClasses || "pt-[30px] pb-[60px]"}`}>
          {children && children}
        </div>
    <Footer />

    </div>
  
    </>
  )
}

export default Layout