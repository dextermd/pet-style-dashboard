/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'pt-br' ]: { dictionary, getPluralForm } } = {"pt-br":{"dictionary":{"Bold":"Negrito","Italic":"Itálico","Underline":"Sublinhado","Code":"Código","Strikethrough":"Tachado","Subscript":"Subscrito","Superscript":"Sobrescrito","Italic text":"Texto em itálico","Move out of an inline code style":"Sair de um estilo de código inline","Bold text":"Texto em negrito","Underline text":"Texto sublinhado","Strikethrough text":"Texto com riscado"},getPluralForm(n){return (n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;}}};
e[ 'pt-br' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'pt-br' ].dictionary = Object.assign( e[ 'pt-br' ].dictionary, dictionary );
e[ 'pt-br' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );