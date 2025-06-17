let pdfDoc = null,
    pageNum = 1,
    canvas = document.getElementById("pdf-canvas"),
    ctx = canvas.getContext("2d");

pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";


pdfjsLib.getDocument("assets/DS 6030 - Project Part 2.pdf").promise.then(doc => {
    pdfDoc = doc;
    renderPage(pageNum);
});

function renderPage(num) {
    pdfDoc.getPage(num).then(page => {
        let viewport = page.getViewport({ scale: 1.5 });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        let renderContext = { canvasContext: ctx, viewport: viewport };
        page.render(renderContext);
    });
}

function nextPage() {
    if (pageNum < pdfDoc.numPages) {
        pageNum++;
        renderPage(pageNum);
    }
}

function prevPage() {
    if (pageNum > 1) {
        pageNum--;
        renderPage(pageNum);
    }
}

