import type {
  CascadeLink,
  DeepDiveContent,
  KeyFigure,
  Myth,
  Sector,
  SolutionColumn,
  Source,
  Summary,
  TippingElement,
} from './types';

/* -------------------------------------------------------------------------- */
/*  Quellenverzeichnis                                                         */
/* -------------------------------------------------------------------------- */

export const sources: Source[] = [
  {
    id: 'ipcc-wg1',
    short: 'IPCC AR6 WGI',
    title: 'Climate Change 2021: The Physical Science Basis',
    publisher: 'IPCC, Sechster Sachstandsbericht, Arbeitsgruppe I',
    year: '2021',
    url: 'https://www.ipcc.ch/report/ar6/wg1/',
  },
  {
    id: 'ipcc-wg2',
    short: 'IPCC AR6 WGII',
    title: 'Climate Change 2022: Impacts, Adaptation and Vulnerability',
    publisher: 'IPCC, Sechster Sachstandsbericht, Arbeitsgruppe II',
    year: '2022',
    url: 'https://www.ipcc.ch/report/ar6/wg2/',
  },
  {
    id: 'ipcc-wg3',
    short: 'IPCC AR6 WGIII',
    title: 'Climate Change 2022: Mitigation of Climate Change',
    publisher: 'IPCC, Sechster Sachstandsbericht, Arbeitsgruppe III',
    year: '2022',
    url: 'https://www.ipcc.ch/report/ar6/wg3/',
  },
  {
    id: 'ipcc-syr',
    short: 'IPCC AR6 SYR',
    title: 'Climate Change 2023: Synthesis Report',
    publisher: 'IPCC, Sechster Sachstandsbericht, Synthesebericht',
    year: '2023',
    url: 'https://www.ipcc.ch/report/ar6/syr/',
  },
  {
    id: 'nasa',
    short: 'NASA',
    title: 'Vital Signs of the Planet (Temperatur, CO₂, Meeresspiegel)',
    publisher: 'NASA Earth Science',
    year: 'laufend',
    url: 'https://science.nasa.gov/climate-change/',
  },
  {
    id: 'noaa',
    short: 'NOAA GML',
    title: 'Trends in Atmospheric Carbon Dioxide (Mauna Loa)',
    publisher: 'NOAA Global Monitoring Laboratory',
    year: 'laufend',
    url: 'https://gml.noaa.gov/ccgg/trends/',
  },
  {
    id: 'copernicus',
    short: 'Copernicus C3S',
    title: 'Global Climate Highlights 2024',
    publisher: 'Copernicus Climate Change Service (ECMWF)',
    year: '2025',
    url: 'https://climate.copernicus.eu/global-climate-highlights-2024',
  },
  {
    id: 'uba',
    short: 'Umweltbundesamt',
    title: 'Treibhausgas-Emissionen in Deutschland',
    publisher: 'Umweltbundesamt (UBA)',
    year: 'laufend',
    url: 'https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland',
  },
  {
    id: 'uba-rechner',
    short: 'UBA CO₂-Rechner',
    title: 'CO₂-Rechner: persönlicher Fußabdruck',
    publisher: 'Umweltbundesamt (UBA)',
    year: 'laufend',
    url: 'https://uba.co2-rechner.de/',
  },
  {
    id: 'armstrong',
    short: 'Armstrong McKay 2022',
    title: 'Exceeding 1.5 °C global warming could trigger multiple climate tipping points',
    publisher: 'Armstrong McKay et al., Science 377',
    year: '2022',
    url: 'https://doi.org/10.1126/science.abn7950',
  },
  {
    id: 'wunderling',
    short: 'Wunderling 2021',
    title: 'Interacting tipping elements increase risk of climate domino effects',
    publisher: 'Wunderling et al., Earth System Dynamics 12',
    year: '2021',
    url: 'https://doi.org/10.5194/esd-12-601-2021',
  },
  {
    id: 'carbonbrief',
    short: 'Carbon Brief 2021',
    title: 'Which countries are historically responsible for climate change?',
    publisher: 'Carbon Brief',
    year: '2021',
    url: 'https://www.carbonbrief.org/analysis-which-countries-are-historically-responsible-for-climate-change/',
  },
  {
    id: 'wynes',
    short: 'Wynes & Nicholas 2017',
    title: 'The climate mitigation gap: education and government recommendations miss the most effective individual actions',
    publisher: 'Wynes & Nicholas, Environmental Research Letters 12',
    year: '2017',
    url: 'https://doi.org/10.1088/1748-9326/aa7541',
  },
];

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export const navItems = [
  { id: 'treibhauseffekt', label: 'Treibhauseffekt' },
  { id: 'ursachen', label: 'Ursachen' },
  { id: 'kippelemente', label: 'Kippelemente' },
  { id: 'mythen', label: 'Mythen' },
  { id: 'loesungen', label: 'Lösungen' },
  { id: 'quellen', label: 'Quellen' },
] as const;

