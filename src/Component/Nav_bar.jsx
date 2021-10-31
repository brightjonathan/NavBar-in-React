import React, { useState } from 'react'
import { Link } from "react-router-dom";
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import CloseIcon from '@material-ui/icons/Close';
import { Siderbardata } from './Sidebardata'


const Nav_bar = () => {
    
    //creating useState for the close icon
    const [sidebar, setsidebar] = useState(false)

    //function for showing side bar when clicked
    const showsidebar = ()=>{
        setsidebar(!sidebar)
    }

    return (
        <div>
           
            <div className="navbar">
            <Link to="#" className="menu-bars">
            <HorizontalSplitIcon onClick={showsidebar}/>
            </Link>
            </div>
            
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showsidebar}>
                  <li className="navbar-toggle">
                     <Link to="#" className="menu-bars">
                         <CloseIcon />
                     </Link>
                  </li>
                  {Siderbardata.map((e, index)=>{
                       return(
                           <li key={index} className={e.classname}>
                               <Link to={e.path}>
                                   {e.icon}
                                   <span>{e.title}</span>
                               </Link>
                           </li>
                       )
                  })}
                </ul>
            </nav>
            
        </div>
    )
}

export default Nav_bar
