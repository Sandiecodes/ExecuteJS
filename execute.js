function func3() {
    console.log("3 invoked")
}

function func2(){
    setTimeout(() => {
    console.log("2 invoked");
}, 3000);
}

function func1() {
    console.log("1 invoked")
}

func1()
func2()
func3()
