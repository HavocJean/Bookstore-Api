import express from 'express';
import cors from 'cors';
import winston from 'winston';

const { combine, timestamp, label, printf } = winston.format;
const winstonFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.File)({ filename: "storebook-api.log" })
    ],
    format: combine(
        label({ label: "storebook-api" }),
        timestamp(),
        winstonFormat
    )
});

const app = express();
app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message })
});

app.listen(300, () => {
    console.log('server start');
});