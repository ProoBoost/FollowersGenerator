const axios = require('axios');

exports.handler = async (event, context) => {
    const { username, profile, followers } = JSON.parse(event.body);

    // URL de tu webhook de Discord (no la pongas directamente en el cliente)
    const webhookUrl = 'https://discord.com/api/webhooks/1352810286439993365/mwgH1enPDE-0kOENCx5mqk66qqf-OiT-fwGtZuFbIH-8bV9qMNBOd_8uhT4zyQFdNdEf';

    // Datos que se enviarán al webhook
    const data = {
        content: `Nuevo Botting: \nUsuario: ${username}\nPerfil: ${profile}\nSeguidores: ${followers}`
    };

    try {
        // Enviar los datos a la webhook de Discord
        await axios.post(webhookUrl, data);

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
