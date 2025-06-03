import CarsList from "@/components/templates/CarsList";
import carsData from "@/data/carsData"


const Hatchback = () => {
    const hatchbackCars = carsData.filter(car => car.category === "hatchback")
    console.log(hatchbackCars);
  return (
    <div>
        <CarsList  data={hatchbackCars}/>
    </div>
  )
}

export default Hatchback