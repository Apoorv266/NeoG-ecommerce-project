import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <img src={require("../Images/front3.jpg")} alt="" srcset="" />
    <Link to={"/products"}>
    <button>Explore</button>
    </Link>
    </>
  )
}

export default Home