export let contests = [{
  id: 1,
  name: 'WindOJ Test Round',
  abstract: 'Test round',
  description: '<p>这场比赛很好玩啊！大家都要来啊！</p>',
  enrollTime: new Date('2016/07/03 9:00').getTime(),
  startTime: new Date('2016/07/14 7:00').getTime(),
  endTime: new Date('2016/07/14 21:00').getTime(),
  isAvailable: true,
  problems: [{ id: 1, name: 'A+B Problem', judge: { sum: 100 }}, { id: 1, name: 'A+B Problem', judge: { sum: 100 }}, { id: 1, name: 'A+B Problem', judge: { sum: 100 }}],
  notifications: [
    { origin: { id: 1, name: 'SkyZH'}, time: Date.now(), message: 'A 题有更改。'},
    { origin: { id: 1, name: 'SkyZH'}, time: Date.now(), message: 'B 题有更改。'},
    { origin: { id: 1, name: 'SkyZH'}, time: Date.now(), message: 'C 题有更改。'},
    { origin: { id: 1, name: 'SkyZH'}, time: Date.now(), message: 'D 题有更改。'}]
}, {
  id: 2,
  name: 'EFZ #1',
  abstract: 'Very easy round',
  description: '<p>这场比赛很好玩啊！大家都要来啊！</p>',
  enrollTime: new Date('2016/07/14 19:00').getTime(),
  startTime: new Date('2016/07/15 19:00').getTime(),
  endTime: new Date('2016/07/15 21:00').getTime(),
  isAvailable: true
}, {
  id: 3,
  name: 'EFZ #2',
  abstract: 'Very difficult round',
  description: '<p>这场比赛很好玩啊！大家都要来啊！</p>',
  enrollTime: new Date('2016/07/15 19:00').getTime(),
  startTime: new Date('2016/07/16 19:00').getTime(),
  endTime: new Date('2016/07/16 21:00').getTime(),
  isAvailable: true
}];
