const Address = {
  GET: 'https://26.javascript.pages.academy/kekstagram/data',
  SEND: 'https://26.javascript.pages.academy/kekstagram',
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
    .catch(() => {
      onError(true);
    });
};

const sendData = (onSuccess, onError, body) =>
{
  fetch(Address.SEND,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(
      () => onError()
    );
};

export {getData, sendData};
