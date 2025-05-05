import React from "react";

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
    <div className="w-full px-12 py-16 bg-gray-100 flex-col md:flex md:flex-row  justify-center">
  {Images.map((Image) => (
    <div
      key={Image.id}
      className="w-[80%] md:w-[20%]   mx-2" 
    >
      <img
        src={Image.image}
        alt={`Image ${Image.id}`}
        className="w-full h-auto object-cover rounded-md"
      />
    </div>
  ))}
</div>

  );
};

export default ImageSection;
