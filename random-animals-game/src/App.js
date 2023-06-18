import './App.css';
import { useState } from 'react';
import Animal from './Animal';


//random fonksiyonu (0-1) arasında deger dondurur -> [0.1-0.99] -> 0.9 vb.
//bu dondurulen degeri dizi boyutu(15) ile carptigimizda 0... ile 14... araligi arasinda deger olusur
//ve bu [0..,14..] araliginda olusan degeri floor fonksiyonuyla en yakin alt tam degere yuvarlariz
//sonuc olarak [0,14] indexleri araliginda 1 tam sayi degeri elde etmis oluruz

function App() {

  function getRandomAnimal(){
    const animalArray = 
    ['Bear', 'Crocodile', 'Dog', 'Duck', 'Elephant', 
    'Frog', 'Gazelle', 'Giraffe', 'Hippo', 'Lion',
    'Monkey', 'Pig', 'Raccoon', 'Sheep', 'Stork'];
    return animalArray[Math.floor(Math.random()*animalArray.length)];
  }

  const [animals, setAnimals]= useState([]);

  const handleClick = () => {
    setAnimals([ getRandomAnimal() ]);
  }

  const animalList = animals.map((animal, index) => {
    return <Animal key = {index} animalName = {animal} />
  });

  return (
    <div className="App">
      <button className='animalButton' onClick = {handleClick}> Can Dostumu Getir </button>
      <div> {animalList} </div>
    </div>
  );
}

export default App;
