import styled from "@emotion/styled";

export const PreviewContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 719px) {
    width: 100%;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 75%;
  border-radius: 15px;

  @media screen and (max-width: 719px) {
    display: none;
  }
`;

export const MobilePreviewImageWrapper = styled.div`
  width: 100%;
  position: relative;

  @media screen and (min-width: 720px) {
    display: none;
  }
`;

export const MobilePreviewImage = styled.img`
  width: 100%;
  height: 33.33%;

  @media screen and (min-width: 720px) {
    display: none;
  }
`;

export const PreviewThumbnailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  user-select: none;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

interface IPreviewThumbnail {
  active: boolean;
}

export const PreviewThumbnailWrapper = styled.div`
  width: 88px;
  height: 88px;
  background: #fff;
  border-radius: 10px;
`;

export const PreviewThumbnail = styled.img<IPreviewThumbnail>`
  width: 88px;
  height: 88px;
  border-radius: 10px;
  cursor: pointer;
  opacity: ${({ active }: IPreviewThumbnail) => (active ? 0.5 : 1)};
  outline: ${({ active }: IPreviewThumbnail) =>
    active ? "2px solid #FF7E1B" : "2px solid transparent"};

  :hover {
    opacity: ${({ active }: IPreviewThumbnail) => (active ? 0.5 : 0.7)};
  }
`;
