import { Kafka } from "kafkajs";

export default new Kafka({
  clientId: "my-app",
  brokers: ["192.168.1.102:9092"], // kafka
});
