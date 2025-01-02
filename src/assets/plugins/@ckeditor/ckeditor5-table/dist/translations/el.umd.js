/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'el' ]: { dictionary, getPluralForm } } = {"el":{"dictionary":{"Insert table":"Εισαγωγή πίνακα","Header column":"Στήλη κεφαλίδας","Insert column left":"Εισαγωγή στήλης αριστερά","Insert column right":"Εισαγωγή στήλης δεξιά","Delete column":"Διαγραφή στήλης","Select column":"Επιλογή στήλης","Column":"Στήλη","Header row":"Γραμμή κεφαλίδας","Insert row below":"Εισαγωγή γραμμής κάτω","Insert row above":"Εισαγωγή γραμμής πάνω","Delete row":"Διαγραφή γραμμής","Select row":"Επιλογή γραμμής","Row":"Γραμμή","Merge cell up":"Συγχώνευση κελιού πάνω","Merge cell right":"Συγχώνευση κελιού δεξιά","Merge cell down":"Συγχώνευση κελιού κάτω","Merge cell left":"Συγχώνευση κελιού αριστερά","Split cell vertically":"Διαχωρισμός κελιού κάθετα","Split cell horizontally":"Διαχωρισμός κελιού οριζόντια","Merge cells":"Συγχώνευση κελιών","Table toolbar":"Γραμμή εργαλείων πίνακα","Table properties":"Ιδιότητες πίνακα","Cell properties":"Ιδιότητες κελιού","Border":"Περίγραμμα","Style":"Στυλ","Width":"Πλάτος","Height":"Ύψος","Color":"Χρώμα","Background":"Υπόβαθρο","Padding":"Απόσταση κειμένου από το περίγραμμα","Dimensions":"Διαστάσεις","Table cell text alignment":"Στοίχιση κειμένου κελιού πίνακα","Alignment":"Στοίχιση","Horizontal text alignment toolbar":"Γραμμή εργαλείων οριζόντιας στοίχισης κειμένου","Vertical text alignment toolbar":"Γραμμή εργαλείων κάθετης στοίχισης κειμένου","Table alignment toolbar":"Γραμμή εργαλείων στοίχισης πίνακα","None":"Χωρίς περίγραμμα","Solid":"Συμπαγές","Dotted":"Διάστικτο","Dashed":"Με παύλες","Double":"Διπλό","Groove":"Βαθουλωτό","Ridge":"Ραχωτό","Inset":"Κείμενο με βάθος","Outset":"Κείμενο με ύψος","Align cell text to the left":"Στοίχιση κειμένου κελιού στα αριστερά","Align cell text to the center":"Στοίχιση κειμένου κελιού στο κέντρο","Align cell text to the right":"Στοίχιση κειμένου κελιού στα δεξιά","Justify cell text":"Πλήρης στοίχιση κειμένου κελιού","Align cell text to the top":"Στοίχιση κειμένου κελιού επάνω","Align cell text to the middle":"Στοίχιση κειμένου κελιού στο μέσο","Align cell text to the bottom":"Στοίχιση κειμένου κελιού κάτω","Align table to the left":"Στοίχιση πίνακα στα αριστερά","Center table":"Στοίχιση πίνακα στο κέντρο","Align table to the right":"Στοίχιση πίνακα στα δεξιά","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"Το χρώμα δεν είναι έγκυρο. Δοκιμάστε «#FF0000» ή «rgb(255,0,0)» ή «red».","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"Η τιμή δεν είναι έγκυρη. Δοκιμάστε «10px» ή «2em» ή απλά «2».","Color picker":"Επιλογέας χρώματος","Enter table caption":"Εισαγωγή λεζάντας πίνακα","Keystrokes that can be used in a table cell":"Πλήκτρα που μπορείτε να χρησιμοποιήσετε σε ένα κελί πίνακα","Move the selection to the next cell":"Μετακίνηση της επιλογής στο επόμενο κελί","Move the selection to the previous cell":"Μετακίνηση της επιλογής στο προηγούμενο κελί","Insert a new table row (when in the last cell of a table)":"Εισαγωγή νέας σειράς πίνακα (όταν βρίσκεται στο τελευταίο κελί ενός πίνακα)","Navigate through the table":"Πλοήγηση στον πίνακα","Table":"Πίνακας"},getPluralForm(n){return (n != 1);}}};
e[ 'el' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'el' ].dictionary = Object.assign( e[ 'el' ].dictionary, dictionary );
e[ 'el' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );