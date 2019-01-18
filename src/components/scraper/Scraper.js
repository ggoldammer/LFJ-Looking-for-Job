// import React from "react";
// import axios from "axios";
// import cheerio from "cheerio";

// const scraper = (call) => {
//     axios.get ("https://www.indeed.com/q-full-stack-developer-jobs.html")
//     .then(res => {
//         const $ = cheerio.load(res.data);
//         const jobs = [];
//         $(".title").each((i, elem) => {
//             jobs.push({
//                 title: $(elem).text(),
//                 summary: $(elem).text()
//             })
//         })
//         call(jobs);
//         return console.log(...jobs)
//     })
    
// }

// export default scraper;