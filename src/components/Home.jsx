import React from 'react'
import bg from "../assets/home-top-bg.png"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>Shivdev</h1>
        <p>Welcome to shivdev</p>
      </main>
    </div>
<div className="home2">
  <img src={bg} alt="Graphics" />
  <div>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque, praesentium id, quas expedita aliquam numquam assumenda non dolorem officiis tempora. Voluptatibus, nobis.</p>
  </div>
</div>

<div className="home3" id='about'>

  <div>
    <h1>Who We are</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus sunt repellat, excepturi corrupti rem autem repellendus omnis labore velit consectetur tempora voluptate, neque vero est cupiditate. Debitis ad expedita perferendis, dolorum repellat sunt dicta, enim fugiat, facere earum fuga repellendus natus. Voluptatibus in quidem maxime quia officiis, enim aliquam maiores!
    </p>
  </div>
</div>
<div className="home4" id='brands'>
  <div>
    <h1>
      Brands
    </h1>
    <article>
      <div style={{animationDelay: "0.3s"}}>
        <AiFillGoogleCircle />
        <p>Google</p>
      </div>
      <div style={{animationDelay: "0.5s"}}>
        <AiFillAmazonCircle />
        <p>Google</p>
      </div>
      <div style={{animationDelay: "0.7s"}}>
        <AiFillYoutube />
        <p>Google</p>
      </div>
      <div style={{animationDelay: "1s"}}>
        <AiFillInstagram />
        <p>Google</p>
      </div>
    </article>
  </div>
</div>
    </>
  )
}

export default Home
