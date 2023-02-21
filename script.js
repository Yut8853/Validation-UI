$(function () {
  const btn = document.querySelector('.button');
  const formName = document.querySelector('.name');
  const nameErrorText = document.querySelector('.name-error-text');

  const formFurigana = document.querySelector('.furigana');
  const furiganaErrorText = document.querySelector('.furigana-error-text');

  const formEmail = document.querySelector('.email');
  const emailErrorText = document.querySelector('.email-error-text');
  const emailPattern =
    /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;

  const formTel = document.querySelector('.tel');
  const telErrorText = document.querySelector('.tel-error-text');
  const telPattern = /^0\d{9,10}$/;

  const formText = document.querySelector('.text');
  const textErrorText = document.querySelector('.text-error-text');

  let nameError;
  let furiganaError;
  let emailError;
  let telError;
  let textError;

  btn.addEventListener('click', () => {
    if (formName.value.length === 0) {
      nameErrorText.innerText = '名前を入力してください';
      nameError = '名前未入力';
    } else if (formName.value.length >= 21) {
      nameErrorText.innerText = '２０文字以下で入力してください';
      nameError = '名前入力オーバー';
    } else {
      nameErrorText.innerText = '';
      nameError = '';
    }
    if (formFurigana.value.length === 0) {
      furiganaErrorText.innerText = 'フリガナを入力してください';
      furiganaError = 'フリガナ未入力';
    } else if (formFurigana.value.length >= 21) {
      furiganaErrorText.innerText = '２０文字以下で入力してください';
      furiganaError = 'フリガナ入力オーバー';
    } else {
      furiganaErrorText.innerText = '';
      furiganaError = '';
    }
    if (formEmail.value.length === 0) {
      emailErrorText.innerText = 'メールアドレスを入力してください';
      emailError = 'メールアドレス未入力';
    } else if (formEmail.value.length >= 100) {
      emailErrorText.innerText = '99文字以下で入力してください';
      emailError = 'メールアドレス入力オーバー';
    } else if (!emailPattern.test(formEmail.value)) {
      emailErrorText.innerText = 'メールアドレスを正しく入力してください';
      emailError = 'メールアドレス入力ミス';
    } else {
      emailErrorText.innerText = '';
      emailError = '';
    }
    if (formTel.value.length === 0) {
      telErrorText.innerText = '電話番号を入力してください';
      telError = '電話番号未入力';
    } else if (formTel.value.length >= 12) {
      telErrorText.innerText = '11文字以下で入力してください';
      telError = '電話番号入力オーバー';
    } else if (!telPattern.test(formTel.value)) {
      telErrorText.innerText = '電話番号を正しく入力してください';
      telError = '電話番号入力ミス';
    } else {
      telErrorText.innerText = '';
      telError = '';
    }
    if (formText.value.length === 0) {
      textErrorText.innerText = 'お問い合わせ内容を入力してください';
      textError = 'お問い合わせ内容未入力';
    } else if (formText.value.length >= 1001) {
      textErrorText.innerText = '1000文字以下で入力してください';
      textError = 'お問い合わせ内容入力オーバー';
    } else {
      textErrorText.innerText = '';
      textError = '';
    }
  });
});