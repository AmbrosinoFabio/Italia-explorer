/*=========================================================
    ITALIA EXPLORER
    data.js - shared city data (used by all pages)

    history / food = short versions, used in the map popup (home)
    historyDetail / foodDetail = extended versions, used only
    on the detail page (citta.html)
=========================================================*/

const citiesData={

"Rome":{

    lat:41.9028, lng:12.4964, tags:["arte"], img:"img/roma.jpeg",

    history:"Founded according to legend in 753 BC, Rome was the center of the Roman Empire that ruled much of the ancient world. It later became the capital of Christianity and still preserves iconic monuments such as the Colosseum and the Roman Forum.",

    food:"Carbonara, cacio e pepe, amatriciana and supplì are the signature dishes of Roman cuisine.",

    historyDetail:"According to legend, Rome was founded by Romulus on April 21, 753 BC on the Palatine Hill, after the famous dispute with his brother Remus. Over the following centuries it grew into the center of an empire stretching from Britain to North Africa and from Spain to Mesopotamia, leaving a legacy of law, architecture and language that shaped the West. After the fall of the Western Roman Empire in 476 AD, the city became the spiritual heart of Christianity as the seat of the Papacy, a role it still holds today with Vatican City inside it. Through the Renaissance and the Baroque, Rome gained masterpieces such as the Sistine Chapel and the Trevi Fountain, becoming the capital of the Kingdom of Italy in 1871 and later of the Italian Republic.",

    foodDetail:"Roman cuisine has its roots in peasant and working-class tradition, with dishes created to waste nothing: coda alla vaccinara, rigatoni con la pajata and Roman-style tripe are the legacy of the so-called 'fifth quarter', the less noble cuts of meat processed in the Testaccio district, the historic site of the city's slaughterhouse. On the pasta front, the four great classics are carbonara, cacio e pepe, gricia and amatriciana, each with its own unwritten rules passionately defended by Romans. Among the starters, supplì stand out, fried rice croquettes with a stringy mozzarella heart, along with artichokes, served both alla giudia (fried) and alla romana (braised with mint and herbs)."

},

"Milan":{

    lat:45.4642, lng:9.1900, tags:["arte"], img:"img/milano.jpeg",

    history:"Founded by the Celts and later conquered by the Romans, Milan was the capital of the Duchy of Milan and today is Italy's economic and fashion capital. Its Cathedral, begun in 1386, is one of the city's symbols.",

    food:"Saffron risotto, cotoletta alla milanese and panettone are the main specialties.",

    historyDetail:"Founded by the Insubrian Celts around 590 BC under the name Mediolanum, the city was conquered by the Romans in 222 BC and for a time became the capital of the Western Roman Empire. In the Middle Ages it was a free commune and then the capital of the powerful Duchy of Milan under the Visconti and Sforza families, who made it a leading artistic center, culminating in the construction of the Cathedral, begun in 1386 and completed only five centuries later. After passing under Spanish, Austrian and French rule, Milan became the engine of Italian industrialization in the 19th century and today is recognized as a world capital of fashion and design.",

    foodDetail:"Milanese cuisine is tied to the peasant tradition of the Po Valley, rich in butter and rice rather than olive oil. Saffron risotto, also known as risotto alla milanese, was born according to legend from the inspiration of an apprentice glassmaker who tinted the Cathedral's window glass with saffron. Cotoletta alla milanese, breaded and fried in butter with the bone in, is an identity dish also claimed by the Austrian tradition of Wiener Schnitzel. At Christmas, panettone, a leavened cake with candied fruit and raisins, has made Milanese pastry famous worldwide, while the aperitivo, born in Milan in the late 19th century, is today a social ritual exported everywhere."

},

"Venice":{

    lat:45.4408, lng:12.3155, tags:["mare","arte"], img:"img/venezia.jpeg",

    history:"Founded in the 5th century by refugees fleeing the barbarian invasions, Venice became a powerful maritime republic that dominated Mediterranean trade for centuries.",

    food:"Sarde in saor, squid ink risotto and cicchetti (small snacks) are typical of the Venetian tradition.",

    historyDetail:"The origins of Venice date back to the 5th century, when the people of the Venetian mainland took refuge on the islands of the lagoon to escape the barbarian invasions of the Huns and Lombards. Built on over a hundred small islands linked by bridges and canals, the city developed extraordinary commercial and military power over the centuries as the Republic of Venice, known as La Serenissima, dominating the routes of the eastern Mediterranean and trade with the East thanks to merchants such as Marco Polo. The Doge's Palace, St. Mark's Basilica and the Arsenal, one of the largest industrial complexes of the pre-industrial world, still bear witness to the wealth of that era, which ended in 1797 with the Napoleonic conquest.",

    foodDetail:"Venetian cuisine is deeply tied to the sea and the lagoon: baccalà mantecato, salt cod whipped with oil into a cream, is perhaps the dish most representative of the city, along with Venetian-style liver with onions. Sarde in saor, sardines marinated with onion, raisins and pine nuts, began as a preservation method used by sailors before long voyages. Cicchetti, small snacks served in traditional bacari (taverns), have for centuries accompanied an ombra, the small glass of wine typical of the lagoon tradition. Rice is also present, grown in the Venetian hinterland and starring in dishes such as risi e bisi, a risotto with peas once offered to the Doge on St. Mark's Day."

},

"Florence":{

    lat:43.7696, lng:11.2558, tags:["arte"], img:"img/firenze.jpeg",

    history:"The cradle of the Renaissance in the 15th century thanks to the Medici family, Florence was the birthplace of artists such as Michelangelo, Leonardo da Vinci and Dante Alighieri.",

    food:"Bistecca alla fiorentina, lampredotto and ribollita are the traditional Tuscan dishes.",

    historyDetail:"Founded by the Romans as a military colony in the 1st century BC under the name Florentia, Florence grew in the Middle Ages as a free commune enriched by the wool trade and banking. In the 15th century, under the rule of the Medici family, it became the hub of the European Renaissance, attracting and training artists such as Brunelleschi, Botticelli, Michelangelo and Leonardo da Vinci, as well as thinkers such as Machiavelli. The Cathedral dome, designed by Brunelleschi, remained for centuries the largest masonry dome ever built and still dominates the city skyline. Between 1865 and 1871, Florence was also the capital of the Kingdom of Italy.",

    foodDetail:"Florentine cuisine is based on simple, high-quality ingredients: bistecca alla fiorentina, cut from Chianina cattle and cooked rare over embers, is the city's signature dish and must be enjoyed strictly without added condiments. Lampredotto, made from the fourth stomach of the cow and served in a sandwich with green sauce, is instead the street food par excellence, still sold today by the traditional tripe vendors of the center. Ribollita, a soup of stale bread, black cabbage and beans, and pappa al pomodoro tell the story of the culture of reuse typical of Tuscan peasant cooking, now reappraised as a true gastronomic art."

},

"Naples":{

    lat:40.8518, lng:14.2681, tags:["mare","arte"], img:"img/napoli.jpeg",

    history:"Founded by the Greeks under the name Neapolis (\"new city\"), Naples was the capital of the Kingdom of the Two Sicilies and boasts one of the largest historic centers in Europe.",

    food:"It is the home of true Neapolitan pizza, as well as dishes such as sfogliatella and Neapolitan ragù.",

    historyDetail:"Founded by Greek colonists in the 8th century BC under the name Parthenope and then refounded as Neapolis, 'new city', in the 5th century BC, Naples was conquered by the Romans and later became the capital of the Kingdom of Naples and then of the Kingdom of the Two Sicilies, one of the most important states in Europe before the Unification of Italy. The historic center, among the largest on the continent, preserves a unique blend of Greek, Roman, Angevin, Aragonese and Bourbon layers and is now a UNESCO World Heritage Site. Behind the city rises Vesuvius, the volcano that destroyed Pompeii and Herculaneum in 79 AD and that is still active, an integral part of Neapolitan identity and landscape.",

    foodDetail:"Naples is universally recognized as the home of pizza: the Margherita, created according to tradition in 1889 in honor of the Queen of Italy with the colors of the flag, and the Marinara are now protected by a TSG specification recognized by the European Union. Besides pizza, the city gave birth to Neapolitan ragù, cooked for hours with various cuts of meat, and to desserts such as sfogliatella, in its riccia or frolla versions, and rum-soaked babà. Neapolitan street food also includes the fried cuoppo and fried pizza, while coffee, served strictly in small, strong cups, is an almost essential daily ritual for the city."

},

"Turin":{

    lat:45.0703, lng:7.6869, tags:["montagna","arte"], img:"img/torino.jpeg",

    history:"Capital of the Kingdom of Sardinia and first capital of Italy (1861-1865), Turin was the cradle of the Italian car industry with the birth of FIAT.",

    food:"Bagna cauda, agnolotti and gianduiotto are typical Piedmontese specialties.",

    historyDetail:"Founded by the Romans as Augusta Taurinorum, Turin became the capital of the Duchy of Savoy in the 16th century and then, from 1720, of the Kingdom of Sardinia, growing into an elegant Savoy city with wide avenues, arcades and Baroque palaces. In 1861 it was the first capital of the unified Kingdom of Italy, before the role passed to Florence and finally to Rome. Between the late 19th and the 20th century Turin became the heart of the Italian car industry with the founding of FIAT in 1899, turning into one of Europe's leading industrial cities and hosting the Winter Olympics in 2006.",

    foodDetail:"Turin's cuisine combines French and Piedmontese influences: bagna cauda, a hot sauce of garlic, anchovies and oil for dipping raw and cooked vegetables, is a convivial dish typical of the cold months. Agnolotti del plin, small ravioli filled with roast meat and 'pinched' by hand, and vitello tonnato are other classics of the Piedmontese table. Turin is also the home of chocolate: the gianduiotto, a chocolate made with cocoa and Piedmont PGI hazelnuts, was invented here in the 19th century, and the city boasts a long tradition of historic cafés and chocolate shops still active in the center."

},

"Bologna":{

    lat:44.4949, lng:11.3426, tags:["arte"], img:"img/bologna.jpeg",

    history:"Home to the oldest university in the Western world still in operation, founded in 1088, Bologna is nicknamed \"la Dotta\" (the Learned) for its long university tradition.",

    food:"Tagliatelle al ragù, tortellini in brodo and mortadella are the symbols of Bolognese cuisine.",

    historyDetail:"Of Etruscan and then Roman origins, Bologna became one of the richest and most populous cities in Europe in the Middle Ages thanks to trade and the University of Bologna, founded in 1088 and considered the oldest in the Western world still in operation. Its medieval towers, once about a hundred and now reduced to a few dozen, were a symbol of the power of the city's noble families, while its long porticoes, over 60 km, were declared a UNESCO World Heritage Site in 2021. Nicknamed 'la Dotta' (the Learned), 'la Grassa' (the Fat) for the richness of its cuisine and 'la Rossa' (the Red) for the color of its roofs, Bologna remains a lively cultural and gastronomic center today.",

    foodDetail:"Bologna is one of Italy's gastronomic capitals: tagliatelle al ragù, often wrongly called 'spaghetti bolognese' abroad, come from a recipe officially registered in 1982 with the city's Chamber of Commerce. Tortellini, small ring-shaped filled pasta inspired according to legend by the navel of Venus, are traditionally served in capon broth. Mortadella, a pork cold cut flavored with peppercorns and pistachios, takes its name from the city, while lasagna alla bolognese, with béchamel and ragù, completes the quartet of signature dishes of the Emilian tradition."

},

"Verona":{

    lat:45.4384, lng:10.9916, tags:["arte"], img:"img/verona.jpeg",

    history:"A Roman city with an Arena still used for performances today, Verona was made famous worldwide by Shakespeare as the setting of Romeo and Juliet.",

    food:"Amarone risotto, bigoli with duck and pandoro are the Veronese specialties.",

    historyDetail:"Founded as an important Roman colony thanks to its strategic position on the routes to northern Europe, Verona still preserves one of the largest and best-preserved Roman amphitheaters in the world, the Arena, built in the 1st century AD and still home to summer opera performances. In the Middle Ages the city was ruled by the della Scala family (the Scaligeri), who made it a center of power and culture, before it passed to the Republic of Venice. Verona owes part of its worldwide fame to William Shakespeare, who set the tragedy of Romeo and Juliet here, making the so-called Juliet's House one of the most visited destinations in Italy.",

    foodDetail:"Veronese cuisine combines Venetian and Mantuan influences: Amarone risotto, creamed with the famous red wine of Valpolicella, is one of the city's most representative dishes. Bigoli, soft wheat spaghetti made with a press, are often served with duck or sardine sauce. Pandoro, a leavened Christmas cake with a characteristic star shape, has 19th-century Veronese origins and is today one of the signature holiday desserts throughout Italy, while the hills around the city produce fine wines such as Amarone, Valpolicella and Soave."

},

"Palermo":{

    lat:38.1157, lng:13.3613, tags:["mare","arte"], img:"img/palermo.jpeg",

    history:"Founded by the Phoenicians, Palermo was the capital of the Kingdom of Sicily and preserves a unique fusion of Arab-Norman styles, visible for example in the Palatine Chapel.",

    food:"Arancine, panelle and pane con la milza are the great classics of Palermo street food.",

    historyDetail:"Founded by the Phoenicians under the name Ziz, Palermo was later ruled by Carthaginians, Greeks, Romans, Byzantines and Arabs, who in the 9th century turned it into one of the richest and most cultured cities in the Mediterranean. With the Norman conquest in the 11th century it became the capital of the Kingdom of Sicily, giving rise to an extraordinary Arab-Norman style that blends Islamic, Byzantine and Romanesque architecture, visible in the Palatine Chapel and Monreale Cathedral, now a UNESCO Heritage Site. In the following centuries it passed to the Swabians, Angevins, Aragonese and Bourbons, building up cultural layers that make Palermo one of the most multiethnic cities in Italy.",

    foodDetail:"Palermo's cuisine reflects the city's multicultural history, with Arab, Spanish and French influences: arancine, fried rice balls filled with ragù, butter or spinach, are the symbol of Sicilian street food. Pane con la milza (pani ca meusa), served at the typical kiosks of the historic center, and panelle, chickpea flour fritters, complete the picture of Palermo street food, also celebrated at the famous Ballarò market. Among the desserts, Sicilian cassata and cannoli filled with fresh ricotta are a fitting end to any meal."

},

"Catania":{

    lat:37.5079, lng:15.0830, tags:["mare","montagna"], img:"img/catania.jpeg",

    history:"Founded by the Greeks at the foot of Etna, Catania has been destroyed and rebuilt several times because of eruptions and earthquakes, the last in 1693, which gave it its current Baroque look.",

    food:"Pasta alla Norma, arancini and granita with brioche are the typical dishes of Catania.",

    historyDetail:"Founded by Greek colonists from Chalcis in the 8th century BC at the foot of Etna, the largest active volcano in Europe, Catania has lived for millennia with eruptions and earthquakes that have repeatedly erased and rebuilt its face. The earthquake of 1693, one of the most devastating in Italian history, razed the city, which was rebuilt according to the canons of Sicilian Baroque using local lava stone: the resulting historic center, now a UNESCO Heritage Site, is considered among the most elegant examples of Baroque urban planning in Europe. Living with the volcano, which towers over the city and gives its buildings their characteristic dark color, is still an integral part of Catania's identity.",

    foodDetail:"Pasta alla Norma, with fried eggplant, tomato, grated ricotta salata and basil, is the signature dish of Catania, dedicated to the opera 'Norma' by the Catania-born composer Vincenzo Bellini. Catania's arancine, cone-shaped to recall Etna, differ from those of Palermo in both shape and name (arancino in the masculine). Granita, served with the typical brioche col tuppo for breakfast, is a true city institution, available in flavors such as almond, pistachio and mulberry, while the Bronte pistachio, grown on the slopes of Etna, is a prized ingredient in many local dishes."

},

"Matera":{

    lat:40.6664, lng:16.6043, tags:["arte"], img:"img/matera.jpeg",

    history:"Continuously inhabited for over 9,000 years, Matera is famous for the Sassi, ancient houses carved into the rock, declared a UNESCO World Heritage Site in 1993.",

    food:"Pane di Matera PGI, crapiata (a soup of legumes and grains) and peperoni cruschi are typical of the Lucanian tradition.",

    historyDetail:"Matera is one of the oldest continuously inhabited cities in the world, with traces of human settlement dating back to the Paleolithic, over 9,000 years ago. Its distinctive feature is the Sassi, the ancient districts carved directly into the limestone rock, inhabited until the 1950s in conditions of extreme poverty that led the Italian State to forcibly evacuate them, calling them a 'national disgrace'. Only from the 1980s did a slow recovery begin, culminating in 1993 with the inscription of the Sassi as a UNESCO World Heritage Site and, in 2019, with Matera's designation as European Capital of Culture.",

    foodDetail:"Pane di Matera, recognized as PGI, stands out for its characteristic horn shape and for the thick crust that ensures long keeping, once essential for the area's peasant families. Crapiata, a soup of mixed legumes and grains, was traditionally prepared to celebrate the end of the harvest. Peperoni cruschi, sun-dried and then fried until crisp, are a typical condiment of Lucanian cuisine, used to flavor pasta and salt cod dishes, salt cod being another ingredient historically central to Matera's gastronomic tradition."

},

"Como":{

    lat:45.8081, lng:9.0852, tags:["lago"], img:"img/como.jpeg",

    history:"Founded by the Romans on the shores of the lake of the same name, Como has been known since the 19th century as a holiday destination for the European aristocracy.",

    food:"Missoltini (dried lake fish) and risotto with lake fish are typical dishes of the area.",

    historyDetail:"Founded by the Romans on the shores of the lake that bears its name, Como was in ancient times an important strategic and commercial center along the routes north of the Alps, and was the birthplace of figures such as Pliny the Elder and Pliny the Younger. In the Middle Ages it was a free commune, often at odds with nearby Milan, before entering the orbit of the Duchy of Milan. From the 19th century Lake Como became a favorite destination of the European aristocracy, who built sumptuous villas overlooking the water, such as Villa d'Este and Villa Carlotta, helping to build the area's international reputation as one of the most elegant destinations in Italy.",

    foodDetail:"Como's cuisine is tied to the lake and to the peasant tradition of the Pre-Alps: missoltini, agone fish dried in the sun and then preserved in salt, are an ancient method of preserving lake fish that has become a sought-after dish today, often served with polenta. Risotto with perch, delicate in flavor, and smoked trout complete the local fish offering. Among the desserts, resta, lozenge-shaped biscuits typical of the Christmas period, and miascia, sweets made with stale bread and dried fruit, tell of a poor but tasty cuisine typical of the Lario valleys."

},

"Positano":{

    lat:40.6280, lng:14.4849, tags:["mare"], img:"img/positano.jpeg",

    history:"An ancient fishing village on the Amalfi Coast, Positano became famous after the war as an elite destination thanks to writers and artists who celebrated its beauty.",

    food:"Scialatielli with seafood and delizia al limone are typical specialties of the coast.",

    historyDetail:"The origins of Positano are lost in legend, according to which the name derives from the sea god Poseidon, but the first certain historical evidence dates back to Roman times, when the area was already frequented as a holiday spot. In the Middle Ages it became a village of fishermen and small maritime traders, part of the Maritime Republic of Amalfi. Long remaining a simple fishing village, Positano underwent a radical transformation after the Second World War, when writers such as John Steinbeck described its extraordinary beauty, turning it into one of the most sought-after and exclusive tourist destinations in the world.",

    foodDetail:"Positano's cuisine is typical of the Amalfi Coast, dominated by the flavors of the sea and citrus: scialatielli with seafood, a short, rough fresh pasta invented on the coast in the 1970s, is one of the most requested dishes in local restaurants. The Sorrento PGI lemon, grown on the terraces that define the coastal landscape, stars in dishes such as spaghetti al limone and desserts such as the famous delizia al limone. Local fish, often simply cooked with oil, garlic and parsley, completes a table that relies entirely on the freshness of its ingredients."

},

"Amalfi":{

    lat:40.6340, lng:14.6027, tags:["mare"], img:"img/amalfi.jpeg",

    history:"In the Middle Ages it was a powerful Maritime Republic with its own commercial laws (the Amalfi Tables), among the first in the world on maritime law.",

    food:"Amalfi PGI lemons, used for limoncello and delizia al limone, are the city's gastronomic symbol.",

    historyDetail:"Between the 9th and 12th centuries Amalfi was one of the four powerful Italian Maritime Republics, along with Genoa, Pisa and Venice, with a fleet that dominated trade in the western Mediterranean and with Arab Sicily and the Byzantine East. The city adopted the Amalfi Tables, one of the world's first codes of maritime law, which for centuries regulated the trade of many Mediterranean port cities. The Cathedral of Sant'Andrea, with its imposing staircase and Arab-Norman façade, still bears witness to the wealth of that era, which also came to an end because of a tsunami in 1343.",

    foodDetail:"Amalfi PGI lemons, with their thick, fragrant peel, grown on terraces overlooking the sea, are the signature ingredient of local gastronomy: from limoncello, a liqueur made by macerating the peels in alcohol, to delizia al limone, as well as jams, granitas and lemon salads. Scialatielli and paccheri with seafood, as well as fried or marinated anchovies, tell of the city's deep bond with the sea. Paper, produced in Amalfi since the Middle Ages thanks to ancient paper mills powered by local streams, is another famous artisan product of the city."

},

"Pisa":{

    lat:43.7228, lng:10.4017, tags:["arte"], img:"img/pisa.jpeg",

    history:"An ancient Maritime Republic, Pisa reached its peak between the 11th and 13th centuries. It is famous worldwide for the Leaning Tower, part of the Piazza dei Miracoli complex.",

    food:"Cecina (chickpea flatbread), zuppa alla pisana and cacciucco are typical specialties of the area.",

    historyDetail:"Pisa was one of the four Italian Maritime Republics and, between the 11th and 13th centuries, one of the leading naval and commercial powers of the Mediterranean, with trading bases stretching from Sardinia and Corsica to Constantinople. The construction of the monumental complex of Piazza dei Miracoli, with the Cathedral, the Baptistery and the famous Leaning Tower, begun in 1173 and made famous by its tilt caused by subsiding ground, bears witness to the wealth the city achieved. Its decline began in the 14th century with its naval defeat by Genoa, but Pisa remained an important cultural center and the birthplace of Galileo Galilei.",

    foodDetail:"Pisan cuisine has its roots in both the Tuscan peasant and seafaring traditions: cecina, a thin savory flatbread of chickpea flour baked in large copper pans, is one of the city's oldest and best-loved street foods. Cacciucco, a rich soup of fish and shellfish cooked with tomato, garlic and chili and served on toasted bread, is a typical dish of the whole Tuscan coast, also proudly claimed by the Pisan tradition. Torta co' bischeri, a rice and chocolate dessert typical of the Easter period, completes a simple repertoire rich in history."

},

"Siena":{

    lat:43.3188, lng:11.3308, tags:["arte"], img:"img/siena.jpeg",

    history:"Florence's historic rival in the Middle Ages, Siena has a perfectly preserved Gothic historic center, declared a UNESCO Heritage Site, and is famous for the Palio, the horse race in Piazza del Campo.",

    food:"Pici al ragù, panforte and ricciarelli are the great classics of the Sienese tradition.",

    historyDetail:"Probably of Etruscan origin, Siena became a powerful Republic in the Middle Ages, a rival of Florence, enriched by trade and banking: Monte dei Paschi di Siena, founded in 1472, is considered the oldest bank in the world still in operation. The defeat in the battle of Montaperti against Florence in 1260, followed centuries later by the final loss of independence in 1555, marked the political decline of the city, which nevertheless kept intact its extraordinary Gothic artistic heritage, now a UNESCO Heritage Site. The Palio di Siena, the spectacular horse race in Piazza del Campo, is still the heart of the city's identity.",

    foodDetail:"Pici, handmade fresh spaghetti without egg, are traditionally served with a meat ragù or with breadcrumbs (pici all'aglione), in a poor but tasty dish typical of Sienese peasant cooking. Panforte, a spiced cake of candied fruit, honey and almonds dating back to the Middle Ages, and ricciarelli, soft almond paste biscuits, are the signature sweets of the Tuscan Christmas tradition, now made all year round. The Chianti area surrounding the city also produces some of the most famous red wines in the world."

},

"Cinque Terre":{

    lat:44.1461, lng:9.6551, tags:["mare"], img:"img/cinque-terre.jpeg",

    history:"Five medieval villages perched on the Ligurian coast - Monterosso, Vernazza, Corniglia, Manarola and Riomaggiore - linked by scenic trails, declared a UNESCO World Heritage Site in 1997.",

    food:"Pesto alla genovese, focaccia and Monterosso anchovies are the typical flavors of the coast.",

    historyDetail:"The five villages that make up the Cinque Terre - Monterosso al Mare, Vernazza, Corniglia, Manarola and Riomaggiore - arose between the 10th and 14th centuries as small settlements of fishermen and farmers, perched on the cliffs of the eastern Ligurian coast to defend themselves from Saracen raids. Over the centuries the inhabitants turned the surrounding steep slopes into a dense network of terraces supported by dry stone walls, built by hand to grow vines and olives in an otherwise inhospitable land. Isolated until the railway was built in the 19th century, the five villages have kept their original appearance almost intact, so much so that they were declared a UNESCO World Heritage Site in 1997.",

    foodDetail:"Pesto alla genovese, made with basil, pine nuts, garlic, Parmesan, pecorino and Ligurian extra virgin olive oil, is the signature sauce of all of Liguria, including the Cinque Terre, where it traditionally dresses trofie or trenette. Monterosso anchovies, caught in local waters and served fried, marinated or salted, are an excellent product of the area, celebrated every year with a dedicated festival. Focaccia, soft and oily, accompanies almost every meal, while sciacchetrà, a sweet wine from dried grapes grown on terraces overlooking the sea, is the finest and rarest product of local winemaking."

},

"Dolomites":{

    lat:46.5405, lng:12.1357, tags:["montagna"], img:"img/dolomiti.jpeg",

    history:"The Dolomites are a mountain range of the eastern Alps, declared a UNESCO World Natural Heritage Site in 2009 for their peaks and rock walls, unique in the world.",

    food:"Canederli, speck and polenta with cheese are the typical dishes of the mountain tradition.",

    historyDetail:"The Dolomites take their name from the French geologist Déodat de Dolomieu, who in the late 18th century was the first to scientifically study the particular limestone rock that makes up this mountain group of the eastern Alps. Formed from ancient submerged coral reefs about 250 million years ago and then raised by tectonic movements, the Dolomites are famous today for their spires, vertical walls and colors that change with the light, a phenomenon known as 'enrosadira'. During the First World War these mountains were a dramatic battlefront between the Italian and Austro-Hungarian armies, and in 2009 UNESCO declared them a World Natural Heritage Site.",

    foodDetail:"The cuisine of the Dolomite valleys is strongly influenced by Austria-Hungary, of which these lands were part until 1918: canederli, large dumplings of stale bread, speck and cheese served in broth or dry with melted butter, are the most representative dish of the area. Speck, a smoked and cured ham from the pork leg made according to an ancient South Tyrolean tradition, accompanies almost every table along with alpine cheeses aged at altitude. Polenta, often served with melted cheese or porcini mushrooms, and apple strudel complete a repertoire designed to withstand the harsh mountain winters."

},

"Genoa":{

    lat:44.4056, lng:8.9463, tags:["mare","arte"], img:"https://loremflickr.com/800/600/genoa,italy",

    history:"An ancient Maritime Republic and the homeland of Christopher Columbus, Genoa preserves one of the largest medieval historic centers in Europe, with the noble Rolli palaces, a UNESCO Heritage Site.",

    food:"Genoese pesto, focaccia and farinata are the symbols of Ligurian cuisine.",

    historyDetail:"For centuries Genoa was, along with Venice, the most powerful Maritime Republic in the Mediterranean, with a commercial and military fleet that dominated the routes to the East, North Africa and the Black Sea. The city was the birthplace of Christopher Columbus, who in 1492 set sail for the Americas, changing the history of the world forever, and of many families of bankers and merchants who between the 16th and 17th centuries built the extraordinary noble palaces known as the Rolli, now a UNESCO World Heritage Site. Genoa's historic center, with its narrow caruggi, is among the largest and best preserved in Europe.",

    foodDetail:"Genoese pesto, made by pounding basil, pine nuts, garlic, Parmesan, Sardinian pecorino and Ligurian extra virgin olive oil in a marble mortar, is Italy's most famous sauce in the world and finds its classic expression in trofie and trenette al pesto. Genoese focaccia, tall, soft and covered with large dimples full of oil and coarse salt, is eaten at any time of day. Farinata, a thin sheet of chickpea flour baked in a wood-fired oven in large copper pans, is another symbol of Genoese street food, while cappon magro, an elaborate layered salad of fish and vegetables, bears witness to the richness of seafaring cuisine on feast days."

},

"Bari":{

    lat:41.1171, lng:16.8719, tags:["mare"], img:"https://loremflickr.com/800/600/bari,italy",

    history:"A port city on the Adriatic, Bari preserves in its historic center the Basilica of San Nicola, a pilgrimage destination for Orthodox and Catholic Christians from all over the world.",

    food:"Handmade orecchiette, focaccia barese and raw fish are the local specialties.",

    historyDetail:"A port city on the Adriatic with ancient origins, Bari grew in importance in the Middle Ages thanks to its strategic position along the trade and pilgrimage routes to the East. In 1087 a group of sailors from Bari stole the relics of St. Nicholas from Myra, in Turkey, bringing them to Bari and building the imposing Basilica of San Nicola to house them: since then the city has been an important pilgrimage center venerated by both Catholics and Orthodox Christians. The historic center, known as Bari Vecchia, preserves an intricate maze of medieval alleys overlooking the sea, while the modern city is today the main regional capital and port of Puglia.",

    foodDetail:"Orecchiette, handmade fresh pasta with a characteristic concave shape, are the symbol of Bari's cuisine: in the historic center it is still common to see women making them by hand outside their front doors, often served with turnip greens. Focaccia barese, soft and topped with cherry tomatoes and olives, is another great classic to enjoy at any time. Raw fish, especially sea urchins and mussels, is eaten very fresh directly at the fish market on the seafront, while Altamura PDO bread has accompanied the tables of the whole region for centuries."

},

"Lecce":{

    lat:40.3515, lng:18.1750, tags:["arte"], img:"https://loremflickr.com/800/600/lecce,italy",

    history:"Known as the \"Florence of the South\", Lecce is famous for Lecce Baroque, a unique architectural style carved in the local honey-colored stone.",

    food:"Pasticciotto, puccia salentina and caffè leccese are the typical delights.",

    historyDetail:"Of Messapian and then Roman origins, Lecce reached its peak between the 16th and 17th centuries, when it became one of the most important centers of the Kingdom of Naples in Salento. In this period the city was almost entirely rebuilt in the extraordinary Lecce Baroque style, defined by the use of Lecce stone, a soft, golden limestone easily carved, which allowed local craftsmen to create very rich decorations on churches and palaces. The Basilica of Santa Croce and the palaces of Piazza Duomo are considered among the finest examples of this style, which earned the city the nickname 'Florence of the South'.",

    foodDetail:"Pasticciotto, a small baked shortcrust pastry filled with custard, is Lecce's signature dessert and is traditionally eaten warm at breakfast. Puccia salentina, a soft round bread often filled with olives, cheese or cold cuts, is another great classic of local street food. Caffè leccese, served cold with almond milk and ice, is a specialty born in the city that then spread throughout Puglia. Taralli, small rings of crunchy dough often flavored with fennel or chili, complete a simple but extremely tasty repertoire."

},

"Cagliari":{

    lat:39.2238, lng:9.1217, tags:["mare"], img:"https://loremflickr.com/800/600/cagliari,italy",

    history:"The capital of Sardinia, Cagliari has Phoenician-Punic origins and overlooks the gulf from which it takes its name, the \"Gulf of Angels\", with the historic Castello district.",

    food:"Fregola with clams, porceddu and malloreddus are typical Sardinian dishes.",

    historyDetail:"Cagliari has very ancient origins, with Phoenician settlements dating back to the 8th century BC that exploited the gulf's strategic position for trade in the western Mediterranean. Ruled over the centuries by Carthaginians, Romans, Vandals, Byzantines, Pisans, Aragonese and Spaniards, the city finally became the capital of the Kingdom of Sardinia under the Savoy. The Castello district, enclosed by medieval walls built by the Pisans in the 13th century, overlooks the gulf from above, called the 'Gulf of Angels' for the particular light that illuminates it at sunset. Today Cagliari is the main economic, cultural and administrative center of Sardinia.",

    foodDetail:"Fregola with clams, a small oven-toasted Sardinian pasta cooked with clams and tomato, is one of the most representative dishes of Cagliari's cuisine and of all southern Sardinia. Porceddu, suckling pig slowly cooked on a spit or in a wood-fired oven with myrtle leaves, is the dish for great occasions in Sardinian tradition. Malloreddus, small semolina gnocchi flavored with saffron and served with sausage and tomato, and mullet bottarga, dried fish roe typical of the Sardinian lagoons, complete a gastronomic picture that combines seafaring and pastoral influences."

},

"Perugia":{

    lat:43.1122, lng:12.3888, tags:["arte","montagna"], img:"https://loremflickr.com/800/600/perugia,italy",

    history:"The capital of Umbria, of Etruscan origin, Perugia is famous for its ancient university and for Eurochocolate, the festival dedicated to chocolate.",

    food:"Torta al testo, umbricelli and the famous Perugina chocolate are the local specialties.",

    historyDetail:"Of ancient Etruscan origin, Perugia was one of the twelve city-states of the Etruscan league before being conquered by the Romans in the 3rd century BC. In the Middle Ages it became an important free commune, enriched by the University of Perugia, founded in 1308 and among the oldest in Italy, which still makes the city a lively student and international center, also thanks to the University for Foreigners. The historic center, perched on a hill and characterized by a dense system of medieval underground streets built above the remains of the Etruscan city, preserves monuments such as the Fontana Maggiore. Since 1994 the city has hosted Eurochocolate every year, in tribute to the historic Perugina confectionery company.",

    foodDetail:"Torta al testo, a thin flatbread of flour, water and baking soda cooked on a red-hot cast iron disk (the testo), is the typical bread of Umbria and is traditionally filled with sausage, wild greens or cheese. Umbricelli, slightly thicker handmade fresh spaghetti, are often served with spicy tomato sauce or with black truffle, widespread in the Umbrian woods. Perugia is also famous worldwide for Perugina chocolate, produced since 1907 and best known for Baci, the chocolates with a whole hazelnut and the famous love note inside the wrapper."

},

"Trieste":{

    lat:45.6495, lng:13.7768, tags:["mare"], img:"https://loremflickr.com/800/600/trieste,italy",

    history:"Overlooking the Gulf of Trieste, the city has a history tied to the Austro-Hungarian Empire, of which it was the main port, and preserves a Central European architecture unique in Italy.",

    food:"Triestine coffee, jota and sauerkraut are influenced by the Central European tradition.",

    historyDetail:"Trieste has a history unlike that of the rest of Italy: for over five centuries, from 1382 to 1918, it was part of the Austro-Hungarian Empire, becoming its main commercial port and a strategic hub toward Central Europe. This long Central European affiliation left a deep mark on the city's architecture and culture, which still preserves an atmosphere unique in Italy, with Austrian, Slovenian and Italian influences coexisting in the urban fabric. After the First World War Trieste passed to Italy, but for years it remained divided into Zones administered by Italy and Yugoslavia, until its final return to Italy in 1954.",

    foodDetail:"Triestine coffee enjoys a tradition unique in Italy, with its own terminology, a legacy of the historic Habsburg cafés still active in the city center. Jota, a soup of beans, sauerkraut, potatoes and pork, and sauerkraut itself, the fermented cabbage typical of Central European cuisine, reflect the Austro-Slovenian influence on local gastronomy. Plum gnocchi, sweet dumplings filled with plum, boiled and then tossed in butter and sugar, and strudel complete a gastronomic repertoire that mixes Italian, Austrian and Balkan flavors in a single border city."

},

"Bergamo":{

    lat:45.6983, lng:9.6773, tags:["montagna","arte"], img:"https://loremflickr.com/800/600/bergamo,italy",

    history:"Divided into Città Alta, enclosed by Venetian walls that are a UNESCO Heritage Site, and Città Bassa, Bergamo combines medieval history and modern liveliness at the foot of the Pre-Alps.",

    food:"Polenta e osei, casoncelli and stracchino are typical dishes of Bergamo.",

    historyDetail:"Bergamo is divided into two clearly distinct parts: Città Alta, perched on a hill and enclosed by mighty Venetian walls built in the 16th century, now a UNESCO World Heritage Site, and Città Bassa, which developed as a modern center at the foot of the hill. Of Celtic and then Roman origins, the city was long a free commune before becoming part of the Republic of Venice in 1428, the period from which most of its fortifications date. Bergamo was the birthplace of the composer Gaetano Donizetti, and today the city is a lively industrial and cultural center at the foot of the Orobie Pre-Alps, also linked to Città Alta by a historic funicular.",

    foodDetail:"Polenta e osei, yellow polenta traditionally served with small roasted birds (today often replaced by other meats), is the signature dish of Bergamo's tradition, also celebrated in a famous egg-shaped dessert of the same name made with sponge cake and chocolate. Casoncelli, large ravioli filled with meat, amaretti and raisins, served with melted butter, pancetta and sage, are another great local classic. Stracchino, a soft fresh cheese made from the milk of cows that came down 'stracche' (tired) from the alpine pastures in autumn, gave rise to many typical cheeses of the area."

},

"Parma":{

    lat:44.8015, lng:10.3279, tags:["arte"], img:"https://loremflickr.com/800/600/parma,italy",

    history:"A ducal city tied to the Farnese family, Parma is the homeland of the composer Giuseppe Verdi and has been named a UNESCO Creative City of Gastronomy.",

    food:"Parmigiano Reggiano, Prosciutto di Parma and tortelli d'erbetta are famous worldwide.",

    historyDetail:"Of Roman origin, Parma became an important Duchy in the Renaissance, ruled by the Farnese family from 1545, who made it a major artistic and cultural center, enriching the city with palaces, theaters and works of art. The composer Giuseppe Verdi was born in the countryside near Parma in 1813 and the city is still home to the Teatro Regio, a temple of the Italian opera tradition. Thanks to its extraordinary gastronomic tradition, in 2015 UNESCO named Parma a Creative City of Gastronomy, the only one in Italy along with a few other cities in the world.",

    foodDetail:"Parmigiano Reggiano, a hard cheese aged at least twelve months and made according to a strict specification, takes its name from the city and is among the most famous and imitated dairy products in the world. Prosciutto di Parma PDO, made from pork leg aged at least twelve months thanks to the particular microclimate of the Parma hills, is just as famous internationally. Tortelli d'erbetta, filled with ricotta and wild greens and served with melted butter and Parmesan, and torta fritta, a puffed, crisp pastry to enjoy with cold cuts, complete a repertoire considered among the most refined in Italy."

},

"Trento":{

    lat:46.0748, lng:11.1217, tags:["montagna"], img:"https://loremflickr.com/800/600/trento,italy",

    history:"Surrounded by the Dolomites, Trento was the seat of the important Council of Trent in the 16th century, which marked the Counter-Reformation of the Catholic Church.",

    food:"Canederli, polenta and apple strudel show the Austrian influence.",

    historyDetail:"Surrounded by the Dolomites and crossed by the Adige river, Trento was founded by the Romans as Tridentum and in the Middle Ages became an important Prince-Bishopric, governed directly by the bishop with broad political powers. The city entered European history in the 16th century as the seat of the Council of Trent (1545-1563), the ecclesiastical assembly that marked the Catholic Church's response to the Protestant Reformation, launching the Counter-Reformation. After centuries of Habsburg rule as part of Tyrol, Trento passed to Italy only in 1918, still preserving a strong identity and administrative autonomy as the capital of Trentino.",

    foodDetail:"Canederli, large dumplings of stale bread, speck and cheese served in broth or dry, are the dish most representative of Trentino cuisine, a direct legacy of the Central European tradition. Polenta, often paired with alpine cheeses or meat stews, is a staple of the local mountain tradition. Apple strudel, a rolled filled dessert typical of the Alpine area, traditionally ends meals, while apples themselves, grown in large quantities in the Trentino valleys, are one of the region's most important agricultural products, along with the famous Trentodoc sparkling wines."

},

"Assisi":{

    lat:43.0707, lng:12.6198, tags:["arte"], img:"https://loremflickr.com/800/600/assisi,italy",

    history:"The birthplace of St. Francis, patron saint of Italy, Assisi is a pilgrimage destination thanks to the Basilica of San Francesco, a UNESCO World Heritage Site.",

    food:"Strangozzi with truffle and torta al formaggio are typical Umbrian specialties.",

    historyDetail:"Assisi is inextricably linked to the figure of St. Francis, born here in 1182 and founder of the Franciscan order, who chose poverty and itinerant preaching, revolutionizing medieval spirituality. After his death in 1226, the city built in his honor the imposing Basilica of San Francesco, a masterpiece of Gothic architecture frescoed by great masters such as Cimabue and Giotto, which has been a destination of uninterrupted pilgrimage for almost eight centuries. St. Clare, founder of the order of the Poor Clares, was also born and lived in Assisi, making the city one of the most important spiritual centers of Christianity, now a UNESCO World Heritage Site.",

    foodDetail:"Strangozzi, a handmade fresh pasta similar to thick spaghetti made only with water and flour, are traditionally served with black truffle, widespread in the Umbrian woods around Assisi. Torta al formaggio, a bread enriched with pecorino and Parmesan typically prepared for Easter breakfast, has accompanied the area's religious celebrations for centuries. Umbrian extra virgin olive oil, produced on the hills surrounding the city, is considered among the finest in Italy, while legumes and grains complete a simple cuisine tied to the peasant and monastic tradition of the area."

}

};
