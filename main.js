const db=[
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];
// 计算条形码codes出现的次数
function countProducts(codes) {
  let result=[];  
   let map=new Map();
   for (let i = 0; i < codes.length; i++) {
      if(!map.has(codes[i])){ //没有含有该id
          map.set(codes[i],{//map集合中是一个对象 item  count 
            item:codes[i],
            count:1
          });
      }else{
        map.set(codes[i],{
            item:codes[i],
            count:map.get(codes[i]).count+1
          });  
      }    
   }
   map.forEach(function(value){ //获取的是map中的value值
    result.push(value);
   });
 return result;
}
//输入一个字符，输出一个对象{name,price}
function fetchProduct(code){  
     let obj={};
     for(let j = 0; j < db.length; j++){
     if(code===db[j].id){
      obj.name=code;
      obj.price=db[j].price;  
     }
     break;
     }  
 
 return obj;
}
//生成菜单条目的内容，需要输出[{name price count}]
function generateReceiptItems(codes){
 let result=[];
 const barcodesArray=countProducts(codes);
 for (let i = 0; i < barcodesArray.length; i++) {
  let obj=fetchProduct(barcodesArray[i].item);
  result.push({
    name:obj.name,
    price:obj.price,
    count:barcodesArray[i].count
  });  
  }
  return result;
}
// 计算总价格，输入数组[{name price count}]
function countTotalPrice(countTotalPriceInput){
  let princeSum=0;
  countTotalPriceInput.forEach(function(item){
    princeSum+=item.price*item.count;
  });
  return princeSum;
}
// 输出打印小票的内容
function assemble(countTotalPriceInput,priceSum){
 result="Receipts\n-------------------\n";
 countTotalPriceInput.forEach(function(item){
  result+=item.name+"\t"+item.price+"\t"+item.count+"\n";
 });
 result+="-------------------\nPrice: "+priceSum;
 return result;
}

module.exports = {countProducts,
    fetchProduct,
    generateReceiptItems,
    countTotalPrice,
    assemble
};