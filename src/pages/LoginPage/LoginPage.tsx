import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import AppButton from "../../components/UI/AppButton/AppButton";
import AppInput from "../../components/UI/AppInput/AppInput";
import AppLink from "../../components/UI/AppLink/AppLink";
import { AppRegistration } from "../../components/UI/AppRegistratoin/AppRegistratoin";
// import "./LoginPage.scss";
import { SCLoginPage } from "./LoginPage.style";
import * as yup from 'yup'
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
interface ILoginForm {
    useremail: string,
    userpassword: string
}
export const LoginPage = () => {
const onLoginSubmit = (data : ILoginForm)=> {
  console.log(data);
  if (data) {
    navigate("/login-page");
  }
}
const navigate = useNavigate()
const {control, handleSubmit} = useForm({
  defaultValues: {
    useremail: "",
    userpassword: ""
  }
})
  return (
    <SCLoginPage className="LoginPage">
      <h1>Авторизация</h1>
      
      <form action="#" onSubmit={handleSubmit(onLoginSubmit)}>  
      <Controller 
      control={control}
      name='useremail'
      render ={({field})=>(
        <AppInput inputType="email" inputPlaceholder="Ваш email" {...field}/>
      )}
      />      
      <Controller 
      control={control}
      name='userpassword'
      render ={({field})=>(
        <AppInput inputType="password" inputPlaceholder="Пароль" {...field}/>
        )}
      />   
          {/* <AppInput inputType="email" inputPlaceholder="Ваш email"/>
        <AppInput inputType="email" inputPlaceholder="Ваш email"/> */}
        {/* <input type="tel" placeholder="Номер телефона" /> */}
        {/* <AppInput 
         inputType="password"
         inputPlaceholder="Пароль"/> */}
        {/* <input type="password" placeholder="Пароль" /> */}
        {/* <button>Войти</button> */}
        <AppButton buttonText="Войти" buttonType="submit" isDisabled={false}/>
      </form>
      {/* <a href="#">Забыли пароль?</a> */}
      <AppLink  linkText="Забыли пароль?"/>
     <AppRegistration/>
    </SCLoginPage>
  );
};
