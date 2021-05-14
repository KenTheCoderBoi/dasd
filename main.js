choice1=""
choice2=""
Webcam.set({
    width:300,
    height:350,
    image_format:"png",
    png_quality:90
})
camera=document.getElementById("camera")

Webcam.attach(camera)
 
function takepic(){
    Webcam.snap(function(data_uri){
    document.getElementById("output").innerHTML = "<img id='taken_image' src="+data_uri+">"
    })
}
console.log("ml5version",ml5.version)
version = ml5.imageClassifier("teachablemachine.withgoogle.com/models/DqNX4Qu2b/model.json",ml5thing)
function ml5thing(){
    console.log("modelloaded")
}
function speak(){
    var synth = window.speechSynthesis
    phrase1= "we think you are"+choice1
    phrase2= "if you weren't"+choice1+", you might be"+choice2
    var utterthis= new SpeechSynthesisUtterance(phrase1+phrase2)
    synth.speak(utterthis)
}