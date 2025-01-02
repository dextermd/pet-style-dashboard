/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Returns a plain text representation of an element and its children.
 *
 * @returns Plain text representing the model's data.
 */
export function modelElementToPlainText(item) {
    if (item.is('$text') || item.is('$textProxy')) {
        return item.data;
    }
    const element = item;
    let text = '';
    let prev = null;
    for (const child of element.getChildren()) {
        const childText = modelElementToPlainText(child);
        // If last block was finish, start from new line.
        if (prev && prev.is('element')) {
            text += '\n';
        }
        text += childText;
        prev = child;
    }
    return text;
}