import axios from 'axios'

export default {
  getAllOrganizations: function () {
    return new Promise(resolve => {
      axios.get('/all-organizations')
        .then(response => {
          resolve(response.data)
          // return response.data;
        }).catch((error) => {
          console.log('error ' + error);
          resolve(error);
        })
    })
  },
  getProfile: function () {
    return new Promise(resolve => {
      axios.get('/auth/get-user')
        .then(response => {
          resolve(response.data)
          // return response.data;
        })
        .catch((error) => {
          console.log('error ' + error)
          resolve(error)
        })
    })
  },
  getCustomPermissionLists: function () {
    return new Promise(resolve => {
      axios.get('/custom-permission-list')
        .then(response => {
          resolve(response.data)
          // return response.data;
        }).catch((error) => {
          console.log('error ' + error)
          resolve(error)
        })
    })
  },
  getCustomPermission: function (url: any) {
    return new Promise(resolve => {
      axios.get(url)
        .then(response => {
          resolve(response)
        })
        .catch((error) => {
          console.log('error ' + error)
          resolve(error)
        })
    })
  },
  getDepartment: function () {
    return new Promise(resolve => {
      axios.get('/all-departments')
        .then(response => {
          resolve(response.data)
        }).catch((error) => {
          console.log('error ' + error)
          resolve(error)
        })
    })
  },
  getPermissions: function () {
    return new Promise(resolve => {
      axios.get('/all-permissions')
        .then(response => {
          resolve(response.data)
        }).catch((error) => {
          console.log('error ' + error)
          resolve(error)
        })
    })
  },
  getRoles: function () {
    return new Promise(resolve => {
      axios.get('/all-roles')
        .then(response => {
          resolve(response.data)
        }).catch((error) => {
          console.log('error ' + error)
          resolve(error)
        })
    })
  },
  buildUrl (url: string, parameters: any, mark = false) {
    let qs = ''
    for (const key in parameters) {
      const value = parameters[key]
      qs += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&'
    }
    if (qs.length > 0) {
      qs = qs.substring(0, qs.length - 1) // chop off last "&"
      // eslint-disable-next-line eqeqeq
      if (mark == false) {
        url = url + '?' + qs
      } else {
        url = url + '&' + qs
      }
    }
    return url
  },
  getAllUsers (query = null) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const url = (query && query.length >= 2) ? 'all-users?q=' + query : 'all-users'
    return new Promise((resolve, reject) => {
      axios.get(url).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error)
      }).finally(() => {
        //
      })
    })
  },
  /* check: function (conditions: string): any {
    const code = '' + conditions + ';'
    // console.log(code);
    // eslint-disable-next-line no-eval
    return eval(code)
  },
  inArray: function (needle: any, haystack: any) {
    const length = haystack.length
    for (var i = 0; i < length; i++) {
      // eslint-disable-next-line eqeqeq
      if (haystack[i] == needle) return true
    }
    return false
  },
  rtrim: function (str: any, chr: any) {
    const rgxtrim = (!chr) ? new RegExp('\\s+$') : new RegExp(chr + '+$')
    return str.replace(rgxtrim, '')
  },
  getInitials: function (word: any, length: any = 1) {
    return word.substring(0, length === undefined ? 1 : length)
  },
  initials: function (words: any, length: any = 1) {
    let wordsArray, initials
    // eslint-disable-next-line prefer-const
    wordsArray = words === undefined ? [] : words.split(' ')

    if (length === undefined) {
      initials = wordsArray.map((word: any) => this.getInitials(word, length)).join('')
    } else {
      initials =
        wordsArray.length === 1
          ? this.getInitials(wordsArray[0], length)
          : wordsArray
            .splice(0, length)
            .map((word: any) => this.getInitials(word))
            .join('')
    }

    return initials.toUpperCase()
  } */
}
