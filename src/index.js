import _ from 'lodash';
import './style.css';
import Icon from './bell.svg';
import Data from './example-spreadsheet.csv';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add('icon');

  element.appendChild(myIcon);

  // log csv data
  console.log(Data);

  return element;
}

document.body.appendChild(component());
