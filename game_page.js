playeronename=localStorage.getItem("player1key")
playertwoname=localStorage.getItem("player2key")
playeronescore=0
playertwoscore=0
document.getElementById("player1name").innerHTML=playeronename+" : ";
document.getElementById("player2name").innerHTML=playertwoname+" : ";
document.getElementById("player1score").innerHTML=playeronescore;
document.getElementById("player2score").innerHTML=playertwoscore;
document.getElementById("player_question").innerHTML="questionTurn:"+playeronename
document.getElementById("player_answer").innerHTML="answerTurn:"+playertwoname
function send(){
    get_word=document.getElementById("word").value
    word=get_word.toLowerCase()
    console.log(word)
    char_1=word.charAt(1)
    console.log (char_1)
    char_2=word.charAt(Math.floor(word.length/2))
    console.log(char_2)
    char_3=word.charAt(word.length-1)
    console.log (char_3)
    ul_1=word.replace(char_1,"_")
    ul_2=ul_1.replace(char_2,"_")
    ul_3=ul_2.replace(char_3,"_")
    console.log(ul_3)
    q="<h4 id='word_display'>q:"+ul_3+"</h4>";
    inp="<br><input class='form-control' placeholder='enter your answer' id='input_box'>"
    btn="<br><button class='btn btn-info' onclick='check()'>check</button> "
    document.getElementById("output").innerHTML=q+inp+btn
    document.getElementById("word").value=""
}
questionTurn ="player1"
answerTurn="player2"
function check() {
    get_answer=document.getElementById("input_box").value
    answer=get_answer.toLowerCase();
    console.log (answer);
    if(answer==word){
        if(answerTurn=="player1"){
            playeronescore=playeronescore+1;
            document.getElementById("player1score").innerHTML=playeronescore;
        }
        else{
            playertwoscore=playertwoscore+1
            document.getElementById("player2score").innerHTML=playertwoscore;
        }
    }
    if(questionTurn=="player1"){
        questionTurn="player2"
        document.getElementById("player_question").innerHTML="questionTurn:"+playertwoname
    }
    else{
        questionTurn="player1"
        document.getElementById("player_question").innerHTML="questionTurn:"+playeronename
    }
    if(answerTurn=="player1"){
        answerTurn="player2"
        document.getElementById("player_answer").innerHTML="answerTurn:"+playertwoname
    }
    else{
        answerTurn="player1"
        document.getElementById("player_answer").innerHTML="answerTurn:"+playeronename
    }
    document.getElementById("output").innerHTML=""
}