console.log('Loaded!');
var element=document.getElementById("madi");
var marginLeft=0;
function moveright(){
    marginLeft=marginLeft+10;
    element.style.marginLeft=marginLeft+'px';
}
element.onclick=function(){
  var interval=setInterval(moveright,100);
};
var submit=document.getElementById("submitbt");
submit.onclick=function (){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function (){
        if(request.readystate==XMLHttpRequest.Done){
            if(request.status==200)
            {
                var names=request.responseText;
                var ages=request.responseText;
                names=JSON.parse(names);
                ages=JSON.parse(ages);
                var list='';
                for(var i=0;i<names.length;i++){
                    list +='<li>'+names[i]+'</li>';
                    list +='<li>'+ages[i]+'</li>';
                    
                    
                }
                var ul=documentgetElementById("namelist");
                ul.innerHTML=list;
            }
        }
    };
    var nameinput=document.getElementById("name");
    var name=nameinput.value;
    var ageinput=document.getElementById("age");
    var agee=ageinput.value;
    response.open('GET','http://rishikumarsiva.imad.hasura-app.io/rishi.html/submit?name='+name,true);
    response.open('GET','http://rishikumarsiva.imad.hasura-app.io/rishi.html/submit?age='+age,true);
    
;
};