import styled from "styled-components";

export const SCPostSetting = styled.div`
position:absolute;
top: 0;
right: 0;
display: flex;
gap: 20px;
padding: 5px 20px;
border-radius: 8px;
-webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);

`;
export const SCPostFormBox = styled.form`
display: flex;
flex-flow: column;
justify-content: space-between;
gap: 32px;
min-width: 460px;
`
export const SCPostFormHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const SCPostFormFooter = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 20px;
button{
  width: 120px;
}
`