const Address = {
  GET: 'https://26.javascript.pages.academy/kekstagram/data',
};

const getData = (onSuccess, onError) => {
  fetch(Address.GET)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });
};

export {getData};
