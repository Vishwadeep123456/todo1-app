// script.js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const container = document.getElementById('arrayContainer');

function renderArray(highlight = -1, found = -1, checked = []) {
  container.innerHTML = '';
  arr.forEach((val, i) => {
    const div = document.createElement('div');
    div.className = 'box';
    if (i === highlight) div.classList.add('mid');
    if (i === found) div.classList.add('found');
    if (checked.includes(i)) div.classList.add('checked');
    div.innerText = val;
    container.appendChild(div);
  });
}

async function startSearch() {
  const target = parseInt(document.getElementById('targetInput').value);
  let left = 0;
  let right = arr.length - 1;
  let checked = [];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    renderArray(mid, -1, checked);
    await new Promise(r => setTimeout(r, 800));

    if (arr[mid] === target) {
      renderArray(mid, mid, checked);
      document.getElementById('output').innerText = `✅ ${target} मिला index ${mid} पर`;
      return;
    } else if (arr[mid] < target) {
      for (let i = left; i <= mid; i++) checked.push(i);
      left = mid + 1;
    } else {
      for (let i = mid; i <= right; i++) checked.push(i);
      right = mid - 1;
    }
  }
  renderArray();
  document.getElementById('output').innerText = `❌ ${target} नहीं मिला`;
}

renderArray();
