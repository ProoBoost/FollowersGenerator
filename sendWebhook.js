// netlify/functions/sendWebhook.js
const axios = require('axios');

exports.handler = async (event, context) => {
    const { username, profile, followers } = JSON.parse(event.body);

    const webhookUrl = 'https://discord.com/api/webhooks/1352810286439993365/mwgH1enPDE-0kOENCx5mqk66qqf-OiT-fwGtZuFbIH-8bV9qMNBOd_8uhT4zyQFdNdEf'; // URL de tu webhook

    try {
        await axios.post(webhookUrl, { username, profile, followers });
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Datos enviados correctamente' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al enviar los datos' }),
        };
    }
};
