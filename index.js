const { BirthdayGreeting } = require("./birthday-greeting")
const { createServer } = require("./fake-email-server")

createServer(() => {
    new BirthdayGreeting().sendGreetings(Date.now())
})