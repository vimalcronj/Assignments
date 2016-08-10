/*var hrauth=[
				{username:"vimal",password:"negi"},
				{username:"shubham",password:"sharma"},
				{username:"manish",password:"srivastav"},
				{username:"abc",password:"xyz"}
			];*/

var hrauth=[
			{username:"vimal",password:"negi"},
			{username:"shubham",password:"sharma"},
			{username:"manish",password:"srivastav"},
			{username:"abc",password:"xyz"}
			];
var empauth=[];
localStorage.setItem("hrauth", JSON.stringify(hrauth));
function hello()
{
	alert("hello");

}

function validate()
{
	
	//hello();
	var data=document.getElementsByTagName("input");
	//alert(data.length);
	for(i=0;i<data.length-1;i++)
	{
		if(data[i].value=="")
		{
			//hello();
			var p=document.createElement("p");
			var text=document.createTextNode("Please fill all blocks");
			p.appendChild(text);
			document.body.appendChild(p);
			return false;
		}
	}
	
     var un=document.getElementById("username").value;
     var pwd=document.getElementById("password").value;
    for(i=0;i<hrauth.length;i++)
    {
    	if(hrauth[i].username==un)
    	{
    		if(hrauth[i].password!=pwd)
    		{
    			p=document.createElement("p");
				text=document.createTextNode("username or password incorrect !!!");
				p.appendChild(text);
				document.body.appendChild(p);
				return false;
    		}
    		else{
    			return true;
    		}
    	}
    	p=document.createElement("p");
		text=document.createTextNode("username or password incorrect !!!");
		p.appendChild(text);
		document.body.appendChild(p);
		return false;
    }         
}

function registernew()
{
	var rname=document.getElementById("rname").value;
	var rusername=document.getElementById("rusername").value;
	var rdoj=document.getElementById("rdoj").value;
	empauth[empauth.length]={name:rname,username:rusername,doj:rdoj};
	//alert(empauth[empauth.length-1].name);
	/*var len=document.getElementById("listcurrent").childNodes.length;
	var table=document.getElementById("listcurrent");
	var tr=document.createElement("tr");
	var td1=document.createElement("td");
	var td2=document.createElement("td");*/
	

}