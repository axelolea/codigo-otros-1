// Declarando informacion de busqueda
const baseEndpoint = 'https://api.github.com';
const github = 'https://github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Colocar noombres mas descriptivos y colocar bien los selectores
const nameElement = document.querySelector('a.name');
const blogElement = document.querySelector('a.blog');
const locationElement = document.querySelector('p.location');

// declarar la funcion async si se usa la sentancia await
async function displayUser(username) {
  nameElement.textContent = 'cargando...';
  // Separar la url del fetch para usarla despues
  const url = `${usersEndpoint}/${username}`
  const response = await fetch(url);

  // Validar respuesta si es ok o no
  if(!response.ok) throw new Error(`Error en la pagina ${url}`)

  // no se declaro data en la funcion
  // crearla con los datos en json
  const data = await response.json()

  // Usar brackets para las plantillas literales ``
  nameElement.textContent = `${data.name}`;
  nameElement.href = `${data.html_url}`
  // O tambien mandar solo el contenido
  blogElement.textContent = data.blog;
  blogElement.href = data.blog;
  locationElement.textContent = data.location;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('FelipeMG-16').catch(handleError);