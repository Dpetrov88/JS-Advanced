function attachEventsListeners() {
    let buttons =Array.from (document.querySelectorAll("input[type = button]"));
    
    for (let buton of buttons ) {
        buton.addEventListener("click", convert);
    }
    function convert (e) {
        let value =Number (e.target.parentElement.querySelector("input[type = text]").value);
        let cur = e.target.id;
        switch (cur) {
            case "daysBtn":
                document.getElementsByTagName("div")[0].children[1].value = value
                document.getElementsByTagName("div")[1].children[1].value = value * 24;
                document.getElementsByTagName("div")[2].children[1].value = value * 1440;
                document.getElementsByTagName("div")[3].children[1].value = value * 86400; 
                    break;
                break;
            case "hoursBtn":
                document.getElementsByTagName("div")[0].children[1].value = value / 24
                document.getElementsByTagName("div")[1].children[1].value = value;
                document.getElementsByTagName("div")[2].children[1].value = value * 60
                document.getElementsByTagName("div")[3].children[1].value = value * 3600
                    break;
            case "minutesBtn":
                document.getElementsByTagName("div")[0].children[1].value = value / 1440
                document.getElementsByTagName("div")[1].children[1].value = value / 60
                document.getElementsByTagName("div")[2].children[1].value = value
                document.getElementsByTagName("div")[3].children[1].value =  value * 60
                break;
            case "secondsBtn":
                document.getElementsByTagName("div")[0].children[1].value = value / 24 / 60 / 60 //86400
                document.getElementsByTagName("div")[1].children[1].value = value / 60 / 60//3600
                document.getElementsByTagName("div")[2].children[1].value = value / 60
                document.getElementsByTagName("div")[3].children[1].value = value 
                break;    
        }
         
    }
}