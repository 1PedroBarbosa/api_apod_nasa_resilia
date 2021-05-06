let url = "https://api.nasa.gov/planetary/apod?api_key=ECqNDAoIEJPgFz6aCyax0d5XStzTBVTm4QD3YykI";

function searchBtn(){
    let data = $("#insertDate").val();
        $.ajax({url: url+"&date="+data,
        success: function(result){
        space(result);
                } 
        });
};

function space(obj){
    let spImg = obj.url
    let cosmoImg = JSON.stringify(obj.media_type);
    console.log(cosmoImg);
    
        
    if (cosmoImg === '"image"') {
        $("iframe").css("display", "none")
        $("img").attr("src", spImg)
        $("img").css("display", "block")
    }
    else{
        $("img").css("display", "none")
        $("iframe").attr("src", spImg);
        $("iframe").css("width", "640px")
        $("iframe").css("height", "480px")
        $("iframe").css("display", "block")
    }
}
