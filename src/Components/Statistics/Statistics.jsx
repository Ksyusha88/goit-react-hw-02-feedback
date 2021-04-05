import style from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <div>
        <span className ={style.statistics}>Statistics</span>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
    </div>
)

export default Statistics;