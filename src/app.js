function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}



window.addEventListener('load', async () => {

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

let nombre = document.getElementById('nombre').value;
let telefono = document.getElementById('telefono').value;
let correo = document.getElementById('correo').value;
let facebook = document.getElementById('facebook').value;
let carrera = document.getElementById('carrera').value;
let grupo = document.getElementById('grupo').value;

let secretaria = document.getElementById('secretaria').value;
let institucion = document.getElementById('institucion').value;
let cct = document.getElementById('cct').value;
let calle = document.getElementById('calle').value;
let colonia = document.getElementById('colonia').value;
let municipio = document.getElementById('municipio').value;
let codigo_postal = document.getElementById('codigo_postal').value;
let telefono_lugar = document.getElementById('telefono_lugar').value;
let referencia = document.getElementById('referencia').value;

let nombre_funcionario = document.getElementById('nombre_funcionario').value;
let escolaridad = document.getElementById('escolaridad').value;
let cargo = document.getElementById('cargo').value;

let actividad1 = document.getElementById('actividad1').value;
let actividad2 = document.getElementById('actividad2').value;
let actividad3 = document.getElementById('actividad3').value;
let actividad4 = document.getElementById('actividad4').value;
let actividad5 = document.getElementById('actividad5').value;


generatePDF(nombre, telefono, correo, carrera, facebook, grupo, secretaria, institucion, cct, calle, colonia, municipio, codigo_postal, telefono_lugar, referencia, nombre_funcionario, escolaridad, cargo, actividad1, actividad2, actividad3, actividad4, actividad5);
    })

});

async function generatePDF(nombre, telefono, correo, carrera, facebook, grupo, secretaria, institucion, cct, calle, colonia, municipio, codigo_postal, telefono_lugar, referencia, nombre_funcionario, escolaridad, cargo, actividad1, actividad2, actividad3, actividad4, actividad5) {
    const image = await loadImage("Img/ANEXO 1 2024_page-0001.jpg");
    const pdf = new jsPDF('p', 'pt', 'letter');

    pdf.addImage(image, 'JPG', 0, 0, 650, 850);

    pdf.setFontSize(12);
    pdf.text(nombre, 260, 150 );
    pdf.text(telefono, 260, 170 )
    pdf.text(correo, 260, 190 )
    pdf.text(carrera, 260, 210 )
    pdf.text(facebook, 260, 230 )
    pdf.text(grupo, 260, 253 )
    pdf.text(secretaria, 260, 280 )
    pdf.text(institucion, 260, 310 )
    pdf.text(cct, 260, 330 )
    pdf.text(calle, 260, 355 )
    pdf.text(colonia, 260, 385 )
    pdf.text(municipio, 260, 406 )
    pdf.text(codigo_postal, 260, 430 )
    pdf.text(telefono_lugar, 260, 450 )
    pdf.text(referencia, 260, 470 )
    pdf.text(nombre_funcionario, 260, 495 )
    pdf.text(escolaridad, 260, 530 )
    pdf.text(cargo, 260, 555 )
    pdf.text(actividad1, 262, 577 )
    pdf.text(actividad2, 262, 589 )
    pdf.text(actividad3, 262, 600 )
    pdf.text(actividad4, 262, 611 )
    pdf.text(actividad5, 262, 625)
    
    pdf.save("example.pdf");

}