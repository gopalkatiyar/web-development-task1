console.log('gopal')
// let rectangle={
// 	length:1,
// 	bredth:3,
// 	draw:function(){
// console.log('drawing rectangle')
// 	}
// }
//factory function
function createRectangle(len,bdh){
	let rectangle={
		length:len,
		bredth:bdh,
		draw:function(){
			console.log('drawing rectangle');
		}
	};
	return rectangle;
}
let rect1=createRectangle(3,4);
let rect2=createRectangle(5,9);
//constructor function

function Rectangle(len,bdh){
	this.length=len,
	this.bredth=bdh
	this.draw= function(){
		console.log('drawing rectangle2')
	};

}
 //function envoke
 let rect3=new Rectangle(4,6);
 let rect4=new Rectangle(6,3);

 //for iterate in function
 for(let i in rect1){
	console.log(i,rect1[i])
 }
 