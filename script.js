const dropDownButton = document.querySelector('.dropdown-button')
const dropDownMenu = document.querySelector('.dropdown-menu')

dropDownButton.addEventListener('click', function () {
    dropDownMenu.style.display = dropDownMenu.style.display === 'block' ? 'none' : 'block'
})

