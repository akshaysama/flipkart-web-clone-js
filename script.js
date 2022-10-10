import dataBase from"./dataBase.json" assert{type:"json"}
const header = document.querySelector('.header-main-container')
const headerEl = document.querySelector('header')
const headerMain = document.querySelector("header")
const boody = document.querySelector('body')
var arrey = []
let arrayElem=[]
let marginsZero
let arrayPrice = []
let indexForPriceSorting =[]

function createELE(ele,ment,name){
    let a = document.createElement(ele)
    let b = document.querySelector(ment)

    b.appendChild(a)
    a.classList.add(name)
    return(a)
}
let svgPathAll,flipKartLogo,mobileName,sortImg,sortByFixedImg,imageData,name,rating,logo,realPrice,discount,discountTag,deliveryStatus,offer,srcAd,borderImg,ratingLogo,ratingNumber,deviceSpec,deviceDim,battery,camera,sortByFixed,luvSvg,imageHref,imageTopDeals,image,topDealsText,emiAvailable,exchangeText,emiTag,discountPriceArray,realPriceNew,realPriceNewNumber,realPriceNewNew,realPriceNewNewNumber,sortedArray,priceHightoLow,priceHightoLowTwo;
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
    if(a.name === "advertisement"){
        srcAd = a.src
    }
    if(a.name === "cardOne"){
        imageData =  a.img.split('!')
        name = a.mobileName.split('-')
        rating = a.rating.split(',')
        logo =a.plusLogo
        realPrice = a.realPrice.split(',')
        discount = a.discount.split(',')
        console.log(discount)
        discount = discount.map((a)=>{
     return a.trim('')
        })
        discountTag = a.discountTag.split(',')
        deliveryStatus = a.deliveryStatus
        offer = a.Offer.split(',')
        
        // spec = a.spec.split(',')
        ratingLogo = a.ratingLogo
        ratingNumber = a.ratingNumber.split('-')
        deviceSpec = a.deviceSpec.split(',')
        deviceDim = a.deviceDim.split(',')
        battery = a.battery.split(',')
        camera = a.camera.split(',')
        luvSvg = a.luvSvg
        exchangeText =a.exchangeText
        emiTag = a.emiTag
        realPriceNew = a.realPrice.split(',')
        realPriceNewNew = a.realPrice.split(',')
        priceHightoLow = a.realPrice.split(',')
        priceHightoLowTwo = a.realPrice.split(',')
        
    }
    if(a.name ==="header-border"){
    borderImg =  a.src
    }
    if(a.name === "topDeals"){
        imageTopDeals = a.imageHref.split(',')
        console.log(imageTopDeals)
        topDealsText = a.text.split(',')
    }
    if(a.name === "cardOne"){
        emiAvailable = a.emiAvailable.split(',')
    }
    // if(a.name === "cardTwo"){
    //      imageDatatwo =  a.img
    //      nametwo = a.mobileName
    //      ratingtwo = a.rating.split(',')
    //      logotwo =a.plusLogo
    //      realPricetwo = a.realPrice
    //      discounttwo = a.discount
    //      discountTagtwo = a.discountTag
    //      deliveryStatustwo = a.deliveryStatus
    //      offertwo = a.Offer
    //      spectwo = a.spec
    //  }
})
console.log(discount)
console.log(sortByFixedImg)
sortImg = sortImg.split(',')
console.log(sortImg[0])
let priceCalc=[]
 parseInt(realPrice)
