import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/pagination";
import { BASE_URL } from "utils/requests";

function Listing() {

    //forma errada
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(response => {
            console.log(response.data);
        });
    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3"> {/*div de cada filme para voto, os tamanhos dos cards de acordo com a largura da tela*/}
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                </div>
            </div>





        </>
    );
}
export default Listing;

/* A função do componente react so pode exportar 1 componente  
        sendo necessario colocar em div
        porém apareceria um div a mais no projeto. 
        o ideal é colocar somente o fragment(<></>) pois n enterfere no projeto*/
