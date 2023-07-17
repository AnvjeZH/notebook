import css from './Filter.module.css'

export default function Filter({value, onChange}) {
    return (
        <div className={css.filter_wrap}>
        <label className={css.filter_label}>
          Filter <input className={css.filter_input} type="text" value={value} onChange={onChange}/>
        </label>
      </div>
    )
}