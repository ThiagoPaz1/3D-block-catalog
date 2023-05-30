import styled from "styled-components"

export const ContainerAnnouncementBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 21px 0;
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
`;