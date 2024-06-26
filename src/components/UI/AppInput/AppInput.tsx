import { SCAppInput , ErrorMessage } from "./AppInput.style";
interface TOAppInput extends React.InputHTMLAttributes<HTMLInputElement> {
    inputType:| "password"| "name" | "user_city"  | "email"| "text"| "phone_number"  ;
    inputPlaceholder:string
    isError?: boolean;
    errorText?:string;
    isRequired:boolean;
}

const AppInput = ({inputType, 
    inputPlaceholder,
    isError,
    errorText,
    isRequired, 
    ...props
}:TOAppInput) => {
    return (
        <>
        <SCAppInput 
        required ={isRequired}
        type={inputType}
         placeholder={ inputPlaceholder} 
         {...props}
         $isError={isError|| false}/>
         {isError &&<ErrorMessage>{errorText}</ErrorMessage>}
         </> 
    );


};

export default AppInput;