/* -------------------------------------------------------------------------- */
/*  1 · Hero                                                                   */
/* -------------------------------------------------------------------------- */

export const hero = {
  eyebrow: 'Klimawandel verständlich erklärt',
  headline: 'Die Erde hat Fieber. Und wir wissen, warum.',
  subline:
    'Was passiert gerade mit unserem Klima, wer verursacht es und was hilft wirklich? Erst kompakt erklärt, und wenn du willst, mit allen Details aus der Forschung.',
  figures: [
    {
      id: 'temp',
      value: '+1,2',
      unit: '°C',
      label: 'globale Erwärmung',
      context: 'gegenüber dem vorindustriellen Niveau (1850–1900)',
      icon: 'thermometer',
      tone: 'amber',
    },
    {
      id: 'co2',
      value: '420+',
      unit: 'ppm',
      label: 'CO₂ in der Luft',
      context: 'vor der Industrialisierung waren es rund 280 ppm',
      icon: 'cloud',
      tone: 'copper',
    },
    {
      id: 'sea',
      value: '+20',
      unit: 'cm',
      label: 'Meeresspiegel',
      context: 'Anstieg seit 1900, Tendenz beschleunigt',
      icon: 'waves',
      tone: 'sky',
    },
  ] satisfies KeyFigure[],
  deepDive: {
    title: 'Woher kommen diese Zahlen?',
    paragraphs: [
      'Die drei Kennzahlen sind gerundete Mittelwerte aus den großen Messreihen. Die globale Oberflächentemperatur lag im Jahrzehnt 2011–2020 laut IPCC rund 1,1 °C über dem Mittel von 1850–1900; seither ist sie weiter gestiegen. Einzelne Jahre liegen deutlich darüber: 2024 war laut Copernicus das erste Kalenderjahr mit mehr als 1,5 °C, was aber noch nicht bedeutet, dass das 1,5-Grad-Ziel (gemessen als 20-Jahres-Mittel) bereits verfehlt ist.',
      'Die CO₂-Konzentration wird seit 1958 am Mauna Loa (Hawaii) gemessen. Sie steigt um etwa 2–3 ppm pro Jahr und ist so hoch wie seit mindestens zwei Millionen Jahren nicht mehr. Der Meeresspiegel stieg zwischen 1901 und 2018 um rund 20 cm; die Anstiegsrate hat sich seit 1970 etwa verdreifacht.',
    ],
    table: {
      caption: 'Kennzahlen im Überblick',
      headers: ['Größe', 'Vorindustriell', 'Heute', 'Quelle'],
      rows: [
        ['Globale Temperatur', 'Referenz (1850–1900)', '≈ +1,2 °C (2014–2023)', 'IPCC, Copernicus'],
        ['CO₂-Konzentration', '≈ 280 ppm', '> 420 ppm', 'NOAA, IPCC'],
        ['Methan (CH₄)', '≈ 720 ppb', '> 1.900 ppb', 'NOAA, IPCC'],
        ['Meeresspiegel', 'Referenz (1901)', '≈ +20 cm (bis 2018)', 'IPCC, NASA'],
        ['Anstiegsrate Meeresspiegel', '1,3 mm/Jahr (1901–1971)', '3,7 mm/Jahr (2006–2018)', 'IPCC AR6 WGI'],
      ],
    },
    sources: ['ipcc-wg1', 'copernicus', 'noaa', 'nasa'],
  } satisfies DeepDiveContent,
};

/* -------------------------------------------------------------------------- */
/*  2 · Treibhauseffekt                                                        */
/* -------------------------------------------------------------------------- */

