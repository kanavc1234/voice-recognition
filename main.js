function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/bTRlHrXej/model.json',modelReady)

}

function modelReady(){
   classifier.classify(gotResults);

}

function gotResults(error,results){
console.log('Got REsults');
}
