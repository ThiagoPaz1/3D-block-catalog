import styled from "styled-components"

export const ContainerAnnouncementBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 11px 0;
  gap: 18px;
  background-color: #242424;

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    
    span {
      font-size: 18px;
      font-weight: bolder;
      margin-left: 5px;
    }
  }

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 24px 0;

    div {
      font-weight: 600;
      font-size: 15.5px;
      line-height: 20px;
      color: #FFFFFF;

      img {
        margin-left: 9.33px;
      }
    }

    p {
      width: 350px;
      font-size: 16px;
      line-height: 20px;
      text-align: center;

      span {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 375px) {
    flex-direction: column;
    padding: 24px 0;

    div {
      font-weight: 600;
      font-size: 15.5px;
      line-height: 20px;
      color: #FFFFFF;

      img {
        margin-left: 9.33px;
      }
    }

    p {
      width: 320px;
      font-size: 16px;
      line-height: 20px;
      text-align: center;

      span {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 320px) {
    flex-direction: column;
    padding: 24px 0;

    div {
      font-weight: 600;
      font-size: 15px;
      line-height: 20px;
      color: #FFFFFF;

      img {
        margin-left: 9.33px;
      }
    }

    p {
      width: 292px;
      font-size: 15px;
      line-height: 20px;
      text-align: center;

      span {
        font-size: 15px;
      }
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 235px;
  height: 43px;
  background: linear-gradient(90deg, rgba(161, 28, 243, 0.6) 0%, rgba(216, 53, 197, 0.6) 100%);
  padding: 10.5px 0;
  border-radius: 8px;
  border: 1px solid transparent;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #A11CF3, #D835C5);
  -webkit-mask: linear-gradient(to right, #A11CF3, #D835C5);
  cursor: pointer;

  a {
    color: #FFFFFF;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-decoration: none;
  }

  img {
    margin-left: 15px;
  }

  @media (max-width: 425px) {
    width: 230px;
    padding: 12px 0;

    img {
      align-self: center;
      width: 13px;
      height: 13px;
      margin-left: 13.33px;
    }
  }

  @media (max-width: 375px) {
    width: 230px;
    padding: 10px 0;

    img {
      align-self: center;
      width: 12px;
      height: 12px;
      margin-left: 13.33px;
    }
  }

  @media (max-width: 320px) {
    width: 223px;
    padding: 10px 0;

    img {
      align-self: center;
      width: 12px;
      height: 12px;
      margin-left: 13.33px;
    }
  }
`;