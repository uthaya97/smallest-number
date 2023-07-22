var arr=prompt("enter the length");
var a=[];
var result=[];
var temp=0;
var n=prompt("find the smallest number");

for(let i=0;i<arr;i++){
	 a[i]=prompt("enter the"+(i+1)+"number");
}
document.write("Your number"+" "+a+"<br>");
for(let i=0;i<arr;i++)
{
	for(j=i+1;j<arr;j++)
	{
		if(a[i]>a[j])
		{
			temp=a[i];
			a[i]=a[j];
			a[j]=temp;
		}
	}
	result.push(a[i]);
}
document.write("smallest number"+" "+result[n-1]);