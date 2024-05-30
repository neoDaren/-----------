
import AppButton from "../../components/UI/AppButton/AppButton";
import AppInput from "../../components/UI/AppInput/AppInput";
import "./RegPage.scss";

export const RegPage = () => {
  return (
    <div className="LoginPage">
      <h1>Регистрация</h1>
      <form action="#">
      <AppInput 
        inputType="name"
        inputPlaceholder="Имя"
        />
             <AppInput 
        inputType="surname"
        inputPlaceholder="Фамилия"
        />
        <AppInput 
        inputType="tel"
        inputPlaceholder="Номер телефона"
        />
      
        <AppInput 
         inputType="password"
         inputPlaceholder="Пароль"/>
        <AppButton buttonText="Зарегестрироватся" buttonType="submit" isDisabled={false}/>
      </form>
    </div>
  );
};