for(let i=0;i<rating.length;i++){
    priceCalc[i]= realPrice.shift()
}
console.log(realPrice)
console.log(priceCalc)
svgPathAll = svgPathAll.split(',')
header.innerHTML = `<div class="header-flex-box-one"><div class="image-div"><a href=""><svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg">${svgPathAll[0]}</svg></a></div><div class="header-flipkart-logo"><img src="${flipKartLogo}"></div><div class="header-span"><span>${mobileName[0]}</span></div></div><div class="header-flex-box-two"><div class="header-search-bar"><a href=""><svg fill="#fff" height="22" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">${svgPathAll[1]}</svg></a></div><div class="shopping-cart-svg-header"><a href=""><svg width="16" height="16" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">${svgPathAll[2]}</svg></a></div><div class="header-login-div"><a href=""><span>${mobileName[1]}</span><a></div>`
headerMain.innerHTML += `<div class="border-image"><img src="${borderImg}"></div><div class="header-second-container"><a class="sort-container"><div class="header-sort-container"><div class="header-sort"><img src="${sortImg[0]}"></div><div>${sortImg[2]}</div></div></a><div class="border-div"></div><div class="header-popularity-main-container"><div class="header-popularity-container"><div class="filter"><img src="${sortImg[1]}"</div></div><div class="filter-text">${sortImg[3]}</div></div></div>`
const sortAnchorTag = document.querySelector('.sort-container')
console.log(sortAnchorTag)
////// sort on click
sortAnchorTag.addEventListener('click',()=>{
    boody.classList.toggle('no-scroll') 
createELE('div','header','sort-div-fixed')
const sortDivFixed = document.querySelector('.sort-div-fixed')
sortDivFixed.innerHTML = `<div class="sort-div-fixed-chid"><div class="sort-by-div-first-child">${sortByFixed[0]}</div><div class="fixed-border-div"></div><div class="sort-by-fixed-div-child-three"></div></div></div>`



for(let i = 0;i <4 ;i++){
    const sortByChildThree = document.querySelector('.sort-by-fixed-div-child-three')

    let createElm = document.createElement('div')
    let createElmTwo = document.createElement('div')
    let createElmFour = document.createElement('div')
    createElmFour.innerHTML = `${sortByFixed[i+1]}`
    createElmFour.classList.add('sort-text-container-div')
    createElm.appendChild(createElmTwo)
createElmTwo.appendChild(createElmFour)

    let createElmThree = document.createElement('div')
    createElm.appendChild(createElmThree)
    createElmThree.classList.add('fixed-sort-by-icon')
    createElmThree.innerHTML = `<img src="${sortByFixedImg[0]}">`
    
    createElm.classList.add('sort-by-fixed-child-three')
    console.log(createElm)
      sortByChildThree.appendChild(createElm)

const hideDiv = document.querySelector(".sort-div-fixed")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
 console.log(hideDiv)
hideDiv.addEventListener('click',function fooi(){
    boody.classList.remove('no-scroll') 
    console.log('removedone')
setTimeout(()=>{
    hideDiv.remove('sort-div-fixed')
},300)
})

// let createDiv = sortByChildThree.appendChild('createElm')
// createElm.classList.add('sorting-third-child-child')

}

const sortByFixedChildThree = document.querySelectorAll('.sort-by-fixed-child-three')
sortByFixedChildThree[1].addEventListener('click',(a)=>{

})
sortByFixedChildThree[2].addEventListener('click',(a)=>{
    const sectionMainContainer= document.querySelector('.section-main-container')
sectionMainContainer.innerHTML = ``
let h = 0


    for(indexForPriceSorting[h];h<6;indexForPriceSorting[h+1]){
        let i = parseInt(result[h])
        console.log('hiii')
        sectionMainContainer.innerHTML +=`<div class ="section-card-main-container">
                                      <div class="card-first-section">
                                    
                                        <div class="card-first-section-mobile-image" data-rating="${rating[i]}"><img src ="${imageData[i]}"> </div>
                                        <div class="card-first-section-flex-container">
                                        <div class="card-luv-logo"><div class="luv-svg-container"><img src="${luvSvg}"></div></div>
                                        <div class="card-second-section-container"><div class="second-card-mobile-details">${name[i]}</div><div class="second-card-second-child"><div class="popularity"><div class="second-card-second-child-first-child"><div class="second-card-second-child-first-child-rating">${rating[i]}</div><div class="second-card-second-child-first-child-logo">${ratingLogo}</div></div><div class="rated-count">${ratingNumber[i]}</div></div><div></div><div class="second-card-second-child-second-child"><img src="${logo}"></div></div><div class="second-section-third-child-flex"><div class="second-card-third-child"><div class="second-card-third-child-price">${priceCalc[i]}</div><div class="third-child-discount-price">${discountPriceArray}</div><div class="second-card-third-child-text">${discount[i]}${discountTag}</div></div><div class="delivery-status">${deliveryStatus}</div></div><div class="second-card-last-child">${offer[i]}</div></div>
                                      </div></div>
                                      <div class="card-second-section">
                                      <div class="card-second-section-child">
                                      <div class="card-second-section-child-child">${deviceSpec[i]}</div></div>
                    
                                       <div class="card-second-section-child">
                                       <div class="card-second-section-child-child">${deviceDim[i]}
                                       </div>
                                       </div>
                                       <div class="card-second-section-child">
                                       <div class="card-second-section-child-child">${battery[i]}</div></div>                  
                                       <div class="card-second-section-child">
                                       <div class="card-second-section-child-child">${camera[i]}</div>                                  
                                      </div>`
                                        marginsZero = document.querySelectorAll('.third-child-discount-price')
                                        discount[i] = parseInt(discount[i]) 
                                        console.log(typeof discount[i])                      
                                        if(discount[i]===0){
                                            let requiredIndex = i
                                            console.log(i)
                                            const secondCardThirdChild = document.querySelectorAll('.second-card-third-child-text')
                                            const marginZero = document.querySelectorAll('.third-child-discount-price')
                                            const secondCard = document.querySelectorAll(".second-card-third-child-price")
                                            secondCard.forEach((a,i)=>{                 
                                                 a.style.display = "none"                  
                                            })
                                            marginZero.forEach((a)=>{
                                                        a.style.marginLeft = "0"  
                                                        console.log(a)                                             
                                            })
                                         secondCardThirdChild.forEach((a,i)=>{
                                            console.log(a)
                                a.style.display ="none"  
                                         })
                                            console.log(secondCard)
                                        }
                                        if(emiAvailable[i]!="null"){
                                        const addEmiField = document.querySelectorAll('.card-second-section-container')
                                        console.log(addEmiField)
                                        addEmiField.forEach((a,i)=>{
                                            console.log('hiiii')
                                            if(emiAvailable[i]!="null"){
                                            a.innerHTML += `<div class="emi-text">${exchangeText}</div><div class="card-emi-details">${emiTag}</div>`}
                                        })
                                        const changeHeight = document.querySelectorAll('.card-first-section')
                                        const secondCardLastChild = document.querySelectorAll(".second-card-last-child")
                                        secondCardLastChild.forEach((a,i)=>{
                                            if(emiAvailable[i]!="null"){
                                                a.style.display = "none"
                                               }
                                        })
                                        changeHeight.forEach((a,i)=>{
                                           if(emiAvailable[i]!="null"){
                                            a.style.height = "162px";
                                           }
                                        })
                                        }
                                    h=h+1
                                  if(h===6){
                                    callStyleFun()
                                    return 0
                                  }
                                }
})
sortByFixedChildThree[0].addEventListener('click',(a)=>{

    const sectionMainContainer= document.querySelector('.section-main-container')

    let d = 0
sectionMainContainer.innerHTML = ``
    
    for(result[d];d<6;result[d+1]){
       
       let i =parseInt(result[d])
    
       
console.log(imageData[i])
    sectionMainContainer.innerHTML +=`<div class ="section-card-main-container">
                                         <div class="card-first-section">
                                           <div class="card-first-section-mobile-image" data-rating="${rating[i]}"><img src ="${imageData[i]}"> </div>
                                           <div class="card-first-section-flex-container">
                                           <div class="card-luv-logo"><div class="luv-svg-container"><img src="${luvSvg}"></div></div>
                                           <div class="card-second-section-container"><div class="second-card-mobile-details">${name[i]}</div><div class="second-card-second-child"><div class="popularity"><div class="second-card-second-child-first-child"><div class="second-card-second-child-first-child-rating">${rating[i]}</div><div class="second-card-second-child-first-child-logo">${ratingLogo}</div></div><div class="rated-count">${ratingNumber[i]}</div></div><div></div><div class="second-card-second-child-second-child"><img src="${logo}"></div></div><div class="second-section-third-child-flex"><div class="second-card-third-child"><div class="second-card-third-child-price">${priceCalc[i]}</div><div class="third-child-discount-price">${discountPriceArray}</div><div class="second-card-third-child-text">${discount[i]}${discountTag}</div></div><div class="delivery-status">${deliveryStatus}</div></div><div class="second-card-last-child">${offer[i]}</div></div>
                                         </div></div>
                                         <div class="card-second-section">
                                         <div class="card-second-section-child">
                                         <div class="card-second-section-child-child">${deviceSpec[i]}</div></div>
                                         <div class="card-second-section-child">
                                         <div class="card-second-section-child-child">${deviceDim[i]}
                                         </div>
                                         </div>
                                         <div class="card-second-section-child">
                                         <div class="card-second-section-child-child">${battery[i]}</div></div>                  
                                         <div class="card-second-section-child">
                                         <div class="card-second-section-child-child">${camera[i]}</div>                                  
                                        </div>`
                                         marginsZero = document.querySelectorAll('.third-child-discount-price')
                                    //    arrey = [];
                                    //     for (var f = 0, ref = arrey.length = marginsZero.length; f < ref; f++) {
                                    //      arrey[f] = marginsZero[f];
                                    //      console.log(arrey)
                                    //     }
                                        
discount[i] = parseInt(discount[i]) 
 console.log(typeof discount[i])                      
 if(discount[i]===0){
     let requiredIndex = i
     console.log(i)
     const secondCardThirdChild = document.querySelectorAll('.second-card-third-child-text')
     const marginZero = document.querySelectorAll('.third-child-discount-price')
     const secondCard = document.querySelectorAll(".second-card-third-child-price")
     secondCard.forEach((a,i)=>{                 
          a.style.display = "none"                  
     })
     marginZero.forEach((a)=>{
                 a.style.marginLeft = "0"  
                 console.log(a)                                             
     })
  secondCardThirdChild.forEach((a,i)=>{
     console.log(a)
    a.style.display ="none"  
   })
                console.log(secondCard)
            }
            if(emiAvailable[i]!="null"){
            const addEmiField = document.querySelectorAll('.card-second-section-container')
            console.log(addEmiField)
            addEmiField.forEach((a,i)=>{
                console.log('hiiii')
                if(emiAvailable[i]!="null"){
                a.innerHTML += `<div class="emi-text">${exchangeText}</div><div class="card-emi-details">${emiTag}</div>`}
            })
            const changeHeight = document.querySelectorAll('.card-first-section')
            const secondCardLastChild = document.querySelectorAll(".second-card-last-child")
            secondCardLastChild.forEach((a,i)=>{
                if(emiAvailable[i]!="null"){
                    a.style.display = "none"
                   }
            })
            changeHeight.forEach((a,i)=>{
               if(emiAvailable[i]!="null"){
                a.style.height = "162px";
               }
            })
            }
            d = d+1
    if(d===6){
        console.log('hii')
        coo()
        return 0
    }
    console.log('hiii')
    }
 console.log('huray')
})
sortByFixedChildThree.forEach((a)=>{a.addEventListener('click',()=>{
 
    const sortByFixedIcon = a.querySelectorAll('.fixed-sort-by-icon')
sortByFixedIcon[0].innerHTML = `<img src="${sortByFixedImg[1]}">`
console.log(sortByFixedIcon)
console.log(sortByFixedImg[1])
fooi()
function fooi(){
    console.log('removed')
    
   
setTimeout(()=>{
    console.log('removed')
    const hideDiv = document.querySelector(".sort-div-fixed")  
    hideDiv.remove('sort-div-fixed')
},300)
}

})})


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
/////////////herwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww



// numRating.sort((a,b)=>{
//     a>b?-1:0;
// })
let index
let arr = []
let arrOne
let arr3 =[]
  arr = rating.slice(0,rating.length)
  arrOne = rating.slice(0,rating.length)
  let numbrsTwo = arrOne.map(Number)
  let numbers = arr.map(Number)
numbers.sort((a,b)=>{
    if(a>b){
        return -1
    }{
        if(a<b){
            return 1
        }
        if(a===b){
            return 0
        }
    }
})
numbers.map((a,i)=>{
// if(a[i]===numbrsTwo[i]){
//     console.log('hii')
// }    savingg index for popularityyyy
for(let b=0;b<7;b++){
 if(a===numbrsTwo[b]){
    console.log('hellooo')
    arr3 += b
   
 }
}

})
let result=[]
console.log(arr3)
let arr4 = arr3.split('')
console.log(arr4)
for (let i = 0; i < arr4.length; ++i) {
    if (arr4[i] == arr4[i + 4] || (arr4[i]==arr4[i+2])) continue
    result.push(arr4[i])
  }

  //////// for price high to low
  

realPriceNewNumber = realPriceNew.map(Number)
realPriceNewNewNumber = realPriceNewNew.map(Number)
 sortedArray = realPriceNewNumber.sort((a,b)=>{
    if(a>b){
        return -1
    }
    if(a<b){
        return 1
    }
    if(a===b){
        return 0
    }
 })
console.log(realPriceNewNewNumber)
console.log(sortedArray)
//  for(let i =0;i<realPriceNewNewNumber.lenght;i++){
//     for(let j=0;j<sortedArray.length;j++){
//         if(realPriceNewNewNumber[i]===sortedArray[j]){
//             console.log('sorted')
//         }
//     }
//  }
sortedArray.map((a,i)=>{
    for(let g=0;g<7;g++){
        if(a===realPriceNewNewNumber[g]){
            console.log(g)
            indexForPriceSorting+=parseInt(g)
            
        }
    }
})

indexForPriceSorting = indexForPriceSorting.split('')

console.log(indexForPriceSorting)

///////// for price high  



console.log(result)
console.log(rating)
const body = document.querySelector('body')
const sectionBody = document.createElement('section')
body.appendChild(sectionBody)
sectionBody
sectionBody.innerHTML = `<div class="image-div-ad"><img src="${srcAd}"></div><div class="section-main-container"></div>`
for(let i = 0;i<rating.length; i++){
    const sectionMainContainer = sectionBody.querySelector('.section-main-container')

    if(i===2){
        sectionMainContainer.innerHTML += `<div class="top-sale-deals-container"><div class="top-sale-deals-conatainer-child"><div class="top-sale-deals-content-container"><div class="image-top-deals"><img src="${imageTopDeals[0]}"></div><div class="top-deals-text"><div class="top-deals-flex-container-one">${topDealsText[0]}</div><div class="top-deals-flex-container-two">${topDealsText[1]}</div></div><div class="arrow-top-deals"><img src="${imageTopDeals[1]}"></div></div></div></div>`
    }
    let discountAmount = (priceCalc[i] * discount[i])/100
    console.log(discountAmount)

     let discountPrice = parseInt(priceCalc[i]-discountAmount)
     discountPrice = discountPrice.toString()
     console.log(typeof discountPrice)
  discountPriceArray = discountPrice.split('')
 discountPriceArray.splice(0,0,'₹')
 if(discountPriceArray.length ===6){
    discountPriceArray.splice(3,0,',')
 }
 if(discountPriceArray.length===5){
     discountPriceArray.splice(2,0,',')
 }
 discountPriceArray=discountPriceArray.join('')
     console.log(discountPriceArray)
      arrayElem[i] =discountPriceArray
     if(offer[i] === undefined){
        console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
        offer[i]= ""
     }


sectionMainContainer.innerHTML += `<div class ="section-card-main-container">
                                     <div class="card-first-section">
                                    
                                       <div class="card-first-section-mobile-image" data-rating="${rating[i]}"><img src ="${imageData[i]}"> </div>
                                       <div class="card-first-section-flex-container">
                                       <div class="card-luv-logo"><div class="luv-svg-container"><img src="${luvSvg}"></div></div>
                                       <div class="card-second-section-container"><div class="second-card-mobile-details">${name[i]}</div><div class="second-card-second-child"><div class="popularity"><div class="second-card-second-child-first-child"><div class="second-card-second-child-first-child-rating">${rating[i]}</div><div class="second-card-second-child-first-child-logo">${ratingLogo}</div></div><div class="rated-count">${ratingNumber[i]}</div></div><div></div><div class="second-card-second-child-second-child"><img src="${logo}"></div></div><div class="second-section-third-child-flex"><div class="second-card-third-child"><div class="second-card-third-child-price">${priceCalc[i]}</div><div class="third-child-discount-price">${discountPriceArray}</div><div class="second-card-third-child-text">${discount[i]}${discountTag}</div></div><div class="delivery-status">${deliveryStatus}</div></div><div class="second-card-last-child">${offer[i]}</div></div>
                                     </div></div>
        
                                     <div class="card-second-section">
                                     <div class="card-second-section-child">
                                     <div class="card-second-section-child-child">${deviceSpec[i]}</div></div>
                                  

                                     <div class="card-second-section-child">
                                     <div class="card-second-section-child-child">${deviceDim[i]}
                                     </div>
                                     </div>
            
                                     <div class="card-second-section-child">
                                     <div class="card-second-section-child-child">${battery[i]}</div></div>                  
                                     <div class="card-second-section-child">
                                     <div class="card-second-section-child-child">${camera[i]}</div>                                  
                                    </div>`    
                                    console.log(discount[i])

                                    if(discount[i]==="0"){
                                        let requiredIndex = i
                                        console.log(i)
                                        const secondCardThirdChild = document.querySelectorAll('.second-card-third-child-text')
                                        const marginZero = document.querySelectorAll('.third-child-discount-price')
                                        const secondCard = document.querySelectorAll(".second-card-third-child-price")
                                        secondCard.forEach((a,i)=>{
                                            if (i === requiredIndex){
                                             a.style.display = "none"
                                            
                                            }
                                        })
                                        marginZero.forEach((a,i)=>{
                    
                                           
                                            console.log(requiredIndex)
                                           
                                                if(i === requiredIndex){
                                                    console.log(a)
                                                    console.log(priceCalc)
                                                    a.innerHTML = `₹${priceCalc[i]}`
                                                    a.style.marginLeft = "0"  
                                                    console.log(a)                                             
                                                }
    
                                        })
                                     secondCardThirdChild.forEach((a,i)=>{
                                        console.log(a)
                                        if(i===requiredIndex){
                                            
                            a.style.display ="none"
                                        
                                        }
                                     })
                                        console.log(secondCard)
                                    }
                                    if(emiAvailable[i]!="null"){
                                    const addEmiField = document.querySelectorAll('.card-second-section-container')
                                    console.log(addEmiField)
                                    addEmiField.forEach((a,i)=>{
                                        console.log('hiiii')
                                        if(emiAvailable[i]!="null"){
                                        a.innerHTML += `<div class="emi-text">${exchangeText}</div><div class="card-emi-details">${emiTag}</div>`}
                                    })
                                    const changeHeight = document.querySelectorAll('.card-first-section')
                                    const secondCardLastChild = document.querySelectorAll(".second-card-last-child")
                                    secondCardLastChild.forEach((a,i)=>{
                                        if(emiAvailable[i]!="null"){
                                            a.style.display = "none"
                                           }
                                    })
                                    changeHeight.forEach((a,i)=>{
                                       if(emiAvailable[i]!="null"){
                                        a.style.height = "162px";
                                       }
                                    })
                                    }
                                    
                                    
}
let d = 0

function coo(){

    for(let i =0; i<marginsZero.length;i++){
       
        let i =parseInt(result[d])
        console.log(typeof i)
    console.log(marginsZero)
   
    marginsZero[0].innerHTML = `₹${priceCalc[2]}`
    marginsZero[1].innerHTML = `₹${priceCalc[3]}`
    marginsZero[2].innerHTML =`₹${priceCalc[4]}`
    marginsZero[3].innerHTML =`₹${priceCalc[5]}`
    marginsZero[4].innerHTML =`${arrayElem[0]}`
    marginsZero[5].innerHTML =`${arrayElem[1]}`
    


    d=d+1
    if(d===6){
        return 0
    }
    
}
}
function callStyleFun(){

    for(let i=0; i<marginsZero.length;i++){
        let i = parseInt(indexForPriceSorting[d])
        marginsZero[0].innerHTML = `₹${priceCalc[2]}`
        marginsZero[1].innerHTML = `₹${priceCalc[3]}`
        marginsZero[2].innerHTML =`₹${priceCalc[5]}`
        marginsZero[3].innerHTML =`₹${priceCalc[4]}`
        marginsZero[4].innerHTML =`${arrayElem[0]}`
        marginsZero[5].innerHTML =`${arrayElem[1]}`
    }
}

  
