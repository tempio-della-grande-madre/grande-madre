import FontFaceObserver from 'fontfaceobserver';
import blackchancery from '../assets/blackchancery.css';

const font = () => {
  const link = document.createElement('link')
  link.href = blackchancery
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const blackchancery = new FontFaceObserver('blackchancery')

  blackchancery.load().then(() => {
    document.documentElement.classList.add('blackchancery')
  })
};

export default font;
