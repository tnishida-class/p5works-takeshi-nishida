// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)

      if(/* 黒マスになる条件：ヒントビデオ見てね */){ 
        fill(128); // fill(0) だと真っ黒になって黒丸が見えなくなってしまう
      }
      else{
        fill(255); // white
      }
      rect(size * i, size * j, size, size);

      if(/* 赤い丸を描く条件は「黒マス && 最初の三行かどうかをjを使って判定」 */){ 
        ellipse(???, ???, size, size);
      }
      if(/* 黒い丸も同様に考えてみましょう */){
        ellipse(???, ???, size, size);
      }

    }
  }
}
