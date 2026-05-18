"use client";

import {
  useEffect,
  useState,
} from "react";



type Props = {

  title: string;

  images: string[];

};



export function HeroSection({
  title,
  images,
}: Props) {

  const [currentImage,
    setCurrentImage] = useState(0);



  /* =========================
     auto slide
  ========================= */

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage(prev =>

        (prev + 1) % images.length

      );

    }, 5000);

    return () => clearInterval(interval);

  }, [images.length]);



  return (

    <section className="
      relative
      w-full
      h-[70vh]
      overflow-hidden
    ">

      {/* images */}
      {images.map((image, index) => (

        <img
          key={image}
          src={image}
          alt={title}
          className={`
            absolute
            inset-0
            w-full
            h-full
            object-cover
            transition-opacity
            duration-1000

            ${
              index === currentImage

                ? "opacity-100"

                : "opacity-0"
            }
          `}
        />

      ))}



      {/* overlay */}
      <div className="
        absolute
        inset-0
        bg-black/40
      " />



      {/* title */}
      <div className="
        absolute
        inset-0
        flex
        items-center
        justify-center
      ">

        <h1 className="
          text-white
          text-5xl
          md:text-7xl
          font-bold
          tracking-widest
          drop-shadow-lg
          text-center
        ">

          {title}

        </h1>

      </div>



      {/* indicators */}
      <div className="
        absolute
        bottom-6
        left-1/2
        -translate-x-1/2
        flex
        gap-3
      ">

        {images.map((_, index) => (

          <div
            key={index}
            className={`
              w-3
              h-3
              rounded-full

              ${
                index === currentImage

                  ? "bg-white"

                  : "bg-white/40"
              }
            `}
          />

        ))}

      </div>

    </section>

  );

}