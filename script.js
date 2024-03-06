const colorPicker = document.getElementById("color-picker")
const colorValue = document.getElementById("color-value")
const formData = document.getElementById("form-data")
const colors = document.querySelector(".colors")


formData.addEventListener("submit", (e)=>{
    e.preventDefault()

    const inputData = new FormData(formData)
    const colorValue = inputData.get("color").substring(1)
    const colorMode = inputData.get("color-mode")


    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${colorMode}&count=5`)
    .then(res => res.json())
    .then(data => data.colors.forEach((color, index) => {
        const hex = color.hex.value
        
        document.getElementById(`color-${index+1}`).style.backgroundColor = hex
        document.getElementById(`text-${index+1}`).textContent = hex
    }))
})

