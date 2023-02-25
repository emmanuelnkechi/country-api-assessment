import Card from "../card";
import styled from "styled-components";

const Countries = () => {
  return (
    <StyledDiv>
      <div className="list">
        <div className="list__search">
          <input type="text" placeholder="Search for a country..." />

          <div className="list__search--right-align">
            <button className="dropbtn">Filter by Region</button>
            <div className="dropContent">
              <button>Germany</button>
              <button>Nigeria</button>
              <button>Germany</button>
              <button>Nigeria</button>
              <button>Germany</button>
              <button>Nigeria</button>
              <button>Germany</button>
              <button>Nigeria</button>
              <button>Germany</button>
              <button>Nigeria</button>
            </div>
            <i className="fa fa-chevron-down"></i>
          </div>
        </div>

        <div className="list__countries">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((country, index) => (
            <Card />
          ))}
        </div>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  padding: 4rem 6rem;

  .list {
    &__countries {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 4rem;
      background: #fafafa;
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

        .dropbtn {
          font-size: 16px;
          border: none;
          background: transparent;
          font-weight: 500;
          outline: none;
          cursor: pointer;
        }

        i {
          font-size: 16px;
          margin-left: 1.5rem;
        }

        .dropContent {
          display: none;
          position: absolute;
          top: 3.6rem;
          background-color: #ffffff;
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
            background-color: #ffffff;

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
              background-color: #facf45;
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
