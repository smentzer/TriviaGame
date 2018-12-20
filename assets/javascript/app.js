// console.log("is this thing on?") (it was in fact on)




   

$(document).ready(function(){
    $("input[type='button']").click(function(){
        var radioValue = $("input[name='group 1']:checked").val();
        if(radioValue === "correct"){
          console.log("yes")
        }
    });
    
});