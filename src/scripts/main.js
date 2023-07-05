AOS.init();

const dataEvento = new Date ("Dec 24, 2023 18:00:00");
const tempoDoEvento = dataEvento.getTime();


const temporizador = setInterval(() => {
    const agora = new Date;
    const tempoAtual = agora.getTime();

    const tempoRestante = tempoDoEvento - tempoAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    const segundosEmMs = 1000;

    const dias = Math.floor(tempoRestante / diasEmMs);
    const horas = Math.floor((tempoRestante % diasEmMs) / horasEmMs);
    const minutos = Math.floor((tempoRestante % (horasEmMs)) / minutosEmMs);
    const segundos = Math.floor((tempoRestante % (minutosEmMs)) / segundosEmMs);

    console.log(dias, horas, minutos, segundos);

    document.getElementById("contador").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (tempoRestante <= 0) {
        clearInterval(temporizador);
        document.getElementById("contador").innerHTML = "  0d 0h 0m 0s";
    }

} , 1000)