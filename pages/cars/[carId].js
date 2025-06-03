import { useRouter } from "next/router"
import carsData from  "../../data/carsData"
import CarDetails from "@/components/templates/CarDetails"


function CarDetail () {
    const router = useRouter()
    const {carId} = router.query
    console.log(carId);
   const carDetails = carsData[carId -1]
   console.log(CarDetails);

  return (
    <div>
      <CarDetails {...CarDetails}/>
    </div>
  )
}

export default CarDetail