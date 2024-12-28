import { useFetch } from "../hooks/useFetch";
import { Card } from "../component";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
export const Search = ({api}) => {
  const [searchParam]=useSearchParams();
  const queryTerm=searchParam.get("q");
  const {data:movies}=useFetch(api,queryTerm);
  useTitle(`search for ${queryTerm}/cinemate`)
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white ">
          {movies.length===0? `No Result found for ${queryTerm}`:`Result  for ${queryTerm}`}
        </p>
      </section>
    <sectionm className="max-w-7xl mx-auto py-7 ">
      <div className='flex sm:justify-end  flex-wrap'>
        {movies.map((movie)=>(
          <Card  movie={movie} key={movie.id}/>

        ))}
      
     
      </div>

    </sectionm>
  </main>
  )
}