export const greenhouse = {
  title: 'Der Treibhauseffekt',
  intro: 'Warum ein paar Spurengase das Klima eines ganzen Planeten bestimmen.',
  summary: {
    lead: 'Stell dir die Atmosphäre wie die Glasscheibe eines Gewächshauses vor: Sonnenlicht kommt herein, die Wärme kommt schlechter wieder heraus.',
    bullets: [
      'Die Sonne erwärmt den Boden. Der Boden gibt Wärme als unsichtbare Infrarotstrahlung ab.',
      'Treibhausgase wie CO₂ und Methan halten einen Teil dieser Wärme zurück, wie eine Decke.',
      'Natürlicher Effekt: Ohne ihn wäre es auf der Erde etwa −18 °C kalt statt +15 °C. Er macht Leben erst möglich.',
      'Menschengemachter Effekt: Durch Kohle, Öl, Gas und Abholzung wird die Decke immer dicker, und die Erde heizt sich auf.',
    ],
  } satisfies Summary,
  comparison: [
    {
      id: 'natural',
      title: 'Natürlicher Treibhauseffekt',
      text: 'Wasserdampf, CO₂ und andere Gase gibt es von Natur aus. Sie heben die Durchschnittstemperatur um rund 33 °C an, auf lebensfreundliche +15 °C.',
      tone: 'teal',
    },
    {
      id: 'anthropogenic',
      title: 'Menschengemachter Zusatz-Effekt',
      text: 'Seit 1850 hat der Mensch zusätzlich rund 2.500 Milliarden Tonnen CO₂ ausgestoßen. Die zusätzliche Wärme verschiebt das Gleichgewicht und treibt die Erwärmung.',
      tone: 'amber',
    },
  ] as const,
  deepDive: {
    title: 'Strahlungsbilanz, optische Dichte und die wichtigsten Gase',
    paragraphs: [
      'Strahlungsbilanz: Im globalen Mittel treffen rund 340 W/m² Sonnenstrahlung auf die Erde. Etwa 100 W/m² werden von Wolken, Eis und Oberflächen direkt zurückgestrahlt (Albedo), rund 240 W/m² werden absorbiert. Im Gleichgewicht muss die Erde genauso viel Energie als langwellige Wärmestrahlung wieder ins All abgeben. Derzeit nimmt das Klimasystem mehr auf, als es abgibt: Das Energieungleichgewicht lag laut IPCC 2006–2018 bei etwa 0,8 W/m². Über 90 % dieser Zusatzenergie landen im Ozean.',
      'Optische Dichte: Treibhausgase sind für sichtbares Licht weitgehend durchlässig, absorbieren aber Infrarotstrahlung in bestimmten Wellenlängenbändern. Je mehr davon in der Luft ist, desto „undurchsichtiger“ wird die Atmosphäre für Wärmestrahlung. Die Erde strahlt dadurch effektiv aus größerer Höhe ab, wo es kälter ist (rund −6,5 °C pro Kilometer). Kältere Schichten strahlen weniger ab, also muss sich das gesamte System erwärmen, bis die Bilanz wieder stimmt.',
      'Strahlungsantrieb: Der IPCC beziffert den gesamten menschengemachten effektiven Strahlungsantrieb für 2019 auf rund 2,7 W/m² gegenüber 1750. CO₂ trägt mit etwa 2,2 W/m² den größten Teil bei. Aerosole (Feinstaub) kühlen teilweise gegen und maskieren einen Teil der Erwärmung.',
      'Warum nicht Wasserdampf? Wasserdampf ist zwar das stärkste Treibhausgas, aber er wirkt als Verstärker, nicht als Auslöser: Wärmere Luft kann pro Grad etwa 7 % mehr Wasserdampf aufnehmen, was die Erwärmung durch CO₂ weiter verstärkt.',
    ],
    table: {
      caption: 'CO₂, Methan, Lachgas und F-Gase im Vergleich (IPCC AR6)',
      headers: ['Gas', 'Verweildauer', 'Treibhauspotenzial (GWP100)', 'Strahlungsantrieb 2019', 'Hauptquellen'],
      rows: [
        ['Kohlendioxid (CO₂)', 'Jahrhunderte bis Jahrtausende (teilweise)', '1 (Referenz)', '≈ 2,16 W/m²', 'Kohle, Öl, Gas, Zement, Entwaldung'],
        ['Methan (CH₄)', '≈ 12 Jahre', '≈ 27–30', '≈ 0,54 W/m²', 'Viehhaltung, Reisanbau, Gaslecks, Deponien'],
        ['Lachgas (N₂O)', '≈ 110 Jahre', '≈ 273', '≈ 0,21 W/m²', 'Stickstoffdünger, Industrie'],
        ['F-Gase (z. B. SF₆, HFKW)', 'Jahre bis Jahrtausende', 'bis ≈ 25.000', '≈ 0,41 W/m² (Halogenkohlenwasserstoffe gesamt)', 'Kältemittel, Schaltanlagen, Industrie'],
      ],
      note: 'GWP100: Erwärmungswirkung über 100 Jahre relativ zur gleichen Masse CO₂. Methan wirkt kurz, aber sehr stark; CO₂ wirkt schwächer, bleibt aber extrem lange.',
    },
    sources: ['ipcc-wg1', 'nasa'],
  } satisfies DeepDiveContent,
};

/* -------------------------------------------------------------------------- */
/*  3 · Ursachen                                                               */
/* -------------------------------------------------------------------------- */

