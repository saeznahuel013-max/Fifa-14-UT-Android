const net = require('net');

const PORT = process.env.PORT || 8080;

const server = net.createServer((socket) => {
    console.log('¡Juego conectado!');

    socket.on('data', (data) => {
        console.log('Recibido del FIFA:', data.toString('hex')); // Ver el paquete en Hexadecimal
        
        // Aquí es donde emularemos la respuesta de EA
        // Por ahora, solo mandamos un "OK" básico si sabemos el protocolo
    });

    socket.on('error', (err) => console.log('Error:', err.message));
});

server.listen(PORT, () => {
    console.log(`Proxy TCP escuchando en puerto ${PORT}`);
});
