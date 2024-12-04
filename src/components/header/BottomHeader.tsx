import { removeUser } from "@/store/nextSlice";
import { signOut } from "next-auth/react";
import { LuMenu } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { stateProps } from "../../../type";
const BottomHeader = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(
    (state: stateProps) => state.next
  );
  const handleSignOut = () => {
    signOut();
    dispatch(removeUser());
  }



  return (
    <>
      <div className="w-full h-10 bg-goSHOP_light text-sm text-white px-4 flex items-center space-x-4">
        <p className="flex items-center gap-1 h-6 px-2 border border-transparent rounded-full bg-green-500 text-white hover:bg-green-600 cursor-pointer duration-300">
          <LuMenu className="text-xl" /> All
        </p>
        <p className="hidden md:inline-flex items-center h-6 px-2 border border-transparent rounded-full bg-green-500 text-white hover:bg-green-600 cursor-pointer duration-300">
          Todays Deals
        </p>
        <p className="hidden md:inline-flex items-center h-6 px-2 border border-transparent rounded-full bg-green-500 text-white hover:bg-green-600 cursor-pointer duration-300">
          Customer Service
        </p>
        <p className="hidden md:inline-flex items-center h-6 px-2 border border-transparent rounded-full bg-green-500 text-white hover:bg-green-600 cursor-pointer duration-300">
          Registry
        </p>
        <p className="hidden md:inline-flex items-center h-6 px-2 border border-transparent rounded-full bg-green-500 text-white hover:bg-green-600 cursor-pointer duration-300">
          Gift Cards
        </p>
        <p className="hidden md:inline-flex items-center h-6 px-2 border border-transparent rounded-full bg-green-500 text-white hover:bg-green-600 cursor-pointer duration-300">
          Sell
        </p>
        <p className="hidden md:inline-flex items-center h-6 px-2 border border-transparent rounded-full bg-green-500 text-white hover:bg-green-600 cursor-pointer duration-300">
          Today Deals
        </p>
        {userInfo && (
          <button
            onClick={handleSignOut}
            className="hidden md:inline-flex items-center h-6 px-2 border border-transparent rounded-full bg-red-400 text-white hover:bg-red-500 cursor-pointer duration-300"
          >
            Sign Out
          </button>
        )}
      </div>
    </>
  );
};

export default BottomHeader;
