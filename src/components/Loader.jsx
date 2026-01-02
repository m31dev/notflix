import { SyncLoader } from "react-spinners"

export default function Loader(){
    return(
        <>
         <SyncLoader
        color={'#C40015'}
        loading = {true}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        /> 
        </>
    )
}