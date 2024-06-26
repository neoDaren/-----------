import { SCUserElem } from "./UserElem.style";
interface IUserElem {
  mainText: string;
  linkImg: string;
  secondaryText: string;
  online?:string
}

export const UserElem = ({linkImg, mainText, secondaryText,online}: IUserElem) => {
    return (
        <SCUserElem>
                <img src={linkImg} alt="User" />
                <div className="user__description">
                  <p className="main__text">{mainText}</p>
                  <p className={`secondary__text ${online}`}>{secondaryText}</p>
                </div>
                <span className="Badge">3</span>
              </SCUserElem>
    );
};

// "./img/profile/profile-img-1.jpeg"N E WРазвитие