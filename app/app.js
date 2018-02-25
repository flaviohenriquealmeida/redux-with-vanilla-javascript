import { store } from './store';
import { changeStatus } from './actions/status';

const statusParagraph = document.querySelector('.status');

document
.querySelector('.userName')
.oninput = e => {
    const userName = e.target.value;
    store.dispatch(changeStatus(userName));
};

store.subscribe(() => {
    const state = store.getState();
    statusParagraph.textContent = state.status;
});