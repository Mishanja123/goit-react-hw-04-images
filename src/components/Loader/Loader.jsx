import css from "./Loader.module.css"
import { Comment } from 'react-loader-spinner'


export const Loader = () => {
    return(
        <Comment
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperClass={css.commentWrapper}
        color="#fff"
        backgroundColor="#F4442E"
      />
    )
    }