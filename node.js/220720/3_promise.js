function promise1(flag){
    return new Promise((resolve, reject) => {
        if(flag) {
            resolve( " than 으로 연결" );
        } else {
            reject (" catch로 연결" );
        }
    });
}

promise1(true)
    .then( function(result){
        console.log( "then :", result );
    })
    .catch( function(err){
        console.log(" catch : ", err );
    });

promise1(false)
.then( function(result){
    console.log( "then :", result );
})
.catch( function(err){
    console.log(" catch : ", err );
})