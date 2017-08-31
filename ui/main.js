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
var submit=document.getElementById("submitbtn");
submit.onclick=function (){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function (){
        if(request.readystate==XMLHttpRequest.Done){
            if(request.status==304)
            {
                var names=request.responseText;
               
                names=JSON.parse(names);
                
                var list='';
                for(var i=0;i<names.length;i++){
                    list += '<li>' +names[i]+ '</li>';
                  
                    
                    
                }
                var ul=documentgetElementById("namelist");
                ul.innerHTML=list;
            }
        }
    };
    var nameinput=document.getElementById("name");
    var name=nameinput.value;
   
    request.open('GET','http://rishikumarsiva.imad.hasura-app.io/submit?name='+name,true);
    request.send(null);
    

};