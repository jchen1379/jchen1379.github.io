const john = {
 	firstName: 'John',
 	lastName: 'Willams',
 	birthYear: 1996,
 	job: 'student',
 	friends: ['Mike', 'Jack', 'Peter'],
 	calAge: function() {
 		this.age = 2021 - this.birthYear;
 		return this.age
 	},
 	getFriendSummary: function() {
 		return `${this.firstName + ' ' + this.lastName} has ${this.friends.length} friends, and his best friends are called ${this.friends[0]}, ${this.friends[1]}, ${this.friends[2]}`;
 	},
	getLicenseSummary: function(){
		return `${this.firstName + ' ' + this.lastName} is a ${this.calAge()} years old, and he has ${this.age >= 18 ? 'a' : 'no'} driver license.`;
	}
 }

console.log(john.getFriendSummary());
console.log(john.getLicenseSummary());


function openModal(){
	let modalWindow = document.getElementById("modalWindow");
	modalWindow.style.display = "flex";
}

function closeModal(){
	let modalWindow = document.getElementById("modalWindow");
	modalWindow.style.display = "none";
}