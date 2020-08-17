const footerTop = document.querySelector('footer .top');
const footerBottom = document.querySelector ('footer .bottom');
const card = document.querySelector('#content .recentLogin .cards .card');
const tooltip = document.querySelector('#content .recentLogin .cards #tooltip');

const linksList = [
    "Lorem", 
    "ipsum",
    "dolor",
    "sit", 
    "amet", 
    "consectetur",
    "adipiscing",
    "elit",
    "Phasellus",
    "vitae",
    "egestas",
    "urna", 
    "Morbi", 
    "mercy",
    "orci",
    "Hola", 
    "Vestibulum",
    "consectetur",
    "hello",
    "libero",
    "Olá",
    "feugiat",
    "populis",
    "seed",
    "franjolla",
    "leo",
    " nec",
    "elementum",
    "augue",
    "Fusce",
    "condimentum",
    "dui",
    "Populis",
    "tempor", 
    "libero", 
    "in",
    "porta",
    "out",
    "nolan", 
    "vitae",
    "facilisis",
]

function links(){
    
    var count = 0;

    for(;count <31; count++){
        var tagLink = document.createElement('a');
        tagLink.setAttribute('href', '#');
        var textlink = document.createTextNode(linksList[count]);
        tagLink.appendChild(textlink);
        footerBottom.appendChild(tagLink);
    }
    for(; count<41; count++){
        var tagLink = document.createElement('a');
        tagLink.setAttribute('href', '#');
        var textlink = document.createTextNode(linksList[count]);
        tagLink.appendChild(textlink);
        footerTop.appendChild(tagLink);
    }
}


links(); 