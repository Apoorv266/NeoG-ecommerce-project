import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "ZEBRONICS Zeb-Bang PRO Headphone",
    company : "ZEBRONICS",
    price: 999,
    discount_price : 699,
    type: "Headphones",
    image : require("../../Images/ProductsImg/headphone1.png")
  },
  {
    _id: uuid(),
    title: "Beats Solo3 Wireless On-Ear Headphones",
    company : "Beats",
    price: 17900,
    discount_price : 14999,
    type: "headphone",
    image : require("../../Images/ProductsImg/headphone2.png")
  },
  {
    _id: uuid(),
    title: "OnePlus Bullets Z2 Bluetooth Earphones",
    company : "OnePlus",
    price: 1799,
    discount_price : 1499,
    type: "neckband",
    image : require("../../Images/ProductsImg/neckband1.png")
  }
  ,
  {
    _id: uuid(),
    title: "boAt Rockerz 330ANC Bluetooth Neckband",
    company : "OnePlus",
    price: 1999,
    discount_price : 1699,
    type: "neckband",
    image : require("../../Images/ProductsImg/neckband2.png")
  }
  ,
  {
    _id: uuid(),
    title: "boAt Airdopes 141 Bluetooth Wireless Headphones",
    company : "boAt",
    price:1199,
    discount_price : 899,
    type: "wireless",
    image : require("../../Images/ProductsImg/wireless1.png")
  }

  ,
  {
    _id: uuid(),
    title: "OnePlus Nord Buds True Wireless in Ear Earbuds",
    company : "OnePlus",
    price: 2499,
    discount_price : 2000,
    type: "wireless",
    image : require("../../Images/ProductsImg/wireless2.png")
  }
];
