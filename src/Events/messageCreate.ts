import { Events } from "../Interfaces";
import config from "../config.json";

export const Event : Events = {
    name: "messageCreate",
    once: false,

    run: (client, message) => {
        try {
            if(message.author.bot) return;
            if(!message.guild) return;

            if(!message.content.startsWith(config.prefix)) return;

            const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
            const cmd = client.commands.get(args.shift().toLowerCase());

            if(cmd) {
                return cmd.run(client, message, args)
            } 
        } catch (err) {
            throw err;
        }
    }
}