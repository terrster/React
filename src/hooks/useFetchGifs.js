import { useEffect, useState } from "react"
import { Getgifs } from "../helpers/Getgif";

export const useFetchGifs = (categoria, api_key) => {
    
  const [FetchG, setFetchG] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {Getgifs(categoria, api_key)
    .then( img => {
        setFetchG({
            data: img,
            loading: false,
        });
    } )
    }, [categoria, api_key]);

  return FetchG;
}
