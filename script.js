import dataBase from"./dataBase.json" assert{type:"json"}
const header = document.querySelector('.header-main-container')
const headerEl = document.querySelector('header')
const headerMain = document.querySelector("header")
const bodyElement = document.querySelector('body')
let indexLowToHigh=[]
let arrayElem=[]
let mobileCardDiscountPrice
let indexForPriceSorting =[]

function createELE(elementCreate,appendTo,Classname){
    let a = document.createElement(elementCreate)
    let b = document.querySelector(appendTo)
    b.appendChild(a)
    a.classList.add(Classname)
    return(a)
}
let headerSvgPath,flipKartLogo,headerTexts,sortMenuImg,sortByMenuOptionsImg,mobileCardImages,name,rating,logo,realPrice,discount,discountTag,deliveryStatus,offer,advertisementImgSrc,borderImg,ratingLogo,ratingNumber,deviceSpec,deviceDim,battery,camera,sortByMenuOptions,luvSvg,imageHref,imageTopDeals,image,topDealsText,emiAvailable,exchangeText,emiTag,discountPriceArray,realPriceNew,realPriceNewNumber,realPriceNewNew,realPriceNewNewNumber,sortedArray,mobilePrice,mobilePriceTwo,mobilePriceSorted;
const svgPath = dataBase.map((a)=>{
    if(a.name==="header"){
        headerSvgPath = a.svgpath
        flipKartLogo = a.headerimage
        headerTexts = a.headerTag.split(',')
    }
    
    if(a.name==="headersort"){
     sortMenuImg = a.imgandtext
    }
    if(a.name ==="sortBy"){
     sortByMenuOptions = a.tags.split(',')
     sortByMenuOptionsImg = a.popularityMarker.split(',')
    }
    if(a.name === "advertisement"){
        advertisementImgSrc = a.src
    }
    if(a.name === "cardOne"){
        mobileCardImages =  a.img.split('!')
        name = a.headerTexts.split('-')
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
        mobilePrice = a.realPrice.split(',')
        mobilePriceTwo = a.realPrice.split(',')    
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
    //      mobileCardImagestwo =  a.img
    //      nametwo = a.headerTexts
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
console.log(sortByMenuOptionsImg)
sortMenuImg = sortMenuImg.split(',')
console.log(sortMenuImg[0])
let priceCalc=[]
 parseInt(realPrice)
for(let i=0;i<rating.length;i++){
    priceCalc[i]= realPrice.shift()
}
console.log(realPrice)
console.log(priceCalc)
headerSvgPath = headerSvgPath.split(',')
header.innerHTML = `<div class="header-flex-box-one"><div class="image-div"><a href=""><svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg">${headerSvgPath[0]}</svg></a></div><div class="header-flipkart-logo"><img src="${flipKartLogo}"></div><div class="header-span"><span>${headerTexts[0]}</span></div></div><div class="header-flex-box-two"><div class="header-search-bar"><a href=""><svg fill="#fff" height="22" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">${headerSvgPath[1]}</svg></a></div><div class="shopping-cart-svg-header"><a href=""><svg width="16" height="16" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">${headerSvgPath[2]}</svg></a></div><div class="header-login-div"><a href=""><span>${headerTexts[1]}</span><a></div>`
headerMain.innerHTML += `<div class="border-image"><img src="${borderImg}"></div><div class="header-second-container"><a class="sort-container"><div class="header-sort-container"><div class="header-sort"><img src="${sortMenuImg[0]}"></div><div>${sortMenuImg[2]}</div></div></a><div class="border-div"></div><div class="header-popularity-main-container"><div class="header-popularity-container"><div class="filter"><img src="${sortMenuImg[1]}"</div></div><div class="filter-text">${sortMenuImg[3]}</div></div></div>`
const sortAnchorTag = document.querySelector('.sort-container')
console.log(sortAnchorTag)
////// sort on click//////////////////////////////////////////////////////////////////////
sortAnchorTag.addEventListener('click',()=>{
   bodyElement.classList.toggle('no-scroll') 
createELE('div','header','sort-div-fixed')
const sortMenuFixedDiv = document.querySelector('.sort-div-fixed')
sortMenuFixedDiv.innerHTML = `<div class="sort-div-fixed-chid"><div class="sort-by-div-first-child">${sortByMenuOptions[0]}</div><div class="fixed-border-div"></div><div class="sort-by-fixed-div-child-three"></div></div></div>`



for(let i = 0;i <4 ;i++){
    const sortMenuOptions = document.querySelector('.sort-by-fixed-div-child-three')

    let sortMenucreateElement = document.createElement('div')
    let sortMenucreateElementTwo = document.createElement('div')
    let sortMenucreateElementFour = document.createElement('div')
    sortMenucreateElementFour.innerHTML = `${sortByMenuOptions[i+1]}`
    sortMenucreateElementFour.classList.add('sort-text-container-div')
    sortMenucreateElement.appendChild(sortMenucreateElementTwo)
sortMenucreateElementTwo.appendChild(sortMenucreateElementFour)

    let sortMenucreateElementThree = document.createElement('div')
    sortMenucreateElement.appendChild(sortMenucreateElementThree)
    sortMenucreateElementThree.classList.add('fixed-sort-by-icon')
    sortMenucreateElementThree.innerHTML = `<img src="${sortByMenuOptionsImg[0]}">`
    
    sortMenucreateElement.classList.add('sort-by-fixed-child-three')
    console.log(sortMenucreateElement)
      sortMenuOptions.appendChild(sortMenucreateElement)

const hideDiv = document.querySelector(".sort-div-fixed")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
 console.log(hideDiv)
hideDiv.addEventListener('click',function fooi(){
   bodyElement.classList.remove('no-scroll') 
    console.log('removedone')
setTimeout(()=>{
    hideDiv.remove('sort-div-fixed')
},300)
})

// let createDiv = sortMenuOptions.appendChild('sortMenucreateElement')
// sortMenucreateElement.classList.add('sorting-third-child-child')

}

const sortByMenuOptionsChildThree = document.querySelectorAll('.sort-by-fixed-child-three')
sortByMenuOptionsChildThree[1].addEventListener('click',(a)=>{
    const mobileCardsParentContainer= document.querySelector('.section-main-container')
    mobileCardsParentContainer.innerHTML = ``
    let l = 0
        for(indexLowToHigh[l];l<discount.length;indexLowToHigh[l+1]){
            let i = parseInt(indexLowToHigh[l])
            console.log('hiii')
            mobileCardsParentContainer.innerHTML +=`<div class ="section-card-main-container">
                                          <div class="card-first-section">                   
                                            <div class="card-first-section-mobile-image" data-rating="${rating[i]}"><img src ="${mobileCardImages[i]}"> </div>
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
                                            mobileCardDiscountPrice = document.querySelectorAll('.third-child-discount-price')
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
                                        l=l+1
                                      if(l===discount.length){
                                        addPriceTagFun()
                                        return 0
                                      }
                                    }

})
sortByMenuOptionsChildThree[2].addEventListener('click',(a)=>{
    const mobileCardsParentContainer= document.querySelector('.section-main-container')
mobileCardsParentContainer.innerHTML = ``
let h = 0
    for(indexForPriceSorting[h];h<discount.length;indexForPriceSorting[h+1]){
        let i = parseInt(result[h])
        console.log('hiii')
        mobileCardsParentContainer.innerHTML +=`<div class ="section-card-main-container">
                                      <div class="card-first-section">                   
                                        <div class="card-first-section-mobile-image" data-rating="${rating[i]}"><img src ="${mobileCardImages[i]}"> </div>
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
                                        mobileCardDiscountPrice = document.querySelectorAll('.third-child-discount-price')
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
                                  if(h===discount.length){
                                    addPriceTagHighToLow()
                                    return 0
                                  }
                                }
})
sortByMenuOptionsChildThree[0].addEventListener('click',(a)=>{

    const mobileCardsParentContainer= document.querySelector('.section-main-container')

    let d = 0
mobileCardsParentContainer.innerHTML = ``
    
    for(result[d];d<discount.length;result[d+1]){
       
       let i =parseInt(result[d])
    
       
console.log(mobileCardImages[i])
    mobileCardsParentContainer.innerHTML +=`<div class ="section-card-main-container">
                                         <div class="card-first-section">
                                           <div class="card-first-section-mobile-image" data-rating="${rating[i]}"><img src ="${mobileCardImages[i]}"> </div>
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
                                         mobileCardDiscountPrice = document.querySelectorAll('.third-child-discount-price')
                                    //    arrey = [];
                                    //     for (var f = 0, ref = arrey.length = mobileCardDiscountPrice.length; f < ref; f++) {
                                    //      arrey[f] = mobileCardDiscountPrice[f];
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
     secondCard.forEach((a,requiredIndex)=>{                 
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
    if(d===discount.length){
        console.log('hii')
       addPriceSortPopularity()
        return 0
    }
    console.log('hiii')
    }
 console.log('huray')
})
sortByMenuOptionsChildThree.forEach((a)=>{a.addEventListener('click',()=>{
 
    const sortByMenuOptionsIcon = a.querySelectorAll('.fixed-sort-by-icon')
sortByMenuOptionsIcon[0].innerHTML = `<img src="${sortByMenuOptionsImg[1]}">`
console.log(sortByMenuOptionsIcon)
console.log(sortByMenuOptionsImg[1])
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
// console.log(sortByMenuOptions[0])
// data.innerHTML = `${sortByMenuOptions[0]}`
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
for(let b=0;b<discount.length;b++){
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
    if (arr4[i] == arr4[i + 8] || (arr4[i]==arr4[i+2])) continue
    result.push(arr4[i])
  }
console.log(result)
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
    for(let g=0;g<discount.length;g++){
        if(a===realPriceNewNewNumber[g]){
            console.log(g)
            indexForPriceSorting += parseInt(g)
            
        }
    }
})

indexForPriceSorting = indexForPriceSorting.split('')

console.log(indexForPriceSorting)

///////// for price low to high////////////////
mobilePrice = mobilePrice.map(Number)
mobilePriceTwo = mobilePriceTwo.map(Number)
console.log(mobilePrice)
mobilePriceSorted = mobilePrice.sort((a,b)=>{
    return a-b
})
console.log(discount.length)
console.log(mobilePriceSorted)
mobilePriceSorted.map((a,i)=>{
    for(let l =0;l<discount.length;l++){
        if(a===mobilePriceTwo[l]){
            console.log(l)
            indexLowToHigh +=parseInt(l)
        }
    }
})
indexLowToHigh = indexLowToHigh.split('')

console.log(indexLowToHigh)



console.log(result)
console.log(rating)
const body = document.querySelector('body')
const sectionBody = document.createElement('section')
body.appendChild(sectionBody)
sectionBody
sectionBody.innerHTML = `<div class="image-div-ad"><img src="${advertisementImgSrc}"></div><div class="section-main-container"></div>`
for(let i = 0;i<rating.length; i++){
    const mobileCardsParentContainer = sectionBody.querySelector('.section-main-container')

    if(i===2){
        mobileCardsParentContainer.innerHTML += `<div class="top-sale-deals-container"><div class="top-sale-deals-conatainer-child"><div class="top-sale-deals-content-container"><div class="image-top-deals"><img src="${imageTopDeals[0]}"></div><div class="top-deals-text"><div class="top-deals-flex-container-one">${topDealsText[0]}</div><div class="top-deals-flex-container-two">${topDealsText[1]}</div></div><div class="arrow-top-deals"><img src="${imageTopDeals[1]}"></div></div></div></div>`
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


mobileCardsParentContainer.innerHTML += `<div class ="section-card-main-container">
                                     <div class="card-first-section">
                                    
                                       <div class="card-first-section-mobile-image" data-rating="${rating[i]}"><img src ="${mobileCardImages[i]}"> </div>
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

function addPriceSortPopularity(){

    for(let i =0; i<mobileCardDiscountPrice.length;i++){
        console.log(typeof i)
    console.log(mobileCardDiscountPrice)
   
    mobileCardDiscountPrice[i].innerHTML = `₹${priceCalc[result[i]]}`
    // mobileCardDiscountPrice[1].innerHTML = `₹${priceCalc[3]}`
    // mobileCardDiscountPrice[2].innerHTML =`₹${priceCalc[4]}`
    // mobileCardDiscountPrice[3].innerHTML =`₹${priceCalc[5]}`
    // mobileCardDiscountPrice[4].innerHTML =`${arrayElem[0]}`
    // mobileCardDiscountPrice[5].innerHTML =`${arrayElem[1]}`
    


    d=d+1
    if(d===discount.length){
        return 0
    }
    
}
}
function addPriceTagHighToLow(){

    for(let i=0; i<mobileCardDiscountPrice.length;i++){
        mobileCardDiscountPrice[i].innerHTML = `₹${priceCalc[indexForPriceSorting[i]]}`
        // mobileCardDiscountPrice[1].innerHTML = `₹${priceCalc[3]}`
        // mobileCardDiscountPrice[2].innerHTML =`₹${priceCalc[5]}`
        // mobileCardDiscountPrice[3].innerHTML =`₹${priceCalc[4]}`
        // mobileCardDiscountPrice[4].innerHTML =`${arrayElem[0]}`
        // mobileCardDiscountPrice[5].innerHTML =`${arrayElem[1]}`
    }
}
function addPriceTagFun(){

    for(let i=0; i<mobileCardDiscountPrice.length;i++){
        mobileCardDiscountPrice[i].innerHTML = `₹${priceCalc[indexLowToHigh[i]]}`
        // mobileCardDiscountPrice[1].innerHTML = `₹${priceCalc[0]}`
        // mobileCardDiscountPrice[2].innerHTML =`₹${priceCalc[4]}`
        // mobileCardDiscountPrice[3].innerHTML =`₹${priceCalc[5]}`
        // mobileCardDiscountPrice[4].innerHTML =`${arrayElem[3]}`
        // mobileCardDiscountPrice[5].innerHTML =`${arrayElem[2]}`
    }
}

  
