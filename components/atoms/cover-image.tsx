type Props = {
  src: string;
};

const CoverImage = ({ src }: Props) => {
  return (
    <div className="aspect-video sm:mx-0">
      <img
        src={`https://cdn.jsdelivr.net/gh/junho2343/junho2343.github.io/public${src}`}
        alt=""
        className="w-full h-full object-cover"
        //   className={cn("shadow-sm", {
        //     "hover:shadow-lg transition-shadow duration-200": slug,
        //   })}
      />
    </div>
  );
};

export default CoverImage;
