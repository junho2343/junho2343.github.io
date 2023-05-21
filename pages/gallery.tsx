import Head from "next/head";
import Image from "next/image";
import React from "react";

import { getAllGalleryImages } from "lib/api";
import { TITLE_TAG } from "lib/constants";
import Meta from "components/meta";
import Container from "components/layout/container";
import Seo from "components/atoms/seo";

type Props = {
  allGalleryImages: {
    imageName: string;
    tags: string[];
    date: string;
  }[];
};

export default function Gallery({ allGalleryImages }: Props) {
  const [clickImage, setClickImage] = React.useState(0);
  return (
    <Container className="max-w-[1600px]">
      <Meta />
      <Seo title="갤러리" description="추억 가득 갤러리" tags={["갤러리"]} />
      <div className="columns-[320px] gap-0">
        {allGalleryImages.map((image, index) => (
          <div className="p-[8px]" key={index}>
            <div
              className="overflow-hidden rounded-md cursor-pointer relative"
              onClick={() => {
                setClickImage(index);
              }}
            >
              <div className="galleryImage">
                <Image
                  // src={`https://cdn.jsdelivr.net/gh/junho2343/junho2343.github.io/public/assets/gallery/${image.imageName}`}
                  src={`/assets/gallery/${image.imageName}`}
                  alt="Junho Gallery Image"
                  layout="fill"
                  placeholder="blur"
                  unoptimized
                  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcOnt2PQAF5AJMrzp1XwAAAABJRU5ErkJggg=="
                  loading="eager"
                />
              </div>
              {clickImage === index && (
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] justify-center items-center flex">
                  {image.tags.map((tag, index) => (
                    <span className="text-white font-semibold pr-2" key={index}>
                      #{tag}
                    </span>
                  ))}
                  <span
                    className="text-white absolute bottom-3 right-4 text-sm"
                    key={index}
                  >
                    {image.date}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export const getStaticProps = async () => {
  const allGalleryImages = getAllGalleryImages();

  return {
    props: { allGalleryImages },
  };
};
