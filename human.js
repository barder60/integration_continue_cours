const { isEmpty, reduce, map, get } = require('lodash')

const notFound = (data, field) => {
    const fieldFound = get(data, field)
    
    if (!fieldFound) {
      throw new Error(`no ${field} provided`)
    }
  
    return fieldFound
}

const FIELDS = [{
    key: 'age',
    isValidField: (age) => {
      console.log(age)
      if (age < 13) throw new Error(`age : ${age} is too low`)
      return true
    }
  }, {
    key: 'firstName'
  }, {
    key: 'lastName'
  }, {
    key: 'email',
    isValidField: (email) => {
      return /\S+@\S+\.\S+/.test(email)
    }
}]


class Human{
    constructor(email, firstName, lastName, age){
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }


    isValid(){
        map(FIELDS, (field) => {
            notFound(this, field.key)
        })
    }
}

module.exports = Human