import img from '../../images/about.png'
const points = [
  { id: '1', text: 'Over 100 of the most commonly use app icons' },
  { id: '2', text: 'Optimised for iOS with solid black backgrounds' },
  { id: '3', text: 'Transparent PNG versions to do what you like with' },
  { id: '4', text: 'Mac OS optimised versions' },
  { id: '5', text: 'Access to any future additions or updates' },
  { id: '6', text: 'Installation instructions included' },
]
export function About() {
  return (
    <section>
      <div>
        <h2>100+ Unique icons</h2>
        <ul>
          {points.map((point) => {
            return <li key={point.id}>{point.text}</li>
          })}
        </ul>
        <button>Buy now - $14.99</button>
      </div>
      <div>
        <img src={img} alt="img" />
      </div>
    </section>
  )
}
