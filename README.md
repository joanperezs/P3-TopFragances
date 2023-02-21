# Top Fragances
Hecho por Joan Pérez Susidko

## Antes de todo

Sin estos módulos no funcionará la página web.

```sh
npm install vue
```

```sh
npm install swiper
```

```sh
npm install jquery
```

```sh
npm install json-server
```

## Introducción

Top Fragrances es una tienda de perfumería online donde podrás comprar el perfume que quieras,
cada perfume estará catalogado por sus características, marcas, precios y tipo.  
Tiene una sección para el cliente de los productos más vendidos. 
Dispone una cesta para comprar múltiples productos.


### Funcionamiento

La página está compuesta por 4 páginas y 11 módulos. 
- Inicio
- Lista de perfumes
- Perfume
- Cesta

### Inicio 

El inicio está formado por un navbar que aparece al bajar (animación que sólo está aquí), un vídeo, un carrousel con sliders formado por items y un footer.
Si le das click al logo del navbar, despliega un dropdown donde podrás navegar entre las siguientes páginas.
El carrousel está ordenado por ventas de mayor a menor y limitado a sólo 8 items, en el json hay 20.

![image](https://user-images.githubusercontent.com/101748401/220023991-59b6f3e0-2d67-426f-86d6-1b5911a8d893.png)
![image](https://user-images.githubusercontent.com/101748401/220024417-a72fba07-6481-49ed-af8e-42aa18858224.png)


### Lista de perfumes

Esta página como su nombre indica es una lista de todos los productos. Son columnas de cartas que están limitadas, ya que tiene un sistema que va cargando más perfumes según le vayas dando al botón de Cargar más.

![image](https://user-images.githubusercontent.com/101748401/220024936-ae7134b4-2a4c-47f2-bd03-50d87b01db2c.png)
![image](https://user-images.githubusercontent.com/101748401/220024965-2ac76ce7-7055-492a-931f-31a797281d24.png)

### Perfume

Se accede dándole click a cualquier perfume en la lista o el carrousel del inicio. Aquí se muestra toda la información del perfume: Nombre, marca, precio, tonos puestos en badges, un botón para añadirlo a la cesta y una breve descripción.

![image](https://user-images.githubusercontent.com/101748401/220025601-b0ccf5e5-e760-48ab-950c-d059725a59c1.png)

### Cesta de la compra

Por último y no menos importante la cesta donde se almacena todos los perfumes que ha ido añadiendo el usuario. Es una lista de perfumes con botones para eliminar del carrito y un precio total.

[Importante! Al presionar el botón de eliminar se tiene que refrescar la página, si no no se verán reflejado los cambios.]

![image](https://user-images.githubusercontent.com/101748401/220026298-c9d32af1-064f-41b2-9064-8216f2fa4a78.png)

#### Información extra

![image](https://user-images.githubusercontent.com/101748401/220026808-2ebffce1-5b27-43e6-8478-8685f66281db.png)
![image](https://user-images.githubusercontent.com/101748401/220027362-d69c3073-3f72-4e79-b73f-02d05cdecf72.png)



