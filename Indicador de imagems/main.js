

const camera = document.getElementById("camera");
const result = document.getElementById("result");

Webcan.set({
    width: 360,
    height: 270,
    image_formal: 'png',
    png_quality: 90
});

Webcam.attach(camera);

function snap() {
    resutinnerHTML = "";
    Webcam.snap(function (dateURI) {
        const captura = document.createElement("img");
        captura.setAttribute("id", "captura");
        captura.setAttribute("src"  , dataURI);
        result.appendChield(captura);

    });
    check();
}

function modeLoaded() {
    console.log('Modelo Carregado')
    //permissão
    Webcam.attach(camera);
}

function check() {
    const img = document.getElementById('captura');
    classifiel.classsify(img, gotResult)
}
function gotResult(error, results) {
    console.log(error);
    console.log(results);

    const objeto = document.getElementById("objectName");
    const praxisao =document.getElementById("objectAccuraçy")


    if(!error) {
        objeto.innerHTML = results[0].label;
        preciasao.innerHTML = result[0].confidence.toFixed(2);
    }else{
        console.error(error);
    }
}