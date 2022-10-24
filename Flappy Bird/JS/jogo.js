console.log('[DevAlex] Flappy Bird');

let frames = 0;
var somDe_HIT = new Audio();
somDe_HIT.src = '../IMG/efeitos_hit.wav';

var sprites = new Image();
sprites.src = '../IMG/sprites.png';

var canvas = document.querySelector('canvas');
var contexto = canvas.getContext('2d');


// [Planoo de Fundo]
const planoDeFundo = {
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 92,
    x: 0,
    y: canvas.height - 203,
    
    desenha() {
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0, 0, canvas.width, canvas.height);
        
        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            planoDeFundo.x, planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura,
        );
    
        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            (planoDeFundo.x + planoDeFundo.largura),planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura,
        );
    }
}

// [Chao]
function criaChao(){

    var chao = {
        spriteX: 0,
        spriteY: 610,
        largura: 224,
        altura: 112,
        x: 0,
        y: canvas.height - 112,
        atualiza(){
            const movimentoDoChao = 1;
            const repeteEm = chao.largura / 2;
            const movimentacao = chao.x - movimentoDoChao;
        // console.log("[chao.x]", chao.x);
        // console.log("[repeteEm]", repeteEm);
        // console.log("[movimentacao ]", movimentacao % repeteEm);
            chao.x = movimentacao % repeteEm;       
         },
        desenha() {
            contexto.drawImage(
                sprites,
                chao.spriteX, chao.spriteY, 
                chao.largura, chao.altura, 
                chao.x, chao.y,
                chao.largura, chao.altura,
             );
    
             contexto.drawImage(
                sprites,
                chao.spriteX, chao.spriteY, 
                chao.largura, chao.altura, 
                (chao.x + chao.largura), chao.y,
                chao.largura, chao.altura,
             );
        },
    };

    return chao;
}
var chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,
    atualiza() {

    },
    desenha() {
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY, 
            chao.largura, chao.altura, 
            chao.x, chao.y,
            chao.largura, chao.altura,
         );

         contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY, 
            chao.largura, chao.altura, 
            (chao.x + chao.largura), chao.y,
            chao.largura, chao.altura,
         );
    },
};

function fazColisao(FlappyBird, chao) {
    var FlappyBirdY = FlappyBird.y + FlappyBird.altura;
    var chaoY = chao.y;

    if(FlappyBirdY >= chaoY){
        return true;
    }

    return false;
}

function criaflappyBird() {
    var FlappyBird = {
        spriteX: 0,
        spriteY: 0,
        largura: 33,
        altura: 24,
        x: 10,
        y: 50,  
        pulo: 4.6,
        pula() {
            console.log("Devo pular");
            console.log('[antes]', FlappyBird.velocidade);
            FlappyBird.velocidade = - FlappyBird.pulo;
            console.log('[depois]', FlappyBird.velocidade);
        },
        gravidade: 0.25,
        velocidade: 0,
    
        atualiza() {
            if(fazColisao(FlappyBird, globais.chao)) {
                console.log("Fez colisão");
                somDe_HIT.play();
                                   
                mudaParaTela(Telas.GAME_OVER);
                return;
            }
            FlappyBird.velocidade = FlappyBird.velocidade + FlappyBird.gravidade;
            FlappyBird.y = FlappyBird.y + FlappyBird.velocidade;
        },
        movimentos: [
            { spriteX: 0, spriteY: 0, }, // asa pra cima
            { spriteX: 0, spriteY: 26, }, // asa no meio
            { spriteX: 0, spriteY: 52, }, // asa pra baixo
            { spriteX: 0, spriteY: 26, }, // asa no meio
        ],
        frameAtual: 0,
        atualizaOFrameAtual() {
            var intervaloDeFrames = 10;
            var passouOIntervalo = frames % intervaloDeFrames === 0;
           // console.log('passouOIntervalo', passouOIntervalo);
            
            if(passouOIntervalo){
            var baseDoIncremento = 1;
            var incremento = baseDoIncremento + FlappyBird.frameAtual;
            var baseRepeticao = FlappyBird.movimentos.length;
            FlappyBird.frameAtual = incremento % baseRepeticao
            }
           // console.log('[incremento]', incremento);
          //  console.log('[baseRepeticao]', baseRepeticao);
          //  console.log('[frame]', incremento % baseRepeticao);

        },
         desenha() {
             FlappyBird.atualizaOFrameAtual();
             var { spriteX, spriteY } = FlappyBird.movimentos[FlappyBird.frameAtual];

            contexto.drawImage(
                sprites,
                spriteX, spriteY, // Sprite X, Sprite Y
                FlappyBird.largura, FlappyBird.altura, // Tamanho do recorte na srpite
                FlappyBird.x, FlappyBird.y,
                FlappyBird.largura, FlappyBird.altura,
             );
        }
    }
    return FlappyBird;
}

// [Mensagem GameOver]
var mensagemGameOver = {

    sX: 134,
    sY: 153, 
    w: 226,
    h: 200,
    x: (canvas.width / 2) - 226 / 2,
    y: 50,

    desenha() {
        contexto.drawImage(
            sprites,
            mensagemGameOver.sX, mensagemGameOver.sY,
            mensagemGameOver.w, mensagemGameOver.h,
            mensagemGameOver.x, mensagemGameOver.y,
            mensagemGameOver.w, mensagemGameOver.h,

        );
    }
}



