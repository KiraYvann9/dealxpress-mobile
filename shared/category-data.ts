import {ImageProps} from "react-native";

import smartphone from '@/assets/images/category_big/smartphone 1.png'
import ordi from '@/assets/images/category_big/ordi.png'
import tablette from '@/assets/images/category_big/tablette.png'
import audio from '@/assets/images/category_big/audio.png'
import camera from '@/assets/images/category_big/camera.png'
import montre from '@/assets/images/category_big/montre.png'
import accessoire from '@/assets/images/category_big/accessoire.png'
import console from '@/assets/images/category_big/console.png'
import tv from '@/assets/images/category_big/tv.png'
import electro from '@/assets/images/category_big/electro.png'
import mobilite from '@/assets/images/category_big/mobilite.png'
import confort from '@/assets/images/category_big/confort.png'
import bricolage from '@/assets/images/category_big/bricolage.png'
import lit from '@/assets/images/category_big/lit_meuble.png'
import vetement from '@/assets/images/category_big/vetement.png'
import immobilier from '@/assets/images/category_big/immobilier.png'
interface categoryDataType {
    id: number;
    image: ImageProps;
    title: string;
}
const categoryData: categoryDataType[] = [
    {
        id: 1,
        image: smartphone,
        title: "Smartphones",
    },
    {
        id: 2,
        image: ordi,
        title: "Ordinateurs",
    },
    {
        id: 3,
        image: tablette,
        title: "Tablettes",
    },
    {
        id: 4,
        image: audio,
        title: "Audio & Son",
    },
    {
        id: 5,
        image: camera,
        title: "Caméra & Drones",
    },
    {
        id: 6,
        image: montre,
        title: "Montres Connectées",
    },
    {
        id: 7,
        image: accessoire,
        title: "Accessoires",
    },
    {
        id: 8,
        image: console,
        title: "Consoles",
    },
    {
        id: 9,
        image: tv,
        title: "TV & Projecteurs",
    },
    {
        id: 10,
        image: electro,
        title: "Electroménager",
    },
    {
        id: 11,
        image: mobilite,
        title: "Mobilité & Auto",
    },
    {
        id: 12,
        image: confort,
        title: "Confort & Beauté",
    },
    {
        id: 13,
        image: bricolage,
        title: "Bricolage & Jardin",
    },
    {
        id: 14,
        image: lit,
        title: "Lit & Meuble",
    },{
        id: 15,
        image: vetement,
        title: "Vêtements",
    },{
        id: 16,
        image: immobilier,
        title: "Immobilier",
    },
]

export {categoryData, categoryDataType}