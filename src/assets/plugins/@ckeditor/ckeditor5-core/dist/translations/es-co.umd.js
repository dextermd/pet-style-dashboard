/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'es-co' ]: { dictionary, getPluralForm } } = {"es-co":{"dictionary":{"Cancel":"Cancelar","Clear":"","Remove color":"Quitar color","Restore default":"Restaurar valores predeterminados","Save":"Guardar","Show more items":"Mostrar más elementos","%0 of %1":"%0 de %1","Cannot upload file:":"No se pudo cargar el archivo:","Rich Text Editor. Editing area: %0":"Editor de texto enriquecido. Área de edición: %0","Insert with file manager":"","Replace with file manager":"","Insert image with file manager":"","Replace image with file manager":"","File":"","With file manager":"","Toggle caption off":"","Toggle caption on":"","Content editing keystrokes":"","These keyboard shortcuts allow for quick access to content editing features.":"","User interface and content navigation keystrokes":"","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"","Close contextual balloons, dropdowns, and dialogs":"","Open the accessibility help dialog":"","Move focus between form fields (inputs, buttons, etc.)":"","Move focus to the menu bar, navigate between menu bars":"","Move focus to the toolbar, navigate between toolbars":"","Navigate through the toolbar or menu bar":"","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"","Accept":""},getPluralForm(n){return n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;}}};
e[ 'es-co' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'es-co' ].dictionary = Object.assign( e[ 'es-co' ].dictionary, dictionary );
e[ 'es-co' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