export const causes = {
  title: 'Ursachen: Woher kommen die Emissionen?',
  intro: 'Fünf Wirtschaftsbereiche verursachen nahezu alle menschengemachten Treibhausgase. Wähle einen Sektor aus.',
  summary: {
    lead: 'Hauptursache ist das Verbrennen fossiler Energieträger (Kohle, Öl und Gas). Dazu kommen Landwirtschaft und Abholzung.',
    bullets: [
      'Mehr als ein Drittel entsteht bei der Erzeugung von Strom und Wärme.',
      'Industrie, z. B. Stahl und Zement, folgt auf Platz zwei.',
      'Landwirtschaft und Waldrodung tragen vor allem Methan, Lachgas und CO₂ bei.',
      'Verkehr und Gebäude sind die Bereiche, die wir im Alltag am direktesten spüren.',
    ],
  } satisfies Summary,
  sectors: [
    {
      id: 'energy',
      name: 'Strom & Wärme',
      share: 34,
      icon: 'zap',
      summary: 'Kohle- und Gaskraftwerke liefern weltweit immer noch den Großteil des Stroms und der Fernwärme.',
      examples: ['Kohlekraftwerke', 'Gaskraftwerke', 'Raffinerien und Förderung fossiler Brennstoffe', 'Methan-Lecks bei Öl- und Gasförderung'],
      levers: ['Ausbau von Wind- und Solarenergie', 'Kohleausstieg', 'Stromnetze und Speicher', 'Methan-Lecks schließen'],
      detail: 'Wind- und Solarstrom sind laut IPCC zwischen 2010 und 2019 um 55 % bzw. 85 % günstiger geworden. Sie sind heute in den meisten Regionen die billigste neue Stromquelle.',
    },
    {
      id: 'industry',
      name: 'Industrie',
      share: 24,
      icon: 'factory',
      summary: 'Stahl, Zement und Chemie brauchen viel Energie und setzen teils direkt CO₂ frei.',
      examples: ['Stahlherstellung im Hochofen', 'Zementproduktion (Kalkbrennen)', 'Chemie und Düngemittel', 'Prozesswärme bei hohen Temperaturen'],
      levers: ['Grüner Wasserstoff für Stahl', 'Kreislaufwirtschaft und Recycling', 'Effizienz und Elektrifizierung', 'CO₂-Abscheidung bei unvermeidbaren Prozessemissionen'],
      detail: 'Bei Zement entsteht etwa die Hälfte der Emissionen nicht durch Energie, sondern chemisch beim Brennen von Kalkstein. Deshalb braucht es hier neue Materialien und Verfahren.',
    },
    {
      id: 'afolu',
      name: 'Landwirtschaft & Wald',
      share: 21,
      icon: 'wheat',
      summary: 'Rinder, Reisfelder und Dünger setzen Methan und Lachgas frei, Waldrodung setzt gespeichertes CO₂ frei.',
      examples: ['Methan aus der Verdauung von Wiederkäuern', 'Lachgas aus Stickstoffdünger', 'Rodung von Regenwäldern', 'Entwässerte Moore'],
      levers: ['Entwaldung stoppen', 'Moore wiedervernässen', 'Weniger tierische Produkte', 'Effizienter düngen'],
      detail: 'Wälder und Böden sind zugleich Quelle und Senke: Der Sektor kann Emissionen verursachen, aber durch Aufforstung und Moorschutz auch CO₂ aus der Luft holen.',
    },
    {
      id: 'transport',
      name: 'Verkehr',
      share: 15,
      icon: 'car',
      summary: 'Autos, Lkw, Schiffe und Flugzeuge fahren fast vollständig mit Erdöl.',
      examples: ['Pkw und Motorräder', 'Lkw-Güterverkehr', 'Luftfahrt', 'Schifffahrt'],
      levers: ['Elektromobilität', 'Bahn und ÖPNV stärken', 'Rad- und Fußverkehr', 'Synthetische Kraftstoffe für Flug- und Schiffsverkehr'],
      detail: 'Der Straßenverkehr verursacht rund drei Viertel der Verkehrsemissionen. In Deutschland ist der Verkehr der Sektor, in dem die Emissionen seit 1990 am wenigsten gesunken sind.',
    },
    {
      id: 'buildings',
      name: 'Gebäude',
      share: 6,
      icon: 'building',
      summary: 'Öl- und Gasheizungen in Wohnungen, Büros und Geschäften.',
      examples: ['Gas- und Ölheizungen', 'Warmwasser', 'Kochen mit Gas', 'Schlecht gedämmte Altbauten'],
      levers: ['Wärmepumpen', 'Dämmung und Sanierung', 'Fernwärme aus erneuerbaren Quellen', 'Effiziente Neubauten'],
      detail: 'Die 6 % umfassen nur direkte Emissionen vor Ort. Rechnet man den Strom und die Wärme ein, die Gebäude verbrauchen, steigt ihr Anteil auf etwa 16 %.',
    },
  ] satisfies Sector[],
  deepDive: {
    title: 'Methodik: direkte vs. indirekte Emissionen',
    paragraphs: [
      'Die Anteile stammen aus dem IPCC-Bericht der Arbeitsgruppe III und beziehen sich auf die globalen Treibhausgasemissionen von 2019 (rund 59 Milliarden Tonnen CO₂-Äquivalente). Sie zeigen direkte Emissionen: Ein Kraftwerk wird dem Energiesektor zugerechnet, auch wenn der Strom später in einer Fabrik oder Wohnung verbraucht wird.',
      'Ordnet man die Emissionen dem Endverbrauch zu („indirekte Emissionen“), verschieben sich die Gewichte deutlich: Industrie und Gebäude werden größer, der Energiesektor kleiner. Beide Sichtweisen sind richtig, sie beantworten nur unterschiedliche Fragen.',
      'In Deutschland lagen die Treibhausgasemissionen 2023 laut Umweltbundesamt bei rund 674 Millionen Tonnen CO₂-Äquivalenten, etwa 46 % weniger als 1990. Ziel ist Klimaneutralität bis 2045.',
    ],
    table: {
      caption: 'Globale Emissionen 2019 nach Sektor (direkt)',
      headers: ['Sektor', 'Anteil', 'Wichtigste Gase'],
      rows: [
        ['Strom & Wärme (Energieversorgung)', '34 %', 'CO₂, CH₄'],
        ['Industrie', '24 %', 'CO₂, F-Gase'],
        ['Landwirtschaft, Wald & Landnutzung', '21 %', 'CH₄, N₂O, CO₂'],
        ['Verkehr', '15 %', 'CO₂'],
        ['Gebäude', '6 %', 'CO₂'],
      ],
      note: 'Rundungsbedingt ergibt die Summe 100 %. Im IPCC-Bericht wird Landwirtschaft & Wald mit 22 % ausgewiesen.',
    },
    sources: ['ipcc-wg3', 'uba'],
  } satisfies DeepDiveContent,
};

