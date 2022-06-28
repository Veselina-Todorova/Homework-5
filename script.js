alert("Добре дошли в нашия ресторант!");
   let numberOfPans        = prompt("Колко тигана има в кухнята?");
   let numberOfPots        = prompt("Колко тенджери има в кухнята?");
   let howCmWideKitchen    = prompt("Колко сантиметра е широка кухнята?");
   let howCmlongKitchen    = prompt("Колко сантиметра е дълга кухнята?");
   let howCmhighKitchen    = prompt("Колко сантиметра е висока кухнята?");
   let nameChef            = prompt("Как се казва главният готвач?");
   let howChefsWork        = prompt("Колко готвачи работят в кухнята?");
   let howWaitersWork      = prompt("Колко сервитьори работят в ресторанта?");
   let nameSauceManager    = prompt("Как се казва отговорника на сосовете ?");
   let minTempKitchen      = prompt("Каква е минималната температура в кухнята?");
   let maxTempKitchen      = prompt("Каква е максималната температура в кухнята?");
   let moneyBankAccount    = prompt("Колко парички имате в банковата си сметка?");
   let moneyDailyTurnover  = prompt("Колко парички е дневният оборот на ресторанта ви?");
   let timeOpenRestourant  = prompt("В колко часа отваряте?");
   let timeCloseRestourant = prompt("В колко часа затваряте?");

   let answerMoreQuestions = prompt("Желаете ли да отговорите на още няколко въпроса? - да/не");
    let answerMQYes = answerMoreQuestions == "да";
    let answerMQNo  = answerMoreQuestions == "не";

   let countStaff      = howChefsWork + howWaitersWork;
   let squaringKitchen = howCmWideKitchen * howCmlongKitchen;
   let cubKitchen      = howCmWideKitchen * howCmhighKitchen * howCmlongKitchen;
   let sumMOney        = moneyBankAccount + moneyDailyTurnover;

    
      
