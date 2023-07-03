import './App.css'
import AppRouter from './application/routes.jsx'
import React, { useEffect, useState } from 'react';
import { fetchData } from './service/service.js';

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      setData(result);
    };

    fetchDataAsync();
  }, []);

  console.log(data); // Muestra los datos en la consola

  return (
    <div>
      
      <AppRouter/>
  
    </div>
    


  );
}

