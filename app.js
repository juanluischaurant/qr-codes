let parametersQR = {
  "size": 250, // Size of Qr Code
  "backgroundColor": "2a2933", // Background Color Of Qr Code (In RGB)
  "qrColor": "ffffff", // Color of Qr Code (In RGB)
  "padding": 1, // Padding 
  "data": "juanluischaurant.com",
  'format': 'svg'
}

let parameters

let btn = document.querySelector("button")
let downloadBtn = document.querySelector('.download-button')
let img = document.querySelector("img")
let information = document.querySelector(".information")
let format = document.querySelector('#format')
let padding = document.querySelector('.padding')
let qrColorPicker = document.querySelector('.color-picker')
let toggleTheme = document.querySelector('#checkbox-toggle-theme')

toggleTheme.addEventListener('change', () => {
  document.body.classList.toggle('dark')
  console.log(document)
})

qrColorPicker.addEventListener('change', () => {
  let color = qrColorPicker.value.slice(1)
  parametersQR.qrColor = color
  // console.log('well, hello there')
  // console.log(qrColorPicker.value)
})
btn.addEventListener("click", () => {
  parametersQR.data = information.value || "juanluischaurant.com"
  parametersQR.format = format.value
  parametersQR.padding = padding.value
  
  // Stitch Together all Paramenters using template literals or whatever
  parameters = `size=${parametersQR.size}&bgcolor=${parametersQR.backgroundColor}&color=${parametersQR.qrColor}&qzone=${parametersQR.padding}&data=${parametersQR.data}&format=${parametersQR.format}`
  
  // Set Image URL To Link
  img.src = `https://api.qrserver.com/v1/create-qr-code/?${parameters}` 
  downloadBtn.href = img.src
  
})

const loadDefaultUI = () => {
  padding.value = parametersQR.padding
  information.value = parametersQR.data
  img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=250&bgcolor=38-38-38&color=255-255-255&qzone=1&data=juanluischaurant.com&format=svg'

  // console.log('general Kenobi')
  // toggleTheme.checked = false
  toggleTheme.checked && document.body.classList.add('dark')
}

loadDefaultUI()