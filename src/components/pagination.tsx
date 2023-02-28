import React from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { ThemeContext } from "../context/themeContext";

type PaginationProp = {
  pageCount: number;
  handlePageClick: (e: any) => void;
};

const Pagination = ({ pageCount, handlePageClick }: PaginationProp) => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <StyledPagination theme={theme}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
      />
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: center;
    gap: 3rem;
    background: ${(props) =>
      props.theme === "light" ? "#50b9e8" : "var(--secondary-dark)"};
    color: ${(props) =>
      props.theme === "light"
        ? "var(--primary-color-dark)"
        : "var(--primary-color-dark)"};
    width: 80%;
    margin: 0 auto;
    margin-top: 6rem;
    padding: 1rem 0rem;
    font-weight: 500;
    font-size: 1.2rem;
    border-radius: 0.3rem;
  }

  .selected {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffff;
    background-color: var(--primary-color-dark);
  }
  li {
    a:hover {
      cursor: pointer;
      color: #ffff;
    }
  }

  .previous {
    color: var(--primary-color-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    border: 1px solid var(--primary-color-dark);
    border-radius: 0.3rem;
  }

  .next {
    color: var(--primary-color-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    border: 1px solid var(--primary-color-dark);
    border-radius: 0.3rem;
  }

  .disabled {
    border: 1px solid rgba(0, 0, 0, 0.2);
    a {
      cursor: not-allowed;
      color: rgba(0, 0, 0, 0.2);
    }
    a:hover {
      color: rgba(0, 0, 0, 0.2);
    }
  }

  @media only screen and (min-width: 280px) and (max-width: 767px) {
    ul {
      width: 100%;
      gap: 0.5rem;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    ul {
      width: 100%;
      gap: 2rem;
    }
  }
`;

export default Pagination;
