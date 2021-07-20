import img from '../../images/dog.png'
export function Order() {
  return (
    <section>
      <div>
        <img src={img} alt="img" />
      </div>
      <div>
        <h2>Icon request</h2>
        <p>
          If you find that the pack is missing any icons, feel free to send me a
          message and I will do my best to create one. Purchasing the pack will
          give you access to any future updates.
        </p>
        <button>Get in touch</button>
      </div>
    </section>
  )
}
