$(document).ready(function(){
    var classCycle=['img1','img2','img3','img4','img5','img6','img7','img7','img8','img9','img10','img11','img12','img13','img14','img16','img17','img18','img19','img20','img21','img22'];

    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];
    
    $('body').addClass(classToAdd);

});