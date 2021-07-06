import React,{useEffect,useContext,useState} from "react";

const AppContext = React.createContext();

const client_id = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const  mainURL = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

const AppProvider = ({children})=>{
    
    const [loading, setLoading] = useState(false);
    const [query,setQuery] = useState('')
    const [photos, setPhotos] = useState([])
    const [page, setPage]= useState(2);

    const urlPage = `&page=${page}`
    const urlQuery = `&query=${query}`

    const fetchImages= async ()=>{
        setLoading(true)
            let url;
            if(query){
                url = `${searchUrl}${client_id}${urlPage}${urlQuery}`
            }
            else{
                url = `${mainURL}${client_id}${urlPage}`
            }


        try{
            const images = await fetch(url);
            const data =  await images.json();
            
 
            setPhotos((old)=>{
                if(query && page===1){
                    return data.results;
                }else if(query)
                {
                        return [...old, ...data.results]
                }else{
                    return [...old,...data]
                }
            })
             setLoading(false)
        }catch(err){
               console.log(err) 
            setLoading(false)
        }
     }
     useEffect(()=>{
        fetchImages()
      
    },[page])

       useEffect(()=>{
         const a = window.addEventListener('scroll', ()=>{
             if(!loading && window.scrollY+window.innerHeight > document.body.scrollHeight-2){
                 setPage((oldpage)=>{
                     return oldpage+1
                 })
                
             }
          //console.log(window.scrollY+window.innerHeight, "Scroll Height ", document.body.scrollHeight)
         })
         
         return () => window.removeEventListener('scroll', a)
     },[])
     
    


 





    return (
    <AppContext.Provider value={{loading, photos, query, setQuery,setPage}}>
        {children}
        
        </AppContext.Provider>
        
        )
        
}



 


export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}