// [Mensagem Get Ready]

var mensageGetReady = {

    sX: 134,
    sY: 0, 
    w: 175,
    h: 152,
    x: (canvas.width / 2) - 174 / 2,
    y: 50,

    desenha() {
        contexto.drawImage(
            sprites,
            mensageGetReady.sX, mensageGetReady.sY,
            mensageGetReady.w, mensageGetReady.h,
            mensageGetReady.x, mensageGetReady.y,
            mensageGetReady.w, mensageGetReady.h,

        );
    }
}

function criaCanos() {
    var canos = {
        largura: 52,
        altura: 400,
        chao: {
            spriteX: 0,
            spriteY: 169,
        },
        ceu: {
            spriteX: 52,
            spriteY: 169,
        },
        espaco: 80,
        desenha() {
            canos.pares.forEach(function(par) {
                var yRandom = par.y;
                var escamentoEntreCanos = 90;
    
                var canoCeuX = par.x;
                var canoCeuY = yRandom;

                // [Cano do Céu]
            contexto.drawImage(
                sprites,
                canos.ceu.spriteX, canos.ceu.spriteY,
                canos.largura, canos.altura,
                canoCeuX, canoCeuY,
                canos.largura, canos.altura,
            )
            // [Cano do Chao]
            var canoChaoX = par.x;
            var canoChaoY = canos.altura + escamentoEntreCanos + yRandom;
            contexto.drawImage(
                sprites,
                canos.chao.spriteX, canos.chao.spriteY,
                canos.largura, canos.altura,
                canoChaoX, canoChaoY,
                canos.largura, canos.altura,
                )

                par.canoCeu = {
                    x: canoCeuX,
                    y: canos.altura + canoCeuY
                }

                par.canoChao = {
                    x: canoChaoX,
                    y: canoChaoY
                }
            })
        },
        temColisaoComOFlappyBird(par){
            var cabecaDoFlappy = globais.FlappyBird.y;
            var peDoFlappy = globais.FlappyBird.y + globais.FlappyBird.altura;


            if((globais.FlappyBird.x + globais.FlappyBird.largura) >= par.x){
                if(cabecaDoFlappy <= par.canoCeu.y) {
                    return true;
                }

            if(peDoFlappy >= par.canoChao.y) {
                return true;
            }
        }


            return false;
        },
        pares: [],
        atualiza() {
            var passou100Frames = frames % 100 === 0;
            if(passou100Frames) {
                console.log('Passou 100 frames');
                canos.pares.push({
                    x: canvas.width,
                    y: -150 * (Math.random() + 1),
                });
            }


            canos.pares.forEach(function(par) {
                par.x = par.x - 2;

                if(canos.temColisaoComOFlappyBird(par)) {
                    console.log("Você perdeu!");
                    somDe_HIT.play();
                    mudaParaTela(Telas.GAME_OVER);
                }

                if(par.x + canos.largura <= 0){
                    canos.pares.shift();
                }

            });
        }
    }

    return canos;
}

function criaPlacar() {
    var placar = {
        pontuacao: 0,
        desenha(){
            contexto.font = '35px "VT323"';
            contexto.textAlign = 'right';
            contexto.fillStyle = 'white';
            contexto.fillText(` ${placar.pontuacao}`, canvas.width - 10, 35);
        },
        atualiza() {
            var intervaloDeFrames = 20;
            var passouOIntervalo = frames % intervaloDeFrames === 0;
            
            if(passouOIntervalo)
            placar.pontuacao = placar.pontuacao + 1;
        },
    }
    return placar;
}



//
// [Telas]
//
var globais = {};
let telaAtiva = {};
function mudaParaTela(novaTela) {
    telaAtiva = novaTela;

    if(telaAtiva.inicializa) {
      telaAtiva.inicializa();
    }
}

var Telas = {
    INICIO: {
        inicializa() {
            globais.FlappyBird = criaflappyBird();
            globais.chao = criaChao();
            globais.canos = criaCanos();
        },
        desenha() {
            planoDeFundo.desenha();
            globais.FlappyBird.desenha();
            globais.chao.desenha();
            mensageGetReady.desenha();
        },
        click() {
            mudaParaTela(Telas.JOGO);
        },
        atualiza() {
        globais.chao.atualiza();
        }
    }
};

Telas.JOGO =  {
    inicializa() {
        globais.placar = criaPlacar();
    },
    desenha() {
        planoDeFundo.desenha();
        globais.canos.desenha();
        globais.chao.desenha();
        globais.FlappyBird.desenha();
        globais.placar.desenha();

    },
    click() {
        globais.FlappyBird.pula();
    },
    atualiza() {
        globais.canos.atualiza();
        globais.chao.atualiza();
        globais.FlappyBird.atualiza();
        globais.placar.atualiza();
    }
};

Telas.GAME_OVER  = {
    desenha() {
        mensagemGameOver.desenha();
    },
    atualiza() {

    },
    click() {
        mudaParaTela(Telas.INICIO);
    }
}

function loop() {

    telaAtiva.desenha();
    telaAtiva.atualiza();

    frames = frames + 1;
    requestAnimationFrame(loop);
}

window.addEventListener('click', function() {
    if(telaAtiva.click){
        telaAtiva.click();
    }
});

mudaParaTela(Telas.INICIO);
loop();

