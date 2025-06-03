
import Categories from "@/components/module/Categories"
import carsData from "../../data/carsData"
import CarsPage from "@/components/templates/CarsPage"

function Details() {
  return (
    <div>
      <Categories />
      <CarsPage  data={carsData}/>
    </div>
  )
}

export default Details