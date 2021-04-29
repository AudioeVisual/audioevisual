const data = document.querySelector("#mes");

const date = new Date();

const formatter = Intl.DateTimeFormat('pt-BR', {
    year: "numeric",
    month: "long",
    day: "numeric",
});

data.innerHTML = formatter.format(date);