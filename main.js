function showLove() {
    let iLoveYouText = document.getElementById('iloveyouText');
    let loveCount = 100;
    let loveText = '';
    for (let i = 1; i <= loveCount; i++) {
        loveText += 'I love you in ❤️ ' + i + 'x<br>';
    }
    iLoveYouText.innerHTML = loveText;
}