// Encyclopedia entries are original editorial syntheses. Each prose block keeps
// its own citations so a future detail page can render evidence next to the
// claim it supports instead of presenting one undifferentiated bibliography.

const citations = (authorReferenceIds = [], researchSourceIds = []) => ({
  authorReferenceIds,
  researchSourceIds,
});

export const ENCYCLOPEDIA_ENTRIES = {
  'authoritarian-collectivist': {
    id: 'authoritarian-collectivist',
    title: 'Authoritarian collectivist',
    canonicalLabel: 'Authoritarian collectivist',
    aliases: [
      'state-socialist authoritarianism',
      'party-state collectivism',
      'authoritarian state socialism',
    ],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'This is an analytical profile used by Politic Spectrum, not a historical self-description and not a claim that every socialist, communist, or state-led government has the same politics.',
    timeScope: 'Most useful for twentieth-century revolutionary party-states and their successors; its theoretical ingredients have earlier roots.',
    geographicScope: 'Transnational profile with especially important historical cases in Russia/USSR, Eastern Europe, China, Vietnam, North Korea, and Cuba.',
    summary: 'A political profile combining extensive collective or public direction of the economy with concentrated state authority, a disciplined ruling organization, and limited tolerance for organized opposition. The profile is intentionally didactic: it highlights a recurring combination without treating it as a single uniform ideology.',
    summaryCitations: citations(
      ['marxEngelsManifesto', 'leninStateRevolution', 'arendtTotalitarianism'],
      ['sepSocialism', 'oxfordHistoryCommunism', 'oxfordCommunismEasternEurope', 'oxfordAuthoritarianConsolidation'],
    ),
    dimensionInterpretations: {
      economic: {
        score: 88,
        label: 'Strongly collectivist',
        explanation: 'Major productive resources are expected to be socially or publicly directed, with accumulation and distribution subordinated to a collective political project. “Public ownership” does not by itself establish democratic control; state ownership can also become bureaucratic or coercive.',
        citations: citations(['marxEngelsManifesto', 'leninStateRevolution'], ['sepSocialism', 'oxfordHistoryCommunism', 'oxfordWorkersCommunism']),
      },
      social: {
        score: 18,
        label: 'Slightly progressive / project-dependent',
        explanation: 'The profile is not defined by one fixed position on family, gender, religion, or private morality. Revolutionary movements may promise emancipation while later party-states impose conservative, disciplinary, or rapidly changing social policies.',
        citations: citations(['marxEngelsManifesto', 'arendtTotalitarianism'], ['sepSocialism', 'oxfordWorkersCommunism', 'oxfordCommunismEasternEurope']),
      },
      authority: {
        score: 86,
        label: 'Strongly authoritarian',
        explanation: 'A centralized party and state claim a leading role in organizing the transition, coordinating production, and defending the revolution. This is the defining contrast with libertarian socialism, council communism, and democratic socialism.',
        citations: citations(['leninStateRevolution', 'arendtTotalitarianism'], ['sepSocialism', 'oxfordCommunismEasternEurope', 'oxfordContemporarySocialistLaw']),
      },
      identity: {
        score: 38,
        label: 'Internationalist with state-patriotic tension',
        explanation: 'Class solidarity and international revolution temper nationalism in the theory, but actual party-states have also cultivated official patriotism, borders, and state loyalty. Internationalism and state nationalism can therefore coexist uneasily.',
        citations: citations(['marxEngelsManifesto', 'leninStateRevolution'], ['sepSocialism', 'oxfordAuthoritarianConsolidation', 'cambridgeCommunistIdeologyAdaptation']),
      },
      foreign: {
        score: -24,
        label: 'Somewhat interventionist / defensive-force oriented',
        explanation: 'The profile does not require permanent expansionism. It can justify force as revolutionary defense, anti-imperial struggle, alliance politics, or protection of a socialist state; actual foreign policy varies substantially by period and regime.',
        citations: citations(['leninStateRevolution', 'morgenthauRealism'], ['oxfordAuthoritarianConsolidation', 'oxfordCommunismEasternEurope']),
      },
      religion: {
        score: 60,
        label: 'Strongly secular public law',
        explanation: 'Public legitimacy is generally grounded in materialist, revolutionary, or party-state reasoning rather than clerical authority. Secular law is not the same as freedom of religion: historical regimes varied from toleration to surveillance, restriction, or active repression.',
        citations: citations(['spinozaPolitical', 'hobbesLeviathan'], ['sepReligionPolitics', 'oxfordContemporarySocialistLaw']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: '“Authoritarian collectivist” is a comparative profile for cases where collective or public control of major resources is joined to concentrated political authority. It is useful for teaching the difference between economic ownership and political freedom: a state can direct the economy in the name of equality without giving workers or citizens effective control over the state.',
            citations: citations(['leninStateRevolution', 'arendtTotalitarianism'], ['sepSocialism']),
          },
          {
            type: 'paragraph',
            text: 'The label must not collapse Marx’s critique of capitalism, Lenin’s revolutionary theory, Stalin’s administrative system, and every later government called communist into one thing. The relevant evidence is therefore presented as a family resemblance: shared institutional tendencies, historically specific variants, and explicit limits on what the label can establish.',
            citations: citations(['marxEngelsManifesto', 'leninStateRevolution', 'arendtTotalitarianism'], ['sepSocialism']),
          },
          {
            type: 'paragraph',
            text: 'A useful comparison separates three layers that are often confused: the socialist goal of changing ownership and class relations; the Leninist or party-organizational claim that a disciplined vanguard must lead a transition; and the empirical operation of a party-state with restricted opposition, administrative hierarchy, and coercive enforcement. A movement may endorse the first without the second, and a government may retain the language of the first while substantially changing its economic institutions.',
            citations: citations(['marxEngelsManifesto', 'leninStateRevolution', 'arendtTotalitarianism'], ['sepSocialism', 'oxfordHistoryCommunism', 'oxfordCommunismEasternEurope']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'Economically, the profile favors collective ownership, public direction, or comprehensive planning of major productive assets. The rationale may be equality, the abolition of class domination, rapid industrial transformation, national development, or defense against external and internal enemies. Socialist theory contains both democratic and anti-authoritarian currents, so economic collectivism alone cannot identify this profile.',
            citations: citations(['marxEngelsManifesto', 'leninStateRevolution'], ['sepSocialism']),
          },
          {
            type: 'paragraph',
            text: 'Institutionally, the profile is distinguished by a ruling party or tightly disciplined political organization that claims to represent the historical interests of a class or revolution. Competitive pluralism, independent associations, and organized dissent are narrowed when they are treated as threats to the transition. The degree of coercion, bureaucracy, and personal leadership differs by case.',
            citations: citations(['leninStateRevolution', 'arendtTotalitarianism'], []),
          },
          {
            type: 'paragraph',
            text: 'The profile can combine universalist language with state-centered practice. Appeals to international working-class solidarity may coexist with official patriotism, security borders, and a national development project. Likewise, secular public law may coexist with private religious belief or with severe restrictions on religious institutions; neither outcome should be inferred without case-specific evidence.',
            citations: citations(['marxEngelsManifesto', 'leninStateRevolution', 'spinozaPolitical'], ['sepReligionPolitics']),
          },
          {
            type: 'paragraph',
            text: 'Party-state authority is not one institutional variable. The ruling party may control candidate selection, media, courts, unions, education, security agencies, and the allocation of careers, while the state may still contain legislatures, constitutions, elections, local consultation, or internal policy debate. These forms can provide real channels of participation without creating competitive pluralism or independent organization; the evidence must describe both the channels and their limits.',
            citations: citations(['leninStateRevolution', 'arendtTotalitarianism'], ['oxfordCommunismEasternEurope', 'oxfordContemporarySocialistLaw', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'Economic collectivization also changed across time. Central plans, state enterprises, collective farms, rationing, workplace incentives, family plots, private firms, export markets, and state-owned finance have appeared in different combinations. China and Vietnam’s later market reforms, for example, do not erase one-party authority, while Cuba and North Korea should not be assumed to have identical economic or legal systems. “Collectivist” records the direction of ownership and public control, not a fixed production technology.',
            citations: citations(['marxEngelsManifesto', 'leninStateRevolution'], ['aeaChinaSocialism', 'oxfordAuthoritarianConsolidation', 'oxfordWorkersCommunism', 'cambridgeCommunistIdeologyAdaptation']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: '1840s and earlier socialist traditions',
            text: 'Marx and Engels framed modern political conflict through class relations and argued for a communist transformation of property relations. This is evidence for the collectivist and internationalist ingredients of the profile, not a complete institutional blueprint for every later one-party state.',
            citations: citations(['marxEngelsManifesto'], ['sepSocialism']),
          },
          {
            period: '1917 and the Bolshevik transition',
            text: 'Lenin’s revolutionary theory treated a transition after the old order as requiring organized political power and a disciplined revolutionary force. This supplied an important theoretical bridge between collectivist transformation and centralized authority, while remaining a primary text from one revolutionary tradition rather than neutral evidence about all socialism.',
            citations: citations(['leninStateRevolution'], ['sepSocialism']),
          },
          {
            period: 'Late 1920s–1950s: Stalinist consolidation',
            text: 'Under Stalin, forced collectivization, state and collective farms, industrial quotas, and the elimination of a free market formed a particularly coercive model of state-directed development. This case is historically important but should not be treated as the definition of socialism or as a template for all communist movements.',
            citations: citations(['arendtTotalitarianism'], ['ushmmCommunism', 'sepSocialism']),
          },
          {
            period: 'After 1945: party-states and national variants',
            text: 'The post-war socialist world contained different combinations of central planning, public ownership, nationalism, security institutions, social provision, and political repression. The common party-state family should therefore be compared across cases rather than represented as a single unchanging regime type.',
            citations: citations(['arendtTotalitarianism'], ['sepSocialism', 'ushmmCommunism']),
          },
          {
            period: 'Mao-era China and revolutionary state-building — 1949–1976',
            text: 'The People’s Republic of China combined communist party leadership, campaigns of mass mobilization, land and economic transformation, collectivization, and changing forms of coercion. The Great Leap Forward and Cultural Revolution show why ideological mobilization, administrative pressure, local implementation, and leadership campaigns must be analyzed separately rather than treated as a single policy mechanism.',
            citations: citations(['marxEngelsManifesto', 'arendtTotalitarianism'], ['ushmmCommunism', 'oxfordAuthoritarianConsolidation', 'aeaChinaSocialism', 'oxfordWorkersCommunism']),
          },
          {
            period: 'Eastern European party-states and state–labour relations — 1945–1989',
            text: 'East Germany and other Soviet-aligned regimes combined party monopolies with planned or state-directed economies, social provision, workplace organizations, and varying degrees of surveillance and repression. Workers were not simply passive: scholarship documents support, negotiation, manipulation, and resistance within institutions that still denied independent political organization.',
            citations: citations(['arendtTotalitarianism', 'bernsteinEvolutionarySocialism'], ['ghdiMarxLeninism', 'oxfordCommunismEasternEurope', 'oxfordWorkersCommunism', 'ushmmCommunism']),
          },
          {
            period: 'Decolonization and non-European communist regimes — 1945–1980s',
            text: 'China, Vietnam, Cuba, North Korea, Laos, and other revolutionary regimes developed through anti-colonial struggle, civil war, international aid, state-building, and security competition. Their political institutions and economic pathways differed, so the profile should not equate party-state authority with one European model or treat national liberation as mere imitation of the Soviet Union.',
            citations: citations(['leninStateRevolution', 'marxEngelsManifesto'], ['oxfordAuthoritarianConsolidation', 'oxfordHistoryCommunism', 'sepColonialism']),
          },
          {
            period: 'Reform, adaptation, and the socialist market — late 1970s–present',
            text: 'China and Vietnam introduced market reforms while retaining one-party political authority, whereas Cuba and North Korea followed different and comparatively less economically liberal paths. Comparative research emphasizes adaptive or frozen ideological legitimation, not a simple linear shift from socialism to capitalism. A market economy therefore does not automatically remove the authoritarian collectivist profile if party monopoly and state direction remain central.',
            citations: citations(['leninStateRevolution'], ['aeaChinaSocialism', 'oxfordAuthoritarianConsolidation', 'cambridgeCommunistIdeologyAdaptation', 'oxfordContemporarySocialistLaw']),
          },
          {
            period: 'Collapse, resilience, and institutional legacies — 1989–present',
            text: 'The collapse of most European communist regimes and the Soviet Union exposed limits in economic performance, legitimacy, reform, and succession, while several non-European party-states survived by adapting institutions, ideology, international relations, or economic policy. Comparative authoritarianism therefore studies both breakdown and resilience, including how former party-state institutions shape post-communist political and economic life.',
            citations: citations(['arendtTotalitarianism', 'leninStateRevolution'], ['oxfordCommunismEasternEurope', 'oxfordAuthoritarianConsolidation', 'cambridgeCommunistIdeologyAdaptation', 'oxfordHistoryCommunism']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Marxist revolutionary state-socialism',
                distinction: 'Emphasizes revolutionary transition, class power, public ownership, and a leading political organization.',
                relation: 'Closest theoretical family resemblance, but not every Marxist is authoritarian collectivist.',
                citations: citations(['marxEngelsManifesto', 'leninStateRevolution'], ['sepSocialism']),
              },
              {
                label: 'Bureaucratic or party-state collectivism',
                distinction: 'Describes systems where administrative institutions and a ruling party direct ownership, production, and political participation.',
                relation: 'Closest institutional description of the profile; the term is interpretive and contested rather than a universal self-description.',
                citations: citations(['arendtTotalitarianism', 'leninStateRevolution'], ['sepSocialism', 'ushmmCommunism']),
              },
              {
                label: 'Democratic socialism and social democracy',
                distinction: 'Seek equality and social protection through democratic competition, civil liberties, reforms, or stronger social ownership.',
                relation: 'Overlaps economically but differs where democratic pluralism and non-coercive political accountability are treated as essential.',
                citations: citations(['marxEngelsManifesto', 'bernsteinEvolutionarySocialism'], ['sepSocialism']),
              },
              {
                label: 'Anarcho-communism and council communism',
                distinction: 'Favor common ownership while rejecting centralized party-state authority in favor of voluntary association, councils, or decentralized self-management.',
                relation: 'Shares the collectivist pole but is a direct counter-example on the authority axis.',
                citations: citations(['bakuninStatism'], ['sepSocialism', 'sepAnarchism']),
              },
              {
                label: 'Stalinist command collectivism',
                distinction: 'Uses centralized party-state authority, compulsory collectivization, administrative targets, security institutions, and political repression to direct economic and social transformation.',
                relation: 'A particularly coercive historical variant, not the definition of socialism or every communist regime.',
                citations: citations(['leninStateRevolution', 'arendtTotalitarianism'], ['ushmmCommunism', 'oxfordHistoryCommunism', 'oxfordCommunismEasternEurope']),
              },
              {
                label: 'Maoist mass-mobilizational state socialism',
                distinction: 'Combines party leadership and state direction with campaigns, revolutionary class categories, rural mobilization, and periodic efforts to bypass or reshape bureaucracy.',
                relation: 'Shares the party-state core while differing from Soviet administrative practice in organization, social base, and campaign politics.',
                citations: citations(['marxEngelsManifesto', 'arendtTotalitarianism'], ['oxfordAuthoritarianConsolidation', 'aeaChinaSocialism', 'ushmmCommunism']),
              },
              {
                label: 'Reformed socialist market party-state',
                distinction: 'Retains one-party political authority and significant state control while permitting private firms, market allocation, foreign investment, and unequal accumulation.',
                relation: 'Shows why economic collectivism and authoritarian party rule can move in different directions; China and Vietnam are not identical cases.',
                citations: citations(['leninStateRevolution'], ['aeaChinaSocialism', 'cambridgeCommunistIdeologyAdaptation', 'oxfordContemporarySocialistLaw']),
              },
              {
                label: 'National-developmental party socialism',
                distinction: 'Uses socialist or communist legitimacy to build national sovereignty, industrial capacity, security, and social provision in a particular postcolonial or geopolitical setting.',
                relation: 'National development and anti-imperialism can coexist with class universalism, official patriotism, and restricted pluralism; each dimension needs separate evidence.',
                citations: citations(['marxEngelsManifesto', 'leninStateRevolution'], ['oxfordAuthoritarianConsolidation', 'oxfordHistoryCommunism', 'sepColonialism']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'Historical and contemporary examples',
        blocks: [
          {
            type: 'evidence-note',
            text: 'Examples are presented as partial or period-specific matches. A country appearing here is not being assigned one permanent six-dimensional identity, and a current government should not be labeled from institutional resemblance alone.',
            citations: citations(['arendtTotalitarianism'], ['sepSocialism', 'ushmmCommunism']),
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'Soviet Union, especially the Stalin era',
                period: '1928–1953 emphasis',
                match: 'strong historical match on centralization and coercive state direction',
                caveat: 'The Soviet Union changed over time; revolutionary theory, civil-war emergency, Stalinist consolidation, and later periods should not be treated as one identical system.',
                citations: citations(['leninStateRevolution', 'arendtTotalitarianism'], ['ushmmCommunism']),
              },
              {
                name: 'Mao-era China',
                period: '1949–1976 emphasis',
                match: 'strong historical match on party-state authority and extensive economic direction',
                caveat: 'Mao-era policies and institutions changed substantially across campaigns and should not be used as a timeless description of China.',
                citations: citations(['marxEngelsManifesto', 'arendtTotalitarianism'], ['ushmmCommunism', 'sepSocialism']),
              },
              {
                name: 'East Germany and other Soviet-aligned party-states',
                period: 'post-war twentieth century',
                match: 'institutional family resemblance, with important national differences',
                caveat: 'The label describes a comparative pattern, not identical levels of repression, ownership, prosperity, legitimacy, or public participation across states.',
                citations: citations(['arendtTotalitarianism'], ['sepSocialism']),
              },
              {
                name: 'China after market reform',
                period: 'late 1970s–present; period-specific',
                match: 'political match on party monopoly and state direction, weaker match on comprehensive economic planning',
                caveat: 'Market institutions, private firms, global integration, and changing administrative practices mean that present-day China should not be described as a static command economy or treated as identical to Mao-era China.',
                citations: citations(['leninStateRevolution'], ['aeaChinaSocialism', 'oxfordAuthoritarianConsolidation', 'cambridgeCommunistIdeologyAdaptation']),
              },
              {
                name: 'Vietnam after Đổi Mới',
                period: '1986–present; period-specific',
                match: 'party-state and public-direction family resemblance alongside a socialist-market economy',
                caveat: 'The profile is partial: Vietnam’s reform path, economic structure, national history, and institutions differ from China, Cuba, North Korea, the USSR, and historical command economies.',
                citations: citations(['leninStateRevolution'], ['oxfordAuthoritarianConsolidation', 'cambridgeCommunistIdeologyAdaptation', 'oxfordContemporarySocialistLaw']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'marxism-leninism', relation: 'closest named sub-ideology in the current catalogue' },
              { id: 'democratic-socialism', relation: 'economic overlap, but democratic accountability is a central distinction' },
              { id: 'council-communism', relation: 'collectivist alternative that rejects centralized party authority' },
              { id: 'anarcho-communism', relation: 'collectivist and anti-authoritarian counterpoint' },
              { id: 'social-democracy', relation: 'reformist and pluralist neighboring tradition' },
              { id: 'libertarian-socialist', relation: 'anti-authoritarian socialist alternative that seeks collective ownership without a centralized party-state' },
              { id: 'national-conservative', relation: 'can share state capacity and social order, but differs over ownership, class politics, pluralism, and the authority of the nation over the party' },
              { id: 'historical-fascist', relation: 'can share one-party repression and mass mobilization, but differs fundamentally in racial nationalism, property relations, and political doctrine' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'The profile is criticized for combining unlike things: a normative theory of social ownership, an institutional description of one-party rule, and a historical shorthand for several regimes. That criticism is valid, which is why this entry does not present the label as a canonical ideology or as a substitute for country- and period-specific research.',
            citations: citations(['marxEngelsManifesto', 'leninStateRevolution', 'arendtTotalitarianism'], ['sepSocialism']),
          },
          {
            type: 'paragraph',
            text: 'The strongest analytical warning is that collectivism and authoritarianism are separate dimensions. Public ownership can be combined with democracy, decentralization, or worker control; authoritarian rule can coexist with private property. The six-axis score is therefore a teaching aid and a comparison prompt, not a scientific measurement of a person or state.',
            citations: citations(['arendtTotalitarianism'], ['sepSocialism']),
          },
          {
            type: 'paragraph',
            text: 'This entry should be revised when stronger country-specific scholarship, translations, archival evidence, or competing interpretations are added. In particular, claims about social policy, religion, foreign policy, and lived experience require separate evidence instead of being inferred from the economic or authority label.',
            citations: citations(['spinozaPolitical', 'morgenthauRealism'], ['sepReligionPolitics', 'sepSocialism']),
          },
          {
            type: 'paragraph',
            text: 'A further criticism concerns the relationship between stated socialism and lived workplace power. Nationalization can remove private owners while leaving workers subject to managerial targets, party appointments, surveillance, and discipline. Comparative research finds that workers could support, negotiate with, manipulate, or resist party-state institutions; they were neither simply liberated nor simply powerless. The profile should therefore distinguish ownership, control, participation, and labor autonomy.',
            citations: citations(['leninStateRevolution', 'arendtTotalitarianism'], ['oxfordWorkersCommunism', 'oxfordCommunismEasternEurope', 'sepSocialism']),
          },
          {
            type: 'paragraph',
            text: 'Another criticism is temporal and comparative. China and Vietnam retained one-party authority while moving toward market coordination, whereas North Korea and Cuba followed more rigid or distinct paths; the Soviet Union and Eastern European regimes also changed across leadership and period. Comparative classification should record reform, succession, crisis, foreign aid, national development, and institutional adaptation rather than assume that every communist state follows one linear trajectory.',
            citations: citations(['leninStateRevolution', 'arendtTotalitarianism'], ['oxfordAuthoritarianConsolidation', 'cambridgeCommunistIdeologyAdaptation', 'oxfordContemporarySocialistLaw', 'aeaChinaSocialism']),
          },
          {
            type: 'paragraph',
            text: 'Finally, the secular score requires care. Marxist materialism and party-state secularism may reduce clerical authority, yet regimes have varied from accommodation to surveillance, repression, or strategic partnership with religious institutions. A secular public law can protect belief, restrict it, or coexist with official ritual. Religion must be researched through laws, institutions, lived practice, and historical change rather than inferred from an ideological label.',
            citations: citations(['spinozaPolitical', 'hobbesLeviathan'], ['sepReligionPolitics', 'oxfordContemporarySocialistLaw', 'oxfordHistoryCommunism']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: [
        'marxEngelsManifesto',
        'leninStateRevolution',
        'bernsteinEvolutionarySocialism',
        'arendtTotalitarianism',
        'spinozaPolitical',
        'hobbesLeviathan',
        'morgenthauRealism',
        'bakuninStatism',
      ],
      researchSourceIds: ['sepSocialism', 'sepAnarchism', 'sepReligionPolitics', 'ushmmCommunism', 'oxfordHistoryCommunism', 'oxfordAuthoritarianConsolidation', 'oxfordCommunismEasternEurope', 'oxfordWorkersCommunism', 'oxfordContemporarySocialistLaw', 'cambridgeCommunistIdeologyAdaptation', 'aeaChinaSocialism', 'ghdiMarxLeninism', 'sepColonialism', 'vdem'],
      editorialNote: 'References support different layers of the entry: primary texts for stated theories, scholarly works for interpretation, and institutional/encyclopedic sources for bounded historical context. The expanded comparative sources are used to separate Soviet, East European, Chinese, Vietnamese, Cuban, North Korean, and postcolonial trajectories; no source is treated as proving an exact six-axis score.',
    },
    researchGaps: [
      'Add country-specific scholarly sources for East Germany, Mao-era China, Vietnam, North Korea, and Cuba rather than relying on a shared comparative frame.',
      'Document internal debates about religion, gender, nationalism, and economic reform separately for each historical case.',
      'Add non-English primary and scholarly literature, especially Russian, Chinese, Vietnamese, German, and Portuguese sources, with translation notes.',
      'Invite review from historians of socialism and comparative authoritarianism before marking the entry as editorially final.',
      'Compare party monopoly, state ownership, workplace control, legal institutions, social provision, and repression as separate variables across the USSR, Eastern Europe, China, Vietnam, Cuba, North Korea, and other cases.',
      'Add archival and oral-history evidence on how citizens, workers, religious communities, ethnic minorities, and local officials negotiated, supported, resisted, or were harmed by party-state institutions.',
      'Study how foreign aid, sanctions, war, decolonization, and international alliances affected state-building and ideological adaptation rather than treating domestic institutions as self-contained.',
    ],
  },
  'historical-fascist': {
    id: 'historical-fascist',
    title: 'Italian and interwar fascism',
    canonicalLabel: 'Italian and interwar fascism',
    aliases: [
      'fascism',
      'Italian Fascism',
      'classical fascism',
      'interwar fascism',
      'Mussolini’s Fascism',
      'Fascist Italy',
    ],
    entryType: 'historical warning profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'This is a historical-analytical profile centered on Italian Fascism and related interwar fascist movements and regimes. National Socialism is documented in a separate entry: it shares a fascist family resemblance but has distinctive German, racial-totalitarian, imperial, and genocidal content. This entry is not a synonym for every authoritarian, nationalist, conservative, militarist, or right-wing movement.',
    timeScope: 'Primarily late nineteenth-century precursors through the interwar period and the Second World War; post-war analogies require case-specific evidence.',
    geographicScope: 'Originated in Europe, with major cases in Italy and Germany and related movements across Europe; comparisons outside Europe require careful contextual justification.',
    summary: 'A historical warning profile combining exclusionary ultranationalism, an authoritarian leader and movement, mass mobilization, anti-liberal and anti-communist politics, political violence, and a promise of national rebirth. Nazi racial ideology and genocide are central to Nazism, but should not be projected backward onto every Italian or non-Nazi fascist movement.',
    summaryCitations: citations(
      ['griffinNatureFascism', 'mussoliniDoctrine', 'hitlerMeinKampf', 'arendtTotalitarianism'],
      ['sepFascism', 'treccaniFascismo', 'ushmmFascism', 'bpbFascism', 'bpbNationalSocialism'],
    ),
    dimensionInterpretations: {
      economic: {
        score: 18,
        label: 'Mixed economy under national direction',
        explanation: 'Fascist regimes generally preserved private property in important sectors while subordinating labor, production, trade, and investment to national, military, and regime goals. The score is intentionally near the center: fascism is not defined by a single ownership system, and its economic practice varied between corporatist regulation, private enterprise, state ownership, and wartime command.',
        citations: citations(['mussoliniDoctrine', 'hitlerMeinKampf'], ['sepFascism', 'treccaniCorporativismo', 'bpbFascism']),
      },
      social: {
        score: -92,
        label: 'Extremely traditionalist and hierarchical',
        explanation: 'The profile rejects egalitarian pluralism and treats hierarchy, discipline, gendered roles, sacrifice, and an organic national community as virtues. “Traditionalist” here does not mean simply conservative: fascist movements also presented themselves as revolutionary forces creating a new national order.',
        citations: citations(['mussoliniDoctrine', 'hitlerMeinKampf', 'griffinNatureFascism'], ['ushmmFascism', 'bpbNationalSocialism']),
      },
      authority: {
        score: 98,
        label: 'Totalizing authoritarianism',
        explanation: 'The leader, party, and state are fused around a claimed national will; independent parties, unions, press, courts, and civil associations are subordinated or eliminated. The word “totalizing” marks an aspiration and historical practice, not a claim that every fascist movement achieved equal institutional control.',
        citations: citations(['mussoliniDoctrine', 'arendtTotalitarianism'], ['ushmmFascism', 'bpbNationalSocialism']),
      },
      identity: {
        score: -96,
        label: 'Exclusionary ultranationalist',
        explanation: 'The nation is presented as an organic body whose unity outranks individual rights. Membership is defined against internal enemies and outsiders; in Nazism, this became an explicitly racial and antisemitic hierarchy, while Italian Fascism developed its racial policies over time and should not be treated as identical from the beginning.',
        citations: citations(['hitlerMeinKampf', 'mussoliniDoctrine', 'griffinNatureFascism'], ['ushmmFascism', 'bpbFascism', 'bpbNationalSocialism']),
      },
      foreign: {
        score: -90,
        label: 'Strongly interventionist and expansionist',
        explanation: 'War, militarization, empire, territorial revision, and sacrifice are treated as instruments of national regeneration. The exact imperial project differed by movement, but expansionist war is a defining feature of the Nazi case and a major element of Italian Fascist state ideology.',
        citations: citations(['mussoliniDoctrine', 'hitlerMeinKampf'], ['ushmmFascism', 'bpbNationalSocialism']),
      },
      religion: {
        score: -25,
        label: 'Instrumental religious traditionalism',
        explanation: 'Fascist regimes were neither uniformly secular nor straightforward theocracies. They could negotiate with churches, invoke sacred national symbols, and mobilize religious tradition while subordinating independent religious authority to the state and party. Nazi racial ideology was not simply a form of ordinary Christian conservatism.',
        citations: citations(['mussoliniDoctrine', 'arendtTotalitarianism', 'aquinasMoralPolitical'], ['sepReligionPolitics', 'treccaniLateranPacts', 'bpbFascism', 'bpbNationalSocialism']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'warning',
            text: 'This entry is for historical and civic education. Fascist and Nazi regimes used dictatorship, persecution, racial hierarchy, mass violence, and aggressive war; the profile must never be presented as an ordinary policy preference or a neutral lifestyle category.',
            citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['ushmmFascism', 'bpbNationalSocialism']),
          },
          {
            type: 'paragraph',
            text: '“Fascism” began as the self-description of Mussolini’s Italian movement and later became a comparative term for related anti-liberal, ultranationalist movements and regimes. Scholars disagree about the necessary and sufficient features of a generic definition. This entry therefore combines a narrow historical core with a transparent list of recurring tendencies, rather than labeling every strong or nationalist government fascist.',
            citations: citations(['griffinNatureFascism', 'mussoliniDoctrine'], ['sepFascism', 'bpbFascism']),
          },
          {
            type: 'paragraph',
            text: 'Nazism is treated as a radical form of fascism with distinctive racial antisemitism, biological hierarchy, conquest in Eastern Europe, and genocidal practice. Italian Fascism and Nazism shared important authoritarian and mobilizational features, but they were not identical ideologies or regimes, and Italian racial policy changed across time.',
            citations: citations(['hitlerMeinKampf', 'mussoliniDoctrine', 'griffinNatureFascism'], ['ushmmFascism', 'bpbFascism', 'bpbNationalSocialism']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'The ideological center of fascism is an organic nation imagined as weakened by decadence, division, liberal individualism, class conflict, internal enemies, or foreign humiliation. Fascist movements promise a rebirth or regeneration of that community through unity, discipline, sacrifice, and a new political order. This “rebirth” framework is influential in comparative scholarship, but it is an interpretive model rather than a universal self-description.',
            citations: citations(['griffinNatureFascism', 'mussoliniDoctrine'], ['sepFascism', 'ushmmFascism']),
          },
          {
            type: 'paragraph',
            text: 'Fascist movements are not merely military dictatorships imposed from above. They seek an active, emotional, and often paramilitary mass politics: rallies, uniforms, rituals, propaganda, youth organizations, and the performance of loyalty. Violence is not only an emergency tool; it can be portrayed as cleansing, heroic, or necessary to remove obstacles to national unity.',
            citations: citations(['mussoliniDoctrine', 'arendtTotalitarianism'], ['ushmmFascism', 'bpbFascism']),
          },
          {
            type: 'paragraph',
            text: 'Economically, fascism is better described as national subordination of economic life than as a fixed position on the free-market/collectivist axis. Corporatist institutions, private firms, labor controls, autarky, rearmament, and state direction could coexist. Fascist regimes opposed Marxist class politics and independent labor organization while claiming to overcome class conflict inside the national community.',
            citations: citations(['mussoliniDoctrine', 'hitlerMeinKampf'], ['sepFascism', 'bpbFascism']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Late nineteenth century–1918: precursors and crisis conditions',
            text: 'Fascism drew on radical nationalism, militarized political culture, anti-socialism, imperial ambition, and reactions to mass politics. The First World War and its social, economic, and political disruptions created an environment in which movements promising unity, discipline, and national restoration could gain support.',
            citations: citations(['griffinNatureFascism', 'mussoliniDoctrine'], ['ushmmFascism', 'sepFascism']),
          },
          {
            period: '1919–1922: Italian Fascist movement and seizure of office',
            text: 'Mussolini founded the Italian Fascist movement in 1919, converted it into a national party, and used the March on Rome in 1922 to become prime minister. The subsequent destruction of pluralist institutions turned a movement with electoral and paramilitary elements into a dictatorship.',
            citations: citations(['mussoliniDoctrine'], ['treccaniFascismo', 'ushmmFascism', 'bpbFascism']),
          },
          {
            period: '1925–1939: dictatorship, corporatism, church settlement, and empire',
            text: 'The Italian regime consolidated one-party rule while presenting corporatism as an alternative to both liberal capitalism and Marxist class conflict. In practice, corporatist institutions subordinated independent labor organization to state supervision rather than creating equal worker–employer governance. The 1929 Lateran Pacts reconciled the Fascist state with the Catholic Church and strengthened the regime’s legitimacy, while the Ethiopian war and colonial rule pushed Fascism toward a more explicit imperial and racial politics. These developments were connected but not identical: corporatism, church diplomacy, colonial violence, and racial legislation each require their own evidence.',
            citations: citations(['mussoliniDoctrine'], ['treccaniFascismo', 'treccaniCorporativismo', 'treccaniLateranPacts', 'cambridgeMussolinisFollies', 'sageColonialDominationItaly']),
          },
          {
            period: '1923–1933: Nazi movement and the end of Weimar democracy',
            text: 'Hitler’s failed 1923 putsch was followed by a strategic shift toward electoral and legal routes to power. After Hitler became chancellor in January 1933, the Enabling Act, party bans, Gleichschaltung, and the destruction of independent institutions established the Nazi dictatorship.',
            citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['ushmmFascism', 'bpbNationalSocialism']),
          },
          {
            period: '1933–1945: radicalization, war, and genocide',
            text: 'Nazi rule fused racial citizenship, political terror, rearmament, territorial expansion, occupation, forced labor, and genocide. The Holocaust and the wider crimes of the Nazi state are not incidental “excesses”; they are central evidence of what racial-totalitarian fascism meant in practice.',
            citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['ushmmFascism', 'bpbNationalSocialism']),
          },
          {
            period: 'Post-1945: defeat, memory, and contested extension',
            text: 'The defeat of the Axis powers discredited classical fascist regimes, but fascist and neo-fascist currents continued to adapt, rename themselves, and dispute their relationship to the historical movements. Contemporary use of the label therefore requires evidence of ideology, organization, mobilization, and practice rather than a single rhetorical resemblance.',
            citations: citations(['griffinNatureFascism', 'arendtTotalitarianism'], ['sepFascism', 'bpbFascism']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Italian Fascism',
                distinction: 'The original movement and regime, centered on the nation, the state, the leader, corporatist organization, imperial ambition, and anti-socialist mobilization.',
                relation: 'The historical origin of the label; its racial and religious policies must not simply be read backward from Nazi Germany.',
                citations: citations(['mussoliniDoctrine'], ['treccaniFascismo', 'treccaniCorporativismo', 'treccaniLateranPacts', 'cambridgeMussolinisFollies', 'sageColonialDominationItaly', 'ushmmFascism', 'bpbFascism']),
              },
              {
                label: 'National Socialism / Nazism',
                distinction: 'A radical German form centered on racial antisemitism, the Volksgemeinschaft, Lebensraum, Führer rule, anti-Bolshevism, and genocidal war.',
                relation: 'A major fascist case, but its racial ideology and genocidal practice make it more than a generic synonym for all fascism.',
                citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['ushmmFascism', 'bpbNationalSocialism']),
              },
              {
                label: 'Falangism and other interwar movements',
                distinction: 'Movements in Spain and elsewhere adapted fascist styles, nationalism, corporatism, anti-communism, or political violence to different national conditions.',
                relation: 'Comparable movement family, not evidence that every later authoritarian regime was fascist or identical to Italy and Germany.',
                citations: citations(['griffinNatureFascism'], ['ushmmFascism', 'bpbFascism']),
              },
              {
                label: 'Authoritarian conservatism and military dictatorship',
                distinction: 'May share hierarchy, nationalism, anti-communism, censorship, or military rule without a revolutionary mass movement, palingenetic myth, or fascist party-state project.',
                relation: 'Important boundary case; authoritarianism alone is not enough to establish fascism.',
                citations: citations(['arendtTotalitarianism', 'griffinNatureFascism'], ['sepFascism']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'Historical and contemporary examples',
        blocks: [
          {
            type: 'evidence-note',
            text: 'This profile is historical. No current country is listed as an exact match. Modern movements and governments require separate analysis of their programs, organizations, institutions, violence, treatment of minorities, and relationship to elections and the state.',
            citations: citations(['griffinNatureFascism'], ['sepFascism', 'bpbFascism']),
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'Fascist Italy',
                period: '1922–1943; Italian Social Republic 1943–1945',
                match: 'canonical historical match',
                caveat: 'The regime changed over time and its racial policy was not identical to Nazi Germany’s; later alliance and war intensified its authoritarian and imperial features.',
                citations: citations(['mussoliniDoctrine'], ['treccaniFascismo', 'treccaniCorporativismo', 'treccaniLateranPacts', 'cambridgeMussolinisFollies', 'sageColonialDominationItaly', 'ushmmFascism', 'bpbFascism']),
              },
              {
                name: 'Nazi Germany',
                period: '1933–1945',
                match: 'canonical and especially radical fascist match',
                caveat: 'Nazism must be distinguished from generic fascism because racial antisemitism, conquest, and genocide were structurally central to the Nazi project.',
                citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['ushmmFascism', 'bpbNationalSocialism']),
              },
              {
                name: 'Falangist Spain and other interwar European movements',
                period: 'interwar period and Spanish Civil War context',
                match: 'partial or movement-level comparison',
                caveat: 'The degree to which Spain and other regimes should be classified as fascist is debated; movement influence, coalition politics, and later authoritarian institutions should be separated.',
                citations: citations(['griffinNatureFascism'], ['ushmmFascism', 'bpbFascism']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'national-socialist', relation: 'specific Nazi profile with stronger racial and genocidal content' },
              { id: 'ethnic-nationalist', relation: 'identity overlap, but ethnic nationalism alone is not fascism' },
              { id: 'militarist-imperialist', relation: 'foreign-policy overlap, but militarism alone is not fascism' },
              { id: 'national-conservative', relation: 'may share tradition and sovereignty language, but constitutional pluralism is a central distinction' },
              { id: 'authoritarian-collectivist', relation: 'authority overlap, but economic ownership and national identity point in different directions' },
              { id: 'populist', relation: 'mass-appeal and anti-elite rhetoric may overlap, but populism is not automatically fascist' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'The central scholarly dispute is definitional. Narrow definitions protect the historical specificity of Mussolini’s movement and the interwar period; broader ideal-type definitions help compare movements across countries and decades. The entry keeps both concerns visible and records which claims are historical facts, which are comparative interpretations, and which are warning signs for further investigation.',
            citations: citations(['griffinNatureFascism', 'arendtTotalitarianism'], ['sepFascism', 'bpbFascism']),
          },
          {
            type: 'paragraph',
            text: 'The label can also conceal variation in class coalitions, economic policy, church relations, administrative capacity, and popular support. A regime may be authoritarian and nationalist without being fascist; conversely, a movement may exhibit fascist politics without controlling a state. Classification should therefore use a bundle of evidence rather than one slogan, leader, color, or policy.',
            citations: citations(['griffinNatureFascism', 'mussoliniDoctrine', 'arendtTotalitarianism'], ['sepFascism', 'bpbFascism']),
          },
          {
            type: 'paragraph',
            text: 'Nazi crimes must never be diluted by treating them as a generic “strong government” outcome. Racial persecution, the Holocaust, aggressive war, forced labor, and mass murder are historically documented practices of the Nazi state and must remain explicit in any educational presentation of this card.',
            citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['ushmmFascism', 'bpbNationalSocialism']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: [
        'griffinNatureFascism',
        'mussoliniDoctrine',
        'hitlerMeinKampf',
        'arendtTotalitarianism',
        'aquinasMoralPolitical',
      ],
      researchSourceIds: [
        'sepFascism',
        'sepReligionPolitics',
        'treccaniFascismo',
        'treccaniCorporativismo',
        'treccaniLateranPacts',
        'cambridgeMussolinisFollies',
        'sageColonialDominationItaly',
        'ushmmFascism',
        'bpbFascism',
        'bpbNationalSocialism',
      ],
      editorialNote: 'The entry separates primary fascist and Nazi texts from comparative scholarship and institutional historical sources. The profile is a warning and comparison aid, not a diagnosis of contemporary people or countries.',
    },
    researchGaps: [
      'Expand Italian-language scholarship on Fascist Italy, corporatism, the Lateran Pacts, colonial violence, and the regime’s changing racial policy, including archival and regional studies beyond general reference works.',
      'Add French- and German-language scholarship on comparative fascism, Vichy, the German Sonderweg debate, and post-war memory without treating all cases as equivalent.',
      'Add country-specific evidence before creating any contemporary movement or country match; avoid inferring fascism from rhetoric alone.',
      'Add specialist review on gender, religion, political economy, colonialism, and the relationship between fascist movements and traditional conservative elites.',
    ],
  },
  'libertarian-market': {
    id: 'libertarian-market',
    title: 'Libertarian market liberal',
    canonicalLabel: 'Libertarian market liberal',
    aliases: [
      'right-libertarianism',
      'market libertarianism',
      'minarchist liberalism',
      'classical-liberal market order',
    ],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'This is a deliberately narrow profile joining strong market and property preferences to strong limits on coercive government. Libertarianism is a family of views, not one complete programme; left-libertarian, classical-liberal, minarchist, and anarcho-capitalist positions differ in important ways.',
    timeScope: 'Intellectual roots in early modern natural-rights and toleration arguments; modern formulations developed through classical liberalism, twentieth-century Austrian economics, and contemporary political philosophy.',
    geographicScope: 'Transnational intellectual tradition with important British, European, and North American strands; no current country is an exact six-axis match.',
    summary: 'A market-oriented libertarian profile that treats individual liberty, private property, voluntary exchange, freedom of contract, and protection from coercion as central political values. It favors a highly limited state or, in stronger versions, voluntary and market-based alternatives to state functions, while leaving social customs and personal identity largely to individual choice.',
    summaryCitations: citations(
      ['hayekKnowledge', 'millOnLiberty', 'nozickASU', 'lockeSecondTreatise', 'constantLibertyModerns'],
      ['sepLibertarianism', 'sepLiberalism', 'sageWhatIsFrenchLiberalism'],
    ),
    dimensionInterpretations: {
      economic: {
        score: -86,
        label: 'Strongly free-market',
        explanation: 'Private property, contract, competition, and decentralized exchange are preferred to central planning, broad redistribution, and extensive economic regulation. The score describes a normative preference; it does not imply that markets operate without law, public institutions, or historically inherited power.',
        citations: citations(['adamSmithWealth', 'hayekKnowledge', 'nozickASU'], ['sepLibertarianism', 'sepLiberalism']),
      },
      social: {
        score: 34,
        label: 'Moderately progressive / socially permissive',
        explanation: 'The profile generally resists state enforcement of a single morality and protects voluntary association, speech, conscience, and lifestyle choice. “Libertarian” does not automatically mean culturally progressive: some libertarians combine economic freedom with traditional religious or social commitments.',
        citations: citations(['millOnLiberty', 'lockeLetterToleration'], ['sepLibertarianism', 'sepLiberalism']),
      },
      authority: {
        score: -88,
        label: 'Strongly libertarian',
        explanation: 'Coercive government is restricted to protecting persons and rights, enforcing contracts, resolving disputes, and possibly providing a narrow set of public functions. Minarchists accept a minimal state; anarcho-capitalists reject a territorial state entirely, so this profile spans an important internal boundary.',
        citations: citations(['nozickASU', 'millOnLiberty', 'lockeSecondTreatise'], ['sepLibertarianism']),
      },
      identity: {
        score: 34,
        label: 'Moderately internationalist / individualist',
        explanation: 'The profile prioritizes individual rights and voluntary cooperation over compulsory national unity. It can support free trade, migration, and cosmopolitan exchange, but some libertarians defend national borders or civic attachment on property, security, or self-government grounds.',
        citations: citations(['lockeSecondTreatise', 'millOnLiberty', 'adamSmithWealth'], ['sepLibertarianism', 'sepLiberalism']),
      },
      foreign: {
        score: 72,
        label: 'Strongly restraint-oriented',
        explanation: 'Military intervention, conscription, empire, and nation-building are viewed skeptically because they require coercion and taxation. A limited defensive state, alliances, or force against aggression may still be accepted; restraint is not absolute pacifism.',
        citations: citations(['millOnLiberty', 'kantPerpetualPeace', 'morgenthauRealism'], ['sepLibertarianism']),
      },
      religion: {
        score: 55,
        label: 'Secular and pluralist public law',
        explanation: 'Freedom of conscience and religious association are protected, while the state should not impose a church or a comprehensive religious morality. This is compatible with deeply religious citizens and voluntary communities; it is not a claim that the profile is personally nonreligious.',
        citations: citations(['lockeLetterToleration', 'millOnLiberty'], ['sepReligionPolitics', 'sepLibertarianism']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: '“Libertarian market liberal” is an educational profile for a cluster of views that gives individual freedom and protection from coercion priority, treats private property and voluntary exchange as important conditions of that freedom, and sharply limits the legitimate scope of government. It is closer to right-libertarian and market-liberal positions than to libertarian socialism or every form of classical liberalism.',
            citations: citations(['hayekKnowledge', 'nozickASU', 'millOnLiberty'], ['sepLibertarianism', 'sepLiberalism']),
          },
          {
            type: 'paragraph',
            text: 'The profile is not the same as “anything a market-friendly person believes.” It combines economic decentralization with a strong anti-coercion principle. A person or party may support markets while also accepting a large welfare state, military intervention, religious law, or strong cultural regulation; such a position should be scored on those dimensions separately.',
            citations: citations(['millOnLiberty', 'nozickASU'], ['sepLibertarianism', 'sepLiberalism']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'The central moral idea is that people should control their own lives and should not be coerced for their own alleged good or to produce a preferred pattern of social equality. Libertarian arguments differ over whether rights are natural, self-ownership based, contractual, consequentialist, or grounded in the benefits of spontaneous cooperation, but they converge in treating coercion as a serious burden requiring justification.',
            citations: citations(['nozickASU', 'millOnLiberty'], ['sepLibertarianism']),
          },
          {
            type: 'paragraph',
            text: 'The economic argument is both moral and informational. Private property and contract give people authority over resources, while market prices and decentralized decisions can transmit knowledge that no central planner possesses in full. Hayek’s argument is not a proof that every market is efficient or just; it is a critique of assuming that a central authority can reliably collect and use all relevant local knowledge.',
            citations: citations(['hayekKnowledge', 'adamSmithWealth'], ['sepLibertarianism', 'sepLiberalism']),
          },
          {
            type: 'paragraph',
            text: 'A limited state still requires law, courts, policing, and rules defining property and contract. This creates an internal tension: markets are defended as voluntary orders, but the legal framework that makes ownership and exchange possible is publicly enforced. Libertarian theories disagree over how much collective provision is compatible with that framework and whether some state functions can be supplied privately.',
            citations: citations(['nozickASU', 'lockeSecondTreatise'], ['sepLibertarianism', 'sepLiberalism']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Seventeenth–eighteenth centuries: natural rights and toleration',
            text: 'Lockean arguments linked political legitimacy to individual rights, consent, limited government, property, and protection of conscience. These are important roots of liberal constitutionalism, but Locke’s own views do not amount to every modern libertarian position.',
            citations: citations(['lockeSecondTreatise', 'lockeLetterToleration'], ['sepLiberalism', 'sepReligionPolitics']),
          },
          {
            period: 'Eighteenth–nineteenth centuries: classical liberal political economy',
            text: 'Smith and later classical liberals argued for limits on arbitrary power, commercial society, and the benefits of exchange, while liberal reformers differed over poverty, empire, labor, public education, and the scope of the state. Classical liberalism was a spectrum, not a single near-anarchist doctrine.',
            citations: citations(['adamSmithWealth', 'millOnLiberty'], ['sepLiberalism']),
          },
          {
            period: 'Nineteenth-century French liberal debates',
            text: 'French liberalism was not one exportable doctrine. Constant emphasized modern civil liberty, representative institutions, and limits on concentrated power; Tocqueville linked liberty to associations, habits, religion, and democratic conditions; Bastiat defended free exchange and economic liberty. Their differences matter: Bastiat’s political economy cannot simply be equated with Constant’s constitutional thought or with contemporary right-libertarianism.',
            citations: citations(['constantLibertyModerns', 'tocquevilleDemocracy'], ['sageWhatIsFrenchLiberalism', 'cambridgeConstitutionalLiberalismFrance', 'economieBastiat']),
          },
          {
            period: '1859 and the development of individual liberty',
            text: 'Mill’s defense of individuality, free discussion, voluntary association, and a harm-based limit on coercion expanded the social and expressive side of liberal freedom. Mill was not a contemporary right-libertarian on every question; his utilitarianism and openness to some public action matter for accurate classification.',
            citations: citations(['millOnLiberty'], ['sepLiberalism', 'sepLibertarianism']),
          },
          {
            period: 'Twentieth century: Austrian economics and modern libertarian philosophy',
            text: 'Hayek emphasized dispersed knowledge and the coordination role of prices, while Nozick developed a rights-based argument for a minimal state and against patterned redistributive justice. Their arguments are influential but distinct: Hayek’s institutional and epistemic case is not identical to Nozick’s deontological theory of rights.',
            citations: citations(['hayekKnowledge', 'nozickASU'], ['sepLibertarianism', 'sepLiberalism']),
          },
          {
            period: 'Contemporary debates',
            text: 'Current libertarian philosophy contains right- and left-libertarian positions, minarchism, anarcho-capitalism, market anarchism, and hybrid classical-liberal approaches. The major disputes concern original appropriation, redistribution, public goods, borders, environmental harm, social insurance, corporate power, and the legitimacy of the state itself.',
            citations: citations(['nozickASU', 'millOnLiberty'], ['sepLibertarianism']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Classical liberalism',
                distinction: 'Defends rights, constitutional limits, private property, and markets but may accept a broader role for public goods, regulation, education, or social reform than strict libertarianism.',
                relation: 'Historical and intellectual neighbor; the boundary is gradual rather than a clean dividing line.',
                citations: citations(['adamSmithWealth', 'millOnLiberty', 'lockeSecondTreatise'], ['sepLiberalism', 'sepLibertarianism']),
              },
              {
                label: 'Nineteenth-century French liberalism',
                distinction: 'A heterogeneous family including Constant’s constitutional and civil-liberty arguments, Tocqueville’s analysis of democracy and associations, and Bastiat’s defense of free exchange and economic liberty.',
                relation: 'Important intellectual ancestor and contrast case; it contains broader and more historically situated arguments than this narrow market-libertarian card.',
                citations: citations(['constantLibertyModerns', 'tocquevilleDemocracy'], ['sageWhatIsFrenchLiberalism', 'cambridgeConstitutionalLiberalismFrance', 'economieBastiat']),
              },
              {
                label: 'Minarchism / right-libertarianism',
                distinction: 'Treats a minimal state protecting against force, theft, fraud, and rights violations as legitimate, while rejecting extensive redistribution and regulation.',
                relation: 'Closest fit to this card’s authority and economic coordinates.',
                citations: citations(['nozickASU'], ['sepLibertarianism']),
              },
              {
                label: 'Anarcho-capitalism',
                distinction: 'Rejects a territorial state and proposes private, contractual, or competitive provision of law, security, and other services.',
                relation: 'More radical on authority; it shares the market orientation but should not be collapsed into minimal-state liberalism.',
                citations: citations(['nozickASU'], ['sepLibertarianism']),
              },
              {
                label: 'Left-libertarianism',
                distinction: 'Combines strong individual rights with egalitarian or shared claims concerning natural resources, land, or the background conditions of appropriation.',
                relation: 'Shows why individual liberty does not logically settle one position on distributive justice or economic inequality.',
                citations: citations(['lockeSecondTreatise'], ['sepLibertarianism']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'Historical and contemporary examples',
        blocks: [
          {
            type: 'evidence-note',
            text: 'No country is a complete contemporary match for a philosophical ideal. States that protect markets and civil liberties also tax, regulate, provide public goods, restrict migration, maintain militaries, and make compromises that move them away from this profile.',
            citations: citations(['hayekKnowledge', 'millOnLiberty'], ['sepLibertarianism', 'sepLiberalism']),
          },
          {
            type: 'people',
            entries: [
              {
                name: 'John Locke',
                role: 'natural-rights and limited-government precursor',
                caveat: 'A foundational liberal influence, not a complete modern libertarian.',
                citations: citations(['lockeSecondTreatise', 'lockeLetterToleration'], ['sepLiberalism']),
              },
              {
                name: 'Adam Smith',
                role: 'political economist of commercial society and exchange',
                caveat: 'Smith’s broader moral and institutional thought should not be reduced to laissez-faire absolutism.',
                citations: citations(['adamSmithWealth'], ['sepLiberalism']),
              },
              {
                name: 'John Stuart Mill',
                role: 'defender of individuality, discussion, and limits on coercion',
                caveat: 'Mill supported some public action and is best treated as a liberal neighbor rather than a pure right-libertarian.',
                citations: citations(['millOnLiberty'], ['sepLiberalism', 'sepLibertarianism']),
              },
              {
                name: 'Friedrich Hayek',
                role: 'critic of centralized economic planning and theorist of dispersed knowledge',
                caveat: 'Hayek defended a rule-bound state and should not be equated with anarcho-capitalism.',
                citations: citations(['hayekKnowledge'], ['sepLibertarianism', 'sepLiberalism']),
              },
              {
                name: 'Robert Nozick',
                role: 'rights-based defender of the minimal state',
                caveat: 'Nozick’s argument is one influential philosophical version, not a consensus definition of libertarianism.',
                citations: citations(['nozickASU'], ['sepLibertarianism']),
              },
              {
                name: 'Frédéric Bastiat',
                role: 'French economist, journalist, and liberal political writer',
                caveat: 'A nineteenth-century liberal precursor whose political economy and historical context should not be collapsed into contemporary libertarianism.',
                citations: citations([], ['economieBastiat', 'sageWhatIsFrenchLiberalism']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'Nineteenth-century British classical liberalism',
                period: 'especially the free-trade and reform era',
                match: 'partial historical intellectual and policy resemblance',
                caveat: 'Britain retained empire, class hierarchy, limited suffrage for much of the period, and state coercion; it is not an exact libertarian society.',
                citations: citations(['adamSmithWealth', 'millOnLiberty'], ['sepLiberalism']),
              },
              {
                name: 'Classical-liberal constitutional traditions',
                period: 'eighteenth century to present',
                match: 'institutional partial resemblance where rights, rule of law, private property, and limited government are strong',
                caveat: 'Constitutional liberalism can support welfare provision, public services, regulation, and collective defense beyond strict libertarian limits.',
                citations: citations(['lockeSecondTreatise', 'millOnLiberty'], ['sepLiberalism', 'sepLibertarianism']),
              },
              {
                name: 'Contemporary market democracies',
                period: 'present',
                match: 'no exact country match; use comparative evidence only',
                caveat: 'A country’s market openness or civil-liberties score cannot establish the full philosophical profile without examining taxation, regulation, welfare, coercion, borders, and foreign policy together.',
                citations: citations(['hayekKnowledge', 'millOnLiberty'], ['sepLibertarianism', 'vdem']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'libertarianism', relation: 'broader philosophical family' },
              { id: 'classical-liberalism', relation: 'historical and theoretical neighbor with a broader range of state roles' },
              { id: 'anarcho-capitalism', relation: 'more radical rejection of the state' },
              { id: 'constitutionalism', relation: 'institutional framework for limited and rule-bound government' },
              { id: 'social-liberalism', relation: 'liberal neighbor that accepts a more active redistributive and regulatory state' },
              { id: 'libertarian-socialist', relation: 'shares anti-authoritarian concerns but rejects private-capital primacy' },
              { id: 'anarcho-communism', relation: 'anti-state and anti-capitalist counterpoint' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'Critics argue that libertarian rights and property rules cannot avoid questions of history, unequal bargaining power, inherited wealth, and the distribution of natural resources. They also argue that taxation and regulation can protect the background conditions that make freedom and markets meaningful, rather than simply violating liberty.',
            citations: citations(['nozickASU', 'millOnLiberty'], ['sepLibertarianism', 'sepLiberalism']),
          },
          {
            type: 'paragraph',
            text: 'A second criticism concerns collective-action problems. Pollution, public health, infrastructure, defense, monopoly, financial instability, and basic education may generate harms or coordination needs that voluntary exchange does not solve reliably. Libertarian responses vary: some defend private provision, some accept narrow public goods, and some revise the theory toward classical liberalism.',
            citations: citations(['hayekKnowledge', 'millOnLiberty'], ['sepLibertarianism', 'sepLiberalism']),
          },
          {
            type: 'paragraph',
            text: 'The profile must not turn “freedom” into a one-axis synonym for low taxes or weak government. Private employers, landlords, monopolies, families, religious institutions, and criminal organizations can also constrain people. The analysis should record who holds power, which coercive mechanisms exist, and whether individuals have meaningful exit and voice.',
            citations: citations(['millOnLiberty', 'nozickASU'], ['sepLibertarianism', 'sepLiberalism']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: [
        'lockeSecondTreatise',
        'lockeLetterToleration',
        'adamSmithWealth',
        'millOnLiberty',
        'constantLibertyModerns',
        'tocquevilleDemocracy',
        'hayekKnowledge',
        'nozickASU',
        'kantPerpetualPeace',
        'morgenthauRealism',
      ],
      researchSourceIds: ['sepLibertarianism', 'sepLiberalism', 'sepReligionPolitics', 'sageWhatIsFrenchLiberalism', 'cambridgeConstitutionalLiberalismFrance', 'economieBastiat', 'vdem'],
      editorialNote: 'The entry distinguishes primary arguments from comparative philosophical interpretation. Its scores describe one market-libertarian archetype and do not define all classical liberals, libertarians, or market-oriented governments.',
    },
    researchGaps: [
      'Expand French-language and specialist scholarship on Constant, Bastiat, Tocqueville, Guizot, and the liberal tradition, with care around the difference between nineteenth-century liberalism and contemporary libertarianism.',
      'Add German-language scholarship on the ordoliberal and Austrian traditions; neither should be treated as interchangeable with minarchism or anarcho-capitalism.',
      'Add specialist research on public goods, externalities, corporate power, environmental limits, and the empirical performance of low-tax or low-regulation regimes.',
      'Add country-specific data before showing contemporary states as examples; current market openness and civil-liberties indicators are not sufficient for an exact six-axis match.',
    ],
  },
  'progressive-liberal': {
    id: 'progressive-liberal',
    title: 'Progressive liberal',
    canonicalLabel: 'Progressive liberal',
    aliases: [
      'modern liberalism',
      'social liberalism',
      'welfare liberalism',
      'reform liberalism',
    ],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'This is a broad educational profile combining liberal rights and pluralist institutions with progressive social reform and an active mixed-economy state. It is not a precise synonym for every left-of-center party, U.S. liberal, social democrat, or progressive movement.',
    timeScope: 'Intellectual roots in eighteenth- and nineteenth-century liberal and feminist thought; modern forms developed through new liberalism, Keynesian policy, civil-rights movements, and post-war democratic institutions.',
    geographicScope: 'Transnational profile with major British, European, North American, and internationalist strands; country matches are necessarily partial and period-specific.',
    summary: 'A liberal-democratic profile that combines civil and political rights, personal autonomy, social inclusion, and equal citizenship with public action to reduce deprivation, regulate markets, and expand practical opportunity. It accepts an active state but keeps that state accountable to elections, courts, rights, and pluralist institutions.',
    summaryCitations: citations(
      ['millOnLiberty', 'wollstonecraftRights', 'keynesGeneralTheory', 'kantPerpetualPeace'],
      ['sepLiberalism', 'oxfordRepublicanismTransatlantic', 'viePubliqueLaiciteStasi', 'vdem', 'sepReligionPolitics'],
    ),
    dimensionInterpretations: {
      economic: {
        score: 32,
        label: 'Moderately collectivist / social-investment oriented',
        explanation: 'Markets and private ownership remain important, but taxation, regulation, public services, labor protections, and redistribution are accepted as tools for equal opportunity and economic security. This is not a commitment to state ownership or comprehensive planning.',
        citations: citations(['keynesGeneralTheory', 'millOnLiberty'], ['sepLiberalism']),
      },
      social: {
        score: 78,
        label: 'Strongly progressive',
        explanation: 'The profile treats personal autonomy, equal citizenship, anti-discrimination, gender equality, and revision of inherited social norms as legitimate public concerns. It can still differ internally over paternalism, speech boundaries, family policy, and the pace of cultural change.',
        citations: citations(['wollstonecraftRights', 'millOnLiberty'], ['sepLiberalism']),
      },
      authority: {
        score: -36,
        label: 'Liberal and institutionally constrained',
        explanation: 'Government is active in welfare, regulation, and public goods, but its power is constrained by elections, rights, courts, free expression, and independent associations. The profile distinguishes legitimate public capacity from unchecked executive or bureaucratic domination.',
        citations: citations(['millOnLiberty', 'lockeSecondTreatise'], ['vdem', 'sepLiberalism']),
      },
      identity: {
        score: 54,
        label: 'Inclusive internationalist',
        explanation: 'Political membership is centered on equal citizenship, pluralism, and cooperation across borders rather than inherited ethnicity or compulsory cultural uniformity. National institutions can remain meaningful, but they are judged by inclusion and rights rather than ethnic homogeneity.',
        citations: citations(['kantPerpetualPeace', 'andersonImaginedCommunities', 'constantLibertyModerns', 'tocquevilleDemocracy'], ['sepLiberalism', 'oxfordRepublicanismTransatlantic', 'cambridgeIndivisibilityFrenchRepublic']),
      },
      foreign: {
        score: -28,
        label: 'Diplomatic with limited collective action',
        explanation: 'Diplomacy, international law, alliances, and cooperation are preferred, while sanctions or limited force may be justified for collective security or the protection of basic rights. This is neither pacifism nor a licence for open-ended humanitarian intervention.',
        citations: citations(['kantPerpetualPeace', 'morgenthauRealism'], ['foreignPolicy']),
      },
      religion: {
        score: 65,
        label: 'Strongly secular and pluralist',
        explanation: 'Public law is justified through equal citizenship and constitutional principles rather than one religious authority, while religious belief and practice remain protected. Progressive liberalism can include religious citizens and religious social movements without giving a faith coercive control over the state.',
        citations: citations(['lockeLetterToleration', 'spinozaPolitical'], ['sepReligionPolitics', 'sepLiberalism', 'viePubliqueLaiciteStasi']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: '“Progressive liberal” names a family of positions that treats individual rights and constitutional democracy as compatible with substantial public action. It seeks to make freedom more than a formal permission by addressing poverty, discrimination, unequal power, education, health, and access to social and political participation.',
            citations: citations(['millOnLiberty', 'wollstonecraftRights', 'keynesGeneralTheory'], ['sepLiberalism', 'sepLibertarianism']),
          },
          {
            type: 'paragraph',
            text: 'The profile is deliberately between classical libertarianism and democratic socialism. It generally preserves a mixed economy and private enterprise, but argues that markets need democratic rules and social safeguards. It also differs from authoritarian progressivism: rights, dissent, elections, and institutional limits are not optional decorations.',
            citations: citations(['millOnLiberty', 'keynesGeneralTheory'], ['sepLiberalism', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'French republican and social-liberal traditions show why “progressive liberal” cannot be reduced to an Anglo-American left label. Republican language often makes equality, civic education, solidarity, and a shared public framework central, while laïcité is presented institutionally through freedom of conscience, equal treatment of convictions, and neutrality of public power. The same universalist language can also generate disputes when formal individual citizenship leaves group-based discrimination or minority claims insufficiently visible.',
            citations: citations(['constantLibertyModerns', 'tocquevilleDemocracy'], ['oxfordRepublicanismTransatlantic', 'perseeRepublicanismLiberalism', 'viePubliqueLaiciteStasi', 'cambridgeIndivisibilityFrenchRepublic', 'sageFrenchRepublicLiberalFounders']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'The social principle is equal civic standing combined with room for people to choose their own lives. Progressive liberalism supports legal and political reform when inherited institutions exclude people or reproduce unequal status. Wollstonecraft’s argument for women’s rational education and Mill’s defense of individuality illustrate two important intellectual strands, although neither writer should be treated as a complete modern progressive liberal.',
            citations: citations(['wollstonecraftRights', 'millOnLiberty'], ['sepLiberalism']),
          },
          {
            type: 'paragraph',
            text: 'The economic principle is not the abolition of markets. It is the view that market outcomes and private power can undermine equal freedom, security, or democratic participation, so public institutions may regulate exchange and provide collective goods. Keynesian arguments supplied one influential case for using public policy to stabilize employment and demand; they do not settle every question about welfare or ownership.',
            citations: citations(['keynesGeneralTheory', 'millOnLiberty'], ['sepLiberalism']),
          },
          {
            type: 'paragraph',
            text: 'The authority principle is an active but limited state. Regulation, taxation, welfare, and public services are legitimate only within a framework of accountability, rights, judicial review, transparent administration, and open contestation. The profile therefore evaluates not only what government does, but whether citizens can challenge and replace those who exercise power.',
            citations: citations(['lockeSecondTreatise', 'millOnLiberty'], ['vdem', 'sepLiberalism']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: '1790s: liberal rights and feminist reform',
            text: 'Wollstonecraft connected universal reason, education, civic independence, and women’s rights, exposing how a formal language of liberty could coexist with gender hierarchy. Her work is a major precursor to progressive liberalism’s expansion of equal citizenship.',
            citations: citations(['wollstonecraftRights'], ['sepLiberalism']),
          },
          {
            period: '1850s–1870s: Mill and social freedom',
            text: 'Mill defended freedom of thought, discussion, individuality, and voluntary association while also recognizing that social pressure can be coercive. His political economy left room for debates over whether private property is always required by liberty, helping connect classical and newer liberal arguments.',
            citations: citations(['millOnLiberty'], ['sepLiberalism']),
          },
          {
            period: 'Late nineteenth–early twentieth centuries: new liberalism',
            text: 'Liberal thinkers increasingly questioned whether formal rights were enough when poverty, industrial dependence, and unequal property gave some people much less practical freedom than others. New or welfare liberalism expanded the legitimate role of democratic government while retaining liberal rights and constitutional limits.',
            citations: citations(['millOnLiberty', 'keynesGeneralTheory'], ['sepLiberalism', 'vdem']),
          },
          {
            period: 'French republican and social-liberal reform traditions',
            text: 'French republican thought developed a distinct vocabulary around citizenship, equality, civic education, solidarity, and the public role of laïcité. It could complement liberal individual rights and social reform, but it also produced continuing arguments over centralization, cultural assimilation, group recognition, and whether universal legal status is enough to address unequal social power. These debates are part of progressive liberalism’s genealogy, not a single settled French model.',
            citations: citations(['constantLibertyModerns', 'tocquevilleDemocracy'], ['oxfordRepublicanismTransatlantic', 'perseeRepublicanismLiberalism', 'viePubliqueLaiciteStasi', 'cambridgeIndivisibilityFrenchRepublic', 'sageFrenchRepublicLiberalFounders']),
          },
          {
            period: '1930s–1950s: economic stabilization and democratic reconstruction',
            text: 'The Great Depression, mass unemployment, and the experience of war strengthened arguments for social insurance, macroeconomic management, public services, and international institutions. These reforms produced different national models and should not be reduced to one universally agreed progressive programme.',
            citations: citations(['keynesGeneralTheory', 'kantPerpetualPeace'], ['sepLiberalism', 'foreignPolicy']),
          },
          {
            period: '1960s–present: rights expansion and pluralist reform',
            text: 'Civil-rights, feminist, anti-colonial, disability, LGBTQ+, and other equality movements broadened the meaning of liberal citizenship. Contemporary progressive liberalism remains internally divided over economic inequality, identity, speech, policing, migration, environmental regulation, and the limits of international intervention.',
            citations: citations(['wollstonecraftRights', 'millOnLiberty', 'kantPerpetualPeace'], ['sepLiberalism', 'vdem']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Social liberalism / new liberalism',
                distinction: 'Combines civil liberties and private enterprise with public services, social insurance, regulation, and equal opportunity.',
                relation: 'Closest named family to this profile; its economic and social range is still broad.',
                citations: citations(['millOnLiberty', 'keynesGeneralTheory'], ['sepLiberalism']),
              },
              {
                label: 'French republican social liberalism',
                distinction: 'Connects individual rights and public reform to civic equality, solidarity, education, a common political framework, and a particular account of laïcité; it does not automatically endorse one party or one view of group recognition.',
                relation: 'A historically important national-language variant and contrast case: it can support progressive inclusion while remaining more universalist and institution-centered than identity-based pluralism.',
                citations: citations(['constantLibertyModerns', 'tocquevilleDemocracy'], ['oxfordRepublicanismTransatlantic', 'perseeRepublicanismLiberalism', 'viePubliqueLaiciteStasi', 'cambridgeIndivisibilityFrenchRepublic', 'sageFrenchRepublicLiberalFounders']),
              },
              {
                label: 'Progressive constitutional liberalism',
                distinction: 'Emphasizes rights, courts, representative institutions, anti-discrimination, and limits on executive power.',
                relation: 'Closest institutional expression; it can be economically more market-oriented or more redistributive.',
                citations: citations(['lockeSecondTreatise', 'millOnLiberty'], ['vdem', 'sepLiberalism']),
              },
              {
                label: 'Social democracy',
                distinction: 'Usually accepts a stronger welfare state, labor organization, and redistribution, with its own socialist or reformist history.',
                relation: 'Overlaps heavily on social protection but can move further toward collective provision and labor power.',
                citations: citations(['bernsteinEvolutionarySocialism', 'keynesGeneralTheory'], ['sepLiberalism', 'sepSocialism']),
              },
              {
                label: 'Democratic socialism',
                distinction: 'Seeks more substantial social or democratic ownership and may regard capitalism itself as the central structural problem.',
                relation: 'Shares equality and democratic commitments but differs on the long-term role of private ownership and markets.',
                citations: citations(['marxEngelsManifesto', 'millOnLiberty'], ['sepLiberalism', 'sepSocialism']),
              },
              {
                label: 'Third-way and market-progressive reform',
                distinction: 'Retains market institutions while combining targeted redistribution, public investment, social inclusion, and international cooperation.',
                relation: 'A contemporary policy variant that may be more market-friendly and less redistributive than the ideal profile.',
                citations: citations(['keynesGeneralTheory', 'millOnLiberty'], ['sepLiberalism']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'Historical and contemporary examples',
        blocks: [
          {
            type: 'evidence-note',
            text: 'No country or politician is an exact match for this six-dimensional profile. Examples below identify documented traditions or partial institutional expressions; they are not permanent labels for countries, parties, or individuals.',
            citations: citations(['millOnLiberty', 'keynesGeneralTheory'], ['sepLiberalism', 'vdem']),
          },
          {
            type: 'people',
            entries: [
              {
                name: 'Mary Wollstonecraft',
                role: 'precursor of liberal feminism and equal civic education',
                caveat: 'Her eighteenth-century arguments should be read in their own context, not projected as a complete modern programme.',
                citations: citations(['wollstonecraftRights'], ['sepLiberalism']),
              },
              {
                name: 'John Stuart Mill',
                role: 'defender of individuality, free discussion, and social reform',
                caveat: 'Mill combined strong liberty arguments with utilitarian reasoning and positions that do not map perfectly onto current progressive politics.',
                citations: citations(['millOnLiberty'], ['sepLiberalism']),
              },
              {
                name: 'John Maynard Keynes',
                role: 'theorist of macroeconomic stabilization and active public policy',
                caveat: 'Keynesian economics does not by itself determine a position on social values, civil rights, religion, or foreign policy.',
                citations: citations(['keynesGeneralTheory'], ['sepLiberalism']),
              },
              {
                name: 'Immanuel Kant',
                role: 'influence on universal rights and international peace',
                caveat: 'Kant’s eighteenth-century philosophy is a source of concepts, not a direct contemporary party profile.',
                citations: citations(['kantPerpetualPeace'], ['foreignPolicy']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'Progressive Era United States',
                period: 'late nineteenth–early twentieth centuries',
                match: 'partial reform-liberal resemblance',
                caveat: 'The era combined regulation and democratic reform with exclusion, imperialism, racial hierarchy, and incomplete citizenship; it is not an uncomplicated progressive model.',
                citations: citations(['millOnLiberty', 'wollstonecraftRights'], ['sepLiberalism']),
              },
              {
                name: 'New Deal and post-war liberal reform',
                period: '1930s–1960s',
                match: 'partial economic and institutional resemblance',
                caveat: 'Welfare and public investment expanded, but the United States retained significant racial exclusion, unequal rights, private economic power, and interventionist foreign policy.',
                citations: citations(['keynesGeneralTheory', 'millOnLiberty'], ['sepLiberalism', 'vdem']),
              },
              {
                name: 'Post-war Western European social liberalism',
                period: '1945–present, varying by country and period',
                match: 'partial rights-and-welfare resemblance',
                caveat: 'European liberal democracies differ on labor power, welfare generosity, markets, migration, religion, and foreign policy; “Europe” is not one ideological unit.',
                citations: citations(['keynesGeneralTheory', 'kantPerpetualPeace'], ['sepLiberalism', 'vdem', 'foreignPolicy']),
              },
              {
                name: 'French Third Republic reform traditions',
                period: '1870–1940, with later republican continuities and disputes',
                match: 'partial republican and social-liberal resemblance',
                caveat: 'The period combined civic education, secular public institutions, and social reform with colonial domination, unequal citizenship, gender exclusion, and conflicts over religion and group difference.',
                citations: citations(['constantLibertyModerns', 'tocquevilleDemocracy'], ['perseeRepublicanismLiberalism', 'viePubliqueLaiciteStasi', 'sageFrenchRepublicLiberalFounders', 'cambridgeIndivisibilityFrenchRepublic']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'social-liberalism', relation: 'closest taxonomy label and primary family' },
              { id: 'classical-liberalism', relation: 'shares rights and markets but usually accepts less public redistribution' },
              { id: 'social-democracy', relation: 'overlaps on welfare and equality, with a stronger reform-socialist lineage' },
              { id: 'democratic-socialism', relation: 'shares democratic egalitarianism but usually seeks stronger social ownership' },
              { id: 'liberal-constitutionalist', relation: 'shares rights, pluralism, and institutional constraints' },
              { id: 'libertarian-market', relation: 'shares personal liberty and markets but differs on the scope of public action' },
              { id: 'feminist', relation: 'overlap on gender equality, but feminism contains many non-liberal traditions' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'Critics argue that progressive liberalism can promise both personal autonomy and extensive public management without resolving when the state’s interventions become paternalistic, bureaucratic, or coercive. Supporters reply that formally equal rights are insufficient when poverty, discrimination, or private domination leave people without meaningful choices.',
            citations: citations(['millOnLiberty', 'keynesGeneralTheory'], ['sepLiberalism', 'sepLibertarianism']),
          },
          {
            type: 'paragraph',
            text: 'A second criticism concerns economic trade-offs. Redistribution and regulation may reduce deprivation and stabilize society, but can also create dependency, administrative overreach, fiscal pressures, or unintended effects on innovation and employment. The profile does not prescribe one tax rate, welfare model, or market regulation package.',
            citations: citations(['keynesGeneralTheory', 'millOnLiberty'], ['sepLiberalism']),
          },
          {
            type: 'paragraph',
            text: 'Progressive language can also conceal disagreement over the boundaries of pluralism. Anti-discrimination and equal citizenship may conflict with claims of religious autonomy, speech, association, or local self-government. The entry therefore treats secular public law as a constitutional settlement, not as a conclusion that religious citizens or traditions are politically irrelevant.',
            citations: citations(['lockeLetterToleration', 'spinozaPolitical', 'millOnLiberty'], ['sepReligionPolitics', 'sepLiberalism']),
          },
          {
            type: 'paragraph',
            text: 'The French republican case adds a specific caution: universal citizenship can be emancipatory when it blocks inherited legal hierarchy, yet insufficient when abstract equality obscures patterned exclusion or treats minority organization as a threat to common citizenship. Laïcité likewise has both a rights-protecting interpretation and more contested state-cultural interpretations; the label should not be used as shorthand for either secular neutrality or hostility to religion.',
            citations: citations(['constantLibertyModerns', 'tocquevilleDemocracy'], ['perseeRepublicanismLiberalism', 'viePubliqueLaiciteStasi', 'cambridgeIndivisibilityFrenchRepublic', 'sageFrenchRepublicLiberalFounders']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: [
        'millOnLiberty',
        'wollstonecraftRights',
        'keynesGeneralTheory',
        'kantPerpetualPeace',
        'lockeSecondTreatise',
        'lockeLetterToleration',
        'spinozaPolitical',
        'morgenthauRealism',
        'bernsteinEvolutionarySocialism',
        'marxEngelsManifesto',
        'constantLibertyModerns',
        'tocquevilleDemocracy',
      ],
      researchSourceIds: ['sepLiberalism', 'sepLibertarianism', 'sepSocialism', 'sepReligionPolitics', 'oxfordRepublicanismTransatlantic', 'perseeRepublicanismLiberalism', 'viePubliqueLaiciteStasi', 'cambridgeIndivisibilityFrenchRepublic', 'sageFrenchRepublicLiberalFounders', 'vdem', 'foreignPolicy'],
      editorialNote: 'This profile distinguishes liberal rights, progressive social reform, and active economic policy rather than treating them as one automatic package. The scores describe a didactic archetype, not a party platform or a measurement of any individual.',
    },
    researchGaps: [
      'Expand French-language primary and specialist scholarship on republicanism, social liberalism, laïcité, and the relationship between universal citizenship and group-based equality, including colonial and postcolonial critiques.',
      'Add German-language scholarship on new liberalism, the social market, post-war constitutional democracy, and debates over welfare-state authority.',
      'Add country-specific evidence for the Progressive Era, New Deal, post-war Europe, and contemporary liberal democracies rather than relying on broad period labels.',
      'Add specialist research on colonialism, race, migration, disability, LGBTQ+ rights, environmental policy, and the tensions between universalism and pluralism.',
    ],
  },
  'national-conservative': {
    id: 'national-conservative',
    title: 'National conservative',
    canonicalLabel: 'National conservative',
    aliases: [
      'national conservatism',
      'sovereigntist conservatism',
      'one-nation conservatism',
      'patriotic conservatism',
    ],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'This profile combines conservative emphasis on inherited institutions with strong national sovereignty and cultural continuity. It can be constitutional and pluralist; it is not automatically ethnic nationalist, authoritarian, populist, or fascist.',
    timeScope: 'Modern conservative roots after the French Revolution, nineteenth-century nation-building, twentieth-century mass democracy, and contemporary debates over sovereignty and cultural change.',
    geographicScope: 'A transnational family with British, French, European, South Asian, and other national variants; the meaning of “nation” differs by history and institution.',
    summary: 'A conservative profile that treats national sovereignty, cultural continuity, inherited institutions, borders, and public order as central political goods. It generally accepts a mixed or market-oriented economy and democratic institutions, but gives more weight to national cohesion, tradition, and a capable state than classical or progressive liberalism does.',
    summaryCitations: citations(
      ['burkeReflections', 'renanNation', 'andersonImaginedCommunities', 'hobbesLeviathan'],
      ['sepConservatism', 'sepNationalism', 'cairnLesGaullistes', 'perseeDeGaulleConstitutionalThought', 'vdem'],
    ),
    dimensionInterpretations: {
      economic: {
        score: -34,
        label: 'Somewhat market-oriented mixed economy',
        explanation: 'Private property and markets are usually accepted, but strategic industries, welfare provision, trade, and regulation may be shaped by national resilience or social stability. National conservatism does not require laissez-faire and can support paternalist or interventionist economic policy.',
        citations: citations(['adamSmithWealth', 'burkeReflections'], ['sepConservatism', 'sepLiberalism']),
      },
      social: {
        score: -68,
        label: 'Strongly traditionalist',
        explanation: 'Family, religion, language, customary morality, and inherited institutions are treated as sources of social order and identity. Change may be accepted when gradual or experience-based, but rapid abstract redesign is viewed with suspicion.',
        citations: citations(['burkeReflections', 'tocquevilleDemocracy'], ['sepConservatism']),
      },
      authority: {
        score: 46,
        label: 'Order-oriented but potentially constitutional',
        explanation: 'The profile favors law, public order, borders, and a capable executive or administrative state, while its constitutional variant accepts elections, courts, and legal limits. Strong authority becomes authoritarian only when independent institutions and opposition are systematically subordinated.',
        citations: citations(['burkeReflections', 'hobbesLeviathan'], ['sepConservatism', 'perseeDeGaulleConstitutionalThought', 'fondationDeGaulleOppositionIVe', 'vdem']),
      },
      identity: {
        score: -82,
        label: 'Strongly nationalist / sovereignty-centered',
        explanation: 'Political loyalty centers on the nation, its historical memory, borders, language, and capacity for self-government. The nation may be civic and constitutional or ethnic and exclusionary; the profile records that distinction rather than assuming one definition.',
        citations: citations(['renanNation', 'andersonImaginedCommunities'], ['sepNationalism', 'sepConservatism', 'cairnLesGaullistes', 'cambridgeIndivisibilityFrenchRepublic']),
      },
      foreign: {
        score: -34,
        label: 'Active defense and sovereignty',
        explanation: 'The state is expected to defend national interests, borders, and strategic autonomy, but national conservatism does not automatically entail imperial expansion or permanent war. Some variants favor alliances and restraint; others emphasize military power and sovereignty more strongly.',
        citations: citations(['morgenthauRealism', 'burkeReflections'], ['foreignPolicy', 'sepNationalism']),
      },
      religion: {
        score: -40,
        label: 'Religiously grounded cultural order',
        explanation: 'Religious tradition may inform public morality, national memory, and institutions, but the profile does not require clerical rule or a formal theocracy. Constitutional national conservatives may protect religious pluralism while still defending an inherited religious culture.',
        citations: citations(['burkeReflections', 'aquinasMoralPolitical'], ['sepReligionPolitics', 'sepConservatism', 'viePubliqueLaiciteStasi']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: '“National conservative” describes a family of positions that joins conservative respect for inherited institutions and gradual change to a strong emphasis on national sovereignty, borders, cultural continuity, and political cohesion. It is a compound label: conservatism answers questions about change and order, while nationalism answers questions about collective membership and self-government.',
            citations: citations(['burkeReflections', 'renanNation'], ['sepConservatism', 'sepNationalism']),
          },
          {
            type: 'paragraph',
            text: 'The profile is not identical to fascism or ethnic nationalism. A national-conservative movement may defend constitutional government, elections, private association, and equal citizenship, even while opposing rapid cultural change or supranational authority. The boundary is crossed when national unity is used to eliminate pluralism, rights, or independent institutions.',
            citations: citations(['burkeReflections', 'andersonImaginedCommunities'], ['sepConservatism', 'sepNationalism', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'Gaullism is an important French contrast case. It joined national independence, republican legitimacy, and a stronger executive with a political culture that could attract people from different ideological families. Treating Gaullism as simply right-wing cultural nationalism misses its republican and institutional dimensions; treating it as a generic model for all national conservatism misses its particular postwar history, constitutional arrangements, and debates over Europe, empire, and decolonization.',
            citations: citations([], ['cairnLesGaullistes', 'fondationDeGaulleOppositionIVe', 'perseeDeGaulleConstitutionalThought', 'cambridgeIndivisibilityFrenchRepublic']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'Conservative reasoning distrusts political projects that treat society as a machine that can be rebuilt from abstract principles. Institutions are understood as accumulated practices carrying knowledge, memory, and authority that cannot be fully reconstructed by a single generation. Change is not rejected in principle, but should usually be piecemeal, tested, and responsive to experience.',
            citations: citations(['burkeReflections'], ['sepConservatism']),
          },
          {
            type: 'paragraph',
            text: 'Nationalism adds the claim that nations are politically significant communities with special obligations and a legitimate interest in self-determination. That community may be understood through shared citizenship and political consent, through language and culture, or through ancestry and ethnicity. These variants have very different consequences for minorities, migration, borders, and democratic inclusion.',
            citations: citations(['renanNation', 'andersonImaginedCommunities'], ['sepNationalism']),
          },
          {
            type: 'paragraph',
            text: 'Economically, national conservatism is flexible. It can support markets, private property, welfare for citizens, industrial policy, protection of strategic sectors, or selective regulation when these are said to preserve national independence and social cohesion. The economic score therefore remains closer to the mixed-market center than to either libertarian absolutism or collectivist ownership.',
            citations: citations(['adamSmithWealth', 'burkeReflections'], ['sepConservatism', 'sepLiberalism']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: '1790s: conservative response to revolution',
            text: 'Burke’s critique of the French Revolution became a major source for conservative arguments about inherited rights, social continuity, unintended consequences, and the limits of rational political reconstruction. His conservatism should not be reduced to opposition to all reform or to a fully formed modern nationalism.',
            citations: citations(['burkeReflections'], ['sepConservatism']),
          },
          {
            period: 'Nineteenth century: nation-building and popular sovereignty',
            text: 'The expansion of mass politics, print culture, language movements, and state-building made the nation a central object of political loyalty. National projects could be liberal and civic, conservative and dynastic, or ethnic and exclusionary; the same national vocabulary supported different political systems.',
            citations: citations(['renanNation', 'andersonImaginedCommunities'], ['sepNationalism']),
          },
          {
            period: 'Late nineteenth–early twentieth centuries: mass democracy and social order',
            text: 'Conservative parties adapted to expanded suffrage, labor movements, industrialization, and national social policy. Many accepted welfare or state intervention when it protected order, social solidarity, or national capacity, while others remained more economically liberal.',
            citations: citations(['burkeReflections', 'tocquevilleDemocracy'], ['sepConservatism', 'sepLiberalism']),
          },
          {
            period: 'Twentieth century: sovereignty, empire, and constitutional nation-states',
            text: 'National conservatism developed through different relationships with empire, decolonization, religion, military power, and constitutional democracy. Some national-conservative traditions defended parliamentary or republican institutions; others became exclusionary or authoritarian, which is why country- and period-specific classification is essential.',
            citations: citations(['andersonImaginedCommunities', 'morgenthauRealism'], ['sepNationalism', 'foreignPolicy', 'vdem']),
          },
          {
            period: 'Postwar France: Gaullist republican sovereignty',
            text: 'Gaullism illustrates a sovereignist tradition that cannot be reduced to ethnic nationalism or ordinary traditionalism. De Gaulle’s constitutional critique of the Fourth Republic favored a stronger executive tied to national legitimacy, while the Gaullist political family included people from resistance, socialist, radical, Christian-democratic, and conservative backgrounds. Its emphasis on independence and state capacity later generated disputes over European integration and the meaning of republican sovereignty.',
            citations: citations([], ['cairnLesGaullistes', 'fondationDeGaulleOppositionIVe', 'perseeDeGaulleConstitutionalThought']),
          },
          {
            period: 'Contemporary debates',
            text: 'Current national-conservative politics often emphasizes sovereignty, migration, borders, national culture, family policy, and skepticism toward supranational institutions. Internal variation is substantial: some movements remain constitutional and civic, while others define the nation ethnically or attack pluralist checks on executive power.',
            citations: citations(['renanNation', 'andersonImaginedCommunities', 'burkeReflections'], ['sepNationalism', 'sepConservatism', 'vdem']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Civic or constitutional national conservatism',
                distinction: 'Defends national institutions, sovereignty, and cultural continuity while defining membership through citizenship, law, and political participation.',
                relation: 'The most compatible variant with liberal democracy and equal civic rights.',
                citations: citations(['renanNation', 'burkeReflections'], ['sepNationalism', 'vdem']),
              },
              {
                label: 'Gaullist republican sovereignty',
                distinction: 'Centers national independence, republican legitimacy, state capacity, and a strong executive while maintaining a distinct constitutional and postwar political tradition rather than defining membership only through ancestry.',
                relation: 'A French sovereignist variant and useful boundary case: it overlaps with national conservatism on sovereignty and continuity but cannot be treated as a synonym for ethnic nationalism or authoritarianism.',
                citations: citations([], ['cairnLesGaullistes', 'fondationDeGaulleOppositionIVe', 'perseeDeGaulleConstitutionalThought', 'cambridgeIndivisibilityFrenchRepublic']),
              },
              {
                label: 'Religious or cultural national conservatism',
                distinction: 'Treats inherited religious morality, family structures, language, or cultural memory as central to national identity and public legitimacy.',
                relation: 'Can remain pluralist, but risks privileging a majority tradition over equal citizenship if constitutional safeguards are weak.',
                citations: citations(['burkeReflections', 'aquinasMoralPolitical'], ['sepReligionPolitics', 'sepConservatism']),
              },
              {
                label: 'Economic or developmental national conservatism',
                distinction: 'Uses markets selectively while protecting strategic industries, national supply chains, welfare citizenship, or state capacity.',
                relation: 'Shows why national conservatism is not equivalent to laissez-faire economics.',
                citations: citations(['adamSmithWealth', 'burkeReflections'], ['sepConservatism', 'sepLiberalism']),
              },
              {
                label: 'Ethnic nationalism',
                distinction: 'Defines political membership substantially through ancestry, ethnicity, language, or inherited descent rather than equal civic status.',
                relation: 'May overlap strongly on identity but is not required by national conservatism and can become exclusionary or anti-democratic.',
                citations: citations(['renanNation', 'andersonImaginedCommunities'], ['sepNationalism']),
              },
              {
                label: 'Fascist and authoritarian nationalism',
                distinction: 'Adds revolutionary mass mobilization, political violence, leader cult, totalizing authority, or the elimination of pluralist institutions.',
                relation: 'A critical boundary: nationalism and conservatism alone do not establish fascism.',
                citations: citations(['burkeReflections', 'hobbesLeviathan'], ['sepConservatism', 'sepNationalism', 'vdem']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'Historical and contemporary examples',
        blocks: [
          {
            type: 'evidence-note',
            text: 'No country or politician is an exact six-dimensional match. National-conservative politics changes with constitutional rules, economic conditions, religion, ethnic composition, colonial history, and international position; examples identify partial traditions rather than permanent labels.',
            citations: citations(['burkeReflections', 'renanNation', 'andersonImaginedCommunities'], ['sepConservatism', 'sepNationalism', 'vdem']),
          },
          {
            type: 'people',
            entries: [
              {
                name: 'Edmund Burke',
                role: 'major theorist of tradition, inherited institutions, and cautious reform',
                caveat: 'Burke was also a critic of imperial abuses and cannot be reduced to every later nationalist or conservative movement.',
                citations: citations(['burkeReflections'], ['sepConservatism']),
              },
              {
                name: 'Ernest Renan',
                role: 'liberal theorist of nationhood and political belonging',
                caveat: 'Renan’s civic account is a contrast to ethnic nationalism; citing him does not make national conservatism automatically liberal or inclusive.',
                citations: citations(['renanNation'], ['sepNationalism']),
              },
              {
                name: 'Benedict Anderson',
                role: 'historian and theorist of nations as imagined political communities',
                caveat: 'Anderson is an interpreter of nationalism, not a representative of national conservatism.',
                citations: citations(['andersonImaginedCommunities'], ['sepNationalism']),
              },
              {
                name: 'Charles de Gaulle',
                role: 'French republican and sovereignist statesman associated with the Fifth Republic',
                caveat: 'De Gaulle’s constitutional thought and political practice are historically specific; he is a boundary case, not a complete definition of contemporary national conservatism.',
                citations: citations([], ['cairnLesGaullistes', 'fondationDeGaulleOppositionIVe', 'perseeDeGaulleConstitutionalThought']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'Burkean and one-nation conservative traditions',
                period: 'Britain, late eighteenth century onward',
                match: 'partial intellectual and institutional resemblance',
                caveat: 'British conservatism included liberal, imperial, paternalist, democratic, and economically diverse strands; “Burkean” is not a complete country label.',
                citations: citations(['burkeReflections', 'tocquevilleDemocracy'], ['sepConservatism']),
              },
              {
                name: 'Civic-republican and sovereignist traditions',
                period: 'Europe and other constitutional states, varying by period',
                match: 'partial identity and authority resemblance',
                caveat: 'Sovereignty and national independence can support constitutional democracy or authoritarian centralization; institutional evidence is required.',
                citations: citations(['renanNation', 'morgenthauRealism'], ['sepNationalism', 'foreignPolicy', 'vdem']),
              },
              {
                name: 'Gaullist France and the Fifth Republic',
                period: '1946–1970, with later Gaullist legacies',
                match: 'partial sovereignist and state-capacity resemblance',
                caveat: 'The Gaullist tradition combined national independence and executive authority with republican legitimacy and changing positions on Europe, empire, social policy, and decolonization; it is not an exact contemporary national-conservative match.',
                citations: citations([], ['cairnLesGaullistes', 'fondationDeGaulleOppositionIVe', 'perseeDeGaulleConstitutionalThought', 'viePubliqueLaiciteStasi']),
              },
              {
                name: 'Contemporary national-conservative movements',
                period: 'present',
                match: 'movement-level comparison only',
                caveat: 'Do not assign a country an exact match from border policy, religious rhetoric, or national symbolism alone; compare its economic, social, authority, identity, foreign-policy, and religious institutions separately.',
                citations: citations(['andersonImaginedCommunities', 'burkeReflections'], ['sepNationalism', 'sepConservatism', 'vdem']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'conservatism', relation: 'broader family centered on tradition, continuity, and gradual reform' },
              { id: 'civic-nationalism', relation: 'more explicitly constitutional and citizenship-based form of nationalism' },
              { id: 'ethnic-nationalism', relation: 'more exclusionary identity variant, not an automatic synonym' },
              { id: 'christian-democracy', relation: 'religious-social and constitutional neighbor with a different party tradition' },
              { id: 'monarchism', relation: 'can overlap through inherited institutions, but national conservatism does not require monarchy' },
              { id: 'historical-fascist', relation: 'critical boundary: fascism adds totalizing and revolutionary authoritarian features' },
              { id: 'progressive-liberal', relation: 'liberal-democratic counterpoint with stronger emphasis on social change and international inclusion' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'Critics argue that appeals to tradition can preserve unjust hierarchy, romanticize the past, or make minorities and dissenters appear less fully national. The claim that institutions embody inherited wisdom can also obscure who was excluded from those institutions and whose history became “national” memory.',
            citations: citations(['burkeReflections', 'andersonImaginedCommunities'], ['sepConservatism', 'sepNationalism']),
          },
          {
            type: 'paragraph',
            text: 'A second criticism concerns sovereignty and borders. National self-government can protect democratic accountability, but it can also be used to reject minority rights, international law, migration, or cooperation on problems that cross borders. The entry therefore treats national sovereignty as one political value among others, not an automatic trump card.',
            citations: citations(['renanNation', 'morgenthauRealism'], ['sepNationalism', 'foreignPolicy', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'The strongest safeguard is to distinguish civic attachment from ethnic hierarchy and constitutional conservatism from authoritarian nationalism. Evidence of elections, opposition rights, judicial independence, minority citizenship, religious freedom, and peaceful transfer of power should be recorded before assigning a country or movement to a more coercive neighboring profile.',
            citations: citations(['burkeReflections', 'hobbesLeviathan'], ['sepConservatism', 'sepNationalism', 'vdem', 'sepReligionPolitics']),
          },
          {
            type: 'paragraph',
            text: 'The Gaullist case also shows why a capable executive and national sovereignty require institutional analysis rather than ideological shorthand. Executive centralization can stabilize a republic or weaken parliamentary accountability; laïcité can be defended as equal freedom of conscience or invoked as a broader cultural boundary. The classification should therefore record constitutional checks, minority citizenship, party competition, and the actual treatment of dissent.',
            citations: citations([], ['cairnLesGaullistes', 'perseeDeGaulleConstitutionalThought', 'viePubliqueLaiciteStasi', 'cambridgeIndivisibilityFrenchRepublic', 'vdem']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: [
        'burkeReflections',
        'renanNation',
        'andersonImaginedCommunities',
        'tocquevilleDemocracy',
        'adamSmithWealth',
        'hobbesLeviathan',
        'morgenthauRealism',
        'aquinasMoralPolitical',
      ],
      researchSourceIds: ['sepConservatism', 'sepNationalism', 'sepReligionPolitics', 'sepLiberalism', 'cairnLesGaullistes', 'fondationDeGaulleOppositionIVe', 'perseeDeGaulleConstitutionalThought', 'viePubliqueLaiciteStasi', 'cambridgeIndivisibilityFrenchRepublic', 'vdem', 'foreignPolicy'],
      editorialNote: 'The entry separates tradition, national self-determination, civic membership, ethnic exclusion, and authoritarian power. Its scores describe a didactic national-conservative archetype rather than every conservative or nationalist movement.',
    },
    researchGaps: [
      'Expand French-language scholarship on Gaullism, republican sovereignty, laïcité, and the tensions between civic universalism and cultural continuity, including decolonization and post-Gaullist transformations.',
      'Add German-language scholarship on post-war Christian democracy, ordoliberalism, national conservatism, and the constitutional lessons of authoritarian nationalism.',
      'Add country-specific sources before listing Hungary, India, Poland, France, Japan, or other states as examples; current governments and party systems change over time.',
      'Add specialist research on colonialism, minority citizenship, migration, religion, gender, welfare nationalism, and the relationship between national-conservative movements and democratic backsliding.',
    ],
  },
  'social-democratic': {
    id: 'social-democratic',
    title: 'Social democratic',
    canonicalLabel: 'Social democratic',
    aliases: ['social democracy', 'democratic reform socialism', 'welfare-state social democracy', 'Nordic social democracy'],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'This profile describes reformist and welfare-state social democracy, especially its modern mixed-economy form. Social democracy has changed over time and is not identical to democratic socialism, socialism in general, or every center-left party.',
    timeScope: 'Roots in nineteenth-century socialist and labor movements; reformist theory at the turn of the twentieth century; major welfare-state development after 1945; later revisions under globalization and post-industrial politics.',
    geographicScope: 'Transnational tradition with important German, British, Nordic, continental European, and other democratic variants; welfare institutions differ substantially by country.',
    summary: 'A democratic reform tradition seeking to reduce class inequality and insecurity through elections, trade-union power, social insurance, public services, progressive taxation, and regulated markets. Modern social democracy generally preserves a predominantly private mixed economy while treating social rights and collective bargaining as conditions of democratic citizenship.',
    summaryCitations: citations(['bernsteinEvolutionarySocialism', 'keynesGeneralTheory', 'millOnLiberty'], ['sepSocialism', 'sepLiberalism', 'oecdWelfareModels', 'fesHistorySocialDemocracy', 'bpbSpdProgrammatics']),
    dimensionInterpretations: {
      economic: {
        score: 58,
        label: 'Strongly social-democratic / redistributive',
        explanation: 'The profile supports substantial redistribution, universal or broad social provision, labor rights, collective bargaining, and public regulation, while usually retaining private firms and market allocation. It is collectivist in social protection and economic power, not necessarily in formal ownership of every productive asset.',
        citations: citations(['bernsteinEvolutionarySocialism', 'keynesGeneralTheory'], ['sepSocialism', 'oecdWelfareModels', 'bpbSocialMarketEconomy', 'bpbWelfareModels']),
      },
      social: {
        score: 62,
        label: 'Progressive and egalitarian',
        explanation: 'Equal citizenship, labor dignity, anti-discrimination, and social inclusion are treated as democratic commitments. Historical parties have differed on gender, migration, religion, and cultural change, so social democracy is not one fixed cultural programme.',
        citations: citations(['millOnLiberty', 'wollstonecraftRights'], ['sepLiberalism', 'sepSocialism']),
      },
      authority: {
        score: -26,
        label: 'Democratic and administratively active',
        explanation: 'The state is expected to provide services, regulate markets, and coordinate social insurance, but elections, civil liberties, independent unions, courts, and organized dissent remain essential. This is a high-capacity democratic state, not a party-state or a rejection of public authority.',
        citations: citations(['bernsteinEvolutionarySocialism', 'lockeSecondTreatise', 'millOnLiberty'], ['sepSocialism', 'vdem', 'oecdWelfareModels', 'bpbGermanSocialState']),
      },
      identity: {
        score: 34,
        label: 'Internationalist with civic citizenship',
        explanation: 'Class solidarity, international cooperation, and equal civic membership generally matter more than ethnic nationalism. In practice, social-democratic welfare systems can still be nationally bounded, and parties have disagreed over migration, borders, colonialism, and international institutions.',
        citations: citations(['renanNation', 'andersonImaginedCommunities'], ['sepSocialism', 'sepNationalism']),
      },
      foreign: {
        score: 14,
        label: 'Moderate restraint and multilateralism',
        explanation: 'Diplomacy, international law, alliances, development, and collective security are preferred to unilateral militarism. Social-democratic parties have nevertheless supported wars or military alliances in particular historical contexts, so the profile is restrained rather than pacifist.',
        citations: citations(['kantPerpetualPeace', 'morgenthauRealism'], ['foreignPolicy', 'sepSocialism']),
      },
      religion: {
        score: 35,
        label: 'Secular and pluralist public law',
        explanation: 'Public institutions are generally justified through democratic citizenship and social rights rather than clerical authority. Religious parties, churches, and faith-based labor or welfare movements can participate, but no single religion is required to define the state.',
        citations: citations(['lockeLetterToleration', 'spinozaPolitical'], ['sepReligionPolitics', 'sepSocialism']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Social democracy is a democratic route to greater equality and security. Its central political question is how citizens can exercise meaningful freedom when market dependence, illness, unemployment, unequal bargaining power, or inherited class position restrict their choices. Social-democratic answers usually combine elections, organized labor, progressive taxation, welfare services, and regulated markets.',
            citations: citations(['bernsteinEvolutionarySocialism', 'millOnLiberty', 'keynesGeneralTheory'], ['sepSocialism', 'sepLiberalism']),
          },
          {
            type: 'paragraph',
            text: 'The tradition has two overlapping meanings. Historically, it emerged from socialist and labor movements that debated revolution versus parliamentary reform. In contemporary policy language, it often refers to a welfare-state mixed economy that leaves most firms privately owned while redistributing income and decommodifying essential services. These meanings should not be treated as identical.',
            citations: citations(['bernsteinEvolutionarySocialism', 'keynesGeneralTheory'], ['sepSocialism', 'oecdWelfareModels']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'Social democracy treats social rights as part of democratic citizenship. Healthcare, education, pensions, unemployment insurance, housing support, labor protections, and public care can expand the practical freedom to participate in society rather than merely the formal freedom to sign a contract. Different systems vary between universal, contributory, targeted, public, and regulated private provision.',
            citations: citations(['bernsteinEvolutionarySocialism', 'keynesGeneralTheory'], ['sepSocialism', 'oecdWelfareModels']),
          },
          {
            type: 'paragraph',
            text: 'The economic model is reformist and mixed. Social democrats may seek stronger unions, co-determination, public enterprises, cooperative ownership, or progressive taxation, but modern social democracy generally accepts markets and private investment. The key distinction from libertarian market liberalism is the role assigned to collective provision and bargaining power; the key distinction from democratic socialism is often the long-term status of private ownership and capitalism.',
            citations: citations(['bernsteinEvolutionarySocialism', 'keynesGeneralTheory'], ['sepSocialism', 'sepLiberalism']),
          },
          {
            type: 'paragraph',
            text: 'Democratic safeguards are substantive, not incidental. Social-democratic institutions depend on competitive elections, free association, independent unions, civil liberties, legal accountability, and the ability of citizens to contest how benefits and burdens are allocated. Social provision administered without democratic control can become paternalist or bureaucratic rather than emancipatory.',
            citations: citations(['bernsteinEvolutionarySocialism', 'millOnLiberty', 'lockeSecondTreatise'], ['sepSocialism', 'vdem', 'oecdWelfareModels']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Late nineteenth century: labor movements and parliamentary socialism',
            text: 'Trade unions, socialist parties, mass suffrage, and industrial conflict created the organizational base for social democracy. Reformers debated whether capitalism would collapse, whether class conflict could be institutionalized, and whether democratic reforms were a route to or a substitute for socialism.',
            citations: citations(['bernsteinEvolutionarySocialism'], ['sepSocialism', 'fesHistorySocialDemocracy']),
          },
          {
            period: '1899 onward: Bernstein and evolutionary socialism',
            text: 'Bernstein challenged revolutionary predictions and argued that democratic organization, unions, and gradual reforms could advance social emancipation. His revisionism became a foundational reference point for reformist social democracy, while revolutionary and democratic socialist critics disputed its conclusions. The German case also shows why “social democracy” should not be reduced to one thinker: the SPD contained competing positions on programme, tactics, war, and the relationship between parliamentary work and socialist transformation.',
            citations: citations(['bernsteinEvolutionarySocialism'], ['sepSocialism', 'fesHistorySocialDemocracy']),
          },
          {
            period: '1930s–1950s: Keynesian policy and welfare-state construction',
            text: 'The Great Depression, mass unemployment, war mobilization, and post-war reconstruction strengthened arguments for macroeconomic management, social insurance, public services, and full employment. Post-war welfare states differed in institutional design and were shaped by conservative, liberal, Christian-democratic, and labor parties, not by social democracy alone.',
            citations: citations(['keynesGeneralTheory', 'bernsteinEvolutionarySocialism'], ['sepSocialism', 'oecdWelfareModels', 'bpbGermanSocialState', 'bpbWelfareModels']),
          },
          {
            period: '1959: Godesberg and the German programme debate',
            text: 'The SPD’s Godesberg Programme publicly marked a major post-war reorientation toward democratic pluralism, individual freedom, social justice, and a regulated market economy rather than an orthodox Marxist ownership programme. This did not make the SPD identical to ordoliberal or Christian-democratic traditions: the social market economy also drew on a distinct theory of competitive order, and German welfare institutions retained a historically specific insurance and employment structure. The episode is best read as a boundary-crossing reformulation within a wider post-war settlement.',
            citations: citations(['bernsteinEvolutionarySocialism'], ['bpbSpdProgrammatics', 'ghdiGodesberg', 'bpbSocialMarketEconomy', 'bpbGermanSocialState', 'bpbWelfareModels']),
          },
          {
            period: '1950s–1970s: post-war social-democratic settlement',
            text: 'Many European systems combined collective bargaining, rising wages, public services, progressive taxation, and economic growth. The settlement expanded social citizenship but remained nationally bounded and could exclude migrants, colonies, women, racial minorities, disabled people, or informal workers from its fullest benefits.',
            citations: citations(['keynesGeneralTheory', 'millOnLiberty'], ['sepSocialism', 'oecdWelfareModels', 'bpbWelfareModels']),
          },
          {
            period: '1970s–present: crisis, revision, and pluralization',
            text: 'Stagflation, unemployment, deindustrialization, globalization, demographic change, and fiscal pressure challenged older social-democratic tools. Parties responded differently through market reforms, social investment, universal services, labor-market activation, ecological transition, or renewed industrial policy. “Third way” reforms and democratic-socialist revivals represent competing responses rather than one settled endpoint.',
            citations: citations(['bernsteinEvolutionarySocialism', 'keynesGeneralTheory'], ['sepSocialism', 'oecdWelfareModels', 'sepLiberalism']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Classical reformist social democracy',
                distinction: 'Uses parliamentary democracy, unions, social insurance, and regulation to humanize or gradually transform capitalism.',
                relation: 'Closest historical link to Bernstein and the early labor movement.',
                citations: citations(['bernsteinEvolutionarySocialism'], ['sepSocialism']),
              },
              {
                label: 'Post-war welfare-state social democracy',
                distinction: 'Combines mixed economies, collective bargaining, universal or broad social services, and macroeconomic management.',
                relation: 'Closest fit to the modern archetype, though welfare regimes vary widely across countries.',
                citations: citations(['keynesGeneralTheory'], ['sepSocialism', 'oecdWelfareModels']),
              },
              {
                label: 'German social-market social democracy',
                distinction: 'Combines electoral democracy, organized labor, social insurance, public regulation, and a predominantly private market economy; it differs from both laissez-faire and state socialism.',
                relation: 'A historically important German variant and boundary case: the surrounding social-market order also drew on ordoliberal and Christian-democratic ideas, not the SPD alone.',
                citations: citations(['bernsteinEvolutionarySocialism'], ['bpbSpdProgrammatics', 'ghdiGodesberg', 'bpbSocialMarketEconomy', 'bpbGermanSocialState', 'bpbWelfareModels']),
              },
              {
                label: 'Democratic socialism',
                distinction: 'Seeks stronger social or democratic ownership and may regard capitalism as a structure to replace rather than primarily regulate.',
                relation: 'Overlaps on democracy and equality but differs on the long-term role of markets and private ownership.',
                citations: citations(['bernsteinEvolutionarySocialism', 'marxEngelsManifesto'], ['sepSocialism']),
              },
              {
                label: 'Social liberalism',
                distinction: 'Accepts an active welfare and regulatory state but generally grounds reform more in liberal opportunity and individual rights than in labor or socialist organization.',
                relation: 'Close neighbor; the boundary is historically and nationally variable.',
                citations: citations(['millOnLiberty', 'keynesGeneralTheory'], ['sepLiberalism', 'sepSocialism']),
              },
              {
                label: 'Third-way social democracy',
                distinction: 'Retains social investment and inclusion while accepting more market competition, privatization, labor flexibility, or fiscal restraint.',
                relation: 'A later revision whose critics argue it weakened labor power and economic redistribution.',
                citations: citations(['keynesGeneralTheory', 'bernsteinEvolutionarySocialism'], ['sepSocialism', 'oecdWelfareModels']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'Historical and contemporary examples',
        blocks: [
          {
            type: 'evidence-note',
            text: 'No country is a permanent or exact match. Welfare regimes combine social-democratic, liberal, conservative, Christian-democratic, nationalist, and technocratic institutions, and governments change direction over time.',
            citations: citations(['bernsteinEvolutionarySocialism', 'keynesGeneralTheory'], ['sepSocialism', 'oecdWelfareModels', 'vdem']),
          },
          {
            type: 'people',
            entries: [
              {
                name: 'Eduard Bernstein',
                role: 'theorist of evolutionary and parliamentary socialism',
                caveat: 'A foundational reformist voice, not the sole origin or definition of modern social democracy.',
                citations: citations(['bernsteinEvolutionarySocialism'], ['sepSocialism']),
              },
              {
                name: 'John Maynard Keynes',
                role: 'economist whose work supported arguments for macroeconomic stabilization and public employment policy',
                caveat: 'Keynes was not a social-democratic party theorist, and Keynesian economics does not determine every social or cultural position.',
                citations: citations(['keynesGeneralTheory'], ['sepSocialism', 'sepLiberalism']),
              },
              {
                name: 'John Stuart Mill',
                role: 'liberal influence on individuality, social reform, and limits on coercion',
                caveat: 'Mill’s liberalism is an intellectual precursor and neighbor, not a complete twentieth-century welfare-state doctrine.',
                citations: citations(['millOnLiberty'], ['sepLiberalism', 'sepSocialism']),
              },
              {
                name: 'Mary Wollstonecraft',
                role: 'precursor of equal education and expanded civic membership',
                caveat: 'Her feminist liberal arguments contribute to the social-equality dimension but do not define social-democratic economics.',
                citations: citations(['wollstonecraftRights'], ['sepLiberalism']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'Post-war Nordic welfare states',
                period: 'especially from the mid-twentieth century onward',
                match: 'strong institutional resemblance, with national variation',
                caveat: 'Nordic countries combine universal services and labor institutions with competitive markets; they are not identical or permanently fixed social-democratic systems.',
                citations: citations(['bernsteinEvolutionarySocialism', 'keynesGeneralTheory'], ['sepSocialism', 'oecdWelfareModels', 'vdem']),
              },
              {
                name: 'Attlee-era Britain and post-war British welfare reform',
                period: '1945–1951 emphasis',
                match: 'historical welfare-state and labor-policy resemblance',
                caveat: 'Britain’s welfare settlement was shaped by cross-party institutions, empire, class conflict, and later retrenchment; it was not a pure social-democratic model.',
                citations: citations(['keynesGeneralTheory', 'bernsteinEvolutionarySocialism'], ['sepSocialism', 'oecdWelfareModels']),
              },
              {
                name: 'Federal Republic of Germany’s post-war social-market welfare order',
                period: 'especially 1949–1989',
                match: 'partial historical comparator and boundary case',
                caveat: 'The Federal Republic’s welfare state and social market were built through cross-party, employer, labor, Christian-democratic, liberal, and ordoliberal influences; they should not be attributed to social democracy alone or treated as a single fixed model.',
                citations: citations(['bernsteinEvolutionarySocialism'], ['bpbSpdProgrammatics', 'ghdiGodesberg', 'bpbSocialMarketEconomy', 'bpbGermanSocialState', 'bpbWelfareModels']),
              },
              {
                name: 'Contemporary social-democratic parties and coalitions',
                period: 'present',
                match: 'movement-level comparison only',
                caveat: 'Party names do not establish policy: examine taxation, labor power, welfare coverage, privatization, migration, climate policy, and democratic accountability separately.',
                citations: citations(['bernsteinEvolutionarySocialism', 'millOnLiberty'], ['sepSocialism', 'ches', 'vdem']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'social-democracy', relation: 'taxonomy label for the broader reformist tradition' },
              { id: 'progressive-liberal', relation: 'shares social reform and rights but usually has a less labor-socialist lineage' },
              { id: 'democratic-socialism', relation: 'shares democracy and equality but seeks stronger social ownership' },
              { id: 'authoritarian-collectivist', relation: 'shares collectivist economic language but rejects pluralist democratic safeguards' },
              { id: 'libertarian-market', relation: 'counterpoint on redistribution, public services, and the scope of the state' },
              { id: 'christian-democracy', relation: 'welfare-state and social-solidarity neighbor with different religious and party roots' },
              { id: 'green-commons', relation: 'overlaps on public provision and ecological transition, with a stronger ecological foundation' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'Critics argue that social democracy can stabilize rather than transform capitalism, leaving ownership, workplace power, and structural inequality largely intact. Supporters respond that durable democratic control over taxation, labor rights, social services, and economic regulation can materially expand freedom and reduce domination even without abolishing private ownership.',
            citations: citations(['bernsteinEvolutionarySocialism', 'marxEngelsManifesto', 'millOnLiberty'], ['sepSocialism', 'sepLiberalism']),
          },
          {
            type: 'paragraph',
            text: 'A second criticism concerns the welfare state’s administrative power and fiscal sustainability. Universal benefits can build solidarity and reduce stigma, but they may be expensive, bureaucratic, or politically bounded by citizenship. Targeted benefits can conserve resources but risk stigma, gaps, and weaker public support; no single design resolves these trade-offs.',
            citations: citations(['keynesGeneralTheory', 'millOnLiberty'], ['oecdWelfareModels', 'sepSocialism']),
          },
          {
            type: 'paragraph',
            text: 'Comparative labels can also conceal institutional differences. The German insurance-based tradition, the Nordic universalist tradition, and liberal or targeted welfare states may all be called social-democratic in ordinary discussion, but they distribute risk, organize labor, regulate markets, and define social citizenship differently. A didactic profile should expose these dimensions instead of treating one country as the standard for the whole family.',
            citations: citations(['bernsteinEvolutionarySocialism'], ['bpbGermanSocialState', 'bpbWelfareModels', 'oecdWelfareModels']),
          },
          {
            type: 'paragraph',
            text: 'Social-democratic success also depends on conditions that are not fully controlled by national policy: economic growth, international trade, migration, demographic change, technological shifts, ecological limits, and the bargaining power of organized labor. The profile should therefore be read as an institutional project with changing constraints, not as a fixed list of benefits.',
            citations: citations(['keynesGeneralTheory', 'bernsteinEvolutionarySocialism'], ['sepSocialism', 'oecdWelfareModels', 'foreignPolicy']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['bernsteinEvolutionarySocialism', 'keynesGeneralTheory', 'millOnLiberty', 'wollstonecraftRights', 'lockeSecondTreatise', 'lockeLetterToleration', 'spinozaPolitical', 'renanNation', 'andersonImaginedCommunities', 'kantPerpetualPeace', 'morgenthauRealism', 'marxEngelsManifesto'],
      researchSourceIds: ['sepSocialism', 'sepLiberalism', 'sepReligionPolitics', 'oecdWelfareModels', 'fesHistorySocialDemocracy', 'bpbSpdProgrammatics', 'bpbGermanSocialState', 'bpbWelfareModels', 'bpbSocialMarketEconomy', 'ghdiGodesberg', 'vdem', 'ches', 'foreignPolicy'],
      editorialNote: 'The entry distinguishes reformist socialism, welfare-state social democracy, social liberalism, and democratic socialism. Its scores describe a didactic modern social-democratic archetype, not every party or welfare state carrying the label.',
    },
    researchGaps: [
      'Expand German-language scholarship on Bernstein, the SPD, ordoliberal and social-market debates, and post-war welfare institutions, including internal dissent, East German trajectories, and welfare-state transformation after reunification.',
      'Add Swedish, Norwegian, Danish, French, and Portuguese scholarship on labor movements, universalism, social citizenship, and the Nordic and continental welfare variants.',
      'Add country-specific evidence before listing current states or parties as examples; welfare models and party programmes change over time.',
      'Add specialist research on colonial legacies, migration, gender, unpaid care, disability, ecological transition, automation, and the global constraints on national redistribution.',
    ],
  },
  'classical-liberal': {
    id: 'classical-liberal',
    title: 'Classical liberal',
    canonicalLabel: 'Classical liberal',
    aliases: ['old liberalism', 'laissez-faire liberalism', 'constitutional liberalism', 'market liberalism'],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'This profile describes the broad classical or “old” liberal tradition linking individual liberty, private property, constitutional limits, and a restrained but not necessarily absent state. Classical liberalism is a spectrum and should not be collapsed into libertarianism, laissez-faire absolutism, or every contemporary use of the word liberal.',
    timeScope: 'Roots in early modern natural-rights and toleration arguments; major development in the eighteenth and nineteenth centuries; later reinterpretations through twentieth-century liberal and libertarian debates.',
    geographicScope: 'Transnational Atlantic and European tradition with especially important British, Scottish, French, Dutch, German, and North American variants; the label has different historical meanings across countries.',
    summary: 'A liberal tradition that treats individuals as rights-bearing agents and limits coercive authority through consent, constitutional government, civil liberty, religious toleration, private property, and voluntary exchange. Its members disagree about suffrage, empire, labor, public goods, social provision, and the legitimate scope of regulation, so “classical liberal” is best used as a family resemblance rather than a single policy package.',
    summaryCitations: citations(['lockeSecondTreatise', 'adamSmithWealth', 'millOnLiberty', 'constantLibertyModerns'], ['sepLiberalism', 'sepLibertarianism']),
    dimensionInterpretations: {
      economic: {
        score: -70,
        label: 'Strongly market-oriented',
        explanation: 'Private property, contract, competition, and decentralized exchange are treated as important safeguards for independence and prosperity. The tradition nevertheless includes arguments for public goods, infrastructure, education, regulation, and a limited social minimum, so it is broader than absolute laissez-faire. The later Freiburg approach makes competition depend on enforceable rules against concentrated private power.',
        citations: citations(['adamSmithWealth', 'hayekKnowledge', 'lockeSecondTreatise'], ['sepLiberalism', 'sepLibertarianism', 'euckenFreiburgHistory']),
      },
      social: {
        score: 20,
        label: 'Moderately progressive through liberty',
        explanation: 'Freedom of conscience, discussion, association, and personal development often support social pluralism and reform. Historical classical liberals also retained exclusions and inherited assumptions, so the tradition’s liberty language does not automatically imply contemporary egalitarian positions.',
        citations: citations(['millOnLiberty', 'wollstonecraftRights', 'constantLibertyModerns'], ['sepLiberalism', 'sepMill']),
      },
      authority: {
        score: -58,
        label: 'Strongly limited-state',
        explanation: 'Government is legitimate when it protects rights, adjudicates disputes, supplies certain common goods, and acts through accountable law. Arbitrary rule, unchecked executive power, and coercion of peaceful conduct are treated as serious dangers, though the permitted functions of the state remain contested. In comparing ordoliberalism, distinguish a state capable of enforcing competition rules from one exercising arbitrary authority; administrative strength alone does not settle this score.',
        citations: citations(['lockeSecondTreatise', 'millOnLiberty', 'constantLibertyModerns'], ['sepLiberalism', 'vdem', 'freiburgOrdoliberalDebates']),
      },
      identity: {
        score: 12,
        label: 'Civic and mildly internationalist',
        explanation: 'The profile centers universal individual rights and constitutional citizenship rather than ethnic uniformity. Classical liberals have also defended national self-government, borders, and imperial projects at different times, so the tradition cannot be assigned a single cosmopolitan or nationalist position.',
        citations: citations(['lockeSecondTreatise', 'constantLibertyModerns', 'kantPerpetualPeace'], ['sepLiberalism', 'sepNationalism']),
      },
      foreign: {
        score: 18,
        label: 'Restrained internationalist',
        explanation: 'Commerce, diplomacy, legal order, and non-interference are generally preferred to permanent military activism. Defense, treaty obligations, or protection of rights can still be invoked for force, and historical liberal states have often combined liberal institutions with imperial or interventionist policies.',
        citations: citations(['kantPerpetualPeace', 'millOnLiberty', 'morgenthauRealism'], ['sepLiberalism', 'foreignPolicy']),
      },
      religion: {
        score: 50,
        label: 'Secular constitutionalist / tolerationist',
        explanation: 'Freedom of conscience and religious toleration limit the state’s authority to impose doctrine. Classical liberalism can be religiously inspired, but public coercion is normally justified through civil rights and constitutional law rather than by a single clerical authority or established revelation.',
        citations: citations(['lockeLetterToleration', 'millOnLiberty', 'constantLibertyModerns'], ['sepReligionPolitics', 'sepLiberalism']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Classical liberalism is a family of political arguments built around the presumption that people are entitled to substantial freedom and that political authority must be justified. Its central protections include liberty of thought and discussion, religious conscience, personal choice, property, contract, and security against arbitrary power. The tradition is constitutional rather than simply anti-government: it asks what public authority may legitimately do and how that authority can be limited.',
            citations: citations(['lockeSecondTreatise', 'millOnLiberty', 'constantLibertyModerns'], ['sepLiberalism', 'sepLibertarianism']),
          },
          {
            type: 'paragraph',
            text: 'The label is historically layered. Early modern natural-rights and toleration arguments supplied important foundations; eighteenth-century commercial and constitutional thought developed them; nineteenth-century liberals used them for reform, free trade, civil equality, and opposition to inherited privilege. Later libertarian and neoliberal currents selectively inherited this tradition, but classical liberalism should not be treated as a synonym for every market ideology or as proof that the state must perform no social function.',
            citations: citations(['lockeSecondTreatise', 'adamSmithWealth', 'millOnLiberty', 'constantLibertyModerns'], ['sepLiberalism', 'sepLibertarianism']),
          },
          {
            type: 'paragraph',
            text: 'Shared aims can support different institutions. Andrew Valls’s comparison presents personal development as central to both Humboldt and Mill, while emphasizing their disagreement about how actively government should support it. This helps explain the breadth of the classical-liberal family.',
            citations: citations([], ['vallsHumboldtMill']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'The political core is limited and accountable government. Consent, representation, separation or division of powers, due process, equal legal standing, and public justification are mechanisms for preventing rulers from treating citizens as instruments. Different liberals ground these limits in natural rights, utility, autonomy, constitutional tradition, or the need to disperse power; they are related arguments, not one identical doctrine.',
            citations: citations(['lockeSecondTreatise', 'millOnLiberty', 'constantLibertyModerns'], ['sepLiberalism', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'Its economic outlook connects independence with secure property and voluntary exchange. Adam Smith’s commercial society is not reducible to a slogan that government should do nothing: public works, justice, defense, education, and the institutional conditions of exchange remain part of the historical debate. Later classical liberals likewise range from minimal-state positions to arguments for modest public goods and a limited social floor.',
            citations: citations(['adamSmithWealth', 'hayekKnowledge', 'lockeSecondTreatise'], ['sepLiberalism', 'sepLibertarianism']),
          },
          {
            type: 'paragraph',
            text: 'Classical liberalism also contains a theory of social learning. Free speech and open criticism are valuable not only as private rights but because governments, majorities, and individuals can be mistaken. Mill’s warning about social as well as state coercion and Constant’s distinction between modern civil liberty and ancient direct participation help explain why constitutional protections, private life, and plural association matter alongside elections.',
            citations: citations(['millOnLiberty', 'constantLibertyModerns'], ['sepMill', 'sepLiberalism']),
          },
          {
            type: 'paragraph',
            text: 'In chapters II–III of his German treatise, Humboldt connects Bildung, or the cultivation of a person’s capacities, with freedom, varied experience, and relationships with others. His objection to state direction concerns the conditions of individual development as well as material welfare. Here Bildung is an explanatory gloss, not an exact equivalent of schooling.',
            citations: citations([], ['humboldtLimitsGerman']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Seventeenth century: rights, consent, and toleration',
            text: 'Locke’s arguments about natural equality, consent, property, limited government, resistance to arbitrary rule, and religious toleration became important reference points for later liberal traditions. Locke was not a modern egalitarian or libertarian in every respect, so his inclusion requires historical qualification rather than retrospective identity.',
            citations: citations(['lockeSecondTreatise', 'lockeLetterToleration'], ['sepLiberalism', 'sepReligionPolitics']),
          },
          {
            period: 'Eighteenth century: commerce, constitutionalism, and public reason',
            text: 'The Scottish Enlightenment and Atlantic constitutional debates linked commercial society, moral judgment, legal institutions, and limits on concentrated power. Smith criticized mercantilist privilege while recognizing justice and public functions; this is why “classical liberal” should not be equated automatically with a state-free economy.',
            citations: citations(['adamSmithWealth', 'lockeSecondTreatise'], ['sepLiberalism']),
          },
          {
            period: '1789–1819: revolution and modern civil liberty',
            text: 'Revolutionary upheaval forced liberals to confront the relationship between universal rights, popular sovereignty, inherited institutions, and coercive political mobilization. Benjamin Constant’s French liberal account distinguished the private and representative liberties of modern citizens from the direct collective sovereignty associated with ancient republics, while warning that modern states could still threaten individual independence.',
            citations: citations(['constantLibertyModerns', 'lockeSecondTreatise'], ['sepLiberalism', 'sepLibertyPositiveNegative']),
          },
          {
            period: '1792 / 1851: Humboldt’s limits on state action',
            text: 'Humboldt composed the treatise in 1792; portions appeared before its first complete publication in 1851. The digital edition’s historical notes distinguish these stages. Dating the finished book solely to its publication year obscures its earlier intellectual setting.',
            citations: citations([], ['humboldtLimitsGerman']),
          },
          {
            period: 'Nineteenth century: reform, markets, and exclusion',
            text: 'Classical liberal arguments supported free trade, parliamentary reform, civil equality, abolitionist and religious-liberty causes, and opposition to aristocratic privilege. At the same time, many historical liberals accepted restricted suffrage, colonial hierarchy, gender inequality, or racial exclusion. The tradition’s universal language and its uneven application must be studied together.',
            citations: citations(['millOnLiberty', 'wollstonecraftRights', 'constantLibertyModerns'], ['sepLiberalism', 'sepMill']),
          },
          {
            period: 'Twentieth century: old liberalism, welfare liberalism, and libertarian revival',
            text: 'Industrial crisis, mass democracy, war, and inequality produced competing revisions. New or welfare-state liberalism challenged the idea that private property alone secured effective liberty, while Hayekian and later libertarian currents emphasized dispersed knowledge, markets, and the dangers of centralized planning. These are internal disputes within a wider liberal genealogy, not a settled replacement of one label by another.',
            citations: citations(['hayekKnowledge', 'keynesGeneralTheory', 'millOnLiberty'], ['sepLiberalism', 'sepLibertarianism']),
          },
          {
            period: '1930s onward: the Freiburg revision',
            text: 'Economist Walter Eucken and jurists Franz Böhm and Hans Großmann-Doerth developed a programme joining legal and economic analysis. Their Freiburg School treated the rules organizing markets as a political responsibility. It belongs among later liberal revisions, with a particular emphasis on controlling private economic power.',
            citations: citations([], ['euckenFreiburgHistory']),
          },
          {
            period: 'Post-1945: social-market institutions',
            text: 'Heinz Lampert’s 1988 account distinguishes ordoliberal theory from the broader social-market programme associated with Alfred Müller-Armack. The latter gave social security and social justice more explicit weight. The resulting West German settlement therefore requires its own institutional history when used as a liberal comparator.',
            citations: citations([], ['bpbSocialMarketEconomy']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Constitutional rights liberalism',
                distinction: 'Emphasizes consent, equal legal protection, limited government, civil liberties, and institutional checks on arbitrary power.',
                relation: 'Closest to the Locke–constitutional strand; it does not by itself settle the desired level of taxation or public provision.',
                citations: citations(['lockeSecondTreatise', 'lockeLetterToleration'], ['sepLiberalism', 'sepReligionPolitics']),
              },
              {
                label: 'Commercial or market liberalism',
                distinction: 'Treats private property, free exchange, competition, and opposition to privilege as central to prosperity and independence.',
                relation: 'Strong economic component of the archetype, but Smith’s public-function arguments prevent a simplistic “government does nothing” reading.',
                citations: citations(['adamSmithWealth'], ['sepLiberalism']),
              },
              {
                label: 'Millian liberalism',
                distinction: 'Places individuality, free discussion, experiments in living, and protection against social as well as governmental coercion at the center.',
                relation: 'More socially reformist than some earlier or property-centered versions, and not identical to modern libertarianism.',
                citations: citations(['millOnLiberty', 'wollstonecraftRights'], ['sepMill', 'sepLiberalism']),
              },
              {
                label: 'Classical liberal social minimum',
                distinction: 'Allows limited public education, infrastructure, safety regulation, or a modest minimum when these protect effective liberty or common goods.',
                relation: 'Shows why the historical category contains more state capacity than a pure laissez-faire caricature.',
                citations: citations(['adamSmithWealth', 'hayekKnowledge'], ['sepLiberalism', 'sepLibertarianism']),
              },
              {
                label: 'Humboldt and Mill on personal development',
                distinction: 'Valls interprets Humboldt as restricting government to security, while Mill permits public support for the conditions of personal development.',
                relation: 'A disagreement within liberal thought; shared concern for individuality does not determine one welfare policy.',
                citations: citations([], ['vallsHumboldtMill']),
              },
              {
                label: 'Ordoliberalism / Freiburg School',
                distinction: 'Public authority establishes rules for competition and addresses concentrations of economic power.',
                relation: 'A later liberal revision with a more explicit role for constructing market institutions; compare it separately with minimal-state positions.',
                citations: citations([], ['euckenFreiburgHistory']),
              },
              {
                label: 'Libertarian and minarchist revision',
                distinction: 'Tightens the focus on self-ownership, property, voluntary exchange, and a minimal state, with stronger objections to redistribution and regulation.',
                relation: 'A close contemporary neighbor, but the wider classical tradition contains more public-good and reformist positions.',
                citations: citations(['hayekKnowledge', 'nozickASU'], ['sepLibertarianism', 'sepLiberalism']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'Historical and contemporary examples',
        blocks: [
          {
            type: 'evidence-note',
            text: 'No state is an exact or permanent classical-liberal match. The label should be tested against constitutional rights, property and labor institutions, taxation, public goods, suffrage, empire, social equality, and actual limits on executive power rather than inferred from a low tax rate or a party name.',
            citations: citations(['adamSmithWealth', 'millOnLiberty', 'lockeSecondTreatise'], ['sepLiberalism', 'vdem']),
          },
          {
            type: 'people',
            entries: [
              {
                name: 'John Locke',
                role: 'theorist of natural rights, consent, limited government, and toleration',
                caveat: 'A foundational influence whose historical views also included exclusions and assumptions that do not map neatly onto contemporary liberal equality.',
                citations: citations(['lockeSecondTreatise', 'lockeLetterToleration'], ['sepLiberalism', 'sepReligionPolitics']),
              },
              {
                name: 'Adam Smith',
                role: 'political economist of commercial society, competition, and anti-mercantilist critique',
                caveat: 'Smith recognized justice and public functions; he should not be reduced to a doctrine of unregulated markets.',
                citations: citations(['adamSmithWealth'], ['sepLiberalism']),
              },
              {
                name: 'John Stuart Mill',
                role: 'liberal philosopher of individuality, free discussion, and limits on coercion',
                caveat: 'Mill also supported social reform and did not treat private property or every market arrangement as beyond democratic revision.',
                citations: citations(['millOnLiberty'], ['sepMill', 'sepLiberalism']),
              },
              {
                name: 'Benjamin Constant',
                role: 'French liberal theorist of modern civil liberty and representative institutions',
                caveat: 'His account clarifies one dimension of liberal freedom but is not a complete economic or foreign-policy programme.',
                citations: citations(['constantLibertyModerns'], ['sepLiberalism', 'sepLibertyPositiveNegative']),
              },
              {
                name: 'Wilhelm von Humboldt',
                role: 'author of the treatise on limits to state action',
                caveat: 'The youthful treatise is evidence of an argument about freedom; it does not establish a six-axis classification of his whole career or of Prussia.',
                citations: citations([], ['humboldtLimitsGerman']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'Nineteenth-century Britain',
                period: 'especially the reform and free-trade debates of the nineteenth century',
                match: 'historical partial resemblance',
                caveat: 'Parliamentary liberty and market reform coexisted with restricted suffrage, empire, class inequality, and changing state intervention.',
                citations: citations(['millOnLiberty', 'adamSmithWealth'], ['sepLiberalism', 'vdem']),
              },
              {
                name: 'Early constitutional United States',
                period: 'late eighteenth to nineteenth century, with major institutional changes over time',
                match: 'constitutional and rights-language resemblance',
                caveat: 'Slavery, Indigenous dispossession, restricted suffrage, and unequal citizenship are central contradictions, not footnotes to the comparison.',
                citations: citations(['lockeSecondTreatise', 'millOnLiberty'], ['sepLiberalism', 'vdem']),
              },
              {
                name: 'Modern liberal democracies with market institutions',
                period: 'contemporary, country-specific comparison required',
                match: 'partial institutional resemblance only',
                caveat: 'Every current democracy combines liberal rights with welfare, regulation, national policy, and coercive institutions; no country should be presented as pure classical liberalism without case-specific evidence.',
                citations: citations(['millOnLiberty', 'constantLibertyModerns', 'hayekKnowledge'], ['sepLiberalism', 'vdem', 'ches']),
              },
              {
                name: 'West German social-market settlement',
                period: 'post-1945 developments discussed in Lampert’s 1988 account',
                match: 'historical comparison with a later liberal revision',
                caveat: 'Market coordination and social protection developed together. This comparison does not classify present-day Germany or imply that all welfare institutions originated in classical liberalism.',
                citations: citations([], ['bpbSocialMarketEconomy']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'libertarian-market', relation: 'more strongly market-oriented and anti-coercive archetype in the current catalogue' },
              { id: 'liberal-constitutionalist', relation: 'emphasizes constitutional rights and institutional restraint, with less economic specificity' },
              { id: 'ordoliberalism', relation: 'later liberal revision emphasizing the legal rules of competition and limits on private economic power' },
              { id: 'progressive-liberal', relation: 'shares rights and pluralism but accepts a more active redistributive and regulatory state' },
              { id: 'social-democratic', relation: 'shares democratic reform and civil liberties but gives collective provision and labor power more weight' },
              { id: 'anarcho-capitalist', relation: 'radical anti-state market neighbor that rejects even the limited public authority accepted by most classical liberals' },
              { id: 'conservative', relation: 'can share property and institutional restraint but differs over tradition, social change, and the basis of authority' },
              { id: 'democratic-socialist', relation: 'shares democratic emancipation but seeks more extensive social ownership and economic power-sharing' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'Critics argue that classical liberal accounts can treat formally free contracts as sufficient while overlooking unequal bargaining power, inherited wealth, structural discrimination, and the social conditions required to exercise rights. They also argue that property and market power can become forms of domination when public institutions do not prevent coercion by private actors.',
            citations: citations(['millOnLiberty', 'wollstonecraftRights', 'keynesGeneralTheory'], ['sepLiberalism', 'sepLibertarianism']),
          },
          {
            type: 'paragraph',
            text: 'A second criticism concerns historical selectivity. Liberal language about universal rights has often coexisted with colonial rule, racial hierarchy, gender exclusion, restricted suffrage, and economic dependence. The entry therefore distinguishes the normative claims made by liberal authors from the institutions and populations that actually received protection in each period.',
            citations: citations(['wollstonecraftRights', 'millOnLiberty', 'constantLibertyModerns'], ['sepLiberalism', 'sepMill']),
          },
          {
            type: 'paragraph',
            text: 'The profile also has a measurement limit: a country can protect speech while violating property rights, protect markets while weakening civil liberties, or maintain constitutional forms while allowing executive abuse. Classical liberalism should be assessed across all six dimensions and against documented institutions, not assigned from a single economic or cultural indicator.',
            citations: citations(['lockeSecondTreatise', 'millOnLiberty', 'hayekKnowledge'], ['sepLiberalism', 'vdem', 'ches']),
          },
          {
            type: 'paragraph',
            text: 'The Freiburg comparison raises a practical question: can authorities enforce competition rules while resisting powerful interest groups? A 2023 university report presents Tim Krieger’s proposals for renewing ordoliberal thought through climate and education debates. These are attributed arguments for further study; they do not establish that a market instrument will work in every setting.',
            citations: citations([], ['freiburgOrdoliberalDebates']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['lockeSecondTreatise', 'lockeLetterToleration', 'adamSmithWealth', 'millOnLiberty', 'wollstonecraftRights', 'constantLibertyModerns', 'hayekKnowledge', 'nozickASU', 'keynesGeneralTheory', 'kantPerpetualPeace', 'morgenthauRealism'],
      researchSourceIds: ['sepLiberalism', 'sepLibertarianism', 'sepMill', 'sepLibertyPositiveNegative', 'sepReligionPolitics', 'humboldtLimitsGerman', 'vallsHumboldtMill', 'euckenFreiburgHistory', 'freiburgOrdoliberalDebates', 'bpbSocialMarketEconomy', 'vdem', 'ches', 'foreignPolicy'],
      editorialNote: 'The entry distinguishes the broad classical-liberal family from libertarian, social-liberal, and constitutionalist neighbors. Its scores describe a didactic reference profile and do not measure every historical liberal, party, or market economy. The German material is independently paraphrased. Humboldt’s primary text, Valls’s accessible abstract, the Eucken institute’s account, and Krieger’s reported interpretation have different evidence roles; none supplies measured coordinates.',
    },
    researchGaps: [
      'German primary and institutional sources now introduce Humboldt and the Freiburg/social-market distinction. Add Kantian liberalism, independent German-language scholarship on ordoliberalism, and primary works by Eucken and Böhm; review Valls’s full article and competing interpretations of Humboldt’s later educational practice. These traditions must not be treated as identical to classical liberalism.',
      'Add French-language scholarship on Constant, Tocqueville, republican liberty, empire, and the tension between universal rights and colonial practice.',
      'Add British, Scottish, Portuguese, and Spanish scholarship on commercial society, free trade, constitutional reform, and liberal empire.',
      'Add country-specific evidence before listing current states as examples; rights, tax systems, regulation, welfare, and executive constraints change over time.',
      'Add specialist research on labor power, race, gender, colonialism, migration, environmental externalities, corporate concentration, public goods, and the relationship between private and state coercion.',
    ],
  },
  'democratic-socialist': {
    id: 'democratic-socialist',
    title: 'Democratic socialist',
    canonicalLabel: 'Democratic socialist',
    aliases: ['democratic socialism', 'democratic social ownership', 'left socialism', 'libertarian democratic socialism'],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'This profile describes socialist projects that seek substantial economic equality and social or democratic ownership while preserving competitive elections, civil liberties, plural associations, and the right to organize against the governing movement. The label is contested and is sometimes used as a synonym for reformist social democracy or as a broader family including revolutionary democratic currents.',
    timeScope: 'Nineteenth-century socialist roots; major debates around revisionism, revolution, and mass democracy from the 1890s onward; post-war democratic-socialist programmes; contemporary debates about market socialism, economic democracy, and public ownership.',
    geographicScope: 'Transnational tradition with important German, French, British, Nordic, Central European, Latin American, and other national variants; the relationship between socialism and democracy changes with institutions and historical conditions.',
    summary: 'A political tradition seeking to extend democratic control into the economy through social ownership, worker power, universal provision, redistribution, and cooperative or public institutions while rejecting one-party rule and the suppression of plural political life. Some democratic socialists seek to regulate and gradually transform capitalism; others seek a democratic transition beyond capitalism through public, cooperative, or worker-controlled ownership.',
    summaryCitations: citations(['marxEngelsManifesto', 'bernsteinEvolutionarySocialism', 'luxemburgReformRevolution', 'jauresSocialistHistory'], ['sepSocialism', 'sepLuxemburg', 'ghdiGodesberg', 'jauresArchive']),
    dimensionInterpretations: {
      economic: {
        score: 78,
        label: 'Strongly collectivist and ownership-transforming',
        explanation: 'The profile gives workers and citizens a direct role in ownership, investment, production, and distribution through public enterprises, cooperatives, workplace democracy, social funds, or other forms of social ownership. It can retain markets for some goods and does not require one centralized state plan, which distinguishes it from a uniform command economy. Worker participation alongside employers, as envisaged by Weimar Article 165, does not itself establish social ownership.',
        citations: citations(['marxEngelsManifesto', 'bernsteinEvolutionarySocialism', 'luxemburgReformRevolution'], ['sepSocialism', 'sepLuxemburg', 'ghdiWeimarGerman']),
      },
      social: {
        score: 58,
        label: 'Progressive and emancipatory',
        explanation: 'Equal citizenship, freedom from economic dependence, labor dignity, and the removal of inherited domination are central aspirations. Historical socialist movements have still disagreed over gender, religion, nationalism, minority rights, and the pace of cultural change, so the economic project does not automatically settle every social question.',
        citations: citations(['jauresSocialistHistory', 'millOnLiberty', 'wollstonecraftRights'], ['sepSocialism', 'sepLuxemburg']),
      },
      authority: {
        score: -20,
        label: 'Democratic but institutionally active',
        explanation: 'Public authority is used to democratize property and provide social rights, but competitive elections, free expression, independent unions, opposition parties, courts, and internal dissent are treated as necessary safeguards. The defining boundary is against a party-state that claims to embody the working class while removing democratic control. Historical council programmes also require scrutiny of who could vote and whose opposition remained protected.',
        citations: citations(['luxemburgReformRevolution', 'lockeSecondTreatise', 'millOnLiberty'], ['sepLuxemburg', 'sepSocialism', 'vdem', 'luxemburgSpartacusGerman']),
      },
      identity: {
        score: 40,
        label: 'Internationalist with civic organization',
        explanation: 'International working-class solidarity and universal emancipation are prominent, while democratic socialist parties often operate through national citizenship, public budgets, and national institutions. This creates persistent debates about borders, migration, colonialism, national development, and the political scale of economic democracy.',
        citations: citations(['marxEngelsManifesto', 'jauresSocialistHistory', 'renanNation'], ['sepSocialism', 'jauresArchive']),
      },
      foreign: {
        score: 15,
        label: 'Restrained internationalist',
        explanation: 'International law, solidarity, anti-imperialism, diplomacy, and collective security are preferred to militarized power politics. Democratic socialist movements have nevertheless differed over national defense, revolutionary intervention, alliances, and the use of force against authoritarian or colonial regimes.',
        citations: citations(['kantPerpetualPeace', 'jauresSocialistHistory', 'morgenthauRealism'], ['sepSocialism', 'foreignPolicy']),
      },
      religion: {
        score: 30,
        label: 'Secular and pluralist public law',
        explanation: 'The profile generally grounds public institutions in equal citizenship, social rights, and democratic reasoning rather than clerical authority. Religious socialists, Christian socialists, and faith-based labor movements show that democratic socialism is not necessarily anti-religious, but no single faith is required to rule public law.',
        citations: citations(['lockeLetterToleration', 'jauresSocialistHistory', 'spinozaPolitical'], ['sepReligionPolitics', 'sepSocialism', 'jauresArchive']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Democratic socialism begins from a problem shared by many socialist traditions: political equality is fragile when people remain dependent on unequal ownership, employment, inherited wealth, or private control of essential resources. Its proposed answer is to extend democratic principles into economic life so that workers and citizens have meaningful power over production, investment, care, and distribution, while preserving the political liberties needed to contest those decisions.',
            citations: citations(['marxEngelsManifesto', 'jauresSocialistHistory', 'millOnLiberty'], ['sepSocialism', 'jauresArchive']),
          },
          {
            type: 'paragraph',
            text: 'The label has two common uses. In one, democratic socialism means a long-term project of replacing major capitalist ownership with social, public, cooperative, or worker ownership through democratic means. In another, it names a broad left-democratic family that includes welfare-state reform, public services, labor power, market regulation, and gradual transformation. This entry keeps both meanings visible rather than treating the term as identical to either social democracy or revolutionary communism.',
            citations: citations(['bernsteinEvolutionarySocialism', 'luxemburgReformRevolution', 'jauresSocialistHistory'], ['sepSocialism', 'sepLuxemburg', 'ghdiGodesberg']),
          },
          {
            type: 'paragraph',
            text: 'Councils and parliaments were not always rival camps. Wolfgang Kruse describes most German councils in 1918 as supporting parliamentary democracy while seeking wider changes in public institutions and economic power.',
            citations: citations([], ['kruseGermanRevolution']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'The economic idea is not simply that the state should own everything. Democratic socialists propose different combinations of public enterprises, worker cooperatives, social wealth funds, codetermination, municipal ownership, universal services, regulated markets, and participatory investment. The common thread is that ownership and economic power should be answerable to those affected by them rather than determined only by private capital holders or a centralized party bureaucracy.',
            citations: citations(['marxEngelsManifesto', 'bernsteinEvolutionarySocialism', 'luxemburgReformRevolution'], ['sepSocialism', 'sepLuxemburg']),
          },
          {
            type: 'paragraph',
            text: 'Democracy is both a means and an end. Elections and parliamentary action may win reforms, but democratic socialists also emphasize unions, strikes, workplace organization, councils, cooperative association, public deliberation, and the ability of minorities to organize. Rosa Luxemburg’s democratic critique is especially important here: socialism without political freedom can reproduce domination under a different ownership title.',
            citations: citations(['luxemburgReformRevolution', 'millOnLiberty'], ['sepLuxemburg', 'sepSocialism']),
          },
          {
            type: 'paragraph',
            text: 'The tradition is therefore neither a simple midpoint between capitalism and communism nor a guarantee that public ownership is democratic. Public institutions can be captured by officials, parties, managers, or dominant majorities. A democratic-socialist analysis must ask who owns, who decides, how dissent is protected, how resources are allocated, and whether institutions can be revised without coercive political closure.',
            citations: citations(['luxemburgReformRevolution', 'lockeSecondTreatise', 'millOnLiberty'], ['sepLuxemburg', 'sepSocialism', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'The 1919 Weimar provisions separate several institutional questions: Article 153 protected property, Article 159 protected labor association, and Article 165 envisaged workers and employees participating alongside employers. These provisions help distinguish ownership, collective organization, and participation. Their constitutional recognition alone cannot tell us how much power workers actually exercised.',
            citations: citations([], ['ghdiWeimarGerman']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Nineteenth century: socialism and democratic emancipation',
            text: 'Socialist movements developed alongside mass labor organization, republican citizenship, universal suffrage campaigns, and critiques of capitalist property. Marx and other socialists connected political emancipation to class power, while democratic and ethical socialists debated whether economic transformation should be pursued through parliament, mass action, cooperatives, or revolutionary rupture.',
            citations: citations(['marxEngelsManifesto', 'jauresSocialistHistory'], ['sepSocialism', 'jauresArchive']),
          },
          {
            period: '1890s–1900s: revisionism, reform, and the democratic question',
            text: 'Bernstein argued that organized democratic reform and parliamentary action could advance socialism without waiting for a predicted capitalist collapse. Luxemburg answered that reforms mattered but could not substitute for transforming the social structure and political power of capital. Their dispute helped define the boundary between reformist social democracy and more transformative democratic socialism.',
            citations: citations(['bernsteinEvolutionarySocialism', 'luxemburgReformRevolution'], ['sepSocialism', 'sepLuxemburg']),
          },
          {
            period: 'French republican socialism and socialist unity',
            text: 'Jean Jaurès represented a French current that connected republican democracy, social ownership, political education, and the unity of socialist forces. His work shows that democratic socialism was not only a German or British debate and that socialism could be articulated through republican citizenship rather than a rejection of democratic institutions.',
            citations: citations(['jauresSocialistHistory'], ['jauresArchive', 'sepSocialism']),
          },
          {
            period: '1917–1930s: revolution, civil liberties, and party-state divergence',
            text: 'The Russian Revolution intensified the dispute over whether a revolutionary government could preserve plural democracy under civil war and economic collapse. Luxemburg supported socialist transformation but criticized the suppression of political freedom and independent participation; later one-party regimes made the distinction between democratic socialism and authoritarian collectivism a central historical issue.',
            citations: citations(['leninStateRevolution'], ['sepLuxemburg', 'sepSocialism']),
          },
          {
            period: 'November–December 1918: councils and parliamentary transition',
            text: 'Kruse presents the German workers’ and soldiers’ councils as predominantly social-democratic transitional bodies. The December congress supported an elected National Assembly, while demands for democratizing administration, the military, and economic life extended beyond choosing a parliament.',
            citations: citations([], ['kruseGermanRevolution']),
          },
          {
            period: 'December 1918: the Spartacus programme’s distinct electorate',
            text: 'Luxemburg’s programme required the support of a large proletarian majority before taking governmental power. It also proposed replacing parliaments with workers’ and soldiers’ councils, elected through class-defined constituencies with recall rights. The majority condition therefore concerned a different electorate from universal parliamentary citizenship. This is a revolutionary comparator with a significant boundary from the pluralist profile described here.',
            citations: citations([], ['luxemburgSpartacusGerman']),
          },
          {
            period: '1919: constitutional labor rights and economic participation',
            text: 'The Weimar Constitution combined property guarantees with labor association and participation provisions. It is evidence of a negotiated constitutional framework; those articles do not demonstrate that Germany acquired democratic-socialist ownership institutions.',
            citations: citations([], ['ghdiWeimarGerman']),
          },
          {
            period: '1945–1970s: reconstruction, welfare, and programme pluralism',
            text: 'After the Second World War, socialist and social-democratic parties helped build welfare states, public services, labor protections, and mixed economies. The 1959 Godesberg Programme is a documented German example of a democratic-socialist reorientation around freedom, human dignity, pluralism, and social justice while moving away from orthodox Marxist ownership language. This shift narrowed one meaning of socialism but did not end debates over ownership and workplace power.',
            citations: citations(['bernsteinEvolutionarySocialism', 'keynesGeneralTheory'], ['ghdiGodesberg', 'sepSocialism']),
          },
          {
            period: 'Late twentieth century to the present: economic democracy and new transitions',
            text: 'Deindustrialization, globalization, the decline of union density, ecological crisis, and the financialization of the economy challenged older national strategies. Contemporary democratic-socialist arguments revisit cooperatives, public investment, universal basic services, social wealth funds, workplace democracy, municipal ownership, ecological planning, and the democratic control of technology. These proposals vary widely and should not be treated as one contemporary programme.',
            citations: citations(['bernsteinEvolutionarySocialism', 'luxemburgReformRevolution', 'keynesGeneralTheory'], ['sepSocialism', 'oecdWelfareModels', 'sepLuxemburg']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Parliamentary democratic socialism',
                distinction: 'Uses elections, legislation, unions, public services, and social ownership reforms to democratize economic power within constitutional institutions.',
                relation: 'Closest to the main profile’s democratic safeguards, but it differs internally over whether capitalism is regulated, gradually transformed, or ultimately replaced.',
                citations: citations(['bernsteinEvolutionarySocialism', 'jauresSocialistHistory'], ['sepSocialism', 'ghdiGodesberg']),
              },
              {
                label: 'Market socialism',
                distinction: 'Retains markets for coordination while changing ownership through cooperatives, public firms, social funds, or worker control.',
                relation: 'Demonstrates that social ownership need not imply a single command plan, although market dependence and unequal firm power remain debated.',
                citations: citations(['marxEngelsManifesto', 'bernsteinEvolutionarySocialism'], ['sepSocialism']),
              },
              {
                label: 'Participatory or council socialism',
                distinction: 'Emphasizes direct participation through workplace councils, assemblies, federations, and democratic planning rather than relying only on representative parties.',
                relation: 'Council projects differ over their electorate and their relationship with parliament; the label alone does not establish equal political rights.',
                citations: citations(['luxemburgReformRevolution', 'millOnLiberty'], ['sepLuxemburg', 'sepSocialism', 'luxemburgSpartacusGerman']),
              },
              {
                label: 'Council participation alongside parliamentary democracy',
                distinction: 'Uses workplace or local participation to deepen a representative democracy.',
                relation: 'A possible combination discussed in German revolutionary historiography; its historical feasibility remains contested.',
                citations: citations([], ['kruseGermanRevolution', 'jesseKoehlerCouncilDebate']),
              },
              {
                label: 'Revolutionary democratic socialism',
                distinction: 'Seeks a structural break with capitalist ownership but insists that the transition remain accountable to plural democratic participation and civil liberties.',
                relation: 'It disputes gradualism while rejecting the claim that a single party may permanently replace democratic self-government.',
                citations: citations(['luxemburgReformRevolution', 'marxEngelsManifesto'], ['sepLuxemburg', 'sepSocialism']),
              },
              {
                label: 'Social democracy',
                distinction: 'Usually prioritizes welfare, labor rights, redistribution, and regulation within a predominantly private mixed economy, with long-term ownership transformation often left open or abandoned.',
                relation: 'The closest neighboring label; the practical boundary is historically variable and should be stated rather than assumed.',
                citations: citations(['bernsteinEvolutionarySocialism', 'keynesGeneralTheory'], ['sepSocialism', 'oecdWelfareModels', 'ghdiGodesberg']),
              },
              {
                label: 'Authoritarian state socialism',
                distinction: 'Concentrates political and economic authority in a party-state and restricts independent opposition, association, or public accountability.',
                relation: 'The critical boundary of this entry: public ownership alone does not make a regime democratic socialist.',
                citations: citations(['luxemburgReformRevolution', 'leninStateRevolution'], ['sepLuxemburg', 'sepSocialism', 'vdem']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'Historical and contemporary examples',
        blocks: [
          {
            type: 'evidence-note',
            text: 'No country is an exact or permanent democratic-socialist match. Examples below are partial historical or movement-level comparators; each must be checked for ownership, workplace power, electoral competition, civil liberties, welfare provision, colonial relations, and the treatment of opposition.',
            citations: citations(['luxemburgReformRevolution', 'jauresSocialistHistory'], ['sepSocialism', 'sepLuxemburg', 'vdem']),
          },
          {
            type: 'people',
            entries: [
              {
                name: 'Rosa Luxemburg',
                role: 'socialist theorist linking economic emancipation to mass democracy and political freedom',
                caveat: 'Her 1918 council programme makes her a qualified revolutionary reference, not an exact match for this profile’s parliamentary safeguards.',
                citations: citations(['luxemburgReformRevolution'], ['sepLuxemburg', 'sepSocialism', 'luxemburgSpartacusGerman']),
              },
              {
                name: 'Jean Jaurès',
                role: 'French socialist and republican thinker who connected democracy, social transformation, and socialist unity',
                caveat: 'Jaurès represents one French democratic-socialist current rather than a complete model for all socialist parties or periods.',
                citations: citations(['jauresSocialistHistory'], ['jauresArchive', 'sepSocialism']),
              },
              {
                name: 'Eduard Bernstein',
                role: 'revisionist socialist theorist of parliamentary reform and evolutionary change',
                caveat: 'Bernstein is a key reference for democratic reform but is also central to debates about whether social democracy still aims beyond capitalism.',
                citations: citations(['bernsteinEvolutionarySocialism'], ['sepSocialism']),
              },
              {
                name: 'Karl Marx',
                role: 'critic of capitalist class relations and theorist of social transformation',
                caveat: 'Marx did not provide a single institutional blueprint for modern democratic socialism, and later regimes should not be read directly back into his texts.',
                citations: citations(['marxEngelsManifesto'], ['sepSocialism']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'German SPD and the 1959 Godesberg Programme',
                period: 'post-war West Germany, especially 1959 onward',
                match: 'documented programme-level comparator',
                caveat: 'Godesberg defined democratic socialism through freedom, dignity, pluralism, and social justice while moving toward a mixed economy; it is not evidence of a single timeless meaning of socialism.',
                citations: citations(['bernsteinEvolutionarySocialism'], ['ghdiGodesberg']),
              },
              {
                name: 'German workers’ and soldiers’ councils',
                period: '1918–1919',
                match: 'diverse historical institutions of participation',
                caveat: 'Their politics and authority varied locally; a shared council name does not establish one programme or a realized democratic-socialist state.',
                citations: citations([], ['kruseGermanRevolution', 'jesseKoehlerCouncilDebate']),
              },
              {
                name: 'French socialist and republican traditions associated with Jaurès',
                period: 'late nineteenth and early twentieth centuries',
                match: 'historical intellectual and movement comparator',
                caveat: 'The French socialist field contained competing revolutionary, parliamentary, republican, syndicalist, and anti-colonial currents.',
                citations: citations(['jauresSocialistHistory'], ['jauresArchive', 'sepSocialism']),
              },
              {
                name: 'Nordic welfare-state and labor institutions',
                period: 'especially mid-twentieth century onward',
                match: 'partial social-democratic comparator',
                caveat: 'These systems combine universal or broad public provision with private firms and markets; they should not be presented as complete democratic-socialist ownership models.',
                citations: citations(['bernsteinEvolutionarySocialism', 'keynesGeneralTheory'], ['sepSocialism', 'oecdWelfareModels', 'vdem']),
              },
              {
                name: 'Contemporary democratic-socialist movements',
                period: 'present; country-specific evidence required',
                match: 'movement-level comparison only',
                caveat: 'A party label does not establish a programme: assess ownership, labor power, redistribution, civil liberties, internal democracy, ecology, migration, and foreign policy separately.',
                citations: citations(['luxemburgReformRevolution', 'millOnLiberty'], ['sepSocialism', 'sepLuxemburg', 'vdem', 'ches']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'social-democratic', relation: 'closest neighboring reform tradition; usually accepts a more durable role for private ownership and markets' },
              { id: 'authoritarian-collectivist', relation: 'shares collectivist economic language but rejects democratic pluralism and independent opposition' },
              { id: 'anarchist-communalist', relation: 'shares social ownership and anti-domination goals but rejects centralized state authority more radically' },
              { id: 'progressive-liberal', relation: 'shares equal citizenship and social reform but generally retains liberal property relations and a less ownership-transforming economy' },
              { id: 'libertarian-socialist', relation: 'shares anti-authoritarian and worker-control concerns, with stronger skepticism toward state coordination' },
              { id: 'council-communism', relation: 'related through worker self-government, but not a synonym for every council institution or parliamentary democratic socialism' },
              { id: 'green-commons', relation: 'overlaps on ecological and common ownership proposals, with a more explicit ecological and polycentric foundation' },
              { id: 'religious-socialist', relation: 'shares economic egalitarianism while grounding some movements in religious ethics and communities' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'Critics argue that democratic socialism faces a transition problem: reforms may be absorbed by capitalism, while rapid ownership changes can trigger economic disruption, capital flight, administrative overload, or opposition from groups that still possess resources. Supporters answer that ownership and workplace power are precisely the democratic questions that incremental policy can leave untouched, and that mixed transitional institutions can reduce the risk of abrupt rupture.',
            citations: citations(['bernsteinEvolutionarySocialism', 'luxemburgReformRevolution', 'keynesGeneralTheory'], ['sepSocialism', 'sepLuxemburg', 'oecdWelfareModels']),
          },
          {
            type: 'paragraph',
            text: 'A second criticism concerns public ownership and bureaucracy. State ownership may protect access and coordinate long-term investment, but it can also empower managers, officials, or party organizations without giving workers and citizens effective control. Democratic-socialist claims therefore require institutional evidence about transparency, contestability, union independence, procurement, participation, and the ability to remove decision-makers.',
            citations: citations(['luxemburgReformRevolution', 'lockeSecondTreatise', 'millOnLiberty'], ['sepLuxemburg', 'sepSocialism', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'Historical possibility is contested. In 1978, Eckhard Jesse and Henning Köhler challenged claims that councils could have secured a more durable democracy, emphasizing their mandate, administrative capacity, and relations with parliament. Kruse’s later synthesis emphasizes their democratic aspirations while acknowledging uncertainty about achievable reforms. These readings warrant examination of local evidence; neither makes an unrealized alternative a demonstrated outcome.',
            citations: citations([], ['jesseKoehlerCouncilDebate', 'kruseGermanRevolution']),
          },
          {
            type: 'paragraph',
            text: 'Finally, democracy itself is not a guarantee of equality. Majorities can exclude minorities, national welfare systems can be bounded by citizenship, and socialist movements have historically reproduced gender, racial, colonial, and cultural hierarchies. The profile should therefore be evaluated through both economic ownership and the actual protection of plural political and social freedom.',
            citations: citations(['jauresSocialistHistory', 'wollstonecraftRights', 'millOnLiberty'], ['sepSocialism', 'sepLuxemburg', 'jauresArchive']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['marxEngelsManifesto', 'bernsteinEvolutionarySocialism', 'luxemburgReformRevolution', 'jauresSocialistHistory', 'millOnLiberty', 'wollstonecraftRights', 'keynesGeneralTheory', 'lockeSecondTreatise', 'lockeLetterToleration', 'spinozaPolitical', 'renanNation', 'kantPerpetualPeace', 'morgenthauRealism', 'leninStateRevolution'],
      researchSourceIds: ['sepSocialism', 'sepLuxemburg', 'ghdiGodesberg', 'jauresArchive', 'sepLiberalism', 'sepReligionPolitics', 'luxemburgSpartacusGerman', 'ghdiWeimarGerman', 'kruseGermanRevolution', 'jesseKoehlerCouncilDebate', 'oecdWelfareModels', 'vdem', 'ches', 'foreignPolicy'],
      editorialNote: 'The entry keeps democratic socialism distinct from both reformist social democracy and authoritarian state socialism, while acknowledging that historical parties and authors use the labels differently. Scores describe a didactic democratic ownership profile, not a single party programme or country. German primary documents are paraphrased independently; GHDI provides selected excerpts. Luxemburg’s programme records proposals, and the Kruse and Jesse–Köhler accounts supply attributed historical interpretations. None measures six-axis coordinates.',
    },
    researchGaps: [
      'German primary documents and contrasting interpretations now cover part of the 1918–1919 council debate. Add local council records, implementation studies of Weimar labor participation, and specialist research on the SPD, Godesberg, East German socialist experience, and post-war constitutional debates. Compare Luxemburg’s programme with her other writings before generalizing its institutional commitments.',
      'Add French-language scholarship on Jaurès, the SFIO, syndicalism, republican socialism, colonialism, and the relationship between democratic and revolutionary currents.',
      'Add Portuguese- and Spanish-language scholarship on Iberian socialism, Latin American democratic socialism, Allende, social movements, and the different meanings of state, communal, and worker ownership.',
      'Add country-specific evidence before listing present parties, welfare states, or cooperative systems as democratic-socialist examples; party labels and institutions change over time.',
      'Add specialist research on gender, race, migration, disability, colonial legacies, ecology, technology, international trade, military alliances, and the governance of large-scale economic planning.',
    ],
  },
  'anarchist-communalist': {
    id: 'anarchist-communalist',
    title: 'Anarchist communalist',
    canonicalLabel: 'Anarchist communalist',
    aliases: ['anarchist communism', 'libertarian communism', 'commune of communes', 'libertarian municipalism'],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'This profile combines anti-authoritarian anarchist politics with common ownership, mutual aid, federated communes, and direct or participatory self-government. The aliases are historically related but not interchangeable: anarcho-communism, anarcho-syndicalism, mutualism, and Bookchin’s libertarian municipalism make different claims about property, organization, markets, ecology, and political scale.',
    timeScope: 'Nineteenth-century anarchist and communist debates; practical experiments during the Paris Commune, Russian Civil War, and Spanish Revolution; later communalist and social-ecological revisions from the late twentieth century onward.',
    geographicScope: 'Transnational tradition with important Russian, Ukrainian, French, Spanish, Italian, German, British, and North American debates; practical experiments have been local, temporary, contested, and shaped by war.',
    summary: 'An anti-authoritarian communist profile that seeks to replace centralized state power and private domination with common ownership, mutual aid, federated communes, workplace or community self-management, and direct democratic coordination. Its defining challenge is to combine freedom from rulers with reliable cooperation at scale without recreating a state, party hierarchy, or informal elite.',
    summaryCitations: citations(['bakuninStatism', 'kropotkinMutualAid', 'bookchinLibertarianMunicipalism', 'ostromGoverningCommons'], ['sepAnarchism', 'socialEcologyMunicipalism', 'sepSocialism']),
    dimensionInterpretations: {
      economic: {
        score: 82,
        label: 'Strongly communal and anti-capitalist',
        explanation: 'Productive resources are to be held in common or controlled by workers and communities, with mutual aid and free association replacing private accumulation and wage dependence. Different currents disagree over distribution, exchange, labor vouchers, markets, and the degree of planning; none of those mechanisms alone defines the whole tradition. Paris’s 1871 programme left reforms to experimentation; it did not specify a complete common-ownership system.',
        citations: citations(['bakuninStatism', 'kropotkinMutualAid', 'ostromGoverningCommons'], ['sepAnarchism', 'sepSocialism', 'communeDeclarationFrench']),
      },
      social: {
        score: 55,
        label: 'Emancipatory and anti-hierarchical',
        explanation: 'The profile opposes domination based on class, inherited status, patriarchy, racism, colonialism, and imposed moral authority, and favors voluntary association and mutual aid. Historical movements nevertheless contained exclusions and internal hierarchies, so anti-authoritarian ideals should not be confused with automatically inclusive practice.',
        citations: citations(['bakuninStatism', 'kropotkinMutualAid', 'millOnLiberty'], ['sepAnarchism', 'sepSocialism']),
      },
      authority: {
        score: -92,
        label: 'Radically anti-state',
        explanation: 'A territorial monopoly of coercion is treated as a source of domination rather than the necessary foundation of social order. Federations, councils, assemblies, mandated delegates, restorative practices, and voluntary coordination are preferred, but the difficult boundary between legitimate collective rules and coercive hierarchy remains an open institutional problem. Paris’s disputed emergency executive in 1871 limits the comparison: the Commune itself should not inherit this profile’s score.',
        citations: citations(['bakuninStatism', 'kropotkinMutualAid', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'socialEcologyMunicipalism', 'vdem', 'rougerieInternationalCommune']),
      },
      identity: {
        score: 45,
        label: 'Internationalist with local belonging',
        explanation: 'Solidarity across borders and opposition to nationalism, imperialism, and colonial domination are emphasized, while communes and federations remain rooted in particular places and relationships. Local autonomy is therefore compatible with internationalism, but not with a single universal national identity. The Commune also mobilized French republican patriotism; federation did not imply the absence of national attachment.',
        citations: citations(['bakuninStatism', 'bookchinLibertarianMunicipalism', 'andersonImaginedCommunities'], ['sepAnarchism', 'socialEcologyMunicipalism', 'assembleeCommuneHistory']),
      },
      foreign: {
        score: 45,
        label: 'Non-interventionist and anti-imperial',
        explanation: 'Standing armies, imperial expansion, and state diplomacy backed by permanent coercion are rejected in favor of solidarity, non-domination, and local self-defense. Historical anarchist movements have fought in wars and organized armed defense, so the profile is anti-militarist and anti-imperial rather than simply pacifist. Resistance after France’s defeat helped mobilize the Commune; it cannot simply be coded as pacifist.',
        citations: citations(['bakuninStatism', 'kantPerpetualPeace', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'foreignPolicy', 'assembleeCommuneHistory']),
      },
      religion: {
        score: 65,
        label: 'Secular and anti-clerical, with voluntary pluralism',
        explanation: 'No church or religious authority should control public law or impose a sacred hierarchy. Many historical anarchists criticized organized religion, while voluntary faith communities can remain compatible with free association if they do not exercise coercive political authority. The Commune’s church–state separation is a concrete, limited precedent.',
        citations: citations(['bakuninStatism', 'millOnLiberty', 'spinozaPolitical'], ['sepAnarchism', 'sepReligionPolitics', 'assembleeCommuneHistory']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Anarchist communalism is a positive as well as negative political idea. It criticizes the state, capitalism, class rule, patriarchy, imperialism, and other forms of domination, but it also proposes cooperation through mutual aid, common resources, voluntary association, federated communes, and direct participation. “Anarchy” in this context does not mean the absence of all rules; it means that no permanent ruling authority should stand above the people who live under the rules.',
            citations: citations(['bakuninStatism', 'kropotkinMutualAid'], ['sepAnarchism']),
          },
          {
            type: 'paragraph',
            text: 'The profile is narrower than anarchism as a whole. It highlights currents that combine anti-state authority with communal or communist economics and local self-government. It is not anarcho-capitalism, which keeps private property and markets central; it is not every form of anarcho-communism; and it should not treat Bookchin’s later ecological municipalism as identical to the nineteenth-century movements from which it drew.',
            citations: citations(['bakuninStatism', 'kropotkinMutualAid', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'socialEcologyMunicipalism']),
          },
          {
            type: 'paragraph',
            text: 'Paula Cossart’s stated argument challenges a simple lineage from Paris to Bookchin: he criticized the Commune’s centralism, even though later municipalists continue to invoke it. She also distinguishes the elected council from neighborhood assemblies as sites of participation. This is an attributed scholarly interpretation, drawn here from her abstract and opening, not a claim that every practice of 1871 anticipated later communalism.',
            citations: citations([], ['cossartCommuneCommunalism']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'The economic proposal is common access and democratic control rather than private ownership of productive resources or command by a centralized state. Workplaces, land, housing, and essential services may be managed by federated associations, communes, cooperatives, or councils. Kropotkin’s mutual-aid argument supplies one account of cooperation, while Bakunin’s collectivist approach and later communalist proposals show that distribution and coordination remain contested.',
            citations: citations(['bakuninStatism', 'kropotkinMutualAid', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'sepSocialism', 'socialEcologyMunicipalism']),
          },
          {
            type: 'paragraph',
            text: 'The Commune’s declaration of 19 April 1871 proposed extensive local powers, accountable and removable officials, civil liberties, and continued citizen involvement. It also retained a central administration delegated by federated communes, municipal policing, and armed urban defense. Read as a primary programme rather than a record of implementation, it supports accountable federation more directly than a claim that all government or coercion had disappeared.',
            citations: citations([], ['communeDeclarationFrench']),
          },
          {
            type: 'paragraph',
            text: 'Authority is reorganized rather than simply wished away. Assemblies may make decisions, delegates may carry revocable mandates, federations may coordinate across communes, and norms may be enforced through social or restorative practices. These arrangements can be more accountable than a distant state, but they still need procedures for disagreement, expertise, minority protection, conflict resolution, and defense against internal or external domination.',
            citations: citations(['bakuninStatism', 'bookchinLibertarianMunicipalism', 'ostromGoverningCommons'], ['sepAnarchism', 'socialEcologyMunicipalism']),
          },
          {
            type: 'paragraph',
            text: 'Community is not the same as compulsory cultural unity. The profile favors plural association, free experimentation, and solidarity among different communities, but local majorities can also become oppressive. A genuinely anarchist communal arrangement therefore requires safeguards against patriarchy, racism, ableism, exclusion, informal leadership, and the conversion of consensus into pressure to conform.',
            citations: citations(['kropotkinMutualAid', 'millOnLiberty', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'sepSocialism']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Nineteenth century: federalism, collectivism, and anarchist communism',
            text: 'Bakunin and other anarchists criticized both the existing state and the idea that a centralized revolutionary party could emancipate society by ruling on its behalf. Debates within the wider socialist movement concerned collective ownership, workers’ control, federation, organization, violence, and the relationship between individual freedom and communal solidarity.',
            citations: citations(['bakuninStatism', 'marxEngelsManifesto'], ['sepAnarchism', 'sepSocialism']),
          },
          {
            period: '1871: the Paris Commune as a contested reference',
            text: 'The uprising began on 18 March; the council was elected on 26 March, and the Commune was defeated in late May. Its republican, patriotic, and social aspirations arose amid siege and conflict with Versailles. Those circumstances matter: municipal emancipation was attempted through contested institutions under military pressure, not through an already settled stateless order.',
            citations: citations([], ['assembleeCommuneHistory', 'rougerieInternationalCommune']),
          },
          {
            period: '1890s–1910s: Kropotkin and mutual aid',
            text: 'Kropotkin developed an anarchist communist account in which cooperation and mutual aid could support human flourishing without a centralized sovereign. His argument was a political and ethical intervention as well as a claim about social evolution; it should not be read as eliminating conflict, scarcity, competition, or the need for institutions.',
            citations: citations(['kropotkinMutualAid'], ['sepAnarchism']),
          },
          {
            period: '1917–1921: the Makhnovist movement in Ukraine',
            text: 'The Makhnovist movement emerged amid revolution and civil war in Ukraine and is studied as a rural anarchist experiment involving peasant self-organization, military struggle, and attempts at autonomous administration. Its territory, institutions, social composition, and relationship to Ukrainian nationalism and Bolshevik power remain contested; war conditions severely limit what can be inferred about durable civilian governance.',
            citations: citations(['bakuninStatism'], ['makhnoRuralAnarchism', 'sepAnarchism']),
          },
          {
            period: '1936–1939: revolutionary Catalonia and the Spanish Civil War',
            text: 'In parts of Republican Spain, anarchist unions and collectives reorganized workplaces, agriculture, services, and neighborhood life while fighting a civil war. The experiment involved genuine self-management and popular mobilization but also emergency coercion, competing political forces, uneven participation, and military pressure. It is therefore a documented partial experiment, not a pure model.',
            citations: citations(['bakuninStatism', 'kropotkinMutualAid'], ['sepAnarchism']),
          },
          {
            period: 'Late twentieth century to the present: communalism and social ecology',
            text: 'Bookchin’s libertarian municipalism reworked anarchist and communalist themes into a proposal for directly democratic municipalities confederated across regions, with ecology and the critique of hierarchy at its center. This later theory broadens the tradition beyond class ownership and offers a strategy for building institutions through local politics, but it remains a proposal rather than evidence that a stateless communal order already exists.',
            citations: citations(['bookchinLibertarianMunicipalism', 'ostromGoverningCommons'], ['socialEcologyMunicipalism', 'sepAnarchism']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Anarcho-communism',
                distinction: 'Seeks common ownership and free association while rejecting a centralized transitional state and permanent political hierarchy.',
                relation: 'The closest economic and anti-state neighbor, although this entry gives extra attention to communes, federations, and practical governance.',
                citations: citations(['kropotkinMutualAid', 'bakuninStatism'], ['sepAnarchism', 'sepSocialism']),
              },
              {
                label: 'Bakuninist collectivism',
                distinction: 'Emphasizes collective ownership, workers’ association, revolutionary federalism, and distribution connected to work or social contribution.',
                relation: 'A major nineteenth-century foundation, but later anarcho-communists disputed its distribution mechanisms and organizational assumptions.',
                citations: citations(['bakuninStatism'], ['sepAnarchism']),
              },
              {
                label: 'Anarcho-syndicalism',
                distinction: 'Uses labor unions, direct action, and workplace organization as the main route to social transformation and worker self-management.',
                relation: 'Overlaps strongly on anti-state economics but places the revolutionary union at the center rather than the commune alone.',
                citations: citations(['bakuninStatism', 'kropotkinMutualAid'], ['sepAnarchism', 'sepSocialism']),
              },
              {
                label: 'Libertarian municipalism / communalism',
                distinction: 'Builds direct democracy through municipalities and confederations, with social ecology and the abolition of hierarchy as organizing themes.',
                relation: 'A later revision that develops the commune as a political strategy; it should not be projected backward onto every historical anarchist.',
                citations: citations(['bookchinLibertarianMunicipalism'], ['socialEcologyMunicipalism', 'sepAnarchism']),
              },
              {
                label: 'Mutualism',
                distinction: 'Favors reciprocal association and decentralized exchange, often retaining forms of possession, credit, or markets rather than full common ownership.',
                relation: 'A close anti-authoritarian economic neighbor, but less collectivist than this profile’s main emphasis.',
                citations: citations(['bakuninStatism', 'kropotkinMutualAid'], ['sepAnarchism']),
              },
              {
                label: 'Anarcho-capitalism',
                distinction: 'Rejects the state but makes private property, contractual exchange, and market provision central.',
                relation: 'Shares anti-state authority but is the opposite economic pole from anarchist communalism.',
                citations: citations(['bakuninStatism', 'millOnLiberty'], ['sepAnarchism']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'Historical and contemporary examples',
        blocks: [
          {
            type: 'evidence-note',
            text: 'No sovereign state is an exact anarchist-communalist match. The strongest historical examples were local, temporary, internally diverse, and exposed to war or repression. Contemporary autonomous communities may borrow practices from the tradition while still existing inside states and should not be labeled complete equivalents.',
            citations: citations(['bakuninStatism', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'socialEcologyMunicipalism', 'vdem']),
          },
          {
            type: 'people',
            entries: [
              {
                name: 'Mikhail Bakunin',
                role: 'anarchist theorist of federalism, collective ownership, and opposition to centralized revolutionary authority',
                caveat: 'His collectivist and revolutionary arguments are one strand of anarchism and do not settle later debates over communal distribution or organization.',
                citations: citations(['bakuninStatism'], ['sepAnarchism']),
              },
              {
                name: 'Peter Kropotkin',
                role: 'anarchist communist theorist of mutual aid, decentralized association, and common access',
                caveat: 'Mutual aid is a normative and explanatory argument, not evidence that all communities are naturally harmonious or free of conflict.',
                citations: citations(['kropotkinMutualAid'], ['sepAnarchism']),
              },
              {
                name: 'Murray Bookchin',
                role: 'social ecologist and theorist of libertarian municipalism',
                caveat: 'Bookchin’s communalism is a later ecological and municipalist revision, not a synonym for nineteenth-century anarcho-communism.',
                citations: citations(['bookchinLibertarianMunicipalism'], ['socialEcologyMunicipalism', 'sepAnarchism']),
              },
              {
                name: 'Elinor Ostrom',
                role: 'institutional scholar of community governance and polycentric commons',
                caveat: 'Ostrom did not provide a general anarchist programme; her work is included as comparative evidence that common resources can be governed through varied local institutions.',
                citations: citations(['ostromGoverningCommons'], ['sepAnarchism']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'Paris Commune',
                period: 'Paris, 1871',
                match: 'municipal self-government reference',
                caveat: 'A partial institutional comparison, not an exact six-axis match: its federal programme, elected council, and emergency authority must be distinguished. Later anarchist and municipalist readings are interpretations, not proof of a uniform contemporary doctrine.',
                citations: citations([], ['communeDeclarationFrench', 'rougerieInternationalCommune', 'cossartCommuneCommunalism']),
              },
              {
                name: 'Free Territory / Makhnovist movement',
                period: 'Ukraine, 1918–1921',
                match: 'rural anarchist and peasant self-organization reference',
                caveat: 'The movement operated under civil-war conditions, its social and political institutions were contested, and it was ultimately defeated by superior state forces.',
                citations: citations(['bakuninStatism'], ['makhnoRuralAnarchism', 'sepAnarchism']),
              },
              {
                name: 'Revolutionary Catalonia',
                period: 'Catalonia and parts of Republican Spain, 1936–1939',
                match: 'workplace and community collectivization reference',
                caveat: 'Collectives varied by place and sector and operated amid civil war, competing political authorities, and military scarcity; the case is not a pure or stable stateless model.',
                citations: citations(['bakuninStatism', 'kropotkinMutualAid'], ['sepAnarchism']),
              },
              {
                name: 'Autonomous communes and municipalist projects',
                period: 'contemporary, case-specific research required',
                match: 'practice-level comparison only',
                caveat: 'Local autonomy, cooperatives, commons, and assemblies may use anarchist practices while remaining legally and materially dependent on states; each project requires its own evidence.',
                citations: citations(['bookchinLibertarianMunicipalism', 'ostromGoverningCommons'], ['socialEcologyMunicipalism', 'sepAnarchism']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'anarcho-communist', relation: 'closest named sub-ideology emphasizing stateless common ownership and free association' },
              { id: 'libertarian-socialist', relation: 'broader anti-authoritarian socialist family that may retain more varied views on markets, unions, and the state' },
              { id: 'democratic-socialist', relation: 'shares economic equality and worker power but accepts a democratic state as a central instrument' },
              { id: 'anarcho-capitalist', relation: 'shares anti-state authority but reverses the economic emphasis toward private property and markets' },
              { id: 'green-commons', relation: 'shares local commons and ecological governance, with less insistence on abolishing the state or capitalism' },
              { id: 'authoritarian-collectivist', relation: 'shares collectivist economics but is its authority opposite: decentralized, anti-party, and anti-state' },
              { id: 'anarcho-syndicalism', relation: 'overlaps on direct action and worker organization, with unions rather than communes as the primary institutional vehicle' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'Critics argue that anarchist communalism under-specifies large-scale coordination. Health systems, transport, energy, ecological limits, disaster response, defense, and complex supply chains may require decisions across many communities, and federations can become centralized in practice. Supporters answer that polycentric institutions, delegated coordination, transparent mandates, and recall can provide scale without creating a permanent sovereign authority.',
            citations: citations(['bookchinLibertarianMunicipalism', 'ostromGoverningCommons', 'bakuninStatism'], ['socialEcologyMunicipalism', 'sepAnarchism']),
          },
          {
            type: 'paragraph',
            text: 'A second criticism concerns informal power. Even without formal offices, charismatic leaders, armed groups, technical experts, wealthier associations, gender norms, or majority pressure can dominate others. A serious communalist model therefore needs explicit safeguards for minority rights, exit, dissent, accessibility, gender equality, anti-racism, conflict resolution, and transparent control over force and essential resources.',
            citations: citations(['millOnLiberty', 'kropotkinMutualAid', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'sepSocialism']),
          },
          {
            type: 'paragraph',
            text: 'Rougerie’s analysis of the 1 May Committee of Public Safety vote cautions against dividing the Commune into a uniformly libertarian International and an authoritarian remainder. International members voted on both sides; support for French federation could coexist with support for emergency centralization. The disagreement concerned executive control as well as doctrine. Later divisions among exiles should not be projected mechanically onto these wartime alignments.',
            citations: citations([], ['rougerieInternationalCommune']),
          },
          {
            type: 'paragraph',
            text: 'Historical experiments also warn against romanticization. War, repression, scarcity, internal conflict, and the need for armed defense shaped Ukraine and Spain, while the Paris Commune’s short duration limits the evidence available. These cases demonstrate political imagination and institutional experimentation, but they cannot by themselves prove that a durable stateless communal order is feasible in every context.',
            citations: citations(['bakuninStatism', 'kropotkinMutualAid'], ['sepAnarchism', 'makhnoRuralAnarchism']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['bakuninStatism', 'kropotkinMutualAid', 'bookchinLibertarianMunicipalism', 'ostromGoverningCommons', 'millOnLiberty', 'spinozaPolitical', 'kantPerpetualPeace', 'andersonImaginedCommunities', 'marxEngelsManifesto'],
      researchSourceIds: ['sepAnarchism', 'socialEcologyMunicipalism', 'makhnoRuralAnarchism', 'sepSocialism', 'sepReligionPolitics', 'vdem', 'foreignPolicy', 'communeDeclarationFrench', 'rougerieInternationalCommune', 'cossartCommuneCommunalism', 'assembleeCommuneHistory'],
      editorialNote: 'The entry distinguishes anti-authoritarian communalism from anarcho-capitalism, democratic socialism, and later libertarian municipalism. Scores describe a didactic reference profile; the historical examples are partial, local, temporary, and contested rather than country-level matches. The 1871 programme is primary evidence; Rougerie and Cossart supply attributed interpretations. French passages are paraphrased, not quoted or presented as verified translations; consulted sections and access limits are recorded in the bibliography.',
    },
    researchGaps: [
      'Add German-, French-, Spanish-, Ukrainian-, Italian-, and Portuguese-language scholarship on anarchist federations, syndicalism, communes, and the history of translation across movements.',
      'Add specialist histories of the Paris Commune, Makhnovist movement, Revolutionary Catalonia, Mujeres Libres, and the civilian institutions of wartime collectivization.',
      'Extend the Paris evidence beyond the April programme and Rougerie’s selected pages: examine local participation, women’s political exclusion and agency, implementation of labor reforms, and emergency powers. Review Cossart’s complete article and the Bookchin texts she discusses before expanding the reception claim.',
      'Add comparative institutional research on federation, consensus, delegated authority, commons governance, public goods, health, infrastructure, ecological limits, and defense without a sovereign state.',
      'Add country- and project-specific evidence before listing any contemporary autonomous community, cooperative, municipalist platform, or commons as a living match.',
      'Add research on gender, race, colonialism, disability, migration, informal hierarchy, conflict resolution, and the risk that anti-state structures reproduce coercion through armed or social power.',
    ],
  },
  'green-commons': {
    id: 'green-commons',
    title: 'Green commons / ecological pluralist',
    canonicalLabel: 'Green commons / ecological pluralist',
    aliases: ['green politics', 'ecological pluralism', 'social ecology', 'commons ecology', 'green municipalism'],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'This profile combines ecological limits and environmental justice with commons governance, local participation, and plural institutions. It is not a synonym for every green party, conservationism, deep ecology, eco-socialism, sustainable development, or any one policy such as carbon taxation. “Commons” refers to shared resources and the institutions that govern them, not to an absence of rules or automatically communal ownership.',
    timeScope: 'Roots in conservation, ecological ethics, cooperative and commons traditions; major development through twentieth-century environmental movements, social ecology, and commons research; contemporary climate, biodiversity, and environmental-justice politics.',
    geographicScope: 'Transnational and place-sensitive tradition with important European, North American, Indigenous, South Asian, African, and Latin American debates; ecological risks and governance arrangements vary by ecosystem, community, and scale.',
    summary: 'An ecological political profile that treats climate stability, biodiversity, shared resources, human capabilities, and intergenerational justice as public concerns, while favoring cooperative, municipal, and polycentric institutions over a simple market-versus-central-state choice. Its economic position is mixed and context-dependent: markets may remain, but essential resources and ecological systems require collective rules when private incentives or national governments fail to protect them.',
    summaryCitations: citations(['ostromGoverningCommons', 'bookchinLibertarianMunicipalism', 'senDevelopmentFreedom', 'millOnLiberty'], ['sepEnvironmentalEthics', 'sepClimateJustice', 'ipccAr6Synthesis', 'socialEcologyMunicipalism']),
    dimensionInterpretations: {
      economic: {
        score: 45,
        label: 'Mixed economy with commons priorities',
        explanation: 'Markets can coordinate some activities, but ecological systems, water, land, energy, care, and other essential resources may require public, cooperative, or commons institutions. The profile does not prescribe one ownership form: the relevant question is which arrangement protects ecological function, equitable access, accountability, and long-term resilience in the specific context. The Chico Mendes reserve’s founding decree illustrates why use rights and land ownership must be distinguished.',
        citations: citations(['ostromGoverningCommons', 'senDevelopmentFreedom', 'bookchinLibertarianMunicipalism'], ['sepEnvironmentalEthics', 'ipccAr6Synthesis', 'socialEcologyMunicipalism', 'chicoMendesCreationDecree']),
      },
      social: {
        score: 62,
        label: 'Progressive and environmentally just',
        explanation: 'Environmental burdens and benefits are treated as questions of justice, including unequal exposure, health, livelihood, gender, race, class, disability, and responsibilities to future generations. Green politics is not one fixed cultural programme, but this profile generally favors inclusion, participation, and protection of vulnerable communities. Agarwal’s forestry research warns that formally participatory groups can still exclude women from influence.',
        citations: citations(['senDevelopmentFreedom', 'millOnLiberty', 'bookchinLibertarianMunicipalism'], ['sepClimateJustice', 'sepEnvironmentalEthics', 'ipccAr6Synthesis', 'agarwalParticipatoryExclusions']),
      },
      authority: {
        score: -30,
        label: 'Polycentric and participatory',
        explanation: 'Communities, municipalities, regions, states, and international institutions may all have legitimate roles, provided affected people can participate, monitor decisions, and revise rules. Ecological urgency can justify capable public action, but the profile is suspicious of a single command center and of technocratic decisions insulated from public accountability. The 1990 reserve decree retained executive responsibilities alongside resident use rights; community stewardship is not automatically stateless governance.',
        citations: citations(['ostromGoverningCommons', 'bookchinLibertarianMunicipalism', 'millOnLiberty'], ['socialEcologyMunicipalism', 'sepEnvironmentalEthics', 'vdem', 'chicoMendesCreationDecree']),
      },
      identity: {
        score: 45,
        label: 'Global ecological responsibility with local stewardship',
        explanation: 'Climate, biodiversity, oceans, and atmospheric systems cross borders, giving international and intergenerational responsibility a strong role. At the same time, place-based knowledge, local livelihoods, and community stewardship matter; ecological universalism should not erase Indigenous sovereignty, local difference, or democratic self-government.',
        citations: citations(['ostromGoverningCommons', 'senDevelopmentFreedom', 'kantPerpetualPeace'], ['ipccAr6Synthesis', 'sepClimateJustice', 'sepEnvironmentalEthics']),
      },
      foreign: {
        score: 35,
        label: 'Cooperative restraint',
        explanation: 'International cooperation, climate finance, ecological agreements, disaster response, and nonviolent conflict prevention are preferred to militarized competition. Security questions remain real, and collective action or protective force may be debated in humanitarian or defensive situations; ecological politics is not automatically pacifist.',
        citations: citations(['kantPerpetualPeace', 'morgenthauRealism', 'ostromGoverningCommons'], ['ipccAr6Synthesis', 'sepClimateJustice', 'foreignPolicy']),
      },
      religion: {
        score: 15,
        label: 'Secular-leaning pluralist',
        explanation: 'Public ecological policy is generally justified through shared evidence, equal citizenship, and public reasoning rather than one religious authority. Religious, Indigenous, and spiritual ecological ethics may contribute to democratic discussion, but no single worldview should monopolize coercive public law.',
        citations: citations(['millOnLiberty', 'lockeLetterToleration', 'ostromGoverningCommons'], ['sepEnvironmentalEthics', 'sepReligionPolitics']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Green commons politics starts from two linked observations: ecological systems set material conditions for human life, and those systems are governed through institutions that distribute risks, benefits, access, and responsibility. Climate change, biodiversity loss, pollution, water insecurity, and resource depletion are therefore not only technical problems. They raise questions about property, power, justice, participation, knowledge, and obligations to people who are distant in space or time.',
            citations: citations(['ostromGoverningCommons', 'senDevelopmentFreedom'], ['sepEnvironmentalEthics', 'sepClimateJustice', 'ipccAr6Synthesis']),
          },
          {
            type: 'paragraph',
            text: 'The commons element rejects a simple binary in which all resources must be either privately owned or centrally administered. Ostrom’s institutional research shows that communities can develop varied rules for common-pool resources, while Bookchin’s social ecology and municipalism offer a more explicitly political proposal for participatory, confederal, and ecologically conscious self-government. Neither body of work proves that one universal commons model will work everywhere.',
            citations: citations(['ostromGoverningCommons', 'bookchinLibertarianMunicipalism'], ['socialEcologyMunicipalism', 'sepEnvironmentalEthics']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'A green-commons approach asks who uses a resource, who bears the costs of its depletion, who has knowledge of local conditions, who can monitor behavior, and how rules can be changed when conditions change. It may support community forests, cooperative energy, public transit, watershed institutions, municipal ownership, regulated markets, or national and international standards. The choice is institutional and empirical, not determined by the word green alone.',
            citations: citations(['ostromGoverningCommons', 'senDevelopmentFreedom'], ['sepEnvironmentalEthics', 'ipccAr6Synthesis']),
          },
          {
            type: 'paragraph',
            text: 'Brazil’s 1990 decree creating the Chico Mendes Extractive Reserve placed it within IBAMA and provided for land acquisition and concessions of use rights to the resident extractive population. It assigned continuing responsibilities to the executive and declared ecological and social purposes. This is primary evidence of an institutional design, not proof that its aims were achieved or a description of the reserve’s current condition.',
            citations: citations([], ['chicoMendesCreationDecree']),
          },
          {
            type: 'paragraph',
            text: 'Environmental justice adds distribution and recognition to ecological policy. A transition can reduce emissions while imposing new costs on workers, low-income households, rural communities, Indigenous peoples, migrants, or regions that contributed little to the problem. Green politics therefore has to address compensation, participation, historical responsibility, access to energy and mobility, and the social effects of adaptation and mitigation.',
            citations: citations(['senDevelopmentFreedom', 'millOnLiberty'], ['sepClimateJustice', 'ipccAr6Synthesis']),
          },
          {
            type: 'paragraph',
            text: 'The profile is pluralist about knowledge and governance. Scientific assessment is indispensable for climate and ecological risk, but local, Indigenous, occupational, and community knowledge can identify impacts and workable institutions that a centralized model misses. Participation is not a substitute for expertise, and expertise is not a substitute for democratic accountability.',
            citations: citations(['ostromGoverningCommons', 'senDevelopmentFreedom'], ['ipccAr6Synthesis', 'sepEnvironmentalEthics', 'socialEcologyMunicipalism']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Nineteenth and early twentieth centuries: conservation, commons, and social reform',
            text: 'Industrialization, urban pollution, enclosure conflicts, public-health crises, conservation movements, and cooperative traditions created several foundations for later green politics. These traditions did not share one ideology: some emphasized preservation, some public health, some rural livelihoods, and some social transformation. Their common lesson was that ecological and material conditions could not be treated as purely private concerns.',
            citations: citations(['adamSmithWealth', 'millOnLiberty', 'senDevelopmentFreedom'], ['sepEnvironmentalEthics']),
          },
          {
            period: '1960s–1970s: environmental movements and limits to growth',
            text: 'Modern environmental movements made pollution, nuclear risk, industrial agriculture, population, resource depletion, and ecological limits central political issues. The period also produced disagreements between technocratic management, local activism, conservation, anti-capitalist ecology, and movements for environmental justice. A green-commons profile retains the ecological urgency without assuming that every scarcity claim or centralized solution is correct.',
            citations: citations(['millOnLiberty'], ['sepEnvironmentalEthics', 'openTextbook']),
          },
          {
            period: '1968–2009: the tragedy debate and commons research',
            text: 'Garrett Hardin’s tragedy-of-the-commons argument became a major warning about unregulated shared-resource use. Ostrom’s comparative institutional research challenged the assumption that privatization or central state control are the only remedies, documenting diverse community, public, and private arrangements with different outcomes. The resulting lesson is not that commons always succeed, but that institutional design and local conditions matter.',
            citations: citations(['ostromGoverningCommons'], ['sepEnvironmentalEthics']),
          },
          {
            period: '1960s–1990s: social ecology and libertarian municipalism',
            text: 'Murray Bookchin connected ecological crisis to hierarchy, domination, urban design, and the organization of society. His libertarian municipalism proposed directly democratic municipalities linked through confederations, with ecological citizenship and the transformation of political institutions at the center. This is a distinct normative strategy, not a neutral description of all environmental movements or a synonym for Ostrom’s empirical institutional analysis.',
            citations: citations(['bookchinLibertarianMunicipalism'], ['socialEcologyMunicipalism', 'sepEnvironmentalEthics']),
          },
          {
            period: '1985–1990: Brazilian rubber tappers and extractive reserves',
            text: 'Mary Allegretti traces the reserve proposal to rubber tappers’ struggles over land and forest livelihoods, including the 1985 national meeting and Chico Mendes’s leadership. Her account links agrarian demands to conservation policy rather than portraying residents as obstacles to nature protection. The decree of 12 March 1990 established the reserve bearing his name in Acre.',
            citations: citations([], ['allegrettiSeringueiros', 'chicoMendesCreationDecree']),
          },
          {
            period: 'Late twentieth century to the present: climate justice and polycentric action',
            text: 'Climate politics linked local environmental harm to global atmospheric processes, historical emissions, development inequality, migration, health, and intergenerational justice. International agreements, national laws, cities, firms, communities, and social movements now interact in mitigation and adaptation. The IPCC identifies escalating risks and the need for rapid, integrated, and equitable action, but it does not prescribe one political ideology or ownership system.',
            citations: citations(['senDevelopmentFreedom', 'ostromGoverningCommons', 'kantPerpetualPeace'], ['ipccAr6Synthesis', 'sepClimateJustice', 'sepEnvironmentalEthics']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Commons institutionalism',
                distinction: 'Studies how communities and other institutions govern shared resources through monitoring, graduated rules, conflict resolution, and nested arrangements.',
                relation: 'Closest to Ostrom’s empirical approach; it does not require anti-capitalism, anarchism, or one universal ownership form.',
                citations: citations(['ostromGoverningCommons'], ['sepEnvironmentalEthics']),
              },
              {
                label: 'Social ecology and communalism',
                distinction: 'Connects ecological crisis to social hierarchy and proposes participatory municipalities, confederations, and ecological citizenship.',
                relation: 'More explicitly transformative and anti-hierarchical than commons institutionalism, and more politically prescriptive than a scientific risk assessment.',
                citations: citations(['bookchinLibertarianMunicipalism'], ['socialEcologyMunicipalism', 'sepEnvironmentalEthics']),
              },
              {
                label: 'Green liberalism',
                distinction: 'Uses rights, markets, regulation, environmental taxation, public goods, and constitutional institutions to protect ecological conditions and individual opportunity.',
                relation: 'Shares pluralism and public reasoning but may accept more private ownership and centralized regulation than the commons emphasis here.',
                citations: citations(['millOnLiberty', 'senDevelopmentFreedom'], ['sepEnvironmentalEthics', 'sepClimateJustice']),
              },
              {
                label: 'Eco-socialism',
                distinction: 'Treats capitalist ownership, accumulation, and class power as central causes of ecological crisis and seeks stronger social or public control of production.',
                relation: 'Overlaps on ecological justice and economic transformation but is more ownership-transforming than every green-commons position.',
                citations: citations(['senDevelopmentFreedom'], ['sepEnvironmentalEthics', 'sepSocialism']),
              },
              {
                label: 'Conservationism and preservationism',
                distinction: 'Prioritizes protection of species, landscapes, wilderness, or ecological function, sometimes with less emphasis on economic equality or local democratic control.',
                relation: 'Shares ecological concern but can conflict with livelihood, access, Indigenous sovereignty, or environmental-justice claims.',
                citations: citations(['millOnLiberty'], ['sepEnvironmentalEthics', 'sepClimateJustice']),
              },
              {
                label: 'Deep ecology and ecocentrism',
                distinction: 'Gives nonhuman nature or ecological wholes intrinsic moral standing beyond human utility.',
                relation: 'Can enrich green ethics, but the green-commons profile remains institutionally pluralist and does not require one metaphysical account of nature’s value.',
                citations: citations(['millOnLiberty'], ['sepEnvironmentalEthics']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'Historical and contemporary examples',
        blocks: [
          {
            type: 'evidence-note',
            text: 'No country is an exact or permanent green-commons match. Ecological policy is distributed across communities, municipalities, markets, states, international institutions, and social movements. A country with strong climate policy can still have extractive or unequal institutions, while a local commons can be ecologically valuable without constituting a complete political system.',
            citations: citations(['ostromGoverningCommons', 'bookchinLibertarianMunicipalism', 'senDevelopmentFreedom'], ['ipccAr6Synthesis', 'sepEnvironmentalEthics', 'sepClimateJustice']),
          },
          {
            type: 'people',
            entries: [
              {
                name: 'Elinor Ostrom',
                role: 'institutional scholar of common-pool resources and polycentric governance',
                caveat: 'Ostrom documented diverse institutional outcomes and did not prescribe a single anarchist, socialist, or green political programme.',
                citations: citations(['ostromGoverningCommons'], ['sepEnvironmentalEthics']),
              },
              {
                name: 'Chico Mendes',
                role: 'rubber-tapper and union leader whose movement connected forest livelihoods, land rights, and environmental protection',
                caveat: 'A documented historical reference for this intersection, not evidence that his views matched all six coordinates or that he used this website’s composite label.',
                citations: citations([], ['allegrettiSeringueiros']),
              },
              {
                name: 'Murray Bookchin',
                role: 'social ecologist and theorist of libertarian municipalism',
                caveat: 'His proposal is a normative communalist strategy and should not be treated as an empirical finding about every municipality or environmental movement.',
                citations: citations(['bookchinLibertarianMunicipalism'], ['socialEcologyMunicipalism']),
              },
              {
                name: 'Amartya Sen',
                role: 'capability theorist linking substantive freedom, public reasoning, and development',
                caveat: 'Sen’s capability approach supports an environmental-justice reading but does not define a single green ownership model.',
                citations: citations(['senDevelopmentFreedom'], ['sepClimateJustice', 'sepEnvironmentalEthics']),
              },
              {
                name: 'John Stuart Mill',
                role: 'liberal influence on individuality, limits on coercion, and social reform',
                caveat: 'Mill is an intellectual neighbor rather than a modern environmental theorist; his inclusion does not turn classical liberalism into green politics.',
                citations: citations(['millOnLiberty'], ['sepEnvironmentalEthics']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'Community-managed commons',
                period: 'historical and contemporary, case-specific',
                match: 'institutional practice-level resemblance',
                caveat: 'Commons differ by resource, rule system, social membership, enforcement, and ecological outcome; “common” does not mean open access or absence of exclusion rules.',
                citations: citations(['ostromGoverningCommons'], ['sepEnvironmentalEthics']),
              },
              {
                name: 'Municipal and cooperative ecological projects',
                period: 'contemporary, case-specific',
                match: 'partial green-commons resemblance',
                caveat: 'Community energy, transit, food, housing, watershed, and land projects may be green-commons practices while remaining dependent on state law, finance, or wider markets.',
                citations: citations(['ostromGoverningCommons', 'bookchinLibertarianMunicipalism'], ['socialEcologyMunicipalism', 'ipccAr6Synthesis']),
              },
              {
                name: 'Climate-justice movements and local adaptation',
                period: 'late twentieth century to present',
                match: 'movement-level and policy-level comparison',
                caveat: 'Movements differ over mitigation, adaptation, development, technology, compensation, and political strategy; ecological concern does not yield one party platform.',
                citations: citations(['senDevelopmentFreedom'], ['sepClimateJustice', 'ipccAr6Synthesis']),
              },
              {
                name: 'Denmark, the Netherlands, and Sweden',
                period: 'undated research candidates',
                match: 'not yet validated as country-level comparators',
                caveat: 'Retained only as research leads. The general climate and political-theory sources below do not establish a dated national green-commons match; specific ecological, distributional, and governance evidence is still required.',
                citations: citations(['ostromGoverningCommons', 'senDevelopmentFreedom'], ['ipccAr6Synthesis', 'sepClimateJustice', 'vdem']),
              },
              {
                name: 'Chico Mendes Extractive Reserve — Acre, Brazil',
                period: 'founding design, 1990; historical analysis published in 2008',
                match: 'bounded example of community use rights within public environmental institutions',
                caveat: 'Neither a national ideology nor proof of ecological success. Assessment today requires dated evidence on resident participation, livelihoods, enforcement, and forest outcomes.',
                citations: citations([], ['chicoMendesCreationDecree', 'allegrettiSeringueiros']),
              },
              {
                name: 'Community forestry groups studied in India and Nepal',
                period: '1998–1999 fieldwork; study published in 2001',
                match: 'comparative evidence about participation and exclusion',
                caveat: 'Agarwal’s 87-site study is not a national ideological classification. Its institutional comparisons should not be transferred mechanically to Brazil or to all present-day forest communities.',
                citations: citations([], ['agarwalParticipatoryExclusions']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'anarchist-communalist', relation: 'shares local common ownership and anti-hierarchical participation, but this profile accepts more varied state and market roles' },
              { id: 'democratic-socialist', relation: 'shares public provision and economic democracy, with a stronger focus here on ecological limits and polycentric governance' },
              { id: 'progressive-liberal', relation: 'shares social inclusion and public action but is not necessarily commons-oriented or ecologically foundational' },
              { id: 'social-democratic', relation: 'can share welfare and public services, but ecological transformation is more central to this profile' },
              { id: 'libertarian-market', relation: 'may share skepticism of centralized power but differs sharply over commons, regulation, externalities, and collective provision' },
              { id: 'anti-colonial-liberation', relation: 'overlaps on environmental justice, extraction, sovereignty, and unequal historical responsibility' },
              { id: 'religious-socialist', relation: 'may share stewardship, solidarity, and social justice, while differing over religious grounding of public ethics' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'Critics argue that localism and polycentricity can fragment responsibility. Climate systems, energy grids, supply chains, migration, and biodiversity cross local borders, and communities may lack the resources or authority to act. Supporters answer that multiple levels can coordinate when rules are nested, information is shared, responsibilities are clear, and higher-level institutions support rather than erase local capacity.',
            citations: citations(['ostromGoverningCommons', 'bookchinLibertarianMunicipalism'], ['socialEcologyMunicipalism', 'ipccAr6Synthesis']),
          },
          {
            type: 'paragraph',
            text: 'A second criticism concerns ecological paternalism and expertise. Urgent risk can be used to justify surveillance, exclusion, technocracy, forced displacement, or austerity that falls disproportionately on vulnerable groups. Environmental policy needs evidence and enforceable standards, but it also needs procedural justice, accessible participation, compensation, rights protection, and democratic review.',
            citations: citations(['senDevelopmentFreedom', 'millOnLiberty'], ['sepClimateJustice', 'sepEnvironmentalEthics', 'ipccAr6Synthesis']),
          },
          {
            type: 'paragraph',
            text: 'Agarwal distinguishes being enrolled, attending meetings, or being consulted from actually shaping collective decisions. Her South Asian forestry analysis treats exclusion as a problem of rules, social norms, and unequal bargaining power, not merely low attendance. For this profile, the practical question is therefore who can influence decisions and contest burdens. Even stronger participation does not by itself remove pre-existing inequalities or guarantee ecological success.',
            citations: citations([], ['agarwalParticipatoryExclusions']),
          },
          {
            type: 'paragraph',
            text: 'Finally, green politics can hide trade-offs behind moral language. Renewable infrastructure can require land and minerals; conservation can conflict with livelihoods; carbon policies can be regressive; local knowledge can also be exclusionary; and technological solutions can create new dependencies. The profile should therefore distinguish scientific findings, ethical commitments, institutional proposals, and unresolved value conflicts.',
            citations: citations(['ostromGoverningCommons', 'senDevelopmentFreedom'], ['ipccAr6Synthesis', 'sepEnvironmentalEthics', 'sepClimateJustice']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['ostromGoverningCommons', 'bookchinLibertarianMunicipalism', 'senDevelopmentFreedom', 'millOnLiberty', 'lockeLetterToleration', 'kantPerpetualPeace', 'morgenthauRealism'],
      researchSourceIds: ['sepEnvironmentalEthics', 'sepClimateJustice', 'ipccAr6Synthesis', 'socialEcologyMunicipalism', 'sepAnarchism', 'sepSocialism', 'openTextbook', 'vdem', 'foreignPolicy', 'allegrettiSeringueiros', 'chicoMendesCreationDecree', 'agarwalParticipatoryExclusions'],
      editorialNote: 'The entry distinguishes commons governance, social ecology, green liberalism, eco-socialism, conservationism, and deep ecology. Scores describe a didactic ecological-pluralist profile, not every green party, environmental movement, country, or community institution. The Brazilian decree documents historical design; Allegretti supplies historical interpretation, and Agarwal supplies comparative participation research. Neither establishes current reserve conditions or a country-level match. Portuguese material is independently paraphrased, not offered as a verified translation; reviewed pages and rights limits are recorded in the bibliography.',
    },
    researchGaps: [
      'Add German-, French-, Portuguese-, Spanish-, South Asian-, African-, and Indigenous scholarship on environmental justice, commons, conservation, social ecology, and ecological democracy.',
      'Add detailed case studies of forests, fisheries, water, energy, food, housing, transit, and digital commons, including failure, exclusion, and ecological outcomes rather than only successful examples.',
      'Add country-specific climate, biodiversity, energy, and distributional evidence before ranking Denmark, the Netherlands, Sweden, or other states as green-commons comparators.',
      'Update the Chico Mendes case with resident-led and independent evidence on tenure implementation, livelihoods, gender, land-use pressures, and ecological outcomes. Extend the selected-page Agarwal review before generalizing the participation framework; historical design is not a current success rating.',
      'Add specialist research on climate finance, colonial extraction, Indigenous sovereignty, migration, disability, gender, labor transitions, critical minerals, agriculture, and urban adaptation.',
      'Add comparative work on the scale limits of localism, the role of national and international authority, technological governance, geoengineering, and democratic safeguards during ecological emergencies.',
    ],
  },
  'religious-traditionalist': {
    id: 'religious-traditionalist',
    title: 'Religious traditionalist',
    canonicalLabel: 'Religious traditionalist',
    aliases: ['religious conservatism', 'faith-informed traditionalism', 'confessional traditionalism', 'sacral political order'],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'This profile describes political views that give inherited religious or sacred moral traditions a significant public role in law, education, family policy, authority, and social order. It is a comparative analytical category, not a description of one religion, denomination, country, or level of private belief; religious traditionalists may support constitutional pluralism, confessional privilege, religious nationalism, or clerical rule.',
    timeScope: 'Ancient and medieval religious-legal traditions; early modern confessional states and toleration debates; nineteenth-century religious conservatism and social movements; twentieth-century Christian democracy and contemporary religious-national or faith-informed politics.',
    geographicScope: 'Cross-civilizational profile including Christian, Islamic, Jewish, Hindu, Buddhist, and other religious-political traditions; concepts of revelation, law, community, kingship, clergy, and tradition differ substantially across contexts.',
    summary: 'A traditionalist profile that treats inherited religious morality, family and community institutions, social continuity, and public order as politically important, often giving religious reasoning a formal or informal role in public law. Its economic policy is flexible, ranging from markets and private property to welfare, distributism, or state direction; its decisive questions concern public religious authority, pluralism, minority rights, and the limits of coercive moral legislation.',
    summaryCitations: citations(['aquinasMoralPolitical', 'burkeReflections', 'hobbesLeviathan', 'lockeLetterToleration'], ['sepReligionPolitics', 'sepMedieval', 'oxfordChristianDemocracy', 'sepConservatism']),
    dimensionInterpretations: {
      economic: {
        score: 5,
        label: 'Economically variable and communitarian',
        explanation: 'Religious traditionalism does not specify one ownership model. It may defend property and markets, support social insurance and family provision, favor distributist or cooperative ownership, or accept state direction when economic order is judged necessary for the common good. Economic positions should therefore be measured separately from religious authority.',
        citations: citations(['aquinasMoralPolitical', 'burkeReflections', 'adamSmithWealth'], ['sepReligionPolitics', 'oxfordChristianDemocracy', 'sepConservatism']),
      },
      social: {
        score: -78,
        label: 'Strongly traditionalist',
        explanation: 'Inherited family structures, religious practice, authority, sexual morality, gender roles, ritual, and communal obligations are treated as stabilizing or morally authoritative. Different traditions support different reforms and degrees of tolerance, so a traditionalist social orientation does not automatically imply identical policies or hostility to every change.',
        citations: citations(['aquinasMoralPolitical', 'burkeReflections', 'hobbesLeviathan'], ['sepReligionPolitics', 'sepConservatism', 'openTextbook']),
      },
      authority: {
        score: 70,
        label: 'Order-oriented and authority-affirming',
        explanation: 'Moral, familial, religious, and political authority receive substantial weight, especially when disorder or moral decline is perceived. Constitutional limits, natural law, customary rights, and institutional checks may still be accepted. This illustrative score does not measure believers: Dignitatis humanae §2 protects conscience against human coercion.',
        citations: citations(['aquinasMoralPolitical', 'hobbesLeviathan', 'burkeReflections'], ['sepReligionPolitics', 'sepMedieval', 'vdem', 'vaticanReligiousFreedomFrench']),
      },
      identity: {
        score: -10,
        label: 'National or civilizational traditionalism',
        explanation: 'Religious inheritance may be joined to national history, family memory, civilizational identity, or a shared moral community. This can be civic and pluralist or exclusionary and ethnoreligious; religious tradition alone does not determine the boundary, so membership and equal citizenship must be examined separately.',
        citations: citations(['burkeReflections', 'renanNation', 'aquinasMoralPolitical'], ['sepReligionPolitics', 'sepConservatism', 'openTextbook']),
      },
      foreign: {
        score: -5,
        label: 'Defensive and morally engaged',
        explanation: 'Defense of the community, protection of religious populations, civilizational solidarity, and preservation of order can justify an active foreign policy. Other religious traditionalists favor restraint, diplomacy, or just-war limits; the profile is not inherently expansionist and should not be confused with militarism.',
        citations: citations(['aquinasMoralPolitical', 'hobbesLeviathan', 'morgenthauRealism'], ['sepReligionPolitics', 'foreignPolicy']),
      },
      religion: {
        score: -78,
        label: 'Strongly religiously grounded',
        explanation: 'Religious revelation, natural law, clerical teaching, sacred tradition, or a confessional moral order is expected to shape public institutions and law to a substantial degree. The range extends from religious inspiration within pluralist constitutionalism to formal establishment; the high-authority endpoint is a theocracy, not the whole category. Public religious ethics and governmental power to compel belief must be evaluated separately.',
        citations: citations(['aquinasMoralPolitical', 'lockeLetterToleration', 'spinozaPolitical'], ['sepReligionPolitics', 'sepMedieval', 'oxfordChristianDemocracy', 'vaticanReligiousFreedomFrench']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Religious traditionalism treats inherited religious and moral practices as sources of political knowledge, social cohesion, and limits on individual or governmental action. It commonly gives special weight to family, community, ritual, moral education, and the authority of religious institutions. The key analytical question is not whether a person is religious, but whether religion or sacred tradition should help define public law and legitimate political authority.',
            citations: citations(['aquinasMoralPolitical', 'burkeReflections', 'lockeLetterToleration'], ['sepReligionPolitics', 'sepConservatism']),
          },
          {
            type: 'paragraph',
            text: 'The label covers a wide range. A religiously informed constitutionalist may protect freedom of conscience and equal citizenship while drawing policy from religious ethics. A confessional state may privilege one tradition. A religious nationalist may define belonging through faith and ancestry. A theocracy gives clerical or revealed authority a constitutive role in coercive law. These positions overlap, but they must not be collapsed into one spectrum point or one religion.',
            citations: citations(['aquinasMoralPolitical', 'lockeLetterToleration', 'spinozaPolitical'], ['sepReligionPolitics', 'sepMedieval', 'oxfordChristianDemocracy']),
          },
          {
            type: 'evidence-note',
            text: 'The Catholic case below tests this category’s boundaries, not the character of every religion or Catholic. Primary doctrine, scholarly interpretation, and this site’s illustrative coordinates are different evidence types. French versions inform original English paraphrases, not verified translations.',
            citations: citations([], ['leoImmortaleDeiFrench', 'vaticanReligiousFreedomFrench', 'portierEpiscopateFreedom']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'The social vision is usually organic and intergenerational. Persons are understood through families, congregations, communities, duties, and inherited practices rather than only as isolated rights-bearers. This can support solidarity, charity, education, care, and limits on market power, but it can also justify hierarchy, gender subordination, exclusion, or coercive conformity when one tradition is treated as the only legitimate public morality.',
            citations: citations(['aquinasMoralPolitical', 'burkeReflections', 'hobbesLeviathan'], ['sepReligionPolitics', 'sepConservatism', 'openTextbook']),
          },
          {
            type: 'paragraph',
            text: 'Economically, the profile is deliberately open. Religious traditionalists have defended private property, markets, guilds, welfare, distributism, social insurance, public authority, and forms of economic stewardship. The common concern is usually moral order and the protection of households and communities, not a single answer to who should own every productive resource.',
            citations: citations(['aquinasMoralPolitical', 'burkeReflections', 'adamSmithWealth'], ['oxfordChristianDemocracy', 'sepConservatism']),
          },
          {
            type: 'paragraph',
            text: 'Authority is legitimate when it serves a moral common good, preserves peace, or remains within a lawful and customary order. This may produce a layered view in which family, church, community, and state have different jurisdictions, as in some natural-law traditions. It can also create conflicts over which institution interprets truth, who may dissent, and whether civil law must follow religious doctrine.',
            citations: citations(['aquinasMoralPolitical', 'hobbesLeviathan', 'lockeLetterToleration'], ['sepReligionPolitics', 'sepMedieval', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'Dignitatis humanae §§1–2 and 6–7 retains a duty to seek religious truth while defending civil immunity from coercion, including for those who do not fulfil that duty. Special recognition of one religious community must preserve others’ religious freedom and citizens’ legal equality; restrictions must not be arbitrary. These are doctrinal requirements, not evidence of enforcement.',
            citations: citations([], ['vaticanReligiousFreedomFrench']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Ancient and medieval religious-legal orders',
            text: 'Across civilizations, political authority was often explained through sacred law, ritual, divine favor, moral cultivation, or the duties of rulers and communities. These traditions were not all theocratic: many differentiated religious and secular offices, recognized customary limits, or treated rulers as accountable to a moral law above them. Modern labels should not erase these institutional differences.',
            citations: citations(['aquinasMoralPolitical', 'hobbesLeviathan'], ['sepReligionPolitics', 'sepMedieval', 'openTextbook']),
          },
          {
            period: 'Thirteenth century: natural law and differentiated authority',
            text: 'Aquinas provides a particularly influential Christian account in which law serves the common good and political authority has a natural domain, while spiritual authority and divine law remain politically relevant. His framework is neither modern secular liberalism nor a simple clerical command state; it illustrates why religious traditionalism can contain jurisdictional limits as well as hierarchy.',
            citations: citations(['aquinasMoralPolitical'], ['sepMedieval', 'sepReligionPolitics']),
          },
          {
            period: 'Seventeenth century: sovereignty, confession, and toleration',
            text: 'Religious conflict and civil war forced political thinkers to confront the relationship between sovereign peace, religious uniformity, conscience, and toleration. Hobbes prioritized a common authority capable of preventing civil violence, while Locke argued for limits on the magistrate’s power over religious belief and ecclesiastical association. Their disagreement remains central to modern religious-traditionalist boundaries.',
            citations: citations(['hobbesLeviathan', 'lockeLetterToleration'], ['sepReligionPolitics', 'sepMedieval']),
          },
          {
            period: 'Eighteenth and nineteenth centuries: tradition, nation, and modernity',
            text: 'Reaction to revolution, industrialization, secularization, and social dislocation encouraged political appeals to inherited institutions, religion, family, and national continuity. Burke’s defense of historically evolved order represents one conservative strand, while Catholic, Protestant, Jewish, Islamic, Hindu, Buddhist, and other movements developed distinct responses to modern state-building and social change.',
            citations: citations(['burkeReflections', 'aquinasMoralPolitical', 'renanNation'], ['sepConservatism', 'sepReligionPolitics', 'openTextbook']),
          },
          {
            period: '1 November 1885: Leo XIII’s Immortale Dei',
            text: 'The encyclical calls for public support of Catholic religion while distinguishing civil and ecclesiastical powers. It accepts different government forms serving the common good. Its permission to tolerate other worship for practical reasons is not equal legal standing for religions; it also rejects forced conversion to Catholicism.',
            citations: citations([], ['leoImmortaleDeiFrench']),
          },
          {
            period: 'Twentieth century: religious parties and constitutional accommodation',
            text: 'Religious political movements increasingly negotiated with mass democracy, universal suffrage, social policy, and constitutional rights. Christian democracy is a major European example: it emerged from confessional politics but developed pluralist, personalist, solidaristic, and constitutional forms that cannot be reduced to clerical rule. Other religious traditions followed different paths, so Christian democracy is a variant, not the global definition.',
            citations: citations(['aquinasMoralPolitical', 'burkeReflections', 'lockeLetterToleration'], ['oxfordChristianDemocracy', 'sepReligionPolitics']),
          },
          {
            period: '7 December 1965: Dignitatis humanae',
            text: 'Promulgated by Paul VI with the council, the declaration grounds religious freedom in human dignity, not agreement with Catholic doctrine (§2).',
            citations: citations([], ['vaticanReligiousFreedomFrench']),
          },
          {
            period: 'Late twentieth century to the present: pluralism, nationalism, and religious revival',
            text: 'Religious identities remain politically active despite secularization theories. Contemporary movements debate religious freedom, family policy, education, minority rights, migration, national identity, economic justice, and whether public law should be neutral or confessional. The same religious tradition can support democratic pluralism, social welfare, nationalism, authoritarianism, or opposition to the state depending on actors and institutions.',
            citations: citations(['spinozaPolitical', 'lockeLetterToleration', 'renanNation'], ['sepReligionPolitics', 'oxfordChristianDemocracy', 'vdem']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Religiously informed constitutionalism',
                distinction: 'Uses religious ethics to guide citizens and policy while preserving constitutional rights, elections, plural associations, and freedom of conscience.',
                relation: 'The least coercive form in this family; religious inspiration does not by itself establish a confessional state.',
                citations: citations(['aquinasMoralPolitical', 'lockeLetterToleration'], ['sepReligionPolitics', 'oxfordChristianDemocracy']),
              },
              {
                label: 'Christian democracy',
                distinction: 'Combines Christian social teaching, personalism, solidarity, family and community institutions, welfare, and constitutional democracy.',
                relation: 'A major twentieth-century variant with a distinct party and European history; it is more pluralist and institutionally democratic than the generic profile’s high-authority center.',
                citations: citations(['aquinasMoralPolitical', 'burkeReflections'], ['oxfordChristianDemocracy', 'sepReligionPolitics']),
              },
              {
                label: 'Confessional constitutionalism',
                distinction: 'Formally identifies the state with or privileges a religion while retaining some constitutional limits, civil administration, and legal pluralism.',
                relation: 'The boundary depends on equal citizenship, the enforceability of religious law, and whether dissenting faiths and nonbelief receive real protection.',
                citations: citations(['aquinasMoralPolitical', 'lockeLetterToleration'], ['sepReligionPolitics', 'sepMedieval']),
              },
              {
                label: 'Prudential toleration versus a civil right',
                distinction: 'Compare Immortale Dei’s conditional toleration with Dignitatis humanae’s protection rooted in personhood.',
                relation: 'Both reject forced conversion; that shared position does not make their accounts of public religious freedom identical.',
                citations: citations([], ['leoImmortaleDeiFrench', 'vaticanReligiousFreedomFrench']),
              },
              {
                label: 'Religious nationalism',
                distinction: 'Fuses religious inheritance with national membership, sovereignty, historical memory, and sometimes ethnic or civilizational boundaries.',
                relation: 'Adds identity politics to religious traditionalism; it can be civic and pluralist or exclusionary and ethnoreligious.',
                citations: citations(['renanNation', 'burkeReflections', 'spinozaPolitical'], ['sepReligionPolitics', 'sepConservatism']),
              },
              {
                label: 'Religious socialism or distributism',
                distinction: 'Uses religious ethics to criticize concentrated capital and support labor rights, social ownership, cooperatives, welfare, or widely distributed property.',
                relation: 'Shows why religious traditionalism is not economically synonymous with laissez-faire or the political right.',
                citations: citations(['aquinasMoralPolitical', 'adamSmithWealth'], ['oxfordChristianDemocracy', 'sepReligionPolitics']),
              },
              {
                label: 'Theocracy or clerical authoritarianism',
                distinction: 'Makes revelation, clerical office, sacred law, or a religious sovereign order constitutive of coercive political legitimacy and public law.',
                relation: 'A high-religion, high-authority endpoint and a critical boundary, not a synonym for all religiously conservative or faith-informed politics.',
                citations: citations(['aquinasMoralPolitical', 'hobbesLeviathan', 'lockeLetterToleration'], ['sepReligionPolitics', 'sepMedieval', 'vdem']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'Historical and contemporary examples',
        blocks: [
          {
            type: 'evidence-note',
            text: 'No country is an exact or permanent religious-traditionalist match. Comparisons must separate private religiosity, party identity, constitutional establishment, family policy, clerical authority, religious law, minority rights, and actual enforcement. A religious majority does not prove a religious state, and a secular constitution does not prove that religion has no political influence.',
            citations: citations(['aquinasMoralPolitical', 'lockeLetterToleration', 'spinozaPolitical'], ['sepReligionPolitics', 'vdem', 'openTextbook']),
          },
          {
            type: 'people',
            entries: [
              {
                name: 'Thomas Aquinas',
                role: 'natural-law theorist of common good, law, kingship, and differentiated spiritual and secular authority',
                caveat: 'Aquinas wrote within medieval Christian institutions and should not be converted directly into a modern party platform or contemporary theocracy.',
                citations: citations(['aquinasMoralPolitical'], ['sepMedieval', 'sepReligionPolitics']),
              },
              {
                name: 'Leo XIII',
                role: 'papal author of the confessional political argument in Immortale Dei',
                caveat: 'Document-specific reference, not evidence for every policy position or these six numerical coordinates.',
                citations: citations([], ['leoImmortaleDeiFrench']),
              },
              {
                name: 'Edmund Burke',
                role: 'conservative thinker of inherited institutions, continuity, prudence, and social order',
                caveat: 'Burke is a conservative reference who can support religious-traditionalist reasoning but is not a complete theorist of clerical rule or one confessional constitution.',
                citations: citations(['burkeReflections'], ['sepConservatism', 'sepReligionPolitics']),
              },
              {
                name: 'Thomas Hobbes',
                role: 'theorist of sovereignty, civil peace, religious conflict, and public authority',
                caveat: 'Hobbes’s strong sovereign is not identical to theocracy: his argument subordinates independent ecclesiastical power to civil sovereignty.',
                citations: citations(['hobbesLeviathan'], ['sepReligionPolitics', 'sepMedieval']),
              },
              {
                name: 'John Locke',
                role: 'liberal critic of coercive religious uniformity and theorist of toleration',
                caveat: 'Locke is included as an internal boundary and counterargument, showing that religiously serious politics can also defend limits on the magistrate.',
                citations: citations(['lockeLetterToleration'], ['sepReligionPolitics']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'Medieval Christian polities',
                period: 'Europe, especially the Latin Christian world, with major regional variation',
                match: 'historical religious-law and layered-authority reference',
                caveat: 'Church and ruler jurisdictions, customary law, local privilege, coercion, and religious minorities varied; no single medieval Christian model existed.',
                citations: citations(['aquinasMoralPolitical', 'burkeReflections'], ['sepMedieval', 'sepReligionPolitics']),
              },
              {
                name: 'Early modern confessional states',
                period: 'Europe after the Reformation, with changing forms and limits',
                match: 'historical confessional reference',
                caveat: 'Confessional establishment ranged from symbolic privilege to coercive uniformity, while toleration and pluralism expanded unevenly.',
                citations: citations(['hobbesLeviathan', 'lockeLetterToleration'], ['sepReligionPolitics', 'sepMedieval']),
              },
              {
                name: 'Post-war Christian-democratic Europe',
                period: 'especially from the 1940s onward',
                match: 'religiously inspired constitutional and welfare-state comparator',
                caveat: 'Christian-democratic parties often defended pluralist democracy and social welfare; they should not be counted as theocratic or uniformly traditionalist.',
                citations: citations(['aquinasMoralPolitical', 'burkeReflections'], ['oxfordChristianDemocracy', 'sepReligionPolitics']),
              },
              {
                name: 'French Catholic episcopal discourse after Vatican II',
                period: 'Historical comparison in Portier’s 2023 study',
                match: 'institutional discourse, not a country-wide ideology',
                caveat: 'Portier describes acceptance of constitutional pluralism alongside continuing moral claims. Bishops’ statements are not a survey of Catholics or proof of French state policy.',
                citations: citations([], ['portierEpiscopateFreedom']),
              },
              {
                name: 'Contemporary faith-informed parties and movements',
                period: 'present; country- and tradition-specific research required',
                match: 'movement-level comparison only',
                caveat: 'Party labels, religious institutions, constitutional rules, and policies differ widely across Christian, Muslim, Jewish, Hindu, Buddhist, and other contexts; current-country matching requires separate evidence.',
                citations: citations(['lockeLetterToleration', 'spinozaPolitical', 'renanNation'], ['sepReligionPolitics', 'openTextbook', 'vdem']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'conservative', relation: 'broader tradition of continuity and order that may be religious or secular' },
              { id: 'national-conservative', relation: 'adds stronger sovereignty and national identity; religion may be cultural, political, or absent' },
              { id: 'christian-democratic', relation: 'specific constitutional and social-policy family with Christian inspiration and pluralist variants' },
              { id: 'theocratic', relation: 'higher-authority form in which religious law or clerical legitimacy is constitutive of the state' },
              { id: 'monarchist', relation: 'can overlap through dynastic, sacred, or inherited authority but does not require religion' },
              { id: 'religious-socialist', relation: 'shares religious public ethics but can favor economic equality, labor power, and social ownership' },
              { id: 'progressive-liberal', relation: 'counterpoint emphasizing secular public justification, personal autonomy, and social change' },
              { id: 'liberal-constitutionalist', relation: 'shares legal limits and rights when religious traditionalism accepts constitutional pluralism' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'Critics argue that religious traditionalism can convert majority belief into coercive law and make equal citizenship conditional on conformity. Women, religious minorities, converts, nonbelievers, sexual minorities, dissenting clergy, and internal reformers may lose protection when a tradition is treated as the exclusive source of public legitimacy. Religious freedom therefore requires both the freedom to practice and the freedom not to be ruled by another group’s doctrine.',
            citations: citations(['lockeLetterToleration', 'millOnLiberty', 'spinozaPolitical'], ['sepReligionPolitics', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'A second criticism concerns institutional ambiguity. If family, church, customary community, and state all claim moral authority, conflicts over jurisdiction can become difficult to resolve. Layered authority may protect local association, but it may also conceal coercion inside families or communities. Constitutional review, equal legal status, accessible exit, and independent courts are safeguards rather than automatic enemies of religious tradition.',
            citations: citations(['aquinasMoralPolitical', 'lockeLetterToleration', 'hobbesLeviathan'], ['sepReligionPolitics', 'sepMedieval', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'Finally, the label can obscure diversity within religions and across history. Religious institutions have supported monarchy, democracy, welfare, anti-colonial liberation, civil rights, authoritarian nationalism, and resistance to the state. The project should identify the actor, doctrine, institution, period, jurisdiction, and affected population instead of assigning a global religious score from a country’s majority faith or a leader’s rhetoric.',
            citations: citations(['aquinasMoralPolitical', 'burkeReflections', 'spinozaPolitical'], ['sepReligionPolitics', 'oxfordChristianDemocracy', 'openTextbook']),
          },
          {
            type: 'paragraph',
            text: 'Portier’s interpretation falls between continuity and rupture: French bishops’ acceptance of civil religious freedom does not erase their claims about objective moral order or the Church’s public authority (pp. 48–51, 57–58). He contrasts readings associated with Émile Poulat and René Rémond. Those authors’ books have not been independently reviewed here; this is an attributed historiographical argument, not a settled verdict on all Catholic political thought.',
            citations: citations([], ['portierEpiscopateFreedom']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['aquinasMoralPolitical', 'burkeReflections', 'hobbesLeviathan', 'lockeLetterToleration', 'spinozaPolitical', 'renanNation', 'adamSmithWealth', 'morgenthauRealism', 'millOnLiberty'],
      researchSourceIds: ['sepReligionPolitics', 'sepMedieval', 'oxfordChristianDemocracy', 'sepConservatism', 'openTextbook', 'vdem', 'foreignPolicy', 'leoImmortaleDeiFrench', 'vaticanReligiousFreedomFrench', 'portierEpiscopateFreedom'],
      editorialNote: 'The entry separates personal religiosity, religious social ethics, confessional constitutionalism, religious nationalism, Christian democracy, and theocracy. Its scores describe a didactic high-tradition, high-authority profile and do not classify every religious person, party, or state.',
    },
    researchGaps: [
      'Add Arabic-, Persian-, Hebrew-, Sanskrit-, Tamil-, Chinese-, French-, German-, Portuguese-, and Spanish-language scholarship on religious law, political authority, reform, pluralism, and modern state formation.',
      'Add case studies across Christian, Islamic, Jewish, Hindu, Buddhist, Indigenous, and other traditions, distinguishing theological claims from party organization and state enforcement.',
      'Add detailed research on Christian democracy, Catholic social teaching, Protestant confessional politics, Islamic constitutional debates, Jewish legal-political traditions, and South Asian religious nationalism.',
      'Add country-specific evidence before listing present governments or parties; religious majorities, constitutions, coalition systems, and enforcement practices change over time.',
      'Add specialist research on gender, family law, education, minority rights, conversion, secularism, clerical institutions, religious violence, migration, colonialism, and the constitutional design of pluralist religious societies.',
      'Compare the Vatican-hosted French versions with identified Latin editions; review Portier’s complete article and the Poulat/Rémond books directly. Add evidence from dissenters and minorities about implementation, and non-Catholic cases before extending this bounded doctrinal comparison.',
    ],
  },
  'anti-colonial-liberation': {
    id: 'anti-colonial-liberation',
    title: 'Anti-colonial liberation',
    canonicalLabel: 'Anti-colonial liberation',
    aliases: [
      'anti-imperial liberation',
      'national liberation',
      'decolonial emancipation',
      'liberation nationalism',
      'self-determination movement',
    ],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'This is a family resemblance profile for movements and arguments opposing colonial or imperial domination. It is not a claim that every nationalist, independence movement, postcolonial government, or critic of empire shares one ideology or one method.',
    timeScope: 'Earlier resistance to empire provides context, but the modern label is most useful from the nineteenth-century expansion of mass nationalism through post-1945 decolonization and continuing struggles over settler colonialism, sovereignty, and dependency.',
    geographicScope: 'Global profile with especially important South Asian, African, Caribbean, Latin American, Middle Eastern, Southeast Asian, Indigenous, and diaspora histories. French-, Portuguese-, English-, and other language traditions must remain visible rather than being treated as one canon.',
    summary: 'A political family that seeks to end colonial or imperial domination and restore collective self-government, dignity, and control over land, labor, culture, and political institutions. Its members disagree sharply over constitutional reform versus revolution, nonviolence versus armed struggle, national sovereignty versus transnational solidarity, and liberal, socialist, communal, religious, or developmental postcolonial futures.',
    summaryCitations: citations(
      ['gandhiHindSwaraj', 'fanonWretchedEarth', 'duboisBlackReconstruction', 'cesaireDiscourseColonialism'],
      ['sepColonialism', 'sepNationalism', 'panAfricanism'],
    ),
    dimensionInterpretations: {
      economic: {
        score: 55,
        label: 'Moderately collectivist / anti-extractive',
        explanation: 'Colonial land seizure, forced labor, unequal trade, and resource extraction are commonly treated as political-economic domination. Remedies range from village self-sufficiency and land reform to state-led development, socialism, cooperative ownership, or regulated mixed economies; independence alone does not determine the economic axis. Aharon deGrassi’s abstract connects Cabral’s agronomy, colonial land relations, and organizing; this adds an agrarian perspective, not a measured coordinate.',
        citations: citations(['gandhiHindSwaraj', 'fanonWretchedEarth', 'duboisBlackReconstruction', 'cesaireDiscourseColonialism'], ['sepColonialism', 'panAfricanism', 'degrassiCabralSocionatures']),
      },
      social: {
        score: 50,
        label: 'Moderately progressive / emancipatory',
        explanation: 'Anti-colonial projects usually reject racial hierarchy, imperial subjecthood, and exclusion from equal citizenship. The score is limited because movements have also reproduced patriarchy, class hierarchy, ethnic majorities, religious exclusions, or restrictions on dissent after independence. Gomes’s oral-history research cautions against reading women’s wartime participation as automatic emancipation.',
        citations: citations(['duboisBlackReconstruction', 'fanonWretchedEarth', 'gandhiHindSwaraj', 'cesaireDiscourseColonialism'], ['sepColonialism', 'panAfricanism', 'gomesWomenLiberation']),
      },
      authority: {
        score: 10,
        label: 'Mixed: organized liberation with anti-domination safeguards',
        explanation: 'Collective organization, discipline, and sometimes a strong liberation state may be treated as necessary under colonial conditions, while self-rule and popular participation are presented as the goal. The profile therefore does not equate resistance organization with either libertarianism or authoritarianism.',
        citations: citations(['gandhiHindSwaraj', 'fanonWretchedEarth', 'lockeSecondTreatise', 'duboisBlackReconstruction'], ['sepColonialism', 'vdem']),
      },
      identity: {
        score: 65,
        label: 'Strongly self-determination oriented',
        explanation: 'Shared history, language, territory, race, culture, or Indigenous nationhood can create the solidarity needed to resist imperial rule. Many thinkers also connect self-determination to Pan-African, Asian, internationalist, or universal human commitments, so liberation identity is not automatically ethnic nationalism or permanent national closure. Cabral’s cultural argument rejects treating Africa or a race as culturally uniform.',
        citations: citations(['fanonWretchedEarth', 'gandhiHindSwaraj', 'duboisBlackReconstruction', 'andersonImaginedCommunities'], ['sepColonialism', 'sepNationalism', 'panAfricanism', 'cabralCulturePortuguese']),
      },
      foreign: {
        score: 30,
        label: 'Somewhat restraint-oriented / anti-imperial',
        explanation: 'The central foreign-policy demand is non-domination: withdrawal of imperial control, sovereign equality, and the ability to choose political and economic alliances. Nonviolence, diplomacy, nonalignment, and international solidarity coexist historically with armed resistance; the existence of a liberation struggle is not a universal endorsement of force.',
        citations: citations(['gandhiHindSwaraj', 'fanonWretchedEarth', 'kantPerpetualPeace', 'duboisBlackReconstruction'], ['sepColonialism', 'panAfricanism', 'foreignPolicy']),
      },
      religion: {
        score: -25,
        label: 'Religiously informed solidarity, with pluralist and secular variants',
        explanation: 'Religious ethics, institutions, and identities have supported anti-colonial mobilization in many settings, but the family does not require clerical rule or religious law. Secular constitutionalism, religious pluralism, and faith-based liberation can all appear within it; the public role of religion must be specified case by case.',
        citations: citations(['gandhiHindSwaraj', 'spinozaPolitical', 'lockeLetterToleration'], ['sepColonialism', 'sepReligionPolitics', 'panAfricanism']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Anti-colonial liberation names political projects that challenge a relation in which an outside power claims authority over a territory and its people, commonly together with racial hierarchy, economic extraction, cultural domination, or restricted political status. The objective is not merely a change of flag. In different traditions it includes self-government, equal citizenship, control of land and labor, recovery or transformation of culture, and the ability to choose a political future without imperial command.',
            citations: citations(['gandhiHindSwaraj', 'fanonWretchedEarth', 'cesaireDiscourseColonialism'], ['sepColonialism']),
          },
          {
            type: 'paragraph',
            text: 'The label is deliberately broad and historically qualified. Gandhi’s swaraj, Du Bois’s analysis of emancipation and Black democratic labor, Fanon’s revolutionary critique of colonial violence, Césaire’s French-language critique of imperial dehumanization, Pan-Africanism, Indigenous sovereignty, and constitutional independence movements do not form one doctrine. Their differences over violence, class, gender, religion, borders, and the postcolonial state are part of the entry rather than noise to be removed.',
            citations: citations(['gandhiHindSwaraj', 'duboisBlackReconstruction', 'fanonWretchedEarth', 'cesaireDiscourseColonialism'], ['sepColonialism', 'panAfricanism']),
          },
          {
            type: 'evidence-note',
            text: 'The Cabral and Guinea-Bissau material below is a bounded case, not a model for every Portuguese-speaking country. A leader’s argument, participants’ remembered experiences, scholarly interpretation, and this site’s illustrative scores must remain distinguishable. Portuguese texts are paraphrased in English without claiming a verified translation.',
            citations: citations([], ['cabralCulturePortuguese', 'gomesWomenLiberation', 'degrassiCabralSocionatures']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'The first common element is political status: a colonized population is treated as governed, administered, or exploited without equal control over the institutions that make binding decisions. Liberation movements therefore emphasize popular sovereignty, self-determination, citizenship, or national independence. These terms are not interchangeable. A formal transfer of sovereignty can leave economic dependency, military influence, racialized institutions, unequal borders, or settler-colonial control intact.',
            citations: citations(['lockeSecondTreatise', 'gandhiHindSwaraj', 'fanonWretchedEarth'], ['sepColonialism', 'sepNationalism']),
          },
          {
            type: 'paragraph',
            text: 'The second element is material and social emancipation. Anti-colonial arguments frequently connect political domination to land ownership, labor discipline, commodity extraction, unequal education, language hierarchy, and racial classification. Some movements seek land redistribution or social ownership; others seek national control of resources, a mixed economy, cooperative production, or small-scale self-rule. The shared critique of extraction does not predict a single economic policy after independence.',
            citations: citations(['fanonWretchedEarth', 'duboisBlackReconstruction', 'cesaireDiscourseColonialism', 'gandhiHindSwaraj'], ['sepColonialism', 'panAfricanism']),
          },
          {
            type: 'paragraph',
            text: 'The third element is political identity. A people may mobilize around nation, race, language, religion, class, Indigenous peoplehood, region, or a combination. Such identity can repair imposed inferiority and enable collective action, but it can also produce new majorities and minorities. The strongest versions of the tradition therefore pair self-determination with equal citizenship, minority protection, internal democracy, and the recognition that colonial borders and categories may themselves be inherited problems.',
            citations: citations(['duboisBlackReconstruction', 'fanonWretchedEarth', 'andersonImaginedCommunities', 'gandhiHindSwaraj'], ['sepColonialism', 'sepNationalism', 'panAfricanism']),
          },
          {
            type: 'paragraph',
            text: 'The fourth element is strategy. Constitutional reform, elections, civil disobedience, strikes, boycotts, international advocacy, guerrilla warfare, and interstate diplomacy have all appeared in anti-colonial histories. A descriptive profile must distinguish the moral or strategic argument for a method from the historical conditions in which it was used, and it must not turn accounts of colonial violence into a general recommendation of violence in ordinary politics.',
            citations: citations(['gandhiHindSwaraj', 'fanonWretchedEarth', 'kantPerpetualPeace'], ['sepColonialism', 'foreignPolicy']),
          },
          {
            type: 'paragraph',
            text: 'Cabral’s 1970 address links cultural freedom to control over production and treats culture as internally differentiated by class. He calls for critical engagement with inherited values, rather than their automatic preservation. This is a revolutionary actor’s theory, not proof that every African society or liberation movement followed it.',
            citations: citations([], ['cabralCulturePortuguese']),
          },
          {
            type: 'paragraph',
            text: 'A different scholarly lens concerns land and ecology. In his abstract, deGrassi interprets Cabral’s work on soil erosion, agricultural surveys, and colonial production as informing his political analysis. That interpretation requires fuller engagement with the article and agronomic sources before extending it to environmental outcomes or other movements.',
            citations: citations([], ['degrassiCabralSocionatures']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Before modern nationalism: resistance, accommodation, and alternative sovereignties',
            text: 'Resistance to conquest, tribute, forced labor, missionary authority, and foreign administration predates the modern vocabulary of national liberation. These histories should not be retrospectively assigned one nationalist ideology. They include dynastic restoration, local autonomy, religious resistance, Indigenous governance, peasant revolt, maroon communities, and efforts to negotiate or appropriate imperial institutions.',
            citations: citations(['gandhiHindSwaraj', 'lockeSecondTreatise'], ['sepColonialism', 'openTextbook']),
          },
          {
            period: 'Nineteenth century: reform, abolition, and national self-government',
            text: 'The expansion of empire and racialized legal status produced reformist, abolitionist, constitutional, and nationalist movements. Some sought equal rights within an empire before moving toward autonomy or independence; others connected abolition, land, education, and national development. Portuguese-language Brazilian abolitionist thought is a useful reminder that emancipation, liberal constitutionalism, monarchy, and elite limitation could coexist uneasily in one political project.',
            citations: citations(['nabucoAbolitionism', 'lockeSecondTreatise', 'andersonImaginedCommunities'], ['sepColonialism', 'sepNationalism']),
          },
          {
            period: '1900–1915: swaraj and ethical anti-imperialism',
            text: 'Gandhi’s Hind Swaraj criticized colonial rule and the uncritical imitation of industrial European civilization while developing swaraj as ethical self-rule and satyagraha as disciplined nonviolent resistance. This strand is neither a simple free-market position nor a blueprint for a centralized socialist state, and Gandhi’s wider record contains tensions that require historical rather than devotional reading.',
            citations: citations(['gandhiHindSwaraj'], ['sepColonialism']),
          },
          {
            period: '1900s–1930s: Black freedom, Pan-Africanism, and the international question',
            text: 'Du Bois connected racial domination, labor, democratic citizenship, and the international organization of colonial power. Pan-African projects made the relationship between national independence, diaspora solidarity, and global racial justice explicit. The tradition shows why anti-colonial identity can be transnational even when the immediate political demand is control of a particular state.',
            citations: citations(['duboisBlackReconstruction', 'andersonImaginedCommunities'], ['panAfricanism', 'sepColonialism']),
          },
          {
            period: '1930s–1950s: Négritude, colonial critique, and cultural dignity',
            text: 'Césaire’s French-language critique attacked the material and cultural claims of the civilizing mission and connected colonial domination to racial hierarchy and dehumanization. Négritude and related movements treated cultural recovery as politically significant, while also debating the relationship between universal emancipation, national identity, class politics, and French republican institutions.',
            citations: citations(['cesaireDiscourseColonialism', 'fanonWretchedEarth'], ['sepColonialism', 'openTextbook']),
          },
          {
            period: '1945–1970s: formal decolonization, national liberation, and postcolonial state-building',
            text: 'After the Second World War, many colonies became independent through negotiations, mass movements, wars, constitutional settlements, or combinations of these. New governments confronted inherited borders, scarce administrative capacity, economic dependency, Cold War pressure, ethnic and regional divisions, and the need to transform colonial institutions. Independence could widen citizenship while also concentrating power in a ruling party, military, or new elite.',
            citations: citations(['fanonWretchedEarth', 'duboisBlackReconstruction'], ['sepColonialism', 'panAfricanism', 'foreignPolicy']),
          },
          {
            period: '20 February 1970: Cabral’s culture address',
            text: 'At Syracuse University’s memorial for Eduardo Mondlane, Cabral connected national liberation with cultural transformation and solidarity beyond one territory.',
            citations: citations([], ['cabralCulturePortuguese']),
          },
          {
            period: 'Contemporary: decolonial, Indigenous, and anti-extractive struggles',
            text: 'The end of formal colonial rule did not settle every question of land, race, language, knowledge, economic dependency, or settler sovereignty. Contemporary movements use decolonial, Indigenous, environmental-justice, and anti-extractive vocabularies to contest continuing domination. Their goals may concern jurisdiction, treaty rights, reparations, public memory, resource control, or epistemic authority rather than the creation of another centralized nation-state.',
            citations: citations(['fanonWretchedEarth', 'gandhiHindSwaraj', 'cesaireDiscourseColonialism'], ['sepColonialism', 'sepClimateJustice']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Constitutional reform and autonomy',
                distinction: 'Pursues equal rights, representation, responsible government, autonomy, or negotiated independence through law, elections, education, and public institutions.',
                relation: 'Closest to anti-colonial liberalism and reform nationalism; it may seek independence gradually and may retain economic or institutional ties to the former imperial power.',
                citations: citations(['lockeSecondTreatise', 'gandhiHindSwaraj', 'nabucoAbolitionism'], ['sepColonialism', 'sepNationalism']),
              },
              {
                label: 'Nonviolent mass resistance',
                distinction: 'Uses civil disobedience, boycotts, strikes, constructive programmes, and disciplined refusal of cooperation to make imperial rule difficult or illegitimate.',
                relation: 'Gandhian satyagraha is the clearest reference, but nonviolent practice also appears in movements with very different economic and religious commitments.',
                citations: citations(['gandhiHindSwaraj'], ['sepColonialism']),
              },
              {
                label: 'Revolutionary or armed national liberation',
                distinction: 'Treats colonial coercion as a structural condition that may require organized revolutionary struggle, armed resistance, or a radical transformation of property and state institutions.',
                relation: 'Fanon is an important but contested reference. His historically situated argument must not be converted into a universal endorsement of force or a claim that every liberation movement follows one revolutionary path.',
                citations: citations(['fanonWretchedEarth', 'cesaireDiscourseColonialism'], ['sepColonialism', 'foreignPolicy']),
              },
              {
                label: 'Pan-African and transnational liberation',
                distinction: 'Links national independence to diaspora solidarity, continental cooperation, racial justice, and the dismantling of global structures that divide or subordinate peoples.',
                relation: 'It can be nationalist, federalist, socialist, liberal, or cultural in emphasis; transnational solidarity does not erase disagreements about state sovereignty and political organization.',
                citations: citations(['duboisBlackReconstruction', 'andersonImaginedCommunities'], ['panAfricanism', 'sepColonialism']),
              },
              {
                label: 'Socialist anti-colonialism',
                distinction: 'Connects independence to land reform, labor power, public or social ownership, class emancipation, and resistance to capitalist dependency or imperial extraction.',
                relation: 'Overlaps with democratic and authoritarian socialism, but anti-colonial conditions, racial domination, and national development can alter the meaning of class politics.',
                citations: citations(['fanonWretchedEarth', 'duboisBlackReconstruction', 'marxEngelsManifesto'], ['sepColonialism', 'sepSocialism', 'panAfricanism']),
              },
              {
                label: 'Cultural recovery versus uncritical restoration',
                distinction: 'Cabral opposes colonial assimilation without treating every inherited practice as emancipatory.',
                relation: 'His cultural argument joins material change to critical selection of traditions; it is not simply a return to an unchanged past.',
                citations: citations([], ['cabralCulturePortuguese']),
              },
              {
                label: 'Indigenous sovereignty and plurinational self-government',
                distinction: 'Defends the continuing jurisdiction, land relationships, legal orders, and collective identity of Indigenous peoples within or across states formed through settlement and colonization.',
                relation: 'It may reject the assumption that liberation must culminate in one homogeneous nation-state and may instead seek treaty implementation, autonomy, confederation, or shared sovereignty.',
                citations: citations(['lockeSecondTreatise', 'gandhiHindSwaraj'], ['sepColonialism', 'sepNationalism']),
              },
              {
                label: 'Postcolonial developmentalism and nonalignment',
                distinction: 'Uses an independent state to build infrastructure, education, industry, public health, and diplomatic room for maneuver while resisting renewed economic or military subordination.',
                relation: 'It can be democratic, military-led, socialist, mixed-economy, or authoritarian; development and sovereignty are not evidence of one institutional regime.',
                citations: citations(['fanonWretchedEarth', 'duboisBlackReconstruction', 'kantPerpetualPeace'], ['sepColonialism', 'foreignPolicy', 'panAfricanism']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'People, movements, and historical examples',
        blocks: [
          {
            type: 'people',
            entries: [
              {
                name: 'M. K. Gandhi',
                role: 'Theorist and organizer of swaraj, satyagraha, nonviolence, and ethical self-rule.',
                caveat: 'Gandhi’s views changed across contexts and include positions that are contested today; he is not a complete proxy for every Indian independence current or every nonviolent movement.',
                citations: citations(['gandhiHindSwaraj'], ['sepColonialism']),
              },
              {
                name: 'W. E. B. Du Bois',
                role: 'Historian and Pan-African thinker linking emancipation, labor, democratic citizenship, race, and international anti-colonial solidarity.',
                caveat: 'Du Bois’s commitments evolved across a long life, so his early liberal, Pan-African, socialist, and later positions should be time-indexed rather than averaged into one permanent score.',
                citations: citations(['duboisBlackReconstruction'], ['panAfricanism', 'sepColonialism']),
              },
              {
                name: 'Frantz Fanon',
                role: 'Psychiatrist and anti-colonial theorist of colonial violence, psychological dehumanization, national consciousness, and postcolonial reconstruction.',
                caveat: 'Fanon wrote within the Algerian war and a specific revolutionary context. His analysis is historically important and contested; it is not a general policy recommendation for violence.',
                citations: citations(['fanonWretchedEarth'], ['sepColonialism']),
              },
              {
                name: 'Aimé Césaire',
                role: 'French-language poet, politician, and Négritude thinker who criticized colonial racial hierarchy, imperial domination, and the civilizing mission.',
                caveat: 'Césaire’s literary, political, communist, and departmental experiences do not collapse into one modern party label; his anti-colonial critique should be read in its French and Caribbean contexts.',
                citations: citations(['cesaireDiscourseColonialism'], ['sepColonialism']),
              },
              {
                name: 'Joaquim Nabuco',
                role: 'Portuguese-language Brazilian lawyer and abolitionist whose work connects slavery, law, citizenship, national development, and constitutional reform.',
                caveat: 'Nabuco broadens the Portuguese-language record but was not a twentieth-century national-liberation theorist; abolitionist reform, monarchical constitutionalism, and elite limits remain visible in his profile.',
                citations: citations(['nabucoAbolitionism'], ['sepColonialism']),
              },
              {
                name: 'Amílcar Cabral',
                role: 'Agronomist and liberation theorist linking culture, production, and anticolonial organizing.',
                caveat: 'His writings and strategy do not establish a single post-independence outcome or six-axis score.',
                citations: citations([], ['cabralCulturePortuguese', 'degrassiCabralSocionatures']),
              },
              {
                name: 'Teodora Inácia Gomes',
                role: 'Former combatant whose testimony informs Patrícia Godinho Gomes’s research.',
                caveat: 'Participant perspective mediated through an oral-history study, not a proxy for all women or every policy position.',
                citations: citations([], ['gomesWomenLiberation']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'Indian independence',
                period: 'South Asia, especially 1905–1947 and the transition to independence',
                match: 'Mixed anti-colonial case combining mass noncooperation, constitutional negotiation, competing nationalisms, religious pluralism, and debates over economic self-rule.',
                caveat: 'The independence movement contained many currents beyond Gandhi, including revolutionary, socialist, liberal, religious, labor, Dalit, and regional projects; Partition and postcolonial state formation must not be omitted.',
                citations: citations(['gandhiHindSwaraj', 'lockeSecondTreatise'], ['sepColonialism', 'sepNationalism']),
              },
              {
                name: 'Algerian War of Independence',
                period: 'Algeria and France, 1954–1962',
                match: 'Armed national liberation against a settler-colonial order, central to debates about violence, national consciousness, citizenship, and the postcolonial state.',
                caveat: 'Fanon’s theoretical account is not a complete historical narrative of the FLN or Algeria. The case included internal conflict, civilian suffering, competing political visions, and post-independence authoritarian pressures.',
                citations: citations(['fanonWretchedEarth', 'cesaireDiscourseColonialism'], ['sepColonialism', 'foreignPolicy']),
              },
              {
                name: 'Ghanaian independence and Pan-African statecraft',
                period: 'Gold Coast/Ghana and wider African politics, especially the 1950s–1960s',
                match: 'A case for connecting national independence, African solidarity, economic sovereignty, and the problem of building institutions after colonial rule.',
                caveat: 'Ghana cannot stand for all African decolonization. Party competition, regional politics, economic constraints, and the later concentration of executive power require separate evidence.',
                citations: citations(['duboisBlackReconstruction', 'andersonImaginedCommunities'], ['panAfricanism', 'sepColonialism']),
              },
              {
                name: 'Reconstruction and Black freedom in the United States',
                period: 'United States, 1865–1877 and its longer afterlife',
                match: 'A bounded comparator for emancipation, labor power, constitutional citizenship, democratic participation, and the restoration of racial hierarchy after formal slavery.',
                caveat: 'This is not a colonial independence case in the narrow constitutional sense. It is included because Du Bois used Reconstruction to analyze racial domination, labor, democracy, and the international color line.',
                citations: citations(['duboisBlackReconstruction'], ['panAfricanism', 'sepColonialism']),
              },
              {
                name: 'Portuguese African decolonization',
                period: 'Angola, Mozambique, Guinea-Bissau, Cape Verde, and São Tomé and Príncipe, especially 1960s–1970s',
                match: 'A comparative Lusophone case in which armed liberation, socialist and nationalist currents, international alliances, and rapid state transition interacted.',
                caveat: 'The region contains distinct histories and should not be summarized as one Portuguese model. Add country-specific Portuguese scholarship, oral histories, archival work, and post-independence analysis before assigning more precise scores.',
                citations: citations(['fanonWretchedEarth', 'cesaireDiscourseColonialism'], ['sepColonialism', 'panAfricanism']),
              },
              {
                name: 'Guinea-Bissau: women’s organization and liberation memory',
                period: 'Early-1960s UDEMU, examined in Gomes’s 2021 study',
                match: 'A case of participation and organizational limits inside an independence movement.',
                caveat: 'The study foregrounds women’s accounts rather than inferring emancipation from the PAIGC’s programme; it is not a current-country classification.',
                citations: citations([], ['gomesWomenLiberation']),
              },
              {
                name: 'Contemporary Indigenous and decolonial movements',
                period: 'Present; jurisdiction- and people-specific',
                match: 'Movement-level comparison concerning land, jurisdiction, language, cultural authority, reparations, resource extraction, and the limits of inherited settler-colonial states.',
                caveat: 'No current movement or country should be labelled from rhetoric alone. The project needs community-reviewed sources and evidence about institutions, consent, internal diversity, and actual legal practice.',
                citations: citations(['gandhiHindSwaraj', 'fanonWretchedEarth'], ['sepColonialism', 'sepClimateJustice']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'civic-nationalist', relation: 'shares self-government and civic membership, but anti-colonial liberation centers the experience of imperial domination and may be more transformative' },
              { id: 'ethnic-nationalist', relation: 'can overlap where ethnic identity is mobilized against empire, but liberation can instead be civic, Indigenous, class-based, religiously plural, or transnational' },
              { id: 'democratic-socialist', relation: 'may share economic equality and democratic participation, while anti-colonial politics adds sovereignty, racial hierarchy, and imperial dependency' },
              { id: 'authoritarian-collectivist', relation: 'can overlap in state-led economic transformation or one-party postcolonial rule, but anti-colonial liberation itself does not imply authoritarian institutions' },
              { id: 'anarchist-communalist', relation: 'shares anti-domination and local self-rule in some strands, while differing over the role of national sovereignty, parties, and the state' },
              { id: 'green-commons', relation: 'overlaps where colonial extraction, land, ecological justice, and Indigenous sovereignty are central' },
              { id: 'religious-traditionalist', relation: 'religious traditions may provide anti-colonial solidarity, but liberation does not require inherited religious authority in public law' },
              { id: 'national-conservative', relation: 'both may value sovereignty and national identity, but national conservatism generally emphasizes continuity and order rather than emancipation from colonial domination' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'A central criticism is that national liberation can replace foreign rulers with a domestic elite, party, military, or bureaucracy that claims to speak for the people while suppressing workers, women, minorities, regional communities, or political opponents. Independence is therefore not the same as democratic emancipation. Safeguards include equal citizenship, constitutional review, free association, accountable security forces, open elections, independent courts, and meaningful participation by groups that were marginalized inside the liberation coalition.',
            citations: citations(['fanonWretchedEarth', 'duboisBlackReconstruction', 'lockeSecondTreatise'], ['sepColonialism', 'vdem', 'panAfricanism']),
          },
          {
            type: 'paragraph',
            text: 'A second criticism concerns identity. A shared experience of colonial subordination can be politically necessary, yet a single national or ethnic identity may erase internal nations, caste and class differences, religious minorities, migrants, gendered violence, or Indigenous claims. The project should ask who is included in the “people,” who can dissent, how borders were formed, and whether self-determination is being claimed by the population as a whole or by one organized faction.',
            citations: citations(['gandhiHindSwaraj', 'fanonWretchedEarth', 'andersonImaginedCommunities', 'duboisBlackReconstruction'], ['sepColonialism', 'sepNationalism', 'panAfricanism']),
          },
          {
            type: 'paragraph',
            text: 'A third criticism concerns violence and emergency rule. Anti-colonial writers documented coercion and argued about resistance under conditions that were not ordinary constitutional disagreement. Historical explanation should neither sanitize colonial violence nor treat it as permission for later abuses. Any modern comparison must separate resistance to domination, protection of civilians, insurgent strategy, terrorism, counterinsurgency, and postwar state coercion, with evidence for each rather than one moralized score.',
            citations: citations(['fanonWretchedEarth', 'gandhiHindSwaraj', 'kantPerpetualPeace'], ['sepColonialism', 'foreignPolicy']),
          },
          {
            type: 'paragraph',
            text: 'Finally, formal sovereignty may coexist with economic dependency, unequal trade, foreign military basing, debt pressure, cultural hierarchy, extractive concessions, or inherited administrative categories. “Postcolonial” is therefore a field of continuing argument, not a proof that colonial relations have ended. Country and movement records should identify the period, institution, affected population, and evidence before making claims about neocolonialism or decolonization.',
            citations: citations(['fanonWretchedEarth', 'cesaireDiscourseColonialism', 'duboisBlackReconstruction'], ['sepColonialism', 'panAfricanism', 'foreignPolicy']),
          },
          {
            type: 'paragraph',
            text: 'Gomes reports divergent explanations of UDEMU’s early difficulties: Teodora Inácia Gomes stresses exclusion of women active on the war fronts; Carmen Pereira emphasizes shortages of experienced organizers (pp. 82–83). Her study challenges male-centered liberation narratives. Its qualitative method uses 16 of 26 interviews conducted in 2017–2018 (p. 85), not a representative survey; recollections and historical interpretation are not interchangeable with contemporaneous institutional records.',
            citations: citations([], ['gomesWomenLiberation']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['gandhiHindSwaraj', 'fanonWretchedEarth', 'duboisBlackReconstruction', 'cesaireDiscourseColonialism', 'nabucoAbolitionism', 'lockeSecondTreatise', 'andersonImaginedCommunities', 'kantPerpetualPeace', 'spinozaPolitical', 'lockeLetterToleration', 'marxEngelsManifesto'],
      researchSourceIds: ['sepColonialism', 'sepNationalism', 'panAfricanism', 'foreignPolicy', 'vdem', 'sepReligionPolitics', 'sepSocialism', 'openTextbook', 'sepClimateJustice', 'cabralCulturePortuguese', 'gomesWomenLiberation', 'degrassiCabralSocionatures'],
      editorialNote: 'The entry treats anti-colonial liberation as a historically diverse family, not as a synonym for nationalism, socialism, armed struggle, or decolonial theory. The six scores are didactic estimates of a composite profile and should not be assigned to a country or movement without time-, actor-, and institution-specific evidence.',
    },
    researchGaps: [
      'Add country-specific scholarship for Algeria, Ghana, India, Indonesia, Kenya, Mozambique, Angola, Guinea-Bissau, Brazil, the Caribbean, the Pacific, and Indigenous polities, with local historians and community reviewers where appropriate.',
      'Expand the multilingual record with French, Portuguese, German, Arabic, Spanish, Hindi, Gujarati, Urdu, Bengali, Swahili, Amharic, and other relevant-language editions, translations, archives, and secondary scholarship.',
      'Add comparative research on women’s organizing, caste, class, labor, disability, sexuality, religion, minority protection, and Indigenous jurisdiction within liberation movements rather than treating the movement as a single voice.',
      'Add primary and scholarly sources on Nkrumah, Cabral, Senghor, Ambedkar, Nehru, Ho Chi Minh, Sukarno, José Rizal, Eduardo Mondlane, Amílcar Cabral, and other regional thinkers, preserving disagreements instead of creating one global canon.',
      'Add evidence on post-independence institutions, military and party power, economic dependency, nonalignment, borders, resource concessions, foreign bases, debt, development, and the difference between formal sovereignty and effective self-determination.',
      'Review current movement and country comparisons only with dated, jurisdiction-specific sources. Do not infer anti-colonial status from a government’s rhetoric, a majority identity, or a single historical grievance.',
      'Verify the edition and transcription chain of Cabral’s 1970 address; read the complete Gomes and deGrassi articles and relevant agronomic records. Compare women’s retrospective testimony with contemporaneous UDEMU/PAIGC records, dissenting accounts, and post-independence outcomes before generalizing this Guinea-Bissau case.',
    ],
  },
  communist: {
    id: 'communist',
    title: 'Communist / Marxist-Leninist',
    canonicalLabel: 'Communist / Marxist-Leninist',
    aliases: [
      'communism',
      'Marxism-Leninism',
      'party-state communism',
      'revolutionary communism',
      'state communism',
    ],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'This entry focuses on Marxist-Leninist and party-led communist traditions represented by the main card. It is not a synonym for all socialism, Marx’s entire philosophy, anarcho-communism, democratic socialism, or every government that used communist language.',
    timeScope: 'Theoretical roots in nineteenth-century European socialism; political consolidation from the Bolshevik Revolution onward; global party-state and anti-colonial variants across the twentieth century; surviving and reformed party-led systems remain historically heterogeneous.',
    geographicScope: 'Global profile with major Russian/Soviet, Chinese, Vietnamese, Cuban, Korean, Eastern European, African, Asian, and Latin American histories. German-language documentation and non-European revolutionary experiences are included, but the research remains incomplete.',
    summary: 'A family of communist projects seeking to overcome capitalist class relations through collective or public control of production and a transition toward a classless society. In its Marxist-Leninist form, a disciplined revolutionary party and state are treated as vehicles for transition and defense, creating a decisive tension between emancipatory aims, mass participation, bureaucratic rule, and coercive one-party power.',
    summaryCitations: citations(
      ['marxEngelsManifesto', 'leninStateRevolution', 'luxemburgReformRevolution', 'arendtTotalitarianism'],
      ['sepMarx', 'sepSocialism', 'oxfordHistoryCommunism', 'ushmmCommunism'],
    ),
    dimensionInterpretations: {
      economic: {
        score: 94,
        label: 'Very strongly collectivist',
        explanation: 'The defining economic aim is to end private control of the means of production as a class relation and to organize production for collective need rather than private accumulation. Historical party-states used state ownership, planning, collectivization, public employment, and later market reforms in different combinations; state ownership is not identical to worker or democratic control.',
        citations: citations(['marxEngelsManifesto', 'leninStateRevolution'], ['sepMarx', 'sepSocialism', 'ushmmCommunism']),
      },
      social: {
        score: 28,
        label: 'Moderately progressive, historically variable',
        explanation: 'Communist movements often promise emancipation from class, racial, gender, and inherited hierarchies, and have expanded education or social provision in some settings. Their governments have also imposed censorship, disciplined family and cultural life, restricted independent organization, or reversed reforms; the axis therefore cannot be inferred from economic collectivism.',
        citations: citations(['marxEngelsManifesto', 'luxemburgReformRevolution', 'arendtTotalitarianism'], ['sepMarx', 'sepSocialism', 'oxfordHistoryCommunism']),
      },
      authority: {
        score: 78,
        label: 'Strongly authoritarian in the Marxist-Leninist profile',
        explanation: 'A vanguard party, democratic centralism, centralized administration, and emergency or revolutionary authority are treated as instruments for defeating counter-revolution and directing the transition. This is the profile’s main distinction from anarcho-communism, council communism, and democratic socialism, although communist theory and practice contain sustained arguments about democratic control. GDR Article 1 (1974) explicitly institutionalized Marxist-Leninist party leadership; it does not independently establish how power operated.',
        citations: citations(['leninStateRevolution', 'luxemburgReformRevolution', 'arendtTotalitarianism'], ['sepSocialism', 'sepLuxemburg', 'oxfordHistoryCommunism', 'vdem', 'ghdiGdrConstitution1974']),
      },
      identity: {
        score: 48,
        label: 'Internationalist with state-national tension',
        explanation: 'Class solidarity and international revolution oppose the idea that national borders should permanently divide workers. Communist parties and states have nevertheless developed patriotism, national development projects, border security, civilizational narratives, and official state identities; internationalism and state nationalism can coexist uneasily.',
        citations: citations(['marxEngelsManifesto', 'leninStateRevolution', 'andersonImaginedCommunities'], ['sepMarx', 'sepNationalism', 'oxfordHistoryCommunism']),
      },
      foreign: {
        score: 20,
        label: 'Mixed: anti-imperial solidarity and state security',
        explanation: 'Communist foreign policy can emphasize anti-imperialism, international revolution, solidarity with liberation movements, and formal interstate equality. Party-states have also pursued military alliances, strategic competition, intervention, proxy support, border defense, and coercive influence; ideology does not erase ordinary security and power calculations.',
        citations: citations(['marxEngelsManifesto', 'leninStateRevolution', 'morgenthauRealism'], ['foreignPolicy', 'oxfordHistoryCommunism', 'sepMarx']),
      },
      religion: {
        score: 55,
        label: 'Strongly secular public law',
        explanation: 'Marxist-Leninist legitimacy is generally grounded in materialist theory, class analysis, party leadership, and state law rather than clerical authority. Historical regimes ranged from regulated toleration to surveillance, closure, or repression of religious institutions; secular government should not be confused with freedom of religion. Hugi’s GDR overview contrasts constitutional religious freedom with policies limiting church influence. The positive coordinate denotes secular public authority, not tolerance, popular unbelief, or approval of coercion.',
        citations: citations(['marxEngelsManifesto', 'leninStateRevolution', 'spinozaPolitical'], ['sepMarx', 'sepReligionPolitics', 'ushmmCommunism', 'hugiGdrChurchPolicy']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Communism is best understood as both a long-term social ideal and a collection of movements, parties, states, and theories that have claimed to pursue it. The ideal is commonly associated with overcoming class domination, transforming ownership and production, and making social cooperation serve common rather than private accumulation. Marx did not provide a single administrative constitution for a future communist society, so later Marxist-Leninist institutions must be distinguished from the broader philosophical horizon.',
            citations: citations(['marxEngelsManifesto', 'leninStateRevolution'], ['sepMarx', 'sepSocialism']),
          },
          {
            type: 'paragraph',
            text: 'The main card uses “Communist / Marxist-Leninist” for a didactic profile in which collective economic direction is joined to disciplined party power. That combination describes a historically important family of revolutionary party-states, but it must not erase democratic communist, council communist, anarcho-communist, Eurocommunist, anti-colonial, Maoist, national-communist, and reformist differences. The same word can refer to a theory, a party, a regime, a social movement, or a geopolitical bloc.',
            citations: citations(['leninStateRevolution', 'luxemburgReformRevolution', 'marxEngelsManifesto'], ['sepSocialism', 'sepLuxemburg', 'oxfordHistoryCommunism']),
          },
          {
            type: 'paragraph',
            text: 'The East German case below separates three kinds of evidence: constitutional self-description, historical accounts of institutions, and this website’s illustrative classification. Neither an official promise nor an isolated example supplies a numerical measurement of an entire ideology.',
            citations: citations([], ['ghdiGdrConstitution1974', 'hugiGdrChurchPolicy', 'bundesarchivJugendweihe']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'The economic core is a critique of capitalism as a system of class power, not merely an objection to unequal income. Communist arguments focus on who owns productive assets, who controls the labor process, how surplus is distributed, and whether market dependence makes people subordinate to property and capital. The proposed alternatives range from common ownership and association to state planning, public enterprise, cooperative management, and transitional mixed arrangements.',
            citations: citations(['marxEngelsManifesto', 'leninStateRevolution'], ['sepMarx', 'sepSocialism']),
          },
          {
            type: 'paragraph',
            text: 'The political problem is transition. If a revolution must reorganize property, defend itself against internal and external opponents, and coordinate a complex economy, a party or state may claim unusual authority. Leninist theory gives the party a central role and treats revolutionary state power as transitional; critics argue that emergency institutions and monopoly leadership can become permanent, producing a bureaucratic class or a state detached from the workers it claims to represent.',
            citations: citations(['leninStateRevolution', 'luxemburgReformRevolution', 'arendtTotalitarianism'], ['sepLuxemburg', 'sepSocialism', 'oxfordHistoryCommunism']),
          },
          {
            type: 'paragraph',
            text: 'Communist social emancipation is therefore ambivalent in the historical record. Parties have organized literacy, health, employment, women’s participation, anti-colonial mobilization, and mass political education in some contexts. Party monopoly has also limited speech, independent unions, religious autonomy, minority self-organization, and the ability to change rulers peacefully. Social outcomes must be researched by period and institution rather than inferred from a regime label.',
            citations: citations(['marxEngelsManifesto', 'arendtTotalitarianism'], ['sepSocialism', 'oxfordHistoryCommunism', 'ushmmCommunism']),
          },
          {
            type: 'paragraph',
            text: 'Finally, “communist state” is a contested description. A government may call itself communist while claiming to be in a socialist transition, combining party rule with markets, retaining private firms, or prioritizing national development. The label records a political lineage and ruling ideology; it does not settle whether a society has achieved communism, whether its economy is centrally planned, or whether its institutions are democratic.',
            citations: citations(['marxEngelsManifesto', 'leninStateRevolution'], ['sepMarx', 'oxfordHistoryCommunism', 'aeaChinaSocialism']),
          },
          {
            type: 'paragraph',
            text: 'In GHDI’s German excerpt of the 1974 GDR constitution, Article 1 assigns leadership to the working class and its Marxist-Leninist party. Article 8 renounces conquest and military action against another people’s freedom. These are primary statements of institutional design and official commitments, not evidence that citizens controlled the party or that foreign policy fulfilled the stated principles.',
            citations: citations([], ['ghdiGdrConstitution1974']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Nineteenth century: socialism, industrial capitalism, and communist theory',
            text: 'Industrialization, wage labor, urban poverty, and political exclusion shaped the socialist milieu from which Marx and Engels developed their critique. The Communist Manifesto presented class struggle, the international expansion of capital, and collective transformation as historical and political problems. Its short program should be read as a revolutionary pamphlet, not as a complete institutional plan for later states.',
            citations: citations(['marxEngelsManifesto'], ['sepMarx', 'sepSocialism']),
          },
          {
            period: '1870s–1905: revolutionary organization and competing socialist strategies',
            text: 'After the Paris Commune and the growth of socialist parties and unions, debates sharpened over parliamentary reform, insurrection, party organization, mass participation, and the state. Revolutionary and evolutionary socialists shared a critique of capitalism while disagreeing over whether democratic reforms were a path, a compromise, or a substitute for social transformation.',
            citations: citations(['luxemburgReformRevolution', 'bernsteinEvolutionarySocialism', 'marxEngelsManifesto'], ['sepSocialism', 'sepLuxemburg']),
          },
          {
            period: '1917–1921: Bolshevik revolution, civil war, and the transitional state',
            text: 'The Bolshevik seizure of power created the first durable regime claiming Marxist revolutionary legitimacy. Civil war, foreign intervention, economic collapse, and the need to consolidate authority shaped institutions as much as pre-existing theory. Lenin’s arguments about the state and revolutionary transition must therefore be read alongside the practical emergency conditions that made party, security, and administrative power central.',
            citations: citations(['leninStateRevolution', 'luxemburgReformRevolution'], ['sepMarx', 'sepLuxemburg', 'ushmmCommunism']),
          },
          {
            period: '1920s–1953: Stalinism, collectivization, industrialization, and party-state consolidation',
            text: 'Under Stalin, the Soviet system developed extensive central planning, forced collectivization, industrial targets, bureaucratic administration, political policing, censorship, and a highly concentrated leadership structure. These institutions became a major reference for later critics and imitators, but “Stalinism” should not be projected unchanged onto Lenin’s period, post-Stalin reforms, or every communist movement.',
            citations: citations(['arendtTotalitarianism', 'leninStateRevolution'], ['ushmmCommunism', 'oxfordHistoryCommunism']),
          },
          {
            period: '1945–1960s: global communist expansion and national variants',
            text: 'After the Second World War, communist parties governed across Eastern Europe and revolutionary victories established new party-states in China, North Korea, Vietnam, and Cuba. Communist institutions were shaped by war, anti-colonial struggle, agrarian societies, Soviet power, national histories, and state-building needs. The global movement was never administratively uniform, and disagreements over strategy, sovereignty, and development produced major splits.',
            citations: citations(['leninStateRevolution', 'marxEngelsManifesto'], ['oxfordHistoryCommunism', 'ushmmCommunism', 'panAfricanism']),
          },
          {
            period: '1950s–1970s: Maoism, decolonization, and revolutionary development',
            text: 'Maoist politics adapted communist revolution to a predominantly rural society, emphasizing peasant mobilization, mass campaigns, continuous struggle, and a distinctive relationship between party, state, and social transformation. Elsewhere, communist and socialist movements connected national liberation to economic sovereignty and anti-imperial development. These projects cannot be reduced either to European industrial Marxism or to one universal model of modernization.',
            citations: citations(['marxEngelsManifesto', 'leninStateRevolution'], ['oxfordHistoryCommunism', 'panAfricanism', 'sepSocialism']),
          },
          {
            period: '1954–1959: East German Jugendweihe and religious institutions',
            text: 'The Bundesarchiv describes the state-sponsored coming-of-age ceremony as an instrument for reducing church influence. Its account connects the 1954 preparations and 1955 ceremonies to political policing, pressure through schools and workplaces, and intervention in church decision-making. It also reports declining Stasi attention to this particular conflict once the ceremony became established; this is not a claim that broader religious repression ended.',
            citations: citations([], ['bundesarchivJugendweihe']),
          },
          {
            period: '1960s–1980s: reform, dissent, Eurocommunism, and the limits of party monopoly',
            text: 'Reform communists, dissidents, workers, intellectuals, and Eurocommunist parties challenged Soviet orthodoxy, censorship, invasion, and the subordination of social institutions to the ruling party. East German documents show how Marxism-Leninism was taught as a civic ideology while criticism of the party-state remained constrained. These disputes reveal that communist commitments and democratic freedoms were debated inside the tradition, not only from outside it.',
            citations: citations(['luxemburgReformRevolution', 'leninStateRevolution'], ['ghdiMarxLeninism', 'sepLuxemburg', 'oxfordHistoryCommunism']),
          },
          {
            period: '1969–1978: institutional accommodation and renewed conflict in the GDR',
            text: 'Historian Sonja Hugi describes the 1969 formation of a separate East German Protestant church federation under SED pressure. Dialogue included a March 1978 meeting with Honecker, but compulsory military instruction introduced that September provoked renewed disagreement and church peace education. Negotiation and conflict therefore belong in the same history.',
            citations: citations([], ['hugiGdrChurchPolicy']),
          },
          {
            period: '1989–present: collapse, survival, and market-socialist hybrids',
            text: 'The collapse of most European communist regimes ended the Soviet-led bloc but not the political tradition. China, Vietnam, Cuba, North Korea, Laos, and communist parties elsewhere followed different paths of reform, economic opening, national development, isolation, or continued centralization. Contemporary classification requires separating constitutional party leadership, ownership patterns, market coordination, civil liberties, welfare outcomes, and official ideology rather than using a single communist/noncommunist binary.',
            citations: citations(['arendtTotalitarianism', 'leninStateRevolution'], ['oxfordHistoryCommunism', 'aeaChinaSocialism', 'vdem']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Marxian communism',
                distinction: 'Critiques capitalist class relations and imagines a post-capitalist association in which production is no longer organized around private accumulation and class domination.',
                relation: 'Theoretical source family for later communist movements, but Marx did not specify one inevitable administrative system or authorize every later party-state.',
                citations: citations(['marxEngelsManifesto'], ['sepMarx', 'sepSocialism']),
              },
              {
                label: 'Leninist vanguard communism',
                distinction: 'Gives a disciplined revolutionary party a leading role in organizing class consciousness, seizing state power, and defending a transition under hostile conditions.',
                relation: 'Directly informs the main Marxist-Leninist authority score, while its claims about emergency and transitional power remain contested.',
                citations: citations(['leninStateRevolution', 'luxemburgReformRevolution'], ['sepMarx', 'sepLuxemburg']),
              },
              {
                label: 'Stalinism and high party-state centralization',
                distinction: 'Combines extensive state planning and collectivization with bureaucratic hierarchy, political policing, censorship, forced mobilization, and concentrated leadership.',
                relation: 'A historically important regime form, not a synonym for every communist theory or every period of Soviet history.',
                citations: citations(['arendtTotalitarianism', 'leninStateRevolution'], ['ushmmCommunism', 'oxfordHistoryCommunism']),
              },
              {
                label: 'Maoism and peasant-based revolutionary communism',
                distinction: 'Adapts revolutionary Marxism to agrarian conditions through peasant mobilization, mass campaigns, cultural transformation, and a distinctive theory of ongoing struggle.',
                relation: 'Shares party-led collectivism but differs from Soviet models in social base, revolutionary strategy, and relationship between mass politics and state administration.',
                citations: citations(['marxEngelsManifesto', 'leninStateRevolution'], ['oxfordHistoryCommunism', 'sepSocialism']),
              },
              {
                label: 'Council communism and democratic communism',
                distinction: 'Places workers’ councils, direct participation, plural debate, and self-management above a permanent vanguard-party monopoly.',
                relation: 'Shares anti-capitalist and collective aims but is closer to the authority profile of libertarian socialism or anarcho-communism than to the main party-state card.',
                citations: citations(['luxemburgReformRevolution', 'marxEngelsManifesto'], ['sepLuxemburg', 'sepSocialism']),
              },
              {
                label: 'Eurocommunism and parliamentary communism',
                distinction: 'Attempts to combine communist economic goals or party identities with electoral competition, civil liberties, national democratic institutions, and independence from Soviet direction.',
                relation: 'Shows why communist identity does not always imply one-party rule, although economic commitments and the meaning of “socialism” varied substantially among parties.',
                citations: citations(['luxemburgReformRevolution', 'bernsteinEvolutionarySocialism'], ['sepSocialism', 'oxfordHistoryCommunism']),
              },
              {
                label: 'National and anti-colonial communism',
                distinction: 'Combines communist organization with national independence, anti-imperial sovereignty, local class structures, and state-led development.',
                relation: 'Explains why international class rhetoric can coexist with strong national identity and why postcolonial communist states should not be read only through European industrial history.',
                citations: citations(['marxEngelsManifesto', 'leninStateRevolution'], ['panAfricanism', 'oxfordHistoryCommunism', 'sepColonialism']),
              },
              {
                label: 'Market-socialist and reform communist systems',
                distinction: 'Retains communist-party leadership or socialist constitutional language while using markets, private firms, foreign investment, and mixed ownership to pursue development and state capacity.',
                relation: 'The economic axis may move toward the market without the political system becoming liberal or multiparty; China’s trajectory is a major example of why the axes must remain separate.',
                citations: citations(['leninStateRevolution'], ['aeaChinaSocialism', 'oxfordHistoryCommunism', 'vdem']),
              },
              {
                label: 'Church–state accommodation within a party-state',
                distinction: 'Hugi’s GDR account includes institutional dialogue alongside efforts to restrict churches.',
                relation: 'A policy relationship, not a separate communist doctrine or evidence that religious participants endorsed party rule. Accommodation must not be mistaken for either ideological agreement or equal political power.',
                citations: citations([], ['hugiGdrChurchPolicy']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'People, movements, and historical examples',
        blocks: [
          {
            type: 'people',
            entries: [
              {
                name: 'Karl Marx',
                role: 'Critic of capitalist class relations and major theorist of historical materialism, exploitation, political economy, and communist transformation.',
                caveat: 'Marx’s writings are not a complete blueprint for the Soviet, Chinese, Cuban, or other later party-states; the future society and transitional institutions remain subjects of interpretation.',
                citations: citations(['marxEngelsManifesto'], ['sepMarx', 'sepSocialism']),
              },
              {
                name: 'Vladimir Lenin',
                role: 'Revolutionary theorist of party organization, imperialism, state power, and the transition claimed by Bolshevism.',
                caveat: 'Lenin wrote across changing revolutionary and civil-war conditions. His theory and the institutions later justified in his name should be distinguished from Stalinist consolidation and from all communist movements.',
                citations: citations(['leninStateRevolution'], ['sepMarx', 'oxfordHistoryCommunism']),
              },
              {
                name: 'Rosa Luxemburg',
                role: 'Revolutionary socialist who defended mass democratic action and criticized bureaucratic substitution of party leadership for popular political freedom.',
                caveat: 'Luxemburg is included as an internal communist and revolutionary-socialist boundary, not as evidence that every Marxist-Leninist regime was democratic or that her positions resolve all institutional questions.',
                citations: citations(['luxemburgReformRevolution'], ['sepLuxemburg', 'sepSocialism']),
              },
              {
                name: 'Karl Marx and Friedrich Engels',
                role: 'Authors of the Communist Manifesto, which helped define modern communist vocabulary around class, capital, internationalism, and revolutionary transformation.',
                caveat: 'The pamphlet is polemical and historically situated; later party programs, state constitutions, and economic systems require separate evidence.',
                citations: citations(['marxEngelsManifesto'], ['sepMarx']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'Soviet Union',
                period: 'Russia/USSR, 1917–1991',
                match: 'Foundational party-state case spanning revolutionary rupture, civil war, central planning, collectivization, Stalinist terror, wartime mobilization, post-Stalin reform, and bureaucratic late socialism.',
                caveat: 'The USSR changed substantially across Lenin, Stalin, Khrushchev, Brezhnev, and Gorbachev. One score cannot represent all periods or all Soviet republics.',
                citations: citations(['leninStateRevolution', 'arendtTotalitarianism'], ['ushmmCommunism', 'oxfordHistoryCommunism']),
              },
              {
                name: 'People’s Republic of China',
                period: 'China, 1949–present; distinct phases require separate analysis',
                match: 'Communist-party state with revolutionary, Maoist, reform, market-socialist, and national-developmental phases.',
                caveat: 'The party’s communist identity, state ownership, private enterprise, market coordination, nationalism, civil liberties, and economic structure should be coded separately and dated. It is not a simple equivalent of either the early USSR or an unregulated market economy.',
                citations: citations(['marxEngelsManifesto', 'leninStateRevolution'], ['aeaChinaSocialism', 'oxfordHistoryCommunism', 'vdem']),
              },
              {
                name: 'Cuba after 1959',
                period: 'Cuba, 1959–present; revolutionary and reform periods differ',
                match: 'A revolutionary party-state combining public economic direction, anti-imperial internationalism, social programs, and centralized political authority.',
                caveat: 'The Cuban case requires separate research on the revolutionary transition, Soviet relationship, economic reforms, civil liberties, religious policy, and present conditions; it should not be generalized to all Latin American socialism.',
                citations: citations(['leninStateRevolution', 'marxEngelsManifesto'], ['oxfordHistoryCommunism', 'ushmmCommunism', 'foreignPolicy']),
              },
              {
                name: 'German Democratic Republic',
                period: 'East Germany, 1949–1990',
                match: 'Party leadership in the 1974 constitution; historical church-policy studies document both coercive interventions and negotiated institutional relations.',
                caveat: 'The selected sources cover different periods and questions. They do not establish one score for all GDR residents, prove religious consent, or replace separate research on economic outcomes, movement restrictions, and political participation.',
                citations: citations([], ['ghdiGdrConstitution1974', 'hugiGdrChurchPolicy', 'bundesarchivJugendweihe']),
              },
              {
                name: 'Vietnam and other postcolonial communist states',
                period: 'Especially Vietnam from 1945 onward; comparisons must be country- and period-specific',
                match: 'Revolutionary and anti-colonial state-building combined with communist-party leadership, national independence, public direction, and later economic reform.',
                caveat: 'Vietnam, Laos, North Korea, and other cases differ in war history, institutions, markets, social policy, foreign relations, and current political practice; a regional label is not enough evidence for one score.',
                citations: citations(['leninStateRevolution', 'marxEngelsManifesto'], ['oxfordHistoryCommunism', 'panAfricanism', 'foreignPolicy']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'authoritarian-collectivist', relation: 'closest analytical neighbor: emphasizes the party-state and collective economy, while “communist” also names a broader theory and movement tradition' },
              { id: 'democratic-socialist', relation: 'shares economic transformation and social ownership goals but places greater weight on pluralist elections, civil liberties, and non-revolutionary transition' },
              { id: 'anarcho-communist', relation: 'shares common ownership and class abolition but rejects the centralized state and vanguard-party authority emphasized here' },
              { id: 'libertarian-socialist', relation: 'shares anti-capitalist aims while prioritizing decentralized self-management, worker control, and limits on party or state hierarchy' },
              { id: 'anti-colonial-liberation', relation: 'can overlap through anti-imperialism, national liberation, and postcolonial development, but anti-colonial politics is not inherently communist' },
              { id: 'social-democratic', relation: 'shares social provision and labor politics in some histories but accepts regulated capitalism and parliamentary reform rather than abolishing capitalist ownership' },
              { id: 'national-socialist', relation: 'both may use mass-party and state-directed economic language, but Nazi racial nationalism and exterminatory politics are fundamentally opposed to communist class universalism' },
              { id: 'green-commons', relation: 'can overlap on public ownership and anti-extraction, but ecological limits and commons governance are not defining communist commitments' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'The most important criticism concerns the concentration of power. A party that claims to represent historical necessity can restrict opposition, independent unions, the press, courts, religious organizations, and internal party debate. Emergency rule may begin as a response to war or counter-revolution yet become ordinary government. Safeguards include competitive or genuinely accountable elections, independent courts, freedom of association, transparent administration, civilian control of security forces, and the ability to remove rulers without violence.',
            citations: citations(['luxemburgReformRevolution', 'arendtTotalitarianism', 'leninStateRevolution'], ['sepLuxemburg', 'oxfordHistoryCommunism', 'vdem', 'ushmmCommunism']),
          },
          {
            type: 'paragraph',
            text: 'A second criticism concerns the economic and administrative knowledge problem. Central plans can mobilize resources, provide universal services, or accelerate industrialization, but they can also suppress local information, create rigid targets, reward bureaucratic compliance, and make failure difficult to correct. Markets may improve coordination in some sectors while reproducing inequality and dependence. The relevant question is not simply state versus market, but who controls decisions, how information travels, what rights workers have, and how errors are corrected.',
            citations: citations(['marxEngelsManifesto', 'leninStateRevolution'], ['sepMarx', 'sepSocialism', 'oxfordHistoryCommunism', 'aeaChinaSocialism']),
          },
          {
            type: 'paragraph',
            text: 'A third criticism concerns the gap between emancipatory promises and lived pluralism. Class abolition does not automatically resolve gender, racial, ethnic, religious, national, or cultural domination. Universal social provision can coexist with censorship, forced conformity, political imprisonment, or unequal treatment of minorities. The project should therefore measure social rights, material outcomes, political freedom, and protection from state abuse separately rather than allowing one egalitarian claim to cancel another.',
            citations: citations(['marxEngelsManifesto', 'luxemburgReformRevolution', 'spinozaPolitical'], ['sepSocialism', 'sepReligionPolitics', 'oxfordHistoryCommunism', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'Finally, historical casualty estimates, famine explanations, repression records, and comparisons among communist regimes remain politically contested and methodologically uneven. The encyclopedia should cite specific archives, demographic studies, legal records, and historians for each claim, distinguish policy intention from consequence, and avoid both apologetic erasure and undifferentiated moral equivalence. Current country comparisons require dated evidence because institutions and economic policies change.',
            citations: citations(['arendtTotalitarianism', 'leninStateRevolution'], ['ushmmCommunism', 'oxfordHistoryCommunism', 'aeaChinaSocialism']),
          },
          {
            type: 'paragraph',
            text: 'The Jugendweihe example cautions against reading public participation as unconstrained personal conviction when schools, workplaces, and political police influence the available choices. This is an inference from the archive’s account, not a survey finding. Independent testimony and local records are still needed to understand participants’ motives, differences among communities, and the limits of police reporting.',
            citations: citations([], ['bundesarchivJugendweihe']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['marxEngelsManifesto', 'leninStateRevolution', 'luxemburgReformRevolution', 'bernsteinEvolutionarySocialism', 'arendtTotalitarianism', 'andersonImaginedCommunities', 'morgenthauRealism', 'spinozaPolitical'],
      researchSourceIds: ['sepMarx', 'sepSocialism', 'sepLuxemburg', 'ushmmCommunism', 'oxfordHistoryCommunism', 'ghdiMarxLeninism', 'aeaChinaSocialism', 'panAfricanism', 'sepColonialism', 'foreignPolicy', 'vdem', 'sepReligionPolitics', 'ghdiGdrConstitution1974', 'hugiGdrChurchPolicy', 'bundesarchivJugendweihe'],
      editorialNote: 'The main score is a didactic Marxist-Leninist party-state profile. It should not be used as a verdict on every communist thinker, socialist party, revolutionary movement, or present government. Marxian theory, Leninist organization, Stalinist rule, Maoism, democratic communism, anarcho-communism, and market-socialist systems remain separately identifiable traditions.',
    },
    researchGaps: [
      'Add primary and scholarly sources on Maoism, Ho Chi Minh, Castro, Kim Il-sung, Gramsci, Bukharin, Kautsky, council communism, Eurocommunism, and democratic communist parties, preserving internal disagreements.',
      'Expand Russian, German, Chinese, Vietnamese, Korean, Spanish, Portuguese, French, and other language scholarship, with translation and edition provenance recorded for every quotation or close textual claim.',
      'Add country- and period-specific research for the USSR, China, Vietnam, Cuba, North Korea, Laos, Eastern Europe, African communist movements, and Latin American parties instead of relying on regime-level generalizations.',
      'Add comparative evidence on workers’ control, unions, planning, collectivization, markets, welfare, education, health, famine, migration, coercion, prisons, censorship, religion, ethnicity, gender, and minority rights.',
      'Add archival and demographic research for disputed claims about deaths, repression, economic performance, and responsibility, distinguishing policy, implementation, unintended consequences, wartime conditions, and later political memory.',
      'Add a dedicated comparison of communist-party constitutional language with observed party competition, executive constraints, judicial independence, civil liberties, and mechanisms for leadership succession.',
      'Extend the bounded GDR case with the full 1949, 1968, and 1974 constitutional texts, verified print editions, scholarship on enforcement, church and minority perspectives, and independently reviewed archival files. The GHDI excerpt does not include the religion article; Hugi’s summary is not a substitute for that primary-text comparison.',
      'Compare Jugendweihe participation through local and participant-led evidence without inferring belief from attendance. Audit the separate FreeMode person/country source mappings; this encyclopedia-only case does not validate those comparisons.',
    ],
  },
  'anarcho-capitalist': {
    id: 'anarcho-capitalist',
    title: 'Anarcho-capitalist',
    canonicalLabel: 'Anarcho-capitalist',
    aliases: [
      'anarcho-capitalism',
      'market anarchism',
      'private-property anarchism',
      'private-law society',
      'stateless capitalism',
    ],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'This is a profile of radical right-libertarian arguments that combine abolition of the territorial state with strong private-property, contract, and market commitments. It is not a country classification, not ordinary free-market policy, not minarchism, and not interchangeable with socialist or mutualist anarchism.',
    timeScope: 'Intellectual antecedents include individualist anti-state and liberal property arguments; the modern label developed mainly in mid-twentieth-century United States libertarian thought and later market-anarchist debates.',
    geographicScope: 'Primarily a transatlantic and Anglophone intellectual tradition, with Austrian-school influences and later international digital, seasteading, and private-governance networks. Broader anarchist traditions have distinct European, Latin American, and other regional histories that should not be absorbed into this label.',
    summary: 'A radical market-libertarian position that rejects the state’s territorial monopoly of law, taxation, policing, and defense while defending private property, voluntary exchange, contractual association, and competing private providers. Its central unresolved problems are whether private protection agencies can avoid becoming states, how public goods and externalities are handled, whether initial property holdings are legitimate, and whether formal freedom survives large inequalities of wealth and bargaining power.',
    summaryCitations: citations(
      ['rothbardForNewLiberty', 'nozickASU', 'lockeSecondTreatise', 'hayekKnowledge'],
      ['sepAnarchism', 'sepLibertarianism', 'sepLiberalism'],
    ),
    dimensionInterpretations: {
      economic: {
        score: -96,
        label: 'Extremely strongly market-oriented',
        explanation: 'Private ownership, contract, competition, and entrepreneurial coordination are treated as the default institutions for production and distribution, including functions usually assigned to the state. The profile is more radical than classical liberalism because it rejects taxation and public economic administration in principle, not only excessive regulation.',
        citations: citations(['rothbardForNewLiberty', 'nozickASU', 'hayekKnowledge'], ['sepLibertarianism', 'sepAnarchism', 'sepLiberalism']),
      },
      social: {
        score: 10,
        label: 'Mixed: voluntary pluralism with property-based limits',
        explanation: 'The tradition generally favors freedom of association, speech, lifestyle, religion, and exit from unwanted institutions. Critics point out that private ownership can permit exclusion, dependency, employer domination, or unequal access to basic goods; a formal ban on state coercion does not settle every social-power question.',
        citations: citations(['nozickASU', 'millOnLiberty', 'rothbardForNewLiberty'], ['sepLibertarianism', 'sepAnarchism', 'sepLibertyPositiveNegative']),
      },
      authority: {
        score: -98,
        label: 'Extremely anti-state / polycentric authority',
        explanation: 'The defining commitment is opposition to a compulsory territorial monopoly of coercion. Courts, security, arbitration, infrastructure, and rules are expected to arise through contract, competition, insurance, private association, or local covenant; the profile must still explain how coercion by private actors is prevented and how dissenters can exit.',
        citations: citations(['rothbardForNewLiberty', 'nozickASU', 'lockeSecondTreatise'], ['sepAnarchism', 'sepLibertarianism', 'davidFriedmanMachinery2014']),
      },
      identity: {
        score: 30,
        label: 'Strongly individualist / weakly internationalist',
        explanation: 'Individual choice, voluntary association, and the right to leave a community take priority over compulsory national unity. Private communities may develop strong cultural or religious identities, and property jurisdictions can still create boundaries; anti-nationalism is therefore a tendency rather than a promise of cosmopolitan equality.',
        citations: citations(['rothbardForNewLiberty', 'nozickASU', 'kantPerpetualPeace'], ['sepLibertarianism', 'sepAnarchism', 'sepNationalism']),
      },
      foreign: {
        score: 76,
        label: 'Very strongly non-interventionist',
        explanation: 'Permanent alliances, imperial projects, conscription, and state militaries are rejected or minimized. Defense is imagined through voluntary insurance, private protection, contractual alliances, or local self-defense; critics stress that territorial defense and collective security are difficult to fund and coordinate without compulsory institutions.',
        citations: citations(['rothbardForNewLiberty', 'kantPerpetualPeace', 'morgenthauRealism'], ['sepLibertarianism', 'foreignPolicy', 'sepAnarchism']),
      },
      religion: {
        score: 55,
        label: 'Strongly secular / voluntary religious association',
        explanation: 'No religious institution should possess a compulsory territorial authority, but churches, mosques, synagogues, temples, and other communities may organize voluntarily under the same general property and contract rules. This is a secular institutional position, not necessarily an anti-religious one. This modern coordinate must not be projected onto medieval Iceland: the national park’s account includes bishops in the Law Council.',
        citations: citations(['rothbardForNewLiberty', 'lockeLetterToleration', 'spinozaPolitical'], ['sepReligionPolitics', 'sepLibertarianism', 'thingvellirLawCouncil']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Anarcho-capitalism combines two claims that are often treated as opposites: anarchism as rejection of the state and capitalism as reliance on private property and market exchange. Its advocates argue that law, arbitration, security, infrastructure, money, education, and welfare can be supplied by voluntary organizations rather than a tax-funded territorial government. The market is not merely an economic mechanism in this theory; it is proposed as a general method for coordinating social order.',
            citations: citations(['rothbardForNewLiberty'], ['sepAnarchism', 'sepLibertarianism']),
          },
          {
            type: 'paragraph',
            text: 'The label is narrower than libertarianism and more controversial within anarchist history. Many libertarians accept a minimal state, and many anarchists reject capitalism because they view private property, wage dependence, or concentrated economic power as forms of domination. Robert Nozick is an important interlocutor because he defended a minimal state rather than full anarcho-capitalism; his argument is evidence of the boundary, not evidence that he held the anarcho-capitalist position.',
            citations: citations(['nozickASU', 'rothbardForNewLiberty'], ['sepAnarchism', 'sepLibertarianism']),
          },
          {
            type: 'paragraph',
            text: 'Proposals for future institutions and interpretations of historical societies need different evidence. Medieval Iceland is examined below as a limited comparison, not as a society whose inhabitants shared this modern label or the website’s six-axis coordinates.',
            citations: citations([], ['davidFriedmanMachinery2014', 'byockFeuding2003', 'thingvellirLawCouncil']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'The normative foundation is usually individual self-ownership or strong rights against aggression. From that premise, advocates argue that taxation, regulation, compulsory monopoly, and state ownership violate rights unless they can be justified without coercion. Private property is treated as a legitimate extension of labor, acquisition, exchange, inheritance, or prior entitlement, although the legitimacy of historical acquisition and the treatment of common resources remain disputed.',
            citations: citations(['rothbardForNewLiberty', 'nozickASU', 'lockeSecondTreatise'], ['sepLibertarianism', 'sepLiberalism']),
          },
          {
            type: 'paragraph',
            text: 'The institutional proposal is polycentric private law. People may purchase protection, arbitration, insurance, dispute resolution, utilities, transport, and other services from competing providers; agreements and reputational systems are expected to constrain abuse. This proposal differs from simply privatizing a few state enterprises: it removes the presumption that one public authority has final jurisdiction over a territory.',
            citations: citations(['rothbardForNewLiberty', 'nozickASU'], ['sepAnarchism', 'sepLibertarianism']),
          },
          {
            type: 'paragraph',
            text: 'Friedman’s chapter 29 proposes advance arbitration agreements between competing enforcement firms, arguing that conflict is costly. This is a proposed incentive mechanism, not an observed guarantee against violence or monopoly.',
            citations: citations([], ['davidFriedmanMachinery2014']),
          },
          {
            type: 'paragraph',
            text: 'The theory depends on several empirical and institutional assumptions: that competition will prevent provider monopolies, that people can exit abusive arrangements, that private courts can coordinate rules, that defense can be funded voluntarily, and that market prices can handle public goods and externalities. These are not consequences of the non-aggression principle alone. They are open questions that must be separated from the moral claim that state coercion is illegitimate.',
            citations: citations(['nozickASU', 'hayekKnowledge', 'millOnLiberty'], ['sepAnarchism', 'sepLibertarianism', 'sepLibertyPositiveNegative']),
          },
          {
            type: 'paragraph',
            text: 'Social freedom is also contested. Voluntary contract can protect exit and experimentation, yet unequal property ownership can make nominally voluntary relationships difficult to refuse. A tenant, employee, debtor, child, migrant, or person without access to land may face private power even when no public official directly commands them. Whether such dependence counts as coercion, exploitation, or an acceptable result of free exchange is one of the tradition’s central disputes.',
            citations: citations(['nozickASU', 'millOnLiberty', 'rothbardForNewLiberty'], ['sepLibertarianism', 'sepLibertyPositiveNegative', 'sepAnarchism']),
          },
          {
            type: 'paragraph',
            text: 'For medieval Iceland, Byock emphasizes economic interdependence, shared institutions, and pressures toward compromise, rather than explaining order through isolated transactions alone. He interprets chieftains as brokers assembling support under social and economic constraints. This historical account helps identify conditions that an analogy must examine; it neither endorses nor experimentally disproves modern market anarchism.',
            citations: citations([], ['byockFeuding2003']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Seventeenth–nineteenth centuries: property, consent, and anti-state antecedents',
            text: 'Lockean rights, consent, property, and resistance arguments supplied part of the later vocabulary, but Locke defended political government and did not propose anarcho-capitalism. Nineteenth-century individualist anarchists and market-oriented anti-state writers supplied other antecedents, while mutualists, collectivist anarchists, and socialists disputed the meaning of property and exchange. These traditions should be recorded as genealogical neighbors, not retroactively renamed.',
            citations: citations(['lockeSecondTreatise', 'rothbardForNewLiberty'], ['sepAnarchism', 'sepLiberalism']),
          },
          {
            period: 'Late nineteenth–early twentieth centuries: Austrian economics and the knowledge problem',
            text: 'Austrian economic arguments about dispersed knowledge, calculation, entrepreneurial discovery, and the limits of central planning later influenced market-libertarian reasoning. Mises and Hayek were not anarcho-capitalists in the strict sense: their arguments generally retained a role for a limited state. Their inclusion clarifies an economic influence without converting classical or Austrian liberalism into stateless capitalism.',
            citations: citations(['hayekKnowledge'], ['sepLibertarianism', 'sepLiberalism']),
          },
          {
            period: '1940s–1960s: modern right-libertarian formation',
            text: 'Postwar American libertarian debate combined natural-rights language, anti-statism, Austrian economics, and strong property claims. Murray Rothbard developed a systematic private-property anarchist argument and helped establish the modern anarcho-capitalist vocabulary. The movement emerged in opposition both to welfare-state expansion and to socialist or communist state planning.',
            citations: citations(['rothbardForNewLiberty', 'hayekKnowledge'], ['sepLibertarianism', 'sepAnarchism']),
          },
          {
            period: '1970s: the minimal-state challenge',
            text: 'Robert Nozick’s Anarchy, State, and Utopia made the anarchist challenge central to academic political philosophy while defending a minimal state that protects against force, theft, fraud, and rights violations. His account is a crucial boundary: it argues that a dominant protective association may emerge from a stateless condition, while stopping short of the anarcho-capitalist conclusion.',
            citations: citations(['nozickASU'], ['sepLibertarianism', 'sepAnarchism']),
          },
          {
            period: '1973–2014: Friedman’s evolving institutional proposal',
            text: 'The Machinery of Freedom first appeared in 1973. This entry consults selected pages of the expanded 2014 third edition; it does not attribute all later material to the first edition.',
            citations: citations([], ['davidFriedmanMachinery2014']),
          },
          {
            period: '1980s–2000s: market anarchism, private governance, and digital networks',
            text: 'Later debates explored private law, free banking, seasteading, charter cities, special jurisdictions, voluntary security, and digital or cryptographic forms of coordination. These projects vary in whether they seek to abolish states, create new jurisdictions, or introduce competition inside existing states. An experiment in one service or enclave is not evidence that a whole society can operate without a public authority.',
            citations: citations(['rothbardForNewLiberty', 'nozickASU', 'hayekKnowledge'], ['sepAnarchism', 'sepLibertarianism', 'openTextbook']),
          },
          {
            period: 'Contemporary debate: private order, inequality, and the state’s return',
            text: 'Contemporary advocates continue to debate cryptocurrency, online communities, private cities, arbitration, alternative currencies, and exit-based governance. Critics focus on private violence, monopoly, unequal bargaining power, ecological externalities, public goods, and the tendency for a dominant provider to recreate a state. No contemporary country is an exact match because all recognized states retain public law and territorial coercive institutions.',
            citations: citations(['nozickASU', 'rothbardForNewLiberty', 'millOnLiberty'], ['sepAnarchism', 'sepLibertarianism', 'foreignPolicy']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Rothbardian natural-rights anarcho-capitalism',
                distinction: 'Begins from self-ownership, a non-aggression principle, and strong private-property rights, then rejects taxation and the state as inherently coercive.',
                relation: 'The closest fit to the main profile and its extremely anti-state economic-market scores; it remains a normative argument rather than a demonstrated institutional outcome.',
                citations: citations(['rothbardForNewLiberty'], ['sepAnarchism', 'sepLibertarianism']),
              },
              {
                label: 'Consequentialist market anarchism',
                distinction: 'Friedman identifies consequentialist reasoning as central to his case for libertarian institutions.',
                relation: 'He rejects utilitarianism as a final moral standard while favoring consequence-based defenses of liberty (chapter 42). A strategy of argument must not be confused with a complete moral theory.',
                citations: citations([], ['davidFriedmanMachinery2014']),
              },
              {
                label: 'Minarchism',
                distinction: 'Retains a very limited state for courts, defense, and protection against force, theft, and fraud while restricting its economic and social functions.',
                relation: 'The nearest libertarian neighbor but not anarcho-capitalism: a compulsory territorial authority remains legitimate in principle.',
                citations: citations(['nozickASU', 'lockeSecondTreatise'], ['sepLibertarianism', 'sepLiberalism']),
              },
              {
                label: 'Georgist or land-focused market anarchism',
                distinction: 'Accepts markets and private exchange while arguing that land or natural-resource value cannot be treated like an ordinary product without addressing common claims or equal access.',
                relation: 'Challenges absolute property readings from within market-oriented politics and exposes why initial acquisition is central to the profile.',
                citations: citations(['lockeSecondTreatise', 'millOnLiberty'], ['sepLibertarianism', 'sepLiberalism']),
              },
              {
                label: 'Polycentric private-law society',
                distinction: 'Emphasizes competing arbitration, insurance, security, and legal providers whose rules are coordinated through contracts, reputation, and consumer choice.',
                relation: 'Focuses on institutional mechanism rather than one moral foundation; it faces the problem of conflict among providers and the emergence of dominant agencies.',
                citations: citations(['nozickASU', 'rothbardForNewLiberty'], ['sepAnarchism', 'sepLibertarianism']),
              },
              {
                label: 'Cyber-libertarian, seasteading, or enclave projects',
                distinction: 'Uses digital networks, voluntary migration, special jurisdictions, or newly built communities to test exit, private governance, and low-state arrangements.',
                relation: 'These are contemporary experiments or proposals, not proof that a complex territorial society has become stateless; their legal status normally depends on an existing state.',
                citations: citations(['hayekKnowledge', 'rothbardForNewLiberty'], ['sepAnarchism', 'openTextbook']),
              },
              {
                label: 'Individualist and mutualist anarchist neighbors',
                distinction: 'Shares skepticism toward centralized states and may value exchange or voluntary association, while often rejecting capitalist property, wage hierarchy, or private monopolization of land.',
                relation: 'Historically adjacent but theoretically distinct; “anarchism” does not entail anarcho-capitalism and many anarchists explicitly reject the capitalist half of the label.',
                citations: citations(['rothbardForNewLiberty', 'millOnLiberty'], ['sepAnarchism', 'sepLibertarianism']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'People, experiments, and historical examples',
        blocks: [
          {
            type: 'people',
            entries: [
              {
                name: 'Murray N. Rothbard',
                role: 'Major modern theorist of private-property anarchism, self-ownership, non-aggression, and market provision of law and security.',
                caveat: 'Rothbard provides the clearest primary statement for this profile, but a theorist’s proposal is not evidence that a stateless market society has existed or that its institutions would resolve every conflict.',
                citations: citations(['rothbardForNewLiberty'], ['sepAnarchism', 'sepLibertarianism']),
              },
              {
                name: 'David D. Friedman',
                role: 'Author proposing competitive law and enforcement in The Machinery of Freedom.',
                caveat: 'Included as an advocate, not as independent empirical validation. His institutions and historical analogies must be assessed separately.',
                citations: citations([], ['davidFriedmanMachinery2014']),
              },
              {
                name: 'Robert Nozick',
                role: 'Minimal-state philosopher whose argument about protective associations directly engages the anarcho-capitalist challenge.',
                caveat: 'Nozick is a boundary case and critic of the full anarcho-capitalist conclusion. His minimal state should not be presented as an anarchist or stateless model.',
                citations: citations(['nozickASU'], ['sepAnarchism', 'sepLibertarianism']),
              },
              {
                name: 'Friedrich A. Hayek',
                role: 'Austrian and liberal thinker whose work on dispersed knowledge and spontaneous order influenced market-libertarian arguments.',
                caveat: 'Hayek defended a limited public framework and should not be labelled anarcho-capitalist; he is included as an economic and institutional influence only.',
                citations: citations(['hayekKnowledge'], ['sepLibertarianism', 'sepLiberalism']),
              },
              {
                name: 'John Locke',
                role: 'Earlier theorist of natural rights, consent, property, and resistance to arbitrary rule whose arguments are part of the genealogy.',
                caveat: 'Locke defended political government and therefore is not an anarcho-capitalist. His inclusion shows that property rights and anti-arbitrary-rule arguments do not automatically imply abolition of the state.',
                citations: citations(['lockeSecondTreatise'], ['sepLiberalism', 'sepAnarchism']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'No sovereign-state match',
                period: 'Present and historical comparison',
                match: 'No recognized country can be an exact example because every state retains public law, territorial jurisdiction, taxation or compulsory regulation, and a claim to legitimate coercion.',
                caveat: 'The absence of a country match is a definitional consequence, not proof that the theory is impossible or that every state is equally coercive.',
                citations: citations(['rothbardForNewLiberty', 'nozickASU'], ['sepAnarchism', 'sepLibertarianism']),
              },
              {
                name: 'Medieval Iceland — a bounded institutional comparison',
                period: 'Commonwealth period, approximately 930–1262; institutional arrangements changed over time',
                match: 'Friedman compares private enforcement in Iceland with his proposal but explicitly distinguishes its shared courts and legislature from competing legal systems.',
                caveat: 'The national park’s account describes lawmaking by the Lögrétta and privileged participation by chieftains, later joined by bishops. This was not universal political equality or a verified match to modern secular capitalism. No historical six-axis score is assigned.',
                citations: citations([], ['davidFriedmanMachinery2014', 'thingvellirLawCouncil']),
              },
              {
                name: 'Market-oriented jurisdictions',
                period: 'Contemporary, country- and period-specific',
                match: 'Low-tax, lightly regulated, or commercially open jurisdictions can approximate particular economic preferences.',
                caveat: 'They remain states with public courts, police, regulation, taxation, and territorial law; market orientation alone is not anarcho-capitalism.',
                citations: citations(['hayekKnowledge', 'lockeSecondTreatise'], ['sepLibertarianism', 'sepLiberalism']),
              },
              {
                name: 'Special economic zones and private communities',
                period: 'Modern experiments within state jurisdictions',
                match: 'Some zones or communities use private management, contractual services, or unusual regulatory arrangements to test partial exit and competition.',
                caveat: 'Their charters, land rights, courts, security, and ultimate enforceability depend on a surrounding state. They are partial institutional experiments, not stateless societies.',
                citations: citations(['rothbardForNewLiberty', 'hayekKnowledge'], ['sepAnarchism', 'sepLibertarianism']),
              },
              {
                name: 'Nineteenth-century individualist anarchist and voluntaryist debates',
                period: 'United States and Europe, nineteenth century',
                match: 'Anti-state and voluntary-association arguments supplied parts of the later vocabulary of private law and individual sovereignty.',
                caveat: 'Many individualist anarchists criticized capitalist property or defended mutualist arrangements. They should not be retroactively counted as anarcho-capitalists without author- and text-specific evidence.',
                citations: citations(['rothbardForNewLiberty', 'millOnLiberty'], ['sepAnarchism', 'sepLibertarianism']),
              },
              {
                name: 'Digital, cryptocurrency, and seasteading projects',
                period: 'Late twentieth century–present',
                match: 'Contemporary projects explore voluntary association, alternative currencies, online governance, migration between jurisdictions, and private rule-making.',
                caveat: 'They vary widely and normally depend on state-recognized contracts, property law, infrastructure, or jurisdiction. A technical platform or private association is not automatically a market-anarchist polity.',
                citations: citations(['rothbardForNewLiberty', 'hayekKnowledge'], ['sepAnarchism', 'openTextbook']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'libertarian-market', relation: 'shares strong market and property commitments, but the market-libertarian card can accept a limited state while anarcho-capitalism rejects the state in principle' },
              { id: 'classical-liberal', relation: 'shares individual rights, property, contract, and limited government, but classical liberalism retains constitutional public authority' },
              { id: 'liberal-constitutionalist', relation: 'shares civil liberties and limits on arbitrary power, but constitutional liberalism treats public law and accountable government as necessary' },
              { id: 'anarcho-communist', relation: 'shares anti-state commitments but rejects private capitalist ownership and favors common ownership or free association' },
              { id: 'anarchist-communalist', relation: 'shares anti-hierarchical aspirations but differs over markets, private property, municipal democracy, and the meaning of economic freedom' },
              { id: 'democratic-socialist', relation: 'may share criticism of concentrated power but accepts collective provision and democratic state action that anarcho-capitalism rejects' },
              { id: 'minarchist', relation: 'the closest state-accepting neighbor: a minimal public authority remains legitimate for courts, defense, and rights protection' },
              { id: 'green-commons', relation: 'can overlap on local autonomy and skepticism of centralization, but commons governance and ecological obligations challenge absolute private-property primacy' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'The central institutional criticism is the private-monopoly problem. If one protection or arbitration agency becomes dominant, it may exercise state-like power without public accountability. If several agencies disagree, conflict may be settled by wealth, force, or alliance rather than a common rule. Nozick’s minimal-state argument is important because it claims that protective associations can tend toward a dominant agency; whether that outcome is legitimate or avoidable remains disputed.',
            citations: citations(['nozickASU', 'rothbardForNewLiberty'], ['sepAnarchism', 'sepLibertarianism']),
          },
          {
            type: 'paragraph',
            text: 'A second criticism concerns public goods and externalities. National defense, epidemic control, climate stability, basic infrastructure, open knowledge, and protection of people who cannot pay are difficult to provide through ordinary consumer contracts alone. Voluntary charity or insurance may help, but the theory must explain free-riding, universal access, coordination across jurisdictions, and harms imposed on people who never agreed to a provider’s rules.',
            citations: citations(['hayekKnowledge', 'millOnLiberty', 'kantPerpetualPeace'], ['sepLibertarianism', 'sepAnarchism', 'foreignPolicy', 'sepClimateJustice']),
          },
          {
            type: 'paragraph',
            text: 'A third criticism concerns property and bargaining power. If land, water, minerals, housing, or infrastructure are initially enclosed or unequally inherited, later contracts may preserve a distribution that many people cannot realistically refuse. The distinction between voluntary exchange and dependence therefore cannot be resolved by assuming that every party has comparable alternatives. Research must identify acquisition history, labor conditions, access to essentials, and the availability of genuine exit.',
            citations: citations(['lockeSecondTreatise', 'nozickASU', 'millOnLiberty'], ['sepLibertarianism', 'sepLibertyPositiveNegative', 'sepLiberalism']),
          },
          {
            type: 'paragraph',
            text: 'Finally, the profile does not automatically protect social equality, minority security, or freedom from private domination. Private communities may be tolerant and pluralist, but they may also exclude, discriminate, impose religious or contractual rules, or make exit costly. Safeguards would need to specify non-aggression limits, due process, children’s and dependent persons’ rights, protection from violence and fraud, transparent contracts, remedies for third-party harms, and mechanisms that prevent private jurisdiction from becoming unaccountable sovereignty.',
            citations: citations(['rothbardForNewLiberty', 'nozickASU', 'lockeLetterToleration', 'spinozaPolitical'], ['sepAnarchism', 'sepLibertarianism', 'sepReligionPolitics', 'sepLibertyPositiveNegative']),
          },
          {
            type: 'paragraph',
            text: 'Friedman himself concedes in chapter 31 that market-produced law need not always be libertarian, despite arguing that it tends toward freedom. Institutional competition and protection of liberty are therefore separate claims even within his defense.',
            citations: citations([], ['davidFriedmanMachinery2014']),
          },
          {
            type: 'paragraph',
            text: 'Byock warns against letting saga episodes of spectacular violence stand for ordinary social practice. His account stresses conflict containment and negotiated settlement. The encyclopedia consequently treats neither saga incidents nor their absence as a representative violence dataset; comparative rates, causal explanations, and generalization to large modern societies require additional evidence.',
            citations: citations([], ['byockFeuding2003']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['rothbardForNewLiberty', 'nozickASU', 'hayekKnowledge', 'lockeSecondTreatise', 'millOnLiberty', 'kantPerpetualPeace', 'lockeLetterToleration', 'spinozaPolitical', 'morgenthauRealism'],
      researchSourceIds: ['sepAnarchism', 'sepLibertarianism', 'sepLiberalism', 'sepLibertyPositiveNegative', 'sepReligionPolitics', 'foreignPolicy', 'sepClimateJustice', 'openTextbook', 'davidFriedmanMachinery2014', 'byockFeuding2003', 'thingvellirLawCouncil'],
      editorialNote: 'The profile describes a radical right-libertarian proposal, not an observed country or a verdict on all anarchism. It distinguishes abolition of the state from deregulation, market orientation from private law, and voluntary association from the empirical ability to exit unequal or coercive arrangements.',
    },
    researchGaps: [
      'Add primary works and scholarly debate on David Friedman, Hans-Hermann Hoppe, Bruce Benson, Linda and Morris Tannehill, Lysander Spooner, Benjamin Tucker, and mutualist critics, recording where each author does or does not fit the label.',
      'Add German- and Austrian-language scholarship on Mises, Hayek, private law, spontaneous order, calculation, and the limits of state planning, with translation and edition provenance.',
      'Add comparative legal and economic research on private arbitration, security, insurance, common-pool resources, public goods, externalities, competition policy, and historical cases of stateless or polycentric legal order.',
      'Add evidence on land acquisition, Indigenous and communal property, slavery, colonial enclosure, company towns, labor dependence, housing, disability, childhood, migration, and whether exit is materially available to affected people.',
      'Add specialist research on cryptocurrency governance, decentralized autonomous organizations, seasteading, charter cities, special economic zones, private cities, and the relationship between experimental autonomy and surrounding state law.',
      'Add systematic ethical and empirical comparisons with classical liberalism, minarchism, mutualism, anarcho-communism, communalism, and constitutional pluralism rather than treating all anti-state language as one tradition.',
      'Extend the selected Friedman and Byock readings to complete chapters and competing interpretations, including William Ian Miller and Friedman’s 1979 legal-history article. The latter’s repository metadata was checked but its full text was not reviewed. Verify Icelandic legal texts, editions, changing institutions, slavery, women’s status, church power, and access to enforcement before assigning broader historical matches.',
      'Test the transferability of historically specific cooperation and enforcement mechanisms without treating saga narratives as a representative violence sample. Reconcile the Commonwealth’s ending dates across institutional changes rather than assigning a single causal explanation to its collapse.',
    ],
  },
  'anarcho-communist': {
    id: 'anarcho-communist',
    title: 'Anarcho-communist',
    canonicalLabel: 'Anarcho-communist',
    aliases: [
      'anarchist communism',
      'libertarian communism',
      'communist anarchism',
      'free communism',
      'anarcho-communism',
    ],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'This profile describes anti-state communist traditions centered on common ownership, mutual aid, direct participation, and decentralized self-management. It is not a synonym for Marxist-Leninist party-state communism, anarcho-capitalism, every anarchist current, or every wartime collective.',
    timeScope: 'Modern forms developed inside nineteenth-century socialist and anarchist debates, especially from the 1870s onward; important experiments appeared during the Russian Revolution and Spanish Civil War, with later communalist, ecological, feminist, and autonomy-oriented reinterpretations.',
    geographicScope: 'Transnational tradition with major Russian, Ukrainian, Spanish, French, Italian, British, North American, Latin American, and international histories. The surviving literature is uneven and often mediated through translation, movement archives, and partisan memoirs.',
    summary: 'A communist and anarchist tradition seeking common or social ownership without a centralized state, permanent ruling party, or hierarchical command. It emphasizes mutual aid, free association, direct democracy, federated communes, worker and community self-management, and distribution according to collectively determined needs. Its central dilemmas concern coordination at scale, defense, internal coercion, economic planning, dissent, and how a revolutionary movement avoids reproducing a new authority.',
    summaryCitations: citations(
      ['kropotkinConquestBread', 'kropotkinMutualAid', 'bakuninStatism', 'bookchinLibertarianMunicipalism'],
      ['sepAnarchism', 'sepSocialism', 'socialEcologyMunicipalism'],
    ),
    dimensionInterpretations: {
      economic: {
        score: 94,
        label: 'Very strongly collectivist / commons-oriented',
        explanation: 'The tradition rejects private accumulation and capitalist control of productive resources in favor of common ownership, free access, cooperative production, or worker and community management. It also rejects simply transferring ownership to a centralized state: the difficult question is how collective control is exercised without a new managerial class.',
        citations: citations(['kropotkinConquestBread', 'kropotkinMutualAid', 'bakuninStatism'], ['sepAnarchism', 'sepSocialism']),
      },
      social: {
        score: 58,
        label: 'Strongly emancipatory / progressive',
        explanation: 'Abolition of class hierarchy, mutual aid, voluntary association, gender and social emancipation, and opposition to inherited domination are central tendencies. Historical movements were internally unequal and sometimes reproduced gendered, ethnic, or disciplinary exclusions, so the score describes the normative direction rather than every participant or practice.',
        citations: citations(['kropotkinMutualAid', 'bakuninStatism', 'millOnLiberty'], ['sepAnarchism', 'sepSocialism', 'openTextbook']),
      },
      authority: {
        score: -100,
        label: 'Maximally anti-state and anti-hierarchical',
        explanation: 'The state, permanent political monopoly, and hierarchical command are rejected in favor of federated communes, assemblies, voluntary associations, recallable delegates, and self-management. This does not mean that anarcho-communist communities have no rules, coordination, or sanctions; it means those powers should remain decentralized, accountable, and non-sovereign.',
        citations: citations(['bakuninStatism', 'kropotkinConquestBread', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'socialEcologyMunicipalism']),
      },
      identity: {
        score: 70,
        label: 'Strongly internationalist and decentralist',
        explanation: 'Class solidarity, international association, and local self-government are preferred to compulsory national loyalty. Communes and movements can still develop strong cultural, linguistic, regional, or revolutionary identities; internationalism therefore coexists with local belonging and does not erase conflicts over boundaries or membership.',
        citations: citations(['bakuninStatism', 'kropotkinMutualAid', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'sepSocialism', 'openTextbook']),
      },
      foreign: {
        score: 68,
        label: 'Anti-militarist / non-imperial, with disagreements about force',
        explanation: 'Imperialism, standing armies, conquest, and state militarism are rejected, while solidarity across borders is encouraged. Revolutionary communities have nevertheless organized armed self-defense under attack. Malatesta’s 1926 essay distinguishes nonresistance, revolutionary force, and self-defense: anti-state politics does not necessarily entail absolute nonviolence. This composite coordinate is not a measurement of those different strategies.',
        citations: citations(['bakuninStatism', 'kropotkinMutualAid', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'foreignPolicy', 'socialEcologyMunicipalism', 'malatestaCommunismIndividualism1926']),
      },
      religion: {
        score: 45,
        label: 'Secular and pluralist, with religious-anarchist neighbors',
        explanation: 'No church, clerical hierarchy, or religious law should possess compulsory political authority. Voluntary religious association can coexist with decentralized communism, and religious anarchist currents have contributed to anti-state politics; the profile is institutionally secular rather than necessarily anti-religious.',
        citations: citations(['bakuninStatism', 'kropotkinMutualAid', 'millOnLiberty'], ['sepAnarchism', 'sepReligionPolitics']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Anarcho-communism joins the communist critique of private accumulation and class domination to anarchism’s rejection of the state and permanent hierarchy. Its proposed society is organized through common or social ownership, mutual aid, voluntary association, direct participation, federated communes, and collective decisions about production and distribution. The purpose is not simply to make the state own everything, but to prevent both private capital and a state bureaucracy from controlling the conditions of life.',
            citations: citations(['kropotkinConquestBread', 'bakuninStatism'], ['sepAnarchism', 'sepSocialism']),
          },
          {
            type: 'paragraph',
            text: 'The label contains several overlapping traditions rather than one final blueprint. Kropotkin’s account of mutual aid and free access, Bakunin’s critique of state socialism, anarcho-syndicalist workplace organization, feminist and pacifist anarchism, and Bookchin’s later libertarian municipalism share anti-domination themes while differing over markets, technology, revolution, ecology, gender, organization, and defense. Historical experiments should be treated as partial and contested evidence, not as completed models.',
            citations: citations(['kropotkinConquestBread', 'kropotkinMutualAid', 'bakuninStatism', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'socialEcologyMunicipalism']),
          },
          {
            type: 'paragraph',
            text: 'Malatesta’s Communism and Individualism (April 1926) defends communism without making it compulsory: people could choose other economic arrangements consistent with equal freedom and non-exploitation. His preference for cooperation is an argument open to experience, not evidence that one uniform lifestyle suits everyone.',
            citations: citations([], ['malatestaCommunismIndividualism1926']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'The economic proposal begins from the idea that land, knowledge, tools, infrastructure, and productive capacity are a social inheritance created by many generations. Since no individual created the whole productive environment, anarcho-communists argue that it should not be controlled as a private source of rent or profit. Production is organized cooperatively, and access to necessities is guided by need, reciprocity, social agreements, or the capacity of communities to provide them.',
            citations: citations(['kropotkinConquestBread', 'kropotkinMutualAid'], ['sepAnarchism', 'sepSocialism']),
          },
          {
            type: 'paragraph',
            text: 'The political proposal is federated self-government. Local assemblies, workplace groups, cooperatives, neighborhood councils, and communes make decisions directly or through delegates who can be recalled and whose mandates remain limited. Federation is intended to coordinate transport, health, production, defense, and ecological systems without creating a sovereign center. The tension is practical: coordination can require expertise, regular administration, and binding decisions, all of which can drift toward hierarchy if not accountable.',
            citations: citations(['bakuninStatism', 'bookchinLibertarianMunicipalism', 'kropotkinConquestBread'], ['sepAnarchism', 'socialEcologyMunicipalism']),
          },
          {
            type: 'paragraph',
            text: 'Mutual aid is both a moral principle and an account of social capacity. Cooperation is not assumed to eliminate disagreement, scarcity, free-riding, prejudice, or conflict; rather, institutions should make solidarity easier and domination harder. A serious description must therefore ask how communities allocate scarce goods, protect dissenters, handle serious harm, coordinate across regions, and prevent informal leaders, armed groups, or charismatic organizers from becoming an unaccountable ruling layer.',
            citations: citations(['kropotkinMutualAid', 'millOnLiberty', 'bakuninStatism'], ['sepAnarchism', 'sepLibertyPositiveNegative']),
          },
          {
            type: 'paragraph',
            text: 'Anarcho-communism is not identical to a society with no rules or to spontaneous disorder. It proposes rules without a sovereign state, authority without permanent rulers, and collective coordination without a centralized monopoly. Those distinctions are normatively important but empirically demanding: the historical record often comes from wartime experiments, partisan sources, incomplete archives, and institutions forced to compromise under military pressure.',
            citations: citations(['bakuninStatism', 'kropotkinConquestBread'], ['sepAnarchism', 'cambridgeSpanishAnarchism', 'makhnoRuralAnarchism']),
          },
          {
            type: 'paragraph',
            text: 'In A Project of Anarchist Organisation (October 1927), Malatesta supports organization while rejecting executive control over members. He proposes voluntary federations, congresses offering recommendations, and administrative committees facilitating correspondence rather than governing. These are organizational proposals, not demonstrated safeguards against informal domination.',
            citations: citations([], ['malatestaOrganization1927']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: '1860s–1870s: socialist anarchism and the critique of state socialism',
            text: 'Within the international socialist movement, anarchists argued that emancipation could not be achieved by replacing private capital with a centralized state that claimed to represent workers. Bakunin defended collective revolutionary organization while attacking political hierarchy and the prospect of a new ruling minority. The later communist-anarchist tradition inherited this anti-state and anti-bureaucratic problem.',
            citations: citations(['bakuninStatism'], ['sepAnarchism', 'sepSocialism']),
          },
          {
            period: '1880s–1890s: Kropotkin, mutual aid, and free access',
            text: 'Kropotkin developed an anarcho-communist vision grounded in cooperation, decentralized production, common inheritance, and access to the means of life. Mutual Aid supplied an account of cooperation as a social capacity, while The Conquest of Bread offered a normative sketch of post-revolutionary provision. Neither work should be treated as a detailed modern macroeconomic plan or as evidence that scarcity disappears automatically.',
            citations: citations(['kropotkinMutualAid', 'kropotkinConquestBread'], ['sepAnarchism', 'sepSocialism']),
          },
          {
            period: '1885–1915: transnational Italian anarchist networks',
            text: 'Historian Davide Turcato argues that exile and cross-border networks sustained organization that national histories can overlook. His study follows Malatesta and the anarchist press across Atlantic and Mediterranean connections. This concerns a wider movement, not exclusively communist anarchists or an implemented economic system.',
            citations: citations([], ['turcatoTransnationalAnarchism']),
          },
          {
            period: '1890s–1930s: syndicalism, federations, and revolutionary organization',
            text: 'Anarcho-syndicalist unions connected workplace action, direct democracy, strikes, and revolutionary social transformation. Movement debates concerned whether unions should be primarily economic organizations, whether an explicitly anarchist federation was necessary, and how to coordinate without reproducing a party. These disagreements shaped later experiments in Spain and elsewhere.',
            citations: citations(['bakuninStatism', 'kropotkinMutualAid'], ['sepAnarchism', 'openTextbook']),
          },
          {
            period: '1917–1921: Russian Revolution and the Free Territory of Ukraine',
            text: 'The Makhnovist movement and associated rural communes developed under revolutionary, civil-war, and foreign-intervention conditions. It is often cited as an anarchist experiment in local self-management and peasant autonomy, but the territory was militarized, short-lived, internally diverse, and contested by multiple armies. Its evidence is therefore valuable but cannot establish a complete peaceful anarcho-communist society.',
            citations: citations(['bakuninStatism', 'kropotkinConquestBread'], ['makhnoRuralAnarchism', 'sepAnarchism']),
          },
          {
            period: '1927–1930: organization and the Platform debate',
            text: 'Malatesta’s 1927 criticism prompted Makhno to defend collective responsibility in a letter dated 1928, published in 1930. Malatesta replied in December 1929. Both sought effective organization; they disputed whether shared direction protected collective action or required powers incompatible with member autonomy.',
            citations: citations([], ['malatestaOrganization1927', 'makhnoMalatestaOrganizationExchange']),
          },
          {
            period: '1936–1939: Spanish Revolution and libertarian collectives',
            text: 'During the Spanish Civil War, anarchist and anarcho-syndicalist organizations participated in a social revolution that included workplace collectivization, rural collectives, neighborhood organization, and militia structures in parts of Catalonia, Aragon, and other regions. The experiment faced fascist war, Republican state reconstruction, internal conflict, economic scarcity, and coercive pressures. Its achievements and limits remain debated by historians.',
            citations: citations(['kropotkinConquestBread', 'bakuninStatism'], ['cambridgeSpanishAnarchism', 'sepAnarchism']),
          },
          {
            period: '1940s–1980s: exile, anti-authoritarian socialism, feminism, and ecology',
            text: 'After the defeat of revolutionary Spain and the consolidation of state-socialist regimes, anarcho-communist ideas continued through exile networks, anti-authoritarian socialism, feminist organizing, pacifism, labor movements, and ecological politics. The focus broadened from seizing factories to challenging domination in family, education, sexuality, race, colonialism, technology, and the environment.',
            citations: citations(['kropotkinMutualAid', 'millOnLiberty', 'bakuninStatism'], ['sepAnarchism', 'sepSocialism', 'openTextbook']),
          },
          {
            period: '1960s–present: communalism, autonomy, and commons',
            text: 'Later proposals such as Bookchin’s libertarian municipalism connected direct democracy to ecological limits, confederation, and municipal politics. Contemporary autonomous communities, cooperative networks, Indigenous struggles, and digital commons sometimes borrow anarchist practices while remaining inside states. They provide institutional lessons and partial comparisons, not proof that the full anarcho-communist model has been implemented at national scale.',
            citations: citations(['bookchinLibertarianMunicipalism', 'kropotkinMutualAid'], ['socialEcologyMunicipalism', 'sepAnarchism']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Anarcho-communism proper',
                distinction: 'Favors common ownership, free access to necessities, abolition of wage and capitalist class relations, voluntary association, and federated self-management.',
                relation: 'The closest fit to the main profile; it differs from state communism by rejecting a permanent centralized political authority.',
                citations: citations(['kropotkinConquestBread', 'kropotkinMutualAid'], ['sepAnarchism', 'sepSocialism']),
              },
              {
                label: 'Anarchist collectivism',
                distinction: 'Supports collective ownership and worker control but may retain labor-based accounting or distribution according to contribution during a transition.',
                relation: 'A major precursor and neighboring current associated with Bakunin; it differs from Kropotkin’s stronger free-access and needs-oriented proposal.',
                citations: citations(['bakuninStatism', 'kropotkinConquestBread'], ['sepAnarchism', 'sepSocialism']),
              },
              {
                label: 'Anarcho-syndicalism',
                distinction: 'Uses revolutionary unions, strikes, workplace assemblies, and federated labor organization as the route to worker self-management and social transformation.',
                relation: 'An organizational strategy that can support anarcho-communist goals but is not identical to a complete theory of distribution, community, or everyday life.',
                citations: citations(['bakuninStatism', 'kropotkinMutualAid'], ['sepAnarchism', 'cambridgeSpanishAnarchism']),
              },
              {
                label: 'Platformist coordination: Makhno’s defense',
                distinction: 'Makhno presents collective responsibility and shared ideological and tactical direction as necessary for effective revolutionary intervention.',
                relation: 'An internal argument for coordination, not a synonym for all organized anarchism or evidence that opponents rejected organization.',
                citations: citations([], ['makhnoMalatestaOrganizationExchange']),
              },
              {
                label: 'Malatesta’s voluntary organizational alternative',
                distinction: 'Malatesta favors freely agreed cooperation but objects that responsibility for every member’s acts would require executive supervision.',
                relation: 'His 1927 critique distinguishes organization from command; voluntary accommodation is not compulsory majority rule.',
                citations: citations([], ['malatestaOrganization1927']),
              },
              {
                label: 'Libertarian municipalism / communalism',
                distinction: 'Builds direct democracy through municipalities, confederations, ecological planning, and public assemblies rather than through workplace revolution alone.',
                relation: 'A later institutional and ecological development that overlaps strongly with anarcho-communist anti-hierarchy but accepts a more explicit municipal political framework.',
                citations: citations(['bookchinLibertarianMunicipalism'], ['socialEcologyMunicipalism', 'sepAnarchism']),
              },
              {
                label: 'Pacifist and religious anarchism',
                distinction: 'Rejects state violence and militarism through nonviolent, ethical, or religious commitments, often emphasizing conscience, community, and refusal of coercive authority.',
                relation: 'Shares anti-state and mutual-aid commitments but may reject revolutionary violence or materialist communism; it should not be forced into one economic profile.',
                citations: citations(['kropotkinMutualAid', 'millOnLiberty'], ['sepAnarchism', 'sepReligionPolitics']),
              },
              {
                label: 'Ecological, feminist, and commons-oriented anarchism',
                distinction: 'Extends anti-domination analysis to patriarchy, racial hierarchy, colonialism, human–nature relations, technology, care work, and ecological limits.',
                relation: 'Broadens the social and ecological content of anarcho-communism, while raising questions about expertise, scale, and conflicts among local communities.',
                citations: citations(['kropotkinMutualAid', 'bookchinLibertarianMunicipalism', 'millOnLiberty'], ['sepAnarchism', 'socialEcologyMunicipalism', 'sepClimateJustice']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'People, movements, and historical examples',
        blocks: [
          {
            type: 'people',
            entries: [
              {
                name: 'Peter Kropotkin',
                role: 'Anarcho-communist theorist of mutual aid, common inheritance, decentralized production, free access, and federated community life.',
                caveat: 'Kropotkin’s works are normative and exploratory rather than a complete economic implementation manual; later movements interpreted them differently.',
                citations: citations(['kropotkinConquestBread', 'kropotkinMutualAid'], ['sepAnarchism', 'sepSocialism']),
              },
              {
                name: 'Errico Malatesta',
                role: 'Self-identified communist anarchist defending freely chosen cooperation and individual development in his 1926 essay.',
                caveat: 'This text documents his argument, not the effectiveness of a society or an independently measured six-axis match.',
                citations: citations([], ['malatestaCommunismIndividualism1926']),
              },
              {
                name: 'Mikhail Bakunin',
                role: 'Revolutionary anarchist critic of the state, centralized party authority, and the prospect of a new ruling minority after revolution.',
                caveat: 'Bakunin is associated more precisely with collectivist anarchism than with every later anarcho-communist proposal; his revolutionary strategy and writings contain tensions that require historical context.',
                citations: citations(['bakuninStatism'], ['sepAnarchism', 'sepSocialism']),
              },
              {
                name: 'Emma Goldman',
                role: 'Anarchist writer and organizer associated with anti-authoritarianism, feminism, sexual freedom, political dissent, and social revolution.',
                caveat: 'Goldman’s political work cannot be reduced to one economic formula; she is included as a major anti-authoritarian and emancipatory figure within the wider tradition.',
                citations: citations(['millOnLiberty', 'bakuninStatism'], ['sepAnarchism', 'openTextbook']),
              },
              {
                name: 'Murray Bookchin',
                role: 'Later theorist of social ecology, libertarian municipalism, direct democracy, confederation, and ecological communalism.',
                caveat: 'Bookchin’s communalism is a later and internally debated development, not a synonym for nineteenth-century anarcho-communism or every ecological movement.',
                citations: citations(['bookchinLibertarianMunicipalism'], ['socialEcologyMunicipalism', 'sepAnarchism']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'No sovereign-state match',
                period: 'Present and historical comparison',
                match: 'No recognized country is an exact match because the profile rejects a centralized sovereign state and permanent political monopoly.',
                caveat: 'The absence of a country match follows from the definition; it does not prove that every local or federated practice is unworkable.',
                citations: citations(['bakuninStatism', 'kropotkinConquestBread'], ['sepAnarchism']),
              },
              {
                name: 'Italian anarchist press networks',
                period: '1885–1915; transnational movement context',
                match: 'Turcato describes newspapers, including those associated with Malatesta in Ancona, as vehicles for correspondence and practical coordination.',
                caveat: 'Movement infrastructure is not a territorial communist economy; the networks included conflicting organizational tendencies.',
                citations: citations([], ['turcatoTransnationalAnarchism']),
              },
              {
                name: 'Spanish libertarian collectives',
                period: 'Catalonia, Aragon, and other parts of Republican Spain, 1936–1939',
                match: 'Partial historical reference for worker and rural collectivization, direct organization, federation, and the attempt to combine revolution with wartime production and defense.',
                caveat: 'The collectives were diverse, operated under civil war, and involved coercive pressures, inter-organizational conflict, and compromises with Republican institutions. They were not one uniform anarcho-communist society.',
                citations: citations(['kropotkinConquestBread', 'bakuninStatism'], ['cambridgeSpanishAnarchism', 'sepAnarchism']),
              },
              {
                name: 'Free Territory of Ukraine / Makhnovist movement',
                period: 'Southern Ukraine, especially 1918–1921',
                match: 'Partial reference for peasant self-organization, local assemblies, anti-state revolutionary politics, and communes under conditions of military struggle.',
                caveat: 'The movement was short-lived, militarized, geographically uneven, and contested by multiple armies. Its sources and institutional record do not justify a simple success or failure verdict.',
                citations: citations(['bakuninStatism', 'kropotkinConquestBread'], ['makhnoRuralAnarchism', 'sepAnarchism']),
              },
              {
                name: 'Paris Commune',
                period: 'Paris, March–May 1871',
                match: 'A municipal and revolutionary antecedent for recallable delegates, local sovereignty, social measures, and debates about the relationship between state power and communal self-rule.',
                caveat: 'The Commune was not uniformly anarcho-communist; it included Blanquists, Jacobins, socialists, and other currents and lasted only a short time.',
                citations: citations(['bakuninStatism', 'kropotkinMutualAid'], ['sepAnarchism', 'openTextbook']),
              },
              {
                name: 'Contemporary autonomous and cooperative communities',
                period: 'Present; local and movement-specific',
                match: 'Some communities use assemblies, cooperatives, mutual aid, commons, or autonomous administration within a surrounding state.',
                caveat: 'Autonomy is not equivalent to anarcho-communism. Legal dependence, land ownership, internal rules, funding, relations with state security, and economic exchange must be documented before making a closer comparison.',
                citations: citations(['bookchinLibertarianMunicipalism', 'kropotkinMutualAid'], ['socialEcologyMunicipalism', 'sepAnarchism']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'authoritarian-collectivist', relation: 'shares anti-capitalist collectivism but differs fundamentally over the state, party monopoly, hierarchy, and centralized command' },
              { id: 'communist', relation: 'shares common ownership and class critique, while Marxist-Leninist communism accepts party-state authority that anarcho-communism rejects' },
              { id: 'anarchist-communalist', relation: 'broader neighboring profile for anti-hierarchical communalism, with anarcho-communism specifying stronger common ownership and distribution commitments' },
              { id: 'anarcho-capitalist', relation: 'shares opposition to the state but reverses the economic orientation: common ownership and anti-capitalism versus private property and market coordination' },
              { id: 'libertarian-socialist', relation: 'shares decentralized self-management and anti-authoritarian socialism, while the economic content may include more market or mixed arrangements' },
              { id: 'democratic-socialist', relation: 'shares social ownership and emancipation but accepts democratic state institutions and may pursue reform rather than abolition of the state' },
              { id: 'green-commons', relation: 'shares commons, local self-management, ecological limits, and anti-domination, while green politics makes environmental ethics more central' },
              { id: 'anti-colonial-liberation', relation: 'can overlap in anti-imperial and self-determination struggles, but anti-colonial movements need not reject the state or capitalism' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'The most persistent criticism is coordination at scale. Health systems, energy, transport, food, disaster response, ecological protection, and defense cross local boundaries. Federations can coordinate, but federation requires information, expertise, common standards, and decisions that some members may not voluntarily accept. A serious model therefore needs transparent mandates, recallable delegates, audited administration, nested levels of coordination, and safeguards against an emergency body becoming a permanent state.',
            citations: citations(['kropotkinConquestBread', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'socialEcologyMunicipalism', 'sepClimateJustice']),
          },
          {
            type: 'paragraph',
            text: 'A second criticism concerns informal coercion. Even without a state, assemblies, charismatic leaders, armed groups, family structures, majorities, or control over food and housing can dominate individuals. “The community” can become a new authority if dissenters cannot leave, minorities lack voice, or social pressure replaces public law. Safeguards include freedom of conscience, minority protections, due process, independent mediation, accessible exit, protection against gendered and domestic violence, and clear limits on collective enforcement.',
            citations: citations(['bakuninStatism', 'millOnLiberty', 'kropotkinMutualAid'], ['sepAnarchism', 'sepLibertyPositiveNegative', 'sepReligionPolitics']),
          },
          {
            type: 'paragraph',
            text: 'A third criticism concerns scarcity, incentives, and ecological trade-offs. Free access may work well for some goods while other resources remain scarce, technically complex, or environmentally limited. Local production can increase resilience but cannot by itself supply every medicine, component, or infrastructure system. Commons institutions need evidence about resource conditions, contribution, maintenance, conflict resolution, and unequal ecological burdens rather than relying on a moral assumption that cooperation automatically solves allocation.',
            citations: citations(['kropotkinConquestBread', 'kropotkinMutualAid', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'socialEcologyMunicipalism', 'sepClimateJustice']),
          },
          {
            type: 'paragraph',
            text: 'Finally, historical examples are difficult to evaluate because many occurred during war, revolution, blockade, or state collapse. Wartime coercion, shortages, military hierarchy, and partisan memory can make an experiment look either more libertarian or more authoritarian than its ordinary institutions were. The encyclopedia should distinguish aspirations, rules, actual participation, material outcomes, violence, exclusion, and external constraints, and should avoid presenting a brief experiment as a universal proof.',
            citations: citations(['bakuninStatism', 'kropotkinConquestBread'], ['cambridgeSpanishAnarchism', 'makhnoRuralAnarchism', 'sepAnarchism']),
          },
          {
            type: 'paragraph',
            text: 'Malatesta’s 1929 reply recognizes duties to honor agreements, alongside withdrawal when cooperation becomes impossible. He distinguishes influence through example from coercive leadership. The correspondence records a dispute, not a demonstrated resolution of accountability versus dissent.',
            citations: citations([], ['makhnoMalatestaOrganizationExchange']),
          },
          {
            type: 'paragraph',
            text: 'Turcato’s transnational approach cautions against equating disappearance from national records with organizational collapse. Its press-centered perspective does not establish representative outcomes for decentralized economies.',
            citations: citations([], ['turcatoTransnationalAnarchism']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['kropotkinConquestBread', 'kropotkinMutualAid', 'bakuninStatism', 'bookchinLibertarianMunicipalism', 'millOnLiberty', 'marxEngelsManifesto', 'leninStateRevolution', 'ostromGoverningCommons'],
      researchSourceIds: ['sepAnarchism', 'sepSocialism', 'socialEcologyMunicipalism', 'makhnoRuralAnarchism', 'cambridgeSpanishAnarchism', 'openTextbook', 'sepClimateJustice', 'sepReligionPolitics', 'foreignPolicy', 'malatestaCommunismIndividualism1926', 'malatestaOrganization1927', 'makhnoMalatestaOrganizationExchange', 'turcatoTransnationalAnarchism'],
      editorialNote: 'The entry describes an anti-state communist family and uses a didactic composite score. It distinguishes anarcho-communism from anarcho-capitalism, Marxist-Leninist party-state communism, libertarian socialism, communalism, and historical collectives. No country is classified as an exact match.',
    },
    researchGaps: [
      'Add primary texts and specialist scholarship on Errico Malatesta, Emma Goldman, Voline, Nestor Makhno, Buenaventura Durruti, Federica Montseny, Diego Abad de Santillán, and anarchist women’s, labor, and anti-colonial organizing.',
      'Expand Russian, Ukrainian, Spanish, Catalan, French, Italian, German, Portuguese, and Latin American sources, recording original language, translation, edition, archive, and partisan provenance.',
      'Add comparative evidence on the Free Territory of Ukraine, Catalan and Aragonese collectives, Paris Commune, Korean anarchist experiments, Zapatista autonomy, Rojava, cooperative federations, and other partial cases without treating them as one model.',
      'Add empirical research on food, housing, health, education, care, industry, energy, defense, ecological management, conflict resolution, gender, race, migration, disability, and minority rights in decentralized communities.',
      'Add detailed comparison of anarcho-communist distribution with commons governance, market socialism, cooperative ownership, social democracy, and state socialism, including scarcity, free-riding, technical expertise, and maintenance problems.',
      'Add research on how revolutionary organizations prevent military, party, administrative, or charismatic authority from becoming permanent, and how nonviolent and self-defense commitments can coexist under external attack.',
      'The Malatesta and Makhno additions address only part of the author and organization gaps above. Verify original periodical issues, translation provenance, the complete Platform and further responses; do not infer an agreed settlement from this exchange or its inconsistent page-level date metadata.',
      'Extend the selected Turcato reading to the full article and its archival sources, with competing historiography and women’s, workers’, and migrants’ perspectives. Press-network continuity does not establish equal participation, economic outcomes, or successful protection of dissenters.',
    ],
  },
  conservative: {
    id: 'conservative',
    title: 'Conservatism',
    canonicalLabel: 'Conservatism',
    aliases: [
      'conservative thought',
      'traditional conservatism',
      'Burkean conservatism',
      'social conservatism',
      'liberal conservatism',
    ],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'Conservatism is treated as a family of dispositions, arguments, and political projects concerned with continuity, inherited institutions, practical judgment, and legitimate authority. It is not a fixed policy package, not automatically religious or nationalist, and not synonymous with reaction, authoritarianism, or any one contemporary party.',
    timeScope: 'The modern political label developed around the age of revolution, especially after 1789, while its arguments draw on older ideas about custom, order, prudence, religion, family, law, and political inheritance. Its variants changed substantially through industrialization, democracy, empire, welfare-state formation, and postwar constitutionalism.',
    geographicScope: 'A transnational tradition with major British, Irish, French, German, European, North American, Christian-democratic, and postcolonial variants. German institutional history is included, but national meanings of “conservative” differ and require local evidence.',
    summary: 'A family of political views that values inherited institutions, social continuity, practical knowledge, lawful authority, and gradual rather than abstractly engineered change. Conservatives may support markets, welfare, national development, constitutional liberty, religious tradition, monarchy, democracy, or strong government in different combinations; the common thread is usually a presumption that institutions embody experience and that rapid redesign carries serious risks.',
    summaryCitations: citations(
      ['burkeReflections', 'tocquevilleDemocracy', 'oakeshottRationalismPolitics', 'hobbesLeviathan'],
      ['sepConservatism', 'bpbConservatism', 'sepLiberalism'],
    ),
    dimensionInterpretations: {
      economic: {
        score: -18,
        label: 'Mildly market-oriented and institutionally pragmatic',
        explanation: 'Conservative traditions commonly accept private property, markets, and inherited economic institutions, but they may support tariffs, regulation, paternal administration, social insurance, public works, or strategic industry when these are seen as protecting social order and national resilience. Economic conservatism is therefore not identical to laissez-faire.',
        citations: citations(['adamSmithWealth', 'burkeReflections', 'hayekKnowledge'], ['sepConservatism', 'sepLiberalism', 'bpbConservatism']),
      },
      social: {
        score: -72,
        label: 'Strongly traditionalist, with gradual-reform exceptions',
        explanation: 'Family, religion, custom, law, manners, inherited roles, and local association are often treated as sources of social knowledge and continuity. Some conservatives accept reform when it repairs institutions or preserves their purposes, while reactionary and social-conservative variants may resist wider equality or rapid cultural change.',
        citations: citations(['burkeReflections', 'tocquevilleDemocracy', 'oakeshottRationalismPolitics'], ['sepConservatism', 'sepReligionPolitics']),
      },
      authority: {
        score: 48,
        label: 'Order-oriented but potentially constitutional',
        explanation: 'Conservatism gives weight to law, authority, hierarchy, public order, and the administrative capacity needed to preserve institutions. Constitutional conservatives distinguish legitimate, inherited, and accountable authority from arbitrary rule; the profile becomes authoritarian when opposition, courts, equal citizenship, or independent associations are subordinated to a ruler or movement.',
        citations: citations(['burkeReflections', 'hobbesLeviathan', 'oakeshottRationalismPolitics'], ['sepConservatism', 'vdem']),
      },
      identity: {
        score: -62,
        label: 'Strongly continuity- and nation-oriented',
        explanation: 'Historical memory, place, language, religion, family, and national institutions can anchor conservative belonging. This may take civic, constitutional, regional, imperial, religious, or ethnic forms; the conservative disposition does not itself determine whether national identity is inclusive or exclusionary.',
        citations: citations(['burkeReflections', 'tocquevilleDemocracy', 'renanNation'], ['sepConservatism', 'sepNationalism', 'bpbConservatism']),
      },
      foreign: {
        score: 10,
        label: 'Pragmatic defense and restrained change',
        explanation: 'Conservative foreign policy often prioritizes security, inherited alliances, national interest, strategic prudence, and caution about remaking other societies. It can support military power or intervention when order and security are judged to require it, but it does not logically entail imperial expansion or permanent war.',
        citations: citations(['burkeReflections', 'morgenthauRealism', 'tocquevilleDemocracy'], ['foreignPolicy', 'sepConservatism', 'sepNationalism']),
      },
      religion: {
        score: -40,
        label: 'Religiously grounded cultural order, usually non-theocratic',
        explanation: 'Religious traditions may be treated as sources of moral formation, national memory, family norms, and social solidarity, while constitutional variants protect pluralism and freedom of conscience. Conservatism can also be secular, skeptical, or civilizational; religious conservatism is one variant, not the whole category.',
        citations: citations(['burkeReflections', 'aquinasMoralPolitical', 'lockeLetterToleration'], ['sepReligionPolitics', 'sepConservatism', 'bpbConservatism']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Conservatism is less a single doctrine than a way of approaching political change. It asks what a society has inherited, which institutions have made cooperation possible, what knowledge is embedded in custom, and what unintended consequences may follow from a rapid attempt to redesign social life. Its characteristic preference is not always for no change, but for change that is gradual, practical, historically informed, and connected to institutions people can actually sustain.',
            citations: citations(['burkeReflections', 'oakeshottRationalismPolitics'], ['sepConservatism']),
          },
          {
            type: 'paragraph',
            text: 'The label includes constitutional conservatives, traditionalists, paternal conservatives, one-nation or social conservatives, liberal conservatives, Christian democrats, national conservatives, reactionaries, and other currents that disagree about democracy, markets, equality, religion, empire, and the nation. The entry therefore records a family resemblance rather than assigning one universal conservative policy. Burke is an important reference point, but conservatism should not be reduced to Burke or projected unchanged onto every modern movement that uses the word.',
            citations: citations(['burkeReflections', 'tocquevilleDemocracy', 'oakeshottRationalismPolitics'], ['sepConservatism', 'bpbConservatism', 'oxfordChristianDemocracy']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'The core conservative claim is epistemic as well as moral: political knowledge is distributed through habits, institutions, practices, professions, families, associations, and historical experience. A constitution or custom may contain reasons that are not visible in a theoretical model. Conservatives consequently distrust the assumption that a society can be rebuilt from abstract principles alone, especially when reformers underestimate incentives, loyalty, authority, culture, and the capacity of institutions to absorb change.',
            citations: citations(['burkeReflections', 'oakeshottRationalismPolitics', 'tocquevilleDemocracy'], ['sepConservatism']),
          },
          {
            type: 'paragraph',
            text: 'Conservatism also makes a claim about order. Law, authority, family, religion, property, nation, class, and social roles may be seen as imperfect but stabilizing structures that restrain violence and coordinate expectations. This does not settle whether an institution is just. A conservative defense can preserve liberty by resisting arbitrary power, or preserve domination by treating inherited hierarchy as natural; the relevant question is what is being conserved, for whom, and whether peaceful correction remains possible.',
            citations: citations(['burkeReflections', 'hobbesLeviathan', 'tocquevilleDemocracy'], ['sepConservatism', 'vdem', 'sepReligionPolitics']),
          },
          {
            type: 'paragraph',
            text: 'Economic conservatism is similarly variable. Some conservatives defend markets and private property as institutions of independence and responsibility. Others support social insurance, industrial policy, tariffs, public services, or paternal regulation to protect families, workers, national capacity, and social cohesion. Bismarckian social insurance, Christian-democratic welfare politics, one-nation conservatism, and market-oriented liberal conservatism demonstrate that the economic axis cannot be inferred from the word conservative alone.',
            citations: citations(['burkeReflections', 'adamSmithWealth', 'hayekKnowledge'], ['sepConservatism', 'bpbConservatism', 'oxfordChristianDemocracy']),
          },
          {
            type: 'paragraph',
            text: 'The distinction between conservatism and reaction is important. A conservative may accept reform to preserve a constitutional order, while a reactionary seeks to restore or impose an earlier order and may reject modern democratic or egalitarian developments altogether. In practice the boundary is contested and movements can combine both tendencies. The atlas should therefore identify the period, institutional object, proposed change, and affected population instead of treating “right” or “traditional” as sufficient description.',
            citations: citations(['burkeReflections', 'oakeshottRationalismPolitics'], ['sepConservatism', 'bpbConservatism']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Before the modern label: custom, order, and inherited authority',
            text: 'Arguments later called conservative draw on older reflections about law, custom, religion, family, hierarchy, kingship, civic virtue, and the dangers of faction. These sources should not be retroactively labelled conservative as though they shared a modern ideology. They are antecedents for questions about continuity and authority, not evidence of one transhistorical doctrine.',
            citations: citations(['aquinasMoralPolitical', 'hobbesLeviathan', 'burkeReflections'], ['sepConservatism', 'sepMedieval']),
          },
          {
            period: '1789–1815: revolution, counter-revolution, and the modern conservative response',
            text: 'The French Revolution made the defense of inherited institutions, gradual reform, religion, property, and social order into a recognizable modern political response. Burke criticized abstract reconstruction and revolutionary rupture while accepting that institutions may need change to survive. Other European reactionary currents sought stronger restoration of throne, altar, and inherited authority; conservatism and reaction developed together but are not identical.',
            citations: citations(['burkeReflections'], ['sepConservatism', 'bpbConservatism']),
          },
          {
            period: 'Nineteenth century: nation-building, industrialization, and social questions',
            text: 'Conservatives confronted mass politics, industrial capitalism, labor organization, nationalism, empire, urban poverty, and the expansion of suffrage. Some defended monarchy, aristocracy, church establishment, and hierarchy; others adapted through national integration, parliamentary institutions, social legislation, public education, or paternal reform. The period shows why conservatism can be economically interventionist while socially traditional and politically order-oriented.',
            citations: citations(['tocquevilleDemocracy', 'burkeReflections', 'adamSmithWealth'], ['sepConservatism', 'bpbConservatism', 'sepNationalism']),
          },
          {
            period: 'German conservative development: from monarchy and statecraft to social insurance',
            text: 'German conservatism took varied forms around monarchy, state authority, national unity, religion, administrative capacity, and the social question. Bismarck’s social legislation illustrates a conservative attempt to address worker insecurity and contain socialist mobilization through state provision while restricting political opposition. This history should not be treated as a general definition of conservatism or as evidence that all welfare policy is left-wing.',
            citations: citations(['burkeReflections', 'hobbesLeviathan'], ['bpbConservatism', 'sepConservatism']),
          },
          {
            period: 'Late nineteenth–early twentieth centuries: mass democracy, empire, and conservative nationalism',
            text: 'As electoral politics expanded, conservatives adapted inherited identities to party organization, national citizenship, empire, military security, and mass communication. Some defended constitutional patriotism and gradual reform; others embraced ethnic hierarchy, imperial domination, anti-parliamentary politics, or authoritarian nationalism. These paths can converge with fascism or ethnic nationalism, but conservatism itself does not entail either.',
            citations: citations(['tocquevilleDemocracy', 'renanNation', 'burkeReflections'], ['sepConservatism', 'sepNationalism', 'openTextbook']),
          },
          {
            period: '1945–1970s: Christian democracy, constitutional reconstruction, and social conservatism',
            text: 'Postwar European Christian democracy combined religious social teaching, constitutional democracy, welfare provision, family policy, anti-communism, and European cooperation in different national forms. Other conservatives defended liberal constitutionalism, colonial continuity, national sovereignty, or traditional morality. The postwar period demonstrates that conservative politics can support democratic institutions and social insurance while resisting rapid cultural change.',
            citations: citations(['aquinasMoralPolitical', 'burkeReflections', 'lockeLetterToleration'], ['oxfordChristianDemocracy', 'sepConservatism', 'sepReligionPolitics']),
          },
          {
            period: '1947–1990: Oakeshott, anti-rationalism, and the critique of political engineering',
            text: 'Michael Oakeshott’s skepticism toward rationalist politics emphasized practical knowledge, historical experience, conversation, and the danger of treating politics as technical construction. His work is often called conservative, but it also contains strong concern for individuality and civil association. It is a useful reminder that conservatism can be anti-utopian without being a complete social or economic program.',
            citations: citations(['oakeshottRationalismPolitics'], ['sepConservatism']),
          },
          {
            period: 'Late twentieth century–present: market conservatism, national conservatism, and populist turns',
            text: 'From the late twentieth century, conservative coalitions often joined market liberalization, tax reduction, religious traditionalism, national sovereignty, immigration restriction, law-and-order politics, or skepticism toward supranational institutions. These combinations are unstable: market globalization can weaken inherited communities, while national protection can require state intervention. Contemporary labels must therefore be coded by issue rather than assumed from party family names.',
            citations: citations(['hayekKnowledge', 'burkeReflections', 'renanNation'], ['sepConservatism', 'sepNationalism', 'bpbConservatism']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Burkean or classical conservatism',
                distinction: 'Defends inherited institutions, prudence, gradual reform, historical continuity, local association, and skepticism toward abstract political reconstruction.',
                relation: 'A central reference for the conservative disposition, but Burke accepted change when it preserved the social order and should not be used as a universal party platform.',
                citations: citations(['burkeReflections'], ['sepConservatism']),
              },
              {
                label: 'Traditionalist and religious conservatism',
                distinction: 'Treats family, religion, customary morality, inherited roles, and sacred or civilizational traditions as important sources of public order and social meaning.',
                relation: 'Overlaps strongly with the social and religion scores, but can accept constitutional pluralism and is not automatically theocratic or authoritarian.',
                citations: citations(['burkeReflections', 'aquinasMoralPolitical', 'lockeLetterToleration'], ['sepReligionPolitics', 'sepConservatism']),
              },
              {
                label: 'Liberal conservatism',
                distinction: 'Combines constitutional rights, private property, markets, rule of law, and individual liberty with gradual change, institutional continuity, and skepticism toward egalitarian redesign.',
                relation: 'A bridge between classical liberalism and conservatism; it may be economically market-oriented while remaining socially and institutionally cautious.',
                citations: citations(['burkeReflections', 'hayekKnowledge', 'lockeSecondTreatise'], ['sepConservatism', 'sepLiberalism']),
              },
              {
                label: 'One-nation or paternal conservatism',
                distinction: 'Uses state capacity, social legislation, public services, and elite responsibility to preserve national cohesion and reduce class conflict without abolishing private property.',
                relation: 'Shows why conservative economics can include welfare and regulation; it differs from both laissez-faire liberalism and socialist ownership.',
                citations: citations(['burkeReflections', 'hobbesLeviathan'], ['sepConservatism', 'bpbConservatism']),
              },
              {
                label: 'Christian democracy',
                distinction: 'Combines Christian social ethics, family and community institutions, constitutional democracy, welfare provision, subsidiarity, and often European cooperation.',
                relation: 'A specific religiously inspired constitutional family with conservative elements, but its pluralist and social-market variants are not equivalent to theocracy or reaction.',
                citations: citations(['aquinasMoralPolitical', 'burkeReflections', 'lockeLetterToleration'], ['oxfordChristianDemocracy', 'sepReligionPolitics']),
              },
              {
                label: 'National conservatism',
                distinction: 'Adds strong emphasis on national sovereignty, borders, historical memory, cultural continuity, and protection of national institutions.',
                relation: 'A modern compound of conservatism and nationalism; it may be civic and constitutional or ethnic and exclusionary, so the identity axis requires separate evidence.',
                citations: citations(['burkeReflections', 'renanNation', 'andersonImaginedCommunities'], ['sepConservatism', 'sepNationalism', 'bpbConservatism']),
              },
              {
                label: 'Reactionary conservatism',
                distinction: 'Seeks to restore or impose a prior religious, monarchical, aristocratic, or hierarchical order and may reject modern egalitarian, liberal, or democratic developments.',
                relation: 'Shares concern for continuity but differs from reformist conservatism by treating restoration or reversal as a central political objective.',
                citations: citations(['burkeReflections', 'hobbesLeviathan'], ['sepConservatism', 'bpbConservatism']),
              },
              {
                label: 'Security and law-and-order conservatism',
                distinction: 'Prioritizes policing, borders, military capacity, punishment, executive authority, and institutional discipline as conditions of public safety and social continuity.',
                relation: 'Raises the authority and foreign-policy scores, but becomes authoritarian only when accountability, equal protection, and independent institutions are systematically removed.',
                citations: citations(['hobbesLeviathan', 'burkeReflections', 'morgenthauRealism'], ['sepConservatism', 'vdem', 'foreignPolicy']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'People, movements, and historical examples',
        blocks: [
          {
            type: 'people',
            entries: [
              {
                name: 'Edmund Burke',
                role: 'Eighteenth-century political writer associated with inherited institutions, prudence, representation, social continuity, and gradual reform.',
                caveat: 'Burke’s writings responded to specific British, Irish, imperial, and revolutionary contexts. They do not settle modern questions about democracy, equality, welfare, empire, or every later conservative movement.',
                citations: citations(['burkeReflections'], ['sepConservatism']),
              },
              {
                name: 'Alexis de Tocqueville',
                role: 'French political thinker who analyzed democracy, equality, religion, associations, centralization, local institutions, and social habits.',
                caveat: 'Tocqueville is a comparative analyst and liberal-conservative reference, not a simple representative of every conservative position. His views also contain tensions concerning empire, race, and democracy.',
                citations: citations(['tocquevilleDemocracy'], ['sepConservatism', 'sepNationalism']),
              },
              {
                name: 'Michael Oakeshott',
                role: 'Twentieth-century political philosopher associated with skepticism toward rationalist political engineering, practical knowledge, and civil association.',
                caveat: 'Oakeshott’s relationship to conservatism is debated, and his defense of individuality and civil association is not equivalent to traditionalist or authoritarian politics.',
                citations: citations(['oakeshottRationalismPolitics'], ['sepConservatism']),
              },
              {
                name: 'Thomas Hobbes',
                role: 'Earlier theorist of sovereignty, order, fear, law, and the authority needed to prevent civil conflict.',
                caveat: 'Hobbes is an antecedent for order-centered reasoning, not a modern conservative party thinker; his absolutist argument differs from constitutional conservatism.',
                citations: citations(['hobbesLeviathan'], ['sepConservatism', 'sepReligionPolitics']),
              },
              {
                name: 'Otto von Bismarck',
                role: 'German statesman associated with conservative statecraft, national unification, administrative authority, and early social insurance.',
                caveat: 'Bismarck’s authoritarian and exclusionary practices should remain visible alongside social legislation; his policies are a historical case, not a general model of conservatism.',
                citations: citations(['hobbesLeviathan', 'burkeReflections'], ['bpbConservatism', 'sepConservatism']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'Post-Revolutionary British conservatism',
                period: 'Britain and Ireland, late eighteenth–nineteenth centuries',
                match: 'Historical setting for arguments about constitutional continuity, parliamentary reform, property, empire, religion, and the management of social change.',
                caveat: 'British conservatism included different Tory, Anglican, imperial, reformist, and protectionist currents, and its historical relationship to Ireland and empire requires separate treatment.',
                citations: citations(['burkeReflections'], ['sepConservatism']),
              },
              {
                name: 'German conservative statecraft and social insurance',
                period: 'German Empire, especially the 1870s–1890s',
                match: 'A case of monarchical and administrative authority combined with national integration and state social legislation intended to manage industrial conflict.',
                caveat: 'The German case also involved political repression, militarism, class conflict, and later divergent conservative traditions; social insurance does not erase those limits.',
                citations: citations(['burkeReflections', 'hobbesLeviathan'], ['bpbConservatism', 'sepConservatism']),
              },
              {
                name: 'Postwar Christian-democratic Europe',
                period: 'Western Europe, especially from the 1940s onward',
                match: 'Constitutional democracy, social-market or welfare institutions, family and community language, Christian social ethics, and European cooperation combined in different national forms.',
                caveat: 'Christian-democratic parties were internally diverse and often supported pluralist rights, social provision, and European integration; they should not be classified as theocratic or uniformly traditionalist.',
                citations: citations(['aquinasMoralPolitical', 'burkeReflections', 'lockeLetterToleration'], ['oxfordChristianDemocracy', 'sepReligionPolitics', 'sepConservatism']),
              },
              {
                name: 'Conservative constitutional democracies',
                period: 'Contemporary; country- and party-specific',
                match: 'Many democracies contain conservative parties that defend institutional continuity, public order, private property, gradual reform, or national traditions within competitive constitutional systems.',
                caveat: 'A conservative party’s existence does not classify the whole state, and current policy varies by coalition, period, region, and issue. Country comparisons require dated evidence on rights and executive constraints.',
                citations: citations(['burkeReflections', 'oakeshottRationalismPolitics'], ['sepConservatism', 'vdem', 'bpbConservatism']),
              },
              {
                name: 'National-conservative and reactionary movements',
                period: 'Europe and other regions, nineteenth century–present',
                match: 'Movements that combine inherited identity, national sovereignty, social order, religious or civilizational tradition, and resistance to rapid cultural or institutional change.',
                caveat: 'These movements range from constitutional and pluralist to ethnic, anti-democratic, authoritarian, or fascist. The labels must be separated through evidence about citizenship, minorities, opposition, violence, and legal institutions.',
                citations: citations(['burkeReflections', 'renanNation', 'tocquevilleDemocracy'], ['sepConservatism', 'sepNationalism', 'vdem']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'national-conservative', relation: 'adds a stronger sovereignty, national identity, and cultural-continuity emphasis to the broader conservative family' },
              { id: 'religious-traditionalist', relation: 'shares inherited moral and religious authority, but religious traditionalism makes public religion more central and may be more explicitly confessional' },
              { id: 'christian-democratic', relation: 'a specific Christian-inspired constitutional and social-policy family that may overlap with conservative institutions while remaining pluralist' },
              { id: 'classical-liberal', relation: 'shares property, law, and institutional liberty in liberal-conservative variants, but conservatism gives more weight to inherited authority and continuity' },
              { id: 'liberal-constitutionalist', relation: 'shares constitutional limits and rule of law when conservative politics accepts pluralist rights and accountable government' },
              { id: 'civic-nationalist', relation: 'can share national institutions and citizenship, but civic nationalism makes political membership more central than continuity or tradition' },
              { id: 'ethnic-nationalist', relation: 'may overlap through inherited identity and exclusion, but conservatism is not inherently ethnic or anti-pluralist' },
              { id: 'historical-fascist', relation: 'can form tactical alliances or share order and national themes, but fascism’s revolutionary mass politics and authoritarian ultranationalism are not identical to conservatism' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'The central criticism is that appeals to tradition can naturalize inherited power. Institutions may contain practical knowledge, but they can also preserve class, racial, gender, colonial, religious, or regional domination. A practice’s age does not by itself establish its legitimacy. Reform must therefore ask who benefited from the institution, who was excluded, whether dissent was possible, and whether the institution can change without violence or arbitrary punishment.',
            citations: citations(['burkeReflections', 'millOnLiberty', 'wollstonecraftRights'], ['sepConservatism', 'sepLibertyPositiveNegative']),
          },
          {
            type: 'paragraph',
            text: 'A second criticism concerns the knowledge claim. Caution about abstract redesign can prevent destructive overconfidence, but it can also become a reason to reject necessary reform, scientific evidence, equal rights, or democratic accountability. Gradualism is not automatically prudent when an institution is actively harmful, and inherited practice is not automatically wiser than publicly examined alternatives.',
            citations: citations(['oakeshottRationalismPolitics', 'burkeReflections', 'millOnLiberty'], ['sepConservatism', 'sepLibertyPositiveNegative', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'A third criticism concerns authority and order. Public safety, family, religion, nation, and law can provide real coordination, but order language may justify surveillance, censorship, punishment without due process, militarization, or the suppression of minorities and opposition. Constitutional review, equal citizenship, independent courts, freedom of association, transparent policing, and peaceful alternation of power are safeguards against the slide from legitimate authority into authoritarian rule.',
            citations: citations(['hobbesLeviathan', 'lockeLetterToleration', 'tocquevilleDemocracy'], ['sepConservatism', 'vdem', 'sepReligionPolitics']),
          },
          {
            type: 'paragraph',
            text: 'Finally, conservatism’s economic and national variants can conflict. Market globalization can weaken local institutions and social bonds; protection and state intervention can preserve some communities while creating inefficiency or exclusion; national cohesion can support solidarity or marginalize people defined as outsiders. The project should therefore score economic policy, social change, authority, identity, religion, and foreign policy separately rather than treating a conservative label as a complete political diagnosis.',
            citations: citations(['burkeReflections', 'hayekKnowledge', 'renanNation'], ['sepConservatism', 'sepNationalism', 'bpbConservatism']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['burkeReflections', 'tocquevilleDemocracy', 'oakeshottRationalismPolitics', 'hobbesLeviathan', 'adamSmithWealth', 'hayekKnowledge', 'lockeSecondTreatise', 'lockeLetterToleration', 'aquinasMoralPolitical', 'renanNation', 'morgenthauRealism', 'millOnLiberty', 'wollstonecraftRights'],
      researchSourceIds: ['sepConservatism', 'bpbConservatism', 'sepNationalism', 'sepReligionPolitics', 'sepLiberalism', 'foreignPolicy', 'vdem', 'oxfordChristianDemocracy', 'openTextbook'],
      editorialNote: 'The entry treats conservatism as a family resemblance and distinguishes reformist, constitutional, religious, social, national, reactionary, and security-oriented variants. The score is a didactic composite, not a verdict on every conservative thinker, party, country, or institution.',
    },
    researchGaps: [
      'Add French-language scholarship on de Maistre, Chateaubriand, Tocqueville, liberal conservatism, reaction, republicanism, empire, and the different histories of French right-wing traditions.',
      'Expand German-language research beyond a general history to include Prussian, Catholic, conservative-revolution, Christian-democratic, postwar, East German, and contemporary constitutional traditions, with careful separation from fascism and National Socialism.',
      'Add Portuguese-, Spanish-, Italian-, Central European-, African-, Asian-, Latin American-, and postcolonial scholarship on conservatism, social order, religion, empire, nation, race, family, and state formation.',
      'Add specialist research on women and conservative politics, class, labor, welfare, colonialism, race, migration, Indigenous rights, sexuality, disability, education, policing, punishment, and the relationship between tradition and equal citizenship.',
      'Add country-specific evidence for present conservative parties and governments before using them as comparators; party names do not establish positions on markets, religion, authority, nationalism, or foreign intervention.',
      'Add comparative work on gradual reform, constitutional safeguards, emergency powers, conservative populism, market globalization, protectionism, climate policy, technology, and the conditions under which prudence becomes obstruction or authoritarianism.',
    ],
  },
  'civic-nationalist': {
    id: 'civic-nationalist',
    title: 'Civic nationalist',
    canonicalLabel: 'Civic nationalism',
    aliases: [
      'civic nationalism',
      'citizenship nationalism',
      'republican nationalism',
      'liberal nationalism',
      'constitutional patriotism',
      'inclusive nationalism',
    ],
    entryType: 'historical and analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'Civic nationalism is a family of arguments about political membership, not a complete programme for markets, social morality, religion, or foreign policy. The label is often contrasted with ethnic nationalism, but that contrast is an imperfect analytical ideal type: civic institutions can still exclude, assimilate, racialize, or dominate people.',
    timeScope: 'Antecedents appear in republican and constitutional traditions; the modern label is most useful from the revolutionary and nation-building era of the late eighteenth and nineteenth centuries through post-war debates about constitutional patriotism, migration, and plural citizenship.',
    geographicScope: 'Transnational profile with important debates in France, the United States, Switzerland, Germany, post-war Europe, anti-colonial states, and other polities that define membership through citizenship or public law. No country is treated as a pure or permanent example.',
    summary: 'A form of nationalism that presents the nation primarily as a political community of citizens joined by public institutions, legal membership, political principles, and some shared civic culture rather than by ancestry alone. It can support liberal democracy and equal citizenship, but it can also demand assimilation, conceal unequal citizenship, or turn supposedly universal civic norms into a majority culture. Its economic, social, religious, and foreign-policy positions must therefore be measured separately.',
    summaryCitations: citations(
      ['renanNation', 'andersonImaginedCommunities', 'millOnLiberty', 'tocquevilleDemocracy'],
      ['sepNationalism', 'oxfordConstitutionalPatriotism', 'coeDemocraticCitizenship', 'sepColonialism'],
    ),
    dimensionInterpretations: {
      economic: {
        score: -5,
        label: 'Economically open-ended',
        explanation: 'Civic nationalism does not determine ownership or distribution. A civic nation can combine market liberalism, welfare provision, developmental planning, protectionism, or social democracy. The most defensible didactic score is therefore near the midpoint, with a slight market-side tilt only because constitutional citizenship is often historically paired with liberal property and contract institutions; that pairing is contingent, not definitional.',
        citations: citations(['millOnLiberty', 'lockeSecondTreatise', 'andersonImaginedCommunities'], ['sepNationalism', 'sepLiberalism', 'openTextbook']),
      },
      social: {
        score: 0,
        label: 'Civic inclusion with a conformity risk',
        explanation: 'Equal citizenship and common legal status can support inclusion across ancestry, religion, and language. Yet a state may define “civic values” narrowly, require cultural assimilation, or treat minority practices as insufficiently national. Civic membership is consequently compatible with both pluralist inclusion and coercive uniformity; the score should not be read as a fixed progressive or traditionalist position.',
        citations: citations(['millOnLiberty', 'renanNation', 'tocquevilleDemocracy'], ['sepNationalism', 'oxfordConstitutionalPatriotism', 'coeDemocraticCitizenship']),
      },
      authority: {
        score: 18,
        label: 'Constitutional and institution-centered authority',
        explanation: 'The profile normally values a capable state, a common legal order, citizenship administration, and institutions able to secure public membership and self-government. It becomes liberal-democratic only when authority is limited by rights, independent courts, accountable elections, lawful opposition, and equal protection. Civic language by itself does not prevent executive domination or exclusion.',
        citations: citations(['lockeSecondTreatise', 'millOnLiberty', 'tocquevilleDemocracy'], ['vdem', 'coeDemocraticCitizenship', 'oxfordConstitutionalPatriotism']),
      },
      identity: {
        score: -58,
        label: 'Strongly civic and inclusive rather than ethnic',
        explanation: 'National belonging is presented primarily as shared citizenship, public principles, institutions, and participation in a common political life. This is a strong identity commitment, not the absence of nationalism. A civic nation may still police its borders, privilege a majority language, exclude non-citizens, or reinterpret civic membership through inherited culture, so the civic claim must be tested against law and practice.',
        citations: citations(['renanNation', 'andersonImaginedCommunities', 'tocquevilleDemocracy'], ['sepNationalism', 'oxfordConstitutionalPatriotism', 'sepColonialism']),
      },
      foreign: {
        score: 10,
        label: 'Cooperative but sovereignty-conscious',
        explanation: 'Civic nationalism can support treaties, international law, migration agreements, and regional integration when these are understood as compatible with democratic self-government. It can also resist external authority when national consent and constitutional control are viewed as threatened. Nothing in the civic membership principle entails pacifism, interventionism, isolationism, or a particular alliance policy.',
        citations: citations(['kantPerpetualPeace', 'renanNation', 'millOnLiberty'], ['foreignPolicy', 'sepNationalism', 'oxfordConstitutionalPatriotism']),
      },
      religion: {
        score: -15,
        label: 'Mostly secular public-law orientation',
        explanation: 'Civic membership is usually justified through citizenship and public law rather than a shared revelation or clerical authority, which gives the profile a mild secular-side placement. Civic nationalism can nevertheless include religious civil traditions, established churches, or religiously framed republican ideals. The relevant test is whether equal citizenship and freedom of conscience remain available to believers and non-believers alike.',
        citations: citations(['lockeLetterToleration', 'millOnLiberty', 'renanNation'], ['sepReligionPolitics', 'coeDemocraticCitizenship', 'oxfordConstitutionalPatriotism']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Civic nationalism understands the nation mainly as a political community: people belong through citizenship, participation, public institutions, and a shared commitment to the rules or principles of political membership. In its strongest egalitarian form, it rejects ancestry as a condition of full belonging and makes equal citizenship the basis of national solidarity.',
            citations: citations(['renanNation', 'millOnLiberty'], ['sepNationalism', 'coeDemocraticCitizenship']),
          },
          {
            type: 'paragraph',
            text: 'The civic–ethnic contrast is useful but should not be treated as a clean map of the world. Scholars have criticized it as historically selective and politically idealized: states described as civic have often excluded women, racialized minorities, colonized populations, religious minorities, migrants, or people without the preferred language. The project therefore treats civic nationalism as a claim about the preferred basis of membership, then asks whether law and institutions actually honor that claim.',
            citations: citations(['renanNation', 'andersonImaginedCommunities'], ['sepNationalism', 'sepColonialism', 'oxfordConstitutionalPatriotism']),
          },
          {
            type: 'paragraph',
            text: 'Civic nationalism also differs from constitutional patriotism. They overlap when both value political membership and public principles, but constitutional patriotism is commonly presented as a more explicitly post-national or constitution-centered form of allegiance that seeks solidarity without treating national culture as the primary object of loyalty. Treating the two as synonyms would erase an important debate about nationalism, cosmopolitanism, and supranational citizenship.',
            citations: citations(['renanNation', 'kantPerpetualPeace'], ['oxfordConstitutionalPatriotism', 'sepNationalism']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'Its central unit is the citizen rather than the descent group. A civic-national argument typically emphasizes a common legal status, equal rights and duties, public education, representative or republican institutions, a constitution, and the ability of members to participate in self-government. Shared history, language, symbols, or rituals may still matter, but they are ideally open to political membership and are not the sole proof of belonging.',
            citations: citations(['renanNation', 'millOnLiberty', 'tocquevilleDemocracy'], ['sepNationalism', 'coeDemocraticCitizenship']),
          },
          {
            type: 'paragraph',
            text: 'Civic solidarity is not merely a legal technicality. States ask citizens to trust institutions, pay taxes, obey public law, defend the polity, and accept decisions made through common procedures. A civic-national project therefore has to balance a shared public framework with disagreement, dissent, minority autonomy, and the fact that residents, refugees, non-citizens, and future generations may be affected by national decisions without possessing equal political voice.',
            citations: citations(['tocquevilleDemocracy', 'millOnLiberty'], ['coeDemocraticCitizenship', 'oxfordConstitutionalPatriotism', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'The inclusion promised by civic nationalism can be undermined by assimilationist tests. A constitution may speak in universal terms while administrative practice makes membership difficult for particular groups, defines one language or memory as the authentic national culture, or treats dissent from majority narratives as disloyalty. Conversely, pluralist civic nationalism can allow multiple languages, religions, and historical memories while maintaining common rights, democratic procedures, and a shared commitment to non-domination.',
            citations: citations(['millOnLiberty', 'renanNation', 'andersonImaginedCommunities'], ['oxfordConstitutionalPatriotism', 'coeDemocraticCitizenship', 'sepColonialism']),
          },
          {
            type: 'paragraph',
            text: 'Civic nationalism is not automatically democratic, liberal, secular, peaceful, or economically egalitarian. A military dictatorship can use citizenship language; a welfare state can exclude non-citizens; a republic can hold colonies; and a constitutional order can restrict opposition. Those properties must be scored independently on this project’s six dimensions rather than inferred from the label.',
            citations: citations(['renanNation', 'andersonImaginedCommunities', 'millOnLiberty'], ['sepNationalism', 'sepColonialism', 'vdem', 'foreignPolicy', 'sepReligionPolitics']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Ancient and early republican antecedents',
            text: 'Classical republican ideas connected political membership to civic participation, law, public office, and a common res publica. These are antecedents rather than modern nationalism: ancient citizenship was usually restricted by status, gender, origin, or enslavement, and the modern nation-state did not yet exist.',
            citations: citations(['tocquevilleDemocracy', 'millOnLiberty'], ['sepNationalism', 'openTextbook']),
          },
          {
            period: 'Late eighteenth century: revolution and popular sovereignty',
            text: 'Revolutionary political language recast the people as a source of sovereignty and connected national membership to citizenship, representation, rights, and a common public law. The same period also exposed the gap between universal claims and exclusions based on gender, race, property, colonial status, and political dissent.',
            citations: citations(['lockeSecondTreatise', 'millOnLiberty'], ['sepNationalism', 'sepColonialism', 'openTextbook']),
          },
          {
            period: 'Nineteenth century: mass nation-building and citizenship administration',
            text: 'States expanded schooling, conscription, censuses, administrative law, public ceremonies, and national markets. These institutions made citizenship more legible and participatory for some people while also standardizing language, centralizing authority, and differentiating citizens from subjects, colonized peoples, migrants, and internal minorities.',
            citations: citations(['andersonImaginedCommunities', 'tocquevilleDemocracy'], ['sepNationalism', 'sepColonialism', 'vdem']),
          },
          {
            period: '1882: Renan’s voluntarist account',
            text: 'Ernest Renan’s lecture What Is a Nation? became a major reference point for a nation understood through shared memory and present political will rather than race or language alone. It is influential, but it should be read critically: the account contains selective forgetting and does not itself resolve who is allowed to consent, how colonial subjects are treated, or how minorities participate.',
            citations: citations(['renanNation'], ['sepNationalism']),
          },
          {
            period: 'Twentieth century: imagined communities and contested citizenship',
            text: 'Benedict Anderson’s account of nations as imagined communities shifted attention toward print, media, time, institutions, and the social production of collective belonging. It helps explain why civic identity is constructed and reproduced, but “imagined” does not mean unreal: institutions, borders, rights, taxes, and coercive power distribute real opportunities and harms.',
            citations: citations(['andersonImaginedCommunities'], ['sepNationalism', 'sepColonialism']),
          },
          {
            period: 'After 1945: constitutional patriotism and human-rights constraints',
            text: 'After fascism, world war, and genocide, some theorists sought political loyalty grounded in democratic and universal constitutional principles rather than an ethnic or mythic national culture. This debate informed West German constitutional patriotism and later discussions of European integration, but it remains contested: constitutional language can become a new orthodoxy, and formal rights do not automatically create equal belonging.',
            citations: citations(['kantPerpetualPeace', 'renanNation'], ['oxfordConstitutionalPatriotism', 'coeDemocraticCitizenship', 'vdem']),
          },
          {
            period: 'Decolonization to the present: plural, postcolonial, and migrant citizenship',
            text: 'Anti-colonial movements, Indigenous peoples, diasporas, migration, minority-rights struggles, and supranational institutions challenged the assumption that one state, one people, one language, and one history naturally coincide. Contemporary civic-national debates therefore include questions of dual citizenship, federalism, multiculturalism, Indigenous sovereignty, border control, colonial memory, and whether national democracy can coexist with universal human rights.',
            citations: citations(['andersonImaginedCommunities', 'renanNation', 'nabucoAbolitionism'], ['sepColonialism', 'sepNationalism', 'oxfordConstitutionalPatriotism', 'coeDemocraticCitizenship']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and neighboring concepts',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Republican citizenship nationalism',
                distinction: 'Treats active citizenship, public service, civic education, common law, and political participation as the core of national membership.',
                relation: 'A central civic-national variant; it can be emancipatory when participation is equal, but majoritarian when republican virtue is defined by one culture or language.',
                citations: citations(['tocquevilleDemocracy', 'millOnLiberty'], ['sepNationalism', 'coeDemocraticCitizenship']),
              },
              {
                label: 'Liberal constitutional nationalism',
                distinction: 'Places rights, representative institutions, constitutional limits, and individual liberty at the center of national allegiance.',
                relation: 'Overlaps strongly with civic nationalism, while requiring separate evidence about whether liberal rights apply equally to nonconforming citizens and non-citizens.',
                citations: citations(['lockeSecondTreatise', 'millOnLiberty'], ['sepLiberalism', 'sepNationalism', 'vdem']),
              },
              {
                label: 'Constitutional patriotism',
                distinction: 'Grounds political attachment primarily in universalist constitutional principles and democratic practices rather than national culture; it may be designed for plural or supranational polities.',
                relation: 'A close neighbor and sometimes a proposed successor to civic nationalism, but not a synonym: it deliberately questions whether the nation should remain the main object of loyalty.',
                citations: citations(['kantPerpetualPeace', 'renanNation'], ['oxfordConstitutionalPatriotism', 'sepNationalism']),
              },
              {
                label: 'Assimilationist civic nationalism',
                distinction: 'Offers formal citizenship but expects minorities and immigrants to adopt a dominant language, public culture, memory, or conception of secular or religious citizenship.',
                relation: 'Can be civic in its legal vocabulary while reproducing cultural hierarchy; the test is whether shared institutions permit meaningful pluralism and equal voice.',
                citations: citations(['millOnLiberty', 'andersonImaginedCommunities'], ['oxfordConstitutionalPatriotism', 'coeDemocraticCitizenship', 'sepColonialism']),
              },
              {
                label: 'Pluralist or multicultural civic nationalism',
                distinction: 'Defines common membership through equal rights and democratic institutions while allowing multiple languages, religions, memories, and forms of cultural life.',
                relation: 'A more inclusion-oriented civic variant, but it still has to address the power of the state, unequal socioeconomic status, and groups who are not citizens.',
                citations: citations(['millOnLiberty', 'tocquevilleDemocracy'], ['coeDemocraticCitizenship', 'oxfordConstitutionalPatriotism', 'vdem']),
              },
              {
                label: 'Developmental or state-building nationalism',
                distinction: 'Uses common citizenship, public education, infrastructure, and state capacity to create a shared political community and accelerate national development.',
                relation: 'Can be civic in membership terms but may raise authority and economic scores when development is directed from above or dissent is treated as an obstacle.',
                citations: citations(['andersonImaginedCommunities', 'tocquevilleDemocracy'], ['sepNationalism', 'vdem', 'openTextbook']),
              },
              {
                label: 'Anti-colonial civic nationalism',
                distinction: 'Uses national self-determination and equal citizenship to oppose imperial rule, racial hierarchy, colonial subjecthood, or externally imposed political membership.',
                relation: 'Often overlaps with civic nationalism but may combine inclusive citizenship with Indigenous, religious, class, or cultural nationhood; it should not be reduced to a European civic model.',
                citations: citations(['nabucoAbolitionism', 'andersonImaginedCommunities'], ['sepColonialism', 'sepNationalism', 'panAfricanism']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'People, movements, and historical examples',
        blocks: [
          {
            type: 'people',
            entries: [
              {
                name: 'Ernest Renan',
                role: 'French historian and political thinker whose account of nationhood emphasized shared memory and continuing collective consent rather than race, dynasty, or language alone.',
                caveat: 'Renan’s account is a classic reference, not a neutral definition. Its treatment of memory, forgetting, empire, and consent requires critical historical reading.',
                citations: citations(['renanNation'], ['sepNationalism']),
              },
              {
                name: 'Benedict Anderson',
                role: 'Historian and political theorist who explained nations as imagined communities produced through media, institutions, shared time, and narratives of collective membership.',
                caveat: 'Anderson is primarily an analyst of nationalism rather than a simple advocate of civic nationalism. His framework helps explain how civic belonging is constructed without proving that any particular construction is just.',
                citations: citations(['andersonImaginedCommunities'], ['sepNationalism', 'sepColonialism']),
              },
              {
                name: 'John Stuart Mill',
                role: 'Liberal political philosopher who connected representative government, nationality, political participation, individuality, and freedom of discussion.',
                caveat: 'Mill’s arguments contain nineteenth-century assumptions and tensions around empire and national development. He is a historical source for one liberal-civic line, not a final authority on inclusion.',
                citations: citations(['millOnLiberty'], ['sepMill', 'sepNationalism']),
              },
              {
                name: 'Alexis de Tocqueville',
                role: 'French comparative thinker whose analyses of democracy, local institutions, associations, religion, equality, and civic habits illuminate how political membership can be sustained through participation.',
                caveat: 'Tocqueville combined democratic analysis with serious limitations concerning colonial domination and equality. His work should be used comparatively and critically.',
                citations: citations(['tocquevilleDemocracy'], ['sepNationalism', 'vdem']),
              },
              {
                name: 'Jürgen Habermas and constitutional-patriotism theorists',
                role: 'A post-war German intellectual tradition that sought political solidarity around democratic constitutional principles rather than ethnic descent or a single inherited national culture.',
                caveat: 'Constitutional patriotism is a neighboring and partly post-national concept, not simply the most advanced version of civic nationalism. Its critics question whether constitutional norms can avoid cultural hierarchy or become a coercive civil religion.',
                citations: citations(['renanNation', 'kantPerpetualPeace'], ['oxfordConstitutionalPatriotism', 'coeDemocraticCitizenship']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'French republican citizenship tradition',
                period: 'France, especially from the Revolution through the modern republics',
                match: 'A major reference case for universal legal citizenship, republican sovereignty, public institutions, and a common civic identity that is formally open beyond ancestry.',
                caveat: 'The same tradition has included property and gender exclusions, colonial subjecthood, assimilationist policy, language hierarchy, and conflicts over religion and minority recognition. It is a partial and internally contested case, not a pure model.',
                citations: citations(['renanNation', 'millOnLiberty'], ['sepNationalism', 'sepColonialism', 'oxfordConstitutionalPatriotism']),
              },
              {
                name: 'United States constitutional and civic-national tradition',
                period: 'United States, from the constitutional founding through contemporary citizenship debates',
                match: 'Constitutional membership, republican representation, civic symbols, and a universalist rights vocabulary have provided a powerful civic-national language.',
                caveat: 'Founding exclusions of enslaved people, Indigenous peoples, women, non-property holders, and later racialized immigration regimes show why constitutional language must be compared with actual citizenship and rights. The country contains civic, ethnic, racial, religious, and imperial traditions at the same time.',
                citations: citations(['lockeSecondTreatise', 'tocquevilleDemocracy', 'millOnLiberty'], ['sepNationalism', 'vdem', 'sepColonialism']),
              },
              {
                name: 'Swiss federal and multilingual civic institutions',
                period: 'Switzerland, nineteenth century–present',
                match: 'A federal political community can sustain national institutions across multiple language regions and cantonal identities, making it a useful case for studying civic membership beyond one ethnic or linguistic nation.',
                caveat: 'Federalism and multilingualism do not eliminate exclusions, unequal naturalization, migration disputes, or local majoritarianism. Switzerland is an instructive partial case, not evidence that civic nationalism automatically produces pluralism.',
                citations: citations(['andersonImaginedCommunities', 'tocquevilleDemocracy'], ['sepNationalism', 'coeDemocraticCitizenship', 'vdem']),
              },
              {
                name: 'Post-war European constitutional and citizenship projects',
                period: 'Western Europe and European institutions, 1945–present',
                match: 'Human-rights commitments, democratic constitutionalism, cross-border institutions, and regional citizenship complicate the idea that political solidarity must stop at the nation-state.',
                caveat: 'European integration is not a single civic nation and has persistent borders, unequal membership, colonial legacies, and democratic-accountability debates. It is better treated as a neighboring experiment in layered or post-national belonging.',
                citations: citations(['kantPerpetualPeace', 'andersonImaginedCommunities'], ['oxfordConstitutionalPatriotism', 'coeDemocraticCitizenship', 'sepNationalism']),
              },
              {
                name: 'Anti-colonial and postcolonial citizenship projects',
                period: 'Africa, Asia, the Caribbean, Latin America, and other decolonizing contexts, nineteenth century–present',
                match: 'Movements have used equal national citizenship and self-determination to challenge imperial subjecthood and racial hierarchy while building states with diverse populations.',
                caveat: 'Postcolonial nation-building cannot be judged by a narrow European civic/ethnic binary. Indigenous sovereignty, language, religion, class, caste, gender, and colonial borders can create conflicts within an inclusive national project.',
                citations: citations(['nabucoAbolitionism', 'andersonImaginedCommunities'], ['sepColonialism', 'sepNationalism', 'panAfricanism']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'ethnic-nationalist', relation: 'defines national membership more through ancestry, inherited culture, language, or origin; real movements may combine ethnic and civic criteria' },
              { id: 'national-conservative', relation: 'may share sovereignty and national institutions, but national conservatism usually gives more weight to inherited culture, continuity, hierarchy, or tradition' },
              { id: 'classical-liberal', relation: 'can overlap through individual rights, constitutional limits, and free association, but liberalism does not require national solidarity' },
              { id: 'liberal-constitutionalist', relation: 'shares constitutional rights and accountable institutions; civic nationalism adds national membership as a central source of solidarity' },
              { id: 'anti-colonial-liberation', relation: 'often shares equal citizenship and self-determination, but anti-colonial liberation centers imperial domination and may combine civic membership with other emancipatory traditions' },
              { id: 'religious-traditionalist', relation: 'can conflict when religious authority or inherited confession determines membership, although religious citizens can participate in plural civic nationalism' },
              { id: 'cosmopolitan', relation: 'shares concern for universal human status and may support layered citizenship, but cosmopolitanism gives less priority to national solidarity and sovereignty' },
              { id: 'populist', relation: 'can borrow the language of the people and citizenship, but populism is a style or thin ideology that may be attached to civic, ethnic, socialist, or authoritarian nationalism' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'The first criticism is the civic–ethnic binary itself. It can portray some national histories as rational and inclusive while portraying others as permanently ethnic, even though every nation uses institutions, culture, memory, descent narratives, and boundary practices in mixed ways. The safer method is to identify the membership rules a movement advocates and compare them with citizenship law, political participation, minority treatment, and the distribution of power.',
            citations: citations(['renanNation', 'andersonImaginedCommunities'], ['sepNationalism', 'oxfordConstitutionalPatriotism']),
          },
          {
            type: 'paragraph',
            text: 'The second criticism is hidden exclusion. Universal citizenship may coexist with colonial subjecthood, racialized policing, gender restrictions, unequal naturalization, statelessness, disenfranchisement, or welfare rights tied to status. A civic vocabulary should therefore be checked against equal protection, access to documentation, voting rights, due process, language access, and the treatment of people who live under the state’s authority without full citizenship.',
            citations: citations(['nabucoAbolitionism', 'millOnLiberty', 'tocquevilleDemocracy'], ['sepColonialism', 'vdem', 'coeDemocraticCitizenship']),
          },
          {
            type: 'paragraph',
            text: 'The third criticism is assimilation. A common civic culture can support trust and democratic communication, but “integration” can become a demand that minorities abandon language, religion, memory, dress, family practice, or political dissent. Pluralist safeguards include equal civil and political rights, anti-discrimination law, independent courts, meaningful minority participation, multilingual access where needed, freedom of conscience, and a distinction between constitutional duties and majority lifestyle preferences.',
            citations: citations(['millOnLiberty', 'lockeLetterToleration', 'andersonImaginedCommunities'], ['coeDemocraticCitizenship', 'oxfordConstitutionalPatriotism', 'sepReligionPolitics']),
          },
          {
            type: 'paragraph',
            text: 'The fourth criticism is that national self-government can conflict with universal rights and obligations beyond the nation. A civic nation may defend democratic accountability against distant institutions, but it may also use sovereignty to evade refugee protection, minority rights, international law, climate duties, or responsibility for imperial and colonial harms. The project should record this tension rather than assume that either national or supranational loyalty is automatically democratic.',
            citations: citations(['kantPerpetualPeace', 'renanNation'], ['foreignPolicy', 'oxfordConstitutionalPatriotism', 'sepColonialism', 'coeDemocraticCitizenship']),
          },
          {
            type: 'paragraph',
            text: 'Finally, civic nationalism can become a majoritarian civil religion. Constitutional symbols, historical myths, commemorations, and loyalty tests may help sustain public commitment, but they can also stigmatize dissent and authorize surveillance or emergency powers. Democratic safeguards require contestable national narratives, peaceful alternation of power, an independent press and judiciary, equal citizenship, lawful opposition, transparent security institutions, and the ability to criticize the nation without being treated as an enemy.',
            citations: citations(['millOnLiberty', 'tocquevilleDemocracy', 'renanNation'], ['vdem', 'sepReligionPolitics', 'oxfordConstitutionalPatriotism']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['renanNation', 'andersonImaginedCommunities', 'millOnLiberty', 'tocquevilleDemocracy', 'lockeSecondTreatise', 'lockeLetterToleration', 'kantPerpetualPeace', 'constantLibertyModerns', 'nabucoAbolitionism'],
      researchSourceIds: ['sepNationalism', 'oxfordConstitutionalPatriotism', 'coeDemocraticCitizenship', 'sepColonialism', 'sepLiberalism', 'sepReligionPolitics', 'vdem', 'foreignPolicy', 'openTextbook', 'panAfricanism'],
      editorialNote: 'The entry treats civic nationalism as a disputed family resemblance organized around the claimed basis of national membership. It distinguishes civic nationalism from constitutional patriotism, ethnic nationalism, patriotism, liberalism, and cosmopolitanism, and treats country examples as partial, dated, and internally contested. Scores are didactic composites, not empirical measurements of every movement, government, or citizen using the label.',
    },
    researchGaps: [
      'Add French-language scholarship on republican universalism, laïcité, assimilation, colonial citizenship, the Dreyfus era, overseas departments, and the postcolonial critique of civic nationalism.',
      'Add German-language scholarship on constitutional patriotism, federalism, citizenship reform, Vergangenheitsbewältigung, reunification, migration, and the relationship between civic belonging and the memory of National Socialism.',
      'Add Portuguese- and Spanish-language scholarship on Brazilian, Iberian, Latin American, and Lusophone forms of citizenship, republicanism, abolition, empire, plurinationalism, and postcolonial nation-building; Nabuco is only a starting point here.',
      'Add specialist research on Indigenous sovereignty, caste, race, gender, disability, religion, language, diaspora, statelessness, refugee status, and the difference between formal citizenship and substantive political membership.',
      'Add comparative legal evidence on nationality law, naturalization, dual citizenship, voting rights, colonial subjecthood, border administration, minority-language rights, and the treatment of non-citizen residents before classifying present countries.',
      'Test civic nationalism against party programmes, constitutions, court decisions, administrative practice, public-opinion data, and political behavior; labels such as republican, liberal, secular, or constitutional do not establish inclusion on their own.',
      'Clarify the relationship among civic nationalism, patriotism, constitutional patriotism, cosmopolitanism, multicultural citizenship, and plurinational democracy through dedicated comparative scholarship rather than treating them as interchangeable labels.',
    ],
  },
  'ethnic-nationalist': {
    id: 'ethnic-nationalist',
    title: 'Ethnic nationalist',
    canonicalLabel: 'Ethnic nationalism',
    aliases: [
      'ethnic nationalism',
      'ethnonationalism',
      'ethnocultural nationalism',
      'ancestry-based nationalism',
      'cultural nationalism',
      'romantic nationalism',
    ],
    entryType: 'historical and analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'Ethnic nationalism is a family of arguments that makes a shared ancestry, ethnocultural origin, language, religion, or inherited peoplehood central to national membership and sovereignty. It does not automatically mean racism, fascism, dictatorship, or genocidal politics; those are stronger claims requiring evidence about hierarchy, law, violence, and institutions. Conversely, cultural or minority self-determination should not be treated as equivalent to domination by an ethnic majority.',
    timeScope: 'Ethnic communities and cultural identities have older histories, but the modern political form developed with romantic nationalism, state-building, mass administration, imperial competition, and the nineteenth- and twentieth-century transformation of subjects into national citizens. Its meanings continue to change through decolonization, migration, minority politics, and citizenship law.',
    geographicScope: 'Transnational profile appearing in majority-state nationalism, minority and secessionist movements, diasporic politics, post-imperial nation-building, ethnoreligious projects, and racial states. Historical examples include Central and Eastern Europe, colonial and postcolonial settings, and Nazi Germany as an extreme warning case; no region is inherently or permanently ethnic-nationalist.',
    summary: 'A form of nationalism that defines the nation substantially through a presumed common ancestry, ethnocultural origin, language, religion, inherited memory, or descent from a historic people. It can seek recognition or self-determination for a subordinated group, but it becomes exclusionary when membership is made hereditary, when minorities are treated as guests or threats, or when territory and state power are claimed for one group alone. Economic policy is open-ended; the characteristic signals are identity boundaries and the institutions used to enforce them.',
    summaryCitations: citations(
      ['smithEthnicOrigins', 'connorEthnonationalism', 'brubakerEthnicityWithoutGroups', 'andersonImaginedCommunities'],
      ['sepNationalism', 'bpbNationalism', 'cambridgeKohnDichotomy', 'sepColonialism'],
    ),
    dimensionInterpretations: {
      economic: {
        score: -18,
        label: 'Policy-flexible; often national-priority',
        explanation: 'Ethnic nationalism does not prescribe capitalism, socialism, welfare, or planning. Movements may defend private property, national development, protectionism, welfare for the co-ethnic population, or state direction. A mild market-side score reflects the common compatibility of nationalism with private property in modern nation-states, not a definition; “national preference” in distribution is an independent question about who receives rights and benefits.',
        citations: citations(['smithEthnicOrigins', 'connorEthnonationalism'], ['sepNationalism', 'bpbNationalism', 'openTextbook']),
      },
      social: {
        score: -72,
        label: 'Strongly conformity- and inheritance-oriented',
        explanation: 'The profile treats inherited culture, family continuity, language, religious tradition, or demographic reproduction as important to collective survival. This can mean cultural preservation or minority autonomy, but in a dominant-state project it often pressures people to conform and may subordinate gender, religious, sexual, linguistic, or individual rights to the supposed needs of the nation.',
        citations: citations(['smithEthnicOrigins', 'brubakerEthnicityWithoutGroups', 'hitlerMeinKampf'], ['sepNationalism', 'bpbNationalism', 'ohchrMinorityRights']),
      },
      authority: {
        score: 65,
        label: 'Authoritarian-leaning boundary enforcement',
        explanation: 'Because membership is treated as a collective inheritance, the state or movement may expand authority over citizenship, borders, schooling, language, media, family formation, political loyalty, and historical memory. Ethnic self-determination can be democratic and decentralized, so the high score describes the frequent risk of coercive boundary enforcement rather than an unavoidable institutional form.',
        citations: citations(['connorEthnonationalism', 'hitlerMeinKampf', 'arendtTotalitarianism'], ['sepNationalism', 'bpbNationalism', 'vdem', 'ohchrMinorityRights']),
      },
      identity: {
        score: -96,
        label: 'Very strongly ancestry- and culture-centered',
        explanation: 'The defining claim is that the nation is a people linked by origin, descent, language, religion, historical memory, or cultural inheritance rather than by citizenship alone. The project uses the negative end of the identity axis for nationalism, so this profile sits near the nationalist endpoint. In practice, ethnic and civic criteria are often mixed and must be measured rather than assumed from a label.',
        citations: citations(['smithEthnicOrigins', 'connorEthnonationalism', 'brubakerEthnicityWithoutGroups'], ['sepNationalism', 'bpbNationalism', 'cambridgeKohnDichotomy']),
      },
      foreign: {
        score: -55,
        label: 'Interventionist or irredentist risk',
        explanation: 'If the nation is imagined to extend beyond current borders, a movement may support diaspora protection, territorial revision, border intervention, or force against an alleged external sponsor of the group. Other ethnic-national movements favor negotiated autonomy, nonviolence, or defensive self-determination. The score marks a recurring risk, not a claim that every ethnic movement seeks war.',
        citations: citations(['connorEthnonationalism', 'mussoliniDoctrine', 'arendtTotalitarianism'], ['sepNationalism', 'foreignPolicy', 'bpbNationalism']),
      },
      religion: {
        score: -35,
        label: 'Often culturally or religiously sacralized',
        explanation: 'Religion may be treated as an inherited marker of peoplehood, a source of moral law, or a boundary between insiders and outsiders, but ethnic nationalism can also be secular and race- or language-centered. The negative score indicates a common tendency to make inherited community norms politically important; it does not establish clerical rule or a single theology.',
        citations: citations(['hitlerMeinKampf', 'renanNation', 'brubakerEthnicityWithoutGroups'], ['sepReligionPolitics', 'sepNationalism', 'bpbNationalism', 'ohchrMinorityRights']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Ethnic nationalism makes a people defined through inherited origin, language, religion, culture, historical memory, or ancestry central to national politics. It asks who the nation is before it asks how the state should be governed, and it often treats the state as legitimate when it expresses or protects that people’s collective political existence.',
            citations: citations(['smithEthnicOrigins', 'connorEthnonationalism'], ['sepNationalism', 'bpbNationalism']),
          },
          {
            type: 'paragraph',
            text: 'The label covers very different situations. A minority may use ethnonational language to resist imperial rule, demand cultural rights, or seek self-government; a majority state may use the same language to deny equal citizenship to minorities, migrants, or people with mixed ancestry. The relevant evidence is therefore not only the group’s identity claim but also the direction of power: who is protected, who is excluded, who controls territory, and whether dissent and mixed belonging remain possible.',
            citations: citations(['connorEthnonationalism', 'brubakerEthnicityWithoutGroups', 'andersonImaginedCommunities'], ['sepNationalism', 'sepColonialism', 'ohchrMinorityRights']),
          },
          {
            type: 'paragraph',
            text: 'Ethnic nationalism is not synonymous with every attachment to language, ancestry, religion, or local culture. Cultural pride, diaspora identity, Indigenous nationhood, minority autonomy, and anti-colonial self-determination can be compatible with equal rights and political pluralism. Nor is ethnic nationalism automatically fascist or genocidal. Those classifications require additional evidence about racial hierarchy, one-party rule, militarism, systematic persecution, forced removal, or mass killing.',
            citations: citations(['smithEthnicOrigins', 'brubakerEthnicityWithoutGroups', 'hitlerMeinKampf'], ['sepNationalism', 'sepColonialism', 'ushmmNurembergLaws', 'bpbNationalSocialism']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'Its central political move is to convert a social or cultural category into a nation with a claim to collective sovereignty. Language, religion, folklore, historical narratives, family descent, monuments, territory, and memories of injury can be used to describe the group as a continuous people. These symbols may express genuine solidarity, but they are also interpreted, selected, taught, counted, and sometimes imposed by institutions and political entrepreneurs.',
            citations: citations(['smithEthnicOrigins', 'andersonImaginedCommunities', 'brubakerEthnicityWithoutGroups'], ['sepNationalism', 'bpbNationalism', 'cambridgeKohnDichotomy']),
          },
          {
            type: 'paragraph',
            text: 'Ethnic membership can be defined narrowly or broadly. Some movements allow conversion, intermarriage, language adoption, civic participation, or diaspora return; others define membership as hereditary and effectively unchangeable. Legal tests may use ancestry, names, documents, blood categories, place of birth, religion, or language. These mechanisms should be distinguished from rhetoric: a movement that speaks of heritage but grants equal, revisable citizenship is not institutionally identical to one that makes ancestry a permanent legal status.',
            citations: citations(['connorEthnonationalism', 'brubakerEthnicityWithoutGroups', 'hitlerMeinKampf'], ['sepNationalism', 'bpbNationalism', 'ohchrMinorityRights', 'ushmmNurembergLaws']),
          },
          {
            type: 'paragraph',
            text: 'Ethnic nationalism often links people and territory. A homeland may be understood as the place where a group has lived, the place remembered in national history, or the territory required for a future state. This can support decolonization or minority self-rule, but it can also produce irredentism, forced homogenization, population transfer, settlement projects, or demands that borders match an imagined ethnic map. Historical residence and present sovereignty rarely align perfectly, so territorial claims require evidence about all affected communities.',
            citations: citations(['smithEthnicOrigins', 'connorEthnonationalism', 'andersonImaginedCommunities'], ['sepNationalism', 'sepColonialism', 'foreignPolicy']),
          },
          {
            type: 'paragraph',
            text: 'The politics can be majoritarian or emancipatory, democratic or authoritarian, secular or religious, economically liberal or interventionist. A movement’s placement on this site must therefore keep identity separate from the other axes. In particular, a strong ethnic identity score cannot by itself establish a position on economic ownership, social equality, executive constraints, religion, or the use of force abroad.',
            citations: citations(['connorEthnonationalism', 'brubakerEthnicityWithoutGroups'], ['sepNationalism', 'vdem', 'foreignPolicy', 'sepReligionPolitics']),
          },
          {
            type: 'paragraph',
            text: 'Categorization itself is politically consequential. Census forms, school curricula, citizenship registries, party membership, identity documents, and media labels can make an ethnic category more visible and more durable. Rogers Brubaker’s critique is especially useful here: analysts should distinguish groups as claimed social entities from categories imposed by institutions and identifications that vary by context, rather than treating every named ethnicity as a fixed bounded object.',
            citations: citations(['brubakerEthnicityWithoutGroups', 'andersonImaginedCommunities'], ['cambridgeKohnDichotomy', 'bpbNationalism', 'sepNationalism']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Premodern ethnic and cultural communities',
            text: 'Religious communities, language groups, clans, dynasties, cities, and peoples formed identities long before the modern nation-state. They are historical antecedents, not automatic examples of modern ethnic nationalism: premodern membership could be local, imperial, religious, dynastic, class-based, or legally plural rather than organized around a sovereign nation of equal citizens.',
            citations: citations(['smithEthnicOrigins', 'andersonImaginedCommunities'], ['sepNationalism', 'openTextbook']),
          },
          {
            period: 'Late eighteenth and early nineteenth centuries: romantic and cultural nationalism',
            text: 'Romantic thinkers and political movements placed language, folklore, memory, and the Volk or people at the center of collective identity. These currents challenged dynastic empires and universalizing political models, sometimes defending cultural diversity and sometimes turning cultural difference into a demand for one people, one territory, and one state.',
            citations: citations(['smithEthnicOrigins', 'andersonImaginedCommunities'], ['sepNationalism', 'bpbNationalism', 'cambridgeKohnDichotomy']),
          },
          {
            period: 'Nineteenth century: mass administration and national standardization',
            text: 'Schools, conscription, print media, censuses, bureaucratic records, railways, and national markets helped transform cultural categories into administratively legible populations. State-building could create national solidarity and political participation, while also standardizing language, ranking populations, and narrowing acceptable forms of identity.',
            citations: citations(['andersonImaginedCommunities', 'smithEthnicOrigins', 'brubakerEthnicityWithoutGroups'], ['sepNationalism', 'bpbNationalism', 'cambridgeKohnDichotomy']),
          },
          {
            period: 'Empire, colonial rule, and racial classification',
            text: 'Imperial administrations frequently classified subjects by race, tribe, religion, language, or custom and used those classifications to govern territory and labor. Colonial categories could harden or transform identities rather than simply record timeless ethnic groups. Anti-colonial movements later reused national language for self-determination, often inheriting borders that did not match the social communities governed within them.',
            citations: citations(['andersonImaginedCommunities', 'nabucoAbolitionism', 'brubakerEthnicityWithoutGroups'], ['sepColonialism', 'sepNationalism', 'bpbNationalism']),
          },
          {
            period: '1918–1945: post-imperial states and radicalized membership',
            text: 'The collapse of empires made national self-determination a powerful principle but left mixed populations and minority treaties inside new or enlarged states. In the most destructive cases, ethnic and racial nationalism combined with dictatorship, militarization, territorial revision, and state terror. Nazi Germany turned ancestry into a legal hierarchy through citizenship and racial legislation, making it a warning case for how inherited identity can be converted into organized persecution and genocide.',
            citations: citations(['connorEthnonationalism', 'arendtTotalitarianism', 'hitlerMeinKampf'], ['sepNationalism', 'bpbNationalSocialism', 'ushmmNurembergLaws', 'vdem']),
          },
          {
            period: 'After 1945: human rights, minority protection, and decolonization',
            text: 'The post-war legal order increasingly rejected racial citizenship, collective punishment, and conquest while recognizing self-determination and minority protections in different forms. Decolonization created new states and national projects, but the tension between territorial citizenship, ethnic plurality, Indigenous sovereignty, and inherited colonial borders remained unresolved.',
            citations: citations(['nabucoAbolitionism', 'andersonImaginedCommunities'], ['sepColonialism', 'ohchrMinorityRights', 'sepNationalism', 'vdem']),
          },
          {
            period: 'Late twentieth century to the present: migration, secession, and renewed boundary politics',
            text: 'Migration, diaspora networks, federalism, language revival, secessionist campaigns, citizenship reform, and ethnoreligious mobilization continue to reshape ethnic-national politics. Some movements seek democratic autonomy or cultural recognition; others promote nativism, unequal citizenship, exclusion, or territorial violence. Current-country classification must be dated and based on laws, programmes, institutions, and conduct rather than on a party label or a single speech.',
            citations: citations(['connorEthnonationalism', 'brubakerEthnicityWithoutGroups', 'andersonImaginedCommunities'], ['sepNationalism', 'ohchrMinorityRights', 'cambridgeKohnDichotomy', 'vdem']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Cultural or romantic nationalism',
                distinction: 'Treats language, folklore, historical memory, literature, and cultural expression as the core of a people’s distinct identity.',
                relation: 'A cultural basis can support plural cultural rights, but it becomes ethnic-nationalist when it is converted into exclusive sovereignty or hereditary political membership.',
                citations: citations(['smithEthnicOrigins', 'andersonImaginedCommunities'], ['sepNationalism', 'bpbNationalism', 'cambridgeKohnDichotomy']),
              },
              {
                label: 'Minority or secessionist ethnonationalism',
                distinction: 'Uses a group’s language, ancestry, territory, or historical memory to demand autonomy, recognition, federal status, or an independent state.',
                relation: 'Can be a response to domination and compatible with democratic rights; the ethical and institutional questions concern treatment of internal minorities, borders, and coercion after self-rule.',
                citations: citations(['connorEthnonationalism', 'brubakerEthnicityWithoutGroups'], ['sepNationalism', 'sepColonialism', 'ohchrMinorityRights']),
              },
              {
                label: 'Diaspora and irredentist nationalism',
                distinction: 'Defines a dispersed people as one nation and may claim that the state has obligations to co-ethnics outside its borders or that “historic” territory should be recovered.',
                relation: 'Diaspora solidarity can be cultural or humanitarian; irredentism becomes coercive when it denies the political agency and rights of populations currently living in the claimed territory.',
                citations: citations(['connorEthnonationalism', 'andersonImaginedCommunities'], ['sepNationalism', 'foreignPolicy', 'sepColonialism']),
              },
              {
                label: 'Ethnoreligious nationalism',
                distinction: 'Treats a religious tradition as an inherited marker of national peoplehood, often linking faith, family, territory, law, and collective memory.',
                relation: 'It differs from theocracy: religious identity may be cultural rather than clerical, while a theocracy gives religious authority a constitutive governing role. Both can coexist and must be tested separately.',
                citations: citations(['brubakerEthnicityWithoutGroups', 'hitlerMeinKampf'], ['sepReligionPolitics', 'sepNationalism', 'bpbNationalism', 'ohchrMinorityRights']),
              },
              {
                label: 'Nativist or exclusionary nationalism',
                distinction: 'Treats the native or historically dominant population as the rightful owner of the state and makes immigrants, minorities, refugees, or allegedly disloyal citizens politically suspect.',
                relation: 'Often combines ethnic nationalism with populism, welfare chauvinism, border restriction, or cultural assimilation. It should be distinguished from ordinary immigration policy by the legal and political status assigned to outsiders and minorities.',
                citations: citations(['brubakerEthnicityWithoutGroups', 'connorEthnonationalism'], ['sepNationalism', 'ohchrMinorityRights', 'bpbNationalism']),
              },
              {
                label: 'Racial or biological nationalism',
                distinction: 'Treats ancestry as a biological hierarchy and makes racial classification, reproduction, segregation, or “purity” central to the political order.',
                relation: 'This is a particularly coercive and historically dangerous subtype, not a synonym for all ethnic nationalism. Its institutional markers include racial law, unequal citizenship, state violence, and exclusion that cannot be undone by adopting a culture or professing a belief.',
                citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['ushmmNurembergLaws', 'bpbNationalSocialism', 'sepNationalism']),
              },
              {
                label: 'Authoritarian ethnocracy',
                distinction: 'Concentrates state power around a dominant ethnic group while restricting opposition, equal citizenship, independent institutions, or the political participation of minorities.',
                relation: 'The authority score rises because ethnic membership is enforced through the state; it overlaps with authoritarianism but is not identical to every authoritarian regime or every ethnic movement.',
                citations: citations(['arendtTotalitarianism', 'connorEthnonationalism'], ['vdem', 'sepNationalism', 'ohchrMinorityRights']),
              },
              {
                label: 'Genocidal or totalizing racial nationalism',
                distinction: 'Defines targeted populations as existential contaminants or enemies and uses state or movement power for systematic persecution, removal, enslavement, or extermination.',
                relation: 'Nazi Germany is a historically documented extreme case. It should be named precisely and never used as a casual synonym for cultural nationalism, ordinary patriotism, or every contemporary right-wing movement.',
                citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['ushmmNurembergLaws', 'bpbNationalSocialism', 'sepFascism']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'People, movements, and historical examples',
        blocks: [
          {
            type: 'people',
            entries: [
              {
                name: 'Johann Gottfried Herder',
                role: 'German philosopher and early cultural-national thinker associated with the relationship among language, culture, historical particularity, and the Volk.',
                caveat: 'Herder’s relationship to nationalism is debated, and he should not be treated as a straightforward author of racial or imperial nationalism. Later movements selectively appropriated cultural language in ways that exceeded or contradicted his pluralist and anti-imperial concerns.',
                citations: citations(['smithEthnicOrigins'], ['sepNationalism', 'cambridgeKohnDichotomy']),
              },
              {
                name: 'Anthony D. Smith',
                role: 'Historical sociologist who studied ethnic communities, myths, memories, symbols, and the transformation of ethnies into modern nations.',
                caveat: 'Smith provides an influential scholarly interpretation of national origins and ethnic continuity, not a biological theory that nations are immutable or naturally entitled to states.',
                citations: citations(['smithEthnicOrigins'], ['sepNationalism', 'cambridgeKohnDichotomy']),
              },
              {
                name: 'Walker Connor',
                role: 'Comparative scholar who analyzed ethnonationalism as identity and loyalty organized around a perceived common ancestry and stressed the political importance of national consciousness.',
                caveat: 'Connor’s terminology is one influential approach among competing theories of nationalism. It should be combined with institutional and historical evidence rather than used as a universal test for group authenticity.',
                citations: citations(['connorEthnonationalism'], ['sepNationalism', 'cambridgeKohnDichotomy']),
              },
              {
                name: 'Rogers Brubaker',
                role: 'Sociologist whose critique of groupism distinguishes ethnic categories, political projects, institutional classifications, and changing identifications.',
                caveat: 'Brubaker is principally a critic and analyst of ethnic categorization, not an advocate of ethnic nationalism. His work is included to prevent the entry from treating ethnic groups as timeless biological containers.',
                citations: citations(['brubakerEthnicityWithoutGroups'], ['cambridgeKohnDichotomy', 'sepNationalism']),
              },
              {
                name: 'Adolf Hitler and Nazi racial nationalism',
                role: 'A historically documented extreme case in which racialized ancestry, dictatorship, territorial expansion, antisemitism, and state violence were fused into a genocidal political order.',
                caveat: 'This is a warning case, not a representative definition of all ethnic nationalism. The Nazi regime’s racial laws and genocide must be analyzed with precise historical sources rather than used as a rhetorical label for ordinary cultural or national politics.',
                citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['ushmmNurembergLaws', 'bpbNationalSocialism', 'sepFascism']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'German romantic and cultural nationalism',
                period: 'German-speaking Europe, late eighteenth–nineteenth centuries',
                match: 'Language, folklore, historical memory, and the idea of a cultural people became important resources for challenging dynastic and imperial arrangements.',
                caveat: 'This history contains pluralist, cultural, liberal, conservative, imperial, and later racial currents. It should not be collapsed into National Socialism, nor should later Nazi appropriation be projected backward onto every romantic thinker.',
                citations: citations(['smithEthnicOrigins', 'andersonImaginedCommunities'], ['sepNationalism', 'bpbNationalism', 'cambridgeKohnDichotomy']),
              },
              {
                name: 'Central and Eastern European post-imperial nation-building',
                period: 'Especially 1918–1945, with earlier roots and later legacies',
                match: 'The collapse or weakening of empires created movements seeking states aligned with language, culture, or historical peoples, while new borders left many mixed populations inside each state.',
                caveat: 'The region cannot be classified as uniformly ethnic. National movements combined civic citizenship, cultural revival, minority protection, exclusion, secession, authoritarianism, and democratic projects in different proportions.',
                citations: citations(['connorEthnonationalism', 'brubakerEthnicityWithoutGroups'], ['cambridgeKohnDichotomy', 'sepNationalism', 'ohchrMinorityRights']),
              },
              {
                name: 'Anti-imperial and minority self-determination movements',
                period: 'Nineteenth century–present, across colonial and multinational settings',
                match: 'Groups have invoked shared language, ancestry, religion, or historical community to resist imperial rule, demand autonomy, protect cultural rights, or establish political self-government.',
                caveat: 'A subordinated group’s self-determination claim does not automatically justify domination over its own internal minorities. The relevant questions are consent, equal rights, non-discrimination, territorial inclusion, and whether alternative forms of autonomy were available.',
                citations: citations(['nabucoAbolitionism', 'connorEthnonationalism', 'brubakerEthnicityWithoutGroups'], ['sepColonialism', 'sepNationalism', 'ohchrMinorityRights']),
              },
              {
                name: 'Nazi Germany',
                period: 'Germany, 1933–1945',
                match: 'A documented extreme in which racial ancestry defined full political membership, law enforced unequal status, opposition was destroyed, territorial expansion was pursued, and state violence culminated in genocide.',
                caveat: 'Nazi Germany is an essential warning case for racial nationalism, but it is not a generic synonym for ethnic identity, cultural nationalism, immigration restriction, conservatism, or every nationalist movement. The classification rests on the combination of racial law, dictatorship, persecution, war, and genocide.',
                citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['ushmmNurembergLaws', 'bpbNationalSocialism', 'vdem', 'sepFascism']),
              },
              {
                name: 'Contemporary ethnonationalist movements and membership regimes',
                period: 'Contemporary; country-, party-, and issue-specific',
                match: 'Parties and movements may prioritize a dominant ethnic or ethnoreligious population, demand language or ancestry tests, oppose immigration, claim diaspora protection, or seek autonomous or independent territory.',
                caveat: 'No current country should be labeled an exact match from a party name or one policy. Classification requires dated evidence from citizenship law, party programmes, minority treatment, courts, executive constraints, violence, and the rights of non-citizens.',
                citations: citations(['connorEthnonationalism', 'brubakerEthnicityWithoutGroups'], ['sepNationalism', 'ohchrMinorityRights', 'vdem', 'cambridgeKohnDichotomy']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'civic-nationalist', relation: 'defines membership primarily through citizenship and political institutions, although real civic and ethnic criteria often overlap' },
              { id: 'national-conservative', relation: 'may share inherited identity, sovereignty, borders, and tradition, but national conservatism is not necessarily ethnic or exclusionary' },
              { id: 'historical-fascist', relation: 'can overlap when ethnic or racial nationalism is joined to mass mobilization, dictatorship, militarism, and anti-pluralist revolution' },
              { id: 'national-socialist', relation: 'a specific Nazi form of racial, totalitarian, antisemitic, and expansionist politics; it is not a synonym for ethnic nationalism' },
              { id: 'anti-colonial-liberation', relation: 'can share self-determination and collective identity, but anti-colonial liberation centers imperial domination and may be civic, class-based, religious, Indigenous, or plural rather than ethnic' },
              { id: 'religious-traditionalist', relation: 'may overlap when religion is treated as inherited national membership, but religious traditionalism can be non-national and ethnic nationalism can be secular' },
              { id: 'populist', relation: 'can use people-versus-elite rhetoric and welfare or border claims, but populism is a thin ideology or political style that can attach to many national identities' },
              { id: 'monarchist', relation: 'can combine dynastic continuity with ethnic nationhood, but monarchy and ethnic nationalism are independent institutions and doctrines' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'The first criticism is essentialism: ethnic nationalism can present a historically changing and internally diverse population as one natural, timeless, and homogeneous people. Language, religion, ancestry, and memory are real sources of identification, but their boundaries are contested and institutions help produce them. The safer method is to specify who defines the group, through which evidence, with what legal consequences, and whose mixed or dissenting identities are erased.',
            citations: citations(['brubakerEthnicityWithoutGroups', 'smithEthnicOrigins', 'andersonImaginedCommunities'], ['cambridgeKohnDichotomy', 'sepNationalism', 'bpbNationalism']),
          },
          {
            type: 'paragraph',
            text: 'The second criticism is unequal citizenship. When the nation is treated as an inherited possession, minorities, migrants, refugees, people of mixed ancestry, and people who change language or religion may be treated as less authentic or less entitled to political rights. Citizenship law, voting rights, documentation, access to public services, minority-language protections, and remedies against discrimination are therefore more probative than symbolic rhetoric alone.',
            citations: citations(['connorEthnonationalism', 'brubakerEthnicityWithoutGroups', 'millOnLiberty'], ['ohchrMinorityRights', 'sepNationalism', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'The third criticism is the pressure toward homogenization. A movement may begin by defending cultural survival and then treat internal diversity as betrayal, impose one language in schools and administration, restrict intermarriage, police family formation, censor alternative histories, or demand loyalty to a dominant group. Safeguards include equal civil and political rights, freedom of conscience and association, minority participation, independent courts, educational pluralism, and constitutional limits on identity-based coercion.',
            citations: citations(['millOnLiberty', 'brubakerEthnicityWithoutGroups', 'hitlerMeinKampf'], ['ohchrMinorityRights', 'sepReligionPolitics', 'ushmmNurembergLaws', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'The fourth criticism concerns territory and historical injury. Memories of dispossession, conquest, forced migration, or colonial rule can be morally and politically significant, but a past injustice does not automatically authorize a new injustice against people who now live in a territory. Peaceful autonomy, federalism, power-sharing, bilingual institutions, negotiated borders, minority guarantees, and international monitoring may be safer than attempts to make every border coincide with an imagined ethnic map.',
            citations: citations(['connorEthnonationalism', 'nabucoAbolitionism', 'andersonImaginedCommunities'], ['sepColonialism', 'foreignPolicy', 'ohchrMinorityRights']),
          },
          {
            type: 'paragraph',
            text: 'The fifth criticism is escalation. Claims that the nation is endangered can justify emergency powers, paramilitary organization, censorship, surveillance, forced removal, territorial war, or the treatment of political opponents as internal enemies. Nazi racial citizenship and genocide demonstrate the catastrophic end of one historically specific path; they do not prove that every cultural or minority-national project follows it. Warning signs include hereditary legal status, dehumanizing propaganda, organized impunity, elimination of independent institutions, and violence against civilians.',
            citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism', 'mussoliniDoctrine'], ['ushmmNurembergLaws', 'bpbNationalSocialism', 'sepFascism', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'Finally, ethnic nationalism can conflict with universal rights and with the fact that modern societies are layered, mobile, and interdependent. A person can belong to a language community, a religion, a city, a state, a diaspora, and a supranational legal order at the same time. The project should preserve that plural reality and avoid treating a national label as a biological diagnosis. The most important safeguards are equal citizenship, non-discrimination, minority and Indigenous rights, accountable government, free expression, peaceful dispute resolution, and the right to criticize the nation without becoming stateless or politically suspect.',
            citations: citations(['brubakerEthnicityWithoutGroups', 'millOnLiberty', 'kantPerpetualPeace'], ['ohchrMinorityRights', 'sepNationalism', 'coeDemocraticCitizenship', 'vdem']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['smithEthnicOrigins', 'connorEthnonationalism', 'brubakerEthnicityWithoutGroups', 'andersonImaginedCommunities', 'renanNation', 'hitlerMeinKampf', 'arendtTotalitarianism', 'mussoliniDoctrine', 'millOnLiberty', 'kantPerpetualPeace', 'nabucoAbolitionism'],
      researchSourceIds: ['sepNationalism', 'bpbNationalism', 'cambridgeKohnDichotomy', 'sepColonialism', 'ohchrMinorityRights', 'ushmmNurembergLaws', 'bpbNationalSocialism', 'sepFascism', 'sepReligionPolitics', 'vdem', 'foreignPolicy', 'coeDemocraticCitizenship', 'openTextbook'],
      editorialNote: 'The entry treats ethnic nationalism as a broad and internally divided family of identity-and-sovereignty claims. It distinguishes cultural identity, minority self-determination, civic nationalism, nativism, racial nationalism, fascism, and genocide, and refuses to classify an entire current country without dated institutional evidence. Scores are didactic composites, not judgments about every person or movement using the label.',
    },
    researchGaps: [
      'Add French-language research on romantic nationalism, republican and colonial citizenship, language policy, Corsica, Brittany, Alsace, Algeria, laïcité, and the relationship between universalist republicanism and ethnic boundary-making.',
      'Expand German-language scholarship on Herder, Fichte, romantic nationalism, census and citizenship law, antisemitism, the völkisch movement, National Socialism, post-war constitutional safeguards, reunification, and contemporary migration politics without treating these histories as one continuum.',
      'Add Portuguese- and Spanish-language scholarship on Iberian, Brazilian, Latin American, Lusophone African, Indigenous, mestizo, Black, and anti-colonial national projects, including how language, race, caste, citizenship, and territorial borders were constructed.',
      'Add specialist comparative work on Jewish, Roma, Kurdish, Armenian, Basque, Catalan, Welsh, Scottish, Sámi, Indigenous, African, South Asian, Southeast Asian, and Pacific national or cultural movements, preserving differences rather than forcing them into a European civic–ethnic binary.',
      'Add legal and empirical research on nationality law, denaturalization, statelessness, dual citizenship, diaspora voting, naturalization tests, minority-language rights, hate crime, political violence, population transfer, and the implementation of minority protections.',
      'Compare ethnic nationalism with Indigenous sovereignty, Black nationalism, religious nationalism, pan-nationalism, plurinational democracy, and anti-colonial liberation through authors from the affected regions and communities rather than relying only on European theory.',
      'Add dated country and party evidence before using current examples; distinguish cultural preference, minority protection, secession, nativism, ethnocracy, racial hierarchy, fascism, and genocidal intent through explicit institutional criteria.',
    ],
  },
  monarchist: {
    id: 'monarchist',
    title: 'Monarchist',
    canonicalLabel: 'Monarchism / royalism',
    aliases: [
      'monarchism',
      'royalism',
      'kingship',
      'hereditary monarchy',
      'constitutional monarchy',
      'parliamentary monarchy',
      'absolute monarchy',
    ],
    entryType: 'institutional and ideological reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'Monarchism is a family of arguments and institutions that place a monarch or royal house at the head of the state, usually through hereditary succession but sometimes through election or dynastic selection. The presence of a monarch does not by itself establish absolute rule, conservatism, religion, nationalism, or a particular economic order; the decisive evidence is how authority is acquired, limited, exercised, and removed.',
    timeScope: 'Kingship and royal government have ancient and medieval antecedents. The modern profile is most useful when distinguishing early-modern sovereignty, constitutional monarchy, parliamentary monarchy, imperial monarchy, and contemporary ceremonial crowns from one another.',
    geographicScope: 'Global institutional family with varied histories in Europe, the Middle East, Africa, Asia, the Pacific, and the Americas. European constitutional cases are overrepresented in accessible comparative literature, so the entry keeps non-European and colonial histories as explicit research gaps rather than treating the British model as universal.',
    summary: 'A political orientation that regards a monarch or royal dynasty as a legitimate head of state and often as a source of continuity, unity, authority, or tradition. Monarchism ranges from absolute or sacred kingship to constitutional and parliamentary systems in which elected governments exercise practical power. Because hereditary office can coexist with democracy, welfare states, secular law, or authoritarian rule, the label must be analyzed as an institutional arrangement and a theory of legitimacy rather than placed on a single left–right line.',
    summaryCitations: citations(
      ['aquinasMoralPolitical', 'hobbesLeviathan', 'lockeSecondTreatise', 'bagehotEnglishConstitution', 'nabucoAbolitionism'],
      ['bpbMonarchy', 'oxfordConstitutionalMonarchy', 'oxfordMonarchyConstitution', 'journalDemocraticMonarchies', 'sepMedieval'],
    ),
    dimensionInterpretations: {
      economic: {
        score: -12,
        label: 'Economically open-ended; historically market-compatible',
        explanation: 'Monarchy is not an ownership doctrine. Royal governments have organized feudal, mercantilist, colonial, capitalist, welfare, developmental, and state-directed economies. A slight market-side placement reflects the common compatibility of constitutional monarchies with private property and market institutions, not a necessary feature of royalism; absolute or social-monarchical movements may score differently.',
        citations: citations(['hobbesLeviathan', 'lockeSecondTreatise', 'nabucoAbolitionism'], ['bpbMonarchy', 'openTextbook', 'journalDemocraticMonarchies']),
      },
      social: {
        score: -48,
        label: 'Tradition- and hierarchy-oriented, variant-dependent',
        explanation: 'Dynastic succession, inherited rank, ceremony, family continuity, and established custom give monarchism a traditionalist and hierarchical tendency. Constitutional monarchies can coexist with equal citizenship and social pluralism, while absolutist, aristocratic, or religious royalism may defend stronger social hierarchy. The score therefore marks institutional inheritance, not a fixed position on every contemporary social issue.',
        citations: citations(['burkeReflections', 'aquinasMoralPolitical', 'bagehotEnglishConstitution'], ['bpbMonarchy', 'oxfordMonarchyConstitution', 'journalDemocraticMonarchies']),
      },
      authority: {
        score: 52,
        label: 'Monarchical authority; highly regime-dependent',
        explanation: 'A monarchic office gives one person or dynasty a constitutionally distinctive position, so the authority score is above the midpoint. It becomes strongly authoritarian only when the monarch rules without effective legal, representative, judicial, or public constraints. In a parliamentary monarchy, the crown may retain symbolic, appointing, or reserve functions while ministers accountable to parliament exercise governing power.',
        citations: citations(['hobbesLeviathan', 'aquinasMoralPolitical', 'bagehotEnglishConstitution', 'lockeSecondTreatise'], ['bpbMonarchy', 'ukParliamentCrown', 'oxfordConstitutionalMonarchy', 'vdem']),
      },
      identity: {
        score: -42,
        label: 'National and dynastic continuity-oriented',
        explanation: 'Royal houses often symbolize historical continuity, national unity, territory, religion, or a people’s inherited story. This can support civic attachment or a plural constitutional identity, but it can also privilege dynasty, court culture, ethnic tradition, or imperial memory. The negative score on this project’s identity axis indicates a moderate nationalist and continuity-side tendency, not ethnic nationalism in every monarchy.',
        citations: citations(['burkeReflections', 'bagehotEnglishConstitution', 'nabucoAbolitionism'], ['bpbMonarchy', 'sepNationalism', 'oxfordMonarchyConstitution']),
      },
      foreign: {
        score: -18,
        label: 'Historically expansion-capable; policy-open-ended',
        explanation: 'Dynastic alliances, imperial claims, royal diplomacy, and military command have historically supported both war and peace. Constitutional monarchies may pursue restrained multilateral foreign policy, while imperial or absolutist monarchies may expand territorially. The score records the historical association with dynastic and imperial statecraft, not an inherent requirement of monarchy.',
        citations: citations(['hobbesLeviathan', 'burkeReflections', 'nabucoAbolitionism'], ['foreignPolicy', 'oxfordMonarchyConstitution', 'openTextbook']),
      },
      religion: {
        score: -52,
        label: 'Often sacralized; secular variants exist',
        explanation: 'Many monarchies have grounded legitimacy in divine sanction, sacred ceremony, established churches, religious law, or the idea of the monarch as protector of a faith. Constitutional and parliamentary monarchies may instead be religiously neutral or maintain only ceremonial establishments. The score signals the historical relationship between kingship and sacred legitimacy, not automatic theocracy.',
        citations: citations(['aquinasMoralPolitical', 'hobbesLeviathan', 'lockeLetterToleration'], ['sepReligionPolitics', 'bpbMonarchy', 'oxfordMonarchyConstitution']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Monarchism treats a monarch or royal house as a legitimate head of state and, in some variants, as a governing authority. Its central question is not simply whether a country has a king or queen, but why the office exists, how succession works, what powers the office holds, and whether those powers are constrained by law, representation, custom, religion, or popular consent.',
            citations: citations(['aquinasMoralPolitical', 'hobbesLeviathan', 'lockeSecondTreatise'], ['bpbMonarchy', 'sepMedieval', 'oxfordConstitutionalMonarchy']),
          },
          {
            type: 'paragraph',
            text: 'The same institutional label covers very different regimes. An absolute monarch may make laws, command administration, control courts, and suppress opposition; a parliamentary monarch may be a non-partisan head of state whose public acts are performed on ministerial advice. A constitutional monarch can still possess meaningful reserve powers or dynastic privilege, so ceremonial appearance is not by itself proof of political insignificance.',
            citations: citations(['hobbesLeviathan', 'bagehotEnglishConstitution', 'lockeSecondTreatise'], ['bpbMonarchy', 'ukParliamentCrown', 'oxfordConstitutionalMonarchy', 'journalDemocraticMonarchies']),
          },
          {
            type: 'paragraph',
            text: 'Monarchism also should not be classified automatically as right-wing, religious, nationalist, or anti-democratic. Royalists have defended hierarchy, divine right, empire, and inherited privilege, but constitutional monarchists have also supported representative government, civil liberties, social insurance, and democratic continuity. This entry therefore scores the royal principle separately from the economic, social, identity, religious, and foreign-policy choices made by a particular movement or state.',
            citations: citations(['burkeReflections', 'nabucoAbolitionism', 'bagehotEnglishConstitution'], ['bpbMonarchy', 'journalDemocraticMonarchies', 'vdem', 'sepReligionPolitics']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'Monarchic legitimacy can be dynastic, religious, historical, constitutional, military, popular, or some combination. Hereditary succession promises continuity and can reduce competition over the headship of state, but it also assigns public office by birth. Elective or rotational monarchies retain a royal form while changing the succession mechanism, and some monarchies use councils, aristocratic estates, clerical authorities, or family institutions to select the ruler.',
            citations: citations(['aquinasMoralPolitical', 'hobbesLeviathan', 'burkeReflections'], ['bpbMonarchy', 'sepMedieval', 'openTextbook']),
          },
          {
            type: 'paragraph',
            text: 'Absolute or executive monarchism concentrates governing authority in the crown or its court. The monarch may appoint ministers, command armed forces, issue decrees, control taxation, and influence courts or representative bodies. Constitutional limitation can be formal or conventional: written constitutional rules, parliamentary confidence, ministerial responsibility, judicial review, legal traditions, and public legitimacy may constrain the crown to very different degrees.',
            citations: citations(['hobbesLeviathan', 'lockeSecondTreatise', 'aquinasMoralPolitical'], ['bpbMonarchy', 'oxfordMonarchyConstitution', 'oxfordConstitutionalMonarchy', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'Parliamentary monarchy separates the symbolic head of state from the elected government without necessarily eliminating political questions about the crown. The monarch can embody continuity, perform ceremonial duties, appoint a government under constitutional rules, and sometimes exercise reserve powers during a crisis. The democratic issue is whether those powers are transparent, legally bounded, non-partisan, and ultimately accountable to citizens rather than protected by personal or dynastic privilege.',
            citations: citations(['bagehotEnglishConstitution', 'nabucoAbolitionism'], ['ukParliamentCrown', 'oxfordConstitutionalMonarchy', 'journalDemocraticMonarchies', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'Royal symbolism can unify a political community, especially where a dynasty is treated as above ordinary party conflict. It can also naturalize class hierarchy, colonial memory, gendered succession, aristocratic privilege, or an established religion. The same ceremony can be experienced as inclusive public history by some citizens and as a reminder of conquest or exclusion by others, so symbolic legitimacy should be studied alongside law, distribution, and lived political participation.',
            citations: citations(['burkeReflections', 'bagehotEnglishConstitution', 'nabucoAbolitionism'], ['oxfordMonarchyConstitution', 'bpbMonarchy', 'sepColonialism', 'ohchrMinorityRights']),
          },
          {
            type: 'paragraph',
            text: 'Monarchy is therefore a poor proxy for the rest of the political spectrum. A crown can preside over a market economy or welfare state, a secular constitution or established church, a liberal democracy or an authoritarian regime, and a defensive or imperial foreign policy. The profile should be assigned only after the relevant constitutional and historical evidence is identified.',
            citations: citations(['nabucoAbolitionism', 'bagehotEnglishConstitution', 'lockeSecondTreatise'], ['bpbMonarchy', 'journalDemocraticMonarchies', 'vdem', 'sepReligionPolitics', 'foreignPolicy']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Ancient kingdoms and imperial courts',
            text: 'Kingship appeared in many ancient political orders alongside councils, assemblies, priesthoods, aristocracies, cities, and empires. These cases establish the long history of royal authority but should not be projected directly onto modern constitutional monarchy, national citizenship, or the contemporary concept of a party-based ideology.',
            citations: citations(['aquinasMoralPolitical', 'hobbesLeviathan'], ['sepMedieval', 'openTextbook']),
          },
          {
            period: 'Medieval theories of kingship, law, and tyranny',
            text: 'Medieval political thought debated the common good, the moral duties of rulers, the relationship between temporal and religious authority, customary law, and the danger of tyranny. Kingship was often treated as legitimate only when directed toward a community’s good, although actual institutions varied across Latin Christian, Islamic, African, Asian, and other political worlds.',
            citations: citations(['aquinasMoralPolitical', 'hobbesLeviathan'], ['sepMedieval', 'sepReligionPolitics', 'openTextbook']),
          },
          {
            period: 'Sixteenth–seventeenth centuries: sovereignty and the administrative crown',
            text: 'War, taxation, bureaucratic administration, religious conflict, and territorial consolidation strengthened arguments for a unified sovereign power. Some theories defended the crown as the best guarantor of peace; others argued that royal power remained subject to natural law, customary limits, property, or the consent of the governed.',
            citations: citations(['hobbesLeviathan', 'lockeSecondTreatise'], ['sepMedieval', 'bpbMonarchy', 'openTextbook']),
          },
          {
            period: 'Seventeenth–eighteenth centuries: constitutional limitation and popular sovereignty',
            text: 'Constitutional struggles in Britain, the Netherlands, France, and elsewhere developed arguments about parliament, representation, rights, taxation, and the limits of the crown. Locke’s critique of arbitrary power and later theories of balanced government helped separate a limited monarchy from a theory of unlimited hereditary sovereignty.',
            citations: citations(['lockeSecondTreatise', 'burkeReflections'], ['oxfordMonarchyConstitution', 'bpbMonarchy', 'openTextbook']),
          },
          {
            period: '1791–1848: revolution and constitutional monarchy in France',
            text: 'The French Revolution briefly established a written constitutional monarchy in 1791–1792, and the Restoration and July Monarchy created later experiments in reconciling royal authority, representation, and revolutionary constitutional principles. These experiences show that constitutional monarchy can be a contested transitional form rather than a stable compromise, especially when the crown and representative nation claim competing sources of legitimacy.',
            citations: citations(['lockeSecondTreatise', 'burkeReflections'], ['perseeFrenchConstitutionalMonarchy', 'bpbMonarchy', 'sepNationalism']),
          },
          {
            period: 'Nineteenth century: national, imperial, and constitutional monarchies',
            text: 'Monarchies adapted to nationalism, industrialization, mass politics, empire, and expanding but unequal citizenship. Some crowns became symbols above party politics while elected parliaments and cabinets gained practical power; others preserved executive authority, aristocratic privilege, colonial rule, or military command. Walter Bagehot’s analysis of the British constitution is a key historical account of the distinction between ceremonial and governing functions.',
            citations: citations(['bagehotEnglishConstitution', 'burkeReflections', 'nabucoAbolitionism'], ['oxfordMonarchyConstitution', 'journalDemocraticMonarchies', 'bpbMonarchy', 'sepColonialism']),
          },
          {
            period: 'Twentieth century: abolition, adaptation, and decolonization',
            text: 'Wars, revolutions, republican movements, anticolonial struggles, and democratic reform abolished many dynasties or transformed them into constitutional offices. Other monarchies survived by renegotiating legitimacy through constitutions, social provision, national identity, religion, or controlled political reform. Postcolonial histories require special care because a crown could represent local continuity, colonial subordination, or both at different times.',
            citations: citations(['nabucoAbolitionism', 'bagehotEnglishConstitution', 'burkeReflections'], ['oxfordMonarchyConstitution', 'sepColonialism', 'journalDemocraticMonarchies', 'openTextbook']),
          },
          {
            period: 'Contemporary parliamentary and executive monarchies',
            text: 'Current monarchies range from parliamentary systems with largely ceremonial crowns to regimes where royal institutions retain substantial executive, religious, or economic authority. Comparative democratic research treats the relationship between hereditary and elected legitimacy as an institutional question, not as evidence that all monarchies or all republics share one political profile.',
            citations: citations(['bagehotEnglishConstitution', 'nabucoAbolitionism'], ['ukParliamentCrown', 'journalDemocraticMonarchies', 'oxfordConstitutionalMonarchy', 'vdem', 'bpbMonarchy']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Absolute or executive monarchy',
                distinction: 'The monarch or royal court exercises substantial governing authority over ministers, lawmaking, administration, courts, taxation, or security.',
                relation: 'This is the authority-heavy end of monarchism. The actual degree of constraint must be established through constitutions, institutions, elite bargaining, courts, and political practice rather than through the title alone.',
                citations: citations(['hobbesLeviathan', 'aquinasMoralPolitical'], ['bpbMonarchy', 'oxfordConstitutionalMonarchy', 'vdem']),
              },
              {
                label: 'Limited constitutional monarchy',
                distinction: 'The crown retains legally defined powers while being constrained by a constitution, rights, representative institutions, courts, or ministerial responsibility.',
                relation: 'It occupies a middle space between royal government and parliamentary monarchy; a written constitutional limit can be weak if institutions cannot enforce it.',
                citations: citations(['lockeSecondTreatise', 'burkeReflections'], ['perseeFrenchConstitutionalMonarchy', 'oxfordMonarchyConstitution', 'oxfordConstitutionalMonarchy']),
              },
              {
                label: 'Parliamentary or ceremonial monarchy',
                distinction: 'The monarch is head of state while elected ministers and parliament exercise ordinary governing power under constitutional conventions or law.',
                relation: 'This variant can coexist with liberal democracy, social democracy, welfare institutions, secular law, and pluralist citizenship; hereditary office remains the central democratic criticism.',
                citations: citations(['bagehotEnglishConstitution', 'nabucoAbolitionism'], ['ukParliamentCrown', 'journalDemocraticMonarchies', 'vdem']),
              },
              {
                label: 'Dualist or conflictual constitutional monarchy',
                distinction: 'Both the monarch and representative institutions claim meaningful political legitimacy, producing a divided executive or recurring constitutional conflict.',
                relation: 'It differs from a ceremonial crown because the monarch can shape government formation, legislation, emergency power, or foreign policy; stability depends on clear rules and accepted limits.',
                citations: citations(['lockeSecondTreatise', 'bagehotEnglishConstitution'], ['oxfordConstitutionalMonarchy', 'perseeFrenchConstitutionalMonarchy', 'oxfordMonarchyConstitution']),
              },
              {
                label: 'Elective or dynastically selected monarchy',
                distinction: 'A royal office is chosen by a council, family, elite body, religious authority, or another restricted mechanism instead of passing automatically through a single hereditary line.',
                relation: 'It retains monarchical legitimacy while changing succession. Election by a restricted body is not equivalent to democratic popular election and must be analyzed with the actual franchise and accountability rules.',
                citations: citations(['hobbesLeviathan', 'aquinasMoralPolitical'], ['bpbMonarchy', 'openTextbook', 'journalDemocraticMonarchies']),
              },
              {
                label: 'Sacred or theocratic monarchy',
                distinction: 'Royal legitimacy is grounded in divine sanction, sacred lineage, religious law, clerical endorsement, or the monarch’s role as protector or embodiment of a faith.',
                relation: 'It overlaps with religious traditionalism and theocracy but is not identical to either: some sacred monarchies limit clerical rule, and some theocracies have no monarch.',
                citations: citations(['aquinasMoralPolitical', 'hobbesLeviathan', 'lockeLetterToleration'], ['sepReligionPolitics', 'bpbMonarchy', 'openTextbook']),
              },
              {
                label: 'Imperial or colonial monarchy',
                distinction: 'The crown rules or claims authority over multiple peoples and territories, often through unequal legal statuses, military power, extraction, settlement, or indirect rule.',
                relation: 'Imperial monarchy adds a foreign-policy and colonial dimension that is not present in every royal system. National ceremony at the center can conceal unequal subjecthood at the periphery.',
                citations: citations(['nabucoAbolitionism', 'burkeReflections'], ['sepColonialism', 'oxfordMonarchyConstitution', 'openTextbook']),
              },
              {
                label: 'Social or constitutional royalism',
                distinction: 'Defends the crown as a unifying institution within representative government and may combine royal continuity with welfare, social reform, parliamentary politics, or national development.',
                relation: 'This variant shows why monarchism is not economically fixed or automatically anti-democratic, while leaving open the question of whether inherited office can be reconciled with equal political status.',
                citations: citations(['nabucoAbolitionism', 'bagehotEnglishConstitution', 'burkeReflections'], ['journalDemocraticMonarchies', 'ukParliamentCrown', 'oxfordConstitutionalMonarchy']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'People, movements, and historical examples',
        blocks: [
          {
            type: 'people',
            entries: [
              {
                name: 'Thomas Aquinas',
                role: 'Medieval Christian political thinker who analyzed kingship, the common good, law, tyranny, and the moral duties of rulers.',
                caveat: 'Aquinas is an antecedent in medieval political thought, not a modern constitutional monarchist. His theological and social context differs from contemporary democratic citizenship.',
                citations: citations(['aquinasMoralPolitical'], ['sepMedieval', 'sepReligionPolitics']),
              },
              {
                name: 'Thomas Hobbes',
                role: 'Early-modern theorist who defended indivisible sovereignty and treated monarchy as one possible form of a power capable of preventing civil conflict.',
                caveat: 'Hobbes’s sovereign theory is not identical to modern royalism, and he allowed sovereignty to take forms other than monarchy. His argument is included to illuminate authority, not to endorse unlimited rule.',
                citations: citations(['hobbesLeviathan'], ['bpbMonarchy', 'openTextbook']),
              },
              {
                name: 'John Locke',
                role: 'Liberal theorist whose arguments about consent, natural equality, property, and resistance helped establish a major critique of arbitrary or hereditary political power.',
                caveat: 'Locke is more useful here as a critic and boundary marker than as a monarchist advocate. His historical arguments also contain exclusions that should not be ignored.',
                citations: citations(['lockeSecondTreatise'], ['oxfordMonarchyConstitution', 'bpbMonarchy']),
              },
              {
                name: 'Edmund Burke',
                role: 'Conservative political writer associated with inherited institutions, continuity, prudence, representation, and resistance to abstract political reconstruction.',
                caveat: 'Burke’s defense of continuity does not amount to a simple defense of unlimited royal power. His writings must be read alongside his views on representation, empire, reform, and historical context.',
                citations: citations(['burkeReflections'], ['bpbMonarchy', 'oxfordMonarchyConstitution']),
              },
              {
                name: 'Walter Bagehot',
                role: 'Nineteenth-century analyst of the British constitution who distinguished the symbolic or “dignified” functions of the crown from the practical governing institutions of cabinet and parliament.',
                caveat: 'Bagehot described a specific Victorian constitutional arrangement and its assumptions. His analysis is a historical source for parliamentary monarchy, not proof that every crown is politically ceremonial.',
                citations: citations(['bagehotEnglishConstitution'], ['ukParliamentCrown', 'oxfordMonarchyConstitution']),
              },
              {
                name: 'Joaquim Nabuco',
                role: 'Brazilian abolitionist, lawyer, diplomat, and writer whose constitutional and national-development arguments remained connected to a monarchical framework.',
                caveat: 'Nabuco’s anti-slavery politics and monarchical constitutionalism belong to a nineteenth-century Brazilian context and contain their own limits; they should not be generalized to all royalism or treated as a complete social programme.',
                citations: citations(['nabucoAbolitionism'], ['sepColonialism', 'openTextbook']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'Medieval and early-modern kingship',
                period: 'Europe, the Middle East, Africa, Asia, and other historical political worlds',
                match: 'Royal institutions organized law, war, taxation, court administration, religious patronage, and territorial authority in many different political systems.',
                caveat: '“Monarchy” hides enormous variation across imperial, local, elective, sacred, customary, and bureaucratic settings. Ancient and medieval kingship should not be scored as if it were one modern ideology.',
                citations: citations(['aquinasMoralPolitical', 'hobbesLeviathan'], ['sepMedieval', 'sepReligionPolitics', 'openTextbook']),
              },
              {
                name: 'French constitutional-monarchical experiments',
                period: 'France, 1791–1792 and 1815–1848',
                match: 'The crown was placed in a representative constitutional framework during attempts to reconcile royal continuity, national sovereignty, rights, and legislative government.',
                caveat: 'The experiments were short-lived and conflictual, and they involved restricted participation, colonial inequality, and competing claims about whether sovereignty belonged to the king, the nation, or the legislature.',
                citations: citations(['lockeSecondTreatise', 'burkeReflections'], ['perseeFrenchConstitutionalMonarchy', 'bpbMonarchy', 'sepNationalism']),
              },
              {
                name: 'United Kingdom: parliamentary crown',
                period: 'Especially nineteenth century–present',
                match: 'The Crown remains part of the constitution while elected parliament and ministers exercise ordinary government; modern official explanations describe the monarch’s role as broadly ceremonial, with defined constitutional functions.',
                caveat: 'The British model rests on statute, convention, history, party practice, and an imperial legacy rather than one single codified constitution. Its conventions cannot be copied without examining the receiving country’s institutions and political culture.',
                citations: citations(['bagehotEnglishConstitution', 'burkeReflections'], ['ukParliamentCrown', 'oxfordMonarchyConstitution', 'oxfordConstitutionalMonarchy']),
              },
              {
                name: 'Brazilian Empire and constitutional royalism',
                period: 'Brazil, 1822–1889',
                match: 'A constitutional empire combined a hereditary head of state, representative institutions, national development debates, slavery and abolition struggles, and territorial integration across a large polity.',
                caveat: 'The imperial constitution did not create equal citizenship in practice and remained entangled with slavery, elite power, Indigenous dispossession, and regional conflict. Nabuco’s abolitionism shows that constitutional royalism contained serious internal disagreements.',
                citations: citations(['nabucoAbolitionism'], ['sepColonialism', 'openTextbook']),
              },
              {
                name: 'Contemporary democratic parliamentary monarchies',
                period: 'Contemporary; country- and constitution-specific',
                match: 'Several states retain hereditary heads of state within competitive parliamentary systems, where the democratic question centers on ministerial accountability, constitutional conventions, public finance, succession, and the boundary between symbolism and reserve power.',
                caveat: 'The existence of a crown does not classify the whole state’s economic, social, religious, or foreign policy. Country comparisons require current constitutional and institutional evidence, and democratic monarchies should not be conflated with executive or sacred monarchies.',
                citations: citations(['bagehotEnglishConstitution', 'nabucoAbolitionism'], ['journalDemocraticMonarchies', 'ukParliamentCrown', 'oxfordConstitutionalMonarchy', 'vdem']),
              },
              {
                name: 'Executive, sacred, and postcolonial monarchies',
                period: 'Contemporary and twentieth century; region- and state-specific',
                match: 'Some monarchies retain meaningful executive, religious, military, economic, or dynastic authority, while others use the crown as a postcolonial or national symbol amid constitutional reform.',
                caveat: 'This is a comparative category, not a claim that all non-European monarchies share one regime type. The next research stage must add country-specific constitutional, legal, religious, and colonial histories before naming exact contemporary matches.',
                citations: citations(['aquinasMoralPolitical', 'nabucoAbolitionism', 'hobbesLeviathan'], ['bpbMonarchy', 'sepReligionPolitics', 'sepColonialism', 'journalDemocraticMonarchies']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'conservative', relation: 'often overlaps through continuity, hierarchy, tradition, and institutional preservation, but conservatism does not require a monarch' },
              { id: 'national-conservative', relation: 'can combine royal continuity with national sovereignty and inherited culture, but monarchism can also be civic, imperial, religious, or non-national' },
              { id: 'religious-traditionalist', relation: 'may share sacred authority, inherited moral order, and established religion, but monarchy can be secular and religious traditionalism need not be royalist' },
              { id: 'theocratic', relation: 'can overlap when the monarch’s legitimacy or law is explicitly religious, but a theocracy can be republican or clerical and a monarchy can be religiously neutral' },
              { id: 'civic-nationalist', relation: 'can share national continuity and common institutions, while civic nationalism makes citizenship rather than dynastic succession the primary basis of membership' },
              { id: 'liberal-constitutionalist', relation: 'can share rule of law, rights, parliament, and limited government in constitutional variants, while liberal constitutionalism does not grant public office by dynasty' },
              { id: 'historical-fascist', relation: 'may form alliances or share order and national symbols, but fascism’s mass revolutionary authoritarianism is not identical to royalism' },
              { id: 'anti-colonial-liberation', relation: 'can conflict where the crown represents empire, but local or postcolonial monarchies may also become vehicles for national self-government; the historical relationship must be specified' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'The central criticism is hereditary inequality. Even a ceremonial crown gives public status and succession rights to a family by birth, which can conflict with equal political standing and the idea that public office should be open to citizens. Supporters answer that a non-partisan hereditary head of state can protect continuity and remain outside party competition; critics ask whether those functions require inherited privilege and whether citizens can freely revise the arrangement.',
            citations: citations(['lockeSecondTreatise', 'bagehotEnglishConstitution'], ['oxfordConstitutionalMonarchy', 'journalDemocraticMonarchies', 'bpbMonarchy']),
          },
          {
            type: 'paragraph',
            text: 'A second criticism concerns accountability and reserve power. Constitutional language may leave appointment, dissolution, emergency, military, pardon, or foreign-affairs powers ambiguous. If the crown intervenes politically without transparent rules, democratic responsibility becomes difficult to locate; if ministers hide behind royal prerogative, parliament and courts may be weakened. Clear law, ministerial responsibility, judicial review, parliamentary scrutiny, and public records are safeguards.',
            citations: citations(['lockeSecondTreatise', 'bagehotEnglishConstitution', 'hobbesLeviathan'], ['ukParliamentCrown', 'oxfordConstitutionalMonarchy', 'oxfordMonarchyConstitution', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'A third criticism concerns social hierarchy, gender, and privilege. Court expenditure, titles, estates, aristocratic access, dynastic marriage, and succession rules can reproduce class and gender inequality even when the monarch does not govern day to day. Equal succession, transparent public finance, anti-discrimination rules, independent oversight, and the removal of legally privileged status can reduce—but do not erase—the structural objection to inherited office.',
            citations: citations(['burkeReflections', 'lockeSecondTreatise', 'nabucoAbolitionism'], ['bpbMonarchy', 'oxfordConstitutionalMonarchy', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'A fourth criticism concerns religion and conscience. Sacred kingship or an established church can supply a common moral language, but it can also marginalize religious minorities, non-believers, converts, or dissenters. The state must distinguish ceremonial heritage from coercive religious authority and protect equal citizenship, freedom of conscience, and independent civil law.',
            citations: citations(['aquinasMoralPolitical', 'lockeLetterToleration', 'hobbesLeviathan'], ['sepReligionPolitics', 'bpbMonarchy', 'ohchrMinorityRights']),
          },
          {
            type: 'paragraph',
            text: 'A fifth criticism concerns empire and colonial memory. Royal houses have sometimes been symbols of conquest, extraction, racial hierarchy, and unequal subjecthood, while later national narratives present the same institution as neutral continuity. A careful account must include the people ruled at the periphery, the legal categories applied to them, the material benefits of empire, and the possibility of restitution or constitutional renegotiation.',
            citations: citations(['nabucoAbolitionism', 'burkeReflections'], ['sepColonialism', 'oxfordMonarchyConstitution', 'ohchrMinorityRights']),
          },
          {
            type: 'paragraph',
            text: 'Finally, the claim that monarchy stabilizes democracy is empirical rather than self-evident. A crown may provide symbolic continuity in an established parliamentary system, but it can also obstruct reform, legitimize emergency power, or become a focal point for authoritarian politics. Any comparison should test electoral competition, peaceful alternation, civil liberties, rule of law, minority rights, public finance, and the actual behavior of the monarch and ministers instead of inferring democratic quality from the presence or absence of a royal family.',
            citations: citations(['bagehotEnglishConstitution', 'lockeSecondTreatise', 'nabucoAbolitionism'], ['journalDemocraticMonarchies', 'oxfordConstitutionalMonarchy', 'vdem', 'ohchrMinorityRights']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['aquinasMoralPolitical', 'hobbesLeviathan', 'lockeSecondTreatise', 'lockeLetterToleration', 'burkeReflections', 'bagehotEnglishConstitution', 'nabucoAbolitionism'],
      researchSourceIds: ['bpbMonarchy', 'perseeFrenchConstitutionalMonarchy', 'oxfordConstitutionalMonarchy', 'oxfordMonarchyConstitution', 'ukParliamentCrown', 'journalDemocraticMonarchies', 'sepMedieval', 'sepReligionPolitics', 'sepColonialism', 'foreignPolicy', 'vdem', 'openTextbook', 'ohchrMinorityRights'],
      editorialNote: 'The entry treats monarchism as an institutional and ideological family rather than a single left–right position. It distinguishes absolute, limited, parliamentary, elective, sacred, imperial, and social-constitutional variants, and it separates the presence of a crown from the actual distribution of political power. Scores are didactic composites, not measurements of every monarchy, royalist movement, or citizen.',
    },
    researchGaps: [
      'Add French-language scholarship on divine-right monarchy, the French constitutional monarchies of 1791–1792, the Restoration, the July Monarchy, the Second Empire, royalism, republicanism, colonial monarchy, and the constitutional doctrines of the nineteenth century.',
      'Expand German-language research on medieval and early-modern kingship, Prussian constitutionalism, the German Empire, monarchy and nationalism, dynastic legitimacy, the Weimar transition, and contemporary comparative debates about constitutional monarchy.',
      'Add Portuguese- and Spanish-language scholarship on the Brazilian Empire, Iberian constitutional monarchies, Portuguese colonial monarchy, Latin American royalism and republicanism, abolition, Indigenous peoples, slavery, and postcolonial memory.',
      'Add non-European research on African, Middle Eastern, South Asian, Southeast Asian, Pacific, and Indigenous royal institutions, including elective succession, sacred kingship, customary law, colonial transformation, and contemporary constitutional reform.',
      'Add comparative legal evidence on succession, regency, abdication, reserve powers, ministerial countersignature, royal immunity, public finance, court privilege, referendums, emergency powers, and judicial review across current monarchies and republics.',
      'Add specialist research on women and succession, marriage and citizenship, class and aristocracy, religion and minority rights, colonial extraction, Indigenous sovereignty, reparations, and the public meaning of royal ceremony.',
      'Test claims about monarchies and democratic stability with dated comparative data on civil liberties, executive constraints, party competition, peaceful alternation, corruption, welfare, inequality, public opinion, and the actual exercise of royal power.',
    ],
  },
  theocratic: {
    id: 'theocratic',
    title: 'Theocratic',
    canonicalLabel: 'Theocracy / clerical rule',
    aliases: [
      'theocracy',
      'clerical rule',
      'divine government',
      'religious government',
      'sacerdotal state',
      'constitutional theocracy',
      'religious-law state',
    ],
    entryType: 'institutional and ideological reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'Theocracy is used here for political orders in which divine authority, sacred law, religious office, or an authoritative religious interpretation is constitutive of political legitimacy and government. It is not a synonym for personal faith, a state religion, religiously informed ethics, a religious political party, or every historical society with religious law. The institutional role of religion, not the religion’s identity, determines the classification.',
    timeScope: 'The term has ancient textual roots, while comparable institutional forms appear in ancient, medieval, early-modern, colonial, revolutionary, and contemporary settings. Modern constitutional theocracy is especially useful for hybrid systems that combine elections and courts with religious constitutional supremacy or clerical oversight.',
    geographicScope: 'Comparative profile spanning Jewish, Christian, Islamic, and other religious political traditions in the Middle East, Europe, Africa, Asia, the Americas, and the Pacific. The cases are not interchangeable: Jewish theocracy in Josephus’s political vocabulary, medieval Christian kingship, Calvinist Geneva, Islamic jurisprudence, Iran, and Vatican City involve different authorities, law, institutions, and historical contexts.',
    summary: 'A political order in which religious authority, sacred law, divine command, or a recognized religious office has a constitutive role in government and political legitimacy. Some theocracies place clerics directly in office; others use religious councils, constitutional review, sacred legal supremacy, a religious monarch, or a religiously defined electorate. The category can coexist with elections, courts, bureaucracy, markets, welfare, and national identity, so the key questions are who interprets religious authority, whether that interpretation can be contested, and whether equal civic rights extend to dissenters and non-believers.',
    summaryCitations: citations(
      ['josephusAgainstApion', 'aquinasMoralPolitical', 'mawardiOrdinances', 'khomeiniIslamicRepublic', 'spinozaPolitical', 'lockeLetterToleration'],
      ['sepReligionPolitics', 'torontoConstitutionalTheocracy', 'iconStateReligionTheocracy', 'oxfordIranTheocraticCriminalLaw', 'cambridgeMaimonidesTheocracy'],
    ),
    dimensionInterpretations: {
      economic: {
        score: -5,
        label: 'Economically open-ended',
        explanation: 'Theocracy does not specify one modern economic system. Religious law and institutions may regulate property, contracts, markets, taxation, charity, land, labor, or welfare while leaving substantial room for private ownership, state planning, guilds, endowments, or mixed economies. The near-midpoint score is intentional: religious authority is a source of legitimacy, not an automatic answer to the ownership question.',
        citations: citations(['mawardiOrdinances', 'aquinasMoralPolitical', 'khomeiniIslamicRepublic'], ['sepReligionPolitics', 'openTextbook', 'oxfordIranTheocraticCriminalLaw']),
      },
      social: {
        score: -78,
        label: 'Strongly norm-enforcing and traditionalist',
        explanation: 'Theocratic systems commonly make public morality, family law, education, gender roles, sexuality, dress, ritual, or religious membership matters of political concern. The content and severity vary across traditions and periods, but a high negative social score reflects the authority given to an inherited or revealed moral order. It does not mean every religious believer supports coercive social law.',
        citations: citations(['aquinasMoralPolitical', 'mawardiOrdinances', 'khomeiniIslamicRepublic', 'lockeLetterToleration'], ['sepReligionPolitics', 'oxfordIranTheocraticCriminalLaw', 'ohchrMinorityRights']),
      },
      authority: {
        score: 92,
        label: 'Very strongly authority-centered',
        explanation: 'The defining feature is that political authority is constrained or legitimized by religious office, divine command, sacred text, or an authorized interpretation that is not treated as an ordinary policy preference. Clerical veto, religious courts, guardianship, priestly office, or sacred constitutional clauses may coexist with elected bodies, but the system is highly authority-centered when ordinary citizens cannot revise the religious foundation through normal democratic procedures.',
        citations: citations(['josephusAgainstApion', 'aquinasMoralPolitical', 'khomeiniIslamicRepublic', 'spinozaPolitical'], ['torontoConstitutionalTheocracy', 'iconStateReligionTheocracy', 'oxfordIranTheocraticCriminalLaw', 'vdem']),
      },
      identity: {
        score: -45,
        label: 'Confessional community with national variation',
        explanation: 'The political community may be imagined as a community of believers, a people under divine law, a religious nation, or a state that protects one faith. This gives identity a moderate nationalist and confessional tendency on the project’s sign convention, but theocracies can be transnational, imperial, universalist, or explicitly opposed to nationalism. Religious membership and national citizenship must be scored separately.',
        citations: citations(['josephusAgainstApion', 'mawardiOrdinances', 'khomeiniIslamicRepublic'], ['sepReligionPolitics', 'sepNationalism', 'oxfordStateReligionFreedom', 'cambridgeMaimonidesTheocracy']),
      },
      foreign: {
        score: 5,
        label: 'Foreign policy varies by doctrine and regime',
        explanation: 'A theocracy may pursue diplomacy, defensive war, missionary expansion, religious solidarity, territorial revision, isolation, or international law. Sacred obligations can universalize political responsibility beyond the nation, while religious boundaries can also intensify conflict with outsiders. The near-midpoint score avoids treating theology as a reliable predictor of intervention or restraint.',
        citations: citations(['mawardiOrdinances', 'khomeiniIslamicRepublic', 'hobbesLeviathan'], ['foreignPolicy', 'sepReligionPolitics', 'oxfordIranTheocraticCriminalLaw', 'openTextbook']),
      },
      religion: {
        score: -95,
        label: 'Very strongly religiously grounded public law',
        explanation: 'Religious authority, sacred law, revelation, clerical interpretation, or a divinely sanctioned office has a constitutive role in the state. This is the defining axis for the profile. A state may have an official religion without being a theocracy, and a religious movement may seek theocracy without controlling government; the classification turns on the institutional force of religious authority.',
        citations: citations(['josephusAgainstApion', 'aquinasMoralPolitical', 'mawardiOrdinances', 'khomeiniIslamicRepublic', 'spinozaPolitical'], ['sepReligionPolitics', 'iconStateReligionTheocracy', 'torontoConstitutionalTheocracy', 'oxfordStateReligionFreedom']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'A theocracy is a political order in which religious authority is not merely a private source of inspiration or a cultural tradition but part of the constitution of government. Sacred law, divine command, clerical office, a religious sovereign, or an authorized religious interpretation can determine who may rule, what laws are valid, how courts decide, and which forms of dissent are legitimate.',
            citations: citations(['josephusAgainstApion', 'aquinasMoralPolitical', 'mawardiOrdinances'], ['sepReligionPolitics', 'iconStateReligionTheocracy', 'cambridgeMaimonidesTheocracy']),
          },
          {
            type: 'paragraph',
            text: 'The category must be narrower than “religious society.” A country may have a state religion, religious ceremonies, faith-based parties, religious citizens, or laws influenced by religious ethics without giving religious authorities final constitutional or governmental power. Conversely, a theocracy may contain elections, professional bureaucracies, courts, legislatures, or a written constitution. The decisive questions are institutional: who interprets sacred authority, how that interpretation binds public power, and whether citizens can challenge it through equal and ordinary political procedures.',
            citations: citations(['spinozaPolitical', 'lockeLetterToleration', 'khomeiniIslamicRepublic'], ['sepReligionPolitics', 'oxfordStateReligionFreedom', 'torontoConstitutionalTheocracy', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'Theocracy is not a judgment on the truth or moral value of a religion. It is a descriptive classification of the relationship between religious authority and coercive public institutions. Different traditions contain arguments for, against, and around theocracy, and believers may support secular government, pluralist democracy, religious law, clerical guardianship, religious monarchy, or community autonomy. The entry therefore keeps the tradition, the institutional form, and the treatment of dissent analytically distinct.',
            citations: citations(['aquinasMoralPolitical', 'spinozaPolitical', 'lockeLetterToleration', 'mawardiOrdinances'], ['sepReligionPolitics', 'oxfordStateReligionFreedom', 'openTextbook']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'The first component is a theory of ultimate authority. The state may be said to derive legitimacy from God, revelation, sacred law, a religious covenant, a prophetic foundation, or the duty to realize a divinely ordered common good. The theory can be mediated by priests, jurists, councils, monarchs, elders, courts, or a party claiming religious guardianship. No single clerical structure is required, but ordinary political authority is not fully self-authorizing.',
            citations: citations(['josephusAgainstApion', 'aquinasMoralPolitical', 'mawardiOrdinances', 'khomeiniIslamicRepublic'], ['sepReligionPolitics', 'cambridgeMaimonidesTheocracy', 'oxfordIranTheocraticCriminalLaw']),
          },
          {
            type: 'paragraph',
            text: 'The second component is legal priority. Sacred texts, jurisprudence, canon law, halakha, sharia, church discipline, or a recognized moral law may serve as a superior standard against which legislation and executive action are judged. The practical question is who selects the interpretation and whether courts, clerics, monarchs, elected assemblies, or citizens can revise it. The existence of religiously inspired law does not by itself establish theocracy; the religious source must have constitutive institutional force.',
            citations: citations(['mawardiOrdinances', 'aquinasMoralPolitical', 'spinozaPolitical'], ['iconStateReligionTheocracy', 'oxfordStateReligionFreedom', 'torontoConstitutionalTheocracy', 'oxfordIranTheocraticCriminalLaw']),
          },
          {
            type: 'paragraph',
            text: 'The third component is the organization of office and jurisdiction. Clergy may hold formal governmental offices, control religious courts, screen candidates, veto legislation, appoint judges, supervise education, or claim authority over the head of state. In other systems, the monarch or elected government remains formally in office but must act within religiously defined constitutional limits. A mixed constitution can therefore be theocratic without being a simple priestly dictatorship.',
            citations: citations(['khomeiniIslamicRepublic', 'mawardiOrdinances', 'aquinasMoralPolitical'], ['torontoConstitutionalTheocracy', 'oxfordIranTheocraticCriminalLaw', 'iconStateReligionTheocracy', 'constituteIran1989']),
          },
          {
            type: 'paragraph',
            text: 'The fourth component is the boundary of membership. Some theocracies distinguish believers, protected religious minorities, converts, apostates, dissidents, women, enslaved people, or outsiders through different legal statuses; others claim a universal religious community and offer more complex forms of pluralism. Historical categories should not be projected onto all adherents or all periods, but unequal civil and political status is a central indicator when assessing a theocratic system.',
            citations: citations(['josephusAgainstApion', 'mawardiOrdinances', 'lockeLetterToleration'], ['sepReligionPolitics', 'ohchrMinorityRights', 'oxfordStateReligionFreedom', 'cambridgeMaimonidesTheocracy']),
          },
          {
            type: 'paragraph',
            text: 'Theocracy does not fix economic policy. Religious institutions may defend property, charity, communal ownership, guild regulation, taxation, welfare, markets, or state development. Nor does it fix foreign policy: the same religious language may justify peace, defensive war, missionary expansion, imperial authority, or solidarity with a transnational community. These dimensions must be evaluated separately from religious legal authority.',
            citations: citations(['mawardiOrdinances', 'aquinasMoralPolitical', 'khomeiniIslamicRepublic'], ['sepReligionPolitics', 'openTextbook', 'foreignPolicy', 'oxfordIranTheocraticCriminalLaw']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Ancient vocabulary and divine law',
            text: 'The term theocracy is commonly associated with Flavius Josephus’s description of a political order in which authority is attributed to God rather than to one of the classical forms of human government. His text is a situated defense of Jewish law written for a Greek and Roman audience, not a neutral comparative definition or evidence that every ancient religious polity had the same institutions.',
            citations: citations(['josephusAgainstApion'], ['perseusJosephusTheocracy', 'cambridgeMaimonidesTheocracy', 'sepReligionPolitics']),
          },
          {
            period: 'Medieval religious authority and kingship',
            text: 'Medieval political worlds combined religious law, rulers, jurists, clergy, customary law, courts, and communal institutions in different ways. Latin Christian theories of kingship, Islamic jurisprudence, Jewish political reflection, and other traditions debated whether rulers served a divinely ordered common good, were accountable to law, or required religious authorization. These histories cannot be reduced to a single priestly state.',
            citations: citations(['aquinasMoralPolitical', 'mawardiOrdinances', 'josephusAgainstApion'], ['sepMedieval', 'sepReligionPolitics', 'cambridgeMaimonidesTheocracy', 'waqfeyaMawardiOrdinances']),
          },
          {
            period: 'Sixteenth–seventeenth centuries: confessional government and discipline',
            text: 'Reformation and post-Reformation conflicts generated experiments in church discipline, confessional state-building, religious toleration, and the separation or subordination of ecclesiastical and civil authority. Geneva and Puritan colonial governments are important historical cases, but they differed in scale, franchise, doctrine, and legal structure and should not be treated as models for every theocracy.',
            citations: citations(['lockeLetterToleration', 'spinozaPolitical'], ['sepReligionPolitics', 'openTextbook', 'oxfordStateReligionFreedom']),
          },
          {
            period: 'Seventeenth–eighteenth centuries: toleration and secular authority',
            text: 'Arguments for religious toleration, freedom of conscience, civil sovereignty, and public reason challenged the idea that one religious authority should coercively govern all members. Spinoza and Locke are important boundary markers: their critiques distinguish religious truth or worship from the state’s jurisdiction, even though their own theories and historical exclusions require critical reading.',
            citations: citations(['spinozaPolitical', 'lockeLetterToleration', 'hobbesLeviathan'], ['sepReligionPolitics', 'oxfordStateReligionFreedom', 'openTextbook']),
          },
          {
            period: 'Nineteenth–twentieth centuries: empire, nationalism, and religious reform',
            text: 'Colonial rule, modern nation-building, missionary institutions, legal codification, reform movements, and anti-imperial politics reshaped the relationship between religion and state. Religious law could be centralized, selectively codified, or used as a source of national identity. The resulting systems were often hybrids rather than simple survivals of premodern theocracy.',
            citations: citations(['nabucoAbolitionism', 'mawardiOrdinances', 'spinozaPolitical'], ['sepColonialism', 'sepReligionPolitics', 'openTextbook', 'oxfordStateReligionFreedom']),
          },
          {
            period: '1979 and after: revolutionary and constitutional theocracy',
            text: 'The Iranian Revolution made a modern constitutional-religious hybrid a central subject of comparative constitutional scholarship. Iran’s constitutional structure combines elected offices and popular institutions with Islamic criteria, religious offices, and bodies that review legislation or political eligibility. The model is historically and doctrinally specific; it should not be generalized to Islam, Islamic republics, or every state with a religious constitution.',
            citations: citations(['khomeiniIslamicRepublic'], ['constituteIran1989', 'oxfordIranTheocraticCriminalLaw', 'torontoConstitutionalTheocracy', 'nsarchiveKhomeini1979']),
          },
          {
            period: 'Late twentieth century–present: hybrid constitutions and religious freedom debates',
            text: 'Contemporary scholarship increasingly examines hybrid arrangements in which constitutions, elections, courts, official religions, religious tribunals, and clerical or judicial guardianship coexist. The central debate is not simply secular versus religious, but how religious authority is institutionalized, whether it is contestable, and whether rights of conscience and equal citizenship survive when sacred norms receive constitutional priority.',
            citations: citations(['spinozaPolitical', 'lockeLetterToleration', 'khomeiniIslamicRepublic'], ['torontoConstitutionalTheocracy', 'iconStateReligionTheocracy', 'oxfordStateReligionFreedom', 'ohchrMinorityRights']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and neighboring concepts',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Priestly or clerical theocracy',
                distinction: 'Religious officials directly hold or control central political offices and claim authority to govern through sacred law or doctrine.',
                relation: 'The clearest form of clerical rule, but not the only theocratic form. Authority may be exercised through councils, courts, guardians, or religiously authorized monarchs rather than a single priesthood.',
                citations: citations(['josephusAgainstApion', 'aquinasMoralPolitical'], ['sepReligionPolitics', 'iconStateReligionTheocracy', 'torontoConstitutionalTheocracy']),
              },
              {
                label: 'Scriptural or sacred-law constitutionalism',
                distinction: 'A constitution gives sacred texts, revealed law, or an authoritative jurisprudence a superior or binding role in legislation and adjudication.',
                relation: 'It may contain elections and rights catalogues while remaining theocratic when ordinary institutions cannot override the religious constitutional foundation.',
                citations: citations(['mawardiOrdinances', 'khomeiniIslamicRepublic', 'spinozaPolitical'], ['iconStateReligionTheocracy', 'oxfordStateReligionFreedom', 'oxfordIranTheocraticCriminalLaw', 'constituteIran1989']),
              },
              {
                label: 'Constitutional theocracy',
                distinction: 'A hybrid order combines modern constitutional forms, courts, elections, and rights language with a formally endorsed religion, sacred legal supremacy, or religious bodies with official jurisdiction or veto power.',
                relation: 'This is not simply an absolute priesthood or a secular state with a ceremonial religion. Its central question is how constitutional review and religious authority interact.',
                citations: citations(['khomeiniIslamicRepublic', 'spinozaPolitical'], ['torontoConstitutionalTheocracy', 'oxfordIranTheocraticCriminalLaw', 'iconStateReligionTheocracy', 'constituteIran1989']),
              },
              {
                label: 'Religious monarchy',
                distinction: 'A monarch’s dynastic or political legitimacy is tied to divine sanction, sacred lineage, religious law, or protection of an established faith.',
                relation: 'It overlaps with theocracy when religious authority is constitutive of government, but a religiously symbolic monarchy may remain constitutionally secular, and a theocracy may be republican or clerical.',
                citations: citations(['aquinasMoralPolitical', 'hobbesLeviathan'], ['sepReligionPolitics', 'bpbMonarchy', 'oxfordStateReligionFreedom']),
              },
              {
                label: 'Confessional state or state religion',
                distinction: 'The state recognizes, funds, or ceremonially privileges a religion without necessarily allowing religious authorities to control legislation, courts, executive power, or political membership.',
                relation: 'This is a neighboring category, not automatically a theocracy. The classification depends on the actual legal and institutional force of the religious establishment.',
                citations: citations(['lockeLetterToleration', 'spinozaPolitical'], ['oxfordStateReligionFreedom', 'iconStateReligionTheocracy', 'sepReligionPolitics']),
              },
              {
                label: 'Covenant or communal religious polity',
                distinction: 'A community organizes civil membership and discipline around a religious covenant, church order, or shared sacred commitment, sometimes in a city, colony, or intentional settlement.',
                relation: 'It can be small-scale and participatory while still excluding dissenters or subordinating civil law to religious discipline. Scale and participation do not by themselves remove the theocratic feature.',
                citations: citations(['lockeLetterToleration', 'spinozaPolitical'], ['sepReligionPolitics', 'openTextbook', 'oxfordStateReligionFreedom']),
              },
              {
                label: 'Religious party democracy',
                distinction: 'A political party draws on religious doctrine and seeks public office through elections but accepts that legislation and authority are contestable within a plural constitutional order.',
                relation: 'A religious party is not automatically theocratic. It becomes theocratic when religious authority receives non-negotiable constitutional supremacy or equal citizenship is denied to dissenters.',
                citations: citations(['lockeLetterToleration', 'spinozaPolitical'], ['oxfordStateReligionFreedom', 'oxfordChristianDemocracy', 'vdem']),
              },
              {
                label: 'Civil religion or religious nationalism',
                distinction: 'The state sacralizes national symbols, founding myths, rituals, or inherited faith without necessarily submitting government to clerical or sacred-law authority.',
                relation: 'It may overlap with theocracy and can become coercive, but it is analytically distinct from a system where religious office or law directly structures the constitution and government.',
                citations: citations(['josephusAgainstApion', 'khomeiniIslamicRepublic'], ['sepReligionPolitics', 'sepNationalism', 'oxfordStateReligionFreedom']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'People, movements, and historical examples',
        blocks: [
          {
            type: 'people',
            entries: [
              {
                name: 'Flavius Josephus',
                role: 'Ancient Jewish historian whose Against Apion uses the term theocracy while defending Jewish law and political order to a Greek and Roman audience.',
                caveat: 'Josephus’s rhetorical and historical context matters. His use of the term is a primary-language anchor, not a modern comparative regime classification or a complete account of ancient Jewish institutions.',
                citations: citations(['josephusAgainstApion'], ['perseusJosephusTheocracy', 'cambridgeMaimonidesTheocracy']),
              },
              {
                name: 'Thomas Aquinas',
                role: 'Medieval Christian political thinker who analyzed divine and natural law, kingship, tyranny, the common good, and the relation between temporal and spiritual authority.',
                caveat: 'Aquinas did not provide a simple modern theory of clerical government. His work is useful for the genealogy of religiously grounded legitimacy and limits on rulers, not as evidence that medieval Christian politics was uniformly theocratic.',
                citations: citations(['aquinasMoralPolitical'], ['sepMedieval', 'sepReligionPolitics']),
              },
              {
                name: 'Al-Mawardi',
                role: 'Classical Islamic jurist whose Ordinance of Government discusses the imam, public offices, judges, administration, and the organization of political authority under Islamic law.',
                caveat: 'Al-Mawardi’s jurisprudential context, institutional assumptions, and relationship to historical caliphal power differ from modern clerical-rule categories. A classical public-law text is not a direct description of every current Muslim state.',
                citations: citations(['mawardiOrdinances'], ['waqfeyaMawardiOrdinances', 'sepReligionPolitics']),
              },
              {
                name: 'Baruch Spinoza',
                role: 'Early-modern philosopher whose political writings analyzed religious authority, freedom of thought, civil sovereignty, and the risks of clerical control over the state.',
                caveat: 'Spinoza is included primarily as a critic and boundary marker. His political theory is historically situated and does not settle contemporary constitutional questions.',
                citations: citations(['spinozaPolitical'], ['sepReligionPolitics', 'iconStateReligionTheocracy']),
              },
              {
                name: 'John Locke',
                role: 'Liberal political thinker whose writing on toleration distinguished civil jurisdiction from religious worship and argued against coercive state control of conscience.',
                caveat: 'Locke’s arguments contain historical exclusions and limits, and he is more useful here as a critic of religious coercion than as an uncomplicated secular democrat.',
                citations: citations(['lockeLetterToleration'], ['sepReligionPolitics', 'oxfordStateReligionFreedom']),
              },
              {
                name: 'Ruhollah Khomeini',
                role: 'Iranian revolutionary leader whose public doctrine helped articulate a modern Islamic Republic in which religious jurisprudence and clerical authority were built into constitutional government.',
                caveat: 'Khomeini’s project is a specific Shi’a revolutionary and constitutional tradition. It cannot be generalized to Islam, Shi’ism, Islamic republics, or all religious politics.',
                citations: citations(['khomeiniIslamicRepublic'], ['nsarchiveKhomeini1979', 'oxfordIranTheocraticCriminalLaw', 'constituteIran1989']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'Josephus’s Jewish theocracy as a textual category',
                period: 'Ancient Jewish political thought; Against Apion, late first century CE',
                match: 'A primary text explicitly presents Jewish government as grounded in divine authority and law rather than one of the classical human regime forms.',
                caveat: 'The passage is a rhetorical argument in a particular historical setting. It should not be used to erase the diversity of ancient Jewish institutions or to label every religious legal tradition the same way.',
                citations: citations(['josephusAgainstApion'], ['perseusJosephusTheocracy', 'cambridgeMaimonidesTheocracy']),
              },
              {
                name: 'Geneva under Calvinist reform',
                period: 'Geneva, especially the sixteenth century',
                match: 'Church discipline and civic government were closely connected in a historically important experiment in confessional political order.',
                caveat: 'Geneva was neither a simple clerical dictatorship nor a model for all Protestant politics. Its institutions, citizenship rules, discipline, and conflicts must be studied in their local and Reformation context.',
                citations: citations(['lockeLetterToleration', 'spinozaPolitical'], ['sepReligionPolitics', 'openTextbook', 'oxfordStateReligionFreedom']),
              },
              {
                name: 'Puritan New England and covenant government',
                period: 'English North American colonies, seventeenth century',
                match: 'Some colonial communities linked civil membership, public morality, church affiliation, and covenant theology in ways that placed religious conformity close to political legitimacy.',
                caveat: 'These colonies contained changing franchises, dissent, plural populations, Indigenous dispossession, and institutional variation. They should not be treated as a uniform theocracy or as a general description of Christianity.',
                citations: citations(['lockeLetterToleration', 'spinozaPolitical'], ['sepReligionPolitics', 'openTextbook', 'sepColonialism']),
              },
              {
                name: 'Papal States and Vatican City',
                period: 'Papal States, eighth century–1870; Vatican City, 1929–present',
                match: 'The papacy has exercised territorial sovereignty in distinct historical forms; Vatican City’s official description identifies an absolute monarchy in which the sovereign pontiff holds the highest governmental authority.',
                caveat: 'Vatican City is a very small and institutionally exceptional religious polity whose purpose and scale differ from a mass national state. The Papal States and Vatican City should not be treated as identical across time or as a universal Christian model.',
                citations: citations(['aquinasMoralPolitical'], ['vaticanStateBodies', 'sepReligionPolitics', 'openTextbook']),
              },
              {
                name: 'Iran’s constitutional-religious system',
                period: 'Iran, after the 1979 revolution; constitutional text revised 1989',
                match: 'The constitutional text combines an Islamic foundation and religious criteria with elected offices, popular institutions, a Supreme Leader, and a Guardian Council with religious and constitutional review functions. Comparative scholars use it as a major case of constitutional theocracy.',
                caveat: 'The constitutional text is evidence of institutional design, not a complete account of everyday enforcement, political practice, or public opinion. Iran’s Shi’a jurisprudential framework must not be generalized to all Islam or all religious constitutional systems.',
                citations: citations(['khomeiniIslamicRepublic'], ['constituteIran1989', 'oxfordIranTheocraticCriminalLaw', 'torontoConstitutionalTheocracy', 'nsarchiveKhomeini1979']),
              },
              {
                name: 'Religious constitutions and state-religion hybrids',
                period: 'Contemporary; country- and institution-specific',
                match: 'Some constitutional systems combine official religion, religious courts, sacred-law clauses, elected bodies, civil courts, rights catalogues, and varying degrees of clerical or judicial oversight.',
                caveat: 'The category is a research field rather than a list of exact country matches. A state religion, religious court, or constitutional reference to God does not by itself prove theocracy; the decisive evidence is the hierarchy of law, institutional authority, and equal citizenship.',
                citations: citations(['spinozaPolitical', 'lockeLetterToleration', 'khomeiniIslamicRepublic'], ['torontoConstitutionalTheocracy', 'iconStateReligionTheocracy', 'oxfordStateReligionFreedom', 'ohchrMinorityRights']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'religious-traditionalist', relation: 'may support religiously grounded public morality and inherited authority, but religious traditionalism does not necessarily seek religious control of the state' },
              { id: 'christian-democratic', relation: 'can draw on Christian social ethics while defending constitutional democracy, pluralist rights, and non-clerical party competition; it is not automatically theocratic' },
              { id: 'monarchist', relation: 'can overlap in sacred or religious monarchy, but a monarchy may be secular and a theocracy may be republican or clerical' },
              { id: 'civic-nationalist', relation: 'may share public institutions and national membership, but civic nationalism grounds legitimacy in citizenship and constitutional principles rather than sacred authority' },
              { id: 'ethnic-nationalist', relation: 'can overlap when religion defines inherited peoplehood, but ethnic nationalism can be secular and theocracy can claim a universal religious community' },
              { id: 'conservative', relation: 'may share tradition, authority, and continuity, but conservatism does not require religious law, clerical office, or sacred constitutional supremacy' },
              { id: 'authoritarian-collectivist', relation: 'can share concentrated authority and restricted dissent in some cases, but theocratic legitimacy is religious rather than party-state or materialist by definition' },
              { id: 'liberal-constitutionalist', relation: 'can share constitutions, courts, and rights language in hybrid systems, but liberal constitutionalism requires contestable public authority and freedom of conscience that theocracy may limit' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'The first criticism is interpretive authority. Sacred texts and traditions rarely speak through one uncontested institutional interpreter, yet theocratic systems may give a clerical council, court, monarch, party, or guardian power to define orthodoxy. This can turn theological disagreement into political disqualification and make rulers difficult to remove because opposition is framed as impiety, apostasy, or rebellion against divine order.',
            citations: citations(['spinozaPolitical', 'lockeLetterToleration', 'khomeiniIslamicRepublic'], ['sepReligionPolitics', 'torontoConstitutionalTheocracy', 'oxfordIranTheocraticCriminalLaw', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'The second criticism is equal citizenship. Religious law or office can create different statuses for believers, minority faiths, converts, dissenters, women, sexual minorities, or non-believers. A theocratic constitution may protect some minorities while still limiting political office, family law, testimony, expression, or conversion. The proper test is not whether a system uses the language of tolerance but whether equal civil and political rights, remedies, and participation are available in law and practice.',
            citations: citations(['mawardiOrdinances', 'lockeLetterToleration', 'spinozaPolitical'], ['ohchrMinorityRights', 'sepReligionPolitics', 'oxfordStateReligionFreedom', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'The third criticism is the coercion of conscience. Religious belief, worship, conversion, non-belief, and interpretation may be deeply important, but state enforcement can produce hypocrisy, surveillance, punishment, censorship, and violence. Freedom of conscience, private worship, public religious association, scholarly inquiry, and the right to dissent are safeguards against turning a spiritual commitment into an all-encompassing police power.',
            citations: citations(['lockeLetterToleration', 'spinozaPolitical', 'khomeiniIslamicRepublic'], ['sepReligionPolitics', 'ohchrMinorityRights', 'iconStateReligionTheocracy', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'The fourth criticism is constitutional ambiguity. Hybrid systems can hold elections and rights catalogues while allowing religious bodies to veto candidates, laws, courts, or constitutional interpretation. The result may be a dual legitimacy in which elected institutions are formally present but cannot alter the religious foundation. Clear jurisdiction, transparent review, independent courts, equal suffrage, public reasons, and peaceful alternation are needed if constitutionalism is to constrain religious as well as secular power.',
            citations: citations(['khomeiniIslamicRepublic', 'spinozaPolitical', 'lockeLetterToleration'], ['torontoConstitutionalTheocracy', 'oxfordIranTheocraticCriminalLaw', 'constituteIran1989', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'The fifth criticism concerns gender and family regulation. Theocratic systems may treat family, reproduction, sexuality, dress, education, and gender hierarchy as public religious matters, which can limit autonomy and produce unequal legal status. The assessment must remain tradition- and law-specific: religious communities have also generated arguments for social equality, welfare, anti-colonial resistance, and women’s education, and those arguments should not be erased by an overly simple secular-versus-religious binary.',
            citations: citations(['aquinasMoralPolitical', 'mawardiOrdinances', 'lockeLetterToleration'], ['sepReligionPolitics', 'oxfordStateReligionFreedom', 'ohchrMinorityRights', 'openTextbook']),
          },
          {
            type: 'paragraph',
            text: 'Finally, theocracy can be romanticized or demonized from outside. Calling every religious society theocratic erases internal debates and reproduces cultural stereotypes; treating sacred legitimacy as beyond political accountability excuses coercion. The safest classification records the religious doctrine, the authorized interpreters, the legal hierarchy, the actual institutions, the rights of dissenters and minorities, and the evidence for everyday enforcement. No score should be inferred from a religion’s name alone.',
            citations: citations(['josephusAgainstApion', 'mawardiOrdinances', 'spinozaPolitical', 'khomeiniIslamicRepublic'], ['sepReligionPolitics', 'torontoConstitutionalTheocracy', 'oxfordStateReligionFreedom', 'ohchrMinorityRights', 'cambridgeMaimonidesTheocracy']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['josephusAgainstApion', 'mawardiOrdinances', 'khomeiniIslamicRepublic', 'aquinasMoralPolitical', 'spinozaPolitical', 'lockeLetterToleration', 'hobbesLeviathan'],
      researchSourceIds: ['sepReligionPolitics', 'torontoConstitutionalTheocracy', 'oxfordStateReligionFreedom', 'oxfordIranTheocraticCriminalLaw', 'iconStateReligionTheocracy', 'cambridgeMaimonidesTheocracy', 'perseusJosephusTheocracy', 'waqfeyaMawardiOrdinances', 'nsarchiveKhomeini1979', 'constituteIran1989', 'vaticanStateBodies', 'sepMedieval', 'sepColonialism', 'ohchrMinorityRights', 'vdem', 'openTextbook', 'foreignPolicy', 'oxfordChristianDemocracy'],
      editorialNote: 'The entry treats theocracy as an institutional relationship in which religious authority, sacred law, or authorized religious interpretation is constitutive of government. It distinguishes theocracy from state religion, religious parties, religious monarchy, civil religion, and personal belief, and keeps Jewish, Christian, Islamic, and other traditions historically specific. Scores are didactic composites, not judgments about any religion or every society associated with it.',
    },
    researchGaps: [
      'Add French-language scholarship on Josephus, Gallicanism, Catholic political thought, Calvinist Geneva, the French Wars of Religion, revolutionary theocracy, laïcité, colonial religion, and modern constitutional debates about religious law.',
      'Expand German-language research on medieval church–state relations, Luther and territorial churches, the Holy Roman Empire, political theology, constitutional patriotism, religious law, and the history of secularization without treating German history as a single path.',
      'Add Portuguese- and Spanish-language scholarship on Iberian Catholic monarchy, the Papal and colonial worlds, Brazilian Empire and patronage, liberation theology, Latin American constitutions, Indigenous religious authority, and religious movements in decolonization.',
      'Add Arabic, Persian, Hebrew, Turkish, Urdu, South Asian, African, East Asian, and Southeast Asian scholarship on caliphate and imamate theory, jurists and rulers, Buddhist and Hindu political authority, Jewish law, indigenous sacred governance, and modern religious constitutionalism.',
      'Add primary constitutional and legal evidence for current or recent cases, distinguishing official religion, religious courts, sacred-law clauses, clerical veto, judicial guardianship, executive authority, and actual enforcement against formal constitutional language.',
      'Add specialist research on women, family law, conversion, apostasy, non-belief, sectarian minorities, Indigenous peoples, slavery, colonial administration, religious education, censorship, political parties, and the difference between communal autonomy and state coercion.',
      'Compare theocracy with civil religion, religious nationalism, confessional democracy, Christian democracy, Islamic democracy, religious socialism, religious monarchy, and secular authoritarianism through explicit institutional criteria rather than broad cultural labels.',
    ],
  },
  'christian-democratic': {
    id: 'christian-democratic',
    title: 'Christian democracy',
    canonicalLabel: 'Christian democracy',
    aliases: ['Christian democratic politics', 'Christian social democracy', 'social market Christian democracy', 'confessional democracy'],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'Christian democracy is a family of political ideas and party traditions combining Christian social ethics with constitutional democracy, social protection, intermediary institutions, and a mixed or social-market economy. It is not synonymous with theocracy, clerical rule, conservatism, Christian nationalism, or every party that uses Christian language.',
    timeScope: 'Roots in older natural-law and Christian social thought; modern formation during industrialization and mass politics; major institutional development from the late nineteenth century through postwar European reconstruction; continuing and contested variants in Europe, Latin America, and other regions.',
    geographicScope: 'Transnational and internally diverse, with important Catholic, Protestant, European, Latin American, Portuguese, German, Swiss, Italian, French, and Dutch cases. Party names, church–state relations, and social policies vary by country and period.',
    summary: 'A political family that treats the human person, family and community institutions, social responsibility, and the common good as politically relevant while accepting constitutional government, elections, pluralist rights, and a regulated mixed economy. Its characteristic ideas include social-market coordination, solidarity, subsidiarity, intermediary associations, and cooperation across borders; variants disagree over secular citizenship, welfare, migration, family policy, European integration, and Christian public ethics.',
    summaryCitations: citations(
      ['maritainIntegralHumanism', 'aquinasMoralPolitical', 'burkeReflections', 'keynesGeneralTheory'],
      ['oxfordChristianDemocracy', 'cambridgeChristianDemocracy', 'oxfordChristianDemocracyEurope', 'vaticanSocialDoctrineCompendium', 'comparativeChristianDemocracy'],
    ),
    dimensionInterpretations: {
      economic: {
        score: -5,
        label: 'Mixed economy / social-market balance',
        explanation: 'Private property, enterprise, and markets are accepted, but bounded by social duties, labor protections, public services, social insurance, and the common good. Christian-democratic economics is neither state collectivism nor laissez-faire by definition; the balance varies by party and country.',
        citations: citations(['aquinasMoralPolitical', 'keynesGeneralTheory'], ['vaticanRerumNovarum', 'vaticanQuadragesimoAnno', 'comparativeChristianDemocracy', 'oxfordChristianDemocratDecade']),
      },
      social: {
        score: -30,
        label: 'Moderately traditional, reformist, and pluralist',
        explanation: 'Family, faith, inherited moral language, and community institutions often receive substantial weight, while democratic participation, social protection, and human dignity can support reform. The category contains both socially conservative and more progressive currents; its name does not establish one position on gender, sexuality, education, migration, or bioethics.',
        citations: citations(['maritainIntegralHumanism', 'aquinasMoralPolitical', 'burkeReflections'], ['oxfordSocialCatholicismChristianDemocracy', 'sepReligionPolitics', 'vaticanSocialDoctrineCompendium']),
      },
      authority: {
        score: 20,
        label: 'Constitutional and intermediary-institutional',
        explanation: 'Legitimate authority is ordinarily exercised through elections, constitutions, courts, parties, local government, churches, unions, families, and other institutions between the individual and the state. Subsidiarity can limit centralization, but it does not mean that every lower-level institution is democratic or that the state has no duty to guarantee equal rights and social protection. Ahlen’s 1947 programme subjected economic self-administration to parliamentary control; this limited institutional commitment does not establish equal citizenship in every domain.',
        citations: citations(['maritainIntegralHumanism', 'aquinasMoralPolitical', 'lockeSecondTreatise'], ['oxfordChristianDemocracy', 'vaticanQuadragesimoAnno', 'vaticanSocialDoctrineCompendium', 'comparativeChristianDemocracy', 'cduAhlen1947']),
      },
      identity: {
        score: -20,
        label: 'Christian-cultural, civic, and European-pluralist',
        explanation: 'Christian historical inheritance may shape public symbols and moral vocabulary, but Christian-democratic movements have also supported inclusive citizenship, minority protection, and European cooperation. Civic, confessional, national, colonial, and transnational variants must be distinguished with evidence.',
        citations: citations(['maritainIntegralHumanism', 'burkeReflections', 'renanNation'], ['oxfordChristianDemocracyEurope', 'euRobertSchuman', 'bpbChristianDemocraticCVP', 'oxfordPortugalPoliticalCatholicism']),
      },
      foreign: {
        score: 15,
        label: 'Cooperative restraint with collective security',
        explanation: 'Postwar Christian democracy often favored reconciliation, international law, European integration, alliances, and shared institutions, while retaining a role for defense and collective security. It is not automatically pacifist and has historically coexisted with anti-communism, colonial commitments, and military alliances.',
        citations: citations(['kantPerpetualPeace', 'morgenthauRealism', 'maritainIntegralHumanism'], ['euRobertSchuman', 'oxfordChristianDemocracyEurope', 'oxfordChristianDemocratDecade', 'foreignPolicy']),
      },
      religion: {
        score: -62,
        label: 'Religiously grounded social ethics within pluralist law',
        explanation: 'Christian social ethics can inform views of dignity, work, family, solidarity, property, welfare, and the common good. In its constitutional-pluralist form, however, Christian democracy does not require clerical government or one church to monopolize coercive law; religious reasons enter democratic contestation alongside secular reasons and equal citizenship.',
        citations: citations(['maritainIntegralHumanism', 'aquinasMoralPolitical', 'lockeLetterToleration'], ['sepReligionPolitics', 'oxfordChristianDemocracy', 'cambridgeChristianDemocracy', 'vaticanRerumNovarum', 'vaticanSocialDoctrineCompendium']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Christian democracy emerged in response to industrialization, mass electoral politics, secularization, and socialist organization. Its central problem was how to defend human dignity, solidarity, family and community life, and religiously informed moral commitments without restoring clerical rule or rejecting democratic citizenship. Different movements answered that problem differently, so Christian democracy is best read as a family resemblance rather than a single doctrine.',
            citations: citations(['maritainIntegralHumanism', 'aquinasMoralPolitical'], ['cambridgeChristianDemocracy', 'oxfordSocialCatholicismChristianDemocracy', 'oxfordChristianDemocracy']),
          },
          {
            type: 'paragraph',
            text: 'The postwar European form is especially influential in comparative politics: Christian-democratic parties helped shape constitutional reconstruction, social-market institutions, welfare provision, anti-communist coalitions, and European integration. That history should not be universalized. Catholic, Protestant, Latin American, Portuguese, and country-specific movements differed in their relation to churches, authoritarian regimes, labor, colonialism, women’s citizenship, and secular law.',
            citations: citations(['maritainIntegralHumanism', 'burkeReflections'], ['oxfordChristianDemocratDecade', 'oxfordChristianDemocracyEurope', 'oxfordPortugalPoliticalCatholicism', 'comparativeChristianDemocracy']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'Christian-democratic political anthropology usually starts from the person as relational and socially embedded. Individuals have rights and dignity, but live through families, neighborhoods, churches, unions, cooperatives, professional bodies, municipalities, and other associations. This emphasis on intermediate institutions challenges both radical individualism and a state that claims to organize every social function from the center.',
            citations: citations(['maritainIntegralHumanism', 'aquinasMoralPolitical'], ['oxfordSocialCatholicismChristianDemocracy', 'vaticanSocialDoctrineCompendium']),
          },
          {
            type: 'paragraph',
            text: 'Its economic language often combines private ownership with social obligation. Labor is treated as more than a commodity, property as carrying responsibilities, and economic power as something that may require regulation, bargaining institutions, welfare, or public intervention. “Social market” is a useful postwar shorthand, but Christian democracy also includes distributist, corporatist, social-justice, developmental, and market-liberal variants; policy evidence matters more than the label.',
            citations: citations(['aquinasMoralPolitical', 'keynesGeneralTheory'], ['vaticanRerumNovarum', 'vaticanQuadragesimoAnno', 'comparativeChristianDemocracy', 'oxfordChristianDemocratDecade']),
          },
          {
            type: 'paragraph',
            text: 'The 1949 Düsseldorf short version makes the institutional mixture concrete: competition and market prices alongside independent monopoly oversight, collective wage bargaining, and monetary, tax, social, and public-investment policies. It also allows common ownership under stated conditions. These are programme commitments, not evidence that recovery or social justice resulted from them alone.',
            citations: citations([], ['cduDuesseldorf1949']),
          },
          {
            type: 'evidence-note',
            text: 'A crucial boundary is constitutional pluralism. A party may be inspired by Christianity while accepting alternation in office, religious freedom, non-confessional citizenship, judicial review, and the right of other parties to govern. When religious authorities receive non-negotiable supremacy over government, dissent, or equal citizenship, the classification moves toward theocracy or confessional authoritarianism instead.',
            citations: citations(['maritainIntegralHumanism', 'lockeLetterToleration'], ['cambridgeChristianDemocracy', 'oxfordChristianDemocracy', 'sepReligionPolitics', 'vdem']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Older antecedents: natural law, common good, and Christian political thought',
            text: 'Medieval and early-modern Christian thinkers developed arguments about natural law, the common good, authority, property, association, and the limits of rulers. These are intellectual antecedents, not evidence that a modern Christian-democratic party existed in the medieval period. Later movements selectively reworked them under constitutional government, mass politics, industrial capitalism, and religious pluralism.',
            citations: citations(['aquinasMoralPolitical'], ['sepMedieval', 'oxfordSocialCatholicismChristianDemocracy', 'vaticanSocialDoctrineCompendium']),
          },
          {
            period: 'Nineteenth century: industrialization and the social question',
            text: 'Industrial labor, urban poverty, socialist organization, liberal individualism, and anticlerical conflict forced Christian political thinkers to address wages, property, unions, family insecurity, and the state. Rerum Novarum in 1891 became a major Catholic social reference, defending worker association and social duties while rejecting both unrestricted exploitation and revolutionary collectivism. It was an influential source of social Catholicism, not a complete party constitution.',
            citations: citations(['aquinasMoralPolitical'], ['vaticanRerumNovarum', 'oxfordSocialCatholicismChristianDemocracy', 'cambridgeChristianDemocracy']),
          },
          {
            period: 'Late nineteenth and early twentieth centuries: confessional parties and political Catholicism',
            text: 'Catholic and Christian social movements formed parties, unions, associations, newspapers, cooperatives, and educational institutions. Some were defensive confessional parties concerned with church autonomy and social order; others opened to parliamentary democracy, labor organization, social reform, and broader membership. The same religious vocabulary could therefore support democratic participation in one setting and authoritarian accommodation in another.',
            citations: citations(['aquinasMoralPolitical', 'burkeReflections'], ['cambridgeChristianDemocracy', 'oxfordSocialCatholicismChristianDemocracy', 'bpbChristianDemocraticCVP', 'oxfordPortugalPoliticalCatholicism']),
          },
          {
            period: '1930s–1940s: personalism, anti-totalitarianism, and democratic reorientation',
            text: 'Personalist thinkers such as Jacques Maritain argued that Christian social thought should defend the dignity and rights of the person while resisting both fascist sacralization of the nation and communist party-state domination. The period helped develop a language of human rights, pluralist constitutionalism, social responsibility, and democratic participation, although movements and institutions remained diverse and sometimes compromised.',
            citations: citations(['maritainIntegralHumanism'], ['oxfordSocialCatholicismChristianDemocracy', 'cambridgeChristianDemocracy', 'oxfordChristianDemocracy']),
          },
          {
            period: '1945–1960s: postwar reconstruction and the Christian-democrat decade',
            text: 'In West Germany, Italy, France, the Benelux countries, Austria, and elsewhere, Christian-democratic parties participated in rebuilding constitutional states, expanding social security, organizing social-market economies, and forming broad electoral coalitions. Adenauer, de Gasperi, Schuman, and related leaders supported European cooperation in different ways. These parties also carried unresolved legacies of anti-communism, empire, church privilege, gender hierarchy, and the boundary between cultural Christianity and equal secular citizenship.',
            citations: citations(['maritainIntegralHumanism', 'burkeReflections'], ['oxfordChristianDemocratDecade', 'oxfordChristianDemocracyEurope', 'euRobertSchuman', 'adenauerHouse', 'comparativeChristianDemocracy']),
          },
          {
            period: '3 February 1947: the British-zone CDU’s Ahlen programme',
            text: 'Ahlen proposed socializing coal mining and large iron-producing industry, dispersing economic power, and strengthening worker participation. It also defended smaller enterprises and private initiative while rejecting replacement of private domination by state capitalism. The document’s diagnoses of the recent past are party arguments, not neutral historical classifications.',
            citations: citations([], ['cduAhlen1947']),
          },
          {
            period: '15 July 1949: Düsseldorf and the social-market programme',
            text: 'The Düsseldorf guidelines rejected administrative direction of production, labor, and sales while retaining economic-policy instruments. They expressly acknowledged Ahlen’s property and social principles but recast their economic framework around competition. Reading the short version does not establish how the complete platform or subsequent legislation resolved every tension.',
            citations: citations([], ['cduDuesseldorf1949']),
          },
          {
            period: 'European integration: reconciliation, shared institutions, and contested memory',
            text: 'Christian-democratic statesmen were important advocates of a European order built around reconciliation, shared institutions, and interdependence. Schuman’s proposal for shared coal and steel administration illustrates the preference for binding former rivals into common institutions. European integration was never exclusively Christian-democratic; secular, liberal, socialist, federalist, and economic actors also shaped it.',
            citations: citations(['maritainIntegralHumanism', 'kantPerpetualPeace'], ['euRobertSchuman', 'oxfordChristianDemocracyEurope', 'oxfordChristianDemocratDecade']),
          },
          {
            period: 'Late twentieth century–present: secularization, party transformation, and global variants',
            text: 'Secularization, changing class structures, women’s employment, migration, Europeanization, globalization, new family debates, and the decline of mass-confessional institutions reshaped Christian-democratic parties. Some moved toward centrist or market-liberal platforms; others retained welfare, family, community, or social-justice commitments. Latin American and other regional movements interacted with developmentalism, democracy, authoritarianism, liberation theology, and local religious institutions in ways that cannot be read as a simple export of postwar Europe.',
            citations: citations(['maritainIntegralHumanism', 'keynesGeneralTheory'], ['oxfordChristianDemocracyEurope', 'oxfordPortugalPoliticalCatholicism', 'sepReligionPolitics', 'comparativeChristianDemocracy']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Catholic social / social-market democracy',
                distinction: 'Combines private property and competition with social insurance, labor representation, public services, family policy, and institutional mediation.',
                relation: 'The most recognizable postwar European form, but social-market institutions are not uniquely Christian-democratic and differ across countries.',
                citations: citations(['aquinasMoralPolitical', 'keynesGeneralTheory'], ['vaticanRerumNovarum', 'vaticanQuadragesimoAnno', 'comparativeChristianDemocracy']),
              },
              {
                label: 'Ahlen’s socialization-oriented proposal',
                distinction: 'Its 1947 design combines selected common ownership with participation by public bodies, workers, and cooperatives.',
                relation: 'A dated internal position, not a demand to transfer all enterprise to a centralized state.',
                citations: citations([], ['cduAhlen1947']),
              },
              {
                label: 'Personalist Christian democracy',
                distinction: 'Places the dignity, rights, freedom, and social embeddedness of the person at the center, often with resistance to totalitarianism and state absolutism.',
                relation: 'Provides an intellectual bridge between Christian ethics and human-rights constitutionalism; it does not settle every economic or cultural question.',
                citations: citations(['maritainIntegralHumanism'], ['oxfordSocialCatholicismChristianDemocracy', 'cambridgeChristianDemocracy']),
              },
              {
                label: 'Subsidiarity and sphere-based pluralism',
                distinction: 'Distributes responsibility among individuals, families, associations, municipalities, churches, professional bodies, and the state, with higher levels acting when lower levels cannot secure the common good.',
                relation: 'Can limit centralization and protect civil society, but can also shield unequal private institutions or understate the state’s duty to guarantee equal rights and universal provision.',
                citations: citations(['aquinasMoralPolitical', 'maritainIntegralHumanism'], ['vaticanQuadragesimoAnno', 'vaticanSocialDoctrineCompendium', 'comparativeChristianDemocracy']),
              },
              {
                label: 'Confessional people’s party',
                distinction: 'Organizes voters through a shared religious tradition, often defending church autonomy, family morality, education, and Christian social order in parliamentary competition.',
                relation: 'Can be democratic and pluralist, but is less compatible with equal secular citizenship when membership or office is restricted by confession.',
                citations: citations(['aquinasMoralPolitical', 'lockeLetterToleration'], ['cambridgeChristianDemocracy', 'bpbChristianDemocraticCVP', 'sepReligionPolitics']),
              },
              {
                label: 'Protestant and neo-Calvinist social pluralism',
                distinction: 'Uses Christian social responsibility, associational life, and differentiated social spheres in ways not identical to Catholic social teaching or continental Catholic parties.',
                relation: 'Shows why Christian democracy cannot be reduced to one church, theology, or European institutional path; country-specific evidence is essential.',
                citations: citations(['maritainIntegralHumanism'], ['oxfordChristianDemocracyEurope', 'cambridgeChristianDemocracy', 'oxfordChristianDemocracy']),
              },
              {
                label: 'Christian nationalism',
                distinction: 'Makes Christianity central to an inherited national people, often linking religion, borders, cultural homogeneity, and sovereignty more tightly than pluralist Christian democracy does.',
                relation: 'May overlap in symbols and social values, but can reject transnational integration or equal pluralism; the two labels are not synonyms.',
                citations: citations(['burkeReflections', 'renanNation'], ['sepNationalism', 'oxfordChristianDemocracyEurope', 'sepReligionPolitics']),
              },
              {
                label: 'Christian social movements and liberation currents',
                distinction: 'Emphasizes poverty, labor, anti-colonial justice, grassroots participation, and structural reform, sometimes moving closer to democratic socialism or religious socialism.',
                relation: 'Shares social ethics and solidarity but may reject established Christian-democratic parties, social-market compromise, or church hierarchy.',
                citations: citations(['maritainIntegralHumanism', 'keynesGeneralTheory'], ['oxfordSocialCatholicismChristianDemocracy', 'sepReligionPolitics']),
              },
              {
                label: 'Confessional authoritarianism or theocracy',
                distinction: 'Gives religious office, sacred law, or an authorized religious interpretation constitutive power over the constitution, coercive law, or political membership.',
                relation: 'A boundary case rather than a normal Christian-democratic variant: constitutional-pluralist Christian democracy permits alternation, dissent, and non-confessional citizenship.',
                citations: citations(['aquinasMoralPolitical', 'lockeLetterToleration'], ['oxfordChristianDemocracy', 'sepReligionPolitics', 'oxfordStateReligionFreedom']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'People, movements, and historical examples',
        blocks: [
          {
            type: 'people',
            entries: [
              {
                name: 'Jacques Maritain',
                role: 'French Catholic philosopher associated with personalism, human dignity, human rights, and democratic constitutionalism.',
                caveat: 'Maritain’s philosophy is an intellectual resource for Christian democracy, not a complete party programme and not proof that every Christian-democratic movement followed his pluralist commitments.',
                citations: citations(['maritainIntegralHumanism'], ['oxfordSocialCatholicismChristianDemocracy', 'cambridgeChristianDemocracy']),
              },
              {
                name: 'Konrad Adenauer',
                role: 'German Christian-democratic leader associated with constitutional reconstruction, social-market politics, and postwar European cooperation.',
                caveat: 'Adenauer’s record must be studied in the context of postwar Germany, anti-communism, party competition, social policy, and the limits and exclusions of the period.',
                citations: citations(['maritainIntegralHumanism'], ['adenauerHouse', 'oxfordChristianDemocratDecade', 'comparativeChristianDemocracy']),
              },
              {
                name: 'Franz Etzel',
                role: 'CDU politician and lawyer who chaired the commission preparing the 1949 economic guidelines, as documented by Seidel and Zehender.',
                caveat: 'Commission leadership does not make him the sole author or establish a measured match to this six-axis profile.',
                citations: citations([], ['seidelChristianSocialCDU1979', 'zehenderDuesseldorfHistory']),
              },
              {
                name: 'Robert Schuman',
                role: 'French statesman associated with postwar reconciliation, Christian-democratic political culture, and European institution-building.',
                caveat: 'Schuman was one actor in a wider European and international coalition; European integration cannot be attributed to Christian democracy alone.',
                citations: citations(['maritainIntegralHumanism', 'kantPerpetualPeace'], ['euRobertSchuman', 'oxfordChristianDemocracyEurope']),
              },
              {
                name: 'Pope Leo XIII and Catholic social teaching',
                role: 'Rerum Novarum made labor, property, worker association, social duties, and the social question central to modern Catholic political thought.',
                caveat: 'A papal social encyclical is a religious and institutional source, not direct evidence that later parties implemented one uniform economic policy.',
                citations: citations(['aquinasMoralPolitical'], ['vaticanRerumNovarum', 'oxfordSocialCatholicismChristianDemocracy']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'Postwar West Germany and the CDU/CSU tradition',
                period: 'Federal Republic of Germany, especially from 1949',
                match: 'A major case of Christian-democratic constitutional reconstruction, social-market policy, federal institutions, and European cooperation.',
                caveat: 'The party family was internally diverse and changed over time; postwar democracy, welfare, economic recovery, anti-communism, and the legacy of Nazism all shaped the context.',
                citations: citations(['maritainIntegralHumanism'], ['adenauerHouse', 'oxfordChristianDemocratDecade', 'comparativeChristianDemocracy']),
              },
              {
                name: 'Ahlen and Düsseldorf as programme evidence',
                period: 'German Christian-democratic politics, 1947–1949',
                match: 'Two dated documents permit comparison of ownership, participation, and economic coordination within one evolving party tradition.',
                caveat: 'A party platform is neither an enacted constitution nor a complete country profile.',
                citations: citations([], ['cduAhlen1947', 'cduDuesseldorf1949']),
              },
              {
                name: 'Postwar Italy and Democrazia Cristiana',
                period: 'Italy, 1943–1994 and later Christian-democratic legacies',
                match: 'A mass Christian-democratic party linked Catholic social networks, parliamentary coalition government, welfare, anti-communism, and the European project.',
                caveat: 'The Italian case included clientelism, factionalism, church–party tensions, regional inequality, corruption, and major changes after the First Republic; it is not a simple model.',
                citations: citations(['maritainIntegralHumanism', 'aquinasMoralPolitical'], ['oxfordChristianDemocratDecade', 'oxfordChristianDemocracyEurope', 'comparativeChristianDemocracy']),
              },
              {
                name: 'Robert Schuman’s European Coal and Steel proposal',
                period: 'France and Western Europe, 1950 onward',
                match: 'A case of reconciliation through shared institutions and pooled management of strategic resources, consistent with Christian-democratic international cooperation.',
                caveat: 'The proposal was shaped by economic, security, diplomatic, secular, liberal, and socialist actors as well as Christian democrats; the outcome should not be reduced to one ideology.',
                citations: citations(['maritainIntegralHumanism', 'kantPerpetualPeace'], ['euRobertSchuman', 'oxfordChristianDemocracyEurope']),
              },
              {
                name: 'Swiss Christian-democratic people’s party tradition',
                period: 'Switzerland, late nineteenth century to present',
                match: 'A case in which a historically Catholic party opened its programme and membership beyond an exclusively confessional base while retaining Christian social and conservative elements.',
                caveat: 'Swiss federalism, direct democracy, and religious geography make the case distinctive; it should not stand for all Christian democracy.',
                citations: citations(['aquinasMoralPolitical', 'lockeLetterToleration'], ['bpbChristianDemocraticCVP', 'comparativeChristianDemocracy']),
              },
              {
                name: 'Portuguese Christian-democratic alternatives after 1974',
                period: 'Portugal, democratic transition after the Carnation Revolution',
                match: 'A case in which Catholic social thought, democratization, party formation, and external European support interacted after authoritarian rule.',
                caveat: 'Portugal’s earlier political Catholicism and Salazarist authoritarian context make its trajectory different from postwar West Germany or Italy; Christian democracy must be distinguished from authoritarian corporatism.',
                citations: citations(['maritainIntegralHumanism'], ['oxfordPortugalPoliticalCatholicism', 'comparativeChristianDemocracy']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'conservative', relation: 'shares continuity, family, community, and institutional authority in many variants, but Christian democracy adds a distinctive social-ethical and constitutional party tradition' },
              { id: 'social-democratic', relation: 'shares welfare, labor protection, and mixed-economy institutions, but Christian democracy usually gives more weight to subsidiarity, intermediary associations, family, and Christian social anthropology' },
              { id: 'liberal-constitutionalist', relation: 'shares rights, constitutional government, and pluralist limits, while Christian democracy adds social duties, community institutions, and a religiously informed account of the common good' },
              { id: 'religious-traditionalist', relation: 'shares religiously informed social ethics, but Christian democracy is a party and institutional family that can accept pluralist citizenship and social reform' },
              { id: 'christian-nationalist', relation: 'may share Christian symbols and cultural identity, but Christian nationalism generally binds faith more tightly to national sovereignty or inherited peoplehood' },
              { id: 'theocratic', relation: 'the critical boundary: Christian democracy can be religiously inspired while rejecting clerical supremacy, sacred-law government, and unequal citizenship' },
              { id: 'religious-socialist', relation: 'overlaps on solidarity, poverty, and social justice, but often differs over property, party institutions, revolutionary change, and church authority' },
              { id: 'monarchist', relation: 'may coexist historically with monarchy or constitutional tradition, but Christian democracy is compatible with republican government and is not defined by hereditary rule' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'A first criticism concerns the ambiguity of “Christian” in a democratic state. Christian-democratic movements can defend dignity and pluralism, but can also privilege a majority religion, treat secular citizens as culturally deficient, or use family and moral language to restrict women, sexual minorities, converts, or non-believers. The safe classification records actual law and practice rather than inferring them from a party name.',
            citations: citations(['maritainIntegralHumanism', 'lockeLetterToleration'], ['sepReligionPolitics', 'oxfordChristianDemocracy', 'vaticanSocialDoctrineCompendium', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'A second criticism concerns subsidiarity and unequal private power. Families, churches, schools, unions, firms, and local associations can protect pluralism and participation, but can also reproduce hierarchy, exclusion, gender inequality, or private domination. If a lower-level institution cannot protect equal rights, subsidiarity cannot be a blanket argument against public remedies, universal services, or independent oversight.',
            citations: citations(['aquinasMoralPolitical', 'maritainIntegralHumanism'], ['vaticanQuadragesimoAnno', 'vaticanSocialDoctrineCompendium', 'comparativeChristianDemocracy', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'A third criticism concerns the social-market compromise. Christian-democratic welfare systems can reduce insecurity and class conflict, but may preserve concentrated ownership, depend on gendered family care, segment benefits by occupational status, or weaken labor power when social partnership is unequal. Social-market policy is therefore a variable institutional arrangement, not proof of either justice or exploitation.',
            citations: citations(['keynesGeneralTheory', 'aquinasMoralPolitical'], ['vaticanRerumNovarum', 'comparativeChristianDemocracy', 'oxfordChristianDemocratDecade']),
          },
          {
            type: 'paragraph',
            text: 'Interpretations of the German transition differ. Käthe Seidel’s 1979 comparison emphasizes the displacement of Christian-social priorities by market liberalism and the weakening of the labor wing. Kathrin Zehender’s commentary instead stresses a compromise between ordoliberal and Christian-social currents, retaining social commitments. Their emphases should remain attributed rather than merged into an uncontested account.',
            citations: citations([], ['seidelChristianSocialCDU1979', 'zehenderDuesseldorfHistory']),
          },
          {
            type: 'paragraph',
            text: 'A fourth criticism concerns historical compromise and authoritarian adjacency. Christian parties and Catholic institutions sometimes accommodated monarchies, colonial regimes, corporatist governments, or authoritarian anti-communism. Other Christian democrats defended resistance, human rights, constitutional democracy, and decolonization. The record must distinguish party rhetoric from institutional behavior and avoid treating religious inspiration as either an automatic safeguard or an automatic cause of authoritarianism.',
            citations: citations(['maritainIntegralHumanism', 'burkeReflections'], ['cambridgeChristianDemocracy', 'oxfordPortugalPoliticalCatholicism', 'oxfordChristianDemocracyEurope', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'Finally, Christian democracy is difficult to classify on one left–right line because its social, economic, authority, identity, foreign-policy, and religion positions can pull in different directions. A party can support welfare and private property, family tradition and constitutional rights, national culture and European integration, religious ethics and secular law. These six scores are didactic composites and should be read alongside variant, country, period, programme, coalition, and record in office.',
            citations: citations(['maritainIntegralHumanism', 'keynesGeneralTheory', 'lockeLetterToleration'], ['oxfordChristianDemocracyEurope', 'comparativeChristianDemocracy', 'sepReligionPolitics', 'vdem']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['maritainIntegralHumanism', 'aquinasMoralPolitical', 'burkeReflections', 'keynesGeneralTheory', 'lockeLetterToleration', 'kantPerpetualPeace', 'morgenthauRealism'],
      researchSourceIds: ['oxfordChristianDemocracy', 'oxfordChristianDemocracyEurope', 'cambridgeChristianDemocracy', 'oxfordSocialCatholicismChristianDemocracy', 'oxfordChristianDemocratDecade', 'vaticanRerumNovarum', 'vaticanQuadragesimoAnno', 'vaticanSocialDoctrineCompendium', 'euRobertSchuman', 'adenauerHouse', 'bpbChristianDemocraticCVP', 'oxfordPortugalPoliticalCatholicism', 'comparativeChristianDemocracy', 'sepReligionPolitics', 'sepMedieval', 'sepNationalism', 'sepConservatism', 'vdem', 'foreignPolicy', 'cduAhlen1947', 'cduDuesseldorf1949', 'zehenderDuesseldorfHistory', 'seidelChristianSocialCDU1979'],
      editorialNote: 'The entry treats Christian democracy as a plural and historically changing family. It distinguishes personalist and social-market arguments from clerical rule, theocracy, Christian nationalism, generic conservatism, social democracy, and religious socialism. Scores are didactic composites and should not classify a party or country without dated programme and institutional evidence.',
    },
    researchGaps: [
      'Add original-language Catholic, Protestant, and Orthodox sources plus scholarship in French, German, Italian, Dutch, Portuguese, Spanish, and Latin American political history; record translations and editions separately.',
      'Add comparative work on Christian-democratic parties outside Western Europe, including Latin America, Central and Eastern Europe, Africa, the Middle East, and Asia, without treating Christian parties as one institutional family.',
      'Compare Catholic social teaching with Protestant social ethics, neo-Calvinist sphere theories, Christian socialism, liberation theology, distributism, personalism, and secular social democracy through explicit concepts rather than party labels.',
      'Add country-specific evidence on women’s citizenship, family law, labor rights, welfare access, migration, minority religion, colonial administration, Indigenous rights, and the treatment of non-believers.',
      'Add primary party programmes and voting records for CDU/CSU, Democrazia Cristiana, MRP, CVP, ÖVP, CDA, Fine Gael, Chilean and Brazilian Christian-democratic parties, Portuguese CDS traditions, and later successors.',
      'Study church hierarchy, lay movements, unions, cooperatives, business associations, local government, and the state so that intermediary institutions are not treated as automatically democratic.',
      'Expand the postwar European-integration record to include secular and socialist contributors, colonial and migration histories, NATO and anti-communism, and tensions between European universalism and national or confessional identity.',
      'Extend the Ahlen and Düsseldorf comparison to original printings, the unabridged 1949 programme, commission records, voting behavior, and implementation. Check Seidel’s digitized text and footnote alignment against the original issue; treat her cited sources as leads until independently reviewed.',
      'Test the competing continuity and rupture interpretations with newer scholarship, labor and business records, and evidence of welfare distribution and exclusion. The two German programmes do not establish a universal Christian-democratic trajectory or current-country classification.',
      'Reconcile the entry’s identity coordinate of -20 with the main card’s -40 through an explicit editorial decision. This discrepancy is not a polarity reversal; neither magnitude is newly validated by the programme research, and both were left unchanged in this pass.',
    ],
  },
  'religious-socialist': {
    id: 'religious-socialist',
    title: 'Religious socialism / liberation theology',
    canonicalLabel: 'Religious socialism / liberation theology',
    aliases: ['Christian socialism', 'liberation theology', 'religious left', 'social gospel', 'faith-based socialism'],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'This is an umbrella analytical entry for movements that connect religious ethics, collective economic justice, and liberation from domination. Christian socialism, Catholic Worker practice, Black theology, Latin American liberation theology, and other religious-socialist traditions are related but not interchangeable. The entry is Christian-centered because its strongest current sources concern Christian cases; other religious traditions remain explicit research gaps.',
    timeScope: 'Older religious arguments about community and economic obligation are treated as antecedents, not as modern socialism. The principal modern formation runs from nineteenth-century Christian socialism and social-gospel movements through twentieth-century anti-colonial, civil-rights, Catholic Worker, and Latin American liberation movements to contemporary faith-based justice organizing.',
    geographicScope: 'Transnational, with documented British, European, North American, Latin American, Brazilian, and anti-colonial strands. Jewish, Muslim, Buddhist, Hindu, Indigenous, African, and other religious-socialist traditions require separate language- and region-specific research.',
    summary: 'A family of religiously grounded movements that criticizes poverty, exploitation, racial or colonial domination, and concentrated economic power while pursuing solidarity, collective organization, and liberation. It may support public ownership, cooperatives, redistribution, worker power, mutual aid, nonviolent resistance, or revolutionary change, but it does not prescribe one economic system or require clerical control of the state.',
    summaryCitations: citations(
      ['gutierrezTheologyLiberation', 'dorothyDayCatholicWorker', 'kingPoorPeoplesCampaign', 'marxEngelsManifesto'],
      ['oxfordLiberationTheologies', 'oxfordChristianSocialism', 'cambridgeReligionOriginsSocialism', 'vaticanLiberationInstruction', 'celamMedellin'],
    ),
    dimensionInterpretations: {
      economic: {
        score: 62,
        label: 'Strongly egalitarian and collectivist, institutionally varied',
        explanation: 'Poverty and concentrated ownership are treated as moral and political problems. Movements may favor public ownership, worker control, cooperatives, redistribution, community sharing, labor rights, or a regulated mixed economy; religious socialism is therefore economically left-leaning without being one uniform ownership programme.',
        citations: citations(['gutierrezTheologyLiberation', 'marxEngelsManifesto', 'dorothyDayCatholicWorker'], ['oxfordChristianSocialism', 'vaticanRerumNovarum', 'oxfordLiberationTheologies', 'kingPoorPeoplesCampaign']),
      },
      social: {
        score: 35,
        label: 'Emancipatory, with internal religious variation',
        explanation: 'Liberation from poverty, racism, colonial status, and exclusion often supports broad equality and participation. Religious communities can nevertheless retain traditional positions on family, gender, sexuality, authority, or membership, so an emancipatory economic message does not determine every social-value position.',
        citations: citations(['gutierrezTheologyLiberation', 'kingPoorPeoplesCampaign', 'millOnLiberty'], ['oxfordLiberationTheologies', 'celamMedellin', 'vaticanChristianFreedomLiberation', 'sepReligionPolitics']),
      },
      authority: {
        score: 10,
        label: 'Participatory and movement-based, with authority tensions',
        explanation: 'Base communities, congregations, unions, mutual-aid groups, and social movements can mobilize ordinary people and challenge both state repression and clerical monopoly. The profile can become hierarchical when clergy, parties, revolutionary vanguards, or charismatic leaders claim to speak for the poor without accountability.',
        citations: citations(['dorothyDayCatholicWorker', 'kingPoorPeoplesCampaign', 'gutierrezTheologyLiberation'], ['oxfordLiberationTheologies', 'catholicWorkerMovement', 'celamMedellin', 'vdem']),
      },
      identity: {
        score: 25,
        label: 'Transnational solidarity with anti-colonial and local roots',
        explanation: 'Solidarity often crosses class, racial, national, and colonial boundaries, while movements remain rooted in particular churches, neighborhoods, peoples, and histories. Some liberation movements combine internationalism with national liberation or cultural identity; neither religion nor socialism fixes the identity axis by itself.',
        citations: citations(['gutierrezTheologyLiberation', 'kingPoorPeoplesCampaign', 'gandhiHindSwaraj'], ['oxfordLiberationTheologies', 'celamMedellin', 'sepColonialism', 'cambridgeReligionOriginsSocialism']),
      },
      foreign: {
        score: 25,
        label: 'Anti-imperial and generally restraint-oriented',
        explanation: 'Religious-socialist movements commonly criticize imperial domination, militarism, racial hierarchy, and economic dependence, and many favor nonviolent resistance. Some accept armed struggle or revolutionary force under specific conditions, so anti-imperialism should not be mistaken for universal pacifism.',
        citations: citations(['dorothyDayCatholicWorker', 'kingPoorPeoplesCampaign', 'gandhiHindSwaraj', 'fanonWretchedEarth'], ['oxfordLiberationTheologies', 'catholicWorkerMovement', 'foreignPolicy', 'sepColonialism']),
      },
      religion: {
        score: -75,
        label: 'Strongly religiously grounded; church–state relationships vary',
        explanation: 'Religious texts, practices, communities, and theological interpretations are active sources of public justice and collective organization. This does not automatically imply theocracy: many religious-socialist movements defend conscience, pluralism, lay participation, or separation from coercive clerical government, while others debate how far religious law should shape the state. Day’s 1940 article makes Catholic doctrine and daily Mass central to the work. Religious devotion, criticism of clerical power, and proposals for state authority must be assessed separately.',
        citations: citations(['gutierrezTheologyLiberation', 'dorothyDayCatholicWorker', 'spinozaPolitical'], ['oxfordLiberationTheologies', 'vaticanLiberationInstruction', 'vaticanChristianFreedomLiberation', 'sepReligionPolitics', 'dayAimsPurposes1940']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Religious socialism begins from the claim that economic exploitation, poverty, racial domination, colonial rule, and social exclusion are not only technical failures but moral and spiritual questions. Religious language can supply an account of human dignity, solidarity, obligation, sin, hope, community, and liberation; socialist language can supply analysis of ownership, class, labor, political power, and material dependence. Their combination has produced many different movements rather than one ideology.',
            citations: citations(['gutierrezTheologyLiberation', 'marxEngelsManifesto'], ['cambridgeReligionOriginsSocialism', 'oxfordChristianSocialism', 'oxfordLiberationTheologies']),
          },
          {
            type: 'paragraph',
            text: 'Liberation theology is one important twentieth-century strand, especially in Latin America, but it should not be used as a synonym for every Christian socialist, religious left, or faith-based justice movement. The same distinction applies to the Catholic Worker and the Poor People’s Campaign: both link Christian ethics to economic justice, yet neither is a blueprint for state socialism. The entry therefore records shared family features and keeps the institutional differences visible.',
            citations: citations(['gutierrezTheologyLiberation', 'dorothyDayCatholicWorker', 'kingPoorPeoplesCampaign'], ['oxfordLiberationTheologies', 'catholicWorkerMovement', 'kingPoorPeoplesCampaign', 'celamMedellin']),
          },
          {
            type: 'paragraph',
            text: 'In the Portuguese edition of his 1989 article, sociologist Michel Löwy distinguishes liberation theology from a broader liberation Christianity: a network of communities, lay associations, clergy, and pastoral institutions. For him, theological systematization develops from earlier social practice rather than creating the entire movement by itself.',
            citations: citations([], ['lowyRadicalizedCatholicism1989']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'The economic core is a moral criticism of relations that leave some people without food, land, housing, work, voice, or equal standing while others control productive resources. Religious-socialist responses range from cooperative ownership and mutual aid to public services, labor organization, redistribution, anti-colonial development, and revolutionary transformation. The label should not be assigned simply because a movement helps the poor or uses religious symbols; its economic diagnosis and institutional aims must be examined.',
            citations: citations(['gutierrezTheologyLiberation', 'marxEngelsManifesto', 'dorothyDayCatholicWorker'], ['oxfordChristianSocialism', 'vaticanRerumNovarum', 'oxfordLiberationTheologies']),
          },
          {
            type: 'paragraph',
            text: 'The political method is often organized around collective agency from below: congregations, base communities, worker associations, civil-rights campaigns, cooperatives, mutual-aid networks, and popular education. Some movements work through elections and social policy; others emphasize direct action, nonviolent resistance, civil disobedience, or revolutionary struggle. The common element is not one tactic but the conviction that oppressed people should participate in changing the conditions that govern them.',
            citations: citations(['dorothyDayCatholicWorker', 'kingPoorPeoplesCampaign', 'gutierrezTheologyLiberation'], ['catholicWorkerMovement', 'kingPoorPeoplesCampaign', 'oxfordLiberationTheologies', 'celamMedellin']),
          },
          {
            type: 'paragraph',
            text: 'Day’s Aims and Purposes (1940) connects material assistance with spiritual formation, cooperatives, unions, hospitality houses, and farming communes. She stresses each participant’s responsibility, not simply organizational size. This is her normative account of the work, not a measured evaluation of its reach or effectiveness.',
            citations: citations([], ['dayAimsPurposes1940']),
          },
          {
            type: 'paragraph',
            text: 'The Catholic Worker’s May 2019 statement advocates land trusts, worker-managed small enterprises, cooperatives, and distributist community life. Its declared means include nonviolence, hospitality, manual labor, and voluntary poverty. This dated self-description provides a more precise comparison than assuming that opposition to capitalism entails comprehensive state ownership.',
            citations: citations([], ['catholicWorkerAims2019']),
          },
          {
            type: 'evidence-note',
            text: 'The entry uses liberation theology cautiously. Oxford scholarship describes liberation theologies as contextual projects that respond to particular forms of suffering through social analysis and theological reflection. The Vatican’s 1984 and 1986 documents show an internal Catholic dispute: social concern and liberation are affirmed, while certain Marxist reductions, class absolutism, or revolutionary interpretations are criticized. Neither side should be presented as the entire history of liberation theology.',
            citations: citations(['gutierrezTheologyLiberation'], ['oxfordLiberationTheologies', 'vaticanLiberationInstruction', 'vaticanChristianFreedomLiberation', 'oxfordLiberationLegacy']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Older religious arguments about community and economic obligation',
            text: 'Religious traditions contain arguments about almsgiving, common use, just price, debt, hospitality, worker dignity, communal life, and obligations to the poor. These are antecedents for moral and institutional questions, not evidence that ancient or medieval communities were modern socialist societies. The modern category requires attention to industrial property, wage labor, mass politics, and organized movements.',
            citations: citations(['aquinasMoralPolitical', 'gandhiHindSwaraj'], ['cambridgeReligionOriginsSocialism', 'vaticanRerumNovarum', 'sepSocialism']),
          },
          {
            period: 'Nineteenth century: Christian socialism and the social question',
            text: 'Industrialization, urban poverty, labor conflict, and socialist organization generated Christian responses in Britain and elsewhere. Christian socialists argued that economic relations should reflect fraternity, social responsibility, and the moral equality of persons; some built associations, educational projects, unions, and church movements, while others remained paternalist or resisted secular socialism. The historical field cannot be reduced to either harmony or simple church opposition.',
            citations: citations(['marxEngelsManifesto', 'aquinasMoralPolitical'], ['oxfordChristianSocialism', 'jstorChristianSocialistRevival', 'cambridgeReligionOriginsSocialism']),
          },
          {
            period: 'Late nineteenth–early twentieth centuries: social gospel, Catholic social thought, and religious labour politics',
            text: 'Protestant social-gospel currents, Catholic social teaching, Christian labor movements, and religious reformers developed different accounts of poverty, property, industrial citizenship, and state responsibility. Some advocated social reform within capitalism; others moved toward socialism, cooperatives, or stronger labor power. Rerum Novarum influenced Catholic social debate, but Catholic social teaching should not be collapsed into socialism or treated as a single party programme.',
            citations: citations(['aquinasMoralPolitical', 'dorothyDayCatholicWorker'], ['oxfordChristianSocialism', 'vaticanRerumNovarum', 'cambridgeReligionOriginsSocialism']),
          },
          {
            period: 'December 1932: Maurin’s proposed programme for Day',
            text: 'Marquette’s biographical note describes Peter Maurin presenting a three-part programme: discussion meetings, hospitality houses, and farming communes. Its account also records his dissatisfaction with the newspaper’s early emphasis, cautioning against treating the founders as indistinguishable voices.',
            citations: citations([], ['marquetteMaurinPapers']),
          },
          {
            period: '1930s–1940s: Catholic Worker, personalism, pacifism, and anti-fascist social action',
            text: 'Dorothy Day and the Catholic Worker movement connected hospitality, voluntary poverty, labor solidarity, community houses, and pacifism. This was a radical practice of Christian social action rather than a proposal for a centralized socialist state. It illustrates how religious socialism can organize material support and political witness through voluntary association, while also raising questions about scale, gender, authority, and dependence on unpaid care.',
            citations: citations(['dorothyDayCatholicWorker'], ['catholicWorkerMovement', 'oxfordChristianSocialism']),
          },
          {
            period: '1940s–1960s: Black theology, civil rights, and economic justice',
            text: 'Black churches and Christian social movements linked racial equality, democratic citizenship, nonviolence, and economic justice. Martin Luther King Jr.’s Poor People’s Campaign expanded the civil-rights agenda toward jobs, income, housing, and multiracial solidarity. This tradition is related to religious socialism but is not reducible to an imported European class doctrine; race, citizenship, U.S. constitutional history, and movement strategy are central.',
            citations: citations(['kingPoorPeoplesCampaign', 'duboisBlackReconstruction'], ['kingPoorPeoplesCampaign', 'oxfordLiberationTheologies', 'sepColonialism']),
          },
          {
            period: '1960s–1970s: Vatican II, Medellín, base communities, and Latin American liberation theology',
            text: 'Latin American Catholic movements interpreted poverty, dependency, landlessness, authoritarianism, and colonial legacies through theological reflection and social analysis. The 1968 Medellín conference became an important institutional setting, while Gustavo Gutiérrez’s work gave a major intellectual expression to liberation theology. Base communities and popular organizations varied by country and did not form one centralized political party or one identical relationship to Marxism.',
            citations: citations(['gutierrezTheologyLiberation', 'fanonWretchedEarth'], ['celamMedellin', 'oxfordLiberationTheologies', 'oxfordLiberationLegacy']),
          },
          {
            period: 'Late 1950s–1970s: a sociological interpretation of religious mobilization',
            text: 'Löwy links religious renewal to changing social conditions and locates important initiatives in groups at the church’s institutional margins. He rejects a solely hierarchical or solely grassroots origin story. This is a historical interpretation of particular Latin American developments, not a universal causal law.',
            citations: citations([], ['lowyRadicalizedCatholicism1989']),
          },
          {
            period: '1980s: internal Catholic debate over Marxism, freedom, and liberation',
            text: 'The Vatican’s 1984 instruction criticized forms of liberation theology that adopted Marxist categories without sufficient critical assessment, especially where class conflict became an all-explaining framework or political liberation displaced Christian claims. The 1986 instruction also emphasized Christian freedom, social justice, and liberation. These documents are evidence of an internal doctrinal dispute, not proof that all liberation theology was Marxist or that all criticism rejected social transformation.',
            citations: citations(['gutierrezTheologyLiberation'], ['vaticanLiberationInstruction', 'vaticanChristianFreedomLiberation', 'oxfordLiberationTheologies']),
          },
          {
            period: 'Late twentieth century–present: plural religious lefts and new liberation claims',
            text: 'Religious justice movements now address poverty, migration, climate, race, gender, incarceration, Indigenous rights, debt, war, and global inequality. Some remain connected to churches; others are ecumenical, interfaith, post-denominational, or explicitly critical of religious institutions. The category remains useful only when the movement’s theology, social base, economic goals, authority structure, and relationship to state power are separately documented.',
            citations: citations(['kingPoorPeoplesCampaign', 'dorothyDayCatholicWorker', 'senDevelopmentFreedom'], ['oxfordLiberationLegacy', 'oxfordLiberationTheologies', 'sepReligionPolitics']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'British Christian socialism',
                distinction: 'Uses Christian fellowship, social ethics, labor organization, and critique of acquisitive individualism to support socialist or cooperative reform.',
                relation: 'An important nineteenth- and twentieth-century strand, but its institutional and theological positions varied from church reform to Labour politics and voluntary association.',
                citations: citations(['aquinasMoralPolitical', 'marxEngelsManifesto'], ['oxfordChristianSocialism', 'jstorChristianSocialistRevival', 'cambridgeReligionOriginsSocialism']),
              },
              {
                label: 'Catholic Worker personalism',
                distinction: 'The May 2019 statement combines personalism, decentralization, distributist communal practices, and nonviolence.',
                relation: 'Included here as adjacent religious economic radicalism, not automatically socialist in its preferred ownership arrangements. This page is not treated as a binding constitution or evidence of uniform practice across houses.',
                citations: citations(['dorothyDayCatholicWorker'], ['catholicWorkerMovement', 'catholicWorkerAims2019']),
              },
              {
                label: 'Latin American liberation theology',
                distinction: 'Uses contextual theology and social analysis to interpret the suffering of the poor and organize transformative action in particular historical settings.',
                relation: 'The most prominent case in this entry, but it is not identical to Marxism, socialism, Catholic social teaching, or every Latin American church movement.',
                citations: citations(['gutierrezTheologyLiberation', 'fanonWretchedEarth'], ['oxfordLiberationTheologies', 'celamMedellin', 'vaticanLiberationInstruction']),
              },
              {
                label: 'Black theology and Christian economic justice',
                distinction: 'Connects Christian liberation to racial equality, anti-racism, democratic citizenship, nonviolence, and economic transformation.',
                relation: 'Shares liberationist and egalitarian commitments while grounding its analysis in Black religious experience, racial capitalism, U.S. history, and movement strategy.',
                citations: citations(['kingPoorPeoplesCampaign', 'duboisBlackReconstruction'], ['kingPoorPeoplesCampaign', 'oxfordLiberationTheologies']),
              },
              {
                label: 'Christian social democracy and welfare activism',
                distinction: 'Pursues redistribution, labor rights, public services, and social protection through pluralist parties, democratic institutions, and regulated markets.',
                relation: 'Overlaps with Christian democracy and social democracy, but becomes more specifically religious-socialist when egalitarian transformation and liberation from domination are central rather than only social insurance.',
                citations: citations(['keynesGeneralTheory', 'aquinasMoralPolitical'], ['oxfordChristianSocialism', 'vaticanRerumNovarum', 'sepSocialism']),
              },
              {
                label: 'Anti-colonial and Indigenous religious liberation',
                distinction: 'Links religious or spiritual authority to self-determination, land, cultural survival, anti-imperial resistance, and the repair of colonial domination.',
                relation: 'Can overlap with socialism but may prioritize land, peoplehood, spiritual sovereignty, or decolonization rather than class ownership; traditions must not be subsumed into a Christian category.',
                citations: citations(['gandhiHindSwaraj', 'fanonWretchedEarth'], ['sepColonialism', 'oxfordLiberationTheologies']),
              },
              {
                label: 'Religious socialism versus theocracy',
                distinction: 'Religious socialism grounds social justice in faith while often seeking participation and solidarity; theocracy makes religious law, office, or authorized interpretation constitutive of government.',
                relation: 'Religious socialism can be anti-clerical, pluralist, or critical of church hierarchy. It becomes theocratic only when religious supremacy structures coercive state authority and equal dissent is denied.',
                citations: citations(['spinozaPolitical', 'lockeLetterToleration', 'gutierrezTheologyLiberation'], ['sepReligionPolitics', 'vaticanLiberationInstruction', 'oxfordStateReligionFreedom']),
              },
              {
                label: 'Religious socialism versus secular democratic socialism',
                distinction: 'Both may support equality, worker power, public ownership, and democratic institutions, but religious socialism treats theological or spiritual commitments as active sources of political motivation or legitimacy.',
                relation: 'The two can cooperate in coalitions and movements; their disagreements concern public reasons, church authority, moral anthropology, and the place of religion in law and organization.',
                citations: citations(['marxEngelsManifesto', 'millOnLiberty', 'gutierrezTheologyLiberation'], ['sepSocialism', 'oxfordLiberationTheologies', 'sepReligionPolitics']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'People, movements, and historical examples',
        blocks: [
          {
            type: 'people',
            entries: [
              {
                name: 'Gustavo Gutiérrez',
                role: 'Peruvian theologian whose work helped articulate Latin American liberation theology around poverty, history, social analysis, and Christian liberation.',
                caveat: 'Gutiérrez represents one Catholic and Latin American theological project; his work should not be used to classify every church movement, socialist party, or Christian view of poverty.',
                citations: citations(['gutierrezTheologyLiberation'], ['oxfordLiberationTheologies', 'vaticanLiberationInstruction', 'celamMedellin']),
              },
              {
                name: 'Dorothy Day',
                role: 'Catholic Worker founder associated with voluntary poverty, hospitality, labor solidarity, personalist community, and pacifism.',
                caveat: 'The Catholic Worker is a decentralized movement and not a state-socialist or clerical governing model; local houses differ in practice and political emphasis.',
                citations: citations(['dorothyDayCatholicWorker'], ['catholicWorkerMovement', 'oxfordChristianSocialism', 'dayAimsPurposes1940']),
              },
              {
                name: 'Peter Maurin',
                role: 'French-born Catholic Worker co-founder associated with discussion, hospitality, farming communes, and the Easy Essays.',
                caveat: 'The archive distinguishes original writings from arrangements of other authors’ ideas; attribution requires checking the particular item.',
                citations: citations([], ['marquetteMaurinPapers']),
              },
              {
                name: 'Martin Luther King Jr.',
                role: 'Christian movement leader who connected racial justice, nonviolent action, democratic citizenship, jobs, income, and economic justice.',
                caveat: 'King’s political thought changed across contexts and should not be reduced to a generic Christian-socialist label; the Poor People’s Campaign is a specific movement programme.',
                citations: citations(['kingPoorPeoplesCampaign'], ['kingPoorPeoplesCampaign', 'oxfordLiberationTheologies']),
              },
              {
                name: 'Gandhi and religiously grounded anti-colonial economics',
                role: 'A non-Christian comparative reference for ethical self-rule, nonviolence, village economy, and resistance to imperial domination.',
                caveat: 'Gandhian swaraj is not a synonym for socialism or liberation theology; it is included to prevent the entry from treating Christian cases as the whole field.',
                citations: citations(['gandhiHindSwaraj'], ['sepColonialism', 'oxfordLiberationTheologies']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'British Christian socialist revival',
                period: 'Britain, especially 1877–1914',
                match: 'Religious grounds for socialist belief, social reform, church organization, and labor-oriented political imagination.',
                caveat: 'The revival contained Anglican, Methodist, academic, worker, paternalist, and socialist currents; it was neither one party nor uniformly anti-capitalist.',
                citations: citations(['aquinasMoralPolitical', 'marxEngelsManifesto'], ['jstorChristianSocialistRevival', 'oxfordChristianSocialism', 'cambridgeReligionOriginsSocialism']),
              },
              {
                name: 'Catholic Worker houses',
                period: 'United States, from 1933; decentralized communities internationally',
                match: 'Hospitality, voluntary poverty, mutual aid, worker solidarity, and pacifist resistance organized through religious community.',
                caveat: 'Houses vary and operate within wider legal and economic systems; they are not complete examples of a national socialist economy or stateless society. A movement statement is evidence of advocated aims, not audited local outcomes.',
                citations: citations(['dorothyDayCatholicWorker'], ['catholicWorkerMovement', 'catholicWorkerAims2019']),
              },
              {
                name: 'Poor People’s Campaign',
                period: 'United States, 1967–1968',
                match: 'A multiracial, Christian-inflected campaign for jobs, income, housing, and economic justice using nonviolent protest and federal demands.',
                caveat: 'The campaign was brief, coalition-based, and shaped by U.S. racial and constitutional history; it should not be relabeled a complete socialist state project.',
                citations: citations(['kingPoorPeoplesCampaign'], ['kingPoorPeoplesCampaign']),
              },
              {
                name: 'Medellín and Latin American base-community movements',
                period: 'Latin America, from the 1960s onward',
                match: 'Church-linked social transformation, popular organization, poverty analysis, and theological reflection after Vatican II and the 1968 Medellín conference.',
                caveat: 'Countries, dioceses, base communities, clergy, lay groups, and political alliances differed greatly; the case cannot be reduced to one centralized liberation-theology movement.',
                citations: citations(['gutierrezTheologyLiberation', 'fanonWretchedEarth'], ['celamMedellin', 'oxfordLiberationTheologies', 'oxfordLiberationLegacy']),
              },
              {
                name: 'Faith-based anti-colonial and social-justice movements',
                period: 'Twentieth century to present; country-specific',
                match: 'Religious organizations and leaders have sometimes supported land reform, anti-racism, labor rights, decolonization, peace, welfare, and democratic transition.',
                caveat: 'Religion can also support hierarchy, nationalism, authoritarianism, or exclusion. Each movement needs evidence about doctrine, organization, social base, rights, and actual political practice.',
                citations: citations(['gandhiHindSwaraj', 'kingPoorPeoplesCampaign', 'gutierrezTheologyLiberation'], ['oxfordLiberationTheologies', 'sepColonialism', 'vdem']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'democratic-socialist', relation: 'shares egalitarian economics, worker power, and democratic transformation, while religious socialism grounds motivation or legitimacy partly in faith and religious community' },
              { id: 'social-democratic', relation: 'shares welfare, labor, and redistribution, but religious socialism may pursue deeper liberation, communal transformation, or theological critique of property and power' },
              { id: 'christian-democratic', relation: 'shares Christian social ethics and concern for the common good, but usually differs over economic ownership, class analysis, revolutionary change, and the scale of redistribution' },
              { id: 'anti-colonial-liberation', relation: 'overlaps in resistance to empire, racial hierarchy, and domination, but anti-colonial liberation is not necessarily religious or socialist' },
              { id: 'anarchist-communalist', relation: 'can share mutual aid, local participation, anti-authoritarianism, and collective ownership, while religious socialism adds theological and community institutions' },
              { id: 'green-commons', relation: 'may share stewardship, commons, solidarity, and critique of concentrated power, but ecological politics is not necessarily religious or socialist' },
              { id: 'theocratic', relation: 'religious motivation does not imply clerical government; theocracy requires constitutive religious supremacy over coercive authority and political membership' },
              { id: 'religious-traditionalist', relation: 'shares religious public ethics but may be its social and economic opposite when liberationist movements challenge inherited hierarchy and property' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'A first criticism is conceptual fusion. “Religious socialism” can hide major differences between ethical socialism, church reform, Catholic social teaching, liberation theology, Black theology, the Catholic Worker, Islamic socialism, Jewish labor movements, and interfaith justice activism. The classification should state which tradition, country, period, institution, and economic programme is being described rather than treating religious concern for the poor as proof of socialism.',
            citations: citations(['gutierrezTheologyLiberation', 'dorothyDayCatholicWorker', 'marxEngelsManifesto'], ['cambridgeReligionOriginsSocialism', 'oxfordChristianSocialism', 'oxfordLiberationTheologies']),
          },
          {
            type: 'paragraph',
            text: 'Löwy’s account also treats movement strength and relations with church leadership as uneven across countries. It cannot establish the present political identity of a country or the representativeness of a selected community.',
            citations: citations([], ['lowyRadicalizedCatholicism1989']),
          },
          {
            type: 'evidence-note',
            text: 'Marquette’s finding aid identifies surviving Maurin correspondence and manuscripts, including material adapted from other writers. Collection-level description is not a substitute for reading those documents or independently assessing community practice.',
            citations: citations([], ['marquetteMaurinPapers']),
          },
          {
            type: 'paragraph',
            text: 'A second criticism concerns authority. Grassroots participation can be empowering, but clergy, charismatic leaders, revolutionary parties, armed groups, or educated activists may claim to represent the oppressed. Religious certainty can make disagreement appear immoral, while socialist certainty can make dissent appear class betrayal. Safeguards include internal democracy, equal membership, transparent finances, independent criticism, nonviolence where possible, freedom of conscience, and the ability to leave or organize another movement.',
            citations: citations(['dorothyDayCatholicWorker', 'kingPoorPeoplesCampaign', 'spinozaPolitical'], ['catholicWorkerMovement', 'kingPoorPeoplesCampaign', 'sepReligionPolitics', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'A third criticism concerns the use of Marxist analysis. Social analysis can illuminate class, dependency, ownership, and power, but a movement may reduce every moral or religious conflict to class position, justify coercion in the name of historical necessity, or import categories that do not fit local communities. The Vatican’s 1984 instruction is one primary record of this concern; it should be read alongside liberation theology’s own internal diversity rather than treated as a verdict on the whole field.',
            citations: citations(['gutierrezTheologyLiberation', 'marxEngelsManifesto'], ['vaticanLiberationInstruction', 'vaticanChristianFreedomLiberation', 'oxfordLiberationTheologies']),
          },
          {
            type: 'paragraph',
            text: 'A fourth criticism concerns romanticizing the poor. “The poor” are not a single political subject, and communities contain gender, racial, ethnic, religious, generational, and class differences. A movement can speak for poor people while excluding women, minorities, dissenters, queer people, migrants, Indigenous communities, or internal critics. Research should identify who participates, who decides, whose labor is unpaid, and who receives material benefits.',
            citations: citations(['gutierrezTheologyLiberation', 'kingPoorPeoplesCampaign', 'millOnLiberty'], ['oxfordLiberationTheologies', 'celamMedellin', 'vdem', 'sepReligionPolitics']),
          },
          {
            type: 'paragraph',
            text: 'Finally, religious socialism has no single position on violence, the state, nationalism, secular law, property, or international institutions. Pacifist movements, electoral coalitions, anti-colonial resistance, revolutionary groups, welfare activists, and cooperative communities should not be placed on one exact score without evidence. The profile is a didactic composite, and the entry remains deliberately incomplete outside its best-sourced Christian, Latin American, European, and North American cases.',
            citations: citations(['dorothyDayCatholicWorker', 'gandhiHindSwaraj', 'fanonWretchedEarth', 'gutierrezTheologyLiberation'], ['foreignPolicy', 'oxfordLiberationTheologies', 'sepColonialism', 'cambridgeReligionOriginsSocialism']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['gutierrezTheologyLiberation', 'dorothyDayCatholicWorker', 'kingPoorPeoplesCampaign', 'gandhiHindSwaraj', 'fanonWretchedEarth', 'duboisBlackReconstruction', 'marxEngelsManifesto', 'spinozaPolitical', 'millOnLiberty'],
      researchSourceIds: ['oxfordLiberationTheologies', 'oxfordChristianSocialism', 'cambridgeReligionOriginsSocialism', 'jstorChristianSocialistRevival', 'vaticanLiberationInstruction', 'vaticanChristianFreedomLiberation', 'celamMedellin', 'catholicWorkerMovement', 'kingPoorPeoplesCampaign', 'oxfordLiberationLegacy', 'sepSocialism', 'sepReligionPolitics', 'sepColonialism', 'vaticanRerumNovarum', 'foreignPolicy', 'vdem', 'dayAimsPurposes1940', 'catholicWorkerAims2019', 'marquetteMaurinPapers', 'lowyRadicalizedCatholicism1989'],
      editorialNote: 'The entry is an umbrella synthesis with a Christian-centered evidence base. It distinguishes religious socialism, Christian socialism, liberation theology, Catholic Worker practice, Black theology, Christian democracy, secular democratic socialism, anti-colonial liberation, and theocracy. Scores are didactic composites; non-Christian traditions and country-specific claims require separate research.',
    },
    researchGaps: [
      'Add original-language scholarship in Portuguese and Spanish on Brazilian base communities, liberation theology, land and labor movements, Black theology, Indigenous theology, and church–state relations; verify editions and translations.',
      'Add French, German, Italian, Dutch, and English scholarship on Christian socialism, social gospel, religious labor movements, Catholic Worker networks, personalism, and the relationship with socialist and labor parties.',
      'Research Jewish socialist and Bund traditions, Islamic socialism and liberation thought, Buddhist and Hindu social movements, African religious socialism, Indigenous spiritual sovereignty, and interfaith justice organizing without forcing them into a Christian template.',
      'Add primary documents from Medellín, Puebla, base communities, Catholic Worker houses, Black theology, Christian socialist parties, labor unions, and relevant state or church archives with precise dates and institutional provenance.',
      'Compare grassroots participation, clerical authority, party organization, armed struggle, nonviolence, welfare provision, cooperative ownership, and public ownership across cases rather than assuming that all liberation movements share one structure.',
      'Add evidence on gender, sexuality, race, caste, Indigenous status, migration, disability, unpaid care, minority religion, dissent, and internal exclusion within religious-socialist movements.',
      'Test the six-dimensional scores against party programmes, movement documents, institutional practice, and country-specific historical data; do not infer a national ideology from the presence of churches or faith-based charities alone.',
      'Compare Day’s article with its original newspaper scan, trace earlier Aims and Means versions, and consult the Maurin papers themselves. Investigate participation, unpaid care, dissent, and material outcomes across houses rather than deriving them from aspirational statements or finding aids.',
      'Extend the selected Löwy reading to the complete Portuguese article, its earlier publication, the cited works, and contrasting Latin American scholarship. Verify community-level and episcopal records before generalizing about lay initiative, institutional support, class, race, gender, or contemporary political influence.',
      'Resolve existing article/card differences in the Economic (62/60), Identity (25/35), and Foreign-policy (25/35) coordinates through explicit editorial review. These are magnitude discrepancies, not sign reversals; no score was recalibrated in this research pass.',
    ],
  },
  populist: {
    id: 'populist',
    title: 'Populism',
    canonicalLabel: 'Populism',
    aliases: ['populist politics', 'people-versus-elite politics', 'popularism'],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'Populism is treated as a thin or host-dependent political logic that claims to represent a morally unified people against a corrupt elite. It is not a complete economic programme, not automatically left or right, and not a synonym for popular participation, demagoguery, nationalism, authoritarianism, or opposition to every establishment.',
    timeScope: 'The modern label has nineteenth-century American and Russian-European histories, with major twentieth-century development in Latin America and later European, North American, and global forms. Older appeals to “the people” are political antecedents, not automatically populism under the modern concept.',
    geographicScope: 'Comparative and transnational. The entry gives particular attention to the United States, Latin America, Europe, and contemporary democratic theory, while treating party and country classifications as period-specific and evidence-dependent.',
    summary: 'A political style or thin ideology that divides society into a virtuous or authentic people and a corrupt or detached elite, then presents politics as the expression of the people’s general will. Populism can mobilize excluded groups and expose genuine failures of representation, but its claim to speak for one real people can conflict with pluralism, minority rights, independent institutions, media freedom, and peaceful opposition.',
    summaryCitations: citations(
      ['muddeKaltwasserPopulism', 'mullerWhatIsPopulism', 'laclauOnPopulistReason'],
      ['oxfordPopulismShortIntroduction', 'oxfordModernPopulism', 'annualReviewPoliticalTheoryPopulism', 'oxfordMullerPopulism'],
    ),
    dimensionInterpretations: {
      economic: {
        score: 10,
        label: 'Host-dependent; often anti-oligarchic',
        explanation: 'Populism does not determine ownership or redistribution. Left variants may attack concentrated wealth, austerity, and oligarchy; right variants may defend producers, welfare chauvinism, or national protection while accepting markets. The economic score must therefore be read from the host programme rather than from the populist label alone.',
        citations: citations(['muddeKaltwasserPopulism', 'laclauOnPopulistReason', 'keynesGeneralTheory'], ['oxfordModernPopulism', 'oxfordLatinAmericaPopulism', 'scieloLatinAmericanPopulism', 'sepSocialism']),
      },
      social: {
        score: -15,
        label: 'Mixed; conflict-centered and host-dependent',
        explanation: 'Populist movements can frame ordinary people as culturally traditional, economically abandoned, racially excluded, or socially emancipatory. The “people” may be inclusive or exclusionary, and social policy depends on the movement’s host ideology. Populism itself supplies antagonism and moral boundary-making more than a fixed position on family, gender, religion, or social change.',
        citations: citations(['muddeKaltwasserPopulism', 'mullerWhatIsPopulism', 'laclauOnPopulistReason'], ['cambridgeAnatomyPopulistIdeology', 'oxfordModernPopulism', 'sepNationalism']),
      },
      authority: {
        score: 45,
        label: 'Majoritarian and leader-mediated, with participatory variants',
        explanation: 'Populism elevates popular sovereignty and often presents leaders as direct interpreters of the people against parties, courts, experts, media, or bureaucracies. It can widen participation and force neglected demands into public debate, but its exclusive claim to represent the real people creates pressure against independent institutions, opposition, and internal party pluralism.',
        citations: citations(['mullerWhatIsPopulism', 'muddeKaltwasserPopulism', 'laclauOnPopulistReason'], ['oxfordPopulismShortIntroduction', 'oxfordMullerPopulism', 'coePopulismDemocracy', 'vdem']),
      },
      identity: {
        score: -55,
        label: 'Bounded people; nation, class, or movement identity',
        explanation: 'Populism constructs a collective “people,” but the boundary can be national, class-based, regional, ethnic, religious, Indigenous, or anti-colonial. Right populism often couples the people to nation and border; left populism may define the people against oligarchy or neoliberal power. The category’s identity score is therefore elevated here because political belonging is central, not because every populism is ethnonationalist.',
        citations: citations(['muddeKaltwasserPopulism', 'laclauOnPopulistReason', 'renanNation'], ['cambridgeAnatomyPopulistIdeology', 'sepNationalism', 'scieloLatinAmericanPopulism']),
      },
      foreign: {
        score: -15,
        label: 'Sovereigntist and variable',
        explanation: 'Populist movements often criticize distant institutions, global elites, foreign influence, or international constraints, but some use transnational solidarity or anti-imperialism. Foreign policy follows the host ideology: it may be protectionist, interventionist, non-interventionist, regionalist, or revolutionary.',
        citations: citations(['muddeKaltwasserPopulism', 'laclauOnPopulistReason', 'morgenthauRealism'], ['oxfordLatinAmericaPopulism', 'foreignPolicy', 'sepNationalism', 'scieloLatinAmericanPopulism']),
      },
      religion: {
        score: -25,
        label: 'Variable; often moralized popular identity',
        explanation: 'Populists may invoke religious majorities, civilizational tradition, secular popular sovereignty, or a moralized people without making religious law constitutive of government. Religious populism can overlap with nationalism and traditionalism, but populism is not automatically confessional or theocratic.',
        citations: citations(['mullerWhatIsPopulism', 'muddeKaltwasserPopulism', 'spinozaPolitical'], ['sepReligionPolitics', 'sepNationalism', 'oxfordModernPopulism']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Populism begins with a moralized division between “the people” and “the elite.” The people are presented as authentic, ordinary, productive, or sovereign; the elite are presented as corrupt, detached, treacherous, or captured by institutions that no longer serve the public. This language can identify real failures of representation, inequality, corruption, or administrative distance, but it also creates a problem: who gets to define the people, and what happens to citizens who disagree with the movement claiming to speak for them?',
            citations: citations(['muddeKaltwasserPopulism', 'mullerWhatIsPopulism'], ['oxfordPopulismShortIntroduction', 'oxfordModernPopulism', 'annualReviewPoliticalTheoryPopulism']),
          },
          {
            type: 'paragraph',
            text: 'Populism is therefore best treated as a thin or host-dependent ideology, political style, or logic rather than a full programme. It can attach to socialism, nationalism, conservatism, anti-colonialism, agrarian protest, religious traditionalism, or market protection. Classifying a movement requires separating its people–elite rhetoric from its economic policies, institutional practice, treatment of minorities, foreign policy, and relationship to constitutional checks.',
            citations: citations(['muddeKaltwasserPopulism', 'laclauOnPopulistReason', 'mullerWhatIsPopulism'], ['oxfordModernPopulism', 'cambridgeAnatomyPopulistIdeology', 'scieloLatinAmericanPopulism']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'The central claim is not merely that elites are bad or that citizens should participate. Many non-populist democrats criticize elites and defend popular sovereignty. Populism becomes analytically distinctive when it presents the people as a morally unified body and treats opponents, independent institutions, minority interests, or rival parties as illegitimate obstacles to the people’s authentic will. This exclusive representation can exist in opposition, government, or social movements, and its intensity varies.',
            citations: citations(['muddeKaltwasserPopulism', 'mullerWhatIsPopulism'], ['oxfordPopulismShortIntroduction', 'oxfordMullerPopulism', 'annualReviewPoliticalTheoryPopulism']),
          },
          {
            type: 'paragraph',
            text: 'Populist rhetoric commonly uses direct representation, plebiscitary appeals, referendums, rallies, leader-centered communication, social media, anti-corruption narratives, and attacks on professional intermediaries. These tools can reopen political agendas and mobilize people who feel ignored, but they can also bypass deliberation, simplify policy trade-offs, personalize accountability, and make compromise look like betrayal. The same movement may alternate between participatory mobilization and concentrated leadership.',
            citations: citations(['laclauOnPopulistReason', 'muddeKaltwasserPopulism', 'mullerWhatIsPopulism'], ['annualReviewPoliticalTheoryPopulism', 'coePopulismDemocracy', 'cambridgeAnatomyPopulistIdeology']),
          },
          {
            type: 'evidence-note',
            text: 'The label should not be applied as a synonym for “popular,” “anti-establishment,” “charismatic,” or “bad politics.” A careful classification records the movement’s definition of the people, the target named as elite, the groups excluded from authentic membership, the institutional safeguards it accepts, and its concrete record in office. Populism can be democratically corrective in opposition while becoming anti-pluralist when it claims a monopoly on legitimate representation.',
            citations: citations(['mullerWhatIsPopulism', 'muddeKaltwasserPopulism'], ['oxfordModernPopulism', 'oxfordMullerPopulism', 'coePopulismDemocracy', 'vdem']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Older antecedents: popular sovereignty, demagoguery, and the people as a political subject',
            text: 'Appeals to ordinary people against oligarchs, aristocrats, courts, or rulers appear in many political traditions. They are antecedents for populist rhetoric, not proof that ancient or medieval actors shared the modern concept. The modern category requires attention to mass politics, representative institutions, parties, media, and the particular construction of the people and elite.',
            citations: citations(['mullerWhatIsPopulism', 'laclauOnPopulistReason'], ['annualReviewPoliticalTheoryPopulism', 'oxfordModernPopulism']),
          },
          {
            period: 'Late nineteenth century: agrarian protest and the People’s Party in the United States',
            text: 'The United States People’s Party organized farmers and reformers against railroads, financiers, monopolies, and political corruption. The 1892 Omaha Platform combined popular anti-monopoly language with economic and institutional proposals. This case demonstrates that populism can carry an extensive reform programme, but it should not be projected unchanged onto later right- or left-wing movements.',
            citations: citations(['muddeKaltwasserPopulism'], ['americanYawpOmahaPlatform', 'oxfordPopulismShortIntroduction']),
          },
          {
            period: 'Late nineteenth–early twentieth centuries: Russian and European popular movements',
            text: 'The modern vocabulary of populism also developed through European debates about narodnik or people-oriented movements, mass democracy, socialism, nationalism, and the relationship between educated activists and ordinary communities. The comparative literature warns that these histories are not interchangeable: labels were translated across languages and political contexts, and “the people” could mean peasants, workers, the nation, or a moral community.',
            citations: citations(['laclauOnPopulistReason', 'muddeKaltwasserPopulism'], ['oxfordModernPopulism', 'annualReviewPoliticalTheoryPopulism', 'cambridgeAnatomyPopulistIdeology']),
          },
          {
            period: '1930s–1960s: classical Latin American populisms',
            text: 'Latin American scholarship often uses populism to analyze mass incorporation, charismatic or personalist leadership, labor organization, state development, nationalism, and social reform in cases such as Peronism in Argentina, Varguismo in Brazil, and Cardenismo in Mexico. These cases differ in democratic access, institutional constraint, class coalition, economic policy, and treatment of opposition; they should be compared rather than treated as one regime type.',
            citations: citations(['muddeKaltwasserPopulism', 'laclauOnPopulistReason'], ['scieloLatinAmericanPopulism', 'oxfordLatinAmericaPopulism', 'annualReviewPoliticalTheoryPopulism']),
          },
          {
            period: '1970s–1990s: crisis, neoliberalism, and neo-populism',
            text: 'Economic crisis, party-system breakdown, debt, inflation, military rule, democratization, and market reform generated new debates about populist leadership and representation. In Latin America, scholarship distinguished older state-led mass incorporation from neo-populist or outsider projects that combined personalism with market-oriented reform. The category remained contested because similar anti-party rhetoric could accompany very different social and economic policies.',
            citations: citations(['muddeKaltwasserPopulism', 'mullerWhatIsPopulism'], ['oxfordLatinAmericaPopulism', 'scieloLatinAmericanPopulism', 'oxfordModernPopulism']),
          },
          {
            period: '1990s–2010s: European right populism and left populist responses',
            text: 'In Europe, populist parties and movements increasingly linked anti-elite claims to immigration, national sovereignty, European integration, cultural conflict, or law-and-order concerns. Left populist responses instead framed the people against financial power, austerity, or oligarchy. The comparison shows why populism does not fix the social or economic axis: its host ideology supplies the policy direction.',
            citations: citations(['muddeKaltwasserPopulism', 'mullerWhatIsPopulism', 'laclauOnPopulistReason'], ['oxfordPopulismShortIntroduction', 'sepNationalism', 'cambridgeAnatomyPopulistIdeology', 'oxfordModernPopulism']),
          },
          {
            period: 'Contemporary digital and executive populism',
            text: 'Contemporary populism uses direct leader–audience communication, digital platforms, anti-corruption claims, referendums, plebiscitary mandates, and attacks on intermediaries. Social media can lower barriers to participation while also amplifying conspiratorial narratives, harassment, disinformation, and rapid personalization. The effect on democracy is empirical and country-specific: the key questions are whether opposition remains legitimate, institutions remain independent, and rights remain enforceable.',
            citations: citations(['mullerWhatIsPopulism', 'muddeKaltwasserPopulism'], ['coePopulismDemocracy', 'oxfordMullerPopulism', 'vdem', 'cambridgeAnatomyPopulistIdeology']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Agrarian and anti-monopoly populism',
                distinction: 'Defines the people through farmers, producers, debtors, or ordinary citizens opposed to monopolies, financiers, railroads, or concentrated economic power.',
                relation: 'The 1892 People’s Party illustrates that populism can support institutional reform and economic regulation without being a contemporary nationalist or authoritarian movement.',
                citations: citations(['muddeKaltwasserPopulism'], ['americanYawpOmahaPlatform', 'oxfordPopulismShortIntroduction']),
              },
              {
                label: 'Left or inclusionary populism',
                distinction: 'Constructs the people through workers, excluded citizens, the poor, or a broad democratic majority opposed to oligarchy, financial power, austerity, or entrenched privilege.',
                relation: 'Can widen participation and redistribute power, but its claim to embody the whole people may still marginalize internal minorities or attack independent institutions.',
                citations: citations(['laclauOnPopulistReason', 'mullerWhatIsPopulism'], ['oxfordLatinAmericaPopulism', 'annualReviewPoliticalTheoryPopulism', 'oxfordModernPopulism']),
              },
              {
                label: 'Right or exclusionary populism',
                distinction: 'Defines the authentic people through national, cultural, ethnic, religious, or “native” membership and targets elites, migrants, minorities, or cosmopolitan institutions.',
                relation: 'Often raises the identity and authority scores, but nationalism, ethnic exclusion, and authoritarianism must be evidenced separately rather than assumed from populism alone.',
                citations: citations(['muddeKaltwasserPopulism', 'mullerWhatIsPopulism', 'renanNation'], ['sepNationalism', 'cambridgeAnatomyPopulistIdeology', 'coePopulismDemocracy']),
              },
              {
                label: 'Personalist or leader-centered populism',
                distinction: 'A leader claims direct access to the people’s will and uses rallies, media, plebiscites, or executive mandates to bypass established parties and intermediaries.',
                relation: 'Personal leadership is common but not necessary; a movement can be populist through discourse and organization without one dominant leader.',
                citations: citations(['mullerWhatIsPopulism', 'muddeKaltwasserPopulism'], ['oxfordPopulismShortIntroduction', 'oxfordMullerPopulism', 'cambridgeAnatomyPopulistIdeology']),
              },
              {
                label: 'Movement and participatory populism',
                distinction: 'Emphasizes assemblies, referendums, occupations, horizontal networks, grassroots campaigns, or direct participation against professionalized representation.',
                relation: 'Can correct party and institutional distance, but participatory form alone does not guarantee pluralism, minority protection, internal democracy, or accurate policy reasoning.',
                citations: citations(['laclauOnPopulistReason', 'muddeKaltwasserPopulism'], ['annualReviewPoliticalTheoryPopulism', 'coePopulismDemocracy', 'oxfordModernPopulism']),
              },
              {
                label: 'Populist nationalism',
                distinction: 'Combines people-versus-elite rhetoric with national sovereignty, borders, cultural homogeneity, or civilizational identity.',
                relation: 'A compound of populism and nationalism, not a synonym: the people may instead be defined by class, region, religion, or anti-colonial solidarity.',
                citations: citations(['muddeKaltwasserPopulism', 'renanNation'], ['sepNationalism', 'scieloLatinAmericanPopulism', 'oxfordModernPopulism']),
              },
              {
                label: 'Populism and liberal democracy',
                distinction: 'Populism appeals to popular sovereignty and can expose representative failures, while liberal democracy adds pluralism, rights, independent courts, opposition, media freedom, and institutional limits.',
                relation: 'The relationship is ambivalent: populist mobilization may democratize agendas in opposition, but exclusive representation becomes anti-pluralist when in power.',
                citations: citations(['mullerWhatIsPopulism', 'muddeKaltwasserPopulism'], ['oxfordMullerPopulism', 'annualReviewPoliticalTheoryPopulism', 'coePopulismDemocracy', 'vdem']),
              },
              {
                label: 'Populism versus demagoguery',
                distinction: 'Demagoguery describes manipulative or inflammatory appeals; populism is a more specific claim that a morally unified people is opposed to a corrupt elite and should directly govern.',
                relation: 'A populist can use demagoguery, but the terms should not be collapsed: criticism of an elite or emotional rhetoric alone is insufficient for a populist classification.',
                citations: citations(['muddeKaltwasserPopulism', 'mullerWhatIsPopulism'], ['oxfordModernPopulism', 'annualReviewPoliticalTheoryPopulism']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'People, movements, and historical examples',
        blocks: [
          {
            type: 'people',
            entries: [
              {
                name: 'Cas Mudde and Cristóbal Rovira Kaltwasser',
                role: 'Comparative scholars associated with the thin-centered or ideational approach to populism and its left/right host variants.',
                caveat: 'Their conceptual framework is influential but contested; other approaches emphasize discourse, strategy, political style, or democratic representation.',
                citations: citations(['muddeKaltwasserPopulism'], ['oxfordPopulismShortIntroduction', 'oxfordModernPopulism']),
              },
              {
                name: 'Jan-Werner Müller',
                role: 'Political theorist who emphasizes populism’s claim to exclusive moral representation of the real people and its tension with pluralism.',
                caveat: 'Müller’s critique is one theoretical lens. Historical cases may contain participatory, redistributive, or corrective dimensions that require separate evaluation.',
                citations: citations(['mullerWhatIsPopulism'], ['oxfordMullerPopulism', 'oxfordModernPopulism']),
              },
              {
                name: 'Ernesto Laclau',
                role: 'Political theorist who analyzed populist articulation, chains of demands, antagonism, and the construction of a popular subject.',
                caveat: 'Laclau’s post-Marxist theory is a conceptual approach, not a neutral classification of every party called populist and not evidence that populism has one economic policy.',
                citations: citations(['laclauOnPopulistReason'], ['annualReviewPoliticalTheoryPopulism', 'oxfordLatinAmericaPopulism']),
              },
              {
                name: 'The People’s Party / agrarian reformers',
                role: 'Historical actors who used anti-monopoly and producer-versus-financier language in the United States during the 1890s.',
                caveat: 'The coalition and programme were historically specific; later American and global movements should not be treated as direct continuations without evidence.',
                citations: citations(['muddeKaltwasserPopulism'], ['americanYawpOmahaPlatform', 'oxfordPopulismShortIntroduction']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'People’s Party and the Omaha Platform',
                period: 'United States, especially 1892',
                match: 'Agrarian and anti-monopoly movement that framed ordinary producers against concentrated economic and political power while proposing institutional and economic reforms.',
                caveat: 'The platform included its own exclusions and historical limits; it is an example of a period-specific populist coalition, not a universal democratic or economic model.',
                citations: citations(['muddeKaltwasserPopulism'], ['americanYawpOmahaPlatform', 'oxfordPopulismShortIntroduction']),
              },
              {
                name: 'Classical Latin American populism',
                period: 'Argentina, Brazil, Mexico, and other cases, especially 1930s–1960s',
                match: 'Mass incorporation, labor politics, national development, charismatic leadership, and social reform are studied through cases including Peronism, Varguismo, and Cardenismo.',
                caveat: 'The cases differ in democratic procedures, labor autonomy, state capacity, class coalitions, economic policy, and treatment of opposition; “Latin American populism” is a comparative field, not one regime.',
                citations: citations(['muddeKaltwasserPopulism', 'laclauOnPopulistReason'], ['scieloLatinAmericanPopulism', 'oxfordLatinAmericaPopulism']),
              },
              {
                name: 'Left populist and anti-austerity movements',
                period: 'Europe and Latin America, late twentieth century to present; case-specific',
                match: 'Movements that define a democratic people against financial power, austerity, oligarchy, established parties, or technocratic institutions.',
                caveat: 'The label does not settle whether a movement is economically socialist, socially progressive, institutionally pluralist, or successful in government; party programmes and practice must be assessed separately.',
                citations: citations(['laclauOnPopulistReason', 'mullerWhatIsPopulism'], ['oxfordLatinAmericaPopulism', 'annualReviewPoliticalTheoryPopulism', 'oxfordModernPopulism']),
              },
              {
                name: 'Right populist and national-sovereigntist movements',
                period: 'Europe and other regions, late twentieth century to present; case-specific',
                match: 'Movements that combine anti-elite claims with national, cultural, religious, border, or anti-immigration definitions of the authentic people.',
                caveat: 'Populism, nationalism, nativism, conservatism, and authoritarianism overlap in some cases but are analytically distinct; each movement requires evidence about rights, minorities, institutions, and violence.',
                citations: citations(['muddeKaltwasserPopulism', 'mullerWhatIsPopulism', 'renanNation'], ['sepNationalism', 'cambridgeAnatomyPopulistIdeology', 'coePopulismDemocracy']),
              },
              {
                name: 'Contemporary populist governance',
                period: 'Country- and government-specific',
                match: 'Cases in which elected leaders or parties claim a direct mandate from the real people and challenge courts, media, opposition parties, bureaucracies, or constitutional limits.',
                caveat: 'The category is not a list of current country verdicts. Classification requires dated evidence about executive power, opposition rights, media freedom, judicial independence, elections, corruption, and policy outcomes.',
                citations: citations(['mullerWhatIsPopulism', 'muddeKaltwasserPopulism'], ['coePopulismDemocracy', 'oxfordMullerPopulism', 'vdem']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'national-conservative', relation: 'may supply the host ideology for right populism, but conservatism and national sovereignty do not automatically imply a people-versus-elite claim' },
              { id: 'ethnic-nationalist', relation: 'can overlap when the authentic people is defined by ancestry or ethnicity, but populism can be civic, class-based, religious, or anti-colonial' },
              { id: 'democratic-socialist', relation: 'may share anti-oligarchic and redistributive aims in left populism, but democratic socialism is a fuller economic and institutional programme' },
              { id: 'social-democratic', relation: 'can respond to similar inequality and representation problems, but social democracy relies on party pluralism and does not require moral unity of the people' },
              { id: 'liberal-constitutionalist', relation: 'shares popular sovereignty and elections, but liberal constitutionalism protects pluralism, rights, courts, opposition, and institutional limits that populism may challenge' },
              { id: 'authoritarian-collectivist', relation: 'may converge in leader or party concentration, but authoritarian collectivism is defined by state and economic organization rather than people-versus-elite rhetoric' },
              { id: 'religious-traditionalist', relation: 'may provide a moral or confessional definition of the authentic people, but populism is not inherently religious or traditionalist' },
              { id: 'anti-colonial-liberation', relation: 'can share popular sovereignty and anti-elite or anti-imperial language, but liberation movements need not be populist and populism need not oppose colonial domination' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'A first criticism concerns conceptual vagueness. Populism is used for agrarian reformers, left parties, right nationalist movements, personalist presidents, social movements, anti-corruption campaigns, and media styles. If the term is stretched to cover every appeal to ordinary people or every criticism of elites, it loses explanatory value. The minimum evidence should include a morally unified people, a corrupt or illegitimate elite, and a claim to express the people’s authentic will.',
            citations: citations(['muddeKaltwasserPopulism', 'mullerWhatIsPopulism', 'laclauOnPopulistReason'], ['oxfordModernPopulism', 'annualReviewPoliticalTheoryPopulism', 'cambridgeAnatomyPopulistIdeology']),
          },
          {
            type: 'paragraph',
            text: 'A second criticism concerns the people’s internal diversity. No electorate is one body: class, race, gender, religion, region, disability, migration status, ideology, and generation create real differences. A movement that claims to speak for the authentic people may silence minorities, opposition voters, dissident journalists, independent associations, or citizens who do not fit its national or cultural boundary.',
            citations: citations(['mullerWhatIsPopulism', 'muddeKaltwasserPopulism'], ['oxfordMullerPopulism', 'cambridgeAnatomyPopulistIdeology', 'coePopulismDemocracy', 'sepNationalism']),
          },
          {
            type: 'paragraph',
            text: 'A third criticism concerns institutional accountability. Courts, legislatures, electoral commissions, auditors, public broadcasters, universities, civil society, and opposition parties can be distant or captured, but they can also protect rights and expose abuses. Treating every intermediary as an enemy of the people makes it difficult to correct executive error, investigate corruption, or transfer power peacefully. Democratic reform should therefore improve participation while preserving independent checks.',
            citations: citations(['mullerWhatIsPopulism', 'muddeKaltwasserPopulism'], ['coePopulismDemocracy', 'oxfordMullerPopulism', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'A fourth criticism concerns leader mediation and policy complexity. Populists often promise to restore direct control, but modern states require administration, expertise, budgets, courts, and negotiated implementation. When a leader claims to embody the people, failures may be blamed on conspirators, minorities, foreign actors, or bureaucratic sabotage rather than corrected through open evidence. The safeguard is not technocracy without accountability; it is public reasoning, transparent administration, contestable expertise, and effective oversight.',
            citations: citations(['mullerWhatIsPopulism', 'laclauOnPopulistReason'], ['annualReviewPoliticalTheoryPopulism', 'coePopulismDemocracy', 'oxfordModernPopulism']),
          },
          {
            type: 'paragraph',
            text: 'Finally, populist movements can express genuine grievances about inequality, corruption, party closure, economic insecurity, colonial or regional domination, and the distance between citizens and institutions. Dismissing every populist voter as irrational or every anti-elite claim as authoritarian can protect the very failures that generated mobilization. The proper classification keeps both sides visible: the social complaint may be justified even when the movement’s exclusive representation, exclusionary identity, or institutional conduct is not.',
            citations: citations(['muddeKaltwasserPopulism', 'mullerWhatIsPopulism', 'laclauOnPopulistReason'], ['oxfordPopulismShortIntroduction', 'annualReviewPoliticalTheoryPopulism', 'scieloLatinAmericanPopulism', 'coePopulismDemocracy']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['muddeKaltwasserPopulism', 'mullerWhatIsPopulism', 'laclauOnPopulistReason', 'renanNation', 'keynesGeneralTheory', 'morgenthauRealism', 'spinozaPolitical', 'marxEngelsManifesto'],
      researchSourceIds: ['oxfordPopulismShortIntroduction', 'oxfordModernPopulism', 'annualReviewPoliticalTheoryPopulism', 'oxfordMullerPopulism', 'cambridgeAnatomyPopulistIdeology', 'scieloLatinAmericanPopulism', 'oxfordLatinAmericaPopulism', 'americanYawpOmahaPlatform', 'coePopulismDemocracy', 'sepNationalism', 'sepReligionPolitics', 'sepSocialism', 'foreignPolicy', 'vdem'],
      editorialNote: 'The entry treats populism as a thin or host-dependent political logic and distinguishes it from popular participation, demagoguery, nationalism, conservatism, socialism, and authoritarianism. It records both democratic-corrective and anti-pluralist possibilities and avoids current country verdicts without dated institutional evidence.',
    },
    researchGaps: [
      'Add original-language research in Spanish, Portuguese, French, German, Italian, Russian, and other relevant languages on populist vocabularies, party programmes, media, and movement organization.',
      'Expand primary-source comparison of the U.S. People’s Party, Russian narodnik traditions, Peronism, Varguismo, Cardenismo, European agrarian parties, anti-colonial movements, and contemporary left and right populist programmes.',
      'Separate populist ideology, political style, strategy, discourse, organization, voter attitudes, and regime effects in the content model rather than treating them as one measurable variable.',
      'Add country-specific evidence on courts, legislatures, elections, media ownership, opposition, corruption control, civil society, minority rights, and executive constraints before classifying contemporary governments.',
      'Research populism’s relationship to religion, Christian nationalism, Islamic politics, secularism, Indigenous sovereignty, race, caste, migration, gender, and digital disinformation without assuming one direction of causality.',
      'Compare populist participation and direct-democratic reforms with deliberative, representative, liberal-constitutional, and consociational alternatives, including their own failures of inclusion and accountability.',
      'Test the six-dimensional profile against expert-coded party data and historical programmes while keeping the host ideology visible; no single left/right score should stand in for populism’s variable economic and social content.',
    ],
  },
  'centrist-pragmatist': {
    id: 'centrist-pragmatist',
    title: 'Centrist / pragmatic pluralist',
    canonicalLabel: 'Centrist / pragmatic pluralist',
    aliases: ['centrism', 'pragmatic centrism', 'moderate pluralism', 'consensus politics', 'Third Way'],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'Centrism is treated as a family of positions and governing practices that seek moderation, compromise, evidence-led problem-solving, and pluralist institutions. It is not automatically the numerical midpoint, a coherent ideology, political neutrality, technocracy, or the Third Way; centrist actors can differ substantially by issue, country, class coalition, and institutional context.',
    timeScope: 'Modern meanings developed with liberal constitutionalism, mass parties, industrial democracy, welfare states, consensus institutions, and twentieth-century coalition politics. The late twentieth-century Third Way is one recent centre-left variant, not the definition of centrism.',
    geographicScope: 'Comparative and transnational, with important British, European, North American, and consensus-democratic cases. “Centre” is positional: the same programme may be centrist in one party system and left or right in another.',
    summary: 'A mixed political orientation favoring incremental reform, negotiated compromise, evidence-led administration, pluralist citizenship, and policy trade-offs over ideological purity. Centrist pragmatism can combine markets with public provision, social reform with institutional caution, national and international commitments, and diplomacy with bounded security policy; its main risks are status-quo bias, managerial insulation, weak contestation, and presenting political choices as merely technical.',
    summaryCitations: citations(
      ['lijphartPatternsDemocracy', 'giddensThirdWay', 'millOnLiberty', 'keynesGeneralTheory'],
      ['oxfordPoliticalCentrism', 'lijphartConsensusDemocracy', 'sepPragmatism', 'sepDemocracy', 'oxfordThirdWayConversion'],
    ),
    dimensionInterpretations: {
      economic: {
        score: 0,
        label: 'Mixed economy and policy pragmatism',
        explanation: 'Markets, taxation, regulation, social insurance, public services, and public ownership are treated as instruments whose scope depends on evidence and social consequences. Centrist economics may lean market-liberal, social-liberal, social-democratic, or Third Way; the orientation does not specify a single distributional settlement.',
        citations: citations(['keynesGeneralTheory', 'giddensThirdWay', 'millOnLiberty'], ['oxfordPoliticalCentrism', 'oxfordThirdWayConversion', 'sepPragmatism']),
      },
      social: {
        score: 0,
        label: 'Gradual reform and tolerance of disagreement',
        explanation: 'Centrists often prefer incremental change, negotiated rights expansion, and accommodation among social groups rather than rapid cultural reversal or total transformation. This can support liberal equality and social reform, but it can also delay justice or treat existing arrangements as the neutral baseline.',
        citations: citations(['millOnLiberty', 'tocquevilleDemocracy'], ['oxfordPoliticalCentrism', 'sepPragmatism', 'sepDemocracy', 'oxfordPluralismConsensus']),
      },
      authority: {
        score: 8,
        label: 'Lawful, competent, and reviewable administration',
        explanation: 'Public authority is accepted when it is constitutional, proportionate, administratively capable, transparent, and open to review. Centrist pragmatism can value expertise and institutional continuity, but a democratic version must preserve contestation, participation, independent oversight, and the possibility of changing the policy framework itself.',
        citations: citations(['lijphartPatternsDemocracy', 'millOnLiberty', 'tocquevilleDemocracy'], ['lijphartConsensusDemocracy', 'sepDemocracy', 'coeDemocraticGovernance', 'sepPragmatism']),
      },
      identity: {
        score: 0,
        label: 'Plural civic belonging with practical cooperation',
        explanation: 'National attachment, constitutional citizenship, migration, regional cooperation, and international institutions are balanced pragmatically. The centrist profile favors inclusive membership and civic compromise, but the actual identity settlement can be assimilationist, cosmopolitan, patriotic, or quietly majoritarian depending on the host party system.',
        citations: citations(['millOnLiberty', 'tocquevilleDemocracy', 'kantPerpetualPeace'], ['oxfordPoliticalCentrism', 'sepDemocracy', 'coeDemocraticGovernance']),
      },
      foreign: {
        score: 15,
        label: 'Diplomatic cooperation with bounded security',
        explanation: 'Diplomacy, alliances, international law, trade, and negotiated institutions are preferred, while force is treated as a limited instrument requiring clear objectives, legal authority, and proportionality. Centrist foreign policy can still support intervention or defense; moderation does not mean pacifism or non-alignment.',
        citations: citations(['kantPerpetualPeace', 'morgenthauRealism', 'millOnLiberty'], ['foreignPolicy', 'sepPragmatism', 'oxfordPoliticalCentrism']),
      },
      religion: {
        score: 10,
        label: 'Secular-pluralist and accommodationist',
        explanation: 'Religious and nonreligious citizens are treated as participants in a plural public sphere, with public law justified through shared civic reasons rather than one confessional authority. Centrist accommodation can protect religious practice while avoiding religious government, although compromise may leave unequal institutional privileges unexamined.',
        citations: citations(['lockeLetterToleration', 'millOnLiberty', 'tocquevilleDemocracy'], ['sepReligionPolitics', 'sepDemocracy', 'oxfordPluralismConsensus']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'The political centre is not simply the average of left and right. It can mean a location in a party system, a set of values such as moderation and pluralism, a coalition strategy, a governing style, or a theory that practical arrangements are preferable to ideological purity. These meanings overlap but should not be collapsed. A centrist party may be economically market-oriented, socially liberal, culturally conservative, internationalist, nationalist, technocratic, or welfare-oriented depending on its context.',
            citations: citations(['millOnLiberty', 'keynesGeneralTheory'], ['oxfordPoliticalCentrism', 'sepPragmatism', 'sepDemocracy']),
          },
          {
            type: 'paragraph',
            text: 'Pragmatism adds a method: policies are judged by consequences, revisability, institutional learning, and their ability to solve problems under real conditions. Consensus politics adds an institutional question: how can divided societies share power without making every disagreement a winner-take-all conflict? Neither approach eliminates values or power. Compromise can be democratic accommodation, or it can become elite closure that prevents citizens from challenging the settlement.',
            citations: citations(['lijphartPatternsDemocracy', 'millOnLiberty'], ['lijphartConsensusDemocracy', 'sepPragmatism', 'oxfordPluralismConsensus', 'coeDemocraticGovernance']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'Centrists often frame politics as the management of competing goods: growth and redistribution, liberty and security, national capacity and international cooperation, social reform and institutional continuity, expertise and democratic control. This can produce practical policy combinations that do not fit a single ideological camp. It can also obscure distributional choices when “balance” treats unequal interests as equally situated or makes the existing settlement appear naturally reasonable.',
            citations: citations(['keynesGeneralTheory', 'millOnLiberty', 'tocquevilleDemocracy'], ['oxfordPoliticalCentrism', 'sepPragmatism', 'oxfordPluralismConsensus']),
          },
          {
            type: 'paragraph',
            text: 'The institutional form may be majoritarian moderation, coalition government, consociational power-sharing, social partnership, independent agencies, negotiated federalism, or a centre-left Third Way. Consensus democracy and centrism are related but not identical: a political system can share power among parties that are far apart, while a centrist party can pursue majoritarian government. The relevant evidence is the actual distribution of power, representation, vetoes, accountability, and policy outcomes.',
            citations: citations(['lijphartPatternsDemocracy'], ['lijphartConsensusDemocracy', 'oxfordPoliticalCentrism', 'sepDemocracy']),
          },
          {
            type: 'evidence-note',
            text: 'This profile is deliberately didactic and near the midpoint on several dimensions. It does not claim that moderation is always good, that extremes are always bad, or that evidence eliminates political judgment. A democratic pragmatic orientation still needs substantive commitments to equal citizenship, rights, accountability, social repair, and the ability of citizens to reject the policy consensus.',
            citations: citations(['millOnLiberty', 'keynesGeneralTheory'], ['sepPragmatism', 'sepDemocracy', 'coeDemocraticGovernance', 'oxfordPoliticalCentrism']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Older antecedents: mixed government, prudence, and practical judgment',
            text: 'Arguments for mixed constitutions, moderation, prudence, civic compromise, and attention to circumstances precede the modern label. These sources are antecedents for centrist reasoning, not evidence that earlier thinkers belonged to a modern centre. The contemporary category depends on parties, mass electorates, bureaucratic states, and the changing location of ideological competition.',
            citations: citations(['tocquevilleDemocracy', 'millOnLiberty'], ['sepDemocracy', 'sepPragmatism']),
          },
          {
            period: 'Nineteenth century: liberal centres and the management of mass politics',
            text: 'Industrialization, suffrage expansion, labor organization, nationalism, and constitutional reform created pressures between laissez-faire liberalism, socialism, conservatism, and democratic inclusion. Moderate liberal and reformist coalitions attempted to preserve constitutional order while adapting institutions to new social demands. What counted as the centre depended on which groups were enfranchised and which inequalities remained outside the settlement.',
            citations: citations(['millOnLiberty', 'tocquevilleDemocracy', 'keynesGeneralTheory'], ['oxfordPoliticalCentrism', 'sepDemocracy', 'sepPragmatism']),
          },
          {
            period: 'Early twentieth century: social reform, expertise, and coalition institutions',
            text: 'Economic crisis, labor conflict, mass parties, and administrative expansion encouraged combinations of social insurance, regulation, public expertise, and constitutional government. Moderation could mean reforming capitalism to preserve democratic stability, or managing conflict through elite bargaining. The distinction matters because social protection can broaden citizenship while technocratic administration can narrow public control.',
            citations: citations(['keynesGeneralTheory', 'millOnLiberty'], ['oxfordPoliticalCentrism', 'sepPragmatism', 'sepDemocracy']),
          },
          {
            period: '1945–1970s: postwar consensus, social-market settlements, and power-sharing',
            text: 'Postwar democracies developed welfare states, mixed economies, coalition practices, social partnerships, and constitutional settlements intended to prevent a return to depression, fascism, and civil conflict. Consensus and consociational institutions gave multiple groups access to government, while Christian-democratic, social-democratic, liberal, and conservative parties often negotiated durable compromises. These settlements were inclusive in some dimensions and exclusionary in others, especially around empire, gender, migration, and class power.',
            citations: citations(['lijphartPatternsDemocracy', 'keynesGeneralTheory'], ['lijphartConsensusDemocracy', 'oxfordPoliticalCentrism', 'sepDemocracy']),
          },
          {
            period: '1970s–1990s: crisis of the postwar settlement and the Third Way',
            text: 'Stagflation, fiscal pressure, globalization, deindustrialization, and criticism of bureaucracy challenged postwar social democracy and state-led policy. Anthony Giddens’s Third Way presented a centre-left attempt to combine market compatibility, social investment, welfare reform, globalization, and democratic modernization. Critics argued that Third Way governments accepted too much market inequality, weakened party contestation, and converted political choices into managerial adaptation.',
            citations: citations(['giddensThirdWay', 'keynesGeneralTheory'], ['wileyThirdWayGiddens', 'oxfordThirdWayConversion', 'oxfordPoliticalCentrism']),
          },
          {
            period: '1990s–2010s: technocracy, coalition governance, and democratic distrust',
            text: 'Centrist parties and institutions increasingly relied on experts, independent regulators, coalition bargaining, evidence-based administration, and global economic coordination. These tools could stabilize policy and reduce winner-take-all conflict, but they also created distance from citizens, weakened mass-party organization, and narrowed the range of alternatives considered governable. The financial crisis and austerity debates intensified questions about who bears the costs of pragmatic compromise.',
            citations: citations(['giddensThirdWay', 'lijphartPatternsDemocracy'], ['oxfordThirdWayConversion', 'lijphartConsensusDemocracy', 'oxfordPluralismConsensus', 'coeDemocraticGovernance']),
          },
          {
            period: 'Present: polarization, new coalitions, and the contested centre',
            text: 'Contemporary centrism operates amid polarization, populist challenge, identity conflict, climate risk, migration, technological change, and distrust of established parties. Some centrist projects defend liberal-democratic institutions and seek cross-party problem-solving; others appear as status-quo coalitions that offer moderation without redistribution or meaningful participation. The current centre should therefore be evaluated by its programme, constituency, institutional openness, and record rather than by its self-description.',
            citations: citations(['millOnLiberty', 'giddensThirdWay'], ['oxfordPoliticalCentrism', 'oxfordPluralismConsensus', 'sepDemocracy', 'coeDemocraticGovernance']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Moderate liberal centre',
                distinction: 'Combines constitutional rights, market institutions, gradual social reform, civil liberties, and negotiated public policy.',
                relation: 'A common centrist form, but it can move toward classical liberalism or social liberalism depending on welfare, regulation, and equality commitments.',
                citations: citations(['millOnLiberty', 'lockeSecondTreatise'], ['oxfordPoliticalCentrism', 'sepDemocracy', 'sepPragmatism']),
              },
              {
                label: 'Consensus and coalition centrism',
                distinction: 'Seeks accommodation among parties, regions, linguistic or religious groups, and social interests through coalition, federalism, power-sharing, or negotiated policy.',
                relation: 'Related to but distinct from ideological centrism: consensus institutions can include parties that are left, right, nationalist, or confessional.',
                citations: citations(['lijphartPatternsDemocracy'], ['lijphartConsensusDemocracy', 'sepDemocracy', 'coeDemocraticGovernance']),
              },
              {
                label: 'Pragmatic pluralism',
                distinction: 'Treats policy as revisable inquiry and values experimentation, learning, public reasoning, and workable accommodation among people who disagree.',
                relation: 'A method and democratic ethos rather than a fixed position on taxation, ownership, family, borders, or foreign policy.',
                citations: citations(['millOnLiberty', 'tocquevilleDemocracy'], ['sepPragmatism', 'oxfordPluralismConsensus', 'sepDemocracy']),
              },
              {
                label: 'Technocratic or managerial centre',
                distinction: 'Emphasizes expertise, administration, independent agencies, measurable outcomes, fiscal credibility, and insulation from short-term partisan pressure.',
                relation: 'Can improve competence and continuity but risks treating contestable distributional choices as technical facts and weakening democratic oversight.',
                citations: citations(['keynesGeneralTheory', 'millOnLiberty'], ['oxfordPoliticalCentrism', 'coeDemocraticGovernance', 'sepDemocracy']),
              },
              {
                label: 'Centre-left Third Way',
                distinction: 'Seeks to combine market economies, social investment, welfare reform, equal opportunity, globalization, and democratic modernization rather than traditional state ownership.',
                relation: 'A specific late twentieth-century project, not a synonym for all centrism and not politically neutral; critics dispute its distributional consequences and reduced contestation.',
                citations: citations(['giddensThirdWay', 'keynesGeneralTheory'], ['wileyThirdWayGiddens', 'oxfordThirdWayConversion']),
              },
              {
                label: 'Market-friendly or centre-right moderation',
                distinction: 'Combines private enterprise, fiscal restraint, institutional continuity, gradual reform, and selective social provision or public investment.',
                relation: 'May overlap with liberal conservatism or Christian democracy; the centre label does not resolve social, national, or welfare questions.',
                citations: citations(['keynesGeneralTheory', 'millOnLiberty'], ['oxfordPoliticalCentrism', 'sepPragmatism']),
              },
              {
                label: 'Status-quo centrism',
                distinction: 'Defines moderation as preserving existing institutions and avoiding disruptive change, even when existing inequalities or exclusions remain substantial.',
                relation: 'The main critical boundary: pragmatism can support reform, while status-quo centrism may use neutrality language to protect established power.',
                citations: citations(['millOnLiberty', 'tocquevilleDemocracy'], ['oxfordPoliticalCentrism', 'oxfordPluralismConsensus', 'sepDemocracy']),
              },
              {
                label: 'Centrism versus radical pluralism',
                distinction: 'Centrism seeks negotiated middle ground; radical pluralism accepts deep conflict and tries to make disagreement politically productive without demanding total consensus.',
                relation: 'Consensus can stabilize democracy but suppress conflict; pluralism can expose power but make compromise difficult. Neither is automatically more democratic.',
                citations: citations(['millOnLiberty', 'lijphartPatternsDemocracy'], ['oxfordPluralismConsensus', 'lijphartConsensusDemocracy', 'sepDemocracy']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'People, movements, and historical examples',
        blocks: [
          {
            type: 'people',
            entries: [
              {
                name: 'John Stuart Mill',
                role: 'Liberal reference for open disagreement, individual liberty, practical reasoning, and the danger of suppressing minority views.',
                caveat: 'Mill is not simply a centrist and held positions that do not map onto contemporary moderation; he is used as a pluralist reference point.',
                citations: citations(['millOnLiberty'], ['sepPragmatism', 'sepDemocracy']),
              },
              {
                name: 'Alexis de Tocqueville',
                role: 'Comparative analyst of democratic habits, associations, equality, centralization, and institutional trade-offs.',
                caveat: 'Tocqueville’s historical analyses include exclusions and tensions around empire, race, and democracy; they do not provide a complete centrist programme.',
                citations: citations(['tocquevilleDemocracy'], ['sepDemocracy', 'oxfordPoliticalCentrism']),
              },
              {
                name: 'Arend Lijphart',
                role: 'Comparative scholar of majoritarian and consensus democracy, accommodation, coalition, federalism, and power-sharing.',
                caveat: 'Institutional consensus is not the same as ideological centrism, and power-sharing can stabilize democracy while also producing elite bargains or rigid veto structures.',
                citations: citations(['lijphartPatternsDemocracy'], ['lijphartConsensusDemocracy', 'sepDemocracy']),
              },
              {
                name: 'Anthony Giddens',
                role: 'Sociologist and theorist of the centre-left Third Way and the modernization of social democracy.',
                caveat: 'The Third Way was a specific historical project with contested outcomes, not a neutral definition of centrism or a settled consensus about welfare and markets.',
                citations: citations(['giddensThirdWay'], ['wileyThirdWayGiddens', 'oxfordThirdWayConversion']),
              },
            ],
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'Consensus-democratic settlements',
                period: 'Western Europe and other divided democracies, especially postwar twentieth century',
                match: 'Coalition, accommodation, proportional representation, federalism, or social partnership used to include multiple groups and reduce winner-take-all conflict.',
                caveat: 'Consensus institutions vary widely and can exclude outsiders, empower party elites, or make responsibility difficult to trace; no country is an exact centrist match by institutional form alone.',
                citations: citations(['lijphartPatternsDemocracy'], ['lijphartConsensusDemocracy', 'sepDemocracy', 'coeDemocraticGovernance']),
              },
              {
                name: 'Postwar mixed-economy compromise',
                period: 'Europe and North America, especially 1945–1970s',
                match: 'Markets, private enterprise, welfare provision, public investment, collective bargaining, and constitutional democracy combined in different national settlements.',
                caveat: 'The settlement was contested and uneven, with exclusions based on class, gender, race, colonial status, and migration; it should not be romanticized as pure moderation.',
                citations: citations(['keynesGeneralTheory', 'millOnLiberty'], ['oxfordPoliticalCentrism', 'sepDemocracy', 'sepPragmatism']),
              },
              {
                name: 'Centre-left Third Way projects',
                period: 'Britain, Europe, and related party systems, especially 1990s–2000s',
                match: 'A specific attempt to combine social investment, market compatibility, welfare reform, globalization, and liberal social policy after the crisis of traditional social democracy.',
                caveat: 'The projects differed by country and are contested over privatization, deregulation, inequality, labor power, public services, and reduced ideological contestation.',
                citations: citations(['giddensThirdWay'], ['wileyThirdWayGiddens', 'oxfordThirdWayConversion', 'oxfordPoliticalCentrism']),
              },
              {
                name: 'Federal and coalition pragmatism',
                period: 'Country- and party-system-specific',
                match: 'Governments manage disagreement through coalition bargaining, federal compromise, cross-party agreements, or negotiated public administration rather than a single ideological mandate.',
                caveat: 'Coalition does not prove centrism: governments can bargain while pursuing polarized or exclusionary programmes, and centrist rhetoric can mask unequal bargaining power.',
                citations: citations(['lijphartPatternsDemocracy', 'millOnLiberty'], ['lijphartConsensusDemocracy', 'coeDemocraticGovernance', 'sepDemocracy']),
              },
              {
                name: 'Evidence-led public problem-solving',
                period: 'Contemporary and historically recurring; policy-specific',
                match: 'Public bodies test, revise, and evaluate policies through data, expertise, consultation, and institutional learning while remaining open to democratic review.',
                caveat: 'Evidence does not determine values or distribution by itself. Expertise must be transparent, contestable, accessible, and accountable to affected communities.',
                citations: citations(['keynesGeneralTheory', 'millOnLiberty'], ['sepPragmatism', 'sepDemocracy', 'coeDemocraticGovernance']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'liberal-constitutionalist', relation: 'shares rights, pluralism, institutional limits, and constitutional citizenship, while centrism may be less committed to one liberal economic or rights programme' },
              { id: 'social-democratic', relation: 'can overlap through welfare, labor protection, and mixed economies, while centrist pragmatism is less economically defined and may accept market-oriented or Third Way reforms' },
              { id: 'christian-democratic', relation: 'may share coalition-building, social-market compromise, and intermediary institutions, but Christian democracy has a specific religious social tradition' },
              { id: 'conservative', relation: 'may share institutional caution and gradual change, but centrism can support progressive reform and does not require inherited authority or national continuity' },
              { id: 'populist', relation: 'both may claim practical responsiveness to citizens, but populism constructs a morally unified people against an elite while centrism emphasizes compromise and plural institutions' },
              { id: 'democratic-socialist', relation: 'can cooperate on democratic reform and public provision, but democratic socialism has stronger commitments to economic equality, worker power, and social ownership' },
              { id: 'authoritarian-collectivist', relation: 'is its authority and pluralist opposite: pragmatic centrism requires reviewable institutions and does not subordinate opposition to a party-state' },
              { id: 'militarist-imperialist', relation: 'may share administrative capacity or alliances in some foreign policies, but centrism treats force as bounded and does not make expansion or militarization constitutive' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'A first criticism is that the centre can be empty or relational. Calling a position moderate does not explain its values, beneficiaries, or consequences; a policy may be centrist only because the entire party system has shifted. The entry therefore treats centrism as a context-dependent classification and requires the underlying programme to be recorded on each dimension.',
            citations: citations(['millOnLiberty', 'keynesGeneralTheory'], ['oxfordPoliticalCentrism', 'sepPragmatism', 'sepDemocracy']),
          },
          {
            type: 'paragraph',
            text: 'A second criticism concerns status-quo bias. Compromise can protect minorities and reduce violence, but it can also preserve unequal property, racial hierarchy, gendered care, colonial borders, or exclusionary citizenship. If one side begins with greater power, splitting the difference may reproduce injustice rather than create fair accommodation. Pragmatic reform needs explicit equality and repair criteria, not only feasibility.',
            citations: citations(['millOnLiberty', 'tocquevilleDemocracy'], ['oxfordPluralismConsensus', 'sepDemocracy', 'oxfordPoliticalCentrism']),
          },
          {
            type: 'paragraph',
            text: 'A third criticism concerns technocracy. Expertise, independent administration, and evidence can improve public decisions, yet technical language can conceal value choices about risk, distribution, labor, environment, and whose knowledge counts. Democratic safeguards include transparent methods, accessible reasons, conflict-of-interest rules, independent review, public participation, and the ability to reject the expert recommendation.',
            citations: citations(['keynesGeneralTheory', 'millOnLiberty'], ['sepPragmatism', 'sepDemocracy', 'coeDemocraticGovernance']),
          },
          {
            type: 'paragraph',
            text: 'A fourth criticism concerns Third Way and market-centre projects. Reconciliation between markets and social protection can be constructive, but market-compatible modernization may weaken labor bargaining, privatize public goods, or turn equality into opportunity rhetoric without redistribution. The historical record must distinguish social investment from austerity, public regulation from deregulation, and broad citizenship from consumer-oriented policy.',
            citations: citations(['giddensThirdWay', 'keynesGeneralTheory'], ['wileyThirdWayGiddens', 'oxfordThirdWayConversion', 'oxfordPoliticalCentrism']),
          },
          {
            type: 'paragraph',
            text: 'Finally, consensus can become elite closure. Coalition bargaining, proportional institutions, and cross-party agreements may include more groups, but they can also make responsibility opaque, weaken opposition, and reduce the public’s ability to choose between genuinely different futures. A democratic centre should preserve contestation, alternation, organized dissent, minority rights, and the possibility that citizens can reject the compromise itself.',
            citations: citations(['lijphartPatternsDemocracy', 'millOnLiberty'], ['lijphartConsensusDemocracy', 'oxfordPluralismConsensus', 'sepDemocracy', 'coeDemocraticGovernance']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['lijphartPatternsDemocracy', 'giddensThirdWay', 'millOnLiberty', 'keynesGeneralTheory', 'tocquevilleDemocracy', 'kantPerpetualPeace', 'lockeLetterToleration'],
      researchSourceIds: ['oxfordPoliticalCentrism', 'lijphartConsensusDemocracy', 'oxfordThirdWayConversion', 'wileyThirdWayGiddens', 'sepPragmatism', 'sepDemocracy', 'oxfordPluralismConsensus', 'coeDemocraticGovernance', 'foreignPolicy', 'sepLiberalism', 'vdem'],
      editorialNote: 'The entry treats centrism as context-dependent positioning and pragmatic or consensus-oriented practice, not as a universal midpoint or moral superiority. It distinguishes moderation from technocracy, status-quo bias, liberal constitutionalism, social democracy, Christian democracy, populism, and the Third Way.',
    },
    researchGaps: [
      'Add original-language research in French, German, Portuguese, Spanish, Italian, Dutch, and English on historical centres, coalition parties, consensus settlements, and the political meaning of moderation in each country.',
      'Compare centrist voter positions, party manifestos, coalition agreements, and governing records using multidimensional data rather than one left–right self-placement.',
      'Expand research on non-European and postcolonial forms of pragmatic pluralism, consensus, federal compromise, social partnership, and developmental moderation without treating Western Europe as the default.',
      'Study who gains and who loses from compromise in taxation, property, labor, welfare, migration, family policy, environmental risk, colonial legacies, and public services.',
      'Add primary documents and institutional evidence for Third Way projects, social-market settlements, coalition governments, consociational systems, and technocratic agencies, including their internal critics.',
      'Compare expertise, evidence-based policy, citizen assemblies, participatory budgeting, deliberation, referendums, and representative institutions for transparency, inclusion, accountability, and policy learning.',
      'Test whether the six-dimensional near-midpoint profile obscures meaningful disagreement; allow centrist actors to score strongly on particular dimensions while remaining centrist only in party-system position or coalition practice.',
    ],
  },
  'liberal-constitutionalist': {
    id: 'liberal-constitutionalist',
    title: 'Liberal constitutionalist',
    canonicalLabel: 'Liberal constitutionalism',
    aliases: ['constitutional liberalism', 'liberal constitutionalist', 'rights-based constitutionalism', 'limited government liberalism'],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'Liberal constitutionalism is treated as a family of arguments and institutions that place public power under a higher law, protect individual and civic rights, require accountable government, and make coercion subject to public rules. It is not identical to laissez-faire economics, parliamentary government, judicial supremacy, secularism, or universal suffrage; each of those questions has its own history and internal disputes.',
    timeScope: 'Its modern vocabulary developed through early-modern natural-rights and consent theories, seventeenth- and eighteenth-century constitutional struggles, Atlantic and European constitutional experiments, nineteenth-century liberal reform, and twentieth-century rights-based democracy. Earlier law, mixed-government, and religious traditions are treated as antecedents rather than retroactively classified as liberal.',
    geographicScope: 'Comparative and transnational. The profile draws on British, North American, European, Latin American, African, Asian, and international constitutional experiences, while recording that liberal constitutional language was used both for emancipation and for property, racial, gendered, imperial, and colonial exclusion.',
    summary: 'A political tradition that seeks to make government limited, lawful, rights-protecting, representative, and reviewable. Its core question is not whether the state is large or small, but whether public power is authorized, divided, constrained, contestable, and compatible with equal civic standing. Liberal constitutionalism can support markets or social provision, parliamentary or presidential institutions, strong or weak judicial review, and national or international rights regimes; the score here is therefore a didactic profile rather than a universal party label.',
    summaryCitations: citations(
      ['lockeSecondTreatise', 'millOnLiberty', 'federalistPapers', 'constantLibertyModerns'],
      ['oxfordLiberalismResearch', 'sepConstitutionalism', 'oxfordConstitutionalJustice', 'unRuleLawHumanRights'],
    ),
    dimensionInterpretations: {
      economic: {
        score: 30,
        label: 'Market-oriented, with lawful public goods',
        explanation: 'The tradition commonly protects private property, contract, and voluntary exchange, but constitutionalism does not logically require a minimal state or unregulated markets. Taxation, infrastructure, education, social insurance, labor law, and economic regulation can be compatible with liberal constitutionalism when enacted under general law and justified through equal civic status rather than arbitrary privilege.',
        citations: citations(['adamSmithWealth', 'lockeSecondTreatise', 'millOnLiberty'], ['sepLiberalism', 'oxfordLiberalismResearch', 'sepConstitutionalism']),
      },
      social: {
        score: -25,
        label: 'Individual liberty, historically uneven inclusion',
        explanation: 'Freedom of expression, association, conscience, privacy, and personal development are central, but the historical tradition often combined universal language with restricted citizenship, gender hierarchy, property qualifications, slavery, or colonial rule. The profile therefore protects personal liberty without treating every historical liberal as socially progressive or every rights claim as equally applied.',
        citations: citations(['millOnLiberty', 'wollstonecraftRights', 'constantLibertyModerns'], ['sepLiberalism', 'sepLibertyPositiveNegative', 'colonialLiberalismExclusion']),
      },
      authority: {
        score: -65,
        label: 'Strong limits, divided power, and legal accountability',
        explanation: 'Government must act through publicly knowable law, consent or representation, due process, institutional checks, and remedies against arbitrary power. Liberal constitutionalists differ over whether courts, legislatures, executives, federal units, or citizens should have the final word, but concentrated and unreviewable authority is the clearest boundary of the family.',
        citations: citations(['lockeSecondTreatise', 'federalistPapers', 'millOnLiberty'], ['sepConstitutionalism', 'oxfordConstitutionalJustice', 'oxfordBritishConstitutionalism', 'unRuleLawHumanRights', 'vdem']),
      },
      identity: {
        score: -25,
        label: 'Civic constitutional membership',
        explanation: 'The preferred basis of membership is citizenship under common law and constitutional rights rather than ethnic sameness. Liberal constitutionalism can still be patriotic and territorially bounded, and its historical practice often excluded colonized peoples, migrants, women, racialized groups, or religious minorities. Constitutional universalism is therefore an aspiration and institutional test, not proof that a polity has already achieved equal membership.',
        citations: citations(['lockeSecondTreatise', 'kantPerpetualPeace', 'tocquevilleDemocracy'], ['oxfordConstitutionalPatriotism', 'sepNationalism', 'sepColonialism', 'colonialLiberalismExclusion']),
      },
      foreign: {
        score: -35,
        label: 'Lawful diplomacy and bounded defense',
        explanation: 'The orientation favors treaties, commerce, diplomacy, defensive security, and international rules over arbitrary conquest. It is not automatically pacifist: constitutional states may claim a right of self-defense or support intervention under law. The decisive question is whether force is publicly authorized, limited, reviewable, and consistent with the equal status of people affected by it.',
        citations: citations(['kantPerpetualPeace', 'millOnLiberty'], ['foreignPolicy', 'echrConvention', 'sepConstitutionalism']),
      },
      religion: {
        score: -55,
        label: 'Freedom of conscience and non-confessional public law',
        explanation: 'The profile protects religion and nonbelief while resisting the use of one church or theology as an unreviewable source of coercive law. Liberal constitutional settlements range from strict separation to accommodation or an established church; the common requirement is that conscience, minority rights, and public accountability cannot depend entirely on religious conformity.',
        citations: citations(['lockeLetterToleration', 'millOnLiberty', 'kantPerpetualPeace'], ['sepReligionPolitics', 'sepLiberalism', 'unRuleLawHumanRights', 'echrConvention']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Liberal constitutionalism asks how a community can exercise collective power without turning government into the unbounded will of a ruler, majority, party, military, church, or bureaucracy. Its characteristic answer is a constitutional order: public offices are created and limited by higher rules; rights and procedures constrain coercion; officials must give reasons and remain answerable; and citizens have lawful ways to contest, replace, or review power. The tradition is best understood as a cluster of commitments, not as one economic programme or one institutional blueprint.',
            citations: citations(['lockeSecondTreatise', 'millOnLiberty', 'federalistPapers'], ['oxfordLiberalismResearch', 'sepConstitutionalism', 'unRuleLawHumanRights']),
          },
          {
            type: 'paragraph',
            text: 'The label also contains a central tension. Constitutional limits can protect minorities and individual freedom against majoritarian abuse, but entrenched rules and courts can frustrate democratic change or preserve an old social settlement. Liberal constitutionalism therefore requires two tests at once: whether power is constrained, and whether the constitution itself remains open to equal citizenship, amendment, participation, and correction. A constitution that limits government while excluding most people from membership is formally constitutional but substantively incomplete.',
            citations: citations(['federalistPapers', 'millOnLiberty', 'wollstonecraftRights'], ['sepConstitutionalism', 'oxfordConstitutionalJustice', 'oxfordLiberalismResearch', 'colonialLiberalismExclusion']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'The core institutional vocabulary includes constitutional supremacy or fundamental law, legality, due process, equal protection, freedom of conscience and expression, representative government, separated or divided powers, independent adjudication, regular elections, and peaceful alteration of office. Federalism, bicameralism, proportional representation, parliamentary responsibility, presidential separation, and constitutional courts are possible designs rather than mandatory ingredients. The evidence must describe how each institution actually distributes power, not infer liberalism from a document’s title alone.',
            citations: citations(['federalistPapers', 'lockeSecondTreatise', 'millOnLiberty'], ['sepConstitutionalism', 'oxfordConstitutionalJustice', 'oxfordBritishConstitutionalism', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'Rights do not operate only as abstract declarations. Rule-of-law institutions require accessible procedures, independent decision-makers, reasoned judgments, equal application, remedies, and accountability for officials. Modern human-rights instruments add international supervision and explicit commitments to equality, dignity, and freedom; these developments broadened older constitutional language but also created new conflicts over emergency powers, national security, economic rights, migration, privacy, and the authority of international courts.',
            citations: citations(['millOnLiberty', 'kantPerpetualPeace'], ['unRuleLawHumanRights', 'echrConvention', 'oxfordConstitutionalJustice', 'vdem']),
          },
          {
            type: 'evidence-note',
            text: 'The public score is deliberately didactic. It places this label near market-oriented, socially liberty-protecting, strongly anti-arbitrary-power, civic, legally restrained, and non-confessional positions. It does not claim that all liberal constitutionalists favor small government, progressive cultural change, international intervention, judicial supremacy, or one model of secularism.',
            citations: citations(['lockeSecondTreatise', 'millOnLiberty', 'constantLibertyModerns'], ['oxfordLiberalismResearch', 'sepConstitutionalism', 'sepLiberalism', 'foreignPolicy']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Ancient and medieval antecedents — law, mixed government, and corporate limits',
            text: 'Ideas of lawful rule, mixed government, civic membership, customary liberty, religious jurisdiction, and limits on rulers predate modern liberalism. They supplied concepts later reused by liberal constitutionalists, but neither classical republicanism nor medieval constitutional practice should be collapsed into modern rights-based liberalism; their ideas of status, citizenship, hierarchy, and community were different.',
            citations: citations(['tocquevilleDemocracy'], ['sepConstitutionalism', 'oxfordBritishConstitutionalism']),
          },
          {
            period: 'Seventeenth century — consent, resistance, property, and toleration',
            text: 'Civil conflict, religious division, and struggles over royal prerogative encouraged arguments that legitimate government depends on consent and must protect life, liberty, property, and conscience. Locke’s account became a major reference point, but its historical setting and exclusions matter: the language of natural equality did not automatically produce equal political membership for women, the poor, enslaved people, or colonized populations.',
            citations: citations(['lockeSecondTreatise', 'lockeLetterToleration'], ['sepLiberalism', 'sepReligionPolitics', 'colonialLiberalismExclusion']),
          },
          {
            period: 'Eighteenth century — constitutional revolutions and federal design',
            text: 'Atlantic constitutional movements translated rights, representation, republican government, and anti-arbitrary-power arguments into written constitutions, declarations, and institutional designs. The Federalist essays defended an extended republic, representation, federalism, separated powers, and checks against faction. These arrangements created durable tools for divided power while coexisting with slavery, colonial domination, property qualifications, and restricted suffrage.',
            citations: citations(['federalistPapers', 'lockeSecondTreatise'], ['locFederalistPapers', 'sepConstitutionalism', 'colonialLiberalismExclusion']),
          },
          {
            period: 'Nineteenth century — civil liberty, representative reform, and the limits of liberal citizenship',
            text: 'Liberal constitutionalism developed alongside parliamentary reform, free speech campaigns, commercial society, expanding education, abolitionist and feminist arguments, and new theories of representative government. Mill defended individuality and open discussion, while Wollstonecraft exposed the contradiction between universal rights language and women’s subordination. At the same time, liberal constitutionalism was repeatedly entangled with empire, racial hierarchy, property power, and claims that some peoples were not ready for self-government.',
            citations: citations(['millOnLiberty', 'wollstonecraftRights', 'constantLibertyModerns'], ['sepMill', 'sepLiberalism', 'colonialLiberalismExclusion', 'sepColonialism']),
          },
          {
            period: 'Early twentieth century — mass democracy, social rights, and constitutional crisis',
            text: 'Universal or expanded suffrage, labor movements, women’s political mobilization, economic crisis, and mass parties pressured liberal constitutions to address social and material power rather than only formal legal freedom. Some systems responded with social rights and welfare institutions; others used emergency powers, executive rule, or anti-pluralist movements. The period shows that constitutional form alone does not prevent authoritarian capture when courts, parties, civil society, or public administration fail to resist it.',
            citations: citations(['millOnLiberty', 'wollstonecraftRights'], ['sepConstitutionalism', 'vdem', 'unRuleLawHumanRights']),
          },
          {
            period: '1945–1989 — international human rights and constitutional courts',
            text: 'After fascism and world war, constitutional reconstruction strengthened judicial review, rights catalogues, federal safeguards, international human-rights law, and limits on emergency government. The Universal Declaration and the European Convention made rights protection more explicitly international, while postwar constitutions treated human dignity, equality, and democratic order as safeguards against a repeat of totalitarian destruction. These institutions still depend on domestic political practice and can be unevenly enforced.',
            citations: citations(['kantPerpetualPeace', 'millOnLiberty'], ['unRuleLawHumanRights', 'echrConvention', 'oxfordConstitutionalJustice', 'vdem']),
          },
          {
            period: '1989–present — constitutional pluralism, backsliding, and new rights conflicts',
            text: 'Contemporary constitutionalism faces democratic backsliding, executive aggrandizement, polarization, migration, digital surveillance, platform power, climate emergency, transnational courts, economic inequality, and disputes between originalist, living, popular, and common-good interpretations. The liberal constitutional question remains practical: can institutions preserve equal rights and accountable contestation while adapting to problems that earlier constitutional settlements did not anticipate?',
            citations: citations(['federalistPapers', 'millOnLiberty'], ['sepConstitutionalism', 'vdem', 'oxfordConstitutionalJustice', 'echrConvention', 'oxfordLiberalismResearch']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Classical rights-limited liberalism',
                distinction: 'Emphasizes property, contract, civil liberty, limited government, and protection against arbitrary interference.',
                relation: 'A major strand of liberal constitutionalism, but not the whole family: social rights and public provision may also be constitutionalized.',
                citations: citations(['lockeSecondTreatise', 'constantLibertyModerns'], ['sepLiberalism', 'sepLibertyPositiveNegative']),
              },
              {
                label: 'Social or welfare constitutionalism',
                distinction: 'Adds labor protections, social insurance, public services, equality duties, and sometimes enforceable social rights to civil and political rights.',
                relation: 'Retains constitutional limits while rejecting the idea that formal non-interference is sufficient for equal freedom.',
                citations: citations(['millOnLiberty', 'wollstonecraftRights'], ['oxfordLiberalismResearch', 'unRuleLawHumanRights', 'sepConstitutionalism']),
              },
              {
                label: 'Parliamentary liberal constitutionalism',
                distinction: 'Relies on responsible government, legislative accountability, conventions, party competition, and political remedies, often with flexible or partially codified rules.',
                relation: 'Can protect rights through institutions other than a single entrenched constitutional court; parliamentary sovereignty and rights review remain contested.',
                citations: citations(['constantLibertyModerns', 'millOnLiberty'], ['oxfordBritishConstitutionalism', 'sepConstitutionalism']),
              },
              {
                label: 'Strong-form judicial review',
                distinction: 'Gives courts significant authority to invalidate legislation or executive action that violates constitutional rights or structure.',
                relation: 'Can protect minorities and legality, but raises the counter-majoritarian question of unelected judges overruling elected institutions.',
                citations: citations(['federalistPapers', 'millOnLiberty'], ['oxfordConstitutionalJustice', 'sepConstitutionalism', 'unRuleLawHumanRights']),
              },
              {
                label: 'Weak-form or dialogic review',
                distinction: 'Allows courts to identify rights conflicts or issue declarations while leaving greater room for legislatures to respond and revise the law.',
                relation: 'A different institutional allocation of constitutional responsibility, not an absence of rights protection.',
                citations: citations(['federalistPapers'], ['sepConstitutionalism', 'oxfordConstitutionalJustice']),
              },
              {
                label: 'Federal and consociational liberalism',
                distinction: 'Uses divided territorial power, bicameralism, coalition, minority vetoes, or negotiated power-sharing to prevent domination by one group or region.',
                relation: 'Extends the anti-concentration principle beyond the central executive, but can make accountability and equal participation harder to trace.',
                citations: citations(['federalistPapers', 'tocquevilleDemocracy'], ['locFederalistPapers', 'sepConstitutionalism', 'vdem']),
              },
              {
                label: 'Constitutional patriotism',
                distinction: 'Grounds political belonging in democratic rights, constitutional procedures, and equal citizenship rather than ancestry or ethnic homogeneity.',
                relation: 'Overlaps with civic nationalism but asks more explicitly whether public identity is tied to constitutional norms and post-national rights.',
                citations: citations(['kantPerpetualPeace', 'tocquevilleDemocracy'], ['oxfordConstitutionalPatriotism', 'sepNationalism', 'coeDemocraticCitizenship']),
              },
              {
                label: 'Constitutional emergency liberalism',
                distinction: 'Permits temporary exceptional powers to address war, terrorism, disaster, or institutional crisis under necessity, legality, time limits, and review.',
                relation: 'The danger boundary: emergency clauses can preserve constitutional order, or normalize executive exception and suspend the very rights they claim to defend.',
                citations: citations(['federalistPapers', 'millOnLiberty'], ['sepConstitutionalism', 'unRuleLawHumanRights', 'vdem']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'Illustrative examples and boundaries',
        blocks: [
          {
            type: 'paragraph',
            text: 'The United States Constitution and Bill of Rights, the British constitutional tradition, postwar German constitutionalism, the European Convention system, and many postcolonial constitutions are useful comparative cases, not identical embodiments. Each combines rights, institutions, social settlements, colonial legacies, party systems, and enforcement practices differently. The category should therefore be assigned to a constitutional pattern or argument with evidence, not to a country merely because it holds elections or calls itself liberal.',
            citations: citations(['federalistPapers', 'millOnLiberty'], ['locFederalistPapers', 'oxfordBritishConstitutionalism', 'echrConvention', 'vdem', 'oxfordLiberalismResearch']),
          },
          {
            type: 'paragraph',
            text: 'John Locke, Benjamin Constant, James Madison, Alexander Hamilton, John Stuart Mill, Mary Wollstonecraft, Immanuel Kant, and later constitutional theorists are reference points in different arguments within the family. They should not be presented as a single school: they disagree over property, participation, empire, social reform, representation, religion, war, and the institutional location of constitutional authority.',
            citations: citations(['lockeSecondTreatise', 'constantLibertyModerns', 'federalistPapers', 'millOnLiberty', 'wollstonecraftRights', 'kantPerpetualPeace'], ['oxfordLiberalismResearch', 'sepConstitutionalism', 'sepLiberalism']),
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'classical-liberal', relation: 'shares property, civil liberty, and limited government, but classical liberalism is more economically specified and need not include a developed constitutional theory' },
              { id: 'progressive-liberal', relation: 'shares rights, equality, and plural citizenship, while progressive liberalism generally gives more weight to social transformation and positive public provision' },
              { id: 'centrist-pragmatist', relation: 'can overlap through pluralism and institutional compromise, but centrism is positional and pragmatic rather than defined by a rights-limiting constitutional doctrine' },
              { id: 'social-democratic', relation: 'can share welfare, labor rights, and democratic institutions, while social democracy is more economically egalitarian and organized around social protection' },
              { id: 'civic-nationalist', relation: 'can share citizenship-based membership, but civic nationalism is primarily an identity doctrine while liberal constitutionalism is a theory of lawful, rights-constrained power' },
              { id: 'conservative', relation: 'can share institutional restraint and gradual change, but conservatism gives greater weight to inherited authority, continuity, and social order' },
              { id: 'authoritarian-collectivist', relation: 'is a direct authority opposite: liberal constitutionalism disperses and reviews power while authoritarian collectivism subordinates plural institutions to concentrated collective authority' },
              { id: 'theocratic', relation: 'may share constitutional structure, but theocracy makes religious authority constitutive of public law whereas liberal constitutionalism requires freedom of conscience and non-confessional accountability' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'The first criticism is the counter-majoritarian difficulty. A constitution and court can prevent a temporary majority from violating rights, but judges and entrenched institutions may also block reforms supported by a democratic majority or preserve the preferences of an earlier elite. A defensible system needs transparent appointment, reasoned decisions, legislative response, amendment routes, access to justice, and ongoing public contestation rather than treating judicial power as automatically neutral.',
            citations: citations(['federalistPapers', 'millOnLiberty'], ['oxfordConstitutionalJustice', 'sepConstitutionalism', 'unRuleLawHumanRights']),
          },
          {
            type: 'paragraph',
            text: 'The second criticism is formal equality. Liberal constitutions have often proclaimed universal rights while leaving property, race, gender, colonial status, caste, religion, disability, or immigration status to determine who could exercise them in practice. Rights language can be emancipatory, but researchers must identify the actual rights-holder, remedy, enforcement institution, and excluded population in each period.',
            citations: citations(['wollstonecraftRights', 'lockeSecondTreatise', 'millOnLiberty'], ['colonialLiberalismExclusion', 'sepColonialism', 'unRuleLawHumanRights', 'oxfordLiberalismResearch']),
          },
          {
            type: 'paragraph',
            text: 'The third criticism concerns property and economic power. Private property and contract can protect independence and pluralism, yet unequal ownership can translate into unequal political influence, dependence, or inability to exercise formal freedoms. Liberal constitutionalism must therefore be distinguished from any one market policy and evaluated by its treatment of labor, public goods, social minimums, corporate power, taxation, and the material conditions of participation.',
            citations: citations(['lockeSecondTreatise', 'millOnLiberty'], ['sepLiberalism', 'oxfordLiberalismResearch', 'unRuleLawHumanRights']),
          },
          {
            type: 'paragraph',
            text: 'The fourth criticism is imperial and colonial contradiction. Liberal powers sometimes defended constitutional liberty at home while denying self-government or equal legal standing abroad. That history does not prove that constitutional rights are meaningless; it shows why universal claims require anti-domination tests, equal membership, accountability for external force, and attention to voices that older constitutional archives marginalized.',
            citations: citations(['millOnLiberty', 'kantPerpetualPeace', 'tocquevilleDemocracy'], ['colonialLiberalismExclusion', 'sepColonialism', 'oxfordLiberalismResearch']),
          },
          {
            type: 'paragraph',
            text: 'The fifth criticism concerns emergency and security power. War, terrorism, pandemic, disaster, and technological threats can require rapid action, but indefinite emergency, secrecy, surveillance, preventive detention, or executive decree can hollow out constitutional accountability. Safeguards include necessity, proportionality, legality, sunset clauses, legislative renewal, independent review, public reasons, protected remedies, and equal treatment of politically unpopular groups.',
            citations: citations(['federalistPapers', 'millOnLiberty'], ['unRuleLawHumanRights', 'echrConvention', 'vdem', 'sepConstitutionalism']),
          },
          {
            type: 'paragraph',
            text: 'Finally, the label itself can be used strategically. Governments may retain constitutional text while weakening courts, media, opposition, elections, civil society, or minority rights. Conversely, a state may lack a single codified constitution yet maintain strong constitutional practices. The classification should therefore record both text and practice, distinguish design from implementation, and show uncertainty where evidence is incomplete or contested.',
            citations: citations(['federalistPapers', 'millOnLiberty'], ['sepConstitutionalism', 'vdem', 'oxfordConstitutionalJustice', 'coeDemocraticCitizenship']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['lockeSecondTreatise', 'lockeLetterToleration', 'constantLibertyModerns', 'federalistPapers', 'millOnLiberty', 'wollstonecraftRights', 'kantPerpetualPeace', 'tocquevilleDemocracy'],
      researchSourceIds: ['oxfordLiberalismResearch', 'sepLiberalism', 'sepConstitutionalism', 'oxfordConstitutionalJustice', 'oxfordBritishConstitutionalism', 'locFederalistPapers', 'unRuleLawHumanRights', 'echrConvention', 'colonialLiberalismExclusion', 'sepReligionPolitics', 'sepColonialism', 'oxfordConstitutionalPatriotism', 'coeDemocraticCitizenship', 'vdem', 'foreignPolicy'],
      editorialNote: 'This entry distinguishes liberal constitutionalism as a family of rights-constraining constitutional arguments from classical liberal economics, progressive liberalism, civic nationalism, judicial supremacy, secularism, and formal constitutionalism without equal inclusion. Historical examples are comparative and partial; scores are didactic and should not be read as empirical measurements of every liberal constitutional party or state.',
    },
    researchGaps: [
      'Add original-language research in Portuguese, French, German, Spanish, Arabic, Hindi, Chinese, and African constitutional traditions, including constitutional arguments that do not begin from the Anglo-American canon.',
      'Compare written constitutional text with lived practice using court decisions, legislative records, administrative enforcement, party competition, civil-society evidence, and rights outcomes rather than relying on formal design alone.',
      'Expand the history of liberal constitutionalism’s relationship with slavery, abolition, empire, settler colonialism, indigenous sovereignty, caste, migration, gender, disability, and racialized citizenship.',
      'Map disagreements over parliamentary sovereignty, constitutional courts, originalism, living constitutionalism, popular constitutionalism, common-good constitutionalism, and dialogic or weak-form review.',
      'Study economic constitutionalism: property, labor, taxation, social rights, public services, corporate power, ecological limits, and the material conditions required for equal civic participation.',
      'Add comparative case studies of emergency powers, democratic backsliding, digital surveillance, platform governance, climate emergencies, and international human-rights supervision, including successful safeguards and documented failures.',
      'Test whether the six-dimensional score should separate constitutional structure from the substantive social settlement and whether uncertainty ranges are preferable to a single point score for historically changing traditions.',
    ],
  },
  'militarist-imperialist': {
    id: 'militarist-imperialist',
    title: 'Militarist / imperialist',
    canonicalLabel: 'Militarist / imperialist',
    aliases: ['militarism', 'imperialism', 'imperial militarism', 'military expansionism', 'imperial nationalism'],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'This profile describes a family of orientations that make military capacity, martial hierarchy, strategic competition, territorial control, or unequal external dominion central to political power. Militarism and imperialism overlap but are not synonyms: a state can be militarized without seeking an empire, and an empire can rely on commercial, administrative, settler, or legal mechanisms as well as armed force.',
    timeScope: 'Imperial rule is ancient and recurrent, while modern militarism and the word imperialism took distinctive forms through industrialization, mass politics, national state-building, overseas empire, total war, decolonization, and contemporary security competition. Modern cases should not be projected unchanged onto ancient empires or present-day states.',
    geographicScope: 'Global and comparative. The entry includes European, American, Asian, African, Middle Eastern, and anti-colonial experiences, while avoiding the assumption that imperial history is only European or that military power has one social meaning in every region.',
    summary: 'A power-politics orientation that treats armed capacity, security institutions, martial values, strategic rivalry, and—at its imperial pole—unequal control over other peoples or territories as central instruments of state power. It can be justified through security, prestige, civilization, economic access, national greatness, racial hierarchy, or geopolitical necessity. The profile is analytical and critical: military strength alone does not prove militarism, and intervention alone does not prove imperialism.',
    summaryCitations: citations(
      ['clausewitzOnWar', 'mahanInfluenceSeaPower', 'hobsonImperialism', 'mearsheimerTragedy'],
      ['oxfordImperialism', 'oxfordMilitarism', 'oxfordPoliticalEconomyMilitarism', 'cambridgeMilitarismImperialism'],
    ),
    dimensionInterpretations: {
      economic: {
        score: 12,
        label: 'Strategic mixed economy and extraction',
        explanation: 'There is no single ownership system. Militarist and imperial projects can preserve private property, direct industry, mobilize state procurement, extract colonial resources, protect commercial routes, or nationalize strategic sectors. The common feature is that economic capacity is evaluated through military readiness, strategic autonomy, imperial revenue, or geopolitical leverage rather than only welfare or consumer prosperity.',
        citations: citations(['mahanInfluenceSeaPower', 'hobsonImperialism', 'mussoliniDoctrine'], ['oxfordPoliticalEconomyMilitarism', 'oxfordImperialism', 'oxfordColonialismEmpireSociology']),
      },
      social: {
        score: -45,
        label: 'Hierarchical and martial social order',
        explanation: 'Discipline, obedience, sacrifice, heroism, gendered martial roles, national service, and deference to security institutions tend to receive higher status than pluralist dissent or anti-militarist norms. This does not mean every soldier or veteran supports militarism, nor that every military institution has the same social ideology; the score concerns the political elevation of martial hierarchy.',
        citations: citations(['clausewitzOnWar', 'mussoliniDoctrine', 'hobsonImperialism'], ['oxfordMilitarism', 'cambridgeMilitarismImperialism', 'oxfordColonialismEmpireSociology']),
      },
      authority: {
        score: 75,
        label: 'Security-centered and executive authority',
        explanation: 'The orientation gives armed forces, intelligence services, strategic executives, or emergency institutions broad discretion, often presenting opposition or procedural delay as security risks. Military capacity can exist under civilian constitutional control; the authoritarian score rises when security institutions dominate civilian government, suppress dissent, or make permanent emergency a source of legitimacy.',
        citations: citations(['clausewitzOnWar', 'mussoliniDoctrine', 'arendtTotalitarianism'], ['oxfordMilitarism', 'oxfordConstitutionalJustice', 'vdem']),
      },
      identity: {
        score: -88,
        label: 'National greatness and imperial hierarchy',
        explanation: 'Collective identity is commonly organized around national strength, civilizational mission, sacrifice, frontier, empire, or a hierarchy between rulers and subject peoples. Nationalism is not automatically militarist, and anti-colonial movements can use national defense against empire; the profile concerns the elevation of power, hierarchy, and external domination as defining national purposes.',
        citations: citations(['mahanInfluenceSeaPower', 'hobsonImperialism', 'mussoliniDoctrine'], ['oxfordImperialism', 'sepNationalism', 'oxfordColonialismEmpireSociology']),
      },
      foreign: {
        score: -92,
        label: 'Expansionist and coercive foreign policy',
        explanation: 'Force, bases, coercive diplomacy, conquest, occupation, protectorates, naval or air reach, arms races, and territorial or political expansion are treated as normal instruments of national power. Defensive capability, alliance membership, peacekeeping, and humanitarian action are not enough by themselves; evidence of doctrine, intent, repeated practice, or unequal control is needed to classify a state or movement here.',
        citations: citations(['clausewitzOnWar', 'mahanInfluenceSeaPower', 'mearsheimerTragedy', 'hobsonImperialism'], ['oxfordImperialism', 'oxfordMilitarism', 'unCharterForce', 'foreignPolicy']),
      },
      religion: {
        score: -18,
        label: 'Instrumental civilizational or national religion',
        explanation: 'Militarist and imperial projects may use religious symbols, sacred history, missionary claims, or civilizational language to legitimize war and hierarchy, but militarism has also been secular, racial, monarchic, revolutionary, or technocratic. The dimension is therefore near the middle: religion can authorize, resist, or remain independent of military power depending on the case.',
        citations: citations(['mussoliniDoctrine', 'hobsonImperialism', 'burkeReflections'], ['sepReligionPolitics', 'oxfordImperialism', 'oxfordColonialismEmpireSociology']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'warning',
            text: 'This is a historical-analytical profile of coercive statecraft, not a recommendation. Imperial and militarist systems have produced different experiences for rulers, soldiers, settlers, subjects, civilians, and resistance movements; the label must never erase those asymmetries or turn military violence into an aesthetic.',
            citations: citations(['hobsonImperialism', 'mussoliniDoctrine'], ['oxfordImperialism', 'oxfordMilitarism', 'oxfordColonialismEmpireSociology']),
          },
          {
            type: 'paragraph',
            text: 'Militarism is more than having an army or spending on defense. It is a political and social orientation in which military institutions, military reasoning, martial symbols, or the expectation of organized violence become unusually authoritative in public life. Imperialism is more than possessing a large territory: it involves unequal domination over other peoples or political communities through conquest, coercion, economic dependence, legal subordination, settlement, or a combination of mechanisms. A careful analysis records which of these elements is actually evidenced.',
            citations: citations(['clausewitzOnWar', 'mahanInfluenceSeaPower', 'hobsonImperialism'], ['oxfordMilitarism', 'oxfordImperialism', 'oxfordColonialismEmpireSociology']),
          },
          {
            type: 'paragraph',
            text: 'The combined label is useful for a didactic spectrum card because military organization and imperial hierarchy often reinforce one another, especially under industrial competition and total war. It is still a compound profile, not a claim that every empire was equally militarist or that every militarist project sought overseas colonies. Defensive nationalism, great-power realism, colonial administration, fascist total war, naval expansion, and revolutionary or anti-colonial self-defense require separate evidence and should not be merged automatically.',
            citations: citations(['clausewitzOnWar', 'mearsheimerTragedy', 'fanonWretchedEarth'], ['oxfordImperialism', 'cambridgeMilitarismImperialism', 'unCharterForce']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'A militarist polity typically links security to national vitality and treats military preparedness as a permanent civic obligation. Indicators may include military predominance in foreign-policy decision-making, prestige attached to command and sacrifice, routine use of emergency language, high strategic spending, civilian institutions organized around war, and public narratives that define compromise as weakness. These are indicators rather than a mechanical checklist: high spending can reflect threat exposure, and military professionalism can coexist with democratic civilian control.',
            citations: citations(['clausewitzOnWar', 'mussoliniDoctrine'], ['oxfordMilitarism', 'oxfordPoliticalEconomyMilitarism', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'An imperial project extends unequal power beyond the ruling polity. Its tools can include annexation, occupation, protectorates, unequal treaties, settler colonization, forced labor, monopolized trade, debt or financial control, racialized law, indirect rule, cultural assimilation, and the construction of dependent security forces. Formal annexation is not required, and a legal claim of civilization or modernization does not remove the underlying question of who can decide, who benefits, who bears coercion, and whether the subject population has equal political standing.',
            citations: citations(['hobsonImperialism', 'mahanInfluenceSeaPower'], ['oxfordImperialism', 'oxfordColonialismEmpireSociology', 'sepColonialism']),
          },
          {
            type: 'paragraph',
            text: 'The relationship between military power and political economy is contested. Strategic industry, arms procurement, shipping, bases, resource extraction, and labor mobilization can create material interests in expansion, while imperial competition can also impose high fiscal, human, and administrative costs. Hobson’s liberal critique emphasized finance and domestic political incentives; Marxist and dependency approaches emphasize accumulation and unequal world systems; realist approaches emphasize security competition and the absence of a superior enforcer. These are competing explanatory lenses, not interchangeable definitions.',
            citations: citations(['hobsonImperialism', 'mearsheimerTragedy', 'mahanInfluenceSeaPower'], ['oxfordPoliticalEconomyMilitarism', 'oxfordImperialism', 'cambridgeMilitarismImperialism']),
          },
          {
            type: 'evidence-note',
            text: 'The six-axis score is deliberately schematic. It marks strong interventionism, national hierarchy, and security-centered authority while leaving the economic and religious dimensions near the middle because militarist and imperial systems have used different combinations of private enterprise, state direction, confessional legitimacy, secular ideology, and colonial political economy.',
            citations: citations(['clausewitzOnWar', 'hobsonImperialism', 'mussoliniDoctrine'], ['oxfordMilitarism', 'oxfordImperialism', 'oxfordPoliticalEconomyMilitarism']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Ancient and premodern empires — conquest, tribute, and layered sovereignty',
            text: 'Imperial domination is as old as recorded state expansion. Ancient and premodern empires used conquest, tribute, dynastic rule, military colonies, religious legitimation, administrative incorporation, and negotiated local autonomy in varying combinations. These cases establish the broad historical meaning of empire, but they should not be assigned the modern ideology of militarism without evidence of a society-wide military doctrine or military predominance.',
            citations: citations(['clausewitzOnWar'], ['oxfordImperialism', 'sepColonialism']),
          },
          {
            period: 'Early modern expansion — commerce, naval power, settlement, and colonial rule',
            text: 'European overseas empires combined merchant networks, chartered companies, naval force, missionary activity, settlement, plantation economies, slavery, and state rivalry. Maritime power and commercial access became mutually reinforcing in some cases, while colonial rule depended on local alliances, administrative knowledge, law, and violence rather than battles alone. The history must include African, Asian, American, and Indigenous agency, resistance, diplomacy, and adaptation rather than treating imperial subjects as passive objects.',
            citations: citations(['mahanInfluenceSeaPower', 'hobsonImperialism'], ['oxfordImperialism', 'usStateMahan', 'oxfordColonialismEmpireSociology']),
          },
          {
            period: 'Nineteenth century — industrial militarism and the national-imperial state',
            text: 'Industrial production, railways, steam navigation, conscription, mass newspapers, bureaucratic administration, and national schooling changed the scale and speed of military mobilization. Great powers increasingly linked national prestige, strategic routes, markets, raw materials, and civilizational claims to overseas expansion. Militarism developed differently across Britain, France, Germany, Russia, Japan, and the United States; the comparison should not reduce all of them to one model.',
            citations: citations(['mahanInfluenceSeaPower', 'hobsonImperialism'], ['oxfordMilitarism', 'cambridgeMilitarismImperialism', 'oxfordImperialism']),
          },
          {
            period: '1890–1914 — naval rivalry, imperial competition, and anti-imperial critique',
            text: 'Mahan’s sea-power analysis became influential in debates over fleets, commerce, strategic bases, and national greatness, while imperial competition and alliance politics intensified. Hobson criticized imperialism as a system that could serve concentrated financial interests, militarism, and domestic political diversion. The period’s scholarship and political arguments show that “imperialism” was contested at the time, not merely a label applied retrospectively by later critics.',
            citations: citations(['mahanInfluenceSeaPower', 'hobsonImperialism', 'clausewitzOnWar'], ['usStateMahan', 'oxfordPoliticalEconomyMilitarism', 'oxfordImperialism', 'cambridgeMilitarismImperialism']),
          },
          {
            period: '1914–1945 — total war, mass mobilization, and fascist empire',
            text: 'The First World War demonstrated how alliances, mobilization, nationalism, and imperial rivalry could generate industrialized mass death. Interwar fascist movements then fused militarized politics with national rebirth, territorial revision, racial hierarchy, and totalizing state power; Nazi Germany made racial empire and genocidal war central to its project. Militarism is not identical to fascism, but fascist regimes represent an especially radical conjunction of militarization, dictatorship, and expansion.',
            citations: citations(['clausewitzOnWar', 'mussoliniDoctrine', 'arendtTotalitarianism'], ['oxfordMilitarism', 'sepFascism', 'oxfordImperialism']),
          },
          {
            period: '1945–1970s — Charter order, decolonization, and anti-colonial war',
            text: 'The United Nations Charter articulated sovereign equality, peaceful settlement, territorial integrity, and limits on the use of force, while decolonization movements challenged imperial rule through diplomacy, mass mobilization, civil disobedience, armed struggle, and international law. The end of formal empire did not end unequal economic or military relationships, and anti-colonial force cannot simply be classified as imperialism because its political aim may be self-determination rather than domination of another people.',
            citations: citations(['fanonWretchedEarth', 'gandhiHindSwaraj', 'hobsonImperialism'], ['unCharterForce', 'sepColonialism', 'oxfordColonialismEmpireSociology']),
          },
          {
            period: 'Cold War — proxy conflict, military blocs, and security states',
            text: 'The Cold War globalized military alliances, nuclear deterrence, arms races, coups, proxy wars, foreign bases, developmental competition, and ideological security doctrines. Formal empire declined, but superpower influence often operated through client governments, economic dependence, covert action, and unequal intervention. A state’s ideological alignment alone does not prove imperialism; the evidence must examine coercive reach, institutional dependence, material extraction, and political control.',
            citations: citations(['mearsheimerTragedy', 'morgenthauRealism', 'fanonWretchedEarth'], ['oxfordMilitarism', 'oxfordImperialism', 'unCharterForce', 'foreignPolicy']),
          },
          {
            period: 'Present — expeditionary power, economic coercion, and contested imperial analogies',
            text: 'Contemporary states project power through expeditionary forces, military bases, arms transfers, sanctions, intelligence networks, private security, infrastructure finance, cyber capabilities, and control of strategic supply chains. Some analysts use “empire” for these patterns, while others reserve the term for direct political domination or colonial sovereignty. The classification must therefore show the mechanism, legal status, affected population, duration, and degree of consent rather than using imperialism as a synonym for any powerful state.',
            citations: citations(['mearsheimerTragedy', 'hobsonImperialism'], ['oxfordImperialism', 'oxfordPoliticalEconomyMilitarism', 'unCharterForce', 'foreignPolicy']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Defensive militarism',
                distinction: 'Treats permanent preparedness, conscription, alliances, or strategic depth as necessary to deter external threats.',
                relation: 'It can coexist with constitutional civilian control and does not by itself establish imperial expansion; the key question is whether defense becomes an open-ended political value or external domination.',
                citations: citations(['clausewitzOnWar', 'mearsheimerTragedy'], ['oxfordMilitarism', 'unCharterForce']),
              },
              {
                label: 'Naval and commercial imperialism',
                distinction: 'Connects maritime power, trade routes, ports, shipping, commercial access, and overseas bases to national prosperity and strategic influence.',
                relation: 'Mahan is a major historical reference, but sea power is an instrument whose political use can range from defense to coercive empire.',
                citations: citations(['mahanInfluenceSeaPower'], ['usStateMahan', 'oxfordImperialism']),
              },
              {
                label: 'Settler and colonial imperialism',
                distinction: 'Seeks territorial control, settlement, resource access, labor, or demographic transformation, often through racialized law and unequal sovereignty.',
                relation: 'Directly overlaps with colonialism, but colonialism also includes non-military administrative and economic domination and must be analyzed from the perspective of the colonized.',
                citations: citations(['hobsonImperialism', 'fanonWretchedEarth'], ['oxfordColonialismEmpireSociology', 'sepColonialism', 'oxfordImperialism']),
              },
              {
                label: 'Informal or economic imperialism',
                distinction: 'Uses finance, debt, trade dependence, investment, unequal treaties, sanctions, infrastructure, or market access to constrain political autonomy without formal annexation.',
                relation: 'The concept is contested: economic inequality is not automatically imperial control, so the entry requires evidence of durable asymmetrical compulsion and political dependence.',
                citations: citations(['hobsonImperialism', 'mearsheimerTragedy'], ['oxfordPoliticalEconomyMilitarism', 'oxfordImperialism', 'oxfordColonialismEmpireSociology']),
              },
              {
                label: 'Revolutionary or fascist imperialism',
                distinction: 'Presents expansion, war, racial or civilizational hierarchy, and mass mobilization as a transformative national mission rather than merely a strategic instrument.',
                relation: 'Fascist imperialism is a radical subset with party dictatorship and a project of national rebirth; not every militarist or imperial state is fascist.',
                citations: citations(['mussoliniDoctrine', 'arendtTotalitarianism'], ['sepFascism', 'oxfordMilitarism', 'oxfordImperialism']),
              },
              {
                label: 'Great-power realism',
                distinction: 'Explains military competition, alliances, balancing, and expansion through insecurity and the international distribution of power rather than moral or racial mission.',
                relation: 'Realism can analyze imperial behavior without endorsing it; a realist description is not automatically a militarist ideology or imperial programme.',
                citations: citations(['mearsheimerTragedy', 'morgenthauRealism'], ['oxfordMilitarism', 'foreignPolicy', 'unCharterForce']),
              },
              {
                label: 'Humanitarian or liberal interventionism',
                distinction: 'Justifies external force through protection of civilians, human rights, collective security, or international order rather than conquest or permanent rule.',
                relation: 'The distinction from imperialism depends on authorization, purpose, duration, consent, accountability, post-conflict control, and whether affected people gain equal political agency; benevolent language is not sufficient evidence.',
                citations: citations(['kantPerpetualPeace', 'walzerJustWars'], ['unCharterForce', 'foreignPolicy', 'oxfordImperialism']),
              },
              {
                label: 'Anti-colonial national defense',
                distinction: 'Uses organized force, popular mobilization, or international solidarity to end foreign domination and establish self-determination.',
                relation: 'It may reproduce coercion or become expansionist after victory, but its initial relation to empire is structurally different from a project of ruling another people.',
                citations: citations(['fanonWretchedEarth', 'gandhiHindSwaraj'], ['sepColonialism', 'unCharterForce', 'oxfordColonialismEmpireSociology']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'Illustrative examples and boundaries',
        blocks: [
          {
            type: 'paragraph',
            text: 'The British, French, Russian, Ottoman, Japanese, German, Spanish, Portuguese, Belgian, and United States empires are historically important comparative cases, but they differed in chronology, legal form, settler presence, economic organization, racial ideology, local alliances, and military administration. “The empire” is therefore not one regime type. A country can be imperial in one period and anti-imperial in another, or combine internal constitutional institutions with external colonial domination.',
            citations: citations(['mahanInfluenceSeaPower', 'hobsonImperialism'], ['oxfordImperialism', 'oxfordColonialismEmpireSociology', 'sepColonialism']),
          },
          {
            type: 'paragraph',
            text: 'The First World War, Imperial Japan’s expansion, fascist Italy’s colonial wars, Nazi Germany’s racial empire, Cold War proxy conflicts, and postcolonial struggles are useful historical cases for different parts of the profile. They should not be treated as equivalent. A documented comparison should identify the institution or movement, the period, the declared doctrine, the actual practice, the people subject to coercion, and the relevant legal and historical dispute.',
            citations: citations(['clausewitzOnWar', 'mussoliniDoctrine', 'fanonWretchedEarth'], ['oxfordMilitarism', 'cambridgeMilitarismImperialism', 'oxfordImperialism', 'unCharterForce']),
          },
          {
            type: 'paragraph',
            text: 'Carl von Clausewitz, Alfred Thayer Mahan, John A. Hobson, Hans Morgenthau, John Mearsheimer, Benito Mussolini, Frantz Fanon, and anti-colonial writers represent different positions and analytical uses of military power. Clausewitz and Mahan are strategic or historical authorities, Hobson is a critical political economist, realists explain competition, fascist texts justify authoritarian expansion, and Fanon analyzes colonial violence and liberation. Listing them together is a map of debate, not a claim that they support one ideology.',
            citations: citations(['clausewitzOnWar', 'mahanInfluenceSeaPower', 'hobsonImperialism', 'morgenthauRealism', 'mearsheimerTragedy', 'mussoliniDoctrine', 'fanonWretchedEarth'], ['oxfordImperialism', 'oxfordMilitarism', 'oxfordColonialismEmpireSociology']),
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'historical-fascist', relation: 'shares militarization, authoritarianism, ultranationalism, and expansion in historical cases, but fascism adds a specific mass-movement and national-rebirth project and is not synonymous with all imperialism' },
              { id: 'national-conservative', relation: 'may share national defense, hierarchy, and sovereignty, but national conservatism does not require permanent militarization, conquest, or imperial rule' },
              { id: 'ethnic-nationalist', relation: 'may share exclusionary identity and territorial claims, but ethnic nationalism can be non-militarist and militarist imperialism can be civic, dynastic, racial, or civilizational' },
              { id: 'authoritarian-collectivist', relation: 'can overlap where security institutions and party-state authority direct society, but collectivist economics and militarism are analytically separate dimensions' },
              { id: 'anti-colonial-liberation', relation: 'may involve armed struggle, but liberation seeks to end foreign domination while imperialism seeks unequal control; the post-victory record must still be examined' },
              { id: 'civic-nationalist', relation: 'may share state capacity and national membership, but civic nationalism can be constitutional and peaceful while militarist imperialism makes force and hierarchy central' },
              { id: 'monarchist', relation: 'historical empires often used dynastic legitimacy, but monarchy does not determine militarism and modern imperialism can be republican' },
              { id: 'liberal-constitutionalist', relation: 'constitutional states can maintain defense forces and even interventionist policies, but liberal constitutionalism limits arbitrary power and rejects imperial inequality as a constitutive principle' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'The first classification risk is equating military capability with militarism. A state may maintain a large defense budget because of geography, deterrence, alliance commitments, or an active war while retaining strong civilian oversight and public skepticism toward military authority. Conversely, a smaller state can be militarist if military values dominate identity, policy, and dissent. The evidence must separate capacity, threat environment, doctrine, institutional power, and social prestige.',
            citations: citations(['clausewitzOnWar', 'mearsheimerTragedy'], ['oxfordMilitarism', 'vdem', 'foreignPolicy']),
          },
          {
            type: 'paragraph',
            text: 'The second risk is using imperialism as a moral synonym for any foreign involvement. Trade, diplomacy, peacekeeping, sanctions, humanitarian protection, alliance support, and development finance can be beneficial, harmful, or mixed depending on power and accountability. The classification should disclose whether there is coercion, unequal consent, territorial control, extraction, political tutelage, racial or legal hierarchy, and a durable inability of the affected population to alter the relationship.',
            citations: citations(['hobsonImperialism', 'walzerJustWars'], ['oxfordImperialism', 'unCharterForce', 'foreignPolicy', 'oxfordPoliticalEconomyMilitarism']),
          },
          {
            type: 'paragraph',
            text: 'The third criticism concerns the security dilemma. Leaders can interpret the defensive preparations of another state as offensive, generating arms races and preemptive reasoning. Realist theories explain why this can occur without assuming a moral mission, while critical theories ask who defines the threat and who pays its human and economic costs. A careful profile records rival interpretations instead of presenting one side’s security narrative as fact.',
            citations: citations(['mearsheimerTragedy', 'morgenthauRealism', 'clausewitzOnWar'], ['cambridgeMilitarismImperialism', 'oxfordMilitarism', 'unCharterForce']),
          },
          {
            type: 'paragraph',
            text: 'The fourth criticism is colonial erasure. Imperial histories have often centered the archive, strategy, and self-description of the imperial power while reducing subject peoples to objects of administration or military study. Research should include local political thought, resistance, collaboration, gendered and economic effects, Indigenous and colonized sovereignty, and the long-term institutional consequences of borders, extraction, and racial law.',
            citations: citations(['fanonWretchedEarth', 'hobsonImperialism'], ['oxfordColonialismEmpireSociology', 'sepColonialism', 'oxfordImperialism']),
          },
          {
            type: 'paragraph',
            text: 'The fifth criticism concerns civil-military and economic accountability. Procurement, private contractors, intelligence secrecy, bases, arms transfers, and strategic industries can create interests that are difficult for citizens to inspect or reverse. Safeguards include legislative authorization, transparent budgets, independent audit, judicial remedies, civilian leadership, free journalism, whistleblower protection, sunset clauses for emergency measures, and meaningful participation by communities exposed to military operations.',
            citations: citations(['hobsonImperialism', 'mussoliniDoctrine'], ['oxfordPoliticalEconomyMilitarism', 'oxfordMilitarism', 'unCharterForce', 'vdem']),
          },
          {
            type: 'paragraph',
            text: 'Finally, historical analogies are easy to abuse. Calling a contemporary government “imperialist” or “militarist” should identify the specific policy, institution, period, and evidence rather than functioning as a general insult. The card should retain uncertainty when intentions are disputed, avoid country-level shortcuts, and make clear that military force can be used by democratic, authoritarian, revolutionary, anti-colonial, or humanitarian actors for different ends and with different consequences.',
            citations: citations(['clausewitzOnWar', 'hobsonImperialism', 'fanonWretchedEarth'], ['oxfordImperialism', 'oxfordMilitarism', 'foreignPolicy', 'unCharterForce']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['clausewitzOnWar', 'mahanInfluenceSeaPower', 'hobsonImperialism', 'morgenthauRealism', 'mearsheimerTragedy', 'mussoliniDoctrine', 'fanonWretchedEarth', 'gandhiHindSwaraj', 'walzerJustWars'],
      researchSourceIds: ['oxfordImperialism', 'oxfordMilitarism', 'oxfordPoliticalEconomyMilitarism', 'oxfordColonialismEmpireSociology', 'cambridgeMilitarismImperialism', 'usStateMahan', 'unCharterForce', 'foreignPolicy', 'sepColonialism', 'sepNationalism', 'sepFascism', 'sepReligionPolitics', 'vdem'],
      editorialNote: 'This entry separates militarism, imperialism, colonialism, realism, fascism, defense, intervention, and anti-colonial liberation. Its score is a didactic compound profile, not an empirical rating of every military state or empire. Comparative examples require evidence about doctrine, institutions, practice, affected populations, and legal context.',
    },
    researchGaps: [
      'Add original-language research in Portuguese, French, German, Spanish, Arabic, Turkish, Hindi, Chinese, Japanese, Korean, and African languages on empire, militarism, military labor, and anti-colonial political thought.',
      'Compare ancient, early-modern, colonial, settler, informal, Cold War, and contemporary forms of empire without treating the modern European nation-state as the universal baseline.',
      'Expand research on African, Asian, Indigenous, Middle Eastern, Latin American, and Pacific experiences, including local diplomacy, collaboration, resistance, gender, labor, and postcolonial state formation.',
      'Map the boundary between defense, deterrence, humanitarian intervention, peacekeeping, counterinsurgency, occupation, coercive diplomacy, economic dependence, and imperial control using case-specific evidence.',
      'Study how military procurement, finance, labor, technology, private contractors, ports, bases, supply chains, and resource extraction shape political incentives without assuming that economic interest is the only cause of war.',
      'Compare civil-military relations, emergency law, intelligence oversight, media systems, veterans’ politics, conscription, and democratic accountability across constitutional and authoritarian regimes.',
      'Develop uncertainty ranges and separate scores for military institutional power, external intervention, territorial empire, economic coercion, and social militarization instead of relying on one compound label.',
    ],
  },
  'national-socialist': {
    id: 'national-socialist',
    title: 'National Socialist / Nazi (historical)',
    canonicalLabel: 'National Socialism / Nazism',
    aliases: ['Nazism', 'Nazi movement', 'Nazi Germany', 'National Socialist German Workers’ Party', 'Third Reich'],
    entryType: 'historical warning profile',
    status: 'researched-draft',
    confidence: 'high',
    scopeNote: 'This entry concerns the German National Socialist movement, party, regime, and ideology from its roots in völkisch and antisemitic politics through the Nazi dictatorship and its genocidal war. It is not a synonym for every authoritarian, nationalist, conservative, militarist, populist, or racist movement, and contemporary comparisons require evidence rather than rhetorical resemblance.',
    timeScope: 'Primarily the late nineteenth-century and Imperial German precursors, the Weimar period, the Nazi seizure and consolidation of power from 1933, the Second World War and Holocaust from 1939–1945, and the postwar legal and historical reckoning. Later neo-Nazi and far-right movements are treated only as related contemporary objects, not as the same state formation.',
    geographicScope: 'Centered on Germany and the territories under Nazi occupation or domination, especially Eastern Europe. The history is transnational: antisemitism, fascism, war, collaboration, resistance, forced labor, deportation, and genocide involved many societies, institutions, and victims across Europe.',
    summary: 'A racial-totalitarian and genocidal ideology and regime that fused ultranationalism, antisemitism, racial hierarchy, Führer dictatorship, mass party mobilization, political terror, social conformity, rearmament, territorial expansion, and the planned destruction of Jews and other targeted groups. The word “socialist” in the party name does not make Nazism a socialist or communist movement in the ordinary economic sense; the regime destroyed the workers’ movement, protected private ownership when compatible with state and racial objectives, and subordinated economic life to dictatorship, rearmament, and racial empire.',
    summaryCitations: citations(
      ['hitlerMeinKampf', 'mussoliniDoctrine', 'arendtTotalitarianism', 'griffinNatureFascism'],
      ['oxfordNationalSocialism', 'oxfordNaziGermany', 'ushmmNaziRacism', 'ushmmThirdReich', 'ushmmNaziPartyPlatform'],
    ),
    dimensionInterpretations: {
      economic: {
        score: -5,
        label: 'Private ownership under racial-state direction',
        explanation: 'The regime did not abolish private property in the manner of communist state ownership, but it destroyed independent labor organizations, directed production, controlled labor, expropriated Jewish property, rearmed the economy, used forced labor, and subordinated economic decisions to war and racial hierarchy. The near-center score records a mixed and coercively directed economy rather than treating the party name as evidence of socialism.',
        citations: citations(['hitlerMeinKampf', 'mussoliniDoctrine'], ['oxfordNaziGermany', 'oxfordNationalSocialism', 'ushmmThirdReich']),
      },
      social: {
        score: -95,
        label: 'Racial, patriarchal, and violently exclusionary',
        explanation: 'Nazism imposed a biologized hierarchy of peoples, antisemitism, eugenics, gendered reproductive policy, compulsory conformity, persecution of dissent, and the destruction of plural civic life. Its apparent modern mobilization and technological administration should not be confused with social progress: participation was organized through racial membership, obedience, and exclusion.',
        citations: citations(['hitlerMeinKampf', 'mussoliniDoctrine', 'arendtTotalitarianism'], ['ushmmNaziRacism', 'ushmmThirdReich', 'bpbNationalSocialism']),
      },
      authority: {
        score: 100,
        label: 'Totalizing dictatorship and terror',
        explanation: 'The Führer principle concentrated authority in Hitler and the Nazi state, eliminated competitive parties and independent unions, coordinated institutions, expanded police and SS power, and used detention, terror, and murder against political, racial, religious, and social enemies. “Totalizing” describes the regime’s aspiration and destructive reach; it does not imply that every office was perfectly coordinated or that ordinary administration disappeared.',
        citations: citations(['hitlerMeinKampf', 'mussoliniDoctrine', 'arendtTotalitarianism'], ['ushmmThirdReich', 'oxfordNaziGermany', 'bpbNationalSocialism']),
      },
      identity: {
        score: -100,
        label: 'Racial ultranationalism and Volksgemeinschaft',
        explanation: 'Belonging was defined through a racialized German people rather than equal citizenship. Jews were treated as a racial enemy regardless of religious practice; Roma, Slavic peoples, Black people, people with disabilities, political opponents, and other groups were persecuted in different ways and at different stages. The promise of a unified people depended on exclusion, dispossession, and ultimately annihilation.',
        citations: citations(['hitlerMeinKampf', 'mussoliniDoctrine'], ['ushmmNaziRacism', 'ushmmNaziPartyPlatform', 'ushmmNurembergLaws', 'sepNationalism']),
      },
      foreign: {
        score: -98,
        label: 'Racial empire and war of annihilation',
        explanation: 'Expansion was not merely a strategic option: Nazi foreign policy sought territorial revision, Lebensraum in Eastern Europe, the destruction of the Soviet Union as a racial and ideological enemy, occupation, demographic engineering, forced labor, and genocidal war. The military project and the Holocaust became inseparable in the occupied East.',
        citations: citations(['hitlerMeinKampf', 'mussoliniDoctrine', 'arendtTotalitarianism'], ['ushmmNaziRacism', 'ushmmThirdReich', 'oxfordNaziGermany', 'oxfordImperialism']),
      },
      religion: {
        score: -35,
        label: 'Instrumental, racialized, and state-subordinated religion',
        explanation: 'Nazism was not a straightforward theocracy or a coherent Christian political programme. It negotiated with, pressured, and sometimes cooperated with churches while subordinating independent religious authority to the racial state; it also promoted pseudo-religious myths of blood, destiny, nature, and national rebirth. Religious affiliation did not protect Jews defined by Nazi racial law, and religious resistance varied by institution and individual.',
        citations: citations(['hitlerMeinKampf', 'mussoliniDoctrine', 'arendtTotalitarianism'], ['oxfordNaziGermany', 'bpbNationalSocialism', 'sepReligionPolitics']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'warning',
            text: 'This entry is for historical, civic, and anti-genocidal education. Nazi Germany was a dictatorship that persecuted and murdered millions, including six million Jews in the Holocaust, and waged a racial war of conquest. It must never be presented as an ordinary policy preference, an aesthetic, or a harmless synonym for political disagreement.',
            citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['ushmmThirdReich', 'ushmmNaziRacism', 'unGenocideConvention']),
          },
          {
            type: 'paragraph',
            text: 'National Socialism was the ideology and political movement of the Nazi Party, which became the ruling party of Germany from 1933 until its defeat in 1945. It combined völkisch racial nationalism, antisemitism, anti-Marxism, anti-liberalism, leader dictatorship, mass mobilization, political terror, social conformity, rearmament, territorial expansion, and the construction of a racially defined people’s community. The regime’s policies developed over time, but racial hierarchy and exclusion were not an accidental afterthought: they were central to its political worldview and state practice.',
            citations: citations(['hitlerMeinKampf', 'mussoliniDoctrine', 'griffinNatureFascism'], ['oxfordNationalSocialism', 'ushmmNaziRacism', 'ushmmNaziPartyPlatform']),
          },
          {
            type: 'paragraph',
            text: 'The party name creates a persistent category error. Nazi economic policy was interventionist and directed, but the regime did not pursue worker ownership or communist class equality. It dismantled independent trade unions, persecuted socialists and communists, enabled private firms when useful to the regime, expropriated Jews, used forced labor, and made production serve rearmament and racial empire. “National Socialist” must therefore be interpreted through doctrine, institutions, ownership, labor power, and coercive outcomes—not through the label alone.',
            citations: citations(['hitlerMeinKampf', 'mussoliniDoctrine'], ['oxfordNaziGermany', 'oxfordNationalSocialism', 'ushmmThirdReich']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'The regime sought to transform society through a combination of party organizations, propaganda, policing, law, schooling, youth groups, labor control, racial classification, and ritualized mass politics. The promise of Volksgemeinschaft presented class conflict and individual pluralism as obstacles to national unity, while the regime defined who belonged through ancestry and obedience. Participation could be intense, but it was not equal democratic participation: it was structured around hierarchy, mobilization, surveillance, and exclusion.',
            citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['oxfordNationalSocialism', 'oxfordNaziGermany', 'ushmmThirdReich']),
          },
          {
            type: 'paragraph',
            text: 'Racial law converted ideology into administrative status. The Nuremberg Laws of 1935 removed Jewish Germans from Reich citizenship and prohibited marriages or sexual relations defined as “race mixing.” Classification, registration, dismissal, dispossession, forced separation, ghettoization, deportation, mass shootings, starvation, forced labor, and killing centers formed a cumulative process. The legal and bureaucratic stages should be taught together with the violence, agency, resistance, collaboration, and survival of the people targeted.',
            citations: citations(['hitlerMeinKampf'], ['ushmmNurembergLaws', 'ushmmNaziPartyPlatform', 'ushmmNaziRacism', 'ushmmThirdReich']),
          },
          {
            type: 'paragraph',
            text: 'Nazi violence targeted groups through overlapping but not identical policies. Jews were the primary target of a continent-wide genocide; Roma and Sinti, people with disabilities, Poles, Soviet prisoners of war, Black people in Germany, Jehovah’s Witnesses, homosexual men, political opponents, and others were persecuted, imprisoned, murdered, or subjected to forced labor according to changing racial, political, military, and social classifications. The entry avoids flattening these histories into one undifferentiated victim category.',
            citations: citations(['arendtTotalitarianism', 'hitlerMeinKampf'], ['ushmmNaziRacism', 'ushmmThirdReich', 'unGenocideConvention']),
          },
          {
            type: 'evidence-note',
            text: 'This card uses extreme scores because the historical evidence is unusually clear about dictatorship, racial exclusion, expansionist war, and genocide. It is not a prediction model for contemporary politics and should not be assigned to a living person, party, or state without a separate, documented historical analysis.',
            citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['oxfordNaziGermany', 'ushmmNaziRacism', 'ushmmThirdReich', 'unGenocideConvention']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Imperial Germany and völkisch precursors — before 1918',
            text: 'Nazi ideology drew on pre-existing currents of antisemitism, racial thinking, völkisch nationalism, imperial ambition, social Darwinism, and authoritarian political culture, while transforming them into a distinctive movement. These precursors were widespread and did not mechanically produce Nazism; the historical question is how Nazi organizers selected, radicalized, and institutionalized them after the First World War.',
            citations: citations(['hitlerMeinKampf'], ['oxfordNationalSocialism', 'ushmmNaziRacism']),
          },
          {
            period: 'Defeat, revolution, and the early Nazi movement — 1918–1923',
            text: 'Germany’s defeat, revolution, territorial losses, economic dislocation, political violence, and contested democratic transition created a setting in which radical nationalist groups attacked the Weimar Republic. The Nazi Party emerged from this milieu, attempted the failed Beer Hall Putsch in 1923, and thereafter shifted toward a strategy of electoral expansion, organizational growth, propaganda, and legal capture rather than relying only on an immediate coup.',
            citations: citations(['hitlerMeinKampf'], ['oxfordNationalSocialism', 'oxfordNaziGermany']),
          },
          {
            period: 'Mass party, crisis, and electoral breakthrough — 1924–1932',
            text: 'After 1923 the NSDAP built affiliated organizations aimed at different social groups and presented itself as a national movement capable of transcending class conflict. The Great Depression, political instability, fear of communism, conservative miscalculation, and propaganda helped the party become Germany’s most successful electoral force by 1932. Electoral success was important, but it should not be narrated as a simple popular mandate for genocide: the later dictatorship used appointment, coercion, legal manipulation, terror, and institutional destruction to consolidate power.',
            citations: citations(['hitlerMeinKampf'], ['oxfordNationalSocialism', 'oxfordNaziGermany', 'ushmmThirdReich']),
          },
          {
            period: 'Appointment, Gleichschaltung, and dictatorship — 1933–1934',
            text: 'Hitler became Chancellor in January 1933 through a constitutional appointment by President Hindenburg, after which the Nazi leadership used emergency decrees, the Reichstag Fire Decree, the Enabling Act, violence, arrests, and coordination to destroy political pluralism. Independent unions were dissolved, opposition parties were eliminated, federal and civic institutions were brought under Nazi control, and the regime fused party, state, police, and leader authority in an escalating dictatorship.',
            citations: citations(['hitlerMeinKampf', 'mussoliniDoctrine', 'arendtTotalitarianism'], ['ushmmThirdReich', 'oxfordNaziGermany', 'bpbNationalSocialism']),
          },
          {
            period: 'Racial state and escalating persecution — 1935–1938',
            text: 'The Nuremberg Laws formalized racial citizenship and marriage restrictions in 1935. Anti-Jewish measures expanded into professional exclusion, expropriation, segregation, forced emigration, and public violence. The November 1938 pogrom known as Kristallnacht marked a further escalation from legal discrimination and dispossession toward open, state-organized violence, mass arrests, destruction of synagogues and businesses, and intensified imprisonment.',
            citations: citations(['hitlerMeinKampf'], ['ushmmNurembergLaws', 'ushmmNaziPartyPlatform', 'ushmmNaziRacism', 'oxfordNaziGermany']),
          },
          {
            period: 'War of conquest and racial empire — 1939–1941',
            text: 'The invasion of Poland and subsequent expansion made Nazi racial ideology an imperial project. Occupation regimes imposed mass executions, forced labor, deportation, starvation, demographic engineering, and the destruction of political and cultural elites. The 1941 invasion of the Soviet Union was planned and fought as a war of annihilation, combining military conquest with anti-Jewish murder, anti-communist terror, and the projected reordering of Eastern Europe.',
            citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['ushmmNaziRacism', 'ushmmThirdReich', 'oxfordNaziGermany']),
          },
          {
            period: 'The Holocaust and mass murder — 1941–1945',
            text: 'The Nazi regime and its collaborators murdered six million Jews in the Holocaust through shootings, ghettos, deportations, starvation, forced labor, and killing centers. The murder of Jews was connected to a broader system of persecution and mass killing that also targeted Roma and Sinti, people with disabilities, Soviet prisoners of war, Poles, and others. The timing and mechanisms differed by place, but the genocide was enabled by state policy, administrative coordination, war, local collaboration, and the destruction of democratic and legal safeguards.',
            citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['ushmmNaziRacism', 'ushmmThirdReich', 'unGenocideConvention']),
          },
          {
            period: 'Defeat, Nuremberg, and postwar memory — 1945 onward',
            text: 'Germany’s defeat ended the Nazi regime, but accountability, denazification, prosecution, displacement, survivor testimony, historical research, and memory politics continued for decades. The Nuremberg process and the 1948 Genocide Convention contributed to the development of international criminal law, while later scholarship challenged silence, national self-exculpation, and the tendency to treat perpetrators as an isolated criminal elite rather than examine institutions, collaborators, bystanders, and ordinary participation.',
            citations: citations(['arendtTotalitarianism'], ['unGenocideConvention', 'oxfordNaziGermany', 'ushmmThirdReich']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Völkisch and racial nationalism',
                distinction: 'Defines the nation as an organic, ancestral, and racial community rather than a political association of equal citizens.',
                relation: 'A major ideological foundation of Nazism, but völkisch nationalism also included currents that did not become Nazi or endorse the full party-state and genocidal programme.',
                citations: citations(['hitlerMeinKampf'], ['oxfordNationalSocialism', 'ushmmNaziRacism', 'sepNationalism']),
              },
              {
                label: 'Nazi party movement',
                distinction: 'A mass organization using propaganda, affiliated associations, electoral competition, street violence, and social penetration to build a people’s party.',
                relation: 'The movement preceded the regime and helps explain mobilization and support; it should not be treated as identical to the later state apparatus or wartime empire.',
                citations: citations(['hitlerMeinKampf'], ['oxfordNationalSocialism', 'oxfordNaziGermany']),
              },
              {
                label: 'Führer-state and polycratic dictatorship',
                distinction: 'The leader principle concentrated ultimate authority while overlapping offices, party agencies, ministries, police bodies, and competing institutions often radicalized policy through cumulative power struggles.',
                relation: 'The “totalitarian” label captures the regime’s ambition and destruction of pluralism, while intentionalist and functionalist debates ask how ideology, leadership, institutions, and local initiative interacted.',
                citations: citations(['arendtTotalitarianism', 'mussoliniDoctrine'], ['oxfordNaziGermany', 'ushmmThirdReich']),
              },
              {
                label: 'Racial state and eugenic policy',
                distinction: 'Uses law, medicine, administration, policing, and reproductive control to classify bodies, restrict marriage, sterilize, exclude, and destroy groups defined as biologically inferior.',
                relation: 'Nazi eugenics was part of a broader international history of racial science, but the Nazi regime radicalized it through dictatorship, war, and genocide.',
                citations: citations(['hitlerMeinKampf'], ['ushmmNaziRacism', 'ushmmNurembergLaws', 'oxfordNaziGermany']),
              },
              {
                label: 'Volksgemeinschaft and social mobilization',
                distinction: 'Promises class transcendence and national solidarity for the racially included while excluding, dispossessing, and terrorizing those defined as enemies or outsiders.',
                relation: 'It helps explain participation and material benefits for some Germans without turning the society into a consensual community or excusing coercion and exclusion.',
                citations: citations(['hitlerMeinKampf'], ['oxfordNationalSocialism', 'ushmmThirdReich']),
              },
              {
                label: 'Lebensraum and racial empire',
                distinction: 'Treats Eastern Europe as territory for German settlement, resource extraction, population removal, forced labor, and domination under a racial hierarchy.',
                relation: 'This is the foreign-policy and colonial dimension of Nazism; it distinguishes the Nazi project from movements that are authoritarian or nationalist without an exterminatory imperial programme.',
                citations: citations(['hitlerMeinKampf', 'mussoliniDoctrine'], ['ushmmNaziRacism', 'ushmmThirdReich', 'oxfordNaziGermany']),
              },
              {
                label: 'Nazi economic direction',
                distinction: 'Combines private firms, state contracts, labor coercion, autarkic aims, rearmament, expropriation, and administrative direction under party and racial objectives.',
                relation: 'The term “socialist” in the party name is not an adequate description of ownership or labor power; the regime’s economic form differed from both laissez-faire liberalism and communist worker ownership.',
                citations: citations(['hitlerMeinKampf', 'mussoliniDoctrine'], ['oxfordNaziGermany', 'oxfordNationalSocialism', 'ushmmThirdReich']),
              },
              {
                label: 'Postwar neo-Nazism',
                distinction: 'Contemporary extremist movements borrow Nazi symbols, antisemitic or racial ideology, Holocaust denial, and authoritarian nationalism in different combinations.',
                relation: 'They are historically related but not identical to the Nazi state; classification requires evidence of organization, doctrine, violence, and actual political capacity, and should not casually label opponents.',
                citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['ushmmNaziRacism', 'sepFascism', 'oxfordNaziGermany']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'Documented examples and boundaries',
        blocks: [
          {
            type: 'paragraph',
            text: 'Nazi Germany from 1933 to 1945 is the central historical case. Within that case, the entry distinguishes the party’s electoral movement, the dictatorship after 1933, racial legislation, the persecution of Jews and other groups, the war of conquest, the Holocaust, and the postwar legal reckoning. The periodization matters because the regime radicalized over time, and because not every early policy was identical to the later exterminatory system.',
            citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['oxfordNationalSocialism', 'oxfordNaziGermany', 'ushmmThirdReich']),
          },
          {
            type: 'paragraph',
            text: 'The Nuremberg Laws, the Reich Citizenship Law, anti-Jewish professional exclusions, the 1938 pogrom, ghettos, deportations, forced labor, mass shootings, and killing centers provide documentary anchors for the transition from ideological exclusion to state-organized persecution and genocide. These events should be taught with survivor testimony, local histories, perpetrator documents, resistance, rescue, collaboration, and the varied experiences of Jewish and non-Jewish victims.',
            citations: citations(['hitlerMeinKampf'], ['ushmmNurembergLaws', 'ushmmNaziPartyPlatform', 'ushmmNaziRacism', 'unGenocideConvention']),
          },
          {
            type: 'paragraph',
            text: 'There is no legitimate contemporary country match for this card. Neo-Nazi organizations and far-right movements can be studied as historical descendants or warning cases, but similar slogans, uniforms, online rhetoric, nationalism, authoritarianism, or immigration policy do not establish identity with Nazi Germany. A responsible comparison must document racial doctrine, institutional power, political violence, treatment of opposition, relation to law, and explicit or operationalized genocidal and expansionist aims.',
            citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['ushmmThirdReich', 'ushmmNaziRacism', 'sepFascism', 'oxfordNaziGermany']),
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'historical-fascist', relation: 'Nazism is a specific German racial-totalitarian form of fascism; it shares mass mobilization, dictatorship, anti-liberalism, and violence, but Nazi antisemitism, racial empire, and genocide must not be generalized to every fascist movement' },
              { id: 'ethnic-nationalist', relation: 'Nazism is an extreme racialized form of ethnonationalism, but ordinary ethnic nationalism does not necessarily include dictatorship, total war, or genocide' },
              { id: 'militarist-imperialist', relation: 'Nazism is a radical case of militarized racial empire, while militarism and imperialism can exist without Nazi party dictatorship or genocidal racial ideology' },
              { id: 'authoritarian-collectivist', relation: 'Both reject liberal pluralism and concentrate power, but Nazi racial nationalism and private-property-compatible direction differ from communist class universalism and state-socialist projects' },
              { id: 'populist', relation: 'Nazi propaganda used people-versus-enemy rhetoric and mass mobilization, but populism is a broad and internally diverse label that does not entail Nazi racial dictatorship' },
              { id: 'national-conservative', relation: 'Some conservative elites collaborated with or enabled Hitler, but national conservatism is not synonymous with National Socialism and must be distinguished by doctrine, organization, violence, and racial goals' },
              { id: 'communist', relation: 'Nazism was violently anti-communist and destroyed communist organizations; similarities in dictatorship or state direction should not erase their fundamentally different class, racial, and national ideologies' },
              { id: 'liberal-constitutionalist', relation: 'Nazism is an explicit historical negation of equal citizenship, constitutional pluralism, independent rights, and accountable limits on state power' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'The first scholarly debate concerns definition and comparison. Fascism has no single uncontested definition, and National Socialism had both shared fascist features and distinctive racial, genocidal, imperial, and German historical content. A useful taxonomy should state which features are being compared and avoid making “fascist” or “Nazi” a free-floating synonym for authoritarian, nationalist, conservative, populist, or state-directed politics.',
            citations: citations(['mussoliniDoctrine', 'griffinNatureFascism', 'arendtTotalitarianism'], ['sepFascism', 'oxfordNaziGermany', 'oxfordNationalSocialism']),
          },
          {
            type: 'paragraph',
            text: 'The second debate concerns intentionalism and functionalism. Historians have examined Hitler’s ideological intentions, the role of institutions and competing agencies, cumulative radicalization, local initiative, popular participation, and the relationship between central orders and decentralized violence. The existence of bureaucratic competition does not reduce responsibility or make genocide accidental; it changes how the process and causal mechanisms are explained.',
            citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['oxfordNaziGermany', 'ushmmThirdReich']),
          },
          {
            type: 'paragraph',
            text: 'The third safeguard is against the “both sides” distortion. Comparing Nazi Germany with another movement does not imply moral or historical equivalence. The Holocaust and Nazi crimes have specific perpetrators, victims, institutions, dates, and mechanisms. Comparative analysis can identify warning patterns—dehumanization, conspiracy claims, destruction of opposition, emergency rule, racial law, and aggressive war—without erasing the specificity of the Holocaust or using it as a rhetorical weapon against groups without evidence.',
            citations: citations(['arendtTotalitarianism', 'hitlerMeinKampf'], ['ushmmNaziRacism', 'ushmmThirdReich', 'unGenocideConvention']),
          },
          {
            type: 'paragraph',
            text: 'The fourth safeguard concerns victims and agency. Jewish victims must remain central to the definition of the Holocaust, while Roma and Sinti, people with disabilities, Poles, Soviet prisoners of war, Black people, political opponents, Jehovah’s Witnesses, homosexual men, forced laborers, and other persecuted groups must not be collapsed into one category. Survivors, resisters, rescuers, exiles, and communities under occupation also had agency and internal diversity that a regime-centered account can obscure.',
            citations: citations(['arendtTotalitarianism'], ['ushmmNaziRacism', 'ushmmThirdReich', 'unGenocideConvention']),
          },
          {
            type: 'paragraph',
            text: 'The fifth safeguard concerns economic and religious simplification. Nazism was neither a simple free-market programme nor communist socialism, and neither a conventional Christian theocracy nor a purely secular philosophy. Its economic and religious institutions were subordinated, negotiated, or instrumentalized through the racial state. Research should identify who owned, directed, benefited from, and was dispossessed by each policy, and how religious institutions responded rather than relying on party labels.',
            citations: citations(['hitlerMeinKampf', 'mussoliniDoctrine'], ['oxfordNaziGermany', 'oxfordNationalSocialism', 'bpbNationalSocialism', 'sepReligionPolitics']),
          },
          {
            type: 'paragraph',
            text: 'Finally, the entry is designed to resist contemporary misuse. Assigning this label to a living person, party, or state requires exceptional evidence and a clearly bounded historical comparison. The site should prefer precise descriptions—antisemitic, racial supremacist, authoritarian, expansionist, genocidal, anti-democratic, or neo-Nazi—when those are the claims supported by the evidence, and should always show the source, period, institution, and uncertainty.',
            citations: citations(['hitlerMeinKampf', 'arendtTotalitarianism'], ['sepFascism', 'oxfordNaziGermany', 'ushmmThirdReich', 'ushmmNaziRacism']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['hitlerMeinKampf', 'mussoliniDoctrine', 'arendtTotalitarianism', 'griffinNatureFascism'],
      researchSourceIds: ['oxfordNationalSocialism', 'oxfordNaziGermany', 'ushmmNaziRacism', 'ushmmThirdReich', 'ushmmNaziPartyPlatform', 'ushmmNurembergLaws', 'bpbNationalSocialism', 'sepFascism', 'sepNationalism', 'sepReligionPolitics', 'unGenocideConvention', 'ohchrMinorityRights'],
      editorialNote: 'This is a historical warning entry. It distinguishes National Socialism from generic fascism, ethnic nationalism, militarism, populism, conservatism, communism, and contemporary extremist labels. Its scores describe the Nazi movement and regime as a historically specific racial-totalitarian and genocidal project, not a current-country classification or ordinary policy option.',
    },
    researchGaps: [
      'Add German-language scholarship and primary documents on völkisch nationalism, Weimar political culture, Gleichschaltung, Nazi law, churches, administration, and postwar memory, with translations clearly marked.',
      'Expand research on Jewish life, Roma and Sinti history, disability persecution, Black Germans, queer victims, Jehovah’s Witnesses, political prisoners, forced laborers, Soviet prisoners of war, and occupied societies without collapsing their experiences.',
      'Compare intentionalist, functionalist, structuralist, social-history, gender-history, economic-history, and transnational approaches while keeping perpetrator responsibility and victim-centered evidence visible.',
      'Add evidence on business, labor, agriculture, welfare, rearmament, expropriation, forced labor, and private firms to explain the Nazi political economy without repeating the party name as an economic classification.',
      'Expand comparative research on collaboration, resistance, rescue, bystanders, local administration, and the relationship between German central decisions and violence in occupied Europe.',
      'Document the postwar development of genocide law, Nuremberg principles, denazification, survivor testimony, Holocaust education, memory conflicts, and the politics of denial.',
      'Maintain a separate, evidence-based method for studying contemporary neo-Nazi and far-right movements so historical analogy does not become casual labeling or erase the specificity of Nazi Germany and the Holocaust.',
    ],
  },
  'libertarian-socialist': {
    id: 'libertarian-socialist',
    title: 'Libertarian socialist',
    canonicalLabel: 'Libertarian socialism',
    aliases: ['libertarian socialism', 'socialist anarchism', 'anti-authoritarian socialism', 'libertarian Marxism', 'self-management socialism'],
    entryType: 'analytical reference profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'Libertarian socialism is treated as a broad anti-authoritarian socialist family seeking social ownership, worker or community self-management, equality, and freedom from both capitalist domination and centralized state command. It includes internally different anarchist, syndicalist, council communist, communalist, autonomist, and market-socialist currents; it is not one uniform programme or a synonym for every decentralized project.',
    timeScope: 'Its modern family developed through nineteenth-century socialist and anarchist debates, the First International, labor and syndicalist movements, revolutionary experiments after 1917, the Spanish Revolution, postwar council and autonomy movements, and contemporary cooperative, municipalist, ecological, and anti-authoritarian organizing.',
    geographicScope: 'Transnational, with major historical references in Europe, Russia and Ukraine, Spain, Latin America, and later global labor, feminist, ecological, anti-colonial, and autonomous movements. The tradition’s internationalism should not obscure local institutions, unequal resources, or the different histories of each experiment.',
    summary: 'A socialist family that seeks collective or social ownership through decentralized, democratic, and anti-authoritarian institutions. It treats freedom as more than non-interference: people should have meaningful control over workplaces, communities, and political decisions. The family is critical of both private-capital domination and party-state command, but its members disagree about markets, federations, parties, revolutionary violence, councils, municipal government, religion, and how large-scale coordination should work.',
    summaryCitations: citations(
      ['bakuninStatism', 'kropotkinMutualAid', 'kropotkinConquestBread', 'luxemburgReformRevolution', 'bookchinLibertarianMunicipalism'],
      ['sepAnarchism', 'sepSocialism', 'sepLuxemburg', 'socialEcologyMunicipalism', 'cambridgeSpanishAnarchism'],
    ),
    dimensionInterpretations: {
      economic: {
        score: 78,
        label: 'Social ownership and worker self-management',
        explanation: 'Private control of major productive assets and hierarchical wage dependence are criticized in favor of cooperatives, common ownership, workplace democracy, social provision, or collectively governed resources. Some currents support non-market allocation, while others accept markets among worker-owned enterprises; the common claim is that capital should not give a separate class unilateral control over production.',
        citations: citations(['kropotkinConquestBread', 'bakuninStatism', 'marxEngelsManifesto'], ['sepSocialism', 'sepAnarchism', 'iloCooperatives', 'iloWorkerCooperatives']),
      },
      social: {
        score: 50,
        label: 'Emancipatory and egalitarian social change',
        explanation: 'The family generally links economic liberation to equality, mutual aid, anti-hierarchy, self-development, and opposition to coercive social institutions. Currents differ over culture, family, religion, national traditions, and the pace of change, so the score indicates an emancipatory tendency rather than one fixed social-policy platform.',
        citations: citations(['kropotkinMutualAid', 'millOnLiberty', 'luxemburgReformRevolution'], ['sepAnarchism', 'sepLuxemburg', 'sepSocialism']),
      },
      authority: {
        score: -75,
        label: 'Anti-authoritarian federation and direct participation',
        explanation: 'The state, party hierarchy, capitalist management, and centralized bureaucracy are treated as risks of domination. Positive alternatives include assemblies, councils, unions, communes, federations, recallable delegates, mutual aid, and direct participation. “Anti-authoritarian” does not mean absence of organization: the central problem is how organized power can remain accountable, revocable, and non-dominating.',
        citations: citations(['bakuninStatism', 'kropotkinMutualAid', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'socialEcologyMunicipalism', 'cambridgeSpanishAnarchism']),
      },
      identity: {
        score: 60,
        label: 'Internationalist and plural local belonging',
        explanation: 'International worker solidarity, cross-border cooperation, and opposition to compulsory national unity are common, while local self-government and community attachment remain important. Anti-nationalism is not uniform: some libertarian socialists support national liberation, Indigenous autonomy, or civic solidarity when these resist domination rather than establish a new hierarchy.',
        citations: citations(['bakuninStatism', 'luxemburgReformRevolution', 'fanonWretchedEarth'], ['sepAnarchism', 'sepLuxemburg', 'sepColonialism']),
      },
      foreign: {
        score: 50,
        label: 'Anti-militarist internationalism and situated self-defense',
        explanation: 'Permanent armies, imperialism, and state militarism are generally rejected, while collective self-defense, armed resistance, or revolutionary war may be accepted in response to domination. The tradition contains serious pacifist and revolutionary disagreements; the score reflects restraint and anti-imperialism, not a claim that every libertarian socialist rejects all force.',
        citations: citations(['bakuninStatism', 'kropotkinMutualAid', 'fanonWretchedEarth'], ['sepAnarchism', 'cambridgeSpanishAnarchism', 'sepColonialism']),
      },
      religion: {
        score: 42,
        label: 'Secular, anti-clerical, and pluralist currents',
        explanation: 'Many currents criticize churches and religious authority when they support hierarchy, while defending freedom of conscience and allowing religious communities to organize voluntarily. Others draw on religious pacifism, communal ethics, or liberation theology. The common boundary is opposition to an unaccountable clerical or state authority, not compulsory atheism.',
        citations: citations(['bakuninStatism', 'kropotkinMutualAid', 'millOnLiberty'], ['sepReligionPolitics', 'sepAnarchism', 'sepSocialism']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Libertarian socialism begins from a double criticism: capitalism gives owners and managers disproportionate control over work and resources, while centralized states and parties can reproduce domination in the name of equality. Its positive proposal is not simply a smaller state or more generous welfare. It seeks institutions in which people affected by a decision participate in making it, workers govern production, communities govern shared life, and larger coordination is built through federations rather than imposed by a permanent ruling center.',
            citations: citations(['bakuninStatism', 'kropotkinMutualAid', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'sepSocialism', 'socialEcologyMunicipalism']),
          },
          {
            type: 'paragraph',
            text: 'The label is broad and historically layered. Anarcho-communists, anarcho-syndicalists, collectivist anarchists, council communists, libertarian Marxists, autonomists, communalists, and some market socialists may all be described as libertarian socialist, yet they disagree about property, money, markets, parties, electoral work, national liberation, technology, ecology, and violence. The card therefore records a family resemblance rather than a single blueprint.',
            citations: citations(['bakuninStatism', 'kropotkinConquestBread', 'luxemburgReformRevolution', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'sepLuxemburg', 'cambridgeSpanishAnarchism']),
          },
          {
            type: 'evidence-note',
            text: '“Libertarian” here means freedom from domination and collective self-government, not the U.S. market-libertarian meaning of strong private property and minimal government. “Socialist” here means social or collective control over production and social life, not automatic support for a centralized party-state.',
            citations: citations(['bakuninStatism', 'kropotkinConquestBread', 'millOnLiberty'], ['sepAnarchism', 'sepSocialism', 'iloWorkerCooperatives']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'The economic core is self-management. A workplace may be owned and governed by its workers, a community may manage common resources, or federated associations may coordinate production and distribution. Cooperative practice can embody pieces of this vision without abolishing capitalism or the state, so an actual cooperative is evidence of a form of worker control, not proof that a whole society is libertarian socialist. Membership rules, decision rights, surplus distribution, relations with non-members, and accountability all matter.',
            citations: citations(['kropotkinConquestBread', 'bookchinLibertarianMunicipalism'], ['iloCooperatives', 'iloWorkerCooperatives', 'sepSocialism']),
          },
          {
            type: 'paragraph',
            text: 'The political core is anti-domination rather than administrative absence. Assemblies, councils, unions, communes, and federations require rules, delegation, expertise, records, conflict resolution, and mechanisms for coordinating across scale. Libertarian socialists typically prefer recallable or instructed delegates to independent rulers, but debates persist over whether complex societies can avoid durable specialization, informal elites, charismatic leadership, or coercive enforcement.',
            citations: citations(['bakuninStatism', 'bookchinLibertarianMunicipalism', 'luxemburgReformRevolution'], ['sepAnarchism', 'socialEcologyMunicipalism', 'sepLuxemburg']),
          },
          {
            type: 'paragraph',
            text: 'Freedom is understood positively as the capacity to participate in shaping the conditions of life, and negatively as protection from state, capitalist, patriarchal, racial, colonial, and religious domination. Mutual aid is treated as an organizing principle, not proof that conflict or coercion disappears. The tradition therefore needs a theory of minority rights, dissent, defense, ecological limits, inter-community obligations, and fair procedures when consensus fails.',
            citations: citations(['kropotkinMutualAid', 'millOnLiberty', 'bakuninStatism'], ['sepAnarchism', 'sepReligionPolitics', 'sepSocialism']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Nineteenth-century socialist and anarchist roots',
            text: 'Modern libertarian socialism emerged from conflicts within the socialist movement over property, state power, organization, revolution, and the meaning of emancipation. Bakunin and other anti-authoritarian socialists rejected the idea that a revolutionary minority or state bureaucracy could liberate workers by ruling on their behalf. Kropotkin developed arguments about mutual aid, decentralized cooperation, and common access, while anarchist and socialist currents debated collectivist, communist, mutualist, and syndicalist forms.',
            citations: citations(['bakuninStatism', 'kropotkinMutualAid', 'kropotkinConquestBread'], ['sepAnarchism', 'sepSocialism']),
          },
          {
            period: 'First International and the conflict over the state',
            text: 'The International Workingmen’s Association became a major arena for disagreement between Marxist and anti-authoritarian strategies. The conflict was not simply personal: it involved the role of political parties, state power, revolutionary transition, unions, federal organization, and whether centralized authority could be safely used and later dissolved. These debates shaped the later boundary between state socialism and libertarian socialist traditions.',
            citations: citations(['bakuninStatism', 'marxEngelsManifesto'], ['sepAnarchism', 'sepSocialism']),
          },
          {
            period: 'Syndicalism and the labor movement — late nineteenth and early twentieth centuries',
            text: 'Anarcho-syndicalists treated unions as instruments of struggle and possible nuclei of a future society, using direct action, solidarity, strikes, and worker organization rather than relying primarily on electoral parties. Syndicalism varied by country and could combine workplace democracy with local federations, revolutionary general strikes, and debates over whether unions should administer production, negotiate reforms, or prepare for insurrection.',
            citations: citations(['bakuninStatism', 'kropotkinConquestBread'], ['sepAnarchism', 'cambridgeSpanishAnarchism', 'openTextbook']),
          },
          {
            period: 'The Russian Revolution and Makhnovist Ukraine — 1917–1921',
            text: 'The Russian Revolution became a global reference point and a source of division. Anti-authoritarian socialists welcomed revolutionary transformation but criticized Bolshevik centralization, party dictatorship, and the suppression of autonomous worker and peasant power. The Makhnovist movement in Ukraine remains a contested case of peasant self-organization, revolutionary defense, and anti-state politics under war; it should not be romanticized or treated as a complete model outside its violent context.',
            citations: citations(['bakuninStatism', 'leninStateRevolution'], ['sepAnarchism', 'makhnoRuralAnarchism', 'cambridgeAnarchismBolshevism']),
          },
          {
            period: 'Spanish Revolution and Civil War — 1936–1939',
            text: 'The Spanish Revolution offered one of the largest historical experiments in anarcho-syndicalist organization. In parts of Republican Spain, unions and local bodies collectivized workplaces, agriculture, transport, and services while facing war, state pressure, internal conflict, scarcity, and military defeat. The record contains evidence of practical self-management as well as coercion, uneven participation, military constraints, disputes with communists and republicans, and unresolved questions about scale and coordination.',
            citations: citations(['bakuninStatism', 'kropotkinConquestBread'], ['cambridgeSpanishAnarchism', 'sepAnarchism', 'cambridgeAnarchismBolshevism']),
          },
          {
            period: 'Council, autonomy, and anti-bureaucratic socialism — 1945–1970s',
            text: 'Postwar worker and council movements revisited the relationship among workplace democracy, party organization, bureaucracy, and state power. The Hungarian Revolution, Yugoslav self-management, Western European council currents, autonomist Marxism, and independent socialist groups generated different proposals and practices. They cannot be collapsed into anarchism, but they broadened the libertarian socialist argument that formal nationalization is not equivalent to worker control.',
            citations: citations(['luxemburgReformRevolution', 'bakuninStatism'], ['sepLuxemburg', 'sepSocialism', 'openTextbook']),
          },
          {
            period: 'Communalism, ecology, feminism, and autonomy — late twentieth century',
            text: 'Later currents connected anti-authoritarian socialism to ecological limits, feminist critiques of patriarchy, municipal democracy, anti-racist organizing, and opposition to bureaucratic development. Bookchin’s libertarian municipalism proposed democratic municipalities and confederations as a route beyond both state socialism and private capitalism, while other autonomist and community movements emphasized prefigurative institutions, mutual aid, or refusal of centralized representation.',
            citations: citations(['bookchinLibertarianMunicipalism', 'kropotkinMutualAid'], ['socialEcologyMunicipalism', 'sepAnarchism', 'sepEnvironmentalEthics']),
          },
          {
            period: 'Contemporary cooperative and autonomous practice',
            text: 'Today, worker cooperatives, solidarity economies, community land projects, mutual-aid networks, municipal experiments, union democracy, and autonomous movements may enact parts of the tradition within states and markets. The existence of such institutions demonstrates possible forms of participation and ownership, not the disappearance of hierarchy, market pressure, unequal expertise, or dependence on public law. Claims about a whole libertarian socialist society require much stronger evidence.',
            citations: citations(['bookchinLibertarianMunicipalism', 'kropotkinMutualAid'], ['iloCooperatives', 'iloWorkerCooperatives', 'socialEcologyMunicipalism']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Anarcho-communism',
                distinction: 'Favors abolition of the state and private capital, common ownership, decentralized communes, and distribution according to needs rather than wages or markets.',
                relation: 'A major libertarian socialist current, but other variants retain wages, exchange, worker ownership, or mixed forms of property.',
                citations: citations(['kropotkinConquestBread', 'bakuninStatism'], ['sepAnarchism', 'sepSocialism']),
              },
              {
                label: 'Anarcho-syndicalism',
                distinction: 'Places unions, direct action, worker solidarity, and the general strike at the center of social transformation and possible workplace administration.',
                relation: 'More organizationally focused than a general anti-state philosophy; syndicalists disagree about elections, revolutionary timing, and relations with other movements.',
                citations: citations(['bakuninStatism', 'kropotkinConquestBread'], ['cambridgeSpanishAnarchism', 'sepAnarchism']),
              },
              {
                label: 'Council communism and libertarian Marxism',
                distinction: 'Treats workers’ councils and direct control of production as alternatives to both capitalist management and a centralized revolutionary party.',
                relation: 'Shares anti-bureaucratic socialism but can retain Marxist analysis of class and historical development; it is not identical to anarchism.',
                citations: citations(['luxemburgReformRevolution', 'marxEngelsManifesto'], ['sepLuxemburg', 'sepSocialism', 'openTextbook']),
              },
              {
                label: 'Mutualism and market socialism',
                distinction: 'Accepts some exchange or markets while seeking reciprocal credit, worker ownership, cooperative production, and limits on rent, monopoly, or capitalist domination.',
                relation: 'Shows why anti-capitalist social ownership does not always mean abolishing every market; the boundary is control and class power, not only price mechanisms.',
                citations: citations(['bakuninStatism', 'millOnLiberty'], ['sepAnarchism', 'sepSocialism', 'iloWorkerCooperatives']),
              },
              {
                label: 'Libertarian municipalism and communalism',
                distinction: 'Builds direct democracy in municipalities and links them through confederations, with ecology and civic participation as central concerns.',
                relation: 'A later institutional proposal that differs from classical anarcho-communism while sharing anti-state and anti-capitalist aims.',
                citations: citations(['bookchinLibertarianMunicipalism', 'kropotkinMutualAid'], ['socialEcologyMunicipalism', 'sepAnarchism']),
              },
              {
                label: 'Autonomism and prefigurative politics',
                distinction: 'Emphasizes autonomous organization, refusal of party mediation, worker and social movements, and building desired relations in the present.',
                relation: 'Can overlap with libertarian Marxism, feminism, anti-racism, and community organizing without requiring one constitutional model or a complete common economy.',
                citations: citations(['luxemburgReformRevolution', 'kropotkinMutualAid'], ['sepLuxemburg', 'sepAnarchism', 'openTextbook']),
              },
              {
                label: 'Revolutionary anti-authoritarian socialism',
                distinction: 'Accepts insurrectionary or armed struggle against state and capitalist domination while rejecting a permanent revolutionary government.',
                relation: 'Creates a persistent tension: emergency defense can centralize command, suspend dissent, and reproduce the state form the movement sought to abolish.',
                citations: citations(['bakuninStatism', 'fanonWretchedEarth'], ['sepAnarchism', 'cambridgeSpanishAnarchism', 'sepColonialism']),
              },
              {
                label: 'Religious or ethical libertarian socialism',
                distinction: 'Grounds solidarity, common ownership, nonviolence, or anti-hierarchy in religious ethics, conscience, or communal practice rather than materialist theory alone.',
                relation: 'Can share social ownership and anti-domination while disagreeing with anti-clerical or atheistic currents about authority, community, and moral law.',
                citations: citations(['kropotkinMutualAid', 'millOnLiberty'], ['sepReligionPolitics', 'sepSocialism']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'Illustrative examples and boundaries',
        blocks: [
          {
            type: 'paragraph',
            text: 'There is no single sovereign-state match for libertarian socialism. The profile describes a political and economic orientation that has appeared in movements, communes, unions, councils, cooperatives, and revolutionary territories, often under conditions where war, repression, scarcity, or surrounding state systems shaped what was possible. A cooperative or autonomous zone can be a partial example without constituting a complete libertarian socialist society.',
            citations: citations(['bookchinLibertarianMunicipalism', 'kropotkinMutualAid'], ['sepAnarchism', 'iloCooperatives', 'iloWorkerCooperatives']),
          },
          {
            type: 'paragraph',
            text: 'The Spanish anarchist collectives, the Makhnovist movement in Ukraine, workers’ councils, and cooperative or municipal experiments are useful historical cases because they expose both the promise and the difficulty of self-management. Their institutions differed in membership, coercion, gender relations, military organization, relation to markets, and interaction with other political forces. They should be studied as evidence about practices and trade-offs, not as proof that the entire doctrine succeeded or failed.',
            citations: citations(['bakuninStatism', 'kropotkinConquestBread', 'bookchinLibertarianMunicipalism'], ['cambridgeSpanishAnarchism', 'makhnoRuralAnarchism', 'socialEcologyMunicipalism', 'iloCooperatives']),
          },
          {
            type: 'paragraph',
            text: 'Rosa Luxemburg, Mikhail Bakunin, Peter Kropotkin, Murray Bookchin, and worker-control theorists represent different arguments within the family. Luxemburg defended mass democracy while criticizing bureaucratic substitution; Bakunin attacked state socialism; Kropotkin developed mutual-aid and communal arguments; Bookchin proposed municipal confederation and social ecology. They are reference points in a debate, not interchangeable authors of one programme.',
            citations: citations(['luxemburgReformRevolution', 'bakuninStatism', 'kropotkinMutualAid', 'bookchinLibertarianMunicipalism'], ['sepLuxemburg', 'sepAnarchism', 'socialEcologyMunicipalism']),
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'anarcho-communist', relation: 'a close and more specific overlap: anarcho-communism emphasizes stateless common ownership and needs-based distribution, while libertarian socialism includes syndicalist, council, municipalist, autonomist, and market-socialist variants' },
              { id: 'anarchist-communalist', relation: 'shares decentralized anti-state organization and common life, while communalism specifically emphasizes municipal democracy, confederation, and social ecology' },
              { id: 'democratic-socialist', relation: 'shares social ownership, equality, labor power, and democratic aims, but democratic socialism may use the state, elections, and parliamentary institutions more positively' },
              { id: 'social-democratic', relation: 'may share welfare, labor rights, and equality, but social democracy generally reforms or regulates capitalism through the state rather than abolishing capitalist control and state hierarchy' },
              { id: 'anarcho-capitalist', relation: 'both criticize centralized state authority, but libertarian socialism rejects private-capital domination and seeks social ownership while anarcho-capitalism treats private property and markets as central' },
              { id: 'communist', relation: 'shares anti-capitalist and common-ownership language, but libertarian socialism rejects party-state centralization and prioritizes decentralized self-management' },
              { id: 'anti-colonial-liberation', relation: 'can share anti-imperialism, popular mobilization, and self-determination, but anti-colonial liberation may build a national state while libertarian socialism remains skeptical of centralized sovereignty' },
              { id: 'green-commons', relation: 'shares common resources, ecological limits, local participation, and cooperative governance, while green commons can be less anti-state or less committed to abolishing capitalist ownership' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'The first criticism concerns scale and coordination. Face-to-face assemblies and worker cooperatives can govern local decisions, but complex societies also need transport, medicine, energy, scientific research, disaster response, defense, and long supply chains. Federations and delegated expertise may solve some problems, yet they can also create durable administrative elites. A serious model must explain how information, resources, accountability, and recall work across scale.',
            citations: citations(['bookchinLibertarianMunicipalism', 'kropotkinConquestBread'], ['sepAnarchism', 'socialEcologyMunicipalism', 'iloCooperatives']),
          },
          {
            type: 'paragraph',
            text: 'The second criticism concerns participation and informal power. Formal equality in an assembly does not guarantee equal voice when education, gender, race, disability, time, charisma, violence, technical knowledge, or control of information are unevenly distributed. Worker ownership can still reproduce exclusion, and consensus can empower persistent minorities or exhaust less-resourced participants. Safeguards require accessibility, rotation, transparency, independent rights protection, anti-discrimination rules, and ways to dissent without being treated as an enemy of the collective.',
            citations: citations(['luxemburgReformRevolution', 'millOnLiberty', 'kropotkinMutualAid'], ['sepLuxemburg', 'sepAnarchism', 'iloWorkerCooperatives']),
          },
          {
            type: 'paragraph',
            text: 'The third criticism concerns defense and emergency. Revolutionary or autonomous communities may face military attack, blockade, sabotage, or internal violence. Coordinated defense can create command structures, secrecy, rationing, and coercion that undermine anti-authoritarian aims. Historical cases such as Ukraine and Spain show why self-defense cannot be separated from questions of who commands, who decides, how dissent is handled, and whether emergency powers expire.',
            citations: citations(['bakuninStatism', 'fanonWretchedEarth'], ['makhnoRuralAnarchism', 'cambridgeSpanishAnarchism', 'sepAnarchism']),
          },
          {
            type: 'paragraph',
            text: 'The fourth criticism concerns economic incentives and common resources. Abolishing private capital does not by itself resolve scarcity, ecological limits, free-riding, skill allocation, investment, maintenance, or conflict between local autonomy and wider equality. Markets, planning, rationing, gift economies, and federated allocation each create different risks. The entry should record the actual allocation mechanism rather than treating “common ownership” as a complete economic explanation.',
            citations: citations(['kropotkinConquestBread', 'bookchinLibertarianMunicipalism'], ['sepSocialism', 'iloCooperatives', 'iloWorkerCooperatives']),
          },
          {
            type: 'paragraph',
            text: 'The fifth criticism concerns the state question. Rejecting the state can protect against bureaucracy and coercive hierarchy, but it can also leave communities vulnerable to armed neighbors, private violence, border pressures, or unequal informal authority. Conversely, capturing the state to pursue socialism may produce a new ruling layer. The dispute is not solved by declaring one side pure: research must compare institutional checks, social power, minority protection, and the ability to change or leave an organization.',
            citations: citations(['bakuninStatism', 'luxemburgReformRevolution'], ['sepAnarchism', 'sepLuxemburg', 'cambridgeAnarchismBolshevism']),
          },
          {
            type: 'paragraph',
            text: 'Finally, the label can become romantic or dismissive. Admirers may treat every autonomous experiment as proof of a complete alternative, while critics may treat every failure under war or repression as proof that self-management is impossible. A careful account gives partial credit for documented institutions, records their exclusions and failures, and distinguishes a normative ideal, a movement strategy, a temporary experiment, a cooperative enterprise, and a durable political order.',
            citations: citations(['bookchinLibertarianMunicipalism', 'kropotkinMutualAid', 'bakuninStatism'], ['sepAnarchism', 'cambridgeSpanishAnarchism', 'makhnoRuralAnarchism', 'iloCooperatives']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['bakuninStatism', 'kropotkinMutualAid', 'kropotkinConquestBread', 'luxemburgReformRevolution', 'bookchinLibertarianMunicipalism', 'marxEngelsManifesto', 'millOnLiberty', 'fanonWretchedEarth'],
      researchSourceIds: ['sepAnarchism', 'sepSocialism', 'sepLuxemburg', 'cambridgeAnarchismBolshevism', 'cambridgeSpanishAnarchism', 'makhnoRuralAnarchism', 'socialEcologyMunicipalism', 'iloCooperatives', 'iloWorkerCooperatives', 'sepReligionPolitics', 'sepColonialism', 'sepEnvironmentalEthics', 'openTextbook'],
      editorialNote: 'This entry treats libertarian socialism as a broad family resemblance rather than a single doctrine. It distinguishes anti-authoritarian socialism from market libertarianism, state socialism, social democracy, anarcho-communism, communalism, and cooperative practice, and records both the emancipatory aims and the institutional problems of self-management.',
    },
    researchGaps: [
      'Add original-language research in Spanish, Catalan, French, German, Italian, Russian, Ukrainian, Portuguese, Arabic, and other relevant languages on syndicalism, councils, communalism, autonomy, and worker control.',
      'Compare anarcho-communism, anarcho-syndicalism, mutualism, council communism, libertarian Marxism, autonomism, communalism, and market socialism without treating one current as the definition of the whole family.',
      'Expand evidence on women’s labor, feminist self-organization, racialized and colonial power, Indigenous autonomy, disability, migration, sexuality, and informal hierarchy within libertarian socialist movements and experiments.',
      'Study the actual governance and economic performance of worker cooperatives, communes, councils, municipal confederations, and solidarity economies, including membership exclusions, capital access, productivity, ecological limits, and relations with surrounding markets and states.',
      'Compare the effects of war, repression, scarcity, and emergency command on anti-authoritarian institutions in Ukraine, Spain, and later autonomous or communal experiments.',
      'Clarify how libertarian socialists would provide constitutional rights, adjudication, public health, education, infrastructure, scientific research, defense, and interregional redistribution without reproducing unaccountable bureaucracy.',
      'Test whether the six-dimensional profile should separately score social ownership, workplace democracy, anti-state authority, localism, internationalism, anti-militarism, and secular or religious pluralism rather than combining them into one card.',
    ],
  },
  'indigenous-relational-governance': {
    id: 'indigenous-relational-governance',
    title: 'Indigenous self-determination / relational governance',
    canonicalLabel: 'Indigenous self-determination / relational governance',
    aliases: [
      'Indigenous governance traditions',
      'Indigenous constitutionalism',
      'relational governance',
      'Indigenous autonomy',
    ],
    entryType: 'comparative historical and constitutional profile',
    status: 'researched-draft',
    confidence: 'low',
    scopeNote: 'This is a comparative teaching profile, not a single Indigenous ideology or a claim that Indigenous peoples share one political system. It places distinct nations, communities, laws, languages, and historical periods in relation while keeping their differences and rights of self-description visible.',
    timeScope: 'Deep historical traditions through contemporary self-determination and constitutional-rights movements; exact institutions and meanings must be dated and located.',
    geographicScope: 'Global and deliberately plural: the examples include Haudenosaunee territories, Mande regions, Aotearoa New Zealand, and North American tribal governments, but they are not representative of all Indigenous peoples.',
    summary: 'A cautious comparative profile for governance grounded in collective self-determination, place-based authority, reciprocal obligations, intergenerational responsibility, and negotiated relations among communities. It highlights recurring institutional themes without turning Indigenous peoples into a romantic alternative to the state or market.',
    summaryCitations: citations(
      ['ostromGoverningCommons', 'fanonWretchedEarth', 'cesaireDiscourseColonialism'],
      ['unIndigenousDeclaration', 'oxfordTribalConstitutions', 'sepColonialism'],
    ),
    dimensionInterpretations: {
      economic: {
        score: 38,
        label: 'Community and stewardship oriented, but internally diverse',
        explanation: 'Land, water, food, and other resources may be governed through collective responsibilities, customary tenure, reciprocal exchange, household use, or mixed contemporary institutions. The profile does not assume common ownership, reject markets, or treat “traditional economy” as a single system.',
        citations: citations(['ostromGoverningCommons', 'fanonWretchedEarth'], ['unIndigenousDeclaration', 'sepEnvironmentalEthics']),
      },
      social: {
        score: 8,
        label: 'Relational and context-dependent',
        explanation: 'Social obligations, kinship, gender roles, age, ceremony, and individual autonomy vary widely across nations and periods. The profile resists both romantic claims of universal egalitarianism and colonial descriptions that mistake difference from European institutions for social absence.',
        citations: citations(['ostromGoverningCommons', 'cesaireDiscourseColonialism'], ['oxfordTribalConstitutions', 'pmcIndigenousDeliberative']),
      },
      authority: {
        score: -38,
        label: 'Distributed, customary, and deliberative authority',
        explanation: 'Many documented cases use councils, clan or kin responsibilities, recall or accountability practices, layered jurisdictions, and negotiated decision-making rather than a single bureaucratic sovereign. Distributed authority is not the same as no authority, and contemporary Indigenous governments may also use written constitutions, courts, executives, and legislatures.',
        citations: citations(['ostromGoverningCommons', 'millOnLiberty'], ['oxfordTribalConstitutions', 'pmcIndigenousDeliberative', 'sepDemocracy']),
      },
      identity: {
        score: 4,
        label: 'Collective nationhood without one nation-state model',
        explanation: 'Indigenous peoples commonly assert collective political identity, territorial relationships, and self-determination, while confederacies, treaties, diplomacy, and international rights connect communities beyond a single state. The score therefore stays near the middle: it should not force Indigenous nationhood into either state nationalism or abstract cosmopolitanism.',
        citations: citations(['fanonWretchedEarth', 'cesaireDiscourseColonialism'], ['unIndigenousDeclaration', 'waitangiTribunalTreaty', 'sepColonialism']),
      },
      foreign: {
        score: 34,
        label: 'Diplomatic and peace-oriented, with self-defense traditions',
        explanation: 'Confederation, treaty-making, peace-building, and intercommunity diplomacy are important in several documented cases, but Indigenous political histories also include warfare, defense, territorial competition, and resistance to conquest. The profile is not pacifist by definition and does not equate diplomacy with submission.',
        citations: citations(['gandhiHindSwaraj', 'fanonWretchedEarth'], ['pmcIndigenousDeliberative', 'waitangiTribunalTreaty', 'unIndigenousDeclaration']),
      },
      religion: {
        score: -18,
        label: 'Spiritual and legal orders often interwoven, but not uniform',
        explanation: 'In many traditions, land, ancestors, ceremony, law, and political responsibility are not separated into modern “religion” and “state” compartments. This does not establish clerical rule: authority may be held through kinship, custodianship, elders, councils, or community law, and contemporary Indigenous governments may operate within secular, pluralist, or hybrid constitutional frameworks.',
        citations: citations(['ostromGoverningCommons', 'cesaireDiscourseColonialism'], ['unIndigenousDeclaration', 'waitangiTribunalTreaty', 'sepReligionPolitics']),
      },
    },
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'Indigenous self-determination is a right and political claim held by peoples, while relational governance is an analytical shorthand for recurring attention to kinship, place, reciprocal obligation, intergenerational responsibility, and negotiated authority. They should not be treated as synonyms or as one worldwide ideology. The United Nations Declaration on the Rights of Indigenous Peoples recognizes self-determination, autonomy or self-government, participation, cultural integrity, and relationships with lands and resources; it is an international standard, not a complete description of every Indigenous constitution.',
            citations: citations(['fanonWretchedEarth'], ['unIndigenousDeclaration']),
          },
          {
            type: 'paragraph',
            text: 'The profile exists to correct a common classification error. Indigenous political orders were not simply “pre-political” societies waiting for a state, but neither should every Indigenous institution be translated into a modern European category such as liberal democracy, socialism, anarchism, or environmentalism. The evidence must name the people, language, place, institution, period, and source tradition before making a comparison.',
            citations: citations(['cesaireDiscourseColonialism', 'ostromGoverningCommons'], ['oxfordTribalConstitutions', 'sepColonialism', 'pmcIndigenousDeliberative']),
          },
        ],
      },
      {
        id: 'description',
        title: 'Description',
        blocks: [
          {
            type: 'paragraph',
            text: 'The strongest shared theme is authority as a relationship rather than only a command issued by an office. Councils, clans, households, elders, chiefs, elected representatives, ceremonial authorities, customary law, and contemporary courts can coexist. Some roles are hereditary or status-based; others are selected, accountable, recalled, or constrained by community expectations. “Horizontal” is therefore too simple: many systems combine hierarchy, reciprocity, gendered authority, local autonomy, and intercommunity negotiation.',
            citations: citations(['ostromGoverningCommons', 'millOnLiberty'], ['oxfordTribalConstitutions', 'pmcIndigenousDeliberative']),
          },
          {
            type: 'paragraph',
            text: 'Economic life is also plural. Customary land tenure, collective responsibilities, household production, trade, tribute, redistribution, subsistence, and modern enterprises have appeared in different combinations. A community relationship to land may include material use, jurisdiction, identity, ceremony, and obligations to future generations at once; it cannot be reduced to either private property or an undifferentiated commons. Contemporary self-government may therefore combine Indigenous law with state law, private transactions, public services, and negotiated resource agreements.',
            citations: citations(['ostromGoverningCommons', 'senDevelopmentFreedom'], ['unIndigenousDeclaration', 'sepEnvironmentalEthics', 'oxfordTribalConstitutions']),
          },
          {
            type: 'paragraph',
            text: 'The profile also treats colonialism as an institutional force, not merely a past event. Conquest, removal, land expropriation, imposed administrative categories, residential or mission schooling, criminalization of ceremony, and state recognition regimes altered Indigenous authority and evidence archives. A written constitution produced under a colonial policy may express Indigenous adaptation, strategic defense, imposed forms, or all three. The researcher should keep Indigenous law, colonial description, and later state recognition separate.',
            citations: citations(['cesaireDiscourseColonialism', 'fanonWretchedEarth'], ['sepColonialism', 'oxfordTribalConstitutions', 'waitangiTribunalTreaty']),
          },
        ],
      },
      {
        id: 'history',
        title: 'Historical development',
        timeline: [
          {
            period: 'Before and beyond colonial state categories',
            text: 'Indigenous peoples developed distinct political orders before European colonization, including confederacies, village and kinship institutions, hereditary and selected offices, councils, customary law, diplomatic networks, and stewardship practices. No single global starting date or institutional sequence can be assigned to them.',
            citations: citations(['ostromGoverningCommons'], ['oxfordTribalConstitutions', 'pmcIndigenousDeliberative']),
          },
          {
            period: 'Haudenosaunee confederated governance',
            text: 'The Kayanere’kó:wa / Great Law of Peace is a living oral constitutional tradition associated with the Haudenosaunee Confederacy. Later scholarly accounts describe councils, clan relationships, diplomacy, and constraints on political and military authority, but the tradition must not be detached from its language communities, custodians, transmission practices, and ongoing sovereignty.',
            citations: citations(['ostromGoverningCommons'], ['oxfordTribalConstitutions', 'pmcIndigenousDeliberative']),
          },
          {
            period: 'Mande political memory and customary constitutional traditions',
            text: 'The Manden Charter and related Mande oral traditions are remembered through norms concerning peace, dignity, social obligations, land, trade, and relations among communities. Their later recording and UNESCO recognition do not turn a transmitted charter into a verbatim medieval constitution; oral performance, regional variation, and community authority remain part of the evidence boundary.',
            citations: citations(['fanonWretchedEarth'], ['unIndigenousDeclaration', 'sepColonialism']),
          },
          {
            period: 'Colonial treaties and contested constitutional relationships',
            text: 'Te Tiriti o Waitangi / the Treaty of Waitangi illustrates how Indigenous authority and colonial governance can be joined through a disputed treaty relationship. The Māori and English texts use different political vocabularies and have generated continuing disputes over kāwanatanga, tino rangatiratanga, land, and the scope of Crown authority. It is a specific Māori–Crown history, not a template for all Indigenous peoples.',
            citations: citations(['cesaireDiscourseColonialism'], ['waitangiTribunalTreaty', 'unIndigenousDeclaration']),
          },
          {
            period: 'Assimilation, recognition, and constitutional adaptation',
            text: 'Colonial and national governments often attempted to replace Indigenous institutions or confine them within administrative categories. Indigenous nations responded through resistance, diplomacy, written constitutions, litigation, cultural renewal, treaty claims, and new intergovernmental institutions. Modern tribal governments can therefore be simultaneously Indigenous, constitutional, bureaucratic, customary, and shaped by imposed legal frameworks.',
            citations: citations(['fanonWretchedEarth', 'cesaireDiscourseColonialism'], ['oxfordTribalConstitutions', 'sepColonialism', 'unIndigenousDeclaration']),
          },
          {
            period: 'Contemporary self-determination and international rights',
            text: 'Since the late twentieth century, Indigenous movements have secured greater international recognition of collective rights, self-determination, participation, cultural integrity, land and resource relationships, and free, prior, and informed consent. Implementation remains uneven: a declaration or constitutional clause does not by itself establish effective jurisdiction, material security, equality, or protection from extraction and coercion.',
            citations: citations(['senDevelopmentFreedom'], ['unIndigenousDeclaration', 'sepColonialism']),
          },
        ],
      },
      {
        id: 'variants',
        title: 'Variants and internal debates',
        blocks: [
          {
            type: 'comparison',
            rows: [
              {
                label: 'Confederated and council governance',
                distinction: 'Links multiple peoples or communities through councils, diplomacy, layered authority, and negotiated peace.',
                relation: 'Strongest match for the authority and foreign-policy dimensions, but institutions and decision rules vary by nation and tradition.',
                citations: citations(['ostromGoverningCommons'], ['oxfordTribalConstitutions', 'pmcIndigenousDeliberative']),
              },
              {
                label: 'Land- and resource-stewardship governance',
                distinction: 'Treats relations with land, water, animals, and future generations as political and ethical responsibilities as well as economic questions.',
                relation: 'Moves the profile toward collective stewardship without proving common ownership or a single ecological ideology.',
                citations: citations(['ostromGoverningCommons', 'senDevelopmentFreedom'], ['sepEnvironmentalEthics', 'unIndigenousDeclaration']),
              },
              {
                label: 'Treaty-based Indigenous sovereignty',
                distinction: 'Uses treaties, constitutional agreements, and intergovernmental relationships to protect jurisdiction, identity, resources, and political authority.',
                relation: 'Can be simultaneously self-determining, diplomatic, and legally plural; it should not be collapsed into secessionist nationalism.',
                citations: citations(['fanonWretchedEarth'], ['waitangiTribunalTreaty', 'unIndigenousDeclaration']),
              },
              {
                label: 'Contemporary Indigenous constitutional government',
                distinction: 'Combines Indigenous political authority with written constitutions, elections, courts, public administration, and statutory or treaty relationships with a state.',
                relation: 'Shows why Indigenous governance is not equivalent to an absence of formal institutions or to a timeless customary order.',
                citations: citations(['millOnLiberty', 'ostromGoverningCommons'], ['oxfordTribalConstitutions', 'unIndigenousDeclaration']),
              },
              {
                label: 'Anti-colonial and cultural-renewal movements',
                distinction: 'Prioritizes resistance to imposed sovereignty, restoration of land and language, political recognition, and community control over development.',
                relation: 'May overlap with socialism, nationalism, environmentalism, or religious revival, but none of those labels defines every Indigenous movement.',
                citations: citations(['fanonWretchedEarth', 'cesaireDiscourseColonialism'], ['sepColonialism', 'unIndigenousDeclaration']),
              },
            ],
          },
        ],
      },
      {
        id: 'examples',
        title: 'Historical and contemporary examples',
        blocks: [
          {
            type: 'evidence-note',
            text: 'These examples are evidence anchors, not claims that the named peoples share one ideology or exact six-axis score. Each requires community-aware scholarship, local terminology, periodization, and attention to colonial mediation.',
            citations: citations(['ostromGoverningCommons', 'cesaireDiscourseColonialism'], ['unIndigenousDeclaration', 'oxfordTribalConstitutions']),
          },
          {
            type: 'examples',
            entries: [
              {
                name: 'Haudenosaunee Confederacy / Kayanere’kó:wa',
                period: 'Deep historical tradition; colonial and contemporary continuities',
                match: 'confederated governance and diplomacy anchor',
                caveat: 'The Great Law is an oral and living tradition. English transcriptions and claims about influence on later constitutional systems require source criticism and respect for Haudenosaunee custodianship.',
                citations: citations(['ostromGoverningCommons'], ['oxfordTribalConstitutions', 'pmcIndigenousDeliberative']),
              },
              {
                name: 'Manden Charter / Kurukan Fuga',
                period: 'Medieval West African political memory with continuing oral transmission',
                match: 'customary and confederated constitutional anchor',
                caveat: 'The charter’s dating, wording, regional versions, and relationship to historical state practice are debated; UNESCO recognition is not proof of one unchanged text.',
                citations: citations(['fanonWretchedEarth'], ['unIndigenousDeclaration', 'sepColonialism']),
              },
              {
                name: 'Māori rangatiratanga and Te Tiriti o Waitangi',
                period: '1840–present',
                match: 'treaty-based sovereignty and contested jurisdiction anchor',
                caveat: 'The Māori and English treaty texts are not interchangeable, and the meaning and implementation of the relationship remain contested in Aotearoa New Zealand.',
                citations: citations(['cesaireDiscourseColonialism'], ['waitangiTribunalTreaty', 'unIndigenousDeclaration']),
              },
              {
                name: 'Contemporary Indigenous and tribal governments',
                period: '19th century–present, varying by nation and jurisdiction',
                match: 'constitutional adaptation and self-government anchor',
                caveat: 'Written constitutions, elections, courts, customary institutions, and state recognition regimes should be identified separately for each nation; there is no generic “tribal government” model.',
                citations: citations(['ostromGoverningCommons', 'millOnLiberty'], ['oxfordTribalConstitutions', 'unIndigenousDeclaration']),
              },
            ],
          },
        ],
      },
      {
        id: 'related-labels',
        title: 'Related labels',
        blocks: [
          {
            type: 'related-labels',
            labels: [
              { id: 'green-commons', relation: 'ecological and commons overlap, but green politics is not a substitute for Indigenous self-determination' },
              { id: 'anarchist-communalist', relation: 'distributed-authority overlap, but communalism is a modern theory and Indigenous nations are not examples of it by default' },
              { id: 'anti-colonial-liberation', relation: 'shared opposition to colonial domination, but Indigenous governance includes distinct peoples, laws, and sovereignty claims' },
              { id: 'libertarian-socialist', relation: 'self-management and anti-centralization may overlap, but Indigenous governance is not reducible to socialism' },
              { id: 'civic-nationalist', relation: 'collective political membership may overlap, but Indigenous nationhood is not simply a state-national identity' },
              { id: 'religious-socialist', relation: 'spiritual and social obligations may overlap in some movements, but religious socialism is a different modern family of doctrines' },
            ],
          },
        ],
      },
      {
        id: 'criticisms',
        title: 'Criticism, uncertainty, and safeguards',
        blocks: [
          {
            type: 'paragraph',
            text: 'The first danger is homogenization. “Indigenous” is a legal and political category covering thousands of peoples with different languages, institutions, histories, gender systems, economies, and relations with states. A comparative profile should use family resemblance only as an index for further research, never as a shortcut for assigning every Indigenous person, nation, or movement the same coordinates.',
            citations: citations(['cesaireDiscourseColonialism', 'ostromGoverningCommons'], ['unIndigenousDeclaration', 'sepColonialism']),
          },
          {
            type: 'paragraph',
            text: 'The second danger is romanticization. Councils, consensus, customary law, and stewardship can support accountability and continuity, but they may also coexist with status hierarchy, gender exclusion, interpersonal coercion, conflict, or unequal access to decision-making. Historical sources must record who could speak, who could decide, who was protected, and who was excluded rather than converting a valued principle into a universal social fact.',
            citations: citations(['millOnLiberty', 'ostromGoverningCommons'], ['pmcIndigenousDeliberative', 'oxfordTribalConstitutions']),
          },
          {
            type: 'paragraph',
            text: 'The third danger is colonial mediation. Archives were often created by missionaries, officials, ethnographers, courts, or reformers who translated Indigenous law into categories useful to colonial administration. Community-held oral knowledge, living languages, Indigenous scholars, and nation-specific authorities must therefore shape what can be published, how it is named, and whether a source may be commercially repackaged.',
            citations: citations(['cesaireDiscourseColonialism', 'fanonWretchedEarth'], ['oxfordTribalConstitutions', 'unIndigenousDeclaration', 'waitangiTribunalTreaty']),
          },
          {
            type: 'paragraph',
            text: 'The fourth danger is treating self-determination as symbolic recognition alone. Effective autonomy depends on jurisdiction, land and resource security, material capacity, participation, language, remedy, and freedom from coercive assimilation. International standards can support evaluation, but they do not settle domestic constitutional disputes or replace the authority of the peoples concerned.',
            citations: citations(['senDevelopmentFreedom', 'fanonWretchedEarth'], ['unIndigenousDeclaration', 'sepColonialism']),
          },
          {
            type: 'paragraph',
            text: 'Finally, the six-axis coordinates are provisional. They describe a comparative teaching pattern, not a measurement of Indigenous identity. A future version should allow nation-specific profiles, community review, multiple source traditions, and a “not enough evidence” state rather than requiring every case to be placed on one global map.',
            citations: citations(['ostromGoverningCommons'], ['unIndigenousDeclaration', 'oxfordTribalConstitutions', 'pmcIndigenousDeliberative']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['ostromGoverningCommons', 'fanonWretchedEarth', 'cesaireDiscourseColonialism', 'gandhiHindSwaraj', 'millOnLiberty', 'senDevelopmentFreedom'],
      researchSourceIds: ['unIndigenousDeclaration', 'oxfordTribalConstitutions', 'waitangiTribunalTreaty', 'pmcIndigenousDeliberative', 'sepColonialism', 'sepEnvironmentalEthics', 'sepDemocracy', 'sepReligionPolitics'],
      editorialNote: 'This entry is intentionally comparative and low-confidence. It uses international Indigenous-rights standards, Indigenous/constitutional legal history, peer-reviewed deliberative-democracy research, and political theory as different evidence layers. The examples remain bounded to named peoples and sources; no global Indigenous “essence” or exact country match is inferred.',
    },
    researchGaps: [
      'Add community-reviewed, nation-specific scholarship in Indigenous languages and in Portuguese, French, German, Spanish, and English before expanding the comparative profile.',
      'Separate Haudenosaunee, Mande, Māori, North American tribal, Arctic, Australian, Pacific, Latin American, and other traditions instead of treating current examples as a representative global sample.',
      'Add Indigenous legal scholars and community authorities to review terminology, custodianship, consent, cultural-property limits, and whether each source may be used in a commercial educational product.',
      'Compare customary law, written constitutions, courts, elections, councils, gender and age authority, and state-recognition regimes using nation-specific evidence rather than a generic governance score.',
      'Document land, resource, language, education, health, extraction, climate, and economic institutions without reducing stewardship to an ecological slogan or assuming collective ownership.',
      'Create a nation-specific “insufficient evidence” workflow so the six-axis model can decline to score a tradition when the evidence or community permission is inadequate.',
    ],
  },
};
