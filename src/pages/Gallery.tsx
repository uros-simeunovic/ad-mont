import img from "@/assets/heroImage.webp";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useImageModal } from "@/hooks/useImageModal";

export const Gallery = () => {
  const { onOpen, onClose, isOpen } = useImageModal();

  return (
    <section className="container min-h-screen mx-auto my-20">
      <div className="mb-10 flex flex-col items-center">
        <h2 className="text-4xl text-[#246cb4] font-bold">Galerija</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 flex rounded-xl items-center justify-center hover:scale-102 transition-transform duration-300 cursor-pointer"
            onClick={onOpen}
          >
            <img src={img} alt={`Image ${index + 1}`} className="rounded-xl" />
          </div>
        ))}
      </div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="rounded-lg">
          <div className="relative h-[70vh] w-[70vw] mx-auto">
            <img src={img} alt="Selected" className="absolute rounded-lg w-full h-full object-cover object-center" />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
