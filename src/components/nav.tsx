import React from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/themeContext";

const Nav = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <StyledDiv theme={theme}>
      <div className="nav">
        <div className="nav__header">Where in the World?</div>
        {theme === "light" ? (
          <div className="nav__icon" onClick={toggleTheme}>
            <i className="fa fa-moon-o"></i>
            <span>Dark Mode</span>
          </div>
        ) : (
          <div className="nav__icon" onClick={toggleTheme}>
            <i className="fa fa-sun-o"></i>
            <span>Light Mode</span>
          </div>
        )}
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  .nav {
    padding: 1rem 6rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid var(--primary-color-dark);
    box-shadow: 0px 1px 10px 0px rgba(147, 146, 146, 0.5);
    background: ${(props) =>
      props.theme === "light"
        ? "var(--primary-color-light)"
        : "var(--secondary-dark)"};
    color: ${(props) =>
      props.theme === "light"
        ? "var(--primary-color-dark)"
        : "var(--primary-white)"};

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
        color: #50b9e8;
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

  @media only screen and (min-width: 280px) and (max-width: 677px) {
    .nav {
      padding: 1rem;

      &__header {
        font-size: 1rem;
      }

      &__icon {
        span {
          margin-left: 0.8rem;
          font-weight: 500;
          font-size: 1rem;
        }

        i {
          font-size: 20px;
        }
      }
    }
  }

  @media only screen and (min-width: 678px) and (max-width: 1024px) {
    .nav {
      padding: 2rem;
    }
  }
`;

export default Nav;
