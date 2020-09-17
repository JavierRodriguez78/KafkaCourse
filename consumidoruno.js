const kafka = require('kafka-node');
const client = new kafka.KafkaClient({kafkaHost:'localhost:29092'})

let consumer = new kafka.Consumer(client,[{topic:'alta-usuario'}]);

consumer.on('message',(message)=>{
    console.log("Recibiendo mensaje consumidor uno"+JSON.stringify(message));
})