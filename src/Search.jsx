import search from './assets/search.svg'

export default function Search({searchTerm,setSearchTerm}){
    return(
        <div className='search-input'>
            <img src={search} className='search-icon'/>
            <input
                type='text'
                value={searchTerm}
                placeholder='What are we watching today?'
                onChange={(event)=>setSearchTerm(event.target.value)}
            />
        </div>
    )
}