/**
 * @file Plantilla.js
 * @description Funciones para el procesamiento de la info enviada por el MS Plantilla
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */

"use strict";

/// Creo el espacio de nombres
let Plantilla = {};

// Plantilla de datosDescargados vacíos
Plantilla.datosDescargadosNulos = {
    mensaje: "Datos Descargados No válidos",
    autor: "",
    email: "",
    fecha: ""
}

Plantilla.plantillaTags = {
    "ID": "### ID ###",
    "NOMBRE_JINETE": "### NOMBRE_JINETE ###",
    "NOMBRE": "### NOMBRE ###",
    "APELLIDOS": "### APELLIDOS ###",
    "ALTURA_JINETE": "### ALTURA_JINETE ###",
    "DATOS_CABALLO": "### DATOS_CABALLO ###",
    "NOMBRE_CABALLO": "### NOMBRE_CABALLO ###",
    "EDAD": "### EDAD ###",
    "SEXO": "### SEXO ###",
    "FECHA_NACIMIENTO": "### FECHA_NACIMIENTO ###",
    "DIA": "### DIA ###",
    "MES": "### MES ###",
    "AÑO": "### AÑO ###",
    "NOMBRE_CLUB_ACTUAL": "### NOMBRE_CLUB_ACTUAL ###",
    "DIRECCION_CLUB": "### DIRECCION_CLUB ###",
    "CALLE": "### CALLE ###",
    "NUMERO": "### NUMERO ###",
    "LOCALIDAD": "### LOCALIDAD ###",
    "PROVINCIA": "### PROVINCIA ###",
    "PAIS": "### PAIS ###",
    "TIPO_COMPETICION": "### TIPO_COMPETICION ###",
    "AÑOS_FEDERADO": "### AÑOS_FEDERADO ###",
    "NUMERO_PARTICIPACIONES": "### NUMERO_PARTICIPACIONES ###",
    "NUMERO_TORNEOS_GANADOS": "### NUMERO_TORNEOS_GANADOS ###"
}

