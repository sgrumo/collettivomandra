import Image from "next/image";
interface ResponsiveImageProps {
  src: string;
  alt: string;
}

const ResponsiveImage = ({ src, alt }: ResponsiveImageProps) => {
  return (
    <div className="relative h-full w-full">
      <Image
        src={src}
        layout="fill"
        className="relative w-full object-contain"
        alt={alt}
      />
    </div>
  );
};

export default ResponsiveImage;
