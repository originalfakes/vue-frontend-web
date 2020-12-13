<template>
    <div class="backdrop">
      <div class="spinner"></div>
      <div class="logo">loading...</div>
    </div>
</template>

<style lang="scss" scoped>
.backdrop {
    background-color: #FFF;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: .8;
}

.spinner {
    position: absolute;
    top: calc(50% - 12.5px);
    left: calc(50% - 12.5px);

    width: 25px;
    height: 25px;
    border-top: 8px solid aliceblue;
    border-right: 8px solid aliceblue;
    border-bottom: 8px solid aliceblue;
    border-left: 8px solid #8c618d;
    border-radius: 50%;
    animation: spin 3s linear infinite;
}

@keyframes spin {
  0% {
        transform: rotate(0deg);
        border-left:8px solid deeppink;
  }
  25%{
        transform: rotate(360deg);
        border-left:8px solid gold;
  }
  50%{
        transform:rotate(720deg);
        border-left:8px solid palegreen;
  }
  75%{
        transform: rotate(1080deg);
        border-left:8px solid aqua;
  }

  100% {
        transform: rotate(1440deg);
        border-left:8px solid deeppink;
  }

}

.logo {
    position:absolute;
    top:calc(50% + 35px);
    left:calc(50% - 25px);
    font-family:sans-serif;
    color:gray;
    letter-spacing:0.1em;
}

</style>
