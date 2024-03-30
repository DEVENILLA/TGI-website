export class research_data {
    title = "";
    author = "";
    category = "astro";
    content = null;
    thumbnail = null;
    date;

    constructor(_title, _author, _category, _content, _date, _thumbnail) {
        this.title = _title;
        this.author = _author;
        this.category = _category;
        this.content = _content;
        this.thumbnail = _thumbnail;
        this.date = _date;
    }

    toJSON() {
        return {
            title: this.title,
            author: this.author,
            category: this.category,
            content: this.content,
            thumbnail: this.thumbnail,
            date: this.date
        };
    }

    static fromJSON(json) {
        return new research_data(json.title, json.author, json.category, json.content, json.date, json.thumbnail);
    }
}

export function turn_research_to_json(research) {
    const jsonObject = research.toJSON();
    return JSON.stringify(jsonObject);
}

export function turn_json_to_research(json) {
    const jsonObject = JSON.parse(json);
    return research_data.fromJSON(jsonObject);
}