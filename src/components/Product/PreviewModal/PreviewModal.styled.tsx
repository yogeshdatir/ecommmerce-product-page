import styled from "@emotion/styled";

export const PreviewModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PreviewModalContainer = styled.div`
  /* position: fixed; */
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 95vh;

  #closeIcon {
    margin-left: auto;
    padding-bottom: 1rem;
    cursor: pointer;

    path {
      fill: #fff;
    }

    :hover {
      path {
        fill: #ff7e1b;
      }
    }
  }
`;

export const PreviewImageWrapper = styled.div`
  position: relative;
  user-select: none;
  height: 60vh;
`;

const IconContainer = styled.div`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  position: absolute;
  background: #fff;
  display: flex;
  justify-content: center;
  top: 50%;
  align-items: center;
  cursor: pointer;
  user-select: none;

  :hover {
    path {
      stroke: #ff7e1b;
    }
  }
`;

export const PreviousIconContainer = styled(IconContainer)`
  transform: translate(-50%, -50%);
`;

export const NextIconContainer = styled(IconContainer)`
  right: 0;
  transform: translate(50%, -50%);
`;
