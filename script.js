let convert_start;
let convert_end;
let money;
let end_amount;
const url = "https://open.er-api.com/v6/latest/USD";

const currency_start = document.querySelector(".currency_start");
currency_start.addEventListener('keydown', function(event) 
{
    if (event.key == "Enter")
    {
        convert_start = event.target.value;
        download()
    }
});

const currency_end = document.querySelector(".currency_end");
currency_end.addEventListener('keydown', function(event) 
{
    if (event.key == "Enter")
    {
        convert_end = event.target.value;
        download()
    }
});

const starting_amount = document.querySelector(".amount");
starting_amount.addEventListener("keydown", function(event)
{
    if (event.key == "Enter")
        {
            money = event.target.value;
            download()
        }
});


async function download() 
{
    const response = await fetch(url);
    const data = await response.json();
    const element = document.querySelector(".currency_conv");

    const converted = data.rates[convert_end] / data.rates[convert_start];
    const conv_money = money * converted;
    
    if (convert_start != undefined && convert_end != undefined
       && money != undefined && conv_money != undefined  
    ){
        element.innerHTML = 
        "<p>" 
        + money + " " + convert_start + " ==> " 
        + conv_money + " " + convert_end
        "</p>";
    }   
}

async function dates() 
{
    const response = await fetch(url);
    const data = await response.json();

    const last_upt = document.querySelector(".last_upt");
    last_upt.innerHTML += " " + data.time_last_update_utc;

    const next_upt = document.querySelector(".next_upt");
    next_upt.innerHTML += " " + data.time_next_update_utc
}

dates()