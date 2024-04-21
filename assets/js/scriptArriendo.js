

const propiedadesArriendo = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    costo: 5000,
    smoke: true,
    pets: false
    },
    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    costo: 1200,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    costo: 4500,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Casa de campo con espectacular vista',
    src: 'https://previews.123rf.com/images/grispb/grispb2010/grispb201000436/157133015-dos-casas-caba%C3%B1a-rodeada-de-vegetaci%C3%B3n-casas-en-renta-compra-una-caba%C3%B1a-pueblo-de-caba%C3%B1as-campo.jpg',
    descripcion: 'Esta pequeña cabaña familiar esta ubicada en la mejor zona de Petrohue',
    ubicacion: 'Petrohue, KM800, XI Region, Chile',
    habitaciones: 3,
    costo: 3000,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Departamento en la ciudad',
    src: 'https://www.construyehogar.com/wp-content/uploads/2014/02/Decoraci%C3%B3n-de-interiores-apartamento-de-lujo.jpeg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 2,
    costo: 5000,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Casa familar con gran jardín y piscina',
    src: 'https://ucarecdn.com/f0300833-b39b-4076-9a3f-bfbfd73bc6b7/-/preview/',
    descripcion: 'Esta gran casa familiar se encuentra en uno de los mejores barrios de la ciudad, cerca de colegios y comercio',
    ubicacion: 'Blaise Cendrars 6588, Vitacura, Santiago, Chile',
    habitaciones: 5,
    costo: 7000,
    smoke: false,
    pets: true
    },
    ]



    function mostrarPropiedades(propiedadesArriendo) {
        const listaPropiedades = document.getElementById("listaPropiedades");
        listaPropiedades.innerHTML = "";
     
        propiedadesArriendo.forEach((propiedad) => {
            const propiedadElement = document.createElement("div");
            propiedadElement.classList.add("propiedad");

            if (propiedad.smoke) {
              propiedad.smoke = "No se permite fumar"
            } else { propiedad.smoke = "Si se puede fumar"};

            if (propiedad.pets) {
              propiedad.pets = "No se permiten mascotas";
            } else { propiedad.pets = "Si se permiten mascotas"};

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
                  <p>
                    <i class="fas fa-smoking"></i> ${propiedad.smoke}
                  </p>
                  <p>
                    <i class="fas fa-paw"></i> ${propiedad.pets}
                  </p>
                </div>
              </div>
            </div>
            `;

        listaPropiedades.appendChild(propiedadElement);


        });

    };

window.onload = () => {
    mostrarPropiedades(propiedadesArriendo)
};