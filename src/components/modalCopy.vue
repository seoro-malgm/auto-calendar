<template>
  <b-modal id="modal-copy" title="HTML 코드 복사" @shown="init" centered>
    <div class="p-1">
      <p class="mb-3">대문을 수정시에 에디터 우측상단의 'HTML' 체크박스를 누른 뒤 적절한 위치에 아래 코드를 복사하여 붙여넣기합니다.</p>
      <div class="d-flex align-items-center">
        <b-btn @click="selectAll" class="mb-2">전체선택</b-btn>
        <small class="ml-1">전체선택 버튼을 눌러 코드를 전체 선택하고 복사합니다.</small>
      </div>
      <div id="code-wrapper" ref="code-wrapper">
        <b-textarea id="code" ref="code" :value="codeText"></b-textarea>
      </div>
    </div>
    <template #modal-footer="{ ok }">
      <b-btn variant="primary w-100 py-3" @click="ok">닫기</b-btn>
    </template>
  </b-modal>
</template>

<script>
export default {
  props: {
    code: {
      type: [HTMLDivElement],
      default: null,
    },
  },
  data() {
    return {
      codeText: null,
    };
  },
  methods: {
    init() {
      var code = this.code;
      this.codeText = code.outerHTML;
    },
    selectAll() {
      const textarea = document.querySelector("#code");
      textarea.select();
      this.copyText(textarea.value);
    },
    copyText(text, obj) {
      const board = navigator.clipboard;
      board
        .writeText(text)
        .then(() => {
          this.$bvToast.toast(`코드가 클립보드에 복사되었습니다.`, {
            title: `코드 클립보드 복사`,
            toaster: "b-toaster-bottom-center",
            solid: true,
            variant: "primary",
          });
        })
        .catch(() => {
          this.$bvToast.toast(`수동으로 복사하거나 다시 시도하여주세요.`, {
            title: `코드 복사 실패`,
            toaster: "b-toaster-bottom-center",
            solid: true,
            variant: "error",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#code-wrapper {
  #code {
    height: 400px;
    max-height: 400px;
    overflow-y: scroll;
  }
}
</style>
