/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'ca' ]: { dictionary, getPluralForm } } = {"ca":{"dictionary":{"Special characters":"Caràcters especials","All":"Tot","Arrows":"Fletxes","Currency":"Moneda","Latin":"Llatí","Mathematical":"Matemàtic","Text":"Text","leftwards simple arrow":"fletxa simple cap a l'esquerra","rightwards simple arrow":"fletxa simple cap a la dreta","upwards simple arrow":"fletxa simple cap amunt","downwards simple arrow":"fletxa simple cap avall","leftwards double arrow":"fletxa doble cap a l'esquerra","rightwards double arrow":"fletxa doble cap a la dreta","upwards double arrow":"fletxa doble cap amunt","downwards double arrow":"fletxa doble cap avall","leftwards dashed arrow":"fletxa discontínua cap a l'esquerra","rightwards dashed arrow":"fletxa discontínua cap a la dreta","upwards dashed arrow":"fletxa discontínua cap amunt","downwards dashed arrow":"fletxa discontínua cap avall","leftwards arrow to bar":"fletxa cap a la barra de l'esquerra","rightwards arrow to bar":"fletxa cap a la barra de la dreta","upwards arrow to bar":"fletxa cap a la barra de dalt","downwards arrow to bar":"fletxa cap a la barra de sota","up down arrow with base":"fletxa cap amunt i cap avall amb base","back with leftwards arrow above":"back amb fletxa cap a l'esquerra per sobre","end with leftwards arrow above":"end amb fletxa cap a l'esquerra per sobre","on with exclamation mark with left right arrow above":"on amb el signe d'exclamació i fletxa cap a l'esquerra i cap a la dreta per sobre","soon with rightwards arrow above":"soon amb fletxa cap a la dreta per sobre","top with upwards arrow above":"top amb fletxa cap amunt per sobre","Dollar sign":"signe del dòlar","Euro sign":"signe de l'euro","Yen sign":"signe del ien","Pound sign":"signe de la lliura","Cent sign":"signe del cèntim","Euro-currency sign":"signe de l'eurodivisa","Colon sign":"signe del còlon","Cruzeiro sign":"signe del cruzeiro","French franc sign":"signe del franc francès","Lira sign":"signe de la lira","Currency sign":"signe de divisa","Bitcoin sign":"signe del bitcoin","Mill sign":"signe del mill","Naira sign":"signe de la naira","Peseta sign":"signe de la pesseta","Rupee sign":"signe de la rupia","Won sign":"signe del won","New sheqel sign":"signe del nou xéquel","Dong sign":"signe del dong","Kip sign":"signe del kip","Tugrik sign":"signe del tögrög","Drachma sign":"signe del dracma","German penny sign":"signe del cèntim alemany","Peso sign":"signe del peso","Guarani sign":"signe del guaraní","Austral sign":"signe de l'austral","Hryvnia sign":"signe de la hrívnia","Cedi sign":"ok","Livre tournois sign":"signe de la lliura tornesa","Spesmilo sign":"signe del spesmilo","Tenge sign":"signe del tenge","Indian rupee sign":"signe de la rupia índia","Turkish lira sign":"signe de la lira turca","Nordic mark sign":"Signe del marc nòrdic","Manat sign":"signe del manat","Ruble sign":"signe del ruble","Latin capital letter a with macron":"lletra llatina a majúscula amb màcron","Latin small letter a with macron":"lletra llatina a minúscula amb màcron","Latin capital letter a with breve":"lletra llatina a majúscula amb breu","Latin small letter a with breve":"lletra llatina a minúscula amb breu","Latin capital letter a with ogonek":"lletra llatina a majúscula amb ogonek","Latin small letter a with ogonek":"lletra llatina a minúscula amb ogonek","Latin capital letter c with acute":"lletra llatina c majúscula amb accent agut","Latin small letter c with acute":"lletra llatina c minúscula amb accent agut","Latin capital letter c with circumflex":"lletra llatina c majúscula amb accent circumflex","Latin small letter c with circumflex":"lletra llatina c minúscula amb accent circumflex","Latin capital letter c with dot above":"lletra llatina c majúscula amb un punt per sobre","Latin small letter c with dot above":"lletra llatina c minúscula amb un punt per sobre","Latin capital letter c with caron":"lletra llatina c majúscula amb anticircumflex","Latin small letter c with caron":"lletra llatina c minúscula amb anticircumflex","Latin capital letter d with caron":"lletra llatina d majúscula amb anticircumflex","Latin small letter d with caron":"lletra llatina d minúscula amb anticircumflex","Latin capital letter d with stroke":"lletra llatina d majúscula amb barra inscrita","Latin small letter d with stroke":"lletra llatina d minúscula amb barra inscrita","Latin capital letter e with macron":"lletra llatina e majúscula amb màcron","Latin small letter e with macron":"lletra llatina e minúscula amb màcron","Latin capital letter e with breve":"lletra llatina e majúscula amb breu","Latin small letter e with breve":"lletra llatina e minúscula amb breu","Latin capital letter e with dot above":"lletra llatina e majúscula amb un punt per sobre","Latin small letter e with dot above":"lletra llatina e minúscula amb un punt per sobre","Latin capital letter e with ogonek":"lletra llatina e majúscula amb ogonek","Latin small letter e with ogonek":"lletra llatina e minúscula amb ogonek","Latin capital letter e with caron":"lletra llatina e majúscula amb anticircumflex","Latin small letter e with caron":"lletra llatina e minúscula amb anticircumflex","Latin capital letter g with circumflex":"lletra llatina g majúscula amb accent circumflex","Latin small letter g with circumflex":"lletra llatina g minúscula amb accent circumflex","Latin capital letter g with breve":"lletra llatina g majúscula amb breu","Latin small letter g with breve":"lletra llatina g minúscula amb breu","Latin capital letter g with dot above":"lletra llatina g majúscula amb un punt per sobre","Latin small letter g with dot above":"lletra llatina g minúscula amb un punt per sobre","Latin capital letter g with cedilla":"lletra llatina g majúscula amb trenc","Latin small letter g with cedilla":"lletra llatina g minúscula amb trenc","Latin capital letter h with circumflex":"lletra llatina h majúscula amb accent circumflex","Latin small letter h with circumflex":"lletra llatina h minúscula amb accent circumflex","Latin capital letter h with stroke":"lletra llatina h majúscula amb barra inscrita","Latin small letter h with stroke":"lletra llatina h minúscula amb barra inscrita","Latin capital letter i with tilde":"lletra llatina i majúscula amb titlla","Latin small letter i with tilde":"lletra llatina i minúscula amb titlla","Latin capital letter i with macron":"lletra llatina i majúscula amb màcron","Latin small letter i with macron":"lletra llatina i minúscula amb màcron","Latin capital letter i with breve":"lletra llatina i majúscula amb breu","Latin small letter i with breve":"lletra llatina i minúscula amb breu","Latin capital letter i with ogonek":"lletra llatina i majúscula amb ogonek","Latin small letter i with ogonek":"lletra llatina i minúscula amb ogonek","Latin capital letter i with dot above":"lletra llatina i majúscula amb un punt per sobre","Latin small letter dotless i":"lletra llatina i sense punt minúscula","Latin capital ligature ij":"lligadura llatina ij majúscula","Latin small ligature ij":"lligadura llatina ij minúscula","Latin capital letter j with circumflex":"lletra llatina i majúscula amb circumflex","Latin small letter j with circumflex":"lletra llatina i minúscula amb circumflex","Latin capital letter k with cedilla":"lletra llatina k majúscula amb trenc","Latin small letter k with cedilla":"lletra llatina k minúscula amb trenc","Latin small letter kra":"lletra llatina kra minúscula","Latin capital letter l with acute":"lletra llatina l majúscula amb accent agut","Latin small letter l with acute":"lletra llatina l minúscula amb accent agut","Latin capital letter l with cedilla":"lletra llatina l majúscula amb trenc","Latin small letter l with cedilla":"lletra llatina l minúscula amb trenc","Latin capital letter l with caron":"lletra llatina l majúscula amb anticircumflex","Latin small letter l with caron":"lletra llatina l minúscula amb anticircumflex","Latin capital letter l with middle dot":"lletra llatina l majúscula amb punt volat","Latin small letter l with middle dot":"lletra llatina l minúscula amb punt volat","Latin capital letter l with stroke":"lletra llatina l majúscula amb barra inscrita","Latin small letter l with stroke":"lletra llatina l minúscula amb barra inscrita","Latin capital letter n with acute":"lletra llatina n majúscula amb accent agut","Latin small letter n with acute":"lletra llatina n minúscula amb accent agut","Latin capital letter n with cedilla":"lletra llatina n majúscula amb trenc","Latin small letter n with cedilla":"lletra llatina n minúscula amb trenc","Latin capital letter n with caron":"lletra llatina n majúscula amb anticircumflex","Latin small letter n with caron":"lletra llatina n minúscula amb anticircumflex","Latin small letter n preceded by apostrophe":"Lletra llatina n minúscula precedida d'apòstrof","Latin capital letter eng":"lletra llatina eng majúscula","Latin small letter eng":"lletra llatina eng minúscula","Latin capital letter o with macron":"lletra llatina o majúscula amb màcron","Latin small letter o with macron":"lletra llatina o minúscula amb màcron","Latin capital letter o with breve":"lletra llatina o majúscula amb breu","Latin small letter o with breve":"lletra llatina o minúscula amb breu","Latin capital letter o with double acute":"lletra llatina o majúscula amb accent agut doble","Latin small letter o with double acute":"lletra llatina o minúscula amb accent agut doble","Latin capital ligature oe":"lligadura llatina oe majúscula","Latin small ligature oe":"lligadura llatina oe minúscula","Latin capital letter r with acute":"lletra llatina r majúscula amb accent agut","Latin small letter r with acute":"lletra llatina r minúscula amb accent agut","Latin capital letter r with cedilla":"lletra llatina r majúscula amb trenc","Latin small letter r with cedilla":"lletra llatina r minúscula amb trenc","Latin capital letter r with caron":"lletra llatina r majúscula amb anticircumflex","Latin small letter r with caron":"lletra llatina r minúscula amb anticircumflex","Latin capital letter s with acute":"lletra llatina s majúscula amb accent agut","Latin small letter s with acute":"lletra llatina s minúscula amb accent agut","Latin capital letter s with circumflex":"lletra llatina s majúscula amb accent circumflex","Latin small letter s with circumflex":"lletra llatina s minúscula amb accent circumflex","Latin capital letter s with cedilla":"lletra llatina s majúscula amb trenc","Latin small letter s with cedilla":"lletra llatina s minúscula amb trenc","Latin capital letter s with caron":"lletra llatina s majúscula amb anticircumflex","Latin small letter s with caron":"lletra llatina s minúscula amb anticircumflex","Latin capital letter t with cedilla":"lletra llatina t majúscula amb trenc","Latin small letter t with cedilla":"lletra llatina t minúscula amb trenc","Latin capital letter t with caron":"lletra llatina t majúscula amb anticircumflex","Latin small letter t with caron":"lletra llatina t minúscula amb anticircumflex","Latin capital letter t with stroke":"lletra llatina t majúscula amb barra inscrita","Latin small letter t with stroke":"lletra llatina t minúscula amb barra inscrita","Latin capital letter u with tilde":"lletra llatina u majúscula amb titlla","Latin small letter u with tilde":"lletra llatina u minúscula amb titlla","Latin capital letter u with macron":"lletra llatina u majúscula amb màcron","Latin small letter u with macron":"lletra llatina u minúscula amb màcron","Latin capital letter u with breve":"lletra llatina u majúscula amb breu","Latin small letter u with breve":"lletra llatina u minúscula amb breu","Latin capital letter u with ring above":"lletra llatina u majúscula amb anell per sobre","Latin small letter u with ring above":"lletra llatina u minúscula amb anell per sobre","Latin capital letter u with double acute":"lletra llatina u majúscula amb accent agut doble","Latin small letter u with double acute":"lletra llatina u minúscula amb accent agut doble","Latin capital letter u with ogonek":"lletra llatina u majúscula amb ogonek","Latin small letter u with ogonek":"lletra llatina u minúscula amb ogonek","Latin capital letter w with circumflex":"lletra llatina w majúscula amb accent circumflex","Latin small letter w with circumflex":"lletra llatina w minúscula amb accent circumflex","Latin capital letter y with circumflex":"lletra llatina y majúscula amb accent circumflex","Latin small letter y with circumflex":"lletra llatina y minúscula amb accent circumflex","Latin capital letter y with diaeresis":"lletra llatina y majúscula amb dièresi","Latin capital letter z with acute":"lletra llatina z majúscula amb accent agut","Latin small letter z with acute":"lletra llatina z minúscula amb accent agut","Latin capital letter z with dot above":"lletra llatina z majúscula amb un punt per sobre","Latin small letter z with dot above":"lletra llatina z minúscula amb un punt per sobre","Latin capital letter z with caron":"lletra llatina z majúscula amb anticircumflex","Latin small letter z with caron":"lletra llatina z minúscula amb anticircumflex","Latin small letter long s":"lletra llatina s llarga minúscula","Less-than sign":"signe de més petit que","Greater-than sign":"signe de més gran que","Less-than or equal to":"més petit o igual que","Greater-than or equal to":"més gran o igual que","En dash":"Guió mitjà","Em dash":"Guió llarg","Macron":"Màcron","Overline":"Sobrelínia","Degree sign":"Signe del grau","Minus sign":"Signe de menys","Plus-minus sign":"Signe de més o menys","Division sign":"Signe de divisió","Fraction slash":"Barra obliqua de fracció","Multiplication sign":"Signe de multiplicació","Latin small letter f with hook":"lletra llatina f minúscula amb cua","Integral":"Integral","N-ary summation":"Suma n-ària","Infinity":"Infinit","Square root":"Arrel quadrada","Tilde operator":"Operador de titlla","Approximately equal to":"Aproximadament igual a","Almost equal to":"Gairebé igual a","Not equal to":"No igual a","Identical to":"Idèntic a","Element of":"Element de","Not an element of":"No és un element de","Contains as member":"Conté com a membre","N-ary product":"Producte de n-ària","Logical and":"Conjunció lògica","Logical or":"Disjunció lògica","Not sign":"Negació lògica","Intersection":"Intersecció","Union":"Unió","Partial differential":"Derivada parcial","For all":"Per a tot","There exists":"Quantificador existencial","Empty set":"Conjunt buit","Nabla":"Gradient","Asterisk operator":"Operador d'asterisc","Proportional to":"Proporcional a","Angle":"Angle","Vulgar fraction one quarter":"Fracció comuna d'un quart","Vulgar fraction one half":"Fracció comuna d'una meitat","Vulgar fraction three quarters":"Fracció comuna de tres quarts","Single left-pointing angle quotation mark":"Cometa angular simple cap a l'esquerra","Single right-pointing angle quotation mark":"Cometa angular simple cap a la dreta","Left-pointing double angle quotation mark":"Cometes angulars dobles cap a l'esquerra","Right-pointing double angle quotation mark":"Cometes angulars dobles cap a la dreta","Left single quotation mark":"Cometa simple cap a l'esquerra","Right single quotation mark":"Cometa simple cap a la dreta","Left double quotation mark":"Cometes dobles a l'esquerra","Right double quotation mark":"Cometes dobles a la dreta","Single low-9 quotation mark":"Cometes simples inferiors","Double low-9 quotation mark":"Cometes dobles inferiors","Inverted exclamation mark":"Signe d'exclamació invertit","Inverted question mark":"Signe d'interrogació invertit","Two dot leader":"Dos punts horitzontals","Horizontal ellipsis":"Punts suspensius","Double dagger":"Doble obelisc o diesi","Per mille sign":"Signe de per mil","Per ten thousand sign":"Signe de per deu mil","Double exclamation mark":"Doble signe d'exclamació","Question exclamation mark":"Signe d'exclamació d'interrogació","Exclamation question mark":"Signe d'interrogació d'exclamació","Double question mark":"Doble signe d'interrogació","Copyright sign":"Signe de drets d'autor","Registered sign":"Signe de marca registrada","Trade mark sign":"Signe de marca comercial","Section sign":"Signe de secció","Paragraph sign":"Signe de paràgraf","Reversed paragraph sign":"Signe de paràgraf invertit","Character categories":"Categories de caràcters"},getPluralForm(n){return (n != 1);}}};
e[ 'ca' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'ca' ].dictionary = Object.assign( e[ 'ca' ].dictionary, dictionary );
e[ 'ca' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
