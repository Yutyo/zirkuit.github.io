function goto(element, link) {
    element.style.transition = ".1s"
    element.style.color = "white"
    element.style.borderColor = "white"
    element.style.boxShadow = "0px 0px 15px 0px rgba(255,255,255,1)"
    setTimeout(function(){ 
        element.style.color = ""
        element.style.borderColor = ""
        element.style.boxShadow = ""
        setTimeout(function(){ 
            element.style.color = "white"
            element.style.borderColor = "white"
            element.style.boxShadow = "0px 0px 15px 0px rgba(255,255,255,1)"
            setTimeout(function(){ 
                element.style.color = ""
                element.style.borderColor = ""
                element.style.boxShadow = ""
                setTimeout(function(){ 
                    element.style.transition = ""
                    if (link != "debug") {
                        window.location.href = link;
                    } else {
                        alert("Page is not yet ready")
                    }
                }, 100);
            }, 100);
        }, 100);
    }, 100);
}