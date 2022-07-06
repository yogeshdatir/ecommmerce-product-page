import React from "react";
import {
  PreviewContainer,
  PreviewImage,
  PreviewThumbnail,
  PreviewThumbnailContainer,
} from "./index.styled";
import Product1Preview from "../../../assets/images/image-product-1.jpg";
import Product1Thumbnail from "../../../assets/images/image-product-1-thumbnail.jpg";

type Props = {};

const Preview = (props: Props) => {
  return (
    <PreviewContainer>
      <PreviewImage src={Product1Preview} alt="Product1 Preview" />
      <PreviewThumbnailContainer>
        <PreviewThumbnail src={Product1Thumbnail} active={true} />
        <PreviewThumbnail src={Product1Thumbnail} active={false} />
        <PreviewThumbnail src={Product1Thumbnail} active={false} />
        <PreviewThumbnail src={Product1Thumbnail} active={false} />
      </PreviewThumbnailContainer>
    </PreviewContainer>
  );
};

export default Preview;
