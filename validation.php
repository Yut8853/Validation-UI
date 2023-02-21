<?php

if (isset($_POST["name"])) { // script.jsから「name」がpost送信された場合
    $name = $_POST["name"];
    $name = htmlspecialchars($name, ENT_QUOTES, "UTF-8"); // 特殊文字を無効化(セキュリティ対策)
    $furigana = $_POST["furigana"];
    $furigana = htmlspecialchars($furigana, ENT_QUOTES, "UTF-8"); // 特殊文字を無効化(セキュリティ対策)
    $email = $_POST["email"];
    $email = htmlspecialchars($email, ENT_QUOTES, "UTF-8"); // 特殊文字を無効化(セキュリティ対策)
    $tel = $_POST["tel"];
    $tel = htmlspecialchars($tel, ENT_QUOTES, "UTF-8"); // 特殊文字を無効化(セキュリティ対策)
    $textarea = $_POST["textarea"];
    $textarea = htmlspecialchars($textarea, ENT_QUOTES, "UTF-8"); // 特殊文字を無効化(セキュリティ対策)
    /* データベースにデータを格納する処理
    $stmt = $pdo->prepare("INSERT INTO user (username, furigana, email, tel, textarea) VALUES (:username, :furigana, :email, :tel, :textarea)");
    $stmt->bindValue(":username", $name);
    $stmt->bindValue(":furigana", $furigana);
    $stmt->bindValue(":email", $email);
    $stmt->bindValue(":tel", $tel);
    $stmt->bindValue(":textarea", $textarea);
    $stmt->execute();
    */
    echo ($name);
}
