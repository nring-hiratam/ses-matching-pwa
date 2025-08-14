function generateText() {
    const tech = document.getElementById("tech").value.trim();
    const price = document.getElementById("price").value.trim();

    if (!tech || !price) {
        alert("技術分野と単金を入力してください。");
        return;
    }

    const template = `■ マッチング
- 検索対象スキル: ${tech}
- 案件の単金: ${price}万

■ 依頼
マッチング条件に基づき、ソース（メールデータ）からマッチした組み合わせを5セット抽出・整理してください。

■ マッチング条件（カスタム指示の基本ルールに加え、以下を考慮）:
- スキル/経験の一致度を最優先してください。
- 単金は案件の単金より人材の単金が5～10万低くなるように設定してください。
- 商流が弊社まで、貴社までの場合はそのメールを除外してマッチングしてください。
- 送信者がボールド、アストロ、エンジニアのミカタ、アイビスの場合はそのメールを除外してマッチングしてください。

■ 出力形式
マッチした組み合わせごとに、ソースから以下の情報を抽出し、引用付きで要約してください。
--- 案件メール {番号} --- 送信日時: {日時} 送信者: {氏名} 会社: {会社名} 
    メール本文サマリー: {案件概要、必須スキル、単金情報(スキル見合い含む)} (引用: {引用元})

--- 人材メール {番号} --- 送信日時: {日時} 送信者: {氏名} 会社: {会社名}
    メール本文サマリー: {人材概要、必須スキル、単金情報(スキル見合い含む)} (引用: {引用元})

■ 注意事項
- 回答はソース情報のみに基づいてください。
- 推測や情報の創造は行わず、各セットを個別に評価してください。`;

    document.getElementById("output").textContent = template;
}

// コピーしてNotebookLMを開く
function copyAndOpen() {
    const output = document.getElementById("output").textContent;
    if (!output) {
        alert("文面を生成してください。");
        return;
    }

    navigator.clipboard.writeText(output).then(() => {
        alert("文面をコピーしました。NotebookLMを開きます。");
        window.open("https://notebooklm.google.com/notebook/4fbca043-4802-4092-a8f0-d9d4ff1fbdd7/", "_blank");
    }).catch(() => {
        alert("コピーに失敗しました。手動でコピーしてください。");
        window.open("https://notebooklm.google.com/notebook/4fbca043-4802-4092-a8f0-d9d4ff1fbdd7/", "_blank");
    });
}
