
//anything functin is calld or paramiter pass anather  function alow 

function greetingHendlet(book, tomi){
    book(tomi)
}

function pepole(tomi){
    console.log('Please call back me', tomi)
}
function pablick(tomi){
    console.log('Please dont call me', tomi)
}

greetingHendlet(pepole, 'Tom corus');
greetingHendlet(pepole, 'Tom solaiman');
greetingHendlet(pepole, 'Tom sardam');
greetingHendlet(pablick, 'shafiul ');
greetingHendlet(pablick, 'Chodon ali');
greetingHendlet(pablick, 'Badam ali');