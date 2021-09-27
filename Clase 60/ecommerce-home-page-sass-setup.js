/**
 * EL OBJETIVO DE ESTA CLASE ES COMENZAR CON LA CONSTRUCCION
 * DE NUESTRO PROYECTO DE ECOMMERCE Y PARA ESTO CREAMOS UNA 
 * NUEVA REACT-APP COMO LO HICIMOS ANTES
 * 
 * 1.- vamos a la terminal de comandos y nos ubicamos en
 * el directorio del proyecto en nuestro caso 
 * 'ecommerce-project'
 * 
 */

 /** y usamos el comando de react para bajar las librerias */

                      /**nombre del proyecto */  
 npx create-react-app ilovemaskusa

 /**----------comenzamos a editar nuestro proyecto 
  * quitando lo que no necesitemos(removemos codigo)-
  * --------- */

  /**----------editaremos los siguientes archivos
   * 
   * 1.-src > index.js 
   *     
   *   removemos todo el 'server worker code'
   * 
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

   * 
   * 2.- src > App.js
   * 
   * ----removemos tambien la propiedad class del div
   * ----- className="App"
   * -----y removemos el logo 'import logo from './logo.svg';'
   * 
   *  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

   * 3.- src > #App.css

.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

   */

   /**Ahora despues de haber removido lo que no necesitamos
    * nos dispondremos a crear nuestra homepage y sus 
    * elementos--
   */
  /**comenzamos creando un nuevo componente-----
   * 
   *          'homepage.component.jsx'
  */
 /**-----pendiente - anadir la creacion de homepage.component 
  * ----------------        y en App.js -import de homepage.component
 *//**----------------------- se anade la etiqueta HomePage */
  
 /**------ahora trabajaremos los estilo de esta app
  * con 'sass' que es una version mejorada de 'css'
  * es un un lenaguaje dieferente y con extension 
  * distinta a css, de hecho es 'scss' pero tiene 
  * unas mejoras importantes de ciclo de vida
 */

 /**para anadir sass tenemos que instalar 'node-sass' 
  * en nuestro proyecto con el comando
  *    
  *      yarn add node-sass
  * 
  * luego creamos nuestro archivo de estilo 
  * 'homepage.styles.scss'
  * 
 */

 /**------ahora lo subimos a github
  *       > creamos repositorio
  *       >copiamos el link
  * 
  * ahora en linea de comandos
  *       >git remote add origin git@github.com:erickrod54/ilovemaskusa.git
  *       >git status
  *       >git add -A
  *       >git commit -m "created ilovemaskusa project with react app and added for homepage"
  *       >git push origin master
  */


  /**1.-------codigo extraido de ------------ */