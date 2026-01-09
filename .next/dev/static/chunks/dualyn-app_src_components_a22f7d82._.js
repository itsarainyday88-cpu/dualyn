(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dualyn-app/src/components/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Header = ({ lang, setLang })=>{
    _s();
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Default to 'en' if not provided
    const currentLang = lang || 'en';
    const languages = [
        {
            code: 'en',
            label: 'EN'
        },
        {
            code: 'kr',
            label: 'KR'
        },
        {
            code: 'th',
            label: 'TH'
        },
        {
            code: 'ar',
            label: 'AR'
        },
        {
            code: 'vn',
            label: 'VN'
        },
        {
            code: 'jp',
            label: 'JP'
        }
    ];
    const menuItems = [
        {
            path: '/brand-story',
            label: 'BRAND STORY'
        },
        {
            path: '/technology',
            label: 'TECHNOLOGY'
        },
        {
            path: '/ingredients',
            label: 'INGREDIENTS'
        }
    ];
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        } else {
            document.body.style.overflow = 'unset';
        }
    };
    const handleNavigation = (path)=>{
        router.push(path);
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
    };
    const handleLangChange = (code)=>{
        if (setLang) {
            setLang(code);
        }
        setIsDropdownOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "jsx-8be434c727555394" + " " + "header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '80px',
                    position: 'relative',
                    zIndex: 1001
                },
                className: "jsx-8be434c727555394" + " " + "container flex-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "logo",
                        style: {
                            fontSize: '24px',
                            fontWeight: '700',
                            fontFamily: 'var(--font-serif)',
                            color: 'var(--color-burgundy)',
                            textDecoration: 'none',
                            zIndex: 1002
                        },
                        children: "DUALYN"
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/Header.jsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            zIndex: 1002
                        },
                        className: "jsx-8be434c727555394" + " " + "flex-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'relative'
                                },
                                className: "jsx-8be434c727555394",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsDropdownOpen(!isDropdownOpen),
                                        style: {
                                            background: 'none',
                                            border: `1px solid var(--color-burgundy)`,
                                            borderRadius: '9999px',
                                            padding: '8px 20px',
                                            color: 'var(--color-burgundy)',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        },
                                        className: "jsx-8be434c727555394",
                                        children: [
                                            languages.find((l)=>l.code === currentLang)?.label || 'EN',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "12",
                                                height: "12",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                style: {
                                                    transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    transition: 'transform 0.2s'
                                                },
                                                className: "jsx-8be434c727555394",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "6 9 12 15 18 9",
                                                    className: "jsx-8be434c727555394"
                                                }, void 0, false, {
                                                    fileName: "[project]/dualyn-app/src/components/Header.jsx",
                                                    lineNumber: 92,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/dualyn-app/src/components/Header.jsx",
                                                lineNumber: 81,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dualyn-app/src/components/Header.jsx",
                                        lineNumber: 63,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: '120%',
                                            right: '0',
                                            background: 'white',
                                            border: '1px solid rgba(0,0,0,0.1)',
                                            borderRadius: '12px',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                            overflow: 'hidden',
                                            minWidth: '120px',
                                            zIndex: 100
                                        },
                                        className: "jsx-8be434c727555394",
                                        children: languages.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleLangChange(l.code),
                                                style: {
                                                    display: 'block',
                                                    width: '100%',
                                                    textAlign: 'left',
                                                    padding: '10px 20px',
                                                    background: currentLang === l.code ? '#fafafa' : 'white',
                                                    color: currentLang === l.code ? 'var(--color-burgundy)' : '#333',
                                                    border: 'none',
                                                    fontWeight: currentLang === l.code ? '700' : '400',
                                                    cursor: 'pointer',
                                                    fontSize: '14px',
                                                    transition: 'background 0.2s'
                                                },
                                                onMouseEnter: (e)=>e.target.style.background = '#f5f5f5',
                                                onMouseLeave: (e)=>e.target.style.background = currentLang === l.code ? '#fafafa' : 'white',
                                                className: "jsx-8be434c727555394",
                                                children: l.label
                                            }, l.code, false, {
                                                fileName: "[project]/dualyn-app/src/components/Header.jsx",
                                                lineNumber: 110,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/dualyn-app/src/components/Header.jsx",
                                        lineNumber: 97,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dualyn-app/src/components/Header.jsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleMenu,
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--color-burgundy)',
                                    cursor: 'pointer',
                                    zIndex: 1005,
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px'
                                },
                                className: "jsx-8be434c727555394",
                                children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 28
                                }, void 0, false, {
                                    fileName: "[project]/dualyn-app/src/components/Header.jsx",
                                    lineNumber: 153,
                                    columnNumber: 39
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 28
                                }, void 0, false, {
                                    fileName: "[project]/dualyn-app/src/components/Header.jsx",
                                    lineNumber: 153,
                                    columnNumber: 57
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/dualyn-app/src/components/Header.jsx",
                                lineNumber: 137,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dualyn-app/src/components/Header.jsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/dualyn-app/src/components/Header.jsx",
                lineNumber: 55,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: 'white',
                    zIndex: 1000,
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
                    opacity: isMenuOpen ? 1 : 0,
                    transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '60px'
                },
                className: "jsx-8be434c727555394",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '40px',
                            textAlign: 'center'
                        },
                        className: "jsx-8be434c727555394",
                        children: menuItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>handleNavigation(item.path),
                                style: {
                                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                    fontFamily: 'var(--font-serif)',
                                    color: 'var(--color-burgundy)',
                                    textDecoration: 'none',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    opacity: isMenuOpen ? 1 : 0,
                                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                                    transition: `all 0.5s ease ${0.1 + index * 0.1}s`,
                                    letterSpacing: '-0.02em'
                                },
                                onMouseEnter: (e)=>e.target.style.fontStyle = 'italic',
                                onMouseLeave: (e)=>e.target.style.fontStyle = 'normal',
                                className: "jsx-8be434c727555394",
                                children: item.label
                            }, index, false, {
                                fileName: "[project]/dualyn-app/src/components/Header.jsx",
                                lineNumber: 183,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/Header.jsx",
                        lineNumber: 176,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: '60px',
                            opacity: 0.5,
                            fontSize: '0.9rem',
                            letterSpacing: '0.1em'
                        },
                        className: "jsx-8be434c727555394",
                        children: "© 2026 BIOBIJOU"
                    }, void 0, false, {
                        fileName: "[project]/dualyn-app/src/components/Header.jsx",
                        lineNumber: 207,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/dualyn-app/src/components/Header.jsx",
                lineNumber: 159,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "8be434c727555394",
                children: ".header{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);z-index:1000;background:#ffffffe6;border-bottom:1px solid #0000000d;width:100%;position:fixed;top:0;left:0}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/dualyn-app/src/components/Header.jsx",
        lineNumber: 54,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "MwS1/r3Ddn2QGaV8a90yHnWjxpQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dualyn-app/src/components/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dualyn-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const Footer = ({ lang })=>{
    const content = {
        kr: {
            inquiry: '글로벌 파트너십 문의',
            btn: '공식 홈페이지 문의하기',
            brochure: '브로슈어'
        },
        en: {
            inquiry: 'Global Partnership Inquiry',
            btn: 'Contact via Official Website',
            brochure: 'Brochure'
        },
        th: {
            inquiry: 'ติดต่อความร่วมมือทางธุรกิจ',
            btn: 'ติดต่อผ่านเว็บไซต์ทางการ',
            brochure: 'โบรชัวร์'
        },
        ar: {
            inquiry: 'استفسار عن الشراكة العالمية',
            btn: 'تواصل عبر الموقع الرسمي',
            brochure: 'الكتيب'
        },
        vn: {
            inquiry: 'Yêu cầu Đối tác Toàn cầu',
            btn: 'Liên hệ qua Website Chính thức',
            brochure: 'Tài liệu'
        },
        jp: {
            inquiry: 'グローバルパートナーシップのお問い合わせ',
            btn: '公式サイトから問い合わせる',
            brochure: 'パンフレット'
        }
    };
    const text = content[lang] || content.en;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            background: 'var(--color-burgundy)',
            color: 'white',
            padding: '80px 0',
            textAlign: 'center'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        color: 'white',
                        marginBottom: '20px'
                    },
                    children: "DUALYN"
                }, void 0, false, {
                    fileName: "[project]/dualyn-app/src/components/Footer.jsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        opacity: 0.7,
                        marginBottom: '40px'
                    },
                    children: text.inquiry
                }, void 0, false, {
                    fileName: "[project]/dualyn-app/src/components/Footer.jsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "http://biobijou.co.kr/sub4/inquiry.php",
                            target: "_blank",
                            rel: "noreferrer",
                            style: {
                                display: 'inline-block',
                                padding: '16px 40px',
                                background: 'transparent',
                                border: '1px solid white',
                                /* Outlined initially */ color: 'white',
                                textDecoration: 'none',
                                fontWeight: '600',
                                fontSize: '1rem',
                                borderRadius: '9999px',
                                /* Full Pill */ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                letterSpacing: '0.05em'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.background = 'white';
                                e.currentTarget.style.color = 'var(--color-burgundy)';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = 'white';
                            },
                            children: text.btn
                        }, void 0, false, {
                            fileName: "[project]/dualyn-app/src/components/Footer.jsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/DUALYN.pdf",
                            download: "DUALYN.pdf",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                                display: 'inline-block',
                                padding: '16px 40px',
                                background: 'white',
                                border: '1px solid white',
                                color: 'var(--color-burgundy)',
                                textDecoration: 'none',
                                fontWeight: '600',
                                fontSize: '1rem',
                                borderRadius: '9999px',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                letterSpacing: '0.05em'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = 'white';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.background = 'white';
                                e.currentTarget.style.color = 'var(--color-burgundy)';
                            },
                            children: text.brochure
                        }, void 0, false, {
                            fileName: "[project]/dualyn-app/src/components/Footer.jsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dualyn-app/src/components/Footer.jsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dualyn$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: '60px',
                        fontSize: '0.8rem',
                        opacity: 0.5
                    },
                    children: "© 2026 BIOBIJOU. All rights reserved."
                }, void 0, false, {
                    fileName: "[project]/dualyn-app/src/components/Footer.jsx",
                    lineNumber: 79,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/dualyn-app/src/components/Footer.jsx",
            lineNumber: 17,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/dualyn-app/src/components/Footer.jsx",
        lineNumber: 16,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=dualyn-app_src_components_a22f7d82._.js.map