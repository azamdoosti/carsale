import carsData from "@/data/carsData"
import CarsList from "@/components/templates/CarsList"


const Sport = () => {
  const sportCars = carsData.filter((car) => car.category === "sedan")
  return (
       <CarsList data={sportCars}/>
  )
}

export default Sport