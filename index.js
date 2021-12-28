var profile={
firstname:"suriya",
lastname:"siva",
getFullName:function(surname,surname1){
    return`${this.firstname}_${this.lastname}_${surname}_${surname1}`
}
}
// call---------------- 
console.log(profile.getFullName.call(profile,"call","call"));
//call always execute directly by giving parameter it dont need function
//parameter should be in "string" 
// if "new" keyword is used it context will reset

// apply----------------
console.log(profile.getFullName.apply(profile,["apply","apply"]));
// parameter should be in "arrray"
// similar to call always execute directly

// bind-----------------
let bin=profile.getFullName.bind(profile)
console.log(bin("bind","bind"))
// for bind parameter should be in function
// 

