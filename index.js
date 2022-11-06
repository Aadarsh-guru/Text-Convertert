const textArea = document.getElementById("floatingTextarea")

// FUNCTION TO CONVERT TEXT INTO UPPERCASE

function uppercase(){
    let textValue = textArea.value.toUpperCase()
    textArea.value = textValue
    if(textArea.value != "")document.getElementById('upr').style.display = 'block'
    setTimeout(()=>{document.getElementById('upr').style.display = 'none'},1000)
}

// FUNCTION TO CONVERT TEXT INTO LOWERCASE

function lowercase(){
    let textValue = textArea.value.toLowerCase()
    textArea.value = textValue
    if(textArea.value != "")document.getElementById('low').style.display = 'block'
    setTimeout(()=>{document.getElementById('low').style.display = 'none'},1000)
}

// FUNCTION TO CAPITILISE ALL TEXT

function capatiliseText(){
  let words = textArea.value.split(" ")
  let newarry = []
  for(const word of words ){
    let firstletter = word.substring(0,1)
    firstletter = firstletter.toUpperCase()
    let restletter = word.substring(1)
    newarry.push(firstletter+restletter)
  }
  let resut = newarry.join(" ")
  textArea.value = resut
  if(textArea.value != "")document.getElementById('cap').style.display = 'block'
  setTimeout(()=>{document.getElementById('cap').style.display = 'none'},1000)
}

//FUNCTION THAT CONVERT ACCORDING TO SELECT OPTION 

let textConvert = document.getElementById('textConvert')

function convert(){
if(textConvert.value == 1){
  uppercase()
}else if(textConvert.value == 2){
  lowercase()
}else if(textConvert.value == 3){
  capatiliseText()
}else{
    showAlert=()=>{ document.getElementById('warn').style.display = 'block'
    setTimeout(()=>{document.getElementById('warn').style.display = 'none'},1500) }
    showAlert();
}
}

// FUNCTION TO CLEAR ALL TEXT

function clearText(){
    textArea.value = ""
    if(textArea.value != "")document.getElementById('clear').style.display = 'block'
    setTimeout(()=>{document.getElementById('clear').style.display = 'none'},1000)
}

// FUNCTION TO COPY ALL TEXT

function copyText(){
  let copyText = textArea;
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
    if(textArea.value != "")document.getElementById('copy').style.display = 'block'
    setTimeout(()=>{document.getElementById('copy').style.display = 'none'},1000)
}

setInterval(()=>{
  let words=document.getElementById('words')
  words.innerText = `Latters : ${textArea.value.length} words : ${textArea.value.split(' ').length} `
},100)
