import handlebars from "handlebars";
import { welcomeMessage } from "..//templates/wcf";


export function compilerWcf(otp_code: number, name: string) {
    const template = handlebars.compile(welcomeMessage);
    const htmlBody = template({
        otp: otp_code,
        name: name,
    });
    return htmlBody;
}
