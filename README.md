[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hneiFYl3)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10405481&assignment_repo_type=AssignmentRepo)
# *Plantilla Práctica Microservicios*: descripción de la aplicación

Este código que se presenta aquí corresponde a la plantilla para realizar un desarrollo basado en microservicios para las prácticas de Desarrollo Ágil, para el curso 2022-2023.



## RESOLUCIÓN DE LA PRÁCTICA

### *INFORMACIÓN SOBRE EL AUTOR*

*   *NOMBRE*: Elena 
*   *APELLIDOS*: Gómez Padilla
*   *EMAIL*: egp00044@red.ujaen.es



###  *DATOS FAUNA*

**CAPTURA de pantalla del HOME de FAUNA**



![Imagen inicial de fauna ](./assets/img/Pagina_inicio_de_fauna.png)

**CAPTURA de pantalla de la BASE de DATOS de FAUNA**

![Imagen inicial de fauna ](./assets/img/Pagina_collecion_de_fauna.png)

**CAPTURA de pantalla de la COLECCION de FAUNA**

![Imagen inicial de fauna ](./assets/img/Pagina_de_colleciones_de_Fauna.png)

###  DATOS EN FORMATO JSON

* **DOCUMENTO 1**
```
{
nombre_jinete: {
    nombre: "Elena",
    apellidos: "Gomez Padilla"
},
altura_jinete: 155,
datos_caballo: {
    nombre_caballo: "SalvaTierra",
    edad: 5,
    sexo: "Hembra"
},
fecha_nacimiento: {
    dia: 26,
    mes: 11,
    año: 2001
},
nombre_club_actual: "Club deportivo Hipico Alianza",
direccion_club: {
    calle: "Urb/ La Rozuela",
    numero: 11,
    localidad: "Linares",
    provincia: "Jaén",
    pais: "España"
},
tipo_competicion: "Doma clasica",
años_federado: [2014, 2015, 2016, 2018],
numero_particiapciones_torneo: 23,
numero_torneos_ganados: 15
}

```

* **DOCUMENTO 2**
```
{
  nombre_jinete: {
    nombre: "Antonio",
    apellidos: "Garcia Oltra"
  },
  altura_jinete: 169,
  datos_caballo: {
    nombre_caballo: "Epona",
    edad: 6,
    sexo: "Hembra"
  },
  fecha_nacimiento: {
    dia: 6,
    mes: 4,
    año: 2001
  },
  nombre_club_actual: "Club deportivo Hipico Alianza",
  direccion_club: {
    calle: "Urb/ La Rozuela",
    numero: 11,
    localidad: "Linares",
    provincia: "Jaén",
    pais: "España"
  },
  tipo_competicion: "Doma clasica",
  años_federado: [2019, 2021, 2022],
  numero_particiapciones_torneo: 9,
  numero_torneos_ganados: 5
}
```

* **DOCUMENTO 3**
```
{
  nombre_jinete: {
    nombre: "Juan Carlos ",
    apellidos: "Rodriguez Barrios"
  },
  altura_jinete: 192,
  datos_caballo: {
    nombre_caballo: "Angus",
    edad: 11,
    sexo: "Macho"
  },
  fecha_nacimiento: {
    dia: 12,
    mes: 8,
    año: 1999
  },
  nombre_club_actual: "Club deportivo Hipico Alianza",
  direccion_club: {
    calle: "Urb/ La Rozuela",
    numero: 11,
    localidad: "Linares",
    provincia: "Jaén",
    pais: "España"
  },
  tipo_competicion: "Doma clasica",
  años_federado: [2014, 2015, 2016, 2017],
  numero_particiapciones_torneo: 26,
  numero_torneos_ganados: 20
}
```

