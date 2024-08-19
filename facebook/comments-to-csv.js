/* 
* Prerequisites
* Show all comments
* Change WRAPPER_SELECTOR and COMMENT_SELECTOR according to the current FB HTML
*/

WRAPPER_SELECTOR = '#mount_0_0_68 > div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.xeuugli.x2bj2ny.x85a59c.x1t2pt76.x12slza2.x1dqk2q1.x1mnsmir > div > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x2bj2ny.x3igimt.xxc7z9f.x1gvwcb.xusdqos > div > div.x78zum5.xdt5ytf.x1iyjqo2.x1n2onr6 > div.html-div.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x18d9i69.x1swvt13.x1pi30zi > div';
COMMENT_SELECTOR = '.x1lliihq.xjkvuk6.x1iorvi4';

/*
* Select wrapper div for all comments
* Get all comment divs
* Extract author of comment
* Extract comment
* Zip author and its comment together
* Generate CSV-like string
* Generate blob file with anchor element and click on it to download
*/

const allChildren = document.querySelector(WRAPPER_SELECTOR).children;
const comments = [...allChildren].slice(2)
const names = comments.map(c => c.querySelector('[aria-label]').getAttribute('aria-label').split('Komentár od: ')[1]).map(c => c ? c.split('(')[0].trim() : c)
const comment = comments.map(c => c.querySelector(COMMENT_SELECTOR)?.innerText)
const combo = comments.map((c, i) => [names[i], comment[i]])
const out = `name;comment\n${combo.map(c => c.join(';')).join('\n')}`
const blob = new Blob([out], { type: 'text/csv:charset=utf-16;' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a')
a.href = url;
a.setAttribute('download', 'export.csv');
a.click();