import Modal from 'react-modal';
import { SCPostFormBox, SCPostFormFooter, SCPostFormHeader } from './PostSetting.styled';
import { Heading } from '../../components/UI/Typography/Heading';
import AppButton from '../../components/UI/AppButton/AppButton';


interface addNewPostForm{
     isOpen:boolean
     onCloseModal: () => void;
}

const EditPostForum = ({isOpen}:addNewPostForm) => {
    return (
        <Modal isOpen = {isOpen}>
           <SCPostFormBox>
            <SCPostFormHeader>
                <Heading headingType={'h1'} headingText={'Редакция поста'}/>
            </SCPostFormHeader>
              <SCPostFormFooter>
                <AppButton buttonText={'Изменить '} buttonType={'submit'}/>  
                <AppButton buttonText={'Отменить'} buttonType={'submit'}/>
              </SCPostFormFooter>
            </SCPostFormBox>   
        </Modal>
    );
};

export default EditPostForum;