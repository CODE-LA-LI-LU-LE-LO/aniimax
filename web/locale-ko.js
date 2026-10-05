import { REFERENCE_GAME_TERMS, REFERENCE_ITEM_NAMES } from './game-terms-ko.js';

// Korean presentation only. Solver keys, CSV identifiers and saved settings stay in English.
// Same-ID reference names override provisional translations below.
export const GAME_TERMS = {
    'Aniimo': '애니모', 'Homeland': '캠프장', 'Home Coins': '홈코인', 'Home Coin': '홈코인',
    'Aniimo EXP': '애니모 경험치', 'Aniipods': '애니팟', 'Wood Blocks': '나무토막', 'Mineral Sand': '광물 모래',
    'Farmland': '농장', 'Woodland': '숲', 'Mine': '광산', 'Well': '우물',
    'Tidewhisper Sandcastle': '속삭임 모래성', 'Dewy House': '허니버드 하우스', 'Nimbus Bed': '구름풀 침대',
    'Starfall Hammock': '스타폴 해먹', 'Floral Windmill': '꽃의 춤 풍차', 'Heat Furnace': '열에너지 화로',
    'Cooling Unit': '냉방기', 'Sunlamp': '형광등', 'Carousel Mill': '회전목마 방앗간',
    'Crafting Table': '작업대', 'Claw Game Cooker': '크레인 화로', 'Jukebox Dryer': '음악 건조기',
    'Simmering Pot': '달임 냄비', 'Phonolfactory Table': '레코드 조향대', 'Bouncy Brew Keg': '폴짝 양조통',
    'Blazing Stove': '슈퍼 인덕션', 'Pickling Jar': '풍미 숙성 항아리', 'Joy Wheel Loom': '관람차 물레',
    'Dance Pad Polisher': '댄스 에너지 메이커', 'Aniipod Maker': '애니팟 제조기',
    'Woodworking Bench': '목공 작업대', 'Chimney Kiln': '굴뚝 화로', 'Storage Unit': '저장 장치',
    'Ecological Module': '생태 모듈', 'Kitchen Module': '주방 모듈', 'Resource Detector': '자원 탐지기', 'Crafting Module': '제작 모듈',
    'Harvest Moon Festival': '수확의 달 축제', 'Moonray Wheat': '달빛 밀 이삭', 'Harvest Moon Points': '수확의 달 포인트',
    'Instinctive': '직감형', 'Energetic': '활력형', 'Nimble': '민첩형', 'Practical': '실용형',
    'Faithful': '성실형', 'Tenacious': '끈기형', 'Playful': '장난형', 'Judicious': '신중형',
    'Fire': '불', 'Grass': '풀', 'Water': '물', 'Earth': '땅', 'Lightning': '번개', 'Ice': '얼음',
    'Wind': '바람', 'Dark': '어둠', 'Light': '빛', 'Hauling': '운반', 'Artisanship': '공예', 'Leisure': '여가', 'Perfumery': '조향',
    'Warm': '따뜻함', 'Scorching': '뜨거움', 'Cool': '시원함', 'Freeze': '차가움', 'Adequate': '적정 조명', 'Room temp': '상온',
    ...REFERENCE_GAME_TERMS,
};

