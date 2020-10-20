import { FETCH_TASKS, TASK_CREATED, TASK_DELETED } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_TASKS: {
      return action.payload;
    }
    case TASK_CREATED:
      if (state.map(task => task.id).includes(action.payload.id)) {
        return state;
      } else {
        const copiedState = state.slice(0);
        copiedState.push(action.payload);
        return copiedState;
      }
    case TASK_DELETED:
      const newState = state.filter(task => task.id !== action.id); // Use filter method to remoreove the item that has been deleted from the st
        return newState;
    default:
      return state;
  }
}
