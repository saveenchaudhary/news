class News {
  constructor() {}
  displayNews(responseJson) {
    let articles = responseJson["articles"];
    console.log(articles);
    let html = "";
    articles.forEach((element) => {
        if(element['urlToImage'] != null){

            html += `  <div class="col mb-4">
            <div class="card">
            <img src="${element['urlToImage']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${element['title']}</h5>
            <p class="card-text">${element['content']}</p>
            <a href="${element['url']}" class="btn btn-primary " role="button" aria-pressed="true">Show More</a>
            </div>
            </div>
            </div>`;
        }
    });
    newsBox.innerHTML = html;
  }
}

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=9fb0449358944880842f6dc150690c77",
  true
);

xhr.onload = function () {
  if (this.status == 200) {
    let responseJson = JSON.parse(this.response);
    const news1 = new News();
    news1.displayNews(responseJson);
  } else {
    console.log("Some error");
  }
};
xhr.send();
