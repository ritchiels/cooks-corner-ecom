import cuttingBoard from '../images/cutting-board.jpeg';
import toasterOven from '../images/toaster-oven.jpeg';
import airFryer from '../images/air-fryer.jpg';
import pots from '../images/pots.jpeg';
import blender from '../images/blender.jpeg';
import knifeSet from "../images/knifeSet.jpg";
import grill from '../images/grill.jpg';

export const PRODUCT_INVENTORY = [
  {
    title: 'Toaster Oven',
    image: toasterOven,
    featured: true,
    price: '$400'
  },
  {
    title: 'Air Fryer',
    image: airFryer,
    featured: true,
    price: '$300'
  },
  {
    title: 'Cutting Board',
    image: cuttingBoard,
    featured: true,
    price: '$200'
  },
  {
    title: 'Pots & Pans',
    image: pots,
    featured: false,
    price: '$600'
  },
  {
    title: 'Blender',
    image: blender,
    featured: false,
    price: '$700'
  },
  {
    title: "Knife Set",
    image: knifeSet,
    featured: false,
    price: '$800'
  },
  {
    title: "Grill",
    image: grill,
    featured: true,
    price: '$1000'
  },
];