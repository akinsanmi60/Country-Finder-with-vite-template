import styled from "styled-components";

const OuterLayout = styled.section`
  padding: 1.5rem 3rem;

  @media screen and (max-width: 990px) {
    padding: 1rem 2rem;
  }
`;
export default OuterLayout;

export const InnerLayout = styled.section`
  padding: 2rem 0;
`;
