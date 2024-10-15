// Pre-Header

// Close button functionality

(function headerUpperCloseBtn() { 
    const preHeaderContainer = document.querySelector('.vtex-flex-layout-0-x-flexRow--pre-header');
    const closeBtn = document.querySelector('.vtex-rich-text-0-x-container--pre-header-close-button');

    preHeaderContainer.style.display = 'block';
    if(preHeaderContainer) {
      closeBtn.addEventListener('click', () => {
        preHeaderContainer.style.display = 'none'
        sessionStorage.setItem('HeaderAnnouncement', '1');

      })
    } else {
      return;
    }

    if(sessionStorage.getItem('HeaderAnnouncement') === '1'){
      preHeaderContainer.style.display = 'none;'
    }
})