* **DOCUMENTO 4**
```
{
  nombre_jinete: {
    nombre: "Malena ",
    apellidos: "Bueno Pedrera"
  },
  altura_jinete: 160,
  datos_caballo: {
    nombre_caballo: "Karma",
    edad: 3,
    sexo: "Hembra"
  },
  fecha_nacimiento: {
    dia: 21,
    mes: 5,
    año: 2001
  },
  nombre_club_actual: "Club 79 Hipico",
  direccion_club: {
    calle: "UC. Eriazos de la Virgen",
    numero: 51,
    localidad: "Linares",
    provincia: "Jaén",
    pais: "España"
  },
  tipo_competicion: "Rodeo",
  años_federado: [2014, 2015],
  numero_particiapciones_torneo: 2,
  numero_torneos_ganados: 1
}
```
* **DOCUMENTO 5**
```
{
  nombre_jinete: {
    nombre: "Lucía ",
    apellidos: "Soriano Martín"
  },
  altura_jinete: 163,
  datos_caballo: {
    nombre_caballo: "Lara",
    edad: 9,
    sexo: "Hembra"
  },
  fecha_nacimiento: {
    dia: 2,
    mes: 4,
    año: 2002
  },
  nombre_club_actual: "Club 79 Hipico",
  direccion_club: {
    calle: "UC. Eriazos de la Virgen",
    numero: 51,
    localidad: "Linares",
    provincia: "Jaén",
    pais: "España"
  },
  tipo_competicion: "Rodeo",
  años_federado: [2014, 2015, 2016, 2021, 2022, 2023],
  numero_particiapciones_torneo: 32,
  numero_torneos_ganados: 26
}
```
* **DOCUMENTO 6**
```
{
  nombre_jinete: {
    nombre: "Sam ",
    apellidos: "Jimenez Maeso"
  },
  altura_jinete: 172,
  datos_caballo: {
    nombre_caballo: "Corra",
    edad: 6,
    sexo: "Hembra"
  },
  fecha_nacimiento: {
    dia: 15,
    mes: 11,
    año: 1996
  },
  nombre_club_actual: "Club Hipico Bailen",
  direccion_club: {
    calle: "Carretera de Baños",
    numero: 74,
    localidad: "Bailen",
    provincia: "Jaén",
    pais: "España"
  },
  tipo_competicion: "Doma Clasica",
  años_federado: [2023],
  numero_particiapciones_torneo: 0,
  numero_torneos_ganados: 0
}
```
* **DOCUMENTO 7**
```
{
  nombre_jinete: {
    nombre: "Juan Pablo ",
    apellidos: "Martines Morillas"
  },
  altura_jinete: 170,
  datos_caballo: {
    nombre_caballo: "Agatha",
    edad: 9,
    sexo: "Hembra"
  },
  fecha_nacimiento: {
    dia: 31,
    mes: 7,
    año: 2005
  },
  nombre_club_actual: "Club Hipico Bailen",
  direccion_club: {
    calle: "Carretera de Baños",
    numero: 74,
    localidad: "Bailen",
    provincia: "Jaén",
    pais: "España"
  },
  tipo_competicion: "Rodeo",
  años_federado: [2015, 2016, 2017, 2018, 2019, 2021, 2022, 2023],
  numero_particiapciones_torneo: 42,
  numero_torneos_ganados: 30
}
```
* **DOCUMENTO 8**
```
{
  nombre_jinete: {
    nombre: "Isabel ",
    apellidos: "Padilla Molina"
  },
  altura_jinete: 153,
  datos_caballo: {
    nombre_caballo: "Epona",
    edad: 6,
    sexo: "Hembra"
  },
  fecha_nacimiento: {
    dia: 18,
    mes: 6,
    año: 1973
  },
  nombre_club_actual: "Club deportivo Hipico Alianza",
  direccion_club: {
    calle: "Urb/ La Rozuela",
    numero: 11,
    localidad: "Linares",
    provincia: "Jaén",
    pais: "España"
  },
  tipo_competicion: "Doma clasica",
  años_federado: [2015, 2016],
  numero_particiapciones_torneo: 6,
  numero_torneos_ganados: 5
}
```
* **DOCUMENTO 9**
```
{
  nombre_jinete: {
    nombre: "Juan ",
    apellidos: "Gómez Martínez"
  },
  altura_jinete: 170,
  datos_caballo: {
    nombre_caballo: "Lara",
    edad: 9,
    sexo: "Hembra"
  },
  fecha_nacimiento: {
    dia: 6,
    mes: 12,
    año: 1972
  },
  nombre_club_actual: "Club 79 Hipico",
  direccion_club: {
    calle: "UC. Eriazos de la Virgen",
    numero: 51,
    localidad: "Linares",
    provincia: "Jaén",
    pais: "España"
  },
  tipo_competicion: "Rodeo",
  años_federado: [2021, 2022, 2023],
  numero_particiapciones_torneo: 10,
  numero_torneos_ganados: 6
}
```
* **DOCUMENTO 10**
```
{
  nombre_jinete: {
    nombre: "María",
    apellidos: "Sánchez Rodriguez"
  },
  altura_jinete: 165,
  datos_caballo: {
    nombre_caballo: "SalvaTierra",
    edad: 5,
    sexo: "Hembra"
  },
  fecha_nacimiento: {
    dia: 31,
    mes: 10,
    año: 1996
  },
  nombre_club_actual: "Club deportivo Hipico Alianza",
  direccion_club: {
    calle: "Urb/ La Rozuela",
    numero: 11,
    localidad: "Linares",
    provincia: "Jaén",
    pais: "España"
  },
  tipo_competicion: "Rodeo",
  años_federado: [2020, 2023],
  numero_particiapciones_torneo: 2,
  numero_torneos_ganados: 0
}
```

