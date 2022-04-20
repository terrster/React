import {GifItem} from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({categoria}) => {

  const api_key = 'l0ndbf5V0N9Hcq4SgtMSAAPJG0rC57HI';

  const {data: gifs, loading: ldg} = useFetchGifs(categoria, api_key);  

  return (
    <>
      <hr/>
      <h3>{categoria}</h3>
      {ldg && <p>Loading...</p>}

      <div className="card-grid">
        {
          gifs.map(gif => (
            <GifItem key={gif.id} {...gif} />
          ))
        }
    </div>
    </>
  )
}
