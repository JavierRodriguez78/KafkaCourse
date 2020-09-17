const kafka = require('kafka-node');
const client = new kafka.KafkaClient({kafkaHost:'localhost:19092'})

let producer = new kafka.HighLevelProducer(client);


let json={
    "Nombre":"Xavi",
    "Apellidos":"Rodríguez Soler"};

producer.on('ready',()=>{
    setInterval(()=>{
        producer.send([
            {topic:'alta-usuario',messages:JSON.stringify(json)}
        ]
        ,(err,data)=>console.log({Error: err, Data: data})
    );
    },5);
})