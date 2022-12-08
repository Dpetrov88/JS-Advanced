function getArticleGenerator(articles) {
    //let myArticles = Array.from(articles)
    let contend = document.getElementById("content");
    return function () {
        if (articles.length === 0) {
            return
        }
        let article = articles.shift();
        contend.innerHTML += `<article>${article}</article>`
    }
}
