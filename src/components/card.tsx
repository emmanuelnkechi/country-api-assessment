import styled from "styled-components";

import Flag from "../assets/flag.png";

const Countries = () => {
  return (
    <StyledCard>
      <div className="country">
        <div className="country__flag">
          <img src={Flag} alt="flag" />
        </div>
        <div className="country__info">
          <h4>Germany</h4>
          <div className="country__country-details">
            <div>
              {" "}
              <span>Population:</span> <span>81,770,900</span>
            </div>

            <div>
              {" "}
              <span>Region:</span> <span>Europe</span>
            </div>

            <div>
              {" "}
              <span>Capital:</span> <span>Berlin</span>
            </div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background: #ffffff;
  border-radius: 0.5rem;
  box-shadow: -7px -5px 7px -1px rgba(224, 217, 217, 0.75);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.03);
  }

  .country {
    &__flag {
      img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
      }
    }

    &__info {
      padding: 1rem 1.5rem 2rem 1.5rem;

      h4 {
        font-size: 1.2rem;
        margin: 0rem;
      }
    }

    &__country-details {
      div {
        margin-top: 0.5rem;

        span:first-child {
          font-weight: 500;
        }

        span:last-child {
          font-weight: 300;
        }
      }
    }
  }

  @media only screen and (min-width: 280px) and (max-width: 677px) {
    .country {
      &__info {
        padding: 1rem 0.5rem;
      }
    }
  }
`;

export default Countries;
