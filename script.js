import dataBase from"./dataBase.json" assert{type:"json"}
const header = document.querySelector('.header-main-container')
const headerEl = document.querySelector('header')
const headerMain = document.querySelector("header")



function createELE(ele,ment,name){
    let a = document.createElement(ele)
    let b = document.querySelector(ment)

    b.appendChild(a)
    a.classList.add(name)
    return(a)
}
let svgPathAll
let flipKartLogo
let mobileName
let sortImg
let sortByFixed
let sortByFixedImg
const svgPath = dataBase.map((a)=>{
    if(a.name==="header"){
        svgPathAll = a.svgpath
        flipKartLogo = a.headerimage
        mobileName = a.headerTag.split(',')
    }
    
    if(a.name==="headersort"){
     sortImg = a.imgandtext
    }
    if(a.name ==="sortBy"){
     sortByFixed = a.tags.split(',')
     sortByFixedImg = a.popularityMarker.split(',')
    }
})
sortImg = sortImg.split(',')
console.log(sortImg[0])

svgPathAll = svgPathAll.split(',')
header.innerHTML = `<div class="header-flex-box-one"><div class="image-div"><a href=""><svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg">${svgPathAll[0]}</svg></a></div><div class="header-flipkart-logo"><img src="${flipKartLogo}"></div><div class="header-span"><span>${mobileName[0]}</span></div></div><div class="header-flex-box-two"><div class="header-search-bar"><a href=""><svg fill="#fff" height="22" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">${svgPathAll[1]}</svg></a></div><div class="shopping-cart-svg-header"><a href=""><svg width="16" height="16" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">${svgPathAll[2]}</svg></a></div><div class="header-login-div"><a href=""><span>${mobileName[1]}</span><a></div>`
headerMain.innerHTML += `<div class="header-second-container"><a class="sort-container"><div class="header-sort-container"><div class="header-sort"><img src="${sortImg[0]}"></div><div>${sortImg[2]}</div></div></a><div class="border-div"></div><div class="header-popularity-main-container"><div class="header-popularity-container"><div class="filter"><img src="${sortImg[1]}"</div></div><div class="filter-text">${sortImg[3]}</div></div></div>`
const sortAnchorTag = document.querySelector('.sort-container')
console.log(sortAnchorTag)
////// sort on click
sortAnchorTag.addEventListener('click',()=>{
createELE('div','header','sort-div-fixed')
const sortDivFixed = document.querySelector('.sort-div-fixed')
sortDivFixed.innerHTML = `<div class="sort-div-fixed-chid"><div class="sort-by-div-first-child">${sortByFixed[0]}</div><div class="fixed-border-div"></div><div class="sort-by-fixed-div-child-three"></div></div></div>`



const sortByChildThree = document.querySelector('.sort-by-fixed-div-child-three')
for(let i = 0;i=3;i++){
sortByChildThree.createElement
}
// createELE('div','.sort-div-fixed','sort-div-fixed-child')
// createELE('div','.sort-div-fixed-child','sort-div-first-child') ///// first

//  createELE('div','.sort-div-first-child','sort-by-div')
// const data = document.querySelector('.sort-by-div')
// console.log(data)
// console.log(sortByFixed[0])
// data.innerHTML = `${sortByFixed[0]}`

// const fixedSort = document.querySelector('.sort-div-fixed-child')
// fixedSort.innerHTML += `<div class="sort-div-second-child></div>`




// })
// const headerDiv = document.querySelector('.sort-div-fixed')
// const body = document.querySelector('body')
// body.addEventListener('click',()=>{
// console.log('hiii')

// console.log(headerDiv)
//     headerDiv.remove()

})



