import React, { useEffect, useState } from "react";
import Card from "../card";
import styled from "styled-components";
import { ICountry } from "../../model/common.interface";
import Pagination from "../pagination";
import { CountryContext } from "../../context/countryContext";
import { ThemeContext } from "../../context/themeContext";

const Countries = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItem, setCurrentItem] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const itemsPerPage = 12;
  const endOffset = itemOffset + itemsPerPage;

  const { countries, region, setSearchValue, setFilterValue } =
    React.useContext(CountryContext);

  const { theme } = React.useContext(ThemeContext);

  useEffect(() => {
    const currentItems = countries.slice(itemOffset, endOffset);
    setCurrentItem(currentItems);
    const getPageCount = Math.ceil(countries.length / itemsPerPage);
    setPageCount(getPageCount);
  }, [countries, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % countries.length;
    setItemOffset(newOffset);
  };

  const handleSearch = (e) => {
    setInputValue(e.target.value);
    setSearchValue(e.target.value);
  };

  const handleFilter = (item) => {
    if (item !== "Filter by Region") {
      setSelectValue(item);
      setFilterValue(item);
    } else {
      setSelectValue("");
      setFilterValue("");
    }
  };

  return (
    <StyledDiv theme={theme}>
      <div className="list">
        <div className="list__search">
          <input
            value={inputValue}
            name="search"
            onChange={handleSearch}
            type="text"
            placeholder="Search for a country..."
          />

          <div className="list__search--right-align">
            <button className="dropbtn">
              {selectValue ? selectValue : "Filter by Region"}
            </button>
            <div className="dropContent">
              {region.length &&
                region.map((item) => (
                  <button onClick={() => handleFilter(item)}>{item}</button>
                ))}
            </div>
            <i className="fa fa-chevron-down"></i>
          </div>
        </div>

        <div className="list__countries">
          {currentItem.map((country: { country: ICountry }, index: number) => (
            <Card country={country} index={index} />
          ))}
        </div>
      </div>

      <Pagination
        pageCount={pageCount}
        handlePageClick={handlePageClick}
        theme={theme}
      />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  padding: 4rem 6rem;
  background: ${(props) =>
    props.theme === "light" ? "var(--primary-white)" : "var(--primary-dark)"};

  .list {
    &__countries {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 4rem;
      margin-top: 4rem;
    }

    &__search {
      display: grid;
      grid-template-columns: 1fr 1fr;

      &--right-align {
        justify-self: right;
        position: relative;
        display: inline-block;
        padding: 0.3rem 1rem;
        box-shadow: 0px 1px 10px 0px rgba(147, 146, 146, 0.5);
        border-radius: 0.5rem;
        padding: 16px;
        cursor: pointer;
        background: ${(props) =>
          props.theme === "light"
            ? "var(--primary-color-light)"
            : "var(--secondary-dark)"};
        color: ${(props) =>
          props.theme === "light"
            ? "var(--primary-color-dark)"
            : "var(--primary-color-dark)"};

        .dropbtn {
          font-size: 16px;
          border: none;
          background: transparent;
          font-weight: 500;
          outline: none;
          cursor: pointer;
          background: ${(props) =>
            props.theme === "light"
              ? "var(--primary-color-light)"
              : "var(--secondary-dark)"};
          color: ${(props) =>
            props.theme === "light"
              ? "var(--primary-color-dark)"
              : "var(--primary-color-dark)"};
        }

        i {
          font-size: 16px;
          margin-left: 1.5rem;
        }

        .dropContent {
          display: none;
          position: absolute;
          top: 3.6rem;
          background: ${(props) =>
            props.theme === "light"
              ? "var(--primary-color-light)"
              : "var(--secondary-dark)"};
          width: 100%;
          right: 0rem;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;
          border-radius: 0.5rem;

          button {
            color: black;
            padding: 1rem 1.5rem;
            display: block;
            width: 100%;
            border: none;
            font-size: 1rem;
            text-align: left;
            font-weight: 500;
            background: ${(props) =>
              props.theme === "light"
                ? "var(--primary-color-light)"
                : "var(--secondary-dark)"};
            color: ${(props) =>
              props.theme === "light"
                ? "var(--primary-color-dark)"
                : "var(--primary-color-dark)"};

            :first-child {
              border-top-left-radius: 0.5rem;
              border-top-right-radius: 0.5rem;
            }

            :last-child {
              border-bottom-left-radius: 0.5rem;
              border-bottom-right-radius: 0.5rem;
            }

            :hover {
              color: #fff;
              background-color: #50b9e8;
            }
          }
        }

        &:hover {
          .dropContent {
            display: block;
          }
        }
      }

      input {
        padding: 1rem 2rem;
        width: 60%;
        border: none;
        box-shadow: 0px 1px 10px 0px rgba(147, 146, 146, 0.5);
        border-radius: 0.5rem;
        outline: none;
        background: ${(props) =>
          props.theme === "light"
            ? "var(--primary-color-light)"
            : "var(--secondary-dark)"};
        color: ${(props) =>
          props.theme === "light"
            ? "var(--primary-color-dark)"
            : "var(--primary-color-light)"};
      }

      input::placeholder {
        color: #8f8f8f;
        font-size: 1.1rem;
        font-weight: 500;
      }
    }
  }

  @media only screen and (min-width: 280px) and (max-width: 677px) {
    padding: 2rem 1rem;

    .list {
      &__countries {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem 1rem;
        margin-top: 3rem;
      }

      &__search {
        display: grid;
        grid-template-columns: 1fr;

        &--right-align {
          margin-top: 1rem;
          justify-self: left;
          width: 50%;
        }

        input {
          padding: 1rem;
          width: 50%;
          font-size: 0.8rem;
        }
      }
    }
  }

  @media only screen and (min-width: 678px) and (max-width: 1024px) {
    padding: 2rem;

    .list {
      &__countries {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 4rem 1rem;
        margin-top: 4rem;
      }
    }
  }
`;

export default Countries;
