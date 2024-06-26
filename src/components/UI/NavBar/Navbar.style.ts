import styled from 'styled-components';

export const SCNavbar = styled.div`
  margin-bottom: 20px;
  box-shadow: 0 0 10px ${(props) => props.theme.color.lightGray}; 
  border-radius: 20px;
  padding: calc(1vw + 11px);
  background-color: ${(props) => props.theme.color.elemsbgc}; 
  color: ${(props) => props.theme.color.textcolor};

  .navbar__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: stretch;
  }

  .navbar__item {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
    padding: 10px 15px;
    list-style: none;
    transition: 200ms;

    .icon {
      flex: 0 1 25px;
      height: calc(1vw + 5px); // Пример: 1440px - 20px | 1920px - 25px
      object-fit: contain;
      fill: ${(props) => props.theme.color.primeColor}; 
    }

    .item__name {
      flex: 1 1 auto;
    }
    .Badge{
      background-color: ${props =>props.theme.color.primeColor};
    }
    &:hover {
      background-color: ${(props) => props.theme.color.lightGray}; 
    }

    &:active {
      transition: 100ms;
      background-color: ${(props) => props.theme.color.primeColor}; 
      color: white;

      .icon {
        fill: white;
      }

      .Badge {
        background-color: ${(props) => props.theme.color.darkprime};
        color: ${(props) => props.theme.color.textcolor}; 
      }
    }
  }
`;
