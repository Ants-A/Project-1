let convert_start;
let convert_end;

const currency_start = document.querySelector(".currency_start");
currency_start.addEventListener('keydown', function(event) 
{
    if (event.key == "Enter")
    {
        convert_start = event.target.value;
        console.log(convert_start) 
    }
});

const currency_end = document.querySelector(".currency_end");
currency_end.addEventListener('keydown', function(event) 
{
    if (event.key == "Enter")
    {
        convert_end = event.target.value;
        console.log(convert_end)   
    }
});

console.log(convert_end)  
console.log(convert_start) 


async function download() 
{
    const url = "https://open.er-api.com/v6/latest/USD";
    const response = await fetch(url);
    const data = await response.json();
    const element = document.querySelector(".currency_conv");
    let converted;
    console.log(convert_end)  
    console.log(convert_start) 
    if (data[convert_end] == 1)
    {
        converted = data[convert_end] / data[convert_start];
    }
    else
    {
        converted = data[convert_start] / data[convert_end];
    }

    element.innerHTML = "<p>" + data[convert_start] + " ==> " + converted + "</p>";
}