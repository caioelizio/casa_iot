function myFunc() {
    this.a = 'hello'

    console.log(this.a)

//    setInterval(function(){
    setInterval(() => {
        console.log(this.a)
    }, 1000)
}

myFunc()

/*
cosnt teste = () => {
    console.log('Inside arrow function')
}


test()

*/