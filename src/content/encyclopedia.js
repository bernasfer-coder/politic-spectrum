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
      ['hayekKnowledge', 'millOnLiberty', 'nozickASU', 'lockeSecondTreatise'],
      ['sepLibertarianism', 'sepLiberalism'],
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
        'hayekKnowledge',
        'nozickASU',
        'kantPerpetualPeace',
        'morgenthauRealism',
      ],
      researchSourceIds: ['sepLibertarianism', 'sepLiberalism', 'sepReligionPolitics', 'vdem'],
      editorialNote: 'The entry distinguishes primary arguments from comparative philosophical interpretation. Its scores describe one market-libertarian archetype and do not define all classical liberals, libertarians, or market-oriented governments.',
    },
    researchGaps: [
      'Add French-language sources on Constant, Bastiat, and the liberal tradition, with care around the difference between nineteenth-century liberalism and contemporary libertarianism.',
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
      ['sepLiberalism', 'vdem', 'sepReligionPolitics'],
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
        citations: citations(['kantPerpetualPeace', 'andersonImaginedCommunities'], ['sepLiberalism']),
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
        citations: citations(['lockeLetterToleration', 'spinozaPolitical'], ['sepReligionPolitics', 'sepLiberalism']),
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
      ],
      researchSourceIds: ['sepLiberalism', 'sepLibertarianism', 'sepSocialism', 'sepReligionPolitics', 'vdem', 'foreignPolicy'],
      editorialNote: 'This profile distinguishes liberal rights, progressive social reform, and active economic policy rather than treating them as one automatic package. The scores describe a didactic archetype, not a party platform or a measurement of any individual.',
    },
    researchGaps: [
      'Add French-language sources on republicanism, social liberalism, laïcité, and the relationship between universal citizenship and group-based equality.',
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
      ['sepConservatism', 'sepNationalism', 'vdem'],
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
        citations: citations(['burkeReflections', 'hobbesLeviathan'], ['sepConservatism', 'vdem']),
      },
      identity: {
        score: -82,
        label: 'Strongly nationalist / sovereignty-centered',
        explanation: 'Political loyalty centers on the nation, its historical memory, borders, language, and capacity for self-government. The nation may be civic and constitutional or ethnic and exclusionary; the profile records that distinction rather than assuming one definition.',
        citations: citations(['renanNation', 'andersonImaginedCommunities'], ['sepNationalism', 'sepConservatism']),
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
        citations: citations(['burkeReflections', 'aquinasMoralPolitical'], ['sepReligionPolitics', 'sepConservatism']),
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
      researchSourceIds: ['sepConservatism', 'sepNationalism', 'sepReligionPolitics', 'sepLiberalism', 'vdem', 'foreignPolicy'],
      editorialNote: 'The entry separates tradition, national self-determination, civic membership, ethnic exclusion, and authoritarian power. Its scores describe a didactic national-conservative archetype rather than every conservative or nationalist movement.',
    },
    researchGaps: [
      'Add French-language scholarship on Gaullism, republican sovereignty, laïcité, and the tensions between civic universalism and cultural continuity.',
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
    summaryCitations: citations(['bernsteinEvolutionarySocialism', 'keynesGeneralTheory', 'millOnLiberty'], ['sepSocialism', 'sepLiberalism', 'oecdWelfareModels']),
    dimensionInterpretations: {
      economic: {
        score: 58,
        label: 'Strongly social-democratic / redistributive',
        explanation: 'The profile supports substantial redistribution, universal or broad social provision, labor rights, collective bargaining, and public regulation, while usually retaining private firms and market allocation. It is collectivist in social protection and economic power, not necessarily in formal ownership of every productive asset.',
        citations: citations(['bernsteinEvolutionarySocialism', 'keynesGeneralTheory'], ['sepSocialism', 'oecdWelfareModels']),
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
        citations: citations(['bernsteinEvolutionarySocialism', 'lockeSecondTreatise', 'millOnLiberty'], ['sepSocialism', 'vdem', 'oecdWelfareModels']),
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
            citations: citations(['bernsteinEvolutionarySocialism'], ['sepSocialism']),
          },
          {
            period: '1899 onward: Bernstein and evolutionary socialism',
            text: 'Bernstein challenged revolutionary predictions and argued that democratic organization, unions, and gradual reforms could advance social emancipation. His revisionism became a foundational reference point for reformist social democracy, while revolutionary and democratic socialist critics disputed its conclusions.',
            citations: citations(['bernsteinEvolutionarySocialism'], ['sepSocialism']),
          },
          {
            period: '1930s–1950s: Keynesian policy and welfare-state construction',
            text: 'The Great Depression, mass unemployment, war mobilization, and post-war reconstruction strengthened arguments for macroeconomic management, social insurance, public services, and full employment. Post-war welfare states differed in institutional design and were shaped by conservative, liberal, Christian-democratic, and labor parties, not by social democracy alone.',
            citations: citations(['keynesGeneralTheory', 'bernsteinEvolutionarySocialism'], ['sepSocialism', 'oecdWelfareModels']),
          },
          {
            period: '1950s–1970s: post-war social-democratic settlement',
            text: 'Many European systems combined collective bargaining, rising wages, public services, progressive taxation, and economic growth. The settlement expanded social citizenship but remained nationally bounded and could exclude migrants, colonies, women, racial minorities, disabled people, or informal workers from its fullest benefits.',
            citations: citations(['keynesGeneralTheory', 'millOnLiberty'], ['sepSocialism', 'oecdWelfareModels']),
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
            text: 'Social-democratic success also depends on conditions that are not fully controlled by national policy: economic growth, international trade, migration, demographic change, technological shifts, ecological limits, and the bargaining power of organized labor. The profile should therefore be read as an institutional project with changing constraints, not as a fixed list of benefits.',
            citations: citations(['keynesGeneralTheory', 'bernsteinEvolutionarySocialism'], ['sepSocialism', 'oecdWelfareModels', 'foreignPolicy']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['bernsteinEvolutionarySocialism', 'keynesGeneralTheory', 'millOnLiberty', 'wollstonecraftRights', 'lockeSecondTreatise', 'lockeLetterToleration', 'spinozaPolitical', 'renanNation', 'andersonImaginedCommunities', 'kantPerpetualPeace', 'morgenthauRealism', 'marxEngelsManifesto'],
      researchSourceIds: ['sepSocialism', 'sepLiberalism', 'sepReligionPolitics', 'oecdWelfareModels', 'vdem', 'ches', 'foreignPolicy'],
      editorialNote: 'The entry distinguishes reformist socialism, welfare-state social democracy, social liberalism, and democratic socialism. Its scores describe a didactic modern social-democratic archetype, not every party or welfare state carrying the label.',
    },
    researchGaps: [
      'Add German-language scholarship on Bernstein, the SPD, ordoliberal and social-market debates, and post-war welfare institutions.',
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
        explanation: 'Private property, contract, competition, and decentralized exchange are treated as important safeguards for independence and prosperity. The tradition nevertheless includes arguments for public goods, infrastructure, education, regulation, and a limited social minimum, so it is broader than absolute laissez-faire.',
        citations: citations(['adamSmithWealth', 'hayekKnowledge', 'lockeSecondTreatise'], ['sepLiberalism', 'sepLibertarianism']),
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
        explanation: 'Government is legitimate when it protects rights, adjudicates disputes, supplies certain common goods, and acts through accountable law. Arbitrary rule, unchecked executive power, and coercion of peaceful conduct are treated as serious dangers, though the permitted functions of the state remain contested.',
        citations: citations(['lockeSecondTreatise', 'millOnLiberty', 'constantLibertyModerns'], ['sepLiberalism', 'vdem']),
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
            period: 'Nineteenth century: reform, markets, and exclusion',
            text: 'Classical liberal arguments supported free trade, parliamentary reform, civil equality, abolitionist and religious-liberty causes, and opposition to aristocratic privilege. At the same time, many historical liberals accepted restricted suffrage, colonial hierarchy, gender inequality, or racial exclusion. The tradition’s universal language and its uneven application must be studied together.',
            citations: citations(['millOnLiberty', 'wollstonecraftRights', 'constantLibertyModerns'], ['sepLiberalism', 'sepMill']),
          },
          {
            period: 'Twentieth century: old liberalism, welfare liberalism, and libertarian revival',
            text: 'Industrial crisis, mass democracy, war, and inequality produced competing revisions. New or welfare-state liberalism challenged the idea that private property alone secured effective liberty, while Hayekian and later libertarian currents emphasized dispersed knowledge, markets, and the dangers of centralized planning. These are internal disputes within a wider liberal genealogy, not a settled replacement of one label by another.',
            citations: citations(['hayekKnowledge', 'keynesGeneralTheory', 'millOnLiberty'], ['sepLiberalism', 'sepLibertarianism']),
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
        ],
      },
    ],
    references: {
      authorReferenceIds: ['lockeSecondTreatise', 'lockeLetterToleration', 'adamSmithWealth', 'millOnLiberty', 'wollstonecraftRights', 'constantLibertyModerns', 'hayekKnowledge', 'nozickASU', 'keynesGeneralTheory', 'kantPerpetualPeace', 'morgenthauRealism'],
      researchSourceIds: ['sepLiberalism', 'sepLibertarianism', 'sepMill', 'sepLibertyPositiveNegative', 'sepReligionPolitics', 'vdem', 'ches', 'foreignPolicy'],
      editorialNote: 'The entry distinguishes the broad classical-liberal family from libertarian, social-liberal, and constitutionalist neighbors. Its scores describe a didactic reference profile and do not measure every historical liberal, party, or market economy.',
    },
    researchGaps: [
      'Add German-language scholarship on ordoliberalism, the Freiburg tradition, Kantian liberalism, and the post-war social market economy without treating any of them as identical to classical liberalism.',
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
        explanation: 'The profile gives workers and citizens a direct role in ownership, investment, production, and distribution through public enterprises, cooperatives, workplace democracy, social funds, or other forms of social ownership. It can retain markets for some goods and does not require one centralized state plan, which distinguishes it from a uniform command economy.',
        citations: citations(['marxEngelsManifesto', 'bernsteinEvolutionarySocialism', 'luxemburgReformRevolution'], ['sepSocialism', 'sepLuxemburg']),
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
        explanation: 'Public authority is used to democratize property and provide social rights, but competitive elections, free expression, independent unions, opposition parties, courts, and internal dissent are treated as necessary safeguards. The defining boundary is against a party-state that claims to embody the working class while removing democratic control.',
        citations: citations(['luxemburgReformRevolution', 'lockeSecondTreatise', 'millOnLiberty'], ['sepLuxemburg', 'sepSocialism', 'vdem']),
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
            citations: citations(['luxemburgReformRevolution', 'leninStateRevolution'], ['sepLuxemburg', 'sepSocialism']),
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
                relation: 'Shares Luxemburg’s concern with active mass democracy and is vulnerable to questions about scale, expertise, coordination, and minority rights.',
                citations: citations(['luxemburgReformRevolution', 'millOnLiberty'], ['sepLuxemburg', 'sepSocialism']),
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
                caveat: 'Her revolutionary Marxism is not identical to gradualist social democracy, and her proposals remain historically situated.',
                citations: citations(['luxemburgReformRevolution'], ['sepLuxemburg', 'sepSocialism']),
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
            text: 'Finally, democracy itself is not a guarantee of equality. Majorities can exclude minorities, national welfare systems can be bounded by citizenship, and socialist movements have historically reproduced gender, racial, colonial, and cultural hierarchies. The profile should therefore be evaluated through both economic ownership and the actual protection of plural political and social freedom.',
            citations: citations(['jauresSocialistHistory', 'wollstonecraftRights', 'millOnLiberty'], ['sepSocialism', 'sepLuxemburg', 'jauresArchive']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['marxEngelsManifesto', 'bernsteinEvolutionarySocialism', 'luxemburgReformRevolution', 'jauresSocialistHistory', 'millOnLiberty', 'wollstonecraftRights', 'keynesGeneralTheory', 'lockeSecondTreatise', 'lockeLetterToleration', 'spinozaPolitical', 'renanNation', 'kantPerpetualPeace', 'morgenthauRealism', 'leninStateRevolution'],
      researchSourceIds: ['sepSocialism', 'sepLuxemburg', 'ghdiGodesberg', 'jauresArchive', 'sepLiberalism', 'sepReligionPolitics', 'oecdWelfareModels', 'vdem', 'ches', 'foreignPolicy'],
      editorialNote: 'The entry keeps democratic socialism distinct from both reformist social democracy and authoritarian state socialism, while acknowledging that historical parties and authors use the labels differently. Scores describe a didactic democratic ownership profile, not a single party programme or country.',
    },
    researchGaps: [
      'Add German-language scholarship on the SPD, Godesberg, council democracy, East German socialist experience, and the post-war constitutional debate over democratic socialism.',
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
        explanation: 'Productive resources are to be held in common or controlled by workers and communities, with mutual aid and free association replacing private accumulation and wage dependence. Different currents disagree over distribution, exchange, labor vouchers, markets, and the degree of planning; none of those mechanisms alone defines the whole tradition.',
        citations: citations(['bakuninStatism', 'kropotkinMutualAid', 'ostromGoverningCommons'], ['sepAnarchism', 'sepSocialism']),
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
        explanation: 'A territorial monopoly of coercion is treated as a source of domination rather than the necessary foundation of social order. Federations, councils, assemblies, mandated delegates, restorative practices, and voluntary coordination are preferred, but the difficult boundary between legitimate collective rules and coercive hierarchy remains an open institutional problem.',
        citations: citations(['bakuninStatism', 'kropotkinMutualAid', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'socialEcologyMunicipalism', 'vdem']),
      },
      identity: {
        score: 45,
        label: 'Internationalist with local belonging',
        explanation: 'Solidarity across borders and opposition to nationalism, imperialism, and colonial domination are emphasized, while communes and federations remain rooted in particular places and relationships. Local autonomy is therefore compatible with internationalism, but not with a single universal national identity.',
        citations: citations(['bakuninStatism', 'bookchinLibertarianMunicipalism', 'andersonImaginedCommunities'], ['sepAnarchism', 'socialEcologyMunicipalism']),
      },
      foreign: {
        score: 45,
        label: 'Non-interventionist and anti-imperial',
        explanation: 'Standing armies, imperial expansion, and state diplomacy backed by permanent coercion are rejected in favor of solidarity, non-domination, and local self-defense. Historical anarchist movements have fought in wars and organized armed defense, so the profile is anti-militarist and anti-imperial rather than simply pacifist.',
        citations: citations(['bakuninStatism', 'kantPerpetualPeace', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'foreignPolicy']),
      },
      religion: {
        score: 65,
        label: 'Secular and anti-clerical, with voluntary pluralism',
        explanation: 'No church or religious authority should control public law or impose a sacred hierarchy. Many historical anarchists criticized organized religion, while voluntary faith communities can remain compatible with free association if they do not exercise coercive political authority.',
        citations: citations(['bakuninStatism', 'millOnLiberty', 'spinozaPolitical'], ['sepAnarchism', 'sepReligionPolitics']),
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
            text: 'The Paris Commune became a powerful reference for municipal self-government, recallable delegates, and the possibility of replacing centralized administration with local federation. It was not uniformly anarchist or communist, and its short life under military attack makes it evidence of an experiment rather than proof that a complete stateless society had been established.',
            citations: citations(['bakuninStatism', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'socialEcologyMunicipalism']),
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
                caveat: 'The Commune was politically diverse, brief, and defeated; it was not uniformly anarchist or communist.',
                citations: citations(['bakuninStatism', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'socialEcologyMunicipalism']),
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
            text: 'Historical experiments also warn against romanticization. War, repression, scarcity, internal conflict, and the need for armed defense shaped Ukraine and Spain, while the Paris Commune’s short duration limits the evidence available. These cases demonstrate political imagination and institutional experimentation, but they cannot by themselves prove that a durable stateless communal order is feasible in every context.',
            citations: citations(['bakuninStatism', 'kropotkinMutualAid'], ['sepAnarchism', 'makhnoRuralAnarchism']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['bakuninStatism', 'kropotkinMutualAid', 'bookchinLibertarianMunicipalism', 'ostromGoverningCommons', 'millOnLiberty', 'spinozaPolitical', 'kantPerpetualPeace', 'andersonImaginedCommunities', 'marxEngelsManifesto'],
      researchSourceIds: ['sepAnarchism', 'socialEcologyMunicipalism', 'makhnoRuralAnarchism', 'sepSocialism', 'sepReligionPolitics', 'vdem', 'foreignPolicy'],
      editorialNote: 'The entry distinguishes anti-authoritarian communalism from anarcho-capitalism, democratic socialism, and later libertarian municipalism. Scores describe a didactic reference profile; the historical examples are partial, local, temporary, and contested rather than country-level matches.',
    },
    researchGaps: [
      'Add German-, French-, Spanish-, Ukrainian-, Italian-, and Portuguese-language scholarship on anarchist federations, syndicalism, communes, and the history of translation across movements.',
      'Add specialist histories of the Paris Commune, Makhnovist movement, Revolutionary Catalonia, Mujeres Libres, and the civilian institutions of wartime collectivization.',
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
        explanation: 'Markets can coordinate some activities, but ecological systems, water, land, energy, care, and other essential resources may require public, cooperative, or commons institutions. The profile does not prescribe one ownership form: the relevant question is which arrangement protects ecological function, equitable access, accountability, and long-term resilience in the specific context.',
        citations: citations(['ostromGoverningCommons', 'senDevelopmentFreedom', 'bookchinLibertarianMunicipalism'], ['sepEnvironmentalEthics', 'ipccAr6Synthesis', 'socialEcologyMunicipalism']),
      },
      social: {
        score: 62,
        label: 'Progressive and environmentally just',
        explanation: 'Environmental burdens and benefits are treated as questions of justice, including unequal exposure, health, livelihood, gender, race, class, disability, and responsibilities to future generations. Green politics is not one fixed cultural programme, but this profile generally favors inclusion, participation, and protection of vulnerable communities.',
        citations: citations(['senDevelopmentFreedom', 'millOnLiberty', 'bookchinLibertarianMunicipalism'], ['sepClimateJustice', 'sepEnvironmentalEthics', 'ipccAr6Synthesis']),
      },
      authority: {
        score: -30,
        label: 'Polycentric and participatory',
        explanation: 'Communities, municipalities, regions, states, and international institutions may all have legitimate roles, provided affected people can participate, monitor decisions, and revise rules. Ecological urgency can justify capable public action, but the profile is suspicious of a single command center and of technocratic decisions insulated from public accountability.',
        citations: citations(['ostromGoverningCommons', 'bookchinLibertarianMunicipalism', 'millOnLiberty'], ['socialEcologyMunicipalism', 'sepEnvironmentalEthics', 'vdem']),
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
                period: 'contemporary partial comparators',
                match: 'mixed institutional resemblance only',
                caveat: 'These countries combine environmental policy with markets, welfare institutions, national governments, and international commitments; none is a complete green-commons system.',
                citations: citations(['ostromGoverningCommons', 'senDevelopmentFreedom'], ['ipccAr6Synthesis', 'sepClimateJustice', 'vdem']),
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
            text: 'Finally, green politics can hide trade-offs behind moral language. Renewable infrastructure can require land and minerals; conservation can conflict with livelihoods; carbon policies can be regressive; local knowledge can also be exclusionary; and technological solutions can create new dependencies. The profile should therefore distinguish scientific findings, ethical commitments, institutional proposals, and unresolved value conflicts.',
            citations: citations(['ostromGoverningCommons', 'senDevelopmentFreedom'], ['ipccAr6Synthesis', 'sepEnvironmentalEthics', 'sepClimateJustice']),
          },
        ],
      },
    ],
    references: {
      authorReferenceIds: ['ostromGoverningCommons', 'bookchinLibertarianMunicipalism', 'senDevelopmentFreedom', 'millOnLiberty', 'lockeLetterToleration', 'kantPerpetualPeace', 'morgenthauRealism'],
      researchSourceIds: ['sepEnvironmentalEthics', 'sepClimateJustice', 'ipccAr6Synthesis', 'socialEcologyMunicipalism', 'sepAnarchism', 'sepSocialism', 'openTextbook', 'vdem', 'foreignPolicy'],
      editorialNote: 'The entry distinguishes commons governance, social ecology, green liberalism, eco-socialism, conservationism, and deep ecology. Scores describe a didactic ecological-pluralist profile, not every green party, environmental movement, country, or community institution.',
    },
    researchGaps: [
      'Add German-, French-, Portuguese-, Spanish-, South Asian-, African-, and Indigenous scholarship on environmental justice, commons, conservation, social ecology, and ecological democracy.',
      'Add detailed case studies of forests, fisheries, water, energy, food, housing, transit, and digital commons, including failure, exclusion, and ecological outcomes rather than only successful examples.',
      'Add country-specific climate, biodiversity, energy, and distributional evidence before ranking Denmark, the Netherlands, Sweden, or other states as green-commons comparators.',
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
        explanation: 'Moral, familial, religious, and political authority receive substantial weight, especially when disorder or moral decline is perceived. Constitutional limits, natural law, customary rights, and institutional checks may still be accepted; the profile becomes theocratic or clerical-authoritarian only when religious authority is made constitutive of coercive rule and dissent is denied.',
        citations: citations(['aquinasMoralPolitical', 'hobbesLeviathan', 'burkeReflections'], ['sepReligionPolitics', 'sepMedieval', 'vdem']),
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
        explanation: 'Religious revelation, natural law, clerical teaching, sacred tradition, or a confessional moral order is expected to shape public institutions and law to a substantial degree. The range extends from religious inspiration within pluralist constitutionalism to formal establishment; the high-authority endpoint is a theocracy, not the whole category.',
        citations: citations(['aquinasMoralPolitical', 'lockeLetterToleration', 'spinozaPolitical'], ['sepReligionPolitics', 'sepMedieval', 'oxfordChristianDemocracy']),
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
            period: 'Twentieth century: religious parties and constitutional accommodation',
            text: 'Religious political movements increasingly negotiated with mass democracy, universal suffrage, social policy, and constitutional rights. Christian democracy is a major European example: it emerged from confessional politics but developed pluralist, personalist, solidaristic, and constitutional forms that cannot be reduced to clerical rule. Other religious traditions followed different paths, so Christian democracy is a variant, not the global definition.',
            citations: citations(['aquinasMoralPolitical', 'burkeReflections', 'lockeLetterToleration'], ['oxfordChristianDemocracy', 'sepReligionPolitics']),
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
        ],
      },
    ],
    references: {
      authorReferenceIds: ['aquinasMoralPolitical', 'burkeReflections', 'hobbesLeviathan', 'lockeLetterToleration', 'spinozaPolitical', 'renanNation', 'adamSmithWealth', 'morgenthauRealism', 'millOnLiberty'],
      researchSourceIds: ['sepReligionPolitics', 'sepMedieval', 'oxfordChristianDemocracy', 'sepConservatism', 'openTextbook', 'vdem', 'foreignPolicy'],
      editorialNote: 'The entry separates personal religiosity, religious social ethics, confessional constitutionalism, religious nationalism, Christian democracy, and theocracy. Its scores describe a didactic high-tradition, high-authority profile and do not classify every religious person, party, or state.',
    },
    researchGaps: [
      'Add Arabic-, Persian-, Hebrew-, Sanskrit-, Tamil-, Chinese-, French-, German-, Portuguese-, and Spanish-language scholarship on religious law, political authority, reform, pluralism, and modern state formation.',
      'Add case studies across Christian, Islamic, Jewish, Hindu, Buddhist, Indigenous, and other traditions, distinguishing theological claims from party organization and state enforcement.',
      'Add detailed research on Christian democracy, Catholic social teaching, Protestant confessional politics, Islamic constitutional debates, Jewish legal-political traditions, and South Asian religious nationalism.',
      'Add country-specific evidence before listing present governments or parties; religious majorities, constitutions, coalition systems, and enforcement practices change over time.',
      'Add specialist research on gender, family law, education, minority rights, conversion, secularism, clerical institutions, religious violence, migration, colonialism, and the constitutional design of pluralist religious societies.',
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
        explanation: 'Colonial land seizure, forced labor, unequal trade, and resource extraction are commonly treated as political-economic domination. Remedies range from village self-sufficiency and land reform to state-led development, socialism, cooperative ownership, or regulated mixed economies; independence alone does not determine the economic axis.',
        citations: citations(['gandhiHindSwaraj', 'fanonWretchedEarth', 'duboisBlackReconstruction', 'cesaireDiscourseColonialism'], ['sepColonialism', 'panAfricanism']),
      },
      social: {
        score: 50,
        label: 'Moderately progressive / emancipatory',
        explanation: 'Anti-colonial projects usually reject racial hierarchy, imperial subjecthood, and exclusion from equal citizenship. The score is limited because movements have also reproduced patriarchy, class hierarchy, ethnic majorities, religious exclusions, or restrictions on dissent after independence.',
        citations: citations(['duboisBlackReconstruction', 'fanonWretchedEarth', 'gandhiHindSwaraj', 'cesaireDiscourseColonialism'], ['sepColonialism', 'panAfricanism']),
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
        explanation: 'Shared history, language, territory, race, culture, or Indigenous nationhood can create the solidarity needed to resist imperial rule. Many thinkers also connect self-determination to Pan-African, Asian, internationalist, or universal human commitments, so liberation identity is not automatically ethnic nationalism or permanent national closure.',
        citations: citations(['fanonWretchedEarth', 'gandhiHindSwaraj', 'duboisBlackReconstruction', 'andersonImaginedCommunities'], ['sepColonialism', 'sepNationalism', 'panAfricanism']),
      },
      foreign: {
        score: 30,
        label: 'Somewhat restraint-oriented / anti-imperial',
        explanation: 'The central foreign-policy demand is non-domination: withdrawal of imperial control, sovereign equality, and the ability to choose political and economic alliances. Nonviolence, diplomacy, nonalignment, and international solidarity coexist historically with armed resistance; the existence of a liberation struggle is not a universal endorsement of force.',
        citations: citations(['gandhiHindSwaraj', 'fanonWretchedEarth', 'kantPerpetualPeace', 'duboisBlackReconstruction'], ['sepColonialism', 'panAfricanism', 'foreignPolicy']),
      },
      religion: {
        score: -25,
        label: 'Slightly secular / pluralist, with religious sources of solidarity',
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
        ],
      },
    ],
    references: {
      authorReferenceIds: ['gandhiHindSwaraj', 'fanonWretchedEarth', 'duboisBlackReconstruction', 'cesaireDiscourseColonialism', 'nabucoAbolitionism', 'lockeSecondTreatise', 'andersonImaginedCommunities', 'kantPerpetualPeace', 'spinozaPolitical', 'lockeLetterToleration', 'marxEngelsManifesto'],
      researchSourceIds: ['sepColonialism', 'sepNationalism', 'panAfricanism', 'foreignPolicy', 'vdem', 'sepReligionPolitics', 'sepSocialism', 'openTextbook', 'sepClimateJustice'],
      editorialNote: 'The entry treats anti-colonial liberation as a historically diverse family, not as a synonym for nationalism, socialism, armed struggle, or decolonial theory. The six scores are didactic estimates of a composite profile and should not be assigned to a country or movement without time-, actor-, and institution-specific evidence.',
    },
    researchGaps: [
      'Add country-specific scholarship for Algeria, Ghana, India, Indonesia, Kenya, Mozambique, Angola, Guinea-Bissau, Brazil, the Caribbean, the Pacific, and Indigenous polities, with local historians and community reviewers where appropriate.',
      'Expand the multilingual record with French, Portuguese, German, Arabic, Spanish, Hindi, Gujarati, Urdu, Bengali, Swahili, Amharic, and other relevant-language editions, translations, archives, and secondary scholarship.',
      'Add comparative research on women’s organizing, caste, class, labor, disability, sexuality, religion, minority protection, and Indigenous jurisdiction within liberation movements rather than treating the movement as a single voice.',
      'Add primary and scholarly sources on Nkrumah, Cabral, Senghor, Ambedkar, Nehru, Ho Chi Minh, Sukarno, José Rizal, Eduardo Mondlane, Amílcar Cabral, and other regional thinkers, preserving disagreements instead of creating one global canon.',
      'Add evidence on post-independence institutions, military and party power, economic dependency, nonalignment, borders, resource concessions, foreign bases, debt, development, and the difference between formal sovereignty and effective self-determination.',
      'Review current movement and country comparisons only with dated, jurisdiction-specific sources. Do not infer anti-colonial status from a government’s rhetoric, a majority identity, or a single historical grievance.',
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
        explanation: 'A vanguard party, democratic centralism, centralized administration, and emergency or revolutionary authority are treated as instruments for defeating counter-revolution and directing the transition. This is the profile’s main distinction from anarcho-communism, council communism, and democratic socialism, although communist theory and practice contain sustained arguments about democratic control.',
        citations: citations(['leninStateRevolution', 'luxemburgReformRevolution', 'arendtTotalitarianism'], ['sepSocialism', 'sepLuxemburg', 'oxfordHistoryCommunism', 'vdem']),
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
        score: -55,
        label: 'Strongly secular public law',
        explanation: 'Marxist-Leninist legitimacy is generally grounded in materialist theory, class analysis, party leadership, and state law rather than clerical authority. Historical regimes ranged from regulated toleration to surveillance, closure, or repression of religious institutions; secular government should not be confused with freedom of religion.',
        citations: citations(['marxEngelsManifesto', 'leninStateRevolution', 'spinozaPolitical'], ['sepMarx', 'sepReligionPolitics', 'ushmmCommunism']),
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
            period: '1960s–1980s: reform, dissent, Eurocommunism, and the limits of party monopoly',
            text: 'Reform communists, dissidents, workers, intellectuals, and Eurocommunist parties challenged Soviet orthodoxy, censorship, invasion, and the subordination of social institutions to the ruling party. East German documents show how Marxism-Leninism was taught as a civic ideology while criticism of the party-state remained constrained. These disputes reveal that communist commitments and democratic freedoms were debated inside the tradition, not only from outside it.',
            citations: citations(['luxemburgReformRevolution', 'leninStateRevolution'], ['ghdiMarxLeninism', 'sepLuxemburg', 'oxfordHistoryCommunism']),
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
                match: 'A Soviet-aligned party-state in which Marxism-Leninism structured civic education, political institutions, economic organization, and official legitimacy.',
                caveat: 'GDR institutions included formal representative bodies and social services, but SED dominance, surveillance, restrictions on movement, and limits on independent politics must remain visible.',
                citations: citations(['leninStateRevolution'], ['ghdiMarxLeninism', 'oxfordHistoryCommunism', 'vdem']),
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
        ],
      },
    ],
    references: {
      authorReferenceIds: ['marxEngelsManifesto', 'leninStateRevolution', 'luxemburgReformRevolution', 'bernsteinEvolutionarySocialism', 'arendtTotalitarianism', 'andersonImaginedCommunities', 'morgenthauRealism', 'spinozaPolitical'],
      researchSourceIds: ['sepMarx', 'sepSocialism', 'sepLuxemburg', 'ushmmCommunism', 'oxfordHistoryCommunism', 'ghdiMarxLeninism', 'aeaChinaSocialism', 'panAfricanism', 'sepColonialism', 'foreignPolicy', 'vdem', 'sepReligionPolitics'],
      editorialNote: 'The main score is a didactic Marxist-Leninist party-state profile. It should not be used as a verdict on every communist thinker, socialist party, revolutionary movement, or present government. Marxian theory, Leninist organization, Stalinist rule, Maoism, democratic communism, anarcho-communism, and market-socialist systems remain separately identifiable traditions.',
    },
    researchGaps: [
      'Add primary and scholarly sources on Maoism, Ho Chi Minh, Castro, Kim Il-sung, Gramsci, Bukharin, Kautsky, council communism, Eurocommunism, and democratic communist parties, preserving internal disagreements.',
      'Expand Russian, German, Chinese, Vietnamese, Korean, Spanish, Portuguese, French, and other language scholarship, with translation and edition provenance recorded for every quotation or close textual claim.',
      'Add country- and period-specific research for the USSR, China, Vietnam, Cuba, North Korea, Laos, Eastern Europe, African communist movements, and Latin American parties instead of relying on regime-level generalizations.',
      'Add comparative evidence on workers’ control, unions, planning, collectivization, markets, welfare, education, health, famine, migration, coercion, prisons, censorship, religion, ethnicity, gender, and minority rights.',
      'Add archival and demographic research for disputed claims about deaths, repression, economic performance, and responsibility, distinguishing policy, implementation, unintended consequences, wartime conditions, and later political memory.',
      'Add a dedicated comparison of communist-party constitutional language with observed party competition, executive constraints, judicial independence, civil liberties, and mechanisms for leadership succession.',
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
        score: 96,
        label: 'Extremely strongly market-oriented',
        explanation: 'Private ownership, contract, competition, and entrepreneurial coordination are treated as the default institutions for production and distribution, including functions usually assigned to the state. The profile is more radical than classical liberalism because it rejects taxation and public economic administration in principle, not only excessive regulation.',
        citations: citations(['rothbardForNewLiberty', 'nozickASU', 'hayekKnowledge'], ['sepLibertarianism', 'sepAnarchism', 'sepLiberalism']),
      },
      social: {
        score: -10,
        label: 'Mixed: voluntary pluralism with property-based limits',
        explanation: 'The tradition generally favors freedom of association, speech, lifestyle, religion, and exit from unwanted institutions. Critics point out that private ownership can permit exclusion, dependency, employer domination, or unequal access to basic goods; a formal ban on state coercion does not settle every social-power question.',
        citations: citations(['nozickASU', 'millOnLiberty', 'rothbardForNewLiberty'], ['sepLibertarianism', 'sepAnarchism', 'sepLibertyPositiveNegative']),
      },
      authority: {
        score: -98,
        label: 'Extremely anti-state / polycentric authority',
        explanation: 'The defining commitment is opposition to a compulsory territorial monopoly of coercion. Courts, security, arbitration, infrastructure, and rules are expected to arise through contract, competition, insurance, private association, or local covenant; the profile must still explain how coercion by private actors is prevented and how dissenters can exit.',
        citations: citations(['rothbardForNewLiberty', 'nozickASU', 'lockeSecondTreatise'], ['sepAnarchism', 'sepLibertarianism']),
      },
      identity: {
        score: -30,
        label: 'Strongly individualist / weakly internationalist',
        explanation: 'Individual choice, voluntary association, and the right to leave a community take priority over compulsory national unity. Private communities may develop strong cultural or religious identities, and property jurisdictions can still create boundaries; anti-nationalism is therefore a tendency rather than a promise of cosmopolitan equality.',
        citations: citations(['rothbardForNewLiberty', 'nozickASU', 'kantPerpetualPeace'], ['sepLibertarianism', 'sepAnarchism', 'sepNationalism']),
      },
      foreign: {
        score: -76,
        label: 'Very strongly non-interventionist',
        explanation: 'Permanent alliances, imperial projects, conscription, and state militaries are rejected or minimized. Defense is imagined through voluntary insurance, private protection, contractual alliances, or local self-defense; critics stress that territorial defense and collective security are difficult to fund and coordinate without compulsory institutions.',
        citations: citations(['rothbardForNewLiberty', 'kantPerpetualPeace', 'morgenthauRealism'], ['sepLibertarianism', 'foreignPolicy', 'sepAnarchism']),
      },
      religion: {
        score: -55,
        label: 'Strongly secular / voluntary religious association',
        explanation: 'No religious institution should possess a compulsory territorial authority, but churches, mosques, synagogues, temples, and other communities may organize voluntarily under the same general property and contract rules. This is a secular institutional position, not necessarily an anti-religious one.',
        citations: citations(['rothbardForNewLiberty', 'lockeLetterToleration', 'spinozaPolitical'], ['sepReligionPolitics', 'sepLibertarianism']),
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
            text: 'The theory depends on several empirical and institutional assumptions: that competition will prevent provider monopolies, that people can exit abusive arrangements, that private courts can coordinate rules, that defense can be funded voluntarily, and that market prices can handle public goods and externalities. These are not consequences of the non-aggression principle alone. They are open questions that must be separated from the moral claim that state coercion is illegitimate.',
            citations: citations(['nozickASU', 'hayekKnowledge', 'millOnLiberty'], ['sepAnarchism', 'sepLibertarianism', 'sepLibertyPositiveNegative']),
          },
          {
            type: 'paragraph',
            text: 'Social freedom is also contested. Voluntary contract can protect exit and experimentation, yet unequal property ownership can make nominally voluntary relationships difficult to refuse. A tenant, employee, debtor, child, migrant, or person without access to land may face private power even when no public official directly commands them. Whether such dependence counts as coercion, exploitation, or an acceptable result of free exchange is one of the tradition’s central disputes.',
            citations: citations(['nozickASU', 'millOnLiberty', 'rothbardForNewLiberty'], ['sepLibertarianism', 'sepLibertyPositiveNegative', 'sepAnarchism']),
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
                distinction: 'Defends private and competitive provision because it is expected to produce better security, law, prosperity, or freedom, even if the argument is not based on absolute rights.',
                relation: 'Shares the institutional proposal but can revise or limit property claims when consequences, public goods, or equal access weigh against them.',
                citations: citations(['hayekKnowledge', 'nozickASU'], ['sepLibertarianism', 'sepAnarchism']),
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
        ],
      },
    ],
    references: {
      authorReferenceIds: ['rothbardForNewLiberty', 'nozickASU', 'hayekKnowledge', 'lockeSecondTreatise', 'millOnLiberty', 'kantPerpetualPeace', 'lockeLetterToleration', 'spinozaPolitical', 'morgenthauRealism'],
      researchSourceIds: ['sepAnarchism', 'sepLibertarianism', 'sepLiberalism', 'sepLibertyPositiveNegative', 'sepReligionPolitics', 'foreignPolicy', 'sepClimateJustice', 'openTextbook'],
      editorialNote: 'The profile describes a radical right-libertarian proposal, not an observed country or a verdict on all anarchism. It distinguishes abolition of the state from deregulation, market orientation from private law, and voluntary association from the empirical ability to exit unequal or coercive arrangements.',
    },
    researchGaps: [
      'Add primary works and scholarly debate on David Friedman, Hans-Hermann Hoppe, Bruce Benson, Linda and Morris Tannehill, Lysander Spooner, Benjamin Tucker, and mutualist critics, recording where each author does or does not fit the label.',
      'Add German- and Austrian-language scholarship on Mises, Hayek, private law, spontaneous order, calculation, and the limits of state planning, with translation and edition provenance.',
      'Add comparative legal and economic research on private arbitration, security, insurance, common-pool resources, public goods, externalities, competition policy, and historical cases of stateless or polycentric legal order.',
      'Add evidence on land acquisition, Indigenous and communal property, slavery, colonial enclosure, company towns, labor dependence, housing, disability, childhood, migration, and whether exit is materially available to affected people.',
      'Add specialist research on cryptocurrency governance, decentralized autonomous organizations, seasteading, charter cities, special economic zones, private cities, and the relationship between experimental autonomy and surrounding state law.',
      'Add systematic ethical and empirical comparisons with classical liberalism, minarchism, mutualism, anarcho-communism, communalism, and constitutional pluralism rather than treating all anti-state language as one tradition.',
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
        label: 'Strongly pacifist / non-imperial, with self-defense debates',
        explanation: 'Imperialism, standing armies, conquest, and state militarism are rejected, while solidarity across borders is encouraged. Revolutionary communities have nevertheless organized armed self-defense under attack; historical participation in war must be distinguished from a general endorsement of militarism or coercive foreign policy.',
        citations: citations(['bakuninStatism', 'kropotkinMutualAid', 'bookchinLibertarianMunicipalism'], ['sepAnarchism', 'foreignPolicy', 'socialEcologyMunicipalism']),
      },
      religion: {
        score: -45,
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
                label: 'Platformism and organized anarchism',
                distinction: 'Emphasizes ideological unity, strategic coordination, collective responsibility, and a structured anarchist organization while rejecting a ruling party or state.',
                relation: 'Addresses the coordination problem more directly than loose federation, but critics worry that discipline can reproduce hierarchy or political substitution.',
                citations: citations(['bakuninStatism', 'kropotkinMutualAid'], ['sepAnarchism']),
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
        ],
      },
    ],
    references: {
      authorReferenceIds: ['kropotkinConquestBread', 'kropotkinMutualAid', 'bakuninStatism', 'bookchinLibertarianMunicipalism', 'millOnLiberty', 'marxEngelsManifesto', 'leninStateRevolution', 'ostromGoverningCommons'],
      researchSourceIds: ['sepAnarchism', 'sepSocialism', 'socialEcologyMunicipalism', 'makhnoRuralAnarchism', 'cambridgeSpanishAnarchism', 'openTextbook', 'sepClimateJustice', 'sepReligionPolitics', 'foreignPolicy'],
      editorialNote: 'The entry describes an anti-state communist family and uses a didactic composite score. It distinguishes anarcho-communism from anarcho-capitalism, Marxist-Leninist party-state communism, libertarian socialism, communalism, and historical collectives. No country is classified as an exact match.',
    },
    researchGaps: [
      'Add primary texts and specialist scholarship on Errico Malatesta, Emma Goldman, Voline, Nestor Makhno, Buenaventura Durruti, Federica Montseny, Diego Abad de Santillán, and anarchist women’s, labor, and anti-colonial organizing.',
      'Expand Russian, Ukrainian, Spanish, Catalan, French, Italian, German, Portuguese, and Latin American sources, recording original language, translation, edition, archive, and partisan provenance.',
      'Add comparative evidence on the Free Territory of Ukraine, Catalan and Aragonese collectives, Paris Commune, Korean anarchist experiments, Zapatista autonomy, Rojava, cooperative federations, and other partial cases without treating them as one model.',
      'Add empirical research on food, housing, health, education, care, industry, energy, defense, ecological management, conflict resolution, gender, race, migration, disability, and minority rights in decentralized communities.',
      'Add detailed comparison of anarcho-communist distribution with commons governance, market socialism, cooperative ownership, social democracy, and state socialism, including scarcity, free-riding, technical expertise, and maintenance problems.',
      'Add research on how revolutionary organizations prevent military, party, administrative, or charismatic authority from becoming permanent, and how nonviolent and self-defense commitments can coexist under external attack.',
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
};
