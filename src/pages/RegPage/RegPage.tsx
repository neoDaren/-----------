
import { Link, useNavigate } from "react-router-dom";
import AppButton from "../../components/UI/AppButton/AppButton";
import AppInput from "../../components/UI/AppInput/AppInput";
import { Heading } from "../../components/UI/Typography/Heading";
import "./RegPage.scss";
import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";

interface ILoginForm {
  name: string,
  email: string,
  phone_number: string,
  password: string,
}

export const RegPage = () => {
  const loginFormSchema = yup.object({
    name: yup.string().required('ОБЯЗАТЕЛЬНОЕ ПОЛЕ'),
    email: yup.string().required('ОБЯЗАТЕЛЬНОЕ ПОЛЕ!'),
    phone_number: yup.string().required('ОБЯЗАТЕЛЬНОЕ ПОЛЕ!'),
    password: yup.string().min(6, 'ПАРОЛЬ ДОЛЖЕН СОДЕРЖАТЬ БОЛЕЕ 4 СИМВОЛОВ!').required('ОБЯЗАТЕЛЬНОЕ ПОЛЕ!'),
  })

  const onLoginSubmit = (data : ILoginForm)=> {
    console.log(data);
    if (data) {
      navigate("/main-page");
    }
  }
  const navigate = useNavigate()
  const {control, handleSubmit, formState:{errors}} = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone_number:'',
      password: ''
    },
    resolver: yupResolver(loginFormSchema)
  
  })


  return (
    <div className="LoginPage">
      {/* <h1>Регистрация</h1> */}
    <Heading headerText={"Регистрация"} headerType={"h1"}/>
      <form action="#" onSubmit={handleSubmit(onLoginSubmit)}>

      <Controller
        control={control}
        name='name'
        render ={({field})=>(
          <AppInput inputType="name" inputPlaceholder="Имя" {...field}
          isError={errors.name ? true : false}
          errorText={errors.name ?.message}/>
        )}
      />

        <Controller 
        control={control}
        name='email'
        render ={({field})=>(
          <AppInput inputType="email" inputPlaceholder="Email" {...field}
          isError={errors.email ? true : false}
          errorText={errors.email ?.message}/>
        )}
        />
        <Controller 
        control={control}
        name='phone_number'
        render ={({field})=>(
          <AppInput inputType="tel" inputPlaceholder="Номер телефона" {...field}
          isError={errors.phone_number ? true : false}
          errorText={errors.phone_number ?.message}/>
        )}
        />

       <Controller
       control={control}
       name='password'
       render ={({field})=>(
         <AppInput inputType="password" inputPlaceholder="Пароль" {...field }
         isError={errors.password ? true : false}
         errorText={errors.password ?.message}/>
        )}
       />
      
      
        <AppButton buttonText="Зарегестрироватся" buttonType="submit" isDisabled={false}/>
      </form>
    </div>
  );
};
