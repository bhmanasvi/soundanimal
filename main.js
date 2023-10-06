
function start()
    {
       navigator.mediaDevices.getUserMedia({audio:true});
       classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HiXBn2XuQ/model.json',Modelready);
    }

function Modelready()
{
    classifier.classify(gotresult);
}

function gotresult(error,result)
{
if(error){
    console.log(error);
}
else{
    console.log(result);


    img1 =  document.getElementById("dog");
    img2 =  document.getElementById("cat");
    img3 =  document.getElementById("wolf");
    

    if(result[0].label=="dog"){
        img.src = "dog1.jpg";
    }

    else if(result[0].label=="cat"){
       
        img.src = "cat1.jpg";
        
    }

    else if(result[0].label=="wolf"){
       
        
        img.src = "wolf1.jpg";
       
    }
    else{

        img.src = "download.jfif"
    }
   
}
}