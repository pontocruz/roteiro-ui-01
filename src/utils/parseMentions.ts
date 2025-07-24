export const parseMentionsToButtons = (text: string = '') => {
    return text.replace(
        /@\[(\d+)\|([^\]]+)\]/g,
        (match, id, name) =>
            `<button class="mention-btn" data-personagem-id="${id}">${name}</button>`
    );
};