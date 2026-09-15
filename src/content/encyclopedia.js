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
};
