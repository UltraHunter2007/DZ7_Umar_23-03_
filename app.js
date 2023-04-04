async function renderNews() {
    const newsContainer = document.querySelector('#news-container')
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const newsData = await response.json()

    newsData.forEach(news => {
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card')

        const newsImage = document.createElement('img');
        newsImage.src = 'images/image1.jpg'
        newsImage.alt = 'News Image'
        newsImage.classList.add('news-image')

        const newsTitle = document.createElement('h3')
        newsTitle.textContent = news.title
        newsTitle.classList.add('news-title')

        const newsDescription = document.createElement('p')
        newsDescription.textContent = news.body
        newsDescription.classList.add('news-description')

        newsCard.appendChild(newsImage)
        newsCard.appendChild(newsTitle)
        newsCard.appendChild(newsDescription)

        newsContainer.appendChild(newsCard)
    })
}

renderNews()
