var st;
var st1;
document.getElementById('bt1').addEventListener('click', lloop);
document.getElementById('bt3').addEventListener('click', rloop);
//to pause when || is clicked
document.getElementById('bt2').addEventListener('click',function(){
	clearTimeout(st);
	clearTimeout(st1);
});

function lloop()
{
	clearTimeout(st1);
	var linp= document.querySelector('#tb1').value;
	var rinp= document.querySelector('#tb2').value;
	rinp+= linp[0];
	document.querySelector('#tb2').value= rinp;
	linp= linp.slice(1);	
	document.querySelector('#tb1').value= linp;
	if (linp.length!=0){
		st= setTimeout(lloop,1000);
	}	
}

function rloop()
{
	clearTimeout(st);
	var linp= document.querySelector('#tb1').value;
	var rinp= document.querySelector('#tb2').value;
	linp = rinp[rinp.length-1]+linp;
	document.querySelector('#tb1').value= linp;
	rinp= rinp.slice(0,rinp.length-1);	
	document.querySelector('#tb2').value= rinp;
	if (rinp.length!=0){
		st1= setTimeout(rloop,1000);
	}
}

