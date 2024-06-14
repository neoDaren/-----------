import styled, { css } from "styled-components";
interface IStyledPostProps {
    $isLiked?: boolean;
    $isMarked?: boolean;
}
export const SCPost = styled.div<IStyledPostProps>`

  box-shadow: 0 0 10px ${(props) => props.theme.color.lightGray};
  padding: calc(1vw + 11px);
  background-color: ${(props) => props.theme.color.elemsBgc};
  border-radius: 20px;
  margin-bottom: 20px;

  position: relative;
${(props)=>props.$isLiked &&
css`
    .icon-wrapper {
      .icon-like {
        fill: ${(props) => props.theme.color.red};
        stroke: 0;
        stroke-width: 0;
      }

      .likes-count {
        color: ${(props) => props.theme.color.red};
      }
    }
`
}
${(props)=> props.$isMarked &&
css`
.icon-wrapper {
      .icon-mark {
        fill: ${(props) => props.theme.color.primeColor};
        stroke: 0;
        stroke-width: 0;
      }
    }
`
}
  &._marked {
    .icon-wrapper {
      .icon-mark {
        fill: ${(props) => props.theme.color.primeColor};
        stroke: 0;
        stroke-width: 0;
      }
    }
  }
  &__text {
    margin-bottom: 20px;
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
    background-color: ${(props) => props.theme.color.bgc};
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
      background-color: ${(props) => props.theme.color.lightGray};
    }

    .count {
      color: ${(props) => props.theme.color.darkGray};
      font-weight: 400;
    }

    .icon {
      height: 25px;
      overflow: visible;
      fill: transparent;
      transition: 200ms;
    }

    .icon-like {
      stroke: ${(props) => props.theme.color.darkGray};
      stroke-width: 2px;
    }

    .icon-mark {
      stroke: ${(props) => props.theme.color.darkGray};
      stroke-width: 2px;
    }

    &.mark {
      justify-self: self-end;
    }
  }
}
`
 