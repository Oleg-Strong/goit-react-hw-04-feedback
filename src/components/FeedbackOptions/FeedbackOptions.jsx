import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
const colors = ['#55ff00', '#fff700', '#ff0505'];
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackOptions}>
      {options.map((option, idx) => {
        return (
          <button
            className={css.feedbackBtn}
            onClick={() => onLeaveFeedback(option)}
            key={option}
            type="button"
            style={{ backgroundColor: colors[idx] }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
export default FeedbackOptions;
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
