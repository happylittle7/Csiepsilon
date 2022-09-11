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
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
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
                     `<span style="text-decoration:line-through">甚麼叫做羅密歐與傅立葉</span>`],
        member: [
            {
                name: "吳俊廷",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            },
            {
                name: "王心妤",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            },
            {
                name: "盧恩佳",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            }
        ]
    },{
        type: "Presentastion",
        title: "從零開始的RPG製作—Godot遊戲引擎探究與實作",
        serial: "編號",
        time: ["4:30", "4:50", "5:10", "5:20"],
        tag: "主題分享",
        description: `在今年 2 月時，Linux kernel 5.8 之後被揭露了 arbitrary write read-only file 的漏洞，該漏洞被命名為 Dirty Pipe。對應到 Android 有 Google Pixel 6 和 SAMSUNG Galaxy S22 使用的 Android 12 可以觸發漏洞，我們嘗試在 Android 12 上透過此漏洞進行提權，並使用 Android Emulator x86_64 作為本次的環境。
        在本次演講中，我們將會介紹如何透過 Dirty Pipe 劫持 init process、SELinux 實作細節並撰寫 kernel module 繞過 SELinux 和最後又是如何再度透過 Dirty Pipe 做到 load kernel module。`,
        supplement: ["C++", "Go", "whiteSpace", "Vrainfuck"],
        member: [
            {
                name: "徐士哲",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            },
            {
                name: "游恒",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            },
            {
                name: "劉宸昕",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
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
                name: "劉竣祐",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
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
        serial: "編號",
        time: ["4:30", "4:50", "5:10", "5:20"],
        tag: "主題分享",
        description: `在今年 2 月時，Linux kernel 5.8 之後被揭露了 arbitrary write read-only file 的漏洞，該漏洞被命名為 Dirty Pipe。對應到 Android 有 Google Pixel 6 和 SAMSUNG Galaxy S22 使用的 Android 12 可以觸發漏洞，我們嘗試在 Android 12 上透過此漏洞進行提權，並使用 Android Emulator x86_64 作為本次的環境。
        在本次演講中，我們將會介紹如何透過 Dirty Pipe 劫持 init process、SELinux 實作細節並撰寫 kernel module 繞過 SELinux 和最後又是如何再度透過 Dirty Pipe 做到 load kernel module。`,
        supplement: ["C++", "Go", "whiteSpace", "Vrainfuck"],
        member: [
            {
                name: "王子潔",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            },
            {
                name: "郎翊辰",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            },
            {
                name: "黃政翰",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            }
        ]
    },{
        type: "Presentastion",
        title: "高壓空氣競速車",
        serial: "編號",
        time: ["4:30", "4:50", "5:10", "5:20"],
        tag: "主題分享",
        description: `在今年 2 月時，Linux kernel 5.8 之後被揭露了 arbitrary write read-only file 的漏洞，該漏洞被命名為 Dirty Pipe。對應到 Android 有 Google Pixel 6 和 SAMSUNG Galaxy S22 使用的 Android 12 可以觸發漏洞，我們嘗試在 Android 12 上透過此漏洞進行提權，並使用 Android Emulator x86_64 作為本次的環境。
        在本次演講中，我們將會介紹如何透過 Dirty Pipe 劫持 init process、SELinux 實作細節並撰寫 kernel module 繞過 SELinux 和最後又是如何再度透過 Dirty Pipe 做到 load kernel module。`,
        supplement: ["C++", "Go", "whiteSpace", "Vrainfuck"],
        member: [
            {
                name: "蔡秉融",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            },
            {
                name: "王宥威",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            },{
                name: "江彥蓁",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            },
            {
                name: "陳筠喬",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
            }
        ]
    },{
        type: "Presentastion",
        title: "如果我有台新冰箱",
        serial: "編號",
        time: ["4:30", "4:50", "5:10", "5:20"],
        tag: "主題分享",
        description: `在今年 2 月時，Linux kernel 5.8 之後被揭露了 arbitrary write read-only file 的漏洞，該漏洞被命名為 Dirty Pipe。對應到 Android 有 Google Pixel 6 和 SAMSUNG Galaxy S22 使用的 Android 12 可以觸發漏洞，我們嘗試在 Android 12 上透過此漏洞進行提權，並使用 Android Emulator x86_64 作為本次的環境。
        在本次演講中，我們將會介紹如何透過 Dirty Pipe 劫持 init process、SELinux 實作細節並撰寫 kernel module 繞過 SELinux 和最後又是如何再度透過 Dirty Pipe 做到 load kernel module。`,
        supplement: ["C++", "Go", "whiteSpace", "Vrainfuck"],
        member: [
            {
                name: "游以丞",
                introduction: "helllllooooooooooo",
                img_url: "media/default_avatar.png"
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
        serial: "編號",
        time: ["4:30", "4:50", "5:10", "5:20"],
        tag: "主題分享",
        description: `在今年 2 月時，Linux kernel 5.8 之後被揭露了 arbitrary write read-only file 的漏洞，該漏洞被命名為 Dirty Pipe。對應到 Android 有 Google Pixel 6 和 SAMSUNG Galaxy S22 使用的 Android 12 可以觸發漏洞，我們嘗試在 Android 12 上透過此漏洞進行提權，並使用 Android Emulator x86_64 作為本次的環境。
        在本次演講中，我們將會介紹如何透過 Dirty Pipe 劫持 init process、SELinux 實作細節並撰寫 kernel module 繞過 SELinux 和最後又是如何再度透過 Dirty Pipe 做到 load kernel module。`,
        supplement: ["C++", "Go", "whiteSpace", "Vrainfuck"],
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
        serial: "編號",
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
        serial: "編號",
        time: ["4:30", "4:50", "5:10", "5:20"],
        tag: "主題分享",
        description: `在今年 2 月時，Linux kernel 5.8 之後被揭露了 arbitrary write read-only file 的漏洞，該漏洞被命名為 Dirty Pipe。對應到 Android 有 Google Pixel 6 和 SAMSUNG Galaxy S22 使用的 Android 12 可以觸發漏洞，我們嘗試在 Android 12 上透過此漏洞進行提權，並使用 Android Emulator x86_64 作為本次的環境。
        在本次演講中，我們將會介紹如何透過 Dirty Pipe 劫持 init process、SELinux 實作細節並撰寫 kernel module 繞過 SELinux 和最後又是如何再度透過 Dirty Pipe 做到 load kernel module。`,
        supplement: ["C++", "Go", "whiteSpace", "Vrainfuck"],
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
                <div class="team_agenda_time">
                    編號
                    <ul>`
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

function openCard(i){
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
    }, 0.00001);
}

function closeCard(){
    body.classList.remove("body_stick");
    mask.classList.remove("mask_active");
    document.querySelector(".team_card").classList.remove("team_card_active");
    setTimeout(() => {
        if(!(document.querySelector(".team_card").classList.contains("team_card_active"))){
            document.querySelector(".team_card").remove();
        }
    }, 500);
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
