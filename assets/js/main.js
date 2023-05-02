const items = {
  0: {
    id: 0,
    name: "AWP Драгон Лор",
    img: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH-t26q4SZlvD7PYTQgXtu5Mx2gv3--Y3nj1H6qBFvMWHyIo7Adw9raF6GrlK9lLi-jJO7tJ_JzyNh63F3sX_emUPkgQYMMLL2MDRAbQ/360fx360f",
  },
  1: {
    id: 1,
    name: "М4 Вой",
    img: "https://s-wiki.cs.money/wiki_MY9f1F4_preview.png",
  },
  2: {
    id: 2,
    name: "Кейс Революция",
    img: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQynaHMJT9B74-ywtjYxfOmMe_Vx28AucQj3brAoYrz3Fay_kY4MG_wdYeLMlhpLMaM-1U/360fx360f",
  },
};
function random() {
  return Math.floor(Math.random() * 3);
}

//заполнение кейсов
for (let i = 0; i < 100; i++) {
  let rand = random();

  var element = $(
    " <div class='case' id='" +
      "case" +
      i +
      "' ><img src='" +
      items[rand].img +
      "' alt='#' width='100' height='100' /> <input type='hidden' value='" +
      items[rand].id +
      "'> </div>"
  );
  $(".container").append(element);
}
//кейс81 выйгрышный
function getWinnerCase() {
  let winner_case = $("#case81>input").prop("value");
  console.log(items[winner_case]);
  let res = $("<p> Вы выйграли" + items[winner_case].name + "</p>");
  $(".result").append(res);
}
setTimeout(getWinnerCase, 5000);
