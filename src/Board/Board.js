import * as React from 'react';
import styles from './Board.module.scss';
import List from '../components/List/List';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

class Board extends React.Component {
	state = {};

	componentDidMount() {}

	render() {
		const { items, index, label, onButtonClick,inputChange,btnAdd,input,inputDelete,btnDelete } = this.props;
		return (
			<div className={styles.main}>
				<Input value={input} onChange={inputChange} clear={btnAdd} />
			    <Button label={'Agregar'} onClick={btnAdd}  />	

				<List items={items} index={index} />
				<Button label={label} onClick={onButtonClick} />

				<Input value={input} onChange={inputDelete} />
				<Button label={'Eliminar'} onClick={btnDelete} />
			</div>
		);
	}
}

export default Board;
