export const toggleDropdown = function(){
    const triggers = document.getElementsByClassName('dropdown-event-button');
    const triggersArray = Array.from(triggers);

    triggersArray.forEach(function(trigger){
        trigger.addEventListener('click',function(){
            const answer = trigger.nextElementSibling;
            answer.classList.toggle('dropdown-answer--visible');
            trigger.classList.toggle('dropdown-event-button--active');
        })
    })
};