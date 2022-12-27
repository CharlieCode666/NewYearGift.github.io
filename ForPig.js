src = [
    "https://www.peanutimes.com/upload/article/original/1b8d8b02d3cffa8d8839399e7deef2e0.jpg",
    "https://www.peanutimes.com/upload/article/original/a3522074b8a710bdab314dc6c5bf70dc.jpg",
    "https://www.peanutimes.com/upload/article/original/a48760c344b72e88f7eaded87a914acf.jpg",
    "https://www.peanutimes.com/upload/article/original/6c2a2ad7a3aa392e712dbabc8bdb9ad7.jpg",
    "https://www.peanutimes.com/upload/article/original/df2f58cbf8a7913a9bc5bfecfdb133fe.jpg",
    "https://www.peanutimes.com/upload/article/original/325464a9dabff6772a70ec03de2f510c.jpg"
];

var i = 1

function href(){

    for(i; i<=10; i++){

        // window.open("https://www.peanutimes.com/upload/article/original/1b8d8b02d3cffa8d8839399e7deef2e0.jpg");

        var num = Math.floor(Math.random() * i);

        if(num > src.length){
            num = num%2;
        }

        window.open(src[num]);
    }
}