export default class Task {
    #task_text;
    #completed;
    //#page;

    constructor(task_text, page) {
        this.#task_text = task_text;
        this.#completed = false;
        //this.#page = page;
    }
}