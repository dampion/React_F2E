// import { database } from './firebase';
// const msgRef = database.ref('/todolist');
// msgRef.on('value', function(snapshot) {
//   const val = snapshot.val();
// });
const TodoState = {
	'myTasks': [
		{
			'content': 'Type something here.'
		},
		{
			'content': 'Type something here.'
		}
	],
	'inProgress': [
		{
			'content': 'Progress A.'
		},
		{
			'content': 'Progress B.'
		}
	],
	'completed': [
		{
			'content': "Completed A"
		},
		{
			'content': 'completed B'
		}
	]
};

export default TodoState;