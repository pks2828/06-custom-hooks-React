import { useEffect, useState } from "react"
import { SearchResponse } from "../interfaces/pokemon";

interface ErrorType {
    code: number;
    message: string;
}

interface Props{
    data: SearchResponse | null;
    isLoading: boolean;
    hasError: boolean;
    error: ErrorType | null ;
}



export const useFetch = ( url:string ) => {

    const [state, setState] = useState<Props>({

        data: null,
        isLoading: true,
        hasError: false,
        error:null,
    });

    useEffect(() => {
        getFetch();
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);
    
    const setLoadingState = () =>{
        setState({
            data:null,
            isLoading:true,
            hasError:false,
            error:null
        })
    }

    const getFetch = async() => {

        const localCache: Record<string, SearchResponse> = {};

        if (localCache[url]) {
            console.log('usando cache');
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }

        setLoadingState();

        const resp = await fetch(url);

        //sleep
        await new Promise(resolve => setTimeout(resolve, 1500));

        if ( !resp.ok ){
            setState({
                data:null,
                isLoading:false,
                hasError:true,
                error:{
                    code: resp.status,
                    message: resp.statusText 
                }
            });
            return;
        }

        const data:SearchResponse = await resp.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error:null
        }) 

        // Manejo del cache
        localCache[url] = data;
    }
    

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}
