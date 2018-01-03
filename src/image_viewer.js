import '../styles/image_viewer.css';
import sm1 from '../images/sm-1.jpeg';
import lgveggie from '../images/large-veggie.jpg';
import smkids from '../images/small-kids.jpg';

const sm1Image = document.createElement('img');
sm1Image.src = sm1;

document.body.appendChild(sm1Image);

const veggieImage = document.createElement('img');
veggieImage.src = lgveggie;

document.body.appendChild(veggieImage);
