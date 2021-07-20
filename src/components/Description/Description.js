import img from '../../images/icon.png'
import data from '../../db/description.json'
import styles from './Description.module.css'
const { description } = data
const { mainTitle, mainList }= description
export function Description() {
  return (
    <section>
      <div>
        <h2>{mainTitle}</h2>
        <img src={img} alt="img" />
      </div>
      <ul className={styles.mainList}>
        {mainList.map((elem) => {
          const { title, items } = elem
          console.log(items)
          return (
            <li>
              <h2>{title}</h2>
              <ul>
                {items.map((item) => {
                  return <li>{item}</li>
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
