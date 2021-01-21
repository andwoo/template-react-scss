import '../style/style.scss';

const component = (): HTMLDivElement => {
  const element: HTMLDivElement = document.createElement('div');
  const text: string = 'Hello world!';
  element.innerText = text;
  return element;
}

document.body.appendChild(component());
