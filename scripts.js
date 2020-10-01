jQuery(document).ready(function($) {
    var letras = Array(
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
    );
    var imagens = {
        A: "anel.svg",
        B: "bicicleta.svg",
        C: "camisa.svg",
        D: "dado.svg",
        E: "elefante.svg",
        F: "faca.jpg",
        G: "Garrafa.jpg",
        H: "Helicptero.jpg",
        I: "ioios.jpg",
        J: "jarra.jpg",
        K: "ketchup.png",
        L: "lapis.jpg",
        M: "maca.jpg",
        N: "nariz.png",
        O: "Oculos.jpg",
        P: "Pincel.png",
        Q: "Queijo.png",
        R: "Relogio.png",
        S: "Sol.png",
        T: "Torneira.png",
        U: "Uva.png",
        V: "Violao.png",
        W: "Wolverine.png",
        X: "Xicara.png",
        Y: "Yoga.png",
        Z: "Zebra.png"
    };

    mostraLetra();

    $(document).keyup(function(event) {
        e = event || window.event;
        var tecla = e.witch || e.key;
        tecla = tecla.toUpperCase();
        if (tecla == $('.view').text()) {
            var gerar1 = gerarLetra(tecla);
            var gerar2 = gerarLetra(tecla);
            var imagemExibir = [{
                        indice: tecla,
                        imagem: imagens[`${tecla}`]
                    },
                    {
                        indice: gerar1,
                        imagem: imagens[`${gerar1}`]
                    },
                    {
                        indice: gerar2,
                        imagem: imagens[`${gerar2}`]
                    }
                ]
                .sort();
            $('.letraAtual').empty().append(tecla);
            $('.imgs').empty().append(
                `
                <a rel="${(imagemExibir[0].indice == tecla)?"modal:close":""}">
                    <button id="${imagemExibir[0].indice}" class="imagemCorrespondente">
                        <img src="./imgs/${imagemExibir[0].imagem}"/>
                    </button>
                </a>
                <a rel="${(imagemExibir[1].indice == tecla)?"modal:close":""}">
                    <button id="${imagemExibir[1].indice}" class="imagemCorrespondente">
                        <img src="./imgs/${imagemExibir[1].imagem}"/>
                    </button>
                </a>
                <a rel="${(imagemExibir[2].indice == tecla)?"modal:close":""}">
                    <button id="${imagemExibir[2].indice}" class="imagemCorrespondente">
                        <img src="./imgs/${imagemExibir[2].imagem}"/>
                    </button>
                </a>
                `
            );
            $('.resp').empty();
            $('#imagensObjetos').modal();
            $('.imagemCorrespondente').on('click', function(event) {
                if ($(this).attr('id') == tecla) {
                    mostraLetra();
                } else {
                    $('.resp').empty().append(`
                        <img src="./imgs/sad.png" />
                    `);
                }
            });
        }
    });


    function mostraLetra() {
        var view = $('.view');
        view.hide(800, function() {
            view.empty().append(gerarLetra()).show(900);
        });
    }

    function gerarLetra(diferente = null) {
        var chave = 0;
        do {
            chave = Math.floor(Math.random() * letras.length);
        } while (letras[chave] == diferente);

        return letras[chave];
    }
});