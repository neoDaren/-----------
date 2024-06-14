import { useParams } from "react-router-dom";

export const PostPage = () => {
    const {postId} = useParams()
    
    
    return (
        <h1>Порядковый номер давного поста {postId}</h1>
    );
};