if (answerMQYes){
    let isHaveRefigerator = prompt("Разполагате ли с хладилник?");
      let refrigatorYes   = isHaveRefigerator == "да";
      let refrigatorNo    = isHaveRefigerator == "не";           
    let isHaveGasStove    = prompt("Разполагате ли с газов котлон?");
      let gasStoveYes     = isHaveGasStove == "да";
      let gasStoveNo      = isHaveGasStove == "не"; 
    let isHaveCombiOven   = prompt("Разполагате ли с конвектомат?");
      let combiOvenYes    =isHaveCombiOven == "да";
      let combiOvenNo     = isHaveCombiOven == "не"; 
    let isHaveElGrill     = prompt("Разполагате ли с електрическа скара?");
      let elGrilYes       = isHaveElGrill == "да";
      let elGrilNo        = isHaveElGrill == "не"; 
    let isHaveAspirator   = prompt("Разполагате ли с аспиратор?");
      let aspiratorYes    = isHaveAspirator == "да"; 
      let aspiratorNo     = isHaveAspirator == "не";  
  
  alert("Здравейте, време е да изберете какво желаете да поръчате от нашето меню? ");


 let choiceDish = prompt("Изберете ястие? - 1 - месо / 2 - вегетарианско / 3 - десерт");
    if(choiceDish == dish.MEAT){
        alert ("Моля, изберете грамажа на вашата порция, като попълнете съотвения номер на избрания от Вас грамаж в полето?");
        let portion = prompt ("1 - Малка порция(450гр), 2 - Средна порция (750гр), голяма порция (950гр)");
        let methodOfCook = prompt ("Моля, изберете степен на изпичане на месото? 1-Rare , 2-Medium , 3-Well Done");
            if(methodOfCook == meatMethod.RARE){
               let conditionRare = gasStoveNo && 
                                   elGrilYes && 
                                   aspiratorYes &&
                                   (portion = meatPortion.LITTLEP) &&
                                   minTempKitchen >35 && 
                                   maxTempKitchen <49;
               
               if( conditionRare){
                  alert(messages.SUCCESSFUL);
               }
               else {
                  alert(messages.FAILED);
               }
              }

            if(methodOfCook == meatMethod.MEDIUM){
               let conditionMedium = combiOvenYes &&
                                      countStaff && 
                                      (portion = meatPortion.MEDIUMP) && 
                                      nameChef=="иван"
               if(conditionMedium){
                   alert(messages.SUCCESSFUL);
                }
               else {
                   alert(messages.FAILED);
                }
               }
             if(methodOfCook == meatMethod.WELL_DONE){
                let conditionWell = timeCloseRestourant==22 &&
                                    nameSauceManager=="петър"||"радо" &&
                                    (numberOfPans==3 || numberOfPots==2) ||
                                    squaringKitchen;
               if(conditionWell){
                    alert(messages.SUCCESSFUL);
                  }
               else {
                    alert(messages.FAILED);
                  }

            }
            }
    if (choiceDish == dish.VEGETARIAN){
            let vtype = prompt("Моля, изберете вид ястие: 1 - Вегетарианско , 2 - Веганско, 3 - Пескатерианско");
              if(vtype == vegtype.VEGET){
                let conditionVeget = combiOvenNo ||
                                     elGrilNo ||
                                     aspiratorNo;
                  if(conditionVeget){
                    alert(messages.SUCCESSFUL);
                  }
                  else {
                    alert(messages.FAILED);
                  }
                }
              
              if(vtype == vegtype.VEGAN){
                let conditionVegan = refrigatorYes &&
                                     nameChef == "Манол" &&
                                     howChefsWork >=3 && 
                                     howChefsWork <11 &&
                                     howWaitersWork !=7;
                  if(conditionVegan){
                    alert(messages.SUCCESSFUL);
                  }
                  else{
                    alert(messages.FAILED);
                  }
              }
              if (vtype == vegtype.PESKAT){
                let conditionPeskat = elGrilYes &&
                                      answerMQYes &&
                                      cubKitchen <13 &&
                                      sumMOney <158000;
                  if(conditionPeskat){
                    alert(messages.SUCCESSFUL);
                  }
                  else{
                    alert(messages.FAILED);
                  }             

              }
              }
    if(choiceDish == dish.DESSERT){
      let desertType = prompt("Имаме два вида десерт, които можем да Ви предложим: 1 - Торта и 2 - Сладолед");
      let sugar = prompt("Извинявайте за въпроса, но пристрастени ли сте към захарта?");
        let sugarYes = sugar == "да";
        
               if(desertType == destype.CAKE){
                 let conditionCake = (refrigatorYes &&
                            timeCloseRestourant == 19 &&
                            aspiratorNo &&
                            moneyBankAccount >15000 &&
                            moneyBankAccount <50000) ||
                            nameChef == "румен";
                  if(conditionCake){
                    alert(messages.SUCCESSFUL);                 
                  }
                  else{
                    alert(messages.FAILED);
                  }
        }
              if(desertType == destype.ICECREAM){
                let taste = prompt("Изберете един от следните вкусовве : 1-Ягода , 2-Банан , 3-Ванилия");
                let conditionIce = !sugarYes ||
                                   icetaste.STRAWB;

                  if(conditionIce){
                    alert(messages.SUCCESSFUL);
                  }
                  else{
                    alert(messages.FAILED);
                  }
              }
    }         

}
if (answerMQNo){
  

  let refrigatorNo = "не";      
  let gasStoveNo = "не";
  let combiOvenNo = "не";
  let elGrilNo = "не";
  let aspiratorNo = "не";



  alert("Здравейте, време е да изберете какво желаете да поръчате от нашето меню? ");


 let choiceDish = prompt("Изберете ястие? - 1 - месо / 2 - вегетарианско / 3 - десерт");
    if(choiceDish == dish.MEAT){
        alert ("Моля, изберете грамажа на вашата порция, като попълнете съотвения номер на избрания от Вас грамаж в полето?");
        let portion = prompt ("1 - Малка порция(450гр), 2 - Средна порция (750гр), голяма порция (950гр)");
        let methodOfCook = prompt ("Моля, изберете степен на изпичане на месото? 1-Rare , 2-Medium , 3-Well Done");
            if(methodOfCook == meatMethod.RARE){
               
                  alert(messages.FAILED);
               }
              

              if(methodOfCook == meatMethod.MEDIUM){
               
                   alert(messages.FAILED);
                }
               
               if(methodOfCook == meatMethod.WELL_DONE){
                let conditionWell = timeCloseRestourant==22 &&
                                    nameSauceManager=="петър"||"радо" &&
                                    (numberOfPans==3 || numberOfPots==2) ||
                                    squaringKitchen;
                  if(conditionWell){
                    alert(messages.SUCCESSFUL);
                  }
                   else {
                    alert(messages.FAILED);
                  }

            }
          }
    if (choiceDish == dish.VEGETARIAN){
            let vtype = prompt("Моля, изберете вид ястие: 1 - Вегетарианско , 2 - Веганско, 3 - Пескатерианско");
              if(vtype == vegtype.VEGET){
                let conditionVeget = combiOvenNo ||
                                     elGrilNo ||
                                     aspiratorNo;
                  if(conditionVeget){
                    alert(messages.SUCCESSFUL);
                  }
                  else {
                    alert(messages.FAILED);
                  }
                }
              
              if(vtype == vegtype.VEGAN){
                
                    alert(messages.FAILED);
                  
              }
              if (vtype == vegtype.PESKAT){
                
                    alert(messages.FAILED);
                            

              }
              }
    if(choiceDish == dish.DESSERT){
      let desertType = prompt("Имаме два вида десерт, които можем да Ви предложим: 1 - Торта и 2 - Сладолед");
      let sugar = prompt("Извинявайте за въпроса, но пристрастени ли сте към захарта?");
      let sugarYes = sugar == "да";
        
               if(desertType == destype.CAKE){
                 
                    
                  
                    alert(messages.FAILED);
                
        }
              if(desertType == destype.ICECREAM){
                let taste = prompt("Изберете един от следните вкусовве : 1-Ягода , 2-Банан , 3-Ванилия");
                let conditionIce = !sugarYes ||
                                   icetaste.STRAWB;

                  if(conditionIce){
                    alert(messages.SUCCESSFUL);
                  }
                  else{
                    alert(messages.FAILED);
                  }
              }
    }         
  }     