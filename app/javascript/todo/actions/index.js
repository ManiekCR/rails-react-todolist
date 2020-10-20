export const FETCH_TASKS = 'FETCH_TASKS';
export const TASK_CREATED = 'TASK_CREATED';
export const TASK_DELETED = 'TASK_DELETED';

export function fetchTasks() {
  const url = `/api/v1/tasks`;
  const promise = fetch(url, { credentials: "same-origin" })
    .then(r => r.json());
  return {
    type: FETCH_TASKS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function createTask(content) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const url = `/api/v1/tasks`;
  const body = { content }; // ES6 destructuring
  const promise = fetch(url, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: TASK_CREATED,
    payload: promise // Will be resolved by redux-promise
  };
}

export function deleteTask(id) {
  const url = `/api/v1/tasks/${id}`;
  const promise = fetch(url, {
    credentials: 'same-origin',
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });

  return {
    type: TASK_DELETED,
    id
  };
}
