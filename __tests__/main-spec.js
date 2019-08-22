const {countProducts,
    fetchProduct,
    generateReceiptItems,
    countTotalPrice,
    assemble}= require('../main');

it('show count codes',()=>{
  //given
  const code=["0001","0003","0003"];
  //when
  const countCodes=countProducts(code);
  //then
  expect(countCodes[1].count).toBe(2);
});

it('should fetch product',()=>{
    //given
    const codes="0001";
    //when
    const result=fetchProduct(codes);
    //then
    expect(result.price).toBe(3);
  });

  it("结果验证",()=>{
    const codes=["0001","0003","0003"];
    const receiptArray=generateReceiptItems(codes);
    // console.log("receiptArray:",receiptArray);
    const countTotalPriceInput=[
        { name: 'Pepsi-Cola', price: 5, count: 2 },
        { name: 'Coca Cola', price: 3, count: 1 } ];
        const priceSum=countTotalPrice(countTotalPriceInput);
      //  console.log(priceSum);
        var receiptText=assemble(countTotalPriceInput,priceSum);
       // console.log("receiptText:",receiptText);      
  });
