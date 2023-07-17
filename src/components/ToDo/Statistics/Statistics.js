import css from './Statistics.module.css'
export default function Statistics({total, countCompleted}) {
    return (
        <div className={css.stats_wrapper}>
            <p className={css.stats_text}>Amount completed: {countCompleted}</p>
            <p className={css.stats_text}>Total ToDos: {total}</p>
        </div>
    )
}
