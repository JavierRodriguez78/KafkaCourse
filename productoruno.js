const kafka = require('kafka-node');
const client = new kafka.KafkaClient({kafkaHost:'localhost:19092'})

let producer = new kafka.Producer(client);

let json={
    "Nombre":"Xavi1",
    "Apellidos":"Rodríguez Soler"};

producer.on('ready',()=>{
    setInterval(()=>{
        producer.send([
            {topic:'chat',messages:JSON.stringify(json)}
        ]
        ,(err,data)=>console.log({Error: err, Data: data})
    );
    },2000);
})