/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'lt' ]: { dictionary, getPluralForm } } = {"lt":{"dictionary":{"Cancel":"Atšaukti","Clear":"Išvalyti","Remove color":"Pašalinti spalvą","Restore default":"Atkurti numatytuosius","Save":"Išsaugoti","Show more items":"Rodyti daugiau elementų","%0 of %1":"%0 iš %1","Cannot upload file:":"Negalima įkelti failo:","Rich Text Editor. Editing area: %0":"Raiškiojo teksto redaktorius. Redagavimo sritis: %0","Insert with file manager":"Įterpti naudojant failų tvarkyklę","Replace with file manager":"Pakeisti failų tvarkykle","Insert image with file manager":"Įterpti paveikslėlį naudojant failų tvarkyklę","Replace image with file manager":"Pakeisti paveikslėlį failų tvarkytuve","File":"Failas","With file manager":"Naudojant failų tvarkyklę","Toggle caption off":"Išjungti antraštę","Toggle caption on":"Įjungti antraštę","Content editing keystrokes":"Turinio redagavimo klavišų paspaudimai","These keyboard shortcuts allow for quick access to content editing features.":"Šie spartieji klavišai leidžia greitai pasiekti turinio redagavimo funkcijas.","User interface and content navigation keystrokes":"Naudotojo sąsajos ir turinio navigacijos klavišų paspaudimai","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Norėdami efektyviau naršyti po „CKEditor 5“ naudotojo sąsają, naudokite toliau nurodytus klavišų paspaudimus.","Close contextual balloons, dropdowns, and dialogs":"Uždaryti kontekstinius pranešimus, išskleidžiamuosius meniu ir dialogo langus","Open the accessibility help dialog":"Atidaryti prieinamumo pagalbos dialogo langą","Move focus between form fields (inputs, buttons, etc.)":"Perkelti fokusą tarp formos laukų (įvesčių, klavišų ir t. t.)","Move focus to the menu bar, navigate between menu bars":"Perkelti žymeklį į meniu juostą, naršyti tarp meniu juostų","Move focus to the toolbar, navigate between toolbars":"Perkelti fokusą į įrankių juostą, naršyti tarp įrankių juostų","Navigate through the toolbar or menu bar":"Naršykite po įrankių juostą arba meniu juostą","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Vykdyti šiuo metu sufokusuotą mygtuką. Vykdant su redaktoriaus turiniu sąveikaujančius mygtukus, fokusas yra perkeliamas atgal į turinį.","Accept":"Priimti"},getPluralForm(n){return (n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);}}};
e[ 'lt' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'lt' ].dictionary = Object.assign( e[ 'lt' ].dictionary, dictionary );
e[ 'lt' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
