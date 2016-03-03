/*
  index 
     $;
     .css;
     StringTokenizer;    
*/
var $=function(selector)
{
  if()
  {

  }
	var res=new Array();
	var flag=selector.charAt(0);
   if(flag=='#')
   {
     res.push(document.getElementById(selector.slice(1)));
   }else if(flag=='.')
   {
     var r=document.getElementsByClassName(selector.slice(1));
     for(var i=0;i<r.length;i++)
     {
       res.push(r[i]);
     }
     return res;
   }else
   {
       
   }
   return res;
}

Array.prototype.css=function(sty)
{ 
  this.forEach(function(item,index,array){item.setAttribute("style",sty);});  
}

function StringTokenizer(str,ch)
{
  	this.strlength=str.length;
    this.string=str;
    this.chr=ch;
    this.tokens=function(){
    	var t=new Array();
    	while(true)
    	{
          while(str.slice(0,ch.length)==ch)
    	  {
    		  str=str.slice(ch.length);
    	  }
    	  var pos=str.indexOf(ch);
    	  if(pos<=-1)
    	  	{
            if(str.length!=0){t.push(str);}
            return t;
          }
    	  else
          {
                t.push(str.slice(0,pos));              
    	          str=str.slice(pos+ch.length);                
    	    }   
    	}
    }();
   this.next=function(){return this.tokens.shift();};
   this.hasmore=function(){return this.tokens.length==0?false:true;};
}
function trim_cus(str)
{
    var i=0;
   while(i<str.length)
   {
     if(str[i]==','||str[i]=='>'||str[i]=='+'||str[i]=='~')
     {
         i--;
       while(i>0&&str[i]==' ')
       {
          str=str.substring(0,i)+str.substring(i+1);
          console.log(str);
          i--; 
       }
       i+=2;
       while(i<str.length&&str[i]==' ')
       {
          str=str.substring(0,i)+str.substring(i+1);
          console.log(str);        
       }
     }
     else
     {
      i++;
     }
   }
   return str;
}
function css_layer(selec)
{
   
}
function css_group()
{

}
function css_bro()
{

}
function css_kid()
{

}
