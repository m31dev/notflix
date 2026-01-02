import no_poster from '../assets/NoPoster.svg'
import rating from '../assets/Rating.svg'
export default function MovieCard({Movie:{title,original_language,poster_path,vote_average,release_date}}){
    return(
        <div className='card'>
                <img src = {poster_path?`https://image.tmdb.org/t/p/w500/${poster_path}`:no_poster} className='poster' />
            <p className="title">{title}</p>
            <div className="bottom">
                <img className="star" src={rating}/>
                <p className="vote">{vote_average?vote_average.toFixed(1):'N/A'}</p>
                <p className='others'>|</p>
                <p className="others">{original_language?original_language:'N/A'}</p>
                <p className='others'>|</p>
                <p className="others">{release_date?release_date.split('-')[0]:'N/A'}</p>
            </div>
        </div>
    )
}