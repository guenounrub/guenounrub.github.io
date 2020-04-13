$(function(){
    $("#masquer").click(function (){
        $("#resultats").css("display","none");
        $("#masquer").css("display","none");
        $("#afficher").css("display","block");
    });
    
    $("#afficher").click(function(){
        $("#resultats").css("display","block");
        $("#masquer").css("display","block");
        $("#afficher").css("display","none");
    })
    
    $("#resultats").css("display","none")
    
    $("#button_delivery").click(function () {
        if($("#resultats").css("display") != "none"){
            $("#resultats").css("display","none");
        }else{
            $("#resultats").css("display","block");
        }
    });
})