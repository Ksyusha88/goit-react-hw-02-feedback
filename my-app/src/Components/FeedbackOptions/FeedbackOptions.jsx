import {button} from './FeadbackOptions.module.css';
import PropTypes from "prop-types";


const FeadbackOptions = ({ options, onLeaveFeedback }) => {
    return Object.entries(options).map((element) => {
      return (
        <button
         className={button}
          key={element[0]}
          type="button"
          onClick={() => onLeaveFeedback(element[0])}
        >
          {element[0]}
        </button>
      );
    });
  };

  FeadbackOptions.propTypes = {
    options: PropTypes.objectOf(PropTypes.number).isRequired,
  };
  
  export default FeadbackOptions;
