var teamCard = [
    {
        type: "Presentastion",
        title: "玩偶機構設計",
        serial: "編號",
        time: ["4:30", "4:50", "5:10", "5:20"],
        tag: "主題分享",
        description: `在今年 2 月時，Linux kernel 5.8 之後被揭露了 arbitrary write read-only file 的漏洞，該漏洞被命名為 Dirty Pipe。對應到 Android 有 Google Pixel 6 和 SAMSUNG Galaxy S22 使用的 Android 12 可以觸發漏洞，我們嘗試在 Android 12 上透過此漏洞進行提權，並使用 Android Emulator x86_64 作為本次的環境。
        在本次演講中，我們將會介紹如何透過 Dirty Pipe 劫持 init process、SELinux 實作細節並撰寫 kernel module 繞過 SELinux 和最後又是如何再度透過 Dirty Pipe 做到 load kernel module。`,
        supplement: ["C++", "Go", "whiteSpace", "Vrainfuck"],
        member: [
            {
                name: "塗嘉云",
                introduction: `我是科技組的身高天花板，負責製作玩偶專題。我從有記憶開始就對手作很有興趣，因此也毫不猶豫的加入了資電班。希望我們這次的成發能成為各位有趣的回憶(๑´ㅂ\`๑)`,
                img_url: "media/avatar/05.jpg"
            },
            {
                name: "靳皓雅",
                introduction: "本名如上，可以叫我吉米。<br>高一時因緣際會(不想寫程式)下進入了科技組。<br>涉略的領域有油跟不油的，3D建模跟設計只是我的興趣，作編曲才是我(目前)的專長啦JOJO。<br>最後，看到我可以祝我一聲學測加油好嗎?",
                img_url: "media/avatar/06.jpg"
            },
            {
                name: "余易宸",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            }
        ]
    },{
        type: "Presentastion",
        title: "利用神經網路進行深度學習協助音樂相似度分析",
        serial: "A2",
        time: ["4:30", "4:50", "5:10", "5:20"],
        tag: "音樂相似度, 深度學習, 神經網路",
        description: `你是否看過XX歌曲抄襲的新聞? 有沒有想過音樂如何判斷是否抄襲?<br>
        在資訊科技的迅速發展下，機器學習也更為普遍運用<br>
        因此我們將帶大家了解<br>
        如何透過深度學習，以客觀的方式來分析音樂相似程度!!<br>  `,
        supplement: [`利用Tensorflow實作孿生神經網路`, 
                     `深度神經網路應用`,
                     `如何對音樂進行特徵工程`,
                     `<span style="text-decoration:line-through">甚麼叫做羅密歐與傅立葉</span>`],
        member: [
            {
                name: "吳俊廷",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            },
            {
                name: "王心妤 / Starfish",
                introduction: `我是海星 ! 
                我的原則很簡單~C/C++是真理，Python是邪教，大括號不換行是毒瘤。<br>
                國小啥的都不算，國三接觸Python，高一正式踏上C/C++不歸路...<br>
                至今被學測搞得快忘記如何程式解題了，只會寫解體的程式。<br>
                欲知後事如何，且待本人IG分曉 : <a href="https://www.instagram.com/hywvc_">https://www.instagram.com/hywvc_</a><br>
                CodingSHE的S : <a href="https://codingshe.cf">https://codingshe.cf</a>`,
                img_url: "media/avatar/02.jpg"
            },
            {
                name: "盧恩佳",
                introduction: `學了Python , 一腳踏入Coding世界後，發現很多比賽可以用 C/C++,Java 但就是不給用python...<br>
                （在這個硬體效能不斷進步的時代，簡單易上手用途又廣泛的python才是王道好嗎！！大概）<br>
                
                APCS實作也肯定是用python 。苦於記不住&不使用c++語法，比賽基本死亡。<br>
                
                努力垂死掙扎……(o_ _)o ﾊﾟﾀｯ`,
                img_url: "media/avatar/07.jpg"
            }
        ]
    },{
        type: "Presentastion",
        title: "從零開始的RPG製作—Godot遊戲引擎探究與實作",
        serial: "A3",
        time: ["4:30", "4:50", "5:10", "5:20"],
        tag: "遊戲製作, RPG, 2D像素風",
        description: `休閒活動上百種，其中一大宗就是遊戲了<br>
        在設備不斷演進的情況下，遊戲也越來越普及、多元，更令人入迷<br>
        身為一群重度遊戲沉迷者，漸漸從想"玩"到想"做"<br>
        於是有了這次專題<br>
        透過GODOT編寫程式加上自製的各式素材<br>
        完成一個實際可玩的RPG遊戲`,
        supplement: ["GODOT(GDscript)", "遊戲運行邏輯", "如何規劃一款遊戲", "<span style='text-decoration:line-through'>大型殘念現場</spam>"],
        member: [
            {
                name: "徐士哲",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            },
            {
                name: "游恒",
                introduction: `興趣是卡牌遊戲的美少女<br><a href="https://wall.gamer.com.tw/redir.php?userId=yuheng0203">巴哈小屋連結</a>`,
                img_url: "media/avatar/29.jpg"
            },
            {
                name: "劉宸昕",
                introduction: `不是美少女。<br>
                最後一屆資電班成員。`,
                img_url: "media/avatar/32.jpg"
            }
        ]
    },{
        type: "Presentastion",
        title: "任務型氣球攻擊車",
        serial: "編號",
        time: ["4:30", "4:50", "5:10", "5:20"],
        tag: "主題分享",
        description: `在今年 2 月時，Linux kernel 5.8 之後被揭露了 arbitrary write read-only file 的漏洞，該漏洞被命名為 Dirty Pipe。對應到 Android 有 Google Pixel 6 和 SAMSUNG Galaxy S22 使用的 Android 12 可以觸發漏洞，我們嘗試在 Android 12 上透過此漏洞進行提權，並使用 Android Emulator x86_64 作為本次的環境。
        在本次演講中，我們將會介紹如何透過 Dirty Pipe 劫持 init process、SELinux 實作細節並撰寫 kernel module 繞過 SELinux 和最後又是如何再度透過 Dirty Pipe 做到 load kernel module。`,
        supplement: ["C++", "Go", "whiteSpace", "Vrainfuck"],
        member: [
            {
                name: "吳振宇",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            },
            {
                name: "劉竣祐 / 光祐 Guangyou",
                introduction: `國小為百齡國小資優班學生、國中為(區域衛星資賦優異方案)資優班學生、高中為資電學程班學生，從小對手作很有興趣，喜歡自己動手作出一些東西。生科能力極強(自稱)。高中認為數專太難考而轉考資電班，並嘗試在生科領域闖出一番天地。
                高一後開始嘗試做YouTuber、作曲、寫歌、寫小說，直到高三才成功作出一首曲子(大部分為吉米幫助)。做YouTuber的契機是在國中被霸凌的三年時接觸到阿神後，成功從過往中走出，並希望自己能像阿神一樣帶給別人歡樂。
                現為不知名YouTuber、類戰隊形式之公會(SuPer ASia)隊長、學測預備軍。<br>YouTube頻道(光祐Guangyou)：<a href="https://www.youtube.com/channel/UCI7OjJy-l1QAYZYuPaJYbag">https://www.youtube.com/channel/UCI7OjJy-l1QAYZYuPaJYbag</a><br>Twitcw頻道(光祐61757)：<a href="https://www.twitch.tv/guangyou61757">https://www.twitch.tv/guangyou61757</a>`,
                img_url: "media/avatar/33.jpg"
            },
            {
                name: "張詠翔",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            }
        ]
    },{
        type: "Presentastion",
        title: "用Python預測股市趨勢",
        serial: "A5",
        time: ["4:30", "4:50", "5:10", "5:20"],
        tag: "神經網路, 深度學習, 股市預測",
        description: `說到近年來的大新聞，肯定是一九年爆發的新冠疫情，它也造成了全球經濟大幅度的變化。我們覺得其中的起伏十分有意思，所以想要做出一個能夠預測股市的模型。訪問完兩位師長後，稍微學習到一些專業的判斷方式，如Ｋ線、年線等，也認知到股市預測的困難，所以決定以該支股票的過往收盤價為學習範本，預測未來兩週的收盤價變化。`,
        supplement: ["Python", "利用LSTM、RNN模型實作", "深度神經網路應用", "針對不同模型，改變變因"],
        member: [
            {
                name: "王子潔",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            },
            {
                name: "郎翊辰",
                introduction: `Hello~ 我是郎翊辰<br>
                因緣際會考進資電班，甚至到現在還是是不知道我為什麼在這裡，從剛進來完全沒學習過寫程式，一步一步從C++學起，到後來遇到瓶頸暫時放棄，結果現在遇到更大的瓶頸，所以，我又重拾對程式的熱情了。學測fighting`,
                img_url: "media/avatar/21.jpg"
            },
            {
                name: "黃政翰",
                introduction: "高中才接觸程式設計，誤打誤撞走入了這個奇幻世界。一開始還很迷糊，甚至認為自己不適合這條路，不過再往更深處走才發現這個領域有趣之處，希望未來能繼續鑽研下去。",
                img_url: "media/avatar/30.jpg"
            }
        ]
    },{
        type: "Presentastion",
        title: "高壓空氣競速車",
        serial: "A6",
        time: ["4:30", "4:50", "5:10", "5:20"],
        tag: "主題分享",
        description: `空氣動力競速車這個課程首先提供我們對於空氣力學相關的知識，對賽車有更多的認識，將我們所學到有助於加快車子速度減少阻力的構思畫在設計圖上，為了底盤的平衡，我們設計時也十分講求精確。隨後我們用電腦畫車身的模型，這個部份我們學到了subD這個功能，車身更加細緻，之後組裝起來，測試這台車子的各項數據我們學到運用Flowdesign，和風洞測風阻，之後實際測試車子的跑動，第一次接觸高壓鋼瓶，也見識到了它的威力。`,
        supplement: ["空氣力學", "如何減少阻力", "高壓鋼瓶的推動"],
        member: [
            {
                name: "蔡秉融",
                introduction: "我對於這門課程很有興趣，手作一直都是一項令人興奮的事情",
                img_url: "media/avatar/35.jpg"
            },
            {
                name: "王宥威",
                introduction: "前資電班成員。喜歡高更、村上龍、放克音樂。覺得科技3D繪圖很有趣。",
                img_url: "media/avatar/11.jpg"
            },{
                name: "江彥蓁",
                introduction: "我是科技組的總召。曾參加許相關競賽，如WRO、FLL等。順帶一提，我是這次成發的主持人喔!",
                img_url: "media/avatar/03.jpg"
            },
            {
                name: "陳筠喬",
                introduction: `科技組 副召<br>
                是個看起來比實際年齡小很多的少女<br>
                在資電班的兩年 不斷的試圖做出創意作品來搞死自己，未來希望能就讀設計相關科系<br>
                在成發中負責：<br>
                成發主持、紀念品製作、科技組海報整理等<br>
                謝謝看到這邊的你呦~`,
                img_url: "media/avatar/04.jpg"
            }
        ]
    },{
        type: "Presentastion",
        title: "如果我有台新冰箱",
        serial: "B1",
        time: ["4:30", "4:50", "5:10", "5:20"],
        tag: "主題分享",
        description: "<p>每週到賣場採買是例行公事。在買回家後總是煩惱著要如何「整理」冰箱內的東西，食品還常常被埋沒在深處而被遺忘，直到壞掉有味道出現才被發現。由於上述情況，我們想用unity做出一個APP，輔助我們整理冰箱。預計功能要能紀錄冰箱內的東西有哪些，並能顯示出快要過期的食品，提醒我記得要處理這些食物，不要再放到壞了！</p><p>在這次的研究中我們成功的透過C#編寫Unity內程式碼及在網路上搜尋相關教學資源，得到相關知識的方式做出一個App，可以按照過期日期排出冰箱內的食材，在現有的介面下，還有很多可以改善的地方，希望在日後可以把更人性化的功能增加進來，並改善不方便的地方，讓使用者用起來更加輕鬆。</p>",
        supplement: ["Unity C#"],
        member: [
            {
                name: "游以丞",
                introduction: `負責unity及C#程式開發<br>
                習慣每日寫一個功能或解決一個問題<br>
                不知到為什麼常常被認成科技組`,
                img_url: "media/avatar/28.jpg"
            },
            {
                name: "林鑫廷",
                introduction: "資電班冷笑話權威",
                img_url: "media/avatar/19.jpg"
            },
            {
                name: "張守毅",
                introduction: "陰錯陽差的進了最後一屆資電班後，開始對資訊科技感到興趣。",
                img_url: "media/avatar/24.jpg"
            }
        ]

    },{
        type: "Presentastion",
        title: "機構達人競賽-龍舟",
        serial: "B2",
        time: ["4:30", "4:50", "5:10", "5:20"],
        tag: "主題分享",
        description: `為了參加台北市政府所辦的機關達人大賽，我們數位同學決定組隊參與龍舟組的競賽，依照官方所給予的船體、馬達及制控板，按照規定進行修改和調整，經過數個禮拜的自行創作後，所有組別的船隻將實際下水，並根據是否能利用船首的龍頭進行奪旗、總耗時數及外觀創意分數來決定名次。競賽目的主要是考驗學生的設計和製作能力，和最重要的實際操作。這次專題發表，我們將與您分享設計、製作及測試作品的歷程和各項修改內容。`,
        supplement: ["機構設計", "機器人", "建模"],
        member: [
            {
                name: "黃資翔",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            },
            {
                name: "陳鈺程",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            },
            {
                name: "范容齊",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            }
        ]
    },{
        type: "Presentastion",
        title: "Wordless最佳單字預測系統",
        serial: "B3",
        time: ["4:30", "4:50", "5:10", "5:20"],
        tag: "主題分享",
        description: `Wordle在今年初風靡了全球，我的TimeLine也一度充滿著朋友的闖關狀況貼文。<br>
                      我透過學習JavaScript製作Google的擴充功能，取得每一筆輸入的輸出的狀況，以此為計算數據在Wordle上作弊，最終觀察這程式的效率。`,
        supplement: ["JavaScript", "Google擴充功能", `<span style="text-decoration:line-through">如何讓新鮮的肝快速榨乾</span>`],
        member: [
            {
                name: "伊東和毅",
                introduction: `我高一開始對程式產生興趣<br>題外話，這網頁也是我寫的呦`,
                img_url: "media/default_avatar.png"
            }
        ]
    },{
        type: "Presentastion",
        title: "單字急轉彎",
        serial: "編號",
        time: ["4:30", "4:50", "5:10", "5:20"],
        tag: "主題分享",
        description: `在今年 2 月時，Linux kernel 5.8 之後被揭露了 arbitrary write read-only file 的漏洞，該漏洞被命名為 Dirty Pipe。對應到 Android 有 Google Pixel 6 和 SAMSUNG Galaxy S22 使用的 Android 12 可以觸發漏洞，我們嘗試在 Android 12 上透過此漏洞進行提權，並使用 Android Emulator x86_64 作為本次的環境。
        在本次演講中，我們將會介紹如何透過 Dirty Pipe 劫持 init process、SELinux 實作細節並撰寫 kernel module 繞過 SELinux 和最後又是如何再度透過 Dirty Pipe 做到 load kernel module。`,
        supplement: ["C++", "Go", "whiteSpace", "Vrainfuck"],
        member: [
            {
                name: "張文謙",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            }
        ]
    },{
        type: "Presentastion",
        title: "人臉口罩辨識",
        serial: "編號",
        time: ["4:30", "4:50", "5:10", "5:20"],
        tag: "主題分享",
        description: `在今年 2 月時，Linux kernel 5.8 之後被揭露了 arbitrary write read-only file 的漏洞，該漏洞被命名為 Dirty Pipe。對應到 Android 有 Google Pixel 6 和 SAMSUNG Galaxy S22 使用的 Android 12 可以觸發漏洞，我們嘗試在 Android 12 上透過此漏洞進行提權，並使用 Android Emulator x86_64 作為本次的環境。
        在本次演講中，我們將會介紹如何透過 Dirty Pipe 劫持 init process、SELinux 實作細節並撰寫 kernel module 繞過 SELinux 和最後又是如何再度透過 Dirty Pipe 做到 load kernel module。`,
        supplement: ["C++", "Go", "whiteSpace", "Vrainfuck"],
        member: [
            {
                name: "江威廷",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            }
        ]
    },{
        type: "Presentastion",
        title: "參數設計",
        serial: "A4",
        time: ["4:30", "4:50", "5:10", "5:20"],
        tag: "主題分享",
        description: "在現代生活中，參數設計這門課題已是與我們不可分割的一部份了，像是設計大樓、零件、車子都有他的身影。參數設計的基本思想是通過選擇系統中所有參數(包括原材料、零件、元件等)的最佳水平組合，從而儘量減少外部、内部和產品間三種干擾的影響,使所設計的產品質量特性波動小，穩定性好。另外，在參數設計階段，一般選用能滿足使用環境條件的最低質量等級的元件和性價比高的加工精度來進行設計，使產品的質量和成本兩方面均得到改善。",
        supplement: ["雷雕機", "3D列印機", "Rhino 6", "Paneling Tool","布林運算"],
        member: [
            {
                name: "蔡坤霖",
                introduction: "我從小就對空間這方面的東西有很大的興趣，不管是樂高、房子、立體結構到蟲洞(?)，所以當高中有相關的專班我就進來了，雖然進來後才知道我們是最後一屆🙄",
                img_url: "media/avatar/34.jpg"
            },{
                name: "林祐廷",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            },{
                name: "張譽耀",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            },{
                name: "杜立晟",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            }
        ]
    }
]

