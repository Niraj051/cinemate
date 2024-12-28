import { Card } from "../component/index";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({api}) => {
  const {data:movies}=useFetch(api);
  useTitle("Movie_list/cinemate");
  
  return (
    <main>
      <sectionm className="max-w-7xl  mx-auto py-7 ">
        <div className='flex justify-start small:justify-evenly other:justify-evenly flex-wrap'>
          {movies.map((movie)=>(
            <Card  movie={movie} key={movie.id}/>

          ))}
        
       
        </div>

      </sectionm>
    </main>
  )
}
