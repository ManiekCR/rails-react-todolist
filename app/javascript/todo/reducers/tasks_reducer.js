import { FETCH_TASKS, TASK_CREATED } from '../actions';

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
    default:
      return state;
  }
}
