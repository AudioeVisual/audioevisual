function acesso(form){

    /*
    Verifica nome e senha e converte maiúsculas em minuscalas
    */
    
        form.nome.value = form.nome.value.toLowerCase ()
        form.senha.value = form.senha.value.toLowerCase ()
        if (form.nome.value == "pedro casella" && form.senha.value == "icc2018133" ) {
          location = "socio/pedro/paginasociopedro.html" }

        if (form.nome.value == "ruan souza" && form.senha.value == "eshelleytesta" ) {
          location = "socio/ruan/paginasocioruan.html" }

        if (form.nome.value == "raquel perin" && form.senha.value == "melhoramigamexma" ) {
          location = "socio/raquel/paginasocioraquel.html" }

        if (form.nome.value == "jota king" && form.senha.value == "jotakingoficial" ) {
          location = "socio/jobson/projetosjobson.html" }

        if (form.nome.value == "tainara tavares" && form.senha.value == "tainaratavaresavdesign" ) {
          location = "socio/tainaratavares/projetostainaratavares.html" }

        if (form.nome.value == "hernandes fernandes" && form.senha.value == "pazesports" ) {
          location = "socio/hernandesfernandes/projetoshernandes.html" }
        
        if (form.nome.value == "resenha na areia" && form.senha.value == "ctresenhanaareia" ) {
          location = "clientes/resenhanaareia/ctrna.html" }

        if (form.nome.value == "hérica lopes" && form.senha.value == "hericalopesdecoracao" ) {
          location = "clientes/hericalopes/contato/index.html" }

        if (form.nome.value == "weslley silva" && form.senha.value == "bellaafrodite" ) {
          location = "clientes/bellaafrodite/index.html" }

        if (form.nome.value == "comunidade do evangelho pleno" && form.senha.value == "cepriopequeno" ) {
          location = "clientes/comunidadedoevangelhopleno/cepriopequeno/index.html" }
            
          else {
            form.nome.value=""
            form.senha.value=""
            alert("Verifique se login e senha estão corretos.")
          }

      
      }

