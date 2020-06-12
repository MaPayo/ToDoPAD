      import { html, render, Component } from 'https://unpkg.com/htm/preact/standalone.module.js' //Boton de añadir 
//Clase que crea nuevas tareas
class FormAdd extends Component {
	constructor(props){
		super(props);
	}
	state = {text:''};
	setText = e => {
		e.stopPropagation()
		this.setState({text: e.target.value})
		e.preventDefault();
	}

	addTodo= (e) =>{
		if(this.state.text!== ''){
		e.preventDefault();
		e.stopPropagation();
		localStorage.setItem(this.state.text+"4", this.state.text);
		this.setState({text: ''});
		document.getElementById("formadd").style.display = "none";
		}
	}


	hiddenform = (e) =>{
		e.preventDefault();
		e.stopPropagation();
		document.getElementById("formadd").style.display = "none";
		this.setState({text: ''});
	}

  render() {
  	const formulario =html`<form id="formadd" onSubmit=${this.addTodo.bind(this)} action='javascript:'>
  	<input value=${this.state.text} onchange=${this.setText.bind(this)} />
  	<button type='submit'>Add</button>
  	<button onclick=${this.hiddenform.bind(this)}>Cancel</button></form>
  	<${ListaTareas}/>`;
    return formulario;
  }
}

class App extends Component{
	constructor(props){
		super(props);
	} 
	render(){ 
		return html`<${FormAdd}/>`;}
}



class FormEditar extends Component{
	constructor(props){
		super(props);
		this.keys = props.keys;
		console.log("estoy en form editar",this.keys);

	}
	state = {text:''};
	setText = e => {
		e.stopPropagation()
		this.setState({text: e.target.value})
		e.preventDefault();
	}
	editTodo=(e)=>{
		console.log(localStorage.length);
		localStorage.setItem(localStorage.key(this.keys), this.state.text);
		location.reload();
	}

	deleteTodo = (e)=>{
		e.preventDefault();
		e.stopPropagation();
		localStorage.removeItem(localStorage.key(this.keys));
		location.reload();
	}
	hiddenform = (e) =>{
		e.preventDefault();
		e.stopPropagation();
		document.getElementById(localStorage.key(this.keys)+this.keys).style.display = "none";
	}

	render() {
    return html`<form onSubmit=${this.editTodo} action='javascript:'><input value=${localStorage.getItem(localStorage.key(this.keys))} onChange=${this.setText} /><button type='submit'>Save</button><button onclick=${this.deleteTodo}>Delete</button><button onclick=${this.hiddenform}>Cancel</button></form>  
    	`;
  }
}

class Tarea extends Component{
	constructor(props){
		super(props);
		this.keys = props.keys;

	}
	showform = (e)=>{
		console.log("enseño el otro menu");
		document.getElementById(localStorage.key(this.keys)+this.keys).style.display = "block";
	}
	render(){
	return html `<div class="tarea">
	<button onclick="${this.showform.bind(this)}">${localStorage.getItem(localStorage.key(this.keys))}</button>
	<div id="${localStorage.key(this.keys)+this.keys}" style="display:none">
	<${FormEditar} keys=${this.keys}/>
	</div>
	</div>`;
}


}
function UserGreeting (props) {
	const todos = localStorage;
	const l = [];
	for (var i = 0; i < todos.length; i++) {
		l.push(html`<${Tarea} keys=${i}/>`);
	}
	return l;
	/*todos.forEach(function(elemento, indice, array){
	console.log("<button>"+elemento+"</button>", indice);
	l.push(html`<${Tarea} elemento=${elemento}/>`);
	})		
	console.log(l);
	return l;*/
}

function Vacio(props) {
  return html`<h1>You have nothing to do. Good job! 👍</h1>`;
}


function ListaTareas(props){
	const l = localStorage.length;
	if(l !== 0){
		return html`<${UserGreeting}/>`
	}else{
		return html`<${Vacio}/>`
	}

}

render(html`<${App}/>` , document.getElementById("Opciones"));
