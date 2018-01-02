# Reto de Código - F O O D M A P

* **Track:** _Common Core_
* **Curso:** _Crea tu propia red social_
* **Unidad:** _Agiliza tu desarrollo_

***

## Objetivo

Crear una web-app que a través de un input pueda filtrar los restaurantes que se encuentran cerca.

## Flujo de la aplicación
* Vista splash con duración de 2 segundos que redirecciona a la vista principal. 
* En la vista principal se muestran todos los restaurantes "cerca" junto con el input para filtrar, elegir entre las siguientes opciones: **Cevicheria, panaderia y variado** y darle click al botón (lupa).
* Al realizar la elección de un filtro, se muestran únicamente aquellos restaurantes que cumplan con la condición. 
* Toda las imágenes tienen un evento mouseover y muestran el nombre del restaurante en letras blancas.
* Al seleccionar alguno de los restaurantes, se muestra la información de este a través de un modal. 
* Una vez cerrado el modal se vuelve a la vista principal. 

## Especificaciones

* Se trabajó en versión mobile.
* Se utilizó el framework Bootstrap en su versión 3.3.7.
* Se utilizó la librería jQuery en su versión 3.2.1.
* El archivo index.html contiene la estructura principal de la página, y se enlaza a los archivos main.css, app.js, data.js (en este archivo se guarda la información de los restaurantes), al framework Bootstrap y a la librería jQuery.
* En la carpeta vendors se almacenan los archivos correspondientes al framework Bootstrap y a la librería jQuery.
* En la carpeta “assets” se almacenan las imágenes utilizadas en el archivo html (images) y en el Readme.md (docs).
* La paleta de colores son los siguientes: #2b2b2b, #cb843e, #fff y #eee.

La estructura de la web-app es la siguiente:

**VISTA PRINCIPAL**

![Vista Principal](assets/docs/vista-principal.png "principal")

**VISTA MODAL**

![Vista Principal](assets/docs/modal.png "principal")
