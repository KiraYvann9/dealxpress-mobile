import macbook from "@/assets/images/products_img/macbook.png"
import moniteur from "@/assets/images/products_img/moniteur.png"
import photo from "@/assets/images/products_img/photo.png"
import laptop from "@/assets/images/products_img/lapto-hp.png"
import watch from "@/assets/images/products_img/apple-watch.png"
import car from "@/assets/images/products_img/car.png"
import ryzer from "@/assets/images/products_img/ryzer.png"
import {ImageProps} from "react-native";

interface DataType {
    id: number;
    imgUrl: ImageProps;
    name: string;
    price: number;
    description: string;
    location: string;
    date: string;
}

const datas : DataType[] = [
    {
        id: 1,
        name : 'Macbook Pro M1 ',
        price: 470000,
        imgUrl: macbook,
        location: 'Riviera 3',
        date: 'il a 2h',
        description: ''
    },
    {
        id: 1,
        name : 'Macbook Pro M1 ',
        price: 470000,
        imgUrl: moniteur,
        location: 'Riviera 3',
        date: 'il a 2h',
        description: ''
    },
    {
        id: 1,
        name : 'Macbook Pro M1 ',
        price: 470000,
        imgUrl: photo,
        location: 'Riviera 3',
        date: 'il a 2h',
        description: ''
    },
    {
        id: 1,
        name : 'Macbook Pro M1 ',
        price: 470000,
        imgUrl: laptop,
        location: 'Riviera 3',
        date: 'il a 2h',
        description: ''
    },
    {
        id: 1,
        name : 'Macbook Pro M1 ',
        price: 470000,
        imgUrl: watch,
        location: 'Riviera 3',
        date: 'il a 2h',
        description: ''
    },
    {
        id: 1,
        name : 'Macbook Pro M1 ',
        price: 470000,
        imgUrl: car,
        location: 'Riviera 3',
        date: 'il a 2h',
        description: ''
    },
    {
        id: 1,
        name : 'Macbook Pro M1 ',
        price: 470000,
        imgUrl: ryzer,
        location: 'Riviera 3',
        date: 'il a 2h',
        description: ''
    },
    {
        id: 1,
        name : 'Macbook Pro M1 ',
        price: 470000,
        imgUrl: moniteur,
        location: 'Riviera 3',
        date: 'il a 2h',
        description: ''
    },
]

export { datas, DataType }