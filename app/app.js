import { store } from './store';
import { changeStatus } from './actions/status';

const statusEl = document.querySelector('.status');

store.subscribe(() => {
    const state = store.getState();
    statusEl.textContent = state.status;
});

document
    .querySelector('.userName')
    .oninput = e => {
        const userName = e.target.value;
        store.dispatch(changeStatus(userName));
    };