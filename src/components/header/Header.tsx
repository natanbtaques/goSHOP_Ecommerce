import React, { useEffect } from "react";
import logo from "../../images/logo.png";
import Image from "next/image";
import cartIcon from "../../images/cartIcon.png";
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { stateProps } from "../../../type";
import { useSession, signIn, signOut } from "next-auth/react";
import { addUser } from "@/store/nextSlice";
import BottomHeader from "./BottomHeader";

const Header = () => {
  const { data: session } = useSession();
  const { productData, favoriteData, userInfo } = useSelector(
    (state: stateProps) => state.next
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [session]);
  return (
    <div className="w-full h-20 bg-goSHOP_blue text-lightText fixed top-0 left-0 z-50 pb-5">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
          <Link href="/">
            <Image
              className="w-28 object-cover mt-1"
              src={logo}
              alt="logoImg"
            />
          </Link>
        </div>
        {/* Delivery */}
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
          <SlLocationPin className="h-6 w-6" />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">USA</p>
          </div>
        </div>
        {/* Searchbar */}
        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <input
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-goSHOP_yellow "
            type="text"
            placeholder="Search (Availabe Soon)"
          />
          <span className="w-12 h-full bg-goSHOP_yellow text-black text-2x1 flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            {" "}
            <HiOutlineSearch />
          </span>
        </div>
        {/* signin */}
        {userInfo ? (
          <div
            className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1"
          >
            <img src={userInfo.image} alt="userImage" className="w-8 h-8 rounded-full object-cover" />
            <div className="text-xs text-gray-100 flex flex-col justify-between">
              <p className="text-white font-bold">{userInfo.name}</p>
              <p>{userInfo.email}</p>
            </div>
          </div>
        ) : (
          <div
            onClick={() => signIn()}
            className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]"
          >
            <p>Hello, sign in</p>
            <p className="text-white font-bold flex items-center">
              {" "}
              Account & Lists
              <span>
                <BiCaretDown />
              </span>
            </p>
          </div>
        )}
        {/* favourite */}
        <div>
          <Link
            href={"/favorite"}
            className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
          >
            <p>Marked</p>
            <p className="text-white font-bold">& Favorite</p>
            {favoriteData.length > 0 && (
              <span className="absolute right-2 top-0 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-goSHOP_yellow">
                {favoriteData.length}
              </span>
            )}
          </Link>
        </div>
        {/* Cart */}
        <div className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative">
          <Link href="/cart">
            <Image
              className="w-auto object-cover h-8"
              src={cartIcon}
              alt="cartIcon"
            />
          </Link>
          <p className="text-xs text-white font-bold mt-3">Cart</p>
          <span className="absolute text-goSHOP_yellow text-sm  top-1 left-[29px] font-semibold">
            {productData ? productData.length : 0}
          </span>
        </div>
      </div>
      <BottomHeader />
    </div>
  );
};

export default Header;