/**
 * Función que descarga la info MS Plantilla al llamar a una de sus rutas
 * @param {string} ruta Ruta a descargar
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */
Plantilla.descargarRuta = async function (ruta, callBackFn) {
    let response = null

    // Intento conectar con el microservicio Plantilla
    try {
        const url = Frontend.API_GATEWAY + ruta
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    // Muestro la info que se han descargado
    let datosDescargados = null
    if (response) {
        datosDescargados = await response.json()
        callBackFn(datosDescargados)
    }
}


/**
 * Función principal para mostrar los datos enviados por la ruta "home" de MS Plantilla
 */
Plantilla.mostrarHome = function (datosDescargados) {
    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto
    if (typeof datosDescargados !== "object") datosDescargados = this.datosDescargadosNulos

    // Si datos descargados NO contiene el campo mensaje
    if (typeof datosDescargados.mensaje === "undefined") datosDescargados = this.datosDescargadosNulos

    Frontend.Article.actualizar("Plantilla Home", datosDescargados.mensaje)
}

/**
 * Función principal para mostrar los datos enviados por la ruta "acerca de" de MS Plantilla
 */
Plantilla.mostrarAcercaDe = function (datosDescargados) {
    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto
    if (typeof datosDescargados !== "object") datosDescargados = this.datosDescargadosNulos

    // Si datos descargados NO contiene los campos mensaje, autor, o email
    if (typeof datosDescargados.mensaje === "undefined" ||
        typeof datosDescargados.autor === "undefined" ||
        typeof datosDescargados.email === "undefined" ||
        typeof datosDescargados.fecha === "undefined"
    ) datosDescargados = this.datosDescargadosNulos

    const mensajeAMostrar = `<div>
    <p>${datosDescargados.mensaje}</p>
    <ul>
        <li><b>Autor/a</b>: ${datosDescargados.autor}</li>
        <li><b>E-mail</b>: ${datosDescargados.email}</li>
        <li><b>Fecha</b>: ${datosDescargados.fecha}</li>
    </ul>
    </div>
    `;
    Frontend.Article.actualizar("Plantilla Acerca de", mensajeAMostrar)
}


/***************************************************************************************************/

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 6
 * Imprime los datos de una jinete como una tabla dentro de un formulario usando la plantilla del formulario.
 * @param {jinete} jinete Objeto con los datos de la jinete
 * @returns Una cadena con la tabla que tiene ya los datos actualizados
 */
Plantilla.jineteComoFormulario = function (jinete) {
    return Plantilla.plantillaFormularioJinete.actualiza( jinete );
}

Plantilla.jineteComoTabla = function (jinete) {
    return Plantilla.plantillaTablaJinetes.cabecera
        + Plantilla.plantillaTablaJinetes.actualiza(jinete)
        + Plantilla.plantillaTablaJinetes.pie;
}

/// Plantilla para poner los datos de una jinete en un tabla dentro de un formulario
Plantilla.plantillaFormularioJinete = {}


// Cabecera del formulario
Plantilla.plantillaFormularioJinete.formulario = `
<form method='post' action=''>
    <table width="100%" class="listado-jinetes">
        <thead>
            <th width="10%">Id</th><th width="20%">Nombre</th><th width="20%">Apellidos</th>
        </thead>
        <tbody>
            <tr title="${Plantilla.plantillaTags.ID}">
                <td><input type="text" class="form-jinete-elemento" disabled id="form-jinete-id"
                        value="${Plantilla.plantillaTags.ID}" 
                        name="id_jinete"/></td>
                <td><input type="text" class="form-persona-elemento editable" disabled
                        id="form-persona-nombre" required value="${Plantilla.plantillaTags.NOMBRE}" 
                        name="nombre_persona"/></td>
                <td><input type="text" class="form-persona-elemento editable" disabled
                        id="form-persona-apellidos" value="${Plantilla.plantillaTags.APELLIDOS}" 
                        name="apellidos_persona"/></td>
                <td>
                    <div><a href="javascript:Plantilla.editar()" class="opcion-secundaria mostrar">Editar</a></div>
                    <div><a href="javascript:Plantilla.guardar()" class="opcion-terciaria editar ocultar">Guardar</a></div>
                    <div><a href="javascript:Plantilla.cancelar()" class="opcion-terciaria editar ocultar">Cancelar</a></div>
                </td>
            </tr>
        </tbody>
    </table>
</form>
`;

/***************************************************************************************************/

// Plantilla para poner los datos de varios jinetes dentro de una tabla
Plantilla.plantillaTablaJinetes = {}

/**
 *  CABECERA DE LA TABLA DE LOS NOMBRES DE JINETES
 * Muestra los nombres de los campos sobre la información que vamos a representar de los jinetes
 * @type {string}
 */
Plantilla.plantillaTablaJinetes.cabecera = `<table width="100%" class="listado_jinetes">
    <thead>
        <th width="5%">ID</th>
        <th width="15%">Nombre</th>
        <th width="10%">Apellidos</th>      

    </thead>
    <tbody> `;


/**
 * CABECERA DE LA TABLA DATOS DE JINETES
 * Muestra los nombres de los campos sobre la información que vamos a representar de los jinetes
 * @type {string}
 */
Plantilla.plantillaTablaJinetes.cabeceraJinetesTodos = `<table width="100%" class="listado_jinetes">
    <thead>
        <th width="5%">ID</th>
        <th width="15%">Nombre</th>
        <th width="10%">Apellidos</th>
        <th width="10%">Altura</th>      
        <th width="25%">Datos del caballo</th>
        <th width="25%">Fecha de nacimiento</th>
        <th width="15%">Nombre del club</th>
        <th width="10%">Dirección</th>
        <th width="10%">Tipo de competicion</th>
        <th width="5%">Anios federado</th>
        <th width="5%">Número de participaciones</th> 
        <th width="5%">Número de torneos ganados</th> 

    </thead>
    <tbody> `;


/**
 * * CUERPO DE LA TABLA DEL NOMBRE DE LOS JINETES
 * Muestra la información de cada plantilla en un elemento TR con sus correspondientes TD
 * @param {plantilla} p Datos del plantilla a mostrar
 * @returns Cadena conteniendo todo el elemento TR que muestra el plantilla.
 */
Plantilla.plantillaTablaJinetes.cuerpo =
    `<tr title="${Plantilla.plantillaTags.ID}">
    <td>${Plantilla.plantillaTags.ID}</td>
    <td>${Plantilla.plantillaTags.NOMBRE}</td>
    <td>${Plantilla.plantillaTags.APELLIDOS}</td>
</tr> `;

/**
 * CUERPO DE LA TABLA DE TODOS LOS JINETES
 * Muestra la información de cada plantilla en un elemento TR con sus correspondientes TD
 * @param {plantilla} p Datos del plantilla a mostrar
 * @returns Cadena conteniendo todo el elemento TR que muestra el plantilla.
 */
Plantilla.plantillaTablaJinetes.cuerpoJinetesTodos=
    `<tr title="${Plantilla.plantillaTags.ID}">
    <td>${Plantilla.plantillaTags.ID}</td>
    <td>${Plantilla.plantillaTags.NOMBRE}</td>
    <td>${Plantilla.plantillaTags.APELLIDOS}</td>
    <td>${Plantilla.plantillaTags.ALTURA_JINETE}</td>
    <td>${Plantilla.plantillaTags.DATOS_CABALLO}</td>     
    <td>${Plantilla.plantillaTags.FECHA_NACIMIENTO}</td>   
    <td>${Plantilla.plantillaTags.NOMBRE_CLUB_ACTUAL}</td>   
    <td>${Plantilla.plantillaTags.DIRECCION_CLUB }</td>   
    <td>${Plantilla.plantillaTags.TIPO_COMPETICION }</td>   
    <td>${Plantilla.plantillaTags.AÑOS_FEDERADO}"</td>
    <td>${Plantilla.plantillaTags["NUMERO_PARTICIPACIONES"]}</td>
    <td>${Plantilla.plantillaTags["NUMERO_TORNEOS_GANADOS"]}</td>
</tr> `;


/**
 * PIE DE LAS TABLAS
 * @returns {string}
 */Plantilla.plantillaTablaJinetes.pie = `</tbody> </table>`;

/***************************************************************************************************/

/**
 * Actualiza el cuerpo de la plantilla deseada con los datos de la persona que se le pasa
 * @param {String} plantilla Cadena conteniendo HTMLen la que se desea cambiar los campos de la plantilla por datos
 * @param {jinete} jinete Objeto con los datos del jinete que queremos escribir en el TR
 * @returns La plantilla del cuerpo de la tabla con los datos actualizados
 */
Plantilla.sustituyeTags = function (plantilla, jinetes) {
    return plantilla
        .replace(new RegExp(Plantilla.plantillaTags.ID, 'g'), jinetes.ref['@ref'].id)
        .replace(new RegExp(Plantilla.plantillaTags.NOMBRE  , 'g'), jinetes.data.nombre_jinete.nombre )
        .replace(new RegExp(Plantilla.plantillaTags.APELLIDOS  , 'g'), jinetes.data.nombre_jinete.apellidos )
        .replace(new RegExp(Plantilla.plantillaTags.ALTURA_JINETE  , 'g'), jinetes.data.altura_jinete + " cm" )
        .replace(new RegExp(Plantilla.plantillaTags.DATOS_CABALLO  , 'g'), jinetes.data.datos_caballo.nombre_caballo + " Edad: " + jinetes.data.datos_caballo.edad  + " Sexo: "+ jinetes.data.datos_caballo.sexo )
        .replace(new RegExp(Plantilla.plantillaTags.FECHA_NACIMIENTO  , 'g'), jinetes.data.fecha_nacimiento.dia + "/" + jinetes.data.fecha_nacimiento.mes + "/" + jinetes.data.fecha_nacimiento.año)
        .replace(new RegExp(Plantilla.plantillaTags.NOMBRE_CLUB_ACTUAL  , 'g'), jinetes.data.nombre_club_actual )
        .replace(new RegExp(Plantilla.plantillaTags.DIRECCION_CLUB , 'g'), jinetes.data.direccion_club.calle + ", " + jinetes.data.direccion_club.numero + ", " + jinetes.data.direccion_club.localidad + ", " + jinetes.data.direccion_club.provincia + ", " + jinetes.data.direccion_club.pais)
        .replace(new RegExp(Plantilla.plantillaTags.TIPO_COMPETICION , 'g'), jinetes.data.tipo_competicion)
        .replace(new RegExp(Plantilla.plantillaTags.AÑOS_FEDERADO, 'g'), jinetes.data.años_federado)
        .replace(new RegExp(Plantilla.plantillaTags.NUMERO_PARTICIPACIONES, 'g'), jinetes.data.numero_particiapciones_torneo)
        .replace(new RegExp(Plantilla.plantillaTags.NUMERO_TORNEOS_GANADOS, 'g'), jinetes.data.numero_torneos_ganados)


}

/***************************************************************************************************/

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 2
 * Actualiza el cuerpo de la tabla con los daos de la persona que se le pasa
 * @param {jinete} jinete Objeto con los datos de la persona que queremos escribir el TR
 * @returns La plantilla des cuerpo de la tabla con los datos actualizados
 */
Plantilla.plantillaTablaJinetes.actualizaNombres = function (jinetes) {
    return Plantilla.sustituyeTags(this.cuerpo, jinetes)
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 4
 * Actualiza el cuerpo de la tabla con los daos de la persona que se le pasa
 * @param {jinete} jinete Objeto con los datos de la persona que queremos escribir el TR
 * @returns La plantilla des cuerpo de la tabla con los datos actualizados
 */

Plantilla.plantillaTablaJinetes.actualiza = function (jinete) {
    return Plantilla.sustituyeTags(this.cuerpoJinetesTodos, jinete)
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 6
 * Actualiza el formulario con los datos de la persona que se le pasa
 * @param {Persona} Persona Objeto con los datos de la persona que queremos escribir en el TR
 * @returns La plantilla del cuerpo de la tabla con los datos actualizados
 */
Plantilla.plantillaFormularioJinete.actualiza = function (jinete) {
    return Plantilla.sustituyeTags(this.formulario, jinete)
}

/***************************************************************************************************/


/**
 * Función que recupera todos los jinetes llamando al MS Plantilla
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */
Plantilla.recupera = async function (callBackFn) {
    let response = null

    // Intento conectar el microservicio Plantilla
    try {
        const url = Frontend.API_GATEWAY + "/plantilla/getTodos"
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Geteway")
        console.error(error)
    }

    //mostrar todos los jinetes que se han descargado
    let vectorJinetes = null
    if (response) {
        vectorJinetes = await response.json()
        callBackFn(vectorJinetes.data)
    }
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 6
 * Función que recuperar todas las jinetes llamando al MS jinetes.
 * Posteriormente, llama a la función callBackFn para trabajar con los datos recuperados.
 * @param {String} idJinete Identificador de la jinete a mostrar
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */
Plantilla.recuperaUnJinete = async function (idJinete, callBackFn) {
    try {
        const url = Frontend.API_GATEWAY + "/plantilla/getPorId" + idJinete
        const response = await fetch(url);
        if (response) {
            const jinete = await response.json()
            callBackFn(jinete)
        }
    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
    }
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 3
 * Función que recupera todos los jinetes llamando al MS Plantilla
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */
Plantilla.recuperaAlfabeticamente = async function (callBackFn) {
    let response = null
    // Intento conectar el microservicio Plantilla
    try {
        const url = Frontend.API_GATEWAY + "/plantilla/getTodos"
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Geteway")
        console.error(error)
    }

    //mostrar todos los jinetes que se han descargado
    let vectorJinetes = null
    if (response){

        vectorJinetes = await response.json()

        vectorJinetes.data.sort((a,b)=>{
            //Si el elemento A va después alfabeticamente que B, devolverá -1
            if (a.data.nombre_jinete.nombre < b.data.nombre_jinete.nombre){return -1;} // A va después alfabeticamente que B
            if (a.data.nombre_jinete.nombre > b.data.nombre_jinete.nombre){return  1;} // B va después alfabeticamente que A
            return 0;   //Ambos datos son "iguales" en orden alfabético
        });

        callBackFn(vectorJinetes.data)
    }
}

/***************************************************************************************************/
/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 2
 * Función para mostrar en jinete todos los nombres de los jinetes
 * que se han recuperado de la BBDD
 * @param {vector_de_jinetes} vector
 */
Plantilla.imprimeNombres = function (vector) {
    //console.log(vector) // Para comprobar lo que hay en vector

    // Compongo el contenido que se va a mostrar dentro de la tabla
    let msj = Plantilla.plantillaTablaJinetes.cabecera
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Plantilla.plantillaTablaJinetes.actualizaNombres(e))
    }
    msj += Plantilla.plantillaTablaJinetes.pie

    // Borrar toda la información de Article y la sustituyo por la que me interesa
    Frontend.Article.actualizar("Listados de nombres de todos los jinetes" , msj)
}


/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 4
 * Función para mostrar en pantalla todos los Jinetes que se han recuperado de la BBDD.
 * @param {Vector_de_jinetes} vector Vector con los datos de los jinetes a mostrar
 */

Plantilla.imprimeMuchosJinetes = function (vector) {
    //console.log(vector) // Para comprobar lo que hay en vector

    // Compongo el contenido que se va a mostrar dentro de la tabla
    let msj = Plantilla.plantillaTablaJinetes.cabeceraJinetesTodos
    if (vector && Array.isArray(vector)) {
        vector.forEach(e => msj += Plantilla.plantillaTablaJinetes.actualiza(e));
    }
    msj += Plantilla.plantillaTablaJinetes.pie

    // Borrar toda la información de Article y la sustituyo por la que me interesa
    Frontend.Article.actualizar("Listados de los datos de todos los jinetes" , msj)
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 6
 * Función para mostrar en pantalla los detalles de una jinete que se ha recuperado de la BBDD por su id
 * @param {jinete} jinete Datos de la jinete a mostrar
 */

Plantilla.imprimeUnJinete = function (jinete) {
    // console.log(jinete) // Para comprobar lo que hay en vector
    let msj = Plantilla.jineteComoFormulario(jinete);

    // Borro toda la info de Article y la sustituyo por la que me interesa
   Frontend.Article.actualizar("Mostrar una jinete", msj)

    // Actualiza el objeto que guarda los datos mostrados
     Plantilla.almacenaDatos(jinete)
}

/***************************************************************************************************/

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 6
 * Almacena los datos de la jinete que se está mostrando
 * @param {jinete} jinete Datos de la jinete a almacenar
 */

Plantilla.almacenaDatos = function (jinete) {
    Plantilla.jineteMostrado = jinete;
}

/***************************************************************************************************/

/**
 * Función principal para responder al evento de elegir la opción "Home"
 */
Plantilla.procesarHome = function () {
    this.descargarRuta("/plantilla/", this.mostrarHome);
}

/**
 * Función principal para responder al evento de elegir la opción "Acerca de"
 */
Plantilla.procesarAcercaDe = function () {
    this.descargarRuta("/plantilla/acercade", this.mostrarAcercaDe);
}



/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 2
 * Función principal para recuperar las jinetes desde el MS, y posteriormente imprimirlas
 */
Plantilla.nombrarJinetes = function () {
    Plantilla.recupera(Plantilla.imprimeNombres);
}


/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 4
 * Función principal para recuperar los Jinetes del MS y, posteriormente, imprimirlos.
 */

Plantilla.listarJinetes = function () {
    Plantilla.recupera(Plantilla.imprimeMuchosJinetes);
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 6
 * Función principal para mostrar los datos de una jinete desde el MS y, posteriormente, imprimirla.
 * @param {String} idJinete Identificador de la jinete a mostrar
 */
Plantilla.mostrarUnJinete = function (idJinete) {
    this.recuperaUnJinete(idJinete, this.imprimeMuchosJinetes);
}

/**
 * FUNCIÓN PARA LA HISTORIA DE USUARIO 4
 * Función principal para recuperar los Jinetes del MS y, posteriormente, imprimirlos.
 */

Plantilla.listarJinetesAlafetico = function () {
    Plantilla.recuperaAlfabeticamente(Plantilla.imprimeNombres);
}



