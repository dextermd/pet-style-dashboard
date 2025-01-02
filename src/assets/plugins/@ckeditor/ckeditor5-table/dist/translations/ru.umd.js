/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'ru' ]: { dictionary, getPluralForm } } = {"ru":{"dictionary":{"Insert table":"Вставить таблицу","Header column":"Столбец заголовков","Insert column left":"Вставить столбец слева","Insert column right":"Вставить столбец справа","Delete column":"Удалить столбец","Select column":"Выбрать столбец","Column":"Столбец","Header row":"Строка заголовков","Insert row below":"Вставить строку ниже","Insert row above":"Вставить строку выше","Delete row":"Удалить строку","Select row":"Выбрать строку","Row":"Строка","Merge cell up":"Объединить с ячейкой сверху","Merge cell right":"Объединить с ячейкой справа","Merge cell down":"Объединить с ячейкой снизу","Merge cell left":"Объединить с ячейкой слева","Split cell vertically":"Разделить ячейку вертикально","Split cell horizontally":"Разделить ячейку горизонтально","Merge cells":"Объединить ячейки","Table toolbar":"Панель инструментов таблицы","Table properties":"Свойства таблицы","Cell properties":"Свойства ячейки","Border":"Граница","Style":"Стиль","Width":"Ширина","Height":"Высота","Color":"Цвет","Background":"Фон","Padding":"Отступ","Dimensions":"Размеры","Table cell text alignment":"Выравнивание текста в ячейке таблицы","Alignment":"Выравнивание","Horizontal text alignment toolbar":"Панель инструментов горизонтального выравнивания текста","Vertical text alignment toolbar":"Панель инструментов вертикального выравнивания текста","Table alignment toolbar":"Панель инструментов выравнивания таблицы","None":"Нет","Solid":"Сплошная","Dotted":"Точечная","Dashed":"Пунктирная","Double":"Двойная","Groove":"Желобчатая","Ridge":"Ребристая","Inset":"Вдавленная","Outset":"Выпуклая","Align cell text to the left":"Выровнять текст по левому краю","Align cell text to the center":"Выровнять текст по центру","Align cell text to the right":"Выровнять текст по правому краю","Justify cell text":"Выровнять текст по ширине","Align cell text to the top":"Выровнять текст ячейки по верхнему краю","Align cell text to the middle":"Выровнять текст ячейки по центру","Align cell text to the bottom":"Выровнять текст ячейки по нижнему краю","Align table to the left":"Выровнять таблицу по левому краю","Center table":"Выровнять таблицу по центру","Align table to the right":"Выровнять таблицу по правому краю","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"Неверный цвет. Попробуйте \"#FF0000\" или \"rgb(255,0,0)\" или \"red\".","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"Неверное значение. Попробуйте \"10px\" или \"2em\" или просто \"2\".","Color picker":"Выбор цвета","Enter table caption":"Подпись таблицы","Keystrokes that can be used in a table cell":"Нажатия клавиш, которые можно использовать в ячейке таблицы","Move the selection to the next cell":"Переместить выделение в следующую ячейку","Move the selection to the previous cell":"Переместить выделение на предыдущую ячейку","Insert a new table row (when in the last cell of a table)":"Вставить новую строку таблицы (в последней ячейке таблицы)","Navigate through the table":"Навигация по таблице","Table":"Таблица"},getPluralForm(n){return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);}}};
e[ 'ru' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'ru' ].dictionary = Object.assign( e[ 'ru' ].dictionary, dictionary );
e[ 'ru' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
