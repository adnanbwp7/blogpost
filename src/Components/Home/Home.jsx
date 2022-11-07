import React from "react";
import Blog from "../Blog/Blog";
import Banner from "../../assets/Banner.png";
import "./Home.css";
import FeaturedBlog from "./FeaturedBlog";

const Home = () => {
    return (
        <>
            {/* Banner Section */}
            <div className="flex justify-between flex-col md:flex-row overflow-hidden">
                <div className="w-full md:w-1/2 h-[625px] relative -z-50 ">
                    <img src={Banner} className="w-auto h-full max-w-fit" alt="Banner" height="100%" srcSet={Banner} />
                    <div
                        className="absolute bg-[#1E1B1B] opacity-80 h-[101%] flex justify-center align- top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[101%]">
                        <h1 className="text-[64px] w-fit m-auto font-extrabold text-white" >Our Blog</h1>
                    </div>
                </div>
                <div className="flex w-full md:w-1/2 h-[625px] flex-col justify-center bg-[#1E1B1B] md:pl-[60px] text-white">
                    <div className="text-[32px] md:text-[40px] leading-[148%] font-bold w-[80%] mx-auto my-1  max-w-[580px] ">
                        Diagnose Car Problems If You Don’t Know Much About Cars
                    </div>
                    <div className="text-[14px] md:text-[18px] leading-[175%] font-semibold w-[80%] mx-auto my-1 max-w-[615px]">
                        We provide a full range of front end mechanical repairs for all
                        makes and models of cars, no matter the cause. This includes, We
                        provide a full range of front end mechanical.
                    </div>
                </div>
            </div>

            {/* Featured Blog */}
            <FeaturedBlog />
            <Blog />
        </>
    );
};

export default Home;
