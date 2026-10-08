/**
 * Meetups data schema and history registry
 */
window.MEETUPS_DATA = [
  {
    id: "2026",
    year: 2026,
    isCurrent: true,
    banner: "banner.png",
    date: {
      ko: "2026년 12월 5일 (토) 오후",
      en: "Saturday, December 5, 2026 (Afternoon)",
      status: {
        ko: "잠정 예정 (확정 전 / 조율 중)",
        en: "Tentative / Subject to confirmation"
      }
    },
    venue: {
      ko: "OpenUP (오픈UP 소프트웨어센터, 서울)",
      en: "OpenUP Software Center, Seoul",
      status: {
        ko: "장소 협의 및 대관 준비 중",
        en: "Venue discussion in progress"
      }
    },
    capacity: {
      ko: "오프라인 약 50명",
      en: "Approx. 50 Attendees",
      sub: {
        ko: "발표 세션 4개 + 네트워킹 (1시간)",
        en: "4 Tech Talks + 1-Hour Networking"
      }
    },
    // Google Form application link (reserved for activation)
    registrationFormUrl: null, // e.g. "https://forms.gle/..."
    sessions: [
      {
        type: "Talk 1",
        speaker: {
          ko: "배창혁 (Changhyeok Bae)",
          en: "Changhyeok Bae"
        },
        org: {
          ko: "Mercedes-Benz Innovation Lab",
          en: "Mercedes-Benz Innovation Lab"
        },
        topic: {
          ko: "주제 조율 중 (To be announced)",
          en: "Topic to be announced"
        },
        duration: "20m + 10m Q&A"
      },
      {
        type: "Talk 2",
        speaker: {
          ko: "손현수 (Hyunsu Son)",
          en: "Hyunsu Son"
        },
        org: {
          ko: "LG전자 (LG Electronics)",
          en: "LG Electronics"
        },
        topic: {
          ko: "주제 조율 중 (To be announced)",
          en: "Topic to be announced"
        },
        duration: "20m + 10m Q&A"
      },
      {
        type: "Talk 3",
        speaker: {
          ko: "양동현 (Donghyun Yang)",
          en: "Donghyun Yang"
        },
        org: {
          ko: "LG전자 (LG Electronics)",
          en: "LG Electronics"
        },
        topic: {
          ko: "주제 조율 중 (To be announced)",
          en: "Topic to be announced"
        },
        duration: "20m + 10m Q&A"
      },
      {
        type: "Talk 4",
        speaker: {
          ko: "모우진 (Woojin Moh)",
          en: "Woojin Moh"
        },
        org: {
          ko: "오픈소스 커뮤니티",
          en: "Open Source Community"
        },
        topic: {
          ko: "주제 조율 중 (To be announced)",
          en: "Topic to be announced"
        },
        duration: "20m + 10m Q&A"
      }
    ],
    networkingDuration: {
      ko: "~ 60분 (1 Hour)",
      en: "~ 60 mins (1 Hour)"
    }
  }
];
