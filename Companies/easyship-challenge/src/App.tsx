import { input1, input2, input3 } from './data';
// import { removeNumbersPunc } from './utils';

const removeNumbersPunc = (text: string) => {
  const removeSpaces = text.replace(/(?:\r\n|\r|\n|\t)/g, ' ');
  const removePunc = removeSpaces.replace(
    /(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,
    ''
  );
  const finalSentence = removePunc.replace(/[0-9]/g, '');
  return finalSentence;
};

import './App.css';

function App() {
  interface LongestWordOccurence {
    word: string;
    numberOfOccurence: number;
  }

  function getLongestWordsOccurences(
    paragraph: string
  ): LongestWordOccurence[] {
    // code here
    let wordsMap: Record<string, number> = {};

    let wordsSet: Set<string> = new Set();

    const arrayOfWords = removeNumbersPunc(paragraph)
      .split(' ')
      .filter((word) => {
        return word.length > 1;
      });
    let maxLength: number = arrayOfWords[0].length;
    console.log(`arrayOfWords`, arrayOfWords);
    arrayOfWords.forEach((word: string) => {
      if (maxLength <= word.length) {
        if (maxLength !== word.length) {
          wordsSet.clear();
        } else {
          wordsSet.add(word);
        }
        maxLength = word.length;
        wordsSet.add(word);
        if (!wordsMap[word]) {
          wordsMap[word] = 1;
        } else {
          wordsMap[word] = wordsMap[word] + 1;
        }
      }
    });
    return Array.from(wordsSet).map((word) => {
      return {
        word,
        numberOfOccurence: wordsMap[word],
      };
    });
  }

  console.log(getLongestWordsOccurences(input1));
  console.log(getLongestWordsOccurences(input2));
  console.log(getLongestWordsOccurences(input3));

  return (
    <div className="app">
      <h2>Extract longest words with number of occurences</h2>
      <ul>
        <li>
          Return an object with ONLY the <em>longest word(s)</em>, and their
          <em>number of occurences</em>
        </li>
        <li>
          The <em>number of occurences</em> is the amount of times the word
          appears within the text
        </li>
        <li>
          Remove ALL punctuations (ie. "foobar," should be retained as "foobar")
        </li>
        <li>Remove ALL numbers (ie. "123" should NOT be retained)</li>
      </ul>
      <p>Example:</p>
      <p className="bg-gray">
        <strong>
          "This is an example sentence. For dramatic effect here is another
          sentence."
        </strong>
      </p>
      <p>should return</p>
      <p className="bg-gray">
        <strong>
          [
          <br />
          &ensp;&#123;
          <br />
          &emsp;word: "sentence",
          <br />
          &emsp;numberOfOccurences: 2
          <br />
          &ensp;&#125;,
          <br />
          &ensp;&#123;
          <br />
          &emsp;word: "dramatic",
          <br />
          &emsp;numberOfOccurences: 1
          <br />
          &ensp;&#125;
          <br />]
        </strong>
      </p>
    </div>
  );
}

export default App;
