// Assembles index.html from tools/v2 parts: node tools/build.js
const fs=require('fs'),p=f=>fs.readFileSync(__dirname+'/v2/'+f,'utf8');
const head=`<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Aqua Premium Foods — Wholesale Canned &amp; Frozen Supply</title>
<meta name="description" content="Aqua Premium Foods — HACCP-certified canned tuna, legumes, vegetables and frozen foods for retailers, distributors and restaurants. Wholesale orders from 50 cartons, private label, Cairo &amp; Dubai.">
<meta name="theme-color" content="#F7F3EC">
<link rel="icon" type="image/png" href="assets/img/favicon.png">
<link rel="preload" href="assets/fonts/DGGhayaty-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="assets/fonts/ExpoArabic-Book.woff2" as="font" type="font/woff2" crossorigin>
<style>
`;
fs.writeFileSync(__dirname+'/../index.html',head+p('s1.css')+p('s2.css')+'</style>\n</head>\n'+p('body.html')+'\n<script>\n'+p('app.js')+'</script>\n</body>\n</html>\n');
console.log('built',fs.statSync(__dirname+'/../index.html').size);
