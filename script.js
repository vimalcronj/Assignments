/*var hrauth=[
				{username:"vimal",password:"negi"},
				{username:"shubham",password:"sharma"},
				{username:"manish",password:"srivastav"},
				{username:"abc",password:"xyz"}
			];*/

/*var hrauth=[
			{username:"vimal",password:"negi"},
			{username:"shubham",password:"sharma"},
			{username:"manish",password:"srivastav"},
			{username:"abc",password:"xyz"}
			];
localStorage.setItem("hrauth", JSON.stringify(hrauth));*/

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
		    
		    //document.write("Please fill all blocks");
		}
	}
	
     // [{name:"vimal negi",pno:"8801986312"},{},{}]
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

