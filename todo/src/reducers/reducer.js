export const ADD_ITEM = 'ADD_ITEM';
export const initialState = {
	todos : [
		{
			item      : 'Find a Vessel for Maxis',
			completed : false,
			id        : 1,
		},
		{
			item      : 'Open the Gateway',
			completed : false,
			id        : 2,
		},
		{
			item      : 'Reach Agartha',
			completed : false,
			id        : 3,
		},
	],
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			const newItem = {
				item      : action.payload,
				completed : false,
				id        : Date.now(),
			};
			return {
				...state,
				todos : [ ...state.todos, newItem ],
			};
		case 'TOGGLE_ITEM':
			return {
				...state,
				todos : state.todos.map(item => {
					if (action.payload === item.id) {
						return {
							...item,
							completed : !item.completed,
						};
					}
					return item;
				}),
			};
		case 'CLEAR_COMPLETED':
			return {
				...state,
				todos : state.todos.filter(item => !item.completed),
			};
		default:
			return state;
	}
};
