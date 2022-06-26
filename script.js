var nameUser = document.querySelector('#mainUsername').innerText;
var numRequests = document.querySelector('#numRequests').innerText;
var numConnections = document.querySelector('#numConnections').innerText;

function changeName() {
    if (nameUser == "Brandon Taylor")
        nameUser = "Lebron James";
    else 
        nameUser = "Brandon Taylor";

    document.querySelector('#mainUsername').innerText = nameUser;
}

function changeCursor(element) {
    element.style.cursor = "pointer";
}

function deleteRequest(element) {

    if (element.className == "smallerPic request_1")
    {
        if (element.id == "accept1")
        {
            numConnections++;
        }
        document.querySelector('#request1').remove();
    }
    else if (element.className == "smallerPic request_2")
    {
        if (element.id == "accept2")
        {
            numConnections++;
        }
        document.querySelector('#request2').remove();
    }


    numRequests--;
    document.querySelector('#numRequests').innerText = numRequests;
    document.querySelector('#numConnections').innerText = numConnections;
}