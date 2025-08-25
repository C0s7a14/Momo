import { useRef } from "react";

export default function Carousel({ images, height = "80vh" }) {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: window.innerWidth, behavior: "smooth" });
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Botão Esquerda */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white px-3 py-2 rounded z-10 text-2xl"
      >
        ⬅
      </button>

      {/* Carrossel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-full snap-center"
            style={{ height: height }}
          >
            <img
              src={img}
              alt={`img-${idx}`}
              className="w-full h-full object-cover md:object-contain  "
            />
          </div>
        ))}
      </div>

      {/* Botão Direita */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white px-3 py-2 rounded z-10 text-2xl"
      >
        ➡
      </button>
    </div>
  );
}
