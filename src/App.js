import React from 'react';
import styles from './App.module.scss';

import Board from './Board/Board';
import produce from 'immer/dist/immer';

class App extends React.PureComponent {
	state = {
		family: {
			items: [ 'Walter', 'Rocio', 'Mia', 'Walter Jr','Otro' ],
			index: 0,
			input:'',
			indexD:-1
		},
		sports: {
			items: [ 'Futbol', 'Beisbol', 'Basquetbol','Tenis' ],
			index: 0,
			input:'',
			indexD:-1
		},
		numbers: {
			items: [ 'Uno', 'Dos', 'Tres' ],
			index: 0,
			input:'',
			indexD:-1
		},
		drinks: {
			items: [ 'Soda', 'Coffe' ],
			index: 0,
			input:'',
			indexD:-1
		}
	};

	onHandleButton = (object) => {
		const nextState = produce(this.state, (draft) => {
			if (draft[object].items.length > draft[object].index + 1) draft[object].index = draft[object].index + 1;
			else draft[object].index = 0;
		});
		this.setState(nextState);
	};

	onAddButtonClick = (object) => {
		//alert(this.state[object].input);
		const nextState = produce(this.state, (draft) => {
			draft[object].items = draft[object].items.concat(this.state[object].input);
			draft[object].input='';
			//draft[object].input='';
		});
		
		this.setState(nextState);
		
	};

	onDeleteButtonClick = (object) => {
		
		
		const removeItem = (items, i) => items.slice(0, i-1).concat(items.slice(i, items.length))
			  
		const nextState = produce(this.state, (draft) => {
			//draft[object].items = draft[object].items.concat(this.state[object].input);
			//draft[object].input='';
			const items=draft[object].items
			let filteredItems = removeItem(items,this.state[object].indexD )
			draft[object].items=filteredItems;
		});
		
		this.setState(nextState);
		
	};

	onInputChange = (event,object) => {
		const value = event.target.value;
		
		const nextState = produce(this.state, (draft) => {
			draft[object].input = value;
			
		});
		this.setState(nextState);
		
	};

	onInputDelete = (event,object) => {
		const value = event.target.value;
		
		const nextState = produce(this.state, (draft) => {
			draft[object].indexD = value;

		});
		this.setState(nextState);
		
	};
	

	render() {
		const { family, sports, numbers, drinks } = this.state;
		
		return (
			<div>
				<p className={styles.title}>¡Bienvenidos al curso de programación de cómputo móvil!</p>
				

				<div className={styles.container_boards}>
					
					<Board items={family.items} indexd={family.indexD} input={family.input} index={family.index} 
					label={'Siguiente'} onButtonClick={() => this.onHandleButton('family')} 
					inputChange={(evt) => this.onInputChange(evt, 'family')} inputDelete={(evt) => this.onInputDelete(evt, 'family')} 
					btnDelete={() => this.onDeleteButtonClick('family')} btnAdd={()=>this.onAddButtonClick('family')} />
					
					<Board items={sports.items} indexd={sports.indexD} input={sports.input} index={sports.index} 
					label={'Siguiente'} onButtonClick={() => this.onHandleButton('sports')} 
					inputChange={(evt) => this.onInputChange(evt, 'sports')} inputDelete={(evt) => this.onInputDelete(evt, 'sports')} 
					btnDelete={() => this.onDeleteButtonClick('sports')} btnAdd={()=>this.onAddButtonClick('sports')} />
					
					<Board items={numbers.items} indexd={numbers.indexD} input={numbers.input} index={numbers.index} 
					label={'Siguiente'} onButtonClick={() => this.onHandleButton('numbers')} 
					inputChange={(evt) => this.onInputChange(evt, 'numbers')} inputDelete={(evt) => this.onInputDelete(evt, 'numbers')} 
					btnDelete={() => this.onDeleteButtonClick('numbers')} btnAdd={()=>this.onAddButtonClick('numbers')} />
					
					
					<Board items={drinks.items} indexd={drinks.indexD} input={drinks.input} index={drinks.index} 
					label={'Siguiente'} onButtonClick={() => this.onHandleButton('drinks')} 
					inputChange={(evt) => this.onInputChange(evt, 'drinks')} inputDelete={(evt) => this.onInputDelete(evt, 'drinks')} 
					btnDelete={() => this.onDeleteButtonClick('drinks')} btnAdd={()=>this.onAddButtonClick('drinks')} />
					

				</div>
				{
					<p className={styles.result}>
						Resultado: <br />
						<label> {family.items[family.index]} Total {family.items.length} </label>
						<br />
						<label> {sports.items[sports.index]}  Total {sports.items.length}  </label>
						<br />
						<label> {numbers.items[numbers.index]}  Total {numbers.items.length}  </label>
						<br />
						<label> {drinks.items[drinks.index]} Total {drinks.items.length}  </label>
						<br />
					</p>
				}
			</div>
		);
	}
}

export default App;
