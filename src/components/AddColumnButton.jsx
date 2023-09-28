import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

function AddColumnButton() {
	const handleClick = () => {
		alert('AddColumnButton was clicked!');
	};

	return (
		<div className="flex gap-2 items-center justify-center w-[150px] border-2 border-slate-900 rounded-md cursor-pointer" onClick={handleClick}>
			<AiOutlinePlusCircle />
			Add Column
		</div>
	);
}

export default AddColumnButton;
