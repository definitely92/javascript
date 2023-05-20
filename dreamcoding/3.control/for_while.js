//   for (let i = 0; i < 7; i++) {
//     for (let h = 0; h < 7; h++) {
//         console.log(i,h);
//     }
//   }

  for (let i = 0; i < 20; i++) {
        if (i === 10) {
            continue;
            console.log('10입니다.');
            break;
            
        }
        console.log(i);
  }



  let isOn = true;
  let j = 0;
  while (isOn) {
    console.log(j + '활동중');
    j++;
    if (j === 10) {
      break;
    }
    
  }