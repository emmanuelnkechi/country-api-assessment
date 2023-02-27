import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";

const CountryDetails = ({}) => {
  const params = useParams();

  const { theme } = React.useContext(ThemeContext);

  const data = JSON.parse(localStorage.getItem("countries"));

  const singleCountry = data.filter(
    (country) => country.alpha3Code === params.countryCode.toUpperCase()
  );

  const listOfCurrencies = singleCountry[0]?.currencies
    .map((currency) => currency.name)
    .join(", ");
  const listOfLanguages = singleCountry[0]?.languages
    .map((language) => language.name)
    .join(", ");

  return (
    <StyledDetails theme={theme}>
      <div className="details">
        <div className="details__navigation-button">
          <Link to="/">
            <i className="fa fa-arrow-left"> </i>
            <span>Back</span>
          </Link>
        </div>

        <div className="details__content">
          <div className="details__content-image">
            <img src={singleCountry[0]?.flag} alt="flag" />
          </div>
          <div className="details__content-description">
            <h5>{singleCountry[0]?.name}</h5>

            <div className="details__country-info">
              <div className="details__country-info--left">
                <div>
                  <span className="label">Native Name: </span>
                  <span className="value">{singleCountry[0]?.nativeName}</span>
                </div>
                <div>
                  <span className="label">Population: </span>
                  <span className="value">{singleCountry[0]?.population}</span>
                </div>
                <div>
                  <span className="label">Region: </span>
                  <span className="value">{singleCountry[0]?.region}</span>
                </div>
                <div>
                  <span className="label">Sub Region: </span>
                  <span className="value">{singleCountry[0]?.subregion}</span>
                </div>
                <div>
                  <span className="label">Capital: </span>
                  <span className="value">{singleCountry[0]?.capital}</span>
                </div>
              </div>

              <div className="details__country-info--right">
                <div>
                  <span className="label">Top Level Domain: </span>
                  <span className="value">
                    {singleCountry[0]?.topLevelDomain.join(", ")}
                  </span>
                </div>
                <div>
                  <span className="label">Currencies: </span>
                  <span className="value">{listOfCurrencies}</span>
                </div>
                <div>
                  <span className="label">Languages: </span>
                  <span className="value">{listOfLanguages}</span>
                </div>
              </div>
            </div>

            {singleCountry[0].borders &&
              singleCountry[0].borders.length > 0 && (
                <div className="details__country-border">
                  <div className="border-label">Border Countries:</div>
                  <div className="borders">
                    {singleCountry[0].borders.map((border, index) => (
                      <Link to={`/details/${border}`} key={index}>
                        {border}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </StyledDetails>
  );
};

const StyledDetails = styled.div`
  padding: 4rem 6rem 13rem 4rem;
  background: ${(props) =>
    props.theme === "light" ? "var(--primary-white)" : "var(--primary-dark)"};
  color: ${(props) =>
    props.theme === "light"
      ? "var(--primary-color-dark)"
      : "var(--primary-color-light-dark)"};

  .details {
    &__navigation-button {
      cursor: pointer;
      a {
        box-shadow: 0px 1px 10px 0px rgba(147, 146, 146, 0.5);
        border-radius: 0.3rem;
        text-decoration: none;
        padding: 0.5rem 2rem;
        color: ${(props) =>
          props.theme === "light"
            ? "var(--primary-color-dark)"
            : "var(--primary-color-light-dark)"};

        span {
          margin-left: 0.5rem;
        }
      }
    }

    &__content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 4rem;
      gap: 5rem;
      align-items: center;
    }

    &__content-image {
      box-shadow: -7px -5px 7px -1px rgba(224, 217, 217, 0.75);
      height: 25rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__content-description {
      h5 {
        margin: 0;
        font-size: 1.5rem;
      }
    }

    &__country-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 1rem;

      &--left,
      &--right {
        div {
          margin-top: 0.4rem;
        }
        .label {
          font-weight: 600;
        }
        .value {
          font-weight: 400;
          color: #656464;
        }
      }
    }

    &__country-border {
      margin-top: 4rem;
      display: flex;
      gap: 0.5rem;

      .border-label {
        font-weight: 600;
      }
      .borders {
        display: flex;
      }

      a {
        box-shadow: 0px 1px 10px 0px rgba(147, 146, 146, 0.5);
        border-radius: 0.3rem;
        text-decoration: none;
        padding: 0.3rem 1rem;
        font-size: 0.8rem;
        cursor: pointer;
        color: ${(props) =>
          props.theme === "light"
            ? "#656464"
            : "var(--primary-color-light-dark)"};
      }
    }
  }

  @media only screen and (min-width: 280px) and (max-width: 677px) {
    padding: 2rem 1rem;
    .details {
      &__content {
        display: grid;
        grid-template-columns: 1fr;
      }

      &__country-info {
        display: grid;
        grid-template-columns: 1fr;

        &--right {
          margin-top: 2rem;
        }
      }

      &__country-border {
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  }

  @media only screen and (min-width: 678px) and (max-width: 1024px) {
    padding: 2rem 3rem 13rem 3rem;
    .details {
      &__content {
        display: grid;
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default CountryDetails;
