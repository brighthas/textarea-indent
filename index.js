var jquery = require("jquery");
module.exports = indent;

function indent(ta){

    var tx = jquery(ta);

	tx.keydown(function(event){

		if(event.keyCode === 13){
		
			event.preventDefault();
			var txt = tx[0].value;
			var point = tx[0].selectionEnd;
			
			var s = "",e = "",c = "",hh=false;
			
			var sn = txt.lastIndexOf('\n',point-1);
			if(sn === -1){
				hh = true;
			}
			var x1 = txt.substring(sn,txt.length);
    
			//tx2[0].value = x1;
			var rxx = /^\s*/gi
			c = x1.match(rxx)[0];
			//alert(c.length)
			s = txt.substring(0,point);
			e = txt.substring(point,txt.length);
			
			if(hh){
				txt = s  +'\n'+c + e;
			}else
			txt = s  +c + e;
			
			tx[0].value = txt;
			if(hh){
			tx[0].setSelectionRange(point+c.length+1,point+c.length+1)
			}else
			tx[0].setSelectionRange(point+c.length,point+c.length)
			
		}		
	})
 }