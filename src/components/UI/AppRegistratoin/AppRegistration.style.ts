import styled from "styled-components";
export const SCAppRegistration = styled.div`
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid ${(props)=> props.theme.color.lightGray};
    
  
    span {
      display: inline-block;
      font-size: 16px;
      margin-bottom: 40px;
  
      a {
        display: inline;
        color: ${(props)=> props.theme.color.primecolor};
      }
    }
  
    p {
      margin-bottom: 30px;
    }
  `

