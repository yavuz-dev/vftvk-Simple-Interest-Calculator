var selectYears = document.getElementById("years")

// Add up to 100 years into select field
for(let i=0; i<99; i++) {
    let opt = document.createElement("option")
    opt.value = i+1
    opt.innerHTML = i+1
    selectYears.appendChild(opt)
}

var result = document.getElementById("result")

function compute()
{
    var principal = document.getElementById("principal").value;

    if(principal<=0) {
        alert("Enter a positive number")
        document.getElementById("principal").focus()
        return
        // return is to make sure below code never executes
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    console.log(rate,years,principal,interest)
    result.innerHTML = `If you deposit <mark>${principal}</mark>,<br/>
                        at an interest rate <mark>${rate}%</mark>.<br/>
                        You will receive an amount of <mark>${interest}</mark>,<br/>
                        in the year <mark>${year}</mark>`
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
