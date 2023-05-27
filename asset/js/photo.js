$("#upload").change(function(e){
    var fileData = e.target.files[0]
    // console.log(fileData)
    console.log(fileData)
    console.log("name: "+fileData.name)
    console.log("size: "+fileData.size)
    console.log("type: "+fileData.type)
    
  })
$("#upload").change(function(e){
    var fileData = e.target.files[0]
    //讀取檔案內容
    var reader = new FileReader();
    reader.readAsDataURL(fileData);
    reader.addEventListener("load",function(event){
        $("#show").replaceWith(`<div id="show" class="imageset"><img id="myphoto" src="${event.target.result}" width="100%"></div>`);
    })
})