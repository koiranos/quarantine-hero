(this["webpackJsonpquarantine-hero"]=this["webpackJsonpquarantine-hero"]||[]).push([[0],{47:function(e,t,n){e.exports=n(73)},52:function(e,t,n){},53:function(e,t,n){},62:function(e,t,n){e.exports=n.p+"static/media/logo.f5ab7345.png"},73:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(40),i=n.n(l),s=(n(52),n(53),n(14)),c=n(3),o=n(4),u=n(41),m=n(12),d=n.n(m),h=(n(29),n(54),n(55),n(56),{apiKey:"AIzaSyD_56raelEZfC-QpWyqeREePInKPM4u88I",authDomain:"quarantine-hero.firebaseapp.com",databaseURL:"https://quarantine-hero.firebaseio.com",projectId:"quarantine-hero",storageBucket:"quarantine-hero.appspot.com",messagingSenderId:"634343616076",appId:"1:634343616076:web:2aa2153615cd5123b38ee9",measurementId:"G-2PBE89H418"}),b=new function e(){Object(u.a)(this,e),d.a.initializeApp(h),this.app=d.a,this.auth=d.a.auth(),this.db=d.a.database(),this.analytics=d.a.analytics(),this.store=d.a.firestore()},f=n(46),g=n(75);function p(e){var t,n=e.showFullText,l=void 0!==n&&n,i=e.location,s=void 0===i?"":i,u=e.id,m=void 0===u?"":u,d=e.request,h=void 0===d?"":d,p=e.timestamp,E=void 0===p?Date.now():p,w=Object(f.a)(new Date(E),Date.now(),{locale:g.a}),v=Object(a.useState)(""),k=Object(c.a)(v,2),x=k[0],N=k[1];t=l?h:h.length>300?h.substring(0,300)+"...":h;return!x&&r.a.createElement(o.b,{to:"/offer-help/".concat(e.id),className:"shadow bg-white p-4 border border-gray-400 rounded w-full my-3 text-xl block",key:m},"Jemand in ",r.a.createElement("span",{className:"font-bold"},s)," braucht Hilfe!",r.a.createElement("p",{className:"italic mt-3"},t),r.a.createElement("br",null),r.a.createElement("span",{className:"text-gray-500 inline-block text-right w-full text-base"},"vor ",w),b.auth.currentUser&&b.auth.currentUser.uid===e.uid?r.a.createElement("div",null,r.a.createElement("button",{className:"btn-primary",onClick:function(t){t.preventDefault(),b.store.collection("/ask-for-help").doc(e.id).delete(),N(!0)}},"Deine Anfrage l\xf6schen.")):"")}function E(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),l=t[0],i=t[1],u=b.store.collection("ask-for-help").orderBy("d.timestamp","desc").limit(10);return Object(a.useEffect)((function(){u.get().then((function(e){i(e.docs.map((function(e){return Object(s.a)({},e.data().d,{id:e.id})})))}))}),[]),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"w-full flex flex-col justify-center items-center mt-16"},r.a.createElement("img",{src:n(62)}),r.a.createElement("p",{className:"text-xl py-4"},"Wir sind Menschen. In Zeiten der Not helfen wir uns.")),r.a.createElement("p",{className:"text-xl pt-2 pb-10"},"Unsere Plattform vermittelt Helfende an Personen, die Hilfe ben\xf6tigen.",r.a.createElement("br",null),r.a.createElement("br",null),"Viele Menschen befinden sich aktuell freiwillig oder notwendigerweise in h\xe4uslicher Quarant\xe4ne. Ihr k\xf6nnt diesen Menschen helfen! Auf unserer Seite quarant\xe4nehelden.de k\xf6nnt ihr sehen, wie ihr Mitmenschen in eurem Umfeld unterst\xfctzen k\xf6nnt.",r.a.createElement("br",null),r.a.createElement("br",null),"Und wenn ihr euch gerade in h\xe4uslicher Quarant\xe4ne befindet oder euer Zuhause nicht verlassen k\xf6nnt, findet ihr \xfcber diese Plattform Unterst\xfctzung. Stellt eure Anfrage und findet Helfende. Sie erledigen f\xfcr euch Eink\xe4ufe, Boteng\xe4nge oder gehen mit eurem Hund Gassi.",r.a.createElement("br",null),r.a.createElement("br",null),"Das geht ganz einfach. Wer Hilfe ben\xf6tigt, stellt eine Anfrage. Wer helfen m\xf6chte, guckt sich die Anfragen in seiner N\xe4he an und kann entscheiden, wo er/sie aktiv werden kann. Die Kontaktaufnahme l\xe4uft dann \xfcber diese Plattform.",r.a.createElement("br",null),r.a.createElement("br",null),"Tragt diese Infos bitte auch an andere weiter, die gerne helfe wollen oder die Hilfe von au\xdfen ben\xf6tigen!",r.a.createElement("br",null)),r.a.createElement("div",{className:"flex justify-between"},r.a.createElement(o.b,{to:"/overview",className:"font-bold py-8 px-4 rounded bg-primary text-center text-white flex-1 mr-4"},"Ich m\xf6chte helfen"),r.a.createElement(o.b,{to:"/signup",className:"font-bold py-8 px-4 rounded bg-primary text-center text-white flex-1"},"Ich brauche Hilfe")),l.map((function(e){return r.a.createElement(p,Object.assign({},e,{key:e.id}))}))))}var w=n(15),v=n(21);function k(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)(""),o=Object(c.a)(i,2),u=o[0],m=o[1],d=Object(a.useState)({id:null,location:null,request:null,timestamp:null}),h=Object(c.a)(d,2),f=h[0],g=h[1],E=Object(w.h)().id,k=Object(w.g)(),x=new v.GeoFirestore(b.store).collection("/ask-for-help");return Object(a.useEffect)((function(){x.doc(E).get().then((function(e){e.exists?(console.log("Document data:",e.data()),g(Object(s.a)({id:e.id},e.data()))):console.log("No such document!")}))}),[]),r.a.createElement("form",{onSubmit:function(e){return e.preventDefault(),b.store.collection("/ask-for-help/".concat(E,"/offer-help")).add({answer:n,email:u,timestamp:Date.now()}),k.push("/success-offer")}},r.a.createElement("div",{className:"mt-4 p-1"},r.a.createElement("label",{className:"text-base text-gray-700"},"Anfrage"),r.a.createElement(p,Object.assign({},f,{showFullText:!0}))),r.a.createElement("div",{className:"mt-4 p-1 w-full"},r.a.createElement("label",{className:"text-base text-gray-700"},"Deine Antwort"),r.a.createElement("textarea",{className:"border rounded border-gray-400 p-4 text-xl w-full",onChange:function(e){return l(e.target.value)},placeholder:"Ich kann helfen!"})),r.a.createElement("div",{className:"mt-4 p-1 w-full"},r.a.createElement("label",{className:"text-base text-gray-700"},"Deine E-Mail"),r.a.createElement("input",{className:"border rounded border-gray-400 p-4 text-xl w-full",type:"email",onChange:function(e){return m(e.target.value)},placeholder:"ich@helfer.de"})),r.a.createElement("div",{className:"mt-4 m-1 w-full"},"Wenn Sie das abschicken stimmen Sie zu, dass wir ihre Kontaktdaten an den Anfragensteller weiterleiten."),r.a.createElement("div",{className:"mt-4 m-1 w-full"},r.a.createElement("button",{type:"submit",className:"btn-primary"},"Senden")))}function x(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],l=t[1],i=b.store.collection("ask-for-help").where("d.uid","==",b.auth.currentUser?b.auth.currentUser.uid:"0");return Object(a.useEffect)((function(){i.get().then((function(e){var t=e.docs.map((function(e){return Object(s.a)({},e.data().d,{id:e.id})})).sort((function(e,t){return t.timestamp-e.timestamp}));l(t)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",{className:"text-2xl"},"Deine Hilfegesuche"),n.map((function(e){return r.a.createElement(p,Object.assign({},e,{key:e.id,owner:!0}))})))}function N(){return r.a.createElement("div",{className:"mb-10"},r.a.createElement("h1",{className:"text-2xl font-semibold mt-8"},"Hier werden deine wichtigsten Fragen beantwortet!"),r.a.createElement("h2",{className:"text-xl font-semibold mt-8"},"Wie funktioniert quarant\xe4nehelden.de?"),r.a.createElement("p",null,"Auf der Plattform quarant\xe4nehelden.de kommen Menschen zusammen, die sich gegenseitig unterst\xfctzen. Hier findest du Anfragen von Personen, die etwas ben\xf6tigen, aber selbst ihr Zuhause oder ihren Quarant\xe4ne-Ort nicht verlassen k\xf6nnen. Du kannst dir Anfragen in deiner N\xe4he anzeigen lassen und diese beantworten. Wir leiten deine Nachricht an den Anfragensteller weiter, der dann zu dir Kontakt aufnimmt. Dann k\xf6nnt ihr alle weiteren Details zur Anfrage (was wird ben\xf6tigt, wann und wo?) kl\xe4ren."),r.a.createElement("h2",{className:"text-xl font-semibold mt-8"},"Welche Art von Anfragen kann ich stellen?"),r.a.createElement("p",null,"Prinzipiell k\xf6nnen alle Anfragen gestellt werden, bei denen Hilfe von au\xdfen ben\xf6tigt wird. Das kann ein Einkauf der n\xf6tigsten Lebensmittel, ein Botengang, eine Erledigung oder das Gassigehen mit dem Hund sein."),r.a.createElement("h2",{className:"text-xl font-semibold mt-8"},"Wie wird f\xfcr den Einkauf bezahlt?"),r.a.createElement("p",null,"Handelt es sich bei der Anfrage um einen Einkauf, k\xf6nnt ihr selbst ausmachen, wie ihr die Bezahlung des Einkaufs handhabt. Eine M\xf6glichkeit w\xe4re, das Geld \xfcber Paypal zu senden."),r.a.createElement("h2",{className:"text-xl font-semibold mt-8"},"Wer kann meine Hilfeanfrage sehen?"),r.a.createElement("p",null,"Deine Anfrage und ein ungef\xe4hrer Ort sind \xf6ffentlich einsehbar. Dein Name und deine Emailadresse sind nicht einsehbar."),r.a.createElement("h2",{className:"text-xl font-semibold mt-8"},"Wie nehmen Helfende Kontakt zu mir auf?"),r.a.createElement("p",null,"Helfende k\xf6nnen auf unserer Webseite hier nach Anfragen in ihrer N\xe4he suchen. Die ausgew\xe4hlte Anfrage wird angeklickt. \xdcber ein Formular geht eine Email an die Person in Quarant\xe4ne. Sie erh\xe4lt so eine Nachricht von dir und ihr k\xf6nnt alles weitere verabreden."),r.a.createElement("h2",{className:"text-xl font-semibold mt-8"},"Was ist bei einer \xdcbergabe z.B. von Eink\xe4ufen zu beachten?"),r.a.createElement("p",null,"Bitte achtet bei einer \xdcbergabe darauf, dass es keinen Kontakt zwischen einer Person in Quarant\xe4ne und der helfenden Person gibt. Ihr k\xf6nnt zum Beispiel etwas vor die T\xfcr legen und dann anrufen, dass es da ist."),r.a.createElement("h2",{className:"text-xl font-semibold mt-8"},"Werde ich daf\xfcr bezahlt?"),r.a.createElement("p",null,"Nein. Das Helfen findet auf freiwilliger Basis statt."),r.a.createElement("h2",{className:"text-xl font-semibold mt-8"},"Was ist mit meiner Sicherheit?"),r.a.createElement("p",null,"Bitte stelle stets deine eigene Sicherheit an erste Stelle und vermeide direkten Kontakt zu Menschen in der Quarant\xe4ne."),r.a.createElement("h2",{className:"text-xl font-semibold mt-8"},"Wieso soll ich das tun?"),r.a.createElement("p",null,"Wir sind eine Gemeinschaft. Besonders in schwierigen Zeiten m\xfcssen wir zusammenhalten. Hilf deiner Nachbarschaft in ihrer schwierigen Quarant\xe4ne-Situation. Du tr\xe4gst so auch dazu bei, die Verbreitung des Virus\u2018 einzuschr\xe4nken."),r.a.createElement("h2",{className:"text-xl font-semibold mt-8"},"Wie wei\xdf ich, dass die Person wirklich in Quarant\xe4ne ist?"),r.a.createElement("p",null,"Unsere Plattform funktioniert nur \xfcber die Ehrlichkeit der Nutzenden. Wenn du dir unsicher bist, kannst du das dem Anfragesteller mitteilen und zum Beispiel ein Attest erfragen."),r.a.createElement("h2",{className:"text-xl font-semibold mt-8"},"Wie kann ich Quarant\xe4nehelden unterst\xfctzen?"),r.a.createElement("p",null,"Schau einfach mal, ob eine Person in deinem Umfeld Hilfe ben\xf6tigt!"),r.a.createElement("h2",{className:"text-xl font-semibold mt-8"},"Wer seid ihr?"),r.a.createElement("p",null,"Wir sind Florian, Henrike und Keno, eine Gruppe von Freunden, die mit diesem Projekt ihren kleinen Beitrag leisten und Menschen helfen m\xf6chten."))}function y(){return r.a.createElement("div",null,r.a.createElement("div",{className:"mt-4"},r.a.createElement("div",{className:"impressum"},r.a.createElement("h1",null,"Impressum"),r.a.createElement("p",null,"Angaben gem\xe4\xdf \xa7 5 TMG"),r.a.createElement("p",null,"Keno Dre\xdfel ",r.a.createElement("br",null),"Georgenschwaigstra\xdfe 16a",r.a.createElement("br",null),"80807 M\xfcnchen"),r.a.createElement("p",null,r.a.createElement("strong",null,"Vertreten durch: "),r.a.createElement("br",null),"Keno Dre\xdfel",r.a.createElement("br",null),"Henrike von Zimmermann",r.a.createElement("br",null),"Florian Schmidt",r.a.createElement("br",null)),r.a.createElement("p",null,r.a.createElement("strong",null,"Kontakt:")," ",r.a.createElement("br",null),"Telefon: 089-35627565",r.a.createElement("br",null),"E-Mail: quarant\xe4nehelden@keno.digital"),r.a.createElement("p",null,r.a.createElement("strong",null,"Haftungsausschluss: "),r.a.createElement("br",null),r.a.createElement("strong",null,"Haftung f\xfcr Links"),r.a.createElement("br",null),"Unser Angebot enth\xe4lt Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k\xf6nnen wir f\xfcr diese fremden Inhalte auch keine Gew\xe4hr \xfcbernehmen. F\xfcr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m\xf6gliche Rechtsverst\xf6\xdfe \xfcberpr\xfcft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",r.a.createElement("br",null),r.a.createElement("strong",null,"Urheberrecht"),r.a.createElement("br",null),"Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf\xe4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\xdferhalb der Grenzen des Urheberrechtes bed\xfcrfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f\xfcr den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",r.a.createElement("br",null),r.a.createElement("strong",null,"Datenschutz"),r.a.createElement("br",null),"Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten m\xf6glich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit m\xf6glich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdr\xfcckliche Zustimmung nicht an Dritte weitergegeben. ",r.a.createElement("br",null),"Wir weisen darauf hin, dass die Daten\xfcbertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitsl\xfccken aufweisen kann. Ein l\xfcckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m\xf6glich. ",r.a.createElement("br",null),"Der Nutzung von im Rahmen der Impressumspflicht ver\xf6ffentlichten Kontaktdaten durch Dritte zur \xdcbersendung von nicht ausdr\xfccklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdr\xfccklich widersprochen. Die Betreiber der Seiten behalten sich ausdr\xfccklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("strong",null,"Google Analytics"),r.a.createElement("br",null)),r.a.createElement("p",null,"Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (''Google''). Google Analytics verwendet sog. ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie erm\xf6glicht. Die durch den Cookie erzeugten Informationen \xfcber Ihre Benutzung dieser Website (einschlie\xdflich Ihrer IP-Adresse) wird an einen Server von Google in den USA \xfcbertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports \xfcber die Websiteaktivit\xe4ten f\xfcr die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte \xfcbertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie k\xf6nnen die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht s\xe4mtliche Funktionen dieser Website voll umf\xe4nglich nutzen k\xf6nnen. Durch die Nutzung dieser Website erkl\xe4ren Sie sich mit der Bearbeitung der \xfcber Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden."),"Impressum vom ",r.a.createElement("a",{href:"https://www.impressum-generator.de"},"Impressum Generator")," der ",r.a.createElement("a",{href:"https://www.kanzlei-hasselbach.de/standorte/bonn/"},"Kanzlei Hasselbach, Bonn"))))}var z=n(32),S=n.n(z),D=n(44),j=n(26),A=n(27),O=n.n(A),I=O.a.auth(),W={googleProvider:new m.auth.GoogleAuthProvider},B=Object(j.a)({providers:W,firebaseAppAuth:I})((function(e){var t=r.a.useState(""),n=Object(c.a)(t,2),a=n[0],l=n[1],i=r.a.useState(""),s=Object(c.a)(i,2),o=s[0],u=s[1],m=r.a.useState(""),d=Object(c.a)(m,2),h=d[0],b=d[1],f=e.user,g=e.signInWithEmailAndPassword,p=e.createUserWithEmailAndPassword;if(f)return r.a.createElement(w.a,{to:"/ask-for-help"});var E=function(){var e=Object(D.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(a,o);case 2:if("auth/email-already-in-use"!==(t=e.sent).code){e.next=7;break}return e.next=6,g(a,o);case 6:t=e.sent;case 7:t.code&&b(t.message);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("form",null,r.a.createElement("div",{className:"mb-4"},r.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username"},"Email"),r.a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Username",value:a,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"mb-6"},r.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password"},"Passwort"),r.a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************",value:o,onChange:function(e){return u(e.target.value)}})),r.a.createElement("div",{className:"flex items-center justify-between mb-6 "},r.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:E},"Jetzt Registrieren")),h?r.a.createElement("div",{className:"text-red-500"},h):"")})),P=n(18),G=n.n(P);function H(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)(""),s=Object(c.a)(i,2),o=s[0],u=s[1],m=Object(a.useState)({lat:null,lng:null}),d=Object(c.a)(m,2),h=d[0],f=d[1],g=Object(w.g)();return Object(a.useEffect)((function(){console.log(o)})),r.a.createElement("form",{style:{maxWidth:"1000px",margin:"auto"},onSubmit:function(e){return e.preventDefault(),new v.GeoFirestore(b.store).collection("ask-for-help").add({request:n,uid:b.auth.currentUser.uid,timestamp:Date.now(),coordinates:new b.app.firestore.GeoPoint(h.lat,h.lng),location:o}),g.push("/success")}},r.a.createElement("h1",{className:"text-4xl py-4 pt-10"},"Um Unterst\xfctzung bitten"),r.a.createElement("div",{className:"py-3"},r.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"phone"},"Wo bist du?"),r.a.createElement(G.a,{onChange:u,value:o,onSelect:function(e){u(e),Object(P.geocodeByAddress)(e).then((function(e){return Object(P.getLatLng)(e[0])})).then(f).catch((function(e){return console.error("Error",e)}))},searchOptions:{types:["(regions)"]}},(function(e){var t=e.getInputProps,n=e.suggestions,a=e.getSuggestionItemProps,l=e.loading;return r.a.createElement("div",null,r.a.createElement("input",Object.assign({required:"required"},t({placeholder:"Deine Stadt...",className:"location-search-input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}))),r.a.createElement("div",{className:"autocomplete-dropdown-container"},l&&r.a.createElement("div",null,"Loading..."),n.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item",n=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return r.a.createElement("div",a(e,{className:t,style:n}),r.a.createElement("span",null,e.description))}))))}))),r.a.createElement("div",{className:"py-3"},r.a.createElement("div",{className:"w-full"},r.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"phone"},"Wobei kann man dir helfen?"),r.a.createElement("textarea",{className:"border leading-tight rounded border-gray-400 py-2 px-3 pb-20 w-full",required:"required",placeholder:"Deine Anfrage hier",onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"mt-8 mb-10 w-full text-gray-700"},"Sobald du deine Anfrage absendest ist diese \xf6ffentlich f\xfcr andere einsehbar. Deine Email-Adresse ist f\xfcr andere nicht einsehbar. ",r.a.createElement("br",null),"Wenn dir jemand helfen m\xf6chte, kann er dich \xfcber diese Website kontaktieren und wir leiten die Kontaktanfrage automatisch an deine Email weiter. Ab dann k\xf6nnt ihr euch unter euch absprechen."),r.a.createElement("div",{className:"mt-4 w-full"},r.a.createElement("button",{type:"submit",className:"btn-primary"},"Jetzt um Hilfe bitten"))))}function U(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)([]),o=Object(c.a)(i,2),u=o[0],m=o[1],d=new v.GeoFirestore(b.store).collection("ask-for-help");return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-4xl py-4 pt-10"},"Hilfe Anbieten"),r.a.createElement("div",{className:"py-3"},r.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"phone"},"Wo bist du?"),r.a.createElement(G.a,{onChange:l,value:n,onSelect:function(e){l(e),Object(P.geocodeByAddress)(e).then((function(e){return Object(P.getLatLng)(e[0])})).then((function(e){d.near({center:new b.app.firestore.GeoPoint(e.lat,e.lng),radius:30}).get().then((function(e){m(e.docs.map((function(e){return Object(s.a)({},e.data(),{id:e.id})})))}))})).catch((function(e){return console.error("Error",e)}))},searchOptions:{types:["(regions)"]}},(function(e){var t=e.getInputProps,n=e.suggestions,a=e.getSuggestionItemProps,l=e.loading;return r.a.createElement("div",null,r.a.createElement("input",t({placeholder:"Deine Stadt...",className:"location-search-input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})),r.a.createElement("div",{className:"autocomplete-dropdown-container"},l&&r.a.createElement("div",null,"Loading..."),n.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item",n=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return r.a.createElement("div",a(e,{className:t,style:n}),r.a.createElement("span",null,e.description))}))))}))),r.a.createElement("div",{className:"py-3"},0===u.length?0===n.length?r.a.createElement("span",null,"Bitte gib deinen Standort ein."):r.a.createElement("span",null,"Bei in der N\xe4he hat aktuell Niemand Hilfe angefragt."):u.map((function(e){return r.a.createElement(p,Object.assign({key:e.id},e))}))))}function C(){return r.a.createElement("div",null,r.a.createElement("div",{className:"mt-4 p-1"},r.a.createElement("p",{className:"text-2xl font-semibold"},"Vielen Dank, wir haben deine Anfrage eingestellt."),r.a.createElement(o.b,{className:"btn-primary mt-4",to:"/"},"Zur Startseite")))}function F(){return r.a.createElement("div",null,r.a.createElement("div",{className:"mt-4 p-1"},r.a.createElement("p",{className:"text-2xl font-semibold"},"Vielen Dank, wir haben deine Nachricht weitergeleitet."),r.a.createElement(o.b,{className:"btn-primary mt-4",to:"/"},"Zur Startseite")))}var q=n(45),K=n.n(q),M=O.a.auth(),Z={googleProvider:new m.auth.GoogleAuthProvider};var L=Object(j.a)({providers:Z,firebaseAppAuth:M})((function(e){var t=e.user,n=e.signOut;return r.a.createElement("div",{className:"flex justify-center bg-secondary min-h-screen"},r.a.createElement("div",{className:"phone-width"},r.a.createElement(o.a,null,r.a.createElement("div",{className:"mt-4 flex justify-between items-center sm:flex-col"},r.a.createElement("div",null,r.a.createElement(o.b,{to:"/",className:"font-bold mr-2 text-sm"},"Home"),t?r.a.createElement(o.b,{to:"/dashboard",className:"font-bold mr-2 text-sm"},"Deine \xdcbersicht"):null,r.a.createElement(o.b,{to:"/faq",className:"font-bold mx-2 text-sm"},"FAQs"),r.a.createElement(o.b,{to:"/impressum",className:"font-bold ml-2 text-sm"},"Impressum")),t?r.a.createElement("div",null,r.a.createElement("span",{className:"text-gray-700 text-sm"},t.email),r.a.createElement("button",{className:"bg-primary p-2 ml-4 text-white rounded text-sm",onClick:n},"Logout")):null),r.a.createElement(w.d,null,r.a.createElement(w.b,{path:"/offer-help/:id"},r.a.createElement(k,null)),r.a.createElement(w.b,{path:"/signup"},r.a.createElement(B,null)),r.a.createElement(w.b,{path:"/ask-for-help"},r.a.createElement(H,null)),r.a.createElement(w.b,{path:"/dashboard"},r.a.createElement(x,null)),r.a.createElement(w.b,{path:"/faq"},r.a.createElement(N,null)),r.a.createElement(w.b,{path:"/impressum"},r.a.createElement(y,null)),r.a.createElement(w.b,{path:"/overview"},r.a.createElement(U,null)),r.a.createElement(w.b,{path:"/success"},r.a.createElement(C,null)),r.a.createElement(w.b,{path:"/success-offer"},r.a.createElement(F,null)),r.a.createElement(w.b,{path:"/"},r.a.createElement(E,null)))),r.a.createElement(K.a,{location:"bottom",buttonText:"Okay",cookieName:"myAwesomeCookieName2",style:{background:"#2B373B"},buttonStyle:{color:"#4e503b",fontSize:"13px"},expires:150},"Diese Webseite verwendet Cookies, um das Nutzererlebnis zu verbessern.")))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.b2ef0057.chunk.js.map