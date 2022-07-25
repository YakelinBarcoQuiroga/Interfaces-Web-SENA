let productos = [
    { img:"/imagenes/control-de-inventario.svg", titulo:"Inventario", texto:"MYA Sales System es ideal para llevar un control de inventario, permitiéndote tener un sin fin de productos ordenados y de fácil acceso, evitando gastar papel y lápiz o llevando cuentas mentales."},
    { img:"/imagenes/control-de-inventario.svg", titulo:"Usuarios", texto:"MYA Sales System no solo te permite administrar a usuarios como lo son los vendedores o administradores del sistema, también tiene la posibilidad de almacenar los datos de tus clientes y proveedores, facilitando por completo la comunicación con ellos."},
    { img:"/imagenes/control-de-inventario.svg", titulo:"Ventas", texto:"MYA Sales System aparte de ser un sistema de gestión de inventario también cuenta con un módulo donde podrás realizar tus ventas, esto de una manera muy sencilla para que tus vendedores se adapten fácilmente."},
    { img:"/imagenes/control-de-inventario.svg", titulo:"Reportes", texto:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt possimus error delectus libero quos earum aliquam amet incidunt cupiditate a nisi necessitatibus, repellat blanditiis eligendi. Similique numquam placeat nisi."},
    { img:"/imagenes/control-de-inventario.svg", titulo:"Soporte", texto:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt possimus error delectus libero quos earum aliquam amet incidunt cupiditate a nisi necessitatibus, repellat blanditiis eligendi. Similique numquam placeat nisi."},
    { img:"/imagenes/control-de-inventario.svg", titulo:"Garantía", texto:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt possimus error delectus libero quos earum aliquam amet incidunt cupiditate a nisi necessitatibus, repellat blanditiis eligendi. Similique numquam placeat nisi."}
];

function generateProductos(productos){
    let htmlproductos = "";

    for(let i = 0; i < productos.length; i++) {
        htmlproductos += `<div class="target-p zoom">
                            <img src="${productos[i].img}" alt="">
                            <h4>${productos[i].titulo}</h4>
                            <p>${productos[i].texto}</p>
                        </div>`;
    }
    const containerProductos = document.getElementById("productos-card");
    containerProductos.innerHTML = htmlproductos;
}

generateProductos(productos);