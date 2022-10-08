import React, { useState } from "react";
import logo from "../images/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import avatar from "../images/image-avatar.png";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";
import Cart from "./Cart";

export default function Header() {

const [isOpen, setIsOpen] = useState(false)
const [cartIsOpen, setCartIsOpen] = useState(false)
  return (
    <>
      <header className="relative flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
        <div className="flex items-center justify-start gap-4">
          <ul className="flex items-center justify-start gap-4">
            {!isOpen && <li onClick={()=> setIsOpen(true)} className=" lg:hidden">
              <button>
                <img src={menu} alt="" className="cursor-pointer"/>
              </button>
            </li>}
            {isOpen && <li onClick={()=> setIsOpen(false)} className=" lg:hidden close">
              <button>
                <img src={close} alt="" className="cursor-pointer w-6"/>
              </button>
            </li>}
            <li>
              <button>
                <img src={logo} alt="" className="cursor-pointer"/>
              </button>
            </li>
          </ul>

          <nav className={isOpen && "open lg:hidden"}>
            <ul className="">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>

        <div className="">
          <ul className="flex items-center justify-start gap-4">
            <li>
              <button onClick={()=> setCartIsOpen(!cartIsOpen)}>
                <AiOutlineShoppingCart className=" text-2xl text-slate-600" />
              </button>
            </li>
            <li>
                {cartIsOpen && <Cart/>}
            </li>
            <li>
              <img src={avatar} alt="" className=" w-12" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
