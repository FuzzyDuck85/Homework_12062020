document.addEventListener('DOMContentLoaded', () => {
    const newAnimalObservationForm = document.querySelector('#new-animal-observation-form');
    newAnimalObservationForm.addEventListener('submit', handleNewAnimalObservationForm);
});

const handleNewAnimalObservationForm = function(event){
  event.preventDefault();
  const observationListItem = createObservationListItem(event.target);
  // get the reading list
  const observationList = document.querySelector('#observation-list');
  // add the reading list item
  observationList.appendChild(observationListItem);
  event.target.reset();


};

const createObservationListItem = function(form){
  const observationListItem = document.createElement('li');
  observationListItem.classList.add('observation-list-item');

  const species = document.createElement('h2');
  species.textContent = form.species.value;
  observationListItem.appendChild(species);

  const animalType = document.createElement('h3');
  animalType.textContent = form.animalType.value;
  observationListItem.appendChild(animalType);

  const habitat = document.createElement('h3');
  habitat.textContent = `In the ${form.habitat.value}`;
  observationListItem.appendChild(habitat);

  const contributor = document.createElement('p');
  contributor.textContent = `Observed by ${form.contributorName.value}, age ${form.contributorAge.value}.`;
  observationListItem.appendChild(contributor);

  const observationDateTime = document.createElement('p');
  observationDateTime.textContent = form.observationDateTime.value;
  observationListItem.appendChild(observationDateTime);

  return observationListItem;

};

const handleDeleteAllClick = function (event) {
  const readingList = document.querySelector('#observation-list');
  readingList.innerHTML = '';
}
