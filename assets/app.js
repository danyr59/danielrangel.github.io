function menu() {
    const menu12 = document.getElementById('menu1-2');
    const hamboxi = document.getElementById('ham-box-i');
    const contenido = document.getElementById('principal');
    if(menu12.style.display ==='flex')
    {
        hamboxi.style.transition = '0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s';
        hamboxi.style.transform = 'rotate(0deg)';
        menu12.style.display = 'none';
        contenido.style.opacity= '1';
    }else{
        hamboxi.style.transition = '0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s';
        hamboxi.style.transform = 'rotate(225deg)';
        hamboxi.style.pageBreakBefore.transform = 'rotate(-90deg)'
        menu12.style.display = 'flex'; 
        contenido.style.opacity = '0.3';
    }
}

