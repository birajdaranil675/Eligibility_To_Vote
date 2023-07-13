function checkForEligiblity()
{
    let age = parseInt(document.getElementById('age').value);
    
    if(age >= 18)
    {
        document.getElementById('result').innerText = 'You are eligible to vote';
    }
    else{
        document.getElementById('result').innerText = 'You are not eligible to vote';
    }
}