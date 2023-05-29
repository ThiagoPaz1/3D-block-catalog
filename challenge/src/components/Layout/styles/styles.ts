import style from "styled-components"

export const ContainerHeader = style.header`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 24px 0;
  border: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #A11CF3, #D835C5);
  border-left: 0;
  border-right: 0;
  border-top: 0; 

  @media (max-width: 425px) {
    img {
      width: 110px;
    }
  }

  @media (max-width: 375px) {
    img {
      width: 100px;
    }
  }

  @media (max-width: 320px) {
    img {
      width: 91px;
    }
  }
`;

export const ContainerFooter = style.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 24px 0;
  gap: 36px;
  background-color: #E9E9E9;
  position: absolute;
  bottom: 0;

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #322E2E;
  }

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 0;
    gap: 12px;

    span {
      width: 157px;
      margin-left: 14px;
      font-size: 15px;
      line-height: 19px
    }
  }

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 0;
    gap: 12px;

    span {
      width: 147px;
      margin-left: 14px;
      font-size: 14px;
      line-height: 19px
    }
  }

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 0;
    gap: 12px;

    span {
      width: 147px;
      margin-left: 14px;
      font-size: 14px;
      line-height: 19px
    }
  }
`;