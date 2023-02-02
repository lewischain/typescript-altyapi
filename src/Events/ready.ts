import { Events } from "../Interfaces";
import { info } from "../Chalk"

export const Event : Events = {
    name: "ready",
    once: false,
    run: (client) => {
        info(`Aktif: ${client.user?.tag}`)
    }
}