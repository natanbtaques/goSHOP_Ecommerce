import { SiMediamarkt } from "react-icons/si";
import FormattedPrice from "./FormattedPrice";
import { useDispatch, useSelector } from "react-redux";
import { stateProps, StoreProduct } from "../../type";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useSession, signIn, signOut } from "next-auth/react";
import { addUser } from "@/store/nextSlice";

const CartPayment = () => {
    const { data: session } = useSession();

    const { productData, userInfo } = useSelector((state: stateProps) => state.next);
    const [totalAmount, setTotalAmount] = useState(0);
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

    useEffect(() => {
        let amnt = 0;
        productData.map((item: StoreProduct) => {
            amnt += item.price * item.quantity;
            return;
        });

        setTotalAmount(amnt);
    }, [productData]);
    //stripe payment
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

    const handleCheckout = async () => {
        const stripe = await stripePromise;
        const response = await fetch("api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ items: productData, email: session?.user?.email }),
        })
        const checkoutSession = await response.json();

        //redirect user/customer to checkout
        const result: any = await stripe?.redirectToCheckout({
            sessionId: checkoutSession.id,
        });

        if (result.error) {
            alert(result?.error.message);
        }

    }
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2">
                <span className="bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white flex items-center justify-center mt-1">
                    <SiMediamarkt />
                </span>
                <p className="text-sm">
                    Your order qualifies for FREE Shipping by Choosing this option at
                    checkout. See details....
                </p>
            </div>
            <p className="flex items-center justify-between px-2 font-semibold">
                Total:{" "}
                <span className="font-bold text-xl">
                    <FormattedPrice amount={totalAmount} />
                </span>
            </p>
            {userInfo ? (<div className="flex flex-col items-center">
                <button onClick={handleCheckout} className="w-full h-10 text-sm font-semibold bg-goSHOP_blue text-white rounded-lg hover:bg-goSHOP_yellow hover:text-black duration-300">Proceed to Buy</button>

            </div>) : (<div className="flex flex-col items-center">
                <button className="w-full h-10 text-sm font-semibold bg-goSHOP_blue bg-opacity-50 text-white rounded-lg cursor-not-allowed mb-2">Proceed to Buy</button>
                <p onClick={() => signIn()} className="w-40 h-18 text-xs font-semibold bg-goSHOP_yellow text-center text-white cursor-pointer rounded-lg">Please login to continue</p>
            </div>)}
        </div>
    );
};

export default CartPayment;
