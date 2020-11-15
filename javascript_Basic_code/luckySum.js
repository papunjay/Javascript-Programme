function luckySum(a,b,c){
    if(a==13){
        return b+c;
    }
    else if(b==13){
        return a+c;
    }
    else if(c==13){
        return b+a;
    }
    else{
        return a+b+c;
    }
}