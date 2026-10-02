# Aniimax

한국어 | [English](README.en.md)

웹 앱은 한국어를 기본으로 제공하며 영어도 지원합니다. 상단의 `English` / `한국어` 버튼으로 전환하면 선택을 브라우저에 저장하고, 두 언어에서 동일한 저장 입력값을 사용합니다. 전환 시 페이지를 다시 불러오므로 결과는 다시 계산해야 합니다. URL의 `?lang=en` / `?lang=ko`로 언어를 직접 지정할 수도 있습니다. 이 문서와 [README.en.md](README.en.md)는 동일한 항목·예제·기술 내용을 다룹니다. 문서를 수정할 때는 양쪽을 함께 갱신하세요. 명령어, API 식별자, 수식과 실제 CLI 출력은 두 문서 모두 영어로 유지합니다.

애니모(Aniimo) 캠프장의 생산 경로를 최적화하는 명령줄 도구, Rust 라이브러리, **웹 애플리케이션**입니다. 목표 재화를 가장 빨리 생산하는 방법과 보유한 모든 시설에서 동시에 생산해야 할 품목을 계산합니다.

정식 출시 기준으로 업데이트했으며, 웹 앱은 혼합 정수 기반의 정확한 계획 계산기와 공동 시설 배분 LP 기반 대체 계산기를 사용합니다. CLI는 더 단순한 탐욕적 방법을 사용합니다. 차이는 [최적화 방식](#최적화-방식)을 참고하세요. 게임 데이터는 시설별로 다시 검증 중입니다. 사용 가능한 레시피 중 미검증 항목은 레시피 목록과 해당 항목을 사용하는 계획에 표시하며, 데이터가 잘못되면 계획 결과에도 영향을 줄 수 있습니다.

> **참고:** 정식 출시 게임 데이터를 아직 보완 중이므로 일부 시설과 품목이 없습니다.

## 온라인으로 사용하기

**[Aniimax 웹 앱 실행](https://ae-bii.github.io/aniimax/)** — 설치 없이 사용할 수 있습니다.

이 링크는 원본 프로젝트의 공개 앱이며 이 포크의 배포 주소가 아닙니다. 이 저장소의 Pages 워크플로는 별도로 배포해야 하며, 게시된 주소는 성공한 배포 결과에서 확인하세요. `main`에 푸시하는 것만으로 배포되지는 않습니다.

## 한국어판 용어

시설·아이템 명칭은 [Aniimo Camp](https://aniimocamp.com/ko/)의 영문·한국어 데이터를 같은 아이템 ID로 대조했습니다. 확인한 명칭과 출처 ID는 [web/game-terms-ko.js](web/game-terms-ko.js), UI 문구와 임시 번역은 [web/locale-ko.js](web/locale-ko.js)에 있습니다. 한국어 이름에는 영어 이름을 병기하여 원문 대조와 검색을 지원합니다. 성격·모듈·일부 이벤트 명칭은 임시 번역이며 공식 명칭으로 단정하지 않습니다. 계산용 키, CSV 식별자, API 필드, 저장 입력값과 CLI 옵션은 영어를 유지합니다. 예를 들어 `농장 (Farmland)`는 내부적으로 `Farmland`, `밀 (Wheat)`은 `wheat`를 사용합니다.

## 기능

**웹 앱**

- **간편·상세 설정:** 간편 모드에서는 RV 레벨만 선택하며 해당 레벨에서 가능한 모든 시설을 건설·업그레이드했다고 가정합니다. 상세 모드에서는 시설별 수량·레벨을 직접 설정하며 간편 모드의 값으로 시작할 수도 있습니다.
- **실시간 생산 계획:** 목표량 없이도 가능한 최상의 생산 속도와 각 시설에서 생산할 품목을 계산합니다.
- **목표 달성 시간:** 계획을 계산한 뒤 목표량을 입력하면 달성 시간을 보여 줍니다. 입력할 때 즉시 갱신하며 계획을 다시 풀지 않습니다.
- **최적성 검증:** [HiGHS](https://highs.dev)로 모든 레시피, 정수 구획·기계 수, 환경 건물 배치 후보를 함께 풉니다. 모델과 후보 집합 안에서 최적성을 입증했는지, 시간 제한에 도달했다면 가능한 최적값과의 차이가 얼마나 남았는지 표시합니다.
- **공동 시설 배분:** 모든 품목과 시설을 동시에 풀어 두 레시피가 같은 농장의 콩 공급을 요구하는 경우처럼 공유 자원을 중복 계산하지 않고 배분합니다.
- **정수 단위 운영:** 재배 시설은 정수 구획에 배정하고 가공 기계는 레시피 하나를 전담합니다. 목공 작업대와 굴뚝 화로만 이전 단계 품목을 다음 단계로 가공하므로 여러 등급을 번갈아 생산합니다.
- **레벨 업 전략:** 보유 자원을 반영하여 다음 RV 레벨 업에 필요한 홈코인과 나무토막·광물 모래, RV 7부터는 목공 작업대·굴뚝 화로의 재료를 가장 빨리 확보합니다. 그 속도를 유지하며 홈코인을 최대화합니다. 목표 RV 2~20을 지원합니다.
- **우선순위 전략:** 홈코인, 애니모 경험치, 애니팟, 나무토막, 광물 모래와 축제 중 시즌 포인트의 순서를 정하고 불필요한 항목을 끕니다. 앞선 항목의 생산량을 유지하며 다음 항목을 최대화하고 남는 생산력은 홈코인에 사용합니다.
- **수확의 달 축제:** RV 10부터 시즌 작물·레시피를 사용합니다. 레시피 노트 품목은 체크한 것만 사용합니다. 판매한 품목의 시즌 포인트와 씨앗에 필요한 달빛 밀 이삭을 표시하며, 밀 이삭은 충분히 보유했다고 가정합니다.
- **재배 환경:** 열에너지화로·냉방기·형광등을 구획과 함께 배치합니다. 환경 밖에서 느리게 자라는 작물도 고려하며, 화로와 냉방기의 범위를 겹쳐 두 온도를 합산한 세 번째 온도 구역을 만들 수 있습니다.
- **물주기:** 생장 중 두 번 물을 주며, 매번 정상 속도에서의 전체 생장 시간의 1/8을 줄입니다.
- **레시피 참고 화면:** 보유 시설과 관계없이 게임 데이터의 모든 레시피를 시설별로 살펴볼 수 있습니다.
- **애니모 추천:** 각 능력의 보유 레벨과 시설 성격 보너스를 적용하는 최상 구성, 레시피별 최소 요구 레벨의 최소 구성으로 계획을 계산합니다. 농장·숲 작업을 포함한 능력·레벨·성격·필요 마릿수를 제시하고 RV 레벨의 보유 한도와 비교합니다. 애니모는 I/E 직감형·활력형, N/S 민첩형·실용형, F/T 성실형·끈기형, P/J 장난형·신중형의 대립 쌍에서 하나씩 총 네 성격을 가집니다. 시설 요구 성격이 서로 반대되지 않고 작업 시간이 남으면 여러 시설에서 보너스를 받을 수 있습니다. 요구 능력 레벨과 같으면 효율 100%이며, 가공 시설은 초당 작업량 1, 채집 시설의 요구 레벨 2·3 레시피는 각각 1.25·1.5입니다. 가공 시설은 한 레벨 높으면 300%, 이후 레벨마다 +100%입니다. 채집 시설은 높은 레벨마다 초당 작업량 0.5가 늘어 요구 레벨 1·2·3 기준 +50%·+40%·약 +33%입니다. 성격 보너스는 속도 +20%입니다.
- **내 애니모:** 실제 보유한 종류별 수량·능력·레벨·성격을 입력합니다. 각 애니모의 능력과 가용 작업 시간으로 계획을 계산하며 환경 건물과 상주 시설에는 각각 1마리를 배정합니다. 결과에 각 애니모의 담당 작업을 표시합니다.
- **개선 제안:** 계획 계산 후 가능한 레시피 해금, 애니모 레벨 상승, 상세 모드의 모듈·시설 변경을 다시 계산하고 개선 효과순으로 표시합니다.
- **캠프장 배치:** 열린 부지 안에서 운반이 잦은 시설을 저장 장치 가까이 배치하며, 환경 건물에 배정된 구획은 범위 안에, 다른 작물은 범위 밖에 둡니다.
- **진행 상태:** 계산 과정을 표시하고 최적성을 입증했는지 보여 줍니다.
- **아이템 업그레이드 모듈:** 생태·주방·자원 탐지기·제작 모듈로 해금하는 품목을 지원합니다.

**CLI / 라이브러리**

- **시간·에너지 최적화:** 가장 빠른 경로나 에너지 단위당 수익이 가장 높은 경로를 찾습니다.
- **에너지 자급 모드:** 에너지를 구매하는 대신 소비할 아이템을 직접 생산합니다.
- **시설 유형 간 병렬 모드:** 서로 시설을 공유하지 않는 독립 생산 경로를 동시에 실행합니다.
- **최적 시설 배분:** 꽃 말림에 필요한 장미·라벤더처럼 한 레시피가 같은 시설의 여러 재료를 필요로 할 때 이진 탐색으로 시설을 나눕니다.
- **초기 생산 시간 추적:** 첫 생산까지의 지연과 정상 상태의 생산 시간을 구분합니다.

## 설치

### 사전 요구 사항

- [Rust](https://www.rust-lang.org/tools/install)와 Cargo. 원본 문서의 최소 버전은 Rust 1.70이지만 잠금 파일의 의존성 요구 버전을 만족하는 최신 stable을 권장합니다.
- 웹 앱에는 `wasm32-unknown-unknown` 타깃, `wasm-pack`과 Python 3 같은 정적 HTTP 서버가 필요합니다.

### 소스에서 빌드하기

```bash
git clone https://github.com/CODE-LA-LI-LU-LE-LO/aniimax.git
cd aniimax
cargo build --release --locked
```

실행 파일은 `target/release/aniimax`에 생성됩니다.

CLI가 `data/`를 읽을 수 있도록 저장소 루트에서 실행하세요. CLI 출력과 옵션은 현재 영어입니다. 아래 예제는 기존 명령 구문을 유지합니다. 기존 잠금 파일을 강제하려면 Cargo 명령에 `--locked`를 추가하세요.

## 사용법

### 기본 사용법

```bash
# Make 10000 coins as fast as possible
cargo run --release -- --target 10000 --currency coins

# Maximize Wood Blocks instead of coins
cargo run --release -- --target 500 --currency wood_blocks
```

### 시설 수량과 레벨 지정

정확한 생산 계산을 위해 보유 시설별 수량과 레벨을 지정합니다.

```bash
cargo run --release -- --target 5000 --currency coins \
    --farmland 4 --farmland-level 3 \
    --woodland 2 --woodland-level 2 \
    --carousel-mill 2 --carousel-mill-level 2
```

### 아이템 업그레이드 모듈 지정

모듈 레벨을 지정하여 업그레이드 품목을 활성화합니다.

```bash
cargo run --release -- --target 5000 --currency coins \
    --farmland-level 3 \
    --ecological-module 1 \
    --crafting-module 1
```

### 에너지 최적화

순수 에너지 단위당 수익 순위는 라이브러리의 `find_best_production_path(&efficiencies, target, true, 0.0, &counts)`에서 지원하지만 현재 CLI 플래그에는 연결되어 있지 않습니다. CLI는 항상 시간 기준으로 순위를 매깁니다.

### 에너지 비용 반영

시간 기준 순위에 에너지 비용을 반영합니다. 에너지 비용 페널티로 순위를 조정하고 마지막에 품목별 에너지 추천을 출력합니다.

```bash
cargo run --release -- --target 2000 --currency coins --energy-cost 10
```

### 전체 옵션

아래는 영어 CLI 도움말의 옵션 목록입니다. 옵션 이름과 값은 번역하지 않습니다.

```
Options:
  -t, --target <TARGET>              Target amount of currency to produce
  -c, --currency <CURRENCY>          What to optimize for: coins, or a byproduct
                                     (wood_blocks or mineral_sand) [default: coins]
  -e, --energy-cost <ENERGY_COST>    Energy cost per minute [default: 0.0]
      --energy-self-sufficient       Produce items to consume for energy
      --parallel                     Run different facility types simultaneously

  Facility counts:
      --farmland <N>                 Number of Farmland plots [default: 1]
      --woodland <N>                 Number of Woodland plots [default: 1]
      --mine <N>                     Number of Mine slots [default: 1]
      --well <N>                     Number of Wells [default: 0]
      --tidewhisper-sandcastle <N>   Number of Tidewhisper Sandcastles [default: 0]
      --carousel-mill <N>            Number of Carousel Mill machines [default: 1]
      --claw-game-cooker <N>         Number of Claw Game Cookers [default: 1]
      --jukebox-dryer <N>            Number of Jukebox Dryer machines [default: 1]
      --crafting-table <N>           Number of Crafting Table slots [default: 1]
      --simmering-pot <N>            Number of Simmering Pots [default: 0]

  Facility levels:
      --farmland-level <N>           Farmland facility level [default: 1]
      --woodland-level <N>           Woodland facility level [default: 1]
      --mine-level <N>               Mine facility level [default: 1]
      --well-level <N>               Well facility level [default: 1]
      --tidewhisper-sandcastle-level <N>
                                     Tidewhisper Sandcastle facility level [default: 1]
      --carousel-mill-level <N>      Carousel Mill facility level [default: 1]
      --claw-game-cooker-level <N>   Claw Game Cooker facility level [default: 1]
      --jukebox-dryer-level <N>      Jukebox Dryer facility level [default: 1]
      --crafting-table-level <N>     Crafting Table facility level [default: 1]
      --simmering-pot-level <N>      Simmering Pot facility level [default: 1]

  Aniimo:
      --aniimo-level <N>             Ability level (1-3) of the Aniimo working the Mine, Well,
                                     Tidewhisper Sandcastle and processors [default: 1]
      --personality-bonus            The working Aniimo has each facility's personality
                                     bonus (+20% speed)

  Item upgrade modules:
      --ecological-module <N>        Ecological Module level (unlocks quick crops) [default: 0]
      --kitchen-module <N>           Kitchen Module level (unlocks premium dishes) [default: 0]
      --resource-detector <N>        Resource Detector level (unlocks quick gathered items) [default: 0]
      --crafting-module <N>          Crafting Module level (unlocks premium crafts) [default: 0]

  -h, --help                         Print help
  -V, --version                      Print version
```

> **CLI 지원 범위:** 위의 10개 시설만 지원하며 옵션이 없는 시설은 보유하지 않은 것으로 처리합니다. 환경 범위도 모델링하지 않으므로 보유하지 않은 열에너지화로·냉방기·형광등이 필요한 작물을 추천할 수 있습니다. 전체 시설·환경 계산은 웹 앱을 사용하세요([온라인으로 사용하기](#온라인으로-사용하기), [웹 개발](#웹-개발) 참고).

## 출력 예시

이전 게임 데이터의 설명용 출력이며 현재 품목 수·시간·수익을 보장하지 않습니다. 실제 CLI 출력은 영어입니다.

```
Aniimax - Aniimo Production Optimizer
================================================================

Configuration:
  Target:          5000 coins
  Energy Cost:     0/min
  Mode:            Time Optimization

Facilities (count x level):
  Farmland:           4 x Lv.3
  Woodland:           1 x Lv.1
  Mine:               1 x Lv.1
  Well:               0 x Lv.1
  Tidewhisper:        0 x Lv.1
  Carousel Mill:      2 x Lv.2
  Claw Game Cooker:   1 x Lv.1
  Jukebox Dryer:      1 x Lv.1
  Crafting Table:     1 x Lv.1
  Simmering Pot:      0 x Lv.1

Item Modules:
  Ecological Module:  Lv.0
  Kitchen Module:     Lv.0
  Resource Detector:  Lv.0
  Crafting Module:    Lv.0

Aniimo:             Lv.1 suitability

Loaded 194 production items.

+================================================================+
|           ANIIMO PRODUCTION OPTIMIZATION RESULTS              |
+================================================================+

[BEST PRODUCTION PATH]
----------------------------------------------------------------
  Step 1: Produce 396 x rice at Farmland (x4)
  Step 2: Produce 22 x milled_rice at Carousel Mill (x2)

[SUMMARY]
----------------------------------------------------------------
  Total Profit:     5016 coins
  Total Time:       4h 20m 27s
    - Startup:      40m 27s (first batch)
    - Steady-state: 3h 40m 0s
  Items Produced:   22

[ALL OPTIONS RANKED] (by time efficiency)
----------------------------------------------------------------
Item                   Profit/sec Profit/energy    Time/unit
----------------------------------------------------------------
milled_rice                0.3800          N/A      40m 27s
tofu                       0.3633          N/A      40m 27s
...
```

## 최적화 방식

웹 앱과 CLI·라이브러리는 같은 기본 문제에 서로 다른 접근법을 사용합니다.

### 웹 앱: 정확한 계획 계산기

웹 앱은 전체 문제를 하나의 혼합 정수 문제(`src/exact.rs`)로 구성하여 [HiGHS](https://highs.dev)로 풉니다. HiGHS는 WebAssembly로 컴파일되어 페이지의 Worker에서 실행됩니다(`web/vendor/highs`, MIT 라이선스).

- **레시피와 단위:** 각 사용 가능한 레시피에 초당 생산 횟수와 정수 단위 수를 배정합니다. 작물은 구획, 가공품은 기계 단위입니다. 한 단위는 한 품목을 계속 생산하므로 생산 속도는 최대 `단위 수 / 1회 생산 시간`입니다.
- **아이템 수지:** 생산량은 다른 레시피의 소비량과 판매량을 충당합니다. 속성 품목은 일반 품목과 같은 아이템을 생산하며 남는 양은 판매합니다.
- **시설:** 시설별 단위 수 합은 보유량 이하여야 하며 레시피 요구 레벨 이상의 단위만 계산합니다.
- **재배 환경:** 열에너지화로·냉방기·형광등은 하나의 모드와 범위 배분을 선택합니다. 건물 하나가 농장·숲 등을 덮는 배치에서 다른 후보에 지배되지 않는 모든 범위 배분을 정확한 패킹으로 미리 계산합니다. 작물은 요구 온도에서 정상 속도로, 온도 차이가 커질수록 느리게 자랍니다. 범위 밖 구획도 고려하므로 환경 건물 없이 재배할 수 있습니다. 화로와 냉방기는 범위를 겹치는 한 쌍으로 배치할 수도 있습니다. 겹치는 곳은 온도를 더해 두 건물 사이에 세 번째 구역을 만듭니다. 가로·세로·대각선 등 범위가 겹치는 모든 상대 위치를 후보로 제공하며, 각 후보는 세 구역에 구획을 다르게 배분합니다. 패킹 결과는 `data/pair_coverage.csv`에 미리 저장합니다(`bake_pair_coverage` 테스트 참고).
- **부산물:** 나무토막과 광물 모래도 다른 아이템처럼 수지를 맞추며 목공 작업대·굴뚝 화로에서 사용할 수 있습니다. 레벨 업 재료 레시피는 각각 독립 단위를 차지하지 않고 같은 단위에서 번갈아 생산합니다.
- **목적 함수:** 판매한 모든 품목의 초당 홈코인에서 씨앗 비용을 뺍니다. 부산물을 우선하면 각 부산물의 최대 생산량을 먼저 구하고 그 양을 유지하도록 제약합니다.
- **레벨 업:** 하루에 유지할 수 있는 레벨 업 횟수인 속도(`pace`)를 최대화합니다. 홈코인과 모든 재료에서 `획득량 + pace × 보유량`이 `pace × 필요량`을 충당해야 하며 선형성을 유지합니다. 두 번째 계산은 그 속도에서 홈코인을 최대화하고, 세 번째 계산은 목공 작업대·굴뚝 화로의 남는 시간을 필요한 재료 생산에 사용합니다. 예를 들어 풍부한 광물 모래를 그대로 남기지 않고 광석으로 가공합니다.

HiGHS가 현재 모델과 배치 후보 집합 안에서 최적성을 입증하면 화면에 표시합니다. 30초 제한에 도달하면 가능한 최적값과의 차이 상한을 표시합니다. 표시 전 정수 단위 수를 고정해 `microlp`로 다시 풀고 모든 제약을 `check_plan`으로 독립 검증합니다. 검증에 실패하면 아래의 휴리스틱 계산기로 전환합니다.

### 웹 앱 대체 계산기: 공동 시설 배분

휴리스틱 계산기(`find_plan`, 내부적으로 `find_production_plan` 사용)는 단일 최고 품목을 고르는 것보다 복잡한 문제를 풉니다. 여러 레시피가 공유하는 시설까지 포함하여 모든 보유 시설이 동시에 수행할 작업을 계산합니다.

**1. 품목별 수익:** 모든 품목의 1회 생산 순수익과 재료 경로 전체에서 사용하는 각 시설의 이용량(필요한 초당 생산 횟수)을 구합니다. 해당 품목의 시설뿐 아니라 중간 가공 단계도 포함합니다.

```math
\text{profit}_{\text{batch}} = (\text{yield} \times \text{sell\_price}) - \text{raw\_cost}
```

**2. 전체를 하나의 선형 계획으로 계산:** 품목별 속도를 독립적으로 선택하면 두부와 볶은 콩이 같은 농장의 콩을 사용하는 경우처럼 시설을 중복 계산합니다. 모든 후보 품목과 보유 시설을 하나의 선형 계획에 넣고 [`microlp`](https://crates.io/crates/microlp)로 정확히 풉니다.

```math
\max \sum_i \text{profit}_{\text{batch},i} \cdot x_i \quad \text{s.t.} \quad \sum_i \text{utilization}_{i,f} \cdot x_i \leq \text{capacity}_f \ \ \forall f
```

**3. 정수 단위 배정:** LP 해는 “농장의 62%에서 콩 재배”처럼 연속값이지만 게임에서 구획이나 기계를 분수 단위로 나눌 수는 없습니다. 시설 유형에 따라 다르게 정수화합니다.

- **생산·재배 시설**(농장·숲·광산 등): 구획 하나는 한 주기 동안 한 작물을 전담합니다. 의회 의석 배분에도 쓰이는 최대 나머지 방식으로 비율을 정수 수량으로 바꿉니다.
- **가공 시설**(회전목마방앗간·크레인 화로 등): 플레이어는 기계 하나를 한 레시피로 계속 가동하므로 두 레시피를 시분할할 수 없습니다. 기계 수보다 많은 레시피가 요구되면 수익성 높은 후보에 전용 기계를 하나씩 배정하고 나머지는 제외합니다. LP를 다시 풀어 남는 공급이 실제로 가능한 차선의 용도로 쓰이게 합니다.
- **정수 단위 채우기:** 수량이 정해지면 품목별 정수 단위 상한으로 LP를 마지막으로 풉니다. 올림된 구획·우물은 연속 해의 비율이 아니라 전체 생산량을 내며, 같은 품목을 쓰는 모든 경로는 같은 단위를 공유합니다. 초과량은 사용할 수 있는 레시피에 배분하거나 판매합니다. 남는 가공 단위에는 새 레시피를 배정할 수 있고 정수화 후 빈 생산 단위에는 해당 시설의 가장 가치 높은 작물을 재배하여 판매합니다.

**4. 목표 달성 시간:** 계획을 정한 뒤 각 품목은 초기 생산 시간이 지나기 전에는 기여하지 않고 이후 정상 생산 속도로 기여합니다. 누적량은 시간에 따라 단조 증가하므로 목표 달성 시간을 직접 최적화하지 않고 이진 탐색으로 찾습니다.

```math
\text{amount}(t) = \sum_i \text{rate}_i \cdot \max(0,\ t - \text{lead}_i)
```

같은 설명은 웹 앱 상단의 “계산 원리”에서 볼 수 있습니다. 구현은 [`optimizer.rs`](src/optimizer.rs)의 `find_production_plan`, `solve_facility_allocation`, `time_to_reach_goal`을 참고하세요.

### CLI / 라이브러리: 탐욕적 경로 선택

CLI와 라이브러리 함수 `find_best_production_path`, `find_parallel_production_path`는 웹 앱의 공동 계산 대신 탐욕적 알고리즘을 사용합니다. 공유 시설을 한꺼번에 풀지 않고 품목을 독립적으로 평가합니다. 아래 계산 예시는 이전 게임 데이터의 설명용 수치이며 설명하는 원리는 동일합니다.

### 1. 효율 계산

생산 가능한 품목마다 주요 지표를 계산합니다.

**원재료의 초당 수익:**

밀·밤·돌 같은 원재료의 초당 수익에는 병렬 생산을 반영합니다.

```math
\text{Profit/sec} = \frac{(\text{sell\_value} \times \text{yield}) - \text{cost}}{\text{production\_time} / \text{facility\_count}}
```

**가공품의 초당 수익(정상 상태 처리량):**

밀가루·감자칩 같은 가공품은 생산 병목으로 **정상 상태 처리량**을 구합니다. 연속 생산에서 원재료 채집과 가공은 병렬로 진행하므로 느린 단계가 전체 처리량을 결정합니다.

```math
\text{Gathering Rate} = \frac{\text{raw\_facility\_count} \times \text{raw\_yield}}{\text{raw\_production\_time} \times \text{required\_amount}}
```

```math
\text{Processing Rate} = \frac{\text{processing\_facility\_count}}{\text{processing\_time}}
```

```math
\text{Batches/sec} = \min(\text{Gathering Rate}, \text{Processing Rate})
```

```math
\text{Profit/sec} = \text{Batches/sec} \times \text{net\_profit\_per\_batch}
```

따라서 농장을 늘리면 가공이 병목이 될 때까지 가공품 생산이 빨라지고, 가공 시설을 늘리면 원재료 채집이 병목이 될 때까지 생산이 빨라집니다.

**에너지 단위당 수익**(에너지 최적화 모드):

```math
\text{Profit/energy} = \frac{\text{profit}}{\text{energy\_consumed}}
```

**속성 품목:**

원재료 요구량을 계산할 때 필요한 모듈 레벨을 보유하면 `wheat` 대신 `quick_wheat` 같은 속성 품목을 자동으로 사용합니다. 단위 판매가는 같지만 생산량이 많아 가공품 생산이 효율적입니다. 이름으로 치환하므로 `X`를 요구하는 레시피에는 해금된 `quick_X`를 공급합니다.

### 2. 품목 필터링

설정에 따라 품목을 걸러냅니다.

- **시설 레벨:** 해당 시설 레벨에서 해금한 품목만 고려합니다.
- **모듈 레벨:** 속성 밀 같은 업그레이드 품목은 해당 모듈의 요구 레벨이 필요합니다.
- **원재료 공급 가능 여부:** 재료를 생산할 수 있어야 가공품을 사용할 수 있습니다.

### 3. 경로 선택

**시간 최적화 모드**(기본값):

- 실효 초당 수익으로 품목 순위를 매깁니다.
- 시간 효율이 가장 좋은 품목을 선택하고 목표량에 필요한 생산 횟수를 계산합니다.
- 같은 유형의 시설 여러 개는 병렬 생산으로 실효 시간을 줄입니다.

**에너지 최적화 모드:**

- 에너지 단위당 수익으로 품목 순위를 매깁니다.
- 시간이 아니라 에너지가 병목일 때 유용합니다.

**에너지 자급 모드:**

- 밀처럼 에너지 효율이 가장 좋은 소비 품목을 먼저 찾습니다.
- 에너지를 얻기 위해 생산·소비할 양을 계산합니다.
- 생성한 에너지로 수익 품목을 생산합니다.

### 4. 병렬 생산

같은 시설을 여러 개 보유하면(예: 농장 4개) 생산 시간을 나눕니다.

```math
t_{\text{effective}} = \frac{t_{\text{actual}}}{n_{\text{facilities}}}
```

어떤 품목이 가장 효율적인지에 큰 영향을 줍니다.

### 5. 시설 유형 간 병렬 모드

`--parallel`을 켜면 시설을 공유하지 않고 동시에 운영할 수 있는 생산 경로를 모두 찾습니다. 탐욕적 알고리즘으로 합산 수익을 최대화합니다.

**작동 방식:**

1. 생산 가능한 모든 품목의 효율을 계산합니다.
2. 초당 수익의 내림차순으로 정렬합니다.
3. 서로 충돌하지 않는 품목을 탐욕적으로 선택합니다.
   - 중간 가공을 포함하여 각 경로에서 사용하는 모든 시설을 추적합니다.
   - 이미 선택한 경로와 충돌하는 품목은 건너뜁니다.
4. 선택한 모든 경로를 병렬로 운영합니다.

**여러 단계 경로 감지:**

`caramel_nut_chips`처럼 중간 가공이 필요한 품목을 고려합니다.

- `caramel_nut_chips`에는 `nuts`와 `maple_syrup`이 필요합니다.
- 음악 건조기에서 가공하는 `nuts`에는 `walnut`과 `chestnut`이 필요합니다.
- 전체 경로는 **숲 → 음악 건조기 → 음악 건조기**입니다.

경로의 모든 시설을 추적하므로 `caramel_nut_chips`가 음악 건조기를 두 번 사용함을 감지하고, 다른 음악 건조기 품목과 병렬로 운영하지 않습니다.

```math
t_{\text{total}} = \max(t_{\text{chain\_1}}, t_{\text{chain\_2}}, ...) + t_{\text{startup}}
```

```math
\text{Profit}_{\text{total}} = \text{Profit}_{\text{chain\_1}} + \text{Profit}_{\text{chain\_2}} + ...
```

**초기 생산 시간:**

총시간에는 정상 상태가 시작되기 전 첫 생산까지의 지연을 포함합니다. 병렬 경로별 첫 생산 시간 중 최댓값을 사용합니다.

**예시:** 농장 20개, 회전목마방앗간 5개, 숲 6개로 홈코인 100,000개 생산

병렬 모드 미사용(`super_wheatmeal`만 생산):

```
[BEST PRODUCTION PATH]
  Step 1: Produce 57240 x quick_wheat at Farmland (x20)
  Step 2: Produce 477 x super_wheatmeal at Carousel Mill (x5)

[SUMMARY]
  Total Time:       4h 46m 12s
    - Startup:      3m 0s (first batch)
    - Steady-state: 4h 43m 12s
  Total Profit:     100170 coins
```

병렬 모드 사용(여러 독립 경로):

```
[PARALLEL PRODUCTION CHAINS]
  All chains run simultaneously. Total time = longest chain.

  Chain 1: Farmland → Carousel Mill (88410 coins in 4h 30m 0s)
    → 50640 x quick_wheat at Farmland (x20) (raw material)
    → 422 x super_wheatmeal at Carousel Mill (x5)

  Chain 2: Woodland (12240 coins in 4h 30m 0s)
    → 34 x chestnut at Woodland (x6)

[SUMMARY]
  Total Time:       4h 33m 0s
    - Startup:      3m 0s (first batch)
    - Steady-state: 4h 30m 0s
  Total Profit:     100650 coins
```

병렬 모드는 유휴 숲을 활용하여 수익을 개선합니다.

### 6. 최적 시설 배분

레시피가 **같은 시설 유형**의 서로 다른 원재료를 여러 개 요구하면 총 생산 시간을 최소화하도록 시설을 나눕니다.

**예시:** 농장 20개로 `dried_flowers` 생산(라벤더 3개와 장미 3개 필요)

| 재료 | 필요한 생산 횟수 | 생산 시간 |
|------|------------------|-----------|
| lavender | 666 | 5400s (1.5h) |
| rose | 666 | 8100s (2.25h) |

**단순 배분(각 10개):**

```math
t = \max\left(\lceil\frac{666}{10}\rceil \times 5400, \lceil\frac{666}{10}\rceil \times 8100\right) = \max(67 \times 5400, 67 \times 8100) = 542700s
```

**최적 배분(라벤더 8개, 장미 12개):**

```math
t = \max\left(\lceil\frac{666}{8}\rceil \times 5400, \lceil\frac{666}{12}\rceil \times 8100\right) = \max(84 \times 5400, 56 \times 8100) = 453600s
```

느린 장미 생산에 더 많은 시설을 배정하여 **약 25시간**을 절약합니다.

**알고리즘:**

완료 시간 후보를 **이진 탐색**합니다.

1. **후보 시간 생성:** 생산 횟수 $B_i$, 생산 시간 $t_i$인 재료 $i$의 가능한 완료 시간은 $k = 1, 2, \ldots$에 대해 $\lceil B_i / k \rceil \cdot t_i$입니다. 몫의 서로 다른 값 수를 이용하면 후보는 $O(\sqrt{B_i})$개뿐입니다.
2. **이진 탐색:** 후보 시간 $T$마다 달성 가능한지 확인합니다.
   - 재료 $i$의 최대 생산 회차는 $\lfloor T / t_i \rfloor$입니다.
   - 최소 필요 시설 수는 $\lceil B_i / r_i \rceil$이며 $r_i$는 최대 회차입니다.
   - 필요 시설 합이 $F$ 이하면 가능합니다.
3. **배분:** 최적 시간을 찾으면 재료별 최소 시설을 배정하고 남는 시설을 탐욕적으로 나눕니다.

목적 함수는 다음과 같습니다.

```math
\min \max_i \left(\lceil\frac{B_i}{f_i}\rceil \times t_i\right) \quad \text{s.t.} \quad \sum_i f_i = F
```

**복잡도:** $O(M \cdot \sqrt{B} \cdot \log(M \cdot \sqrt{B}))$. $M$은 재료 수, $B$는 최대 생산 횟수입니다.

**적용되는 경우:**

- 같은 시설에서 생산하는 여러 재료(농장의 라벤더와 장미)
- 재료별 생산 시간이 서로 다른 경우

**적용되지 않는 경우:**

- 서로 다른 시설의 재료(시설을 나눌 필요 없음)
- 원재료 하나인 레시피(모든 시설에서 같은 품목 생산)

### 예시: 원재료

레벨 3 농장 4개에서 벼(`rice`)를 생산합니다.

- 810초에 10개를 생산하고 개당 홈코인 10개에 판매합니다. 비용은 1회당 홈코인 5개입니다.

```math
\text{Net Profit} = (10 \times 10) - 5 = 95 \text{ coins per batch}
```

```math
t_{\text{effective}} = \frac{810}{4} = 202.5 \text{ seconds}
```

```math
\text{Profit/sec} = \frac{95}{202.5} \approx 0.47 \text{ coins/sec}
```

### 예시: 가공품

농장 4개와 회전목마방앗간 2개로 `super_wheatmeal`을 생산합니다. 밀 120개가 필요하며 홈코인 210개에 판매합니다.

생태 모듈을 사용하여 속성 밀(`quick_wheat`)을 생산합니다(생산량 15개, 90초).

```math
\text{Gathering Rate} = \frac{4 \times 15}{90 \times 120} = 0.00556 \text{ batches/sec}
```

```math
\text{Processing Rate} = \frac{2}{60} = 0.0333 \text{ batches/sec}
```

병목은 채집입니다(0.00556 < 0.0333).

```math
\text{Profit/sec} = 0.00556 \times 210 = 1.17 \text{ coins/sec}
```

농장을 늘리면 채집 속도가 가공 속도에 도달할 때까지 생산량이 늘어납니다.

### 계산 복잡도

아래 표는 앞서 설명한 CLI·라이브러리의 탐욕적 함수에 관한 것입니다. 웹 앱의 혼합 정수 계산기나 LP 대체 계산기에는 적용되지 않습니다. 두 계산기의 시간은 솔버와 문제 크기에 따라 달라져 아래와 같은 단순한 닫힌 형태로 표현할 수 없습니다.

$n$은 생산 품목 수, $m$은 최대 경로 깊이, $f$는 경로별 시설 수, $k$는 선택한 병렬 경로 수, $F$는 시설 수, $M$은 레시피의 재료 수입니다.

| 연산 | 복잡도 | 설명 |
|------|--------|------|
| 효율 계산 | $O(n \cdot m^2)$ | 품목별 재귀 경로 탐색 |
| 병렬 모드 선택 | $O(n \log n + n \cdot f)$ | 정렬과 충돌을 감지하는 탐욕적 선택 |
| 시설 배분 | $O(M \cdot \sqrt{B} \cdot \log(M\sqrt{B}))$ | 후보 시간 이진 탐색 |
| 초기 생산 시간 계산 | $O(k)$ | 선택한 $k$개 경로의 최댓값 |

원본 성능 예시는 품목 약 64개, 얕은 경로($m \leq 3$), 보통 재료 $M \leq 3$인 경우에 1밀리초 미만의 실행 시간을 보고했습니다. 과거 예시이며 현재 데이터의 벤치마크나 시간 보장이 아닙니다.

## 라이브러리 사용법

이 크레이트는 라이브러리로도 사용할 수 있습니다.

```rust
use aniimax::{
    data::load_all_data,
    optimizer::{calculate_efficiencies, find_best_production_path},
    models::{FacilityCounts, ModuleLevels},
    display::display_results,
};
use std::path::Path;

fn main() {
    // Load production data
    let items = load_all_data(Path::new("data")).unwrap();

    // Define facility counts and levels as (name, count, level) triples. Any facility not
    // listed here defaults to count=1, level=1.
    let counts = FacilityCounts::from_pairs(&[
        ("Farmland", 4, 3),        // 4 farmlands at level 3
        ("Woodland", 2, 2),        // 2 woodlands at level 2
        ("Mine", 1, 1),
        ("Carousel Mill", 2, 2),   // 2 carousel mills at level 2
        ("Jukebox Dryer", 1, 1),
        ("Crafting Table", 1, 1),
    ]);

    // Define item upgrade module levels (0 = not unlocked)
    let modules = ModuleLevels {
        ecological_module: 1,    // Unlocks quick wheat
        kitchen_module: 0,
        resource_detector: 0,
        crafting_module: 1,      // Unlocks premium river-washed stones
    };

    // Calculate efficiencies (per-facility levels and modules are used automatically)
    let efficiencies = calculate_efficiencies(&items, "coins", &counts, &modules);

    // Find optimal path
    if let Some(path) = find_best_production_path(&efficiencies, 5000.0, false, 0.0, &counts) {
        display_results(&path, &efficiencies, false);
    }
}
```

## API 문서

다음 명령으로 API 문서를 생성하고 확인합니다.

```bash
cargo doc --open
```

## 웹 개발

### 웹 앱 빌드하기

1. wasm-pack을 설치합니다.

   ```bash
   rustup target add wasm32-unknown-unknown
   cargo install wasm-pack --locked --version 0.15.0
   ```

2. WASM 모듈을 빌드합니다.

   ```bash
   ./build-wasm.sh
   # or manually:
   wasm-pack build --target web --out-dir web/pkg --no-opt --locked
   ```

3. 로컬에서 테스트합니다.

   ```bash
   cd web && python3 -m http.server 8080
   ```

   브라우저에서 로컬 서버의 8080 포트로 접속합니다.

HTTP로 실행해야 하며 HTML 파일을 직접 열면 안 됩니다. 웹 앱은 Web Worker와 WASM을 사용합니다. `web/pkg/`와 `target/`는 생성물이며 Git에서 제외됩니다. `--no-opt`는 추가적인 `wasm-opt` 용량 최적화만 생략하며 Rust 릴리스 최적화는 유지합니다. 배포 시 Binaryen을 다운로드할 수 있으면 이 옵션을 생략하세요. `./build-wasm.sh`는 이 옵션 없이 기본 빌드를 수행합니다.

### GitHub Pages 배포

`.github/workflows/deploy.yml`은 버전 태그(`v*`) 푸시 또는 수동 실행으로 배포하며 `main`의 모든 푸시에 반응하지 않습니다. 먼저 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정하고 배포 권한을 확인하세요. Actions에서 원하는 브랜치의 **Deploy to GitHub Pages**를 실행하거나 의도한 릴리스 태그를 푸시합니다. build와 deploy 작업이 모두 성공해야 게시됩니다. **Setup Pages** 단계의 `Get Pages site failed` / `HttpError: Not Found` 오류는 Pages를 활성화하거나 Actions 방식으로 설정해야 한다는 뜻입니다.

대안으로 새로 빌드한 `web/pkg/`를 포함한 `web/` 내용을 `gh-pages` 브랜치에 직접 복사할 수도 있습니다. 이 별도 방식에서는 Pages 소스를 브랜치 배포로 바꿔야 합니다.

## 데이터 형식

생산 데이터는 `data/` 디렉터리의 CSV 파일에 저장합니다.

- `farmland.csv` — 작물(밀·감자·벼 등), 씨앗 비용과 재배 환경
- `woodland.csv` — 나무(버드나무·대나무·카카오 등), 부산물 나무토막
- `mine.csv` — 광산(돌·점토·석영 광석·보석 등), 부산물 광물 모래
- `well.csv` — 물(우물물·맑은 물·샘물)
- `tidewhisper_sandcastle.csv` — 해염·진주
- `dewy_house.csv`, `nimbus_bed.csv`, `starfall_hammock.csv`, `floral_windmill.csv` — 애니모 재료(향기 수정·양모·꽃잎·별·비늘가루)
- `carousel_mill.csv` — 곡물·밀가루 가공
- `crafting_table.csv` — 제작 레시피
- `claw_game_cooker.csv` — 구운 음식·사탕·디저트
- `jukebox_dryer.csv` — 식품 건조
- `simmering_pot.csv` — 죽·잼·시럽·당류
- `phonolfactory_table.csv` — 향·비누·향수
- `bouncy_brew_keg.csv` — 차·주스·음료
- `blazing_stove.csv` — 요리·과자
- `pickling_jar.csv` — 소스·식초·당절임 과일
- `joy_wheel_loom.csv` — 실·밧줄·직물
- `woodworking_bench.csv`, `chimney_kiln.csv` — 나무토막·광물 모래로 만드는 RV 레벨 업 재료(판매가 없음)
- `harvest_moon_festival.csv` — 수확의 달 축제 작물·레시피, 달빛 밀 이삭 씨앗 비용과 시즌 포인트

농장, 숲, 광산, 우물, 속삭임 모래성, 허니버드 하우스, 회전목마방앗간, 작업대, 크레인 화로, 음악 건조기, 달임 냄비, 레코드 조향대, 폴짝 양조통, 관람차 물레, 슈퍼 인덕션, 풍미 숙성 항아리, 목공 작업대와 굴뚝 화로는 게임 내 검증된 시설입니다. 나머지 세 시설의 레시피는 미검증이며 `data/unverified.csv`에 있습니다. 레시피 목록과 해당 품목을 사용하는 계획에서 표시합니다.

### 새 품목 추가

생산 품목을 추가하려면 해당 시설의 CSV 파일을 수정하세요. 시설 유형에 따라 형식이 다르므로 기존 항목을 예시로 참고합니다.

## 프로젝트 구조

```
src/
  lib.rs             - Library root with module exports
  main.rs            - CLI entry point
  models.rs          - Data structures
  data.rs            - CSV loading functions
  exact.rs           - Exact planner: the web app's mixed-integer model, and its checks
  coverage.rs        - Environment building coverage geometry and packing
  optimizer.rs       - Heuristic planner (the web app's fallback) and the CLI's greedy path
  display.rs         - CLI output formatting
  wasm.rs            - WebAssembly bindings
data/
  *.csv              - Production data files
web/
  index.html         - Optimizer page (facility plan, goal timing, math/help/facilities modals)
  index.en.html      - English page; keep application element IDs aligned with index.html
  language-preference.js - Language switching, persistence and URL selection
  locale.js          - Presentation adapter for the selected language
  locale-ko.js       - Korean UI text and provisional game terminology
  game-terms-ko.js   - Reference-verified Korean names and source IDs
  facility-config.js - Shared facility list/categories
  app.js             - Page logic, including the facility recipe reference modal
  style.css          - Styling
  worker.js          - Web Worker running the wasm module and HiGHS
  layout.js          - Homeland layout: places facilities around the Storage Unit
  layout-worker.js   - Web Worker running the layout
  vendor/highs/      - HiGHS solver compiled to WebAssembly (MIT license)
  pkg/               - Built WASM module (generated)
tests/
  *.rs               - Integration tests
  *.mjs              - Localization and language-switching tests
README.md            - Korean documentation (same content as README.en.md)
README.en.md         - English documentation
```

## 기여하기

기여를 환영합니다. 다음과 같은 방법으로 참여할 수 있습니다.

### 문제 제보

- 새 이슈를 만들기 전에 기존 이슈를 확인합니다.
- 문제 재현 단계를 포함합니다.
- 운영체제·Rust 버전·필요한 경우 브라우저 등 실행 환경을 명시합니다.

### 게임 데이터 추가

누락 품목을 추가하거나 기존 데이터를 수정하려면 다음 절차를 따릅니다.

1. `data/`의 해당 CSV를 시설 형식에 맞게 수정합니다.
2. 새 CSV를 추가했다면 `src/data.rs`와 `src/wasm.rs` 양쪽에서 읽도록 합니다.
3. `cargo test`를 실행합니다. 데이터 검사는 재료 오탈자, 속성 품목 불일치와 범위 밖 값을 확인합니다.
4. 풀 리퀘스트를 제출합니다.

### 코드 기여

1. 저장소를 포크합니다.
2. `git checkout -b feature/your-feature`로 기능 브랜치를 만듭니다.
3. 코드를 변경합니다.
4. `cargo test`로 테스트합니다.
5. `wasm-pack build --target web --out-dir web/pkg`로 WASM 빌드를 검증합니다.
6. 설명이 명확한 메시지로 커밋합니다.
7. 푸시하고 풀 리퀘스트를 엽니다.

### 개발 환경 설정

```bash
# Clone your fork
git clone https://github.com/<your-username>/aniimax.git
cd aniimax

# Build and test
cargo build
cargo test

# Build WASM for web testing
wasm-pack build --target web --out-dir web/pkg

# Start local server for web app
cd web && python3 -m http.server 8080
```

### 검증과 문서 유지보수

시간이 오래 걸리는 패킹 검사의 비용을 줄이려면 Rust 테스트를 릴리스 모드로 실행합니다.

```bash
cargo test --release --locked --all-targets
cargo test --release --locked --test data_tests
cargo test --release --locked --test models_tests
cargo test --release --locked --test optimizer_tests
cargo test --release --locked --test exact_tests
node --check web/app.js
node --check web/locale.js
node --check web/locale-ko.js
node --test tests/localization_tests.mjs tests/language_tests.mjs
```

선택적 데이터 생성과 고비용 패킹 테스트는 기본적으로 무시합니다. 관련 규칙을 바꿀 때만 각 테스트의 안내에 따라 실행하세요. `bake_pair_coverage`는 데이터 파일을 다시 생성할 수 있습니다.

브라우저에서 간편·상세 입력, 한국어·영어 레시피 검색과 제외, 우선순위, 애니모 목록, 저장 입력값, 목표량, 테마, 도움말과 결과 툴팁을 확인하세요. 양방향 언어 버튼, 새로고침과 루트 URL 재방문도 확인합니다. 폼의 `value`와 계산에 사용하는 `data-*` 식별자는 유지하며 `title`, `aria-label`, `placeholder`, `data-tooltip`, `data-label` 같은 표시 문구·속성만 번역합니다. 사용자가 입력한 애니모 이름은 바꾸지 않습니다.

README.md와 README.en.md를 함께 관리하세요. 항목, 명령어, 수식, 옵션 목록, API 예제, 데이터 파일 목록과 주의 사항을 양쪽에 동일하게 유지합니다. 설명과 용어를 번역하되 기계 식별자나 실제 출력은 번역하지 않습니다. 앞으로 기능을 추가하거나 내용을 정정할 때도 한쪽을 요약본으로 대체하지 말고 두 문서를 함께 수정하세요.

## 라이선스

MIT 라이선스입니다. 자세한 내용은 [LICENSE](LICENSE)를 참고하세요. 포함된 HiGHS에는 [별도 라이선스](web/vendor/highs/LICENSE)가 적용됩니다. 이 프로젝트는 비공식 팬 도구이며 애니모 제작사와 제휴하거나 제작사의 승인을 받은 도구가 아닙니다.