// Base recipe names. Quick/premium/advanced variants use the same translation plus a prefix.
export const ITEM_NAMES_KO = {
    wheat:'밀', potato:'감자', rice:'쌀', soybean:'콩', rose:'장미', cotton:'목화', strawberry:'딸기', lavender:'라벤더',
    sugarcane:'사탕수수', ginseng:'인삼', grape:'포도', cranberry:'크랜베리', agave:'용설란',
    willow_wood:'버드나무 목재', bamboo:'대나무', lemon:'레몬', cherry_blossom:'벚꽃', apple:'사과', maple_syrup:'메이플 시럽',
    palm_bark:'야자나무 껍질', chestnut:'밤', walnut:'호두', natural_rubber:'천연고무', coconut:'코코넛', cocoa:'카카오', orange_flower:'오렌지꽃',
    rock:'돌', clay:'점토', shell:'조개껍데기', copper_ore:'구리 광석', quartz_ore:'석영 광석', gem:'보석',
    well_water:'우물물', fresh_water:'담수', deep_rock_spring_water:'깊은 바위 샘물', natural_mineral_spring_water:'천연 광천수',
    sea_salt:'바다 소금', pearl:'진주', aromathyst:'향기 수정', wool:'양털', petals:'꽃잎', star:'별', scales:'비늘',
    wheatmeal:'밀가루', tofu:'두부', milled_rice:'도정 쌀', lavender_powder:'라벤더 가루', rice_drink:'쌀 음료', ginseng_powder:'인삼 가루',
    refined_flour:'정제 밀가루', coconut_oil:'코코넛 오일', cocoa_powder:'카카오 가루', coconut_milk:'코코넛 밀크',
    wood_sculpture:'목각 조각', bamboo_ware:'대나무 공예품', river_washed_stones:'강물에 씻긴 돌', rose_freshener:'장미 방향제',
    pottery:'도기', bouquet:'꽃다발', shell_ornament:'조개 장식', lavender_sachet:'라벤더 향주머니', wind_chime:'풍경',
    star_wish_lantern:'별 소원 등불', dream_catcher:'드림캐처', rubber_duck:'고무 오리', pearl_necklace:'진주 목걸이',
    woven_toy:'뜨개 장난감', porcelain:'자기', dye:'염료', gemstone_dust:'보석 가루', flowers_in_a_bottle:'병 속의 꽃', doll:'인형',
    bread:'빵', roasted_soybeans:'볶은 콩', maple_candy_roasted_potatoes:'메이플 설탕 구운 감자', apple_tart:'사과 타르트',
    rose_shortbread:'장미 쇼트브레드', lavender_cookies:'라벤더 쿠키', apple_candy:'사과 사탕', grape_candy:'포도 사탕',
    caramel_nut_chips:'캐러멜 견과 칩', maple_candy_star:'메이플 별 사탕', coconut_cookie:'코코넛 쿠키', flower_bread:'꽃빵',
    berry_chocolate_coconut_pudding:'베리 초콜릿 코코넛 푸딩', potato_chips:'감자칩', dried_lemon_slices:'말린 레몬 조각',
    dried_cherry_blossom:'말린 벚꽃', dried_bean_curd:'말린 두부', dried_apple_slices:'말린 사과 조각', dried_strawberries:'말린 딸기',
    nuts:'견과류', dried_ginseng:'말린 인삼', dried_grapes:'건포도', shredded_coconut:'잘게 썬 코코넛', dried_cranberries:'말린 크랜베리', dried_flowers:'말린 꽃',
    plain_rice_porridge:'흰쌀죽', rose_concentrate:'장미 농축액', rock_candy:'얼음 설탕', strawberry_jam:'딸기잼',
    maple_candy_apple_jam:'메이플 설탕 사과잼', chestnut_puree:'밤 퓌레', grape_jam:'포도잼', ginseng_porridge:'인삼죽',
    maple_sugar_chunk:'메이플 설탕 덩어리', malt_sugar:'맥아당', cocoa_spread:'카카오 스프레드', cranberry_jam:'크랜베리잼', agave_syrup:'용설란 시럽',
    bamboo_joss_stick:'대나무 향', rose_incense:'장미 향', cherry_incense:'벚꽃 향', lavender_incense:'라벤더 향', lemon_incense:'레몬 향',
    herbal_ginseng_aroma:'인삼 허브 향', soap:'비누', orange_flower_incense:'오렌지꽃 향', mixed_perfume:'혼합 향수', lotion:'로션',
    wheat_tea:'밀차', toasted_rice_green_tea:'현미 녹차', potato_kvass:'감자 크바스', strawberry_juice:'딸기 주스', apple_juice:'사과 주스',
    sugarcane_juice:'사탕수수 주스', grape_juice:'포도 주스', ginseng_water:'인삼수', grape_lemon_drink:'포도 레몬 음료', walnut_milk:'호두 우유',
    cranberry_juice:'크랜베리 주스', coconut_cooler:'코코넛 냉음료', agave_drink:'용설란 음료', hot_cocoa:'핫초코', coconut_cocoa:'코코넛 코코아', orange_flower_dew:'오렌지꽃 이슬',
    soy_sauce_fried_rice:'간장 볶음밥', creamy_potato_soup:'크림 감자 수프', potato_soup:'감자 수프', cherry_blossom_rice_ball:'벚꽃 주먹밥',
    tanghulu:'탕후루', soy_sauce_tofu:'간장 두부', sugar_roasted_chestnuts:'설탕에 구운 밤', steamed_vermicelli_roll:'찐 당면 롤',
    ginseng_chestnut_cake:'인삼 밤 케이크', walnut_cake:'호두 케이크', jello:'젤리', strawberry_candy:'딸기 사탕',
    rich_grape_compote:'진한 포도 콩포트', strawberry_cream_puff:'딸기 슈크림', cranberry_chocolate:'크랜베리 초콜릿',
    soy_sauce:'간장', salted_cherry_blossom:'벚꽃 절임', sweet_rice_drink:'달콤한 쌀 음료', sweet_rice_wine:'달콤한 쌀술', cider_vinegar:'사과 식초',
    rice_vinegar:'쌀 식초', salted_lemon:'레몬 절임', candied_strawberries:'설탕에 절인 딸기', candied_orange_flower:'설탕에 절인 오렌지꽃',
    cotton_thread:'면실', woolen_yarn:'모사', cotton_fabric:'면직물', palm_rope:'야자 밧줄', wool_fabric:'모직물', dyed_cotton_fabric:'염색 면직물',
    growth_bud:'성장 새싹', growth_flower:'성장 꽃', growth_fruit:'성장 열매', aniipod:'애니팟', aniipod_pro:'애니팟 프로', aniipod_mega:'애니팟 메가',
    wood_block:'나무토막', mineral_sand:'광물 모래', rough_lumber:'거친 목재', standard_planks:'표준 판재', laminated_beams:'적층 보', densified_timber_component:'고밀도 목재 부품',
    coarse_sifted_ore:'거칠게 체질한 광석', sintered_ore_brick:'소결 광석 벽돌', refined_ore:'정제 광석', microcrystalline_ore_plate:'미세결정 광석판',
    moondew_radish:'달이슬 무', moondew_radish_slices:'달이슬 무 조각', waxing_moon_pepper:'차오르는 달 고추', roasted_waxing_moon_pepper:'구운 차오르는 달 고추',
    harvest_platter:'수확 모둠 요리', umbral_pickle:'그늘 절임', umbral_hot_pot:'그늘 전골', umbral_sweet_and_spicy_sauce:'그늘 매콤달콤 소스',
    ...REFERENCE_ITEM_NAMES,
};

