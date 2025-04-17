export const Gallery = () => {

  const images: Record<string, string> = import.meta.glob("../assets/gallery/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  });
  
  const imagePaths = Object.values(images);

  return (
    <section className="container min-h-screen mx-auto my-20 px-4">
      <div className="mb-10 flex flex-col items-center">
        <h2 className="text-4xl text-[#246cb4] font-bold">Galerija</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {imagePaths.map((path, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
          >
            <img src={path} alt={`Image ${index + 1}`} className="rounded-xl h-[300px] w-full object-cover object-center" />
          </div>
        ))}
      </div>
    </section>
  );
};
