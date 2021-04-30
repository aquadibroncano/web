$(document).ready(function(){
    var classCycle=['img1','img2','img3','img4','img5'];

    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];
    
    $('body').addClass(classToAdd);

});