/* -------------------------------------------------------------------------- */
/*  4 · Kippelemente                                                           */
/* -------------------------------------------------------------------------- */

export const tipping = {
  title: 'Kippelemente des Klimasystems',
  intro: 'Manche Teile des Erdsystems verändern sich nicht schrittweise, sondern können ab einer Schwelle in einen neuen Zustand kippen, oft unumkehrbar.',
  summary: {
    lead: 'Ein Kippelement ist wie ein Stuhl, den man immer weiter nach hinten neigt: Lange passiert wenig, dann kippt er plötzlich um.',
    bullets: [
      'Einmal gekippt, lässt sich der alte Zustand oft über Jahrhunderte nicht zurückholen.',
      'Mehrere Kippelemente könnten schon zwischen 1,5 und 2 °C Erwärmung ihre Schwelle überschreiten.',
      'Sie hängen zusammen: Kippt eines, steigt das Risiko für die anderen, wie bei Dominosteinen.',
    ],
  } satisfies Summary,
  elements: [
    {
      id: 'greenland',
      name: 'Grönländischer Eisschild',
      shortName: 'Grönland',
      icon: 'snowflake',
      tone: 'sky',
      threshold: '≈ 1,5 °C',
      thresholdRange: '0,8–3 °C',
      timescale: '1.000–15.000 Jahre',
      impact: 'bis zu 7 m Meeresspiegelanstieg',
      summary: 'Schmilzt der Eispanzer, sinkt seine Oberfläche in wärmere Luftschichten, und er schmilzt noch schneller.',
      mechanism: 'Höhen-Schmelz-Rückkopplung: Je dünner das Eis, desto tiefer und wärmer liegt seine Oberfläche. Das Schmelzwasser verdünnt zudem den Nordatlantik mit Süßwasser.',
    },
    {
      id: 'permafrost',
      name: 'Permafrostböden',
      shortName: 'Permafrost',
      icon: 'mountain',
      tone: 'copper',
      threshold: '≈ 1,5 °C (abrupt, regional)',
      thresholdRange: '1–2,3 °C',
      timescale: 'Jahrzehnte bis Jahrhunderte',
      impact: 'Freisetzung von CO₂ und Methan',
      summary: 'Dauergefrorene Böden in Sibirien und Kanada speichern etwa doppelt so viel Kohlenstoff wie die Atmosphäre.',
      mechanism: 'Taut der Boden, zersetzen Mikroben das organische Material und setzen CO₂ und Methan frei, was die Erwärmung weiter antreibt.',
    },
    {
      id: 'amazon',
      name: 'Amazonas-Regenwald',
      shortName: 'Amazonas',
      icon: 'trees',
      tone: 'emerald',
      threshold: '≈ 3,5 °C (oder 20–25 % Entwaldung)',
      thresholdRange: '2–6 °C',
      timescale: '≈ 50–200 Jahre',
      impact: 'Umwandlung in Savanne, Verlust einer CO₂-Senke',
      summary: 'Der Regenwald erzeugt einen großen Teil seines Regens selbst. Fehlen zu viele Bäume, trocknet er aus.',
      mechanism: 'Bäume verdunsten Wasser, das weiter im Landesinneren als Regen fällt. Rodung und Dürren unterbrechen diesen Kreislauf. Heute sind bereits rund 17 % gerodet.',
    },
    {
      id: 'amoc',
      name: 'Atlantische Umwälzzirkulation (AMOC)',
      shortName: 'AMOC',
      icon: 'wind',
      tone: 'teal',
      threshold: '≈ 4 °C',
      thresholdRange: '1,4–8 °C',
      timescale: '≈ 15–300 Jahre',
      impact: 'Verschiebung von Monsunen, kältere Winter in Nordeuropa',
      summary: 'Die große Meeresströmung, zu der auch der Golfstrom gehört, transportiert Wärme nach Norden.',
      mechanism: 'Salziges, kaltes Wasser sinkt im Nordatlantik ab und treibt die Zirkulation an. Süßwasser aus schmelzendem Eis macht das Wasser leichter und schwächt den Antrieb.',
    },
  ] satisfies TippingElement[],
  cascade: [
    { from: 'greenland', to: 'amoc', label: 'Süßwasser', effect: 'Schmelzwasser verdünnt den Nordatlantik und schwächt die Umwälzzirkulation.' },
    { from: 'amoc', to: 'amazon', label: 'Regen verschoben', effect: 'Eine schwächere AMOC verschiebt tropische Regengürtel und kann den Amazonas austrocknen.' },
    { from: 'permafrost', to: 'greenland', label: 'CO₂ & Methan', effect: 'Freigesetztes CO₂ und Methan heizen das globale Klima zusätzlich auf.' },
    { from: 'amazon', to: 'permafrost', label: 'CO₂-Freisetzung', effect: 'Ein sterbender Regenwald gibt große Mengen CO₂ ab und verstärkt die globale Erwärmung.' },
  ] satisfies CascadeLink[],
  deepDive: {
    title: 'Schwellenwerte und Unsicherheiten',
    paragraphs: [
      'Die Schwellenwerte stammen aus einer Auswertung von über 200 Studien (Armstrong McKay et al., 2022). Sie sind mit großen Unsicherheiten behaftet. Entscheidend ist: Die Spannbreiten mehrerer Kippelemente beginnen bereits im Bereich der heutigen Erwärmung.',
      'Der IPCC stuft abrupte und irreversible Veränderungen als Risiken mit geringer Wahrscheinlichkeit, aber sehr hohen Folgen ein. Ein Zusammenbruch der AMOC noch in diesem Jahrhundert wird im AR6 mit „mittlerem Vertrauen“ als „sehr unwahrscheinlich“ bewertet; neuere Studien halten ihn für wahrscheinlicher als bisher angenommen.',
      'Kaskaden: Modellstudien zeigen, dass Wechselwirkungen zwischen Kippelementen die kritischen Schwellen effektiv senken können. Grönland und die AMOC gelten dabei als besonders häufige „Auslöser“, die AMOC zugleich als zentrale Vermittlerin zwischen Polar- und Tropenregionen.',
    ],
    table: {
      caption: 'Ausgewählte Kippelemente (Schätzungen nach Armstrong McKay et al. 2022)',
      headers: ['Kippelement', 'Beste Schätzung', 'Spannbreite', 'Zeitskala', 'Folge'],
      rows: [
        ['Grönländischer Eisschild', '1,5 °C', '0,8–3 °C', '1.000–15.000 J.', '≈ 7 m Meeresspiegel'],
        ['Permafrost (abruptes Tauen)', '1,5 °C', '1–2,3 °C', '≈ 200 J.', 'zusätzliche Erwärmung'],
        ['Amazonas-Regenwald', '3,5 °C', '2–6 °C', '50–200 J.', 'Savannisierung'],
        ['AMOC-Kollaps', '4 °C', '1,4–8 °C', '15–300 J.', 'Klimaumstellung Nordatlantik'],
      ],
    },
    sources: ['armstrong', 'wunderling', 'ipcc-wg1'],
  } satisfies DeepDiveContent,
};

