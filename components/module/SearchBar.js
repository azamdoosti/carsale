import { useRouter , useState } from 'react';
import styles from './SearchBar.module.css'


const SearchBar = () => {
    const router = useRouter()

    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    


    const searchHandler =()=>{
     if(min & max){
        router.push(`/filter/${min}/${max}`)

     } else{
        alert("Please Enter min and max")
     }
    }


  return (
    <div className={styles.container}>
      <div>
        <input  placeholder='Inter min-price' value={min} onChange={e => setMin(e.target.value)}/>
        <input  placeholder='Inter max-price' value={max} onChange={e => setMax(e.target.value)}/>
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  )
}

export default SearchBar