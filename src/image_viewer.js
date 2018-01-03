import '../styles/image_viewer.css';
import '../images/sm-1.jpeg';
import '../images/large-veggie.jpg';
import '../images/small-kids.jpg';

const image = document.createElement('img');
image.src = 'http://lorempixel.com/400/400';

document.body.appendChild(image);