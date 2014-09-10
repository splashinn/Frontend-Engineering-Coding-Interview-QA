// Write a function to reverse a string:

// Version 1
String.prototype.reverse = function() {
	var s = "";
	for (var i = this.length - 1; i >= 0; i--) {
		s += this.charAt(i);
	}
	return s;
};

// Version 2
String.prototype.reverse = function () {
	return this.split("").reverse().join("");
}

// Write a function to compute Nth fibonacci number
function fib (len) {
	if (len < 3)
		return 1;
	var s1 - 1, s2 = 1, temp = 1;
	while (len >= 3) {
		temp = s1 + s2;
		s1 = s2;
		s2 = temp;
		len -= 1;
	}
	return s2;
}

// Print out multiplication table up to 12x12
(function (dim) {
	var row = [];
	for (var i = 1; i <= dim; i++) {
		row[i] = [];
		for (var j = 1; i <= dim; i++) {
			row[i][j] = i * j;
		};
		console.log(i + ":\t" + row[i].join("\t"));
	};
})(12);

// Write a function that sums up integers from a text file, one int per line
// Write a function to print the odd numbers from 1 to 99
Array.prototype.each = function (fn) {
	for (var i = 0; i < this.length; i++) {
		fn(this[i]);
	};
};

(function (len) {
	var arr = [];
	for (var i = 1; i <= len; i++) {
		arr.push(i);
	};
	arr.each(function (item) {
		if (item % 2 != 0)
			console.log(item);
	});
})(99);

// Find the largest int value in an int array
(function () {
	var arr = [];
	for (var i = 0; i < 10; i++) {
		arr.push(Math.floor(Math.random() * 100));
	};
	console.log(arr);
	return Math.max.apply(Math, arr);
})()

// Format an RGB value (three 1-byte numbers) as a 6-digit hexadecimal string
(function(r,g,b){
	return d2h(r) +"|"+ d2h(g) +"|"+ d2h(b);
})(12,123,41);

function d2h(d) {
	var h = ""
		, t = d;
	while(t >= 16) {
		h = d2h1(t % 16) +""+ h;
		t = Math.floor(t / 16);
	}
	return d2h1(t) +""+ h;
}

function d2h1(d) {
	if (d < 10) 				return d;
	else if (d == 10) 	return 'A';
	else if (d == 11) 	return 'B';
	else if (d == 12) 	return 'C';
	else if (d == 13) 	return 'D';
	else if (d == 14) 	return 'E';
	else if (d == 15) 	return 'F';
}
