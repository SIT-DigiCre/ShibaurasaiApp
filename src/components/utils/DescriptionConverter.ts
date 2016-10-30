import showdown = require("showdown");

export class DescriptionConverterGenerator {
    static getConverter(): showdown.Converter {
        const fc2wikibold_extension: { [key: string]: showdown.ShowdownExtension } = {
            "bold": {
                type: "lang",
                regex: /&bold\(\){([^}]*)}/g,
                replace: (match, prefix) => {
                    return "<b>" + prefix + "</b>";
                }
            },
            "br": {
                type: "lang",
                regex: /&br;/g,
                replace: "<br/>"
            },
            "big": {
                type: "lang",
                regex: /&big\(\){([^}]*)}/g,
                replace: (match, prefix) => {
                    return "Big: " + prefix; // TODO: 文字を大きくする方法を考える
                }
            }
        };
        const converter = new showdown.Converter();
        for (let ext_name in fc2wikibold_extension) {
            converter.addExtension(fc2wikibold_extension[ext_name], ext_name);
        }
        return converter;
    }
}
