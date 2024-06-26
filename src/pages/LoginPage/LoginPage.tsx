import { Controller, useForm } from "react-hook-form";
import AppButton from "../../components/UI/AppButton/AppButton";
import AppInput from "../../components/UI/AppInput/AppInput";
import AppLink from "../../components/UI/AppLink/AppLink";
import { AppRegistration } from "../../components/UI/AppRegistratoin/AppRegistratoin";
import { SCLoginPage } from "./LoginPage.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate} from "react-router-dom";
import { useLoginUserMutation } from "../../store/Api/authApi";
import { useEffect } from "react";




// const mockUser = {
//     mail: "nvkl@gmail.com" ,
//     phone_number: +9989456456,
//     user_id: 1,
//     name: "Anatoliy",
//     reg_date: new Date().toISOString(),
//     city: "Pert",
// };

const loginFormSchema = yup.object({
  useremail: yup
  .string()
  .email()
  .required("Обазательное поле!"),
  userpassword: yup
  .string()
  .min(4, "Пароль должен содержать  как минимум 4 символа!")
  .required("Обязательное поле!"),
});

export const LoginPage = () => { 
  const navigate = useNavigate()

  const [loginUser,{data:userData}] = useLoginUserMutation()
  // const dispatch = useDispatch()
  // const user = useSelector((state: RootState)=>state.userSlice.user);
  // console.log(user);
    interface ILoginForm {
      useremail:string;
      userpassword:string;
    }
    const onLoginSubmit = (data:ILoginForm ) =>{    
      loginUser({email:data.useremail,password:data.userpassword})
      // dispatch(changeUser(mockUser));
      //  console.log(data);
      //  if(data){
      //    navigate("/profil-page");
      //  }
    }

    // const onLoginSubmit = ( ) =>{     
    // dispatch(changeUser(mockUser))
    //    }
    const {
       control, 
       handleSubmit,
       formState: {errors},
      } = useForm({
        defaultValues:{
          useremail:"",
          userpassword:"",
        },
        resolver:yupResolver(loginFormSchema),
    });
    useEffect(()=>{
     if(userData?.user_id){
      navigate("/main-page")
      localStorage.setItem("userData", JSON.stringify(userData.user_id))
     }
     console.log(userData)
        },[userData,navigate])
  return (
    
    <SCLoginPage className="LoginPage">
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
     <Controller
       control={control}
       name="useremail" 
       render={({field})=>(
         <AppInput
         isRequired={false}
          inputType="text"
          inputPlaceholder="Введите свой email"
          isError={errors.userpassword ? true : false}
          errorText={errors.useremail?.message}
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
        {/* <input type="tel" placeholder="Номер телефона" /> */}
    
       
        {/* <input type="password" placeholder="Пароль" /> */}
        {/* <button>Войти</button> */}
        <AppButton buttonText="Войти" buttonType="submit" isDisabled={false}/>
      </form>
      {/* <a href="#">Забыли пароль?</a> */}
      <AppLink  linkText="Забыли пароль"/>
     <AppRegistration/>
    </SCLoginPage>
  );
};
