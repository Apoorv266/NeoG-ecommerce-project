import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    address: [
      {
        _id: uuid(),
        name: "Shahrukh khan",
        address: "#1/4 , 100ft Ring Road, Karve Nagar, Bangalore,Maharashtra . 452412 India",
        phone: 123456789
      }, {
        _id: uuid(),
        name: "Kamal Hasan",
        address: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore",
        phone: 123456789
      }, {
        _id: uuid(),
        name: "Kapil dev",
        address: "29 Womble Street, Glennville,ga, 30423  United States",
        phone: 123456789
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
