import test from 'node:test';
import assert from 'node:assert/strict';
import { questions, gods, calculateType } from './data.js';

test('12개 문항은 각 MBTI 축을 홀수인 3번씩 묻고 16개 결과를 모두 정의한다', () => {
  assert.equal(questions.length, 12);
  for (const axis of ['EI', 'SN', 'TF', 'JP']) {
    assert.equal(questions.filter(question => question.axis === axis).length, 3);
  }
  assert.equal(Object.keys(gods).length, 16);
  for (const type of Object.keys(gods)) {
    const answers = questions.map(question => question.choices.find(choice => choice.value === type[['EI', 'SN', 'TF', 'JP'].indexOf(question.axis)]).value);
    assert.equal(calculateType(answers), type);
  }
});

test('누락되거나 문항과 맞지 않는 답변은 거부한다', () => {
  const answers = questions.map(question => question.choices[0].value);
  assert.throws(() => calculateType(answers.slice(1)));
  answers[0] = 'X';
  assert.throws(() => calculateType(answers));
});