const mask = document.querySelector(".team_window_mask");
const trig = document.querySelectorAll(".card");
const body = document.querySelector("body");


function editCard(i){
    let timeDOM = "", supplementDOM = "", memberDOM = "",
        cardDOM = document.createElement("div");
    for(let j = 0; j < teamCard[i].time.length; j++){
        timeDOM += "<li>" + teamCard[i].time[j] + "</li>";
    }
    for(let j = 0; j < teamCard[i].supplement.length; j++){
        supplementDOM += "<li>" + teamCard[i].supplement[j] + "</li>";
    }
    for(let j = 0; j < teamCard[i].member.length; j++){
        memberDOM += 
        `
            <div class="team_member_content">
                <img class="member_icon" src="` + teamCard[i].member[j].img_url + `">
                <div class="team_member">
                    <h3 class="member_name">` + teamCard[i].member[j].name + `</h3>
                    <p class="member_description">` + teamCard[i].member[j].introduction + `</p>
                </div>
            </div>
        `
    }
    cardDOM.className = "team_card";
    cardDOM.innerHTML = `
        <div class="team_card_box">
            <div class="team_card_content">
                <h2 class="team_agenda_info">Presentaion</h2>
                <h1 class="team_agenda_title">` + teamCard[i].title + `</h1>
                <div class="team_agenda_time">`
                    + teamCard[i].serial +
                    `<ul>`
                        + timeDOM +
                    `</ul>
                </div>
                <div class="team_agenda_content">
                    <div class="team_dialog">
                        <div class="dialog_tags">`
                            + teamCard[i].tag +
                        `</div>
                        <div class="dialog_description">`
                            + teamCard[i].description +
                        `</div>
                    </div>
                    <div class="team_supplement">
                        <div class="supplement_parser">
                            <ul>`
                                + supplementDOM +
                            `</ul>
                        </div>
                    </div>
                </div>`
                + memberDOM +
            `</div>
        </div>
        
        <div class="close_button close_button_active">
            <i class="fa fa-times-circle-o" aria-hidden="true"></i>
        </div>
    `
    return cardDOM;
}

var haveOpened = false;
function openCard(i){
    if(!haveOpened){
        haveOpened = true;
        body.classList.add("body_stick");
        mask.classList.add("mask_active");
        document.querySelector(".OpenCard").appendChild(editCard(i));
        
        const closeButton = document.querySelector(".close_button");
        const cardPos = document.querySelector(".team_card");
        closeButton.addEventListener("click", ()=>{
            closeCard();
        })
        setTimeout(() => {
        cardPos.classList.add("team_card_active");
        }, 0.00000001);
    }
}

function closeCard(){
    if(haveOpened){
        body.classList.remove("body_stick");
        mask.classList.remove("mask_active");
        document.querySelector(".team_card").classList.remove("team_card_active");
        setTimeout(() => {
            if((document.querySelector(".team_card") !== null)){
                document.querySelector(".team_card").remove();
                haveOpened = false;
            }
        }, 500);

    }
}

// open card
for(let i = 0; i < trig.length; i++){
    trig[i].addEventListener("click", ()=>{
        openCard(i);
    })
}

// close card
mask.addEventListener("click", ()=>{
    closeCard();
})
