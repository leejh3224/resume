<template>
  <div>
    <div class="header">
      <div class="header-title-box">
        <h1>이준형 | GOMPRO</h1>
        <h3>Node.js Backend Developer</h3>
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
        <div class="section-work-experience">
          <h3>Work Experience</h3>
          <h4>직방</h4>
          <p>2019.08 ~ </p>
          <h4 style="margin-top: 8px;">기술 스택</h4>
          <p style="margin-bottom: 8px;">- Typescript / Node.js / Nest.js / Next.js (React.js)</p>
          <h4 style="margin-top: 8px;">개발 환경</h4>
          <p style="margin-bottom: 4px;">- AWS Lambda (serverless framework) / ECS</p>
          <p style="margin-bottom: 4px;">- AWS ElasticSearch / RDB (MySQL) / DocumentDB (MongoDB) / ElastiCache (Redis) / SQS</p>
          <p style="margin-bottom: 8px;">- CI/CD (Azure Pipelines)</p>
          <h4>주요 업무</h4>
          <ul style="margin-top: 4px">
            <li>pay-gate api 개발 (2021.2 ~ 2021.5)</li>
            <div>
              <p>> 신한카드 연동 api 개발</p>
              <p>> reverse-proxy nginx 셋업 / fluentd 연동 (log routing)</p>
            </div>
            <li>IO 어드민 프로젝트 서버 및 프론트 개발 (2020.12 ~ 2021.2)</li>
            <div>
              <p>> 어드민 프론트 페이지 개발 (Next.js)</p>
              <p>> 내부 OAuth 인증 서버 연동</p>
            </div>
            <li>푸시 발송 시스템 유지보수 (2020.9 ~ )</li>
            <div>
              <p>> 발송 시스템 모니터링 배치 추가</p>
            </div>
            <li><a href="https://lease.zigbang.com/register" target="_blank">임대마스터 프로젝트</a> 프론트 페이지 및 api 서버 개발 (2019.10 ~ 2019.12)</li>
            <div>
              <p>> 프론트 페이지 개발 / 내부 컴포넌트 라이브러리 (Zuix) 사용</p>
              <p>> api 개발 (Nest.js)</p>
              <p>> 내부 OAuth 인증 서버 연동</p>
            </div>
            <li>사내 메시지 전송 api/라이브러리 개발 (SMS/알림톡/이메일/슬랙 발송)</li>
            <div>
              <p>> 발송 이력 관리 시스템 (RDB 및 ES에 저장)</p>
              <P>> 벤더 이중화 작업 (이메일/알림톡/SMS)</p>
              <p>> 통합 테스트를 위한 cli 프로그램 개발(Jest)</p>
            </div>
            <li>레거시 어드민 시스템 (C#) 유지보수</li>
            <li>클라이언트 api (apis-v2) 유지보수</li>
          </ul>
          <h4>공공공간(000gan)</h4>
          <p>2019.03 ~ 2019.08</p>
          <h4 style="margin-top: 8px;">기술 스택</h4>
          <p style="margin-bottom: 8px;">- Express.js (Node.js) / Nuxt.js (Vue.js)</p>
          <h4 style="margin-top: 8px;">개발 환경</h4>
          <p style="margin-bottom: 4px;">- AWS ElasticBeanstalk</p>
          <p style="margin-bottom: 4px;">- RDB (MySQL)</p>
          <h4>주요 업무</h4>
          <ul style="margin-top: 4px">
            <li><a href="https://withgoods.net/" target="_blank">위드굿즈 프로젝트</a> 초기멤버로 합류, 사이트 런칭 (2019.03 ~ 2019.06)</li>
            <div>
              <p>> 결제 연동 (카카오페이 및 일반 카드 결제) 및 장바구니 시스템 개발</p>
              <p>> 계좌 및 실명 인증 시스템 연동 (nice 신용평가)</p>
              <p>> 어드민 페이지 개발 (Nuxt.js)</p>
              <p>> 회원인증 및 소셜 로그인 (Naver/Kakao 로그인)</p>
              <p>> 알림톡/문자 발송</p>
              <p>> Typescript / 테스트 프레임워크 (Jest) 도입</p>
            </div>
          </ul>
        </div>
        <div class="section-opensource">
          <h3>Open Source Contributions</h3>
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
          <li>
            Yalc (Typescript)
            <br /><a style="padding-left: 40px;" target="_blank" href="https://github.com/whitecolor/yalc/pull/141">`yalc add` 후 package.json의 indent가 유지되지 않는 버그 PR</a>
          </li>
        </div>
        <div class="section-projects">
          <h3>Side Projects</h3>
          <p class="quote">모든 사이드 프로젝트는 깃허브에서 확인할 수 있습니다.</p>
          <ul>
            <li>
              Bitrush, 가상화폐 트레이딩봇 (Python) <a target="_blank" href="https://github.com/leejh3224/bitrush">링크</a>
            </li>
            <li>
              Airbnb Reminder v1, v2 (Typescript) <a target="_blank" href="https://github.com/leejh3224/autobnb">링크</a>
            </li>
            <li>
             HelloTalk 클론 프로젝트 (React Native) <a target="_blank" href="https://github.com/leejh3224/react-native-hello-talk">링크</a>
            </li>
            <li>
              다이어트 일기앱, Kini (Flutter) on <a target="_blank" href="https://play.google.com/store/apps/details?id=com.gompro.kini">Playstore</a>
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

@media (max-width: 600px) {
  .header-title-box {
    width: 100%;
  }

  .body {
    grid-template-columns: 1fr;
  }
  
  .left-side {
    display: none;
  }
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

.section-work-experience {}

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

.devicon {
  font-size: 5rem;
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
