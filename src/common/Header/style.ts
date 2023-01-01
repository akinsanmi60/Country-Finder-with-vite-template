import styled from "styled-components";

const HeaderBox = styled.div`
  position: sticky;
  top: 0px;
  border-bottom: 1px solid rgb(223, 227, 231);
  z-index: 2;
  .big_nav {
    height: 70px;
    width: 100%;
    padding: 0 50px;
    background: var(--neutral-light);
    @media screen and (max-width: 768px) {
      padding: 0 30px;
      height: 50px;
    }

    @media screen and (max-width: 425px) {
      padding: 10px 20px;
      height: 60px;
    }
  }
  .small_nav {
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    height: 30px;
    font-weight: 700;
    font-size: 13px;
    color: var(--neutral-light);
    background: var(--dark-primary);
    .text {
      display: flex;
      gap: 35px;
    }

    p {
      margin-top: 5px;
      cursor: pointer;
    }

    @media screen and (max-width: 768px) {
      padding: 0 30px;
    }
    @media screen and (max-width: 425px) {
      padding: 0 20px;
      .mobile {
        display: none;
      }
    }
  }
`;
export default HeaderBox;
