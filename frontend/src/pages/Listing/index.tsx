import MovieCard from "components/MovieCard";
import Pagination from "components/pagination";

function Listing() {
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
