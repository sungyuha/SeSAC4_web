function Event() {
    function clickEvent(e) {
        console.log( e );

        // let list = ['a', 'b', 'c'];
        // list.map((value, index, arr) => {
        //     console.log( value );
        //     console.log( index );
        //     console.log( arr );
        //     return value + index;
        // })
        // console.log(newList);
    }
    function aClick(e){
        e.preventDefault();
        console.log( "aClick" );
        console.log( e );
    }
    return (
        <div>
            <a href="#" onClick={aClick}>a태그</a>
            <button onClick={clickEvent}>클릭</button>
        </div>
    )
}

export default Event;