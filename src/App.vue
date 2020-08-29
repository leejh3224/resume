<template>
  <div>
    <div class="header">
      <div class="header-title-box">
        <h1>GOMPRO | 이준형</h1>
        <h3>JAVASCRIPT DEVELOPER</h3>
      </div>
    </div>
    <div class="body">
      <div class="left-side"> 
        <a class="social-link" href="https://github.com/leejh3224" target="blank">
          <font-awesome-icon :icon="['fab', 'github']" size="2x" />
          leejh3224
        </a>
        <a class="social-link" href="https://velog.io/@leejh3224" target="blank">
          <font-awesome-icon :icon="['fas', 'pen-nib']" size="2x" />
          leejh3224
        </a>
        <a class="social-link" href="https://linkedin.com/in/junhyung-lee-2b244115b/" target="blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
          Junhyung Lee
        </a>
        <a class="social-link" href="mailto:junhyung3224@gmail.com" target="blank">
          <font-awesome-icon :icon="['fas', 'envelope']" size="2x" />
          junhyung3224
        </a>
        <div class="section-education">
          <h3 class="body-title">Education</h3>
          <p>경희대학교 경제학 학사</p>
          <p>(2013.03 ~ 2019.08)</p>
        </div>
        <div class="section-languages">
          <h3>Languages</h3>
          <ul>
            <li>한국어 (모국어)</li>
            <li>영어 (업무상 의사소통 가능)</li>
          </ul>
        </div>
        <div>
          <button class="download-pdf" @click="downloadPdf">
            <spinner v-if="isDownloading" />
            <p v-else>이력서 PDF 다운로드</p>
          </button>
        </div>
      </div>
      <div clsss="right-side">
        <div>
          <h3>Profile</h3>
          <p>매일 프로의 자세로 개발에 임하고 있습니다.</p>
          <p>새로운 것들을 배우고 활용할 때 가장 큰 재미를 느끼는 개발자입니다.</p>
        </div>
        <div class="section-work-experience">
          <h3>Work Experience</h3>
          <h4>직방</h4>
          <p>2019.08 ~ </p>
          <p>주요 업무</p>
          <ul>
            <li>어드민 시스템 (C#) 유지보수</li>
            <li>임대마스터 프로젝트 프론트 페이지 및 api 서버 개발 (2019.10 ~ 2019.12)</li>
            <li>050 안심번호 시스템 유지보수/신규 기능 추가</li>
            <li>통합 테스트를 위한 cli 프로그램 개발</li>
            <li>클라이언트 api (apis-v2) 유지보수</li>
            <li>공실 어드민 사이트 개편 2019.12 ~ 2020.01</li>
            <li>직방홈 프로젝트 api 서버 개발 및 테스트 작성 (2020.04 ~ 2020.06)</li>
            <li>배치 프로그램 작성</li>
          </ul>
          <h4>공공공간(000gan)</h4>
          <p>2019.03 ~ 2019.08</p>
          <p>주요 업무</p>
          <ul>
            <li>쇼핑몰 오픈 (2019.03 ~ 2019.06)</li>
            <li>결제 연동 (카카오페이 및 일반 카드 결제)</li>
            <li>계좌 인증 및 실명 인증 시스템</li>
            <li>어드민 페이지</li>
            <li>카트 시스템</li>
            <li>회원인증 및 소셜 로그인</li>
            <li>알림톡/문자 발송</li>
            <li>Typescript 및 테스팅 도입</li>
          </ul>
        </div>
        <div class="section-opensource">
          <h3>Open Source</h3>
          <li>
            Tables-to-go (Go)
            <br /><a style="padding-left: 40px;" target="_blank" href="https://github.com/fraenky8/tables-to-go/pull/30">file name 변경 기능 PR</a>
          </li>
          <li>
            Graphql-code-generator (Typescript)
            <br /><a style="padding-left: 40px;" target="_blank" href="https://github.com/dotansimha/graphql-code-generator/pull/4181">type-graphql 코드 생성 시 제대로 타입이 지정되지 않는 버그 PR</a>
          </li>
          <li>
            Testdeck (Typescript)
            <br /><a style="padding-left: 40px;" target="_blank" href="https://github.com/testdeck/testdeck/pull/277">test hook 사용 시 발생하는 버그 PR</a>
          </li>
        </div>
        <div class="section-projects">
          <h3>Projects</h3>
          <p class="quote">모든 프로젝트는 깃허브에서 확인할 수 있습니다.</p>
          <ul>
            <li>
              Typescript로 만든 Airbnb Reminder v1, v2 <a target="_blank" href="https://github.com/leejh3224/autobnb">링크</a>
            </li>
            <li>
              React Native로 만든 HelloTalk 클론 프로젝트 <a target="_blank" href="https://github.com/leejh3224/react-native-hello-talk">링크</a>
            </li>
            <li>
              Flutter로 만든 다이어트 일기앱, Kini on <a target="_blank" href="https://play.google.com/store/apps/details?id=com.gompro.kini">Playstore</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from './Spinner.vue'

export default {
  name: 'App',
  components: {
    Spinner,
  },
  data() {
    return {
      isDownloading: false,
    }
  },
  methods: {
    async downloadPdf() {
      this.isDownloading = true;
      try {
        const res = await fetch('https://ovgb1l0a0d.execute-api.us-east-1.amazonaws.com/dev/resume')
        const body = new Blob([await res.blob()], { type: 'application/pdf' })
        const link = document.createElement('a')
        link.setAttribute('download', 'resume.pdf')
        link.href = URL.createObjectURL(body)
        link.click()
      } catch (error) {
        alert('파일 다운로드에 실패했습니다.')
      }
      this.isDownloading = false;
    }
  }
}
</script>

<style soped>
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);

.header {
  background-color: #f8eaea;
  padding: 2rem;
  display: flex;
  justify-content: center;
}

.header-title-box {
  width: 50%;
  border: 3px solid black;
  box-shadow: 5px 5px 0px 2px rgba(0,0,0,1);
  background-color: #fff;
  padding: 1rem;
  text-align: center;
}

.body {
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 1.5rem;
  max-width: 860px;
  margin: 0 auto;
}

.left-side .social-link {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  color: #000;
  text-decoration: none;
}

.left-side .social-link > svg {
  margin-right: 16px;
}

.section-education {
  margin-top: 64px;
}

.section-languages {
  margin-top: 32px;
}

.section-work-experience {
  margin-top: 40px;
}

.section-work-experience > h3 {
  margin-bottom: 4px;
}

.section-opensource {
  margin-top: 32px;
}

.section-opensource > h3 {
  margin-bottom: 4px;
}

.section-projects {
  margin-top: 32px;
}

.section-projects > p:nth-of-type(1){
  margin-top: 8px;
}

.quote::before {
  margin-right: 8px;
  content: "";
}

.quote {
  border-left: 10px solid #8a8a8a;
}

.download-pdf {
  background-color: #000;
  border: 0;
  color: #fff;
  padding: 0.5rem 1rem;
  margin-top: 24px;
  cursor: pointer;
  min-width: 172px;
  display: flex;
  justify-content: center;
}
</style>

<style>
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

ul {
  padding-inline-start: 32px;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

* {
  font-family: 'Spoqa Han Sans', 'Sans-serif';
}
</style>
