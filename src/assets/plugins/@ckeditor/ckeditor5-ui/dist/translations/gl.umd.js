/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'gl' ]: { dictionary, getPluralForm } } = {"gl":{"dictionary":{"Rich Text Editor":"Editor de texto mellorado","Editor editing area: %0":"Área de edición do editor: %0","Edit block":"Editar bloque","Click to edit block":"Prema para editar o bloque","Drag to move":"Arrastre para mover","Next":"Seguinte","Previous":"Anterior","Editor toolbar":"Barra de ferramentas do editor","Dropdown toolbar":"Barra de ferramentas despregábel","Black":"Negro","Dim grey":"Gris fume","Grey":"Gris","Light grey":"Gris claro","White":"Branco","Red":"Vermello","Orange":"Laranxa","Yellow":"Amarelo","Light green":"Verde claro","Green":"Verde","Aquamarine":"Augamariña","Turquoise":"Turquesa","Light blue":"Azul claro","Blue":"Azul","Purple":"Púrpura","Editor block content toolbar":"Barra de ferramentas de contido do bloque do editor","Editor contextual toolbar":"Barra de ferramentas contextual do editor","HEX":"HEX","No results found":"Non se atoparon resultados","No searchable items":"Non hai elementos que se poidan buscar","Editor dialog":"","Close":"","Help Contents. To close this dialog press ESC.":"","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"","(may require <kbd>Fn</kbd>)":"","Accessibility":"","Accessibility help":"","Press %0 for help.":"","Move focus in and out of an active dialog window":"","MENU_BAR_MENU_FILE":"","MENU_BAR_MENU_EDIT":"Editar","MENU_BAR_MENU_VIEW":"","MENU_BAR_MENU_INSERT":"Inserir","MENU_BAR_MENU_FORMAT":"","MENU_BAR_MENU_TOOLS":"","MENU_BAR_MENU_HELP":"","MENU_BAR_MENU_TEXT":"Texto","MENU_BAR_MENU_FONT":"","Editor menu bar":"","Please enter a valid color (e.g. \"ff0000\").":""},getPluralForm(n){return (n != 1);}}};
e[ 'gl' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'gl' ].dictionary = Object.assign( e[ 'gl' ].dictionary, dictionary );
e[ 'gl' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
