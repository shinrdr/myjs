let year= document.getElementById('year').value;

year = parseInt(year)
if(year % 4 ===0 ){
    if(year % 100 == 0 ) {
        if(year % 400 === 0){
            //28
        }else {
            //29
        }
    }else {
        //29
    }
} else {
    //28

    // 被4整除 ->閏年 29
    // 被100整除 -> 不閏年 28
    // 被400整除 -> 閏年 29

    //二分法邏輯
    //先判斷是否被4整除，是:閏年、否:28
    //在前者之中，被100整除的為例外，所以在進行二分法，
    //依序縮小範圍
