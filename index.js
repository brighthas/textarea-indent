module.exports = indent;

function indent(tx){

	tx.addEventListener("keydown",function(event){


		if(event.keyCode === 13){
			event.preventDefault();
			insert("\r\n");
		}

		if(event.keyCode === 9){
			event.preventDefault();
			insert("    ");
		}
		
	});

  function insert(v){
			var txt = tx.value;
			var point = tx.selectionEnd;
			
			var s = "",e = "",c = "",hh=false;
			
			var sn = txt.lastIndexOf('\n',point-1);
			if(sn === -1){
				hh = true;
			}
			var x1 = txt.substring(sn,txt.length);
    

			var rxx = /^\s*/gi
			c = x1.match(rxx)[0];
			s = txt.substring(0,point);
			e = txt.substring(point,txt.length);
			
			if(hh){
				txt = s  + c + v + e;
			}else
				txt = s  +c+ e;
			
			tx.value = txt;
			if(hh){
				tx.setSelectionRange(point+c.length+1,point+c.length+1)
			}else{
				tx.setSelectionRange(point+c.length,point+c.length)
			}
	  		
  }
}
