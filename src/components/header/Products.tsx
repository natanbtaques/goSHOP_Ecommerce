import React from "react";
import { ProductProps } from "../../../type";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import FormattedPrice from "../FormattedPrice";
import { useDispatch } from "react-redux";
import { addToCart, addToFaviorite } from "@/store/nextSlice";

const SignificantDiscount = (oldPrice: number, price: number) => {
  return oldPrice - price > 40;
};
const Products = ({ productData }: any) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {productData.map(
        ({
          _id,
          title,
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          price,
        }: ProductProps) => (
          <div
            key={_id}
            className="w-full bg-white text-black p-4 border border-gray rounded-lg group overflow-hidden"
          >
            <div className="w-full h-[260px] relative">
              <Image
                className="w-full h-full object-cover scale-90 hover:scale-100 transition duration-300"
                src={image}
                alt="productImage"
                width={300}
                height={300}
              />
              <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
                <span
                  onClick={() =>
                    dispatch(
                      addToCart({
                        _id: _id,
                        title: title,
                        brand: brand,
                        category: category,
                        description: description,
                        image: image,
                        isNew: isNew,
                        oldPrice: oldPrice,
                        price: price,
                        quantity: 1,
                      })
                    )
                  }
                  className="w-full h-full border-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-goSHOP_yellow cursor-pointer duration-300"
                >
                  <HiShoppingCart />
                </span>
                <span onClick={() =>
                  dispatch(
                    addToFaviorite({
                      _id: _id,
                      title: title,
                      brand: brand,
                      category: category,
                      description: description,
                      image: image,
                      isNew: isNew,
                      oldPrice: oldPrice,
                      price: price,
                      quantity: 1,
                    })
                  )
                } className="w-full h-full border-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-goSHOP_yellow cursor-pointer duration-300">
                  <FaHeart />
                </span>
              </div>
              {isNew && SignificantDiscount(oldPrice, price) && (
                <div className="absolute top-0 right-0 text-goSHOP_blue font-medium text-xs tracking-wide animate-bounce">
                  <p>!save</p>
                  <FormattedPrice amount={oldPrice - price} />
                </div>
              )}
            </div>

            <hr />
            <div className="px-4 py-3 flex flex-col gap-1">
              <p className="text-xs text-gray-500 tracking-wide">{category}</p>
              <p className="text-base font-medium ">{title}</p>
              <p className="flex items-center gap-2">
                {SignificantDiscount(oldPrice, price) && (
                  <span className="text-sm line-through">
                    <FormattedPrice amount={oldPrice} />
                  </span>
                )}
                <span className="text-goSHOP_blue font-semibold">
                  <FormattedPrice amount={price} />
                </span>
              </p>
              <p className="text-xs text-gray-600 text-600 justify">
                {description.substring(0, 120)}
              </p>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: _id,
                      title: title,
                      brand: brand,
                      category: category,
                      description: description,
                      image: image,
                      isNew: isNew,
                      oldPrice: oldPrice,
                      price: price,
                      quantity: 1,
                    })
                  )
                }
                className="h-10 font-medium bg-goSHOP_blue text-white rounded-md hover:bg-goSHOP_yellow hover:text-black duration-300 mt-2"
              >
                add to cart
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Products;
