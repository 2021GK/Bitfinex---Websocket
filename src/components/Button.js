import PropTypes from 'prop-types'

const Button = ({color, onClick}) => {
    return ( 
        <div>
            <button onClick={onClick} style={{backgroundColor : color}} className='toggle-btn'>Toggle avatar</button>
        </div>
     );
}


 
Button.propTypes = {
text: PropTypes.string,
color: PropTypes.string,
onClick: PropTypes.func
}
export default Button;