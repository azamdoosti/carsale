import AllButton from "@/components/module/AllButton";
import Categories from "@/components/module/Categories";
import SearchBar from "@/components/module/SearchBar";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";


 function Index() {
  const cars = carsData.slice(0 , 3 )
  return (
    <div>
      <h1> 
        <SearchBar />
        <Categories/>
        <AllButton />
        <CarsPage data={cars} />
      </h1>
    </div>
  );
}

export default Index