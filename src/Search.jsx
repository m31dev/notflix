import search from './assets/search.svg'

export default function Search({searchTerm,setSearchTerm}){
    return(
        <div>
            <img src={search}/>
            <input
                type='text'
                value={searchTerm}
                placeholder='What are we watching today?'
            
            />
        </div>
    )
}