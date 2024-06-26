interface IHeading {
    headingType:"h1"|"h2"|"h3"|"h4"|"h5"|"h6"
    headingText:string
}
export const Heading = ({headingType, headingText}:IHeading) => {
    const renderHeading = () =>{
        switch (headingType){
        case "h2":
            return <h2>{headingText}</h2>;
        case "h3":
            return <h2>{headingText}</h2>;
        case "h4":
            return <h2>{headingText}</h2>;
        case "h5":
            return <h2>{headingText}</h2>;
        case "h6":
            return <h2>{headingText}</h2>;
        
            default:
                return <h1>{headingText}</h1>;
    }
};
return renderHeading();
};
   