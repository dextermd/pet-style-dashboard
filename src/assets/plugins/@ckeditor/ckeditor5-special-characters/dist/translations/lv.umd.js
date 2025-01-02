/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'lv' ]: { dictionary, getPluralForm } } = {"lv":{"dictionary":{"Special characters":"Speciālie simboli","All":"Visi","Arrows":"Bultas","Currency":"Valūta","Latin":"Latīņu","Mathematical":"Matemātisks","Text":"Teksts","leftwards simple arrow":"vienkāršā bulta pa kreisi","rightwards simple arrow":"vienkāršā bulta pa labi","upwards simple arrow":"vienkāršā bulta uz augšu","downwards simple arrow":"vienkāršā bulta lejup","leftwards double arrow":"pa kreisi vērstā dubultbultiņa","rightwards double arrow":"pa labi vērstā dubultbultiņa","upwards double arrow":"augšupvērsta dubultā bultiņa","downwards double arrow":"lejupvērsta dubultā bultiņa","leftwards dashed arrow":"pa kreisi vērstā partrauktā bultiņa","rightwards dashed arrow":"pa labi vērstā partrauktā bultiņa","upwards dashed arrow":"augšupvērsta pārtrauktā bultiņa","downwards dashed arrow":"lejupvērsta pārtrauktā bultiņa","leftwards arrow to bar":"pa kreisi vērstā bultiņa uz joslu","rightwards arrow to bar":"pa labi vērstā bultiņa uz joslu","upwards arrow to bar":"augšupvērsta bultiņa uz joslu","downwards arrow to bar":"lejupvērsta bultiņa uz joslu","up down arrow with base":"augšup-lejupvērsta bultiņa ar pamatni","back with leftwards arrow above":"atpakaļ ar kreisi vērstu bultiņu augšpusē","end with leftwards arrow above":"beigt ar kreisi vērstu bultiņu augšpusē","on with exclamation mark with left right arrow above":"ieslēgts ar izsaukuma zīmi ar kreiso-labo bultiņu augšpusē","soon with rightwards arrow above":"drīz ar uz labo pusi vērstu bultiņu augšpusē","top with upwards arrow above":"augšpusē ar augšupvērstu bultiņu augšpusē","Dollar sign":"Dolārzīme","Euro sign":"Eirozīme","Yen sign":"Jenas zīme","Pound sign":"Mārciņas zīme","Cent sign":"Centa zīme","Euro-currency sign":"Eiro valūtas zīme","Colon sign":"Kols","Cruzeiro sign":"Kruzeiro zīme","French franc sign":"Franču franka zīme","Lira sign":"Liras zīme","Currency sign":"Valūtas zīme","Bitcoin sign":"Bitkoina zīme","Mill sign":"Millas zīmes","Naira sign":"Nairas zīme","Peseta sign":"Pesetas zīme","Rupee sign":"Rūpijas zīme","Won sign":"Vonas zīme","New sheqel sign":"Šekeļa zīme","Dong sign":"Donga zīme","Kip sign":"Kipa zīme","Tugrik sign":"Tugrika zīme","Drachma sign":"Drahmas zīme","German penny sign":"Vācu santīma zīme","Peso sign":"Peso zīme","Guarani sign":"Guarani zīme","Austral sign":"Austrāla zīme","Hryvnia sign":"Grivnas zīme","Cedi sign":"Sedi zīme","Livre tournois sign":"Tours mārciņu zīme","Spesmilo sign":"Spesmilo zīme","Tenge sign":"Tenges zīme","Indian rupee sign":"Indijas rūpijas zīme","Turkish lira sign":"Turcijas liras zīme","Nordic mark sign":"Ziemeļu markas zīme","Manat sign":"Manata zīme","Ruble sign":"Rubļa zīme","Latin capital letter a with macron":"Latīņu lielais burts a ar garumzīmi","Latin small letter a with macron":"Latīņu mazais burts a ar garumzīmi","Latin capital letter a with breve":"Latīņu lielais burts a ar īsuma zīmi","Latin small letter a with breve":"Latīņu mazais burts a ar īsuma zīmi","Latin capital letter a with ogonek":"Latīņu lielais burts a ar ogoneku","Latin small letter a with ogonek":"Latīņu mazais burts a ar ogoneku","Latin capital letter c with acute":"Latīņu lielais burts c ar akūtu","Latin small letter c with acute":"Latīņu mazais burts c ar akūtu","Latin capital letter c with circumflex":"Latīņu lielais burts c ar cirkumfleksu","Latin small letter c with circumflex":"Latīņu mazais burts c ar cirkumfleksu","Latin capital letter c with dot above":"Latīņu lielais burts c ar punktu augšpusē","Latin small letter c with dot above":"Latīņu mazais burts c ar punktu augšpusē","Latin capital letter c with caron":"Latīņu lielais burts c ar karonu","Latin small letter c with caron":"Latīņu mazais burts c ar karonu","Latin capital letter d with caron":"Latīņu lielais burts d ar karonu","Latin small letter d with caron":"Latīņu mazais burts d ar karonu","Latin capital letter d with stroke":"Latīņu lielais burts d ar līniju","Latin small letter d with stroke":"Latīņu mazais burts d ar līniju","Latin capital letter e with macron":"Latīņu lielais burts e ar garumzīmi","Latin small letter e with macron":"Latīņu mazais burts e ar garumzīmi","Latin capital letter e with breve":"Latīņu lielais burts e ar īsuma zīmi","Latin small letter e with breve":"Latīņu mazais burts e ar īsuma zīmi","Latin capital letter e with dot above":"Latīņu lielais burts e ar punktu augšpusē","Latin small letter e with dot above":"Latīņu mazais burts e ar punktu augšpusē","Latin capital letter e with ogonek":"Latīņu lielais burts e ar ogoneku","Latin small letter e with ogonek":"Latīņu mazais burts e ar ogoneku","Latin capital letter e with caron":"Latīņu lielais burts e ar karonu","Latin small letter e with caron":"Latīņu mazais burts e ar karonu","Latin capital letter g with circumflex":"Latīņu lielais burts g ar cirkumfleksu","Latin small letter g with circumflex":"Latīņu mazais burts g ar cirkumfleksu","Latin capital letter g with breve":"Latīņu lielais burts g ar īsuma zīmi","Latin small letter g with breve":"Latīņu mazais burts g ar īsuma zīmi","Latin capital letter g with dot above":"Latīņu lielais burts g ar punktu augšpusē","Latin small letter g with dot above":"Latīņu mazais burts e ar punktu augšpusē","Latin capital letter g with cedilla":"Latīņu lielais burts g ar sediļu","Latin small letter g with cedilla":"Latīņu mazais burts g ar sediļu","Latin capital letter h with circumflex":"Latīņu lielais burts h ar cirkumfleksu","Latin small letter h with circumflex":"Latīņu mazais burts c ar cirkumfleksu","Latin capital letter h with stroke":"Latīņu lielais burts h ar līniju","Latin small letter h with stroke":"Latīņu mazais burts h ar līniju","Latin capital letter i with tilde":"Latīņu lielais burts i ar tildi","Latin small letter i with tilde":"Latīņu mazais burts i ar tildi","Latin capital letter i with macron":"Latīņu lielais burts i ar garumzīmi","Latin small letter i with macron":"Latīņu mazais burts i ar garumzīmi","Latin capital letter i with breve":"Latīņu lielais burts i ar īsuma zīmi","Latin small letter i with breve":"Latīņu mazais burts i ar īsuma zīmi","Latin capital letter i with ogonek":"Latīņu lielais burts i ar ogoneku","Latin small letter i with ogonek":"Latīņu mazais burts i ar ogoneku","Latin capital letter i with dot above":"Latīņu lielais burts i ar punktu augšpusē","Latin small letter dotless i":"Latīņu mazais bezpunkta burts i","Latin capital ligature ij":"Latīņu lielā ligatūra ij","Latin small ligature ij":"Latīņu mazā ligatūra ij","Latin capital letter j with circumflex":"Latīņu lielais burts j ar cirkumfleksu","Latin small letter j with circumflex":"Latīņu mazais burts j ar cirkumfleksu","Latin capital letter k with cedilla":"Latīņu lielais burts k ar sediļu","Latin small letter k with cedilla":"Latīņu mazais burts k ar sediļu","Latin small letter kra":"Latīņu mazais burts kra","Latin capital letter l with acute":"Latīņu lielais burts l ar akūtu","Latin small letter l with acute":"Latīņu mazais burts l ar akūtu","Latin capital letter l with cedilla":"Latīņu lielais burts l ar sediļu","Latin small letter l with cedilla":"Latīņu mazais burts l ar sediļu","Latin capital letter l with caron":"Latīņu lielais burts l ar karonu","Latin small letter l with caron":"Latīņu mazais burts l ar karonu","Latin capital letter l with middle dot":"Latīņu lielais burts l ar vidējo punktu","Latin small letter l with middle dot":"Latīņu mazais burts l ar vidējo punktu","Latin capital letter l with stroke":"Latīņu lielais burts l ar līniju","Latin small letter l with stroke":"Latīņu mazais burts l ar līniju","Latin capital letter n with acute":"Latīņu lielais burts n ar akūtu","Latin small letter n with acute":"Latīņu mazais burts n ar akūtu","Latin capital letter n with cedilla":"Latīņu lielais burts n ar sediļu","Latin small letter n with cedilla":"Latīņu mazais burts n ar sediļu","Latin capital letter n with caron":"Latīņu lielais burts n ar karonu","Latin small letter n with caron":"Latīņu mazais burts n ar karonu","Latin small letter n preceded by apostrophe":"Latīņu mazais burts n, pirms kura ir apostrofs","Latin capital letter eng":"Latīņu lielais burts eng","Latin small letter eng":"Latīņu mazais burts eng","Latin capital letter o with macron":"Latīņu lielais burts o ar garumzīmi","Latin small letter o with macron":"Latīņu mazais burts o ar garumzīmi","Latin capital letter o with breve":"Latīņu lielais burts o ar īsuma zīmi","Latin small letter o with breve":"Latīņu mazais burts o ar īsuma zīmi","Latin capital letter o with double acute":"Latīņu lielais burts o ar dubultu akūtu","Latin small letter o with double acute":"Latīņu mazais burts o ar dubultu akūtu","Latin capital ligature oe":"Latīņu lielā ligatūra oe","Latin small ligature oe":"Latīņu mazā ligatūra oe","Latin capital letter r with acute":"Latīņu lielais burts r ar akūtu","Latin small letter r with acute":"Latīņu mazais burts r ar akūtu","Latin capital letter r with cedilla":"Latīņu lielais burts r ar sediļu","Latin small letter r with cedilla":"Latīņu mazais burts r ar sediļu","Latin capital letter r with caron":"Latīņu lielais burts r ar karonu","Latin small letter r with caron":"Latīņu mazais burts r ar karonu","Latin capital letter s with acute":"Latīņu lielais burts s ar akūtu","Latin small letter s with acute":"Latīņu mazais burts s ar akūtu","Latin capital letter s with circumflex":"Latīņu lielais burts s ar cirkumfleksu","Latin small letter s with circumflex":"Latīņu mazais burts s ar cirkumfleksu","Latin capital letter s with cedilla":"Latīņu lielais burts s ar sediļu","Latin small letter s with cedilla":"Latīņu mazais burts s ar sediļu","Latin capital letter s with caron":"Latīņu lielais burts s ar karonu","Latin small letter s with caron":"Latīņu mazais burts s ar karonu","Latin capital letter t with cedilla":"Latīņu lielais burts t ar sediļu","Latin small letter t with cedilla":"Latīņu mazais burts t ar sediļu","Latin capital letter t with caron":"Latīņu lielais burts t ar karonu","Latin small letter t with caron":"Latīņu mazais burts t ar karonu","Latin capital letter t with stroke":"Latīņu lielais burts t ar līniju","Latin small letter t with stroke":"Latīņu mazais burts t ar līniju","Latin capital letter u with tilde":"Latīņu lielais burts u ar tildi","Latin small letter u with tilde":"Latīņu mazais burts u ar tildi","Latin capital letter u with macron":"Latīņu lielais burts u ar garumzīmi","Latin small letter u with macron":"Latīņu mazais burts u ar garumzīmi","Latin capital letter u with breve":"Latīņu lielais burts u ar īsuma zīmi","Latin small letter u with breve":"Latīņu mazais burts u ar īsuma zīmi","Latin capital letter u with ring above":"Latīņu lielais burts u ar gredzenu augšpusē","Latin small letter u with ring above":"Latīņu mazais burts u ar gredzenu augšpusē","Latin capital letter u with double acute":"Latīņu lielais burts u ar dubultu akūtu","Latin small letter u with double acute":"Latīņu mazais burts u ar dubultu akūtu","Latin capital letter u with ogonek":"Latīņu lielais burts u ar ogoneku","Latin small letter u with ogonek":"Latīņu mazais burts u ar ogoneku","Latin capital letter w with circumflex":"Latīņu lielais burts w ar cirkumfleksu","Latin small letter w with circumflex":"Latīņu mazais burts w ar cirkumfleksu","Latin capital letter y with circumflex":"Latīņu lielais burts y ar cirkumfleksu","Latin small letter y with circumflex":"Latīņu mazais burts y ar cirkumfleksu","Latin capital letter y with diaeresis":"Latīņu lielais burts y ar diaerēzi","Latin capital letter z with acute":"Latīņu lielais burts z ar akūtu","Latin small letter z with acute":"Latīņu mazais burts z ar akūtu","Latin capital letter z with dot above":"Latīņu lielais burts z ar punktu augšpusē","Latin small letter z with dot above":"Latīņu mazais burts z ar punktu augšpusē","Latin capital letter z with caron":"Latīņu lielais burts z ar karonu","Latin small letter z with caron":"Latīņu mazais burts z ar karonu","Latin small letter long s":"Latīņu mazais burts garais s","Less-than sign":"Mazāk nekā zīme","Greater-than sign":"Vairāk nekā zīme","Less-than or equal to":"Mazāks par vai vienāds ar","Greater-than or equal to":"Lielāks par vai vienāds ar","En dash":"Īsa domuzīme","Em dash":"Domuzīme","Macron":"Garumzīme","Overline":"Virssvītra","Degree sign":"Grādu zīme","Minus sign":"Mīnus zīme","Plus-minus sign":"Plus-mīnus zīme","Division sign":"Dalīšanas zīme","Fraction slash":"Dalīšanas slīpsvītra","Multiplication sign":"Reizināšanas zīme","Latin small letter f with hook":"Latīņu mazais burts f ar āķi","Integral":"Integrālis","N-ary summation":"N-āra summa","Infinity":"Bezgalība","Square root":"Kvadrātsakne","Tilde operator":"Tildes operators","Approximately equal to":"Aptuveni vienāds ar","Almost equal to":"Gandrīz vienāds ar","Not equal to":"Nav vienāds ar","Identical to":"Vienāds ar","Element of":"Elements no","Not an element of":"Nav elements","Contains as member":"Satur kā ","N-ary product":"N-ārs produkts","Logical and":"Loģisks un ","Logical or":"Loģisks vai","Not sign":"Aizlieguma zīme","Intersection":"Intersekcija","Union":"Savienība","Partial differential":"Daļējs diferenciālis","For all":"Visiem","There exists":"Eksistē","Empty set":"Tukša kopa","Nabla":"Nabla","Asterisk operator":"Asterisks","Proportional to":"Proporcionāls","Angle":"Stūris","Vulgar fraction one quarter":"Viena ceturtdaļa","Vulgar fraction one half":"Viena puse","Vulgar fraction three quarters":"Trīs ceturtdaļas","Single left-pointing angle quotation mark":"Pa kreisi vērsta stūrainā pēdiņa","Single right-pointing angle quotation mark":"Pa labi vērsta stūrainā pēdiņa","Left-pointing double angle quotation mark":"Pa kreisi vērstas dubultās stūrainās pēdiņas","Right-pointing double angle quotation mark":"Pa labi vērstas dubultās stūrainās pēdiņas","Left single quotation mark":"Viena kreisā pēdiņa","Right single quotation mark":"Viena labā pēdiņa","Left double quotation mark":"Kreisās dubultās pēdiņas","Right double quotation mark":"Labās dubultās pēdiņas","Single low-9 quotation mark":"Viena zemā-9 pēdiņās","Double low-9 quotation mark":"Dubultās zemās-9 pēdiņās","Inverted exclamation mark":"Apgriezta izsaukuma zīme","Inverted question mark":"Apgriezta jautājuma zīme","Two dot leader":"Divu punktu līderis","Horizontal ellipsis":"Horizontālā elipse","Double dagger":"Dubults duncis","Per mille sign":"Promiles zīme","Per ten thousand sign":"Desmit tūkstošās daļas zīme","Double exclamation mark":"Dubulta izsaukuma zīme","Question exclamation mark":"Jautājuma izsaukuma zīme","Exclamation question mark":"Izsaukuma jautājuma zīme","Double question mark":"Dubulta jautājumzīme","Copyright sign":"Autortiesību zīme","Registered sign":"Reģistrēta prečuzīmes zīme","Trade mark sign":"Prečuzīmes zīme","Section sign":"Sekcijas zīme","Paragraph sign":"Rindkopas zīme","Reversed paragraph sign":"Apgrieztā rindkopas zīme","Character categories":"Rakstzīmju kategorijas"},getPluralForm(n){return (n%10==1 && n%100!=11 ? 0 : n != 0 ? 1 : 2);}}};
e[ 'lv' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'lv' ].dictionary = Object.assign( e[ 'lv' ].dictionary, dictionary );
e[ 'lv' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );