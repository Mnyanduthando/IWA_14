// script.js

   add = (a, b)  => {
	c = a + b
	return c
};

 multiply = (a, b) =>{
	c = a * b
	return c
};


  function internal () {
    
	 const added = add(this.internal.a, this.internal.b);
	 const multipying = multiply(this.internal.a, this.internal.b);
	  _this =  added  * multipying
	  console.log (_this);
	  
	
	  
	  

	
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
	calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()