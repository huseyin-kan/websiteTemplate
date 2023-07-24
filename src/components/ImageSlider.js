import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const ImageSlider = () => {
    const slides = [
        {
            url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1516315720917-231ef9acce48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1483470134942-13bbf4677d84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1496664444929-8c75efb9546f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
    ]; //List of image urls

    const [currentIndex, setCurrentIndex] = useState(1);

    const previousSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return(
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
            {/* Images */}
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>

            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={previousSlide} size={30} />
            </div>

            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

            {/* Dots */}
            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex} 
                        onClick={() => goToSlide(slideIndex)} 
                        className="text-2xl cursor-pointer"
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    )

}
export default ImageSlider;