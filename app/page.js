"use client"
import DogList from '../Components/DogList/DogList'
import Form from '../Components/Form/Form'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [numberOfDogs, setNumberOfDogs] = useState(3);
  const [dogs, setDogs] = useState([]);
  
  const fetchData = async()=>{
    try {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`);
      const newData = await response.json();
      console.log(newData);
      setDogs(newData.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect( () => {
    fetchData();
  }, [numberOfDogs])

   return (
    <div className="card">
      <Form setNumberOfDogs={setNumberOfDogs} />
      <DogList dogsList={dogs} />
    </div>
  );
}

