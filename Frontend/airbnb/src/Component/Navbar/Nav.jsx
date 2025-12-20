import React from "react";
import "./Nav.css";
import logo from "../../assets/p.jpg";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { MdOutlineWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
import { MdOutlinePool } from "react-icons/md";
import { LuTentTree } from "react-icons/lu";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaTreeCity } from "react-icons/fa6";
import { Link } from "react-router";
import { NavLink } from "react-router";

function Nav() {
  let [visible, setVisible] = useState(false);

  return (
    <div id="Nav">
      {visible ? (
        <div className="hamburger">
          <Link to={"/login"}><div className="ham1">Login</div></Link>
          <Link to={"/signup"}><div className="ham1">SignUp</div></Link>
           <Link to={"/listing"}><div className="ham1">List Your Home</div></Link>
          <Link to={"/contact"}><div className="ham1">help center</div></Link>
        </div>
      ) : (
        <div></div>
      )}
      <div className="nav1">
        <Link to={""}><div className="logo">
          <img src={logo} alt="logo" width={"50px"} />
          <h1>PropRent</h1>
        </div></Link>
        <div className="search">
          <input type="text" placeholder="search destination" />
          <button>
            <span>Search</span>
            <IoSearch />
          </button>
        </div>

        <div className="ham">
          <Link to={"/listing"}><button id="btn1">List Your Home</button></Link>
          <button
            id="btn2"
            onClick={() => {
              setVisible((prev) => !prev);
            }}
          >
            <GiHamburgerMenu id="svg1" />
            <CgProfile id="svg2" />
          </button>
        </div>
      </div>
      <div className="nav2">
        <NavLink to={""}><div className="svg11">
          <MdOutlineWhatshot />
          <h3>Trending</h3>
        </div></NavLink>
        <NavLink to={"/houses"}><div className="svg11">
          <GiFamilyHouse />
          <h3>Houses</h3>
        </div></NavLink>
        <div className="svg11">
          <MdBedroomParent />
          <h3>Bedrooms</h3>
        </div>
        <div className="svg11">
          <PiFarm />
          <h3>Farm Houses</h3>
        </div>
        <div className="svg11">
          <MdOutlinePool />
          <h3>Pool Houses</h3>
        </div>
        <div className="svg11">
          <LuTentTree />
          <h3>Tent House</h3>
        </div>
        <div className="svg11">
          <GiWoodCabin />
          <h3>Cabins</h3>
        </div>
        <div className="svg11">
          <SiHomeassistantcommunitystore />
          <h3>Shops</h3>
        </div>
        <div className="svg11">
          <FaTreeCity />
          <h3>Forest Houses</h3>
        </div>
      </div>
    </div>
  );
}

export default Nav;
