//alert('Hello World');

//変数
//let hello = 'Hello World';
//alert(hello);

//整数を代入
//let int1 = 1;
//alert(int1);

//負数を代入
//let int2 = -10;
//alert(int2);

//小数点を代入
//let float1 = 3.14;
//alert(float1);

//文字列を代入
//let str1 = 'JavaScriptを覚えよう';
//alert(str1);

//足し算
//alert(4 + 3);

//引き算
//alert(8 - 5);

//掛け算
//alert(2 * 6);

//割り算
//alert(10 / 2);

//文字列結合
//alert('Hello' + 'World');

//let str1 = 'Hello';
//let str2 = 'World';
//alert(str1 + str2);

//条件分岐
//let orange = 100;
//let apple = 120;

//if(orange < apple){
//  alert('みかんの値段がりんごより安い');
//}else if(orange == apple){
//  alert('みかんとりんごの同じ値段');
//}else{
//  alert('みかんの値段がりんごより高い');
//}

//繰り返し処理
//let max = 100;
//let num = 1;
//let count = 0;

//while(num < max){
  //num = num *2;
  //count = count + 1;
//}

//alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

//let i;
//let num = 0;
//for(i=1; i<11; i++){
//  num = num + i;
//}
//alert('1から10まで足し算した結果は' + num +'です')


//確認問題
//let num1 = (4+6);
//let num2 = (4-6);
//let num3 = (4*6);
//let num4 = (4/6);

//alert('4+6='+num1);
//alert('4-6='+num2);
//alert('4*6='+num3);
//alert('4/6='+num4);

//関数を記述
//let alertString;
//alertString = addString("WebCamp");
//alert(alertString);
//function addString(strA){
//  let addStr = "Hello " + strA;
//  return addStr;
//}

//入力ダイアログで値を入力
//let promptStr = prompt('何か好きな文字を入力してください。');
//alert(promptStr);

//複数の関数を定義する
//let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
//alert('あなたの選んだ手は' + user_hand + 'です');


//
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while((user_hand!="グー") && (user_hand!="チョキ") && (user_hand!="パー") && (user_hand!=null)){
  alert('グー・チョキ・パーのいずれかを入力してください。');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。')
}


let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);
if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}else{
  alert("またチャレンジしてね")
}

function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
       winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}