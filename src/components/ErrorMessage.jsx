import error from '../assets/error.svg'
export default function ErrorMessage({Message}){
    return(
        <div className="error-div">
            <img className="err" src={error}/>
            <p>{Message}</p>
        </div>
    )
}