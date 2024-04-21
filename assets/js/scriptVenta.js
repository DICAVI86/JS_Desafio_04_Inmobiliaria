//Arreglo Venta

const propiedadesVenta = [
    {
    nombre: 'Gran casa familiar a las afueras de la ciudad',
    src: 'https://http2.mlstatic.com/D_NQ_NP_2X_616179-MLC75051250335_032024-F.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    costo: 5000,
    smoke: true,
    pets: false
    },
    {
    nombre: 'Casa exclusiva y en buena ubicación',
    src: 'https://img.freepik.com/foto-gratis/villa-lujo-piscina-espectacular-diseno-contemporaneo-arte-digital-bienes-raices-hogar-casa-propiedad-ilustracion-generativa-ia_1258-151616.jpg?t=st=1713671785~exp=1713675385~hmac=6a86d43b483743182746d7cc57211348e74985f4823cd28f5c6e3d21cf77c988&w=1380',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    costo: 1200,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Departamento amoblado y en buena ubicación',
    src: 'https://img.freepik.com/foto-gratis/disparo-interior-casa-moderna-cocina-grandes-ventanales_181624-24368.jpg?t=st=1713672169~exp=1713675769~hmac=c4125d285ad11be6b98d14cea19f53ece36da6af0007106e66f805a61f9f405e&w=1800',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    costo: 4500,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Hermosa casa con gran vista y mucho espacio',
    src: 'https://img.freepik.com/foto-gratis/imagen-edificio-madera-bosque_259150-58903.jpg?t=st=1713672218~exp=1713675818~hmac=fc55f3c64c35ef7e7a345405b61d271f69c107490b4b9a13a3b3ab1169597a41&w=1800',
    descripcion: 'Esta pequeña cabaña familiar esta ubicada en la mejor zona de Petrohue',
    ubicacion: 'Petrohue, KM800, XI Region, Chile',
    habitaciones: 3,
    costo: 3000,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Departamento en la ciudad',
    src: 'https://img.freepik.com/foto-gratis/acogedora-sala-estar-apartamento-moderno_181624-60384.jpg?t=st=1713672256~exp=1713675856~hmac=1308aa7b97e351dce3e4c92e8242189cab1a6a99436df14169173c0d5096dac6&w=1800',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 2,
    costo: 5000,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Casa familar con gran jardín y piscina',
    src: 'https://img.freepik.com/foto-gratis/encantadora-casa-amarilla-ventanas-madera-jardin-verde_181624-8074.jpg?t=st=1713672299~exp=1713675899~hmac=79461db2a2cbb71a2a2ac05a20b2c00fa46fb32cb1d1bea2b9237452ed07fbfd&w=1800',
    descripcion: 'Esta gran casa familiar se encuentra en uno de los mejores barrios de la ciudad, cerca de colegios y comercio',
    ubicacion: 'Blaise Cendrars 6588, Vitacura, Santiago, Chile',
    habitaciones: 5,
    costo: 7000,
    smoke: true,
    pets: true
    },
    ]



    function mostrarPropiedades(propiedadesVenta) {
        const listaPropiedades = document.getElementById("listaPropiedades");
        listaPropiedades.innerHTML = "";
     
        propiedadesVenta.forEach((propiedad) => {
            const propiedadElement = document.createElement("div");
            propiedadElement.classList.add("propiedad");

/*             if (propiedad.smoke) {
              propiedad.smoke = "No se permite fumar"
            } else { propiedad.smoke = "Si se puede fumar"};

            if (propiedad.pets) {
              propiedad.pets = "No se permiten mascotas";
            } else { propiedad.pets = "Si se permiten mascotas"}; */

            propiedadElement.innerHTML = `
            <div class="col-md mb-4">
                <div class="card">
                  <img
                    src=${propiedad.src}
                    class="card-img-top"
                    alt="Imagen del departamento"
                  />
                  <div class="card-body">
                  <h5 class="card-title">
                      ${propiedad.nombre}
                  </h5>
                  <p class="card-text">
                      ${propiedad.descripcion}
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                  </p>
                  <p>
                    <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> 0 Baños
                  </p>
                  <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                  ${
                    propiedad.smoke === true
                    ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
                    : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se puede fumar</p>'
                }
                ${
                    propiedad.pets === true
                    ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
                    : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
                }
                </div>
              </div>
            </div>
            `;

        listaPropiedades.appendChild(propiedadElement);


        });

    };

window.onload = () => {
    mostrarPropiedades(propiedadesVenta)
};