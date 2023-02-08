let count1 = false;

// returns a promise
let countValue1 = new Promise(function (resolve, reject) { 
	if (count1) { 
    	resolve("Promise resolve.");
	} else { 
    	reject("Promise reject");
	}
});
// executes when promise is resolved successfully
countValue1
	.then(function successValue(result) { 
		console.log(result); 
	})
	
	.then(function successValue1() { 
		console.log("You can call multiple functions this way."); 
	})
  // executes if there is an error
	.catch(
		function errorValue(result) { 
			console.log(result); 
		}
	);