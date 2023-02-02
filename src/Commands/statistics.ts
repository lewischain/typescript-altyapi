import { codeBlock, EmbedBuilder } from "discord.js";
import { Commands } from "../Interfaces";

import { devDependencies, engines } from "../../package.json";

export const Command : Commands = {
    name: "istatistik",
    description: "RomanBot'un istatistik sekmesine erişebilirsin.",

    run:(client, message, args) => {

        const userSize : string = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString().replace(",", ".");
        const guildSize : string = client.guilds.cache.size.toLocaleString().replace(",", ".");

        message.reply({
            embeds: [
                new EmbedBuilder()
                .setColor("Blue")
                .setAuthor({ name: message.author.tag, iconURL: message.author.avatarURL()?.toString() })
                .setTitle("İstatistik Sekmesi")
                .setDescription(client.user?.username+" hakkında bir kaç bilgi edinmek istiyorsan aşağıdaki bilgiler sana yardımcı olabilir.")
                .setThumbnail(message.author.avatarURL())
                .addFields([
                    {
                        name: "Typescript sürümü;",
                        value: `${codeBlock("yaml", `v${devDependencies.typescript.replace("^", "")}`)}`,
                        inline: true
                    },
                    {
                        name: "Node.js sürümü;",
                        value: `${codeBlock("yaml", `${engines.node.replace("^", "")}`)}`,
                        inline: false
                    },
                    {
                        name: "Sunucu sayısı;",
                        value: `${codeBlock("yaml", `${guildSize}`)}`,
                        inline: true
                    },
                    {
                        name: "Kullanıcı sayısı;",
                        value: `${codeBlock("yaml", `${userSize}`)}`,
                        inline: true
                    }
                ])
            ]
        })
    }
}