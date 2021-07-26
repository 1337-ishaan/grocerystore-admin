
const accountSid = "ACa09ed31b7816d8e413295daaaaadfd19";
const authToken = "34b415fd6afa8b211c6de2971e222fd7";
// const clientConfig = client(accountSid, authToken);

const sendOTP = (req, res) => {
    const client = require('twilio')(accountSid, authToken);
    console.log("OTP function")
    client.messages.create({
    body: 'OTP is 901392',
    from: '+13158182059',
    to: '+917021173513'
  })
  .then(
    res.status(201).send({
      message: 'Account created successfully, kindly check your phone to activate your account!',
    }))
  .then(message => console.log(message.sid));
}

module.exports = sendOTP