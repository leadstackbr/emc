import img1 from "@/assets/gallery/media__1774044613829.jpg";
import img2 from "@/assets/gallery/media__1774044613834.jpg";
import img5 from "@/assets/gallery/media__1774044613877.jpg";

const images = [img1, img2, img5];

const PhotoGallery = () => {
  return (
    <div className="flex flex-col gap-6 my-6">
      {images.map((src, index) => (
        <div key={index} className="overflow-hidden rounded-xl border-2 border-primary/10 shadow-sm">
          <img
            src={src}
            alt={`Espaço EMC ${index + 1}`}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
