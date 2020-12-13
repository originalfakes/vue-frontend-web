<template>
    <div class="content" style="width: 80%">
        <h3>{{ $t('S_BUSINESS_COOPERATION') }}</h3>
        <p>需要幫助? 歡迎隨時諮詢我們的在線客服：我們友好專業的客服團隊一星期七天、每天二十四小時隨時準備為您提供服務。您可以使用電郵、在線聊天或填寫以下表格的方式與我們聯繫！</p>
        <div class="form-group">
            <div class="title">{{ $t('S_NAME') }}</div>
            <input type="text" />
        </div>
        <div class="form-group">
            <div class="title">{{ $t('S_EMAIL') }}</div>
            <input type="text" />
        </div>
        <div class="form-group">
            <div class="title">{{ $t('S_TITLE') }}</div>
            <input type="text" />
        </div>
        <div class="form-group">
            <div class="title">{{ $t('S_CONTENT') }}</div>
            <textarea />
        </div>
        <div class="submit">{{ $t('S_SUBMIT') }}</div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
.form-group {
    display: flex;
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 700;
    color: #000;

    .title {
        flex: 0 0 16.67%;
        padding: 7px 15px;
    }

    input,
    textarea {
        width: 100%;
        height: 24px;
        padding: 6px 12px;
        border: 1px solid #ced4da;
        border-radius: 4px;
        outline: none;
    }

    textarea {
        height: 72px;
    }
}

.submit {
    display: inline-block;
    width: 15%;
    background-color: #5b6ef2;
    padding: 8px 12px;
    text-align: center;
    border: 1px solid #5b6ef2;
    border-radius: 19px;
    color: #FFF;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background-color: #5A38B7;
        border-color: #8052FF;
    }
}
</style>
