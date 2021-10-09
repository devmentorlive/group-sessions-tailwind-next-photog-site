import { useRef, useState, useEffect } from "react";

const photos = [
  {
    name: "bare-pregnant-belly",
    alt: "A pregnant woman holding her bare belly",
    width: 400,
  },
  {
    name: "dress-pregnant-belly",
    alt: "A pregnant woman holding her bare belly in a prettty dress",
    width: 600,
  },
  {
    name: "woman-in-tub",
    alt: "A beautiful woman relaxing in a tub",
    width: 800,
  },
];

function PhotoSlide({ name, alt, width }) {
  const ref = useRef(undefined);
  return (
    <img
      ref={ref}
      src={`/photos/${name}.jpg`}
      alt={alt}
      style={{
        width,
      }}
    />
  );
}

function photoWidths(photos) {
  return Math.max(...photos.map((photo) => photo.width));
}

function PhotoSlider({ photos }) {
  const ref = useRef(undefined);
  const [activePhoto, setActivePhoto] = useState(photos[0]);
  const [height, setHeight] = useState(ref.current?.clientHeight);
  const [width, setWidth] = useState(photoWidths(photos));

  useEffect(() => {
    setHeight(ref.current?.clientHeight);
    setWidth(photoWidths(photos));
  }, [photos]);

  return (
    <div className="w-full relative" ref={ref}>
      <div className="flex space-x-8 items-center z-50 overflow-x-scroll ">
        {photos.map((photo) => (
          <PhotoSlide {...photo} />
        ))}
      </div>
    </div>
  );
}

export default function TestPage({}) {
  return (
    <div className="container mx-auto ">
      <h2 className="font-cursive text-8xl text-center text-gray-200 my-12">
        Captured in the moment...
      </h2>
      <PhotoSlider photos={photos} />
    </div>
  );
}
