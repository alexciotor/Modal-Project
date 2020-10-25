// JavaScript Functionality


// Main button
const button =document.getElementById('Btn');
// Overlay div
const overlay = document.getElementById('Overlay');
// First box container
const firstBox = document.getElementById('Content');
// Second box container
const secondBox=document.getElementById('secondBox');
// X button
const ex =document.getElementById('Ex');

const content =document.getElementById('')


// Main button functionality
button.addEventListener('click',()=>{
 overlay.style.display="inline";
firstBox.style.zIndex='9'
secondBox.style.display='flex'
})

// Second button functionality
ex.addEventListener('click',()=>{
 overlay.style.display="none";
firstBox.style.zIndex='10'
secondBox.style.display='none'
})