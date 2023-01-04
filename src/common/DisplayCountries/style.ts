import styled from "styled-components";

export const DisplayWrap = styled.div`
  .box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 10px;
  }
  .cardbox {
    margin-bottom: 25px;

    width: 100%;
  }
  img {
    width: 100%;
    height: 150px;
    margin-bottom: 15px;
  }

  h4 {
    font-size: 14px;
    font-weight: 700;
  }
  .tablebox {
    border: 1px solid #0e2038;
    border-top: 5px solid var(--dark-primary);

    width: 100%;
  }

  .details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 6px;
  }

  .details:nth-child(even) {
    background: var(--dark-primary);
    color: var(--neutral-light);
  }

  p {
    font-size: 13px;
  }
`;
