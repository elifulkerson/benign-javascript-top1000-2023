document.addEventListener('DOMContentLoaded', () => {
  const showMoreButton = document.getElementById('js-show-more-interests-button');
  if (!showMoreButton) {
    return;
  }
  showMoreButton.addEventListener('click', () => {
    const interestsLists = document.getElementById('js-research-interest-section-list-container');
    if (interestsLists) {
      interestsLists.classList.remove('hide-overflow-interests');
    }
    showMoreButton.classList.add('hidden');
  });
});