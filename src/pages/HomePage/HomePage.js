import { Hero } from '../../components/Hero/Hero'
import { About } from '../../components/About/About'
import {GalleryIcons} from "../../components/GalleryIcons/GalleryIcons"
import {Description} from "../../components/Description/Description"
import {Order} from "../../components/Order/Order"
export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <GalleryIcons/>
      <Description/>
      <Order/>
    </>
  )
}
