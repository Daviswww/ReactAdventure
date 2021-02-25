import PropTypes from 'prop-types'

const Button = ({btnType, text, onClick}) => {
    return (
        <button 
        type="button" 
        className={`btn m-2 ${btnType}`} 
        onClick={onClick}>
            {text}
        </button>
    )
}

Button.propTypes = {
    btnType: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}


export default Button
