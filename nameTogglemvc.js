import { observe, autorun } from "./reactivity";

document.addEventListener("DOMContentLoaded", function() {
  // DOM elements.
  const headingNode = document.getElementById("heading1");
  const prevbutton = document.getElementById("prev-name");
  const nextbutton = document.getElementById("next-name");
  const selectNode = document.getElementsByTagName("select")[0];
  const names = ["Nikhil", "SaiKrishna", "Foo", "Bar"];

  const state = { name: "SaiKrishna" };

  // View Handlers.
  prevbutton.onclick = function() {
    state.name = getAdjacentNames()[0];
  };

  nextbutton.onclick = function() {
    state.name = getAdjacentNames()[1];
  };

  selectNode.onchange = function(evt) {
    state.name = evt.srcElement.value.trim();
  };

  // DOM Manipulators
  function setSelectValue() {
    const setName = state.name;
    selectNode.selectedIndex = getIndexof(setName);
  }

  function setHeading() {
    headingNode.textContent = state.name;
  }

  // helpers functions
  function getAdjacentNames() {
    if (isValidIndex(state.name)) {
      let id = getIndexof(state.name);
      const prev = isValidIndex(id - 1) ? names[id - 1] : null;
      const next = isValidIndex(id + 1) ? names[id + 1] : null;
      console.log(prev, next);
      return [prev, next];
    } else {
      return [null, null];
    }
  }

  function getIndexof(value) {
    return names.indexOf(value);
  }

  function isValidIndex(id) {
    return !!~id;
  }

  function output() {
    JSON.stringify(state);
    console.log(state.name);
  }

  observe(state);
  autorun(setHeading);
  autorun(setSelectValue);
});

// DOM Update
