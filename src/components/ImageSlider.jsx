// import { useState } from 'react';
// import { Button } from 'shadcn/ui/button'; // Import ShadCN button
// import { cn } from 'shadcn/ui/utils'; // ShadCN utility for classNames
//
// const ImageSlider = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//
//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };
//
//   return (
//     <div className="relative w-full max-w-lg mx-auto">
//       {/* Image container */}
//       <div className="overflow-hidden rounded-md shadow-lg">
//         <img
//           src={images[currentIndex].url}
//           alt={images[currentIndex].description}
//           className="w-full h-64 object-cover"
//         />
//       </div>
//
//       {/* Description */}
//       <div className="text-center py-2">
//         <p className="text-gray-600">{images[currentIndex].description}</p>
//       </div>
//
//       {/* Navigation buttons */}
//       <div className="absolute inset-0 flex justify-between items-center px-4">
//         <Button
//           variant="outline"
//           className="bg-white/80 hover:bg-white text-gray-800"
//           onClick={handlePrev}
//         >
//           Prev
//         </Button>
//
//         <Button
//           variant="outline"
//           className="bg-white/80 hover:bg-white text-gray-800"
//           onClick={handleNext}
//         >
//           Next
//         </Button>
//       </div>
//
//       {/* Dots for slider navigation */}
//       <div className="flex justify-center py-4">
//         {images.map((_, index) => (
//           <span
//             key={index}
//             className={cn(
//               'h-2 w-2 mx-1 rounded-full transition-colors duration-300',
//               currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
//             )}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
//
// export default ImageSlider;

import { useState } from "react";

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Display */}
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      
      {/* Slider Controls */}
      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 p-4 flex items-center justify-between">
        <button
          onClick={handlePrevious}
          className="text-white text-lg font-semibold px-4 py-2"
          aria-label="Previous Image"
        >
          &#9664;
        </button>
        
        <div className="text-white flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
              aria-label={`Image ${index + 1}`}
            ></button>
          ))}
        </div>
        
        <button
          onClick={handleNext}
          className="text-white text-lg font-semibold px-4 py-2"
          aria-label="Next Image"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
}
