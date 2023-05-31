import styled from "styled-components"

export const ContainerCatalogPage = styled.div`
  margin-bottom: 5rem;
`;

export const ContainerCatalog = styled.div`
  display: flex;
  flex-direction: column;
  padding: 29px 100px;
  background: #FBFBFB;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

  h1 {
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
    letter-spacing: 1px;
    color: #202020;
  }

  span {
    width: 34px;
    height: 5px;
    margin-top: 8px;
    border-radius: 5px;
    background: linear-gradient(90deg, rgba(161, 28, 243, 0.6) 0%, rgba(216, 53, 197, 0.6) 100%);
  }



  @media (max-width: 1024px) {
    padding: 29px 80px;
  }

  @media (max-width: 768px) {
    padding: 29px 60px;
  }

  @media (max-width: 425px) {
    padding: 29px 30px;
  }

  @media (max-width: 375px) {
    padding: 29px 30px;

    h1 {
      font-size: 20px;
    }

    span {
      width: 30px;
      height: 4px;
    }
  }

  @media (max-width: 320px) {
    h1 {
      font-size: 18px;
    }

    span {
      width: 28px;
    }
  }
`;