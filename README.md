# 전아모 IT 취업달력 자동생성기

## 사이트 주소

https://freecar-auto-calendar.web.app/

---

## 실행

```
npm run serve
```

## 빌드 및 배포

```
npm run deploy  // npm run build && firebase deploy
```

---

### 시용법

1. 어떤 달력을 만드는지 설정한다.
   <img src="/src/assets/howtouse/001.png" width="450px" height="auto" ></img> <br/><br/>
   개발자/디자이너 달력 중에 어떤 달력인지 설정합니다.

2. 달력 양식 시트에 정리한 리스트를 종류별로, 한 열씩 복사한다
   <img src="/src/assets/howtouse/002.png" width="450px" height="auto" ></img> <br/><br/>
   `먼저 <a href="${this.$urls.sheet}" target="_blank">양식 시트에</a> 시트에 정리가 돼있어야 복사가 편리합니다.<br/>'개발자, 대기업'을 모두 들었다면 대기업의 날짜 열만 먼저 복사하고 아래 3번 사용법을 진행합니다.

3. 복사한 열을 알맞은 칸에 그대로 붙여넣기 한다.
   <img src="/src/assets/howtouse/003.png" width="450px" height="auto" ></img> <br/><br/>
   `위 2번 사용법에서 '개발자, 대기업' 열을 복사해왔다면 알맞은 칸에 그대로 붙여넣기합니다.<br/> 그리고 다시 2번으로 돌아가 다음 열을 선택하고 이를 붙여넣기합니다.<br/>모든 칸이 채워지지 않으면 생성 버튼이 활성화되지 않습니다.<br/><span class="text-red">날짜, 회사명, 링크 갯수가 같지 않으면 오류로 판단하고 alert를 웁니다.<br/> 만약 alert가 나온다면 다시 확인 해주셔야 합니다.</span>

4. 모두 넣었다면 '생성'버튼을 누르고 결과를 확인한다.
   <img src="/src/assets/howtouse/004.png" width="450px" height="auto" ></img> <br/><br/>
   `달력 결과는 네이버 카페 대문의 크기를 그대로 만든 것입니다. 복사하기 전에 잘 만들었는지 먼저 확인합니다. <br/> 닫기 버튼은 달력을 열고 닫는 기능 외에 하지 습니다. 모두 확인했다면 'HTML 코드 복사' 버튼을 클릭합니다.

5. 코드를 복사한다.
   <img src="/src/assets/howtouse/005.png" width="450px" height="auto" ></img> <br/><br/>
   `HTML 코드 복사 버튼을 누르면 만들어진 달력 코드가 나타난 걸 볼 수 있습니다. <br/>'전체선택' 버튼을 누르면 코드 내용이 모두 선택됩니다. <br/>선택과 동시에 복사가 되도록 하였으니 버튼을 눌렀다면 클립보드에 복사가 됐을 것입니다. <br/>복사가 정상적으로 되었다면 알림이 토스트로 생성됩니다. <br/><sapn lass="text-red">만약 복사가 되지 않았다면 전체선택된 코드를 수동으로 복사하여주세요.</sapn>

6. 카페 대문 편집에서 html 체크박스로 html 편집기를 연다.
   <img src="/src/assets/howtouse/006.png" width="450px" height="auto" ></img> <br/><br/>
   `카페 대문 꾸미기에서 html 체크박스를 열면 네이버 카페 스마트에디터가 나오며 <br/> 에디터 우측상단에 html 체크박스가 있습니다. 이 체크박스로 html 편집기를 엽니다. <br/><span class="text-red">현재 이 네이버 카페 스마트에디터가 브라우저 에러가 있어서 아예 빈화면으로 나타나는 에러가 있을 수 있습니다.</span> <br/>만약 빈 화면으로 나타난다면 <span class="text-red">크롬,웨일과 같은 크로니움 브라우저가 아닌 <br/> <strong>인터넷 익스플로러, Firefox, Opera, Safari 등의 브라우저를 사용해주세요.</strong> </span> <br/>위 브라우저들로는 편집기가 열리는 걸 확인하였습니다. <br/> 네이버 카페의 스마트 에디터의 문제라 결할 수가 없었습니다.

7. 적절한 위치에 복사한 달력을 붙여넣는다.
   <img src="/src/assets/howtouse/007.png" width="450px" height="auto" ></img> <br/><br/>
   `넣어야 할 위치를 찾아 달력을 붙여넣기 합니다.<br/>위치를 찾는게 어렵다면 편집기 내에 글자 찾기로 'id="calendar"'를 검색해보세요. <br/> 디자이너, 개발자 두 의 달력 모두 위치를 확인하실 수 있을 것입니다.
