window.onload = function() {

    let tabs = document.querySelector('.tabs');

    tabs.addEventListener('click', showTabs);

    function showTabs(event) {
        event.preventDefault();

        if (event.target.className === 'tabs__buttons') {
            //  меняем активную кнопку
            let buttons = document.getElementsByClassName('tabs__buttons');
            for(var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('active');
            }
            event.target.classList.add('active');

            //   изменяем   контент
            let dataTab = event.target.getAttribute('data-target'); // берем data-аттрибут
            let tabContent = document.getElementsByClassName('tabs__content-list');
            for(let i = 0; i < tabContent.length; i++) {  // перебираем все блоки в tabContent
               if(dataTab == i) {  // если data аттрибут равен i(0,1,2,3) тогда меняем его стиль
                   tabContent[i].style.display = 'flex';
               }
               else tabContent[i].style.display = 'none';
            }
        }
    }

};

