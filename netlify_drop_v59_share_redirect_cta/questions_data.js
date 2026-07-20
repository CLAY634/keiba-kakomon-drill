// v55 prototype: stage1 data separated from screen logic.
// Source baseline: v52 split-HTML stable stage1.
// Do not edit UI logic here; only question/race data should live in this file.

window.QUESTIONS = window.QUESTIONS || {};
window.QUESTIONS.stage1 = {
    "id": "stage1",
    "title": "第1問：【展開】前が速すぎた日の差し脚",
    "subtitle": "コース条件：中山 芝2000m / 右回り / 重馬場（出走：18頭）",
    "courseQuery": "中山競馬場 芝2000m 特徴",
    "budget": 1000,
    "horses": [
        {
            "number": 1,
            "frame": 1,
            "name": "ホースA",
            "odds": 5.2,
            "jockey": {
                "name": "騎手A",
                "status": "継続",
                "rate": "42%"
            },
            "winRace": "中山芝2000m(G3)",
            "winRaceQuery": "中山 芝2000m 特徴",
            "weight": "462kg（±0）",
            "previousRace": "・1/15 中山2000m [1着] 34.8秒 (6-4-4)",
            "comment": "サンデー系特有 of バネがあり無傷で重賞制覇。中山のタフな流れに対応できるかが鍵。"
        },
        {
            "number": 2,
            "frame": 1,
            "name": "ホースB",
            "odds": 113.2,
            "jockey": {
                "name": "騎手B",
                "status": "乗替",
                "rate": "15%"
            },
            "winRace": "中京芝2000m(1勝)",
            "winRaceQuery": "中京 芝2000m 特徴",
            "weight": "436kg（-8）",
            "previousRace": "・3/05 中山2000m [3着] 35.0秒 (5-4-3)",
            "comment": "小柄な馬体で馬体減。良馬場ならキレるが、荒れた重馬場の消耗戦では疑問符。"
        },
        {
            "number": 3,
            "frame": 2,
            "name": "ホースC",
            "odds": 185.2,
            "jockey": {
                "name": "騎手C",
                "status": "継続",
                "rate": "20%"
            },
            "winRace": "阪神芝2000m(G3)",
            "winRaceQuery": "阪神 芝2000m 特徴",
            "weight": "480kg（-4）",
            "previousRace": "・3/05 中山2000m [8着] 35.8秒 (5-6-6)",
            "comment": "キングカメハメハ系のパワーを持つが、近走は道中の追走に苦労している印象。"
        },
        {
            "number": 4,
            "frame": 2,
            "name": "ホースD",
            "odds": 48,
            "jockey": {
                "name": "騎手D",
                "status": "乗替",
                "rate": "18%"
            },
            "winRace": "阪神芝2000m(L 2着)",
            "winRaceQuery": "阪神 芝2000m 特徴",
            "weight": "498kg（+2）",
            "previousRace": "・3/18 阪神2000m [2着] 36.3秒 (8-7-6)",
            "comment": "サンデー系。前走はタフな馬場で好走。時計のかかる重馬場になればスタミナが活きる。"
        },
        {
            "number": 5,
            "frame": 3,
            "name": "ホースE",
            "odds": 7.7,
            "jockey": {
                "name": "騎手E",
                "status": "乗替",
                "rate": "30%"
            },
            "winRace": "中京芝2000m(G3)",
            "winRaceQuery": "中京 芝2000m 特徴",
            "weight": "506kg（+4）",
            "previousRace": "・2/05 中京2000m [1着] 34.0秒 (4-4-3)",
            "comment": "キンカメ系。連勝中の素質馬だが折り合いに難があり、ハイペースで流れると不安も。"
        },
        {
            "number": 6,
            "frame": 3,
            "name": "ホースF",
            "odds": 138.2,
            "jockey": {
                "name": "騎手F",
                "status": "継続",
                "rate": "12%"
            },
            "winRace": "新潟芝1600m(未勝利)",
            "winRaceQuery": "新潟 芝1600m 特徴",
            "weight": "482kg（+8）",
            "previousRace": "・2/12 東京1800m [5着] 34.5秒 (11-10-10)",
            "comment": "ロベルト系のタフさを秘めるが、持ち時計が不足しておりここでは厳しい戦いに。"
        },
        {
            "number": 7,
            "frame": 4,
            "name": "ホースG",
            "odds": 3.8,
            "jockey": {
                "name": "騎手G",
                "status": "乗替",
                "rate": "45%"
            },
            "winRace": "東京芝1800m(G3)",
            "winRaceQuery": "東京 芝1800m 特徴",
            "weight": "494kg（-8）",
            "previousRace": "・2/12 東京1800m [1着] 34.0秒 (2-3-2)",
            "comment": "1番人気。ノーザンダンサー系の力強い先行力が武器。前走の勝ちっぷりが良く最有力。"
        },
        {
            "number": 8,
            "frame": 4,
            "name": "ホースH",
            "odds": 18.4,
            "jockey": {
                "name": "騎手H",
                "status": "乗替",
                "rate": "25%"
            },
            "winRace": "中山芝2000m(G1 2着)",
            "winRaceQuery": "中山 芝2000m 特徴",
            "weight": "488kg（+4）",
            "previousRace": "・3/05 中山2000m [2着] 34.7秒 (2-2-2)",
            "comment": "ノーザンダンサー系のタフネス。重賞で惜敗が続くが、先行しての渋太さは中山で脅威。"
        },
        {
            "number": 9,
            "frame": 5,
            "name": "ホースI",
            "odds": 17.7,
            "jockey": {
                "name": "騎手I",
                "status": "乗替",
                "rate": "22%"
            },
            "winRace": "東京芝2000m(1勝)",
            "winRaceQuery": "東京 芝2000m 特徴",
            "weight": "494kg（±0）",
            "previousRace": "・3/19 中山1800m [2着] 36.9秒 (1-1-1)",
            "comment": "パワー型。逃げて連対を外していないが、同型の存在とペース激化が懸念材料。"
        },
        {
            "number": 10,
            "frame": 5,
            "name": "ホースJ",
            "odds": 259.1,
            "jockey": {
                "name": "騎手J",
                "status": "乗替",
                "rate": "10%"
            },
            "winRace": "中京芝2000m(未勝利)",
            "winRaceQuery": "中京 芝2000m 特徴",
            "weight": "514kg（-10）",
            "previousRace": "・3/19 中山1800m [11着] 37.3秒 (6-6-6)",
            "comment": "大型馬で馬体減。サンデー系だが前走の内容からこの相手では苦戦免れない。"
        },
        {
            "number": 11,
            "frame": 6,
            "name": "ホースK",
            "odds": 17.8,
            "jockey": {
                "name": "騎手K",
                "status": "継続",
                "rate": "28%"
            },
            "winRace": "阪神芝2200m(L 1着)",
            "winRaceQuery": "阪神 芝2200m 特徴",
            "weight": "500kg（+4）",
            "previousRace": "・2/25 阪神2200m [1着] 33.2秒 (9-9-9)",
            "comment": "キンカメ系。前走で見せた上がり33.2秒は驚異的。直線の短い中山での仕掛けが鍵。"
        },
        {
            "number": 12,
            "frame": 6,
            "name": "ホースL",
            "odds": 22.1,
            "jockey": {
                "name": "騎手L",
                "status": "継続",
                "rate": "24%"
            },
            "winRace": "中京芝1600m(新馬)",
            "winRaceQuery": "中京 芝1600m 特徴",
            "weight": "540kg（+4）",
            "previousRace": "・12/18 阪神1600m [2着] 35.1秒 (7-6)",
            "comment": "キンカメ系の巨漢馬。マイル戦での実績はあるが、2000mの距離と重馬場が不安。"
        },
        {
            "number": 13,
            "frame": 7,
            "name": "ホースM",
            "odds": 185.9,
            "jockey": {
                "name": "騎手M",
                "status": "継続",
                "rate": "14%"
            },
            "winRace": "福島芝1800m(未勝利)",
            "winRaceQuery": "福島 芝1800m 特徴",
            "weight": "448kg（-8）",
            "previousRace": "・3/19 中山1800m [4着] 38.3秒 (1-1-1)",
            "comment": "キンカメ系の逃げ馬。ハナを切るスピードはあるが、外枠から強引に行くと展開が厳しくなる。"
        },
        {
            "number": 14,
            "frame": 7,
            "name": "ホースN",
            "odds": 9,
            "jockey": {
                "name": "騎手N",
                "status": "乗替",
                "rate": "35%"
            },
            "winRace": "中山芝2000m(G2)",
            "winRaceQuery": "中山 芝2000m 特徴",
            "weight": "478kg（-6）",
            "previousRace": "・3/05 中山2000m [1着] 34.8秒 (3-3-3)",
            "comment": "ノーザンダンサー系のタフな血統。同舞台の重賞を勝った実績は光り、消耗戦になれば浮上。"
        },
        {
            "number": 15,
            "frame": 7,
            "name": "ホースO",
            "odds": 6.3,
            "jockey": {
                "name": "騎手O",
                "status": "継続",
                "rate": "32%"
            },
            "winRace": "中山芝1800m(G2)",
            "winRaceQuery": "中山 芝1800m 特徴",
            "weight": "496kg（-4）",
            "previousRace": "・3/19 中山1800m [1着] 35.7秒 (4-4-3)",
            "comment": "無敗の重賞馬。好位から抜け出すセンスは抜群だが、今回は一気の相手強化。"
        },
        {
            "number": 16,
            "frame": 8,
            "name": "ホースP",
            "odds": 9.6,
            "jockey": {
                "name": "騎手P",
                "status": "乗替",
                "rate": "26%"
            },
            "winRace": "阪神芝2000m(未勝利)",
            "winRaceQuery": "阪神 芝2000m 特徴",
            "weight": "524kg（-4）",
            "previousRace": "・2/12 東京1800m [2着] 34.0秒 (1-1-1)",
            "comment": "キンカメ系の大型馬。前走は逃げて好走したが、ここもハナを主張する馬が多く展開が鍵。"
        },
        {
            "number": 17,
            "frame": 8,
            "name": "ホースQ",
            "odds": 107.2,
            "jockey": {
                "name": "騎手Q",
                "status": "継続",
                "rate": "16%"
            },
            "winRace": "中山芝2200m(1勝クラス)",
            "winRaceQuery": "中山 芝2200m 特徴",
            "weight": "504kg（±0）",
            "previousRace": "・3/19 中山1800m [3着] 36.1秒 (9-9-9)",
            "comment": "サンデー系。前走は重馬場で健闘。時計のかかる馬場は合うが、G1の壁は高いか。"
        },
        {
            "number": 18,
            "frame": 8,
            "name": "ホースR",
            "odds": 36.8,
            "jockey": {
                "name": "騎手R",
                "status": "継続",
                "rate": "23%"
            },
            "winRace": "中京芝2000m(L)",
            "winRaceQuery": "中京 芝2000m 特徴",
            "weight": "510kg（+8）",
            "previousRace": "・1/21 中京2000m [1着]",
            "comment": "無敗で駒を進めてきたが、大外枠と後方からの脚質は小回りの中山2000mでは不利に働く。"
        }
    ],
    "result": {
        "first": 1,
        "second": 14,
        "third": 7
    },
    "payouts": {
        "win": {
            "1": 5.2
        },
        "place": {
            "1": 2.2,
            "7": 1.6,
            "14": 2.7
        },
        "wide": {
            "1-14": 12.9,
            "1-7": 5.6,
            "7-14": 6.2
        }
    },
    "analysis": {
        "realRace": "【 2023年 皐月賞（G1） / 勝ち馬：ソールオリエンス 】",
        "summary": "当日は重馬場となり、逃げを主張した13番や16番が競り合った結果、前半5ハロンが58.5秒という歴史的な超ハイペースになりました。この流れを冷静に読むと、前走で逃げ・先行して勝ってきた馬や、瞬発力に寄ったタイプは危険になります。ホースA（ソールオリエンス）は4コーナーをほぼ最後方で待機し、大外から別次元の上がり35.5秒で差し切りました。ホースN（タスティエーラ）は消耗戦への耐性を見せて2着、ホースG（ファントムシーフ）も地力で3着。馬場とペースが、単純な人気順を大きく揺らしたレースです。",
        "turningPoints": [
            { "title": "前で競った馬", "horses": "13番・16番", "text": "前半5ハロン58.5秒の超ハイペースを作る形になり、直線では余力を失いました。前走で逃げ・先行して好走していても、今回は同型が多く展開が厳しくなりました。" },
            { "title": "消耗戦で踏ん張った馬", "horses": "14番・7番・17番", "text": "速い流れを受けながらも最後まで脚を使い、地力と持続力を示しました。単純な瞬発力だけでなく、重馬場とハイペースへの耐性が問われました。" },
            { "title": "展開を味方にした差し馬", "horses": "1番", "text": "後方で脚をため、前が苦しくなったところを大外から差し切りました。このレースでは、前に行く強さよりも流れを読んで脚を残すことが重要でした。" }
        ]
    },
    "legacyId": "race1",
    "hints": [
        "【条件を見る】：今回のコース・距離・馬場から、どの脚質が有利になりやすいかを考えましょう。",
        "【数字を見る】：オッズ、騎手複勝率、馬体重、上がりタイムはクリックで並び替えできます。",
        "【罠を見る】：人気馬の強みだけでなく、今回の条件で弱点になりそうな要素も探しましょう。"
    ]
};


window.QUESTIONS.stage1.eventName = "2023年 皐月賞（G1）";

window.QUESTIONS.stage1.finishOrder = [1,14,7,17,4,11,8,6,5,15,3,13,16,18,2,10,9,12];
window.QUESTIONS.stage1.finishMargins = {"1": "-", "14": "1 1/4馬身", "7": "1 3/4馬身", "17": "アタマ"};


window.QUESTIONS.stage1.realNames = {"1": "ソールオリエンス", "14": "タスティエーラ", "7": "ファントムシーフ", "17": "メタルスピード", "4": "ショウナンバシット", "11": "シャザーン", "8": "トップナイフ", "6": "ウインオーディン", "15": "ベラジオオペラ", "16": "タッチウッド", "5": "フリームファクシ", "18": "マイネルラウレア", "12": "ダノンタッチダウン", "3": "グリューネグリーン", "13": "グラニット", "9": "ホウオウビスケッツ", "2": "ワンダイレクト", "10": "ラスハンメル"};
