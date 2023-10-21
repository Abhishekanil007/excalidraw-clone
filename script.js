function clearPage(){
    //get content section by id
    let contentSection1 = document.getElementById('content-1');
    //clear content section
    contentSection1.innerHTML = '';

    //get content section by id
    let contentSection2 = document.getElementById('content-2');
    // clear content section
    contentSection2.innerHTML = '';

    //get content section by id
    let contentSection3 = document.getElementById('content-3');
    //clear content section
    contentSection3.innerHTML = '';

    //get content section by id
    let contentSection4 = document.getElementById('content-4');
    //clear content section
    contentSection4.innerHTML = '';

    //get content section by id
    let contentSection5 = document.getElementById('content-5');
    //clear content section
    contentSection5.innerHTML = '';

    //get content section by id
    let contentSection6 = document.getElementById('content-6');
    //clear content section
    contentSection6.innerHTML = '';

    // create a new canvas
    let canvas = document.createElement('canvas');
    canvas.width = 1500;
    canvas.height = 500;


    // add canvas to content section
    contentSection3.appendChild(canvas);

    // get 2D context  of the canvas for drawing
    let ctx = canvas.getContext('2d');
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';

    // drawing functions

    let isDrawing = false;
    let x = 0;
    let y = 0;

    canvas.addEventListener('mousedown', (e) => {
        x = e.offsetX;
        y = e.offsetY;
        isDrawing = true;
    })

    canvas.addEventListener('mousemove', (e) => {
        if(!isDrawing) return;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        x = e.offsetX;
        y = e.offsetY;
    })

    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    canvas.addEventListener('mouseleave', () => {
        isDrawing = false;
    });

    
}