function appendtoDisplay(value)
{
    document.getElementById('display').value+=value
    console.log(document.getElementById('display').value)
}
function clearDisplay()
{
    document.getElementById('display').value=''
}
function deleteDisplay()
{
    var l=document.getElementById('display').value
    document.getElementById('display').value=l.slice(0,-1)
}
function performOperation(operator)
{
    var d=document.getElementById('display').value;
    if(d!=' ')
    {

        if(operator==='+')
        appendtoDisplay('+')
        else if(operator==='-')
        appendtoDisplay('-')
        else if(operator==='*')
        appendtoDisplay('*')
        else if(operator==='/')
        appendtoDisplay('/')
    }
}
function calculate()
{
    var p=document.getElementById('display').value;
    try{
        var ans=eval(p)
        document.getElementById('display').value=ans;
        
    }
    catch{
        document.getElementById('display').value="error";

    }
}