const fs = require('fs')
const readline = require('readline')
const http = require('http')
const Employee = require('./employee')

class BirthdayGreeting {
  sendGreetings(filename, date, emailServiceHost, emailServicePort) {
    const file = readline.createInterface({ input: fs.createReadStream(filename) })

    file.on('line', (line) => {
      let [ name, surname, birthday, email ] = line.split(", ")

      let employee = new Employee(name, surname, birthday, email)
        if (employee.isBirthday(date)) {
            let recipient = employee.email
            let body = `Happy Birthday, dear ${employee.name}`
            let subject = "Happy Birthday!"
            this.#sendMessage(emailServiceHost, emailServicePort, subject, body, recipient)
        }
    })
  }

  #sendMessage(host, port, subject, body, recipient) {
    const data = JSON.stringify({recipient, subject, body})

    const options = {
      hostname: host,
      port: port,
      path: '/send-email',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    }

    const req = http.request(options, res => {
      res.on('data', data => { })
    })

    req.on('error', error => {
      process.stdout.write(error)
    })

    req.write(data)
    req.end()
  }
}

exports.BirthdayGreeting = BirthdayGreeting