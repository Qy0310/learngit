function testCode(n){
	var arr=[];
	for(var i = 0; i < n;i++){
		var tmp = parseInt(Math.random() * 123);
		if(tmp >= 0 && tmp <= 9){
			arr.push(tmp);
		}else if(tmp >= 65 && tmp <= 99){
			var chars=String.fromCharCode(tmp);
			arr.push(chars);
		}else if(tmp>=97 && tmp<=122){
			var chars=String.fromCharCode(tmp);
			arr.push(chars);
		}else{
			i--;
		}
	}
	return arr.join("");
}