import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import FlexBoxLista from '../../components/FlexBoxLista';
import FlexBoxItem from '../../components/FlexBoxItem';
const Cartas = () => {

    const [cartas, setCartas] = useState(null);

    useEffect(() => {

        axios
        .get('https://api.pokemontcg.io/v1/sets')
        .then((resposta) => {
            console.log(resposta.data)
            setCartas(resposta.data);
        });

    },[]);

    if(cartas === null){

        return <p>Carregando ...</p>

    }
    return (
        <>

        

  
      


      <FlexBoxLista titulo='data'>
       {cartas.sets.map(item =>(
    
      <FlexBoxItem>

          Nome:<b> {item.name}</b>
          <p></p>
          Quantidade de cartas:<b> {item.totalCards}</b>
          <p></p>
          Data de lançamento: <b>{item.releaseDate}</b>
          <p></p>
          <img className="img-carta" src={item.logoUrl}></img>
          
      </FlexBoxItem>
      
      ))}
      </FlexBoxLista>



   



        </>

    );

};



export default Cartas;