
import {Person} from "./Person";
let sect=document.getElementById("app");
function jello(person: Person){
	// template string & ternaire
	/*if(person.age>=18){
	sect.innerHTML+="Jello Bello "+person.first_name+" "+person.last_name+" à "+person.age+" ans. "+person.first_name+" is an adult.<br>";
	}else{
		sect.innerHTML+="Jello Bello "+person.first_name+" "+person.last_name+" à "+person.age+" ans. <br>";


	}*/
	return sect.innerHTML+=`Jello Bello ${person.first_name} ${person.last_name} à ${person.age} ans. ${person.age >= 18 ? 'is an adult' : 'is not an adult'} <br>`
}

const form = document.querySelector('form');
const sub=document.getElementById("sub");

sub.addEventListener("click",function (){
	//htm=new Person(form.getAttribute("firstname"),form.getAttribute("name"),parseInt(form.getAttribute("age")));
	//jello(htm);
	jello(new Person(form.firstname.value,form.name1.value,parseInt(form.age.value)))
	//console.log(htm);
});

form.addEventListener('submit', () => console.log("hello"))



