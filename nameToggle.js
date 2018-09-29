// called when document is painted in the browser.
document.addEventListener('DOMContentLoaded', function () {

    // dom elements as value to do dynamic work i.e. onclick or onchange.
        const button = document.getElementById('name-change');
        const heading = document.getElementById('heading1');    
        const selectElement = document.getElementsByTagName('select')[0];
        
    // Event Handlers for the DOM Elements.
        button.addEventListener('click', buttonClickHandler)
        selectElement.addEventListener('change', selectChangeHandler);

    // Handlers to do work when user does action.

        // called when the user changes the menu i.e. selected.
        function selectChangeHandler() {
            setHeading(selectElement.value)
        }
        
        // called when the user clicks the buttons.
        function buttonClickHandler(){
            if(heading.textContent.trim() === 'Nikhil'){
                setHeading("Saikrishna")
                setSelectValue();
            }else{
                setHeading("Nikhil")
                setSelectValue()

            }
        }

    
    // Common  functions to DOM Manipulations

        // changes the selected options if options is valid number in the range.
        function setSelectValue(){
            if(heading.textContent.trim() === 'Nikhil'){
                selectElement.selectedIndex = 1
            }else{
                selectElement.selectedIndex = 0
            }
        }
    
        
        // changes the heading shown 
        function setHeading(text) {
                heading.textContent = text;
        }

    // this is only that i am calling initially.
    setHeading(selectElement.value)
})


