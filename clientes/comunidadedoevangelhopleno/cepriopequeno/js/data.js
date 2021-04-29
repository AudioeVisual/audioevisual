const data = document.querySelector("#data");

const date = new Date();

const formatter = Intl.DateTimeFormat('pt-BR', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
});

data.innerHTML = formatter.format(date);