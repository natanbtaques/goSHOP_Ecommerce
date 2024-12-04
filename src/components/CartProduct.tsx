import Image from "next/image";
import React from "react";
import FormattedPrice from "./FormattedPrice";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
    increaseQuantity,
    deleteProduct,
    decreaseQuantity,
} from "@/store/nextSlice";

interface item {
    _id: number;
    title: string;
    brand: string;
    category: string;
    description: string;
    image: any;
    isNew: boolean;
    oldPrice: number;
    price: number;
    quantity: number;
}

interface CartProductProps {
    item: item;
}
const CartProduct = ({ item }: CartProductProps) => {
    const dispatch = useDispatch();
    return (
        <div className="bg-gray-100 rounded-lg flex items-center gap-4">
            <Image
                className="object-cover"
                src={item.image}
                width={150}
                height={150}
                alt="ProductImage"
            />
            <div className="flex items-center px-2 gap-4">
                <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-goSHOP_blue">{item.title}</p>
                    <p className="text-sm text-gray-600 ">{item.description}</p>
                    <p className="text-sm text-gray-600">
                        Unit Price{" "}
                        <span className="font-semibold text-goSHOP_blue">
                            <FormattedPrice amount={item.price} />
                        </span>
                    </p>
                    <div className="flex item-center gap-6 ">
                        <div className="flex items-center justify-between mt-1 border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
                            <span
                                onClick={() =>
                                    dispatch(
                                        increaseQuantity({
                                            _id: item._id,
                                            title: item.title,
                                            brand: item.brand,
                                            category: item.category,
                                            description: item.description,
                                            image: item.image,
                                            isNew: item.isNew,
                                            oldPrice: item.oldPrice,
                                            price: item.price,
                                            quantity: 1,
                                        })
                                    )
                                }
                                className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
                            >
                                <LuPlus />
                            </span>
                            <span>{item.quantity}</span>
                            <span
                                onClick={() =>
                                    dispatch(
                                        decreaseQuantity({
                                            _id: item._id,
                                            title: item.title,
                                            brand: item.brand,
                                            category: item.category,
                                            description: item.description,
                                            image: item.image,
                                            isNew: item.isNew,
                                            oldPrice: item.oldPrice,
                                            price: item.price,
                                            quantity: 1,
                                        })
                                    )
                                }
                                className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
                            >
                                <LuMinus />
                            </span>
                        </div>
                        <div onClick={() => dispatch(deleteProduct(item._id))} className="flex item-center text-sm font-medium mt-2 text-gray-400 hover:text-red-600 cursor-pointer duration-300">
                            <IoMdClose className="mt-[3px]" /> <p>remove</p>
                        </div>
                    </div>
                </div>
                <div className="text-lg font-semibold text-goSHOP_blue">
                    <FormattedPrice amount={item.price * item.quantity} />
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
