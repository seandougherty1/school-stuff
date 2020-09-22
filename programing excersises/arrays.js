//beta code

let mealDeal = ['Bacon and Lettuce', 'Chicken triple', 'Ham and Cheese', ]
for(let i = 0; i < mealDeal.length; i++) {
    console.log('My #' + (i + 1) + ' choice is ' + mealDeal[i])
}


//alpha code

for (let i = 0; i < mealDeal.length; i++) {
    let choiceNum = i + 1;
    let choiceNumSuffix;
    if (choiceNum == 1) {
        choiceNumSuffix = 'st';
    } else if (choiceNum == 2) {
        choiceNumSuffix = 'nd';
    } else if (choiceNum == 3) {
        choiceNumSuffix = 'rd';
    } else {
        choiceNumSuffix = 'th';
    } 
    console.log('My ' + choiceNum + choiceNumSuffix + ' choice is ' + mealDeal[i]);
}
