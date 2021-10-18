$(function(){

const Termekek=[];
adatokBeolvas("jsontermekek.json",Termekek,megjelenit);



function megjelenit(tomb){
    
    let adat="<table><tr id='fejlec'><th>Terméknév</th><th>Leírás</th><th>Készlet</th><th>Ár</th>";
    tomb.forEach(function(value,index){
        adat+="<tr id='"+ index +"'>";
        for(let item in value){
            adat+="<td>"+value[item]+"</td>";
        }
        
        adat+="<td><button class='mod' id='"+ index +"'>Módosít</button>";
        adat+="<td><button class='tor' id='"+ index +"'>Töröl</button>";
        adat+="</tr>";
        

        
    }
    
    

    );

    $("#tablazat").html(adat);
    
    formbaTolt();
    Torol();

    console.log(Termekek);
}

function formbaTolt(){
    $(".mod").on({'click':function()
    {
        var index=$(this).attr("id");
        
        $('#termeknev').val(Termekek[index].Terméknév);
        $('#leiras').val(Termekek[index].Leírás);
        $('#keszlet').val(Termekek[index].Készlet);
        $('#ar').val(Termekek[index].Ár);
        

       
    
    }
}

    
        
    );
    
    
    
}


    
    





function Torol(){
    $(".tor").on({'click':function()
    {
        var index=$(this).attr("id");
        
        $("#"+index).remove();
        
        Termekek.length=0;
        console.log(Termekek);

        
    }


}

    
        
    );
    

}



function adatokBeolvas(fajlnev, tomb,myCallBack){
    $.ajax({

        url:fajlnev,
        success: function(result){
            result.forEach((value) => {
                tomb.push(value);
            });
            myCallBack(tomb);
            
        }


        


    });
}


}
);
