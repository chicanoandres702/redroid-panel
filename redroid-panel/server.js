const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.post('/api/start', (req, res) => {
    exec('docker start redroid', (error, stdout, stderr) => {
        if (error) {
            console.error(error);
            return res.status(500).send('System initialization failed');
        }
        setTimeout(() => exec('adb connect localhost:5555'), 4000);
        res.sendStatus(200);
    });
});

app.post('/api/stop', (req, res) => {
    exec('docker stop redroid', (error, stdout, stderr) => {
        if (error) {
            console.error(error);
            return res.status(500).send('System termination failed');
        }
        res.sendStatus(200);
    });
});

app.listen(PORT, () => {
    console.log(`Control panel actively listening on port ${PORT}`);
});