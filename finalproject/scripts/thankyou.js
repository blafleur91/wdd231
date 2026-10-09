import './navigation.mjs';

const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<h1>Thank You For Submitting a Missing Set!</h1>
<p><strong>Set Name:</strong> ${myInfo.get('sName')}</p>
<p><strong>Set Number:</strong> ${myInfo.get('sNumber')}</p>
<p><strong>Piece Count:</strong> ${myInfo.get('pCount')}</p>
<p><strong>Year Released:</strong> ${myInfo.get('year')}</p>
`;