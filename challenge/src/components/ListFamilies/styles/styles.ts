import styled from "styled-components"

export const ContainerListFamilies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin: auto;
  margin-top: 34px;

  h1 {
    align-self: flex-start;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    color: #202020;
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 20px;
    }
  }

  @media (max-width: 320px) {
    h1 {
      font-size: 18px;
    }
  }
`;

export const ContainerList = styled.ul`
  display: grid;
  grid-template-columns: 151px 151px 151px 151px 151px 151px 151px;
  justify-content: center;
  column-gap: 15px;
  row-gap: 16px;
  margin-top: 18px;

  @media (max-width: 1024px) {
    grid-template-columns: 162px 162px 162px 162px 162px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 151px 151px 151px 151px;
  }

  @media (max-width: 425px) {
    grid-template-columns: 173px 173px;
  }

  @media (max-width: 375px) {
    grid-template-columns: 150px 150px;
  }

  @media (max-width: 320px) {
    grid-template-columns: 130px 130px;
  }
`;

export const ContainerCardFamily = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  list-style: none;
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: 8px;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 23px;
    padding: 8px 0;
    border-color: #CCCCCC;
    border-style: solid;
    border-width: 1px 0 0 0;
    border-radius: 0 0 8px 8px;
    background-color: #F8F8F8;

    h3 {
      align-self: center;
      width: 128px;
      margin-left: 8px;
      font-weight: 600;
      font-size: 10px;
    }
  }
`;

export const Block3DImg = styled.img`
  width: 92px;
  height: 112px;
  padding: 25px 40px;
`;

export const ContainerImgs = styled.span`
  align-self: center;
  display: flex;
  margin-right: 8px;
`;

export const BarImg = styled.img`
  height: 20px;
  margin-left: 8px;
`;

export const ArrowOutImg = styled.img`
  align-self: center;
  width: 10px;
  height: 8px;
  margin-left: 8px;
`;

export const LimitListWarning = styled.h3`
  margin-top: 2.5rem;
  font-size: 2em;
  color: black;
`