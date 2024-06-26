import styled, { css } from 'styled-components';

interface IStyledPostProps{
    $isLiked?:boolean,
    $isMarked?:boolean;
}
export const SCPost = styled.div<IStyledPostProps>`

  box-shadow: 0 0 10px ${props => props.theme.color.lightgray};
  padding: calc(1vw + 11px);
  background-color: ${props => props.theme.color.elemsbgc};
  border-radius: 20px;
  margin-bottom: 20px;

  position: relative;
  ${(props)=> props.$isLiked &&
   css`
    .icon-wrapper {
      .icon-like {
        fill: ${props => props.theme.color.red};
        stroke: 0;
        stroke-width: 0;
      }

      .likes-count {
        color: ${props => props.theme.color.red};
      }
    } 
    `}
  
   ${(props)=> props.$isMarked&&
     css`
       .icon-wrapper {
      .icon-mark {
        fill: ${props => props.theme.color.primecolor};
        stroke: 0;
        stroke-width: 0;
      }
    } 
     `}

  .UserElem {
    cursor: default;
    padding: 0;
    margin-bottom: 30px;

    &:hover {
      background-color: initial;
      scale: 1;
    }

    &::after {
      display: none; //? нижняя полоса в списке
    }

    img {
      flex: 0 0 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  &__text {
    margin-bottom: 20px;
  }
}
.Repost__wrapper {
  border-left: 1px solid ${props => props.theme.color.gray};
  padding-left: 30px;
  margin-left: 30px;
}

.PostControls {
  display: grid;
  grid-template-columns: repeat(3, auto) 2fr;

  justify-content: center;
  align-items: center;

  gap: 15px;

  .icon-wrapper {
    cursor: pointer;
    padding: 10px;
    background-color: ${props => props.theme.color.bgc};
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
      background-color: ${props => props.theme.color.lightgray};
    }

    .count {
      color: ${props => props.theme.color.darkgray};
      font-weight: 400;
    }

    .icon {
      height: 25px;
      overflow: visible;
      fill: transparent;
      transition: 200ms;
    }

    .icon-like {
      stroke: ${props => props.theme.color.darkgray};
      stroke-width: 2px;
    }

    .icon-mark {
      stroke: ${props => props.theme.color.darkgray};
      stroke-width: 2px;
    }

    &.mark {
      justify-self: self-end;
    }
  
}
`