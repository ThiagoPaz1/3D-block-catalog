import styled from "styled-components"

export const ContainerListFamilies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 71.8%;
  margin: auto;
  margin-top: 34px;

  h1 {
    align-self: flex-start;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    color: #202020;
  }
`;

export const ContainerList = styled.ul`
  display: grid;
  grid-template-columns: 9.26% 9.26% 9.26% 9.26% 9.26% 9.26% 9.26%;
  justify-content: center;
  /* column-gap: 1rem;
  row-gap: 2rem; */
  margin-top: 18px;
`;