import React from 'react';
import { Link } from 'react-router-dom';

const groupList = [
	{
		id: 'клей-пва',
		name: 'клей',
	},
	{
		id: 'інтерєрні-фарби',
		name: 'інтер`єрні фарби',
	},
	{
		id: 'фасадні-фарби',
		name: 'фасадні фарби',
	},
	{
		id: 'грунтівка',
		name: 'грунтівки',
	},
	{
		id: 'декоративні-фарби',
		name: 'декоративні та по дереву',
	},
	{
		id: 'лаки-акрилові',
		name: 'лаки та лазурі',
	},
	{
		id: 'шпатлівки-по-дереву',
		name: 'акрилова шпаклівка',
	},
	{
		id: 'декоративні-штукатурки',
		name: 'декоративні штукатурки',
	},
];

const GroupProduct = ({match}) => {
	return (
		<div>
			<h1>Продукція</h1>
            <ul>
                {groupList.map(item=>(
                    <li key={item.id}>
                        <Link to={`${match.url}/${item.id}`}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
		</div>
	);
};

export default GroupProduct;
