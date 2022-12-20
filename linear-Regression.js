function regression_line(x,y){
    //your code here
    let a, b, MeanX, MeanY, n = x.length;
    MeanX = calcMean(x, n);
    MeanY = calcMean(y, n);
    
    a = getCov(x, y, MeanX, MeanY) / getVariance(x, MeanX);
    b = MeanY - a * MeanX;
    
    return [getFloat2(a), getFloat2(b)];
  }
  
  function getCov(X, Y, MeanX, MeanY){
    let n = X.length;
    let cov = 0;
    cov = X.reduce((a, e, i)=> a + e * Y[i], 0);
    cov -= n * MeanX * MeanY;
    return cov;
  }
  
  function calcMean(arr, n){
    let sum = arr.reduce((a, e)=> a + e, 0);
    return sum / n;
  }
  
  function getVariance(arr, MeanVal){
    return arr.reduce((a, e)=> a + Math.pow((e - MeanVal), 2), 0);
  }
  
  function getFloat2(num){
    let str = num.toString().split(".");
    str[1] = str[1].slice(0, 4);
    return parseFloat(str.join("."));
  }