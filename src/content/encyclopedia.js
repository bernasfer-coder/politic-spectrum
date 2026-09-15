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
      ['sepSocialism'],
    ),
    dimensionInterpretations: {
      economic: {
        score: 88,
        label: 'Strongly collectivist',
        explanation: 'Major productive resources are expected to be socially or publicly directed, with accumulation and distribution subordinated to a collective political project. “Public ownership” does not by itself establish democratic control; state ownership can also become bureaucratic or coercive.',
        citations: citations(['marxEngelsManifesto', 'leninStateRevolution'], ['sepSocialism']),
      },
      social: {
        score: 18,
        label: 'Slightly progressive / project-dependent',
        explanation: 'The profile is not defined by one fixed position on family, gender, religion, or private morality. Revolutionary movements may promise emancipation while later party-states impose conservative, disciplinary, or rapidly changing social policies.',
        citations: citations(['marxEngelsManifesto', 'arendtTotalitarianism'], ['sepSocialism']),
      },
      authority: {
        score: 86,
        label: 'Strongly authoritarian',
        explanation: 'A centralized party and state claim a leading role in organizing the transition, coordinating production, and defending the revolution. This is the defining contrast with libertarian socialism, council communism, and democratic socialism.',
        citations: citations(['leninStateRevolution', 'arendtTotalitarianism'], ['sepSocialism']),
      },
      identity: {
        score: 38,
        label: 'Internationalist with state-patriotic tension',
        explanation: 'Class solidarity and international revolution temper nationalism in the theory, but actual party-states have also cultivated official patriotism, borders, and state loyalty. Internationalism and state nationalism can therefore coexist uneasily.',
        citations: citations(['marxEngelsManifesto', 'leninStateRevolution'], ['sepSocialism']),
      },
      foreign: {
        score: -24,
        label: 'Somewhat interventionist / defensive-force oriented',
        explanation: 'The profile does not require permanent expansionism. It can justify force as revolutionary defense, anti-imperial struggle, alliance politics, or protection of a socialist state; actual foreign policy varies substantially by period and regime.',
        citations: citations(['leninStateRevolution', 'morgenthauRealism'], []),
      },
      religion: {
        score: 60,
        label: 'Strongly secular public law',
        explanation: 'Public legitimacy is generally grounded in materialist, revolutionary, or party-state reasoning rather than clerical authority. Secular law is not the same as freedom of religion: historical regimes varied from toleration to surveillance, restriction, or active repression.',
        citations: citations(['spinozaPolitical', 'hobbesLeviathan'], ['sepReligionPolitics']),
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
      researchSourceIds: ['sepSocialism', 'sepAnarchism', 'sepReligionPolitics', 'ushmmCommunism'],
      editorialNote: 'References support different layers of the entry: primary texts for stated theories, scholarly works for interpretation, and institutional/encyclopedic sources for bounded historical context. No source is treated as proving an exact six-axis score.',
    },
    researchGaps: [
      'Add country-specific scholarly sources for East Germany, Mao-era China, Vietnam, North Korea, and Cuba rather than relying on a shared comparative frame.',
      'Document internal debates about religion, gender, nationalism, and economic reform separately for each historical case.',
      'Add non-English primary and scholarly literature, especially Russian, Chinese, Vietnamese, German, and Portuguese sources, with translation notes.',
      'Invite review from historians of socialism and comparative authoritarianism before marking the entry as editorially final.',
    ],
  },
  'historical-fascist': {
    id: 'historical-fascist',
    title: 'Historical fascist / Nazi-like',
    canonicalLabel: 'Historical fascist / Nazi-like',
    aliases: [
      'historical fascism',
      'classical fascism',
      'interwar fascism',
      'National Socialism',
      'Nazism',
    ],
    entryType: 'historical warning profile',
    status: 'researched-draft',
    confidence: 'medium',
    scopeNote: 'This is a historical-analytical profile covering interwar fascist movements and regimes, with Nazi Germany treated as an especially radical case. It is not a synonym for every authoritarian, nationalist, conservative, militarist, or right-wing movement.',
    timeScope: 'Primarily late nineteenth-century precursors through the interwar period and the Second World War; post-war analogies require case-specific evidence.',
    geographicScope: 'Originated in Europe, with major cases in Italy and Germany and related movements across Europe; comparisons outside Europe require careful contextual justification.',
    summary: 'A historical warning profile combining exclusionary ultranationalism, an authoritarian leader and movement, mass mobilization, anti-liberal and anti-communist politics, political violence, and a promise of national rebirth. Nazi racial ideology and genocide are central to Nazism, but should not be projected backward onto every Italian or non-Nazi fascist movement.',
    summaryCitations: citations(
      ['griffinNatureFascism', 'mussoliniDoctrine', 'hitlerMeinKampf', 'arendtTotalitarianism'],
      ['sepFascism', 'ushmmFascism', 'bpbFascism', 'bpbNationalSocialism'],
    ),
    dimensionInterpretations: {
      economic: {
        score: 18,
        label: 'Mixed economy under national direction',
        explanation: 'Fascist regimes generally preserved private property in important sectors while subordinating labor, production, trade, and investment to national, military, and regime goals. The score is intentionally near the center: fascism is not defined by a single ownership system, and its economic practice varied between corporatist regulation, private enterprise, state ownership, and wartime command.',
        citations: citations(['mussoliniDoctrine', 'hitlerMeinKampf'], ['sepFascism', 'bpbFascism']),
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
        citations: citations(['mussoliniDoctrine', 'arendtTotalitarianism', 'aquinasMoralPolitical'], ['sepReligionPolitics', 'bpbFascism', 'bpbNationalSocialism']),
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
            citations: citations(['mussoliniDoctrine'], ['ushmmFascism', 'bpbFascism']),
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
                citations: citations(['mussoliniDoctrine'], ['ushmmFascism', 'bpbFascism']),
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
                citations: citations(['mussoliniDoctrine'], ['ushmmFascism', 'bpbFascism']),
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
        'ushmmFascism',
        'bpbFascism',
        'bpbNationalSocialism',
      ],
      editorialNote: 'The entry separates primary fascist and Nazi texts from comparative scholarship and institutional historical sources. The profile is a warning and comparison aid, not a diagnosis of contemporary people or countries.',
    },
    researchGaps: [
      'Add Italian-language scholarship on Fascist Italy, corporatism, the Lateran Pacts, colonial violence, and the regime’s changing racial policy.',
      'Add French- and German-language scholarship on comparative fascism, Vichy, the German Sonderweg debate, and post-war memory without treating all cases as equivalent.',
      'Add country-specific evidence before creating any contemporary movement or country match; avoid inferring fascism from rhetoric alone.',
      'Add specialist review on gender, religion, political economy, colonialism, and the relationship between fascist movements and traditional conservative elites.',
    ],
  },
};