/* -------------------------------------------------------------------------- */
/*  5 · Mythen vs. Fakten                                                      */
/* -------------------------------------------------------------------------- */

export const myths = {
  title: 'Mythen vs. Fakten',
  intro: 'Drei Aussagen, die man oft hört. Dreh die Karte um und prüfe sie.',
  items: [
    {
      id: 'always-changed',
      myth: 'Das Klima hat sich schon immer geändert.',
      verdict: 'Stimmt, aber nicht so schnell und nicht aus diesem Grund.',
      fact: 'Natürliche Klimawechsel liefen über Jahrtausende. Die heutige Erwärmung ist rund zehnmal schneller als das Ende der letzten Eiszeit und eindeutig vom Menschen verursacht.',
      points: [
        'Nach der letzten Eiszeit erwärmte sich die Erde um etwa 5 °C in rund 10.000 Jahren. Heute sind es etwa 0,2 °C pro Jahrzehnt.',
        'Die Sonne scheidet als Ursache aus: Ihre Aktivität ist seit den 1980ern leicht gesunken.',
        'Fingerabdruck: Die untere Atmosphäre erwärmt sich, die obere kühlt ab, genau wie bei einem verstärkten Treibhauseffekt.',
        'Der IPCC nennt den menschlichen Einfluss „eindeutig“ (unequivocal).',
      ],
      sources: ['ipcc-wg1', 'nasa'],
    },
    {
      id: 'germany-two-percent',
      myth: 'Deutschland macht nur 2 % der Emissionen aus.',
      verdict: 'Die Zahl stimmt ungefähr, die Schlussfolgerung nicht.',
      fact: 'Deutschland hat etwa 1 % der Weltbevölkerung, stößt aber knapp 2 % der Emissionen aus und gehört damit zu den größten Emittenten der Welt.',
      points: [
        'Pro Kopf liegt Deutschland mit rund 8 t CO₂-Äquivalenten über dem weltweiten Durchschnitt von etwa 7 t.',
        'Historisch hat Deutschland rund 4 % aller CO₂-Emissionen seit 1850 verursacht, Platz 6 weltweit.',
        'Die Länder, die einzeln weniger als 2 % ausstoßen, verursachen zusammen rund ein Drittel der globalen Emissionen.',
        'Als Industrieland kann Deutschland zeigen, dass Klimaschutz und Wohlstand zusammenpassen, und Technologien günstiger machen.',
      ],
      sources: ['uba', 'carbonbrief', 'ipcc-wg3'],
    },
    {
      id: 'warmer-is-nice',
      myth: 'Ein bisschen wärmer ist doch angenehm.',
      verdict: 'Leider nein: Der Durchschnitt täuscht.',
      fact: '1,2 °C klingen wenig, verändern aber die Extreme dramatisch: mehr Hitzewellen, Dürren und Starkregen.',
      points: [
        'Hitzeextreme, die früher einmal in 50 Jahren auftraten, kommen heute etwa 4,8-mal so oft vor; bei 2 °C wären es knapp 14-mal so oft.',
        'Pro Grad Erwärmung kann die Luft etwa 7 % mehr Wasserdampf aufnehmen, was Starkregen verstärkt.',
        'In Deutschland starben laut Robert Koch-Institut im Sommer 2022 rund 8.000 Menschen an den Folgen von Hitze.',
        'Zum Vergleich: In der letzten Eiszeit war die Erde nur etwa 5–6 °C kälter als vorindustriell.',
      ],
      sources: ['ipcc-wg1', 'ipcc-wg2'],
    },
  ] satisfies Myth[],
};

