import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Wired earphones",
      image: require("../../Images/categoryImg/wired_earphone.png")
  },
  {
    _id: uuid(),
    categoryName: "Wireless Headphones",
      image: require("../../Images/categoryImg/headphone.webp")
  },
  {
    _id: uuid(),
    categoryName: "Neckbands",
      image: require("../../Images/categoryImg/neckband.png")
  },
  {
    _id: uuid(),
    categoryName: "True Wireless earbuds",
      image: require("../../Images/categoryImg/earbuds.webp")
  }
  ,
  {
    _id: uuid(),
    categoryName: "Wired Headphones",
      image: require("../../Images/categoryImg/wired_headhphone.png")
  },
  
  
];
