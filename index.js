document.getElementById("schemes-form").addEventListener("submit", async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const color = formData.get("color").replace(/[^a-zA-Z0-9]/g, '')
    const scheme = document.getElementById("schemes").value
    let schemesHTML = ``

    try{
        const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}`)
        const data = await res.json()
        console.log(data)
        schemesHTML += data.colors.map((color) => {
            return `
            <div class="schemes-col">
                <div class="schemes-color"}></div>
                <p class="color-value">${color.name.value}</p>
            </div>
        `
        }).join(" ")
        document.getElementById("color-schemes").innerHTML = schemesHTML
    }
    catch(err){
        console.log(err)
    }
})

    /** Rough plan
     * 1. event listener on form submit
     * 2. get the values from input and select
     * 3. fetch request with those values
     * 4. render the colors 
     * <div> //columns
     *  <div style={backgroundColor:}></div> //color
     *  <span></span> // hex
     * </div>
     */