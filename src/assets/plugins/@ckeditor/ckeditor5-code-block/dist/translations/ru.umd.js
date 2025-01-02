/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'ru' ]: { dictionary, getPluralForm } } = {"ru":{"dictionary":{"Insert code block":"Вставить код","Plain text":"Простой текст","Leaving %0 code snippet":"Оставляем фрагмент кода %0","Entering %0 code snippet":"Ввод фрагмента кода %0","Entering code snippet":"Ввод фрагмента кода","Leaving code snippet":"Оставляем фрагмент кода","Code block":"Блок кодов"},getPluralForm(n){return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);}}};
e[ 'ru' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'ru' ].dictionary = Object.assign( e[ 'ru' ].dictionary, dictionary );
e[ 'ru' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );