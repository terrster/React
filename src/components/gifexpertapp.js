import React, {useState} from 'react'
import AddCategory from './AddCategory';
import {GifGrid} from './Gifgrid';

export const GifExpertApp = () => {
    
    const [categorias, setCategorias] = useState(['One Punch']);

  return (
    <>
    <h2>GifExpertApp</h2>
    <hr/>

    <AddCategory setCategorias={setCategorias}/>

    <ul>
        {
            categorias.map(categoria => (
            <GifGrid 
                categoria={categoria}
                key={categoria}
            />
            ))
        }
    </ul>
    </>
  )
}
