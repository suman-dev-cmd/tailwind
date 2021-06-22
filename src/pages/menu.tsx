import React from 'react';
import Image1 from '../images/1.jpg';
import Image2 from '../images/2.jpg';
import Image3 from '../images/3.jpg';
import Image4 from '../images/4.jpg';
import Image5 from '../images/5.jpg';
import Image6 from '../images/6.jpg';
import Image7 from '../images/7.jpg';
import Image8 from '../images/8.jpg';
interface imageTye{
  image:string,
  id:number
}
const Menu:React.FC = () => {
    const images:imageTye[] =[
      {
        id:1,
        image:Image1
      },
      {
        id:2,
        image:Image2
      },
      {
        id:3,
        image:Image3
      },
      {
        id:4,
        image:Image4
      },
      {
        id:5,
        image:Image5
      },
      {
        id:6,
        image:Image6
      },
      {
        id:7,
        image:Image7
      },
      {
        id:8,
        image:Image8
      },
      {
        id:9,
        image:Image1
      },
    ]
    return(
      <div className="container mx-auto mt-5 mb-5">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:grid-cols-1 gap-4">
          {images.map((img:imageTye) => (
            <div className="max-w-sm rounded overflow-hidden shadow-lg" key={img.id}>
              <img src={img.image} alt="" className="w-full"/> 
          </div>
          ))}
        </div>
    </div>
    );
}

export default Menu