import Vue from 'vue';

Vue.filter('cardNumber', number => {
  if (!number) return '';
  const numberBlocks = number.split(' ');
  const numberBlockToBeHidden = numberBlocks.slice(0, -1);
  const preparedBlocks = numberBlockToBeHidden.map(() => '****');
  preparedBlocks.push(numberBlocks[numberBlocks.length - 1]);
  return preparedBlocks.join(' ');
});
