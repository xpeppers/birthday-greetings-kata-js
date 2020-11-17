const { createServer } = require("http")

function startFakeEmailServer(callback) {
  createServer(emailListener).listen(3456, () => {
    console.log("MailServer Started on port 3456")
    callback()
  })
}

async function emailListener(request, response) {
  if(request.url !== "/send-email" || request.method !== "POST") {
    response.writeHead(404)
    response.end("")
    return
  }

  const { recipient, subject, body } = JSON.parse(await bodyFrom(request))

  console.log(`Sending email to "${recipient}" with subject "${subject}" and body "${body}"`)

  response.end(`Email sent to ${recipient}`)
}

function bodyFrom(request) {
  let buffer = []
  return new Promise((resolve, reject) => {
    request.on('data', (chunk) => {
      buffer.push(chunk)
    })

    request.on('end', () => {
      resolve(Buffer.concat(buffer).toString())
    })

    request.on('error', reject)
  })
}

exports.createServer = startFakeEmailServer