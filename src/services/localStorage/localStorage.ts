export default {
  get: function (key: string) {
    if (!key) throw 'Local Storage excepts a key to be fetched.';

    let response;
    let item = localStorage.getItem(key);

    try {
      if (item != null) {
        response = JSON.parse(item);
      }
    } catch (e) {
      response = item;
    }

    return response;
  },

  set: function (key: string, value: string) {
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  },

  clearKey: function (key: string) {
    localStorage.setItem(key, '')
  },

  clear: function () {
    localStorage.clear()
  }
};
