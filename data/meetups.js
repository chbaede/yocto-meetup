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
      ko: "2026년 12월 5일 (토) 13:00 ~ 17:00",
      en: "Saturday, December 5, 2026, 13:00 - 17:00",
      status: {
        ko: "잠정 예정 (확정 전 / 조율 중)",
        en: "Tentative / Subject to confirmation"
      }
    },
    venue: {
      ko: "OpenUP (오픈UP 소프트웨어센터, 서울)",
      en: "OpenUP Software Center, Seoul",
      status: {
        ko: "장소 확정 (오픈UP 소프트웨어센터)",
        en: "Venue Confirmed (OpenUP Software Center)"
      }
    },
    capacity: {
      ko: "오프라인 약 50명",
      en: "Approx. 50 Attendees",
      sub: {
        ko: "발표 세션 4개 + 네트워킹 (휴식 20분 + 오픈 네트워킹 70분)",
        en: "4 Tech Talks + Networking (Break 20m + Mixer 70m)"
      }
    },
    // Registration schedule: Opens Nov 2, confirmation emails sent Nov 22 based on application review
    registration: {
      openDate: "2026-11-02",
      confirmDate: "2026-11-22",
      type: "review" // Application review (not first-come, first-served)
    },
    // Google Form application link (reserved for activation on Nov 2)
    registrationFormUrl: null, // e.g. "https://forms.gle/..."
    sessions: [
      {
        time: "13:00 - 13:30",
        type: "Registration",
        speaker: {
          ko: "참가자 등록",
          en: "Registration"
        },
        org: {
          ko: "입장 및 명찰 수령",
          en: "Check-in & Badge Pickup"
        },
        topic: {
          ko: "참석자 등록 및 행사 안내",
          en: "Attendee check-in & event briefing"
        },
        duration: "30m",
        isEvent: true
      },
      {
        time: "13:30 - 14:00",
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
          ko: '<a href="https://pretalx.com/ypdd-2026/schedule/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline underline-offset-2">Yocto Project Dev Day</a> / <a href="https://osselceu2026.sched.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline underline-offset-2">ELCE 2026</a> 후기',
          en: '<a href="https://pretalx.com/ypdd-2026/schedule/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline underline-offset-2">Yocto Project Dev Day</a> / <a href="https://osselceu2026.sched.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline underline-offset-2">ELCE 2026</a> Recap'
        },
        duration: "20m + 10m Q&A"
      },
      {
        time: "14:00 - 14:30",
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
          ko: "yocto 메타 클린코드 & 디버깅",
          en: "Yocto Meta Clean Code & Debugging"
        },
        duration: "20m + 10m Q&A"
      },
      {
        time: "14:30 - 14:50",
        type: "Break",
        speaker: {
          ko: "네트워킹 및 휴식",
          en: "Networking & Break"
        },
        org: {
          ko: "중간 휴식",
          en: "Intermission"
        },
        topic: {
          ko: "자유 교류 및 다과 (20분)",
          en: "Break & Mini Mixer (20 mins)"
        },
        duration: "20m",
        isEvent: true
      },
      {
        time: "14:50 - 15:20",
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
          ko: "clang,gcc pgo를 사용하여 최적화 및 빌드속도 향상",
          en: "Optimization and Build Speed Acceleration using Clang/GCC PGO"
        },
        duration: "20m + 10m Q&A"
      },
      {
        time: "15:20 - 15:50",
        type: "Talk 4",
        speaker: {
          ko: "모우진 (Woojin Moh)",
          en: "Woojin Moh"
        },
        org: {
          ko: "텔레칩스 (Telechips)",
          en: "Telechips"
        },
        topic: {
          ko: "TBD",
          en: "TBD"
        },
        duration: "20m + 10m Q&A"
      },
      {
        time: "15:50 - 17:00",
        type: "Networking",
        speaker: {
          ko: "오픈 네트워킹 & 자유 교류",
          en: "Open Networking & Social Mixer"
        },
        org: {
          ko: "참석자 전체",
          en: "All Attendees"
        },
        topic: {
          ko: "다과 및 자유 기술 네트워킹 (70분)",
          en: "Refreshments & Technical Networking (70 mins)"
        },
        duration: "70m",
        isEvent: true
      }
    ],
    networkingDuration: {
      ko: "70분 (1 Hour 10 Mins)",
      en: "70 mins (1 Hour 10 Mins)"
    }
  }
];
