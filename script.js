

function checkAge()
{
    let Age = document.getElementById('age').value;
    let Show = document.getElementById('show');
    if (Age<18)
    {
        Show.innerHTML =  "You are a child"
    }
    else
    {
        Show.innerHTML =  "You are an adult";
    }
}