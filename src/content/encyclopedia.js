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
};
