document.addEventListener('DOMContentLoaded', function () {
    // 画像配列の定義
    const images = [
        'Kazuya',
        'TRAN Huu Thang',
        '克彦',
        '勝',
        'うちやまきよし',
        '潔',
        '崇紘',
        '内山',
        '保科',
        // ...他の画像ファイル名を追加
    ];

    // ランダムに画像を選択
    const randomImage = images[Math.floor(Math.random() * images.length)];
    
    // シルエット画像と通常画像のパスを更新
    const silhouetteImg = document.querySelector('img');
    const normalImg = document.getElementById('normalImage');
    const answerText = document.getElementById('answerText');
    
    silhouetteImg.src = `Who/Who silhouette/${randomImage}.jpg`;
    normalImg.src = `Who/Who normal/${randomImage}.jpg`;

    // 正解テキストを設定
    answerText.textContent = `やったね。${randomImage}だよ。`;

    // ボタンクリックの処理
    const btn = document.getElementById('answerBtn');
    if (btn && normalImg) {
        btn.addEventListener('click', function () {
            normalImg.style.display = 'block';
            answerText.style.display = 'block';  // テキストも表示
        });
    } else {
        console.warn('button or image element not found');
    }

});



