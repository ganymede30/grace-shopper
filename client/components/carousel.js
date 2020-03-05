import Glide from '@glidejs/glide'
import React from 'react'

export const Carousel = props => {
  //   const [slider] = useState(new Glide(`.${element}`, options))
  // useEffect(() => {
  //   slider.mount()
  // }, [])

  // const slider = new Glide(props.element).mount()
  return (
    <div className="container">
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">0</li>
            <li className="glide__slide">1</li>
            <li className="glide__slide">2</li>
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button
            type="submit"
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            prev
          </button>
          <button
            type="submit"
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            next
          </button>
        </div>
      </div>
      {/* <script>
      {new Glide('.glide').mount()}
    </script> */}
    </div>
  )
}
