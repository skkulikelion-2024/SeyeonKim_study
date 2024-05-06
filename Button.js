import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button ({text}) {
	return (
            // 1번 방법
            // <button stule = {{
            //     backgroundColor: "tomato",
            //     color: "white",}}
            // >
            //     {text}
            // </button>

            <button className = {styles.btn}>{text}</button>
        );
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
}

export default Button;