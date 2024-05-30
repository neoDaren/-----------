import { SCAppInput } from "./AppInput.style";
interface TOAppInput extends React.InputHTMLAttributes<HTMLInputElement> {
    inputType:"tel"| "password"| "name" | "surname" | "email",
    inputPlaceholder:string,

}

const AppInput = ({inputType, inputPlaceholder, ...props}:TOAppInput) => {
    return (
        <SCAppInput type={inputType} placeholder={ inputPlaceholder} {...props}/>
    );
};

export default AppInput;