const PREFIXES = { quick: '속성', premium: '고급', advanced: '상급' };
export function itemNameKo(name) {
    if (!name) return name;
    if (name === 'coins') return '홈코인';
    const original = name.replaceAll('_', ' ').replace(/\b[a-z]/g, c => c.toUpperCase());
    let translated = ITEM_NAMES_KO[name];
    if (!translated) {
        const match = /^(quick|premium|advanced)_(.+)$/.exec(name);
        if (match && ITEM_NAMES_KO[match[2]]) translated = `${PREFIXES[match[1]]} ${ITEM_NAMES_KO[match[2]]}`;
    }
    return translated || original;
}

export const UI_TEXT = {
    'Plans will go for the most Home Coins.': '홈코인 생산량이 최대가 되도록 계획합니다.',
    'For the level-up': '레벨 업에 필요',
    'for the level-up': '레벨 업에 필요',
    'Provides Warm or Scorching growing conditions for crops that need one':'따뜻함 또는 뜨거움이 필요한 작물에 해당 환경을 제공합니다.',
    'Provides Cool or Freeze growing conditions for crops that need one':'시원함 또는 차가움이 필요한 작물에 해당 환경을 제공합니다.',
    'Provides Adequate growing conditions for crops that need one':'적정 조명이 필요한 작물에 해당 환경을 제공합니다.',
    'The calculator picks whichever mode is more profitable.':'계산기가 더 수익성 높은 모드를 선택합니다.',
    'Covers a 9x9 area around itself; how many plots fit depends on what shares it.':'주변 9×9타일을 덮습니다. 함께 배치하는 시설에 따라 구획 수가 달라집니다.',
    'Where everything is carried':'생산물을 운반하는 곳', 'Homeland layout':'캠프장 배치',
    'Add the Aniimo you have under My Aniimo to plan with them.':'“내 애니모”에 보유 애니모를 입력하여 계획을 계산하세요.',
    'Grow time for crops and trees, before watering takes an eighth off it twice. Everything else lists workload: at 100% Efficiency a processor gets through one workload a second, a gathering facility 1.25 on a level-2 recipe and 1.5 on a level-3 one. An Aniimo at the level a recipe needs works at 100%; higher levels are faster, up to level 4 (at a processor, 300% one level above, then +100% per level; at gathering facilities each level adds half a workload a second, reading as +50% on a level-1 recipe, +40% on a level-2 one and +33% on a level-3 one).':'작물·나무는 물주기 전 생장 시간입니다. 물주기는 두 번이며 매번 원래 시간의 1/8을 줄입니다. 다른 품목은 작업량입니다. 효율 100%에서 가공 시설은 초당 작업량 1, 채집 시설은 요구 레벨 2에서 1.25, 레벨 3에서 1.5입니다. 요구 능력과 같은 레벨이면 100%이고 상한은 4입니다. 가공 시설은 한 레벨 높으면 300%, 이후 +100%씩 증가합니다. 채집 시설은 레벨마다 초당 0.5가 늘어 요구 레벨 1·2·3 기준 +50%·+40%·약 +33%입니다.',
    "The lowest ability level that can make this, and the best Aniimo for it: level 4, the top, with the facility's personality (+20% speed). For crops and trees, the ability each job needs, in order.":'생산에 필요한 최소 능력 레벨과 권장 최상 구성(레벨 4, 시설에 맞는 성격의 속도 +20%)입니다. 작물·나무는 작업 순서대로 필요한 능력을 표시합니다.',
    'Modules':'모듈', 'not yet':'미해금', 'Seeds':'씨앗', 'free':'무료', 'Total':'합계',
    'The best Aniimo you have of each ability.':'각 능력에서 보유한 가장 높은 레벨로 계산합니다.',
    'The Aniimo you have. The plan shares their hours out, so it only counts on what they can do.':'보유 애니모의 작업 시간을 배분하여 실제로 수행 가능한 작업만 계산합니다.',
    'Nothing left to unlock or upgrade.':'추가로 해금하거나 업그레이드할 항목이 없습니다.',
    'Reaping farmland, Logging woodland':'농장 수확, 숲 벌목', 'Reclaiming woodland':'숲 개간', 'Reclaiming farmland':'농장 개간',
    'Sowing crops':'씨앗 심기', 'Watering crops':'물주기', 'Reaping farmland':'농장 수확', 'Logging woodland':'숲 벌목',
    'Reclaiming':'개간', 'Sowing':'씨앗 심기', 'Watering':'물주기', 'Reaping':'수확', 'Collecting':'채집', 'Logging':'벌목',
    'RV level-ups':'RV 레벨 업 재료', 'No gain':'개선 없음', 'no gain':'개선 없음', 'checking…':'검사 중…',
    "By then you'll also have:":'같은 시점의 추가 생산량:',
    'Also yields Wood Blocks.':'나무토막도 생산합니다.', 'Also yields Mineral Sand.':'광물 모래도 생산합니다.',
    'Makes Aniimo EXP, not Home Coins.':'애니모 경험치를 생산하며 홈코인은 얻지 않습니다.',
    'Aniipods are for catching Aniimo, not for selling.':'애니팟은 애니모 포획에 사용하며 판매하지 않습니다.',
    'Turns Wood Blocks into RV level-up materials.':'나무토막을 RV 레벨 업 재료로 가공합니다.',
    'Turns Mineral Sand into RV level-up materials.':'광물 모래를 RV 레벨 업 재료로 가공합니다.',
    "A few recipes, facility levels and counts haven't been confirmed in game yet; they're marked where they're used.":'일부 레시피와 시설 레벨·수량은 게임 내 미검증 상태이며, 해당 항목에 표시됩니다.',
    "Assumes you've built and upgraded everything your RV level allows.":'현재 RV 레벨에서 가능한 모든 시설을 건설하고 업그레이드한 것으로 계산합니다.',
    'Set the count and level for each facility you have.':'보유한 각 시설의 수량과 레벨을 입력하세요.',
    'Replaces every count and level below with what that RV level allows.':'아래의 모든 수량과 레벨을 해당 RV 레벨에서 가능한 값으로 바꿉니다.',
    'Set the level for each upgrade module you have unlocked (0 = not unlocked).':'해금한 업그레이드 모듈의 레벨을 입력하세요(0 = 미해금).',
    "Switch on what you want and drag to rank it. The plan makes as much of the first as it can, then as much of the next as that allows, and so on. Whatever's left always goes to Home Coins.":'원하는 항목을 켜고 끌어서 순서를 정하세요. 앞선 항목의 생산량을 유지하며 다음 항목을 최대화합니다. 남는 생산력은 홈코인에 사용합니다.',
    'Gets everything your next RV level costs as soon as possible, then earns as many Home Coins as that leaves room for.':'다음 RV 레벨에 필요한 자원을 가장 빨리 확보하고, 남는 생산력으로 홈코인을 최대한 얻습니다.',
    'Counts toward the level-up. Wood Blocks, Mineral Sand and lower tiers get processed up.':'보유 자원을 레벨 업 비용에 반영합니다. 나무토막, 광물 모래와 하위 단계 재료는 상위 단계로 가공합니다.',
    "A seasonal event with its own currency, Moonray Wheat, which buys the season's seeds. Keeping enough wheat on hand is up to you; plans show how much their seeds use. Season items also earn Harvest Moon Points, which you can rank under Priorities.":'시즌 이벤트의 씨앗은 전용 재화인 달빛 밀 이삭(Moonray Wheat)로 구입합니다. 계획에 표시되는 씨앗 비용만큼 재화를 직접 준비해야 합니다. 시즌 품목은 수확의 달 포인트(Harvest Moon Points)도 얻으며, 우선순위에 포함할 수 있습니다.',
    'These take a rare currency to unlock. Plans only use the ones you tick.':'희귀 재화로 해금하는 레시피입니다. 체크한 항목만 계획에 사용합니다.',
    "Plans won't use these, e.g. recipes behind unlocks you don't have yet. You can also skip one straight from a plan with its ✕.":'아직 해금하지 않은 레시피처럼 생산할 수 없는 항목을 제외하세요. 결과의 ✕ 버튼으로도 제외할 수 있습니다.',
    "The best Aniimo you have, with each facility's personality":'보유한 가장 높은 능력 레벨과 시설에 맞는 성격으로 계산',
    'The lowest ability level each recipe accepts: the least you can get by with':'레시피 생산에 필요한 최소 능력 레벨로 계산',
    'Plan with the Aniimo you actually have':'직접 입력한 보유 애니모로 계산',
    'Each row is one product; a facility split between several products gets a row for each. Crops that need a growing environment are grouped by the Heat Furnace, Cooling Unit or Sunlamp setting that covers them, with its layout. Everything else is grouped like the facility list.':'각 행은 하나의 생산 품목입니다. 여러 품목에 나누어 쓰는 시설은 품목별로 표시합니다. 환경이 필요한 작물은 열에너지 화로·냉방기·형광등 설정과 배치별로 묶고, 나머지는 시설 분류별로 표시합니다.',
    'In the Aniimo column, each circle is an ability in its game color with the Aniimo level inside; a ring means the plan counts on the facility\'s personality bonus. Hover a circle for details.':'애니모 열의 원은 게임 색상에 맞춘 능력을, 안의 숫자는 레벨을 뜻합니다. 테두리가 있으면 시설 성격 보너스를 적용한 계획입니다. 원에 마우스를 올리면 상세 설명이 표시됩니다.',
    'Every recipe in the game data, grouped by facility. This is a reference table, not tied to your owned facility counts or levels.':'게임 데이터의 모든 레시피를 시설별로 보여 줍니다. 보유 시설 수량이나 레벨과 관계없이 볼 수 있는 참고 표입니다.',
    'On: the plan goes for this':'켜짐: 이 항목을 우선 생산', 'Off: the plan ignores this':'꺼짐: 우선순위에서 제외',
    'You already have everything it costs. This plan is for the most Home Coins.':'필요한 자원을 모두 보유하고 있습니다. 홈코인 최대화 계획을 표시합니다.',
    "These facilities can't make everything it costs.":'현재 시설로는 필요한 모든 자원을 생산할 수 없습니다.',
    "The level-up couldn't be planned.":'레벨 업 계획을 계산하지 못했습니다.',
    'This plan is for the most Home Coins.':'홈코인 최대화 계획입니다.',
    'Carries produce to storage. How much work this is isn\'t known yet; add more if produce piles up.':'생산물을 저장 장치으로 운반합니다. 정확한 작업량은 아직 확인되지 않았으므로, 생산물이 쌓이면 운반 애니모를 추가하세요.',
    'The solver ran out of time before it could prove nothing does better.':'더 나은 계획이 없음을 입증하기 전에 제한 시간에 도달했습니다.',
    'No plan the model allows does better. Some of its options, such as how plots can be arranged around an environment building, come from a shortlist rather than every possibility.':'현재 모델이 허용하는 계획 중 최적임을 확인했습니다. 환경 건물 주변 배치 등 일부 선택지는 모든 경우가 아닌 미리 계산한 후보를 사용합니다.',
    'Aniimax - Aniimo Production Optimizer':'Aniimax - 애니모 생산 최적화',
    'aniimo homeland production optimizer':'애니모 캠프장 생산 최적화',
    'facilities':'시설', 'math':'계산 원리', 'help':'도움말', 'light':'밝은 테마', 'dark':'어두운 테마',
    'Your Homeland':'나의 캠프장', 'Clear saved values':'저장된 입력 초기화', 'Input mode':'입력 방식',
    'Simple':'간편', 'Advanced':'상세', 'RV level':'RV 레벨', 'Facilities and modules':'시설 및 모듈', 'Facilities':'시설',
    'Fill from RV level':'RV 레벨로 채우기', 'Fill':'채우기', 'Item Upgrade Modules':'아이템 업그레이드 모듈',
    'Level':'레벨', 'Count':'수량', 'Strategy':'전략', 'Level up':'레벨 업', 'Level Up':'레벨 업', 'Level-Up':'레벨 업',
    'Priorities':'우선순위', 'Level up to RV':'목표 RV 레벨', 'What you already have':'현재 보유량', 'Recipe Notes':'레시피 노트',
    'Recipes':'레시피', 'Special recipes':'특별 레시피', 'Recipes to skip':'제외할 레시피', 'Search recipes':'레시피 검색',
    'Recipe to skip':'제외할 레시피', 'Skip':'제외', 'Find the best plan':'최적 계획 계산', 'Solving...':'계산 중…',
    'Aniimo Team':'애니모 팀', 'Aniimo setup':'애니모 설정', 'Best':'최상', 'Minimum':'최소', 'My Aniimo':'내 애니모',
    'Aniimo needed per ability':'능력별 필요한 애니모', 'Still working this setup out...':'이 설정을 계산하고 있습니다…',
    'How the team is worked out':'팀 구성 계산 방법', 'Your Rate':'생산 속도', 'Your Rates':'항목별 생산 속도', 'Rate unit':'속도 단위',
    'per second':'초당', 'per minute':'분당', 'per hour':'시간당', 'per day':'일당',
    'Opportunities':'개선 제안', 'Seeds to Plant':'심을 씨앗', 'Profit by Product':'품목별 수익', 'Net of seed costs.':'씨앗 비용을 뺀 순수익입니다.',
    'What Each Facility Should Do':'시설별 생산 계획', 'How to read this':'표 읽는 방법', 'Homeland Layout':'캠프장 배치',
    "How it's laid out":'배치 계산 방법', 'Show the whole homeland':'캠프장 전체 보기', 'Simulate':'시뮬레이션', 'Replay':'다시 재생',
    'Set a Goal':'목표 설정', 'Goal':'목표', 'Target Home Coins':'목표 홈코인', 'Current Home Coins':'현재 홈코인',
    'Total Time':'총 소요 시간', 'Home Coins Produced':'생산할 홈코인', 'Product Breakdown':'품목별 생산 내역',
    'Item':'아이템', 'Facility':'시설', 'Amount':'수량', 'Profit':'순수익', 'Worth':'판매 금액', 'Seeds Needed':'필요한 씨앗',
    'Crop':'작물', 'Plots':'구획 수', 'Plantings/Plot':'구획당 심는 횟수', 'Total Seeds':'총 씨앗 수',
    'Facility Recipes':'시설별 레시피', 'Loading recipe data...':'레시피 데이터를 불러오는 중…', 'How It Works':'계산 원리',
    'The Model':'최적화 모델', 'Whole units.':'정수 단위.', 'Item balance.':'재료 수지.', 'What you own.':'보유 시설.',
    'Growing environments.':'생장 환경.', 'Time per Batch':'1회 생산 시간', 'Environment Coverage':'환경 적용 범위',
    'Time to Reach a Goal':'목표 달성 시간', 'The Backup Planner':'대체 계획 계산기', 'How to Use':'사용 방법',
    "1. Tell It What You've Built":'1. 보유 시설 입력', '2. Pick a Strategy':'2. 전략 선택', '3. Find the Best Plan':'3. 최적 계획 계산',
    '4. Set a Goal (Optional)':'4. 목표 설정 (선택)', 'Understanding the Results':'결과 읽기',
    'Materials':'재료', 'Environment':'환경', 'Aniimo Materials':'애니모 재료', 'Materials Processing':'재료 가공',
    'Remove this level':'이 레벨 삭제', '+ Add level':'+ 레벨 추가', 'Remove':'삭제', 'Name':'이름', 'Add an ability':'능력 추가', '+ Ability':'+ 능력',
    '+ Add Aniimo':'+ 애니모 추가', 'Remove this Aniimo':'이 애니모 삭제', 'One fewer':'1마리 줄이기', 'One more':'1마리 늘리기',
    'How many you have that are alike':'같은 능력과 성격을 가진 보유 애니모 수', 'Start from the Best team':'최상 팀을 기준으로 입력',
    'No plan found with these Aniimo.':'이 애니모 구성으로 가능한 계획을 찾지 못했습니다.',
    'No Aniimo yet. Add the ones you have, or start from the Best plan\'s team.':'애니모가 없습니다. 보유한 애니모를 추가하거나 최상 팀을 불러오세요.',
    'No Aniimo needed.':'필요한 애니모가 없습니다.', 'Nothing in this plan needs an Aniimo.':'이 계획에는 애니모가 필요한 작업이 없습니다.',
    'How many':'마릿수', 'Busy on average':'평균 작업량', 'Where':'담당 작업', 'Producing':'생산 품목', 'Why':'선정 이유',
    'Cost':'비용', 'Need':'필요량', 'Have':'보유량', 'Ready in':'완료까지', 'Surplus:':'남는 자원:', 'Ready now':'이미 준비됨',
    'never':'달성 불가', 'have it':'보유 중', 'not sold':'판매하지 않음', '(bonus)':'(부산물)', 'Product':'품목',
    'Sold per hour':'시간당 판매량', 'Profit per hour':'시간당 순수익', 'Share':'비중', 'Priority':'우선순위', 'Inputs':'재료', 'Yield':'생산량',
    'Time':'시간', 'Sell':'판매', 'Module':'모듈', 'unverified':'미검증', 'special':'특별', 'season':'시즌', 'idle':'대기', 'Idle':'대기',
    'Not yet checked in game':'게임 내 미검증', 'Not yet checked in game.':'게임 내에서 아직 확인하지 않았습니다.',
    'Not yet verified in game.':'게임 내에서 아직 확인하지 않았습니다.', 'Unlock levels not yet confirmed in game.':'해금 레벨은 게임 내에서 아직 확인하지 않았습니다.',
    'Takes a rare currency to unlock':'희귀 재화로 해금', 'Stop skipping':'제외 해제', "Can't make this? Skip it and plan again":'생산할 수 없나요? 제외하고 다시 계산',
    'Running':'실행 중', 'Done':'완료', 'Failed':'실패', 'Skipped':'건너뜀', 'Waiting':'대기 중',
    'Fastest Level-Up':'가장 빠른 레벨 업', "Home Coins with What's Left":'남는 생산력으로 홈코인 확보', 'Most Home Coins':'홈코인 최대화',
    'Minimum Team Plan':'최소 팀 계획', 'Backup Planner':'대체 계획 계산기', 'proven best':'최적성 확인', 'best found in time':'제한 시간 내 최선',
    'Laying out…':'배치를 계산하는 중…', "The layout couldn't be worked out.":'배치를 계산하지 못했습니다.',
    'Failed to load the optimizer. Please refresh the page.':'계산기를 불러오지 못했습니다. 페이지를 새로고침하세요.',
    'Optimizer not ready. Please wait...':'계산기를 준비하는 중입니다. 잠시 기다려 주세요.',
    'Failed to load recipe data. Please refresh the page.':'레시피 데이터를 불러오지 못했습니다. 페이지를 새로고침하세요.',
    'An unknown error occurred.':'알 수 없는 오류가 발생했습니다.', 'Not made by this plan':'이 계획에서는 생산하지 않습니다.',
    'Nothing profitable to produce with the current facilities.':'현재 시설로 수익을 낼 수 있는 생산 품목이 없습니다.',
    'Nothing it can make helps this plan':'이 시설에서 생산할 수 있는 품목은 이 계획에 필요하지 않습니다.', 'No further profitable use found':'추가로 수익을 낼 용도를 찾지 못했습니다.',
    'Sells directly':'바로 판매', 'Cooking, smelting and heat':'요리, 제련 및 가열', 'Planting seeds and gathering':'씨앗 심기 및 채집',
    'Brewing, fetching water and watering':'양조, 물 긷기 및 물주기', 'Reclaiming land and mining':'개간 및 채광', 'Electricity':'전기',
    'Cooling the homeland':'캠프장 냉각', 'Processing with wind':'바람을 이용한 가공', 'Harvesting, cutting, pickling and drying':'수확, 벌목, 절임 및 건조',
    'Lighting the homeland':'캠프장 조명', 'Carrying produce to storage':'생산물 운반', 'Handcrafted goods':'수공예품',
    'Making things while playing':'놀이를 통한 생산', 'Perfumes and incense':'향수 및 향 제작',
    'Your inputs are saved in this browser automatically.':'입력값은 이 브라우저에 자동 저장됩니다.',
    'Your inputs are saved in your browser and never sent anywhere.':'입력값은 브라우저에 저장되며 외부로 전송되지 않습니다.',
    'Unofficial fan-made tool. Not affiliated with or endorsed by the makers of Aniimo.':'팬이 제작한 비공식 도구이며 애니모 제작사와 제휴하거나 제작사의 승인을 받은 도구가 아닙니다.',
};

