
import router from './router'

export function connect() {

    const socketUrl = 'ws://localhost:8090';
    let socket = new WebSocket(socketUrl);

    socket.addEventListener('close', () => {
        const interAttemptTimeoutMilliseconds = 200;
        const maxDisconnectedTimeMilliseconds = 4000;
        const maxAttempts = Math.round(maxDisconnectedTimeMilliseconds / interAttemptTimeoutMilliseconds);
        let attempts = 0;
        const reloadIfCanConnect = () => {
            connect()
            attempts++;
            if (attempts > maxAttempts) {
                location.reload();
                return;
            }
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