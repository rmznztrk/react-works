import Bear from "./images/bear.jpg";
import Crocodile from "./images/crocodile.jpg";
import Dog from "./images/dog.jpg";
import Duck from "./images/duck.jpg";
import Elephant from "./images/elephant.jpg";
import Frog from "./images/frog.jpg";
import Gazelle from "./images/gazelle.jpg";
import Giraffe from "./images/giraffe.jpg";
import Hippo from "./images/hippo.jpg";
import Lion from "./images/lion.jpg";
import Monkey from "./images/monkey.jpg";
import Pig from "./images/pig.jpg";
import Raccoon from "./images/raccoon.jpg";
import Sheep from "./images/sheep.jpg";
import Stork from "./images/stork.jpg";
import "./Animal.css";

//key,value yapisinda tutalim
//key==value ise iki tane ayni degeri yazmamiza gerek yoktur
//tek bir deger yeterlidirorn Bear, Dog, vb.
const animalMap = {
  Bear: Bear,
  Crocodile: Crocodile,
  Dog: Dog,
  Duck: Duck,
  Elephant: Elephant,
  Frog: Frog,
  Gazelle: Gazelle,
  Giraffe: Giraffe,
  Hippo: Hippo,
  Lion: Lion,
  Monkey: Monkey,
  Pig: Pig,
  Raccoon: Raccoon,
  Sheep: Sheep,
  Stork: Stork,
};

function Animal({ animalName }) {
  console.log(animalName);

  return (
    <>
      <div className="nameHeader">
        <div className="animalName">{animalName}</div>
      </div>

      <div className="imgElementDiv">
        <img src={animalMap[animalName]} className="imgElement" alt="" />
      </div>
    </>
  );
}

export default Animal;
