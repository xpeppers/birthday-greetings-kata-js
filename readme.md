# Birthday Greeting Kata

## Problem: write a program that

- Loads a set of employee records from a flat file
- Sends a greetings email to all employees whose birthday is today (over http)

The flat file is a sequence of records, separated by newlines; this are the first few lines:
```
last_name, first_name, date_of_birth, email
Doe, John, 1982/10/08, john.doe@foobar.com
Ann, Mary, 1975/09/11, mary.ann@foobar.com
```

The greetings email contains the following text:
```
Subject: Happy birthday!

Happy birthday, dear John!
```
with the first name of the employee substituted for “John”

To send an email you have to make an http request to a fake email-server that will only log the request was received.

The fake service will run only when you run
```
npm start
```
and will be available at:
```
POST http://localhost:3456/send-email
```

In order to be able to send an email correctly you have to send a body like this:
```
{"recipient":"a@b.c","subject": "Titolo", "body": "Happy birthday, dear John!"}
```


