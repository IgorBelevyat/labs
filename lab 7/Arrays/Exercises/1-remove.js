'use strict';

const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};

module.exports = { removeElement };
