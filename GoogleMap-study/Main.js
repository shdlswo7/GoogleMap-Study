function sendInput(){
    var hospitalCheck = document.getElementById("hospital").checked
    var mallCheck = document.getElementById("mall").checked
    var hotelCheck = document.getElementById("hotel").checked
    var cafeCheck = document.getElementById("cafe").checked
    
    var input = document.getElementById("input").value;


    if(hospitalCheck === true){
        input += ' 동물병원'   
    }
    if(mallCheck === true){
        input += ' 애완용품'   
    }
    if(hotelCheck === true){
        input += ' 애완호텔'   
    }
    if(cafeCheck === true){
        input += ' 애완카페'   
    }

    location.href = 'Map.html?input=' + input;

}

function sendCheck(){

    var temp;
    var hospitalCheck = document.getElementById("hospital").checked
    var mallCheck = document.getElementById("mall").checked
    var hotelCheck = document.getElementById("hotel").checked
    var cafeCheck = document.getElementById("cafe").checked

    if(hospitalCheck === true){
        temp = '동물병원'   
    }
    if(mallCheck === true){
        temp = '애완용품'   
    }
    if(hotelCheck === true){
        temp = '애완호텔'   
    }
    if(cafeCheck === true){
        temp = '애완카페'   
    }

    location.href = 'CurrentLocation.html?input=' + temp;
}