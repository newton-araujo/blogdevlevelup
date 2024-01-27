document.getElementById('btn1').addEventListener('mouseenter',function(){abrirMenu('menu1');});
document.getElementById('btn1').addEventListener('mouseleave', function(){ocultar('menu1')})

document.getElementById('btn2').addEventListener('mouseenter', function() {abrirMenu('menu2');});
document.getElementById('btn2').addEventListener('mouseleave', function() {ocultar('menu2');});


function abrirMenu(menuId) {
    var menu = document.getElementById(menuId);

    if(menu.classList.contains('ocultar-coluna')) {
        menu.classList.remove('ocultar-coluna')
    }

    if (menu.style.display === 'block') {
        menu.style.display = "none";
    } else {
        menu.style.display = 'block';
    }
}

function ocultar(menuId) {
        var menu = document.getElementById(menuId);
        menu.style.display = 'none';
    }