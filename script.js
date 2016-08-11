/*var hrauth=[
				{username:"vimal",password:"negi"},
				{username:"shubham",password:"sharma"},
				{username:"manish",password:"srivastav"},
				{username:"abc",password:"xyz"}
			];*/



var hrauth=[];
if(localStorage.getItem("hrauth")!=null)
{
	hrauth=JSON.parse(localStorage.getItem("hrauth"));
}
else{var hrauth=[
			{username:"vimal",password:"negi"},
			{username:"shubham",password:"sharma"},
			{username:"manish",password:"srivastav"},
			{username:"abc",password:"xyz"}
			];}



var empauth=[];
if(localStorage.getItem("empauth")!=null){
		empauth=JSON.parse(localStorage.getItem("empauth"));
	}
localStorage.setItem("hrauth", JSON.stringify(hrauth));
function hello()
{
	alert("hello");

}

function validate()
{

//EMPTY CHECKING OF TEXT BOXES
	var data=document.getElementsByClassName("login");
	for(i=0;i<data.length-1;i++)
	{
		if(data[i].value=="")
		{
			document.getElementById("error").innerHTML="Please fill all blocks";
			return false;
		}
	}
	
    var un=document.getElementById("username").value;
    var pwd=document.getElementById("password").value;
    document.getElementById("username").value="";
    document.getElementById("password").value="";
    
//MATCH WITH HR DATABASE
    for(i=0;i<hrauth.length;i++)
    {
    	if(hrauth[i].username==un)
    	{
    		if(hrauth[i].password!=pwd)
    		{
				document.getElementById("error").innerHTML="username or password incorrect !!!";
				return false;
    		}
    		else
    		{
	    		document.getElementById("hr").innerHTML=un;
	    		document.getElementById("login-form").style.display="none";
	    		document.getElementById("welcome-hr").style.display="block";
	    		document.getElementById("sidebar").style.display="block";
	    		document.getElementById("listEmp").style.display="block";
	    		document.getElementById("registernew").style.display="block";
	    		tablelength=document.getElementById("listcurrent").childNodes.length - 2;
	    		var table=document.getElementById("listcurrent");
	    		table.innerHTML="";
//CREATE LIST
	    		for(var a=0;a<empauth.length ;a++)
	    		{
	    				
	    				
	    			var tr=document.createElement("tr");
					var td1=document.createElement("td");
					var td2=document.createElement("td");
					var td3=document.createElement("td");
					var td4=document.createElement("td");
					
					var d1=document.createTextNode(empauth[a].name);
					
					var d2=document.createTextNode(empauth[a].username);
						
					var d3=document.createTextNode(empauth[a].doj);
						
					var d4=document.createTextNode(empauth[a].remark);
						
					td1.appendChild(d1);
					td2.appendChild(d2);
					td3.appendChild(d3);
					td4.appendChild(d4);
					tr.appendChild(td1);tr.appendChild(td2);tr.appendChild(td3);tr.appendChild(td4);
					
					table.appendChild(tr);
					

	    		}
	    		return false;
	    		//document.getElementById("error").innerHTML="username or password incorrect !!!";
	       		//return false;
    		}
    	}
    	/*if(i==hrauth.length-1){
	    	document.getElementById("error").innerHTML="username or password incorrect !!!";
			return false;*/
	}
//MATCH WITH EMPLOYEE DATABASE
	for(var i=0;i<empauth.length;i++)
	{
    	if(un==empauth[i].username)
    	{
    		if(pwd!=empauth[i].password)
    		{
    			document.getElementById("error").innerHTML="username or password incorrect !!!";
    			return false;
    		}
    		//console.log("hello");
    		document.getElementById("welcome-hr").style.display="block";
    		showprofile(un);
    		return false;

    	}

    }

}
    

function registernew()
{
	//hello();
	//var stat=true;
	var rname=document.getElementById("rname").value;
	var rusername=document.getElementById("rusername").value;
	var rdoj=document.getElementById("rdoj").value;
	var rremark=document.getElementById("rremark").value;
	var rpassword=document.getElementById("rpassword").value;
	document.getElementById("rname").value="";
	document.getElementById("rusername").value="";
	document.getElementById("rdoj").value="";
	document.getElementById("rremark").value="";
	for(var i=0;i<empauth.length;i++)
	{	//alert(rusername+ " "+empauth);
		if(rusername==empauth[i].username)
		{
			document.getElementById("rnerror").innerHTML="username already exist";
			//status=false;
			return false;
		}

	}
	for(var i=0;i<hrauth.length;i++)
	{
		if(rusername==hrauth[i].username)
		{
			document.getElementById("rnerror").innerHTML="username already exist";
			//status=false;
			return false;
		}
	}
	if(rname!="" && rusername!="" && rdoj!="" && rremark!="")
	{
		empauth[empauth.length]={name:rname,username:rusername,doj:rdoj,remark:rremark,password:rpassword};
		localStorage.setItem("empauth",JSON.stringify(empauth));
		//displayUser();
		
		var tr=document.createElement("tr");
		var td1=document.createElement("td");
		var td2=document.createElement("td");
		var td3=document.createElement("td");
		//var td4=document.createElement("td");
		var d1=document.createTextNode(rname);
		var d2=document.createTextNode(rusername);
		var d3=document.createTextNode(rdoj);
		//var d4=document.createTextNode(rremark);
		td1.appendChild(d1);
		td2.appendChild(d2);
		td3.appendChild(d3);
		//td4.appendChild(d4);
		tr.appendChild(td1);tr.appendChild(td2);tr.appendChild(td3);//tr.appendChild(td4);
		var table=document.getElementById("listcurrent");
		table.appendChild(tr);
		document.getElementById("rname").value="";
		document.getElementById("rusername").value="";
		document.getElementById("rdoj").value="";
		document.getElementById("rremark").value="";
	}
	else
	{
		document.getElementById("rnerror").innerHTML="Please fill all blanks"
	}

}



