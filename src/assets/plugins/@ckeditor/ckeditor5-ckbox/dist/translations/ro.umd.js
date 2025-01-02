/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'ro' ]: { dictionary, getPluralForm } } = {"ro":{"dictionary":{"Open file manager":"Deschidere manager fișiere","Cannot determine a category for the uploaded file.":"Categoria fișierului încărcat nu poate fi stabilită.","Cannot access default workspace.":"Nu poți accesa spațiul de lucru implicit.","Edit image":"Editare imagine","Processing the edited image.":"Se procesează imaginea editată.","Server failed to process the image.":"Serverul nu a putut procesa imaginea.","Failed to determine category of edited image.":"Nu s-a putut determina categoria imaginii editate."},getPluralForm(n){return (n==1?0:(((n%100>19)||((n%100==0)&&(n!=0)))?2:1));}}};
e[ 'ro' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'ro' ].dictionary = Object.assign( e[ 'ro' ].dictionary, dictionary );
e[ 'ro' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
