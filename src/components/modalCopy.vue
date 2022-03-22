<template>
  <b-modal id="modal-copy" title="HTML 코드 복사" @shown="init">
    <div class="p-1">
      <p class="mb-3">대문을 수정시에 에디터 우측상단의 'HTML' 체크박스를 누른 뒤 적절한 위치에 아래 코드를 복사하여 붙여넣기합니다.</p>
      <div id="code-wrapper" ref="code-wrapper" v-if="code && codeText">
        <!-- <b-textarea :value="code"></b-textarea> -->
        {{ codeText }}
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
      this.$refs["code-wrapper"].focus();
    },
  },
};
</script>

<style lang="scss" scoped>
#code-wrapper {
  height: 400px;
  max-height: 400px;
  overflow-y: scroll;
}
</style>
