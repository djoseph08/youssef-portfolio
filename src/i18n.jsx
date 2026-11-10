import React from 'react';

// English source copy is the key. Brand and technology names intentionally stay unchanged.
const copy = {
 'Selected work ':['Projets sélectionnés ','أعمال مختارة '], 'About ':['À propos ','نبذة عني '], 'Toolkit ':['Outils ','أدواتي '],
 'Let’s talk':['Discutons','لنتحدث'], 'Skip to content':['Aller au contenu','انتقل إلى المحتوى'],
 'INDEPENDENT MIND. CREATIVE CODE.':['ESPRIT LIBRE. CODE CRÉATIF.','فكر مستقل. برمجة إبداعية.'],
 'PORTFOLIO — VOL. 02 / 2026':['PORTFOLIO — VOL. 02 / 2026','معرض الأعمال — الإصدار الثاني / ٢٠٢٦'],
 'Creative':['Développeur','مطور'], 'developer':['créatif','مبدع'], 'Security mindset.':['L’esprit sécurité.','بعقلية أمنية.'],
 'I’m Youssef Lassoued. I build considered web experiences—and explore what makes them secure.':['Je suis Youssef Lassoued. Je crée des expériences web soignées et j’explore ce qui les rend sûres.','أنا يوسف لسود. أبني تجارب ويب مدروسة، وأستكشف ما يجعلها آمنة.'],
 'Explore my work':['Explorer mes projets','اكتشف أعمالي'], 'FULL-STACK DEVELOPER & PENTESTER':['DÉVELOPPEUR FULL-STACK & PENTESTER','مطور متكامل ومختبر اختراق'],
 'BASED IN TUNISIA ↗':['BASÉ EN TUNISIE ↗','من تونس ↗'], 'A builder.':['Un créateur.','شغف بالبناء.'], 'A curious mind.':['Un esprit curieux.','وعقل فضولي.'],
 '35° N / ALWAYS EXPLORING':['35° N / TOUJOURS CURIEUX','٣٥° شمالاً / أستكشف دائماً'], 'Youssef.':['Youssef.','يوسف.'],
 'BUILT WITH CURIOSITY':['CRÉÉ AVEC CURIOSITÉ','صُنع بشغف الاستكشاف'],
 'CODE WITH PURPOSE ':['CODER AVEC DU SENS ','برمجة بهدف '], ' DESIGN WITH INTENT ':[' DESIGNER AVEC INTENTION ',' تصميم بعناية '], ' THINK SECURITY ':[' PENSER SÉCURITÉ ',' فكر بأمان '], ' STAY CURIOUS ':[' RESTER CURIEUX ',' ابق فضولياً '], ' CODE WITH PURPOSE ':[' CODER AVEC DU SENS ',' برمجة بهدف '],
 '01 / SELECTED WORK':['01 / PROJETS SÉLECTIONNÉS','٠١ / أعمال مختارة'], 'Ideas made tangible.':['Des idées qui prennent forme.','أفكار تتحول إلى واقع.'],
 'A little code.':['Un peu de code.','قليل من الكود.'], 'A lot of possibility.':['Tant de possibilités.','وكثير من الإمكانات.'],
 'Useful applications, playful experiments, and a healthy curiosity for how things work.':['Des applications utiles, des expériences ludiques et la curiosité de comprendre leur fonctionnement.','تطبيقات مفيدة، وتجارب تفاعلية، وفضول لفهم كيفية عمل الأشياء.'],
 'All work':['Tous les projets','كل الأعمال'], 'Development':['Développement','التطوير'], 'Security':['Sécurité','الأمن السيبراني'], 'Design':['Design','التصميم'], 'All':['Tout','الكل'], 'Tools':['Outils','الأدوات'],
 'FEATURED / LIVE PROJECT':['À LA UNE / PROJET EN LIGNE','مشروع مميز / متاح مباشرة'], 'FEATURED / FULL-STACK SYSTEM':['À LA UNE / SYSTÈME FULL-STACK','مشروع مميز / نظام متكامل'],
 'Show selected projects':['Afficher la sélection','عرض الأعمال المختارة'], 'The full collection.':['La collection complète.','المجموعة الكاملة.'], 'There’s more where that came from.':['Et ce n’est pas tout.','وما زال هناك المزيد.'],
 '02 / THE PERSON BEHIND THE PIXELS':['02 / DERRIÈRE LES PIXELS','٠٢ / الشخص خلف الشاشة'],
 'Builder by nature.':['Créateur par nature.','أبني بطبيعتي.'], 'Hacker by curiosity.':['Hacker par curiosité.','وأستكشف بشغفي.'], 'HELLO, I’M YOUSSEF.':['BONJOUR, MOI C’EST YOUSSEF.','مرحباً، أنا يوسف.'],
 'Good experiences start with curiosity. So does good security.':['La curiosité est à l’origine des belles expériences. Et d’une bonne sécurité.','التجارب الجيدة تبدأ بالفضول. وكذلك الأمن الجيد.'],
 'I’m a full-stack web developer and penetration tester who enjoys both sides of the screen: creating intuitive digital experiences and understanding the systems beneath them.':['Développeur web full-stack et testeur d’intrusion, j’aime créer des expériences numériques intuitives autant que comprendre les systèmes qui les font fonctionner.','أنا مطور ويب متكامل ومختبر اختراق. أستمتع ببناء تجارب رقمية سهلة الاستخدام، وفهم الأنظمة التي تقف وراءها.'],
 'I build with React, Tailwind CSS, and vanilla JavaScript, bringing together clean interfaces, thoughtful interactions, and an eye for design. My cybersecurity work explores web application testing, network analysis, and hands-on CTF challenges.':['Je travaille avec React, Tailwind CSS et JavaScript natif pour créer des interfaces claires et des interactions soignées. En cybersécurité, j’explore les tests d’applications web, l’analyse réseau et les challenges CTF.','أعمل باستخدام React وTailwind CSS وJavaScript لبناء واجهات واضحة وتفاعلات مدروسة. وفي الأمن السيبراني، أركز على اختبار تطبيقات الويب وتحليل الشبكات وتحديات CTF العملية.'],
 'From a locally hosted gym CRM/ERP to real-time chat and an automotive catalogue, I like turning practical problems into something people can actually use.':['D’un CRM/ERP de salle de sport hébergé localement à une messagerie instantanée ou un catalogue automobile, j’aime transformer les besoins concrets en outils utiles.','من نظام CRM/ERP محلي لإدارة نادٍ رياضي إلى تطبيق محادثة فورية وكتالوج لإكسسوارات السيارات، أحب تحويل الاحتياجات العملية إلى أدوات مفيدة.'],
 'Explore my security journey':['Mon parcours en cybersécurité','اكتشف مسيرتي في الأمن السيبراني'],
 'Build with intention.':['Créer avec intention.','بناء مدروس.'], 'Responsive interfaces, useful interactions, and clear user journeys.':['Des interfaces adaptatives, des interactions utiles et des parcours clairs.','واجهات متجاوبة وتفاعلات مفيدة وتجربة استخدام واضحة.'],
 'Understand the weaknesses.':['Comprendre les faiblesses.','فهم نقاط الضعف.'], 'Ethical testing, network analysis, and practical security exploration.':['Tests éthiques, analyse réseau et exploration pratique de la sécurité.','اختبارات أخلاقية وتحليل للشبكات واستكشاف عملي للأمن.'],
 'Keep exploring.':['Continuer à explorer.','استكشاف مستمر.'], 'Learning by making, experimenting, and following the next good question.':['Apprendre en créant, en expérimentant et en posant les bonnes questions.','أتعلم بالبناء والتجربة والبحث عن إجابات لأسئلة جديدة.'],
 'THE PATH SO FAR':['LE CHEMIN PARCOURU','المسيرة حتى الآن'], 'A foundation.':['Des bases solides.','أساس متين.'], 'Always growing.':['Toujours en évolution.','وتطور مستمر.'], 'CYBERSECURITY':['CYBERSÉCURITÉ','الأمن السيبراني'],
 'Cybersecurity training, penetration testing, and network security · Tunis':['Formation en cybersécurité, tests d’intrusion et sécurité réseau · Tunis','تدريب في الأمن السيبراني واختبار الاختراق وأمن الشبكات · تونس'],
 'Web development internship in the travel industry · Tunis':['Stage en développement web dans le secteur du voyage · Tunis','تدريب في تطوير الويب في قطاع السياحة · تونس'],
 'BTP IT Management · IPSET':['BTP en gestion informatique · IPSET','دبلوم BTP في التصرف في الإعلامية · IPSET'], 'IT, networking, and web development · Tunis':['Informatique, réseaux et développement web · Tunis','إعلامية وشبكات وتطوير ويب · تونس'],
 'Fiber Optic Technician · Excelforma':['Technicien fibre optique · Excelforma','تقني ألياف بصرية · Excelforma'], 'Training in Paris, followed by an internship with Bouygues':['Formation à Paris, suivie d’un stage chez Bouygues','تكوين في باريس، ثم تدريب لدى Bouygues'],
 '03 / MY TOOLKIT':['03 / MA BOÎTE À OUTILS','٠٣ / أدواتي وتقنياتي'], 'Different tools. One curious mind.':['Des outils variés. Un esprit curieux.','أدوات متنوعة. وعقل فضولي واحد.'],
 'The tools behind':['Les outils derrière','الأدوات وراء'], 'the thinking.':['la réflexion.','كل فكرة.'],
 'From browser interfaces to security labs. A toolkit shaped by projects, practice, and continuous learning.':['Des interfaces web aux laboratoires de sécurité. Des outils façonnés par les projets, la pratique et l’apprentissage continu.','من واجهات المتصفح إلى مختبرات الأمن. أدوات اكتسبتها عبر المشاريع والممارسة والتعلم المستمر.'],
 'Tools are the starting point. Understanding how to use them is the work.':['Les outils sont le point de départ. Savoir les utiliser fait la différence.','الأدوات هي البداية. وفهم كيفية توظيفها هو العمل الحقيقي.'],
 '04 / WHAT’S NEXT?':['04 / ET ENSUITE ?','٠٤ / ما الخطوة التالية؟'], 'LET’S MAKE SOMETHING MATTER.':['CRÉONS QUELQUE CHOSE QUI COMPTE.','لنبنِ شيئاً ذا قيمة.'],
 'Good ideas deserve':['Les bonnes idées méritent','الأفكار الجيدة تستحق'], 'great execution.':['une belle réalisation.','تنفيذاً رائعاً.'],
 'Have a project in mind, a challenge to share,':['Un projet en tête, un défi à partager,','لديك مشروع أو تحدٍ تريد مشاركته،'], 'or just a good conversation? Let’s connect.':['ou simplement envie d’échanger ? Parlons-en.','أو ترغب في حديث مفيد؟ لنتواصل.'],
 'Email contact coming soon':['Contact e-mail bientôt disponible','التواصل بالبريد الإلكتروني قريباً'], 'DESIGNED WITH INTENT. BUILT BY YOUSSEF.':['PENSÉ AVEC SOIN. CRÉÉ PAR YOUSSEF.','صُمم بعناية. وطُوّر بواسطة يوسف.'], 'Back to top ↑':['Retour en haut ↑','العودة للأعلى ↑'],
 'Launch live application':['Ouvrir l’application','افتح التطبيق'], 'Explore on TryHackMe':['Découvrir sur TryHackMe','اكتشف على TryHackMe'], ' Explore my GitHub ':[' Explorer mon GitHub ',' تصفح حسابي على GitHub '], 'Explore my GitHub ':['Explorer mon GitHub ','تصفح حسابي على GitHub '],
 'Locally hosted application · Project showcase':['Application hébergée localement · Présentation du projet','تطبيق يعمل محلياً · عرض للمشروع'],
 'Member registration & profiles':['Inscription et fiches des adhérents','تسجيل الأعضاء وملفاتهم'], 'Membership plans & expiry tracking':['Abonnements et suivi des échéances','خطط الاشتراك ومتابعة انتهاء الصلاحية'], 'Payment history & revenue ledger':['Historique des paiements et registre des recettes','سجل المدفوعات والإيرادات'], 'Activity pricing & plan periods':['Tarifs des activités et durées des formules','تسعير الأنشطة وفترات الاشتراك'], 'Dashboard analytics & smart calculator':['Tableau de bord et calculatrice intelligente','تحليلات لوحة التحكم والحاسبة الذكية'], 'Locally hosted database':['Base de données hébergée localement','قاعدة بيانات محلية'],
 'A better way to find your next upgrade.':['Trouvez plus facilement votre prochain équipement.','طريقة أفضل لاكتشاف تجهيزاتك القادمة.'], 'AUTOMOTIVE CATALOGUE':['CATALOGUE AUTOMOBILE','كتالوج إكسسوارات السيارات'],
 'NexusFit — Gym CRM & ERP':['NexusFit — CRM & ERP sportif','NexusFit — نظام CRM وERP للأندية الرياضية'], 'One system. The whole gym.':['Un système. Toute la salle.','نظام واحد. لإدارة النادي بأكمله.'], 'FULL-STACK GYM MANAGEMENT SYSTEM':['SYSTÈME COMPLET DE GESTION SPORTIVE','نظام متكامل لإدارة الأندية الرياضية'],
 'Weather, wherever.':['La météo, partout.','الطقس، أينما كنت.'], 'Live forecasts. A little more clarity.':['Des prévisions en direct. Plus de clarté.','توقعات مباشرة. ورؤية أوضح.'], 'REACT APPLICATION':['APPLICATION REACT','تطبيق REACT'],
 'The human-made bot.':['Le bot fait main.','روبوت بمنطق بشري.'], 'Handcrafted logic. Natural conversation.':['Une logique sur mesure. Un échange naturel.','منطق مبرمج بعناية. ومحادثة سلسة.'], 'VANILLA JAVASCRIPT':['JAVASCRIPT NATIF','JAVASCRIPT خالص'],
 'Think like an attacker.':['Penser comme un attaquant.','فكر بعقلية المهاجم.'], 'Explore. Understand. Strengthen.':['Explorer. Comprendre. Renforcer.','استكشف. افهم. عزز الحماية.'], 'PENTESTING & CTF':['TESTS D’INTRUSION & CTF','اختبار اختراق وتحديات CTF'],
 'An eye for style, built for the web.':['Le sens du style, pensé pour le web.','حس بالأناقة، صُمم للويب.'], 'FASHION E-COMMERCE CONCEPT':['CONCEPT E-COMMERCE MODE','تصور متجر إلكتروني للأزياء'],
 'A world to discover.':['Un monde à découvrir.','عالم ينتظر الاكتشاف.'], 'From inspiration to destination.':['De l’inspiration à la destination.','من الإلهام إلى الوجهة.'], 'TRAVEL AGENCY WEBSITE':['SITE D’AGENCE DE VOYAGE','موقع وكالة سفر'],
 'Real conversations, in real time.':['Des échanges en temps réel.','محادثات حقيقية، في الوقت الفعلي.'], 'REAL-TIME MESSAGING':['MESSAGERIE EN TEMPS RÉEL','محادثة فورية'],
 'Beyond the code.':['Au-delà du code.','ما وراء الكود.'], 'Ideas with a visual voice.':['Des idées qui s’expriment en images.','أفكار تتحدث بصرياً.'], 'VISUAL DESIGN COLLECTION':['COLLECTION DE CRÉATIONS VISUELLES','مجموعة تصاميم بصرية'],
 'One more round.':['Encore une partie.','جولة أخرى.'], 'The classic, reimagined in JavaScript.':['Un classique réinventé en JavaScript.','لعبة كلاسيكية بروح JavaScript.'], 'SNAKE GAME':['JEU SNAKE','لعبة الثعبان'],
 'Your move.':['À vous de jouer.','حان دورك.'], 'Small game. Thoughtful interactions.':['Un petit jeu. Des interactions soignées.','لعبة بسيطة. وتفاعلات مدروسة.'], 'TIC-TAC-TOE':['MORPION','لعبة إكس أو'],
 'BTS Bank portal':['Portail BTS Bank','بوابة BTS Bank'], 'An early chapter in interface design.':['Mes premiers pas en design d’interface.','خطوة مبكرة في تصميم الواجهات.'], 'LOGIN & SIGN-UP UI STUDY':['ÉTUDE D’INTERFACE DE CONNEXION','دراسة واجهة تسجيل ودخول'],
 'Web application':['Application web','تطبيق ويب'], 'Product catalogue':['Catalogue produits','كتالوج منتجات'], 'Responsive UI':['Interface adaptative','واجهة متجاوبة'], 'Full-stack':['Full-stack','تطوير متكامل'], 'Local database':['Base locale','قاعدة بيانات محلية'], 'Weather data':['Données météo','بيانات الطقس'], 'Responsive':['Adaptatif','متجاوب'], 'Interaction design':['Design d’interaction','تصميم التفاعل'], 'Custom logic':['Logique sur mesure','منطق مخصص'], 'Security research':['Recherche en sécurité','بحث أمني'], 'UI design':['Design d’interface','تصميم الواجهات'], 'Branding':['Identité visuelle','هوية بصرية'], 'Digital artwork':['Création numérique','فن رقمي'], 'Game logic':['Logique de jeu','منطق الألعاب'], 'Responsive controls':['Commandes adaptatives','عناصر تحكم متجاوبة'], 'Interface design':['Design d’interface','تصميم الواجهات'],
 'Close project':['Fermer le projet','إغلاق المشروع'], 'Open menu':['Ouvrir le menu','افتح القائمة'], 'Close menu':['Fermer le menu','أغلق القائمة'], 'Filter projects':['Filtrer les projets','تصفية المشاريع'], 'Filter skills':['Filtrer les compétences','تصفية المهارات'], 'Main navigation':['Navigation principale','التنقل الرئيسي'], 'Get to know Youssef':['Découvrir Youssef','تعرف على يوسف'],
};
export function registerDescriptions(entries){Object.assign(copy,entries)}
export function translate(text,lang){
 if(lang==='en'||typeof text!=='string')return text;
 const index=lang==='fr'?0:1;
 if(copy[text])return copy[text][index];
 const trimmed=text.trim();
 if(copy[trimmed])return text.replace(trimmed,copy[trimmed][index]);
 const match=text.match(/^Explore all (\d+) projects$/);
 if(match)return lang==='fr'?`Explorer les ${match[1]} projets`:`استكشف المشاريع الـ ${match[1]}`;
 return text;
}
// Transform React text nodes, preserving event handlers, refs and original filter IDs.
export function localize(node,lang){
 if(typeof node==='string')return translate(node,lang);
 if(Array.isArray(node))return React.Children.map(node,n=>localize(n,lang));
 if(!React.isValidElement(node))return node;
 const props={};
 for(const key of ['aria-label','alt','title'])if(typeof node.props[key]==='string')props[key]=translate(node.props[key],lang);
 if(node.props.children!==undefined)props.children=localize(node.props.children,lang);
 return React.cloneElement(node,props);
}
