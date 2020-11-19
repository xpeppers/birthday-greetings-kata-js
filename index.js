const { BirthdayGreeting } = require("./birthday-greeting")
const { createServer } = require("./fake-email-server")

createServer(() => {
    new BirthdayGreeting().sendGreetings("./employee_data.txt", new Date(), "http://localhost", 3456)
})