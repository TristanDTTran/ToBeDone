class Task {
    #task_text;
    #completed;

    constructor(task_text) {
        this.#task_text = task_text;
        this.#completed = false;
    }

    set_task_text(text) {
        this.#task_text = text
    }
}