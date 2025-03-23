let count = 0;

  function updateCount() {
    document.getElementById('count').textContent = count;
  }

  function increment() {
    count++;
    updateCount();
    document.getElementById('error').textContent = '';
    document.getElementById('clear-btn').style.display = 'inline-block';
  }

  function decrement() {
    if (count > 0) {
      count--;
      updateCount();
      document.getElementById('error').textContent = '';
    } else {
      document.getElementById('error').textContent = 'Error: Count is already 0';
      document.getElementById('clear-btn').style.display = 'none';
      document.getElementById('decrement-btn').classList.add('disabled');
    }
  }

  function clearCount() {
    count = 0;
    updateCount();
    document.getElementById('error').textContent = 'Error: Count is already 0';
    document.getElementById('clear-btn').style.display = 'none';
  }