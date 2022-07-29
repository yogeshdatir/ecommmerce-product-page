import React, { useState, MouseEvent } from "react";
import {
  MobilePreviewImage,
  MobilePreviewImageWrapper,
  PreviewContainer,
  PreviewImage,
  PreviewThumbnail,
  PreviewThumbnailsContainer,
  PreviewThumbnailWrapper,
} from "./index.styled";
import Product1Preview from "../../../assets/images/image-product-1.jpg";
import Product1Thumbnail from "../../../assets/images/image-product-1-thumbnail.jpg";
import Product2Preview from "../../../assets/images/image-product-2.jpg";
import Product2Thumbnail from "../../../assets/images/image-product-2-thumbnail.jpg";
import Product3Preview from "../../../assets/images/image-product-3.jpg";
import Product3Thumbnail from "../../../assets/images/image-product-3-thumbnail.jpg";
import Product4Preview from "../../../assets/images/image-product-4.jpg";
import Product4Thumbnail from "../../../assets/images/image-product-4-thumbnail.jpg";
import { ReactComponent as PreviousIcon } from "../../../assets/images/icon-previous.svg";
import { ReactComponent as NextIcon } from "../../../assets/images/icon-next.svg";
import PreviewModal from "../PreviewModal";
import {
  NextIconContainer,
  PreviousIconContainer,
} from "../PreviewModal/PreviewModal.styled";

type Props = {};

export const previewSwitcher = (index: number) => {
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
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);

  return (
    <PreviewContainer>
      <PreviewImage
        src={previewSwitcher(selectedImageIndex)}
        alt="Product1 Preview"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setShowPreviewModal(true);
        }}
      />
      <MobilePreviewImageWrapper>
        <PreviousIconContainer
          style={{ transform: "translate(1rem, -50%)" }}
          onClick={() => {
            selectedImageIndex > 1 &&
              setSelectedImageIndex(
                (prevSelectedImageIndex: number) => prevSelectedImageIndex - 1
              );
          }}
        >
          <PreviousIcon id="previousIcon" />
        </PreviousIconContainer>
        <MobilePreviewImage
          src={previewSwitcher(selectedImageIndex)}
          alt="Product1 Preview"
        />
        <NextIconContainer
          style={{ transform: "translate(-1rem, -50%)" }}
          onClick={() => {
            selectedImageIndex < 4 &&
              setSelectedImageIndex(
                (prevSelectedImageIndex: number) => prevSelectedImageIndex + 1
              );
          }}
        >
          <NextIcon id="previousIcon" />
        </NextIconContainer>
      </MobilePreviewImageWrapper>
      <PreviewThumbnailsContainer
        style={{
          padding: "0.5rem 0.25rem",
        }}
      >
        <PreviewThumbnailWrapper>
          <PreviewThumbnail
            src={Product1Thumbnail}
            active={selectedImageIndex === 1}
            onClick={() => setSelectedImageIndex(1)}
          />
        </PreviewThumbnailWrapper>
        <PreviewThumbnailWrapper>
          <PreviewThumbnail
            src={Product2Thumbnail}
            active={selectedImageIndex === 2}
            onClick={() => setSelectedImageIndex(2)}
          />
        </PreviewThumbnailWrapper>
        <PreviewThumbnailWrapper>
          <PreviewThumbnail
            src={Product3Thumbnail}
            active={selectedImageIndex === 3}
            onClick={() => setSelectedImageIndex(3)}
          />
        </PreviewThumbnailWrapper>
        <PreviewThumbnailWrapper>
          <PreviewThumbnail
            src={Product4Thumbnail}
            active={selectedImageIndex === 4}
            onClick={() => setSelectedImageIndex(4)}
          />
        </PreviewThumbnailWrapper>
        <PreviewModal
          showPreviewModal={showPreviewModal}
          setShowPreviewModal={setShowPreviewModal}
        />
      </PreviewThumbnailsContainer>
    </PreviewContainer>
  );
};

export default Preview;
