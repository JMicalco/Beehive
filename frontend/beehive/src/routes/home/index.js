import { h } from 'preact';
import style from './style.css';


const Home = () => (
	<div class={style.home}>
		<div class={style.img}>
			<img src="../assets/icons/beehive-logo1.png" alt="Logo"/>
		</div>
		<form action="">
			<h1>¿Cuantas Personas hay con usted?</h1>
			<input type="text" />
			<h1>¿CuantOS Menores de edad?</h1>
			<input type="text" />
			<h1>¿Cuantos heridos?</h1>
			<input type="text" />
			<h1>¿Necesitas agua?</h1>
			<input type="text" />
			<h1>¿Necesitas comida?</h1>
			<input type="text" />
			<h1>¿Necesitas medicamentos?</h1>
			<input type="text" />
		</form>
	</div>
);



export default Home;
