import { Controller, useForm } from "react-hook-form";
import AppButton from "../../components/UI/AppButton/AppButton";
import AppInput from "../../components/UI/AppInput/AppInput";
import { SCRegPage } from "./RegPage.style";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterUserMutation } from "../../store/Api/authApi";
import { useEffect } from "react";

const registrationFormSchema = yup.object({
  useremail: yup
  .string()
  .email()
  .required("Обазательное поле!"),
  username: yup
  .string()
  .min(2, "Имя должно соблюдать минимум 2 символа")
  .max(20, "Имя пользователя не должно превышать 20 символов")
  .matches(/^[A-Za-zА-Яа-яЁё]+$/, "Имя может содержать только буквы")
  .required("Обазательное поле!"),
  userpassword: yup
  .string()
  .min(4, "Пароль должен содержать  как минимум 4 символа!")
  .required("Обязательное поле!"),
  phone_number: yup
  .string()
  .matches(/^\+\d{6,15}$/, "Некорректный номер телефона")
  .required("Обязательное поле!"),
  user_city: yup
  .string()
  .min(2, "Название города должно содержать минимум 2 символа!")
  .max(40, "Название города не должно превышать 40 символов")
  .matches(/^[A-Za-zА-Яа-яЁё\s-]+$/, "Город может содержать только буквы, тире и пробелы")
  .required("Обязательное поле!"),
  
});
export const RegPage = () => {


  const navigate = useNavigate()
  const [ registerUser,{data:userData}] =  useRegisterUserMutation()
    interface IRegistrationForm {
      useremail:string,
        userpassword:string,
        username:string,
        phone_number:string,
        user_city:string,
    }
    const onRegistrationSubmit = (data:IRegistrationForm ) =>{
      registerUser({name:data.username,email:data.useremail,password:data.userpassword,phone_number:data.phone_number,user_city:data.user_city})
      // console.log(data);
      // if(data){
      //   navigate("/")
      // }
    }

    const { 
      control, 
      handleSubmit,
      formState: {errors},
     } = useForm({
       defaultValues:{
        useremail:"",
        userpassword:"",
        phone_number:"",
        username:"",
        user_city:""

       },
       resolver:yupResolver(registrationFormSchema),
   });
   useEffect(()=>{
    if(userData?.user_id){
     navigate("/")
    }
    console.log(userData)
       },[userData,navigate])
  return (
    <SCRegPage className="RegPage">
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit(onRegistrationSubmit)}>

      <Controller
       control={control}
       name="username" render={({field})=>(
         <AppInput 
         isRequired={false}
          inputType="name"
          inputPlaceholder="Введите своё имя"
          isError={errors.username ? true : false}
          errorText={errors.username?.message}
          {...field} 
          />
       )}/>
            <Controller
       control={control}
       name="userpassword" render={({field})=>(
        <AppInput 
        isRequired={false}
         inputType="password"
         inputPlaceholder="Пароль" 
         isError={errors.userpassword ? true : false}
         errorText={errors.userpassword?.message}
          {...field}/>  
          )}/>

        <Controller
       control={control}
       name="useremail" 
       render={({field})=>(
         <AppInput 
         isRequired={false}
          inputType="email"
          inputPlaceholder="Введите свой email"
          isError={errors.useremail ? true : false}
          errorText={errors.useremail?.message}
          {...field} />
       )}/>
      
      <Controller
       control={control}
       name="phone_number" render={({field})=>(
         <AppInput 
         isRequired={false}
          inputType="phone_number"
          inputPlaceholder="Номер телефона"
          isError={errors.phone_number ? true : false}
          errorText={errors.phone_number?.message}
          {...field} />
       )}/>
      
      
      <Controller
       control={control}
       name="user_city" render={({field})=>(
         <AppInput 
         isRequired={false}
          inputType="user_city"
          inputPlaceholder="Город"
          isError={errors.user_city ? true : false}
          errorText={errors.user_city?.message}
          {...field} />
       )}/>

        
        <AppButton buttonText="Зарегестрироватся" buttonType="submit" isDisabled={false}/>
      </form>
    </SCRegPage>
  );
};
