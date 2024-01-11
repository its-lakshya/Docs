import {useState, useEffect} from "react";
import {navbarData} from "../../dataForPage/DummyData";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-scroll";
import { navbar } from "@material-tailwind/react";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-2 justify-items-center items-center content-center w-full">
          <div>
            <img className="h-10" src={logo} alt="logo-img"></img>
          </div>
          <div className='flex flex-row items-center w-full'>{navbarData.map((item) => {
            return (
              <div key = {item.id}>
                <Link to={item.link} spy={true} smooth={true} hashSpy={true} offset={50} duration={500} isDynamic={true}
                ignoreCancelEvents={false} spyThrottle={500} className='cursor-pointer text-dark font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-blue-500'
                >
                  {item.name}
                </Link>
              </div>
            )
          })}</div>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
