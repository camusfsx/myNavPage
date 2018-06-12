let keysLine = [`qwertyuiop`,`asdfghjkl`,`zxcvbnm<`]
let siteHash = {
    a:`acfun.cn`,
    b:`bilibili.com`,
    c:`css-tricks.com`,
    d:`douban.com`,
    e:`es6.ruanyifeng.com`,
    f:`fengshixiang.com`,
    g:`google.com`,
    h:`null`,
    i:`iconfont.cn`,
    j:`javascript.ruanyifeng.com`,
    k:`null`,
    l:`null`,
    m:`developer.mozilla.org`,
    n:`namesilo.com`,
    o:`outlook.live.com`,
    p:`pornhub.com`,
    q:`mail.qq.com`,
    r:`reddit.com`,
    s:`stackoverflow.com`,
    t:`taobao.com`,
    u:`null`,
    v:`vultr.com`,
    w:`wikipedia.org`,
    x:`xiedaimala.com`,
    y:`youtube.com`,
    z:`zhihu.com`
}
let storageHash = JSON.parse(localStorage.getItem(`siteStorage`) || `null`)
if(storageHash){
    siteHash = storageHash
}
let keyBox = document.getElementsByClassName(`keyBox`)[0]
for(keyLine of keysLine){
    let keyRow = document.createElement(`li`)
    keyRow.className = `row clearfix`
    keyBox.appendChild(keyRow)
    keyLine = keyLine.split(``)
    for(key of keyLine){
        let kbd = document.createElement(`kbd`)
        let editButton = document.createElement(`button`)
        let kbdIcon = document.createElement(`img`)
        kbd.innerHTML = key
        kbd.className = `key`
        editButton.innerHTML = `edit`
        editButton.className = `editButton`
        if(siteHash[key]!= `null`){
            kbdIcon.src = `https://${siteHash[key]}/favicon.ico`
            kbdIcon.className = `icon`
            kbdIcon.alt = ``
        }else{
            kbdIcon.className = `hid`
        }
        kbd.appendChild(editButton)
        kbd.appendChild(kbdIcon)
        keyRow.appendChild(kbd)
        editButton.onclick = function (){
            let tempHash = siteHash[this.parentElement.innerText[0]]
            siteHash[this.parentElement.innerText[0]] = prompt(`请输入新网址`,`${tempHash}`)
            if(siteHash[this.parentElement.innerText[0]]==null){
                siteHash[this.parentElement.innerText[0]] = tempHash
            }else{
                localStorage.setItem(`siteStorage`,JSON.stringify(siteHash))
                this.nextElementSibling.src = `https://${siteHash[this.parentElement.innerText[0]]}/favicon.ico`
                console.log(this.nextElementSibling)
                this.nextElementSibling.className = `icon`
                this.nextElementSibling.alt = ``
            }
        }
    }
}
document.onkeypress = function(event){
    let website = siteHash[event[`key`]]
    if(website!=`null`){
        window.open(`https://${website}`,`_blank`)
    }
}