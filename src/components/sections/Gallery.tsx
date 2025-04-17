import img from "@/assets/heroImage.webp";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export const Gallery = () => {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto py-20" id="gallery">
      <div className="mb-10 flex flex-col items-center">
        <h2 className="text-4xl text-[#246cb4] font-bold">Galerija</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="bg-[#246cb4]/10 flex items-center justify-center"
          >
            <img src={img} alt={`Image ${index + 1}`} className="rounded-xl" />
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
