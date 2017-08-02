	
	//There are three ways to delete the repeating item in Array.
			
	//Method 1: use a blank array save the result, search the arr[i] in result array, if find nothing, push it in.
	function noRepeat0( arr ){
		var res = [];
		for (var i = 0; i < arr.length; i++) {
			if( inArray( arr[i],res ) == -1 ){
				res.push( arr[i] );
			}
		}
		return res;
	}
	function inArray( v,a ){//check a value in Array,return the index.If no such value ,return -1
		for (var i = 0; i < a.length; i++) {
			if( a[i] === v ){
				return i;
			}
		}
		return -1;
	}
	//console.log( noRepeat0( arr0 ) );			
	
	//Method 2: sort the array and compare the index i with index i+1 , if equal delete the i+1
	function noRepeat1( arr ){
		arr.sort(function(a,b){
			return a - b;
		})
		for (var i = 0; i < arr.length-1; i++) {
			if( arr[i] == arr[i+1] ){
				arr.splice(i+1,1);
				i--;
			}
		}
		return arr;
	}
	//console.log( noRepeat1(arr0) );
	
	//Method 3: use the attribute of object,if obj donesn't have the attribute called arr[i],we will
	//add this attr and give it a value 1. If we find the attribute , it means repeating, number+1
	function noRepeat2( arr ){
		var obj = {};
		var res = [];
		for (var i = 0; i < arr.length; i++) {
			if( !obj[arr[i]] ){
				obj[arr[i]] = 1;
			}else {
				obj[arr[i]]++;
			}
		}
		console.log(obj);
		for( var attr in obj ){
			res.push( attr );
		}
		return res;
	}
	//console.log( noRepeat2(arr0) );