for (var i = 0; i < 3; ++i) {
  function loop(){
    var j = i;
    setTimeout(()=>{
      console.log(j);
    },1000);

  }
  loop();
}