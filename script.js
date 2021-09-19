replaceText(document.body)
var images = document.getElementsByTagName('img');
var l = images.length;
for (var i = 0; i < l; i++) {
    images[0].parentNode.removeChild(images[0]);
}

function replaceText(element){
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)    
    } else if (element.nodeType === Text.TEXT_NODE) {
        
        if (element.textContent.match(/Spider-Man/gi)) {
            element.parentElement.style.color = 'black'
            element.parentElement.style.backgroundColor = 'black'
        }
        element.textContent = element.textContent.replace(/Spider-Man/gi, 
            '     ')       
    
        if (element.textContent.match(/Spidey/gi)) {
            element.parentElement.style.color = 'black'
            element.parentElement.style.backgroundColor = 'black'
        }
        element.textContent = element.textContent.replace(/Spidey/gi, 
            '     ')       
       
        if (element.textContent.match(/Peter/gi)) {
            element.parentElement.style.color = 'black'
            element.parentElement.style.backgroundColor = 'black'
        }
    element.textContent = element.textContent.replace(/Peter/gi, 
        '     ')       
       
        if (element.textContent.match(/Petey/gi)) {
            element.parentElement.style.color = 'black'
            element.parentElement.style.backgroundColor = 'black'
        }
    element.textContent = element.textContent.replace(/Petey/gi, 
    '     ')       

}
}