function solution(friends, gifts) {
  const sentAndReceivedObj = {};
  const giftsIndicesObj = {};
  const addReceivedObj = {};

  // 초기화
  friends.forEach((friend) => {
    sentAndReceivedObj[friend] = {};
    giftsIndicesObj[friend] = [0, 0, 0];
    addReceivedObj[friend] = 0;
  });

  // 선물 카운팅
  gifts.forEach((gift) => {
    const [giver, receiver] = gift.split(" ");

    sentAndReceivedObj[giver][receiver] =
      (sentAndReceivedObj[giver][receiver] || 0) + 1;

    giftsIndicesObj[giver][0] = giftsIndicesObj[giver][0] + 1;
    giftsIndicesObj[receiver][1] = giftsIndicesObj[receiver][1] + 1;
  });

  // 선물 지표 계산
  friends.forEach((friend) => {
    giftsIndicesObj[friend][2] =
      giftsIndicesObj[friend][0] - giftsIndicesObj[friend][1];
  });

  for (const outerFriend of friends) {
    for (const innerFriend of friends) {
      if (outerFriend === innerFriend) continue;

      const giverCount = sentAndReceivedObj[outerFriend][innerFriend] || 0;
      const receiverCount = sentAndReceivedObj[innerFriend][outerFriend] || 0;

      const giverGiftIndices = giftsIndicesObj[outerFriend][2];
      const receiverGiftIndices = giftsIndicesObj[innerFriend][2];

      if (giverCount > receiverCount) {
        addReceivedObj[outerFriend]++;
      }

      if (giverCount < receiverCount) {
        addReceivedObj[innerFriend]++;
      }

      if (giverCount === receiverCount) {
        if (giverGiftIndices === receiverGiftIndices) {
          continue;
        }

        if (giverGiftIndices > receiverGiftIndices) {
          addReceivedObj[outerFriend]++;
        }
        if (giverGiftIndices < receiverGiftIndices) {
          addReceivedObj[innerFriend]++;
        }
      }
    }
  }

  return Math.floor(Math.max(...Object.values(addReceivedObj)) / 2);
}
