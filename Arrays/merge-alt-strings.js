// Leetcode:
// https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75

export const mergeAltStrings = (word1, word2) => {
  let res = ''
  for (let i = 0; i < word1.length + word2.length; i++) {
    res = `${res}${word1[i] ?? ''}${word2[i] ?? ''}`
  }
  return res;
}


const head2 = new Node(1);
const second2 = new Node(2);
const thrid3 = new Node(3);
const fourth4 = new Node(4);
const fifth5 = new Node(5);
const sixth6 = new Node(6);
const seventh7 = new Node(7);
const eighth8 = new Node(8);

head2.next = second2;
second2.next = thrid3;
thrid3.next = fourth4;
fourth4.next = fifth5;
fifth5.next = sixth6;
sixth6.next = seventh7;
// seventh7.next = null;
seventh7.next = eighth8;
eighth8.next = null;

console.log(mergeAltStrings("ab", "pqrs"));