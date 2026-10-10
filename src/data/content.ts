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
    title: 'Trends in Atmospheric Carbon Dioxide (Mauna Loa) und weitere Treibhausgase',
    publisher: 'NOAA Global Monitoring Laboratory',
    year: 'laufend',
    url: 'https://gml.noaa.gov/ccgg/trends/',
  },
  {
    id: 'copernicus',
    short: 'Copernicus GCH 2025',
    title: 'Global Climate Highlights 2025: 2025 was the third-hottest year on record',
    publisher: 'Copernicus Climate Change Service (C3S/ECMWF)',
    year: '2026',
    url: 'https://climate.copernicus.eu/copernicus-2025-was-third-hottest-year-record',
  },
  {
    id: 'copernicus-aug26',
    short: 'Copernicus Aug. 2026',
    title: 'Surface air temperature for August 2026',
    publisher: 'Copernicus Climate Change Service (C3S/ECMWF)',
    year: '2026',
    url: 'https://climate.copernicus.eu/surface-air-temperature-august-2026',
  },
  {
    id: 'igcc',
    short: 'IGCC 2026',
    title: 'Indicators of Global Climate Change: Global warming reached 1.37 °C in 2025',
    publisher: 'Forster et al. / Copernicus Climate Change Service',
    year: '2026',
    url: 'https://climate.copernicus.eu/global-warming-reached-137degc-2025',
  },
  {
    id: 'wmo',
    short: 'WMO 2025',
    title: 'State of the Global Climate 2025',
    publisher: 'World Meteorological Organization (WMO)',
    year: '2026',
    url: 'https://wmo.int/publication-series/state-of-global-climate/state-of-global-climate-2025',
  },
  {
    id: 'gcb',
    short: 'Global Carbon Budget 2025',
    title: 'Global Carbon Budget 2025',
    publisher: 'Friedlingstein et al., Earth System Science Data 18',
    year: '2026',
    url: 'https://essd.copernicus.org/articles/18/3211/2026/',
  },
  {
    id: 'unep',
    short: 'UNEP Emissions Gap 2025',
    title: 'Emissions Gap Report 2025',
    publisher: 'UN-Umweltprogramm (UNEP)',
    year: '2025',
    url: 'https://www.unep.org/resources/emissions-gap-report-2025',
  },
  {
    id: 'nasa-sea',
    short: 'NASA Meeresspiegel 2025',
    title: 'NASA Analysis Shows La Niña Limited Sea Level Rise in 2025',
    publisher: 'NASA Jet Propulsion Laboratory',
    year: '2026',
    url: 'https://www.jpl.nasa.gov/news/nasa-analysis-shows-la-nina-limited-sea-level-rise-in-2025/',
  },
  {
    id: 'gtpr',
    short: 'Global Tipping Points Report 2025',
    title: 'Global Tipping Points Report 2025',
    publisher: 'Lenton et al., University of Exeter',
    year: '2025',
    url: 'https://global-tipping-points.org/',
  },
  {
    id: 'rki',
    short: 'RKI Hitzemortalität 2026',
    title: 'Wochenbericht zur hitzebedingten Mortalität (Sommer 2026)',
    publisher: 'Robert Koch-Institut (RKI)',
    year: '2026',
    url: 'https://www.rki.de/DE/Themen/Gesundheit-und-Gesellschaft/Gesundheitliche-Einflussfaktoren-A-Z/H/Hitze/Bericht_Hitzemortalitaet.html',
  },
  {
    id: 'owid',
    short: 'Our World in Data',
    title: 'Germany: CO₂ Country Profile',
    publisher: 'Our World in Data (auf Basis Global Carbon Project)',
    year: 'laufend',
    url: 'https://ourworldindata.org/co2/country/germany',
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
      value: '+1,4',
      unit: '°C',
      label: 'globale Erwärmung',
      context: 'langfristiger Trend gegenüber 1850–1900; Rekordjahr 2024: +1,6 °C',
      icon: 'thermometer',
      tone: 'amber',
    },
    {
      id: 'co2',
      value: '427',
      unit: 'ppm',
      label: 'CO₂ in der Luft',
      context: 'Jahresmittel 2025 (vorindustriell ≈ 280 ppm); Spitzenwert Mai 2026: 432 ppm',
      icon: 'cloud',
      tone: 'copper',
    },
    {
      id: 'sea',
      value: '> 20',
      unit: 'cm',
      label: 'Meeresspiegel',
      context: 'Anstieg seit 1900; das Tempo hat sich seit 1993 etwa verdoppelt',
      icon: 'waves',
      tone: 'sky',
    },
  ] satisfies KeyFigure[],
  deepDive: {
    title: 'Woher kommen diese Zahlen?',
    paragraphs: [
      'Temperatur: Der langfristige Erwärmungstrend liegt laut Copernicus bei rund 1,4 °C über dem Mittel von 1850–1900. Die „Indicators of Global Climate Change“ beziffern den vom Menschen verursachten Anteil für 2025 auf 1,37 °C; die Erwärmung schreitet derzeit mit etwa 0,27 °C pro Jahrzehnt voran. 2024 war mit +1,60 °C das wärmste Jahr seit Messbeginn, 2025 mit +1,47 °C das drittwärmste. Der Dreijahresdurchschnitt 2023–2025 lag erstmals über 1,5 °C. Das 1,5-Grad-Ziel bezieht sich allerdings auf ein 20-Jahres-Mittel; dieses wird nach heutigem Stand gegen Ende dieses Jahrzehnts erreicht.',
      'Aktuell: Im August 2026 lag die globale Temperatur während eines außergewöhnlich starken El Niño bei +1,65 °C, gleichauf mit Juli 2023 der wärmste je gemessene Monat.',
      'CO₂: Die Konzentration wird seit 1958 am Mauna Loa (Hawaii) gemessen. Sie stieg 2025 um rund 2,2 ppm auf etwa 427 ppm im Jahresmittel und erreichte im Mai 2026 einen Spitzenwert von 432 ppm, so hoch wie seit mindestens zwei Millionen Jahren nicht. 2024 gab es mit +3,5 ppm den stärksten Anstieg seit Beginn der Messungen.',
      'Meeresspiegel: Zwischen 1901 und 2018 stieg er laut IPCC um rund 20 cm, seither kamen mehrere Zentimeter hinzu. Laut WMO lag die Anstiegsrate 2016–2025 bei 4,1 mm pro Jahr, fast doppelt so hoch wie 1993–2002. Etwa zwei Drittel des Anstiegs gehen auf schmelzende Gletscher und Eisschilde zurück, ein Drittel auf die Ausdehnung des sich erwärmenden Meerwassers.',
    ],
    table: {
      caption: 'Kennzahlen im Überblick',
      headers: ['Größe', 'Vorindustriell / früher', 'Aktuell', 'Quelle'],
      rows: [
        ['Globale Temperatur (Trend)', 'Referenz (1850–1900)', '≈ +1,4 °C; menschengemacht 1,37 °C (2025)', 'Copernicus, IGCC 2026'],
        ['Einzeljahre', '–', '2024: +1,60 °C · 2025: +1,47 °C', 'Copernicus'],
        ['Erwärmungsrate', '–', '≈ 0,27 °C pro Jahrzehnt', 'IGCC 2026'],
        ['CO₂-Konzentration', '≈ 278 ppm (1750)', '≈ 427 ppm (2025), 432 ppm (Mai 2026)', 'NOAA, WMO'],
        ['Methan (CH₄)', '≈ 720 ppb', '1.942 ppb (2024)', 'WMO'],
        ['Lachgas (N₂O)', '≈ 270 ppb', '338 ppb (2024)', 'WMO'],
        ['Anstiegsrate Meeresspiegel', '2,1 mm/Jahr (1993–2002)', '4,1 mm/Jahr (2016–2025)', 'WMO, NASA'],
        ['Verbleibendes CO₂-Budget für 1,5 °C', '–', '≈ 130 Mrd. t CO₂ ab 2026 (≈ 3 Jahre)', 'IGCC 2026'],
      ],
    },
    sources: ['copernicus', 'copernicus-aug26', 'igcc', 'wmo', 'noaa', 'nasa-sea', 'ipcc-wg1'],
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
      text: 'Seit 1850 hat der Mensch zusätzlich rund 2.600 Milliarden Tonnen CO₂ ausgestoßen, derzeit über 40 Milliarden Tonnen pro Jahr. Die zusätzliche Wärme verschiebt das Gleichgewicht und treibt die Erwärmung.',
      tone: 'amber',
    },
  ] as const,
  deepDive: {
    title: 'Strahlungsbilanz, optische Dichte und die wichtigsten Gase',
    paragraphs: [
      'Strahlungsbilanz: Im globalen Mittel treffen rund 340 W/m² Sonnenstrahlung auf die Erde. Etwa 100 W/m² werden von Wolken, Eis und Oberflächen direkt zurückgestrahlt (Albedo), rund 240 W/m² werden absorbiert. Im Gleichgewicht muss die Erde genauso viel Energie als langwellige Wärmestrahlung wieder ins All abgeben. Derzeit nimmt das Klimasystem mehr auf, als es abgibt: Der IPCC bezifferte dieses Energieungleichgewicht für 2006–2018 auf etwa 0,8 W/m², neuere Auswertungen kommen auf rund 1 W/m². Laut WMO war es 2025 so groß wie nie zuvor in der 65-jährigen Messreihe. Über 90 % der Zusatzenergie landen im Ozean, dessen Wärmeinhalt 2025 das neunte Jahr in Folge einen Rekord erreichte.',
      'Optische Dichte: Treibhausgase sind für sichtbares Licht weitgehend durchlässig, absorbieren aber Infrarotstrahlung in bestimmten Wellenlängenbändern. Je mehr davon in der Luft ist, desto „undurchsichtiger“ wird die Atmosphäre für Wärmestrahlung. Die Erde strahlt dadurch effektiv aus größerer Höhe ab, wo es kälter ist (rund −6,5 °C pro Kilometer). Kältere Schichten strahlen weniger ab, also muss sich das gesamte System erwärmen, bis die Bilanz wieder stimmt.',
      'Strahlungsantrieb: Der gesamte menschengemachte effektive Strahlungsantrieb ist von 2,72 W/m² (2019, IPCC AR6) auf 2,97 W/m² (2024) gegenüber 1750 gestiegen. CO₂ trägt den größten Teil bei. Aerosole (Feinstaub) kühlen teilweise gegen; weil die Luft vielerorts sauberer wird, fällt dieser maskierende Effekt zunehmend weg.',
      'Warum nicht Wasserdampf? Wasserdampf ist zwar das stärkste Treibhausgas, aber er wirkt als Verstärker, nicht als Auslöser: Wärmere Luft kann pro Grad etwa 7 % mehr Wasserdampf aufnehmen, was die Erwärmung durch CO₂ weiter verstärkt.',
    ],
    table: {
      caption: 'CO₂, Methan, Lachgas und F-Gase im Vergleich (IPCC AR6, Konzentrationen WMO 2024)',
      headers: ['Gas', 'Konzentration 2024', 'Verweildauer', 'Treibhauspotenzial (GWP100)', 'Strahlungsantrieb 2019', 'Hauptquellen'],
      rows: [
        ['Kohlendioxid (CO₂)', '423,9 ppm (+53 %)', 'Jahrhunderte bis Jahrtausende (teilweise)', '1 (Referenz)', '≈ 2,16 W/m²', 'Kohle, Öl, Gas, Zement, Entwaldung'],
        ['Methan (CH₄)', '1.942 ppb (+166 %)', '≈ 12 Jahre', '≈ 27–30', '≈ 0,54 W/m²', 'Viehhaltung, Reisanbau, Gaslecks, Deponien'],
        ['Lachgas (N₂O)', '338 ppb (+25 %)', '≈ 110 Jahre', '≈ 273', '≈ 0,21 W/m²', 'Stickstoffdünger, Industrie'],
        ['F-Gase (z. B. SF₆, HFKW)', 'sehr gering, steigend', 'Jahre bis Jahrtausende', 'bis ≈ 25.000', '≈ 0,41 W/m² (Halogenkohlenwasserstoffe gesamt)', 'Kältemittel, Schaltanlagen, Industrie'],
      ],
      note: 'GWP100: Erwärmungswirkung über 100 Jahre relativ zur gleichen Masse CO₂. Methan wirkt kurz, aber sehr stark; CO₂ wirkt schwächer, bleibt aber extrem lange.',
    },
    sources: ['ipcc-wg1', 'igcc', 'wmo', 'gcb'],
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
      detail: 'Der Straßenverkehr verursacht rund drei Viertel der Verkehrsemissionen. In Deutschland sind die Verkehrsemissionen seit 1990 kaum gesunken; der Sektor verfehlt seine Klimaziele regelmäßig.',
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
      'Die Sektor-Anteile stammen aus dem IPCC-Bericht der Arbeitsgruppe III (Bezugsjahr 2019); eine neuere, gleichwertige Aufschlüsselung liegt noch nicht vor, die Größenordnungen haben sich seither kaum verschoben. Sie zeigen direkte Emissionen: Ein Kraftwerk wird dem Energiesektor zugerechnet, auch wenn der Strom später in einer Fabrik oder Wohnung verbraucht wird.',
      'Die Gesamtmenge steigt weiter: Laut UNEP erreichten die globalen Treibhausgasemissionen 2024 einen Rekord von 57,7 Milliarden Tonnen CO₂-Äquivalenten. Die fossilen CO₂-Emissionen lagen laut Global Carbon Budget 2025 bei rund 38 Milliarden Tonnen, etwa 1 % mehr als im Vorjahr.',
      'Ordnet man die Emissionen dem Endverbrauch zu („indirekte Emissionen“), verschieben sich die Gewichte deutlich: Industrie und Gebäude werden größer, der Energiesektor kleiner. Beide Sichtweisen sind richtig, sie beantworten nur unterschiedliche Fragen.',
      'In Deutschland lagen die Treibhausgasemissionen 2025 laut Umweltbundesamt bei rund 649 Millionen Tonnen CO₂-Äquivalenten, 48 % weniger als 1990, aber kaum weniger als 2024. Gesetzlich vorgegeben sind −65 % bis 2030 und Klimaneutralität bis 2045.',
    ],
    table: {
      caption: 'Globale Emissionen nach Sektor (direkt, Bezugsjahr 2019)',
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
    sources: ['ipcc-wg3', 'unep', 'gcb', 'uba'],
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
      'Mehrere Kippelemente könnten schon zwischen 1,5 und 2 °C Erwärmung ihre Schwelle überschreiten. Bei den tropischen Korallenriffen ist das laut Forschung bereits passiert.',
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
      'Die Schwellenwerte stammen aus einer Auswertung von über 200 Studien (Armstrong McKay et al., 2022). Sie sind mit großen Unsicherheiten behaftet. Entscheidend ist: Die Spannbreiten mehrerer Kippelemente beginnen bereits im Bereich der heutigen Erwärmung von rund 1,4 °C.',
      'Erster überschrittener Kipppunkt: Laut Global Tipping Points Report 2025 haben tropische Korallenriffe nach der schlimmsten Korallenbleiche seit Beginn der Aufzeichnungen (2023–2025) ihre thermische Kippschwelle von etwa 1,2 °C überschritten. Ohne Umkehr der Erwärmung droht ein weitgehender Zusammenbruch dieser Ökosysteme. Amazonas, Eisschilde und AMOC nähern sich laut Bericht ihren Schwellen.',
      'Der IPCC stufte abrupte und irreversible Veränderungen als Risiken mit geringer Wahrscheinlichkeit, aber sehr hohen Folgen ein. Einen Zusammenbruch der AMOC noch in diesem Jahrhundert bewertete der AR6 (2021) mit „mittlerem Vertrauen“ als „sehr unwahrscheinlich“; seither erschienene Studien halten ihn für deutlich wahrscheinlicher als damals angenommen.',
      'Kaskaden: Modellstudien zeigen, dass Wechselwirkungen zwischen Kippelementen die kritischen Schwellen effektiv senken können. Grönland und die AMOC gelten dabei als besonders häufige „Auslöser“, die AMOC zugleich als zentrale Vermittlerin zwischen Polar- und Tropenregionen.',
    ],
    table: {
      caption: 'Ausgewählte Kippelemente (Schätzungen nach Armstrong McKay et al. 2022, ergänzt um GTPR 2025)',
      headers: ['Kippelement', 'Beste Schätzung', 'Spannbreite', 'Zeitskala', 'Folge'],
      rows: [
        ['Grönländischer Eisschild', '1,5 °C', '0,8–3 °C', '1.000–15.000 J.', '≈ 7 m Meeresspiegel'],
        ['Permafrost (abruptes Tauen)', '1,5 °C', '1–2,3 °C', '≈ 200 J.', 'zusätzliche Erwärmung'],
        ['Amazonas-Regenwald', '3,5 °C', '2–6 °C', '50–200 J.', 'Savannisierung'],
        ['AMOC-Kollaps', '4 °C', '1,4–8 °C', '15–300 J.', 'Klimaumstellung Nordatlantik'],
        ['Tropische Korallenriffe', '1,2 °C (überschritten)', '1–1,5 °C', '≈ 10 J.', 'großflächiges Riffsterben'],
      ],
    },
    sources: ['gtpr', 'armstrong', 'wunderling', 'ipcc-wg1'],
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
      fact: 'Natürliche Klimawechsel liefen über Jahrtausende. Die heutige Erwärmung ist um ein Vielfaches schneller als am Ende der letzten Eiszeit und eindeutig vom Menschen verursacht.',
      points: [
        'Nach der letzten Eiszeit erwärmte sich die Erde um etwa 5 °C in rund 10.000 Jahren. Heute sind es rund 0,27 °C pro Jahrzehnt.',
        'Die Sonne scheidet als Ursache aus: Ihre Aktivität ist seit den 1980ern leicht gesunken.',
        'Fingerabdruck: Die untere Atmosphäre erwärmt sich, die obere kühlt ab, genau wie bei einem verstärkten Treibhauseffekt.',
        'Der IPCC nennt den menschlichen Einfluss „eindeutig“ (unequivocal). Von der bisherigen Erwärmung gehen praktisch 100 % auf den Menschen zurück (2025: 1,37 °C).',
      ],
      sources: ['ipcc-wg1', 'igcc', 'nasa'],
    },
    {
      id: 'germany-two-percent',
      myth: 'Deutschland macht nur 2 % der Emissionen aus.',
      verdict: 'Inzwischen sind es sogar nur rund 1,5 %, aber die Schlussfolgerung stimmt trotzdem nicht.',
      fact: 'Deutschland hat etwa 1 % der Weltbevölkerung, verursacht aber rund 1,5 % der weltweiten CO₂-Emissionen und liegt damit etwa auf Platz 10 der größten Emittenten.',
      points: [
        'Pro Kopf liegt Deutschland mit rund 6,8 t fossilem CO₂ (2024) deutlich über dem weltweiten Durchschnitt von etwa 4,7 t.',
        'Historisch hat Deutschland rund 4 % aller CO₂-Emissionen seit 1850 verursacht, Platz 6 weltweit.',
        'Die Länder, die einzeln weniger als 2 % ausstoßen, verursachen zusammen rund ein Drittel der globalen Emissionen.',
        'Als Industrieland kann Deutschland zeigen, dass Klimaschutz und Wohlstand zusammenpassen, und Technologien günstiger machen.',
      ],
      sources: ['owid', 'gcb', 'uba', 'carbonbrief'],
    },
    {
      id: 'warmer-is-nice',
      myth: 'Ein bisschen wärmer ist doch angenehm.',
      verdict: 'Leider nein: Der Durchschnitt täuscht.',
      fact: '1,4 °C klingen wenig, verändern aber die Extreme dramatisch: mehr Hitzewellen, Dürren und Starkregen.',
      points: [
        'Hitzeextreme, die früher einmal in 50 Jahren auftraten, kommen laut IPCC schon bei 1 °C Erwärmung etwa 4,8-mal so oft vor, bei 1,5 °C 8,6-mal und bei 2 °C knapp 14-mal so oft.',
        'Pro Grad Erwärmung kann die Luft etwa 7 % mehr Wasserdampf aufnehmen, was Starkregen verstärkt.',
        'Im Hitzesommer 2026 starben in Deutschland laut Schätzung des Robert Koch-Instituts rund 16.000 Menschen an den Folgen von Hitze (Stand Mitte September), so viele wie nie seit Beginn der Auswertungen. 2023 und 2024 waren es rund 3.100 bzw. 2.800.',
        'Zum Vergleich: In der letzten Eiszeit war die Erde nur etwa 5–6 °C kälter als vorindustriell.',
      ],
      sources: ['ipcc-wg1', 'rki', 'ipcc-wg2'],
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
      'Die Zeit drängt: Laut UNEP führen die derzeitigen Klimazusagen der Staaten bei vollständiger Umsetzung zu 2,3–2,5 °C Erwärmung in diesem Jahrhundert. Das verbleibende CO₂-Budget für 1,5 °C ist bei heutigen Emissionen in etwa drei bis vier Jahren aufgebraucht. Jedes vermiedene Zehntelgrad verringert aber Schäden und Risiken spürbar.',
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
    sources: ['ipcc-wg3', 'unep', 'igcc', 'uba-rechner', 'wynes'],
  } satisfies DeepDiveContent,
};

/* -------------------------------------------------------------------------- */
/*  7 · Footer                                                                 */
/* -------------------------------------------------------------------------- */

export const footer = {
  title: 'Quellen & Weiterlesen',
  intro: 'Alle Zahlen auf dieser Seite basieren auf öffentlich zugänglichen wissenschaftlichen Berichten und Messreihen.',
  note: 'Datenstand: Oktober 2026. Werte sind gerundet. Bei laufend aktualisierten Datensätzen (NOAA, Copernicus, RKI, UBA) lohnt sich ein Blick auf die aktuellen Zahlen.',
};
