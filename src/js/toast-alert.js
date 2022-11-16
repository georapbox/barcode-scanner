const toastContainer = document.getElementById('toastContainer');

const hideAlert = evt => {
  const target = evt.currentTarget;
  target.removeEventListener('click', hideAlert);
  toastContainer.removeChild(target.parentNode);
};

export const toastAlert = (message = '', type = 'info') => {
  const types = ['info', 'warning', 'danger'];

  if (!types.includes(type)) {
    type = 'info';
  }

  const template = /* html */`
    ${message}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  `;

  const div = document.createElement('div');
  div.className = `alert alert-${type} alert-dismissible text-break`;
  div.innerHTML = template;
  div.querySelector('button').addEventListener('click', hideAlert);
  toastContainer.appendChild(div);
  setTimeout(() => div.classList.add('show'), 100);
};