/* -------------------------------------------------------------------------- */
/*  6 · Lösungen & Hebel                                                       */
/* -------------------------------------------------------------------------- */

export const solutions = {
  title: 'Lösungen & Hebel',
  intro: 'Klimaschutz braucht beides: die großen Stellschrauben in Politik und Wirtschaft und das, was jede und jeder selbst tun kann.',
  summary: {
    lead: 'Die Technik für die meisten Lösungen gibt es schon. Die größte Wirkung entsteht, wenn sich Systeme ändern, und Einzelne können diesen Wandel anstoßen.',
    bullets: [
      'Systemische Hebel (Energie, Industrie, Verkehr) bewegen Milliarden Tonnen CO₂.',
      'Individuelles Handeln zählt, besonders bei Mobilität, Ernährung und Wohnen.',
      'Der stärkste persönliche Hebel ist oft politisches Engagement: wählen, mitreden, sich organisieren.',
    ],
  } satisfies Summary,
  columns: [
    {
      id: 'system',
      title: 'Systemische Transformation',
      subtitle: 'Politik & Wirtschaft',
      icon: 'landmark',
      levers: [
        { title: 'CO₂-Preis', description: 'Emissionen bekommen einen Preis, klimafreundliche Alternativen werden konkurrenzfähig.', impact: 'Wirkt über alle Sektoren' },
        { title: 'Erneuerbare ausbauen', description: 'Wind und Sonne ersetzen Kohle und Gas. Sie sind heute oft die günstigste Stromquelle.', impact: 'Größtes Einzelpotenzial bis 2030' },
        { title: 'Entwaldung stoppen', description: 'Wälder und Moore schützen statt roden. Sie speichern riesige Mengen Kohlenstoff.', impact: 'Hohes Potenzial, geringe Kosten' },
        { title: 'Verkehrs- und Wärmewende', description: 'Bahn, ÖPNV, E-Mobilität und Wärmepumpen statt Öl und Gas.', impact: 'Senkt Emissionen im Alltag aller' },
        { title: 'Methan reduzieren', description: 'Lecks in der Öl- und Gasförderung schließen, Deponien abdichten.', impact: 'Bremst die Erwärmung besonders schnell' },
      ],
    },
    {
      id: 'individual',
      title: 'Individuelle Wirksamkeit',
      subtitle: 'Alltag & Engagement',
      icon: 'user',
      levers: [
        { title: 'Autofrei leben', description: 'Rad, Bahn und Carsharing statt eigenem Auto.', impact: '≈ 2,4 t CO₂e pro Jahr' },
        { title: 'Weniger fliegen', description: 'Ein Transatlantikflug weniger (hin und zurück).', impact: '≈ 1,6 t CO₂e pro Flug' },
        { title: 'Ökostrom & Wärmepumpe', description: 'Echten Ökostrom beziehen, beim Heizungstausch auf erneuerbare Wärme setzen.', impact: '≈ 1,5 t CO₂e pro Jahr' },
        { title: 'Pflanzenbetont essen', description: 'Weniger Fleisch und Milchprodukte, weniger Lebensmittel wegwerfen.', impact: '≈ 0,8 t CO₂e pro Jahr' },
        { title: 'Politisch aktiv werden', description: 'Wählen, mit anderen sprechen, sich in Verein, Betrieb oder Kommune einbringen.', impact: 'Multipliziert alle anderen Hebel' },
      ],
    },
  ] satisfies SolutionColumn[],
  deepDive: {
    title: 'Was sagt die Forschung zu den Potenzialen?',
    paragraphs: [
      'Laut IPCC (AR6 WGIII) stehen bis 2030 Optionen zur Verfügung, die die globalen Emissionen mindestens halbieren könnten, viele davon zu Kosten unter 100 US-Dollar pro Tonne CO₂-Äquivalent. Die größten Einzelpotenziale haben Solar- und Windenergie sowie die Verringerung der Entwaldung.',
      'Nachfrageseitige Maßnahmen, also veränderte Infrastruktur, Technologie und Verhaltensweisen, können die Emissionen in den Endverbrauchssektoren bis 2050 um 40–70 % senken. Individuelles Verhalten wirkt dabei am stärksten, wenn es durch passende Infrastruktur und Rahmenbedingungen erleichtert wird.',
      'Der durchschnittliche CO₂-Fußabdruck in Deutschland liegt laut Umweltbundesamt bei rund 10 Tonnen pro Person und Jahr. Klimaverträglich wäre langfristig deutlich unter 1 Tonne. Die Werte für individuelle Maßnahmen stammen aus einer Übersichtsstudie für Industrieländer und variieren je nach Lebenssituation.',
    ],
    table: {
      caption: 'Wirkung individueller Maßnahmen (Industrieländer, Wynes & Nicholas 2017)',
      headers: ['Maßnahme', 'Einsparung pro Jahr', 'Einordnung'],
      rows: [
        ['Autofrei leben', '≈ 2,4 t CO₂e', 'hoch'],
        ['Ein Transatlantikflug weniger', '≈ 1,6 t CO₂e', 'hoch'],
        ['Ökostrom beziehen', '≈ 1,5 t CO₂e', 'hoch (je nach Strommix)'],
        ['Pflanzliche Ernährung', '≈ 0,8 t CO₂e', 'mittel bis hoch'],
        ['Recycling', '≈ 0,2 t CO₂e', 'gering'],
        ['Glühbirnen tauschen', '≈ 0,1 t CO₂e', 'gering'],
      ],
    },
    sources: ['ipcc-wg3', 'ipcc-syr', 'uba-rechner', 'wynes'],
  } satisfies DeepDiveContent,
};

/* -------------------------------------------------------------------------- */
/*  7 · Footer                                                                 */
/* -------------------------------------------------------------------------- */

export const footer = {
  title: 'Quellen & Weiterlesen',
  intro: 'Alle Zahlen auf dieser Seite basieren auf öffentlich zugänglichen wissenschaftlichen Berichten und Messreihen.',
  note: 'Werte sind gerundet. Bei laufend aktualisierten Datensätzen (NASA, NOAA, UBA) lohnt sich ein Blick auf die aktuellen Zahlen.',
};
