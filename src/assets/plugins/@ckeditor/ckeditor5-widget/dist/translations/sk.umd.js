/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'sk' ]: { dictionary, getPluralForm } } = {"sk":{"dictionary":{"Widget toolbar":"Panel nástrojov ovládacieho prvku","Insert paragraph before block":"Vložiť odstavec pred blok","Insert paragraph after block":"Vložiť odstavec za blok","Press Enter to type after or press Shift + Enter to type before the widget":"Stlačte Enter, ak chcete písať po miniaplikácii, alebo stlačte Shift + Enter, ak chcete písať pred miniaplikáciou","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Klávesy, ktoré sa dajú použiť, keď je vybratý widget (napríklad obrázok alebo tabuľka)","Insert a new paragraph directly after a widget":"Vložiť nový odsek priamo za widgetom","Insert a new paragraph directly before a widget":"Vložiť nový odsek priamo pred widgetom","Move the caret to allow typing directly before a widget":"Presunúť striešku priamo pred widget, aby ste tam mohli písať","Move the caret to allow typing directly after a widget":"Presunúť striešku priamo za widget, aby ste tam mohli písať","Move focus from an editable area back to the parent widget":"Presuňte zameranie z upraviteľnej oblasti späť na rodičovskú miniaplikáciu"},getPluralForm(n){return (n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);}}};
e[ 'sk' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'sk' ].dictionary = Object.assign( e[ 'sk' ].dictionary, dictionary );
e[ 'sk' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
