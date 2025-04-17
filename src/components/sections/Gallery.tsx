import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import image1 from "@/assets/gallery/6.jpeg"
import image2 from "@/assets/gallery/12.jpeg"
import image3 from "@/assets/gallery/11.jpeg"

export const Gallery = () => {
  const navigate = useNavigate();

  const images = [image1, image2, image3];

  return (
    <section className="container mx-auto py-20" id="gallery">
      <div className="mb-10 flex flex-col items-center">
        <h2 className="text-4xl text-[#246cb4] font-bold">Galerija</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-[#246cb4]/10 flex items-center justify-center"
          >
            <img src={img} alt={`Image ${index + 1}`} className="rounded-xl h-[300px] w-full object-cover object-center" />
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center">
        <Button
          onClick={() => navigate("/gallery")}
          className="bg-orange-400/90"
        >
          Otvori galeriju
        </Button>
      </div>
    </section>
  );
};
