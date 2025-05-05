import React from "react";
import Image from 'next/image';
const ImageSection = () => {
  const Images = [
    {
      id: 1,
      image: "/img1.webp",
    },
    {
      id: 2,
      image: "/img3.webp",
    },
    {
      id: 3,
      image: "/img1.webp",
    },
  ];

  return (
    <div className="w-full px-12 py-16 bg-gray-100 flex flex-col md:flex-row justify-center items-center md:items-start gap-6">
    {Images.map((img) => (
      <div key={img.id} className="w-[80%] md:w-[20%] mx-2">
        <Image
          src={img.image}
          alt={`Image ${img.id}`}
          width={400}
          height={300}
          className="rounded-md object-cover w-full h-auto"
        />
      </div>
    ))}
  </div>

  );
};

export default ImageSection;