function checkempty(content)
{
	if(document.getElementsByClassName(content)[0].value=="")
	{	
		document.getElementsByClassName(content)[1].innerHTML="Plese fill it first";
	}
	else
	{
		document.getElementsByClassName(content)[1].innerHTML="";
	}
}
function register()
{
	//document.getElementById("listEmp").style.display="none";
	document.getElementById("registernew").style.display="block";
	document.getElementById("remark").style.display="none";
}

function listEmp()
{
	document.getElementById("registernew").style.display="none";
	document.getElementById("listEmp").style.display="block";
	document.getElementById("remark").style.display="none";
}


function submitRemark()
{	
	var name=document.getElementById("rkname").value;
	for(var i=0;i<empauth.length;i++)
	{	
		if(name==empauth[i].username)
		{
			empauth[i].remark=document.getElementById("rkremark").value;
			localStorage.setItem('empauth',JSON.stringify(empauth));	
		}
		//alert(i);
		if(i==empauth.length-1)
		{
			document.getElementsByClassName('rkname')[1].innerHTML="username not registered";
		}
	}

}

function remark()
{
	//hello();
	document.getElementById("registernew").style.display="none";
	document.getElementById("listEmp").style.display="none";
	document.getElementById("remark").style.display="block";
	//document.getElementById("registernew").style.display="block";
	//hello();
	return false;
}

function signout()
{
	document.getElementById("welcome-hr").style.display="none";
	document.getElementById("sidebar").style.display="none";
	document.getElementById("listEmp").style.display="none";
	document.getElementById("registernew").style.display="none";
	document.getElementById("userprofile").style.display="none";
	document.getElementById("remark").style.display="none";
	document.getElementById("login-form").style.display="block";

}

function showprofile(un)
{
	//var table=document.getElementById("userprofile");

	for(var i=0;i<empauth.length;i++)
	{
		if(empauth[i].username==un)
		{
			rname=empauth[i].name;
			rusername=empauth[i].username;
			rdoj=empauth[i].doj;
			rremark=empauth[i].remark;
		}

	}
	//console.log(un);
	var tr=document.createElement("tr");
	var td1=document.createElement("td");
	var td2=document.createElement("td");
	var td3=document.createElement("td");
	var td4=document.createElement("td");
	var d1=document.createTextNode(rname+"------");
	var d2=document.createTextNode(rusername+"------");
	var d3=document.createTextNode(rdoj+"------");
	var d4=document.createTextNode(rremark);
	td1.appendChild(d1);
	td2.appendChild(d2);
	td3.appendChild(d3);
	td4.appendChild(d4);
	tr.appendChild(td1);tr.appendChild(td2);tr.appendChild(td3);tr.appendChild(td4);
	var table=document.getElementById("userprofile");
	table.innerHTML="";
	table.appendChild(tr);
	document.getElementById("login-form").style.display="none";
	document.getElementById("userprofile").style.display="block";
	//hello();


}





/*
function displayUser()
{
	var table=document.getElementById("listcurrent")
	for(var i=0;i<empauth.length;i++)
	{
		if(i<table.childNodes.length-2)
		{

			table.childNodes[i+2]

			
		}
*/

//DISPLAY DYNAMICALLY
		/*var tr=document.createElement("tr");
		var td1=document.createElement("td");
		var td2=document.createElement("td");
		var td3=document.createElement("td");
		var td4=document.createElement("td");
		var d1=document.createTextNode(empauth[i].name);
		var d2=document.createTextNode(empauth[i].username);
		var d3=document.createTextNode(empauth[i].doj);
		var d4=document.createTextNode(empauth[i].remark);
		td1.appendChild(d1);
		td2.appendChild(d2);
		td3.appendChild(d3);
		td4.appendChild(d4);
		tr.appendChild(td1);tr.appendChild(td2);tr.appendChild(td3);tr.appendChild(td4);
		var table=document.getElementById("listcurrent");
		table.appendChild(tr);

	}


}*/

