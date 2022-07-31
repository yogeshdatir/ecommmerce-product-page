import React, { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  NextIconContainer,
  PreviewImageWrapper,
  PreviewModalContainer,
  PreviewModalOverlay,
  PreviousIconContainer,
} from "./PreviewModal.styled";
import Product1Thumbnail from "../../../assets/images/image-product-1-thumbnail.jpg";
import Product2Thumbnail from "../../../assets/images/image-product-2-thumbnail.jpg";
import Product3Thumbnail from "../../../assets/images/image-product-3-thumbnail.jpg";
import Product4Thumbnail from "../../../assets/images/image-product-4-thumbnail.jpg";
import { ReactComponent as CloseIcon } from "../../../assets/images/icon-close.svg";
import { ReactComponent as PreviousIcon } from "../../../assets/images/icon-previous.svg";
import { ReactComponent as NextIcon } from "../../../assets/images/icon-next.svg";

import {
  PreviewImage,
  PreviewThumbnail,
  PreviewThumbnailsContainer,
  PreviewThumbnailWrapper,
} from "../Preview/index.styled";
import { previewSwitcher } from "../Preview";

const createWrapperAndAppendToBody = () => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", "previewModal");
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

interface IProps {
  showPreviewModal: boolean;
  setShowPreviewModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PreviewModal = ({ showPreviewModal, setShowPreviewModal }: IProps) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(1);

  // TODO: parent preview image index should be initialImageIndex in this modal.

  useLayoutEffect(() => {
    let element = document.getElementById("preview-portal-wrapper");
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody();
    }

    setWrapperElement(element);
    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, []);

  if (wrapperElement === null || !showPreviewModal) return null;

  return createPortal(
    <PreviewModalOverlay>
      <PreviewModalContainer>
        <CloseIcon
          id="closeIcon"
          onClick={() => {
            setShowPreviewModal(false);
          }}
        />
        <PreviewImageWrapper>
          <PreviousIconContainer
            onClick={() => {
              selectedImageIndex > 1 &&
                setSelectedImageIndex(
                  (prevSelectedImageIndex: number) => prevSelectedImageIndex - 1
                );
            }}
          >
            <PreviousIcon id="previousIcon" />
          </PreviousIconContainer>
          <PreviewImage
            src={previewSwitcher(selectedImageIndex)}
            style={{
              height: "100%",
            }}
          />
          <NextIconContainer
            onClick={() => {
              selectedImageIndex < 4 &&
                setSelectedImageIndex(
                  (prevSelectedImageIndex: number) => prevSelectedImageIndex + 1
                );
            }}
          >
            <NextIcon id="previousIcon" />
          </NextIconContainer>
        </PreviewImageWrapper>
        <PreviewThumbnailsContainer style={{ padding: "5%" }}>
          <PreviewThumbnailWrapper>
            <PreviewThumbnail
              src={Product1Thumbnail}
              alt="Product 1 thumbnail"
              active={selectedImageIndex === 1}
              onClick={() => setSelectedImageIndex(1)}
            />
          </PreviewThumbnailWrapper>
          <PreviewThumbnailWrapper>
            <PreviewThumbnail
              src={Product2Thumbnail}
              active={selectedImageIndex === 2}
              onClick={() => setSelectedImageIndex(2)}
              alt="Product 2 thumbnail"
            />
          </PreviewThumbnailWrapper>
          <PreviewThumbnailWrapper>
            <PreviewThumbnail
              src={Product3Thumbnail}
              active={selectedImageIndex === 3}
              onClick={() => setSelectedImageIndex(3)}
              alt="Product 3 thumbnail"
            />
          </PreviewThumbnailWrapper>

          <PreviewThumbnailWrapper>
            <PreviewThumbnail
              src={Product4Thumbnail}
              active={selectedImageIndex === 4}
              onClick={() => setSelectedImageIndex(4)}
              alt="Product 4 thumbnail"
            />
          </PreviewThumbnailWrapper>
          <PreviewThumbnailWrapper>
            <PreviewThumbnail
              src={Product4Thumbnail}
              active={selectedImageIndex === 4}
              onClick={() => setSelectedImageIndex(4)}
              alt="Product 4 thumbnail"
            />
          </PreviewThumbnailWrapper>
          <PreviewThumbnailWrapper>
            <PreviewThumbnail
              src={Product4Thumbnail}
              active={selectedImageIndex === 4}
              onClick={() => setSelectedImageIndex(4)}
              alt="Product 4 thumbnail"
            />
          </PreviewThumbnailWrapper>
        </PreviewThumbnailsContainer>
      </PreviewModalContainer>
    </PreviewModalOverlay>,
    wrapperElement
  );
};

export default PreviewModal;
