import React from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "@/store/nextSlice";

const ResetCart = () => {
    const dispatch = useDispatch();
    const handleResetCart = () => {
        const confirmReset = window.confirm(
            "Are you sure you want to delete all items in your cart?"
        );
        if (confirmReset) {
            dispatch(resetCart());
        }
    }
    return (
        <div onClick={handleResetCart}>
            <button className="w-44 h-10 font-semibold bg-grau-200 rounded-lg hover:text-white hover:bg-red-600 duration-300 bg-gray-200">
                {" "}
                Delete All{" "}
            </button>
        </div>
    );
};

export default ResetCart;
