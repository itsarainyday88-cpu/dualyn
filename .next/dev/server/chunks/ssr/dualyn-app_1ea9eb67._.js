module.exports = [
"[project]/dualyn-app/src/components/sections/Hero.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const Hero = ({ lang })=>{
    const content = {
        kr: {
            subtitle: "The New Standard",
            title: "오늘의 거울이 반갑고,\n내일의 탄력이 기다려지는 이유",
            desc: "재생의 기준을 새롭게 정의합니다."
        },
        en: {
            subtitle: "The New Standard",
            title: "Cherish Today’s Reflection, Anticipate Tomorrow’s Resilience.",
            desc: "Redefining the standard of regeneration."
        },
        th: {
            subtitle: "มาตรฐานใหม่",
            title: "ชื่นชมเงาสะท้อนของวันนี้\nรอคอยความยืดหยุ่นของวันพรุ่งนี้",
            desc: "นิยามใหม่ของมาตรฐานการฟื้นฟู"
        },
        ar: {
            subtitle: "المعيار الجديد",
            title: "اعتز بانعكاسك اليوم،\nوترقب مرونة الغد.",
            desc: "إعادة تعريف معايير التجديد."
        },
        vn: {
            subtitle: "Tiêu chuẩn Mới",
            title: "Trân trọng Hình ảnh Hôm nay,\nMong chờ Sự Phục hồi của Ngày mai",
            desc: "Định nghĩa lại tiêu chuẩn của sự tái tạo"
        },
        jp: {
            subtitle: "吸収性PDRNの新基準",
            title: "吸収の限界を\n打ち破る",
            desc: "皮膚のバリアを越えて深層へ届く\n圧倒的な浸透力の差をご体験ください。"
        }
    };
    const text = content[lang];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const scrollY = window.scrollY;
            const visual = document.querySelector('.hero-visual-img');
            const text = document.querySelector('#hero-text');
            const particles = document.querySelectorAll('.particle');
            if (visual) {
                visual.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.15}px))`;
            }
            if (text) {
                text.style.transform = `translateY(${scrollY * 0.1}px)`;
                text.style.opacity = 1 - scrollY / 600;
            }
            particles.forEach((p, i)=>{
                const speed = (i % 3 + 1) * 0.1;
                p.style.transform = `translateY(${scrollY * speed * -1}px)`;
            });
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section hero",
        style: {
            minHeight: '100vh',
            padding: '0',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle at center, #6b0f1a 0%, #3a0509 100%)' /* Refined Deep Burgundy */ 
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "particles-container",
                style: {
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    zIndex: 1
                },
                children: [
                    ...Array(30)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "particle",
                        style: {
                            position: 'absolute',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            background: '#fff8e1',
                            /* Soft Champagne White */ borderRadius: '50%',
                            opacity: Math.random() * 0.5 + 0.3,
                            boxShadow: '0 0 8px rgba(255, 248, 225, 0.6)',
                            animation: `twinkle ${Math.random() * 4 + 3}s infinite ease-in-out`
                        }
                    }, i, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/Hero.jsx",
                        lineNumber: 79,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/dualyn-app/src/components/sections/Hero.jsx",
                lineNumber: 77,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-visual-img",
                style: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    maxWidth: '1200px',
                    zIndex: 0,
                    opacity: 0.12,
                    pointerEvents: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/assets/hero_bg.png",
                    alt: "Background Graphic",
                    style: {
                        width: '110%',
                        height: 'auto',
                        objectFit: 'contain',
                        filter: 'blur(0.5px)'
                    }
                }, void 0, false, {
                    fileName: "[project]/dualyn-app/src/components/sections/Hero.jsx",
                    lineNumber: 110,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/dualyn-app/src/components/sections/Hero.jsx",
                lineNumber: 95,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "hero-text",
                style: {
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 20px',
                    maxWidth: '1000px',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '1rem',
                            letterSpacing: '0.3em',
                            color: '#e6cfaa',
                            /* Muted Champagne Gold */ fontWeight: '500',
                            marginBottom: '35px',
                            textTransform: 'uppercase',
                            display: 'inline-block',
                            borderBottom: '1px solid rgba(230, 207, 170, 0.4)',
                            paddingBottom: '12px'
                        },
                        children: text.subtitle
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/Hero.jsx",
                        lineNumber: 131,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                            /* Reduced Size (~40%) */ lineHeight: '1.4',
                            marginBottom: '45px',
                            color: '#ffffff',
                            textShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                            whiteSpace: 'pre-line',
                            letterSpacing: '0.05em',
                            /* Wider Spacing */ fontWeight: '500',
                            /* Medium Weight */ fontFamily: 'var(--font-heading, serif)'
                        },
                        children: text.title
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/Hero.jsx",
                        lineNumber: 143,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '1.15rem',
                            color: 'rgba(255,255,255,0.85)',
                            fontWeight: '300',
                            fontFamily: 'var(--font-serif, sans-serif)',
                            fontStyle: 'italic',
                            maxWidth: '650px',
                            lineHeight: '1.7',
                            letterSpacing: '0.02em',
                            marginTop: '0'
                        },
                        children: text.desc
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/Hero.jsx",
                        lineNumber: 157,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/dualyn-app/src/components/sections/Hero.jsx",
                lineNumber: 119,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.2); }
        }
        @media (max-width: 768px) {
            .hero-visual-img img {
                width: 140% !important;
                opacity: 0.15;
            }
            #hero-text h1 {
                margin-bottom: 30px;
            }
        }
      `
            }, void 0, false, {
                fileName: "[project]/dualyn-app/src/components/sections/Hero.jsx",
                lineNumber: 170,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/dualyn-app/src/components/sections/Hero.jsx",
        lineNumber: 65,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Hero;
}),
"[project]/dualyn-app/src/assets/micropdrn_penetration.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/micropdrn_penetration.00fb64de.png");}),
"[project]/dualyn-app/src/assets/micropdrn_penetration.png.mjs { IMAGE => \"[project]/dualyn-app/src/assets/micropdrn_penetration.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$src$2f$assets$2f$micropdrn_penetration$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/dualyn-app/src/assets/micropdrn_penetration.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$src$2f$assets$2f$micropdrn_penetration$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDldMh0nW45lg0jyfIgJ5uiCx7dawlJw3Z6EWnHQ//Z"
};
}),
"[project]/dualyn-app/src/components/sections/CoreTech.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/lucide-react/dist/esm/icons/microscope.js [app-ssr] (ecmascript) <export default as Microscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$src$2f$assets$2f$micropdrn_penetration$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dualyn$2d$app$2f$src$2f$assets$2f$micropdrn_penetration$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/dualyn-app/src/assets/micropdrn_penetration.png.mjs { IMAGE => "[project]/dualyn-app/src/assets/micropdrn_penetration.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
"use client";
;
;
;
;
const CoreTech = ({ lang })=>{
    const content = {
        kr: {
            subtitle: "Core Tech",
            headline: "microPDRN™",
            keyMessage: "성분을 추가하지 않습니다.\n흡수의 구조를 다시 설계합니다.",
            comparison: {
                conventional: "Conventional PDRN (Blocked Surface)",
                micro: "microPDRN™ (Deep Penetration)"
            },
            features: [
                {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__["Microscope"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 14,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    title: "25bp",
                    desc: "25bp 이하 초저분자 구조"
                },
                {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 15,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    title: "Speed",
                    desc: "압도적인 흡수 속도"
                },
                {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 16,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    title: "Regeneration",
                    desc: "세포 반응 극대화"
                }
            ]
        },
        en: {
            subtitle: "Core Tech",
            headline: "microPDRN™",
            keyMessage: "We don't just add ingredients.\nWe redesign the absorption structure.",
            comparison: {
                conventional: "Conventional PDRN (Blocked Surface)",
                micro: "microPDRN™ (Deep Penetration)"
            },
            features: [
                {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__["Microscope"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 25,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    title: "25bp",
                    desc: "Under 25bp structure"
                },
                {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 26,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    title: "Speed",
                    desc: "Superior absorption speed"
                },
                {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 27,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    title: "Regeneration",
                    desc: "Maximized cell response"
                }
            ]
        },
        th: {
            subtitle: "เทคโนโลยีหลัก",
            headline: "microPDRN™",
            keyMessage: "เราไม่ได้แค่เพิ่มส่วนผสม\nแต่เราออกแบบโครงสร้างการดูดซึมใหม่",
            comparison: {
                conventional: "PDRN ทั่วไป (ถูกบล็อกที่ผิว)",
                micro: "microPDRN™ (ซึมลึก)"
            },
            features: [
                {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__["Microscope"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 36,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    title: "25bp",
                    desc: "โครงสร้างเล็กกว่า 25bp"
                },
                {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 37,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    title: "Speed",
                    desc: "ความเร็วในการดูดซึมที่เหนือกว่า"
                },
                {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 38,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    title: "Regeneration",
                    desc: "ตอบสนองต่อเซลล์สูงสุด"
                }
            ]
        },
        ar: {
            subtitle: "التقنية الأساسية",
            headline: "microPDRN™",
            keyMessage: "نحن لا نضيف المكونات فحسب.\nبل نعيد تصميم هيكل الامتصاص.",
            comparison: {
                conventional: "PDRN تقليدي (سطح مسدود)",
                micro: "microPDRN™ (اختراق عميق)"
            },
            features: [
                {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__["Microscope"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 47,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    title: "25bp",
                    desc: "هيكل أقل من 25bp"
                },
                {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 48,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    title: "السرعة",
                    desc: "سرعة امتصاص فائقة"
                },
                {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 49,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    title: "التجديد",
                    desc: "استجابة خلوية قصوى"
                }
            ]
        },
        vn: {
            subtitle: "Công nghệ Cốt lõi",
            headline: "microPDRN™",
            keyMessage: "Chúng tôi không chỉ thêm thành phần.\nChúng tôi thiết kế lại cấu trúc hấp thụ.",
            comparison: {
                conventional: "PDRN Truyền thống (Bị chặn ở bề mặt)",
                micro: "microPDRN™ (Thâm nhập sâu)"
            },
            features: [
                {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__["Microscope"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 58,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    title: "25bp",
                    desc: "Cấu trúc dưới 25bp"
                },
                {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 59,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    title: "Speed",
                    desc: "Tốc độ hấp thụ vượt trội"
                },
                {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 60,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    title: "Regeneration",
                    desc: "Phản ứng tế bào tối đa"
                }
            ]
        },
        jp: {
            subtitle: "コアテクノロジー",
            headline: "microPDRN™",
            keyMessage: "成分を加えるだけではありません。\n吸収の構造を再設計します。",
            comparison: {
                conventional: "従来のPDRN (表面でブロック)",
                micro: "microPDRN™ (深層浸透)"
            },
            features: [
                {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__["Microscope"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 69,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    title: "25bp",
                    desc: "25bp以下の微細構造"
                },
                {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 70,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    title: "Speed",
                    desc: "圧倒的な吸収速度"
                },
                {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 71,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    title: "Regeneration",
                    desc: "細胞反応の最大化"
                }
            ]
        }
    };
    const text = content[lang];
    const [activeFeature, setActiveFeature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section bg-light-rose",
        style: {
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        style: {
                            marginBottom: '50px'
                        },
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'var(--color-burgundy)',
                                    letterSpacing: '3px',
                                    fontWeight: '700',
                                    fontSize: '1rem',
                                    textTransform: 'uppercase'
                                },
                                children: text.subtitle
                            }, void 0, false, {
                                fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                lineNumber: 86,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: 'clamp(3rem, 8vw, 5rem)',
                                    marginTop: '10px',
                                    marginBottom: '30px',
                                    fontFamily: 'var(--font-serif)',
                                    color: 'var(--color-burgundy)',
                                    lineHeight: '1'
                                },
                                children: text.headline
                            }, void 0, false, {
                                fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                lineNumber: 87,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'relative',
                                    padding: '20px 0'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '2px',
                                            height: '30px',
                                            background: 'var(--color-burgundy)',
                                            margin: '0 auto 20px',
                                            opacity: 0.4
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                        lineNumber: 91,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: 'clamp(1.5rem, 4vw, 2.4rem)',
                                            lineHeight: '1.5',
                                            fontFamily: 'var(--font-serif)',
                                            fontStyle: 'italic',
                                            whiteSpace: 'pre-line',
                                            fontWeight: '400',
                                            color: '#2c2c2c'
                                        },
                                        children: text.keyMessage
                                    }, void 0, false, {
                                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                        lineNumber: 92,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '1px',
                                            height: '40px',
                                            background: 'var(--color-burgundy)',
                                            margin: '30px auto 0',
                                            opacity: 0.3
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                        lineNumber: 103,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '80px',
                            padding: '0 20px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    maxWidth: '900px',
                                    width: '100%',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: '0 30px 60px rgba(99, 13, 22, 0.2)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    position: 'relative'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$src$2f$assets$2f$micropdrn_penetration$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$dualyn$2d$app$2f$src$2f$assets$2f$micropdrn_penetration$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "Conventional PDRN vs microPDRN Penetration Comparison",
                                    style: {
                                        width: '100%',
                                        display: 'block',
                                        objectFit: 'cover'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                    lineNumber: 124,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                lineNumber: 115,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    maxWidth: '900px',
                                    marginTop: '25px',
                                    padding: '0 10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '45%',
                                            textAlign: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'var(--font-serif)',
                                                fontSize: '1.1rem',
                                                color: '#666',
                                                fontWeight: '500'
                                            },
                                            children: text.comparison.conventional
                                        }, void 0, false, {
                                            fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                            lineNumber: 147,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                        lineNumber: 146,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '45%',
                                            textAlign: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'var(--font-serif)',
                                                fontSize: '1.2rem',
                                                color: 'var(--color-burgundy)',
                                                fontWeight: '700'
                                            },
                                            children: text.comparison.micro
                                        }, void 0, false, {
                                            fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                            lineNumber: 155,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                        lineNumber: 154,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                lineNumber: 138,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 108,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '20px',
                            marginTop: '60px'
                        },
                        children: text.features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onMouseEnter: ()=>setActiveFeature(i),
                                onMouseLeave: ()=>setActiveFeature(null),
                                style: {
                                    background: 'white',
                                    borderRadius: '24px',
                                    padding: '30px',
                                    boxShadow: activeFeature === i ? '0 20px 40px rgba(99, 13, 22, 0.15)' : '0 4px 20px rgba(0,0,0,0.02)',
                                    border: '1px solid rgba(0,0,0,0.03)',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    position: 'relative',
                                    overflow: 'hidden'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pill-tag",
                                        style: {
                                            display: 'inline-block',
                                            padding: '6px 14px',
                                            background: i === 0 ? '#E3F2FD' : i === 1 ? '#FFF3E0' : '#E8F5E9',
                                            color: i === 0 ? '#1565C0' : i === 1 ? '#EF6C00' : '#2E7D32',
                                            fontSize: '0.75rem',
                                            fontWeight: '700',
                                            marginBottom: '20px'
                                        },
                                        children: i === 0 ? 'TECHNOLOGY' : i === 1 ? 'MECHANISM' : 'CLINICAL'
                                    }, void 0, false, {
                                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                        lineNumber: 192,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '80px',
                                            height: '80px',
                                            background: 'var(--color-bg)',
                                            borderRadius: '20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            color: 'var(--color-burgundy)'
                                        },
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(f.icon, {
                                            size: 40
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                        lineNumber: 205,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontSize: '1.4rem',
                                            color: '#1A1A1A',
                                            fontWeight: '700',
                                            marginBottom: '10px',
                                            lineHeight: '1.2'
                                        },
                                        children: f.title
                                    }, void 0, false, {
                                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                        lineNumber: 217,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '1rem',
                                            color: '#666',
                                            lineHeight: '1.6',
                                            fontWeight: '500'
                                        },
                                        children: i === 0 ? 'Micro-sized particles for deep penetration.' : i === 1 ? 'Dual action PDRN + HA synergy.' : 'Clinically proven skin regeneration.'
                                    }, void 0, false, {
                                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                        lineNumber: 225,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            bottom: '0',
                                            left: '0',
                                            width: '100%',
                                            height: '4px',
                                            background: 'var(--color-burgundy)',
                                            transform: activeFeature === i ? 'scaleX(1)' : 'scaleX(0)',
                                            transformOrigin: 'left',
                                            transition: 'transform 0.3s ease'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                        lineNumber: 235,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: '120%',
                                            left: '50%',
                                            transform: activeFeature === i ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-10px)',
                                            padding: '15px 20px',
                                            background: 'white',
                                            color: '#2c2c2c',
                                            border: '1px solid rgba(0,0,0,0.1)',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                            fontSize: '0.85rem',
                                            width: '220px',
                                            opacity: activeFeature === i ? 1 : 0,
                                            pointerEvents: 'none',
                                            transition: 'all 0.3s',
                                            zIndex: 10,
                                            fontFamily: 'var(--font-body)'
                                        },
                                        children: f.desc
                                    }, void 0, false, {
                                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                        lineNumber: 247,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, i, true, {
                                fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                                lineNumber: 173,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                        lineNumber: 166,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                lineNumber: 81,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
      `
            }, void 0, false, {
                fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
                lineNumber: 271,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/dualyn-app/src/components/sections/CoreTech.jsx",
        lineNumber: 80,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CoreTech;
}),
"[project]/dualyn-app/src/components/sections/Ingredients.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const Ingredients = ({ lang })=>{
    const content = {
        kr: {
            title: "Technical Specification",
            subtitle: "FORMULATION DATA",
            specs: [
                {
                    label: "miPDRN Complex",
                    value: "5 mg/mL",
                    sub: "0.50% microPDRN"
                },
                {
                    label: "Sodium Hyaluronate (High)",
                    value: "1.80 %",
                    sub: "18mg/mL High Molecular"
                },
                {
                    label: "Sodium Hyaluronate (Low)",
                    value: "0.50 %",
                    sub: "Low Molecular Optimized"
                },
                {
                    label: "Polynucleotide (PN)",
                    value: "0.10 %",
                    sub: "Cellular Scaffold"
                },
                {
                    label: "Cyanocobalamin (Vit B12)",
                    value: "0.0005 %",
                    sub: "High Purity Grade"
                }
            ]
        },
        en: {
            title: "Technical Specification",
            subtitle: "FORMULATION DATA",
            specs: [
                {
                    label: "miPDRN Complex",
                    value: "5 mg/mL",
                    sub: "0.50% microPDRN"
                },
                {
                    label: "Sodium Hyaluronate (High)",
                    value: "1.80 %",
                    sub: "18mg/mL High Molecular"
                },
                {
                    label: "Sodium Hyaluronate (Low)",
                    value: "0.50 %",
                    sub: "Low Molecular Optimized"
                },
                {
                    label: "Polynucleotide (PN)",
                    value: "0.10 %",
                    sub: "Cellular Scaffold"
                },
                {
                    label: "Cyanocobalamin (Vit B12)",
                    value: "0.0005 %",
                    sub: "High Purity Grade"
                }
            ]
        },
        th: {
            title: "ข้อมูลจำเพาะทางเทคนิค",
            subtitle: "ข้อมูลสูตร",
            specs: [
                {
                    label: "miPDRN Complex",
                    value: "5 mg/mL",
                    sub: "0.50% microPDRN"
                },
                {
                    label: "Sodium Hyaluronate (High)",
                    value: "1.80 %",
                    sub: "18mg/mL โมเลกุลสูง"
                },
                {
                    label: "Sodium Hyaluronate (Low)",
                    value: "0.50 %",
                    sub: "โมเลกุลต่ำที่เหมาะสม"
                },
                {
                    label: "Polynucleotide (PN)",
                    value: "0.10 %",
                    sub: "โครงสร้างเซลล์"
                },
                {
                    label: "Cyanocobalamin (Vit B12)",
                    value: "0.0005 %",
                    sub: "เกรดความบริสุทธิ์สูง"
                }
            ]
        },
        ar: {
            title: "المواصفات الفنية",
            subtitle: "بيانات التركيبة",
            specs: [
                {
                    label: "miPDRN Complex",
                    value: "5 mg/mL",
                    sub: "0.50% microPDRN"
                },
                {
                    label: "Sodium Hyaluronate (High)",
                    value: "1.80 %",
                    sub: "18 ملغ/مل جزيئي عالي"
                },
                {
                    label: "Sodium Hyaluronate (Low)",
                    value: "0.50 %",
                    sub: "جزيئي منخفض محسن"
                },
                {
                    label: "Polynucleotide (PN)",
                    value: "0.10 %",
                    sub: "دعامة خلوية"
                },
                {
                    label: "Cyanocobalamin (Vit B12)",
                    value: "0.0005 %",
                    sub: "درجة نقاء عالية"
                }
            ]
        },
        vn: {
            title: "Thông số Kỹ thuật",
            subtitle: "DỮ LIỆU CÔNG THỨC",
            specs: [
                {
                    label: "miPDRN Complex",
                    value: "5 mg/mL",
                    sub: "0.50% microPDRN"
                },
                {
                    label: "Sodium Hyaluronate (High)",
                    value: "1.80 %",
                    sub: "18mg/mL Phân tử Cao"
                },
                {
                    label: "Sodium Hyaluronate (Low)",
                    value: "0.50 %",
                    sub: "Phân tử Thấp Tối ưu hóa"
                },
                {
                    label: "Polynucleotide (PN)",
                    value: "0.10 %",
                    sub: "Khung Tế bào"
                },
                {
                    label: "Cyanocobalamin (Vit B12)",
                    value: "0.0005 %",
                    sub: "Cấp độ Tinh khiết Cao"
                }
            ]
        },
        jp: {
            title: "技術仕様",
            subtitle: "処方データ",
            specs: [
                {
                    label: "miPDRN Complex",
                    value: "5 mg/mL",
                    sub: "0.50% microPDRN"
                },
                {
                    label: "Sodium Hyaluronate (High)",
                    value: "1.80 %",
                    sub: "18mg/mL 高分子"
                },
                {
                    label: "Sodium Hyaluronate (Low)",
                    value: "0.50 %",
                    sub: "低分子最適化"
                },
                {
                    label: "Polynucleotide (PN)",
                    value: "0.10 %",
                    sub: "細胞足場"
                },
                {
                    label: "Cyanocobalamin (Vit B12)",
                    value: "0.0005 %",
                    sub: "高純度グレード"
                }
            ]
        }
    };
    const text = content[lang];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section bg-white",
        style: {
            color: '#1A1A1A'
        },
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                style: {
                    maxWidth: '1000px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderBottom: '2px solid var(--color-burgundy)',
                            paddingBottom: '20px',
                            marginBottom: '60px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--color-burgundy)',
                                            letterSpacing: '3px',
                                            fontSize: '0.9rem',
                                            fontWeight: '700'
                                        },
                                        children: text.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
                                        lineNumber: 83,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '3rem',
                                            fontFamily: 'var(--font-serif)',
                                            marginTop: '10px',
                                            lineHeight: '1',
                                            color: '#1A1A1A'
                                        },
                                        children: text.title
                                    }, void 0, false, {
                                        fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
                                        lineNumber: 84,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
                                lineNumber: 82,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'right',
                                    opacity: 0.6,
                                    fontSize: '0.8rem',
                                    fontFamily: 'monospace',
                                    color: '#1A1A1A'
                                },
                                children: [
                                    "REF. DUALYN-2026-V1",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
                                        lineNumber: 87,
                                        columnNumber: 44
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "CERTIFIED GRADE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
                                lineNumber: 86,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            /* Optimized for mobile */ gap: '20px',
                            width: '100%'
                        },
                        children: text.specs.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SpecCard, {
                                item: item
                            }, index, false, {
                                fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
                                lineNumber: 100,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '60px',
                            paddingTop: '20px',
                            borderTop: '0.5px solid rgba(255,255,255,0.1)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            opacity: 0.5,
                            fontSize: '0.8rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "* All measurements are subject to standard lab tolerance."
                            }, void 0, false, {
                                fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
                                lineNumber: 106,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "DUALYN™ ORIGINAL FORMULA"
                            }, void 0, false, {
                                fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
                                lineNumber: 107,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
                lineNumber: 78,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
        lineNumber: 77,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const SpecCard = ({ item })=>{
    // Default to displaying ppm (true)
    const [isPpm, setIsPpm] = __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(true);
    // Check if the value is a percentage
    const isPercentage = item.value.includes('%');
    // Calculate display value
    let displayValue = item.value;
    if (isPercentage && isPpm) {
        const numValue = parseFloat(item.value);
        if (!isNaN(numValue)) {
            // 1% = 10,000 ppm
            displayValue = `${(numValue * 10000).toLocaleString()} ppm`;
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "spec-card",
        style: {
            background: 'white',
            padding: '30px',
            borderRadius: '24px',
            /* Soft commercial curve */ boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            transition: 'transform 0.3s ease',
            border: '1px solid rgba(0,0,0,0.03)',
            cursor: isPercentage ? 'pointer' : 'default',
            userSelect: 'none'
        },
        onClick: ()=>isPercentage && setIsPpm(!isPpm),
        onMouseEnter: (e)=>{
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(99, 13, 22, 0.1)';
        },
        onMouseLeave: (e)=>{
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)';
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '15px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        style: {
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: '#2c2c2c',
                            fontFamily: 'var(--font-body)',
                            maxWidth: '70%'
                        },
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
                        lineNumber: 158,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pill-tag",
                        style: {
                            fontSize: '0.75rem',
                            padding: '4px 12px',
                            background: '#f2d5d7',
                            color: 'var(--color-burgundy)',
                            fontWeight: '700',
                            borderRadius: '9999px',
                            whiteSpace: 'nowrap'
                        },
                        children: "SPEC"
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
                        lineNumber: 165,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
                lineNumber: 157,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'right',
                    marginTop: 'auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: 'block',
                            fontFamily: 'var(--font-body)',
                            /* Ensure Pretendard/Sans for modern look */ fontSize: '3rem',
                            /* Massive Impact */ fontWeight: '800',
                            color: 'var(--color-burgundy)',
                            lineHeight: '1',
                            letterSpacing: '-0.02em',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            opacity: isPpm ? 0.8 : 1,
                            transform: isPpm ? 'scale(0.95)' : 'scale(1)',
                            transformOrigin: 'right center'
                        },
                        children: displayValue
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
                        lineNumber: 177,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: '0.9rem',
                            color: '#666',
                            fontWeight: '500',
                            marginTop: '5px',
                            display: 'block'
                        },
                        children: item.sub
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
                        lineNumber: 192,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
                lineNumber: 176,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/dualyn-app/src/components/sections/Ingredients.jsx",
        lineNumber: 133,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Ingredients;
}),
"[project]/dualyn-app/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Zap
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }
    ]
];
const Zap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("zap", __iconNode);
;
 //# sourceMappingURL=zap.js.map
}),
"[project]/dualyn-app/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Zap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript)");
}),
"[project]/dualyn-app/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Activity
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
            key: "169zse"
        }
    ]
];
const Activity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("activity", __iconNode);
;
 //# sourceMappingURL=activity.js.map
}),
"[project]/dualyn-app/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Activity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript)");
}),
"[project]/dualyn-app/node_modules/lucide-react/dist/esm/icons/microscope.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Microscope
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M6 18h8",
            key: "1borvv"
        }
    ],
    [
        "path",
        {
            d: "M3 22h18",
            key: "8prr45"
        }
    ],
    [
        "path",
        {
            d: "M14 22a7 7 0 1 0 0-14h-1",
            key: "1jwaiy"
        }
    ],
    [
        "path",
        {
            d: "M9 14h2",
            key: "197e7h"
        }
    ],
    [
        "path",
        {
            d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",
            key: "1bmzmy"
        }
    ],
    [
        "path",
        {
            d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",
            key: "1drr47"
        }
    ]
];
const Microscope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("microscope", __iconNode);
;
 //# sourceMappingURL=microscope.js.map
}),
"[project]/dualyn-app/node_modules/lucide-react/dist/esm/icons/microscope.js [app-ssr] (ecmascript) <export default as Microscope>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Microscope",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/lucide-react/dist/esm/icons/microscope.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=dualyn-app_1ea9eb67._.js.map