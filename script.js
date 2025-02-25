
/*************  ✨ Codeium Command ⭐  *************/
function restarFechas(fecha1, fecha2) {
    let fecha1_milisegundos = Date.parse(fecha1);
    let fecha2_milisegundos = Date.parse(fecha2);
    let diferencia_milisegundos = fecha2_milisegundos - fecha1_milisegundos;
    let diferencia_dias = Math.floor(diferencia_milisegundos / (1000 * 60 * 60 * 24));
    return diferencia_dias;
}
