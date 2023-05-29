import style from "styled-components"

export const ContainerHeader = style.header`
  width: 100%;
  padding: 24px 0;
  text-align: center;
  border: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #A11CF3, #D835C5);
  border-left: 0;
  border-right: 0;
  border-top: 0;
`;

export const ContainerFooter = style.footer`
  display: flex;
  justify-content: center;
  padding: 24px 0;
  gap: 36px;
  width: 100%;
  background-color: #E9E9E9;

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #322E2E;
  }
`;