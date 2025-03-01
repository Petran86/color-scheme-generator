fetch("https://www.thecolorapi.com/scheme?hex=2b2b2b&mode=monochrome")
    .then(res => res.json())
    .then(data => console.log(data.colors))

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