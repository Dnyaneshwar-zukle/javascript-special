const cardsData = [
  {
    title: "cards 1",
    body: "This cards 1"
  },
  {
    title: "cards 2",
    body: "This cards 2"
  },
  {
    title: "cards 3",
    body: "This cards 3"
  },
  {
    title: "cards 4",
    body: "This cards 4"
  },
  {
    title: "cards 5",
    body: "This cards 5"
  },
  {
    title: "cards 6",
    body: "This cards 6"
  },
]

// <div class="card">
//   
// </div>

const cardsConatainer = document.querySelector('.cards-grids');

const postsMethods = () => {
  cardsData.map((postdata) => {
    console.log(postdata)
    const postElement = document.createElement('div');
    postElement.classList.add('card');
    postElement.innerHTML = `
    <h2>${postdata.title}</h2>
     <p>${postdata.body}</p>
    `
    cardsConatainer.appendChild(postElement);
  })
}
postsMethods()