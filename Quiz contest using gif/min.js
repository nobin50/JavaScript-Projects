function myfun(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var count = 0;

    if(question1 == "Bangladesh")
    {
        count++;
    }
    if(question2 == "javascript"){
        count++;
    }
    if(question3 == "php"){
        count++;
    }

    message = ['Get some knowledge','You are a noob beginner','Practise more','Great to have you'];
    image = ['img/img0.gif','img/img1.gif','img/img2.gif','img/img3.gif'];
    
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("para1").innerHTML = message[count];
    document.getElementById("para2").innerHTML = "Your point is " +count;
    document.getElementById("image").src = image[count];
}