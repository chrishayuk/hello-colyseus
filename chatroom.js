import {Room} from "colyseus";

export default class ChatRoom extends Room{
    onCreate(options){
        console.log("ChatRoom created!!!!");

        this.onMessage("message", (client,data) => {
            this.broadcast("message", data);
        });
    }

    onDispose(options){
        console.log("ChatRoom destroyed!!!!");
    }

    onJoin(client){
        //console.log(`client ${client.sessionId} joined the room`);
        //this.broadcast("message",`${client.sessionId} joined the room`);
    }

    onLeave(client){
        //console.log(`client ${client.sessionId} left the room`);
        //this.broadcast("message",`${client.sessionId} left the room`);
    }
}