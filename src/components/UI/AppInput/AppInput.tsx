import { ErrorMessage, SCAppInput } from "./AppInput.style";
interface TOAppInput extends React.InputHTMLAttributes<HTMLInputElement> {
    inputType:"tel"| "password"| "name" | "surname" | "email",
    inputPlaceholder:string,
    errorText?:string
    isError?:boolean
}

const AppInput = ({inputType, inputPlaceholder,errorText,isError, ...props}:TOAppInput) => {
    return (
        <><SCAppInput type={inputType} placeholder={ inputPlaceholder} $isError={isError || false} {...props}/>
        {isError && <ErrorMessage>{errorText}</ErrorMessage>}
        </>
    );
};

export default AppInput;