import myIcon from './assets/favicon.ico'

const link = document.createElement('link');
link.rel = 'icon';
link.href = `${myIcon}`;
document.head.appendChild(link);
