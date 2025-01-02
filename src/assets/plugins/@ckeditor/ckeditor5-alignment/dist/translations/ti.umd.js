/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'ti' ]: { dictionary, getPluralForm } } = {"ti":{"dictionary":{"Align left":"ንጸጋም ኣመዓራርይ","Align right":"ንየማን ኣመዓራርይ","Align center":"ናብ ማእኸል ኣመዓራርይ","Justify":"ብማዕረ መጠን ናብ ኩሉ ኣንፈት ኣመዓራርይ","Text alignment":"ምዕረያ ጽሑፍ","Text alignment toolbar":"መካወኒ ምዕረያ ጽሑፍ"},getPluralForm(n){return (n > 1);}}};
e[ 'ti' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'ti' ].dictionary = Object.assign( e[ 'ti' ].dictionary, dictionary );
e[ 'ti' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );