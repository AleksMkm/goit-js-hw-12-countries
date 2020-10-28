import { error } from '@pnotify/core';

function throwErrorTooMany() {
  error({
    title: 'Oh No!',
    text: 'Too many matches found. Please enter a more specific query!',
    delay: 1000,
  });
}

function throwErrorNotFound() {
  error({
    title: 'Oops!',
    text: 'No such country. Please enter another query!',
    delay: 1500,
  });
}

export default { throwErrorTooMany, throwErrorNotFound };
