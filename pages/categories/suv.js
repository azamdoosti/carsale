import carsData from "@/data/carsData"
import CarsList from "@/components/templates/CarsList"


const Suv = () => {
   const suvCars = carsData.filter((car) => car.category === "sedan")
  return (
       <CarsList data={suvCars}/>
  )
}

export default Suv