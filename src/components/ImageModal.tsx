import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImage: string;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export const ImageModal = ({
  isOpen,
  onClose,
  currentImage,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: ImageModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          if (hasPrevious) onPrevious();
          break;
        case "ArrowRight":
          if (hasNext) onNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrevious, onNext, hasPrevious, hasNext]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gray-300 transition-colors"
      >
        <X className="h-8 w-8" />
      </button>

      {/* Navigation buttons */}
      {hasPrevious && (
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full hover:bg-black/70"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
      )}

      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full hover:bg-black/70"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      )}

      {/* Image container */}
      <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
        <img
          src={currentImage}
          alt="Gallery image"
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
      </div>

      {/* Click outside to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
      />
    </div>
  );
}; 