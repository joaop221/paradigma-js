const escopoJs = function() {
    console.group('Escopo');
    console.log(this);
    console.groupEnd('Escopo');
}

escopoJs();