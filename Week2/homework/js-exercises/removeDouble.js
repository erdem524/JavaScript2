const names = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
const unique = names.filter(function(elem, pos) {
    return names.indexOf(elem) == pos;
  }); 
console.log(unique);
