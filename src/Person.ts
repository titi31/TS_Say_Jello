import {PersonI} from "./Interfaces/index";
export  class  Person implements PersonI{
	private _first_name: string;
	private _last_name: string;
	private _age: number;
	
	constructor(firstname: string,lastname: string, age: number) {
		this._first_name = firstname;
		this._last_name = lastname;
		this._age = age;
	}
	
	get first_name(): string {
		return this._first_name;
	}
	set first_name(newfirstname: string) {
		this._first_name=newfirstname;
	}
	get last_name(): string {
		return this._last_name;
	}
	set last_name(newlastname: string) {
		this._last_name=newlastname;
	}
	get age(): number {
		return this._age;
	}
	set age(newage: number) {
		this._age= newage;
	}
}