// Translate at the explicit rendering boundary; never observe or rewrite live form values.
// Remove legacy bilingual labels only when their English name is in the dictionary.
const termEntries = Object.entries(GAME_TERMS).sort((a, b) => b[0].length - a[0].length);
const escapeRegex = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const recipeKeys = [...Object.keys(ITEM_NAMES_KO), ...Object.keys(PREFIXES).flatMap(prefix => Object.keys(ITEM_NAMES_KO).map(key => `${prefix}_${key}`))];
const itemEntries = recipeKeys.map(key => [key.replaceAll('_', ' ').replace(/\b[a-z]/g, c => c.toUpperCase()), itemNameKo(key)]);
const displayMap = new Map([...itemEntries, ...termEntries]);
for (const [alias,key] of Object.entries({
    'Coarse-Sifted Ore':'coarse_sifted_ore', 'River-Washed Stones':'river_washed_stones',
    'Premium River-Washed Stones':'premium_river_washed_stones', 'Sugar-Roasted Chestnuts':'sugar_roasted_chestnuts',
    'Flowers in a Bottle':'flowers_in_a_bottle', 'Aniimo Camp':'aniimo_camp',
})) displayMap.set(alias, key === 'aniimo_camp' ? '애니모캠프' : itemNameKo(key));
const displayPattern = new RegExp(`\\b(?:${[...displayMap.keys()].map(escapeRegex).sort((a,b) => b.length-a.length).join('|')})\\b`, 'g');
const phraseEntries = Object.entries(UI_TEXT).filter(([source]) => source.length > 10).sort((a,b) => b[0].length-a[0].length);
const phraseMap = new Map(phraseEntries);
const phrasePattern = new RegExp(phraseEntries.map(([source])=>escapeRegex(source)).join('|'),'g');

