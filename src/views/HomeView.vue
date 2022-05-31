<template>
  <div class="my-5">
    <b-container>
      <header class="mb-3">
        <h1>전아모 자동 달력만들기</h1>
      </header>
      <b-row align-v="stretch">
        <b-col cols="12">
          <b-row align-v="stretch">
            <b-col cols="2">
              <b-form-select v-model="type" class="mr-2" size="lg">
                <b-form-select-option value="dev"> 개발자 </b-form-select-option>
                <b-form-select-option value="des"> 디자이너 </b-form-select-option>
              </b-form-select>
            </b-col>
            <b-col cols="3">
              <b-input-group>
                <b-form-select v-model="year" class="mr-2" size="lg">
                  <b-form-select-option v-for="y in years" :key="y" :value="y">
                    {{ y }}
                  </b-form-select-option>
                </b-form-select>
                <b-form-text>년</b-form-text>
              </b-input-group>
            </b-col>
            <b-col cols="3">
              <b-input-group>
                <b-form-select v-model="mounth" class="mr-2" size="lg">
                  <b-form-select-option v-for="(m, i) in mounths" :key="i" :value="i">
                    {{ i + 1 }}
                  </b-form-select-option>
                </b-form-select>
                <b-form-text>월 달력</b-form-text>
              </b-input-group>
            </b-col>
            <b-col cols="2">
              <b-btn variant="primary w-100 h-100 d-flex align-items-center justify-content-center" :href="$urls.sheet" target="_blank">
                양식 시트 확인
              </b-btn>
            </b-col>
            <b-col cols="2">
              <router-link class="btn btn-secondary w-100 h-100 d-flex align-items-center justify-content-center" to="/howtouse">사용법</router-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <ul>
        <li v-for="(item, key) in input" :key="key" class="my-5 pb-2">
          <header class="mb-2">
            <h3 class="font-weight-bold" :style="{ color: `${item.variant}` }">
              {{ item.name }}
            </h3>
          </header>
          <section>
            <b-row>
              <b-col cols="4">
                <h5 class="mb-1">날짜</h5>
                <b-textarea v-model="item.dates" />
              </b-col>
              <b-col cols="4">
                <h5 class="mb-1">회사명</h5>
                <b-textarea v-model="item.compaines" />
              </b-col>
              <b-col cols="4">
                <h5 class="mb-1">링크</h5>
                <b-textarea v-model="item.links" />
              </b-col>
            </b-row>
          </section>
        </li>
      </ul>
      <div class="mt-3 mb-5">
        <b-row>
          <b-col :cols="result ? 11 : 12">
            <b-btn variant="primary w-100 py-3" @click="sumbit" :disabled="validate"> 생성 </b-btn>
          </b-col>
          <b-col cols="1" v-if="result">
            <b-btn
              variant="secondary w-100 py-3"
              @click="
                () => {
                  result = null;
                  showResult = false;
                }
              "
            >
              리셋
            </b-btn>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <b-container fluid class="mt-5 p-5" v-if="!validate && showResult">
      <b-container>
        <header class="mb-3 d-flex align-items-center justify-content-between">
          <div class="">
            <h3 class="mb-0">달력 결과:</h3>
            <span>복사 전에, 실제 크기의 달력결과를 확인하여 잘 만들어졌는지 확인하세요.</span>
          </div>
          <div class="d-flex ml-auto mr-0 align-items-center">
            <b-btn @click="collapsed = !collapsed" class="mr-2">{{ collapsed ? "열기" : "닫기" }}</b-btn>
            <b-btn @click="copyCalendar">HTML 코드 복사</b-btn>
          </div>
        </header>
      </b-container>
      <b-container class="result-wrap" :class="{ collapsed: collapsed }" :style="{ maxWidth: '836px' }">
        <div id="calendar" style="width: 100%" ref="calendar" :class="`calendar-${type}`">
          <div id="header" style="display: flex; align-items: center; padding: 4% 0; color: #555">
            <div class="type" style="margin: 0 2rem 0 0; padding: 0.75rem 2%; border-radius: 4px; background: #563f93; color: white">
              {{ types[type] }}
            </div>
            <div class="date" style="margin: 0 auto 0 0; color: #563f93; font-size: 2rem">{{ mounths[mounth] }} {{ year }}</div>
            <div class="color-info" style="background: #f2f2f2; padding: 0.75rem 0.75rem">
              <i
                class="dot"
                style="width: 8px; height: 8px; margin: 0 0.25rem 0 0.75rem; display: inline-block; border-radius: 50%; background-color: #f54336"
              ></i>
              <span class="txt">대기업</span>
              <i
                class="dot"
                style="width: 8px; height: 8px; margin: 0 0.25rem 0 0.75rem; display: inline-block; border-radius: 50%; background-color: #8ac44a"
              ></i>
              <span class="txt">중,소기업</span>
              <i
                class="dot"
                style="width: 8px; height: 8px; margin: 0 0.25rem 0 0.75rem; display: inline-block; border-radius: 50%; background-color: #ffc108"
              ></i>
              <span class="txt">외국계</span>
              <i
                class="dot"
                style="width: 8px; height: 8px; margin: 0 0.25rem 0 0.75rem; display: inline-block; border-radius: 50%; background-color: #2296f3"
              ></i>
              <span class="txt" style="margin: 0 0.25rem 0 0"> 스타트업</span>
            </div>
          </div>

          <div style="width: 100%">
            <div class="calendar-table" style="width: 100%; border-collapse: collapse">
              <div class="day" style="width: 100%; color: #555">
                <div
                  style="width: 14.25%; font-size: 0.875rem; text-align: center; display: inline-block; border-collapse: collapse"
                  v-for="(day, key) in days"
                  :key="key"
                >
                  {{ day }}
                </div>
              </div>
              <div class="contents" style="margin-top: 0.5rem; width: 100%">
                <div
                  style="
                    width: 14.25%;
                    height: 100%;
                    min-width: 14.25%;
                    min-height: 12.5rem;
                    padding: 0.5rem 0.75rem;
                    border: 1px solid #f2f2f2;
                    font-size: 0.7rem;
                    vertical-align: top;
                    display: inline-block;
                    border-collapse: collapse;
                    box-sizing: border-box;
                    overflow: visible;
                  "
                  v-for="(el, i) in result"
                  :key="i"
                >
                  <span :style="`color: #${el.disabled ? '999' : '555'}`">
                    {{ el.date }}
                  </span>
                  <ul style="list-style-type: none; margin: 0; padding: 0; text-indent: 0" v-if="el.items && el.items.length">
                    <li v-for="(item, l) in el.items" :key="l" style="margin-bottom: 1px">
                      <a style="text-decoration: none; color: #555" :href="item.link" target="_blank">
                        <i
                          class="dot"
                          :style="{
                            width: `8px`,
                            height: `8px`,
                            margin: `0`,
                            display: `inline-block`,
                            borderRadius: `50%`,
                            verticalAlign: 'middle',

                            backgroundColor: `${item.variant}`,
                          }"
                        ></i>
                        <span
                          :style="{
                            marginLeft: '3px',
                            display: 'inline-block',
                            maxWidth: '87%',
                            whiteSpace: 'nowrap',
                            overflowX: 'hidden',
                            textOverflow: 'ellipsis',
                            verticalAlign: 'middle',
                          }"
                        >
                          {{ item.company }}
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-container>
      <b-container class="mt-4 pb-4" v-if="!collapsed">
        <div class="w-100 d-flex justify-content-end">
          <b-btn @click="collapsed = !collapsed" class="mr-2">{{ collapsed ? "열기" : "닫기" }}</b-btn>
          <b-btn @click="copyCalendar">HTML 코드 복사</b-btn>
        </div>
      </b-container>
    </b-container>
    <!-- modals -->
    <modal-copy :code="code" />
  </div>
