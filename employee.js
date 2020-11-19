class Employee {
  constructor(name, surname, birthday, email) {
    this.name = name
    this.surname = surname
    this.birthday = new Date(birthday)
    this.email = email
  }

  isBirthday(date) {
    return this.birthday.getMonth() === date.getMonth() &&
           this.birthday.getDate() === date.getDate()
  }
}

module.exports = Employee