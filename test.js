$("#reg").click(function () {
  let msg = {
    account: $("#account").val(),
    password: $("#password").val(),
    email:$("#email").val()
  };
  $.post("http://127.0.0.1:9696/register",msg,function(res,status){
    $("#success_reg").html(`${res.account}注册成功`)
  })
});

$("#log").click(function(){
    let msg = {
        account: $("#account").val(),
        password: $("#password").val()
    }
    $.post("http://127.0.0.1:9696/login",msg,function(res,status){
        $("#success_log").html(`${res.account}<br/>Welcome`)
            msg = {
                account:res.account
            }
            $.post("http://127.0.0.1:9696/ps",msg,function(res,status){
            $("#ps").html(`${res}`)
        })
    })
})

$("#commit").click(function(){
    let msg = {
        account:$("#success_log").html().split("<")[0],
        title:$("#title").val(),
        article:$("#content").val()
    }
    $.post("http://127.0.0.1:9696/pw",msg,function(res,status){
        alert(`post created successfully`)
    })

})