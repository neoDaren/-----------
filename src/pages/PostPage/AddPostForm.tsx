// import Modal from 'react-modal';
// import { SCPostFormBox, SCPostFormFooter, SCPostFormHeader } from './PostSetting.styled';
// import { Heading } from '../../components/UI/Typography/Heading';
// import AppButton from '../../components/UI/AppButton/AppButton';
// import { Controller, useForm } from "react-hook-form";
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';

// interface addNewPostForm{
//      isOpen:boolean
//      onCloseModal: () => void;
// }
//     const customStyles = {
//         content: {
//           top: '50%',
//           left: '50%',
//           right: 'auto',
//           bottom: 'auto',
//           marginRight: '-50%',
//           transform: 'translate(-50%, -50%)',
//         },
//       };
// const addPostSceme = yup.object({
//     addPost: yup.string().required("Введите текст поста")
// })

// export const AddPostForum = ({isOpen}:addNewPostForm) => {
//     const{
//      control,
//      handleSubmit,
//      FormState: { error },
//     } = useForm({
//         defaultValues: {
//             addPost:""
//         },
//         resolver: yupResolver(addPostSceme),
//     });

//     }

//     return (
//         <Modal isOpen = {isOpen} style={customStyles}>
//            <SCPostFormBox>
//             <SCPostFormHeader>
//                 <Heading headingType={'h1'} headingText={'Добавить новый пост'}/>
//             </SCPostFormHeader>
//             <Controller
//        control={control}
//        name="useremail" 
//        render={({field})=>(
//          <AppInput
//          isRequired={false}
//           inputType="text"
//           inputPlaceholder="Введите свой email"
//           isError={errors.userpassword ? true : false}
//           errorText={errors.useremail?.message}
//           {...field}
          
//           />
//        )}/>
//               <SCPostFormFooter>
//                 <AppButton buttonText={'Изменить '} buttonType={'submit'}/>  
//                 <AppButton buttonText={'Отменить'} buttonType={'submit'}/>
//               </SCPostFormFooter>
//             </SCPostFormBox>   
//         </Modal>
//     );
// };

// export default AddPostForum;

import Modal from "react-modal";
import {
  SCPostFormBox,
  SCPostFormFooter,
  SCPostFormHeader,
} from "./PostSetting.styled";
import { Heading } from "../../components/UI/Typography/Heading";
import AppButton from "../../components/UI/AppButton/AppButton";
import { Controller, useForm, SubmitHandler} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AppInput from "../../components/UI/AppInput/AppInput";
import { useUserId } from "../../hooks/useUSerid";
import {useAddNewPostMutation} from "../../store/Api/postApi"
interface addNewPostForm {
  isOpen: boolean;
  onCloseModal: () => void;
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const addPostSceme = yup.object({
  addPost: yup.string().required("Введите текст поста"),
});
export const AddPostForm = ({ isOpen }: addNewPostForm) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      addPost: "",
    },
    resolver: yupResolver(addPostSceme),
  });
  const userId = useUserId()
  console.log("userId",userId)
  const [addNewPost,{data: postData, isLoading, isSuccess}] = useAddNewPostMutation(); 
  const handleSubmitFormSubmit :SubmitHandler<{ addPost: string}> = (
    formData)=> {
    if(formData){
      let payload = {
        user_id:Number(userId),
        main_text:formData.addPost,
      };
      addNewPost(payload)
      onCloseModal()
    }if(isSuccess){
      onCloseModal()
    }
  };
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <SCPostFormBox onSubmit={handleSubmit(handleSubmitFormSubmit)}>
        <SCPostFormHeader>
          <Heading headingText="Добавить новый поста" headingType="h2" />
        </SCPostFormHeader>
        <Controller
          control={control}
          name="addPost"
          render={({ field }) => (
            <AppInput
              isRequired={false}
              inputType="text"
              inputPlaceholder="Введите свой email"
              isError={errors.addPost ? true : false}
              errorText={errors.addPost?.message}
              {...field}
            />
          )}
        />
        <SCPostFormFooter>
          <AppButton isDisabled={isLoading} buttonText="Добавить" buttonType="submit" />
          <AppButton isDisabled={isLoading} buttonText="Отменить" buttonType="submit" />
        </SCPostFormFooter>
      </SCPostFormBox>
    </Modal>
  );
};