</template>

<script>
import input from "@/plugins/input";
import date from "@/plugins/date";
import modalCopy from "../components/modalCopy";
export default {
  name: "HomeView",
  components: {
    modalCopy,
  },
  data() {
    return {
      types: {
        dev: "개발자",
        des: "디자이너",
      },

      type: "dev",
      // years: [2022, 2023, 2024, 2025, 2026],
      year: 2022,
      mounth: new Date().getMonth(),

      mounths: date.mounths,
      days: date.days,
      dates: null,
      // 입력된 시트
      input,

      // 결과 관련
      collapsed: false,

      result: null,
      showResult: false,

      code: null,
    };
  },

  computed: {
    years() {
      const thisYear = new Date().getFullYear();
      const result = [];
      for (let i = 0; i < 5; i++) {
        result.push(thisYear + i);
      }
      return result;
    },
    validate() {
      return (
        !this.input.a.dates ||
        !this.input.a.compaines ||
        !this.input.a.links ||
        !this.input.b.dates ||
        !this.input.b.compaines ||
        !this.input.b.links ||
        !this.input.c.dates ||
        !this.input.c.compaines ||
        !this.input.c.links ||
        !this.input.d.dates ||
        !this.input.d.compaines ||
        !this.input.d.links
      );
    },
  },
  watch: {
    mounth(n) {
      this.getDates();
    },
  },
  mounted() {
    this.getDates();
  },
  methods: {
    reset() {
      this.result = null;
      this.getDates();
    },
    mapping({ name, dates, compaines, links, variant }) {
      const stringToArray = (list) => list.split("\n");
      if (
        stringToArray(dates).length !== stringToArray(compaines).length ||
        stringToArray(dates).length !== stringToArray(links).length ||
        stringToArray(compaines).length !== stringToArray(links).length
      ) {
        alert(`${name}의 날짜/회사명/링크의 수가 맞지 않습니다. 다시 시도해주세요.`);
        return;
      } else {
        const result = stringToArray(dates).map((date, index) => {
          let rObj;
          rObj = {
            variant,
            date: +date.split("-")[1].replace(/\s/g, ""),
            company: stringToArray(compaines)[index].replace(/\s/g, ""),
            link: stringToArray(links)[index].replace(/\s/g, ""),
          };
          return rObj;
        });

        return result;
      }
    },
    getDates() {
      const date = new Date();
      // date.setFullYear(this.year);
      // date.setMonth(this.mounth);
      const viewYear = this.year;
      const viewMonth = this.mounth;

      const prevLast = new Date(viewYear, viewMonth, 0);
      const thisLast = new Date(viewYear, viewMonth + 1, 0);

      const PLDate = prevLast.getDate();
      const PLDay = prevLast.getDay();

      const TLDate = thisLast.getDate();
      const TLDay = thisLast.getDay();

      const prevDates = [];
      const thisDates = [...Array(TLDate + 1).keys()].slice(1);
      // const nextDates = [];

      if (PLDay !== 6) {
        for (let i = 0; i < PLDay + 1; i++) {
          prevDates.unshift({
            date: PLDate - i,
            disabled: true,
          });
        }
      }

      this.dates = [
        ...prevDates,
        ...thisDates.map((date) => {
          return { date, disabled: false, items: [] };
        }),
      ];
    },
    sumbit() {
      this.reset();

      const merged = [...this.mapping(this.input.a), ...this.mapping(this.input.b), ...this.mapping(this.input.c), ...this.mapping(this.input.d)];
      const dates = this.dates;

      dates.forEach((el) => {
        merged.forEach((item) => {
          if (!el.disabled && el.date === item.date) {
            const currentItem = { date: el.date, variant: item.variant, company: item.company, link: item.link };
            el.items.push(currentItem);
          }
        });
      });
      this.result = dates;
      console.log(this.result);

      this.showResult = true;
    },
    copyCalendar() {
      const calendar = this.$refs.calendar;

      this.code = calendar;
      this.$bvModal.show("modal-copy");
    },
  },
};
</script>

<style lang="scss" scoped>
.result-wrap {
  width: 100%;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
  &.collapsed {
    max-height: 200px;
    height: 300px;
    overflow-y: hidden;
    &::after {
      position: absolute;
      width: 100%;
      content: "";
      height: 200px;
      display: block;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      z-index: 3;
      background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    }
  }
}
</style>
