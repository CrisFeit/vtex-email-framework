
import router from './router'

export function connect() {

    const socketUrl = 'ws://localhost:8090';
    let socket = new WebSocket(socketUrl);

    socket.addEventListener('close', () => {
        const interAttemptTimeoutMilliseconds = 200;
        const maxAttempts = 3
        let attempts = 0;
        const reloadIfCanConnect = () => {
            attempts++;
            if (attempts >= maxAttempts) {
                location.reload();
                return;
            }
            connect()
            socket = new WebSocket(socketUrl);
            socket.addEventListener('error', () => {
                setTimeout(reloadIfCanConnect, interAttemptTimeoutMilliseconds);
            });
            socket.addEventListener('open', () => {
                router(window.location)
            });
        };
        reloadIfCanConnect();
    });
}