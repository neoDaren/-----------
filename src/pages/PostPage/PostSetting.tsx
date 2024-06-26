import { SCPostSetting } from "./PostSetting.styled";

type TPostSetting={
    onEditClick?:()=>void
    onDeleteClick?:()=>void
}

export const PostSetting = ({ onDeleteClick,onEditClick}:TPostSetting) => {
        return (
            <SCPostSetting>
                <span onClick={ onEditClick}>Изменить</span>
                <span onClick={ onDeleteClick}>Удалить</span>
            </SCPostSetting>
        );
};

