import css from './Statistics.module.css';
import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.statisticsList}>
      <li className={css['good']}>
        <p className={css.statisticText}>Good: {good}</p>
      </li>
      <li className={css['neutral']}>
        <p className={css.statisticText}>Neutral: {neutral}</p>
      </li>
      <li className={css['bad']}>
        <p className={css.statisticText}>Bad: {bad}</p>
      </li>
      <li className={css['total']}>
        <p className={css.statisticText}>Toal: {total}</p>
      </li>
      <li className={css.statisticsItem}>
        <p className={css.statisticText}>
          PositivePercentage: {positivePercentage}%
        </p>
      </li>
    </ul>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
