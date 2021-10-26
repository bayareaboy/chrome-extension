


const initDb = function(){
  // Main Container
  const injectElement = document.createElement('div');
  injectElement.classList = 'ticket_editor_app';
  injectElement.style.backgroundColor = '#fff';
  injectElement.style.margin = '10px';
  injectElement.style.padding = '10px';
  injectElement.style.border = '1px solid #ccc';
  injectElement.style.borderRadius = '3px';
  // End Main Container
  // Title
  const h4 = document.createElement('h4');
  h4.textContent = 'DigitalBrain';
  // Image
  const img = document.createElement('img');
  img.src = 'https://uploads-ssl.webflow.com/5eea98451d46d0bcad55236f/5f0a3e23adf578995e84109d_DB%20logo-p-500.png';
  img.style = 'width: 25; height: 25px;';
  img.style.marginRight = '5px';
  img.style.marginLeft = '5px';
  // End Image
  const header = document.createElement('div');
  header.classList = 'header';
  header.style = 'display: flex';

  // body
  const body = document.createElement('div');
  body.classList = 'body';
  body.style = 'display: flex';
  body.style.flexDirection = 'column';
  body.style.marginTop = '10px';
  body.style.marginBottom = '10px';
  body.style.marginLeft = '10px';
  body.style.marginRight = '10px';

  // Input
  const input = document.createElement('input');
  input.type = 'text';
  // input.style.padding = '5px';
  input.style.borderRadius = '3px';
  input.style.display = 'block';
  input.style.width = '100%';
  input.style.paddingTop = '5px';
  input.placeholder = 'Search for a shortcut'
  // input.style.margin = '10px 15px 10px 5px';
  // input.style.marginRight = '45px';
  const button = document.createElement('button');
  button.textContent = 'Notify';
  button.id = 'notify';
  button.style.marginTop = '10px';

  header.appendChild(img);
  header.append(h4);
  body.appendChild(input);
  body.appendChild(button);
  
  injectElement.append(header);
  injectElement.append(body);
  // injectElement.innerHTML = 'Hello From the Rusty Zone Element';
  const appContainer = document.querySelector('.app_container');
  appContainer.append(injectElement);



}
initDb();


