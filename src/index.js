var powerOfFactor = 1;
module.exports = function getZerosCount(number, base) {
  	let factor = getLastPrime(base);
  	let power = factor;
  	let count = 0;
  	while(number/power >= 1) {
    	count += Math.trunc(number/power);
    	power *= factor;
  	}
  	let result = Math.trunc(count/powerOfFactor);
  	powerOfFactor = 1;
  	return result;
}

function getLastPrime(integer) {
 	let primes = [];
	for(let i = 2; i <= integer; i++) {
		if(integer%i == 0) {
        	integer = integer/i;
        	primes.push(i);
    	}
  	}
  	if(integer == primes[primes.length - 1]) {
    	powerOfFactor++;
  	}
  	return primes.pop();
}