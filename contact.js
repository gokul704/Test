function OnAction(){
    let name= document.getElementById('name').value;
    let email= document.getElementById('email').value;
    let subject= document.getElementById('subject').value;
    let message= document.getElementById('message').value;
    window.open('mailto:Info@clearitsolutions.co?subject='+subject+'&body="'+message+'"');
}

