import styled from "styled-components";

const Nav = () => {
  return (
    <StyledDiv>
      <div className="nav">
        <div className="nav__header">Where in the World?</div>
        <div className="nav__icon">
          <i className="fa fa-moon-o"></i>
          <span>Dark Mode</span>
        </div>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  .nav {
    background: #ffffff;
    padding: 1rem 6rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid #000;
    box-shadow: 0px 1px 10px 0px rgba(147, 146, 146, 0.5);

    &__header {
      font-size: 1.5rem;
      font-weight: 600;
    }

    &__icon {
      justify-self: right;
      display: flex;
      align-items: center;
      cursor: pointer;

      :hover {
        color: #facf45;
      }

      span {
        margin-left: 1rem;
        font-weight: 500;
        font-size: 1.2rem;
      }

      i {
        font-size: 24px;
      }
    }
  }
`;

export default Nav;
