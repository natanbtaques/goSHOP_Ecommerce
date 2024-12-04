
import Image from "next/image";
import logo from "../images/logo.png"

const Footer = () => {
    return (
        <div className="w-full bg-goSHOP_light mt-4 text-gray-300 flex flex-col items-center justify-center gap-4 py-4">


            <div className="flex items-center justify-center gap-4 w-full">
                <div className="text-center flex-4 pl-4">
                    <Image className="w-24" src={logo} alt="logo" />
                    <p className="text-sm -mt-4 mt-2">All rights reserved to goSHOP</p>
                </div>
                <div className="text-center flex-1">
                    <h2 className="text-lg font-semibold">About Us</h2>
                    <p className="text-sm">We are a leading e-commerce platform providing a wide range of products to our customers. Our mission is to deliver the best online shopping experience.</p>
                </div>
                <div className="text-center flex-1">
                    <h2 className="text-lg font-semibold">Contact Us</h2>
                    <p className="text-sm">Email: support@goSHOP.com</p>
                    <p className="text-sm">Phone: +1 234 567 890</p>
                </div>
                <div className="text-center flex-1">
                    <h2 className="text-lg font-semibold">Follow Us</h2>
                    <p className="text-sm">Stay connected through our social media channels:</p>
                    <p className="text-sm">Facebook | Twitter | Instagram</p>
                </div>
            </div>
        </div>

    );
}

export default Footer;

