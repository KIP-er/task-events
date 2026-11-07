/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const newElement = document.createElement('button');
    newElement.textContent = 'Удали меня';
    document.body.append(newElement);
    const button = document.querySelector('button');
    button.addEventListener('click', function () {
        const removeElement = document.querySelector('button');
        removeElement.remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');
    arr.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item}`;
        ul.append(li);
    });
    ul.addEventListener('mouseover', function (event) {
        const item = event.target.closest('li');
        if (!item) {
            return;
        }
        item.setAttribute('title', `${event.target.textContent}`);
    });
    document.body.append(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const body = document.querySelector('body');
    const link = document.createElement('a');
    link.textContent = 'tensor';
    link.setAttribute('href', 'https://tensor.ru/');
    body.append(link);
    const a = document.querySelector('a');
    a.addEventListener('click', function (event) {
        if (a.textContent === 'tensor') {
            a.textContent += ` ${a.href}`;
            event.preventDefault();
        }
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const body = document.querySelector('body');
    body.insertAdjacentHTML(
        'afterbegin',
        `<ul><li>Пункт</li></ul><button>Добавить пункт</button>`,
    );
    const ul = body.querySelector('ul');
    ul.addEventListener('click', function (event) {
        if (event.target.nodeName === 'LI') {
            event.target.textContent += '!';
        }
    });
    const button = body.querySelector('button');
    button.addEventListener('click', function () {
        ul.insertAdjacentHTML('beforeend', '<li>Пункт</li>');
    });
}
