require("chromedriver");
const wd = require("selenium-webdriver");
let fs = require('fs');




async function website_1() {

    let url1 =[];
    let finalData1 = [];
    const browser = new wd.Builder().forBrowser('chrome').build();
    await browser.get("https://housefulofhandmade.com/top-10-diy-projects-from-2019/");
    await browser.wait(wd.until.elementLocated(wd.By.css(".mv-list-single-title a ")));
    let diy_names2 = await browser.findElements(wd.By.css(".mv-list-single-title a "));

    for (let i = 0; i < diy_names2.length; i++) {
     let all_diy2 = await diy_names2[i].getAttribute("innerText");
     let url1 = await diy_names2[i].getAttribute("href");



    finalData1.push({ 
        diy_topics2: all_diy2,
        url1: url1
    });

 }

 for(let i=0; i<finalData1.length; i++){
   fs.writeFileSync("diy.json", JSON.stringify(finalData1));
   console.log("\n");
 }


 browser.close();
}


async function website_2() {
  
    let finalData2 =[];
    const browser = new wd.Builder().forBrowser('chrome').build();
     await browser.get("https://www.boredpanda.com/creative-diy-project-ideas/?utm_source=google&utm_medium=organic&utm_campaign=organic" );
    await browser.wait(wd.until.elementLocated(wd.By.css(".post-content h2 ")));
    let diy_names = await browser.findElements(wd.By.css(".post-content h2 "));
    for (let i = 0; i < diy_names.length; i++) {
        let all_diy = await diy_names[i].getAttribute("innerText");
        

    finalData2.push({
        diy_topics: all_diy
    });

 }

 for(let i=0; i<finalData2.length; i++){
   fs.writeFileSync("diy.json", JSON.stringify(finalData2));
  

 }
     
    browser.close();
}

async function website_3() {
    let finalData3 = [];

    
    const browser = new wd.Builder().forBrowser('chrome').build();
    await browser.get("https://www.domino.com/content/diy-blogs-home-decor-bloggers-to-follow/");
    await browser.wait(wd.until.elementLocated(wd.By.css(".js--section.js--section-text .external span ")));
    let diy_names3 = await browser.findElements(wd.By.css(".js--section.js--section-text .external span "));

    for (let i = 0; i < diy_names3.length; i++) {
     let all_diy3 = await diy_names3[i].getAttribute("innerText");
     

     finalData3.push({ diy_topics3: all_diy3 });
    

 }
 for(let i=0; i<finalData3.length; i++){
   fs.writeFileSync("diy.json", JSON.stringify(finalData3));
 
}

browser.close();
}

async function website_4() {
    let finalData4 = [];
   

    
    const browser = new wd.Builder().forBrowser('chrome').build();
    await browser.get("https://www.housebeautiful.com/home-remodeling/diy-projects/how-to/g1624/diy-solutions-easier-life/");
    await browser.wait(wd.until.elementLocated(wd.By.css(".listicle-slide-hed-text")));
    let diy_names4 = await browser.findElements(wd.By.css(".listicle-slide-hed-text "));

    for (let i = 0; i < diy_names4.length; i++) {
     let all_diy4 = await diy_names4[i].getAttribute("innerText");
     




finalData4.push({ 
    diy_topics4: all_diy4
    
});

}

for(let i=0; i<finalData4.length; i++){
fs.writeFileSync("diy.json", JSON.stringify(finalData4));
}

 browser.close();
}





async function main() {

website_1();
 website_2();
 website_3();  
 website_4();
 
 
}
 

 main();