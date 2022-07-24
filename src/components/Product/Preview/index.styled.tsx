import styled from "@emotion/styled";

export const PreviewContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 75%;
  border-radius: 15px;
`;

export const PreviewThumbnailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

interface IPreviewThumbnail {
  active: boolean;
}

export const PreviewThumbnail = styled.img<IPreviewThumbnail>`
  width: 20%;
  border-radius: 10px;
  cursor: pointer;
  opacity: ${({ active }: IPreviewThumbnail) => (active ? 0.5 : 1)};
  border: ${({ active }: IPreviewThumbnail) =>
    active ? "2px solid #FF7E1B" : "2px solid #fff"};

  :hover {
    opacity: ${({ active }: IPreviewThumbnail) => (active ? 0.5 : 0.7)};
  }
`;
