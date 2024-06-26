import styled from "styled-components"
export const SCRegPage = styled.div`

    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  

  .LoginPage h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .LoginPage form {
    display: flex;
    flex-direction: column;
  }

  .LoginPage form .AppInput {
    margin-bottom: 15px;
  }

  .LoginPage form .AppButton {
    margin-top: 20px;
  }

  .AppInput input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .AppButton button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .AppButton button:hover {
    background-color: #0056b3;
  }

  .AppButton button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  /* Добавлены стили из SCLoginPage */
  box-shadow: 0 0 10px ${(props) => props.theme.color.lightGray};
  border-radius: 20px;
  background-color: ${(props) => props.theme.color.elemBgc};
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  padding: 40px;

  h1 {
    margin-bottom: 50px;
  }

  input {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    border: ${(props) => props.theme.color.lightprime};
    background-color: transparent;

    &:last-child {
      margin-bottom: 40px;
    }

    &:is(:hover, :focus) {
      border-color: ${(props) => props.theme.color.primeColor};
    }
  }

  button {
    width: 100%;
    margin-bottom: 30px;
  }

  a {
    display: inline-block;
    width: 100%;
    text-align: right;
    text-decoration: none;
    color: ${(props) => props.theme.color.gray};

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 530px) {
    .LoginPage {
      width: 100%;
    }
  }

  .registration {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid ${(props) => props.theme.color.primecolor};

    span {
      display: inline-block;
      font-size: 16px;
      margin-bottom: 40px;

      a {
        display: inline;
        color: ${(props) => props.theme.color.primecolor};
      }
    }

    p {
      margin-bottom: 30px;
    }
  }

  .icons-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  .icon {
    width: 100%;
    height: 100%;
  }

  .reg__link {
    flex: 0 0 58px;
    transition: 200ms;

    &:hover {
      scale: 1.1;
    }

    &:active {
      scale: 0.9;
      transition: 100ms;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`



/* .LoginPage {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.LoginPage h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.LoginPage form {
  display: flex;
  flex-direction: column;
}

.LoginPage form .AppInput {
  margin-bottom: 15px;
}

.LoginPage form .AppButton {
  margin-top: 20px;
}


.AppInput input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.AppButton button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.AppButton button:hover {
  background-color: #0056b3;
}

.AppButton button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}


`
 */

