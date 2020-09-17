const kafka = require('kafka-node');
const client = new kafka.KafkaClient({kafkaHost:'localhost:29092'})

const Offset = kafka.Offset;
let offset = new Offset(client);

let topic='alta-usuario';
offset.fetch([{topic: topic, partition:0, maxNum:2},
    {topic:topic, partition:1}],
    (err, offsets)=>console.log({Error: err, Offsets: JSON.stringify(offsets)}));
offset.commit('kafka-node-group',[{topic:topic, partition:0}], (err, result)=>console.log({Error:err, Resultado: JSON.stringify(result)}));
