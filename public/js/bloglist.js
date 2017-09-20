
getArticles();


/**
 * Получение постов
 */

function getArticles() {
	console.log('getArticles');
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'blog/data.json');

	//xhr.timeout= 1000;

	xhr.onload = function (evt) {

		var rewData = evt.target.response;
		var loadArticle = JSON.parse(rewData);
		console.log(evt);
		reWriteDocuments(loadArticle);
	};
	xhr.send();
}



/**
 * Перерисовка списка статей
 * @param articles
 */

function reWriteDocuments(articles) {
	var listArticles = document.querySelector('.atricles-list');
	listArticles.innerHTML = "";
	var listElements = document.createDocumentFragment();
	articles.forEach(function (article) {
		var element = getElementFromTemplate(article);
		listElements.appendChild(element);
	});
	listArticles.appendChild(listElements);
}

/**
 * Создание Ноды поста из загруженых данных
 * @param data
 * @returns {Node}
 */
function getElementFromTemplate (data) {
	var template = document.querySelector('#article');
	var element = template.content.children[0].cloneNode(true);
	element.querySelector('.article--title').textContent  = data.title;
	element.querySelector('.article--title').href  = 'blog/post/' + data.id;

	element.querySelector('.article--user-create').textContent  = data.userCreate;
	element.querySelector('.article--text-aticle').textContent  = data.text;
	element.querySelector('.article--link').href  = 'blog/post/' + data.id;
	element.querySelector('.article--likes').textContent  = data.likes;
	element.querySelector('.article--reposts').textContent  = data.reposts;
	element.querySelector('.article--data').textContent  = data.created;

	return element;
}

