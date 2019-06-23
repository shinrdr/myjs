var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    // 球的起始座標
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    // 球的偏移
    let dx = 2;
    let dy = 2;
    // 半徑
    let ballRadius = 10;

    // 球拍定義
    let paddleHeight = 15;
    let paddleWidth = 100;
    // 球拍起始 X位置
    let paddleX = (canvas.width - paddleWidth) / 2;
    // 球拍事件狀態
    let rightPressed = false
    let leftPressed = false

    // 定義磚塊
    let brickRowCount = 4; //有幾層磚塊
    let brickColumnCount = 7; // 一排的磚塊數  
    let brickWidth = 75;
    let brickHeight = 20;
    let brickPadding = 5;
    // 偏移 : 產生時不重疊 
    let brickOffsetTop = 20;
    let brickOffsetLeft = 30;

    let score = 0

    // 存放磚塊的陣列，用幾行幾列當作迴圈數產生，第幾行第幾列的x,y為... 
    let bricks = [];
    for (c = 0; c < brickColumnCount; c++) {
      bricks[c] = [];
      for (r = 0; r < brickRowCount; r++) {
        bricks[c][r] = {
          x: 0,
          y: 0,
          status: 1
        };
      }
    }

    // 繪製球拍
    function drawPaddle() {
      ctx.beginPath()
      ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight)
      ctx.fillStyle = 'black'
      ctx.fill()
      ctx.closePath()

    }
    // 繪製球體
    function drawBall() {
      ctx.beginPath()
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();
    }

    document.addEventListener('keydown', keyDownHandler)
    document.addEventListener('keyup', keyUpHandler)

    // 判斷現在的點擊狀態
    function keyDownHandler(e) {
      if (e.keyCode == 39) {
        rightPressed = true;
      } else if (e.keyCode == 37) {
        leftPressed = true;
      }
    }

    function keyUpHandler(e) {
      if (e.keyCode == 39) {
        rightPressed = false;
      } else if (e.keyCode == 37) {
        leftPressed = false;
      }
    }

    // 磚塊產生
    function drawBricks() {
      for (c = 0; c < brickColumnCount; c++) {
        for (r = 0; r < brickRowCount; r++) {
          if (bricks[c][r].status == 1) {

            // brickX和Y 每次迴圈產生的磚塊有不同的x,y
            let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
            let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();
          }
        }
      }
    }

    // 撞擊偵測，判斷球和磚塊碰撞的狀況: 撞擊到後往反方向
    function touchCheck() {
      for (c = 0; c < brickColumnCount; c++) {
        for (r = 0; r < brickRowCount; r++) {
          let b = bricks[c][r];
          if (b.status == 1) {
            if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
              dy = -dy;
              b.status = 0;
            }
          }
        }
      }
    }

    // 移動
    function move() {
      ctx.clearRect(0, 0, canvas.width, canvas.height) // 清除畫面
      drawBall()
      drawPaddle()
      drawBricks();
      touchCheck();



      x += dx // 球的x偏移改變
      y += dy // 球的y偏移改變

      // 球碰撞牆壁的判斷: 撞到後往反方向移動
      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
      }

      if (y + dy < ballRadius) {
        dy = -dy;

      } // 如果球的y位置落在球拍高度，y往反方向，否則就是落到底下，遊戲結束 
      else if (y + ballRadius > canvas.height - paddleHeight) {
        if (x > paddleX && x < paddleX + paddleWidth) {
          dy = -dy;
        } else {
          alert("GAME OVER");
          document.location.reload();
        }
      }

      // 判斷球拍事件: 依照左右鍵按下移動球拍
      if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
      } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
      }


    }

    // 重新繪製的頻率
    setInterval(move, 10)