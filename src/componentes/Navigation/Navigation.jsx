import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TfiDashboard } from "react-icons/tfi";
import { FaBook } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { RiInboxArchiveLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import img from '../../assets/img/canvas.png'
import { BiHelpCircle } from "react-icons/bi";




const navItems = [
  { name: "Dashboard", icon: <TfiDashboard />, path: "/" },
  { name: "Courses", icon: <FaBook />},
  { name: "Calendar", icon: <SlCalender />, path: "/calendar" },
  { name: "Inbox", icon: <RiInboxArchiveLine />},
  { name: "Help", icon: <BiHelpCircle />},
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [liveSection, setLiveSection] = useState(navItems[0]);
  

  const handleClick = (e, item) => {
    e.preventDefault();
    setOpen(false);
    setLiveSection(item);
    navigate(item.path);
  }

 
  
  return (
    <>
      
      <div className="md:hidden bg-[#334451] w-full px-4 py-3 flex items-center">
      {!open && 
      <button
        className="p-2 z-10"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        
      </button>
}
      </div>


      <nav
        className={`
          fixed top-0 left-0 h-full bg-white md:bg-[#334451] shadow-lg z-40
          flex flex-col transition-all duration-300
           w-full md:w-12 lg:w-24
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        {open &&
        <> 
        <RxCross1 className={`fixed top-5 right-5 text-black`} onClick={()=>setOpen(false)} />

        <div className="px-4 py-4">
        <img src={img} className="h-16 w-auto" alt="Canvas Logo" />
        </div>
        </>}

        

        
        <div className={` ${open? "": "hidden"} flex-1 md:flex gap-2 pt-4 md:pt-0  flex-col`}>
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                to={item.path}
                className={`
                  flex visited:border-2 flex-row  ml-8 md:mx-0  md:flex-col cursor-pointer mb-4 md:mb-0 items-center gap-4 md:gap-1 py-2 px-2  transition-colors
                 ${liveSection===item? "bg-white":"hover:bg-[#273540] "}
                `}
                onClick={(e)=>
                  handleClick(e, item)
                  }
              >
                <span className={`text-[#2B7ABC] ${liveSection===item? "": "md:text-white"} text-3xl md:text-2xl lg:text-3xl`}>{item.icon}</span>
                <span className={`text-[#0E68B3] ${liveSection===item? "": "md:text-white"} md:hidden lg:flex text-lg md:text-sm text-center`}>{item.name}</span>
              </Link>
              
            </div>
          ))}
        </div>
        

        
      </nav>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navigation;