export function textKo(value) {
    if (value == null) return value;
    const text = String(value);
    const core = text.trim();
    if (!core) return text;
    if (UI_TEXT[core]) return text.replace(core, UI_TEXT[core]);
    const held = [];
    let result = text.replace(/([가-힣][가-힣\s]*)\(([^()]*[A-Za-z][^()]*)\)/g, (match, korean, english) =>
        displayMap.has(english) ? korean.trimEnd() : `\uE000${held.push(match)-1}\uE001`);
    result = result.replace(phrasePattern, source => phraseMap.get(source));
    result = result
        .replace(/RV (\d+) is the top level, so there's no level-up to plan\./g, 'RV $1은 최고 레벨이므로 추가 레벨 업 계획이 없습니다.')
        .replace(/There's no level-up cost for RV (\d+)\./g, 'RV $1의 레벨 업 비용 정보가 없습니다.')
        .replace(/\b(Warm|Scorching|Cool|Freeze|Adequate|Room temp) coverage\b/g, '$1 적용 범위')
        .replace(/\b(Warm|Scorching|Cool|Freeze|Adequate|Room temp) where both reach\b/g, '$1 (두 건물의 범위가 겹치는 구역)')
        .replace(/\b(Warm|Scorching|Cool|Freeze|Adequate|Room temp), this plan's plots\b/g, '$1 (이 계획의 구획)')
        .replace(/\bper (second|minute|hour|day)\b/g, source => UI_TEXT[source])
        .replace(/^(\d+) \(everything unlocked\)$/, '$1 (모든 항목 해금)')
        .replace(/^RV (\d+) costs$/, 'RV $1 필요 자원')
        .replace(/^Plot (\d+)$/, '부지 $1')
        .replace(/\bPlant cost: /g, '씨앗 비용: ').replace(/\bbest Lv\./g, '최상 레벨 ').replace(/\bWatering ×2\b/g, '물주기 ×2')
        .replace(/\b(\d+) changes\b/g, '변경 $1개')
        .replace(/^Seeds until RV (\d+): one per planting, for every Farmland and Woodland crop in the plan\.$/, 'RV $1 달성까지 농장·숲에 심을 씨앗입니다. 심을 때마다 1개씩 사용합니다.')
        .replace(/^Seeds (.+): one per planting, for every Farmland and Woodland crop in the plan\.$/, '$1 농장·숲에 심을 씨앗입니다. 심을 때마다 1개씩 사용합니다.')
        .replace(/^([\d.,]+) trips\/hour to the Storage Unit, ([\d.]+) tiles each on average, in the (\d+) plots open at RV (\d+)\.$/, 'RV $4의 부지 $3개에 배치했습니다. 저장 장치까지 시간당 $1회 운반하며 평균 거리는 $2타일입니다.')
        .replace(/\bwithin RV (\d+) limits\./gi, 'RV $1에서 가능한 변경입니다.')
        .replace(/^Checking (\d+) of (\d+)…/, '$1/$2개 검사 중…')
        .replace(/^No improvements found \((\d+) checked\)\./, '검사한 $1개 항목에서 개선 효과를 찾지 못했습니다.')
        .replace(/^(\d+) workload$/, '작업량 $1')
        .replace(/\bneeds? (Warm|Scorching|Cool|Freeze|Adequate)\b/g, '$1 환경 필요')
        .replace(/\b(Idle|idle)\b/g, '대기')
        .replace(/([\d.,]+) trips\/hour/g, '시간당 운반 $1회')
        .replace(/([\d.]+) tiles from storage/g, '저장 장치까지 $1타일')
        .replace(/^Game time since everything was set up, at (\d+)× speed$/, '전체 준비 이후 게임 시간($1배속)')
        .replace(/^(\d+) Aniimo for this plan$/, '계획에 필요한 애니모 $1마리')
        .replace(/^(\d+) of your (\d+) Aniimo have work in this plan\.?$/, '보유 애니모 $2마리 중 $1마리가 이 계획에서 작업합니다.')
        .replace(/^That's (\d+) Aniimo, more than the (\d+) an RV level (\d+) homeland holds\.$/, '필요한 애니모는 $1마리로, RV $3의 최대 $2마리를 초과합니다.')
        .replace(/^No (Dance Pad Polisher|Aniipod Maker) yet$/, '$1 미보유')
        .replace(/ only$/, ' 전용')
        .replace(/^(\d+) Aniimo for this plan; an RV level (\d+) homeland holds (\d+)$/, '계획에 필요한 애니모 $1마리 / RV $2 캠프장 최대 $3마리')
        .replace(/\bcarries produce to storage; add more if produce piles up/g, '생산물 운반 담당 · 생산물이 쌓이면 추가 배치')
        .replace(/^Ranked by (.+)\. (\d+) of (\d+) help\./, '$1 기준으로 정렬했습니다. $3개 중 $2개가 도움이 됩니다.')
        .replace(/level-up time, then Home Coins/g, '레벨 업 시간, 이후 홈코인')
        .replace(/, then Home Coins/g, ', 이후 홈코인')
        .replace(/, from what's left/g, ' (남는 생산력)')
        .replace(/level-up/g, '레벨 업')
        .replace(/^(\d+)d (\d+)h$/, '$1일 $2시간').replace(/^(\d+)h (\d+)m$/, '$1시간 $2분').replace(/^(\d+)m$/, '$1분')
        .replace(/^Target (.+)$/, '$1 목표량').replace(/^Current (.+)$/, '$1 현재 보유량').replace(/^(.+) produced$/, '$1 생산량')
        .replace(/^RV (\d+) level-up$/, 'RV $1 레벨 업').replace(/^in (.+)$/, '$1 후')
        .replace(/^Most (.+)$/, '$1 최대화').replace(/^Recipe Note: (.+)$/, '레시피 노트: $1')
        .replace(/^Unlock (.+)$/, '$1 해금').replace(/^Unskip (.+)$/, '$1 제외 해제').replace(/^Skipping (.+)\.$/, '제외 중: $1')
        .replace(/^Stop skipping (.+)$/, '$1 제외 해제').replace(/^Skip (.+) and plan again$/, '$1 제외 후 다시 계산')
        .replace(/^Move (.+) up$/, '$1 위로 이동').replace(/^Move (.+) down$/, '$1 아래로 이동').replace(/^Remove (.+)$/, '$1 삭제')
        .replace(/^(\d+) facilities and 4 modules at RV (\d+)$/, 'RV $2: 시설 $1종 및 모듈 4종')
        .replace(/^Best plan found in the time allowed; the best possible is at most ([\d.]+)% higher\.$/, '제한 시간 내 최선의 계획입니다. 가능한 최적값은 최대 $1% 더 높을 수 있습니다.')
        .replace(/^(\d+) recipes? in this plan (?:hasn't|haven't) been checked in game yet \(tagged below\)\. If any of those numbers are off, so is this plan\.$/, '이 계획의 레시피 $1개는 게임 내 미검증 상태입니다(아래 표시). 해당 수치가 다르면 계획 결과도 달라집니다.')
        .replace(/^Plan calculation failed: (.+)$/, '계획 계산 실패: $1')
        .replace(/^No level-(\d+) (.+) Aniimo is known in the game yet$/, '레벨 $1의 $2 애니모는 게임 내에서 아직 확인되지 않았습니다.')
        .replace(/^Profit until RV (\d+)$/, 'RV $1 달성까지 순수익')
        .replace(/Used for ([^;]+)/g, '$1 생산에 사용').replace(/the rest sells directly/g, '나머지는 바로 판매')
        .replace(/takes turns with ([^;]+)/g, '$1 품목과 번갈아 생산')
        .replace(/grown without (.+) at ([\d.]+)% speed/g, '$1 없이 $2% 속도로 재배')
        .replace(/\bmatching personality\b/g, '시설과 일치하는 성격').replace(/\bpersonality\b/g, '성격')
        .replace(/\bany level\b/g, '모든 레벨').replace(/\bworkload\b/g, '작업량')
        .replace(/\blevel\b/g, '레벨')
        .replace(/\(\+20% speed\)/g, '(속도 +20%)').replace(/\/sec\b/g, '/초').replace(/\/min\b/g, '/분').replace(/\/hour\b/g, '/시간').replace(/\/day\b/g, '/일');
    result = result.replace(displayPattern, name => displayMap.get(name));
    return result.replace(/\uE000(\d+)\uE001/g, (_, index) => held[Number(index)]);
}

const PRESENTATION_ATTRIBUTES = ['title', 'aria-label', 'aria-description', 'placeholder', 'data-tooltip', 'data-label', 'data-tip', 'data-tip-text', 'data-tip-detail', 'data-tip-stats'];
export function localizeElement(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) nodes.push(node);
    for (const current of nodes) {
        const element = current.nodeType === Node.TEXT_NODE ? current.parentElement : current;
        if (element?.closest('script, style, .math-block, mjx-container, [data-user-text]')) continue;
        if (current.nodeType === Node.TEXT_NODE) {
            // An option without value derives its machine value from its label. Pin it first.
            if (element?.tagName === 'OPTION' && !element.hasAttribute('value')) element.setAttribute('value', element.textContent);
            current.nodeValue = textKo(current.nodeValue);
        } else {
            for (const attr of PRESENTATION_ATTRIBUTES) {
                if (current.hasAttribute(attr)) current.setAttribute(attr, textKo(current.getAttribute(attr)));
            }
        }
    }
}

export function htmlKo(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    localizeElement(template.content);
    return template.innerHTML;
}
