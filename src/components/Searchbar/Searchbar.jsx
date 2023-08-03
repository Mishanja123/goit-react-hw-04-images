import PropTypes from 'prop-types';
import css from "./Searchbar.module.css"


export const Searchbar = ({onSubmit}) =>  {
    // state = {
    //     text: "",
    // }
    // onSubmit = this.props.onSubmit
    // onSubmit = (e) => {
    //     e.preventDefault();
    //     const keyword = e.currentTarget.elements.keyword
    //     console.log("test",keyword)
    //     if (keyword === '') {
    //       return;
    //     }
    //     this.setState({
    //       page: 1,
    //       keyword,
    //       hits: [],
    //     })
    //     // this.setState({ text: ''});
    // }

    // handleChange = ({ target: { text, value } }) => {
    //     this.setState({ [text]: value });
    //   };

    return(
        <header className={css.searchbar}>
            <form className={css.form} onSubmit={onSubmit}>
                 <button type="submit" className={css.button}>
                    <span className={css.buttonLabel}>&#128269;</span>
                </button>

                <input
                    className={css.input}
                    type="text"
                    name='keyword'
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    // onChange={handleChange}
                />
             </form>
        </header>
    )
}
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

