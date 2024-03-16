
//funkjson for validering ved bruk av boolean
function billettRegistrering() {
    let bol=true;
    if ($("#Velgfilm").val()===""){
        $("#feilfilm").html("Velg en film")
        bol=false;
    }else{$("#feilfilm").html("")}
    if ($("#antall").val()===""){
        $("#antallfeil").html("Skriv antall")
        bol=false;
    }else{$("#antallfeil").html("")}
    if ($("#fnavn").val()===""){
        $("#fornavnfeil").html("Skriv Fornavnen")
        bol=false;
    }else{$("#fornavnfeil").html("")}
    if ($("#enavn").val()===""){
        $("#etternavnfeil").html("Skriv Etternavnen")
        bol=false;
    }else{$("#etternavnfeil").html("")}
    if ($("#tnr").val()===""){
        $("#telefonnrfeil").html("Skriv Telefonnr")
        bol=false;
    }else{$("#telefonnrfeil").html("")}
    if ($("#epost").val()===""){
        $("#epostfeil").html("Skriv inn E-posten")
        bol=false;
    }else{$("#epostfeil").html("")}

    if(bol){
        const billettsalg = { //info fra inputene
            film: $("#Velgfilm").val(),
            antall: $("#antall").val(),
            fornavn: $("#fnavn").val(),
            etternavn: $("#enavn").val(),
            telefonnr: $("#tnr").val(),
            epost: $("#epost").val()
        };

        $.post("/lagre",billettsalg, function() {
            hentAlleBilletter();
        });
    }
    $("#Velgfilm").val("");  //tøm input-feltene
    $("#antall").val("");
    $("#fnavn").val("");
    $("#enavn").val("");
    $("#tnr").val("");
    $("#epost").val("");
}

//funksjon for å hente billetene
function hentAlleBilletter() {
    $.get("/hentAlleBilletter", function(billetter) {
        formaterTabell(billetter);
    });
}

console.log("it gets here 4");

//funksjon for billetter der
function formaterTabell(billetter) {
    let ut = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";
    for (let billett of billetter){
        ut+="<tr><td>"+billett.antall+"</td><td>"+billett.film+"</td><td>"+billett.fornavn+"</td>" +
            "<td>"+billett.etternavn+"</td><td>"+billett.telefonnr+"</td><td>"+billett.epost+"</td></tr>";
    }
    ut+="</table>";
    $("#biletttabell").html(ut);
}

//funksjon for å slette billetter
function slettBilletter() {
    $.get("/slettAlleBilletter", function() {
        hentAlleBilletter();
    });
}