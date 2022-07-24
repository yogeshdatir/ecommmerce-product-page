import React, { useState, MouseEvent } from "react";
import {
  PreviewContainer,
  PreviewImage,
  PreviewThumbnail,
  PreviewThumbnailContainer,
} from "./index.styled";
import Product1Preview from "../../../assets/images/image-product-1.jpg";
import Product1Thumbnail from "../../../assets/images/image-product-1-thumbnail.jpg";
import Product2Preview from "../../../assets/images/image-product-2.jpg";
import Product2Thumbnail from "../../../assets/images/image-product-2-thumbnail.jpg";
import Product3Preview from "../../../assets/images/image-product-3.jpg";
import Product3Thumbnail from "../../../assets/images/image-product-3-thumbnail.jpg";
import Product4Preview from "../../../assets/images/image-product-4.jpg";
import Product4Thumbnail from "../../../assets/images/image-product-4-thumbnail.jpg";

type Props = {};

const previewSwitcher = (index: number) => {
  switch (index) {
    case 1:
      return Product1Preview;
    case 2:
      return Product2Preview;
    case 3:
      return Product3Preview;
    case 4:
      return Product4Preview;

    default:
      return Product1Preview;
  }
};

const Preview = (props: Props) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(1);
  return (
    <PreviewContainer>
      <PreviewImage
        src={previewSwitcher(selectedImageIndex)}
        alt="Product1 Preview"
      />
      <PreviewThumbnailContainer>
        <PreviewThumbnail
          src={Product1Thumbnail}
          active={selectedImageIndex === 1}
          onClick={(event: MouseEvent) => setSelectedImageIndex(1)}
        />
        <PreviewThumbnail
          src={Product2Thumbnail}
          active={selectedImageIndex === 2}
          onClick={(event: MouseEvent) => setSelectedImageIndex(2)}
        />
        <PreviewThumbnail
          src={Product3Thumbnail}
          active={selectedImageIndex === 3}
          onClick={(event: MouseEvent) => setSelectedImageIndex(3)}
        />
        <PreviewThumbnail
          src={Product4Thumbnail}
          active={selectedImageIndex === 4}
          onClick={(event: MouseEvent) => setSelectedImageIndex(4)}
        />
      </PreviewThumbnailContainer>
    </PreviewContainer>
  );
};

export default Preview;
