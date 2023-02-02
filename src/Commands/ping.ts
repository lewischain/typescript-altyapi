import { codeBlock, EmbedBuilder } from "discord.js";
import { Commands } from "../Interfaces";

export const Command : Commands = {
    name: "ping",
    description: "RomanBot'un gecikme değerlerini gösterir.",

    run(client, message, args) {
        const date : number = Date.now();

        return message.reply({
            embeds: [
                new EmbedBuilder()
                .setColor("Blue")
                .setAuthor({ name: message.author.tag, iconURL: message.author.avatarURL()?.toString() })
                .setTitle("İstatistik Sekmesi")
                .setDescription(client.user?.username+"'un gecikme değerlerini ölçmek için veya bilgi edinmek için aşağıdaki bilgiler sana yardımcı olabilir.")
                .setThumbnail(message.author.avatarURL())
                .addFields([
                    {
                        name: "Discord API;",
                        value: `${codeBlock("yaml", `${client.ws.ping}ms`)}`,
                        inline: true
                    },
                    {
                        name: "Mesaj gecikmesi;",
                        value: `${codeBlock("yaml", `${(Date.now() - date).toString()}ms`)}`,
                        inline: true
                    },
                    {
                        name: "Mongo Atlas;",
                        value: `${codeBlock("diff", `+ Bağlı`)}`,
                        inline: true
                    }
                ])
            ]
        });
    },
}