const clipboard = new ClipboardJS('.btn')

clipboard.on('success', function(e) {
    alert("Texto copiado")
});

clipboard.on('error', function(e) {
    alert("Falha ao copiar texto")
});