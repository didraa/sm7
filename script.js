let news = [
    {
        id: 1,
        name: "Заголовок новости 1",
        author: "Автор новости 1",
        date: "2022-01-01",
        text: "Текст новости 1"
    },
    {
        id: 2,
        name: "Заголовок новости 2",
        author: "Автор новости 2",
        date: "2022-01-02",
        text: "Текст новости 2"
    },
    {
        id: 3,
        name: "Заголовок новости 3",
        author: "Автор новости 3",
        date: "2022-01-03",
        text: "Текст новости 3"
    },
    {
        id: 4,
        name: "Заголовок новости 4",
        author: "Автор новости 4",
        date: "2022-01-04",
        text: "Текст новости 4"
    },
    {
        id: 5,
        name: "Заголовок новости 5",
        author: "Автор новости 5",
        date: "2022-01-05",
        text: "Текст новости 5"
    }
];

    function addNews(event) {
      event.preventDefault();

     
      let name = document.getElementById('name').value;
      let author = document.getElementById('author').value;
      let date = document.getElementById('date').value;
      let text = document.getElementById('text').value;

     
      let новость = {
        id: news.length + 1,
        name: name,
        author: author,
        date: date,
        text: text
      };

    
      news.push(новость);
      document.getElementById('name').value = '';
      document.getElementById('author').value = '';
      document.getElementById('date').value = '';
      document.getElementById('text').value = '';
      renderNews();
    }

    function renderNews() {
      let container = document.getElementById('container');
      container.innerHTML = '';
      

      news.forEach((item, index) => {
    container.innerHTML += taskCreator(item, index)
})
      
      
    }

    news.forEach((item, index) => {
    container.innerHTML += taskCreator(item, index)
})
function taskCreator(task, index) {
    return `
		<div class="block">
			<div class="block__wrapper">
				<div class="block__name">${task.name}</div>
				<div class="block__date">${task.date}</div>
			</div>
			<div class="block__text">${task.text}</div>
			<div class="block__wrapper">
				<div class="block__author">${task.author}</div>
				<div class="block__id">${task.id}</div>
			</div>
		</div>
	`
}

    let form = document.getElementById('form');
    form.addEventListener('submit', addNews);