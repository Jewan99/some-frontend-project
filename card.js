









let items = [
  { id: 1, text: "play games", done: true },
  { id: 2, text: "do nothing", done: false },
  { id: 3, text: "sleep", done: false },
];
let nextId = 4;

const listEl = document.getElementById('list');
const emptyMsg = document.getElementById('emptyMsg');
const countLabel = document.getElementById('countLabel');
const doneLabel = document.getElementById('doneLabel');
const clearDoneBtn = document.getElementById('clearDone');
const form = document.getElementById('addForm');
const input = document.getElementById('itemInput');

document.getElementById('dateLabel').textContent = new Date().toLocaleDateString(undefined, {
  weekday: 'short', month: 'short', day: 'numeric'
});

function render() {
  listEl.innerHTML = '';
  if (items.length === 0) {
    emptyMsg.style.display = 'block';
  } else {
    emptyMsg.style.display = 'none';
    items.forEach(item => {
      const li = document.createElement('li');

      const check = document.createElement('button');
      check.className = 'check' + (item.done ? ' done' : '');
      check.type = 'button';
      check.setAttribute('aria-label', item.done ? 'Mark not done' : 'Mark done');
      check.addEventListener('click', () => {
        item.done = !item.done;
        render();
      });

      const text = document.createElement('span');
      text.className = 'text' + (item.done ? ' done' : '');
      text.textContent = item.text;

      const remove = document.createElement('button');
      remove.className = 'remove';
      remove.type = 'button';
      remove.textContent = '✕';
      remove.setAttribute('aria-label', 'Remove item');
      remove.addEventListener('click', () => {
        items = items.filter(i => i.id !== item.id);
        render();
      });

      li.appendChild(check);
      li.appendChild(text);
      li.appendChild(remove);
      listEl.appendChild(li);
    });
  }

  const openCount = items.filter(i => !i.done).length;
  const doneCount = items.length - openCount;
  countLabel.textContent = `${openCount} open`;
  doneLabel.textContent = `${doneCount} crossed off`;
  clearDoneBtn.disabled = doneCount === 0;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (!value) return;
  items.push({ id: nextId++, text: value, done: false });
  input.value = '';
  render();
  input.focus();
});

clearDoneBtn.addEventListener('click', () => {
  items = items.filter(i => !i.done);
  render();
});

render();