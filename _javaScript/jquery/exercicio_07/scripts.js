$(function(){
    const ev1 = $('.ev1');
    const ev2 = $('.ev2');
    const ev3 = $('.ev3');
    const ev4 = $('.ev4');
    const ev5 = $('.ev5');
    const ev6 = $('.ev6');
    const ev7 = $('.ev7');
    const dv = $('.ex1');
    var acc = 0;

    ev1.click(function() {
        $(this).css("background","#ccc");
        dv.text("Você Clicou!")
    });

    ev2.dblclick(function() {
        $(this).css("background","#ccc");
        dv.text("Você deu 2 cliques!")
    });

    ev3.focusin(function() {
        $(this).css("background","#ccc");
        dv.text("Você deu Foco!")
    }).focusout(function() {
        $(this).css("background","#000");
        dv.text("Você deu tirou o foco!")
    });

    ev4.hover(function() {
        $(this).css("background","#ccc");
        dv.text("Você passou o mouse!")
    });
    
    ev5.mousedown(function() {
        $(this).css("background","#ccc");
        dv.text("Você deu Foco!")
    }).mouseup(function() {
        $(this).css("background","#000");
        dv.text("Você soltou o Botão do Mouse!")
    });

    ev6.mouseenter(function () {
        ++acc;
        dv.text(`Entradas do Mouse: ${acc}`)
    })
    //Podem ser utilzado de forma similar ao mousenter o mouseout, mouseover, mouserleave e mousemove
    ev7.mousemove(function (move) {
        let localx = move.pageX;
        let localy = move.pageY;
        dv.text(`Movimento X: ${localx}\nMovimento Y: ${localy}`)
    })
});