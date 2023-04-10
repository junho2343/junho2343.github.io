import Head from "next/head";
import React from "react";

import { getAllGalleryImages } from "lib/api";
import { TITLE_TAG } from "lib/constants";
import Meta from "components/meta";
import Container from "components/layout/container";

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
      <Head>
        <title>개발자 {TITLE_TAG}</title>
        <meta name="description" content={`개발자 ${TITLE_TAG} | 블로그`} />
      </Head>
      <div className="columns-[320px] gap-0">
        {allGalleryImages.map((image, index) => (
          <div className="p-[8px]" key={index}>
            <div
              className="overflow-hidden rounded-md cursor-pointer relative"
              onClick={() => {
                setClickImage(index);
              }}
            >
              <img
                src={`/assets/gallery/${image.imageName}`}
                alt=""
                className="w-full"
              />

              {clickImage === index && (
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] justify-center items-center flex">
                  {image.tags.map((tag, index) => (
                    <span className="text-white font-semibold pr-2" key={index}>
                      #{tag}
                    </span>
                  ))}
                  <span
                    className="text-white absolute bottom-3 right-4"
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