###  *TABLERO DE TRELLO*
* [Enlace al tablero de Trello](https://trello.com/b/ev2D3cAK/desarrollo-%C3%A1gil-pr3) ↗️

**TABLERO DE TRELLO EL COMIENZO DE LA ITERACIÓN 1**

Observamos que al comienzo de la iteación 1 únicamente sabriamos de la realización de dicha iteración, habiendo elegido las historias de usuario 
1, 2 y 4, con las cuales sumanos una puntuación de 0,7. 

![Tablero de inicio de la Iteración 1 ](./assets/img/Tablero_trello_Iteracion_1_Inicio.png)

**TABLERO DE TRELLO EL FINAL DE LA ITERACIÓN 1**

A lo largo de esta iteración las historias de usuario se han movido desde el estado "en proceso"
a hecho, más adelante añadí más fases del proyecto, tras darme cuanta se que sería muy conveniente.
La iteración finzaliza con todas las historias de usuairo seleccionadas hechas, con su respectiva documentación. 

![Tablero final de la Iteración 1 ](./assets/img/Tablero_trello_Iteracion_1_Final.png)1

**TABLERO DE TRELLO EL COMIENZO DE LA ITERACIÓN 2**

En la segunda iteración añadimos no solo dos fases más al proceso, sino también 
las historias de usuario de preparadas para la iteración 3 (azul). 
Al comienzo posicioné las historias de usuario preparadas para esta iteración (verde)
en la columna de *iteración actual*.

![Tablero de inicio de la Iteración 2 ](./assets/img/Tablero_trello_Iteracion_2_Inicio.png)

**TABLERO DE TRELLO EL FINAL DE LA ITERACIÓN 2**


Al finalizar la segunda iteración he realizado las historias de usuario 3, 5 y 6
añadiendo un punto de historia al total, obteniendo 1´7 puntos de historia
realizados hasta este punto.
A lo largo del proceso de realización de dichas funcionalides estan han pasado por 
varias columnas, primero *iteracion actual* que viene a ser un simil del *sprint backlog*
sin llegar a serlo ya que no usamos Scrum. Desde esa columna una a una he seleccionado la 
siguiente historia de usuario que ha pasadoa la fase *en proceso*, se mantedrá
ahí hasta que funcione correctamente, tras lo cual probaremos el TDD por lo que 
las situaré en la siguiente columna *en fase test (TDD)*. Una vez la historia
de usuario sea funcional y haya pasado los test, estará lista para el incremento. 

![Tablero final de la Iteración 2 ](./assets/img/Tablero_trello_Iteracion_2_Final.png)

**TABLERO DE TRELLO EL COMIENZO DE LA ITERACIÓN 3**

En la tercera iteración seleccioné de nuevo 3 historias de usuario para llevsar a cabo su desarrollo
entre las cuales suman 1 punto de historia, resultando en un total de 2´7 puntos de historia realizados
hasta ahora.

![Tablero de inicio de la Iteración 3 ](./assets/img/Tablero_trello_Iteracion_3_Inicio.png)

**TABLERO DE TRELLO EL FINAL DE LA ITERACIÓN 3**

![Tablero final de la Iteración 3 ](./assets/img/Tablero_trello_Iteracion_3_Final.png)

###  FUNCIONAMIENTO DE LA APLICACIÓN

###  *ITERACIÓN 1*

**HISTORIA DE USUARIO 1: AÑADIR INFORMACIÓN EN "ACERCA DE". PH:1**

En este historias de usuario su desarrollo ha sido rápido y sinmple, pues únicamente
ha sido necesario añadir mis datos a una función ya existente, resultando en un botón, que
pulsado muestra lo datos de la co-autora de la aplicación.
El método modificado ha sido: 

```
   -    acercaDe: async (req, res) => {
        try {
            CORS(res).status(200).json({
                mensaje: "Microservicio MS Plantilla: acerca de",
                autor: "Elena Gómez Padilla",
                email: "egp00044@red.ujaen.es",
                fecha: "26/11/2001"
            });
        } catch (error) {
            CORS(res).status(500).json({ error: error.description })
        }
    },
    
    -    it('Devuelve MS Plantilla Acerca De', (done) => {}

```

Un ejemplo del correcto funcionamiento del desarrollo es la siguiente captura 
de pantalla, donde se muestra que los datos mostrado por la aplicación al pulsar 
el botón *Acerca de* son correctos: 

![Resultado de la HU 1](./assets/img/Historia_de_Usuario_1.png)

**HISTORIA DE USUARIO 2: VER LISTADO DE LOS JINETES. PH:2**

En esta segunda historia de usuario debía obtener un listado de todos los jinetes 
de la base de datos, mostrando únicamente sus identificadores, nombres y apellidos. 
En la base de datos incluí 10 jientes, con nombres distintos pero compartiendo algunos datos,
como caballos y clubs en común. Esta información no nos será relevante por ahora, pues no
la mostraremos.
Los métodos y clases modificados/añadidos han sido: 

```
   CLASE: FRONT-END/STATIC-FILES/INDEX.HTML
    
   -    <a href="javascript:Plantilla.nombrarJinetes()" class="opcion-principal"
        title="Realizar un listado de todos los nombres de los jinetes que hay en la BBDD">Nombrar a los jinetes</a>
   
   CLASE: FRONT-END/STATIC-FILES/JS/MS-PLANTILLA.JS
   
   -    Plantilla.nombrarJinetes = function () {...}
   -    Plantilla.imprimeNombres = function (vector) {...}
   -    Plantilla.recupera = async function (callBackFn) {...}
   -    Plantilla.plantillaTablaJinetes = {...}
   -    Plantilla.plantillaTablaJinetes.cabecera
   -    Plantilla.plantillaTablaJinetes.cuerpo 
   -    Plantilla.plantillaTablaJinetes.pie = `</tbody> </table>`;
   -    Plantilla.plantillaTags = {...}
   -    Plantilla.plantillaTablaJinetes.actualizaNombres = function (jinetes) {...}
   -    Plantilla.sustituyeTags = function (plantilla, jinete) {...}
   -    Plantilla.plantillaTablaJinetes.actualizaNombres = function (jinetes) {...}

   CLASE: FRONT-END/STATIC-FILES/CSS/MS-PLANTILLA.CSS
   
   -    table.listado_jinetes tbody td {...}
   -    table.listado_jinetes tbody tr {...}
   -    .form-jinete-elemento:disabled {...}
   -    .form-jinete-elemento:enabled {...}
   -    .form-jinete-elemento:enabled:required {...}
   -    table.listado_jinetes thead,table.listado_jinetes tbody, table.listado_jinetes tr, table.listado_jinetes td {...}
   -    table.listado_jinetes {...}
   
   CLASE: FRONT-END/STATIC-FILES/CSS/FRONT-END.CSS

    -   .opcion-terciaria {...}
    -   .opcion-secundaria:hover  {...}
    -   .opcion-principal {...}
    -   .opcion-terciaria {...}
    
    CLASE: FRONT-END/STATIC-FILES/JS/MS-PLANTILLA-SPEC-JC
    
    -   describe("Plantilla.imprimeNombres: ", function() {...}
   
   CLASE: MS-PLANTILLA/ROUTES.JS
   
   -    router.get("/getTodos", async (req, res) => {...}
   
   CLASE: MS-PLANTILLA/CALLBACKS.JS
   
   -    const client = new faunadb.Client({ ... });
   -    getTodos: async (req, res) => {...}
```
Un ejemplo del correcto funcionamiento del desarrollo es la siguiente captura
de pantalla, donde se muestra un listados de nos datos identificadores de cada jinete
pulsando el botón *Nombrar a los jinetes*:

![Resultado de la HU 2](./assets/img/Historia_de_Usuario_2.png)

HISTORIA DE USUARIO 4

![Resultado de la HU 4](./assets/img/Historia_de_Usuario_4.png)

###  *ITERACIÓN 2*

HISTORIA DE USUARIO 3

*Listado de los Nnombres comletos de los jinetes*
![Resultado de la HU 3](./assets/img/Historia_de_Usuario_3.png)

HISTORIA DE USUARIO 5

*Listado de los jinetes Ordenador por APELLIDOS*
![Resultado de la HU 5.1](./assets/img/Historia_de_Usuario_5.1.png)

*Listado de los jinetes Ordenador por ALTURA*
![Resultado de la HU 5.1](./assets/img/Historia_de_Usuario_5.2.png)

*Listado de los jinetes Ordenador por NOMBRE DEL CABALLO*

*Listado de los jinetes Ordenador por AÑO DE NACIMIENTO*
![Resultado de la HU 5.1](./assets/img/Historia_de_Usuario_5.4.png)

*Listado de los jinetes Ordenador por NOMBRE DEL CLUB*
![Resultado de la HU 5.1](./assets/img/Historia_de_Usuario_5.5.png)

*Listado de los jinetes Ordenador por DIRECCION DEL CLUB*
![Resultado de la HU 5.1](./assets/img/Historia_de_Usuario_5.6.png)

*Listado de los jinetes Ordenador por TIPO COMPETICION*
![Resultado de la HU 5.1](./assets/img/Historia_de_Usuario_5.7.png)

*Listado de los jinetes Ordenador por AÑOS FEDERADO*
![Resultado de la HU 5.1](./assets/img/Historia_de_Usuario_5.8.png)

*Listado de los jinetes Ordenador por PARTICIPACIONES*
![Resultado de la HU 5.1](./assets/img/Historia_de_Usuario_5.9.png)

*Listado de los jinetes Ordenador por TORNEOS GANADOS*
![Resultado de la HU 5.1](./assets/img/Historia_de_Usuario_5.9.png)

HISTORIA DE USUARIO 6

*Ejemplo de los datos de un solo jinete, esta acción se puede realiar con todos*
![Resultado de la HU 4](./assets/img/Historia_de_Usuario_6.png)


###  *ITERACIÓN 3*

HISTORIA DE USUARIO 8

*Buscador por nombres de los Jinetes*

*Ejemplo con los datos de un solo jinete, esta acción se puede realizar con todos*
![Resultado de la HU 3](./assets/img/Historia_de_Usuario_8.1.png)

