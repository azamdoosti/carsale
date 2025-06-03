
import Categories from "@/components/module/Categories"
import carsData from "../../data/carsData"
import CarsPage from "@/components/templates/CarsPage"
import SearchBar from "@/components/module/Searchbar"

function Details() {
  return (
    <div>
      < SearchBar />
      <Categories />
      <CarsPage  data={carsData}/>
    </div>
  )
}

export default Details