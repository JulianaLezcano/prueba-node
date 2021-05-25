/*para saber que version tenes es git --version
-para posicionarme sobre una carpeta especifica cd nombrecarpeta
-para retrodecer a la carpeta anterior cd..
-para ver todo lo que tiene la carpeta ls
repo local: en la compu
todo en consola:
para iniciar proyecto  git init .... 
master: rama principal del proyecto, carpeta inicializadora
el archivo app.js aparece con una U al lado que significa que no esta guardado/agregado al master
-git status: aparece la lista de todos los repositorios locales traqueados que no fueron guardados en la master///seguimiento del estado de los archivos
-para agregar archivo git add nombre de archivo
-para agregar mas de una archivo git add . asi con espacio y punto para agregaro todos los archivos a la master
-git commit: rotula lo que vamos haciendo, tiene que ser descriptivo, preciso y corto... git commit -m''
-primero se pasan credenciales: 
git config --global user.name 'Julianalezcano'
git config --global user.email 'juliana.v.lezcano@hotmail.com'
-git commit -m y 'el msj', si es mas de una palabra va con 'Agrega archivos base'
-git log : para ver el usuario
-repo remoto: en la nube o GitHub
-creamos un repositorio en la nube e insertamos en vs el comando remote que sale en el repositorio para enlazar el repo local con el repo remoto y asi congeniar en ambos los futuros cambios(solo lo comitiado) : git remote add origin https://github.com/JulianaLezcano/prueba-node.git
-SIEMPRE PONER GIT ADD . Y GIT COMMIT -M'MSJ' ANTE CADA MODIFICACION
-PARA SUBIR DICHA MODIF DEL REPO LOCAL AL REPO REMOTO git push origin master
-----EN GITBASH DIRECTO:
CREAR CARPETA Mkdir nombrecarpeta
PARA PONERME EN ESA CARPETA cd nombrecarpeta
CREAR ARCHIVO touche nombrearchivo
REPO REMOTE:
-git pull origin master para bajar a nuestro repo local las modificaciones realizadas en la nube por los diferentes colaboradores
clonar: desde el repositorio/code/clone/copiar url
luego ir a GitBash y poner git clone pegarurl
*/

let modifico = 'Valor';
let otraModificacion = 'Otra';
tercerModificacion
cuartaModificacion;

let practicando