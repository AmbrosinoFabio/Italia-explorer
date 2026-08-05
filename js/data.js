/*=========================================================
    ITALIA EXPLORER
    data.js - dati condivisi delle citta (usato da tutte le pagine)

    history / food = versioni brevi, usate nel popup mappa (home)
    historyDetail / foodDetail = versioni estese, usate solo
    nella pagina di dettaglio (citta.html)
=========================================================*/

const citiesData={

"Roma":{

    lat:41.9028, lng:12.4964, tags:["arte"], img:"img/roma.jpeg",

    history:"Fondata secondo la leggenda nel 753 a.C., Roma fu il centro dell'Impero Romano che dominò gran parte del mondo antico. Divenuta poi capitale della cristianità, conserva ancora oggi monumenti simbolo come il Colosseo e il Foro Romano.",

    food:"Carbonara, cacio e pepe, amatriciana e i supplì sono i piatti simbolo della cucina romana.",

    historyDetail:"Secondo la leggenda, Roma fu fondata da Romolo il 21 aprile 753 a.C. sul colle Palatino, dopo la celebre disputa con il fratello Remo. Nei secoli successivi crebbe fino a diventare il centro di un impero che si estendeva dalla Britannia al Nord Africa, dalla Spagna alla Mesopotamia, lasciando un'eredità di diritto, architettura e lingua che ha plasmato l'Occidente. Dopo la caduta dell'Impero Romano d'Occidente nel 476 d.C., la città divenne il cuore spirituale della cristianità come sede del Papato, ruolo che mantiene ancora oggi con la Città del Vaticano al suo interno. Attraversando il Rinascimento e il Barocco, Roma si è arricchita di capolavori come la Cappella Sistina e la Fontana di Trevi, fino a diventare capitale del Regno d'Italia nel 1871 e poi della Repubblica Italiana.",

    foodDetail:"La cucina romana affonda le radici nella tradizione contadina e popolare, con piatti nati per non sprecare nulla: la coda alla vaccinara, i rigatoni con la pajata e la trippa alla romana sono eredità del cosiddetto 'quinto quarto', le parti meno nobili della carne lavorate nel quartiere di Testaccio, storica sede del mattatoio cittadino. Sul fronte della pasta, i quattro grandi classici sono la carbonara, la cacio e pepe, la gricia e l'amatriciana, ognuna con la propria disciplina non scritta ma difesa con passione dai romani. Tra gli antipasti spiccano i supplì, crocchette di riso fritte con un cuore filante di mozzarella, e i carciofi, protagonisti sia alla giudia (fritti) sia alla romana (brasati con menta ed erbe)."

},

"Milano":{

    lat:45.4642, lng:9.1900, tags:["arte"], img:"img/milano.jpeg",

    history:"Fondata dai Celti e poi conquistata dai Romani, Milano fu capitale del Ducato di Milano e oggi è la capitale economica e della moda d'Italia. Il suo Duomo, iniziato nel 1386, è uno dei simboli della città.",

    food:"Risotto allo zafferano, cotoletta alla milanese e panettone sono le specialità principali.",

    historyDetail:"Fondata dai Celti Insubri intorno al 590 a.C. con il nome di Mediolanum, la città fu conquistata dai Romani nel 222 a.C. e divenne per un periodo capitale dell'Impero Romano d'Occidente. Nel Medioevo fu libero Comune e poi capitale del potente Ducato di Milano sotto le famiglie Visconti e Sforza, che ne fecero un centro artistico di primo piano, culminato nella costruzione del Duomo, iniziata nel 1386 e conclusa solo cinque secoli dopo. Dopo essere passata sotto il dominio spagnolo, austriaco e francese, Milano divenne nell'Ottocento il motore dell'industrializzazione italiana e oggi è riconosciuta come capitale mondiale della moda e del design.",

    foodDetail:"La cucina milanese è legata alla tradizione contadina della Pianura Padana, ricca di burro e riso piuttosto che di olio d'oliva. Il risotto allo zafferano, detto anche risotto alla milanese, nacque secondo la leggenda dall'estro di un apprendista vetraio che tingeva i vetri delle finestre del Duomo con lo zafferano. La cotoletta alla milanese, panata e fritta nel burro con l'osso a vista, è un piatto identitario conteso anche dalla tradizione austriaca del Wiener Schnitzel. A Natale, il panettone, dolce lievitato con canditi e uvetta, ha reso famosa la pasticceria milanese in tutto il mondo, mentre l'aperitivo, nato proprio a Milano a fine Ottocento, è oggi un rito conviviale esportato ovunque."

},

"Venezia":{

    lat:45.4408, lng:12.3155, tags:["mare","arte"], img:"img/venezia.jpeg",

    history:"Fondata nel V secolo dai profughi in fuga dalle invasioni barbariche, Venezia divenne una potente Repubblica marinara che dominò il commercio nel Mediterraneo per secoli.",

    food:"Sarde in saor, risotto al nero di seppia e i cicchetti (piccoli stuzzichini) sono tipici della tradizione veneziana.",

    historyDetail:"Le origini di Venezia risalgono al V secolo, quando le popolazioni della terraferma veneta si rifugiarono sulle isole della laguna per sfuggire alle invasioni barbariche di Unni e Longobardi. Costruita su oltre cento isolette collegate da ponti e canali, la città sviluppò nei secoli una straordinaria potenza commerciale e militare come Repubblica di Venezia, detta la Serenissima, dominando le rotte del Mediterraneo orientale e i traffici con l'Oriente grazie a mercanti come Marco Polo. Il Palazzo Ducale, la Basilica di San Marco e l'Arsenale, uno dei più grandi complessi industriali del mondo preindustriale, testimoniano ancora oggi la ricchezza di quella stagione, terminata nel 1797 con la conquista napoleonica.",

    foodDetail:"La cucina veneziana è profondamente legata al mare e alla laguna: il baccalà mantecato, montato con olio fino a diventare una crema, è forse il piatto più identitario, insieme al fegato alla veneziana con cipolle. Le sarde in saor, marinate con cipolla, uvetta e pinoli, nascono come metodo di conservazione usato dai marinai prima dei lunghi viaggi. I cicchetti, piccoli stuzzichini serviti nei tradizionali bacari (osterie), accompagnano da secoli un'ombra, il bicchierino di vino tipico della tradizione lagunare. Non manca il riso, coltivato nell'entroterra veneto, protagonista di piatti come il risi e bisi, risotto con i piselli offerto un tempo al Doge il giorno di San Marco."

},

"Firenze":{

    lat:43.7696, lng:11.2558, tags:["arte"], img:"img/firenze.jpeg",

    history:"Culla del Rinascimento nel XV secolo grazie alla famiglia Medici, Firenze ha dato i natali ad artisti come Michelangelo, Leonardo da Vinci e Dante Alighieri.",

    food:"La bistecca alla fiorentina, il lampredotto e la ribollita sono i piatti tradizionali toscani.",

    historyDetail:"Fondata dai Romani come colonia militare nel I secolo a.C. con il nome di Florentia, Firenze crebbe nel Medioevo come libero Comune arricchito dal commercio della lana e dall'attività bancaria. Nel Quattrocento, sotto il governo della famiglia Medici, diventò il fulcro del Rinascimento europeo, attirando e formando artisti come Brunelleschi, Botticelli, Michelangelo e Leonardo da Vinci, oltre a pensatori come Machiavelli. La cupola del Duomo, progettata da Brunelleschi, rimase per secoli la più grande cupola in muratura mai costruita e ancora oggi domina lo skyline cittadino. Firenze fu inoltre, tra il 1865 e il 1871, la capitale del Regno d'Italia.",

    foodDetail:"La cucina fiorentina è fondata su ingredienti semplici e di qualità: la bistecca alla fiorentina, tagliata dalla razza bovina Chianina e cotta al sangue sulla brace, è il piatto simbolo della città e va gustata rigorosamente senza condimenti aggiunti. Il lampredotto, ricavato dal quarto stomaco del bovino e servito in un panino con salsa verde, è invece lo street food per eccellenza, venduto ancora oggi nei tradizionali trippai del centro. La ribollita, zuppa di pane raffermo, cavolo nero e fagioli, e la pappa al pomodoro raccontano la cultura del recupero tipica della cucina povera contadina toscana, oggi rivalutata come vera arte gastronomica."

},

"Napoli":{

    lat:40.8518, lng:14.2681, tags:["mare","arte"], img:"img/napoli.jpeg",

    history:"Fondata dai Greci con il nome di Neapolis (\"città nuova\"), Napoli fu capitale del Regno delle Due Sicilie e vanta uno dei centri storici più grandi d'Europa.",

    food:"È la patria della vera pizza napoletana, oltre a piatti come la sfogliatella e il ragù napoletano.",

    historyDetail:"Fondata dai coloni greci nell'VIII secolo a.C. con il nome di Partenope e poi rifondata come Neapolis, 'città nuova', nel V secolo a.C., Napoli fu conquistata dai Romani e in seguito divenne capitale del Regno di Napoli e poi del Regno delle Due Sicilie, uno degli stati più importanti d'Europa prima dell'Unità d'Italia. Il centro storico, tra i più estesi del continente, conserva un intreccio unico di stratificazioni greche, romane, angioine, aragonesi e borboniche, oggi Patrimonio dell'Umanità UNESCO. Alle spalle della città si erge il Vesuvio, il vulcano che nel 79 d.C. distrusse Pompei ed Ercolano e che resta ancora attivo, parte integrante dell'identità e del paesaggio napoletano.",

    foodDetail:"Napoli è universalmente riconosciuta come la patria della pizza: la Margherita, creata secondo la tradizione nel 1889 in onore della Regina d'Italia con i colori della bandiera, e la Marinara sono oggi protette da un disciplinare STG riconosciuto dall'Unione Europea. Oltre alla pizza, la città ha dato i natali al ragù napoletano, cotto per ore con vari tagli di carne, e a dolci come la sfogliatella, riccia o frolla, e il babà, imbevuto di rum. Lo street food napoletano include anche il cuoppo fritto e la pizza fritta, mentre il caffè, servito rigorosamente in tazzine piccole e forti, è quasi un rito quotidiano imprescindibile per la città."

},

"Torino":{

    lat:45.0703, lng:7.6869, tags:["montagna","arte"], img:"img/torino.jpeg",

    history:"Capitale del Regno di Sardegna e prima capitale d'Italia (1861-1865), Torino fu la culla dell'industria automobilistica italiana con la nascita della FIAT.",

    food:"Bagna cauda, agnolotti e il gianduiotto sono specialità tipiche piemontesi.",

    historyDetail:"Fondata dai Romani come Augusta Taurinorum, Torino divenne nel XVI secolo capitale del Ducato di Savoia e poi, dal 1720, del Regno di Sardegna, crescendo come elegante città sabauda con ampi viali, portici e palazzi barocchi. Nel 1861 fu la prima capitale del Regno d'Italia unito, prima che il ruolo passasse a Firenze e infine a Roma. Tra fine Ottocento e Novecento Torino divenne il cuore dell'industria automobilistica italiana con la fondazione della FIAT nel 1899, trasformandosi in una delle principali città industriali d'Europa e ospitando nel 2006 le Olimpiadi Invernali.",

    foodDetail:"La cucina torinese unisce influenze francesi e piemontesi: la bagna cauda, salsa calda a base di aglio, acciughe e olio in cui intingere verdure crude e cotte, è un piatto conviviale tipico dei mesi freddi. Gli agnolotti del plin, piccoli ravioli ripieni di carne arrosto 'pizzicati' a mano, e il vitello tonnato sono altri classici della tavola piemontese. Torino è inoltre la patria del cioccolato: il gianduiotto, cioccolatino a base di cacao e nocciole Piemonte IGP, fu inventato qui nell'Ottocento, mentre la città vanta una lunga tradizione di storiche caffetterie e cioccolaterie ancora attive nel centro."

},

"Bologna":{

    lat:44.4949, lng:11.3426, tags:["arte"], img:"img/bologna.jpeg",

    history:"Sede della più antica università del mondo occidentale ancora attiva, fondata nel 1088, Bologna è soprannominata \"la Dotta\" per la sua lunga tradizione universitaria.",

    food:"Tagliatelle al ragù, tortellini in brodo e mortadella sono i simboli della cucina bolognese.",

    historyDetail:"Di origini etrusche e poi romane, Bologna divenne nel Medioevo una delle città più ricche e popolose d'Europa grazie ai commerci e all'Università di Bologna, fondata nel 1088 e considerata la più antica del mondo occidentale ancora in attività. Le sue torri medievali, un tempo circa un centinaio e oggi ridotte a poche decine, erano simbolo del potere delle famiglie nobiliari cittadine, mentre i suoi lunghi portici, oltre 60 km, sono stati dichiarati Patrimonio dell'Umanità UNESCO nel 2021. Soprannominata 'la Dotta', 'la Grassa' per la ricchezza della sua cucina e 'la Rossa' per il colore dei suoi tetti, Bologna resta oggi un vivace centro culturale e gastronomico.",

    foodDetail:"Bologna è una delle capitali gastronomiche d'Italia: le tagliatelle al ragù, spesso erroneamente chiamate all'estero 'spaghetti bolognese', nascono da una ricetta depositata ufficialmente nel 1982 presso la Camera di Commercio cittadina. I tortellini, piccola pasta ripiena a forma di anello ispirata secondo la leggenda all'ombelico di Venere, si servono tradizionalmente in brodo di cappone. La mortadella, salume di carne di maiale aromatizzato con pepe in grani e pistacchi, prende il nome proprio dalla città, mentre la lasagna alla bolognese, con besciamella e ragù, completa il quartetto dei piatti simbolo della tradizione emiliana."

},

"Verona":{

    lat:45.4384, lng:10.9916, tags:["arte"], img:"img/verona.jpeg",

    history:"Città romana con un'Arena ancora oggi utilizzata per spettacoli, Verona è resa celebre in tutto il mondo da Shakespeare come ambientazione di Romeo e Giulietta.",

    food:"Il risotto all'Amarone, i bigoli con l'anatra e il pandoro sono le specialità veronesi.",

    historyDetail:"Fondata come importante colonia romana grazie alla sua posizione strategica sulle rotte verso il nord Europa, Verona conserva ancora oggi uno dei più grandi e meglio conservati anfiteatri romani al mondo, l'Arena, costruita nel I secolo d.C. e tuttora sede di spettacoli lirici estivi. Nel Medioevo la città fu dominata dalla famiglia della Scala (gli Scaligeri), che ne fece un centro di potere e cultura, per poi passare sotto la Repubblica di Venezia. Verona deve parte della sua fama mondiale a William Shakespeare, che ambientò qui la tragedia di Romeo e Giulietta, rendendo la cosiddetta Casa di Giulietta una delle mete più visitate d'Italia.",

    foodDetail:"La cucina veronese unisce influenze venete e mantovane: il risotto all'Amarone, mantecato con il celebre vino rosso della Valpolicella, è uno dei piatti più rappresentativi della città. I bigoli, spaghetti di grano tenero fatti con il torchio, si condiscono spesso con sugo d'anatra o di sarde. Il pandoro, dolce lievitato natalizio dalla caratteristica forma a stella, ha origini veronesi ottocentesche e oggi è uno dei dolci simbolo delle festività in tutta Italia, mentre la zona collinare intorno alla città produce vini pregiati come Amarone, Valpolicella e Soave."

},

"Palermo":{

    lat:38.1157, lng:13.3613, tags:["mare","arte"], img:"img/palermo.jpeg",

    history:"Fondata dai Fenici, Palermo fu capitale del Regno di Sicilia e conserva una fusione unica di stili arabo-normanni, visibile ad esempio nella Cappella Palatina.",

    food:"Arancine, panelle e pane con la milza sono i grandi classici dello street food palermitano.",

    historyDetail:"Fondata dai Fenici con il nome di Ziz, Palermo fu in seguito dominata da Cartaginesi, Greci, Romani, Bizantini e Arabi, che nel IX secolo la trasformarono in una delle città più ricche e colte del Mediterraneo. Con la conquista normanna nell'XI secolo divenne capitale del Regno di Sicilia, dando vita a uno straordinario stile arabo-normanno che fonde architettura islamica, bizantina e romanica, visibile nella Cappella Palatina e nel Duomo di Monreale, oggi Patrimonio UNESCO. Nei secoli successivi passò sotto Svevi, Angioini, Aragonesi e Borboni, accumulando stratificazioni culturali che rendono Palermo una delle città più multietniche d'Italia.",

    foodDetail:"La cucina palermitana riflette la storia multiculturale della città, con influenze arabe, spagnole e francesi: le arancine, palline di riso fritte farcite con ragù, burro o spinaci, sono il simbolo dello street food siciliano. Il pane con la milza (pani ca meusa), servito nei tipici chioschi del centro storico, e le panelle, frittelle di farina di ceci, completano il panorama del cibo di strada palermitano, celebrato anche dal celebre mercato di Ballarò. Tra i dolci, la cassata siciliana e i cannoli, ripieni di ricotta fresca, chiudono degnamente ogni pasto."

},

"Catania":{

    lat:37.5079, lng:15.0830, tags:["mare","montagna"], img:"img/catania.jpeg",

    history:"Fondata dai Greci ai piedi dell'Etna, Catania è stata più volte distrutta e ricostruita a causa di eruzioni e terremoti, l'ultima nel 1693, che le ha dato l'attuale volto barocco.",

    food:"La pasta alla Norma, gli arancini e la granita con brioche sono i piatti tipici catanesi.",

    historyDetail:"Fondata dai coloni greci di Calcide nell'VIII secolo a.C. ai piedi dell'Etna, il più grande vulcano attivo d'Europa, Catania ha convissuto per millenni con eruzioni e terremoti che ne hanno più volte cancellato e ricostruito il volto. Il terremoto del 1693, uno dei più devastanti della storia italiana, rase al suolo la città, che venne ricostruita secondo i canoni del barocco siciliano utilizzando la pietra lavica locale: il centro storico che ne risultò, oggi Patrimonio UNESCO, è considerato tra i più eleganti esempi di urbanistica barocca d'Europa. La convivenza con il vulcano, che sovrasta la città e ne fornisce il caratteristico colore scuro degli edifici, è ancora oggi parte integrante dell'identità catanese.",

    foodDetail:"La pasta alla Norma, con melanzane fritte, pomodoro, ricotta salata grattugiata e basilico, è il piatto simbolo di Catania, dedicato all'opera 'Norma' del compositore catanese Vincenzo Bellini. Le arancine catanesi, a forma conica per ricordare l'Etna, si differenziano da quelle palermitane sia nella forma sia nel nome (arancino al maschile). La granita, servita con la tipica brioche col tuppo per la colazione, è una vera istituzione cittadina, disponibile in gusti come mandorla, pistacchio e gelso, mentre il pistacchio di Bronte, coltivato sulle pendici dell'Etna, è ingrediente prezioso in molti piatti locali."

},

"Matera":{

    lat:40.6664, lng:16.6043, tags:["arte"], img:"img/matera.jpeg",

    history:"Abitata ininterrottamente da oltre 9.000 anni, Matera è famosa per i Sassi, antiche case scavate nella roccia, dichiarati Patrimonio dell'Umanità UNESCO nel 1993.",

    food:"Il pane di Matera IGP, la crapiata (zuppa di legumi e cereali) e i peperoni cruschi sono tipici della tradizione lucana.",

    historyDetail:"Matera è una delle città abitate ininterrottamente più antiche del mondo, con tracce di insediamenti umani che risalgono al Paleolitico, oltre 9.000 anni fa. Il suo tratto distintivo sono i Sassi, gli antichi rioni scavati direttamente nella roccia calcarea, abitati fino agli anni '50 del Novecento in condizioni di estrema povertà che spinsero lo Stato italiano a sgomberarli forzatamente, definendoli 'vergogna nazionale'. Solo a partire dagli anni '80 iniziò un lento recupero, culminato nel 1993 con l'iscrizione dei Sassi come Patrimonio dell'Umanità UNESCO e, nel 2019, con la nomina di Matera a Capitale Europea della Cultura.",

    foodDetail:"Il pane di Matera, riconosciuto IGP, si distingue per la sua caratteristica forma a cornetto e per la crosta spessa che ne garantisce una lunga conservazione, un tempo essenziale per le famiglie contadine della zona. La crapiata, zuppa di legumi e cereali misti, veniva tradizionalmente preparata per celebrare la fine della mietitura. I peperoni cruschi, essiccati al sole e poi fritti fino a diventare croccanti, sono un condimento tipico della cucina lucana, usato per insaporire paste e piatti a base di baccalà, altro ingrediente storicamente centrale nella tradizione gastronomica di Matera."

},

"Como":{

    lat:45.8081, lng:9.0852, tags:["lago"], img:"img/como.jpeg",

    history:"Fondata dai Romani sulle sponde dell'omonimo lago, Como è nota fin dall'Ottocento come meta di villeggiatura dell'aristocrazia europea.",

    food:"I missoltini (pesce di lago essiccato) e il risotto con il pesce di lago sono piatti tipici della zona.",

    historyDetail:"Fondata dai Romani sulle rive del lago che ne porta il nome, Como fu nell'antichità un importante centro strategico e commerciale lungo le rotte verso il nord delle Alpi, e diede i natali a personalità come Plinio il Vecchio e Plinio il Giovane. Nel Medioevo fu libero Comune, spesso in lotta con la vicina Milano, per poi entrare nell'orbita del Ducato di Milano. A partire dall'Ottocento il lago di Como divenne meta prediletta dell'aristocrazia europea, che vi costruì sontuose ville affacciate sull'acqua, come Villa d'Este e Villa Carlotta, contribuendo a costruire la fama internazionale della zona come una delle destinazioni più eleganti d'Italia.",

    foodDetail:"La cucina comasca è legata al lago e alla tradizione contadina prealpina: i missoltini, agoni essiccati al sole e poi conservati sotto sale, sono un antico metodo di conservazione del pesce di lago diventato oggi un piatto ricercato, spesso servito con polenta. Il risotto con il pesce persico, dal sapore delicato, e la trota affumicata completano l'offerta ittica del territorio. Tra i dolci, i resta, biscotti a forma di losanga tipici del periodo natalizio, e i miascia, dolci a base di pane raffermo e frutta secca, raccontano una cucina povera ma saporita, tipica delle valli lariane."

},

"Positano":{

    lat:40.6280, lng:14.4849, tags:["mare"], img:"img/positano.jpeg",

    history:"Antico borgo di pescatori sulla Costiera Amalfitana, Positano divenne famosa nel dopoguerra come meta d'élite grazie a scrittori e artisti che ne celebrarono la bellezza.",

    food:"Gli scialatielli ai frutti di mare e la delizia al limone sono specialità tipiche della costiera.",

    historyDetail:"Le origini di Positano si perdono nella leggenda, secondo cui il nome deriverebbe dal dio del mare Poseidone, ma le prime testimonianze storiche certe risalgono all'epoca romana, quando la zona era già frequentata come luogo di villeggiatura. Nel Medioevo divenne un borgo di pescatori e piccoli commercianti marittimi, parte della Repubblica marinara di Amalfi. Rimasta a lungo un semplice villaggio di pescatori, Positano conobbe una trasformazione radicale nel secondo dopoguerra, quando scrittori come John Steinbeck ne raccontarono la straordinaria bellezza, trasformandola in una delle mete turistiche più ambite ed esclusive al mondo.",

    foodDetail:"La cucina di Positano è quella tipica della Costiera Amalfitana, dominata dai sapori del mare e degli agrumi: gli scialatielli ai frutti di mare, pasta fresca corta e ruvida inventata negli anni '70 proprio sulla costiera, sono uno dei piatti più richiesti nei ristoranti locali. Il limone di Sorrento IGP, coltivato sui terrazzamenti che caratterizzano il paesaggio costiero, è protagonista di piatti come gli spaghetti al limone e di dolci come la celebre delizia al limone. Il pescato locale, spesso cucinato in semplicità con olio, aglio e prezzemolo, completa una tavola che punta tutto sulla freschezza degli ingredienti."

},

"Amalfi":{

    lat:40.6340, lng:14.6027, tags:["mare"], img:"img/amalfi.jpeg",

    history:"Nel Medioevo fu una potente Repubblica Marinara con proprie leggi commerciali (le Tavole Amalfitane), tra le prime al mondo in materia di diritto marittimo.",

    food:"I limoni di Amalfi IGP, usati per il limoncello e la delizia al limone, sono il simbolo gastronomico della città.",

    historyDetail:"Amalfi fu tra il IX e il XII secolo una delle quattro potenti Repubbliche Marinare italiane, insieme a Genova, Pisa e Venezia, con una flotta che dominava i commerci nel Mediterraneo occidentale e con la Sicilia araba e l'Oriente bizantino. La città si dotò delle Tavole Amalfitane, uno dei primi codici di diritto marittimo del mondo, che regolarono per secoli i traffici commerciali di numerose città portuali del Mediterraneo. Il Duomo di Sant'Andrea, con la sua imponente scalinata e la facciata in stile arabo-normanno, testimonia ancora oggi la ricchezza di quella stagione, terminata anche a causa di un maremoto nel 1343.",

    foodDetail:"I limoni di Amalfi IGP, dalla buccia spessa e profumata, coltivati sui terrazzamenti a picco sul mare, sono l'ingrediente simbolo della gastronomia locale: dal limoncello, liquore ottenuto dalla macerazione delle scorze in alcol, alla delizia al limone, passando per marmellate, granite e insalate di limoni. Gli scialatielli e i paccheri ai frutti di mare, così come le alici fritte o marinate, raccontano il legame profondo della città con il mare. La carta, prodotta ad Amalfi fin dal Medioevo grazie alle antiche cartiere alimentate dai torrenti locali, è un altro celebre prodotto artigianale della città."

},

"Pisa":{

    lat:43.7228, lng:10.4017, tags:["arte"], img:"img/pisa.jpeg",

    history:"Antica Repubblica Marinara, Pisa raggiunse il suo massimo splendore tra l'XI e il XIII secolo. È famosa in tutto il mondo per la Torre Pendente, parte del complesso di Piazza dei Miracoli.",

    food:"La cecina (torta di ceci), la zuppa alla pisana e il cacciucco sono specialità tipiche della zona.",

    historyDetail:"Pisa fu una delle quattro Repubbliche Marinare italiane e, tra l'XI e il XIII secolo, una delle principali potenze navali e commerciali del Mediterraneo, con basi commerciali che si estendevano dalla Sardegna alla Corsica fino a Costantinopoli. La costruzione del complesso monumentale di Piazza dei Miracoli, con il Duomo, il Battistero e la celebre Torre Pendente, iniziata nel 1173 e resa famosa dalla sua inclinazione dovuta a un cedimento del terreno, testimonia la ricchezza raggiunta dalla città. Il declino iniziò nel XIV secolo con la sconfitta navale contro Genova, ma Pisa rimase un importante centro culturale, città natale di Galileo Galilei.",

    foodDetail:"La cucina pisana affonda le radici sia nella tradizione contadina toscana sia in quella marinara: la cecina, sottile torta salata a base di farina di ceci cotta al forno in grandi teglie di rame, è uno degli street food più antichi e amati della città. Il cacciucco, ricca zuppa di pesce e crostacei cotta con pomodoro, aglio e peperoncino e servita su crostini di pane, è un piatto tipico di tutta la costa toscana rivendicato con orgoglio anche dalla tradizione pisana. La torta co' bischeri, dolce a base di riso e cioccolato tipico del periodo pasquale, completa un repertorio semplice ma ricco di storia."

},

"Siena":{

    lat:43.3188, lng:11.3308, tags:["arte"], img:"img/siena.jpeg",

    history:"Rivale storica di Firenze nel Medioevo, Siena conserva un centro storico gotico perfettamente conservato, dichiarato Patrimonio UNESCO, ed è famosa per il Palio, la corsa di cavalli in Piazza del Campo.",

    food:"Pici al ragù, panforte e ricciarelli sono i grandi classici della tradizione senese.",

    historyDetail:"Di probabili origini etrusche, Siena divenne nel Medioevo una potente Repubblica rivale di Firenze, arricchita dal commercio e dall'attività bancaria: il Monte dei Paschi di Siena, fondato nel 1472, è considerato la banca più antica del mondo ancora in attività. La sconfitta nella battaglia di Montaperti contro Firenze nel 1260, seguita secoli dopo dalla definitiva perdita dell'indipendenza nel 1555, segnò il declino politico della città, che però conservò intatto il suo straordinario patrimonio artistico gotico, oggi Patrimonio UNESCO. Il Palio di Siena, la spettacolare corsa di cavalli in Piazza del Campo, resta ancora oggi il cuore identitario della città.",

    foodDetail:"I pici, spaghetti di pasta fresca fatti a mano senza uovo, si condiscono tradizionalmente con un ragù di carne o con le briciole (pici all'aglione), in un piatto povero ma saporito tipico della cucina contadina senese. Il panforte, dolce speziato a base di frutta candita, miele e mandorle risalente al Medioevo, e i ricciarelli, morbidi biscotti di pasta di mandorle, sono i dolci simbolo della tradizione natalizia toscana, oggi prodotti tutto l'anno. La zona del Chianti, che circonda la città, produce inoltre alcuni dei vini rossi più celebri al mondo."

},

"Cinque Terre":{

    lat:44.1461, lng:9.6551, tags:["mare"], img:"img/cinque-terre.jpeg",

    history:"Cinque borghi medievali arroccati sulla costa ligure - Monterosso, Vernazza, Corniglia, Manarola e Riomaggiore - collegati da sentieri panoramici, dichiarati Patrimonio dell'Umanità UNESCO nel 1997.",

    food:"Il pesto alla genovese, la focaccia e le acciughe di Monterosso sono i sapori tipici della costa.",

    historyDetail:"I cinque borghi che compongono le Cinque Terre - Monterosso al Mare, Vernazza, Corniglia, Manarola e Riomaggiore - nacquero tra il X e il XIV secolo come piccoli insediamenti di pescatori e agricoltori, arroccati sulle scogliere della costa ligure orientale per difendersi dalle incursioni saracene. Nei secoli, gli abitanti trasformarono i ripidi pendii circostanti in una fitta rete di terrazzamenti sorretti da muretti a secco, costruiti a mano per coltivare vite e ulivi in un territorio altrimenti inospitale. Rimasti isolati fino alla costruzione della ferrovia nell'Ottocento, i cinque borghi hanno conservato quasi intatta la loro fisionomia originaria, tanto da essere dichiarati Patrimonio dell'Umanità UNESCO nel 1997.",

    foodDetail:"Il pesto alla genovese, preparato con basilico, pinoli, aglio, parmigiano, pecorino e olio extravergine d'oliva ligure, è la salsa simbolo di tutta la Liguria, comprese le Cinque Terre, dove tradizionalmente condisce le trofie o le trenette. Le acciughe di Monterosso, pescate nelle acque locali e servite fritte, marinate o sotto sale, sono un prodotto d'eccellenza della zona, celebrato ogni anno con una sagra dedicata. La focaccia, soffice e unta d'olio, accompagna quasi ogni pasto, mentre lo sciacchetrà, vino dolce da uve appassite coltivate sui terrazzamenti a picco sul mare, è il prodotto più pregiato e raro dell'enologia locale."

},

"Dolomiti":{

    lat:46.5405, lng:12.1357, tags:["montagna"], img:"img/dolomiti.jpeg",

    history:"Le Dolomiti sono una catena montuosa delle Alpi orientali, dichiarata Patrimonio Naturale dell'Umanità UNESCO nel 2009 per le sue guglie e pareti rocciose uniche al mondo.",

    food:"Canederli, speck e polenta con formaggio sono i piatti tipici della tradizione montana.",

    historyDetail:"Le Dolomiti prendono il nome dal geologo francese Déodat de Dolomieu, che alla fine del Settecento fu il primo a studiare scientificamente la particolare roccia calcarea che compone questo gruppo montuoso delle Alpi orientali. Formatesi da antiche barriere coralline sommerse circa 250 milioni di anni fa e poi sollevate dai movimenti tettonici, le Dolomiti sono oggi celebri per le loro guglie, pareti verticali e colori che cambiano con la luce, un fenomeno noto come 'enrosadira'. Durante la Prima Guerra Mondiale queste montagne furono un drammatico fronte di battaglia tra l'esercito italiano e quello austro-ungarico, e nel 2009 l'UNESCO le ha dichiarate Patrimonio Naturale dell'Umanità.",

    foodDetail:"La cucina delle valli dolomitiche risente fortemente dell'influenza austro-ungarica, di cui questi territori fecero parte fino al 1918: i canederli, grosse polpette di pane raffermo, speck e formaggio servite in brodo o asciutte con burro fuso, sono il piatto più rappresentativo della zona. Lo speck, prosciutto di coscia di maiale affumicato e stagionato secondo un'antica tradizione altoatesina, accompagna quasi ogni tavola insieme a formaggi di malga stagionati in altura. La polenta, spesso servita con formaggi fusi o funghi porcini, e lo strudel di mele completano un repertorio pensato per resistere ai rigidi inverni di montagna."

},

"Genova":{

    lat:44.4056, lng:8.9463, tags:["mare","arte"], img:"https://loremflickr.com/800/600/genoa,italy",

    history:"Antica Repubblica Marinara e patria di Cristoforo Colombo, Genova conserva uno dei centri storici medievali più grandi d'Europa, con i palazzi nobiliari dei Rolli, Patrimonio UNESCO.",

    food:"Il pesto genovese, la focaccia e la farinata sono i simboli della cucina ligure.",

    historyDetail:"Genova fu per secoli, insieme a Venezia, la più potente Repubblica Marinara del Mediterraneo, con una flotta commerciale e militare che dominava le rotte verso l'Oriente, il Nord Africa e il Mar Nero. La città diede i natali a Cristoforo Colombo, che nel 1492 salpò alla volta delle Americhe cambiando per sempre la storia del mondo, e a numerose famiglie di banchieri e mercanti che tra Cinquecento e Seicento fecero costruire gli straordinari palazzi nobiliari dei cosiddetti Rolli, oggi Patrimonio dell'Umanità UNESCO. Il centro storico di Genova, con i suoi stretti caruggi, è tra i più estesi e meglio conservati d'Europa.",

    foodDetail:"Il pesto genovese, preparato pestando basilico, pinoli, aglio, parmigiano, pecorino sardo e olio extravergine ligure in un mortaio di marmo, è la salsa più famosa d'Italia nel mondo e trova nella trofia e nelle trenette al pesto la sua espressione classica. La focaccia genovese, alta, morbida e ricoperta di grossi buchi pieni d'olio e sale grosso, è consumata a qualsiasi ora del giorno. La farinata, sottile sfoglia di farina di ceci cotta in forno a legna in grandi teglie di rame, è un altro simbolo dello street food genovese, mentre il cappon magro, elaborata insalata di pesce e verdure a strati, testimonia la ricchezza della cucina marinara nei giorni di festa."

},

"Bari":{

    lat:41.1171, lng:16.8719, tags:["mare"], img:"https://loremflickr.com/800/600/bari,italy",

    history:"Città portuale sull'Adriatico, Bari conserva nel centro storico la Basilica di San Nicola, meta di pellegrinaggio per cristiani ortodossi e cattolici da tutto il mondo.",

    food:"Le orecchiette fatte a mano, la focaccia barese e il pesce crudo sono le specialità locali.",

    historyDetail:"Città portuale sull'Adriatico di antiche origini, Bari crebbe d'importanza nel Medioevo grazie alla sua posizione strategica lungo le rotte commerciali e di pellegrinaggio verso l'Oriente. Nel 1087 un gruppo di marinai baresi trafugò da Myra, in Turchia, le reliquie di San Nicola, portandole a Bari e costruendo per custodirle l'imponente Basilica di San Nicola: da allora la città è diventata un importante centro di pellegrinaggio venerato sia dai cattolici sia dai cristiani ortodossi. Il centro storico, detto Bari Vecchia, conserva un intricato dedalo di vicoli medievali affacciati sul mare, mentre la città moderna è oggi il principale capoluogo e porto della Puglia.",

    foodDetail:"Le orecchiette, pasta fresca fatta a mano dalla caratteristica forma concava, sono il simbolo della cucina barese: nel centro storico è ancora oggi comune vedere le signore prepararle a mano davanti alle porte di casa, spesso condite con le cime di rapa. La focaccia barese, morbida e condita con pomodorini e olive, è un altro grande classico da gustare a qualsiasi ora. Il pesce crudo, in particolare i ricci di mare e le cozze, viene consumato freschissimo direttamente al mercato del pesce sul lungomare, mentre il pane di Altamura DOP accompagna da secoli le tavole di tutta la regione."

},

"Lecce":{

    lat:40.3515, lng:18.1750, tags:["arte"], img:"https://loremflickr.com/800/600/lecce,italy",

    history:"Conosciuta come la \"Firenze del Sud\", Lecce è famosa per il barocco leccese, uno stile architettonico unico scolpito nella pietra locale color miele.",

    food:"Il pasticciotto, la puccia salentina e il caffè leccese sono le delizie tipiche.",

    historyDetail:"Di origini messapiche e poi romane, Lecce raggiunse il suo massimo splendore tra il Cinquecento e il Seicento, quando divenne uno dei centri più importanti del Regno di Napoli nel Salento. In questo periodo la città fu quasi interamente ricostruita nello straordinario stile barocco leccese, caratterizzato dall'uso della pietra leccese, un calcare tenero e dorato facilmente scolpibile che permise agli artigiani locali di realizzare decorazioni ricchissime su chiese e palazzi. La Basilica di Santa Croce e i palazzi di Piazza Duomo sono considerati tra gli esempi più alti di questo stile, che valse alla città il soprannome di 'Firenze del Sud'.",

    foodDetail:"Il pasticciotto, piccola pasta frolla ripiena di crema pasticcera cotta al forno, è il dolce simbolo di Lecce e viene tradizionalmente consumato caldo a colazione. La puccia salentina, pane tondo e morbido spesso farcito con olive, formaggio o affettati, è un altro grande classico dello street food locale. Il caffè leccese, servito freddo con latte di mandorla e ghiaccio, è una specialità nata proprio in città e diffusasi poi in tutta la Puglia. I taralli, piccoli anelli di pasta croccante spesso aromatizzati con finocchietto o peperoncino, completano un repertorio semplice ma estremamente saporito."

},

"Cagliari":{

    lat:39.2238, lng:9.1217, tags:["mare"], img:"https://loremflickr.com/800/600/cagliari,italy",

    history:"Capitale della Sardegna, Cagliari ha origini fenicio-puniche e domina il golfo da cui prende il nome, il \"Golfo degli Angeli\", con il quartiere storico del Castello.",

    food:"La fregola con le arselle, il porceddu e i malloreddus sono piatti tipici sardi.",

    historyDetail:"Cagliari ha origini antichissime, con insediamenti fenici risalenti all'VIII secolo a.C. che sfruttavano la posizione strategica del golfo per i commerci nel Mediterraneo occidentale. Dominata nei secoli da Cartaginesi, Romani, Vandali, Bizantini, Pisani, Aragonesi e Spagnoli, la città divenne infine capitale del Regno di Sardegna sotto i Savoia. Il quartiere del Castello, cinto da mura medievali costruite dai Pisani nel XIII secolo, domina dall'alto il golfo, chiamato 'Golfo degli Angeli' per la particolare luce che lo illumina al tramonto. Oggi Cagliari è il principale centro economico, culturale e amministrativo della Sardegna.",

    foodDetail:"La fregola con le arselle, piccola pasta sarda tostata al forno e cotta con vongole e pomodoro, è uno dei piatti più rappresentativi della cucina cagliaritana e dell'intera Sardegna meridionale. Il porceddu, maialetto da latte cotto lentamente allo spiedo o al forno a legna con foglie di mirto, è il piatto delle grandi occasioni nella tradizione sarda. I malloreddus, piccoli gnocchetti di semola aromatizzati allo zafferano e conditi con salsiccia e pomodoro, e la bottarga di muggine, uova di pesce essiccate tipiche degli stagni sardi, completano un panorama gastronomico che unisce influenze marinare e pastorali."

},

"Perugia":{

    lat:43.1122, lng:12.3888, tags:["arte","montagna"], img:"https://loremflickr.com/800/600/perugia,italy",

    history:"Capoluogo dell'Umbria di origini etrusche, Perugia è famosa per la sua antica università e per l'Eurochocolate, il festival dedicato al cioccolato.",

    food:"La torta al testo, gli umbricelli e il celebre cioccolato Perugina sono le specialità locali.",

    historyDetail:"Di antiche origini etrusche, Perugia fu una delle dodici città-stato della lega etrusca prima di essere conquistata dai Romani nel III secolo a.C. Nel Medioevo divenne un importante libero Comune, arricchito dalla presenza dell'Università di Perugia, fondata nel 1308 e tra le più antiche d'Italia, che ancora oggi rende la città un vivace centro studentesco e internazionale grazie anche all'Università per Stranieri. Il centro storico, arroccato su una collina e caratterizzato da un fitto sistema di vie sotterranee medievali costruite sopra i resti della città etrusca, conserva monumenti come la Fontana Maggiore. Dal 1994 la città ospita ogni anno Eurochocolate, in omaggio alla storica industria dolciaria Perugina.",

    foodDetail:"La torta al testo, sottile focaccia di farina, acqua e bicarbonato cotta su un disco di ghisa rovente (il testo), è il pane tipico dell'Umbria e viene tradizionalmente farcita con salsiccia, erbe di campo o formaggi. Gli umbricelli, spaghetti di pasta fresca fatti a mano leggermente più spessi, si condiscono spesso con sugo di pomodoro piccante o con il tartufo nero, molto diffuso nei boschi umbri. Perugia è inoltre celebre in tutto il mondo per il cioccolato Perugina, prodotto dal 1907 e famoso soprattutto per i Baci, i cioccolatini con nocciola intera e il celebre bigliettino d'amore all'interno dell'incarto."

},

"Trieste":{

    lat:45.6495, lng:13.7768, tags:["mare"], img:"https://loremflickr.com/800/600/trieste,italy",

    history:"Affacciata sul Golfo di Trieste, la città ha una storia legata all'Impero Austro-Ungarico, di cui fu il principale porto, e conserva un'architettura mitteleuropea unica in Italia.",

    food:"Il caffè triestino, la jota e i crauti sono influenzati dalla tradizione mitteleuropea.",

    historyDetail:"Trieste ha una storia particolare rispetto al resto d'Italia: per oltre cinque secoli, dal 1382 al 1918, fece parte dell'Impero Austro-Ungarico, diventandone il principale porto commerciale e uno snodo strategico verso l'Europa centrale. Questa lunga appartenenza mitteleuropea ha lasciato un'impronta profonda nell'architettura e nella cultura della città, che ancora oggi conserva un'atmosfera unica in Italia, con influenze austriache, slovene e italiane che convivono nel tessuto urbano. Dopo la Prima Guerra Mondiale Trieste passò all'Italia, ma rimase per anni divisa tra Zone amministrate da Italia e Jugoslavia, fino al definitivo ritorno all'Italia nel 1954.",

    foodDetail:"Il caffè triestino gode di una tradizione unica in Italia, con una terminologia propria, eredità delle storiche caffetterie asburgiche ancora attive nel centro cittadino. La jota, zuppa a base di fagioli, crauti, patate e carne di maiale, e i crauti stessi, cavolo fermentato tipico della cucina mitteleuropea, testimoniano l'influenza austro-slovena sulla gastronomia locale. Gli gnocchi di susine, dolci ripieni di prugna cotti e poi passati nel burro e zucchero, e lo strudel completano un repertorio gastronomico che mescola sapori italiani, austriaci e balcanici in un'unica città di confine."

},

"Bergamo":{

    lat:45.6983, lng:9.6773, tags:["montagna","arte"], img:"https://loremflickr.com/800/600/bergamo,italy",

    history:"Divisa tra Città Alta, cinta da mura veneziane Patrimonio UNESCO, e Città Bassa, Bergamo unisce storia medievale e vivacità moderna ai piedi delle Prealpi.",

    food:"La polenta e osei, i casoncelli e lo stracchino sono piatti tipici bergamaschi.",

    historyDetail:"Bergamo è divisa in due parti nettamente distinte: Città Alta, arroccata su un colle e cinta da possenti mura veneziane costruite nel Cinquecento, oggi Patrimonio dell'Umanità UNESCO, e Città Bassa, sviluppatasi come centro moderno ai piedi della collina. Di origini celtiche e poi romane, la città fu a lungo libero Comune prima di entrare a far parte della Repubblica di Venezia nel 1428, periodo a cui risalgono gran parte delle sue fortificazioni. Bergamo diede i natali al compositore Gaetano Donizetti, mentre oggi la città è un vivace centro industriale e culturale ai piedi delle Prealpi orobiche, collegata a Città Alta anche da una storica funicolare.",

    foodDetail:"La polenta e osei, polenta gialla servita tradizionalmente con piccoli uccelletti arrosto (oggi spesso sostituiti da altre carni), è il piatto simbolo della tradizione bergamasca, celebrato anche in un celebre dolce omonimo a forma di uovo con pan di Spagna e cioccolato. I casoncelli, grandi ravioli ripieni di carne, amaretti e uvetta conditi con burro fuso, pancetta e salvia, sono un altro grande classico locale. Lo stracchino, formaggio fresco a pasta molle prodotto con il latte delle mucche che 'stracche' scendevano dagli alpeggi in autunno, ha dato origine a numerosi formaggi tipici della zona."

},

"Parma":{

    lat:44.8015, lng:10.3279, tags:["arte"], img:"https://loremflickr.com/800/600/parma,italy",

    history:"Città ducale legata alla famiglia Farnese, Parma è patria del compositore Giuseppe Verdi ed è stata nominata Città Creativa UNESCO per la Gastronomia.",

    food:"Il Parmigiano Reggiano, il Prosciutto di Parma e i tortelli d'erbetta sono famosi in tutto il mondo.",

    historyDetail:"Di origini romane, Parma divenne nel Rinascimento un importante Ducato governato dalla famiglia Farnese a partire dal 1545, che ne fece un centro artistico e culturale di rilievo, arricchendo la città di palazzi, teatri e opere d'arte. Il compositore Giuseppe Verdi nacque nelle campagne vicino a Parma nel 1813 e la città ospita ancora oggi il Teatro Regio, tempio della tradizione operistica italiana. Grazie alla sua straordinaria tradizione gastronomica, nel 2015 l'UNESCO ha nominato Parma Città Creativa per la Gastronomia, unica in Italia insieme ad altre poche città al mondo.",

    foodDetail:"Il Parmigiano Reggiano, formaggio a pasta dura stagionato almeno dodici mesi e prodotto secondo un rigido disciplinare, prende il nome proprio dalla città ed è tra i prodotti caseari più celebri e imitati al mondo. Il Prosciutto di Parma DOP, ottenuto dalla coscia di maiale stagionata per almeno dodici mesi grazie al particolare microclima delle colline parmensi, è altrettanto famoso a livello internazionale. I tortelli d'erbetta, ripieni di ricotta ed erbette di campo conditi con burro fuso e parmigiano, e la torta fritta, sfoglia gonfia e croccante da accompagnare con salumi, completano un repertorio considerato tra i più raffinati d'Italia."

},

"Trento":{

    lat:46.0748, lng:11.1217, tags:["montagna"], img:"https://loremflickr.com/800/600/trento,italy",

    history:"Circondata dalle Dolomiti, Trento fu sede dell'importante Concilio di Trento nel XVI secolo, che segnò la Controriforma della Chiesa cattolica.",

    food:"I canederli, la polenta e lo strudel di mele risentono dell'influenza austriaca.",

    historyDetail:"Circondata dalle Dolomiti e attraversata dal fiume Adige, Trento fu fondata dai Romani come Tridentum e divenne nel Medioevo un importante Principato Vescovile, governato direttamente dal vescovo con ampi poteri politici. La città entrò nella storia europea nel Cinquecento come sede del Concilio di Trento (1545-1563), l'assise ecclesiastica che segnò la risposta della Chiesa cattolica alla Riforma protestante, dando avvio alla Controriforma. Dopo secoli di dominio asburgico come parte del Tirolo, Trento passò all'Italia solo nel 1918, conservando ancora oggi una forte identità e autonomia amministrativa come capoluogo del Trentino.",

    foodDetail:"I canederli, grandi polpette di pane raffermo, speck e formaggio servite in brodo o asciutte, sono il piatto più identitario della cucina trentina, eredità diretta della tradizione mitteleuropea. La polenta, spesso abbinata a formaggi di malga o a spezzatini di carne, è un alimento base della tradizione montana locale. Lo strudel di mele, dolce ripieno arrotolato tipico dell'area alpina, chiude tradizionalmente i pasti, mentre le mele stesse, coltivate in grande quantità nelle valli trentine, sono uno dei prodotti agricoli più importanti della regione, insieme ai celebri vini spumanti Trentodoc."

},

"Assisi":{

    lat:43.0707, lng:12.6198, tags:["arte"], img:"https://loremflickr.com/800/600/assisi,italy",

    history:"Città natale di San Francesco, patrono d'Italia, Assisi è meta di pellegrinaggio grazie alla Basilica di San Francesco, Patrimonio dell'Umanità UNESCO.",

    food:"Gli strangozzi al tartufo e la torta al formaggio sono specialità tipiche umbre.",

    historyDetail:"Assisi è indissolubilmente legata alla figura di San Francesco, nato qui nel 1182 e fondatore dell'ordine francescano, che scelse la povertà e la predicazione itinerante rivoluzionando la spiritualità medievale. Dopo la sua morte nel 1226, la città costruì in suo onore l'imponente Basilica di San Francesco, capolavoro dell'architettura gotica affrescato da grandi maestri come Cimabue e Giotto, diventata meta di pellegrinaggio ininterrotto per quasi otto secoli. Anche Santa Chiara, fondatrice dell'ordine delle Clarisse, nacque e visse ad Assisi, rendendo la città uno dei centri spirituali più importanti del cristianesimo, oggi Patrimonio dell'Umanità UNESCO.",

    foodDetail:"Gli strangozzi, pasta fresca artigianale simile a spaghetti spessi fatta solo con acqua e farina, si condiscono tradizionalmente con il tartufo nero, molto diffuso nei boschi umbri intorno ad Assisi. La torta al formaggio, pane arricchito con pecorino e parmigiano tipicamente preparato per la colazione di Pasqua, accompagna da secoli le celebrazioni religiose della zona. L'olio extravergine d'oliva umbro, prodotto sulle colline che circondano la città, è considerato tra i più pregiati d'Italia, mentre i legumi e i cereali completano una cucina semplice e legata alla tradizione contadina e monastica del territorio."

}

};
