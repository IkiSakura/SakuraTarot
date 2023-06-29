import './App.css'
import AppRouter from './application/routes.jsx'
import React, { useEffect, useState } from 'react';
import fetchData from './service/service';

export default function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchDataAsync = async () => {
  //     const result = await fetchData();
  //     setData(result);
  //   };

  //   fetchDataAsync();
  // }, []);

  // console.log(data); // Muestra los datos en la consola

  return (
    // {data ? ( 
    //   <ul>
    //   {data.map((card) => (
    //     <li key={card.id}>
    //           <img src={card.sakuraCard} alt="sakura card" />
    //           <img src={card.cardsReverse.sakuraReverse} alt="sakura card" />
    //         </li>
    //       ))}
    //       </ul>
    //       ) : (
    //         <p>Cargando datos...</p>
    //         )}

            <div>
    
      <AppRouter/>
  
    </div>
    


  );
}

