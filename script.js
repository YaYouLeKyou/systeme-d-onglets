let titles = document.querySelectorAll('#tabs .tab-titles li');

for (let title of titles) {
  title.addEventListener('click', function () {
    //on récupère le numéro du titre
    let num = this.getAttribute('data-tabtitle');
    //on masque la div précédente
    document.querySelector('#tabs > div.active').classList.remove('active');
    //on réactive la div voulu
    document.querySelector('#tab' + num).classList.add('active');
    //on enleve la class du titre précédemment actif
    document
      .querySelector('#tabs .tab-titles li.active')
      .classList.remove('active');
    //on active le bon titre
    this.classList.add('active');
  });
}
