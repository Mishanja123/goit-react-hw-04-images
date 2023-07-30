import PropTypes from "prop-types";
import css from "./Button.module.css"

export const Button = ({loadMore}) => {
    return(
        <button className={css.loadMoreBtn} type="button" onClick={loadMore}>Load more</button>
    )
}
Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
};