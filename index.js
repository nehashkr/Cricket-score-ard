function updateScore(clickedButton)
{
    let curRun = parseInt(clickedButton.value);
    // console.log(curRun);
    let curScore = parseInt(document.getElementById("runs").value);
    curScore = curScore + curRun;
    document.getElementById("runs").value = curScore;

    // let curOver=parseInt(clickedButton.value);
    let prvOver2=parseInt(document.getElementById("overs2").value);
    let prvOver1=parseInt(document.getElementById("overs1").value);
    prvOver2 = 1+prvOver2;
    // document.getElementById("overs2").value=prvOver;
    
    if(prvOver2>=6)
    {
        document.getElementById("overs2").value=0;
        // document.getElementsByName("over-1").value=0;
        document.getElementById("overs1").value=1+prvOver1;
    }

    else
    {
        document.getElementById("overs2").value=prvOver2;
    }
    // let curwick=parseInt(clickedButton.value);
    if(prvOver2==1)
    {
        document.getElementById("overs-1").value=curRun;
    }
    else if(prvOver2==2)
    {
        document.getElementById("overs-2").value=curRun;
    }
    else if(prvOver2==3)
    {
        document.getElementById("overs-3").value=curRun;
    }
    else if(prvOver2==4)
    {
        document.getElementById("overs-4").value=curRun;
    }
    else if(prvOver2==5)
    {
        document.getElementById("overs-5").value=curRun;
    }
    else if(prvOver2==6)
    {
        document.getElementById("overs-6").value=curRun;
    }
}

function wicket(clickedwick){
    // let curwick = parseInt(clickedwick.value);
    let prvwick = parseInt(document.getElementById("wickets").value);

    prvwick=1+prvwick;

    if(prvwick<=10)
    {
        document.getElementById("wickets").value=prvwick;
    }
    else{
        
        alert("Innings Completed");
        document.getElementById("wickets").value="0";

    }
}

function wideball(clickedwide)
{
    let prvwide = (document.getElementById("wickets").value);
    
    let curScore = parseInt(document.getElementById("runs").value);
    curScore = curScore + 1;
    document.getElementById("runs").value = curScore;
        

    }
function noball1(clickednoball)
{
    alert("free hit");
    
}