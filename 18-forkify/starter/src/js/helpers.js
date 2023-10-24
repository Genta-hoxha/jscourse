import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  //   const res = await fetch(`${API_URL}/${id}`);
  try {
    const fetchPro = fetch(url);
    // const res = await fetch(url);
    const res = await Promise.race[(fetchPro, timeout(TIMEOUT_SEC))]; // perdorim promise.race pasi merr dy promise
    const data = await res.json();

    //ben kontrollet
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
