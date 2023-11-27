"use strict";
exports.id = 666;
exports.ids = [666];
exports.modules = {

/***/ 739:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addBasePath", ({
    enumerable: true,
    get: function() {
        return addBasePath;
    }
}));
const _addpathprefix = __webpack_require__(1751);
const _normalizetrailingslash = __webpack_require__(6089);
const basePath =  false || "";
function addBasePath(path, required) {
    if (false) {}
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)((0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 2148:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(6089);
const addLocale = function(path) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if (false) {}
    return path;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 4783:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "callServer", ({
    enumerable: true,
    get: function() {
        return callServer;
    }
}));
const _approuter = __webpack_require__(125);
async function callServer(actionId, actionArgs) {
    const actionDispatcher = (0, _approuter.getServerActionDispatcher)();
    if (!actionDispatcher) {
        throw new Error("Invariant: missing action dispatcher.");
    }
    return new Promise((resolve, reject)=>{
        actionDispatcher({
            actionId,
            actionArgs,
            resolve,
            reject
        });
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-call-server.js.map


/***/ }),

/***/ 4275:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "AppRouterAnnouncer", ({
    enumerable: true,
    get: function() {
        return AppRouterAnnouncer;
    }
}));
const _react = __webpack_require__(8038);
const _reactdom = __webpack_require__(8704);
const ANNOUNCER_TYPE = "next-route-announcer";
const ANNOUNCER_ID = "__next-route-announcer__";
function getAnnouncerNode() {
    var _existingAnnouncer_shadowRoot;
    const existingAnnouncer = document.getElementsByName(ANNOUNCER_TYPE)[0];
    if (existingAnnouncer == null ? void 0 : (_existingAnnouncer_shadowRoot = existingAnnouncer.shadowRoot) == null ? void 0 : _existingAnnouncer_shadowRoot.childNodes[0]) {
        return existingAnnouncer.shadowRoot.childNodes[0];
    } else {
        const container = document.createElement(ANNOUNCER_TYPE);
        container.style.cssText = "position:absolute";
        const announcer = document.createElement("div");
        announcer.setAttribute("aria-live", "assertive");
        announcer.setAttribute("id", ANNOUNCER_ID);
        announcer.setAttribute("role", "alert");
        announcer.style.cssText = "position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal";
        // Use shadow DOM here to avoid any potential CSS bleed
        const shadow = container.attachShadow({
            mode: "open"
        });
        shadow.appendChild(announcer);
        document.body.appendChild(container);
        return announcer;
    }
}
function AppRouterAnnouncer(param) {
    let { tree } = param;
    const [portalNode, setPortalNode] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        const announcer = getAnnouncerNode();
        setPortalNode(announcer);
        return ()=>{
            const container = document.getElementsByTagName(ANNOUNCER_TYPE)[0];
            if (container == null ? void 0 : container.isConnected) {
                document.body.removeChild(container);
            }
        };
    }, []);
    const [routeAnnouncement, setRouteAnnouncement] = (0, _react.useState)("");
    const previousTitle = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        let currentTitle = "";
        if (document.title) {
            currentTitle = document.title;
        } else {
            const pageHeader = document.querySelector("h1");
            if (pageHeader) {
                currentTitle = pageHeader.innerText || pageHeader.textContent || "";
            }
        }
        // Only announce the title change, but not for the first load because screen
        // readers do that automatically.
        if (typeof previousTitle.current !== "undefined") {
            setRouteAnnouncement(currentTitle);
        }
        previousTitle.current = currentTitle;
    }, [
        tree
    ]);
    return portalNode ? /*#__PURE__*/ (0, _reactdom.createPortal)(routeAnnouncement, portalNode) : null;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-announcer.js.map


/***/ }),

/***/ 281:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RSC: function() {
        return RSC;
    },
    ACTION: function() {
        return ACTION;
    },
    NEXT_ROUTER_STATE_TREE: function() {
        return NEXT_ROUTER_STATE_TREE;
    },
    NEXT_ROUTER_PREFETCH: function() {
        return NEXT_ROUTER_PREFETCH;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    FETCH_CACHE_HEADER: function() {
        return FETCH_CACHE_HEADER;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_VARY_HEADER: function() {
        return RSC_VARY_HEADER;
    },
    FLIGHT_PARAMETERS: function() {
        return FLIGHT_PARAMETERS;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    }
});
const RSC = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const FETCH_CACHE_HEADER = "x-vercel-sc-headers";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const RSC_VARY_HEADER = RSC + ", " + NEXT_ROUTER_STATE_TREE + ", " + NEXT_ROUTER_PREFETCH;
const FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
];
const NEXT_RSC_UNION_QUERY = "_rsc";
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map


/***/ }),

/***/ 125:
/***/ ((module, exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getServerActionDispatcher: function() {
        return getServerActionDispatcher;
    },
    urlToUrlWithoutFlightMarker: function() {
        return urlToUrlWithoutFlightMarker;
    },
    default: function() {
        return AppRouter;
    }
});
const _interop_require_wildcard = __webpack_require__(1113);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8038));
const _approutercontext = __webpack_require__(3280);
const _routerreducer = __webpack_require__(5192);
const _routerreducertypes = __webpack_require__(549);
const _createhreffromurl = __webpack_require__(8253);
const _hooksclientcontext = __webpack_require__(9274);
const _usereducerwithdevtools = __webpack_require__(9051);
const _errorboundary = __webpack_require__(1522);
const _createinitialrouterstate = __webpack_require__(3558);
const _isbot = __webpack_require__(1897);
const _addbasepath = __webpack_require__(739);
const _approuterannouncer = __webpack_require__(4275);
const _redirectboundary = __webpack_require__(606);
const _notfoundboundary = __webpack_require__(7944);
const _findheadincache = __webpack_require__(7997);
const _infinitepromise = __webpack_require__(6479);
const _approuterheaders = __webpack_require__(281);
const isServer = "undefined" === "undefined";
// Ensure the initialParallelRoutes are not combined because of double-rendering in the browser with Strict Mode.
let initialParallelRoutes = isServer ? null : new Map();
let globalServerActionDispatcher = null;
function getServerActionDispatcher() {
    return globalServerActionDispatcher;
}
function urlToUrlWithoutFlightMarker(url) {
    const urlWithoutFlightParameters = new URL(url, location.origin);
    urlWithoutFlightParameters.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    if (true) {
        if (false) {}
    }
    return urlWithoutFlightParameters;
}
const HotReloader =  true ? null : 0;
function isExternalURL(url) {
    return url.origin !== window.location.origin;
}
function HistoryUpdater(param) {
    let { tree, pushRef, canonicalUrl, sync } = param;
    // @ts-ignore TODO-APP: useInsertionEffect is available
    _react.default.useInsertionEffect(()=>{
        // Identifier is shortened intentionally.
        // __NA is used to identify if the history entry can be handled by the app-router.
        // __N is used to identify if the history entry can be handled by the old router.
        const historyState = {
            __NA: true,
            tree
        };
        if (pushRef.pendingPush && (0, _createhreffromurl.createHrefFromUrl)(new URL(window.location.href)) !== canonicalUrl) {
            // This intentionally mutates React state, pushRef is overwritten to ensure additional push/replace calls do not trigger an additional history entry.
            pushRef.pendingPush = false;
            window.history.pushState(historyState, "", canonicalUrl);
        } else {
            window.history.replaceState(historyState, "", canonicalUrl);
        }
        sync();
    }, [
        tree,
        pushRef,
        canonicalUrl,
        sync
    ]);
    return null;
}
/**
 * The global router that wraps the application components.
 */ function Router(param) {
    let { buildId, initialHead, initialTree, initialCanonicalUrl, children, assetPrefix, notFound, notFoundStyles, asNotFound } = param;
    const initialState = (0, _react.useMemo)(()=>(0, _createinitialrouterstate.createInitialRouterState)({
            buildId,
            children,
            initialCanonicalUrl,
            initialTree,
            initialParallelRoutes,
            isServer,
            location: !isServer ? window.location : null,
            initialHead
        }), [
        buildId,
        children,
        initialCanonicalUrl,
        initialTree,
        initialHead
    ]);
    const [{ tree, cache, prefetchCache, pushRef, focusAndScrollRef, canonicalUrl, nextUrl }, dispatch, sync] = (0, _usereducerwithdevtools.useReducerWithReduxDevtools)(_routerreducer.reducer, initialState);
    (0, _react.useEffect)(()=>{
        // Ensure initialParallelRoutes is cleaned up from memory once it's used.
        initialParallelRoutes = null;
    }, []);
    // Add memoized pathname/query for useSearchParams and usePathname.
    const { searchParams, pathname } = (0, _react.useMemo)(()=>{
        const url = new URL(canonicalUrl,  true ? "http://n" : 0);
        return {
            // This is turned into a readonly class in `useSearchParams`
            searchParams: url.searchParams,
            pathname: url.pathname
        };
    }, [
        canonicalUrl
    ]);
    /**
   * Server response that only patches the cache and tree.
   */ const changeByServerResponse = (0, _react.useCallback)((previousTree, flightData, overrideCanonicalUrl)=>{
        _react.default.startTransition(()=>{
            dispatch({
                type: _routerreducertypes.ACTION_SERVER_PATCH,
                flightData,
                previousTree,
                overrideCanonicalUrl,
                cache: {
                    status: _approutercontext.CacheStates.LAZY_INITIALIZED,
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map()
                },
                mutable: {}
            });
        });
    }, [
        dispatch
    ]);
    const navigate = (0, _react.useCallback)((href, navigateType, forceOptimisticNavigation)=>{
        const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
        return dispatch({
            type: _routerreducertypes.ACTION_NAVIGATE,
            url,
            isExternalUrl: isExternalURL(url),
            locationSearch: location.search,
            forceOptimisticNavigation,
            navigateType,
            cache: {
                status: _approutercontext.CacheStates.LAZY_INITIALIZED,
                data: null,
                subTreeData: null,
                parallelRoutes: new Map()
            },
            mutable: {}
        });
    }, [
        dispatch
    ]);
    const serverActionDispatcher = (0, _react.useCallback)((actionPayload)=>{
        _react.default.startTransition(()=>{
            dispatch({
                ...actionPayload,
                type: _routerreducertypes.ACTION_SERVER_ACTION,
                mutable: {},
                navigate,
                changeByServerResponse
            });
        });
    }, [
        changeByServerResponse,
        dispatch,
        navigate
    ]);
    globalServerActionDispatcher = serverActionDispatcher;
    /**
   * The app router that is exposed through `useRouter`. It's only concerned with dispatching actions to the reducer, does not hold state.
   */ const appRouter = (0, _react.useMemo)(()=>{
        const routerInstance = {
            back: ()=>window.history.back(),
            forward: ()=>window.history.forward(),
            prefetch: (href, options)=>{
                // If prefetch has already been triggered, don't trigger it again.
                if ((0, _isbot.isBot)(window.navigator.userAgent)) {
                    return;
                }
                const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
                // External urls can't be prefetched in the same way.
                if (isExternalURL(url)) {
                    return;
                }
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    var _options_kind;
                    dispatch({
                        type: _routerreducertypes.ACTION_PREFETCH,
                        url,
                        kind: (_options_kind = options == null ? void 0 : options.kind) != null ? _options_kind : _routerreducertypes.PrefetchKind.FULL
                    });
                });
            },
            replace: (href, options)=>{
                if (options === void 0) options = {};
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    navigate(href, "replace", Boolean(options.forceOptimisticNavigation));
                });
            },
            push: (href, options)=>{
                if (options === void 0) options = {};
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    navigate(href, "push", Boolean(options.forceOptimisticNavigation));
                });
            },
            refresh: ()=>{
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    dispatch({
                        type: _routerreducertypes.ACTION_REFRESH,
                        cache: {
                            status: _approutercontext.CacheStates.LAZY_INITIALIZED,
                            data: null,
                            subTreeData: null,
                            parallelRoutes: new Map()
                        },
                        mutable: {},
                        origin: window.location.origin
                    });
                });
            },
            // @ts-ignore we don't want to expose this method at all
            fastRefresh: ()=>{
                if (true) {
                    throw new Error("fastRefresh can only be used in development mode. Please use refresh instead.");
                } else {}
            }
        };
        return routerInstance;
    }, [
        dispatch,
        navigate
    ]);
    (0, _react.useEffect)(()=>{
        // Exists for debugging purposes. Don't use in application code.
        if (window.next) {
            window.next.router = appRouter;
        }
    }, [
        appRouter
    ]);
    (0, _react.useEffect)(()=>{
        // Add `window.nd` for debugging purposes.
        // This is not meant for use in applications as concurrent rendering will affect the cache/tree/router.
        // @ts-ignore this is for debugging
        window.nd = {
            router: appRouter,
            cache,
            prefetchCache,
            tree
        };
    }, [
        appRouter,
        cache,
        prefetchCache,
        tree
    ]);
    // When mpaNavigation flag is set do a hard navigation to the new url.
    // Infinitely suspend because we don't actually want to rerender any child
    // components with the new URL and any entangled state updates shouldn't
    // commit either (eg: useTransition isPending should stay true until the page
    // unloads).
    //
    // This is a side effect in render. Don't try this at home, kids. It's
    // probably safe because we know this is a singleton component and it's never
    // in <Offscreen>. At least I hope so. (It will run twice in dev strict mode,
    // but that's... fine?)
    if (pushRef.mpaNavigation) {
        const location1 = window.location;
        if (pushRef.pendingPush) {
            location1.assign(canonicalUrl);
        } else {
            location1.replace(canonicalUrl);
        }
        // TODO-APP: Should we listen to navigateerror here to catch failed
        // navigations somehow? And should we call window.stop() if a SPA navigation
        // should interrupt an MPA one?
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    /**
   * Handle popstate event, this is used to handle back/forward in the browser.
   * By default dispatches ACTION_RESTORE, however if the history entry was not pushed/replaced by app-router it will reload the page.
   * That case can happen when the old router injected the history entry.
   */ const onPopState = (0, _react.useCallback)((param)=>{
        let { state } = param;
        if (!state) {
            // TODO-APP: this case only happens when pushState/replaceState was called outside of Next.js. It should probably reload the page in this case.
            return;
        }
        // This case happens when the history entry was pushed by the `pages` router.
        if (!state.__NA) {
            window.location.reload();
            return;
        }
        // @ts-ignore useTransition exists
        // TODO-APP: Ideally the back button should not use startTransition as it should apply the updates synchronously
        // Without startTransition works if the cache is there for this path
        _react.default.startTransition(()=>{
            dispatch({
                type: _routerreducertypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: state.tree
            });
        });
    }, [
        dispatch
    ]);
    // Register popstate event to call onPopstate.
    (0, _react.useEffect)(()=>{
        window.addEventListener("popstate", onPopState);
        return ()=>{
            window.removeEventListener("popstate", onPopState);
        };
    }, [
        onPopState
    ]);
    const head = (0, _react.useMemo)(()=>{
        return (0, _findheadincache.findHeadInCache)(cache, tree[1]);
    }, [
        cache,
        tree
    ]);
    const content = /*#__PURE__*/ _react.default.createElement(_notfoundboundary.NotFoundBoundary, {
        notFound: notFound,
        notFoundStyles: notFoundStyles,
        asNotFound: asNotFound
    }, /*#__PURE__*/ _react.default.createElement(_redirectboundary.RedirectBoundary, null, head, cache.subTreeData, /*#__PURE__*/ _react.default.createElement(_approuterannouncer.AppRouterAnnouncer, {
        tree: tree
    })));
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(HistoryUpdater, {
        tree: tree,
        pushRef: pushRef,
        canonicalUrl: canonicalUrl,
        sync: sync
    }), /*#__PURE__*/ _react.default.createElement(_hooksclientcontext.PathnameContext.Provider, {
        value: pathname
    }, /*#__PURE__*/ _react.default.createElement(_hooksclientcontext.SearchParamsContext.Provider, {
        value: searchParams
    }, /*#__PURE__*/ _react.default.createElement(_approutercontext.GlobalLayoutRouterContext.Provider, {
        value: {
            buildId,
            changeByServerResponse,
            tree,
            focusAndScrollRef,
            nextUrl
        }
    }, /*#__PURE__*/ _react.default.createElement(_approutercontext.AppRouterContext.Provider, {
        value: appRouter
    }, /*#__PURE__*/ _react.default.createElement(_approutercontext.LayoutRouterContext.Provider, {
        value: {
            childNodes: cache.parallelRoutes,
            tree: tree,
            // Root node always has `url`
            // Provided in AppTreeContext to ensure it can be overwritten in layout-router
            url: canonicalUrl
        }
    }, HotReloader ? /*#__PURE__*/ _react.default.createElement(HotReloader, {
        assetPrefix: assetPrefix
    }, content) : content))))));
}
function AppRouter(props) {
    const { globalErrorComponent, ...rest } = props;
    return /*#__PURE__*/ _react.default.createElement(_errorboundary.ErrorBoundary, {
        errorComponent: globalErrorComponent
    }, /*#__PURE__*/ _react.default.createElement(Router, rest));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 2594:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "bailoutToClientRendering", ({
    enumerable: true,
    get: function() {
        return bailoutToClientRendering;
    }
}));
const _dynamicnossr = __webpack_require__(701);
const _staticgenerationasyncstorage = __webpack_require__(94);
function bailoutToClientRendering() {
    const staticGenerationStore = _staticgenerationasyncstorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        (0, _dynamicnossr.suspense)();
    }
    return false;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map


/***/ }),

/***/ 5078:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "clientHookInServerComponentError", ({
    enumerable: true,
    get: function() {
        return clientHookInServerComponentError;
    }
}));
const _interop_require_default = __webpack_require__(5967);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
function clientHookInServerComponentError(hookName) {
    if (false) {}
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-hook-in-server-component-error.js.map


/***/ }),

/***/ 1522:
/***/ ((module, exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorBoundaryHandler: function() {
        return ErrorBoundaryHandler;
    },
    default: function() {
        return GlobalError;
    },
    ErrorBoundary: function() {
        return ErrorBoundary;
    }
});
const _interop_require_default = __webpack_require__(5967);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _navigation = __webpack_require__(5171);
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "28px",
        margin: "0 8px"
    }
};
class ErrorBoundaryHandler extends _react.default.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.error) {
            return {
                error: null,
                previousPathname: props.pathname
            };
        }
        return {
            error: state.error,
            previousPathname: props.pathname
        };
    }
    render() {
        if (this.state.error) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, this.props.errorStyles, /*#__PURE__*/ _react.default.createElement(this.props.errorComponent, {
                error: this.state.error,
                reset: this.reset
            }));
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.reset = ()=>{
            this.setState({
                error: null
            });
        };
        this.state = {
            error: null,
            previousPathname: this.props.pathname
        };
    }
}
function GlobalError(param) {
    let { error } = param;
    return /*#__PURE__*/ _react.default.createElement("html", null, /*#__PURE__*/ _react.default.createElement("head", null), /*#__PURE__*/ _react.default.createElement("body", null, /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.error
    }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("h2", {
        style: styles.text
    }, "Application error: a client-side exception has occurred (see the browser console for more information)."), (error == null ? void 0 : error.digest) && /*#__PURE__*/ _react.default.createElement("p", {
        style: styles.text
    }, "Digest: " + error.digest)))));
}
function ErrorBoundary(param) {
    let { errorComponent, errorStyles, children } = param;
    const pathname = (0, _navigation.usePathname)();
    if (errorComponent) {
        return /*#__PURE__*/ _react.default.createElement(ErrorBoundaryHandler, {
            pathname: pathname,
            errorComponent: errorComponent,
            errorStyles: errorStyles
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 8340:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DYNAMIC_ERROR_CODE: function() {
        return DYNAMIC_ERROR_CODE;
    },
    DynamicServerError: function() {
        return DynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
class DynamicServerError extends Error {
    constructor(type){
        super("Dynamic server usage: " + type);
        this.digest = DYNAMIC_ERROR_CODE;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map


/***/ }),

/***/ 6479:
/***/ ((module, exports) => {

/**
 * Used to cache in createInfinitePromise
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createInfinitePromise", ({
    enumerable: true,
    get: function() {
        return createInfinitePromise;
    }
}));
let infinitePromise;
function createInfinitePromise() {
    if (!infinitePromise) {
        // Only create the Promise once
        infinitePromise = new Promise(()=>{
        // This is used to debug when the rendering is never updated.
        // setTimeout(() => {
        //   infinitePromise = new Error('Infinite promise')
        //   resolve()
        // }, 5000)
        });
    }
    return infinitePromise;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=infinite-promise.js.map


/***/ }),

/***/ 6249:
/***/ ((module, exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return OuterLayoutRouter;
    }
}));
const _interop_require_default = __webpack_require__(5967);
const _interop_require_wildcard = __webpack_require__(1113);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8038));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8704));
const _approutercontext = __webpack_require__(3280);
const _fetchserverresponse = __webpack_require__(969);
const _infinitepromise = __webpack_require__(6479);
const _errorboundary = __webpack_require__(1522);
const _matchsegments = __webpack_require__(5507);
const _handlesmoothscroll = __webpack_require__(1668);
const _redirectboundary = __webpack_require__(606);
const _notfoundboundary = __webpack_require__(7944);
const _getsegmentvalue = __webpack_require__(3715);
const _createroutercachekey = __webpack_require__(5370);
/**
 * Add refetch marker to router state at the point of the current layout segment.
 * This ensures the response returned is not further down than the current layout segment.
 */ function walkAddRefetch(segmentPathToWalk, treeToRecreate) {
    if (segmentPathToWalk) {
        const [segment, parallelRouteKey] = segmentPathToWalk;
        const isLast = segmentPathToWalk.length === 2;
        if ((0, _matchsegments.matchSegment)(treeToRecreate[0], segment)) {
            if (treeToRecreate[1].hasOwnProperty(parallelRouteKey)) {
                if (isLast) {
                    const subTree = walkAddRefetch(undefined, treeToRecreate[1][parallelRouteKey]);
                    return [
                        treeToRecreate[0],
                        {
                            ...treeToRecreate[1],
                            [parallelRouteKey]: [
                                subTree[0],
                                subTree[1],
                                subTree[2],
                                "refetch"
                            ]
                        }
                    ];
                }
                return [
                    treeToRecreate[0],
                    {
                        ...treeToRecreate[1],
                        [parallelRouteKey]: walkAddRefetch(segmentPathToWalk.slice(2), treeToRecreate[1][parallelRouteKey])
                    }
                ];
            }
        }
    }
    return treeToRecreate;
}
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (true) return null;
    // Only apply strict mode warning when not in production
    if (false) {}
    return _reactdom.default.findDOMNode(instance);
}
const rectProperties = [
    "bottom",
    "height",
    "left",
    "right",
    "top",
    "width",
    "x",
    "y"
];
/**
 * Check if a HTMLElement is hidden.
 */ function elementCanScroll(element) {
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Check if the top corner of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= viewportHeight;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === "top") {
        return document.body;
    }
    var _document_getElementById;
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return (_document_getElementById = document.getElementById(hashFragment)) != null ? _document_getElementById : document.getElementsByName(hashFragment)[0];
}
class InnerScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        // Because this property is overwritten in handlePotentialScroll it's fine to always run it when true as it'll be set to false for subsequent renders.
        if (this.props.focusAndScrollRef.apply) {
            this.handlePotentialScroll();
        }
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args);
        this.handlePotentialScroll = ()=>{
            // Handle scroll and focus, it's only applied once in the first useEffect that triggers that changed.
            const { focusAndScrollRef, segmentPath } = this.props;
            if (focusAndScrollRef.apply) {
                // segmentPaths is an array of segment paths that should be scrolled to
                // if the current segment path is not in the array, the scroll is not applied
                // unless the array is empty, in which case the scroll is always applied
                if (focusAndScrollRef.segmentPaths.length !== 0 && !focusAndScrollRef.segmentPaths.some((scrollRefSegmentPath)=>segmentPath.every((segment, index)=>(0, _matchsegments.matchSegment)(segment, scrollRefSegmentPath[index])))) {
                    return;
                }
                let domNode = null;
                const hashFragment = focusAndScrollRef.hashFragment;
                if (hashFragment) {
                    domNode = getHashFragmentDomNode(hashFragment);
                }
                // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
                // This already caused a bug where the first child was a <link/> in head.
                if (!domNode) {
                    domNode = findDOMNode(this);
                }
                // TODO-APP: Handle the case where we couldn't select any DOM node, even higher up in the layout-router above the current segmentPath.
                // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
                if (!(domNode instanceof Element)) {
                    return;
                }
                // Verify if the element is a HTMLElement and if it's visible on screen (e.g. not display: none).
                // If the element is not a HTMLElement or not visible we try to select the next sibling and try again.
                while(!(domNode instanceof HTMLElement) || elementCanScroll(domNode)){
                    // TODO-APP: Handle the case where we couldn't select any DOM node, even higher up in the layout-router above the current segmentPath.
                    // No siblings found that are visible so we handle scroll higher up in the tree instead.
                    if (domNode.nextElementSibling === null) {
                        return;
                    }
                    domNode = domNode.nextElementSibling;
                }
                // State is mutated to ensure that the focus and scroll is applied only once.
                focusAndScrollRef.apply = false;
                focusAndScrollRef.hashFragment = null;
                focusAndScrollRef.segmentPaths = [];
                (0, _handlesmoothscroll.handleSmoothScroll)(()=>{
                    // In case of hash scroll, we only need to scroll the element into view
                    if (hashFragment) {
                        domNode.scrollIntoView();
                        return;
                    }
                    // Store the current viewport height because reading `clientHeight` causes a reflow,
                    // and it won't change during this function.
                    const htmlElement = document.documentElement;
                    const viewportHeight = htmlElement.clientHeight;
                    // If the element's top edge is already in the viewport, exit early.
                    if (topOfElementInViewport(domNode, viewportHeight)) {
                        return;
                    }
                    // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                    // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                    // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                    // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                    htmlElement.scrollTop = 0;
                    // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                    if (!topOfElementInViewport(domNode, viewportHeight)) {
                        domNode.scrollIntoView();
                    }
                }, {
                    // We will force layout by querying domNode position
                    dontForceLayout: true
                });
                // Set focus on the element
                domNode.focus();
            }
        };
    }
}
function ScrollAndFocusHandler(param) {
    let { segmentPath, children } = param;
    const context = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    return /*#__PURE__*/ _react.default.createElement(InnerScrollAndFocusHandler, {
        segmentPath: segmentPath,
        focusAndScrollRef: context.focusAndScrollRef
    }, children);
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter(param) {
    let { parallelRouterKey, url, childNodes, childProp, segmentPath, tree, // isActive,
    cacheKey } = param;
    const context = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    const { buildId, changeByServerResponse, tree: fullTree } = context;
    // Read segment path from the parallel router cache node.
    let childNode = childNodes.get(cacheKey);
    // If childProp is available this means it's the Flight / SSR case.
    if (childProp && // TODO-APP: verify if this can be null based on user code
    childProp.current !== null) {
        if (!childNode) {
            // Add the segment's subTreeData to the cache.
            // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
            childNodes.set(cacheKey, {
                status: _approutercontext.CacheStates.READY,
                data: null,
                subTreeData: childProp.current,
                parallelRoutes: new Map()
            });
            // In the above case childNode was set on childNodes, so we have to get it from the cacheNodes again.
            childNode = childNodes.get(cacheKey);
        } else {
            if (childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED) {
                // @ts-expect-error we're changing it's type!
                childNode.status = _approutercontext.CacheStates.READY;
                // @ts-expect-error
                childNode.subTreeData = childProp.current;
            }
        }
    }
    // When childNode is not available during rendering client-side we need to fetch it from the server.
    if (!childNode || childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED) {
        /**
     * Router state with refetch marker added
     */ // TODO-APP: remove ''
        const refetchTree = walkAddRefetch([
            "",
            ...segmentPath
        ], fullTree);
        /**
     * Flight data fetch kicked off during render and put into the cache.
     */ childNodes.set(cacheKey, {
            status: _approutercontext.CacheStates.DATA_FETCH,
            data: (0, _fetchserverresponse.fetchServerResponse)(new URL(url, location.origin), refetchTree, context.nextUrl, buildId),
            subTreeData: null,
            head: childNode && childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED ? childNode.head : undefined,
            parallelRoutes: childNode && childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED ? childNode.parallelRoutes : new Map()
        });
        // In the above case childNode was set on childNodes, so we have to get it from the cacheNodes again.
        childNode = childNodes.get(cacheKey);
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (!childNode) {
        throw new Error("Child node should always exist");
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (childNode.subTreeData && childNode.data) {
        throw new Error("Child node should not have both subTreeData and data");
    }
    // If cache node has a data request we have to unwrap response by `use` and update the cache.
    if (childNode.data) {
        /**
     * Flight response data
     */ // When the data has not resolved yet `use` will suspend here.
        const [flightData, overrideCanonicalUrl] = (0, _react.use)(childNode.data);
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === "string") {
            window.location.href = url;
            return null;
        }
        // segmentPath from the server does not match the layout's segmentPath
        childNode.data = null;
        // setTimeout is used to start a new transition during render, this is an intentional hack around React.
        setTimeout(()=>{
            // @ts-ignore startTransition exists
            _react.default.startTransition(()=>{
                changeByServerResponse(fullTree, flightData, overrideCanonicalUrl);
            });
        });
        // Suspend infinitely as `changeByServerResponse` will cause a different part of the tree to be rendered.
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    // If cache node has no subTreeData and no data request we have to infinitely suspend as the data will likely flow in from another place.
    // TODO-APP: double check users can't return null in a component that will kick in here.
    if (!childNode.subTreeData) {
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    const subtree = /*#__PURE__*/ _react.default.createElement(_approutercontext.LayoutRouterContext.Provider, {
        value: {
            tree: tree[1][parallelRouterKey],
            childNodes: childNode.parallelRoutes,
            // TODO-APP: overriding of url for parallel routes
            url: url
        }
    }, childNode.subTreeData);
    // Ensure root layout is not wrapped in a div as the root layout renders `<html>`
    return subtree;
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary(param) {
    let { children, loading, loadingStyles, hasLoading } = param;
    if (hasLoading) {
        return /*#__PURE__*/ _react.default.createElement(_react.default.Suspense, {
            fallback: /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, loadingStyles, loading)
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
function OuterLayoutRouter(param) {
    let { parallelRouterKey, segmentPath, childProp, error, errorStyles, templateStyles, loading, loadingStyles, hasLoading, template, notFound, notFoundStyles, asNotFound, styles } = param;
    const context = (0, _react.useContext)(_approutercontext.LayoutRouterContext);
    if (!context) {
        throw new Error("invariant expected layout router to be mounted");
    }
    const { childNodes, tree, url } = context;
    // Get the current parallelRouter cache node
    let childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    // If the parallel router cache node does not exist yet, create it.
    // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
    if (!childNodesForParallelRouter) {
        childNodes.set(parallelRouterKey, new Map());
        childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    }
    // Get the active segment in the tree
    // The reason arrays are used in the data format is that these are transferred from the server to the browser so it's optimized to save bytes.
    const treeSegment = tree[1][parallelRouterKey][0];
    const childPropSegment = childProp.segment;
    // If segment is an array it's a dynamic route and we want to read the dynamic route value as the segment to get from the cache.
    const currentChildSegmentValue = (0, _getsegmentvalue.getSegmentValue)(treeSegment);
    /**
   * Decides which segments to keep rendering, all segments that are not active will be wrapped in `<Offscreen>`.
   */ // TODO-APP: Add handling of `<Offscreen>` when it's available.
    const preservedSegments = [
        treeSegment
    ];
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, styles, preservedSegments.map((preservedSegment)=>{
        const isChildPropSegment = (0, _matchsegments.matchSegment)(preservedSegment, childPropSegment);
        const preservedSegmentValue = (0, _getsegmentvalue.getSegmentValue)(preservedSegment);
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(preservedSegment);
        return(/*
            - Error boundary
              - Only renders error boundary if error component is provided.
              - Rendered for each segment to ensure they have their own error state.
            - Loading boundary
              - Only renders suspense boundary if loading components is provided.
              - Rendered for each segment to ensure they have their own loading state.
              - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
          */ /*#__PURE__*/ _react.default.createElement(_approutercontext.TemplateContext.Provider, {
            key: (0, _createroutercachekey.createRouterCacheKey)(preservedSegment, true),
            value: /*#__PURE__*/ _react.default.createElement(ScrollAndFocusHandler, {
                segmentPath: segmentPath
            }, /*#__PURE__*/ _react.default.createElement(_errorboundary.ErrorBoundary, {
                errorComponent: error,
                errorStyles: errorStyles
            }, /*#__PURE__*/ _react.default.createElement(LoadingBoundary, {
                hasLoading: hasLoading,
                loading: loading,
                loadingStyles: loadingStyles
            }, /*#__PURE__*/ _react.default.createElement(_notfoundboundary.NotFoundBoundary, {
                notFound: notFound,
                notFoundStyles: notFoundStyles,
                asNotFound: asNotFound
            }, /*#__PURE__*/ _react.default.createElement(_redirectboundary.RedirectBoundary, null, /*#__PURE__*/ _react.default.createElement(InnerLayoutRouter, {
                parallelRouterKey: parallelRouterKey,
                url: url,
                tree: tree,
                childNodes: childNodesForParallelRouter,
                childProp: isChildPropSegment ? childProp : null,
                segmentPath: segmentPath,
                cacheKey: cacheKey,
                isActive: currentChildSegmentValue === preservedSegmentValue
            }))))))
        }, /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, templateStyles, template)));
    }));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 5507:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    matchSegment: function() {
        return matchSegment;
    },
    canSegmentBeOverridden: function() {
        return canSegmentBeOverridden;
    }
});
const _getsegmentparam = __webpack_require__(1090);
const matchSegment = (existingSegment, segment)=>{
    // Common case: segment is just a string
    if (typeof existingSegment === "string" && typeof segment === "string") {
        return existingSegment === segment;
    }
    // Dynamic parameter case: segment is an array with param/value. Both param and value are compared.
    if (Array.isArray(existingSegment) && Array.isArray(segment)) {
        return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
    }
    return false;
};
const canSegmentBeOverridden = (existingSegment, segment)=>{
    var _getSegmentParam;
    if (Array.isArray(existingSegment) || !Array.isArray(segment)) {
        return false;
    }
    return ((_getSegmentParam = (0, _getsegmentparam.getSegmentParam)(existingSegment)) == null ? void 0 : _getSegmentParam.param) === segment[0];
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=match-segments.js.map


/***/ }),

/***/ 5171:
/***/ ((module, exports, __webpack_require__) => {

// useLayoutSegments() // Only the segments for the current place. ['children', 'dashboard', 'children', 'integrations'] -> /dashboard/integrations (/dashboard/layout.js would get ['children', 'dashboard', 'children', 'integrations'])

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    usePathname: function() {
        return usePathname;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtml.ServerInsertedHTMLContext;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtml.useServerInsertedHTML;
    },
    useRouter: function() {
        return useRouter;
    },
    useParams: function() {
        return useParams;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    notFound: function() {
        return _notfound.notFound;
    }
});
const _react = __webpack_require__(8038);
const _approutercontext = __webpack_require__(3280);
const _hooksclientcontext = __webpack_require__(9274);
const _clienthookinservercomponenterror = __webpack_require__(5078);
const _getsegmentvalue = __webpack_require__(3715);
const _serverinsertedhtml = __webpack_require__(3349);
const _redirect = __webpack_require__(6932);
const _notfound = __webpack_require__(8424);
const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol("internal for urlsearchparams readonly");
function readonlyURLSearchParamsError() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
    }
}
function useSearchParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSearchParams");
    const searchParams = (0, _react.useContext)(_hooksclientcontext.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (true) {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering } = __webpack_require__(2594);
        if (bailoutToClientRendering()) {
            // TODO-APP: handle dynamic = 'force-static' here and on the client
            return readonlySearchParams;
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("usePathname");
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react.useContext)(_hooksclientcontext.PathnameContext);
}
function useRouter() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useRouter");
    const router = (0, _react.useContext)(_approutercontext.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
// this function performs a depth-first search of the tree to find the selected
// params
function getSelectedParams(tree, params) {
    if (params === void 0) params = {};
    const parallelRoutes = tree[1];
    for (const parallelRoute of Object.values(parallelRoutes)){
        const segment = parallelRoute[0];
        const isDynamicParameter = Array.isArray(segment);
        const segmentValue = isDynamicParameter ? segment[1] : segment;
        if (!segmentValue || segmentValue.startsWith("__PAGE__")) continue;
        if (isDynamicParameter) {
            params[segment[0]] = segment[1];
        }
        params = getSelectedParams(parallelRoute, params);
    }
    return params;
}
function useParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useParams");
    const globalLayoutRouterContext = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!globalLayoutRouterContext) {
        // This only happens in `pages`. Type is overwritten in navigation.d.ts
        return null;
    }
    return getSelectedParams(globalLayoutRouterContext.tree);
}
// TODO-APP: handle parallel routes
/**
 * Get the canonical parameters from the current level to the leaf node.
 */ function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith("__PAGE__")) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegments");
    const { tree } = (0, _react.useContext)(_approutercontext.LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegment");
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 7944:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NotFoundBoundary", ({
    enumerable: true,
    get: function() {
        return NotFoundBoundary;
    }
}));
const _interop_require_default = __webpack_require__(5967);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _navigation = __webpack_require__(5171);
class NotFoundErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((error == null ? void 0 : error.digest) === "NEXT_NOT_FOUND") {
            return {
                notFoundTriggered: true
            };
        }
        // Re-throw if error is not for 404
        throw error;
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.notFoundTriggered) {
            return {
                notFoundTriggered: false,
                previousPathname: props.pathname
            };
        }
        return {
            notFoundTriggered: state.notFoundTriggered,
            previousPathname: props.pathname
        };
    }
    render() {
        if (this.state.notFoundTriggered) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("meta", {
                name: "robots",
                content: "noindex"
            }), this.props.notFoundStyles, this.props.notFound);
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            notFoundTriggered: !!props.asNotFound,
            previousPathname: props.pathname
        };
    }
}
function NotFoundBoundary(param) {
    let { notFound, notFoundStyles, asNotFound, children } = param;
    const pathname = (0, _navigation.usePathname)();
    return notFound ? /*#__PURE__*/ _react.default.createElement(NotFoundErrorBoundary, {
        pathname: pathname,
        notFound: notFound,
        notFoundStyles: notFoundStyles,
        asNotFound: asNotFound
    }, children) : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found-boundary.js.map


/***/ }),

/***/ 8424:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    notFound: function() {
        return notFound;
    },
    isNotFoundError: function() {
        return isNotFoundError;
    }
});
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
function isNotFoundError(error) {
    return (error == null ? void 0 : error.digest) === NOT_FOUND_ERROR_CODE;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map


/***/ }),

/***/ 606:
/***/ ((module, exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectErrorBoundary: function() {
        return RedirectErrorBoundary;
    },
    RedirectBoundary: function() {
        return RedirectBoundary;
    }
});
const _interop_require_wildcard = __webpack_require__(1113);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8038));
const _navigation = __webpack_require__(5171);
const _redirect = __webpack_require__(6932);
function HandleRedirect(param) {
    let { redirect, reset, redirectType } = param;
    const router = (0, _navigation.useRouter)();
    (0, _react.useEffect)(()=>{
        // @ts-ignore startTransition exists
        _react.default.startTransition(()=>{
            if (redirectType === _redirect.RedirectType.push) {
                router.push(redirect, {});
            } else {
                router.replace(redirect, {});
            }
            reset();
        });
    }, [
        redirect,
        redirectType,
        reset,
        router
    ]);
    return null;
}
class RedirectErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _redirect.isRedirectError)(error)) {
            const url = (0, _redirect.getURLFromRedirectError)(error);
            const redirectType = (0, _redirect.getRedirectTypeFromError)(error);
            return {
                redirect: url,
                redirectType
            };
        }
        // Re-throw if error is not for redirect
        throw error;
    }
    render() {
        const { redirect, redirectType } = this.state;
        if (redirect !== null && redirectType !== null) {
            return /*#__PURE__*/ _react.default.createElement(HandleRedirect, {
                redirect: redirect,
                redirectType: redirectType,
                reset: ()=>this.setState({
                        redirect: null
                    })
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            redirect: null,
            redirectType: null
        };
    }
}
function RedirectBoundary(param) {
    let { children } = param;
    const router = (0, _navigation.useRouter)();
    return /*#__PURE__*/ _react.default.createElement(RedirectErrorBoundary, {
        router: router
    }, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-boundary.js.map


/***/ }),

/***/ 6932:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectType: function() {
        return RedirectType;
    },
    getRedirectError: function() {
        return getRedirectError;
    },
    redirect: function() {
        return redirect;
    },
    isRedirectError: function() {
        return isRedirectError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    }
});
const _requestasyncstorage = __webpack_require__(4437);
const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
var RedirectType;
(function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
})(RedirectType || (RedirectType = {}));
function getRedirectError(url, type) {
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = REDIRECT_ERROR_CODE + ";" + type + ";" + url;
    const requestStore = _requestasyncstorage.requestAsyncStorage.getStore();
    if (requestStore) {
        error.mutableCookies = requestStore.mutableCookies;
    }
    return error;
}
function redirect(url, type) {
    if (type === void 0) type = "replace";
    throw getRedirectError(url, type);
}
function isRedirectError(error) {
    if (typeof (error == null ? void 0 : error.digest) !== "string") return false;
    const [errorCode, type, destination] = error.digest.split(";", 3);
    return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string";
}
function getURLFromRedirectError(error) {
    if (!isRedirectError(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(";", 3)[2];
}
function getRedirectTypeFromError(error) {
    if (!isRedirectError(error)) {
        throw new Error("Not a redirect error");
    }
    return error.digest.split(";", 3)[1];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map


/***/ }),

/***/ 7844:
/***/ ((module, exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
}));
const _interop_require_wildcard = __webpack_require__(1113);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8038));
const _approutercontext = __webpack_require__(3280);
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontext.TemplateContext);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 8837:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "applyFlightData", ({
    enumerable: true,
    get: function() {
        return applyFlightData;
    }
}));
const _approutercontext = __webpack_require__(3280);
const _filllazyitemstillleafwithhead = __webpack_require__(985);
const _fillcachewithnewsubtreedata = __webpack_require__(4940);
function applyFlightData(existingCache, cache, flightDataPath, wasPrefetched) {
    if (wasPrefetched === void 0) wasPrefetched = false;
    // The one before last item is the router state tree patch
    const [treePatch, subTreeData, head] = flightDataPath.slice(-3);
    // Handles case where prefetch only returns the router tree patch without rendered components.
    if (subTreeData === null) {
        return false;
    }
    if (flightDataPath.length === 3) {
        cache.status = _approutercontext.CacheStates.READY;
        cache.subTreeData = subTreeData;
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, existingCache, treePatch, head, wasPrefetched);
    } else {
        // Copy subTreeData for the root node of the cache.
        cache.status = _approutercontext.CacheStates.READY;
        cache.subTreeData = existingCache.subTreeData;
        cache.parallelRoutes = new Map(existingCache.parallelRoutes);
        // Create a copy of the existing cache with the subTreeData applied.
        (0, _fillcachewithnewsubtreedata.fillCacheWithNewSubTreeData)(cache, existingCache, flightDataPath, wasPrefetched);
    }
    return true;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-flight-data.js.map


/***/ }),

/***/ 951:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "applyRouterStatePatchToTree", ({
    enumerable: true,
    get: function() {
        return applyRouterStatePatchToTree;
    }
}));
const _matchsegments = __webpack_require__(5507);
/**
 * Deep merge of the two router states. Parallel route keys are preserved if the patch doesn't have them.
 */ function applyPatch(initialTree, patchTree) {
    const [initialSegment, initialParallelRoutes] = initialTree;
    const [patchSegment, patchParallelRoutes] = patchTree;
    // if the applied patch segment is __DEFAULT__ then we can ignore it and return the initial tree
    // this is because the __DEFAULT__ segment is used as a placeholder on navigation
    if (patchSegment === "__DEFAULT__" && initialSegment !== "__DEFAULT__") {
        return initialTree;
    }
    if ((0, _matchsegments.matchSegment)(initialSegment, patchSegment)) {
        const newParallelRoutes = {};
        for(const key in initialParallelRoutes){
            const isInPatchTreeParallelRoutes = typeof patchParallelRoutes[key] !== "undefined";
            if (isInPatchTreeParallelRoutes) {
                newParallelRoutes[key] = applyPatch(initialParallelRoutes[key], patchParallelRoutes[key]);
            } else {
                newParallelRoutes[key] = initialParallelRoutes[key];
            }
        }
        for(const key in patchParallelRoutes){
            if (newParallelRoutes[key]) {
                continue;
            }
            newParallelRoutes[key] = patchParallelRoutes[key];
        }
        const tree = [
            initialSegment,
            newParallelRoutes
        ];
        if (initialTree[2]) {
            tree[2] = initialTree[2];
        }
        if (initialTree[3]) {
            tree[3] = initialTree[3];
        }
        if (initialTree[4]) {
            tree[4] = initialTree[4];
        }
        return tree;
    }
    return patchTree;
}
function applyRouterStatePatchToTree(flightSegmentPath, flightRouterState, treePatch) {
    const [segment, parallelRoutes, , , isRootLayout] = flightRouterState;
    // Root refresh
    if (flightSegmentPath.length === 1) {
        const tree = applyPatch(flightRouterState, treePatch);
        return tree;
    }
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Tree path returned from the server should always match up with the current tree in the browser
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        return null;
    }
    const lastSegment = flightSegmentPath.length === 2;
    let parallelRoutePatch;
    if (lastSegment) {
        parallelRoutePatch = applyPatch(parallelRoutes[parallelRouteKey], treePatch);
    } else {
        parallelRoutePatch = applyRouterStatePatchToTree(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey], treePatch);
        if (parallelRoutePatch === null) {
            return null;
        }
    }
    const tree = [
        flightSegmentPath[0],
        {
            ...parallelRoutes,
            [parallelRouteKey]: parallelRoutePatch
        }
    ];
    // Current segment is the root layout
    if (isRootLayout) {
        tree[4] = true;
    }
    return tree;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-router-state-patch-to-tree.js.map


/***/ }),

/***/ 226:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    extractPathFromFlightRouterState: function() {
        return extractPathFromFlightRouterState;
    },
    computeChangedPath: function() {
        return computeChangedPath;
    }
});
const _interceptionroutes = __webpack_require__(8652);
const _matchsegments = __webpack_require__(5507);
const segmentToPathname = (segment)=>{
    if (typeof segment === "string") {
        return segment;
    }
    return segment[1];
};
function normalizePathname(pathname) {
    return pathname.split("/").reduce((acc, segment)=>{
        if (segment === "" || segment.startsWith("(") && segment.endsWith(")")) {
            return acc;
        }
        return acc + "/" + segment;
    }, "") || "/";
}
function extractPathFromFlightRouterState(flightRouterState) {
    const segment = Array.isArray(flightRouterState[0]) ? flightRouterState[0][1] : flightRouterState[0];
    if (segment === "__DEFAULT__" || _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m))) return undefined;
    if (segment.startsWith("__PAGE__")) return "";
    const path = [
        segment
    ];
    var _flightRouterState_;
    const parallelRoutes = (_flightRouterState_ = flightRouterState[1]) != null ? _flightRouterState_ : {};
    const childrenPath = parallelRoutes.children ? extractPathFromFlightRouterState(parallelRoutes.children) : undefined;
    if (childrenPath !== undefined) {
        path.push(childrenPath);
    } else {
        for (const [key, value] of Object.entries(parallelRoutes)){
            if (key === "children") continue;
            const childPath = extractPathFromFlightRouterState(value);
            if (childPath !== undefined) {
                path.push(childPath);
            }
        }
    }
    // TODO-APP: optimise this, it's not ideal to join and split
    return normalizePathname(path.join("/"));
}
function computeChangedPathImpl(treeA, treeB) {
    const [segmentA, parallelRoutesA] = treeA;
    const [segmentB, parallelRoutesB] = treeB;
    const normalizedSegmentA = segmentToPathname(segmentA);
    const normalizedSegmentB = segmentToPathname(segmentB);
    if (_interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>normalizedSegmentA.startsWith(m) || normalizedSegmentB.startsWith(m))) {
        return "";
    }
    if (!(0, _matchsegments.matchSegment)(segmentA, segmentB)) {
        var _extractPathFromFlightRouterState;
        // once we find where the tree changed, we compute the rest of the path by traversing the tree
        return (_extractPathFromFlightRouterState = extractPathFromFlightRouterState(treeB)) != null ? _extractPathFromFlightRouterState : "";
    }
    for(const parallelRouterKey in parallelRoutesA){
        if (parallelRoutesB[parallelRouterKey]) {
            const changedPath = computeChangedPathImpl(parallelRoutesA[parallelRouterKey], parallelRoutesB[parallelRouterKey]);
            if (changedPath !== null) {
                return segmentToPathname(segmentB) + "/" + changedPath;
            }
        }
    }
    return null;
}
function computeChangedPath(treeA, treeB) {
    const changedPath = computeChangedPathImpl(treeA, treeB);
    if (changedPath == null || changedPath === "/") {
        return changedPath;
    }
    // lightweight normalization to remove route groups
    return normalizePathname(changedPath);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=compute-changed-path.js.map


/***/ }),

/***/ 8253:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createHrefFromUrl", ({
    enumerable: true,
    get: function() {
        return createHrefFromUrl;
    }
}));
function createHrefFromUrl(url, includeHash) {
    if (includeHash === void 0) includeHash = true;
    return url.pathname + url.search + (includeHash ? url.hash : "");
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-href-from-url.js.map


/***/ }),

/***/ 3558:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createInitialRouterState", ({
    enumerable: true,
    get: function() {
        return createInitialRouterState;
    }
}));
const _approutercontext = __webpack_require__(3280);
const _createhreffromurl = __webpack_require__(8253);
const _filllazyitemstillleafwithhead = __webpack_require__(985);
const _computechangedpath = __webpack_require__(226);
function createInitialRouterState(param) {
    let { buildId, initialTree, children, initialCanonicalUrl, initialParallelRoutes, isServer, location, initialHead } = param;
    const cache = {
        status: _approutercontext.CacheStates.READY,
        data: null,
        subTreeData: children,
        // The cache gets seeded during the first render. `initialParallelRoutes` ensures the cache from the first render is there during the second render.
        parallelRoutes: isServer ? new Map() : initialParallelRoutes
    };
    // When the cache hasn't been seeded yet we fill the cache with the head.
    if (initialParallelRoutes === null || initialParallelRoutes.size === 0) {
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, initialTree, initialHead);
    }
    var _ref;
    return {
        buildId,
        tree: initialTree,
        cache,
        prefetchCache: new Map(),
        pushRef: {
            pendingPush: false,
            mpaNavigation: false
        },
        focusAndScrollRef: {
            apply: false,
            hashFragment: null,
            segmentPaths: []
        },
        canonicalUrl: // This is safe to do as canonicalUrl can't be rendered, it's only used to control the history updates in the useEffect further down in this file.
        location ? (0, _createhreffromurl.createHrefFromUrl)(location) : initialCanonicalUrl,
        nextUrl: (_ref = (0, _computechangedpath.extractPathFromFlightRouterState)(initialTree) || (location == null ? void 0 : location.pathname)) != null ? _ref : null
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-initial-router-state.js.map


/***/ }),

/***/ 5603:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createOptimisticTree", ({
    enumerable: true,
    get: function() {
        return createOptimisticTree;
    }
}));
const _matchsegments = __webpack_require__(5507);
function createOptimisticTree(segments, flightRouterState, parentRefetch) {
    const [existingSegment, existingParallelRoutes, url, refresh, isRootLayout] = flightRouterState || [
        null,
        {}
    ];
    const segment = segments[0];
    const isLastSegment = segments.length === 1;
    const segmentMatches = existingSegment !== null && (0, _matchsegments.matchSegment)(existingSegment, segment);
    // if there are multiple parallel routes at this level, we need to refetch here
    // to ensure we get the correct tree. This is because we don't know which
    // parallel route will match the next segment.
    const hasMultipleParallelRoutes = Object.keys(existingParallelRoutes).length > 1;
    const shouldRefetchThisLevel = !flightRouterState || !segmentMatches || hasMultipleParallelRoutes;
    let parallelRoutes = {};
    if (existingSegment !== null && segmentMatches) {
        parallelRoutes = existingParallelRoutes;
    }
    let childTree;
    // if there's multiple parallel routes at this level, we shouldn't create an
    // optimistic tree for the next level because we don't know which one will
    // match the next segment.
    if (!isLastSegment && !hasMultipleParallelRoutes) {
        const childItem = createOptimisticTree(segments.slice(1), parallelRoutes ? parallelRoutes.children : null, parentRefetch || shouldRefetchThisLevel);
        childTree = childItem;
    }
    const result = [
        segment,
        {
            ...parallelRoutes,
            ...childTree ? {
                children: childTree
            } : {}
        }
    ];
    if (url) {
        result[2] = url;
    }
    if (!parentRefetch && shouldRefetchThisLevel) {
        result[3] = "refetch";
    } else if (segmentMatches && refresh) {
        result[3] = refresh;
    }
    if (segmentMatches && isRootLayout) {
        result[4] = isRootLayout;
    }
    return result;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-optimistic-tree.js.map


/***/ }),

/***/ 5792:
/***/ ((module, exports) => {

/**
 * Create data fetching record for Promise.
 */ // TODO-APP: change `any` to type inference.

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createRecordFromThenable", ({
    enumerable: true,
    get: function() {
        return createRecordFromThenable;
    }
}));
function createRecordFromThenable(thenable) {
    thenable.status = "pending";
    thenable.then((value)=>{
        if (thenable.status === "pending") {
            thenable.status = "fulfilled";
            thenable.value = value;
        }
    }, (err)=>{
        if (thenable.status === "pending") {
            thenable.status = "rejected";
            thenable.value = err;
        }
    });
    return thenable;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-record-from-thenable.js.map


/***/ }),

/***/ 5370:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createRouterCacheKey", ({
    enumerable: true,
    get: function() {
        return createRouterCacheKey;
    }
}));
function createRouterCacheKey(segment, withoutSearchParameters) {
    if (withoutSearchParameters === void 0) withoutSearchParameters = false;
    return Array.isArray(segment) ? segment[0] + "|" + segment[1] + "|" + segment[2] : withoutSearchParameters && segment.startsWith("__PAGE__") ? "__PAGE__" : segment;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-router-cache-key.js.map


/***/ }),

/***/ 969:
/***/ ((module, exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fetchServerResponse", ({
    enumerable: true,
    get: function() {
        return fetchServerResponse;
    }
}));
const _client = __webpack_require__(7897);
const _approuterheaders = __webpack_require__(281);
const _approuter = __webpack_require__(125);
const _appcallserver = __webpack_require__(4783);
const _routerreducertypes = __webpack_require__(549);
const _hash = __webpack_require__(7244);
function doMpaNavigation(url) {
    return [
        (0, _approuter.urlToUrlWithoutFlightMarker)(url).toString(),
        undefined
    ];
}
async function fetchServerResponse(url, flightRouterState, nextUrl, currentBuildId, prefetchKind) {
    const headers = {
        // Enable flight response
        [_approuterheaders.RSC]: "1",
        // Provide the current router state
        [_approuterheaders.NEXT_ROUTER_STATE_TREE]: encodeURIComponent(JSON.stringify(flightRouterState))
    };
    /**
   * Three cases:
   * - `prefetchKind` is `undefined`, it means it's a normal navigation, so we want to prefetch the page data fully
   * - `prefetchKind` is `full` - we want to prefetch the whole page so same as above
   * - `prefetchKind` is `auto` - if the page is dynamic, prefetch the page data partially, if static prefetch the page data fully
   */ if (prefetchKind === _routerreducertypes.PrefetchKind.AUTO) {
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH] = "1";
    }
    if (nextUrl) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    const uniqueCacheQuery = (0, _hash.hexHash)([
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH] || "0",
        headers[_approuterheaders.NEXT_ROUTER_STATE_TREE]
    ].join(","));
    try {
        let fetchUrl = new URL(url);
        if (true) {
            if (false) {}
        }
        // Add unique cache query to avoid caching conflicts on CDN which don't respect to Vary header
        fetchUrl.searchParams.set(_approuterheaders.NEXT_RSC_UNION_QUERY, uniqueCacheQuery);
        const res = await fetch(fetchUrl, {
            // Backwards compat for older browsers. `same-origin` is the default in modern browsers.
            credentials: "same-origin",
            headers
        });
        const responseUrl = (0, _approuter.urlToUrlWithoutFlightMarker)(res.url);
        const canonicalUrl = res.redirected ? responseUrl : undefined;
        const contentType = res.headers.get("content-type") || "";
        let isFlightResponse = contentType === _approuterheaders.RSC_CONTENT_TYPE_HEADER;
        if (true) {
            if (false) {}
        }
        // If fetch returns something different than flight response handle it like a mpa navigation
        // If the fetch was not 200, we also handle it like a mpa navigation
        if (!isFlightResponse || !res.ok) {
            return doMpaNavigation(responseUrl.toString());
        }
        // Handle the `fetch` readable stream that can be unwrapped by `React.use`.
        const [buildId, flightData] = await (0, _client.createFromFetch)(Promise.resolve(res), {
            callServer: _appcallserver.callServer
        });
        if (currentBuildId !== buildId) {
            return doMpaNavigation(res.url);
        }
        return [
            flightData,
            canonicalUrl
        ];
    } catch (err) {
        console.error("Failed to fetch RSC payload. Falling back to browser navigation.", err);
        // If fetch fails handle it like a mpa navigation
        // TODO-APP: Add a test for the case where a CORS request fails, e.g. external url redirect coming from the response.
        // See https://github.com/vercel/next.js/issues/43605#issuecomment-1451617521 for a reproduction.
        return [
            url.toString(),
            undefined
        ];
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fetch-server-response.js.map


/***/ }),

/***/ 277:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fillCacheWithDataProperty", ({
    enumerable: true,
    get: function() {
        return fillCacheWithDataProperty;
    }
}));
const _approutercontext = __webpack_require__(3280);
const _createroutercachekey = __webpack_require__(5370);
function fillCacheWithDataProperty(newCache, existingCache, flightSegmentPath, fetchResponse, bailOnParallelRoutes) {
    if (bailOnParallelRoutes === void 0) bailOnParallelRoutes = false;
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap || bailOnParallelRoutes && existingCache.parallelRoutes.size > 1) {
        // Bailout because the existing cache does not have the path to the leaf node
        // or the existing cache has multiple parallel routes
        // Will trigger lazy fetch in layout-router because of missing segment
        return {
            bailOptimistic: true
        };
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    // In case of last segment start off the fetch at this level and don't copy further down.
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childSegmentMap.set(cacheKey, {
                status: _approutercontext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Start fetch in the place where the existing cache doesn't have the data yet.
        if (!childCacheNode) {
            childSegmentMap.set(cacheKey, {
                status: _approutercontext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    return fillCacheWithDataProperty(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2), fetchResponse);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-data-property.js.map


/***/ }),

/***/ 4940:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fillCacheWithNewSubTreeData", ({
    enumerable: true,
    get: function() {
        return fillCacheWithNewSubTreeData;
    }
}));
const _approutercontext = __webpack_require__(3280);
const _invalidatecachebyrouterstate = __webpack_require__(6246);
const _filllazyitemstillleafwithhead = __webpack_require__(985);
const _createroutercachekey = __webpack_require__(5370);
function fillCacheWithNewSubTreeData(newCache, existingCache, flightDataPath, wasPrefetched) {
    const isLastEntry = flightDataPath.length <= 5;
    const [parallelRouteKey, segment] = flightDataPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childCacheNode = {
                status: _approutercontext.CacheStates.READY,
                data: null,
                subTreeData: flightDataPath[3],
                // Ensure segments other than the one we got data for are preserved.
                parallelRoutes: existingChildCacheNode ? new Map(existingChildCacheNode.parallelRoutes) : new Map()
            };
            if (existingChildCacheNode) {
                (0, _invalidatecachebyrouterstate.invalidateCacheByRouterState)(childCacheNode, existingChildCacheNode, flightDataPath[2]);
            }
            (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(childCacheNode, existingChildCacheNode, flightDataPath[2], flightDataPath[4], wasPrefetched);
            childSegmentMap.set(cacheKey, childCacheNode);
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    fillCacheWithNewSubTreeData(childCacheNode, existingChildCacheNode, flightDataPath.slice(2), wasPrefetched);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-new-subtree-data.js.map


/***/ }),

/***/ 985:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fillLazyItemsTillLeafWithHead", ({
    enumerable: true,
    get: function() {
        return fillLazyItemsTillLeafWithHead;
    }
}));
const _approutercontext = __webpack_require__(3280);
const _createroutercachekey = __webpack_require__(5370);
function fillLazyItemsTillLeafWithHead(newCache, existingCache, routerState, head, wasPrefetched) {
    const isLastSegment = Object.keys(routerState[1]).length === 0;
    if (isLastSegment) {
        newCache.head = head;
        return;
    }
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const parallelRouteState = routerState[1][key];
        const segmentForParallelRoute = parallelRouteState[0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        if (existingCache) {
            const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
            if (existingParallelRoutesCacheNode) {
                let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
                const existingCacheNode = parallelRouteCacheNode.get(cacheKey);
                const newCacheNode = wasPrefetched && existingCacheNode ? {
                    status: existingCacheNode.status,
                    data: existingCacheNode.data,
                    subTreeData: existingCacheNode.subTreeData,
                    parallelRoutes: new Map(existingCacheNode.parallelRoutes)
                } : {
                    status: _approutercontext.CacheStates.LAZY_INITIALIZED,
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map(existingCacheNode == null ? void 0 : existingCacheNode.parallelRoutes)
                };
                // Overrides the cache key with the new cache node.
                parallelRouteCacheNode.set(cacheKey, newCacheNode);
                // Traverse deeper to apply the head / fill lazy items till the head.
                fillLazyItemsTillLeafWithHead(newCacheNode, existingCacheNode, parallelRouteState, head, wasPrefetched);
                newCache.parallelRoutes.set(key, parallelRouteCacheNode);
                continue;
            }
        }
        const newCacheNode = {
            status: _approutercontext.CacheStates.LAZY_INITIALIZED,
            data: null,
            subTreeData: null,
            parallelRoutes: new Map()
        };
        const existingParallelRoutes = newCache.parallelRoutes.get(key);
        if (existingParallelRoutes) {
            existingParallelRoutes.set(cacheKey, newCacheNode);
        } else {
            newCache.parallelRoutes.set(key, new Map([
                [
                    cacheKey,
                    newCacheNode
                ]
            ]));
        }
        fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, head, wasPrefetched);
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-lazy-items-till-leaf-with-head.js.map


/***/ }),

/***/ 9362:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PrefetchCacheEntryStatus: function() {
        return PrefetchCacheEntryStatus;
    },
    getPrefetchEntryCacheStatus: function() {
        return getPrefetchEntryCacheStatus;
    }
});
const FIVE_MINUTES = 5 * 60 * 1000;
const THIRTY_SECONDS = 30 * 1000;
var PrefetchCacheEntryStatus;
(function(PrefetchCacheEntryStatus) {
    PrefetchCacheEntryStatus["fresh"] = "fresh";
    PrefetchCacheEntryStatus["reusable"] = "reusable";
    PrefetchCacheEntryStatus["expired"] = "expired";
    PrefetchCacheEntryStatus["stale"] = "stale";
})(PrefetchCacheEntryStatus || (PrefetchCacheEntryStatus = {}));
function getPrefetchEntryCacheStatus(param) {
    let { kind, prefetchTime, lastUsedTime } = param;
    // if the cache entry was prefetched or read less than 30s ago, then we want to re-use it
    if (Date.now() < (lastUsedTime != null ? lastUsedTime : prefetchTime) + THIRTY_SECONDS) {
        return lastUsedTime ? "reusable" : "fresh";
    }
    // if the cache entry was prefetched less than 5 mins ago, then we want to re-use only the loading state
    if (kind === "auto") {
        if (Date.now() < prefetchTime + FIVE_MINUTES) {
            return "stale";
        }
    }
    // if the cache entry was prefetched less than 5 mins ago and was a "full" prefetch, then we want to re-use it "full
    if (kind === "full") {
        if (Date.now() < prefetchTime + FIVE_MINUTES) {
            return "reusable";
        }
    }
    return "expired";
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-prefetch-cache-entry-status.js.map


/***/ }),

/***/ 5098:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "handleMutable", ({
    enumerable: true,
    get: function() {
        return handleMutable;
    }
}));
const _computechangedpath = __webpack_require__(226);
function handleMutable(state, mutable) {
    var _mutable_scrollableSegments, _computeChangedPath;
    return {
        buildId: state.buildId,
        // Set href.
        canonicalUrl: typeof mutable.canonicalUrl !== "undefined" ? mutable.canonicalUrl === state.canonicalUrl ? state.canonicalUrl : mutable.canonicalUrl : state.canonicalUrl,
        pushRef: {
            pendingPush: typeof mutable.pendingPush !== "undefined" ? mutable.pendingPush : state.pushRef.pendingPush,
            mpaNavigation: typeof mutable.mpaNavigation !== "undefined" ? mutable.mpaNavigation : state.pushRef.mpaNavigation
        },
        // All navigation requires scroll and focus management to trigger.
        focusAndScrollRef: {
            apply: (mutable == null ? void 0 : mutable.scrollableSegments) !== undefined ? true : state.focusAndScrollRef.apply,
            hashFragment: // #top is handled in layout-router.
            mutable.hashFragment && mutable.hashFragment !== "" ? decodeURIComponent(mutable.hashFragment.slice(1)) : state.focusAndScrollRef.hashFragment,
            segmentPaths: (_mutable_scrollableSegments = mutable == null ? void 0 : mutable.scrollableSegments) != null ? _mutable_scrollableSegments : state.focusAndScrollRef.segmentPaths
        },
        // Apply cache.
        cache: mutable.cache ? mutable.cache : state.cache,
        prefetchCache: mutable.prefetchCache ? mutable.prefetchCache : state.prefetchCache,
        // Apply patched router state.
        tree: typeof mutable.patchedTree !== "undefined" ? mutable.patchedTree : state.tree,
        nextUrl: typeof mutable.patchedTree !== "undefined" ? (_computeChangedPath = (0, _computechangedpath.computeChangedPath)(state.tree, mutable.patchedTree)) != null ? _computeChangedPath : state.canonicalUrl : state.nextUrl
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-mutable.js.map


/***/ }),

/***/ 1986:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "invalidateCacheBelowFlightSegmentPath", ({
    enumerable: true,
    get: function() {
        return invalidateCacheBelowFlightSegmentPath;
    }
}));
const _createroutercachekey = __webpack_require__(5370);
function invalidateCacheBelowFlightSegmentPath(newCache, existingCache, flightSegmentPath) {
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    // In case of last entry don't copy further down.
    if (isLastEntry) {
        childSegmentMap.delete(cacheKey);
        return;
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    invalidateCacheBelowFlightSegmentPath(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-below-flight-segmentpath.js.map


/***/ }),

/***/ 6246:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "invalidateCacheByRouterState", ({
    enumerable: true,
    get: function() {
        return invalidateCacheByRouterState;
    }
}));
const _createroutercachekey = __webpack_require__(5370);
function invalidateCacheByRouterState(newCache, existingCache, routerState) {
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const segmentForParallelRoute = routerState[1][key][0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
        if (existingParallelRoutesCacheNode) {
            let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
            parallelRouteCacheNode.delete(cacheKey);
            newCache.parallelRoutes.set(key, parallelRouteCacheNode);
        }
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-by-router-state.js.map


/***/ }),

/***/ 9610:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isNavigatingToNewRootLayout", ({
    enumerable: true,
    get: function() {
        return isNavigatingToNewRootLayout;
    }
}));
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    // Compare segments
    const currentTreeSegment = currentTree[0];
    const nextTreeSegment = nextTree[0];
    // If any segment is different before we find the root layout, the root layout has changed.
    // E.g. /same/(group1)/layout.js -> /same/(group2)/layout.js
    // First segment is 'same' for both, keep looking. (group1) changed to (group2) before the root layout was found, it must have changed.
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        // Compare dynamic param name and type but ignore the value, different values would not affect the current root layout
        // /[name] - /slug1 and /slug2, both values (slug1 & slug2) still has the same layout /[name]/layout.js
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    // Current tree root layout found
    if (currentTree[4]) {
        // If the next tree doesn't have the root layout flag, it must have changed.
        return !nextTree[4];
    }
    // Current tree  didn't have its root layout here, must have changed.
    if (nextTree[4]) {
        return true;
    }
    // We can't assume it's `parallelRoutes.children` here in case the root layout is `app/@something/layout.js`
    // But it's not possible to be more than one parallelRoutes before the root layout is found
    // TODO-APP: change to traverse all parallel routes
    const currentTreeChild = Object.values(currentTree[1])[0];
    const nextTreeChild = Object.values(nextTree[1])[0];
    if (!currentTreeChild || !nextTreeChild) return true;
    return isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-navigating-to-new-root-layout.js.map


/***/ }),

/***/ 4170:
/***/ ((module, exports) => {

/**
 * Read record value or throw Promise if it's not resolved yet.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "readRecordValue", ({
    enumerable: true,
    get: function() {
        return readRecordValue;
    }
}));
function readRecordValue(thenable) {
    // @ts-expect-error TODO: fix type
    if (thenable.status === "fulfilled") {
        // @ts-expect-error TODO: fix type
        return thenable.value;
    } else {
        throw thenable;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=read-record-value.js.map


/***/ }),

/***/ 7709:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fastRefreshReducer", ({
    enumerable: true,
    get: function() {
        return fastRefreshReducer;
    }
}));
const _fetchserverresponse = __webpack_require__(969);
const _createrecordfromthenable = __webpack_require__(5792);
const _readrecordvalue = __webpack_require__(4170);
const _createhreffromurl = __webpack_require__(8253);
const _applyrouterstatepatchtotree = __webpack_require__(951);
const _isnavigatingtonewrootlayout = __webpack_require__(9610);
const _navigatereducer = __webpack_require__(1935);
const _handlemutable = __webpack_require__(5098);
const _applyflightdata = __webpack_require__(8837);
// A version of refresh reducer that keeps the cache around instead of wiping all of it.
function fastRefreshReducerImpl(state, action) {
    const { cache, mutable, origin } = action;
    const href = state.canonicalUrl;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (!cache.data) {
        // TODO-APP: verify that `href` is not an external url.
        // Fetch data from the root of the tree.
        cache.data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), [
            state.tree[0],
            state.tree[1],
            state.tree[2],
            "refetch"
        ], state.nextUrl, state.buildId));
    }
    const [flightData, canonicalUrlOverride] = (0, _readrecordvalue.readRecordValue)(cache.data);
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    // Remove cache.data as it has been resolved at this point.
    cache.data = null;
    let currentTree = state.tree;
    let currentCache = state.cache;
    for (const flightDataPath of flightData){
        // FlightDataPath with more than two items means unexpected Flight data was returned
        if (flightDataPath.length !== 3) {
            // TODO-APP: handle this case better
            console.log("REFRESH FAILED");
            return state;
        }
        // Given the path can only have two items the items are only the router state and subTreeData for the root.
        const [treePatch] = flightDataPath;
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            ""
        ], currentTree, treePatch);
        if (newTree === null) {
            throw new Error("SEGMENT MISMATCH");
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
        if (canonicalUrlOverride) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        const applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath);
        if (applied) {
            mutable.cache = cache;
            currentCache = cache;
        }
        mutable.previousTree = currentTree;
        mutable.patchedTree = newTree;
        mutable.canonicalUrl = href;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
function fastRefreshReducerNoop(state, _action) {
    return state;
}
const fastRefreshReducer =  true ? fastRefreshReducerNoop : 0;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fast-refresh-reducer.js.map


/***/ }),

/***/ 7997:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "findHeadInCache", ({
    enumerable: true,
    get: function() {
        return findHeadInCache;
    }
}));
const _createroutercachekey = __webpack_require__(5370);
function findHeadInCache(cache, parallelRoutes) {
    const isLastItem = Object.keys(parallelRoutes).length === 0;
    if (isLastItem) {
        return cache.head;
    }
    for(const key in parallelRoutes){
        const [segment, childParallelRoutes] = parallelRoutes[key];
        const childSegmentMap = cache.parallelRoutes.get(key);
        if (!childSegmentMap) {
            continue;
        }
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        const cacheNode = childSegmentMap.get(cacheKey);
        if (!cacheNode) {
            continue;
        }
        const item = findHeadInCache(cacheNode, childParallelRoutes);
        if (item) {
            return item;
        }
    }
    return undefined;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=find-head-in-cache.js.map


/***/ }),

/***/ 3715:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSegmentValue", ({
    enumerable: true,
    get: function() {
        return getSegmentValue;
    }
}));
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-segment-value.js.map


/***/ }),

/***/ 1935:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleExternalUrl: function() {
        return handleExternalUrl;
    },
    navigateReducer: function() {
        return navigateReducer;
    }
});
const _approutercontext = __webpack_require__(3280);
const _fetchserverresponse = __webpack_require__(969);
const _createrecordfromthenable = __webpack_require__(5792);
const _readrecordvalue = __webpack_require__(4170);
const _createhreffromurl = __webpack_require__(8253);
const _invalidatecachebelowflightsegmentpath = __webpack_require__(1986);
const _fillcachewithdataproperty = __webpack_require__(277);
const _createoptimistictree = __webpack_require__(5603);
const _applyrouterstatepatchtotree = __webpack_require__(951);
const _shouldhardnavigate = __webpack_require__(9425);
const _isnavigatingtonewrootlayout = __webpack_require__(9610);
const _routerreducertypes = __webpack_require__(549);
const _handlemutable = __webpack_require__(5098);
const _applyflightdata = __webpack_require__(8837);
const _getprefetchcacheentrystatus = __webpack_require__(9362);
const _pruneprefetchcache = __webpack_require__(1262);
function handleExternalUrl(state, mutable, url, pendingPush) {
    mutable.previousTree = state.tree;
    mutable.mpaNavigation = true;
    mutable.canonicalUrl = url;
    mutable.pendingPush = pendingPush;
    mutable.scrollableSegments = undefined;
    return (0, _handlemutable.handleMutable)(state, mutable);
}
function generateSegmentsFromPatch(flightRouterPatch) {
    const segments = [];
    const [segment, parallelRoutes] = flightRouterPatch;
    if (Object.keys(parallelRoutes).length === 0) {
        return [
            [
                segment
            ]
        ];
    }
    for (const [parallelRouteKey, parallelRoute] of Object.entries(parallelRoutes)){
        for (const childSegment of generateSegmentsFromPatch(parallelRoute)){
            // If the segment is empty, it means we are at the root of the tree
            if (segment === "") {
                segments.push([
                    parallelRouteKey,
                    ...childSegment
                ]);
            } else {
                segments.push([
                    segment,
                    parallelRouteKey,
                    ...childSegment
                ]);
            }
        }
    }
    return segments;
}
function addRefetchToLeafSegments(newCache, currentCache, flightSegmentPath, treePatch, data) {
    let appliedPatch = false;
    newCache.status = _approutercontext.CacheStates.READY;
    newCache.subTreeData = currentCache.subTreeData;
    newCache.parallelRoutes = new Map(currentCache.parallelRoutes);
    const segmentPathsToFill = generateSegmentsFromPatch(treePatch).map((segment)=>[
            ...flightSegmentPath,
            ...segment
        ]);
    for (const segmentPaths of segmentPathsToFill){
        const res = (0, _fillcachewithdataproperty.fillCacheWithDataProperty)(newCache, currentCache, segmentPaths, data);
        if (!(res == null ? void 0 : res.bailOptimistic)) {
            appliedPatch = true;
        }
    }
    return appliedPatch;
}
function navigateReducer(state, action) {
    const { url, isExternalUrl, navigateType, cache, mutable, forceOptimisticNavigation } = action;
    const { pathname, hash } = url;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    const pendingPush = navigateType === "push";
    // we want to prune the prefetch cache on every navigation to avoid it growing too large
    (0, _pruneprefetchcache.prunePrefetchCache)(state.prefetchCache);
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (isExternalUrl) {
        return handleExternalUrl(state, mutable, url.toString(), pendingPush);
    }
    let prefetchValues = state.prefetchCache.get((0, _createhreffromurl.createHrefFromUrl)(url, false));
    if (forceOptimisticNavigation && (prefetchValues == null ? void 0 : prefetchValues.kind) !== _routerreducertypes.PrefetchKind.TEMPORARY) {
        const segments = pathname.split("/");
        // TODO-APP: figure out something better for index pages
        segments.push("__PAGE__");
        // Optimistic tree case.
        // If the optimistic tree is deeper than the current state leave that deeper part out of the fetch
        const optimisticTree = (0, _createoptimistictree.createOptimisticTree)(segments, state.tree, false);
        // we need a copy of the cache in case we need to revert to it
        const temporaryCacheNode = {
            ...cache
        };
        // Copy subTreeData for the root node of the cache.
        // Note: didn't do it above because typescript doesn't like it.
        temporaryCacheNode.status = _approutercontext.CacheStates.READY;
        temporaryCacheNode.subTreeData = state.cache.subTreeData;
        temporaryCacheNode.parallelRoutes = new Map(state.cache.parallelRoutes);
        let data;
        const fetchResponse = ()=>{
            if (!data) {
                data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(url, optimisticTree, state.nextUrl, state.buildId));
            }
            return data;
        };
        // TODO-APP: segments.slice(1) strips '', we can get rid of '' altogether.
        // TODO-APP: re-evaluate if we need to strip the last segment
        const optimisticFlightSegmentPath = segments.slice(1).map((segment)=>[
                "children",
                segment
            ]).flat();
        // Copy existing cache nodes as far as possible and fill in `data` property with the started data fetch.
        // The `data` property is used to suspend in layout-router during render if it hasn't resolved yet by the time it renders.
        const res = (0, _fillcachewithdataproperty.fillCacheWithDataProperty)(temporaryCacheNode, state.cache, optimisticFlightSegmentPath, fetchResponse, true);
        // If optimistic fetch couldn't happen it falls back to the non-optimistic case.
        if (!(res == null ? void 0 : res.bailOptimistic)) {
            mutable.previousTree = state.tree;
            mutable.patchedTree = optimisticTree;
            mutable.pendingPush = pendingPush;
            mutable.hashFragment = hash;
            mutable.scrollableSegments = [];
            mutable.cache = temporaryCacheNode;
            mutable.canonicalUrl = href;
            state.prefetchCache.set((0, _createhreffromurl.createHrefFromUrl)(url, false), {
                data: Promise.resolve(data),
                // this will make sure that the entry will be discarded after 30s
                kind: _routerreducertypes.PrefetchKind.TEMPORARY,
                prefetchTime: Date.now(),
                treeAtTimeOfPrefetch: state.tree,
                lastUsedTime: Date.now()
            });
            return (0, _handlemutable.handleMutable)(state, mutable);
        }
    }
    // If we don't have a prefetch value, we need to create one
    if (!prefetchValues) {
        const data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(url, state.tree, state.nextUrl, state.buildId));
        const newPrefetchValue = {
            data: Promise.resolve(data),
            // this will make sure that the entry will be discarded after 30s
            kind: _routerreducertypes.PrefetchKind.TEMPORARY,
            prefetchTime: Date.now(),
            treeAtTimeOfPrefetch: state.tree,
            lastUsedTime: null
        };
        state.prefetchCache.set((0, _createhreffromurl.createHrefFromUrl)(url, false), newPrefetchValue);
        prefetchValues = newPrefetchValue;
    }
    const prefetchEntryCacheStatus = (0, _getprefetchcacheentrystatus.getPrefetchEntryCacheStatus)(prefetchValues);
    // The one before last item is the router state tree patch
    const { treeAtTimeOfPrefetch, data } = prefetchValues;
    // Unwrap cache data with `use` to suspend here (in the reducer) until the fetch resolves.
    const [flightData, canonicalUrlOverride] = (0, _readrecordvalue.readRecordValue)(data);
    // important: we should only mark the cache node as dirty after we unsuspend from the call above
    prefetchValues.lastUsedTime = Date.now();
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return handleExternalUrl(state, mutable, flightData, pendingPush);
    }
    let currentTree = state.tree;
    let currentCache = state.cache;
    let scrollableSegments = [];
    for (const flightDataPath of flightData){
        const flightSegmentPath = flightDataPath.slice(0, -4);
        // The one before last item is the router state tree patch
        const [treePatch] = flightDataPath.slice(-3);
        // Create new tree based on the flightSegmentPath and router state patch
        let newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            "",
            ...flightSegmentPath
        ], currentTree, treePatch);
        // If the tree patch can't be applied to the current tree then we use the tree at time of prefetch
        // TODO-APP: This should instead fill in the missing pieces in `currentTree` with the data from `treeAtTimeOfPrefetch`, then apply the patch.
        if (newTree === null) {
            newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
                "",
                ...flightSegmentPath
            ], treeAtTimeOfPrefetch, treePatch);
        }
        if (newTree !== null) {
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return handleExternalUrl(state, mutable, href, pendingPush);
            }
            let applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath, prefetchValues.kind === "auto" && prefetchEntryCacheStatus === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.reusable);
            if (!applied && prefetchEntryCacheStatus === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.stale) {
                applied = addRefetchToLeafSegments(cache, currentCache, flightSegmentPath, treePatch, ()=>(0, _fetchserverresponse.fetchServerResponse)(url, currentTree, state.nextUrl, state.buildId));
            }
            const hardNavigate = (0, _shouldhardnavigate.shouldHardNavigate)([
                "",
                ...flightSegmentPath
            ], currentTree);
            if (hardNavigate) {
                cache.status = _approutercontext.CacheStates.READY;
                // Copy subTreeData for the root node of the cache.
                cache.subTreeData = currentCache.subTreeData;
                (0, _invalidatecachebelowflightsegmentpath.invalidateCacheBelowFlightSegmentPath)(cache, currentCache, flightSegmentPath);
                // Ensure the existing cache value is used when the cache was not invalidated.
                mutable.cache = cache;
            } else if (applied) {
                mutable.cache = cache;
            }
            currentCache = cache;
            currentTree = newTree;
            for (const subSegment of generateSegmentsFromPatch(treePatch)){
                const scrollableSegmentPath = [
                    ...flightSegmentPath,
                    ...subSegment
                ];
                // Filter out the __DEFAULT__ paths as they shouldn't be scrolled to in this case.
                if (scrollableSegmentPath[scrollableSegmentPath.length - 1] !== "__DEFAULT__") {
                    scrollableSegments.push(scrollableSegmentPath);
                }
            }
        }
    }
    mutable.previousTree = state.tree;
    mutable.patchedTree = currentTree;
    mutable.scrollableSegments = scrollableSegments;
    mutable.canonicalUrl = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : href;
    mutable.pendingPush = pendingPush;
    mutable.hashFragment = hash;
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigate-reducer.js.map


/***/ }),

/***/ 8411:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "prefetchReducer", ({
    enumerable: true,
    get: function() {
        return prefetchReducer;
    }
}));
const _createhreffromurl = __webpack_require__(8253);
const _fetchserverresponse = __webpack_require__(969);
const _routerreducertypes = __webpack_require__(549);
const _createrecordfromthenable = __webpack_require__(5792);
const _pruneprefetchcache = __webpack_require__(1262);
const _approuterheaders = __webpack_require__(281);
function prefetchReducer(state, action) {
    // let's prune the prefetch cache before we do anything else
    (0, _pruneprefetchcache.prunePrefetchCache)(state.prefetchCache);
    const { url } = action;
    url.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    const href = (0, _createhreffromurl.createHrefFromUrl)(url, false);
    const cacheEntry = state.prefetchCache.get(href);
    if (cacheEntry) {
        /**
     * If the cache entry present was marked as temporary, it means that we prefetched it from the navigate reducer,
     * where we didn't have the prefetch intent. We want to update it to the new, more accurate, kind here.
     */ if (cacheEntry.kind === _routerreducertypes.PrefetchKind.TEMPORARY) {
            state.prefetchCache.set(href, {
                ...cacheEntry,
                kind: action.kind
            });
        }
        /**
     * if the prefetch action was a full prefetch and that the current cache entry wasn't one, we want to re-prefetch,
     * otherwise we can re-use the current cache entry
     **/ if (!(cacheEntry.kind === _routerreducertypes.PrefetchKind.AUTO && action.kind === _routerreducertypes.PrefetchKind.FULL)) {
            return state;
        }
    }
    // fetchServerResponse is intentionally not awaited so that it can be unwrapped in the navigate-reducer
    const serverResponse = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(url, state.tree, state.nextUrl, state.buildId, action.kind));
    // Create new tree based on the flightSegmentPath and router state patch
    state.prefetchCache.set(href, {
        // Create new tree based on the flightSegmentPath and router state patch
        treeAtTimeOfPrefetch: state.tree,
        data: serverResponse,
        kind: action.kind,
        prefetchTime: Date.now(),
        lastUsedTime: null
    });
    return state;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prefetch-reducer.js.map


/***/ }),

/***/ 1262:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "prunePrefetchCache", ({
    enumerable: true,
    get: function() {
        return prunePrefetchCache;
    }
}));
const _getprefetchcacheentrystatus = __webpack_require__(9362);
function prunePrefetchCache(prefetchCache) {
    for (const [href, prefetchCacheEntry] of prefetchCache){
        if ((0, _getprefetchcacheentrystatus.getPrefetchEntryCacheStatus)(prefetchCacheEntry) === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.expired) {
            prefetchCache.delete(href);
        }
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prune-prefetch-cache.js.map


/***/ }),

/***/ 9153:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "refreshReducer", ({
    enumerable: true,
    get: function() {
        return refreshReducer;
    }
}));
const _fetchserverresponse = __webpack_require__(969);
const _createrecordfromthenable = __webpack_require__(5792);
const _readrecordvalue = __webpack_require__(4170);
const _createhreffromurl = __webpack_require__(8253);
const _applyrouterstatepatchtotree = __webpack_require__(951);
const _isnavigatingtonewrootlayout = __webpack_require__(9610);
const _navigatereducer = __webpack_require__(1935);
const _handlemutable = __webpack_require__(5098);
const _approutercontext = __webpack_require__(3280);
const _filllazyitemstillleafwithhead = __webpack_require__(985);
function refreshReducer(state, action) {
    const { cache, mutable, origin } = action;
    const href = state.canonicalUrl;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (!cache.data) {
        // TODO-APP: verify that `href` is not an external url.
        // Fetch data from the root of the tree.
        cache.data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), [
            state.tree[0],
            state.tree[1],
            state.tree[2],
            "refetch"
        ], state.nextUrl, state.buildId));
    }
    const [flightData, canonicalUrlOverride] = (0, _readrecordvalue.readRecordValue)(cache.data);
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    // Remove cache.data as it has been resolved at this point.
    cache.data = null;
    let currentTree = state.tree;
    for (const flightDataPath of flightData){
        // FlightDataPath with more than two items means unexpected Flight data was returned
        if (flightDataPath.length !== 3) {
            // TODO-APP: handle this case better
            console.log("REFRESH FAILED");
            return state;
        }
        // Given the path can only have two items the items are only the router state and subTreeData for the root.
        const [treePatch] = flightDataPath;
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            ""
        ], currentTree, treePatch);
        if (newTree === null) {
            throw new Error("SEGMENT MISMATCH");
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
        if (canonicalUrlOverride) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        // The one before last item is the router state tree patch
        const [subTreeData, head] = flightDataPath.slice(-2);
        // Handles case where prefetch only returns the router tree patch without rendered components.
        if (subTreeData !== null) {
            cache.status = _approutercontext.CacheStates.READY;
            cache.subTreeData = subTreeData;
            (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, treePatch, head);
            mutable.cache = cache;
            mutable.prefetchCache = new Map();
        }
        mutable.previousTree = currentTree;
        mutable.patchedTree = newTree;
        mutable.canonicalUrl = href;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=refresh-reducer.js.map


/***/ }),

/***/ 734:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "restoreReducer", ({
    enumerable: true,
    get: function() {
        return restoreReducer;
    }
}));
const _createhreffromurl = __webpack_require__(8253);
function restoreReducer(state, action) {
    const { url, tree } = action;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    return {
        buildId: state.buildId,
        // Set canonical url
        canonicalUrl: href,
        pushRef: state.pushRef,
        focusAndScrollRef: state.focusAndScrollRef,
        cache: state.cache,
        prefetchCache: state.prefetchCache,
        // Restore provided tree
        tree: tree,
        nextUrl: url.pathname
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=restore-reducer.js.map


/***/ }),

/***/ 7647:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "serverActionReducer", ({
    enumerable: true,
    get: function() {
        return serverActionReducer;
    }
}));
const _appcallserver = __webpack_require__(4783);
const _approuterheaders = __webpack_require__(281);
const _createrecordfromthenable = __webpack_require__(5792);
const _readrecordvalue = __webpack_require__(4170);
const _client = __webpack_require__(7897);
const _routerreducertypes = __webpack_require__(549);
const _addbasepath = __webpack_require__(739);
const _createhreffromurl = __webpack_require__(8253);
const _redirect = __webpack_require__(6932);
async function fetchServerAction(state, param) {
    let { actionId, actionArgs } = param;
    const body = await (0, _client.encodeReply)(actionArgs);
    const res = await fetch("", {
        method: "POST",
        headers: {
            Accept: _approuterheaders.RSC_CONTENT_TYPE_HEADER,
            "Next-Action": actionId,
            [_approuterheaders.NEXT_ROUTER_STATE_TREE]: JSON.stringify(state.tree),
            ... false ? 0 : {},
            ...state.nextUrl ? {
                [_approuterheaders.NEXT_URL]: state.nextUrl
            } : {}
        },
        body
    });
    const location = res.headers.get("x-action-redirect");
    let revalidatedParts;
    try {
        const revalidatedHeader = JSON.parse(res.headers.get("x-action-revalidated") || "[[],0,0]");
        revalidatedParts = {
            paths: revalidatedHeader[0] || [],
            tag: !!revalidatedHeader[1],
            cookie: revalidatedHeader[2]
        };
    } catch (e) {
        revalidatedParts = {
            paths: [],
            tag: false,
            cookie: false
        };
    }
    const redirectLocation = location ? new URL((0, _addbasepath.addBasePath)(location), window.location.origin) : undefined;
    let isFlightResponse = res.headers.get("content-type") === _approuterheaders.RSC_CONTENT_TYPE_HEADER;
    if (isFlightResponse) {
        const response = await (0, _client.createFromFetch)(Promise.resolve(res), {
            callServer: _appcallserver.callServer
        });
        // if it was a redirection, then result is just a regular RSC payload
        if (location) {
            const [, payload] = response;
            return {
                actionFlightData: payload == null ? void 0 : payload[1],
                redirectLocation,
                revalidatedParts
            };
        // otherwise it's a tuple of [actionResult, actionFlightData]
        } else {
            const [actionResult, [, actionFlightData]] = response != null ? response : [];
            return {
                actionResult,
                actionFlightData,
                redirectLocation,
                revalidatedParts
            };
        }
    }
    return {
        redirectLocation,
        revalidatedParts
    };
}
function serverActionReducer(state, action) {
    // the action could be called twice so we need to check if we already have applied it
    if (action.mutable.serverActionApplied) {
        return state;
    }
    if (!action.mutable.inFlightServerAction) {
        action.mutable.previousTree = state.tree;
        action.mutable.previousUrl = state.canonicalUrl;
        action.mutable.inFlightServerAction = (0, _createrecordfromthenable.createRecordFromThenable)(fetchServerAction(state, action));
    }
    try {
        // suspends until the server action is resolved.
        const { actionResult, actionFlightData, redirectLocation, revalidatedParts } = (0, _readrecordvalue.readRecordValue)(action.mutable.inFlightServerAction);
        // Invalidate the cache for the revalidated parts. This has to be done before the
        // cache is updated with the action's flight data again.
        if (revalidatedParts.tag || revalidatedParts.cookie) {
            // Invalidate everything if the tag is set.
            state.prefetchCache.clear();
        } else if (revalidatedParts.paths.length > 0) {
            // Invalidate all subtrees that are below the revalidated paths, and invalidate
            // all the prefetch cache.
            // TODO-APP: Currently the prefetch cache doesn't have subtree information,
            // so we need to invalidate the entire cache if a path was revalidated.
            state.prefetchCache.clear();
        }
        if (redirectLocation) {
            // the redirection might have a flight data associated with it, so we'll populate the cache with it
            if (actionFlightData) {
                const href = (0, _createhreffromurl.createHrefFromUrl)(redirectLocation, false);
                const previousCacheEntry = state.prefetchCache.get(href);
                var _previousCacheEntry_kind;
                state.prefetchCache.set(href, {
                    data: (0, _createrecordfromthenable.createRecordFromThenable)(Promise.resolve([
                        actionFlightData,
                        // TODO-APP: verify the logic around canonical URL overrides
                        undefined
                    ])),
                    kind: (_previousCacheEntry_kind = previousCacheEntry == null ? void 0 : previousCacheEntry.kind) != null ? _previousCacheEntry_kind : _routerreducertypes.PrefetchKind.TEMPORARY,
                    prefetchTime: Date.now(),
                    treeAtTimeOfPrefetch: action.mutable.previousTree,
                    lastUsedTime: null
                });
            }
            // we throw the redirection in the action handler so that it is caught during render
            action.reject((0, _redirect.getRedirectError)(redirectLocation.toString(), _redirect.RedirectType.push));
        } else {
            if (actionFlightData) {
                const href = (0, _createhreffromurl.createHrefFromUrl)(new URL(action.mutable.previousUrl, window.location.origin), false);
                const previousCacheEntry = state.prefetchCache.get(href);
                var _previousCacheEntry_kind1;
                state.prefetchCache.set((0, _createhreffromurl.createHrefFromUrl)(new URL(action.mutable.previousUrl, window.location.origin), false), {
                    data: (0, _createrecordfromthenable.createRecordFromThenable)(Promise.resolve([
                        actionFlightData,
                        // TODO-APP: verify the logic around canonical URL overrides
                        undefined
                    ])),
                    kind: (_previousCacheEntry_kind1 = previousCacheEntry == null ? void 0 : previousCacheEntry.kind) != null ? _previousCacheEntry_kind1 : _routerreducertypes.PrefetchKind.TEMPORARY,
                    prefetchTime: Date.now(),
                    treeAtTimeOfPrefetch: action.mutable.previousTree,
                    lastUsedTime: null
                });
                // this is an intentional hack around React: we want to update the tree in a new render
                setTimeout(()=>{
                    action.changeByServerResponse(action.mutable.previousTree, actionFlightData, undefined);
                });
            }
            action.resolve(actionResult);
        }
    } catch (e) {
        if (e.status === "rejected") {
            action.reject(e.value);
        } else {
            throw e;
        }
    }
    action.mutable.serverActionApplied = true;
    return state;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-action-reducer.js.map


/***/ }),

/***/ 2813:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "serverPatchReducer", ({
    enumerable: true,
    get: function() {
        return serverPatchReducer;
    }
}));
const _createhreffromurl = __webpack_require__(8253);
const _applyrouterstatepatchtotree = __webpack_require__(951);
const _isnavigatingtonewrootlayout = __webpack_require__(9610);
const _navigatereducer = __webpack_require__(1935);
const _applyflightdata = __webpack_require__(8837);
const _handlemutable = __webpack_require__(5098);
function serverPatchReducer(state, action) {
    const { flightData, previousTree, overrideCanonicalUrl, cache, mutable } = action;
    const isForCurrentTree = JSON.stringify(previousTree) === JSON.stringify(state.tree);
    // When a fetch is slow to resolve it could be that you navigated away while the request was happening or before the reducer runs.
    // In that case opt-out of applying the patch given that the data could be stale.
    if (!isForCurrentTree) {
        // TODO-APP: Handle tree mismatch
        console.log("TREE MISMATCH");
        // Keep everything as-is.
        return state;
    }
    if (mutable.previousTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    let currentTree = state.tree;
    let currentCache = state.cache;
    for (const flightDataPath of flightData){
        // Slices off the last segment (which is at -4) as it doesn't exist in the tree yet
        const flightSegmentPath = flightDataPath.slice(0, -4);
        const [treePatch] = flightDataPath.slice(-3, -2);
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            "",
            ...flightSegmentPath
        ], currentTree, treePatch);
        if (newTree === null) {
            throw new Error("SEGMENT MISMATCH");
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, state.canonicalUrl, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = overrideCanonicalUrl ? (0, _createhreffromurl.createHrefFromUrl)(overrideCanonicalUrl) : undefined;
        if (canonicalUrlOverrideHref) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath);
        mutable.previousTree = currentTree;
        mutable.patchedTree = newTree;
        mutable.cache = cache;
        currentCache = cache;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-patch-reducer.js.map


/***/ }),

/***/ 549:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PrefetchKind: function() {
        return PrefetchKind;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    ACTION_PREFETCH: function() {
        return ACTION_PREFETCH;
    },
    ACTION_FAST_REFRESH: function() {
        return ACTION_FAST_REFRESH;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    }
});
const ACTION_REFRESH = "refresh";
const ACTION_NAVIGATE = "navigate";
const ACTION_RESTORE = "restore";
const ACTION_SERVER_PATCH = "server-patch";
const ACTION_PREFETCH = "prefetch";
const ACTION_FAST_REFRESH = "fast-refresh";
const ACTION_SERVER_ACTION = "server-action";
var PrefetchKind;
(function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    PrefetchKind["TEMPORARY"] = "temporary";
})(PrefetchKind || (PrefetchKind = {}));
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map


/***/ }),

/***/ 5192:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "reducer", ({
    enumerable: true,
    get: function() {
        return reducer;
    }
}));
const _routerreducertypes = __webpack_require__(549);
const _navigatereducer = __webpack_require__(1935);
const _serverpatchreducer = __webpack_require__(2813);
const _restorereducer = __webpack_require__(734);
const _refreshreducer = __webpack_require__(9153);
const _prefetchreducer = __webpack_require__(8411);
const _fastrefreshreducer = __webpack_require__(7709);
const _serveractionreducer = __webpack_require__(7647);
/**
 * Reducer that handles the app-router state updates.
 */ function clientReducer(state, action) {
    switch(action.type){
        case _routerreducertypes.ACTION_NAVIGATE:
            {
                return (0, _navigatereducer.navigateReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_PATCH:
            {
                return (0, _serverpatchreducer.serverPatchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_RESTORE:
            {
                return (0, _restorereducer.restoreReducer)(state, action);
            }
        case _routerreducertypes.ACTION_REFRESH:
            {
                return (0, _refreshreducer.refreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_FAST_REFRESH:
            {
                return (0, _fastrefreshreducer.fastRefreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_PREFETCH:
            {
                return (0, _prefetchreducer.prefetchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_ACTION:
            {
                return (0, _serveractionreducer.serverActionReducer)(state, action);
            }
        // This case should never be hit as dispatch is strongly typed.
        default:
            throw new Error("Unknown action");
    }
}
function serverReducer(state, _action) {
    return state;
}
const reducer =  true ? serverReducer : 0;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer.js.map


/***/ }),

/***/ 9425:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "shouldHardNavigate", ({
    enumerable: true,
    get: function() {
        return shouldHardNavigate;
    }
}));
const _matchsegments = __webpack_require__(5507);
function shouldHardNavigate(flightSegmentPath, flightRouterState) {
    const [segment, parallelRoutes] = flightRouterState;
    // TODO-APP: Check if `as` can be replaced.
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Check if current segment matches the existing segment.
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        // If dynamic parameter in tree doesn't match up with segment path a hard navigation is triggered.
        if (Array.isArray(currentSegment)) {
            return true;
        }
        // If the existing segment did not match soft navigation is triggered.
        return false;
    }
    const lastSegment = flightSegmentPath.length <= 2;
    if (lastSegment) {
        return false;
    }
    return shouldHardNavigate(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey]);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=should-hard-navigate.js.map


/***/ }),

/***/ 9859:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createSearchParamsBailoutProxy", ({
    enumerable: true,
    get: function() {
        return createSearchParamsBailoutProxy;
    }
}));
const _staticgenerationbailout = __webpack_require__(9837);
function createSearchParamsBailoutProxy() {
    return new Proxy({}, {
        get (_target, prop) {
            // React adds some properties on the object when serializing for client components
            if (typeof prop === "string") {
                (0, _staticgenerationbailout.staticGenerationBailout)("searchParams." + prop);
            }
        }
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=searchparams-bailout-proxy.js.map


/***/ }),

/***/ 9837:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "staticGenerationBailout", ({
    enumerable: true,
    get: function() {
        return staticGenerationBailout;
    }
}));
const _hooksservercontext = __webpack_require__(8340);
const _staticgenerationasyncstorage = __webpack_require__(94);
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args);
        this.code = "NEXT_STATIC_GEN_BAILOUT";
    }
}
const staticGenerationBailout = (reason, opts)=>{
    const staticGenerationStore = _staticgenerationasyncstorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.dynamicShouldError) {
        const { dynamic = "error", link } = opts || {};
        const suffix = link ? " See more info here: " + link : "";
        throw new StaticGenBailoutError('Page with `dynamic = "' + dynamic + "\"` couldn't be rendered statically because it used `" + reason + "`." + suffix);
    }
    if (staticGenerationStore) {
        staticGenerationStore.revalidate = 0;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        const err = new _hooksservercontext.DynamicServerError(reason);
        staticGenerationStore.dynamicUsageDescription = reason;
        staticGenerationStore.dynamicUsageStack = err.stack;
        throw err;
    }
    return false;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map


/***/ }),

/***/ 3100:
/***/ ((module, exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return StaticGenerationSearchParamsBailoutProvider;
    }
}));
const _interop_require_default = __webpack_require__(5967);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _searchparamsbailoutproxy = __webpack_require__(9859);
function StaticGenerationSearchParamsBailoutProvider(param) {
    let { Component, propsForComponent } = param;
    const searchParams = (0, _searchparamsbailoutproxy.createSearchParamsBailoutProxy)();
    return /*#__PURE__*/ _react.default.createElement(Component, {
        searchParams: searchParams,
        ...propsForComponent
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-searchparams-bailout-provider.js.map


/***/ }),

/***/ 9051:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useReducerWithReduxDevtools", ({
    enumerable: true,
    get: function() {
        return useReducerWithReduxDevtools;
    }
}));
const _react = __webpack_require__(8038);
function normalizeRouterState(val) {
    if (val instanceof Map) {
        const obj = {};
        for (const [key, value] of val.entries()){
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value._bundlerConfig) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (typeof val === "object" && val !== null) {
        const obj = {};
        for(const key in val){
            const value = val[key];
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value.hasOwnProperty("_bundlerConfig")) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (Array.isArray(val)) {
        return val.map(normalizeRouterState);
    }
    return val;
}
function devToolReducer(fn, ref) {
    return (state, action)=>{
        const res = fn(state, action);
        if (ref.current) {
            ref.current.send(action, normalizeRouterState(res));
        }
        return res;
    };
}
function useReducerWithReduxDevtoolsNoop(fn, initialState) {
    const [state, dispatch] = (0, _react.useReducer)(fn, initialState);
    return [
        state,
        dispatch,
        ()=>{}
    ];
}
function useReducerWithReduxDevtoolsImpl(fn, initialState) {
    const devtoolsConnectionRef = (0, _react.useRef)();
    const enabledRef = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        if (devtoolsConnectionRef.current || enabledRef.current === false) {
            return;
        }
        if (enabledRef.current === undefined && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined") {
            enabledRef.current = false;
            return;
        }
        devtoolsConnectionRef.current = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
            instanceId: 8000,
            name: "next-router"
        });
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.init(normalizeRouterState(initialState));
        }
        return ()=>{
            devtoolsConnectionRef.current = undefined;
        };
    }, [
        initialState
    ]);
    const [state, dispatch] = (0, _react.useReducer)(devToolReducer(/* logReducer( */ fn /*)*/ , devtoolsConnectionRef), initialState);
    const sync = (0, _react.useCallback)(()=>{
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.send({
                type: "RENDER_SYNC"
            }, normalizeRouterState(state));
        }
    }, [
        state
    ]);
    return [
        state,
        dispatch,
        sync
    ];
}
const useReducerWithReduxDevtools =  false ? 0 : useReducerWithReduxDevtoolsNoop;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-reducer-with-devtools.js.map


/***/ }),

/***/ 9067:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getDomainLocale", ({
    enumerable: true,
    get: function() {
        return getDomainLocale;
    }
}));
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 7977:
/***/ ((module, exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(5967);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _resolvehref = __webpack_require__(7782);
const _islocalurl = __webpack_require__(1109);
const _formaturl = __webpack_require__(3938);
const _utils = __webpack_require__(9232);
const _addlocale = __webpack_require__(2148);
const _routercontext = __webpack_require__(4964);
const _approutercontext = __webpack_require__(3280);
const _useintersection = __webpack_require__(8670);
const _getdomainlocale = __webpack_require__(9067);
const _addbasepath = __webpack_require__(739);
const _routerreducertypes = __webpack_require__(549);
const prefetched = new Set();
function prefetch(router, href, as, options, appOptions, isAppRouter) {
    if (true) {
        return;
    }
    // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    if (!isAppRouter && !(0, _islocalurl.isLocalURL)(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    const prefetchPromise = isAppRouter ? router.prefetch(href, appOptions) : router.prefetch(href, as, options);
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    Promise.resolve(prefetchPromise).catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !isAppRouter && !(0, _islocalurl.isLocalURL)(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                forceOptimisticNavigation: !prefetchEnabled
            });
        }
    };
    if (isAppRouter) {
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
/**
 * React Component that enables client-side transitions between routes.
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    let children;
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, locale, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = true === false, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    const prefetchEnabled = prefetchProp !== false;
    /**
     * The possible states for prefetch are:
     * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
     * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
     * - false: we will not prefetch if in the viewport at all
     */ const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    const pagesRouter = _react.default.useContext(_routercontext.RouterContext);
    const appRouter = _react.default.useContext(_approutercontext.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    if (false) {}
    if (false) {}
    const { href, as } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _resolvehref.resolveHref)(pagesRouter, asProp) : resolvedAs || resolvedHref
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) {}
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (false) {}
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href, as, {
            locale
        }, {
            kind: appPrefetchKind
        }, isAppRouter);
    }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router,
        isAppRouter,
        appPrefetchKind
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        },
        onTouchStart (e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ _react.default.createElement("a", {
        ...restProps,
        ...childProps
    }, children);
});
const _default = Link;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 6089:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePathTrailingSlash", ({
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
}));
const _removetrailingslash = __webpack_require__(3297);
const _parsepath = __webpack_require__(8854);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if (false) {}
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 6460:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    requestIdleCallback: function() {
        return requestIdleCallback;
    },
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    }
});
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 8670:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useIntersection", ({
    enumerable: true,
    get: function() {
        return useIntersection;
    }
}));
const _react = __webpack_require__(8038);
const _requestidlecallback = __webpack_require__(6460);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id, observer, elements } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection(param) {
    let { rootRef, rootMargin, disabled } = param;
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react.useState)(false);
    const elementRef = (0, _react.useRef)(null);
    const setElement = (0, _react.useCallback)((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react.useEffect)(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestidlecallback.requestIdleCallback)(()=>setVisible(true));
                return ()=>(0, _requestidlecallback.cancelIdleCallback)(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react.useCallback)(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 701:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    suspense: function() {
        return suspense;
    },
    NoSSR: function() {
        return NoSSR;
    }
});
const _interop_require_default = __webpack_require__(5967);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _nossrerror = __webpack_require__(3904);
function suspense() {
    const error = new Error(_nossrerror.NEXT_DYNAMIC_NO_SSR_CODE);
    error.digest = _nossrerror.NEXT_DYNAMIC_NO_SSR_CODE;
    throw error;
}
function NoSSR(param) {
    let { children } = param;
    if (true) {
        suspense();
    }
    return children;
} //# sourceMappingURL=dynamic-no-ssr.js.map


/***/ }),

/***/ 3904:
/***/ ((__unused_webpack_module, exports) => {

// This has to be a shared module which is shared between client component error boundary and dynamic component

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NEXT_DYNAMIC_NO_SSR_CODE", ({
    enumerable: true,
    get: function() {
        return NEXT_DYNAMIC_NO_SSR_CODE;
    }
}));
const NEXT_DYNAMIC_NO_SSR_CODE = "NEXT_DYNAMIC_NO_SSR_CODE"; //# sourceMappingURL=no-ssr-error.js.map


/***/ }),

/***/ 3916:
/***/ ((module) => {


(function webpackUniversalModuleDefinition(root, factory) {
    /* istanbul ignore next */ if (true) module.exports = factory();
    else {}
})(void 0, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ // The require function
        /******/ function __nested_webpack_require_589__(moduleId) {
            /******/ // Check if module is in cache
            /* istanbul ignore if */ /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ exports: {},
                /******/ id: moduleId,
                /******/ loaded: false
            };
            /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __nested_webpack_require_589__);
            /******/ // Flag the module as loaded
            /******/ module1.loaded = true;
            /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ // expose the modules object (__webpack_modules__)
        /******/ __nested_webpack_require_589__.m = modules;
        /******/ // expose the module cache
        /******/ __nested_webpack_require_589__.c = installedModules;
        /******/ // __webpack_public_path__
        /******/ __nested_webpack_require_589__.p = "";
        /******/ // Load entry module and return exports
        /******/ return __nested_webpack_require_589__(0);
    /******/ }([
        /* 0 */ /***/ function(module1, exports1, __nested_webpack_require_1939__) {
            "use strict";
            /*
	  Copyright JS Foundation and other contributors, https://js.foundation/

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/ Object.defineProperty(exports1, "__esModule", {
                value: true
            });
            var comment_handler_1 = __nested_webpack_require_1939__(1);
            var jsx_parser_1 = __nested_webpack_require_1939__(3);
            var parser_1 = __nested_webpack_require_1939__(8);
            var tokenizer_1 = __nested_webpack_require_1939__(15);
            function parse(code, options, delegate) {
                var commentHandler = null;
                var proxyDelegate = function(node, metadata) {
                    if (delegate) {
                        delegate(node, metadata);
                    }
                    if (commentHandler) {
                        commentHandler.visit(node, metadata);
                    }
                };
                var parserDelegate = typeof delegate === "function" ? proxyDelegate : null;
                var collectComment = false;
                if (options) {
                    collectComment = typeof options.comment === "boolean" && options.comment;
                    var attachComment = typeof options.attachComment === "boolean" && options.attachComment;
                    if (collectComment || attachComment) {
                        commentHandler = new comment_handler_1.CommentHandler();
                        commentHandler.attach = attachComment;
                        options.comment = true;
                        parserDelegate = proxyDelegate;
                    }
                }
                var isModule = false;
                if (options && typeof options.sourceType === "string") {
                    isModule = options.sourceType === "module";
                }
                var parser;
                if (options && typeof options.jsx === "boolean" && options.jsx) {
                    parser = new jsx_parser_1.JSXParser(code, options, parserDelegate);
                } else {
                    parser = new parser_1.Parser(code, options, parserDelegate);
                }
                var program = isModule ? parser.parseModule() : parser.parseScript();
                var ast = program;
                if (collectComment && commentHandler) {
                    ast.comments = commentHandler.comments;
                }
                if (parser.config.tokens) {
                    ast.tokens = parser.tokens;
                }
                if (parser.config.tolerant) {
                    ast.errors = parser.errorHandler.errors;
                }
                return ast;
            }
            exports1.parse = parse;
            function parseModule(code, options, delegate) {
                var parsingOptions = options || {};
                parsingOptions.sourceType = "module";
                return parse(code, parsingOptions, delegate);
            }
            exports1.parseModule = parseModule;
            function parseScript(code, options, delegate) {
                var parsingOptions = options || {};
                parsingOptions.sourceType = "script";
                return parse(code, parsingOptions, delegate);
            }
            exports1.parseScript = parseScript;
            function tokenize(code, options, delegate) {
                var tokenizer = new tokenizer_1.Tokenizer(code, options);
                var tokens;
                tokens = [];
                try {
                    while(true){
                        var token = tokenizer.getNextToken();
                        if (!token) {
                            break;
                        }
                        if (delegate) {
                            token = delegate(token);
                        }
                        tokens.push(token);
                    }
                } catch (e) {
                    tokenizer.errorHandler.tolerate(e);
                }
                if (tokenizer.errorHandler.tolerant) {
                    tokens.errors = tokenizer.errors();
                }
                return tokens;
            }
            exports1.tokenize = tokenize;
            var syntax_1 = __nested_webpack_require_1939__(2);
            exports1.Syntax = syntax_1.Syntax;
            // Sync with *.json manifests.
            exports1.version = "4.0.1";
        /***/ },
        /* 1 */ /***/ function(module1, exports1, __nested_webpack_require_7627__) {
            "use strict";
            Object.defineProperty(exports1, "__esModule", {
                value: true
            });
            var syntax_1 = __nested_webpack_require_7627__(2);
            var CommentHandler = function() {
                function CommentHandler() {
                    this.attach = false;
                    this.comments = [];
                    this.stack = [];
                    this.leading = [];
                    this.trailing = [];
                }
                CommentHandler.prototype.insertInnerComments = function(node, metadata) {
                    //  innnerComments for properties empty block
                    //  `function a() {/** comments **\/}`
                    if (node.type === syntax_1.Syntax.BlockStatement && node.body.length === 0) {
                        var innerComments = [];
                        for(var i = this.leading.length - 1; i >= 0; --i){
                            var entry = this.leading[i];
                            if (metadata.end.offset >= entry.start) {
                                innerComments.unshift(entry.comment);
                                this.leading.splice(i, 1);
                                this.trailing.splice(i, 1);
                            }
                        }
                        if (innerComments.length) {
                            node.innerComments = innerComments;
                        }
                    }
                };
                CommentHandler.prototype.findTrailingComments = function(metadata) {
                    var trailingComments = [];
                    if (this.trailing.length > 0) {
                        for(var i = this.trailing.length - 1; i >= 0; --i){
                            var entry_1 = this.trailing[i];
                            if (entry_1.start >= metadata.end.offset) {
                                trailingComments.unshift(entry_1.comment);
                            }
                        }
                        this.trailing.length = 0;
                        return trailingComments;
                    }
                    var entry = this.stack[this.stack.length - 1];
                    if (entry && entry.node.trailingComments) {
                        var firstComment = entry.node.trailingComments[0];
                        if (firstComment && firstComment.range[0] >= metadata.end.offset) {
                            trailingComments = entry.node.trailingComments;
                            delete entry.node.trailingComments;
                        }
                    }
                    return trailingComments;
                };
                CommentHandler.prototype.findLeadingComments = function(metadata) {
                    var leadingComments = [];
                    var target;
                    while(this.stack.length > 0){
                        var entry = this.stack[this.stack.length - 1];
                        if (entry && entry.start >= metadata.start.offset) {
                            target = entry.node;
                            this.stack.pop();
                        } else {
                            break;
                        }
                    }
                    if (target) {
                        var count = target.leadingComments ? target.leadingComments.length : 0;
                        for(var i = count - 1; i >= 0; --i){
                            var comment = target.leadingComments[i];
                            if (comment.range[1] <= metadata.start.offset) {
                                leadingComments.unshift(comment);
                                target.leadingComments.splice(i, 1);
                            }
                        }
                        if (target.leadingComments && target.leadingComments.length === 0) {
                            delete target.leadingComments;
                        }
                        return leadingComments;
                    }
                    for(var i = this.leading.length - 1; i >= 0; --i){
                        var entry = this.leading[i];
                        if (entry.start <= metadata.start.offset) {
                            leadingComments.unshift(entry.comment);
                            this.leading.splice(i, 1);
                        }
                    }
                    return leadingComments;
                };
                CommentHandler.prototype.visitNode = function(node, metadata) {
                    if (node.type === syntax_1.Syntax.Program && node.body.length > 0) {
                        return;
                    }
                    this.insertInnerComments(node, metadata);
                    var trailingComments = this.findTrailingComments(metadata);
                    var leadingComments = this.findLeadingComments(metadata);
                    if (leadingComments.length > 0) {
                        node.leadingComments = leadingComments;
                    }
                    if (trailingComments.length > 0) {
                        node.trailingComments = trailingComments;
                    }
                    this.stack.push({
                        node: node,
                        start: metadata.start.offset
                    });
                };
                CommentHandler.prototype.visitComment = function(node, metadata) {
                    var type = node.type[0] === "L" ? "Line" : "Block";
                    var comment = {
                        type: type,
                        value: node.value
                    };
                    if (node.range) {
                        comment.range = node.range;
                    }
                    if (node.loc) {
                        comment.loc = node.loc;
                    }
                    this.comments.push(comment);
                    if (this.attach) {
                        var entry = {
                            comment: {
                                type: type,
                                value: node.value,
                                range: [
                                    metadata.start.offset,
                                    metadata.end.offset
                                ]
                            },
                            start: metadata.start.offset
                        };
                        if (node.loc) {
                            entry.comment.loc = node.loc;
                        }
                        node.type = type;
                        this.leading.push(entry);
                        this.trailing.push(entry);
                    }
                };
                CommentHandler.prototype.visit = function(node, metadata) {
                    if (node.type === "LineComment") {
                        this.visitComment(node, metadata);
                    } else if (node.type === "BlockComment") {
                        this.visitComment(node, metadata);
                    } else if (this.attach) {
                        this.visitNode(node, metadata);
                    }
                };
                return CommentHandler;
            }();
            exports1.CommentHandler = CommentHandler;
        /***/ },
        /* 2 */ /***/ function(module1, exports1) {
            "use strict";
            Object.defineProperty(exports1, "__esModule", {
                value: true
            });
            exports1.Syntax = {
                AssignmentExpression: "AssignmentExpression",
                AssignmentPattern: "AssignmentPattern",
                ArrayExpression: "ArrayExpression",
                ArrayPattern: "ArrayPattern",
                ArrowFunctionExpression: "ArrowFunctionExpression",
                AwaitExpression: "AwaitExpression",
                BlockStatement: "BlockStatement",
                BinaryExpression: "BinaryExpression",
                BreakStatement: "BreakStatement",
                CallExpression: "CallExpression",
                CatchClause: "CatchClause",
                ClassBody: "ClassBody",
                ClassDeclaration: "ClassDeclaration",
                ClassExpression: "ClassExpression",
                ConditionalExpression: "ConditionalExpression",
                ContinueStatement: "ContinueStatement",
                DoWhileStatement: "DoWhileStatement",
                DebuggerStatement: "DebuggerStatement",
                EmptyStatement: "EmptyStatement",
                ExportAllDeclaration: "ExportAllDeclaration",
                ExportDefaultDeclaration: "ExportDefaultDeclaration",
                ExportNamedDeclaration: "ExportNamedDeclaration",
                ExportSpecifier: "ExportSpecifier",
                ExpressionStatement: "ExpressionStatement",
                ForStatement: "ForStatement",
                ForOfStatement: "ForOfStatement",
                ForInStatement: "ForInStatement",
                FunctionDeclaration: "FunctionDeclaration",
                FunctionExpression: "FunctionExpression",
                Identifier: "Identifier",
                IfStatement: "IfStatement",
                ImportDeclaration: "ImportDeclaration",
                ImportDefaultSpecifier: "ImportDefaultSpecifier",
                ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
                ImportSpecifier: "ImportSpecifier",
                Literal: "Literal",
                LabeledStatement: "LabeledStatement",
                LogicalExpression: "LogicalExpression",
                MemberExpression: "MemberExpression",
                MetaProperty: "MetaProperty",
                MethodDefinition: "MethodDefinition",
                NewExpression: "NewExpression",
                ObjectExpression: "ObjectExpression",
                ObjectPattern: "ObjectPattern",
                Program: "Program",
                Property: "Property",
                RestElement: "RestElement",
                ReturnStatement: "ReturnStatement",
                SequenceExpression: "SequenceExpression",
                SpreadElement: "SpreadElement",
                Super: "Super",
                SwitchCase: "SwitchCase",
                SwitchStatement: "SwitchStatement",
                TaggedTemplateExpression: "TaggedTemplateExpression",
                TemplateElement: "TemplateElement",
                TemplateLiteral: "TemplateLiteral",
                ThisExpression: "ThisExpression",
                ThrowStatement: "ThrowStatement",
                TryStatement: "TryStatement",
                UnaryExpression: "UnaryExpression",
                UpdateExpression: "UpdateExpression",
                VariableDeclaration: "VariableDeclaration",
                VariableDeclarator: "VariableDeclarator",
                WhileStatement: "WhileStatement",
                WithStatement: "WithStatement",
                YieldExpression: "YieldExpression"
            };
        /***/ },
        /* 3 */ /***/ function(module1, exports1, __nested_webpack_require_18710__) {
            "use strict";
            /* istanbul ignore next */ var __extends = this && this.__extends || function() {
                var extendStatics = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
                };
                return function(d, b) {
                    extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            }();
            Object.defineProperty(exports1, "__esModule", {
                value: true
            });
            var character_1 = __nested_webpack_require_18710__(4);
            var JSXNode = __nested_webpack_require_18710__(5);
            var jsx_syntax_1 = __nested_webpack_require_18710__(6);
            var Node = __nested_webpack_require_18710__(7);
            var parser_1 = __nested_webpack_require_18710__(8);
            var token_1 = __nested_webpack_require_18710__(13);
            var xhtml_entities_1 = __nested_webpack_require_18710__(14);
            token_1.TokenName[100 /* Identifier */ ] = "JSXIdentifier";
            token_1.TokenName[101 /* Text */ ] = "JSXText";
            // Fully qualified element name, e.g. <svg:path> returns "svg:path"
            function getQualifiedElementName(elementName) {
                var qualifiedName;
                switch(elementName.type){
                    case jsx_syntax_1.JSXSyntax.JSXIdentifier:
                        var id = elementName;
                        qualifiedName = id.name;
                        break;
                    case jsx_syntax_1.JSXSyntax.JSXNamespacedName:
                        var ns = elementName;
                        qualifiedName = getQualifiedElementName(ns.namespace) + ":" + getQualifiedElementName(ns.name);
                        break;
                    case jsx_syntax_1.JSXSyntax.JSXMemberExpression:
                        var expr = elementName;
                        qualifiedName = getQualifiedElementName(expr.object) + "." + getQualifiedElementName(expr.property);
                        break;
                    /* istanbul ignore next */ default:
                        break;
                }
                return qualifiedName;
            }
            var JSXParser = function(_super) {
                __extends(JSXParser, _super);
                function JSXParser(code, options, delegate) {
                    return _super.call(this, code, options, delegate) || this;
                }
                JSXParser.prototype.parsePrimaryExpression = function() {
                    return this.match("<") ? this.parseJSXRoot() : _super.prototype.parsePrimaryExpression.call(this);
                };
                JSXParser.prototype.startJSX = function() {
                    // Unwind the scanner before the lookahead token.
                    this.scanner.index = this.startMarker.index;
                    this.scanner.lineNumber = this.startMarker.line;
                    this.scanner.lineStart = this.startMarker.index - this.startMarker.column;
                };
                JSXParser.prototype.finishJSX = function() {
                    // Prime the next lookahead.
                    this.nextToken();
                };
                JSXParser.prototype.reenterJSX = function() {
                    this.startJSX();
                    this.expectJSX("}");
                    // Pop the closing '}' added from the lookahead.
                    if (this.config.tokens) {
                        this.tokens.pop();
                    }
                };
                JSXParser.prototype.createJSXNode = function() {
                    this.collectComments();
                    return {
                        index: this.scanner.index,
                        line: this.scanner.lineNumber,
                        column: this.scanner.index - this.scanner.lineStart
                    };
                };
                JSXParser.prototype.createJSXChildNode = function() {
                    return {
                        index: this.scanner.index,
                        line: this.scanner.lineNumber,
                        column: this.scanner.index - this.scanner.lineStart
                    };
                };
                JSXParser.prototype.scanXHTMLEntity = function(quote) {
                    var result = "&";
                    var valid = true;
                    var terminated = false;
                    var numeric = false;
                    var hex = false;
                    while(!this.scanner.eof() && valid && !terminated){
                        var ch = this.scanner.source[this.scanner.index];
                        if (ch === quote) {
                            break;
                        }
                        terminated = ch === ";";
                        result += ch;
                        ++this.scanner.index;
                        if (!terminated) {
                            switch(result.length){
                                case 2:
                                    // e.g. '&#123;'
                                    numeric = ch === "#";
                                    break;
                                case 3:
                                    if (numeric) {
                                        // e.g. '&#x41;'
                                        hex = ch === "x";
                                        valid = hex || character_1.Character.isDecimalDigit(ch.charCodeAt(0));
                                        numeric = numeric && !hex;
                                    }
                                    break;
                                default:
                                    valid = valid && !(numeric && !character_1.Character.isDecimalDigit(ch.charCodeAt(0)));
                                    valid = valid && !(hex && !character_1.Character.isHexDigit(ch.charCodeAt(0)));
                                    break;
                            }
                        }
                    }
                    if (valid && terminated && result.length > 2) {
                        // e.g. '&#x41;' becomes just '#x41'
                        var str = result.substr(1, result.length - 2);
                        if (numeric && str.length > 1) {
                            result = String.fromCharCode(parseInt(str.substr(1), 10));
                        } else if (hex && str.length > 2) {
                            result = String.fromCharCode(parseInt("0" + str.substr(1), 16));
                        } else if (!numeric && !hex && xhtml_entities_1.XHTMLEntities[str]) {
                            result = xhtml_entities_1.XHTMLEntities[str];
                        }
                    }
                    return result;
                };
                // Scan the next JSX token. This replaces Scanner#lex when in JSX mode.
                JSXParser.prototype.lexJSX = function() {
                    var cp = this.scanner.source.charCodeAt(this.scanner.index);
                    // < > / : = { }
                    if (cp === 60 || cp === 62 || cp === 47 || cp === 58 || cp === 61 || cp === 123 || cp === 125) {
                        var value = this.scanner.source[this.scanner.index++];
                        return {
                            type: 7 /* Punctuator */ ,
                            value: value,
                            lineNumber: this.scanner.lineNumber,
                            lineStart: this.scanner.lineStart,
                            start: this.scanner.index - 1,
                            end: this.scanner.index
                        };
                    }
                    // " '
                    if (cp === 34 || cp === 39) {
                        var start = this.scanner.index;
                        var quote = this.scanner.source[this.scanner.index++];
                        var str = "";
                        while(!this.scanner.eof()){
                            var ch = this.scanner.source[this.scanner.index++];
                            if (ch === quote) {
                                break;
                            } else if (ch === "&") {
                                str += this.scanXHTMLEntity(quote);
                            } else {
                                str += ch;
                            }
                        }
                        return {
                            type: 8 /* StringLiteral */ ,
                            value: str,
                            lineNumber: this.scanner.lineNumber,
                            lineStart: this.scanner.lineStart,
                            start: start,
                            end: this.scanner.index
                        };
                    }
                    // ... or .
                    if (cp === 46) {
                        var n1 = this.scanner.source.charCodeAt(this.scanner.index + 1);
                        var n2 = this.scanner.source.charCodeAt(this.scanner.index + 2);
                        var value = n1 === 46 && n2 === 46 ? "..." : ".";
                        var start = this.scanner.index;
                        this.scanner.index += value.length;
                        return {
                            type: 7 /* Punctuator */ ,
                            value: value,
                            lineNumber: this.scanner.lineNumber,
                            lineStart: this.scanner.lineStart,
                            start: start,
                            end: this.scanner.index
                        };
                    }
                    // `
                    if (cp === 96) {
                        // Only placeholder, since it will be rescanned as a real assignment expression.
                        return {
                            type: 10 /* Template */ ,
                            value: "",
                            lineNumber: this.scanner.lineNumber,
                            lineStart: this.scanner.lineStart,
                            start: this.scanner.index,
                            end: this.scanner.index
                        };
                    }
                    // Identifer can not contain backslash (char code 92).
                    if (character_1.Character.isIdentifierStart(cp) && cp !== 92) {
                        var start = this.scanner.index;
                        ++this.scanner.index;
                        while(!this.scanner.eof()){
                            var ch = this.scanner.source.charCodeAt(this.scanner.index);
                            if (character_1.Character.isIdentifierPart(ch) && ch !== 92) {
                                ++this.scanner.index;
                            } else if (ch === 45) {
                                // Hyphen (char code 45) can be part of an identifier.
                                ++this.scanner.index;
                            } else {
                                break;
                            }
                        }
                        var id = this.scanner.source.slice(start, this.scanner.index);
                        return {
                            type: 100 /* Identifier */ ,
                            value: id,
                            lineNumber: this.scanner.lineNumber,
                            lineStart: this.scanner.lineStart,
                            start: start,
                            end: this.scanner.index
                        };
                    }
                    return this.scanner.lex();
                };
                JSXParser.prototype.nextJSXToken = function() {
                    this.collectComments();
                    this.startMarker.index = this.scanner.index;
                    this.startMarker.line = this.scanner.lineNumber;
                    this.startMarker.column = this.scanner.index - this.scanner.lineStart;
                    var token = this.lexJSX();
                    this.lastMarker.index = this.scanner.index;
                    this.lastMarker.line = this.scanner.lineNumber;
                    this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
                    if (this.config.tokens) {
                        this.tokens.push(this.convertToken(token));
                    }
                    return token;
                };
                JSXParser.prototype.nextJSXText = function() {
                    this.startMarker.index = this.scanner.index;
                    this.startMarker.line = this.scanner.lineNumber;
                    this.startMarker.column = this.scanner.index - this.scanner.lineStart;
                    var start = this.scanner.index;
                    var text = "";
                    while(!this.scanner.eof()){
                        var ch = this.scanner.source[this.scanner.index];
                        if (ch === "{" || ch === "<") {
                            break;
                        }
                        ++this.scanner.index;
                        text += ch;
                        if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                            ++this.scanner.lineNumber;
                            if (ch === "\r" && this.scanner.source[this.scanner.index] === "\n") {
                                ++this.scanner.index;
                            }
                            this.scanner.lineStart = this.scanner.index;
                        }
                    }
                    this.lastMarker.index = this.scanner.index;
                    this.lastMarker.line = this.scanner.lineNumber;
                    this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
                    var token = {
                        type: 101 /* Text */ ,
                        value: text,
                        lineNumber: this.scanner.lineNumber,
                        lineStart: this.scanner.lineStart,
                        start: start,
                        end: this.scanner.index
                    };
                    if (text.length > 0 && this.config.tokens) {
                        this.tokens.push(this.convertToken(token));
                    }
                    return token;
                };
                JSXParser.prototype.peekJSXToken = function() {
                    var state = this.scanner.saveState();
                    this.scanner.scanComments();
                    var next = this.lexJSX();
                    this.scanner.restoreState(state);
                    return next;
                };
                // Expect the next JSX token to match the specified punctuator.
                // If not, an exception will be thrown.
                JSXParser.prototype.expectJSX = function(value) {
                    var token = this.nextJSXToken();
                    if (token.type !== 7 /* Punctuator */  || token.value !== value) {
                        this.throwUnexpectedToken(token);
                    }
                };
                // Return true if the next JSX token matches the specified punctuator.
                JSXParser.prototype.matchJSX = function(value) {
                    var next = this.peekJSXToken();
                    return next.type === 7 /* Punctuator */  && next.value === value;
                };
                JSXParser.prototype.parseJSXIdentifier = function() {
                    var node = this.createJSXNode();
                    var token = this.nextJSXToken();
                    if (token.type !== 100 /* Identifier */ ) {
                        this.throwUnexpectedToken(token);
                    }
                    return this.finalize(node, new JSXNode.JSXIdentifier(token.value));
                };
                JSXParser.prototype.parseJSXElementName = function() {
                    var node = this.createJSXNode();
                    var elementName = this.parseJSXIdentifier();
                    if (this.matchJSX(":")) {
                        var namespace = elementName;
                        this.expectJSX(":");
                        var name_1 = this.parseJSXIdentifier();
                        elementName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_1));
                    } else if (this.matchJSX(".")) {
                        while(this.matchJSX(".")){
                            var object = elementName;
                            this.expectJSX(".");
                            var property = this.parseJSXIdentifier();
                            elementName = this.finalize(node, new JSXNode.JSXMemberExpression(object, property));
                        }
                    }
                    return elementName;
                };
                JSXParser.prototype.parseJSXAttributeName = function() {
                    var node = this.createJSXNode();
                    var attributeName;
                    var identifier = this.parseJSXIdentifier();
                    if (this.matchJSX(":")) {
                        var namespace = identifier;
                        this.expectJSX(":");
                        var name_2 = this.parseJSXIdentifier();
                        attributeName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_2));
                    } else {
                        attributeName = identifier;
                    }
                    return attributeName;
                };
                JSXParser.prototype.parseJSXStringLiteralAttribute = function() {
                    var node = this.createJSXNode();
                    var token = this.nextJSXToken();
                    if (token.type !== 8 /* StringLiteral */ ) {
                        this.throwUnexpectedToken(token);
                    }
                    var raw = this.getTokenRaw(token);
                    return this.finalize(node, new Node.Literal(token.value, raw));
                };
                JSXParser.prototype.parseJSXExpressionAttribute = function() {
                    var node = this.createJSXNode();
                    this.expectJSX("{");
                    this.finishJSX();
                    if (this.match("}")) {
                        this.tolerateError("JSX attributes must only be assigned a non-empty expression");
                    }
                    var expression = this.parseAssignmentExpression();
                    this.reenterJSX();
                    return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
                };
                JSXParser.prototype.parseJSXAttributeValue = function() {
                    return this.matchJSX("{") ? this.parseJSXExpressionAttribute() : this.matchJSX("<") ? this.parseJSXElement() : this.parseJSXStringLiteralAttribute();
                };
                JSXParser.prototype.parseJSXNameValueAttribute = function() {
                    var node = this.createJSXNode();
                    var name = this.parseJSXAttributeName();
                    var value = null;
                    if (this.matchJSX("=")) {
                        this.expectJSX("=");
                        value = this.parseJSXAttributeValue();
                    }
                    return this.finalize(node, new JSXNode.JSXAttribute(name, value));
                };
                JSXParser.prototype.parseJSXSpreadAttribute = function() {
                    var node = this.createJSXNode();
                    this.expectJSX("{");
                    this.expectJSX("...");
                    this.finishJSX();
                    var argument = this.parseAssignmentExpression();
                    this.reenterJSX();
                    return this.finalize(node, new JSXNode.JSXSpreadAttribute(argument));
                };
                JSXParser.prototype.parseJSXAttributes = function() {
                    var attributes = [];
                    while(!this.matchJSX("/") && !this.matchJSX(">")){
                        var attribute = this.matchJSX("{") ? this.parseJSXSpreadAttribute() : this.parseJSXNameValueAttribute();
                        attributes.push(attribute);
                    }
                    return attributes;
                };
                JSXParser.prototype.parseJSXOpeningElement = function() {
                    var node = this.createJSXNode();
                    this.expectJSX("<");
                    var name = this.parseJSXElementName();
                    var attributes = this.parseJSXAttributes();
                    var selfClosing = this.matchJSX("/");
                    if (selfClosing) {
                        this.expectJSX("/");
                    }
                    this.expectJSX(">");
                    return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
                };
                JSXParser.prototype.parseJSXBoundaryElement = function() {
                    var node = this.createJSXNode();
                    this.expectJSX("<");
                    if (this.matchJSX("/")) {
                        this.expectJSX("/");
                        var name_3 = this.parseJSXElementName();
                        this.expectJSX(">");
                        return this.finalize(node, new JSXNode.JSXClosingElement(name_3));
                    }
                    var name = this.parseJSXElementName();
                    var attributes = this.parseJSXAttributes();
                    var selfClosing = this.matchJSX("/");
                    if (selfClosing) {
                        this.expectJSX("/");
                    }
                    this.expectJSX(">");
                    return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
                };
                JSXParser.prototype.parseJSXEmptyExpression = function() {
                    var node = this.createJSXChildNode();
                    this.collectComments();
                    this.lastMarker.index = this.scanner.index;
                    this.lastMarker.line = this.scanner.lineNumber;
                    this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
                    return this.finalize(node, new JSXNode.JSXEmptyExpression());
                };
                JSXParser.prototype.parseJSXExpressionContainer = function() {
                    var node = this.createJSXNode();
                    this.expectJSX("{");
                    var expression;
                    if (this.matchJSX("}")) {
                        expression = this.parseJSXEmptyExpression();
                        this.expectJSX("}");
                    } else {
                        this.finishJSX();
                        expression = this.parseAssignmentExpression();
                        this.reenterJSX();
                    }
                    return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
                };
                JSXParser.prototype.parseJSXChildren = function() {
                    var children = [];
                    while(!this.scanner.eof()){
                        var node = this.createJSXChildNode();
                        var token = this.nextJSXText();
                        if (token.start < token.end) {
                            var raw = this.getTokenRaw(token);
                            var child = this.finalize(node, new JSXNode.JSXText(token.value, raw));
                            children.push(child);
                        }
                        if (this.scanner.source[this.scanner.index] === "{") {
                            var container = this.parseJSXExpressionContainer();
                            children.push(container);
                        } else {
                            break;
                        }
                    }
                    return children;
                };
                JSXParser.prototype.parseComplexJSXElement = function(el) {
                    var stack = [];
                    while(!this.scanner.eof()){
                        el.children = el.children.concat(this.parseJSXChildren());
                        var node = this.createJSXChildNode();
                        var element = this.parseJSXBoundaryElement();
                        if (element.type === jsx_syntax_1.JSXSyntax.JSXOpeningElement) {
                            var opening = element;
                            if (opening.selfClosing) {
                                var child = this.finalize(node, new JSXNode.JSXElement(opening, [], null));
                                el.children.push(child);
                            } else {
                                stack.push(el);
                                el = {
                                    node: node,
                                    opening: opening,
                                    closing: null,
                                    children: []
                                };
                            }
                        }
                        if (element.type === jsx_syntax_1.JSXSyntax.JSXClosingElement) {
                            el.closing = element;
                            var open_1 = getQualifiedElementName(el.opening.name);
                            var close_1 = getQualifiedElementName(el.closing.name);
                            if (open_1 !== close_1) {
                                this.tolerateError("Expected corresponding JSX closing tag for %0", open_1);
                            }
                            if (stack.length > 0) {
                                var child = this.finalize(el.node, new JSXNode.JSXElement(el.opening, el.children, el.closing));
                                el = stack[stack.length - 1];
                                el.children.push(child);
                                stack.pop();
                            } else {
                                break;
                            }
                        }
                    }
                    return el;
                };
                JSXParser.prototype.parseJSXElement = function() {
                    var node = this.createJSXNode();
                    var opening = this.parseJSXOpeningElement();
                    var children = [];
                    var closing = null;
                    if (!opening.selfClosing) {
                        var el = this.parseComplexJSXElement({
                            node: node,
                            opening: opening,
                            closing: closing,
                            children: children
                        });
                        children = el.children;
                        closing = el.closing;
                    }
                    return this.finalize(node, new JSXNode.JSXElement(opening, children, closing));
                };
                JSXParser.prototype.parseJSXRoot = function() {
                    // Pop the opening '<' added from the lookahead.
                    if (this.config.tokens) {
                        this.tokens.pop();
                    }
                    this.startJSX();
                    var element = this.parseJSXElement();
                    this.finishJSX();
                    return element;
                };
                JSXParser.prototype.isStartOfExpression = function() {
                    return _super.prototype.isStartOfExpression.call(this) || this.match("<");
                };
                return JSXParser;
            }(parser_1.Parser);
            exports1.JSXParser = JSXParser;
        /***/ },
        /* 4 */ /***/ function(module1, exports1) {
            "use strict";
            Object.defineProperty(exports1, "__esModule", {
                value: true
            });
            // See also tools/generate-unicode-regex.js.
            var Regex = {
                // Unicode v8.0.0 NonAsciiIdentifierStart:
                NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
                // Unicode v8.0.0 NonAsciiIdentifierPart:
                NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
            };
            exports1.Character = {
                /* tslint:disable:no-bitwise */ fromCodePoint: function(cp) {
                    return cp < 0x10000 ? String.fromCharCode(cp) : String.fromCharCode(0xD800 + (cp - 0x10000 >> 10)) + String.fromCharCode(0xDC00 + (cp - 0x10000 & 1023));
                },
                // https://tc39.github.io/ecma262/#sec-white-space
                isWhiteSpace: function(cp) {
                    return cp === 0x20 || cp === 0x09 || cp === 0x0B || cp === 0x0C || cp === 0xA0 || cp >= 0x1680 && [
                        0x1680,
                        0x2000,
                        0x2001,
                        0x2002,
                        0x2003,
                        0x2004,
                        0x2005,
                        0x2006,
                        0x2007,
                        0x2008,
                        0x2009,
                        0x200A,
                        0x202F,
                        0x205F,
                        0x3000,
                        0xFEFF
                    ].indexOf(cp) >= 0;
                },
                // https://tc39.github.io/ecma262/#sec-line-terminators
                isLineTerminator: function(cp) {
                    return cp === 0x0A || cp === 0x0D || cp === 0x2028 || cp === 0x2029;
                },
                // https://tc39.github.io/ecma262/#sec-names-and-keywords
                isIdentifierStart: function(cp) {
                    return cp === 0x24 || cp === 0x5F || cp >= 0x41 && cp <= 0x5A || cp >= 0x61 && cp <= 0x7A || cp === 0x5C || cp >= 0x80 && Regex.NonAsciiIdentifierStart.test(exports1.Character.fromCodePoint(cp));
                },
                isIdentifierPart: function(cp) {
                    return cp === 0x24 || cp === 0x5F || cp >= 0x41 && cp <= 0x5A || cp >= 0x61 && cp <= 0x7A || cp >= 0x30 && cp <= 0x39 || cp === 0x5C || cp >= 0x80 && Regex.NonAsciiIdentifierPart.test(exports1.Character.fromCodePoint(cp));
                },
                // https://tc39.github.io/ecma262/#sec-literals-numeric-literals
                isDecimalDigit: function(cp) {
                    return cp >= 0x30 && cp <= 0x39; // 0..9
                },
                isHexDigit: function(cp) {
                    return cp >= 0x30 && cp <= 0x39 || cp >= 0x41 && cp <= 0x46 || cp >= 0x61 && cp <= 0x66; // a..f
                },
                isOctalDigit: function(cp) {
                    return cp >= 0x30 && cp <= 0x37; // 0..7
                }
            };
        /***/ },
        /* 5 */ /***/ function(module1, exports1, __nested_webpack_require_64544__) {
            "use strict";
            Object.defineProperty(exports1, "__esModule", {
                value: true
            });
            var jsx_syntax_1 = __nested_webpack_require_64544__(6);
            /* tslint:disable:max-classes-per-file */ var JSXClosingElement = function() {
                function JSXClosingElement(name) {
                    this.type = jsx_syntax_1.JSXSyntax.JSXClosingElement;
                    this.name = name;
                }
                return JSXClosingElement;
            }();
            exports1.JSXClosingElement = JSXClosingElement;
            var JSXElement = function() {
                function JSXElement(openingElement, children, closingElement) {
                    this.type = jsx_syntax_1.JSXSyntax.JSXElement;
                    this.openingElement = openingElement;
                    this.children = children;
                    this.closingElement = closingElement;
                }
                return JSXElement;
            }();
            exports1.JSXElement = JSXElement;
            var JSXEmptyExpression = function() {
                function JSXEmptyExpression() {
                    this.type = jsx_syntax_1.JSXSyntax.JSXEmptyExpression;
                }
                return JSXEmptyExpression;
            }();
            exports1.JSXEmptyExpression = JSXEmptyExpression;
            var JSXExpressionContainer = function() {
                function JSXExpressionContainer(expression) {
                    this.type = jsx_syntax_1.JSXSyntax.JSXExpressionContainer;
                    this.expression = expression;
                }
                return JSXExpressionContainer;
            }();
            exports1.JSXExpressionContainer = JSXExpressionContainer;
            var JSXIdentifier = function() {
                function JSXIdentifier(name) {
                    this.type = jsx_syntax_1.JSXSyntax.JSXIdentifier;
                    this.name = name;
                }
                return JSXIdentifier;
            }();
            exports1.JSXIdentifier = JSXIdentifier;
            var JSXMemberExpression = function() {
                function JSXMemberExpression(object, property) {
                    this.type = jsx_syntax_1.JSXSyntax.JSXMemberExpression;
                    this.object = object;
                    this.property = property;
                }
                return JSXMemberExpression;
            }();
            exports1.JSXMemberExpression = JSXMemberExpression;
            var JSXAttribute = function() {
                function JSXAttribute(name, value) {
                    this.type = jsx_syntax_1.JSXSyntax.JSXAttribute;
                    this.name = name;
                    this.value = value;
                }
                return JSXAttribute;
            }();
            exports1.JSXAttribute = JSXAttribute;
            var JSXNamespacedName = function() {
                function JSXNamespacedName(namespace, name) {
                    this.type = jsx_syntax_1.JSXSyntax.JSXNamespacedName;
                    this.namespace = namespace;
                    this.name = name;
                }
                return JSXNamespacedName;
            }();
            exports1.JSXNamespacedName = JSXNamespacedName;
            var JSXOpeningElement = function() {
                function JSXOpeningElement(name, selfClosing, attributes) {
                    this.type = jsx_syntax_1.JSXSyntax.JSXOpeningElement;
                    this.name = name;
                    this.selfClosing = selfClosing;
                    this.attributes = attributes;
                }
                return JSXOpeningElement;
            }();
            exports1.JSXOpeningElement = JSXOpeningElement;
            var JSXSpreadAttribute = function() {
                function JSXSpreadAttribute(argument) {
                    this.type = jsx_syntax_1.JSXSyntax.JSXSpreadAttribute;
                    this.argument = argument;
                }
                return JSXSpreadAttribute;
            }();
            exports1.JSXSpreadAttribute = JSXSpreadAttribute;
            var JSXText = function() {
                function JSXText(value, raw) {
                    this.type = jsx_syntax_1.JSXSyntax.JSXText;
                    this.value = value;
                    this.raw = raw;
                }
                return JSXText;
            }();
            exports1.JSXText = JSXText;
        /***/ },
        /* 6 */ /***/ function(module1, exports1) {
            "use strict";
            Object.defineProperty(exports1, "__esModule", {
                value: true
            });
            exports1.JSXSyntax = {
                JSXAttribute: "JSXAttribute",
                JSXClosingElement: "JSXClosingElement",
                JSXElement: "JSXElement",
                JSXEmptyExpression: "JSXEmptyExpression",
                JSXExpressionContainer: "JSXExpressionContainer",
                JSXIdentifier: "JSXIdentifier",
                JSXMemberExpression: "JSXMemberExpression",
                JSXNamespacedName: "JSXNamespacedName",
                JSXOpeningElement: "JSXOpeningElement",
                JSXSpreadAttribute: "JSXSpreadAttribute",
                JSXText: "JSXText"
            };
        /***/ },
        /* 7 */ /***/ function(module1, exports1, __nested_webpack_require_69915__) {
            "use strict";
            Object.defineProperty(exports1, "__esModule", {
                value: true
            });
            var syntax_1 = __nested_webpack_require_69915__(2);
            /* tslint:disable:max-classes-per-file */ var ArrayExpression = function() {
                function ArrayExpression(elements) {
                    this.type = syntax_1.Syntax.ArrayExpression;
                    this.elements = elements;
                }
                return ArrayExpression;
            }();
            exports1.ArrayExpression = ArrayExpression;
            var ArrayPattern = function() {
                function ArrayPattern(elements) {
                    this.type = syntax_1.Syntax.ArrayPattern;
                    this.elements = elements;
                }
                return ArrayPattern;
            }();
            exports1.ArrayPattern = ArrayPattern;
            var ArrowFunctionExpression = function() {
                function ArrowFunctionExpression(params, body, expression) {
                    this.type = syntax_1.Syntax.ArrowFunctionExpression;
                    this.id = null;
                    this.params = params;
                    this.body = body;
                    this.generator = false;
                    this.expression = expression;
                    this.async = false;
                }
                return ArrowFunctionExpression;
            }();
            exports1.ArrowFunctionExpression = ArrowFunctionExpression;
            var AssignmentExpression = function() {
                function AssignmentExpression(operator, left, right) {
                    this.type = syntax_1.Syntax.AssignmentExpression;
                    this.operator = operator;
                    this.left = left;
                    this.right = right;
                }
                return AssignmentExpression;
            }();
            exports1.AssignmentExpression = AssignmentExpression;
            var AssignmentPattern = function() {
                function AssignmentPattern(left, right) {
                    this.type = syntax_1.Syntax.AssignmentPattern;
                    this.left = left;
                    this.right = right;
                }
                return AssignmentPattern;
            }();
            exports1.AssignmentPattern = AssignmentPattern;
            var AsyncArrowFunctionExpression = function() {
                function AsyncArrowFunctionExpression(params, body, expression) {
                    this.type = syntax_1.Syntax.ArrowFunctionExpression;
                    this.id = null;
                    this.params = params;
                    this.body = body;
                    this.generator = false;
                    this.expression = expression;
                    this.async = true;
                }
                return AsyncArrowFunctionExpression;
            }();
            exports1.AsyncArrowFunctionExpression = AsyncArrowFunctionExpression;
            var AsyncFunctionDeclaration = function() {
                function AsyncFunctionDeclaration(id, params, body) {
                    this.type = syntax_1.Syntax.FunctionDeclaration;
                    this.id = id;
                    this.params = params;
                    this.body = body;
                    this.generator = false;
                    this.expression = false;
                    this.async = true;
                }
                return AsyncFunctionDeclaration;
            }();
            exports1.AsyncFunctionDeclaration = AsyncFunctionDeclaration;
            var AsyncFunctionExpression = function() {
                function AsyncFunctionExpression(id, params, body) {
                    this.type = syntax_1.Syntax.FunctionExpression;
                    this.id = id;
                    this.params = params;
                    this.body = body;
                    this.generator = false;
                    this.expression = false;
                    this.async = true;
                }
                return AsyncFunctionExpression;
            }();
            exports1.AsyncFunctionExpression = AsyncFunctionExpression;
            var AwaitExpression = function() {
                function AwaitExpression(argument) {
                    this.type = syntax_1.Syntax.AwaitExpression;
                    this.argument = argument;
                }
                return AwaitExpression;
            }();
            exports1.AwaitExpression = AwaitExpression;
            var BinaryExpression = function() {
                function BinaryExpression(operator, left, right) {
                    var logical = operator === "||" || operator === "&&";
                    this.type = logical ? syntax_1.Syntax.LogicalExpression : syntax_1.Syntax.BinaryExpression;
                    this.operator = operator;
                    this.left = left;
                    this.right = right;
                }
                return BinaryExpression;
            }();
            exports1.BinaryExpression = BinaryExpression;
            var BlockStatement = function() {
                function BlockStatement(body) {
                    this.type = syntax_1.Syntax.BlockStatement;
                    this.body = body;
                }
                return BlockStatement;
            }();
            exports1.BlockStatement = BlockStatement;
            var BreakStatement = function() {
                function BreakStatement(label) {
                    this.type = syntax_1.Syntax.BreakStatement;
                    this.label = label;
                }
                return BreakStatement;
            }();
            exports1.BreakStatement = BreakStatement;
            var CallExpression = function() {
                function CallExpression(callee, args) {
                    this.type = syntax_1.Syntax.CallExpression;
                    this.callee = callee;
                    this.arguments = args;
                }
                return CallExpression;
            }();
            exports1.CallExpression = CallExpression;
            var CatchClause = function() {
                function CatchClause(param, body) {
                    this.type = syntax_1.Syntax.CatchClause;
                    this.param = param;
                    this.body = body;
                }
                return CatchClause;
            }();
            exports1.CatchClause = CatchClause;
            var ClassBody = function() {
                function ClassBody(body) {
                    this.type = syntax_1.Syntax.ClassBody;
                    this.body = body;
                }
                return ClassBody;
            }();
            exports1.ClassBody = ClassBody;
            var ClassDeclaration = function() {
                function ClassDeclaration(id, superClass, body) {
                    this.type = syntax_1.Syntax.ClassDeclaration;
                    this.id = id;
                    this.superClass = superClass;
                    this.body = body;
                }
                return ClassDeclaration;
            }();
            exports1.ClassDeclaration = ClassDeclaration;
            var ClassExpression = function() {
                function ClassExpression(id, superClass, body) {
                    this.type = syntax_1.Syntax.ClassExpression;
                    this.id = id;
                    this.superClass = superClass;
                    this.body = body;
                }
                return ClassExpression;
            }();
            exports1.ClassExpression = ClassExpression;
            var ComputedMemberExpression = function() {
                function ComputedMemberExpression(object, property) {
                    this.type = syntax_1.Syntax.MemberExpression;
                    this.computed = true;
                    this.object = object;
                    this.property = property;
                }
                return ComputedMemberExpression;
            }();
            exports1.ComputedMemberExpression = ComputedMemberExpression;
            var ConditionalExpression = function() {
                function ConditionalExpression(test, consequent, alternate) {
                    this.type = syntax_1.Syntax.ConditionalExpression;
                    this.test = test;
                    this.consequent = consequent;
                    this.alternate = alternate;
                }
                return ConditionalExpression;
            }();
            exports1.ConditionalExpression = ConditionalExpression;
            var ContinueStatement = function() {
                function ContinueStatement(label) {
                    this.type = syntax_1.Syntax.ContinueStatement;
                    this.label = label;
                }
                return ContinueStatement;
            }();
            exports1.ContinueStatement = ContinueStatement;
            var DebuggerStatement = function() {
                function DebuggerStatement() {
                    this.type = syntax_1.Syntax.DebuggerStatement;
                }
                return DebuggerStatement;
            }();
            exports1.DebuggerStatement = DebuggerStatement;
            var Directive = function() {
                function Directive(expression, directive) {
                    this.type = syntax_1.Syntax.ExpressionStatement;
                    this.expression = expression;
                    this.directive = directive;
                }
                return Directive;
            }();
            exports1.Directive = Directive;
            var DoWhileStatement = function() {
                function DoWhileStatement(body, test) {
                    this.type = syntax_1.Syntax.DoWhileStatement;
                    this.body = body;
                    this.test = test;
                }
                return DoWhileStatement;
            }();
            exports1.DoWhileStatement = DoWhileStatement;
            var EmptyStatement = function() {
                function EmptyStatement() {
                    this.type = syntax_1.Syntax.EmptyStatement;
                }
                return EmptyStatement;
            }();
            exports1.EmptyStatement = EmptyStatement;
            var ExportAllDeclaration = function() {
                function ExportAllDeclaration(source) {
                    this.type = syntax_1.Syntax.ExportAllDeclaration;
                    this.source = source;
                }
                return ExportAllDeclaration;
            }();
            exports1.ExportAllDeclaration = ExportAllDeclaration;
            var ExportDefaultDeclaration = function() {
                function ExportDefaultDeclaration(declaration) {
                    this.type = syntax_1.Syntax.ExportDefaultDeclaration;
                    this.declaration = declaration;
                }
                return ExportDefaultDeclaration;
            }();
            exports1.ExportDefaultDeclaration = ExportDefaultDeclaration;
            var ExportNamedDeclaration = function() {
                function ExportNamedDeclaration(declaration, specifiers, source) {
                    this.type = syntax_1.Syntax.ExportNamedDeclaration;
                    this.declaration = declaration;
                    this.specifiers = specifiers;
                    this.source = source;
                }
                return ExportNamedDeclaration;
            }();
            exports1.ExportNamedDeclaration = ExportNamedDeclaration;
            var ExportSpecifier = function() {
                function ExportSpecifier(local, exported) {
                    this.type = syntax_1.Syntax.ExportSpecifier;
                    this.exported = exported;
                    this.local = local;
                }
                return ExportSpecifier;
            }();
            exports1.ExportSpecifier = ExportSpecifier;
            var ExpressionStatement = function() {
                function ExpressionStatement(expression) {
                    this.type = syntax_1.Syntax.ExpressionStatement;
                    this.expression = expression;
                }
                return ExpressionStatement;
            }();
            exports1.ExpressionStatement = ExpressionStatement;
            var ForInStatement = function() {
                function ForInStatement(left, right, body) {
                    this.type = syntax_1.Syntax.ForInStatement;
                    this.left = left;
                    this.right = right;
                    this.body = body;
                    this.each = false;
                }
                return ForInStatement;
            }();
            exports1.ForInStatement = ForInStatement;
            var ForOfStatement = function() {
                function ForOfStatement(left, right, body) {
                    this.type = syntax_1.Syntax.ForOfStatement;
                    this.left = left;
                    this.right = right;
                    this.body = body;
                }
                return ForOfStatement;
            }();
            exports1.ForOfStatement = ForOfStatement;
            var ForStatement = function() {
                function ForStatement(init, test, update, body) {
                    this.type = syntax_1.Syntax.ForStatement;
                    this.init = init;
                    this.test = test;
                    this.update = update;
                    this.body = body;
                }
                return ForStatement;
            }();
            exports1.ForStatement = ForStatement;
            var FunctionDeclaration = function() {
                function FunctionDeclaration(id, params, body, generator) {
                    this.type = syntax_1.Syntax.FunctionDeclaration;
                    this.id = id;
                    this.params = params;
                    this.body = body;
                    this.generator = generator;
                    this.expression = false;
                    this.async = false;
                }
                return FunctionDeclaration;
            }();
            exports1.FunctionDeclaration = FunctionDeclaration;
            var FunctionExpression = function() {
                function FunctionExpression(id, params, body, generator) {
                    this.type = syntax_1.Syntax.FunctionExpression;
                    this.id = id;
                    this.params = params;
                    this.body = body;
                    this.generator = generator;
                    this.expression = false;
                    this.async = false;
                }
                return FunctionExpression;
            }();
            exports1.FunctionExpression = FunctionExpression;
            var Identifier = function() {
                function Identifier(name) {
                    this.type = syntax_1.Syntax.Identifier;
                    this.name = name;
                }
                return Identifier;
            }();
            exports1.Identifier = Identifier;
            var IfStatement = function() {
                function IfStatement(test, consequent, alternate) {
                    this.type = syntax_1.Syntax.IfStatement;
                    this.test = test;
                    this.consequent = consequent;
                    this.alternate = alternate;
                }
                return IfStatement;
            }();
            exports1.IfStatement = IfStatement;
            var ImportDeclaration = function() {
                function ImportDeclaration(specifiers, source) {
                    this.type = syntax_1.Syntax.ImportDeclaration;
                    this.specifiers = specifiers;
                    this.source = source;
                }
                return ImportDeclaration;
            }();
            exports1.ImportDeclaration = ImportDeclaration;
            var ImportDefaultSpecifier = function() {
                function ImportDefaultSpecifier(local) {
                    this.type = syntax_1.Syntax.ImportDefaultSpecifier;
                    this.local = local;
                }
                return ImportDefaultSpecifier;
            }();
            exports1.ImportDefaultSpecifier = ImportDefaultSpecifier;
            var ImportNamespaceSpecifier = function() {
                function ImportNamespaceSpecifier(local) {
                    this.type = syntax_1.Syntax.ImportNamespaceSpecifier;
                    this.local = local;
                }
                return ImportNamespaceSpecifier;
            }();
            exports1.ImportNamespaceSpecifier = ImportNamespaceSpecifier;
            var ImportSpecifier = function() {
                function ImportSpecifier(local, imported) {
                    this.type = syntax_1.Syntax.ImportSpecifier;
                    this.local = local;
                    this.imported = imported;
                }
                return ImportSpecifier;
            }();
            exports1.ImportSpecifier = ImportSpecifier;
            var LabeledStatement = function() {
                function LabeledStatement(label, body) {
                    this.type = syntax_1.Syntax.LabeledStatement;
                    this.label = label;
                    this.body = body;
                }
                return LabeledStatement;
            }();
            exports1.LabeledStatement = LabeledStatement;
            var Literal = function() {
                function Literal(value, raw) {
                    this.type = syntax_1.Syntax.Literal;
                    this.value = value;
                    this.raw = raw;
                }
                return Literal;
            }();
            exports1.Literal = Literal;
            var MetaProperty = function() {
                function MetaProperty(meta, property) {
                    this.type = syntax_1.Syntax.MetaProperty;
                    this.meta = meta;
                    this.property = property;
                }
                return MetaProperty;
            }();
            exports1.MetaProperty = MetaProperty;
            var MethodDefinition = function() {
                function MethodDefinition(key, computed, value, kind, isStatic) {
                    this.type = syntax_1.Syntax.MethodDefinition;
                    this.key = key;
                    this.computed = computed;
                    this.value = value;
                    this.kind = kind;
                    this.static = isStatic;
                }
                return MethodDefinition;
            }();
            exports1.MethodDefinition = MethodDefinition;
            var Module = function() {
                function Module(body) {
                    this.type = syntax_1.Syntax.Program;
                    this.body = body;
                    this.sourceType = "module";
                }
                return Module;
            }();
            exports1.Module = Module;
            var NewExpression = function() {
                function NewExpression(callee, args) {
                    this.type = syntax_1.Syntax.NewExpression;
                    this.callee = callee;
                    this.arguments = args;
                }
                return NewExpression;
            }();
            exports1.NewExpression = NewExpression;
            var ObjectExpression = function() {
                function ObjectExpression(properties) {
                    this.type = syntax_1.Syntax.ObjectExpression;
                    this.properties = properties;
                }
                return ObjectExpression;
            }();
            exports1.ObjectExpression = ObjectExpression;
            var ObjectPattern = function() {
                function ObjectPattern(properties) {
                    this.type = syntax_1.Syntax.ObjectPattern;
                    this.properties = properties;
                }
                return ObjectPattern;
            }();
            exports1.ObjectPattern = ObjectPattern;
            var Property = function() {
                function Property(kind, key, computed, value, method, shorthand) {
                    this.type = syntax_1.Syntax.Property;
                    this.key = key;
                    this.computed = computed;
                    this.value = value;
                    this.kind = kind;
                    this.method = method;
                    this.shorthand = shorthand;
                }
                return Property;
            }();
            exports1.Property = Property;
            var RegexLiteral = function() {
                function RegexLiteral(value, raw, pattern, flags) {
                    this.type = syntax_1.Syntax.Literal;
                    this.value = value;
                    this.raw = raw;
                    this.regex = {
                        pattern: pattern,
                        flags: flags
                    };
                }
                return RegexLiteral;
            }();
            exports1.RegexLiteral = RegexLiteral;
            var RestElement = function() {
                function RestElement(argument) {
                    this.type = syntax_1.Syntax.RestElement;
                    this.argument = argument;
                }
                return RestElement;
            }();
            exports1.RestElement = RestElement;
            var ReturnStatement = function() {
                function ReturnStatement(argument) {
                    this.type = syntax_1.Syntax.ReturnStatement;
                    this.argument = argument;
                }
                return ReturnStatement;
            }();
            exports1.ReturnStatement = ReturnStatement;
            var Script = function() {
                function Script(body) {
                    this.type = syntax_1.Syntax.Program;
                    this.body = body;
                    this.sourceType = "script";
                }
                return Script;
            }();
            exports1.Script = Script;
            var SequenceExpression = function() {
                function SequenceExpression(expressions) {
                    this.type = syntax_1.Syntax.SequenceExpression;
                    this.expressions = expressions;
                }
                return SequenceExpression;
            }();
            exports1.SequenceExpression = SequenceExpression;
            var SpreadElement = function() {
                function SpreadElement(argument) {
                    this.type = syntax_1.Syntax.SpreadElement;
                    this.argument = argument;
                }
                return SpreadElement;
            }();
            exports1.SpreadElement = SpreadElement;
            var StaticMemberExpression = function() {
                function StaticMemberExpression(object, property) {
                    this.type = syntax_1.Syntax.MemberExpression;
                    this.computed = false;
                    this.object = object;
                    this.property = property;
                }
                return StaticMemberExpression;
            }();
            exports1.StaticMemberExpression = StaticMemberExpression;
            var Super = function() {
                function Super() {
                    this.type = syntax_1.Syntax.Super;
                }
                return Super;
            }();
            exports1.Super = Super;
            var SwitchCase = function() {
                function SwitchCase(test, consequent) {
                    this.type = syntax_1.Syntax.SwitchCase;
                    this.test = test;
                    this.consequent = consequent;
                }
                return SwitchCase;
            }();
            exports1.SwitchCase = SwitchCase;
            var SwitchStatement = function() {
                function SwitchStatement(discriminant, cases) {
                    this.type = syntax_1.Syntax.SwitchStatement;
                    this.discriminant = discriminant;
                    this.cases = cases;
                }
                return SwitchStatement;
            }();
            exports1.SwitchStatement = SwitchStatement;
            var TaggedTemplateExpression = function() {
                function TaggedTemplateExpression(tag, quasi) {
                    this.type = syntax_1.Syntax.TaggedTemplateExpression;
                    this.tag = tag;
                    this.quasi = quasi;
                }
                return TaggedTemplateExpression;
            }();
            exports1.TaggedTemplateExpression = TaggedTemplateExpression;
            var TemplateElement = function() {
                function TemplateElement(value, tail) {
                    this.type = syntax_1.Syntax.TemplateElement;
                    this.value = value;
                    this.tail = tail;
                }
                return TemplateElement;
            }();
            exports1.TemplateElement = TemplateElement;
            var TemplateLiteral = function() {
                function TemplateLiteral(quasis, expressions) {
                    this.type = syntax_1.Syntax.TemplateLiteral;
                    this.quasis = quasis;
                    this.expressions = expressions;
                }
                return TemplateLiteral;
            }();
            exports1.TemplateLiteral = TemplateLiteral;
            var ThisExpression = function() {
                function ThisExpression() {
                    this.type = syntax_1.Syntax.ThisExpression;
                }
                return ThisExpression;
            }();
            exports1.ThisExpression = ThisExpression;
            var ThrowStatement = function() {
                function ThrowStatement(argument) {
                    this.type = syntax_1.Syntax.ThrowStatement;
                    this.argument = argument;
                }
                return ThrowStatement;
            }();
            exports1.ThrowStatement = ThrowStatement;
            var TryStatement = function() {
                function TryStatement(block, handler, finalizer) {
                    this.type = syntax_1.Syntax.TryStatement;
                    this.block = block;
                    this.handler = handler;
                    this.finalizer = finalizer;
                }
                return TryStatement;
            }();
            exports1.TryStatement = TryStatement;
            var UnaryExpression = function() {
                function UnaryExpression(operator, argument) {
                    this.type = syntax_1.Syntax.UnaryExpression;
                    this.operator = operator;
                    this.argument = argument;
                    this.prefix = true;
                }
                return UnaryExpression;
            }();
            exports1.UnaryExpression = UnaryExpression;
            var UpdateExpression = function() {
                function UpdateExpression(operator, argument, prefix) {
                    this.type = syntax_1.Syntax.UpdateExpression;
                    this.operator = operator;
                    this.argument = argument;
                    this.prefix = prefix;
                }
                return UpdateExpression;
            }();
            exports1.UpdateExpression = UpdateExpression;
            var VariableDeclaration = function() {
                function VariableDeclaration(declarations, kind) {
                    this.type = syntax_1.Syntax.VariableDeclaration;
                    this.declarations = declarations;
                    this.kind = kind;
                }
                return VariableDeclaration;
            }();
            exports1.VariableDeclaration = VariableDeclaration;
            var VariableDeclarator = function() {
                function VariableDeclarator(id, init) {
                    this.type = syntax_1.Syntax.VariableDeclarator;
                    this.id = id;
                    this.init = init;
                }
                return VariableDeclarator;
            }();
            exports1.VariableDeclarator = VariableDeclarator;
            var WhileStatement = function() {
                function WhileStatement(test, body) {
                    this.type = syntax_1.Syntax.WhileStatement;
                    this.test = test;
                    this.body = body;
                }
                return WhileStatement;
            }();
            exports1.WhileStatement = WhileStatement;
            var WithStatement = function() {
                function WithStatement(object, body) {
                    this.type = syntax_1.Syntax.WithStatement;
                    this.object = object;
                    this.body = body;
                }
                return WithStatement;
            }();
            exports1.WithStatement = WithStatement;
            var YieldExpression = function() {
                function YieldExpression(argument, delegate) {
                    this.type = syntax_1.Syntax.YieldExpression;
                    this.argument = argument;
                    this.delegate = delegate;
                }
                return YieldExpression;
            }();
            exports1.YieldExpression = YieldExpression;
        /***/ },
        /* 8 */ /***/ function(module1, exports1, __nested_webpack_require_99358__) {
            "use strict";
            Object.defineProperty(exports1, "__esModule", {
                value: true
            });
            var assert_1 = __nested_webpack_require_99358__(9);
            var error_handler_1 = __nested_webpack_require_99358__(10);
            var messages_1 = __nested_webpack_require_99358__(11);
            var Node = __nested_webpack_require_99358__(7);
            var scanner_1 = __nested_webpack_require_99358__(12);
            var syntax_1 = __nested_webpack_require_99358__(2);
            var token_1 = __nested_webpack_require_99358__(13);
            var ArrowParameterPlaceHolder = "ArrowParameterPlaceHolder";
            var Parser = function() {
                function Parser(code, options, delegate) {
                    if (options === void 0) {
                        options = {};
                    }
                    this.config = {
                        range: typeof options.range === "boolean" && options.range,
                        loc: typeof options.loc === "boolean" && options.loc,
                        source: null,
                        tokens: typeof options.tokens === "boolean" && options.tokens,
                        comment: typeof options.comment === "boolean" && options.comment,
                        tolerant: typeof options.tolerant === "boolean" && options.tolerant
                    };
                    if (this.config.loc && options.source && options.source !== null) {
                        this.config.source = String(options.source);
                    }
                    this.delegate = delegate;
                    this.errorHandler = new error_handler_1.ErrorHandler();
                    this.errorHandler.tolerant = this.config.tolerant;
                    this.scanner = new scanner_1.Scanner(code, this.errorHandler);
                    this.scanner.trackComment = this.config.comment;
                    this.operatorPrecedence = {
                        ")": 0,
                        ";": 0,
                        ",": 0,
                        "=": 0,
                        "]": 0,
                        "||": 1,
                        "&&": 2,
                        "|": 3,
                        "^": 4,
                        "&": 5,
                        "==": 6,
                        "!=": 6,
                        "===": 6,
                        "!==": 6,
                        "<": 7,
                        ">": 7,
                        "<=": 7,
                        ">=": 7,
                        "<<": 8,
                        ">>": 8,
                        ">>>": 8,
                        "+": 9,
                        "-": 9,
                        "*": 11,
                        "/": 11,
                        "%": 11
                    };
                    this.lookahead = {
                        type: 2 /* EOF */ ,
                        value: "",
                        lineNumber: this.scanner.lineNumber,
                        lineStart: 0,
                        start: 0,
                        end: 0
                    };
                    this.hasLineTerminator = false;
                    this.context = {
                        isModule: false,
                        await: false,
                        allowIn: true,
                        allowStrictDirective: true,
                        allowYield: true,
                        firstCoverInitializedNameError: null,
                        isAssignmentTarget: false,
                        isBindingElement: false,
                        inFunctionBody: false,
                        inIteration: false,
                        inSwitch: false,
                        labelSet: {},
                        strict: false
                    };
                    this.tokens = [];
                    this.startMarker = {
                        index: 0,
                        line: this.scanner.lineNumber,
                        column: 0
                    };
                    this.lastMarker = {
                        index: 0,
                        line: this.scanner.lineNumber,
                        column: 0
                    };
                    this.nextToken();
                    this.lastMarker = {
                        index: this.scanner.index,
                        line: this.scanner.lineNumber,
                        column: this.scanner.index - this.scanner.lineStart
                    };
                }
                Parser.prototype.throwError = function(messageFormat) {
                    var values = [];
                    for(var _i = 1; _i < arguments.length; _i++){
                        values[_i - 1] = arguments[_i];
                    }
                    var args = Array.prototype.slice.call(arguments, 1);
                    var msg = messageFormat.replace(/%(\d)/g, function(whole, idx) {
                        assert_1.assert(idx < args.length, "Message reference must be in range");
                        return args[idx];
                    });
                    var index = this.lastMarker.index;
                    var line = this.lastMarker.line;
                    var column = this.lastMarker.column + 1;
                    throw this.errorHandler.createError(index, line, column, msg);
                };
                Parser.prototype.tolerateError = function(messageFormat) {
                    var values = [];
                    for(var _i = 1; _i < arguments.length; _i++){
                        values[_i - 1] = arguments[_i];
                    }
                    var args = Array.prototype.slice.call(arguments, 1);
                    var msg = messageFormat.replace(/%(\d)/g, function(whole, idx) {
                        assert_1.assert(idx < args.length, "Message reference must be in range");
                        return args[idx];
                    });
                    var index = this.lastMarker.index;
                    var line = this.scanner.lineNumber;
                    var column = this.lastMarker.column + 1;
                    this.errorHandler.tolerateError(index, line, column, msg);
                };
                // Throw an exception because of the token.
                Parser.prototype.unexpectedTokenError = function(token, message) {
                    var msg = message || messages_1.Messages.UnexpectedToken;
                    var value;
                    if (token) {
                        if (!message) {
                            msg = token.type === 2 /* EOF */  ? messages_1.Messages.UnexpectedEOS : token.type === 3 /* Identifier */  ? messages_1.Messages.UnexpectedIdentifier : token.type === 6 /* NumericLiteral */  ? messages_1.Messages.UnexpectedNumber : token.type === 8 /* StringLiteral */  ? messages_1.Messages.UnexpectedString : token.type === 10 /* Template */  ? messages_1.Messages.UnexpectedTemplate : messages_1.Messages.UnexpectedToken;
                            if (token.type === 4 /* Keyword */ ) {
                                if (this.scanner.isFutureReservedWord(token.value)) {
                                    msg = messages_1.Messages.UnexpectedReserved;
                                } else if (this.context.strict && this.scanner.isStrictModeReservedWord(token.value)) {
                                    msg = messages_1.Messages.StrictReservedWord;
                                }
                            }
                        }
                        value = token.value;
                    } else {
                        value = "ILLEGAL";
                    }
                    msg = msg.replace("%0", value);
                    if (token && typeof token.lineNumber === "number") {
                        var index = token.start;
                        var line = token.lineNumber;
                        var lastMarkerLineStart = this.lastMarker.index - this.lastMarker.column;
                        var column = token.start - lastMarkerLineStart + 1;
                        return this.errorHandler.createError(index, line, column, msg);
                    } else {
                        var index = this.lastMarker.index;
                        var line = this.lastMarker.line;
                        var column = this.lastMarker.column + 1;
                        return this.errorHandler.createError(index, line, column, msg);
                    }
                };
                Parser.prototype.throwUnexpectedToken = function(token, message) {
                    throw this.unexpectedTokenError(token, message);
                };
                Parser.prototype.tolerateUnexpectedToken = function(token, message) {
                    this.errorHandler.tolerate(this.unexpectedTokenError(token, message));
                };
                Parser.prototype.collectComments = function() {
                    if (!this.config.comment) {
                        this.scanner.scanComments();
                    } else {
                        var comments = this.scanner.scanComments();
                        if (comments.length > 0 && this.delegate) {
                            for(var i = 0; i < comments.length; ++i){
                                var e = comments[i];
                                var node = void 0;
                                node = {
                                    type: e.multiLine ? "BlockComment" : "LineComment",
                                    value: this.scanner.source.slice(e.slice[0], e.slice[1])
                                };
                                if (this.config.range) {
                                    node.range = e.range;
                                }
                                if (this.config.loc) {
                                    node.loc = e.loc;
                                }
                                var metadata = {
                                    start: {
                                        line: e.loc.start.line,
                                        column: e.loc.start.column,
                                        offset: e.range[0]
                                    },
                                    end: {
                                        line: e.loc.end.line,
                                        column: e.loc.end.column,
                                        offset: e.range[1]
                                    }
                                };
                                this.delegate(node, metadata);
                            }
                        }
                    }
                };
                // From internal representation to an external structure
                Parser.prototype.getTokenRaw = function(token) {
                    return this.scanner.source.slice(token.start, token.end);
                };
                Parser.prototype.convertToken = function(token) {
                    var t = {
                        type: token_1.TokenName[token.type],
                        value: this.getTokenRaw(token)
                    };
                    if (this.config.range) {
                        t.range = [
                            token.start,
                            token.end
                        ];
                    }
                    if (this.config.loc) {
                        t.loc = {
                            start: {
                                line: this.startMarker.line,
                                column: this.startMarker.column
                            },
                            end: {
                                line: this.scanner.lineNumber,
                                column: this.scanner.index - this.scanner.lineStart
                            }
                        };
                    }
                    if (token.type === 9 /* RegularExpression */ ) {
                        var pattern = token.pattern;
                        var flags = token.flags;
                        t.regex = {
                            pattern: pattern,
                            flags: flags
                        };
                    }
                    return t;
                };
                Parser.prototype.nextToken = function() {
                    var token = this.lookahead;
                    this.lastMarker.index = this.scanner.index;
                    this.lastMarker.line = this.scanner.lineNumber;
                    this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
                    this.collectComments();
                    if (this.scanner.index !== this.startMarker.index) {
                        this.startMarker.index = this.scanner.index;
                        this.startMarker.line = this.scanner.lineNumber;
                        this.startMarker.column = this.scanner.index - this.scanner.lineStart;
                    }
                    var next = this.scanner.lex();
                    this.hasLineTerminator = token.lineNumber !== next.lineNumber;
                    if (next && this.context.strict && next.type === 3 /* Identifier */ ) {
                        if (this.scanner.isStrictModeReservedWord(next.value)) {
                            next.type = 4 /* Keyword */ ;
                        }
                    }
                    this.lookahead = next;
                    if (this.config.tokens && next.type !== 2 /* EOF */ ) {
                        this.tokens.push(this.convertToken(next));
                    }
                    return token;
                };
                Parser.prototype.nextRegexToken = function() {
                    this.collectComments();
                    var token = this.scanner.scanRegExp();
                    if (this.config.tokens) {
                        // Pop the previous token, '/' or '/='
                        // This is added from the lookahead token.
                        this.tokens.pop();
                        this.tokens.push(this.convertToken(token));
                    }
                    // Prime the next lookahead.
                    this.lookahead = token;
                    this.nextToken();
                    return token;
                };
                Parser.prototype.createNode = function() {
                    return {
                        index: this.startMarker.index,
                        line: this.startMarker.line,
                        column: this.startMarker.column
                    };
                };
                Parser.prototype.startNode = function(token, lastLineStart) {
                    if (lastLineStart === void 0) {
                        lastLineStart = 0;
                    }
                    var column = token.start - token.lineStart;
                    var line = token.lineNumber;
                    if (column < 0) {
                        column += lastLineStart;
                        line--;
                    }
                    return {
                        index: token.start,
                        line: line,
                        column: column
                    };
                };
                Parser.prototype.finalize = function(marker, node) {
                    if (this.config.range) {
                        node.range = [
                            marker.index,
                            this.lastMarker.index
                        ];
                    }
                    if (this.config.loc) {
                        node.loc = {
                            start: {
                                line: marker.line,
                                column: marker.column
                            },
                            end: {
                                line: this.lastMarker.line,
                                column: this.lastMarker.column
                            }
                        };
                        if (this.config.source) {
                            node.loc.source = this.config.source;
                        }
                    }
                    if (this.delegate) {
                        var metadata = {
                            start: {
                                line: marker.line,
                                column: marker.column,
                                offset: marker.index
                            },
                            end: {
                                line: this.lastMarker.line,
                                column: this.lastMarker.column,
                                offset: this.lastMarker.index
                            }
                        };
                        this.delegate(node, metadata);
                    }
                    return node;
                };
                // Expect the next token to match the specified punctuator.
                // If not, an exception will be thrown.
                Parser.prototype.expect = function(value) {
                    var token = this.nextToken();
                    if (token.type !== 7 /* Punctuator */  || token.value !== value) {
                        this.throwUnexpectedToken(token);
                    }
                };
                // Quietly expect a comma when in tolerant mode, otherwise delegates to expect().
                Parser.prototype.expectCommaSeparator = function() {
                    if (this.config.tolerant) {
                        var token = this.lookahead;
                        if (token.type === 7 /* Punctuator */  && token.value === ",") {
                            this.nextToken();
                        } else if (token.type === 7 /* Punctuator */  && token.value === ";") {
                            this.nextToken();
                            this.tolerateUnexpectedToken(token);
                        } else {
                            this.tolerateUnexpectedToken(token, messages_1.Messages.UnexpectedToken);
                        }
                    } else {
                        this.expect(",");
                    }
                };
                // Expect the next token to match the specified keyword.
                // If not, an exception will be thrown.
                Parser.prototype.expectKeyword = function(keyword) {
                    var token = this.nextToken();
                    if (token.type !== 4 /* Keyword */  || token.value !== keyword) {
                        this.throwUnexpectedToken(token);
                    }
                };
                // Return true if the next token matches the specified punctuator.
                Parser.prototype.match = function(value) {
                    return this.lookahead.type === 7 /* Punctuator */  && this.lookahead.value === value;
                };
                // Return true if the next token matches the specified keyword
                Parser.prototype.matchKeyword = function(keyword) {
                    return this.lookahead.type === 4 /* Keyword */  && this.lookahead.value === keyword;
                };
                // Return true if the next token matches the specified contextual keyword
                // (where an identifier is sometimes a keyword depending on the context)
                Parser.prototype.matchContextualKeyword = function(keyword) {
                    return this.lookahead.type === 3 /* Identifier */  && this.lookahead.value === keyword;
                };
                // Return true if the next token is an assignment operator
                Parser.prototype.matchAssign = function() {
                    if (this.lookahead.type !== 7 /* Punctuator */ ) {
                        return false;
                    }
                    var op = this.lookahead.value;
                    return op === "=" || op === "*=" || op === "**=" || op === "/=" || op === "%=" || op === "+=" || op === "-=" || op === "<<=" || op === ">>=" || op === ">>>=" || op === "&=" || op === "^=" || op === "|=";
                };
                // Cover grammar support.
                //
                // When an assignment expression position starts with an left parenthesis, the determination of the type
                // of the syntax is to be deferred arbitrarily long until the end of the parentheses pair (plus a lookahead)
                // or the first comma. This situation also defers the determination of all the expressions nested in the pair.
                //
                // There are three productions that can be parsed in a parentheses pair that needs to be determined
                // after the outermost pair is closed. They are:
                //
                //   1. AssignmentExpression
                //   2. BindingElements
                //   3. AssignmentTargets
                //
                // In order to avoid exponential backtracking, we use two flags to denote if the production can be
                // binding element or assignment target.
                //
                // The three productions have the relationship:
                //
                //   BindingElements ⊆ AssignmentTargets ⊆ AssignmentExpression
                //
                // with a single exception that CoverInitializedName when used directly in an Expression, generates
                // an early error. Therefore, we need the third state, firstCoverInitializedNameError, to track the
                // first usage of CoverInitializedName and report it when we reached the end of the parentheses pair.
                //
                // isolateCoverGrammar function runs the given parser function with a new cover grammar context, and it does not
                // effect the current flags. This means the production the parser parses is only used as an expression. Therefore
                // the CoverInitializedName check is conducted.
                //
                // inheritCoverGrammar function runs the given parse function with a new cover grammar context, and it propagates
                // the flags outside of the parser. This means the production the parser parses is used as a part of a potential
                // pattern. The CoverInitializedName check is deferred.
                Parser.prototype.isolateCoverGrammar = function(parseFunction) {
                    var previousIsBindingElement = this.context.isBindingElement;
                    var previousIsAssignmentTarget = this.context.isAssignmentTarget;
                    var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
                    this.context.isBindingElement = true;
                    this.context.isAssignmentTarget = true;
                    this.context.firstCoverInitializedNameError = null;
                    var result = parseFunction.call(this);
                    if (this.context.firstCoverInitializedNameError !== null) {
                        this.throwUnexpectedToken(this.context.firstCoverInitializedNameError);
                    }
                    this.context.isBindingElement = previousIsBindingElement;
                    this.context.isAssignmentTarget = previousIsAssignmentTarget;
                    this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError;
                    return result;
                };
                Parser.prototype.inheritCoverGrammar = function(parseFunction) {
                    var previousIsBindingElement = this.context.isBindingElement;
                    var previousIsAssignmentTarget = this.context.isAssignmentTarget;
                    var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
                    this.context.isBindingElement = true;
                    this.context.isAssignmentTarget = true;
                    this.context.firstCoverInitializedNameError = null;
                    var result = parseFunction.call(this);
                    this.context.isBindingElement = this.context.isBindingElement && previousIsBindingElement;
                    this.context.isAssignmentTarget = this.context.isAssignmentTarget && previousIsAssignmentTarget;
                    this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError || this.context.firstCoverInitializedNameError;
                    return result;
                };
                Parser.prototype.consumeSemicolon = function() {
                    if (this.match(";")) {
                        this.nextToken();
                    } else if (!this.hasLineTerminator) {
                        if (this.lookahead.type !== 2 /* EOF */  && !this.match("}")) {
                            this.throwUnexpectedToken(this.lookahead);
                        }
                        this.lastMarker.index = this.startMarker.index;
                        this.lastMarker.line = this.startMarker.line;
                        this.lastMarker.column = this.startMarker.column;
                    }
                };
                // https://tc39.github.io/ecma262/#sec-primary-expression
                Parser.prototype.parsePrimaryExpression = function() {
                    var node = this.createNode();
                    var expr;
                    var token, raw;
                    switch(this.lookahead.type){
                        case 3 /* Identifier */ :
                            if ((this.context.isModule || this.context.await) && this.lookahead.value === "await") {
                                this.tolerateUnexpectedToken(this.lookahead);
                            }
                            expr = this.matchAsyncFunction() ? this.parseFunctionExpression() : this.finalize(node, new Node.Identifier(this.nextToken().value));
                            break;
                        case 6 /* NumericLiteral */ :
                        case 8 /* StringLiteral */ :
                            if (this.context.strict && this.lookahead.octal) {
                                this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.StrictOctalLiteral);
                            }
                            this.context.isAssignmentTarget = false;
                            this.context.isBindingElement = false;
                            token = this.nextToken();
                            raw = this.getTokenRaw(token);
                            expr = this.finalize(node, new Node.Literal(token.value, raw));
                            break;
                        case 1 /* BooleanLiteral */ :
                            this.context.isAssignmentTarget = false;
                            this.context.isBindingElement = false;
                            token = this.nextToken();
                            raw = this.getTokenRaw(token);
                            expr = this.finalize(node, new Node.Literal(token.value === "true", raw));
                            break;
                        case 5 /* NullLiteral */ :
                            this.context.isAssignmentTarget = false;
                            this.context.isBindingElement = false;
                            token = this.nextToken();
                            raw = this.getTokenRaw(token);
                            expr = this.finalize(node, new Node.Literal(null, raw));
                            break;
                        case 10 /* Template */ :
                            expr = this.parseTemplateLiteral();
                            break;
                        case 7 /* Punctuator */ :
                            switch(this.lookahead.value){
                                case "(":
                                    this.context.isBindingElement = false;
                                    expr = this.inheritCoverGrammar(this.parseGroupExpression);
                                    break;
                                case "[":
                                    expr = this.inheritCoverGrammar(this.parseArrayInitializer);
                                    break;
                                case "{":
                                    expr = this.inheritCoverGrammar(this.parseObjectInitializer);
                                    break;
                                case "/":
                                case "/=":
                                    this.context.isAssignmentTarget = false;
                                    this.context.isBindingElement = false;
                                    this.scanner.index = this.startMarker.index;
                                    token = this.nextRegexToken();
                                    raw = this.getTokenRaw(token);
                                    expr = this.finalize(node, new Node.RegexLiteral(token.regex, raw, token.pattern, token.flags));
                                    break;
                                default:
                                    expr = this.throwUnexpectedToken(this.nextToken());
                            }
                            break;
                        case 4 /* Keyword */ :
                            if (!this.context.strict && this.context.allowYield && this.matchKeyword("yield")) {
                                expr = this.parseIdentifierName();
                            } else if (!this.context.strict && this.matchKeyword("let")) {
                                expr = this.finalize(node, new Node.Identifier(this.nextToken().value));
                            } else {
                                this.context.isAssignmentTarget = false;
                                this.context.isBindingElement = false;
                                if (this.matchKeyword("function")) {
                                    expr = this.parseFunctionExpression();
                                } else if (this.matchKeyword("this")) {
                                    this.nextToken();
                                    expr = this.finalize(node, new Node.ThisExpression());
                                } else if (this.matchKeyword("class")) {
                                    expr = this.parseClassExpression();
                                } else {
                                    expr = this.throwUnexpectedToken(this.nextToken());
                                }
                            }
                            break;
                        default:
                            expr = this.throwUnexpectedToken(this.nextToken());
                    }
                    return expr;
                };
                // https://tc39.github.io/ecma262/#sec-array-initializer
                Parser.prototype.parseSpreadElement = function() {
                    var node = this.createNode();
                    this.expect("...");
                    var arg = this.inheritCoverGrammar(this.parseAssignmentExpression);
                    return this.finalize(node, new Node.SpreadElement(arg));
                };
                Parser.prototype.parseArrayInitializer = function() {
                    var node = this.createNode();
                    var elements = [];
                    this.expect("[");
                    while(!this.match("]")){
                        if (this.match(",")) {
                            this.nextToken();
                            elements.push(null);
                        } else if (this.match("...")) {
                            var element = this.parseSpreadElement();
                            if (!this.match("]")) {
                                this.context.isAssignmentTarget = false;
                                this.context.isBindingElement = false;
                                this.expect(",");
                            }
                            elements.push(element);
                        } else {
                            elements.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
                            if (!this.match("]")) {
                                this.expect(",");
                            }
                        }
                    }
                    this.expect("]");
                    return this.finalize(node, new Node.ArrayExpression(elements));
                };
                // https://tc39.github.io/ecma262/#sec-object-initializer
                Parser.prototype.parsePropertyMethod = function(params) {
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                    var previousStrict = this.context.strict;
                    var previousAllowStrictDirective = this.context.allowStrictDirective;
                    this.context.allowStrictDirective = params.simple;
                    var body = this.isolateCoverGrammar(this.parseFunctionSourceElements);
                    if (this.context.strict && params.firstRestricted) {
                        this.tolerateUnexpectedToken(params.firstRestricted, params.message);
                    }
                    if (this.context.strict && params.stricted) {
                        this.tolerateUnexpectedToken(params.stricted, params.message);
                    }
                    this.context.strict = previousStrict;
                    this.context.allowStrictDirective = previousAllowStrictDirective;
                    return body;
                };
                Parser.prototype.parsePropertyMethodFunction = function() {
                    var isGenerator = false;
                    var node = this.createNode();
                    var previousAllowYield = this.context.allowYield;
                    this.context.allowYield = true;
                    var params = this.parseFormalParameters();
                    var method = this.parsePropertyMethod(params);
                    this.context.allowYield = previousAllowYield;
                    return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
                };
                Parser.prototype.parsePropertyMethodAsyncFunction = function() {
                    var node = this.createNode();
                    var previousAllowYield = this.context.allowYield;
                    var previousAwait = this.context.await;
                    this.context.allowYield = false;
                    this.context.await = true;
                    var params = this.parseFormalParameters();
                    var method = this.parsePropertyMethod(params);
                    this.context.allowYield = previousAllowYield;
                    this.context.await = previousAwait;
                    return this.finalize(node, new Node.AsyncFunctionExpression(null, params.params, method));
                };
                Parser.prototype.parseObjectPropertyKey = function() {
                    var node = this.createNode();
                    var token = this.nextToken();
                    var key;
                    switch(token.type){
                        case 8 /* StringLiteral */ :
                        case 6 /* NumericLiteral */ :
                            if (this.context.strict && token.octal) {
                                this.tolerateUnexpectedToken(token, messages_1.Messages.StrictOctalLiteral);
                            }
                            var raw = this.getTokenRaw(token);
                            key = this.finalize(node, new Node.Literal(token.value, raw));
                            break;
                        case 3 /* Identifier */ :
                        case 1 /* BooleanLiteral */ :
                        case 5 /* NullLiteral */ :
                        case 4 /* Keyword */ :
                            key = this.finalize(node, new Node.Identifier(token.value));
                            break;
                        case 7 /* Punctuator */ :
                            if (token.value === "[") {
                                key = this.isolateCoverGrammar(this.parseAssignmentExpression);
                                this.expect("]");
                            } else {
                                key = this.throwUnexpectedToken(token);
                            }
                            break;
                        default:
                            key = this.throwUnexpectedToken(token);
                    }
                    return key;
                };
                Parser.prototype.isPropertyKey = function(key, value) {
                    return key.type === syntax_1.Syntax.Identifier && key.name === value || key.type === syntax_1.Syntax.Literal && key.value === value;
                };
                Parser.prototype.parseObjectProperty = function(hasProto) {
                    var node = this.createNode();
                    var token = this.lookahead;
                    var kind;
                    var key = null;
                    var value = null;
                    var computed = false;
                    var method = false;
                    var shorthand = false;
                    var isAsync = false;
                    if (token.type === 3 /* Identifier */ ) {
                        var id = token.value;
                        this.nextToken();
                        computed = this.match("[");
                        isAsync = !this.hasLineTerminator && id === "async" && !this.match(":") && !this.match("(") && !this.match("*") && !this.match(",");
                        key = isAsync ? this.parseObjectPropertyKey() : this.finalize(node, new Node.Identifier(id));
                    } else if (this.match("*")) {
                        this.nextToken();
                    } else {
                        computed = this.match("[");
                        key = this.parseObjectPropertyKey();
                    }
                    var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
                    if (token.type === 3 /* Identifier */  && !isAsync && token.value === "get" && lookaheadPropertyKey) {
                        kind = "get";
                        computed = this.match("[");
                        key = this.parseObjectPropertyKey();
                        this.context.allowYield = false;
                        value = this.parseGetterMethod();
                    } else if (token.type === 3 /* Identifier */  && !isAsync && token.value === "set" && lookaheadPropertyKey) {
                        kind = "set";
                        computed = this.match("[");
                        key = this.parseObjectPropertyKey();
                        value = this.parseSetterMethod();
                    } else if (token.type === 7 /* Punctuator */  && token.value === "*" && lookaheadPropertyKey) {
                        kind = "init";
                        computed = this.match("[");
                        key = this.parseObjectPropertyKey();
                        value = this.parseGeneratorMethod();
                        method = true;
                    } else {
                        if (!key) {
                            this.throwUnexpectedToken(this.lookahead);
                        }
                        kind = "init";
                        if (this.match(":") && !isAsync) {
                            if (!computed && this.isPropertyKey(key, "__proto__")) {
                                if (hasProto.value) {
                                    this.tolerateError(messages_1.Messages.DuplicateProtoProperty);
                                }
                                hasProto.value = true;
                            }
                            this.nextToken();
                            value = this.inheritCoverGrammar(this.parseAssignmentExpression);
                        } else if (this.match("(")) {
                            value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
                            method = true;
                        } else if (token.type === 3 /* Identifier */ ) {
                            var id = this.finalize(node, new Node.Identifier(token.value));
                            if (this.match("=")) {
                                this.context.firstCoverInitializedNameError = this.lookahead;
                                this.nextToken();
                                shorthand = true;
                                var init = this.isolateCoverGrammar(this.parseAssignmentExpression);
                                value = this.finalize(node, new Node.AssignmentPattern(id, init));
                            } else {
                                shorthand = true;
                                value = id;
                            }
                        } else {
                            this.throwUnexpectedToken(this.nextToken());
                        }
                    }
                    return this.finalize(node, new Node.Property(kind, key, computed, value, method, shorthand));
                };
                Parser.prototype.parseObjectInitializer = function() {
                    var node = this.createNode();
                    this.expect("{");
                    var properties = [];
                    var hasProto = {
                        value: false
                    };
                    while(!this.match("}")){
                        properties.push(this.parseObjectProperty(hasProto));
                        if (!this.match("}")) {
                            this.expectCommaSeparator();
                        }
                    }
                    this.expect("}");
                    return this.finalize(node, new Node.ObjectExpression(properties));
                };
                // https://tc39.github.io/ecma262/#sec-template-literals
                Parser.prototype.parseTemplateHead = function() {
                    assert_1.assert(this.lookahead.head, "Template literal must start with a template head");
                    var node = this.createNode();
                    var token = this.nextToken();
                    var raw = token.value;
                    var cooked = token.cooked;
                    return this.finalize(node, new Node.TemplateElement({
                        raw: raw,
                        cooked: cooked
                    }, token.tail));
                };
                Parser.prototype.parseTemplateElement = function() {
                    if (this.lookahead.type !== 10 /* Template */ ) {
                        this.throwUnexpectedToken();
                    }
                    var node = this.createNode();
                    var token = this.nextToken();
                    var raw = token.value;
                    var cooked = token.cooked;
                    return this.finalize(node, new Node.TemplateElement({
                        raw: raw,
                        cooked: cooked
                    }, token.tail));
                };
                Parser.prototype.parseTemplateLiteral = function() {
                    var node = this.createNode();
                    var expressions = [];
                    var quasis = [];
                    var quasi = this.parseTemplateHead();
                    quasis.push(quasi);
                    while(!quasi.tail){
                        expressions.push(this.parseExpression());
                        quasi = this.parseTemplateElement();
                        quasis.push(quasi);
                    }
                    return this.finalize(node, new Node.TemplateLiteral(quasis, expressions));
                };
                // https://tc39.github.io/ecma262/#sec-grouping-operator
                Parser.prototype.reinterpretExpressionAsPattern = function(expr) {
                    switch(expr.type){
                        case syntax_1.Syntax.Identifier:
                        case syntax_1.Syntax.MemberExpression:
                        case syntax_1.Syntax.RestElement:
                        case syntax_1.Syntax.AssignmentPattern:
                            break;
                        case syntax_1.Syntax.SpreadElement:
                            expr.type = syntax_1.Syntax.RestElement;
                            this.reinterpretExpressionAsPattern(expr.argument);
                            break;
                        case syntax_1.Syntax.ArrayExpression:
                            expr.type = syntax_1.Syntax.ArrayPattern;
                            for(var i = 0; i < expr.elements.length; i++){
                                if (expr.elements[i] !== null) {
                                    this.reinterpretExpressionAsPattern(expr.elements[i]);
                                }
                            }
                            break;
                        case syntax_1.Syntax.ObjectExpression:
                            expr.type = syntax_1.Syntax.ObjectPattern;
                            for(var i = 0; i < expr.properties.length; i++){
                                this.reinterpretExpressionAsPattern(expr.properties[i].value);
                            }
                            break;
                        case syntax_1.Syntax.AssignmentExpression:
                            expr.type = syntax_1.Syntax.AssignmentPattern;
                            delete expr.operator;
                            this.reinterpretExpressionAsPattern(expr.left);
                            break;
                        default:
                            break;
                    }
                };
                Parser.prototype.parseGroupExpression = function() {
                    var expr;
                    this.expect("(");
                    if (this.match(")")) {
                        this.nextToken();
                        if (!this.match("=>")) {
                            this.expect("=>");
                        }
                        expr = {
                            type: ArrowParameterPlaceHolder,
                            params: [],
                            async: false
                        };
                    } else {
                        var startToken = this.lookahead;
                        var params = [];
                        if (this.match("...")) {
                            expr = this.parseRestElement(params);
                            this.expect(")");
                            if (!this.match("=>")) {
                                this.expect("=>");
                            }
                            expr = {
                                type: ArrowParameterPlaceHolder,
                                params: [
                                    expr
                                ],
                                async: false
                            };
                        } else {
                            var arrow = false;
                            this.context.isBindingElement = true;
                            expr = this.inheritCoverGrammar(this.parseAssignmentExpression);
                            if (this.match(",")) {
                                var expressions = [];
                                this.context.isAssignmentTarget = false;
                                expressions.push(expr);
                                while(this.lookahead.type !== 2 /* EOF */ ){
                                    if (!this.match(",")) {
                                        break;
                                    }
                                    this.nextToken();
                                    if (this.match(")")) {
                                        this.nextToken();
                                        for(var i = 0; i < expressions.length; i++){
                                            this.reinterpretExpressionAsPattern(expressions[i]);
                                        }
                                        arrow = true;
                                        expr = {
                                            type: ArrowParameterPlaceHolder,
                                            params: expressions,
                                            async: false
                                        };
                                    } else if (this.match("...")) {
                                        if (!this.context.isBindingElement) {
                                            this.throwUnexpectedToken(this.lookahead);
                                        }
                                        expressions.push(this.parseRestElement(params));
                                        this.expect(")");
                                        if (!this.match("=>")) {
                                            this.expect("=>");
                                        }
                                        this.context.isBindingElement = false;
                                        for(var i = 0; i < expressions.length; i++){
                                            this.reinterpretExpressionAsPattern(expressions[i]);
                                        }
                                        arrow = true;
                                        expr = {
                                            type: ArrowParameterPlaceHolder,
                                            params: expressions,
                                            async: false
                                        };
                                    } else {
                                        expressions.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
                                    }
                                    if (arrow) {
                                        break;
                                    }
                                }
                                if (!arrow) {
                                    expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
                                }
                            }
                            if (!arrow) {
                                this.expect(")");
                                if (this.match("=>")) {
                                    if (expr.type === syntax_1.Syntax.Identifier && expr.name === "yield") {
                                        arrow = true;
                                        expr = {
                                            type: ArrowParameterPlaceHolder,
                                            params: [
                                                expr
                                            ],
                                            async: false
                                        };
                                    }
                                    if (!arrow) {
                                        if (!this.context.isBindingElement) {
                                            this.throwUnexpectedToken(this.lookahead);
                                        }
                                        if (expr.type === syntax_1.Syntax.SequenceExpression) {
                                            for(var i = 0; i < expr.expressions.length; i++){
                                                this.reinterpretExpressionAsPattern(expr.expressions[i]);
                                            }
                                        } else {
                                            this.reinterpretExpressionAsPattern(expr);
                                        }
                                        var parameters = expr.type === syntax_1.Syntax.SequenceExpression ? expr.expressions : [
                                            expr
                                        ];
                                        expr = {
                                            type: ArrowParameterPlaceHolder,
                                            params: parameters,
                                            async: false
                                        };
                                    }
                                }
                                this.context.isBindingElement = false;
                            }
                        }
                    }
                    return expr;
                };
                // https://tc39.github.io/ecma262/#sec-left-hand-side-expressions
                Parser.prototype.parseArguments = function() {
                    this.expect("(");
                    var args = [];
                    if (!this.match(")")) {
                        while(true){
                            var expr = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAssignmentExpression);
                            args.push(expr);
                            if (this.match(")")) {
                                break;
                            }
                            this.expectCommaSeparator();
                            if (this.match(")")) {
                                break;
                            }
                        }
                    }
                    this.expect(")");
                    return args;
                };
                Parser.prototype.isIdentifierName = function(token) {
                    return token.type === 3 /* Identifier */  || token.type === 4 /* Keyword */  || token.type === 1 /* BooleanLiteral */  || token.type === 5 /* NullLiteral */ ;
                };
                Parser.prototype.parseIdentifierName = function() {
                    var node = this.createNode();
                    var token = this.nextToken();
                    if (!this.isIdentifierName(token)) {
                        this.throwUnexpectedToken(token);
                    }
                    return this.finalize(node, new Node.Identifier(token.value));
                };
                Parser.prototype.parseNewExpression = function() {
                    var node = this.createNode();
                    var id = this.parseIdentifierName();
                    assert_1.assert(id.name === "new", "New expression must start with `new`");
                    var expr;
                    if (this.match(".")) {
                        this.nextToken();
                        if (this.lookahead.type === 3 /* Identifier */  && this.context.inFunctionBody && this.lookahead.value === "target") {
                            var property = this.parseIdentifierName();
                            expr = new Node.MetaProperty(id, property);
                        } else {
                            this.throwUnexpectedToken(this.lookahead);
                        }
                    } else {
                        var callee = this.isolateCoverGrammar(this.parseLeftHandSideExpression);
                        var args = this.match("(") ? this.parseArguments() : [];
                        expr = new Node.NewExpression(callee, args);
                        this.context.isAssignmentTarget = false;
                        this.context.isBindingElement = false;
                    }
                    return this.finalize(node, expr);
                };
                Parser.prototype.parseAsyncArgument = function() {
                    var arg = this.parseAssignmentExpression();
                    this.context.firstCoverInitializedNameError = null;
                    return arg;
                };
                Parser.prototype.parseAsyncArguments = function() {
                    this.expect("(");
                    var args = [];
                    if (!this.match(")")) {
                        while(true){
                            var expr = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAsyncArgument);
                            args.push(expr);
                            if (this.match(")")) {
                                break;
                            }
                            this.expectCommaSeparator();
                            if (this.match(")")) {
                                break;
                            }
                        }
                    }
                    this.expect(")");
                    return args;
                };
                Parser.prototype.parseLeftHandSideExpressionAllowCall = function() {
                    var startToken = this.lookahead;
                    var maybeAsync = this.matchContextualKeyword("async");
                    var previousAllowIn = this.context.allowIn;
                    this.context.allowIn = true;
                    var expr;
                    if (this.matchKeyword("super") && this.context.inFunctionBody) {
                        expr = this.createNode();
                        this.nextToken();
                        expr = this.finalize(expr, new Node.Super());
                        if (!this.match("(") && !this.match(".") && !this.match("[")) {
                            this.throwUnexpectedToken(this.lookahead);
                        }
                    } else {
                        expr = this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression);
                    }
                    while(true){
                        if (this.match(".")) {
                            this.context.isBindingElement = false;
                            this.context.isAssignmentTarget = true;
                            this.expect(".");
                            var property = this.parseIdentifierName();
                            expr = this.finalize(this.startNode(startToken), new Node.StaticMemberExpression(expr, property));
                        } else if (this.match("(")) {
                            var asyncArrow = maybeAsync && startToken.lineNumber === this.lookahead.lineNumber;
                            this.context.isBindingElement = false;
                            this.context.isAssignmentTarget = false;
                            var args = asyncArrow ? this.parseAsyncArguments() : this.parseArguments();
                            expr = this.finalize(this.startNode(startToken), new Node.CallExpression(expr, args));
                            if (asyncArrow && this.match("=>")) {
                                for(var i = 0; i < args.length; ++i){
                                    this.reinterpretExpressionAsPattern(args[i]);
                                }
                                expr = {
                                    type: ArrowParameterPlaceHolder,
                                    params: args,
                                    async: true
                                };
                            }
                        } else if (this.match("[")) {
                            this.context.isBindingElement = false;
                            this.context.isAssignmentTarget = true;
                            this.expect("[");
                            var property = this.isolateCoverGrammar(this.parseExpression);
                            this.expect("]");
                            expr = this.finalize(this.startNode(startToken), new Node.ComputedMemberExpression(expr, property));
                        } else if (this.lookahead.type === 10 /* Template */  && this.lookahead.head) {
                            var quasi = this.parseTemplateLiteral();
                            expr = this.finalize(this.startNode(startToken), new Node.TaggedTemplateExpression(expr, quasi));
                        } else {
                            break;
                        }
                    }
                    this.context.allowIn = previousAllowIn;
                    return expr;
                };
                Parser.prototype.parseSuper = function() {
                    var node = this.createNode();
                    this.expectKeyword("super");
                    if (!this.match("[") && !this.match(".")) {
                        this.throwUnexpectedToken(this.lookahead);
                    }
                    return this.finalize(node, new Node.Super());
                };
                Parser.prototype.parseLeftHandSideExpression = function() {
                    assert_1.assert(this.context.allowIn, "callee of new expression always allow in keyword.");
                    var node = this.startNode(this.lookahead);
                    var expr = this.matchKeyword("super") && this.context.inFunctionBody ? this.parseSuper() : this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression);
                    while(true){
                        if (this.match("[")) {
                            this.context.isBindingElement = false;
                            this.context.isAssignmentTarget = true;
                            this.expect("[");
                            var property = this.isolateCoverGrammar(this.parseExpression);
                            this.expect("]");
                            expr = this.finalize(node, new Node.ComputedMemberExpression(expr, property));
                        } else if (this.match(".")) {
                            this.context.isBindingElement = false;
                            this.context.isAssignmentTarget = true;
                            this.expect(".");
                            var property = this.parseIdentifierName();
                            expr = this.finalize(node, new Node.StaticMemberExpression(expr, property));
                        } else if (this.lookahead.type === 10 /* Template */  && this.lookahead.head) {
                            var quasi = this.parseTemplateLiteral();
                            expr = this.finalize(node, new Node.TaggedTemplateExpression(expr, quasi));
                        } else {
                            break;
                        }
                    }
                    return expr;
                };
                // https://tc39.github.io/ecma262/#sec-update-expressions
                Parser.prototype.parseUpdateExpression = function() {
                    var expr;
                    var startToken = this.lookahead;
                    if (this.match("++") || this.match("--")) {
                        var node = this.startNode(startToken);
                        var token = this.nextToken();
                        expr = this.inheritCoverGrammar(this.parseUnaryExpression);
                        if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
                            this.tolerateError(messages_1.Messages.StrictLHSPrefix);
                        }
                        if (!this.context.isAssignmentTarget) {
                            this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
                        }
                        var prefix = true;
                        expr = this.finalize(node, new Node.UpdateExpression(token.value, expr, prefix));
                        this.context.isAssignmentTarget = false;
                        this.context.isBindingElement = false;
                    } else {
                        expr = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
                        if (!this.hasLineTerminator && this.lookahead.type === 7 /* Punctuator */ ) {
                            if (this.match("++") || this.match("--")) {
                                if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
                                    this.tolerateError(messages_1.Messages.StrictLHSPostfix);
                                }
                                if (!this.context.isAssignmentTarget) {
                                    this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
                                }
                                this.context.isAssignmentTarget = false;
                                this.context.isBindingElement = false;
                                var operator = this.nextToken().value;
                                var prefix = false;
                                expr = this.finalize(this.startNode(startToken), new Node.UpdateExpression(operator, expr, prefix));
                            }
                        }
                    }
                    return expr;
                };
                // https://tc39.github.io/ecma262/#sec-unary-operators
                Parser.prototype.parseAwaitExpression = function() {
                    var node = this.createNode();
                    this.nextToken();
                    var argument = this.parseUnaryExpression();
                    return this.finalize(node, new Node.AwaitExpression(argument));
                };
                Parser.prototype.parseUnaryExpression = function() {
                    var expr;
                    if (this.match("+") || this.match("-") || this.match("~") || this.match("!") || this.matchKeyword("delete") || this.matchKeyword("void") || this.matchKeyword("typeof")) {
                        var node = this.startNode(this.lookahead);
                        var token = this.nextToken();
                        expr = this.inheritCoverGrammar(this.parseUnaryExpression);
                        expr = this.finalize(node, new Node.UnaryExpression(token.value, expr));
                        if (this.context.strict && expr.operator === "delete" && expr.argument.type === syntax_1.Syntax.Identifier) {
                            this.tolerateError(messages_1.Messages.StrictDelete);
                        }
                        this.context.isAssignmentTarget = false;
                        this.context.isBindingElement = false;
                    } else if (this.context.await && this.matchContextualKeyword("await")) {
                        expr = this.parseAwaitExpression();
                    } else {
                        expr = this.parseUpdateExpression();
                    }
                    return expr;
                };
                Parser.prototype.parseExponentiationExpression = function() {
                    var startToken = this.lookahead;
                    var expr = this.inheritCoverGrammar(this.parseUnaryExpression);
                    if (expr.type !== syntax_1.Syntax.UnaryExpression && this.match("**")) {
                        this.nextToken();
                        this.context.isAssignmentTarget = false;
                        this.context.isBindingElement = false;
                        var left = expr;
                        var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
                        expr = this.finalize(this.startNode(startToken), new Node.BinaryExpression("**", left, right));
                    }
                    return expr;
                };
                // https://tc39.github.io/ecma262/#sec-exp-operator
                // https://tc39.github.io/ecma262/#sec-multiplicative-operators
                // https://tc39.github.io/ecma262/#sec-additive-operators
                // https://tc39.github.io/ecma262/#sec-bitwise-shift-operators
                // https://tc39.github.io/ecma262/#sec-relational-operators
                // https://tc39.github.io/ecma262/#sec-equality-operators
                // https://tc39.github.io/ecma262/#sec-binary-bitwise-operators
                // https://tc39.github.io/ecma262/#sec-binary-logical-operators
                Parser.prototype.binaryPrecedence = function(token) {
                    var op = token.value;
                    var precedence;
                    if (token.type === 7 /* Punctuator */ ) {
                        precedence = this.operatorPrecedence[op] || 0;
                    } else if (token.type === 4 /* Keyword */ ) {
                        precedence = op === "instanceof" || this.context.allowIn && op === "in" ? 7 : 0;
                    } else {
                        precedence = 0;
                    }
                    return precedence;
                };
                Parser.prototype.parseBinaryExpression = function() {
                    var startToken = this.lookahead;
                    var expr = this.inheritCoverGrammar(this.parseExponentiationExpression);
                    var token = this.lookahead;
                    var prec = this.binaryPrecedence(token);
                    if (prec > 0) {
                        this.nextToken();
                        this.context.isAssignmentTarget = false;
                        this.context.isBindingElement = false;
                        var markers = [
                            startToken,
                            this.lookahead
                        ];
                        var left = expr;
                        var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
                        var stack = [
                            left,
                            token.value,
                            right
                        ];
                        var precedences = [
                            prec
                        ];
                        while(true){
                            prec = this.binaryPrecedence(this.lookahead);
                            if (prec <= 0) {
                                break;
                            }
                            // Reduce: make a binary expression from the three topmost entries.
                            while(stack.length > 2 && prec <= precedences[precedences.length - 1]){
                                right = stack.pop();
                                var operator = stack.pop();
                                precedences.pop();
                                left = stack.pop();
                                markers.pop();
                                var node = this.startNode(markers[markers.length - 1]);
                                stack.push(this.finalize(node, new Node.BinaryExpression(operator, left, right)));
                            }
                            // Shift.
                            stack.push(this.nextToken().value);
                            precedences.push(prec);
                            markers.push(this.lookahead);
                            stack.push(this.isolateCoverGrammar(this.parseExponentiationExpression));
                        }
                        // Final reduce to clean-up the stack.
                        var i = stack.length - 1;
                        expr = stack[i];
                        var lastMarker = markers.pop();
                        while(i > 1){
                            var marker = markers.pop();
                            var lastLineStart = lastMarker && lastMarker.lineStart;
                            var node = this.startNode(marker, lastLineStart);
                            var operator = stack[i - 1];
                            expr = this.finalize(node, new Node.BinaryExpression(operator, stack[i - 2], expr));
                            i -= 2;
                            lastMarker = marker;
                        }
                    }
                    return expr;
                };
                // https://tc39.github.io/ecma262/#sec-conditional-operator
                Parser.prototype.parseConditionalExpression = function() {
                    var startToken = this.lookahead;
                    var expr = this.inheritCoverGrammar(this.parseBinaryExpression);
                    if (this.match("?")) {
                        this.nextToken();
                        var previousAllowIn = this.context.allowIn;
                        this.context.allowIn = true;
                        var consequent = this.isolateCoverGrammar(this.parseAssignmentExpression);
                        this.context.allowIn = previousAllowIn;
                        this.expect(":");
                        var alternate = this.isolateCoverGrammar(this.parseAssignmentExpression);
                        expr = this.finalize(this.startNode(startToken), new Node.ConditionalExpression(expr, consequent, alternate));
                        this.context.isAssignmentTarget = false;
                        this.context.isBindingElement = false;
                    }
                    return expr;
                };
                // https://tc39.github.io/ecma262/#sec-assignment-operators
                Parser.prototype.checkPatternParam = function(options, param) {
                    switch(param.type){
                        case syntax_1.Syntax.Identifier:
                            this.validateParam(options, param, param.name);
                            break;
                        case syntax_1.Syntax.RestElement:
                            this.checkPatternParam(options, param.argument);
                            break;
                        case syntax_1.Syntax.AssignmentPattern:
                            this.checkPatternParam(options, param.left);
                            break;
                        case syntax_1.Syntax.ArrayPattern:
                            for(var i = 0; i < param.elements.length; i++){
                                if (param.elements[i] !== null) {
                                    this.checkPatternParam(options, param.elements[i]);
                                }
                            }
                            break;
                        case syntax_1.Syntax.ObjectPattern:
                            for(var i = 0; i < param.properties.length; i++){
                                this.checkPatternParam(options, param.properties[i].value);
                            }
                            break;
                        default:
                            break;
                    }
                    options.simple = options.simple && param instanceof Node.Identifier;
                };
                Parser.prototype.reinterpretAsCoverFormalsList = function(expr) {
                    var params = [
                        expr
                    ];
                    var options;
                    var asyncArrow = false;
                    switch(expr.type){
                        case syntax_1.Syntax.Identifier:
                            break;
                        case ArrowParameterPlaceHolder:
                            params = expr.params;
                            asyncArrow = expr.async;
                            break;
                        default:
                            return null;
                    }
                    options = {
                        simple: true,
                        paramSet: {}
                    };
                    for(var i = 0; i < params.length; ++i){
                        var param = params[i];
                        if (param.type === syntax_1.Syntax.AssignmentPattern) {
                            if (param.right.type === syntax_1.Syntax.YieldExpression) {
                                if (param.right.argument) {
                                    this.throwUnexpectedToken(this.lookahead);
                                }
                                param.right.type = syntax_1.Syntax.Identifier;
                                param.right.name = "yield";
                                delete param.right.argument;
                                delete param.right.delegate;
                            }
                        } else if (asyncArrow && param.type === syntax_1.Syntax.Identifier && param.name === "await") {
                            this.throwUnexpectedToken(this.lookahead);
                        }
                        this.checkPatternParam(options, param);
                        params[i] = param;
                    }
                    if (this.context.strict || !this.context.allowYield) {
                        for(var i = 0; i < params.length; ++i){
                            var param = params[i];
                            if (param.type === syntax_1.Syntax.YieldExpression) {
                                this.throwUnexpectedToken(this.lookahead);
                            }
                        }
                    }
                    if (options.message === messages_1.Messages.StrictParamDupe) {
                        var token = this.context.strict ? options.stricted : options.firstRestricted;
                        this.throwUnexpectedToken(token, options.message);
                    }
                    return {
                        simple: options.simple,
                        params: params,
                        stricted: options.stricted,
                        firstRestricted: options.firstRestricted,
                        message: options.message
                    };
                };
                Parser.prototype.parseAssignmentExpression = function() {
                    var expr;
                    if (!this.context.allowYield && this.matchKeyword("yield")) {
                        expr = this.parseYieldExpression();
                    } else {
                        var startToken = this.lookahead;
                        var token = startToken;
                        expr = this.parseConditionalExpression();
                        if (token.type === 3 /* Identifier */  && token.lineNumber === this.lookahead.lineNumber && token.value === "async") {
                            if (this.lookahead.type === 3 /* Identifier */  || this.matchKeyword("yield")) {
                                var arg = this.parsePrimaryExpression();
                                this.reinterpretExpressionAsPattern(arg);
                                expr = {
                                    type: ArrowParameterPlaceHolder,
                                    params: [
                                        arg
                                    ],
                                    async: true
                                };
                            }
                        }
                        if (expr.type === ArrowParameterPlaceHolder || this.match("=>")) {
                            // https://tc39.github.io/ecma262/#sec-arrow-function-definitions
                            this.context.isAssignmentTarget = false;
                            this.context.isBindingElement = false;
                            var isAsync = expr.async;
                            var list = this.reinterpretAsCoverFormalsList(expr);
                            if (list) {
                                if (this.hasLineTerminator) {
                                    this.tolerateUnexpectedToken(this.lookahead);
                                }
                                this.context.firstCoverInitializedNameError = null;
                                var previousStrict = this.context.strict;
                                var previousAllowStrictDirective = this.context.allowStrictDirective;
                                this.context.allowStrictDirective = list.simple;
                                var previousAllowYield = this.context.allowYield;
                                var previousAwait = this.context.await;
                                this.context.allowYield = true;
                                this.context.await = isAsync;
                                var node = this.startNode(startToken);
                                this.expect("=>");
                                var body = void 0;
                                if (this.match("{")) {
                                    var previousAllowIn = this.context.allowIn;
                                    this.context.allowIn = true;
                                    body = this.parseFunctionSourceElements();
                                    this.context.allowIn = previousAllowIn;
                                } else {
                                    body = this.isolateCoverGrammar(this.parseAssignmentExpression);
                                }
                                var expression = body.type !== syntax_1.Syntax.BlockStatement;
                                if (this.context.strict && list.firstRestricted) {
                                    this.throwUnexpectedToken(list.firstRestricted, list.message);
                                }
                                if (this.context.strict && list.stricted) {
                                    this.tolerateUnexpectedToken(list.stricted, list.message);
                                }
                                expr = isAsync ? this.finalize(node, new Node.AsyncArrowFunctionExpression(list.params, body, expression)) : this.finalize(node, new Node.ArrowFunctionExpression(list.params, body, expression));
                                this.context.strict = previousStrict;
                                this.context.allowStrictDirective = previousAllowStrictDirective;
                                this.context.allowYield = previousAllowYield;
                                this.context.await = previousAwait;
                            }
                        } else {
                            if (this.matchAssign()) {
                                if (!this.context.isAssignmentTarget) {
                                    this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
                                }
                                if (this.context.strict && expr.type === syntax_1.Syntax.Identifier) {
                                    var id = expr;
                                    if (this.scanner.isRestrictedWord(id.name)) {
                                        this.tolerateUnexpectedToken(token, messages_1.Messages.StrictLHSAssignment);
                                    }
                                    if (this.scanner.isStrictModeReservedWord(id.name)) {
                                        this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
                                    }
                                }
                                if (!this.match("=")) {
                                    this.context.isAssignmentTarget = false;
                                    this.context.isBindingElement = false;
                                } else {
                                    this.reinterpretExpressionAsPattern(expr);
                                }
                                token = this.nextToken();
                                var operator = token.value;
                                var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
                                expr = this.finalize(this.startNode(startToken), new Node.AssignmentExpression(operator, expr, right));
                                this.context.firstCoverInitializedNameError = null;
                            }
                        }
                    }
                    return expr;
                };
                // https://tc39.github.io/ecma262/#sec-comma-operator
                Parser.prototype.parseExpression = function() {
                    var startToken = this.lookahead;
                    var expr = this.isolateCoverGrammar(this.parseAssignmentExpression);
                    if (this.match(",")) {
                        var expressions = [];
                        expressions.push(expr);
                        while(this.lookahead.type !== 2 /* EOF */ ){
                            if (!this.match(",")) {
                                break;
                            }
                            this.nextToken();
                            expressions.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                        }
                        expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
                    }
                    return expr;
                };
                // https://tc39.github.io/ecma262/#sec-block
                Parser.prototype.parseStatementListItem = function() {
                    var statement;
                    this.context.isAssignmentTarget = true;
                    this.context.isBindingElement = true;
                    if (this.lookahead.type === 4 /* Keyword */ ) {
                        switch(this.lookahead.value){
                            case "export":
                                if (!this.context.isModule) {
                                    this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalExportDeclaration);
                                }
                                statement = this.parseExportDeclaration();
                                break;
                            case "import":
                                if (!this.context.isModule) {
                                    this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalImportDeclaration);
                                }
                                statement = this.parseImportDeclaration();
                                break;
                            case "const":
                                statement = this.parseLexicalDeclaration({
                                    inFor: false
                                });
                                break;
                            case "function":
                                statement = this.parseFunctionDeclaration();
                                break;
                            case "class":
                                statement = this.parseClassDeclaration();
                                break;
                            case "let":
                                statement = this.isLexicalDeclaration() ? this.parseLexicalDeclaration({
                                    inFor: false
                                }) : this.parseStatement();
                                break;
                            default:
                                statement = this.parseStatement();
                                break;
                        }
                    } else {
                        statement = this.parseStatement();
                    }
                    return statement;
                };
                Parser.prototype.parseBlock = function() {
                    var node = this.createNode();
                    this.expect("{");
                    var block = [];
                    while(true){
                        if (this.match("}")) {
                            break;
                        }
                        block.push(this.parseStatementListItem());
                    }
                    this.expect("}");
                    return this.finalize(node, new Node.BlockStatement(block));
                };
                // https://tc39.github.io/ecma262/#sec-let-and-const-declarations
                Parser.prototype.parseLexicalBinding = function(kind, options) {
                    var node = this.createNode();
                    var params = [];
                    var id = this.parsePattern(params, kind);
                    if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
                        if (this.scanner.isRestrictedWord(id.name)) {
                            this.tolerateError(messages_1.Messages.StrictVarName);
                        }
                    }
                    var init = null;
                    if (kind === "const") {
                        if (!this.matchKeyword("in") && !this.matchContextualKeyword("of")) {
                            if (this.match("=")) {
                                this.nextToken();
                                init = this.isolateCoverGrammar(this.parseAssignmentExpression);
                            } else {
                                this.throwError(messages_1.Messages.DeclarationMissingInitializer, "const");
                            }
                        }
                    } else if (!options.inFor && id.type !== syntax_1.Syntax.Identifier || this.match("=")) {
                        this.expect("=");
                        init = this.isolateCoverGrammar(this.parseAssignmentExpression);
                    }
                    return this.finalize(node, new Node.VariableDeclarator(id, init));
                };
                Parser.prototype.parseBindingList = function(kind, options) {
                    var list = [
                        this.parseLexicalBinding(kind, options)
                    ];
                    while(this.match(",")){
                        this.nextToken();
                        list.push(this.parseLexicalBinding(kind, options));
                    }
                    return list;
                };
                Parser.prototype.isLexicalDeclaration = function() {
                    var state = this.scanner.saveState();
                    this.scanner.scanComments();
                    var next = this.scanner.lex();
                    this.scanner.restoreState(state);
                    return next.type === 3 /* Identifier */  || next.type === 7 /* Punctuator */  && next.value === "[" || next.type === 7 /* Punctuator */  && next.value === "{" || next.type === 4 /* Keyword */  && next.value === "let" || next.type === 4 /* Keyword */  && next.value === "yield";
                };
                Parser.prototype.parseLexicalDeclaration = function(options) {
                    var node = this.createNode();
                    var kind = this.nextToken().value;
                    assert_1.assert(kind === "let" || kind === "const", "Lexical declaration must be either let or const");
                    var declarations = this.parseBindingList(kind, options);
                    this.consumeSemicolon();
                    return this.finalize(node, new Node.VariableDeclaration(declarations, kind));
                };
                // https://tc39.github.io/ecma262/#sec-destructuring-binding-patterns
                Parser.prototype.parseBindingRestElement = function(params, kind) {
                    var node = this.createNode();
                    this.expect("...");
                    var arg = this.parsePattern(params, kind);
                    return this.finalize(node, new Node.RestElement(arg));
                };
                Parser.prototype.parseArrayPattern = function(params, kind) {
                    var node = this.createNode();
                    this.expect("[");
                    var elements = [];
                    while(!this.match("]")){
                        if (this.match(",")) {
                            this.nextToken();
                            elements.push(null);
                        } else {
                            if (this.match("...")) {
                                elements.push(this.parseBindingRestElement(params, kind));
                                break;
                            } else {
                                elements.push(this.parsePatternWithDefault(params, kind));
                            }
                            if (!this.match("]")) {
                                this.expect(",");
                            }
                        }
                    }
                    this.expect("]");
                    return this.finalize(node, new Node.ArrayPattern(elements));
                };
                Parser.prototype.parsePropertyPattern = function(params, kind) {
                    var node = this.createNode();
                    var computed = false;
                    var shorthand = false;
                    var method = false;
                    var key;
                    var value;
                    if (this.lookahead.type === 3 /* Identifier */ ) {
                        var keyToken = this.lookahead;
                        key = this.parseVariableIdentifier();
                        var init = this.finalize(node, new Node.Identifier(keyToken.value));
                        if (this.match("=")) {
                            params.push(keyToken);
                            shorthand = true;
                            this.nextToken();
                            var expr = this.parseAssignmentExpression();
                            value = this.finalize(this.startNode(keyToken), new Node.AssignmentPattern(init, expr));
                        } else if (!this.match(":")) {
                            params.push(keyToken);
                            shorthand = true;
                            value = init;
                        } else {
                            this.expect(":");
                            value = this.parsePatternWithDefault(params, kind);
                        }
                    } else {
                        computed = this.match("[");
                        key = this.parseObjectPropertyKey();
                        this.expect(":");
                        value = this.parsePatternWithDefault(params, kind);
                    }
                    return this.finalize(node, new Node.Property("init", key, computed, value, method, shorthand));
                };
                Parser.prototype.parseObjectPattern = function(params, kind) {
                    var node = this.createNode();
                    var properties = [];
                    this.expect("{");
                    while(!this.match("}")){
                        properties.push(this.parsePropertyPattern(params, kind));
                        if (!this.match("}")) {
                            this.expect(",");
                        }
                    }
                    this.expect("}");
                    return this.finalize(node, new Node.ObjectPattern(properties));
                };
                Parser.prototype.parsePattern = function(params, kind) {
                    var pattern;
                    if (this.match("[")) {
                        pattern = this.parseArrayPattern(params, kind);
                    } else if (this.match("{")) {
                        pattern = this.parseObjectPattern(params, kind);
                    } else {
                        if (this.matchKeyword("let") && (kind === "const" || kind === "let")) {
                            this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.LetInLexicalBinding);
                        }
                        params.push(this.lookahead);
                        pattern = this.parseVariableIdentifier(kind);
                    }
                    return pattern;
                };
                Parser.prototype.parsePatternWithDefault = function(params, kind) {
                    var startToken = this.lookahead;
                    var pattern = this.parsePattern(params, kind);
                    if (this.match("=")) {
                        this.nextToken();
                        var previousAllowYield = this.context.allowYield;
                        this.context.allowYield = true;
                        var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
                        this.context.allowYield = previousAllowYield;
                        pattern = this.finalize(this.startNode(startToken), new Node.AssignmentPattern(pattern, right));
                    }
                    return pattern;
                };
                // https://tc39.github.io/ecma262/#sec-variable-statement
                Parser.prototype.parseVariableIdentifier = function(kind) {
                    var node = this.createNode();
                    var token = this.nextToken();
                    if (token.type === 4 /* Keyword */  && token.value === "yield") {
                        if (this.context.strict) {
                            this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
                        } else if (!this.context.allowYield) {
                            this.throwUnexpectedToken(token);
                        }
                    } else if (token.type !== 3 /* Identifier */ ) {
                        if (this.context.strict && token.type === 4 /* Keyword */  && this.scanner.isStrictModeReservedWord(token.value)) {
                            this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
                        } else {
                            if (this.context.strict || token.value !== "let" || kind !== "var") {
                                this.throwUnexpectedToken(token);
                            }
                        }
                    } else if ((this.context.isModule || this.context.await) && token.type === 3 /* Identifier */  && token.value === "await") {
                        this.tolerateUnexpectedToken(token);
                    }
                    return this.finalize(node, new Node.Identifier(token.value));
                };
                Parser.prototype.parseVariableDeclaration = function(options) {
                    var node = this.createNode();
                    var params = [];
                    var id = this.parsePattern(params, "var");
                    if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
                        if (this.scanner.isRestrictedWord(id.name)) {
                            this.tolerateError(messages_1.Messages.StrictVarName);
                        }
                    }
                    var init = null;
                    if (this.match("=")) {
                        this.nextToken();
                        init = this.isolateCoverGrammar(this.parseAssignmentExpression);
                    } else if (id.type !== syntax_1.Syntax.Identifier && !options.inFor) {
                        this.expect("=");
                    }
                    return this.finalize(node, new Node.VariableDeclarator(id, init));
                };
                Parser.prototype.parseVariableDeclarationList = function(options) {
                    var opt = {
                        inFor: options.inFor
                    };
                    var list = [];
                    list.push(this.parseVariableDeclaration(opt));
                    while(this.match(",")){
                        this.nextToken();
                        list.push(this.parseVariableDeclaration(opt));
                    }
                    return list;
                };
                Parser.prototype.parseVariableStatement = function() {
                    var node = this.createNode();
                    this.expectKeyword("var");
                    var declarations = this.parseVariableDeclarationList({
                        inFor: false
                    });
                    this.consumeSemicolon();
                    return this.finalize(node, new Node.VariableDeclaration(declarations, "var"));
                };
                // https://tc39.github.io/ecma262/#sec-empty-statement
                Parser.prototype.parseEmptyStatement = function() {
                    var node = this.createNode();
                    this.expect(";");
                    return this.finalize(node, new Node.EmptyStatement());
                };
                // https://tc39.github.io/ecma262/#sec-expression-statement
                Parser.prototype.parseExpressionStatement = function() {
                    var node = this.createNode();
                    var expr = this.parseExpression();
                    this.consumeSemicolon();
                    return this.finalize(node, new Node.ExpressionStatement(expr));
                };
                // https://tc39.github.io/ecma262/#sec-if-statement
                Parser.prototype.parseIfClause = function() {
                    if (this.context.strict && this.matchKeyword("function")) {
                        this.tolerateError(messages_1.Messages.StrictFunction);
                    }
                    return this.parseStatement();
                };
                Parser.prototype.parseIfStatement = function() {
                    var node = this.createNode();
                    var consequent;
                    var alternate = null;
                    this.expectKeyword("if");
                    this.expect("(");
                    var test = this.parseExpression();
                    if (!this.match(")") && this.config.tolerant) {
                        this.tolerateUnexpectedToken(this.nextToken());
                        consequent = this.finalize(this.createNode(), new Node.EmptyStatement());
                    } else {
                        this.expect(")");
                        consequent = this.parseIfClause();
                        if (this.matchKeyword("else")) {
                            this.nextToken();
                            alternate = this.parseIfClause();
                        }
                    }
                    return this.finalize(node, new Node.IfStatement(test, consequent, alternate));
                };
                // https://tc39.github.io/ecma262/#sec-do-while-statement
                Parser.prototype.parseDoWhileStatement = function() {
                    var node = this.createNode();
                    this.expectKeyword("do");
                    var previousInIteration = this.context.inIteration;
                    this.context.inIteration = true;
                    var body = this.parseStatement();
                    this.context.inIteration = previousInIteration;
                    this.expectKeyword("while");
                    this.expect("(");
                    var test = this.parseExpression();
                    if (!this.match(")") && this.config.tolerant) {
                        this.tolerateUnexpectedToken(this.nextToken());
                    } else {
                        this.expect(")");
                        if (this.match(";")) {
                            this.nextToken();
                        }
                    }
                    return this.finalize(node, new Node.DoWhileStatement(body, test));
                };
                // https://tc39.github.io/ecma262/#sec-while-statement
                Parser.prototype.parseWhileStatement = function() {
                    var node = this.createNode();
                    var body;
                    this.expectKeyword("while");
                    this.expect("(");
                    var test = this.parseExpression();
                    if (!this.match(")") && this.config.tolerant) {
                        this.tolerateUnexpectedToken(this.nextToken());
                        body = this.finalize(this.createNode(), new Node.EmptyStatement());
                    } else {
                        this.expect(")");
                        var previousInIteration = this.context.inIteration;
                        this.context.inIteration = true;
                        body = this.parseStatement();
                        this.context.inIteration = previousInIteration;
                    }
                    return this.finalize(node, new Node.WhileStatement(test, body));
                };
                // https://tc39.github.io/ecma262/#sec-for-statement
                // https://tc39.github.io/ecma262/#sec-for-in-and-for-of-statements
                Parser.prototype.parseForStatement = function() {
                    var init = null;
                    var test = null;
                    var update = null;
                    var forIn = true;
                    var left, right;
                    var node = this.createNode();
                    this.expectKeyword("for");
                    this.expect("(");
                    if (this.match(";")) {
                        this.nextToken();
                    } else {
                        if (this.matchKeyword("var")) {
                            init = this.createNode();
                            this.nextToken();
                            var previousAllowIn = this.context.allowIn;
                            this.context.allowIn = false;
                            var declarations = this.parseVariableDeclarationList({
                                inFor: true
                            });
                            this.context.allowIn = previousAllowIn;
                            if (declarations.length === 1 && this.matchKeyword("in")) {
                                var decl = declarations[0];
                                if (decl.init && (decl.id.type === syntax_1.Syntax.ArrayPattern || decl.id.type === syntax_1.Syntax.ObjectPattern || this.context.strict)) {
                                    this.tolerateError(messages_1.Messages.ForInOfLoopInitializer, "for-in");
                                }
                                init = this.finalize(init, new Node.VariableDeclaration(declarations, "var"));
                                this.nextToken();
                                left = init;
                                right = this.parseExpression();
                                init = null;
                            } else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword("of")) {
                                init = this.finalize(init, new Node.VariableDeclaration(declarations, "var"));
                                this.nextToken();
                                left = init;
                                right = this.parseAssignmentExpression();
                                init = null;
                                forIn = false;
                            } else {
                                init = this.finalize(init, new Node.VariableDeclaration(declarations, "var"));
                                this.expect(";");
                            }
                        } else if (this.matchKeyword("const") || this.matchKeyword("let")) {
                            init = this.createNode();
                            var kind = this.nextToken().value;
                            if (!this.context.strict && this.lookahead.value === "in") {
                                init = this.finalize(init, new Node.Identifier(kind));
                                this.nextToken();
                                left = init;
                                right = this.parseExpression();
                                init = null;
                            } else {
                                var previousAllowIn = this.context.allowIn;
                                this.context.allowIn = false;
                                var declarations = this.parseBindingList(kind, {
                                    inFor: true
                                });
                                this.context.allowIn = previousAllowIn;
                                if (declarations.length === 1 && declarations[0].init === null && this.matchKeyword("in")) {
                                    init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
                                    this.nextToken();
                                    left = init;
                                    right = this.parseExpression();
                                    init = null;
                                } else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword("of")) {
                                    init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
                                    this.nextToken();
                                    left = init;
                                    right = this.parseAssignmentExpression();
                                    init = null;
                                    forIn = false;
                                } else {
                                    this.consumeSemicolon();
                                    init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
                                }
                            }
                        } else {
                            var initStartToken = this.lookahead;
                            var previousAllowIn = this.context.allowIn;
                            this.context.allowIn = false;
                            init = this.inheritCoverGrammar(this.parseAssignmentExpression);
                            this.context.allowIn = previousAllowIn;
                            if (this.matchKeyword("in")) {
                                if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
                                    this.tolerateError(messages_1.Messages.InvalidLHSInForIn);
                                }
                                this.nextToken();
                                this.reinterpretExpressionAsPattern(init);
                                left = init;
                                right = this.parseExpression();
                                init = null;
                            } else if (this.matchContextualKeyword("of")) {
                                if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
                                    this.tolerateError(messages_1.Messages.InvalidLHSInForLoop);
                                }
                                this.nextToken();
                                this.reinterpretExpressionAsPattern(init);
                                left = init;
                                right = this.parseAssignmentExpression();
                                init = null;
                                forIn = false;
                            } else {
                                if (this.match(",")) {
                                    var initSeq = [
                                        init
                                    ];
                                    while(this.match(",")){
                                        this.nextToken();
                                        initSeq.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                                    }
                                    init = this.finalize(this.startNode(initStartToken), new Node.SequenceExpression(initSeq));
                                }
                                this.expect(";");
                            }
                        }
                    }
                    if (typeof left === "undefined") {
                        if (!this.match(";")) {
                            test = this.parseExpression();
                        }
                        this.expect(";");
                        if (!this.match(")")) {
                            update = this.parseExpression();
                        }
                    }
                    var body;
                    if (!this.match(")") && this.config.tolerant) {
                        this.tolerateUnexpectedToken(this.nextToken());
                        body = this.finalize(this.createNode(), new Node.EmptyStatement());
                    } else {
                        this.expect(")");
                        var previousInIteration = this.context.inIteration;
                        this.context.inIteration = true;
                        body = this.isolateCoverGrammar(this.parseStatement);
                        this.context.inIteration = previousInIteration;
                    }
                    return typeof left === "undefined" ? this.finalize(node, new Node.ForStatement(init, test, update, body)) : forIn ? this.finalize(node, new Node.ForInStatement(left, right, body)) : this.finalize(node, new Node.ForOfStatement(left, right, body));
                };
                // https://tc39.github.io/ecma262/#sec-continue-statement
                Parser.prototype.parseContinueStatement = function() {
                    var node = this.createNode();
                    this.expectKeyword("continue");
                    var label = null;
                    if (this.lookahead.type === 3 /* Identifier */  && !this.hasLineTerminator) {
                        var id = this.parseVariableIdentifier();
                        label = id;
                        var key = "$" + id.name;
                        if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
                            this.throwError(messages_1.Messages.UnknownLabel, id.name);
                        }
                    }
                    this.consumeSemicolon();
                    if (label === null && !this.context.inIteration) {
                        this.throwError(messages_1.Messages.IllegalContinue);
                    }
                    return this.finalize(node, new Node.ContinueStatement(label));
                };
                // https://tc39.github.io/ecma262/#sec-break-statement
                Parser.prototype.parseBreakStatement = function() {
                    var node = this.createNode();
                    this.expectKeyword("break");
                    var label = null;
                    if (this.lookahead.type === 3 /* Identifier */  && !this.hasLineTerminator) {
                        var id = this.parseVariableIdentifier();
                        var key = "$" + id.name;
                        if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
                            this.throwError(messages_1.Messages.UnknownLabel, id.name);
                        }
                        label = id;
                    }
                    this.consumeSemicolon();
                    if (label === null && !this.context.inIteration && !this.context.inSwitch) {
                        this.throwError(messages_1.Messages.IllegalBreak);
                    }
                    return this.finalize(node, new Node.BreakStatement(label));
                };
                // https://tc39.github.io/ecma262/#sec-return-statement
                Parser.prototype.parseReturnStatement = function() {
                    if (!this.context.inFunctionBody) {
                        this.tolerateError(messages_1.Messages.IllegalReturn);
                    }
                    var node = this.createNode();
                    this.expectKeyword("return");
                    var hasArgument = !this.match(";") && !this.match("}") && !this.hasLineTerminator && this.lookahead.type !== 2 /* EOF */  || this.lookahead.type === 8 /* StringLiteral */  || this.lookahead.type === 10 /* Template */ ;
                    var argument = hasArgument ? this.parseExpression() : null;
                    this.consumeSemicolon();
                    return this.finalize(node, new Node.ReturnStatement(argument));
                };
                // https://tc39.github.io/ecma262/#sec-with-statement
                Parser.prototype.parseWithStatement = function() {
                    if (this.context.strict) {
                        this.tolerateError(messages_1.Messages.StrictModeWith);
                    }
                    var node = this.createNode();
                    var body;
                    this.expectKeyword("with");
                    this.expect("(");
                    var object = this.parseExpression();
                    if (!this.match(")") && this.config.tolerant) {
                        this.tolerateUnexpectedToken(this.nextToken());
                        body = this.finalize(this.createNode(), new Node.EmptyStatement());
                    } else {
                        this.expect(")");
                        body = this.parseStatement();
                    }
                    return this.finalize(node, new Node.WithStatement(object, body));
                };
                // https://tc39.github.io/ecma262/#sec-switch-statement
                Parser.prototype.parseSwitchCase = function() {
                    var node = this.createNode();
                    var test;
                    if (this.matchKeyword("default")) {
                        this.nextToken();
                        test = null;
                    } else {
                        this.expectKeyword("case");
                        test = this.parseExpression();
                    }
                    this.expect(":");
                    var consequent = [];
                    while(true){
                        if (this.match("}") || this.matchKeyword("default") || this.matchKeyword("case")) {
                            break;
                        }
                        consequent.push(this.parseStatementListItem());
                    }
                    return this.finalize(node, new Node.SwitchCase(test, consequent));
                };
                Parser.prototype.parseSwitchStatement = function() {
                    var node = this.createNode();
                    this.expectKeyword("switch");
                    this.expect("(");
                    var discriminant = this.parseExpression();
                    this.expect(")");
                    var previousInSwitch = this.context.inSwitch;
                    this.context.inSwitch = true;
                    var cases = [];
                    var defaultFound = false;
                    this.expect("{");
                    while(true){
                        if (this.match("}")) {
                            break;
                        }
                        var clause = this.parseSwitchCase();
                        if (clause.test === null) {
                            if (defaultFound) {
                                this.throwError(messages_1.Messages.MultipleDefaultsInSwitch);
                            }
                            defaultFound = true;
                        }
                        cases.push(clause);
                    }
                    this.expect("}");
                    this.context.inSwitch = previousInSwitch;
                    return this.finalize(node, new Node.SwitchStatement(discriminant, cases));
                };
                // https://tc39.github.io/ecma262/#sec-labelled-statements
                Parser.prototype.parseLabelledStatement = function() {
                    var node = this.createNode();
                    var expr = this.parseExpression();
                    var statement;
                    if (expr.type === syntax_1.Syntax.Identifier && this.match(":")) {
                        this.nextToken();
                        var id = expr;
                        var key = "$" + id.name;
                        if (Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
                            this.throwError(messages_1.Messages.Redeclaration, "Label", id.name);
                        }
                        this.context.labelSet[key] = true;
                        var body = void 0;
                        if (this.matchKeyword("class")) {
                            this.tolerateUnexpectedToken(this.lookahead);
                            body = this.parseClassDeclaration();
                        } else if (this.matchKeyword("function")) {
                            var token = this.lookahead;
                            var declaration = this.parseFunctionDeclaration();
                            if (this.context.strict) {
                                this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunction);
                            } else if (declaration.generator) {
                                this.tolerateUnexpectedToken(token, messages_1.Messages.GeneratorInLegacyContext);
                            }
                            body = declaration;
                        } else {
                            body = this.parseStatement();
                        }
                        delete this.context.labelSet[key];
                        statement = new Node.LabeledStatement(id, body);
                    } else {
                        this.consumeSemicolon();
                        statement = new Node.ExpressionStatement(expr);
                    }
                    return this.finalize(node, statement);
                };
                // https://tc39.github.io/ecma262/#sec-throw-statement
                Parser.prototype.parseThrowStatement = function() {
                    var node = this.createNode();
                    this.expectKeyword("throw");
                    if (this.hasLineTerminator) {
                        this.throwError(messages_1.Messages.NewlineAfterThrow);
                    }
                    var argument = this.parseExpression();
                    this.consumeSemicolon();
                    return this.finalize(node, new Node.ThrowStatement(argument));
                };
                // https://tc39.github.io/ecma262/#sec-try-statement
                Parser.prototype.parseCatchClause = function() {
                    var node = this.createNode();
                    this.expectKeyword("catch");
                    this.expect("(");
                    if (this.match(")")) {
                        this.throwUnexpectedToken(this.lookahead);
                    }
                    var params = [];
                    var param = this.parsePattern(params);
                    var paramMap = {};
                    for(var i = 0; i < params.length; i++){
                        var key = "$" + params[i].value;
                        if (Object.prototype.hasOwnProperty.call(paramMap, key)) {
                            this.tolerateError(messages_1.Messages.DuplicateBinding, params[i].value);
                        }
                        paramMap[key] = true;
                    }
                    if (this.context.strict && param.type === syntax_1.Syntax.Identifier) {
                        if (this.scanner.isRestrictedWord(param.name)) {
                            this.tolerateError(messages_1.Messages.StrictCatchVariable);
                        }
                    }
                    this.expect(")");
                    var body = this.parseBlock();
                    return this.finalize(node, new Node.CatchClause(param, body));
                };
                Parser.prototype.parseFinallyClause = function() {
                    this.expectKeyword("finally");
                    return this.parseBlock();
                };
                Parser.prototype.parseTryStatement = function() {
                    var node = this.createNode();
                    this.expectKeyword("try");
                    var block = this.parseBlock();
                    var handler = this.matchKeyword("catch") ? this.parseCatchClause() : null;
                    var finalizer = this.matchKeyword("finally") ? this.parseFinallyClause() : null;
                    if (!handler && !finalizer) {
                        this.throwError(messages_1.Messages.NoCatchOrFinally);
                    }
                    return this.finalize(node, new Node.TryStatement(block, handler, finalizer));
                };
                // https://tc39.github.io/ecma262/#sec-debugger-statement
                Parser.prototype.parseDebuggerStatement = function() {
                    var node = this.createNode();
                    this.expectKeyword("debugger");
                    this.consumeSemicolon();
                    return this.finalize(node, new Node.DebuggerStatement());
                };
                // https://tc39.github.io/ecma262/#sec-ecmascript-language-statements-and-declarations
                Parser.prototype.parseStatement = function() {
                    var statement;
                    switch(this.lookahead.type){
                        case 1 /* BooleanLiteral */ :
                        case 5 /* NullLiteral */ :
                        case 6 /* NumericLiteral */ :
                        case 8 /* StringLiteral */ :
                        case 10 /* Template */ :
                        case 9 /* RegularExpression */ :
                            statement = this.parseExpressionStatement();
                            break;
                        case 7 /* Punctuator */ :
                            var value = this.lookahead.value;
                            if (value === "{") {
                                statement = this.parseBlock();
                            } else if (value === "(") {
                                statement = this.parseExpressionStatement();
                            } else if (value === ";") {
                                statement = this.parseEmptyStatement();
                            } else {
                                statement = this.parseExpressionStatement();
                            }
                            break;
                        case 3 /* Identifier */ :
                            statement = this.matchAsyncFunction() ? this.parseFunctionDeclaration() : this.parseLabelledStatement();
                            break;
                        case 4 /* Keyword */ :
                            switch(this.lookahead.value){
                                case "break":
                                    statement = this.parseBreakStatement();
                                    break;
                                case "continue":
                                    statement = this.parseContinueStatement();
                                    break;
                                case "debugger":
                                    statement = this.parseDebuggerStatement();
                                    break;
                                case "do":
                                    statement = this.parseDoWhileStatement();
                                    break;
                                case "for":
                                    statement = this.parseForStatement();
                                    break;
                                case "function":
                                    statement = this.parseFunctionDeclaration();
                                    break;
                                case "if":
                                    statement = this.parseIfStatement();
                                    break;
                                case "return":
                                    statement = this.parseReturnStatement();
                                    break;
                                case "switch":
                                    statement = this.parseSwitchStatement();
                                    break;
                                case "throw":
                                    statement = this.parseThrowStatement();
                                    break;
                                case "try":
                                    statement = this.parseTryStatement();
                                    break;
                                case "var":
                                    statement = this.parseVariableStatement();
                                    break;
                                case "while":
                                    statement = this.parseWhileStatement();
                                    break;
                                case "with":
                                    statement = this.parseWithStatement();
                                    break;
                                default:
                                    statement = this.parseExpressionStatement();
                                    break;
                            }
                            break;
                        default:
                            statement = this.throwUnexpectedToken(this.lookahead);
                    }
                    return statement;
                };
                // https://tc39.github.io/ecma262/#sec-function-definitions
                Parser.prototype.parseFunctionSourceElements = function() {
                    var node = this.createNode();
                    this.expect("{");
                    var body = this.parseDirectivePrologues();
                    var previousLabelSet = this.context.labelSet;
                    var previousInIteration = this.context.inIteration;
                    var previousInSwitch = this.context.inSwitch;
                    var previousInFunctionBody = this.context.inFunctionBody;
                    this.context.labelSet = {};
                    this.context.inIteration = false;
                    this.context.inSwitch = false;
                    this.context.inFunctionBody = true;
                    while(this.lookahead.type !== 2 /* EOF */ ){
                        if (this.match("}")) {
                            break;
                        }
                        body.push(this.parseStatementListItem());
                    }
                    this.expect("}");
                    this.context.labelSet = previousLabelSet;
                    this.context.inIteration = previousInIteration;
                    this.context.inSwitch = previousInSwitch;
                    this.context.inFunctionBody = previousInFunctionBody;
                    return this.finalize(node, new Node.BlockStatement(body));
                };
                Parser.prototype.validateParam = function(options, param, name) {
                    var key = "$" + name;
                    if (this.context.strict) {
                        if (this.scanner.isRestrictedWord(name)) {
                            options.stricted = param;
                            options.message = messages_1.Messages.StrictParamName;
                        }
                        if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
                            options.stricted = param;
                            options.message = messages_1.Messages.StrictParamDupe;
                        }
                    } else if (!options.firstRestricted) {
                        if (this.scanner.isRestrictedWord(name)) {
                            options.firstRestricted = param;
                            options.message = messages_1.Messages.StrictParamName;
                        } else if (this.scanner.isStrictModeReservedWord(name)) {
                            options.firstRestricted = param;
                            options.message = messages_1.Messages.StrictReservedWord;
                        } else if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
                            options.stricted = param;
                            options.message = messages_1.Messages.StrictParamDupe;
                        }
                    }
                    /* istanbul ignore next */ if (typeof Object.defineProperty === "function") {
                        Object.defineProperty(options.paramSet, key, {
                            value: true,
                            enumerable: true,
                            writable: true,
                            configurable: true
                        });
                    } else {
                        options.paramSet[key] = true;
                    }
                };
                Parser.prototype.parseRestElement = function(params) {
                    var node = this.createNode();
                    this.expect("...");
                    var arg = this.parsePattern(params);
                    if (this.match("=")) {
                        this.throwError(messages_1.Messages.DefaultRestParameter);
                    }
                    if (!this.match(")")) {
                        this.throwError(messages_1.Messages.ParameterAfterRestParameter);
                    }
                    return this.finalize(node, new Node.RestElement(arg));
                };
                Parser.prototype.parseFormalParameter = function(options) {
                    var params = [];
                    var param = this.match("...") ? this.parseRestElement(params) : this.parsePatternWithDefault(params);
                    for(var i = 0; i < params.length; i++){
                        this.validateParam(options, params[i], params[i].value);
                    }
                    options.simple = options.simple && param instanceof Node.Identifier;
                    options.params.push(param);
                };
                Parser.prototype.parseFormalParameters = function(firstRestricted) {
                    var options;
                    options = {
                        simple: true,
                        params: [],
                        firstRestricted: firstRestricted
                    };
                    this.expect("(");
                    if (!this.match(")")) {
                        options.paramSet = {};
                        while(this.lookahead.type !== 2 /* EOF */ ){
                            this.parseFormalParameter(options);
                            if (this.match(")")) {
                                break;
                            }
                            this.expect(",");
                            if (this.match(")")) {
                                break;
                            }
                        }
                    }
                    this.expect(")");
                    return {
                        simple: options.simple,
                        params: options.params,
                        stricted: options.stricted,
                        firstRestricted: options.firstRestricted,
                        message: options.message
                    };
                };
                Parser.prototype.matchAsyncFunction = function() {
                    var match = this.matchContextualKeyword("async");
                    if (match) {
                        var state = this.scanner.saveState();
                        this.scanner.scanComments();
                        var next = this.scanner.lex();
                        this.scanner.restoreState(state);
                        match = state.lineNumber === next.lineNumber && next.type === 4 /* Keyword */  && next.value === "function";
                    }
                    return match;
                };
                Parser.prototype.parseFunctionDeclaration = function(identifierIsOptional) {
                    var node = this.createNode();
                    var isAsync = this.matchContextualKeyword("async");
                    if (isAsync) {
                        this.nextToken();
                    }
                    this.expectKeyword("function");
                    var isGenerator = isAsync ? false : this.match("*");
                    if (isGenerator) {
                        this.nextToken();
                    }
                    var message;
                    var id = null;
                    var firstRestricted = null;
                    if (!identifierIsOptional || !this.match("(")) {
                        var token = this.lookahead;
                        id = this.parseVariableIdentifier();
                        if (this.context.strict) {
                            if (this.scanner.isRestrictedWord(token.value)) {
                                this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
                            }
                        } else {
                            if (this.scanner.isRestrictedWord(token.value)) {
                                firstRestricted = token;
                                message = messages_1.Messages.StrictFunctionName;
                            } else if (this.scanner.isStrictModeReservedWord(token.value)) {
                                firstRestricted = token;
                                message = messages_1.Messages.StrictReservedWord;
                            }
                        }
                    }
                    var previousAllowAwait = this.context.await;
                    var previousAllowYield = this.context.allowYield;
                    this.context.await = isAsync;
                    this.context.allowYield = !isGenerator;
                    var formalParameters = this.parseFormalParameters(firstRestricted);
                    var params = formalParameters.params;
                    var stricted = formalParameters.stricted;
                    firstRestricted = formalParameters.firstRestricted;
                    if (formalParameters.message) {
                        message = formalParameters.message;
                    }
                    var previousStrict = this.context.strict;
                    var previousAllowStrictDirective = this.context.allowStrictDirective;
                    this.context.allowStrictDirective = formalParameters.simple;
                    var body = this.parseFunctionSourceElements();
                    if (this.context.strict && firstRestricted) {
                        this.throwUnexpectedToken(firstRestricted, message);
                    }
                    if (this.context.strict && stricted) {
                        this.tolerateUnexpectedToken(stricted, message);
                    }
                    this.context.strict = previousStrict;
                    this.context.allowStrictDirective = previousAllowStrictDirective;
                    this.context.await = previousAllowAwait;
                    this.context.allowYield = previousAllowYield;
                    return isAsync ? this.finalize(node, new Node.AsyncFunctionDeclaration(id, params, body)) : this.finalize(node, new Node.FunctionDeclaration(id, params, body, isGenerator));
                };
                Parser.prototype.parseFunctionExpression = function() {
                    var node = this.createNode();
                    var isAsync = this.matchContextualKeyword("async");
                    if (isAsync) {
                        this.nextToken();
                    }
                    this.expectKeyword("function");
                    var isGenerator = isAsync ? false : this.match("*");
                    if (isGenerator) {
                        this.nextToken();
                    }
                    var message;
                    var id = null;
                    var firstRestricted;
                    var previousAllowAwait = this.context.await;
                    var previousAllowYield = this.context.allowYield;
                    this.context.await = isAsync;
                    this.context.allowYield = !isGenerator;
                    if (!this.match("(")) {
                        var token = this.lookahead;
                        id = !this.context.strict && !isGenerator && this.matchKeyword("yield") ? this.parseIdentifierName() : this.parseVariableIdentifier();
                        if (this.context.strict) {
                            if (this.scanner.isRestrictedWord(token.value)) {
                                this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
                            }
                        } else {
                            if (this.scanner.isRestrictedWord(token.value)) {
                                firstRestricted = token;
                                message = messages_1.Messages.StrictFunctionName;
                            } else if (this.scanner.isStrictModeReservedWord(token.value)) {
                                firstRestricted = token;
                                message = messages_1.Messages.StrictReservedWord;
                            }
                        }
                    }
                    var formalParameters = this.parseFormalParameters(firstRestricted);
                    var params = formalParameters.params;
                    var stricted = formalParameters.stricted;
                    firstRestricted = formalParameters.firstRestricted;
                    if (formalParameters.message) {
                        message = formalParameters.message;
                    }
                    var previousStrict = this.context.strict;
                    var previousAllowStrictDirective = this.context.allowStrictDirective;
                    this.context.allowStrictDirective = formalParameters.simple;
                    var body = this.parseFunctionSourceElements();
                    if (this.context.strict && firstRestricted) {
                        this.throwUnexpectedToken(firstRestricted, message);
                    }
                    if (this.context.strict && stricted) {
                        this.tolerateUnexpectedToken(stricted, message);
                    }
                    this.context.strict = previousStrict;
                    this.context.allowStrictDirective = previousAllowStrictDirective;
                    this.context.await = previousAllowAwait;
                    this.context.allowYield = previousAllowYield;
                    return isAsync ? this.finalize(node, new Node.AsyncFunctionExpression(id, params, body)) : this.finalize(node, new Node.FunctionExpression(id, params, body, isGenerator));
                };
                // https://tc39.github.io/ecma262/#sec-directive-prologues-and-the-use-strict-directive
                Parser.prototype.parseDirective = function() {
                    var token = this.lookahead;
                    var node = this.createNode();
                    var expr = this.parseExpression();
                    var directive = expr.type === syntax_1.Syntax.Literal ? this.getTokenRaw(token).slice(1, -1) : null;
                    this.consumeSemicolon();
                    return this.finalize(node, directive ? new Node.Directive(expr, directive) : new Node.ExpressionStatement(expr));
                };
                Parser.prototype.parseDirectivePrologues = function() {
                    var firstRestricted = null;
                    var body = [];
                    while(true){
                        var token = this.lookahead;
                        if (token.type !== 8 /* StringLiteral */ ) {
                            break;
                        }
                        var statement = this.parseDirective();
                        body.push(statement);
                        var directive = statement.directive;
                        if (typeof directive !== "string") {
                            break;
                        }
                        if (directive === "use strict") {
                            this.context.strict = true;
                            if (firstRestricted) {
                                this.tolerateUnexpectedToken(firstRestricted, messages_1.Messages.StrictOctalLiteral);
                            }
                            if (!this.context.allowStrictDirective) {
                                this.tolerateUnexpectedToken(token, messages_1.Messages.IllegalLanguageModeDirective);
                            }
                        } else {
                            if (!firstRestricted && token.octal) {
                                firstRestricted = token;
                            }
                        }
                    }
                    return body;
                };
                // https://tc39.github.io/ecma262/#sec-method-definitions
                Parser.prototype.qualifiedPropertyName = function(token) {
                    switch(token.type){
                        case 3 /* Identifier */ :
                        case 8 /* StringLiteral */ :
                        case 1 /* BooleanLiteral */ :
                        case 5 /* NullLiteral */ :
                        case 6 /* NumericLiteral */ :
                        case 4 /* Keyword */ :
                            return true;
                        case 7 /* Punctuator */ :
                            return token.value === "[";
                        default:
                            break;
                    }
                    return false;
                };
                Parser.prototype.parseGetterMethod = function() {
                    var node = this.createNode();
                    var isGenerator = false;
                    var previousAllowYield = this.context.allowYield;
                    this.context.allowYield = !isGenerator;
                    var formalParameters = this.parseFormalParameters();
                    if (formalParameters.params.length > 0) {
                        this.tolerateError(messages_1.Messages.BadGetterArity);
                    }
                    var method = this.parsePropertyMethod(formalParameters);
                    this.context.allowYield = previousAllowYield;
                    return this.finalize(node, new Node.FunctionExpression(null, formalParameters.params, method, isGenerator));
                };
                Parser.prototype.parseSetterMethod = function() {
                    var node = this.createNode();
                    var isGenerator = false;
                    var previousAllowYield = this.context.allowYield;
                    this.context.allowYield = !isGenerator;
                    var formalParameters = this.parseFormalParameters();
                    if (formalParameters.params.length !== 1) {
                        this.tolerateError(messages_1.Messages.BadSetterArity);
                    } else if (formalParameters.params[0] instanceof Node.RestElement) {
                        this.tolerateError(messages_1.Messages.BadSetterRestParameter);
                    }
                    var method = this.parsePropertyMethod(formalParameters);
                    this.context.allowYield = previousAllowYield;
                    return this.finalize(node, new Node.FunctionExpression(null, formalParameters.params, method, isGenerator));
                };
                Parser.prototype.parseGeneratorMethod = function() {
                    var node = this.createNode();
                    var isGenerator = true;
                    var previousAllowYield = this.context.allowYield;
                    this.context.allowYield = true;
                    var params = this.parseFormalParameters();
                    this.context.allowYield = false;
                    var method = this.parsePropertyMethod(params);
                    this.context.allowYield = previousAllowYield;
                    return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
                };
                // https://tc39.github.io/ecma262/#sec-generator-function-definitions
                Parser.prototype.isStartOfExpression = function() {
                    var start = true;
                    var value = this.lookahead.value;
                    switch(this.lookahead.type){
                        case 7 /* Punctuator */ :
                            start = value === "[" || value === "(" || value === "{" || value === "+" || value === "-" || value === "!" || value === "~" || value === "++" || value === "--" || value === "/" || value === "/="; // regular expression literal
                            break;
                        case 4 /* Keyword */ :
                            start = value === "class" || value === "delete" || value === "function" || value === "let" || value === "new" || value === "super" || value === "this" || value === "typeof" || value === "void" || value === "yield";
                            break;
                        default:
                            break;
                    }
                    return start;
                };
                Parser.prototype.parseYieldExpression = function() {
                    var node = this.createNode();
                    this.expectKeyword("yield");
                    var argument = null;
                    var delegate = false;
                    if (!this.hasLineTerminator) {
                        var previousAllowYield = this.context.allowYield;
                        this.context.allowYield = false;
                        delegate = this.match("*");
                        if (delegate) {
                            this.nextToken();
                            argument = this.parseAssignmentExpression();
                        } else if (this.isStartOfExpression()) {
                            argument = this.parseAssignmentExpression();
                        }
                        this.context.allowYield = previousAllowYield;
                    }
                    return this.finalize(node, new Node.YieldExpression(argument, delegate));
                };
                // https://tc39.github.io/ecma262/#sec-class-definitions
                Parser.prototype.parseClassElement = function(hasConstructor) {
                    var token = this.lookahead;
                    var node = this.createNode();
                    var kind = "";
                    var key = null;
                    var value = null;
                    var computed = false;
                    var method = false;
                    var isStatic = false;
                    var isAsync = false;
                    if (this.match("*")) {
                        this.nextToken();
                    } else {
                        computed = this.match("[");
                        key = this.parseObjectPropertyKey();
                        var id = key;
                        if (id.name === "static" && (this.qualifiedPropertyName(this.lookahead) || this.match("*"))) {
                            token = this.lookahead;
                            isStatic = true;
                            computed = this.match("[");
                            if (this.match("*")) {
                                this.nextToken();
                            } else {
                                key = this.parseObjectPropertyKey();
                            }
                        }
                        if (token.type === 3 /* Identifier */  && !this.hasLineTerminator && token.value === "async") {
                            var punctuator = this.lookahead.value;
                            if (punctuator !== ":" && punctuator !== "(" && punctuator !== "*") {
                                isAsync = true;
                                token = this.lookahead;
                                key = this.parseObjectPropertyKey();
                                if (token.type === 3 /* Identifier */  && token.value === "constructor") {
                                    this.tolerateUnexpectedToken(token, messages_1.Messages.ConstructorIsAsync);
                                }
                            }
                        }
                    }
                    var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
                    if (token.type === 3 /* Identifier */ ) {
                        if (token.value === "get" && lookaheadPropertyKey) {
                            kind = "get";
                            computed = this.match("[");
                            key = this.parseObjectPropertyKey();
                            this.context.allowYield = false;
                            value = this.parseGetterMethod();
                        } else if (token.value === "set" && lookaheadPropertyKey) {
                            kind = "set";
                            computed = this.match("[");
                            key = this.parseObjectPropertyKey();
                            value = this.parseSetterMethod();
                        }
                    } else if (token.type === 7 /* Punctuator */  && token.value === "*" && lookaheadPropertyKey) {
                        kind = "init";
                        computed = this.match("[");
                        key = this.parseObjectPropertyKey();
                        value = this.parseGeneratorMethod();
                        method = true;
                    }
                    if (!kind && key && this.match("(")) {
                        kind = "init";
                        value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
                        method = true;
                    }
                    if (!kind) {
                        this.throwUnexpectedToken(this.lookahead);
                    }
                    if (kind === "init") {
                        kind = "method";
                    }
                    if (!computed) {
                        if (isStatic && this.isPropertyKey(key, "prototype")) {
                            this.throwUnexpectedToken(token, messages_1.Messages.StaticPrototype);
                        }
                        if (!isStatic && this.isPropertyKey(key, "constructor")) {
                            if (kind !== "method" || !method || value && value.generator) {
                                this.throwUnexpectedToken(token, messages_1.Messages.ConstructorSpecialMethod);
                            }
                            if (hasConstructor.value) {
                                this.throwUnexpectedToken(token, messages_1.Messages.DuplicateConstructor);
                            } else {
                                hasConstructor.value = true;
                            }
                            kind = "constructor";
                        }
                    }
                    return this.finalize(node, new Node.MethodDefinition(key, computed, value, kind, isStatic));
                };
                Parser.prototype.parseClassElementList = function() {
                    var body = [];
                    var hasConstructor = {
                        value: false
                    };
                    this.expect("{");
                    while(!this.match("}")){
                        if (this.match(";")) {
                            this.nextToken();
                        } else {
                            body.push(this.parseClassElement(hasConstructor));
                        }
                    }
                    this.expect("}");
                    return body;
                };
                Parser.prototype.parseClassBody = function() {
                    var node = this.createNode();
                    var elementList = this.parseClassElementList();
                    return this.finalize(node, new Node.ClassBody(elementList));
                };
                Parser.prototype.parseClassDeclaration = function(identifierIsOptional) {
                    var node = this.createNode();
                    var previousStrict = this.context.strict;
                    this.context.strict = true;
                    this.expectKeyword("class");
                    var id = identifierIsOptional && this.lookahead.type !== 3 /* Identifier */  ? null : this.parseVariableIdentifier();
                    var superClass = null;
                    if (this.matchKeyword("extends")) {
                        this.nextToken();
                        superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
                    }
                    var classBody = this.parseClassBody();
                    this.context.strict = previousStrict;
                    return this.finalize(node, new Node.ClassDeclaration(id, superClass, classBody));
                };
                Parser.prototype.parseClassExpression = function() {
                    var node = this.createNode();
                    var previousStrict = this.context.strict;
                    this.context.strict = true;
                    this.expectKeyword("class");
                    var id = this.lookahead.type === 3 /* Identifier */  ? this.parseVariableIdentifier() : null;
                    var superClass = null;
                    if (this.matchKeyword("extends")) {
                        this.nextToken();
                        superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
                    }
                    var classBody = this.parseClassBody();
                    this.context.strict = previousStrict;
                    return this.finalize(node, new Node.ClassExpression(id, superClass, classBody));
                };
                // https://tc39.github.io/ecma262/#sec-scripts
                // https://tc39.github.io/ecma262/#sec-modules
                Parser.prototype.parseModule = function() {
                    this.context.strict = true;
                    this.context.isModule = true;
                    this.scanner.isModule = true;
                    var node = this.createNode();
                    var body = this.parseDirectivePrologues();
                    while(this.lookahead.type !== 2 /* EOF */ ){
                        body.push(this.parseStatementListItem());
                    }
                    return this.finalize(node, new Node.Module(body));
                };
                Parser.prototype.parseScript = function() {
                    var node = this.createNode();
                    var body = this.parseDirectivePrologues();
                    while(this.lookahead.type !== 2 /* EOF */ ){
                        body.push(this.parseStatementListItem());
                    }
                    return this.finalize(node, new Node.Script(body));
                };
                // https://tc39.github.io/ecma262/#sec-imports
                Parser.prototype.parseModuleSpecifier = function() {
                    var node = this.createNode();
                    if (this.lookahead.type !== 8 /* StringLiteral */ ) {
                        this.throwError(messages_1.Messages.InvalidModuleSpecifier);
                    }
                    var token = this.nextToken();
                    var raw = this.getTokenRaw(token);
                    return this.finalize(node, new Node.Literal(token.value, raw));
                };
                // import {<foo as bar>} ...;
                Parser.prototype.parseImportSpecifier = function() {
                    var node = this.createNode();
                    var imported;
                    var local;
                    if (this.lookahead.type === 3 /* Identifier */ ) {
                        imported = this.parseVariableIdentifier();
                        local = imported;
                        if (this.matchContextualKeyword("as")) {
                            this.nextToken();
                            local = this.parseVariableIdentifier();
                        }
                    } else {
                        imported = this.parseIdentifierName();
                        local = imported;
                        if (this.matchContextualKeyword("as")) {
                            this.nextToken();
                            local = this.parseVariableIdentifier();
                        } else {
                            this.throwUnexpectedToken(this.nextToken());
                        }
                    }
                    return this.finalize(node, new Node.ImportSpecifier(local, imported));
                };
                // {foo, bar as bas}
                Parser.prototype.parseNamedImports = function() {
                    this.expect("{");
                    var specifiers = [];
                    while(!this.match("}")){
                        specifiers.push(this.parseImportSpecifier());
                        if (!this.match("}")) {
                            this.expect(",");
                        }
                    }
                    this.expect("}");
                    return specifiers;
                };
                // import <foo> ...;
                Parser.prototype.parseImportDefaultSpecifier = function() {
                    var node = this.createNode();
                    var local = this.parseIdentifierName();
                    return this.finalize(node, new Node.ImportDefaultSpecifier(local));
                };
                // import <* as foo> ...;
                Parser.prototype.parseImportNamespaceSpecifier = function() {
                    var node = this.createNode();
                    this.expect("*");
                    if (!this.matchContextualKeyword("as")) {
                        this.throwError(messages_1.Messages.NoAsAfterImportNamespace);
                    }
                    this.nextToken();
                    var local = this.parseIdentifierName();
                    return this.finalize(node, new Node.ImportNamespaceSpecifier(local));
                };
                Parser.prototype.parseImportDeclaration = function() {
                    if (this.context.inFunctionBody) {
                        this.throwError(messages_1.Messages.IllegalImportDeclaration);
                    }
                    var node = this.createNode();
                    this.expectKeyword("import");
                    var src;
                    var specifiers = [];
                    if (this.lookahead.type === 8 /* StringLiteral */ ) {
                        // import 'foo';
                        src = this.parseModuleSpecifier();
                    } else {
                        if (this.match("{")) {
                            // import {bar}
                            specifiers = specifiers.concat(this.parseNamedImports());
                        } else if (this.match("*")) {
                            // import * as foo
                            specifiers.push(this.parseImportNamespaceSpecifier());
                        } else if (this.isIdentifierName(this.lookahead) && !this.matchKeyword("default")) {
                            // import foo
                            specifiers.push(this.parseImportDefaultSpecifier());
                            if (this.match(",")) {
                                this.nextToken();
                                if (this.match("*")) {
                                    // import foo, * as foo
                                    specifiers.push(this.parseImportNamespaceSpecifier());
                                } else if (this.match("{")) {
                                    // import foo, {bar}
                                    specifiers = specifiers.concat(this.parseNamedImports());
                                } else {
                                    this.throwUnexpectedToken(this.lookahead);
                                }
                            }
                        } else {
                            this.throwUnexpectedToken(this.nextToken());
                        }
                        if (!this.matchContextualKeyword("from")) {
                            var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
                            this.throwError(message, this.lookahead.value);
                        }
                        this.nextToken();
                        src = this.parseModuleSpecifier();
                    }
                    this.consumeSemicolon();
                    return this.finalize(node, new Node.ImportDeclaration(specifiers, src));
                };
                // https://tc39.github.io/ecma262/#sec-exports
                Parser.prototype.parseExportSpecifier = function() {
                    var node = this.createNode();
                    var local = this.parseIdentifierName();
                    var exported = local;
                    if (this.matchContextualKeyword("as")) {
                        this.nextToken();
                        exported = this.parseIdentifierName();
                    }
                    return this.finalize(node, new Node.ExportSpecifier(local, exported));
                };
                Parser.prototype.parseExportDeclaration = function() {
                    if (this.context.inFunctionBody) {
                        this.throwError(messages_1.Messages.IllegalExportDeclaration);
                    }
                    var node = this.createNode();
                    this.expectKeyword("export");
                    var exportDeclaration;
                    if (this.matchKeyword("default")) {
                        // export default ...
                        this.nextToken();
                        if (this.matchKeyword("function")) {
                            // export default function foo () {}
                            // export default function () {}
                            var declaration = this.parseFunctionDeclaration(true);
                            exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
                        } else if (this.matchKeyword("class")) {
                            // export default class foo {}
                            var declaration = this.parseClassDeclaration(true);
                            exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
                        } else if (this.matchContextualKeyword("async")) {
                            // export default async function f () {}
                            // export default async function () {}
                            // export default async x => x
                            var declaration = this.matchAsyncFunction() ? this.parseFunctionDeclaration(true) : this.parseAssignmentExpression();
                            exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
                        } else {
                            if (this.matchContextualKeyword("from")) {
                                this.throwError(messages_1.Messages.UnexpectedToken, this.lookahead.value);
                            }
                            // export default {};
                            // export default [];
                            // export default (1 + 2);
                            var declaration = this.match("{") ? this.parseObjectInitializer() : this.match("[") ? this.parseArrayInitializer() : this.parseAssignmentExpression();
                            this.consumeSemicolon();
                            exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
                        }
                    } else if (this.match("*")) {
                        // export * from 'foo';
                        this.nextToken();
                        if (!this.matchContextualKeyword("from")) {
                            var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
                            this.throwError(message, this.lookahead.value);
                        }
                        this.nextToken();
                        var src = this.parseModuleSpecifier();
                        this.consumeSemicolon();
                        exportDeclaration = this.finalize(node, new Node.ExportAllDeclaration(src));
                    } else if (this.lookahead.type === 4 /* Keyword */ ) {
                        // export var f = 1;
                        var declaration = void 0;
                        switch(this.lookahead.value){
                            case "let":
                            case "const":
                                declaration = this.parseLexicalDeclaration({
                                    inFor: false
                                });
                                break;
                            case "var":
                            case "class":
                            case "function":
                                declaration = this.parseStatementListItem();
                                break;
                            default:
                                this.throwUnexpectedToken(this.lookahead);
                        }
                        exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
                    } else if (this.matchAsyncFunction()) {
                        var declaration = this.parseFunctionDeclaration();
                        exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
                    } else {
                        var specifiers = [];
                        var source = null;
                        var isExportFromIdentifier = false;
                        this.expect("{");
                        while(!this.match("}")){
                            isExportFromIdentifier = isExportFromIdentifier || this.matchKeyword("default");
                            specifiers.push(this.parseExportSpecifier());
                            if (!this.match("}")) {
                                this.expect(",");
                            }
                        }
                        this.expect("}");
                        if (this.matchContextualKeyword("from")) {
                            // export {default} from 'foo';
                            // export {foo} from 'foo';
                            this.nextToken();
                            source = this.parseModuleSpecifier();
                            this.consumeSemicolon();
                        } else if (isExportFromIdentifier) {
                            // export {default}; // missing fromClause
                            var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
                            this.throwError(message, this.lookahead.value);
                        } else {
                            // export {foo};
                            this.consumeSemicolon();
                        }
                        exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(null, specifiers, source));
                    }
                    return exportDeclaration;
                };
                return Parser;
            }();
            exports1.Parser = Parser;
        /***/ },
        /* 9 */ /***/ function(module1, exports1) {
            "use strict";
            // Ensure the condition is true, otherwise throw an error.
            // This is only to have a better contract semantic, i.e. another safety net
            // to catch a logic error. The condition shall be fulfilled in normal case.
            // Do NOT use this to enforce a certain condition on any user input.
            Object.defineProperty(exports1, "__esModule", {
                value: true
            });
            function assert(condition, message) {
                /* istanbul ignore if */ if (!condition) {
                    throw new Error("ASSERT: " + message);
                }
            }
            exports1.assert = assert;
        /***/ },
        /* 10 */ /***/ function(module1, exports1) {
            "use strict";
            /* tslint:disable:max-classes-per-file */ Object.defineProperty(exports1, "__esModule", {
                value: true
            });
            var ErrorHandler = function() {
                function ErrorHandler() {
                    this.errors = [];
                    this.tolerant = false;
                }
                ErrorHandler.prototype.recordError = function(error) {
                    this.errors.push(error);
                };
                ErrorHandler.prototype.tolerate = function(error) {
                    if (this.tolerant) {
                        this.recordError(error);
                    } else {
                        throw error;
                    }
                };
                ErrorHandler.prototype.constructError = function(msg, column) {
                    var error = new Error(msg);
                    try {
                        throw error;
                    } catch (base) {
                        /* istanbul ignore else */ if (Object.create && Object.defineProperty) {
                            error = Object.create(base);
                            Object.defineProperty(error, "column", {
                                value: column
                            });
                        }
                    }
                    /* istanbul ignore next */ return error;
                };
                ErrorHandler.prototype.createError = function(index, line, col, description) {
                    var msg = "Line " + line + ": " + description;
                    var error = this.constructError(msg, col);
                    error.index = index;
                    error.lineNumber = line;
                    error.description = description;
                    return error;
                };
                ErrorHandler.prototype.throwError = function(index, line, col, description) {
                    throw this.createError(index, line, col, description);
                };
                ErrorHandler.prototype.tolerateError = function(index, line, col, description) {
                    var error = this.createError(index, line, col, description);
                    if (this.tolerant) {
                        this.recordError(error);
                    } else {
                        throw error;
                    }
                };
                return ErrorHandler;
            }();
            exports1.ErrorHandler = ErrorHandler;
        /***/ },
        /* 11 */ /***/ function(module1, exports1) {
            "use strict";
            Object.defineProperty(exports1, "__esModule", {
                value: true
            });
            // Error messages should be identical to V8.
            exports1.Messages = {
                BadGetterArity: "Getter must not have any formal parameters",
                BadSetterArity: "Setter must have exactly one formal parameter",
                BadSetterRestParameter: "Setter function argument must not be a rest parameter",
                ConstructorIsAsync: "Class constructor may not be an async method",
                ConstructorSpecialMethod: "Class constructor may not be an accessor",
                DeclarationMissingInitializer: "Missing initializer in %0 declaration",
                DefaultRestParameter: "Unexpected token =",
                DuplicateBinding: "Duplicate binding %0",
                DuplicateConstructor: "A class may only have one constructor",
                DuplicateProtoProperty: "Duplicate __proto__ fields are not allowed in object literals",
                ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer",
                GeneratorInLegacyContext: "Generator declarations are not allowed in legacy contexts",
                IllegalBreak: "Illegal break statement",
                IllegalContinue: "Illegal continue statement",
                IllegalExportDeclaration: "Unexpected token",
                IllegalImportDeclaration: "Unexpected token",
                IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list",
                IllegalReturn: "Illegal return statement",
                InvalidEscapedReservedWord: "Keyword must not contain escaped characters",
                InvalidHexEscapeSequence: "Invalid hexadecimal escape sequence",
                InvalidLHSInAssignment: "Invalid left-hand side in assignment",
                InvalidLHSInForIn: "Invalid left-hand side in for-in",
                InvalidLHSInForLoop: "Invalid left-hand side in for-loop",
                InvalidModuleSpecifier: "Unexpected token",
                InvalidRegExp: "Invalid regular expression",
                LetInLexicalBinding: "let is disallowed as a lexically bound name",
                MissingFromClause: "Unexpected token",
                MultipleDefaultsInSwitch: "More than one default clause in switch statement",
                NewlineAfterThrow: "Illegal newline after throw",
                NoAsAfterImportNamespace: "Unexpected token",
                NoCatchOrFinally: "Missing catch or finally after try",
                ParameterAfterRestParameter: "Rest parameter must be last formal parameter",
                Redeclaration: "%0 '%1' has already been declared",
                StaticPrototype: "Classes may not have static property named prototype",
                StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
                StrictDelete: "Delete of an unqualified identifier in strict mode.",
                StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block",
                StrictFunctionName: "Function name may not be eval or arguments in strict mode",
                StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
                StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
                StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
                StrictModeWith: "Strict mode code may not include a with statement",
                StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
                StrictParamDupe: "Strict mode function may not have duplicate parameter names",
                StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
                StrictReservedWord: "Use of future reserved word in strict mode",
                StrictVarName: "Variable name may not be eval or arguments in strict mode",
                TemplateOctalLiteral: "Octal literals are not allowed in template strings.",
                UnexpectedEOS: "Unexpected end of input",
                UnexpectedIdentifier: "Unexpected identifier",
                UnexpectedNumber: "Unexpected number",
                UnexpectedReserved: "Unexpected reserved word",
                UnexpectedString: "Unexpected string",
                UnexpectedTemplate: "Unexpected quasi %0",
                UnexpectedToken: "Unexpected token %0",
                UnexpectedTokenIllegal: "Unexpected token ILLEGAL",
                UnknownLabel: "Undefined label '%0'",
                UnterminatedRegExp: "Invalid regular expression: missing /"
            };
        /***/ },
        /* 12 */ /***/ function(module1, exports1, __nested_webpack_require_278838__) {
            "use strict";
            Object.defineProperty(exports1, "__esModule", {
                value: true
            });
            var assert_1 = __nested_webpack_require_278838__(9);
            var character_1 = __nested_webpack_require_278838__(4);
            var messages_1 = __nested_webpack_require_278838__(11);
            function hexValue(ch) {
                return "0123456789abcdef".indexOf(ch.toLowerCase());
            }
            function octalValue(ch) {
                return "01234567".indexOf(ch);
            }
            var Scanner = function() {
                function Scanner(code, handler) {
                    this.source = code;
                    this.errorHandler = handler;
                    this.trackComment = false;
                    this.isModule = false;
                    this.length = code.length;
                    this.index = 0;
                    this.lineNumber = code.length > 0 ? 1 : 0;
                    this.lineStart = 0;
                    this.curlyStack = [];
                }
                Scanner.prototype.saveState = function() {
                    return {
                        index: this.index,
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart
                    };
                };
                Scanner.prototype.restoreState = function(state) {
                    this.index = state.index;
                    this.lineNumber = state.lineNumber;
                    this.lineStart = state.lineStart;
                };
                Scanner.prototype.eof = function() {
                    return this.index >= this.length;
                };
                Scanner.prototype.throwUnexpectedToken = function(message) {
                    if (message === void 0) {
                        message = messages_1.Messages.UnexpectedTokenIllegal;
                    }
                    return this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
                };
                Scanner.prototype.tolerateUnexpectedToken = function(message) {
                    if (message === void 0) {
                        message = messages_1.Messages.UnexpectedTokenIllegal;
                    }
                    this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
                };
                // https://tc39.github.io/ecma262/#sec-comments
                Scanner.prototype.skipSingleLineComment = function(offset) {
                    var comments = [];
                    var start, loc;
                    if (this.trackComment) {
                        comments = [];
                        start = this.index - offset;
                        loc = {
                            start: {
                                line: this.lineNumber,
                                column: this.index - this.lineStart - offset
                            },
                            end: {}
                        };
                    }
                    while(!this.eof()){
                        var ch = this.source.charCodeAt(this.index);
                        ++this.index;
                        if (character_1.Character.isLineTerminator(ch)) {
                            if (this.trackComment) {
                                loc.end = {
                                    line: this.lineNumber,
                                    column: this.index - this.lineStart - 1
                                };
                                var entry = {
                                    multiLine: false,
                                    slice: [
                                        start + offset,
                                        this.index - 1
                                    ],
                                    range: [
                                        start,
                                        this.index - 1
                                    ],
                                    loc: loc
                                };
                                comments.push(entry);
                            }
                            if (ch === 13 && this.source.charCodeAt(this.index) === 10) {
                                ++this.index;
                            }
                            ++this.lineNumber;
                            this.lineStart = this.index;
                            return comments;
                        }
                    }
                    if (this.trackComment) {
                        loc.end = {
                            line: this.lineNumber,
                            column: this.index - this.lineStart
                        };
                        var entry = {
                            multiLine: false,
                            slice: [
                                start + offset,
                                this.index
                            ],
                            range: [
                                start,
                                this.index
                            ],
                            loc: loc
                        };
                        comments.push(entry);
                    }
                    return comments;
                };
                Scanner.prototype.skipMultiLineComment = function() {
                    var comments = [];
                    var start, loc;
                    if (this.trackComment) {
                        comments = [];
                        start = this.index - 2;
                        loc = {
                            start: {
                                line: this.lineNumber,
                                column: this.index - this.lineStart - 2
                            },
                            end: {}
                        };
                    }
                    while(!this.eof()){
                        var ch = this.source.charCodeAt(this.index);
                        if (character_1.Character.isLineTerminator(ch)) {
                            if (ch === 0x0D && this.source.charCodeAt(this.index + 1) === 0x0A) {
                                ++this.index;
                            }
                            ++this.lineNumber;
                            ++this.index;
                            this.lineStart = this.index;
                        } else if (ch === 0x2A) {
                            // Block comment ends with '*/'.
                            if (this.source.charCodeAt(this.index + 1) === 0x2F) {
                                this.index += 2;
                                if (this.trackComment) {
                                    loc.end = {
                                        line: this.lineNumber,
                                        column: this.index - this.lineStart
                                    };
                                    var entry = {
                                        multiLine: true,
                                        slice: [
                                            start + 2,
                                            this.index - 2
                                        ],
                                        range: [
                                            start,
                                            this.index
                                        ],
                                        loc: loc
                                    };
                                    comments.push(entry);
                                }
                                return comments;
                            }
                            ++this.index;
                        } else {
                            ++this.index;
                        }
                    }
                    // Ran off the end of the file - the whole thing is a comment
                    if (this.trackComment) {
                        loc.end = {
                            line: this.lineNumber,
                            column: this.index - this.lineStart
                        };
                        var entry = {
                            multiLine: true,
                            slice: [
                                start + 2,
                                this.index
                            ],
                            range: [
                                start,
                                this.index
                            ],
                            loc: loc
                        };
                        comments.push(entry);
                    }
                    this.tolerateUnexpectedToken();
                    return comments;
                };
                Scanner.prototype.scanComments = function() {
                    var comments;
                    if (this.trackComment) {
                        comments = [];
                    }
                    var start = this.index === 0;
                    while(!this.eof()){
                        var ch = this.source.charCodeAt(this.index);
                        if (character_1.Character.isWhiteSpace(ch)) {
                            ++this.index;
                        } else if (character_1.Character.isLineTerminator(ch)) {
                            ++this.index;
                            if (ch === 0x0D && this.source.charCodeAt(this.index) === 0x0A) {
                                ++this.index;
                            }
                            ++this.lineNumber;
                            this.lineStart = this.index;
                            start = true;
                        } else if (ch === 0x2F) {
                            ch = this.source.charCodeAt(this.index + 1);
                            if (ch === 0x2F) {
                                this.index += 2;
                                var comment = this.skipSingleLineComment(2);
                                if (this.trackComment) {
                                    comments = comments.concat(comment);
                                }
                                start = true;
                            } else if (ch === 0x2A) {
                                this.index += 2;
                                var comment = this.skipMultiLineComment();
                                if (this.trackComment) {
                                    comments = comments.concat(comment);
                                }
                            } else {
                                break;
                            }
                        } else if (start && ch === 0x2D) {
                            // U+003E is '>'
                            if (this.source.charCodeAt(this.index + 1) === 0x2D && this.source.charCodeAt(this.index + 2) === 0x3E) {
                                // '-->' is a single-line comment
                                this.index += 3;
                                var comment = this.skipSingleLineComment(3);
                                if (this.trackComment) {
                                    comments = comments.concat(comment);
                                }
                            } else {
                                break;
                            }
                        } else if (ch === 0x3C && !this.isModule) {
                            if (this.source.slice(this.index + 1, this.index + 4) === "!--") {
                                this.index += 4; // `<!--`
                                var comment = this.skipSingleLineComment(4);
                                if (this.trackComment) {
                                    comments = comments.concat(comment);
                                }
                            } else {
                                break;
                            }
                        } else {
                            break;
                        }
                    }
                    return comments;
                };
                // https://tc39.github.io/ecma262/#sec-future-reserved-words
                Scanner.prototype.isFutureReservedWord = function(id) {
                    switch(id){
                        case "enum":
                        case "export":
                        case "import":
                        case "super":
                            return true;
                        default:
                            return false;
                    }
                };
                Scanner.prototype.isStrictModeReservedWord = function(id) {
                    switch(id){
                        case "implements":
                        case "interface":
                        case "package":
                        case "private":
                        case "protected":
                        case "public":
                        case "static":
                        case "yield":
                        case "let":
                            return true;
                        default:
                            return false;
                    }
                };
                Scanner.prototype.isRestrictedWord = function(id) {
                    return id === "eval" || id === "arguments";
                };
                // https://tc39.github.io/ecma262/#sec-keywords
                Scanner.prototype.isKeyword = function(id) {
                    switch(id.length){
                        case 2:
                            return id === "if" || id === "in" || id === "do";
                        case 3:
                            return id === "var" || id === "for" || id === "new" || id === "try" || id === "let";
                        case 4:
                            return id === "this" || id === "else" || id === "case" || id === "void" || id === "with" || id === "enum";
                        case 5:
                            return id === "while" || id === "break" || id === "catch" || id === "throw" || id === "const" || id === "yield" || id === "class" || id === "super";
                        case 6:
                            return id === "return" || id === "typeof" || id === "delete" || id === "switch" || id === "export" || id === "import";
                        case 7:
                            return id === "default" || id === "finally" || id === "extends";
                        case 8:
                            return id === "function" || id === "continue" || id === "debugger";
                        case 10:
                            return id === "instanceof";
                        default:
                            return false;
                    }
                };
                Scanner.prototype.codePointAt = function(i) {
                    var cp = this.source.charCodeAt(i);
                    if (cp >= 0xD800 && cp <= 0xDBFF) {
                        var second = this.source.charCodeAt(i + 1);
                        if (second >= 0xDC00 && second <= 0xDFFF) {
                            var first = cp;
                            cp = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
                        }
                    }
                    return cp;
                };
                Scanner.prototype.scanHexEscape = function(prefix) {
                    var len = prefix === "u" ? 4 : 2;
                    var code = 0;
                    for(var i = 0; i < len; ++i){
                        if (!this.eof() && character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
                            code = code * 16 + hexValue(this.source[this.index++]);
                        } else {
                            return null;
                        }
                    }
                    return String.fromCharCode(code);
                };
                Scanner.prototype.scanUnicodeCodePointEscape = function() {
                    var ch = this.source[this.index];
                    var code = 0;
                    // At least, one hex digit is required.
                    if (ch === "}") {
                        this.throwUnexpectedToken();
                    }
                    while(!this.eof()){
                        ch = this.source[this.index++];
                        if (!character_1.Character.isHexDigit(ch.charCodeAt(0))) {
                            break;
                        }
                        code = code * 16 + hexValue(ch);
                    }
                    if (code > 0x10FFFF || ch !== "}") {
                        this.throwUnexpectedToken();
                    }
                    return character_1.Character.fromCodePoint(code);
                };
                Scanner.prototype.getIdentifier = function() {
                    var start = this.index++;
                    while(!this.eof()){
                        var ch = this.source.charCodeAt(this.index);
                        if (ch === 0x5C) {
                            // Blackslash (U+005C) marks Unicode escape sequence.
                            this.index = start;
                            return this.getComplexIdentifier();
                        } else if (ch >= 0xD800 && ch < 0xDFFF) {
                            // Need to handle surrogate pairs.
                            this.index = start;
                            return this.getComplexIdentifier();
                        }
                        if (character_1.Character.isIdentifierPart(ch)) {
                            ++this.index;
                        } else {
                            break;
                        }
                    }
                    return this.source.slice(start, this.index);
                };
                Scanner.prototype.getComplexIdentifier = function() {
                    var cp = this.codePointAt(this.index);
                    var id = character_1.Character.fromCodePoint(cp);
                    this.index += id.length;
                    // '\u' (U+005C, U+0075) denotes an escaped character.
                    var ch;
                    if (cp === 0x5C) {
                        if (this.source.charCodeAt(this.index) !== 0x75) {
                            this.throwUnexpectedToken();
                        }
                        ++this.index;
                        if (this.source[this.index] === "{") {
                            ++this.index;
                            ch = this.scanUnicodeCodePointEscape();
                        } else {
                            ch = this.scanHexEscape("u");
                            if (ch === null || ch === "\\" || !character_1.Character.isIdentifierStart(ch.charCodeAt(0))) {
                                this.throwUnexpectedToken();
                            }
                        }
                        id = ch;
                    }
                    while(!this.eof()){
                        cp = this.codePointAt(this.index);
                        if (!character_1.Character.isIdentifierPart(cp)) {
                            break;
                        }
                        ch = character_1.Character.fromCodePoint(cp);
                        id += ch;
                        this.index += ch.length;
                        // '\u' (U+005C, U+0075) denotes an escaped character.
                        if (cp === 0x5C) {
                            id = id.substr(0, id.length - 1);
                            if (this.source.charCodeAt(this.index) !== 0x75) {
                                this.throwUnexpectedToken();
                            }
                            ++this.index;
                            if (this.source[this.index] === "{") {
                                ++this.index;
                                ch = this.scanUnicodeCodePointEscape();
                            } else {
                                ch = this.scanHexEscape("u");
                                if (ch === null || ch === "\\" || !character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
                                    this.throwUnexpectedToken();
                                }
                            }
                            id += ch;
                        }
                    }
                    return id;
                };
                Scanner.prototype.octalToDecimal = function(ch) {
                    // \0 is not octal escape sequence
                    var octal = ch !== "0";
                    var code = octalValue(ch);
                    if (!this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
                        octal = true;
                        code = code * 8 + octalValue(this.source[this.index++]);
                        // 3 digits are only allowed when string starts
                        // with 0, 1, 2, 3
                        if ("0123".indexOf(ch) >= 0 && !this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
                            code = code * 8 + octalValue(this.source[this.index++]);
                        }
                    }
                    return {
                        code: code,
                        octal: octal
                    };
                };
                // https://tc39.github.io/ecma262/#sec-names-and-keywords
                Scanner.prototype.scanIdentifier = function() {
                    var type;
                    var start = this.index;
                    // Backslash (U+005C) starts an escaped character.
                    var id = this.source.charCodeAt(start) === 0x5C ? this.getComplexIdentifier() : this.getIdentifier();
                    // There is no keyword or literal with only one character.
                    // Thus, it must be an identifier.
                    if (id.length === 1) {
                        type = 3 /* Identifier */ ;
                    } else if (this.isKeyword(id)) {
                        type = 4 /* Keyword */ ;
                    } else if (id === "null") {
                        type = 5 /* NullLiteral */ ;
                    } else if (id === "true" || id === "false") {
                        type = 1 /* BooleanLiteral */ ;
                    } else {
                        type = 3 /* Identifier */ ;
                    }
                    if (type !== 3 /* Identifier */  && start + id.length !== this.index) {
                        var restore = this.index;
                        this.index = start;
                        this.tolerateUnexpectedToken(messages_1.Messages.InvalidEscapedReservedWord);
                        this.index = restore;
                    }
                    return {
                        type: type,
                        value: id,
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: start,
                        end: this.index
                    };
                };
                // https://tc39.github.io/ecma262/#sec-punctuators
                Scanner.prototype.scanPunctuator = function() {
                    var start = this.index;
                    // Check for most common single-character punctuators.
                    var str = this.source[this.index];
                    switch(str){
                        case "(":
                        case "{":
                            if (str === "{") {
                                this.curlyStack.push("{");
                            }
                            ++this.index;
                            break;
                        case ".":
                            ++this.index;
                            if (this.source[this.index] === "." && this.source[this.index + 1] === ".") {
                                // Spread operator: ...
                                this.index += 2;
                                str = "...";
                            }
                            break;
                        case "}":
                            ++this.index;
                            this.curlyStack.pop();
                            break;
                        case ")":
                        case ";":
                        case ",":
                        case "[":
                        case "]":
                        case ":":
                        case "?":
                        case "~":
                            ++this.index;
                            break;
                        default:
                            // 4-character punctuator.
                            str = this.source.substr(this.index, 4);
                            if (str === ">>>=") {
                                this.index += 4;
                            } else {
                                // 3-character punctuators.
                                str = str.substr(0, 3);
                                if (str === "===" || str === "!==" || str === ">>>" || str === "<<=" || str === ">>=" || str === "**=") {
                                    this.index += 3;
                                } else {
                                    // 2-character punctuators.
                                    str = str.substr(0, 2);
                                    if (str === "&&" || str === "||" || str === "==" || str === "!=" || str === "+=" || str === "-=" || str === "*=" || str === "/=" || str === "++" || str === "--" || str === "<<" || str === ">>" || str === "&=" || str === "|=" || str === "^=" || str === "%=" || str === "<=" || str === ">=" || str === "=>" || str === "**") {
                                        this.index += 2;
                                    } else {
                                        // 1-character punctuators.
                                        str = this.source[this.index];
                                        if ("<>=!+-*%&|^/".indexOf(str) >= 0) {
                                            ++this.index;
                                        }
                                    }
                                }
                            }
                    }
                    if (this.index === start) {
                        this.throwUnexpectedToken();
                    }
                    return {
                        type: 7 /* Punctuator */ ,
                        value: str,
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: start,
                        end: this.index
                    };
                };
                // https://tc39.github.io/ecma262/#sec-literals-numeric-literals
                Scanner.prototype.scanHexLiteral = function(start) {
                    var num = "";
                    while(!this.eof()){
                        if (!character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
                            break;
                        }
                        num += this.source[this.index++];
                    }
                    if (num.length === 0) {
                        this.throwUnexpectedToken();
                    }
                    if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
                        this.throwUnexpectedToken();
                    }
                    return {
                        type: 6 /* NumericLiteral */ ,
                        value: parseInt("0x" + num, 16),
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: start,
                        end: this.index
                    };
                };
                Scanner.prototype.scanBinaryLiteral = function(start) {
                    var num = "";
                    var ch;
                    while(!this.eof()){
                        ch = this.source[this.index];
                        if (ch !== "0" && ch !== "1") {
                            break;
                        }
                        num += this.source[this.index++];
                    }
                    if (num.length === 0) {
                        // only 0b or 0B
                        this.throwUnexpectedToken();
                    }
                    if (!this.eof()) {
                        ch = this.source.charCodeAt(this.index);
                        /* istanbul ignore else */ if (character_1.Character.isIdentifierStart(ch) || character_1.Character.isDecimalDigit(ch)) {
                            this.throwUnexpectedToken();
                        }
                    }
                    return {
                        type: 6 /* NumericLiteral */ ,
                        value: parseInt(num, 2),
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: start,
                        end: this.index
                    };
                };
                Scanner.prototype.scanOctalLiteral = function(prefix, start) {
                    var num = "";
                    var octal = false;
                    if (character_1.Character.isOctalDigit(prefix.charCodeAt(0))) {
                        octal = true;
                        num = "0" + this.source[this.index++];
                    } else {
                        ++this.index;
                    }
                    while(!this.eof()){
                        if (!character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
                            break;
                        }
                        num += this.source[this.index++];
                    }
                    if (!octal && num.length === 0) {
                        // only 0o or 0O
                        this.throwUnexpectedToken();
                    }
                    if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index)) || character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                        this.throwUnexpectedToken();
                    }
                    return {
                        type: 6 /* NumericLiteral */ ,
                        value: parseInt(num, 8),
                        octal: octal,
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: start,
                        end: this.index
                    };
                };
                Scanner.prototype.isImplicitOctalLiteral = function() {
                    // Implicit octal, unless there is a non-octal digit.
                    // (Annex B.1.1 on Numeric Literals)
                    for(var i = this.index + 1; i < this.length; ++i){
                        var ch = this.source[i];
                        if (ch === "8" || ch === "9") {
                            return false;
                        }
                        if (!character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
                            return true;
                        }
                    }
                    return true;
                };
                Scanner.prototype.scanNumericLiteral = function() {
                    var start = this.index;
                    var ch = this.source[start];
                    assert_1.assert(character_1.Character.isDecimalDigit(ch.charCodeAt(0)) || ch === ".", "Numeric literal must start with a decimal digit or a decimal point");
                    var num = "";
                    if (ch !== ".") {
                        num = this.source[this.index++];
                        ch = this.source[this.index];
                        // Hex number starts with '0x'.
                        // Octal number starts with '0'.
                        // Octal number in ES6 starts with '0o'.
                        // Binary number in ES6 starts with '0b'.
                        if (num === "0") {
                            if (ch === "x" || ch === "X") {
                                ++this.index;
                                return this.scanHexLiteral(start);
                            }
                            if (ch === "b" || ch === "B") {
                                ++this.index;
                                return this.scanBinaryLiteral(start);
                            }
                            if (ch === "o" || ch === "O") {
                                return this.scanOctalLiteral(ch, start);
                            }
                            if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
                                if (this.isImplicitOctalLiteral()) {
                                    return this.scanOctalLiteral(ch, start);
                                }
                            }
                        }
                        while(character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))){
                            num += this.source[this.index++];
                        }
                        ch = this.source[this.index];
                    }
                    if (ch === ".") {
                        num += this.source[this.index++];
                        while(character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))){
                            num += this.source[this.index++];
                        }
                        ch = this.source[this.index];
                    }
                    if (ch === "e" || ch === "E") {
                        num += this.source[this.index++];
                        ch = this.source[this.index];
                        if (ch === "+" || ch === "-") {
                            num += this.source[this.index++];
                        }
                        if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                            while(character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))){
                                num += this.source[this.index++];
                            }
                        } else {
                            this.throwUnexpectedToken();
                        }
                    }
                    if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
                        this.throwUnexpectedToken();
                    }
                    return {
                        type: 6 /* NumericLiteral */ ,
                        value: parseFloat(num),
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: start,
                        end: this.index
                    };
                };
                // https://tc39.github.io/ecma262/#sec-literals-string-literals
                Scanner.prototype.scanStringLiteral = function() {
                    var start = this.index;
                    var quote = this.source[start];
                    assert_1.assert(quote === "'" || quote === '"', "String literal must starts with a quote");
                    ++this.index;
                    var octal = false;
                    var str = "";
                    while(!this.eof()){
                        var ch = this.source[this.index++];
                        if (ch === quote) {
                            quote = "";
                            break;
                        } else if (ch === "\\") {
                            ch = this.source[this.index++];
                            if (!ch || !character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                                switch(ch){
                                    case "u":
                                        if (this.source[this.index] === "{") {
                                            ++this.index;
                                            str += this.scanUnicodeCodePointEscape();
                                        } else {
                                            var unescaped_1 = this.scanHexEscape(ch);
                                            if (unescaped_1 === null) {
                                                this.throwUnexpectedToken();
                                            }
                                            str += unescaped_1;
                                        }
                                        break;
                                    case "x":
                                        var unescaped = this.scanHexEscape(ch);
                                        if (unescaped === null) {
                                            this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
                                        }
                                        str += unescaped;
                                        break;
                                    case "n":
                                        str += "\n";
                                        break;
                                    case "r":
                                        str += "\r";
                                        break;
                                    case "t":
                                        str += "	";
                                        break;
                                    case "b":
                                        str += "\b";
                                        break;
                                    case "f":
                                        str += "\f";
                                        break;
                                    case "v":
                                        str += "\v";
                                        break;
                                    case "8":
                                    case "9":
                                        str += ch;
                                        this.tolerateUnexpectedToken();
                                        break;
                                    default:
                                        if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
                                            var octToDec = this.octalToDecimal(ch);
                                            octal = octToDec.octal || octal;
                                            str += String.fromCharCode(octToDec.code);
                                        } else {
                                            str += ch;
                                        }
                                        break;
                                }
                            } else {
                                ++this.lineNumber;
                                if (ch === "\r" && this.source[this.index] === "\n") {
                                    ++this.index;
                                }
                                this.lineStart = this.index;
                            }
                        } else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                            break;
                        } else {
                            str += ch;
                        }
                    }
                    if (quote !== "") {
                        this.index = start;
                        this.throwUnexpectedToken();
                    }
                    return {
                        type: 8 /* StringLiteral */ ,
                        value: str,
                        octal: octal,
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: start,
                        end: this.index
                    };
                };
                // https://tc39.github.io/ecma262/#sec-template-literal-lexical-components
                Scanner.prototype.scanTemplate = function() {
                    var cooked = "";
                    var terminated = false;
                    var start = this.index;
                    var head = this.source[start] === "`";
                    var tail = false;
                    var rawOffset = 2;
                    ++this.index;
                    while(!this.eof()){
                        var ch = this.source[this.index++];
                        if (ch === "`") {
                            rawOffset = 1;
                            tail = true;
                            terminated = true;
                            break;
                        } else if (ch === "$") {
                            if (this.source[this.index] === "{") {
                                this.curlyStack.push("${");
                                ++this.index;
                                terminated = true;
                                break;
                            }
                            cooked += ch;
                        } else if (ch === "\\") {
                            ch = this.source[this.index++];
                            if (!character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                                switch(ch){
                                    case "n":
                                        cooked += "\n";
                                        break;
                                    case "r":
                                        cooked += "\r";
                                        break;
                                    case "t":
                                        cooked += "	";
                                        break;
                                    case "u":
                                        if (this.source[this.index] === "{") {
                                            ++this.index;
                                            cooked += this.scanUnicodeCodePointEscape();
                                        } else {
                                            var restore = this.index;
                                            var unescaped_2 = this.scanHexEscape(ch);
                                            if (unescaped_2 !== null) {
                                                cooked += unescaped_2;
                                            } else {
                                                this.index = restore;
                                                cooked += ch;
                                            }
                                        }
                                        break;
                                    case "x":
                                        var unescaped = this.scanHexEscape(ch);
                                        if (unescaped === null) {
                                            this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
                                        }
                                        cooked += unescaped;
                                        break;
                                    case "b":
                                        cooked += "\b";
                                        break;
                                    case "f":
                                        cooked += "\f";
                                        break;
                                    case "v":
                                        cooked += "\v";
                                        break;
                                    default:
                                        if (ch === "0") {
                                            if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                                                // Illegal: \01 \02 and so on
                                                this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
                                            }
                                            cooked += "\x00";
                                        } else if (character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
                                            // Illegal: \1 \2
                                            this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
                                        } else {
                                            cooked += ch;
                                        }
                                        break;
                                }
                            } else {
                                ++this.lineNumber;
                                if (ch === "\r" && this.source[this.index] === "\n") {
                                    ++this.index;
                                }
                                this.lineStart = this.index;
                            }
                        } else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                            ++this.lineNumber;
                            if (ch === "\r" && this.source[this.index] === "\n") {
                                ++this.index;
                            }
                            this.lineStart = this.index;
                            cooked += "\n";
                        } else {
                            cooked += ch;
                        }
                    }
                    if (!terminated) {
                        this.throwUnexpectedToken();
                    }
                    if (!head) {
                        this.curlyStack.pop();
                    }
                    return {
                        type: 10 /* Template */ ,
                        value: this.source.slice(start + 1, this.index - rawOffset),
                        cooked: cooked,
                        head: head,
                        tail: tail,
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: start,
                        end: this.index
                    };
                };
                // https://tc39.github.io/ecma262/#sec-literals-regular-expression-literals
                Scanner.prototype.testRegExp = function(pattern, flags) {
                    // The BMP character to use as a replacement for astral symbols when
                    // translating an ES6 "u"-flagged pattern to an ES5-compatible
                    // approximation.
                    // Note: replacing with '\uFFFF' enables false positives in unlikely
                    // scenarios. For example, `[\u{1044f}-\u{10440}]` is an invalid
                    // pattern that would not be detected by this substitution.
                    var astralSubstitute = "￿";
                    var tmp = pattern;
                    var self = this;
                    if (flags.indexOf("u") >= 0) {
                        tmp = tmp.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function($0, $1, $2) {
                            var codePoint = parseInt($1 || $2, 16);
                            if (codePoint > 0x10FFFF) {
                                self.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
                            }
                            if (codePoint <= 0xFFFF) {
                                return String.fromCharCode(codePoint);
                            }
                            return astralSubstitute;
                        }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, astralSubstitute);
                    }
                    // First, detect invalid regular expressions.
                    try {
                        RegExp(tmp);
                    } catch (e) {
                        this.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
                    }
                    // Return a regular expression object for this pattern-flag pair, or
                    // `null` in case the current environment doesn't support the flags it
                    // uses.
                    try {
                        return new RegExp(pattern, flags);
                    } catch (exception) {
                        /* istanbul ignore next */ return null;
                    }
                };
                Scanner.prototype.scanRegExpBody = function() {
                    var ch = this.source[this.index];
                    assert_1.assert(ch === "/", "Regular expression literal must start with a slash");
                    var str = this.source[this.index++];
                    var classMarker = false;
                    var terminated = false;
                    while(!this.eof()){
                        ch = this.source[this.index++];
                        str += ch;
                        if (ch === "\\") {
                            ch = this.source[this.index++];
                            // https://tc39.github.io/ecma262/#sec-literals-regular-expression-literals
                            if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                                this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
                            }
                            str += ch;
                        } else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                            this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
                        } else if (classMarker) {
                            if (ch === "]") {
                                classMarker = false;
                            }
                        } else {
                            if (ch === "/") {
                                terminated = true;
                                break;
                            } else if (ch === "[") {
                                classMarker = true;
                            }
                        }
                    }
                    if (!terminated) {
                        this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
                    }
                    // Exclude leading and trailing slash.
                    return str.substr(1, str.length - 2);
                };
                Scanner.prototype.scanRegExpFlags = function() {
                    var str = "";
                    var flags = "";
                    while(!this.eof()){
                        var ch = this.source[this.index];
                        if (!character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
                            break;
                        }
                        ++this.index;
                        if (ch === "\\" && !this.eof()) {
                            ch = this.source[this.index];
                            if (ch === "u") {
                                ++this.index;
                                var restore = this.index;
                                var char = this.scanHexEscape("u");
                                if (char !== null) {
                                    flags += char;
                                    for(str += "\\u"; restore < this.index; ++restore){
                                        str += this.source[restore];
                                    }
                                } else {
                                    this.index = restore;
                                    flags += "u";
                                    str += "\\u";
                                }
                                this.tolerateUnexpectedToken();
                            } else {
                                str += "\\";
                                this.tolerateUnexpectedToken();
                            }
                        } else {
                            flags += ch;
                            str += ch;
                        }
                    }
                    return flags;
                };
                Scanner.prototype.scanRegExp = function() {
                    var start = this.index;
                    var pattern = this.scanRegExpBody();
                    var flags = this.scanRegExpFlags();
                    var value = this.testRegExp(pattern, flags);
                    return {
                        type: 9 /* RegularExpression */ ,
                        value: "",
                        pattern: pattern,
                        flags: flags,
                        regex: value,
                        lineNumber: this.lineNumber,
                        lineStart: this.lineStart,
                        start: start,
                        end: this.index
                    };
                };
                Scanner.prototype.lex = function() {
                    if (this.eof()) {
                        return {
                            type: 2 /* EOF */ ,
                            value: "",
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: this.index,
                            end: this.index
                        };
                    }
                    var cp = this.source.charCodeAt(this.index);
                    if (character_1.Character.isIdentifierStart(cp)) {
                        return this.scanIdentifier();
                    }
                    // Very common: ( and ) and ;
                    if (cp === 0x28 || cp === 0x29 || cp === 0x3B) {
                        return this.scanPunctuator();
                    }
                    // String literal starts with single quote (U+0027) or double quote (U+0022).
                    if (cp === 0x27 || cp === 0x22) {
                        return this.scanStringLiteral();
                    }
                    // Dot (.) U+002E can also start a floating-point number, hence the need
                    // to check the next character.
                    if (cp === 0x2E) {
                        if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1))) {
                            return this.scanNumericLiteral();
                        }
                        return this.scanPunctuator();
                    }
                    if (character_1.Character.isDecimalDigit(cp)) {
                        return this.scanNumericLiteral();
                    }
                    // Template literals start with ` (U+0060) for template head
                    // or } (U+007D) for template middle or template tail.
                    if (cp === 0x60 || cp === 0x7D && this.curlyStack[this.curlyStack.length - 1] === "${") {
                        return this.scanTemplate();
                    }
                    // Possible identifier start in a surrogate pair.
                    if (cp >= 0xD800 && cp < 0xDFFF) {
                        if (character_1.Character.isIdentifierStart(this.codePointAt(this.index))) {
                            return this.scanIdentifier();
                        }
                    }
                    return this.scanPunctuator();
                };
                return Scanner;
            }();
            exports1.Scanner = Scanner;
        /***/ },
        /* 13 */ /***/ function(module1, exports1) {
            "use strict";
            Object.defineProperty(exports1, "__esModule", {
                value: true
            });
            exports1.TokenName = {};
            exports1.TokenName[1 /* BooleanLiteral */ ] = "Boolean";
            exports1.TokenName[2 /* EOF */ ] = "<end>";
            exports1.TokenName[3 /* Identifier */ ] = "Identifier";
            exports1.TokenName[4 /* Keyword */ ] = "Keyword";
            exports1.TokenName[5 /* NullLiteral */ ] = "Null";
            exports1.TokenName[6 /* NumericLiteral */ ] = "Numeric";
            exports1.TokenName[7 /* Punctuator */ ] = "Punctuator";
            exports1.TokenName[8 /* StringLiteral */ ] = "String";
            exports1.TokenName[9 /* RegularExpression */ ] = "RegularExpression";
            exports1.TokenName[10 /* Template */ ] = "Template";
        /***/ },
        /* 14 */ /***/ function(module1, exports1) {
            "use strict";
            // Generated by generate-xhtml-entities.js. DO NOT MODIFY!
            Object.defineProperty(exports1, "__esModule", {
                value: true
            });
            exports1.XHTMLEntities = {
                quot: '"',
                amp: "&",
                apos: "'",
                gt: ">",
                nbsp: "\xa0",
                iexcl: "\xa1",
                cent: "\xa2",
                pound: "\xa3",
                curren: "\xa4",
                yen: "\xa5",
                brvbar: "\xa6",
                sect: "\xa7",
                uml: "\xa8",
                copy: "\xa9",
                ordf: "\xaa",
                laquo: "\xab",
                not: "\xac",
                shy: "\xad",
                reg: "\xae",
                macr: "\xaf",
                deg: "\xb0",
                plusmn: "\xb1",
                sup2: "\xb2",
                sup3: "\xb3",
                acute: "\xb4",
                micro: "\xb5",
                para: "\xb6",
                middot: "\xb7",
                cedil: "\xb8",
                sup1: "\xb9",
                ordm: "\xba",
                raquo: "\xbb",
                frac14: "\xbc",
                frac12: "\xbd",
                frac34: "\xbe",
                iquest: "\xbf",
                Agrave: "\xc0",
                Aacute: "\xc1",
                Acirc: "\xc2",
                Atilde: "\xc3",
                Auml: "\xc4",
                Aring: "\xc5",
                AElig: "\xc6",
                Ccedil: "\xc7",
                Egrave: "\xc8",
                Eacute: "\xc9",
                Ecirc: "\xca",
                Euml: "\xcb",
                Igrave: "\xcc",
                Iacute: "\xcd",
                Icirc: "\xce",
                Iuml: "\xcf",
                ETH: "\xd0",
                Ntilde: "\xd1",
                Ograve: "\xd2",
                Oacute: "\xd3",
                Ocirc: "\xd4",
                Otilde: "\xd5",
                Ouml: "\xd6",
                times: "\xd7",
                Oslash: "\xd8",
                Ugrave: "\xd9",
                Uacute: "\xda",
                Ucirc: "\xdb",
                Uuml: "\xdc",
                Yacute: "\xdd",
                THORN: "\xde",
                szlig: "\xdf",
                agrave: "\xe0",
                aacute: "\xe1",
                acirc: "\xe2",
                atilde: "\xe3",
                auml: "\xe4",
                aring: "\xe5",
                aelig: "\xe6",
                ccedil: "\xe7",
                egrave: "\xe8",
                eacute: "\xe9",
                ecirc: "\xea",
                euml: "\xeb",
                igrave: "\xec",
                iacute: "\xed",
                icirc: "\xee",
                iuml: "\xef",
                eth: "\xf0",
                ntilde: "\xf1",
                ograve: "\xf2",
                oacute: "\xf3",
                ocirc: "\xf4",
                otilde: "\xf5",
                ouml: "\xf6",
                divide: "\xf7",
                oslash: "\xf8",
                ugrave: "\xf9",
                uacute: "\xfa",
                ucirc: "\xfb",
                uuml: "\xfc",
                yacute: "\xfd",
                thorn: "\xfe",
                yuml: "\xff",
                OElig: "Œ",
                oelig: "œ",
                Scaron: "Š",
                scaron: "š",
                Yuml: "Ÿ",
                fnof: "ƒ",
                circ: "ˆ",
                tilde: "˜",
                Alpha: "Α",
                Beta: "Β",
                Gamma: "Γ",
                Delta: "Δ",
                Epsilon: "Ε",
                Zeta: "Ζ",
                Eta: "Η",
                Theta: "Θ",
                Iota: "Ι",
                Kappa: "Κ",
                Lambda: "Λ",
                Mu: "Μ",
                Nu: "Ν",
                Xi: "Ξ",
                Omicron: "Ο",
                Pi: "Π",
                Rho: "Ρ",
                Sigma: "Σ",
                Tau: "Τ",
                Upsilon: "Υ",
                Phi: "Φ",
                Chi: "Χ",
                Psi: "Ψ",
                Omega: "Ω",
                alpha: "α",
                beta: "β",
                gamma: "γ",
                delta: "δ",
                epsilon: "ε",
                zeta: "ζ",
                eta: "η",
                theta: "θ",
                iota: "ι",
                kappa: "κ",
                lambda: "λ",
                mu: "μ",
                nu: "ν",
                xi: "ξ",
                omicron: "ο",
                pi: "π",
                rho: "ρ",
                sigmaf: "ς",
                sigma: "σ",
                tau: "τ",
                upsilon: "υ",
                phi: "φ",
                chi: "χ",
                psi: "ψ",
                omega: "ω",
                thetasym: "ϑ",
                upsih: "ϒ",
                piv: "ϖ",
                ensp: " ",
                emsp: " ",
                thinsp: " ",
                zwnj: "‌",
                zwj: "‍",
                lrm: "‎",
                rlm: "‏",
                ndash: "–",
                mdash: "—",
                lsquo: "‘",
                rsquo: "’",
                sbquo: "‚",
                ldquo: "“",
                rdquo: "”",
                bdquo: "„",
                dagger: "†",
                Dagger: "‡",
                bull: "•",
                hellip: "…",
                permil: "‰",
                prime: "′",
                Prime: "″",
                lsaquo: "‹",
                rsaquo: "›",
                oline: "‾",
                frasl: "⁄",
                euro: "€",
                image: "ℑ",
                weierp: "℘",
                real: "ℜ",
                trade: "™",
                alefsym: "ℵ",
                larr: "←",
                uarr: "↑",
                rarr: "→",
                darr: "↓",
                harr: "↔",
                crarr: "↵",
                lArr: "⇐",
                uArr: "⇑",
                rArr: "⇒",
                dArr: "⇓",
                hArr: "⇔",
                forall: "∀",
                part: "∂",
                exist: "∃",
                empty: "∅",
                nabla: "∇",
                isin: "∈",
                notin: "∉",
                ni: "∋",
                prod: "∏",
                sum: "∑",
                minus: "−",
                lowast: "∗",
                radic: "√",
                prop: "∝",
                infin: "∞",
                ang: "∠",
                and: "∧",
                or: "∨",
                cap: "∩",
                cup: "∪",
                int: "∫",
                there4: "∴",
                sim: "∼",
                cong: "≅",
                asymp: "≈",
                ne: "≠",
                equiv: "≡",
                le: "≤",
                ge: "≥",
                sub: "⊂",
                sup: "⊃",
                nsub: "⊄",
                sube: "⊆",
                supe: "⊇",
                oplus: "⊕",
                otimes: "⊗",
                perp: "⊥",
                sdot: "⋅",
                lceil: "⌈",
                rceil: "⌉",
                lfloor: "⌊",
                rfloor: "⌋",
                loz: "◊",
                spades: "♠",
                clubs: "♣",
                hearts: "♥",
                diams: "♦",
                lang: "⟨",
                rang: "⟩"
            };
        /***/ },
        /* 15 */ /***/ function(module1, exports1, __nested_webpack_require_343122__) {
            "use strict";
            Object.defineProperty(exports1, "__esModule", {
                value: true
            });
            var error_handler_1 = __nested_webpack_require_343122__(10);
            var scanner_1 = __nested_webpack_require_343122__(12);
            var token_1 = __nested_webpack_require_343122__(13);
            var Reader = function() {
                function Reader() {
                    this.values = [];
                    this.curly = this.paren = -1;
                }
                // A function following one of those tokens is an expression.
                Reader.prototype.beforeFunctionExpression = function(t) {
                    return [
                        "(",
                        "{",
                        "[",
                        "in",
                        "typeof",
                        "instanceof",
                        "new",
                        "return",
                        "case",
                        "delete",
                        "throw",
                        "void",
                        // assignment operators
                        "=",
                        "+=",
                        "-=",
                        "*=",
                        "**=",
                        "/=",
                        "%=",
                        "<<=",
                        ">>=",
                        ">>>=",
                        "&=",
                        "|=",
                        "^=",
                        ",",
                        // binary/unary operators
                        "+",
                        "-",
                        "*",
                        "**",
                        "/",
                        "%",
                        "++",
                        "--",
                        "<<",
                        ">>",
                        ">>>",
                        "&",
                        "|",
                        "^",
                        "!",
                        "~",
                        "&&",
                        "||",
                        "?",
                        ":",
                        "===",
                        "==",
                        ">=",
                        "<=",
                        "<",
                        ">",
                        "!=",
                        "!=="
                    ].indexOf(t) >= 0;
                };
                // Determine if forward slash (/) is an operator or part of a regular expression
                // https://github.com/mozilla/sweet.js/wiki/design
                Reader.prototype.isRegexStart = function() {
                    var previous = this.values[this.values.length - 1];
                    var regex = previous !== null;
                    switch(previous){
                        case "this":
                        case "]":
                            regex = false;
                            break;
                        case ")":
                            var keyword = this.values[this.paren - 1];
                            regex = keyword === "if" || keyword === "while" || keyword === "for" || keyword === "with";
                            break;
                        case "}":
                            // Dividing a function by anything makes little sense,
                            // but we have to check for that.
                            regex = false;
                            if (this.values[this.curly - 3] === "function") {
                                // Anonymous function, e.g. function(){} /42
                                var check = this.values[this.curly - 4];
                                regex = check ? !this.beforeFunctionExpression(check) : false;
                            } else if (this.values[this.curly - 4] === "function") {
                                // Named function, e.g. function f(){} /42/
                                var check = this.values[this.curly - 5];
                                regex = check ? !this.beforeFunctionExpression(check) : true;
                            }
                            break;
                        default:
                            break;
                    }
                    return regex;
                };
                Reader.prototype.push = function(token) {
                    if (token.type === 7 /* Punctuator */  || token.type === 4 /* Keyword */ ) {
                        if (token.value === "{") {
                            this.curly = this.values.length;
                        } else if (token.value === "(") {
                            this.paren = this.values.length;
                        }
                        this.values.push(token.value);
                    } else {
                        this.values.push(null);
                    }
                };
                return Reader;
            }();
            var Tokenizer = function() {
                function Tokenizer(code, config) {
                    this.errorHandler = new error_handler_1.ErrorHandler();
                    this.errorHandler.tolerant = config ? typeof config.tolerant === "boolean" && config.tolerant : false;
                    this.scanner = new scanner_1.Scanner(code, this.errorHandler);
                    this.scanner.trackComment = config ? typeof config.comment === "boolean" && config.comment : false;
                    this.trackRange = config ? typeof config.range === "boolean" && config.range : false;
                    this.trackLoc = config ? typeof config.loc === "boolean" && config.loc : false;
                    this.buffer = [];
                    this.reader = new Reader();
                }
                Tokenizer.prototype.errors = function() {
                    return this.errorHandler.errors;
                };
                Tokenizer.prototype.getNextToken = function() {
                    if (this.buffer.length === 0) {
                        var comments = this.scanner.scanComments();
                        if (this.scanner.trackComment) {
                            for(var i = 0; i < comments.length; ++i){
                                var e = comments[i];
                                var value = this.scanner.source.slice(e.slice[0], e.slice[1]);
                                var comment = {
                                    type: e.multiLine ? "BlockComment" : "LineComment",
                                    value: value
                                };
                                if (this.trackRange) {
                                    comment.range = e.range;
                                }
                                if (this.trackLoc) {
                                    comment.loc = e.loc;
                                }
                                this.buffer.push(comment);
                            }
                        }
                        if (!this.scanner.eof()) {
                            var loc = void 0;
                            if (this.trackLoc) {
                                loc = {
                                    start: {
                                        line: this.scanner.lineNumber,
                                        column: this.scanner.index - this.scanner.lineStart
                                    },
                                    end: {}
                                };
                            }
                            var startRegex = this.scanner.source[this.scanner.index] === "/" && this.reader.isRegexStart();
                            var token = startRegex ? this.scanner.scanRegExp() : this.scanner.lex();
                            this.reader.push(token);
                            var entry = {
                                type: token_1.TokenName[token.type],
                                value: this.scanner.source.slice(token.start, token.end)
                            };
                            if (this.trackRange) {
                                entry.range = [
                                    token.start,
                                    token.end
                                ];
                            }
                            if (this.trackLoc) {
                                loc.end = {
                                    line: this.scanner.lineNumber,
                                    column: this.scanner.index - this.scanner.lineStart
                                };
                                entry.loc = loc;
                            }
                            if (token.type === 9 /* RegularExpression */ ) {
                                var pattern = token.pattern;
                                var flags = token.flags;
                                entry.regex = {
                                    pattern: pattern,
                                    flags: flags
                                };
                            }
                            this.buffer.push(entry);
                        }
                    }
                    return this.buffer.shift();
                };
                return Tokenizer;
            }();
            exports1.Tokenizer = Tokenizer;
        /***/ }
    ]);
});
;


/***/ }),

/***/ 1306:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isObject = __webpack_require__(5674);
module.exports = function extend(o /*, objects*/ ) {
    if (!isObject(o)) {
        o = {};
    }
    var len = arguments.length;
    for(var i = 1; i < len; i++){
        var obj = arguments[i];
        if (isObject(obj)) {
            assign(o, obj);
        }
    }
    return o;
};
function assign(a, b) {
    for(var key in b){
        if (hasOwn(b, key)) {
            a[key] = b[key];
        }
    }
}
/**
 * Returns true if the given `key` is an own property of `obj`.
 */ function hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}


/***/ }),

/***/ 6136:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const fs = __webpack_require__(7147);
const sections = __webpack_require__(5482);
const defaults = __webpack_require__(3201);
const stringify = __webpack_require__(237);
const excerpt = __webpack_require__(1587);
const engines = __webpack_require__(7068);
const toFile = __webpack_require__(6526);
const parse = __webpack_require__(7572);
const utils = __webpack_require__(6312);
/**
 * Takes a string or object with `content` property, extracts
 * and parses front-matter from the string, then returns an object
 * with `data`, `content` and other [useful properties](#returned-object).
 *
 * ```js
 * const matter = require('gray-matter');
 * console.log(matter('---\ntitle: Home\n---\nOther stuff'));
 * //=> { data: { title: 'Home'}, content: 'Other stuff' }
 * ```
 * @param {Object|String} `input` String, or object with `content` string
 * @param {Object} `options`
 * @return {Object}
 * @api public
 */ function matter(input, options) {
    if (input === "") {
        return {
            data: {},
            content: input,
            excerpt: "",
            orig: input
        };
    }
    let file = toFile(input);
    const cached = matter.cache[file.content];
    if (!options) {
        if (cached) {
            file = Object.assign({}, cached);
            file.orig = cached.orig;
            return file;
        }
        // only cache if there are no options passed. if we cache when options
        // are passed, we would need to also cache options values, which would
        // negate any performance benefits of caching
        matter.cache[file.content] = file;
    }
    return parseMatter(file, options);
}
/**
 * Parse front matter
 */ function parseMatter(file, options) {
    const opts = defaults(options);
    const open = opts.delimiters[0];
    const close = "\n" + opts.delimiters[1];
    let str = file.content;
    if (opts.language) {
        file.language = opts.language;
    }
    // get the length of the opening delimiter
    const openLen = open.length;
    if (!utils.startsWith(str, open, openLen)) {
        excerpt(file, opts);
        return file;
    }
    // if the next character after the opening delimiter is
    // a character from the delimiter, then it's not a front-
    // matter delimiter
    if (str.charAt(openLen) === open.slice(-1)) {
        return file;
    }
    // strip the opening delimiter
    str = str.slice(openLen);
    const len = str.length;
    // use the language defined after first delimiter, if it exists
    const language = matter.language(str, opts);
    if (language.name) {
        file.language = language.name;
        str = str.slice(language.raw.length);
    }
    // get the index of the closing delimiter
    let closeIndex = str.indexOf(close);
    if (closeIndex === -1) {
        closeIndex = len;
    }
    // get the raw front-matter block
    file.matter = str.slice(0, closeIndex);
    const block = file.matter.replace(/^\s*#[^\n]+/gm, "").trim();
    if (block === "") {
        file.isEmpty = true;
        file.empty = file.content;
        file.data = {};
    } else {
        // create file.data by parsing the raw file.matter block
        file.data = parse(file.language, file.matter, opts);
    }
    // update file.content
    if (closeIndex === len) {
        file.content = "";
    } else {
        file.content = str.slice(closeIndex + close.length);
        if (file.content[0] === "\r") {
            file.content = file.content.slice(1);
        }
        if (file.content[0] === "\n") {
            file.content = file.content.slice(1);
        }
    }
    excerpt(file, opts);
    if (opts.sections === true || typeof opts.section === "function") {
        sections(file, opts.section);
    }
    return file;
}
/**
 * Expose engines
 */ matter.engines = engines;
/**
 * Stringify an object to YAML or the specified language, and
 * append it to the given string. By default, only YAML and JSON
 * can be stringified. See the [engines](#engines) section to learn
 * how to stringify other languages.
 *
 * ```js
 * console.log(matter.stringify('foo bar baz', {title: 'Home'}));
 * // results in:
 * // ---
 * // title: Home
 * // ---
 * // foo bar baz
 * ```
 * @param {String|Object} `file` The content string to append to stringified front-matter, or a file object with `file.content` string.
 * @param {Object} `data` Front matter to stringify.
 * @param {Object} `options` [Options](#options) to pass to gray-matter and [js-yaml].
 * @return {String} Returns a string created by wrapping stringified yaml with delimiters, and appending that to the given string.
 * @api public
 */ matter.stringify = function(file, data, options) {
    if (typeof file === "string") file = matter(file, options);
    return stringify(file, data, options);
};
/**
 * Synchronously read a file from the file system and parse
 * front matter. Returns the same object as the [main function](#matter).
 *
 * ```js
 * const file = matter.read('./content/blog-post.md');
 * ```
 * @param {String} `filepath` file path of the file to read.
 * @param {Object} `options` [Options](#options) to pass to gray-matter.
 * @return {Object} Returns [an object](#returned-object) with `data` and `content`
 * @api public
 */ matter.read = function(filepath, options) {
    const str = fs.readFileSync(filepath, "utf8");
    const file = matter(str, options);
    file.path = filepath;
    return file;
};
/**
 * Returns true if the given `string` has front matter.
 * @param  {String} `string`
 * @param  {Object} `options`
 * @return {Boolean} True if front matter exists.
 * @api public
 */ matter.test = function(str, options) {
    return utils.startsWith(str, defaults(options).delimiters[0]);
};
/**
 * Detect the language to use, if one is defined after the
 * first front-matter delimiter.
 * @param  {String} `string`
 * @param  {Object} `options`
 * @return {Object} Object with `raw` (actual language string), and `name`, the language with whitespace trimmed
 */ matter.language = function(str, options) {
    const opts = defaults(options);
    const open = opts.delimiters[0];
    if (matter.test(str)) {
        str = str.slice(open.length);
    }
    const language = str.slice(0, str.search(/\r?\n/));
    return {
        raw: language,
        name: language ? language.trim() : ""
    };
};
/**
 * Expose `matter`
 */ matter.cache = {};
matter.clearCache = function() {
    matter.cache = {};
};
module.exports = matter;


/***/ }),

/***/ 3201:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const engines = __webpack_require__(7068);
const utils = __webpack_require__(6312);
module.exports = function(options) {
    const opts = Object.assign({}, options);
    // ensure that delimiters are an array
    opts.delimiters = utils.arrayify(opts.delims || opts.delimiters || "---");
    if (opts.delimiters.length === 1) {
        opts.delimiters.push(opts.delimiters[0]);
    }
    opts.language = (opts.language || opts.lang || "yaml").toLowerCase();
    opts.engines = Object.assign({}, engines, opts.parsers, opts.engines);
    return opts;
};


/***/ }),

/***/ 1829:
/***/ ((module) => {


module.exports = function(name, options) {
    let engine = options.engines[name] || options.engines[aliase(name)];
    if (typeof engine === "undefined") {
        throw new Error('gray-matter engine "' + name + '" is not registered');
    }
    if (typeof engine === "function") {
        engine = {
            parse: engine
        };
    }
    return engine;
};
function aliase(name) {
    switch(name.toLowerCase()){
        case "js":
        case "javascript":
            return "javascript";
        case "coffee":
        case "coffeescript":
        case "cson":
            return "coffee";
        case "yaml":
        case "yml":
            return "yaml";
        default:
            {
                return name;
            }
    }
}


/***/ }),

/***/ 7068:
/***/ ((module, exports, __webpack_require__) => {


const yaml = __webpack_require__(6287);
/**
 * Default engines
 */ const engines = exports = module.exports;
/**
 * YAML
 */ engines.yaml = {
    parse: yaml.safeLoad.bind(yaml),
    stringify: yaml.safeDump.bind(yaml)
};
/**
 * JSON
 */ engines.json = {
    parse: JSON.parse.bind(JSON),
    stringify: function(obj1, options1) {
        const opts1 = Object.assign({
            replacer: null,
            space: 2
        }, options1);
        return JSON.stringify(obj1, opts1.replacer, opts1.space);
    }
};
/**
 * JavaScript
 */ engines.javascript = {
    parse: function parse(str, options, wrap) {
        /* eslint no-eval: 0 */ try {
            if (wrap !== false) {
                str = "(function() {\nreturn " + str.trim() + ";\n}());";
            }
            return eval(str) || {};
        } catch (err) {
            if (wrap !== false && /(unexpected|identifier)/i.test(err.message)) {
                return parse(str, options, false);
            }
            throw new SyntaxError(err);
        }
    },
    stringify: function() {
        throw new Error("stringifying JavaScript is not supported");
    }
};


/***/ }),

/***/ 1587:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const defaults = __webpack_require__(3201);
module.exports = function(file, options) {
    const opts = defaults(options);
    if (file.data == null) {
        file.data = {};
    }
    if (typeof opts.excerpt === "function") {
        return opts.excerpt(file, opts);
    }
    const sep = file.data.excerpt_separator || opts.excerpt_separator;
    if (sep == null && (opts.excerpt === false || opts.excerpt == null)) {
        return file;
    }
    const delimiter = typeof opts.excerpt === "string" ? opts.excerpt : sep || opts.delimiters[0];
    // if enabled, get the excerpt defined after front-matter
    const idx = file.content.indexOf(delimiter);
    if (idx !== -1) {
        file.excerpt = file.content.slice(0, idx);
    }
    return file;
};


/***/ }),

/***/ 7572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const getEngine = __webpack_require__(1829);
const defaults = __webpack_require__(3201);
module.exports = function(language, str, options) {
    const opts = defaults(options);
    const engine = getEngine(language, opts);
    if (typeof engine.parse !== "function") {
        throw new TypeError('expected "' + language + '.parse" to be a function');
    }
    return engine.parse(str, opts);
};


/***/ }),

/***/ 237:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const typeOf = __webpack_require__(6111);
const getEngine = __webpack_require__(1829);
const defaults = __webpack_require__(3201);
module.exports = function(file, data, options) {
    if (data == null && options == null) {
        switch(typeOf(file)){
            case "object":
                data = file.data;
                options = {};
                break;
            case "string":
                return file;
            default:
                {
                    throw new TypeError("expected file to be a string or object");
                }
        }
    }
    const str = file.content;
    const opts = defaults(options);
    if (data == null) {
        if (!opts.data) return file;
        data = opts.data;
    }
    const language = file.language || opts.language;
    const engine = getEngine(language, opts);
    if (typeof engine.stringify !== "function") {
        throw new TypeError('expected "' + language + '.stringify" to be a function');
    }
    data = Object.assign({}, file.data, data);
    const open = opts.delimiters[0];
    const close = opts.delimiters[1];
    const matter = engine.stringify(data, options).trim();
    let buf = "";
    if (matter !== "{}") {
        buf = newline(open) + newline(matter) + newline(close);
    }
    if (typeof file.excerpt === "string" && file.excerpt !== "") {
        if (str.indexOf(file.excerpt.trim()) === -1) {
            buf += newline(file.excerpt) + newline(close);
        }
    }
    return buf + newline(str);
};
function newline(str) {
    return str.slice(-1) !== "\n" ? str + "\n" : str;
}


/***/ }),

/***/ 6526:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const typeOf = __webpack_require__(6111);
const stringify = __webpack_require__(237);
const utils = __webpack_require__(6312);
/**
 * Normalize the given value to ensure an object is returned
 * with the expected properties.
 */ module.exports = function(file) {
    if (typeOf(file) !== "object") {
        file = {
            content: file
        };
    }
    if (typeOf(file.data) !== "object") {
        file.data = {};
    }
    // if file was passed as an object, ensure that
    // "file.content" is set
    if (file.contents && file.content == null) {
        file.content = file.contents;
    }
    // set non-enumerable properties on the file object
    utils.define(file, "orig", utils.toBuffer(file.content));
    utils.define(file, "language", file.language || "");
    utils.define(file, "matter", file.matter || "");
    utils.define(file, "stringify", function(data, options) {
        if (options && options.language) {
            file.language = options.language;
        }
        return stringify(file, data, options);
    });
    // strip BOM and ensure that "file.content" is a string
    file.content = utils.toString(file.content);
    file.isEmpty = false;
    file.excerpt = "";
    return file;
};


/***/ }),

/***/ 6312:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const stripBom = __webpack_require__(8997);
const typeOf = __webpack_require__(6111);
exports.define = function(obj, key, val) {
    Reflect.defineProperty(obj, key, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: val
    });
};
/**
 * Returns true if `val` is a buffer
 */ exports.isBuffer = function(val) {
    return typeOf(val) === "buffer";
};
/**
 * Returns true if `val` is an object
 */ exports.isObject = function(val) {
    return typeOf(val) === "object";
};
/**
 * Cast `input` to a buffer
 */ exports.toBuffer = function(input) {
    return typeof input === "string" ? Buffer.from(input) : input;
};
/**
 * Cast `val` to a string.
 */ exports.toString = function(input) {
    if (exports.isBuffer(input)) return stripBom(String(input));
    if (typeof input !== "string") {
        throw new TypeError("expected input to be a string or buffer");
    }
    return stripBom(input);
};
/**
 * Cast `val` to an array.
 */ exports.arrayify = function(val) {
    return val ? Array.isArray(val) ? val : [
        val
    ] : [];
};
/**
 * Returns true if `str` starts with `substr`.
 */ exports.startsWith = function(str, substr, len) {
    if (typeof len !== "number") len = substr.length;
    return str.slice(0, len) === substr;
};


/***/ }),

/***/ 6287:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var yaml = __webpack_require__(5614);
module.exports = yaml;


/***/ }),

/***/ 5614:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var loader = __webpack_require__(6478);
var dumper = __webpack_require__(5530);
function deprecated(name) {
    return function() {
        throw new Error("Function " + name + " is deprecated and cannot be used.");
    };
}
module.exports.Type = __webpack_require__(7432);
module.exports.Schema = __webpack_require__(8086);
module.exports.FAILSAFE_SCHEMA = __webpack_require__(179);
module.exports.JSON_SCHEMA = __webpack_require__(3727);
module.exports.CORE_SCHEMA = __webpack_require__(8412);
module.exports.DEFAULT_SAFE_SCHEMA = __webpack_require__(1457);
module.exports.DEFAULT_FULL_SCHEMA = __webpack_require__(925);
module.exports.load = loader.load;
module.exports.loadAll = loader.loadAll;
module.exports.safeLoad = loader.safeLoad;
module.exports.safeLoadAll = loader.safeLoadAll;
module.exports.dump = dumper.dump;
module.exports.safeDump = dumper.safeDump;
module.exports.YAMLException = __webpack_require__(3136);
// Deprecated schema names from JS-YAML 2.0.x
module.exports.MINIMAL_SCHEMA = __webpack_require__(179);
module.exports.SAFE_SCHEMA = __webpack_require__(1457);
module.exports.DEFAULT_SCHEMA = __webpack_require__(925);
// Deprecated functions from JS-YAML 1.x.x
module.exports.scan = deprecated("scan");
module.exports.parse = deprecated("parse");
module.exports.compose = deprecated("compose");
module.exports.addConstructor = deprecated("addConstructor");


/***/ }),

/***/ 420:
/***/ ((module) => {


function isNothing(subject) {
    return typeof subject === "undefined" || subject === null;
}
function isObject(subject) {
    return typeof subject === "object" && subject !== null;
}
function toArray(sequence) {
    if (Array.isArray(sequence)) return sequence;
    else if (isNothing(sequence)) return [];
    return [
        sequence
    ];
}
function extend(target, source) {
    var index, length, key, sourceKeys;
    if (source) {
        sourceKeys = Object.keys(source);
        for(index = 0, length = sourceKeys.length; index < length; index += 1){
            key = sourceKeys[index];
            target[key] = source[key];
        }
    }
    return target;
}
function repeat(string, count) {
    var result = "", cycle;
    for(cycle = 0; cycle < count; cycle += 1){
        result += string;
    }
    return result;
}
function isNegativeZero(number) {
    return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
}
module.exports.isNothing = isNothing;
module.exports.isObject = isObject;
module.exports.toArray = toArray;
module.exports.repeat = repeat;
module.exports.isNegativeZero = isNegativeZero;
module.exports.extend = extend;


/***/ }),

/***/ 5530:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/*eslint-disable no-use-before-define*/ var common = __webpack_require__(420);
var YAMLException = __webpack_require__(3136);
var DEFAULT_FULL_SCHEMA = __webpack_require__(925);
var DEFAULT_SAFE_SCHEMA = __webpack_require__(1457);
var _toString = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CHAR_TAB = 0x09; /* Tab */ 
var CHAR_LINE_FEED = 0x0A; /* LF */ 
var CHAR_CARRIAGE_RETURN = 0x0D; /* CR */ 
var CHAR_SPACE = 0x20; /* Space */ 
var CHAR_EXCLAMATION = 0x21; /* ! */ 
var CHAR_DOUBLE_QUOTE = 0x22; /* " */ 
var CHAR_SHARP = 0x23; /* # */ 
var CHAR_PERCENT = 0x25; /* % */ 
var CHAR_AMPERSAND = 0x26; /* & */ 
var CHAR_SINGLE_QUOTE = 0x27; /* ' */ 
var CHAR_ASTERISK = 0x2A; /* * */ 
var CHAR_COMMA = 0x2C; /* , */ 
var CHAR_MINUS = 0x2D; /* - */ 
var CHAR_COLON = 0x3A; /* : */ 
var CHAR_EQUALS = 0x3D; /* = */ 
var CHAR_GREATER_THAN = 0x3E; /* > */ 
var CHAR_QUESTION = 0x3F; /* ? */ 
var CHAR_COMMERCIAL_AT = 0x40; /* @ */ 
var CHAR_LEFT_SQUARE_BRACKET = 0x5B; /* [ */ 
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */ 
var CHAR_GRAVE_ACCENT = 0x60; /* ` */ 
var CHAR_LEFT_CURLY_BRACKET = 0x7B; /* { */ 
var CHAR_VERTICAL_LINE = 0x7C; /* | */ 
var CHAR_RIGHT_CURLY_BRACKET = 0x7D; /* } */ 
var ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0x00] = "\\0";
ESCAPE_SEQUENCES[0x07] = "\\a";
ESCAPE_SEQUENCES[0x08] = "\\b";
ESCAPE_SEQUENCES[0x09] = "\\t";
ESCAPE_SEQUENCES[0x0A] = "\\n";
ESCAPE_SEQUENCES[0x0B] = "\\v";
ESCAPE_SEQUENCES[0x0C] = "\\f";
ESCAPE_SEQUENCES[0x0D] = "\\r";
ESCAPE_SEQUENCES[0x1B] = "\\e";
ESCAPE_SEQUENCES[0x22] = '\\"';
ESCAPE_SEQUENCES[0x5C] = "\\\\";
ESCAPE_SEQUENCES[0x85] = "\\N";
ESCAPE_SEQUENCES[0xA0] = "\\_";
ESCAPE_SEQUENCES[0x2028] = "\\L";
ESCAPE_SEQUENCES[0x2029] = "\\P";
var DEPRECATED_BOOLEANS_SYNTAX = [
    "y",
    "Y",
    "yes",
    "Yes",
    "YES",
    "on",
    "On",
    "ON",
    "n",
    "N",
    "no",
    "No",
    "NO",
    "off",
    "Off",
    "OFF"
];
function compileStyleMap(schema, map) {
    var result, keys, index, length, tag, style, type;
    if (map === null) return {};
    result = {};
    keys = Object.keys(map);
    for(index = 0, length = keys.length; index < length; index += 1){
        tag = keys[index];
        style = String(map[tag]);
        if (tag.slice(0, 2) === "!!") {
            tag = "tag:yaml.org,2002:" + tag.slice(2);
        }
        type = schema.compiledTypeMap["fallback"][tag];
        if (type && _hasOwnProperty.call(type.styleAliases, style)) {
            style = type.styleAliases[style];
        }
        result[tag] = style;
    }
    return result;
}
function encodeHex(character) {
    var string, handle, length;
    string = character.toString(16).toUpperCase();
    if (character <= 0xFF) {
        handle = "x";
        length = 2;
    } else if (character <= 0xFFFF) {
        handle = "u";
        length = 4;
    } else if (character <= 0xFFFFFFFF) {
        handle = "U";
        length = 8;
    } else {
        throw new YAMLException("code point within a string may not be greater than 0xFFFFFFFF");
    }
    return "\\" + handle + common.repeat("0", length - string.length) + string;
}
function State(options) {
    this.schema = options["schema"] || DEFAULT_FULL_SCHEMA;
    this.indent = Math.max(1, options["indent"] || 2);
    this.noArrayIndent = options["noArrayIndent"] || false;
    this.skipInvalid = options["skipInvalid"] || false;
    this.flowLevel = common.isNothing(options["flowLevel"]) ? -1 : options["flowLevel"];
    this.styleMap = compileStyleMap(this.schema, options["styles"] || null);
    this.sortKeys = options["sortKeys"] || false;
    this.lineWidth = options["lineWidth"] || 80;
    this.noRefs = options["noRefs"] || false;
    this.noCompatMode = options["noCompatMode"] || false;
    this.condenseFlow = options["condenseFlow"] || false;
    this.implicitTypes = this.schema.compiledImplicit;
    this.explicitTypes = this.schema.compiledExplicit;
    this.tag = null;
    this.result = "";
    this.duplicates = [];
    this.usedDuplicates = null;
}
// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
    var ind = common.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string.length;
    while(position < length){
        next = string.indexOf("\n", position);
        if (next === -1) {
            line = string.slice(position);
            position = length;
        } else {
            line = string.slice(position, next + 1);
            position = next + 1;
        }
        if (line.length && line !== "\n") result += ind;
        result += line;
    }
    return result;
}
function generateNextLine(state, level) {
    return "\n" + common.repeat(" ", state.indent * level);
}
function testImplicitResolving(state, str) {
    var index, length, type;
    for(index = 0, length = state.implicitTypes.length; index < length; index += 1){
        type = state.implicitTypes[index];
        if (type.resolve(str)) {
            return true;
        }
    }
    return false;
}
// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
    return c === CHAR_SPACE || c === CHAR_TAB;
}
// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
    return 0x00020 <= c && c <= 0x00007E || 0x000A1 <= c && c <= 0x00D7FF && c !== 0x2028 && c !== 0x2029 || 0x0E000 <= c && c <= 0x00FFFD && c !== 0xFEFF /* BOM */  || 0x10000 <= c && c <= 0x10FFFF;
}
// [34] ns-char ::= nb-char - s-white
// [27] nb-char ::= c-printable - b-char - c-byte-order-mark
// [26] b-char  ::= b-line-feed | b-carriage-return
// [24] b-line-feed       ::=     #xA    /* LF */
// [25] b-carriage-return ::=     #xD    /* CR */
// [3]  c-byte-order-mark ::=     #xFEFF
function isNsChar(c) {
    return isPrintable(c) && !isWhitespace(c) && c !== 0xFEFF && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
}
// Simplified test for values allowed after the first character in plain style.
function isPlainSafe(c, prev) {
    // Uses a subset of nb-char - c-flow-indicator - ":" - "#"
    // where nb-char ::= c-printable - b-char - c-byte-order-mark.
    return isPrintable(c) && c !== 0xFEFF && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_COLON && (c !== CHAR_SHARP || prev && isNsChar(prev));
}
// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
    // Uses a subset of ns-char - c-indicator
    // where ns-char = nb-char - s-white.
    return isPrintable(c) && c !== 0xFEFF && !isWhitespace(c) // - s-white
     && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
}
// Determines whether block indentation indicator is required.
function needIndentIndicator(string) {
    var leadingSpaceRe = /^\n* /;
    return leadingSpaceRe.test(string);
}
var STYLE_PLAIN = 1, STYLE_SINGLE = 2, STYLE_LITERAL = 3, STYLE_FOLDED = 4, STYLE_DOUBLE = 5;
// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
    var i;
    var char, prev_char;
    var hasLineBreak = false;
    var hasFoldableLine = false; // only checked if shouldTrackWidth
    var shouldTrackWidth = lineWidth !== -1;
    var previousLineBreak = -1; // count the first line correctly
    var plain = isPlainSafeFirst(string.charCodeAt(0)) && !isWhitespace(string.charCodeAt(string.length - 1));
    if (singleLineOnly) {
        // Case: no block styles.
        // Check for disallowed characters to rule out plain and single.
        for(i = 0; i < string.length; i++){
            char = string.charCodeAt(i);
            if (!isPrintable(char)) {
                return STYLE_DOUBLE;
            }
            prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
            plain = plain && isPlainSafe(char, prev_char);
        }
    } else {
        // Case: block styles permitted.
        for(i = 0; i < string.length; i++){
            char = string.charCodeAt(i);
            if (char === CHAR_LINE_FEED) {
                hasLineBreak = true;
                // Check if any line can be folded.
                if (shouldTrackWidth) {
                    hasFoldableLine = hasFoldableLine || // Foldable line = too long, and not more-indented.
                    i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
                    previousLineBreak = i;
                }
            } else if (!isPrintable(char)) {
                return STYLE_DOUBLE;
            }
            prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
            plain = plain && isPlainSafe(char, prev_char);
        }
        // in case the end is missing a \n
        hasFoldableLine = hasFoldableLine || shouldTrackWidth && i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
    }
    // Although every style can represent \n without escaping, prefer block styles
    // for multiline, since they're more readable and they don't add empty lines.
    // Also prefer folding a super-long line.
    if (!hasLineBreak && !hasFoldableLine) {
        // Strings interpretable as another type have to be quoted;
        // e.g. the string 'true' vs. the boolean true.
        return plain && !testAmbiguousType(string) ? STYLE_PLAIN : STYLE_SINGLE;
    }
    // Edge case: block indentation indicator can only have one digit.
    if (indentPerLevel > 9 && needIndentIndicator(string)) {
        return STYLE_DOUBLE;
    }
    // At this point we know block styles are valid.
    // Prefer literal style unless we want to fold.
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
}
// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey) {
    state.dump = function() {
        if (string.length === 0) {
            return "''";
        }
        if (!state.noCompatMode && DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1) {
            return "'" + string + "'";
        }
        var indent = state.indent * Math.max(1, level); // no 0-indent scalars
        // As indentation gets deeper, let the width decrease monotonically
        // to the lower bound min(state.lineWidth, 40).
        // Note that this implies
        //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
        //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
        // This behaves better than a constant minimum width which disallows narrower options,
        // or an indent threshold which causes the width to suddenly increase.
        var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
        // Without knowing if keys are implicit/explicit, assume implicit for safety.
        var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
        function testAmbiguity(string) {
            return testImplicitResolving(state, string);
        }
        switch(chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity)){
            case STYLE_PLAIN:
                return string;
            case STYLE_SINGLE:
                return "'" + string.replace(/'/g, "''") + "'";
            case STYLE_LITERAL:
                return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
            case STYLE_FOLDED:
                return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
            case STYLE_DOUBLE:
                return '"' + escapeString(string, lineWidth) + '"';
            default:
                throw new YAMLException("impossible error: invalid scalar style");
        }
    }();
}
// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
    var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : "";
    // note the special case: the string '\n' counts as a "trailing" empty line.
    var clip = string[string.length - 1] === "\n";
    var keep = clip && (string[string.length - 2] === "\n" || string === "\n");
    var chomp = keep ? "+" : clip ? "" : "-";
    return indentIndicator + chomp + "\n";
}
// (See the note for writeScalar.)
function dropEndingNewline(string) {
    return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
}
// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
    // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
    // unless they're before or after a more-indented line, or at the very
    // beginning or end, in which case $k$ maps to $k$.
    // Therefore, parse each chunk as newline(s) followed by a content line.
    var lineRe = /(\n+)([^\n]*)/g;
    // first line (possibly an empty line)
    var result = function() {
        var nextLF = string.indexOf("\n");
        nextLF = nextLF !== -1 ? nextLF : string.length;
        lineRe.lastIndex = nextLF;
        return foldLine(string.slice(0, nextLF), width);
    }();
    // If we haven't reached the first content line yet, don't add an extra \n.
    var prevMoreIndented = string[0] === "\n" || string[0] === " ";
    var moreIndented;
    // rest of the lines
    var match;
    while(match = lineRe.exec(string)){
        var prefix = match[1], line = match[2];
        moreIndented = line[0] === " ";
        result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
        prevMoreIndented = moreIndented;
    }
    return result;
}
// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
    if (line === "" || line[0] === " ") return line;
    // Since a more-indented line adds a \n, breaks can't be followed by a space.
    var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
    var match;
    // start is an inclusive index. end, curr, and next are exclusive.
    var start = 0, end, curr = 0, next = 0;
    var result = "";
    // Invariants: 0 <= start <= length-1.
    //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
    // Inside the loop:
    //   A match implies length >= 2, so curr and next are <= length-2.
    while(match = breakRe.exec(line)){
        next = match.index;
        // maintain invariant: curr - start <= width
        if (next - start > width) {
            end = curr > start ? curr : next; // derive end <= length-2
            result += "\n" + line.slice(start, end);
            // skip the space that was output as \n
            start = end + 1; // derive start <= length-1
        }
        curr = next;
    }
    // By the invariants, start <= length-1, so there is something left over.
    // It is either the whole string or a part starting from non-whitespace.
    result += "\n";
    // Insert a break if the remainder is too long and there is a break available.
    if (line.length - start > width && curr > start) {
        result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
    } else {
        result += line.slice(start);
    }
    return result.slice(1); // drop extra \n joiner
}
// Escapes a double-quoted string.
function escapeString(string) {
    var result = "";
    var char, nextChar;
    var escapeSeq;
    for(var i = 0; i < string.length; i++){
        char = string.charCodeAt(i);
        // Check for surrogate pairs (reference Unicode 3.0 section "3.7 Surrogates").
        if (char >= 0xD800 && char <= 0xDBFF /* high surrogate */ ) {
            nextChar = string.charCodeAt(i + 1);
            if (nextChar >= 0xDC00 && nextChar <= 0xDFFF /* low surrogate */ ) {
                // Combine the surrogate pair and store it escaped.
                result += encodeHex((char - 0xD800) * 0x400 + nextChar - 0xDC00 + 0x10000);
                // Advance index one extra since we already used that char here.
                i++;
                continue;
            }
        }
        escapeSeq = ESCAPE_SEQUENCES[char];
        result += !escapeSeq && isPrintable(char) ? string[i] : escapeSeq || encodeHex(char);
    }
    return result;
}
function writeFlowSequence(state, level, object) {
    var _result = "", _tag = state.tag, index, length;
    for(index = 0, length = object.length; index < length; index += 1){
        // Write only valid elements.
        if (writeNode(state, level, object[index], false, false)) {
            if (index !== 0) _result += "," + (!state.condenseFlow ? " " : "");
            _result += state.dump;
        }
    }
    state.tag = _tag;
    state.dump = "[" + _result + "]";
}
function writeBlockSequence(state, level, object, compact) {
    var _result = "", _tag = state.tag, index, length;
    for(index = 0, length = object.length; index < length; index += 1){
        // Write only valid elements.
        if (writeNode(state, level + 1, object[index], true, true)) {
            if (!compact || index !== 0) {
                _result += generateNextLine(state, level);
            }
            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                _result += "-";
            } else {
                _result += "- ";
            }
            _result += state.dump;
        }
    }
    state.tag = _tag;
    state.dump = _result || "[]"; // Empty sequence if no valid values.
}
function writeFlowMapping(state, level, object) {
    var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
    for(index = 0, length = objectKeyList.length; index < length; index += 1){
        pairBuffer = "";
        if (index !== 0) pairBuffer += ", ";
        if (state.condenseFlow) pairBuffer += '"';
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (!writeNode(state, level, objectKey, false, false)) {
            continue; // Skip this pair because of invalid key;
        }
        if (state.dump.length > 1024) pairBuffer += "? ";
        pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
        if (!writeNode(state, level, objectValue, false, false)) {
            continue; // Skip this pair because of invalid value.
        }
        pairBuffer += state.dump;
        // Both key and value are valid.
        _result += pairBuffer;
    }
    state.tag = _tag;
    state.dump = "{" + _result + "}";
}
function writeBlockMapping(state, level, object, compact) {
    var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
    // Allow sorting keys so that the output file is deterministic
    if (state.sortKeys === true) {
        // Default sorting
        objectKeyList.sort();
    } else if (typeof state.sortKeys === "function") {
        // Custom sort function
        objectKeyList.sort(state.sortKeys);
    } else if (state.sortKeys) {
        // Something is wrong
        throw new YAMLException("sortKeys must be a boolean or a function");
    }
    for(index = 0, length = objectKeyList.length; index < length; index += 1){
        pairBuffer = "";
        if (!compact || index !== 0) {
            pairBuffer += generateNextLine(state, level);
        }
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (!writeNode(state, level + 1, objectKey, true, true, true)) {
            continue; // Skip this pair because of invalid key.
        }
        explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
        if (explicitPair) {
            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                pairBuffer += "?";
            } else {
                pairBuffer += "? ";
            }
        }
        pairBuffer += state.dump;
        if (explicitPair) {
            pairBuffer += generateNextLine(state, level);
        }
        if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
            continue; // Skip this pair because of invalid value.
        }
        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            pairBuffer += ":";
        } else {
            pairBuffer += ": ";
        }
        pairBuffer += state.dump;
        // Both key and value are valid.
        _result += pairBuffer;
    }
    state.tag = _tag;
    state.dump = _result || "{}"; // Empty mapping if no valid pairs.
}
function detectType(state, object, explicit) {
    var _result, typeList, index, length, type, style;
    typeList = explicit ? state.explicitTypes : state.implicitTypes;
    for(index = 0, length = typeList.length; index < length; index += 1){
        type = typeList[index];
        if ((type.instanceOf || type.predicate) && (!type.instanceOf || typeof object === "object" && object instanceof type.instanceOf) && (!type.predicate || type.predicate(object))) {
            state.tag = explicit ? type.tag : "?";
            if (type.represent) {
                style = state.styleMap[type.tag] || type.defaultStyle;
                if (_toString.call(type.represent) === "[object Function]") {
                    _result = type.represent(object, style);
                } else if (_hasOwnProperty.call(type.represent, style)) {
                    _result = type.represent[style](object, style);
                } else {
                    throw new YAMLException("!<" + type.tag + '> tag resolver accepts not "' + style + '" style');
                }
                state.dump = _result;
            }
            return true;
        }
    }
    return false;
}
// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey) {
    state.tag = null;
    state.dump = object;
    if (!detectType(state, object, false)) {
        detectType(state, object, true);
    }
    var type = _toString.call(state.dump);
    if (block) {
        block = state.flowLevel < 0 || state.flowLevel > level;
    }
    var objectOrArray = type === "[object Object]" || type === "[object Array]", duplicateIndex, duplicate;
    if (objectOrArray) {
        duplicateIndex = state.duplicates.indexOf(object);
        duplicate = duplicateIndex !== -1;
    }
    if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
        compact = false;
    }
    if (duplicate && state.usedDuplicates[duplicateIndex]) {
        state.dump = "*ref_" + duplicateIndex;
    } else {
        if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
            state.usedDuplicates[duplicateIndex] = true;
        }
        if (type === "[object Object]") {
            if (block && Object.keys(state.dump).length !== 0) {
                writeBlockMapping(state, level, state.dump, compact);
                if (duplicate) {
                    state.dump = "&ref_" + duplicateIndex + state.dump;
                }
            } else {
                writeFlowMapping(state, level, state.dump);
                if (duplicate) {
                    state.dump = "&ref_" + duplicateIndex + " " + state.dump;
                }
            }
        } else if (type === "[object Array]") {
            var arrayLevel = state.noArrayIndent && level > 0 ? level - 1 : level;
            if (block && state.dump.length !== 0) {
                writeBlockSequence(state, arrayLevel, state.dump, compact);
                if (duplicate) {
                    state.dump = "&ref_" + duplicateIndex + state.dump;
                }
            } else {
                writeFlowSequence(state, arrayLevel, state.dump);
                if (duplicate) {
                    state.dump = "&ref_" + duplicateIndex + " " + state.dump;
                }
            }
        } else if (type === "[object String]") {
            if (state.tag !== "?") {
                writeScalar(state, state.dump, level, iskey);
            }
        } else {
            if (state.skipInvalid) return false;
            throw new YAMLException("unacceptable kind of an object to dump " + type);
        }
        if (state.tag !== null && state.tag !== "?") {
            state.dump = "!<" + state.tag + "> " + state.dump;
        }
    }
    return true;
}
function getDuplicateReferences(object, state) {
    var objects = [], duplicatesIndexes = [], index, length;
    inspectNode(object, objects, duplicatesIndexes);
    for(index = 0, length = duplicatesIndexes.length; index < length; index += 1){
        state.duplicates.push(objects[duplicatesIndexes[index]]);
    }
    state.usedDuplicates = new Array(length);
}
function inspectNode(object, objects, duplicatesIndexes) {
    var objectKeyList, index, length;
    if (object !== null && typeof object === "object") {
        index = objects.indexOf(object);
        if (index !== -1) {
            if (duplicatesIndexes.indexOf(index) === -1) {
                duplicatesIndexes.push(index);
            }
        } else {
            objects.push(object);
            if (Array.isArray(object)) {
                for(index = 0, length = object.length; index < length; index += 1){
                    inspectNode(object[index], objects, duplicatesIndexes);
                }
            } else {
                objectKeyList = Object.keys(object);
                for(index = 0, length = objectKeyList.length; index < length; index += 1){
                    inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
                }
            }
        }
    }
}
function dump(input, options) {
    options = options || {};
    var state = new State(options);
    if (!state.noRefs) getDuplicateReferences(input, state);
    if (writeNode(state, 0, input, true, true)) return state.dump + "\n";
    return "";
}
function safeDump(input, options) {
    return dump(input, common.extend({
        schema: DEFAULT_SAFE_SCHEMA
    }, options));
}
module.exports.dump = dump;
module.exports.safeDump = safeDump;


/***/ }),

/***/ 3136:
/***/ ((module) => {

// YAML error class. http://stackoverflow.com/questions/8458984
//

function YAMLException(reason, mark) {
    // Super constructor
    Error.call(this);
    this.name = "YAMLException";
    this.reason = reason;
    this.mark = mark;
    this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : "");
    // Include stack trace in error object
    if (Error.captureStackTrace) {
        // Chrome and NodeJS
        Error.captureStackTrace(this, this.constructor);
    } else {
        // FF, IE 10+ and Safari 6+. Fallback for others
        this.stack = new Error().stack || "";
    }
}
// Inherit from Error
YAMLException.prototype = Object.create(Error.prototype);
YAMLException.prototype.constructor = YAMLException;
YAMLException.prototype.toString = function toString(compact) {
    var result = this.name + ": ";
    result += this.reason || "(unknown reason)";
    if (!compact && this.mark) {
        result += " " + this.mark.toString();
    }
    return result;
};
module.exports = YAMLException;


/***/ }),

/***/ 6478:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/*eslint-disable max-len,no-use-before-define*/ var common = __webpack_require__(420);
var YAMLException = __webpack_require__(3136);
var Mark = __webpack_require__(587);
var DEFAULT_SAFE_SCHEMA = __webpack_require__(1457);
var DEFAULT_FULL_SCHEMA = __webpack_require__(925);
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(obj) {
    return Object.prototype.toString.call(obj);
}
function is_EOL(c) {
    return c === 0x0A /* LF */  || c === 0x0D /* CR */ ;
}
function is_WHITE_SPACE(c) {
    return c === 0x09 /* Tab */  || c === 0x20 /* Space */ ;
}
function is_WS_OR_EOL(c) {
    return c === 0x09 /* Tab */  || c === 0x20 /* Space */  || c === 0x0A /* LF */  || c === 0x0D /* CR */ ;
}
function is_FLOW_INDICATOR(c) {
    return c === 0x2C /* , */  || c === 0x5B /* [ */  || c === 0x5D /* ] */  || c === 0x7B /* { */  || c === 0x7D /* } */ ;
}
function fromHexCode(c) {
    var lc;
    if (0x30 /* 0 */  <= c && c <= 0x39 /* 9 */ ) {
        return c - 0x30;
    }
    /*eslint-disable no-bitwise*/ lc = c | 0x20;
    if (0x61 /* a */  <= lc && lc <= 0x66 /* f */ ) {
        return lc - 0x61 + 10;
    }
    return -1;
}
function escapedHexLen(c) {
    if (c === 0x78 /* x */ ) {
        return 2;
    }
    if (c === 0x75 /* u */ ) {
        return 4;
    }
    if (c === 0x55 /* U */ ) {
        return 8;
    }
    return 0;
}
function fromDecimalCode(c) {
    if (0x30 /* 0 */  <= c && c <= 0x39 /* 9 */ ) {
        return c - 0x30;
    }
    return -1;
}
function simpleEscapeSequence(c) {
    /* eslint-disable indent */ return c === 0x30 /* 0 */  ? "\x00" : c === 0x61 /* a */  ? "\x07" : c === 0x62 /* b */  ? "\b" : c === 0x74 /* t */  ? "	" : c === 0x09 /* Tab */  ? "	" : c === 0x6E /* n */  ? "\n" : c === 0x76 /* v */  ? "\v" : c === 0x66 /* f */  ? "\f" : c === 0x72 /* r */  ? "\r" : c === 0x65 /* e */  ? "\x1b" : c === 0x20 /* Space */  ? " " : c === 0x22 /* " */  ? '"' : c === 0x2F /* / */  ? "/" : c === 0x5C /* \ */  ? "\\" : c === 0x4E /* N */  ? "\x85" : c === 0x5F /* _ */  ? "\xa0" : c === 0x4C /* L */  ? "\u2028" : c === 0x50 /* P */  ? "\u2029" : "";
}
function charFromCodepoint(c) {
    if (c <= 0xFFFF) {
        return String.fromCharCode(c);
    }
    // Encode UTF-16 surrogate pair
    // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
    return String.fromCharCode((c - 0x010000 >> 10) + 0xD800, (c - 0x010000 & 0x03FF) + 0xDC00);
}
var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for(var i = 0; i < 256; i++){
    simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
    simpleEscapeMap[i] = simpleEscapeSequence(i);
}
function State(input, options) {
    this.input = input;
    this.filename = options["filename"] || null;
    this.schema = options["schema"] || DEFAULT_FULL_SCHEMA;
    this.onWarning = options["onWarning"] || null;
    this.legacy = options["legacy"] || false;
    this.json = options["json"] || false;
    this.listener = options["listener"] || null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.typeMap = this.schema.compiledTypeMap;
    this.length = input.length;
    this.position = 0;
    this.line = 0;
    this.lineStart = 0;
    this.lineIndent = 0;
    this.documents = [];
/*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/ }
function generateError(state, message) {
    return new YAMLException(message, new Mark(state.filename, state.input, state.position, state.line, state.position - state.lineStart));
}
function throwError(state, message) {
    throw generateError(state, message);
}
function throwWarning(state, message) {
    if (state.onWarning) {
        state.onWarning.call(null, generateError(state, message));
    }
}
var directiveHandlers = {
    YAML: function handleYamlDirective(state, name, args) {
        var match, major, minor;
        if (state.version !== null) {
            throwError(state, "duplication of %YAML directive");
        }
        if (args.length !== 1) {
            throwError(state, "YAML directive accepts exactly one argument");
        }
        match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
        if (match === null) {
            throwError(state, "ill-formed argument of the YAML directive");
        }
        major = parseInt(match[1], 10);
        minor = parseInt(match[2], 10);
        if (major !== 1) {
            throwError(state, "unacceptable YAML version of the document");
        }
        state.version = args[0];
        state.checkLineBreaks = minor < 2;
        if (minor !== 1 && minor !== 2) {
            throwWarning(state, "unsupported YAML version of the document");
        }
    },
    TAG: function handleTagDirective(state, name, args) {
        var handle, prefix;
        if (args.length !== 2) {
            throwError(state, "TAG directive accepts exactly two arguments");
        }
        handle = args[0];
        prefix = args[1];
        if (!PATTERN_TAG_HANDLE.test(handle)) {
            throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
        }
        if (_hasOwnProperty.call(state.tagMap, handle)) {
            throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
        }
        if (!PATTERN_TAG_URI.test(prefix)) {
            throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
        }
        state.tagMap[handle] = prefix;
    }
};
function captureSegment(state, start, end, checkJson) {
    var _position, _length, _character, _result;
    if (start < end) {
        _result = state.input.slice(start, end);
        if (checkJson) {
            for(_position = 0, _length = _result.length; _position < _length; _position += 1){
                _character = _result.charCodeAt(_position);
                if (!(_character === 0x09 || 0x20 <= _character && _character <= 0x10FFFF)) {
                    throwError(state, "expected valid JSON character");
                }
            }
        } else if (PATTERN_NON_PRINTABLE.test(_result)) {
            throwError(state, "the stream contains non-printable characters");
        }
        state.result += _result;
    }
}
function mergeMappings(state, destination, source, overridableKeys) {
    var sourceKeys, key, index, quantity;
    if (!common.isObject(source)) {
        throwError(state, "cannot merge mappings; the provided source object is unacceptable");
    }
    sourceKeys = Object.keys(source);
    for(index = 0, quantity = sourceKeys.length; index < quantity; index += 1){
        key = sourceKeys[index];
        if (!_hasOwnProperty.call(destination, key)) {
            destination[key] = source[key];
            overridableKeys[key] = true;
        }
    }
}
function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
    var index, quantity;
    // The output is a plain object here, so keys can only be strings.
    // We need to convert keyNode to a string, but doing so can hang the process
    // (deeply nested arrays that explode exponentially using aliases).
    if (Array.isArray(keyNode)) {
        keyNode = Array.prototype.slice.call(keyNode);
        for(index = 0, quantity = keyNode.length; index < quantity; index += 1){
            if (Array.isArray(keyNode[index])) {
                throwError(state, "nested arrays are not supported inside keys");
            }
            if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
                keyNode[index] = "[object Object]";
            }
        }
    }
    // Avoid code execution in load() via toString property
    // (still use its own toString for arrays, timestamps,
    // and whatever user schema extensions happen to have @@toStringTag)
    if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
        keyNode = "[object Object]";
    }
    keyNode = String(keyNode);
    if (_result === null) {
        _result = {};
    }
    if (keyTag === "tag:yaml.org,2002:merge") {
        if (Array.isArray(valueNode)) {
            for(index = 0, quantity = valueNode.length; index < quantity; index += 1){
                mergeMappings(state, _result, valueNode[index], overridableKeys);
            }
        } else {
            mergeMappings(state, _result, valueNode, overridableKeys);
        }
    } else {
        if (!state.json && !_hasOwnProperty.call(overridableKeys, keyNode) && _hasOwnProperty.call(_result, keyNode)) {
            state.line = startLine || state.line;
            state.position = startPos || state.position;
            throwError(state, "duplicated mapping key");
        }
        _result[keyNode] = valueNode;
        delete overridableKeys[keyNode];
    }
    return _result;
}
function readLineBreak(state) {
    var ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 0x0A /* LF */ ) {
        state.position++;
    } else if (ch === 0x0D /* CR */ ) {
        state.position++;
        if (state.input.charCodeAt(state.position) === 0x0A /* LF */ ) {
            state.position++;
        }
    } else {
        throwError(state, "a line break is expected");
    }
    state.line += 1;
    state.lineStart = state.position;
}
function skipSeparationSpace(state, allowComments, checkIndent) {
    var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
    while(ch !== 0){
        while(is_WHITE_SPACE(ch)){
            ch = state.input.charCodeAt(++state.position);
        }
        if (allowComments && ch === 0x23 /* # */ ) {
            do {
                ch = state.input.charCodeAt(++state.position);
            }while (ch !== 0x0A /* LF */  && ch !== 0x0D /* CR */  && ch !== 0);
        }
        if (is_EOL(ch)) {
            readLineBreak(state);
            ch = state.input.charCodeAt(state.position);
            lineBreaks++;
            state.lineIndent = 0;
            while(ch === 0x20 /* Space */ ){
                state.lineIndent++;
                ch = state.input.charCodeAt(++state.position);
            }
        } else {
            break;
        }
    }
    if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
        throwWarning(state, "deficient indentation");
    }
    return lineBreaks;
}
function testDocumentSeparator(state) {
    var _position = state.position, ch;
    ch = state.input.charCodeAt(_position);
    // Condition state.position === state.lineStart is tested
    // in parent on each call, for efficiency. No needs to test here again.
    if ((ch === 0x2D /* - */  || ch === 0x2E /* . */ ) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
        _position += 3;
        ch = state.input.charCodeAt(_position);
        if (ch === 0 || is_WS_OR_EOL(ch)) {
            return true;
        }
    }
    return false;
}
function writeFoldedLines(state, count) {
    if (count === 1) {
        state.result += " ";
    } else if (count > 1) {
        state.result += common.repeat("\n", count - 1);
    }
}
function readPlainScalar(state, nodeIndent, withinFlowCollection) {
    var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
    ch = state.input.charCodeAt(state.position);
    if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 0x23 /* # */  || ch === 0x26 /* & */  || ch === 0x2A /* * */  || ch === 0x21 /* ! */  || ch === 0x7C /* | */  || ch === 0x3E /* > */  || ch === 0x27 /* ' */  || ch === 0x22 /* " */  || ch === 0x25 /* % */  || ch === 0x40 /* @ */  || ch === 0x60 /* ` */ ) {
        return false;
    }
    if (ch === 0x3F /* ? */  || ch === 0x2D /* - */ ) {
        following = state.input.charCodeAt(state.position + 1);
        if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
            return false;
        }
    }
    state.kind = "scalar";
    state.result = "";
    captureStart = captureEnd = state.position;
    hasPendingContent = false;
    while(ch !== 0){
        if (ch === 0x3A /* : */ ) {
            following = state.input.charCodeAt(state.position + 1);
            if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
                break;
            }
        } else if (ch === 0x23 /* # */ ) {
            preceding = state.input.charCodeAt(state.position - 1);
            if (is_WS_OR_EOL(preceding)) {
                break;
            }
        } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
            break;
        } else if (is_EOL(ch)) {
            _line = state.line;
            _lineStart = state.lineStart;
            _lineIndent = state.lineIndent;
            skipSeparationSpace(state, false, -1);
            if (state.lineIndent >= nodeIndent) {
                hasPendingContent = true;
                ch = state.input.charCodeAt(state.position);
                continue;
            } else {
                state.position = captureEnd;
                state.line = _line;
                state.lineStart = _lineStart;
                state.lineIndent = _lineIndent;
                break;
            }
        }
        if (hasPendingContent) {
            captureSegment(state, captureStart, captureEnd, false);
            writeFoldedLines(state, state.line - _line);
            captureStart = captureEnd = state.position;
            hasPendingContent = false;
        }
        if (!is_WHITE_SPACE(ch)) {
            captureEnd = state.position + 1;
        }
        ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, captureEnd, false);
    if (state.result) {
        return true;
    }
    state.kind = _kind;
    state.result = _result;
    return false;
}
function readSingleQuotedScalar(state, nodeIndent) {
    var ch, captureStart, captureEnd;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x27 /* ' */ ) {
        return false;
    }
    state.kind = "scalar";
    state.result = "";
    state.position++;
    captureStart = captureEnd = state.position;
    while((ch = state.input.charCodeAt(state.position)) !== 0){
        if (ch === 0x27 /* ' */ ) {
            captureSegment(state, captureStart, state.position, true);
            ch = state.input.charCodeAt(++state.position);
            if (ch === 0x27 /* ' */ ) {
                captureStart = state.position;
                state.position++;
                captureEnd = state.position;
            } else {
                return true;
            }
        } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true);
            writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
            captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
            throwError(state, "unexpected end of the document within a single quoted scalar");
        } else {
            state.position++;
            captureEnd = state.position;
        }
    }
    throwError(state, "unexpected end of the stream within a single quoted scalar");
}
function readDoubleQuotedScalar(state, nodeIndent) {
    var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x22 /* " */ ) {
        return false;
    }
    state.kind = "scalar";
    state.result = "";
    state.position++;
    captureStart = captureEnd = state.position;
    while((ch = state.input.charCodeAt(state.position)) !== 0){
        if (ch === 0x22 /* " */ ) {
            captureSegment(state, captureStart, state.position, true);
            state.position++;
            return true;
        } else if (ch === 0x5C /* \ */ ) {
            captureSegment(state, captureStart, state.position, true);
            ch = state.input.charCodeAt(++state.position);
            if (is_EOL(ch)) {
                skipSeparationSpace(state, false, nodeIndent);
            // TODO: rework to inline fn with no type cast?
            } else if (ch < 256 && simpleEscapeCheck[ch]) {
                state.result += simpleEscapeMap[ch];
                state.position++;
            } else if ((tmp = escapedHexLen(ch)) > 0) {
                hexLength = tmp;
                hexResult = 0;
                for(; hexLength > 0; hexLength--){
                    ch = state.input.charCodeAt(++state.position);
                    if ((tmp = fromHexCode(ch)) >= 0) {
                        hexResult = (hexResult << 4) + tmp;
                    } else {
                        throwError(state, "expected hexadecimal character");
                    }
                }
                state.result += charFromCodepoint(hexResult);
                state.position++;
            } else {
                throwError(state, "unknown escape sequence");
            }
            captureStart = captureEnd = state.position;
        } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true);
            writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
            captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
            throwError(state, "unexpected end of the document within a double quoted scalar");
        } else {
            state.position++;
            captureEnd = state.position;
        }
    }
    throwError(state, "unexpected end of the stream within a double quoted scalar");
}
function readFlowCollection(state, nodeIndent) {
    var readNext = true, _line, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = {}, keyNode, keyTag, valueNode, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 0x5B /* [ */ ) {
        terminator = 0x5D; /* ] */ 
        isMapping = false;
        _result = [];
    } else if (ch === 0x7B /* { */ ) {
        terminator = 0x7D; /* } */ 
        isMapping = true;
        _result = {};
    } else {
        return false;
    }
    if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(++state.position);
    while(ch !== 0){
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === terminator) {
            state.position++;
            state.tag = _tag;
            state.anchor = _anchor;
            state.kind = isMapping ? "mapping" : "sequence";
            state.result = _result;
            return true;
        } else if (!readNext) {
            throwError(state, "missed comma between flow collection entries");
        }
        keyTag = keyNode = valueNode = null;
        isPair = isExplicitPair = false;
        if (ch === 0x3F /* ? */ ) {
            following = state.input.charCodeAt(state.position + 1);
            if (is_WS_OR_EOL(following)) {
                isPair = isExplicitPair = true;
                state.position++;
                skipSeparationSpace(state, true, nodeIndent);
            }
        }
        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
        keyTag = state.tag;
        keyNode = state.result;
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if ((isExplicitPair || state.line === _line) && ch === 0x3A /* : */ ) {
            isPair = true;
            ch = state.input.charCodeAt(++state.position);
            skipSeparationSpace(state, true, nodeIndent);
            composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
            valueNode = state.result;
        }
        if (isMapping) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
        } else if (isPair) {
            _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
        } else {
            _result.push(keyNode);
        }
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === 0x2C /* , */ ) {
            readNext = true;
            ch = state.input.charCodeAt(++state.position);
        } else {
            readNext = false;
        }
    }
    throwError(state, "unexpected end of the stream within a flow collection");
}
function readBlockScalar(state, nodeIndent) {
    var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 0x7C /* | */ ) {
        folding = false;
    } else if (ch === 0x3E /* > */ ) {
        folding = true;
    } else {
        return false;
    }
    state.kind = "scalar";
    state.result = "";
    while(ch !== 0){
        ch = state.input.charCodeAt(++state.position);
        if (ch === 0x2B /* + */  || ch === 0x2D /* - */ ) {
            if (CHOMPING_CLIP === chomping) {
                chomping = ch === 0x2B /* + */  ? CHOMPING_KEEP : CHOMPING_STRIP;
            } else {
                throwError(state, "repeat of a chomping mode identifier");
            }
        } else if ((tmp = fromDecimalCode(ch)) >= 0) {
            if (tmp === 0) {
                throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
            } else if (!detectedIndent) {
                textIndent = nodeIndent + tmp - 1;
                detectedIndent = true;
            } else {
                throwError(state, "repeat of an indentation width identifier");
            }
        } else {
            break;
        }
    }
    if (is_WHITE_SPACE(ch)) {
        do {
            ch = state.input.charCodeAt(++state.position);
        }while (is_WHITE_SPACE(ch));
        if (ch === 0x23 /* # */ ) {
            do {
                ch = state.input.charCodeAt(++state.position);
            }while (!is_EOL(ch) && ch !== 0);
        }
    }
    while(ch !== 0){
        readLineBreak(state);
        state.lineIndent = 0;
        ch = state.input.charCodeAt(state.position);
        while((!detectedIndent || state.lineIndent < textIndent) && ch === 0x20 /* Space */ ){
            state.lineIndent++;
            ch = state.input.charCodeAt(++state.position);
        }
        if (!detectedIndent && state.lineIndent > textIndent) {
            textIndent = state.lineIndent;
        }
        if (is_EOL(ch)) {
            emptyLines++;
            continue;
        }
        // End of the scalar.
        if (state.lineIndent < textIndent) {
            // Perform the chomping.
            if (chomping === CHOMPING_KEEP) {
                state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
            } else if (chomping === CHOMPING_CLIP) {
                if (didReadContent) {
                    state.result += "\n";
                }
            }
            break;
        }
        // Folded style: use fancy rules to handle line breaks.
        if (folding) {
            // Lines starting with white space characters (more-indented lines) are not folded.
            if (is_WHITE_SPACE(ch)) {
                atMoreIndented = true;
                // except for the first content line (cf. Example 8.1)
                state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
            // End of more-indented block.
            } else if (atMoreIndented) {
                atMoreIndented = false;
                state.result += common.repeat("\n", emptyLines + 1);
            // Just one line break - perceive as the same line.
            } else if (emptyLines === 0) {
                if (didReadContent) {
                    state.result += " ";
                }
            // Several line breaks - perceive as different lines.
            } else {
                state.result += common.repeat("\n", emptyLines);
            }
        // Literal style: just add exact number of line breaks between content lines.
        } else {
            // Keep all line breaks except the header line break.
            state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
        }
        didReadContent = true;
        detectedIndent = true;
        emptyLines = 0;
        captureStart = state.position;
        while(!is_EOL(ch) && ch !== 0){
            ch = state.input.charCodeAt(++state.position);
        }
        captureSegment(state, captureStart, state.position, false);
    }
    return true;
}
function readBlockSequence(state, nodeIndent) {
    var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
    if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(state.position);
    while(ch !== 0){
        if (ch !== 0x2D /* - */ ) {
            break;
        }
        following = state.input.charCodeAt(state.position + 1);
        if (!is_WS_OR_EOL(following)) {
            break;
        }
        detected = true;
        state.position++;
        if (skipSeparationSpace(state, true, -1)) {
            if (state.lineIndent <= nodeIndent) {
                _result.push(null);
                ch = state.input.charCodeAt(state.position);
                continue;
            }
        }
        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
        _result.push(state.result);
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
            throwError(state, "bad indentation of a sequence entry");
        } else if (state.lineIndent < nodeIndent) {
            break;
        }
    }
    if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "sequence";
        state.result = _result;
        return true;
    }
    return false;
}
function readBlockMapping(state, nodeIndent, flowIndent) {
    var following, allowCompact, _line, _pos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = {}, keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
    if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(state.position);
    while(ch !== 0){
        following = state.input.charCodeAt(state.position + 1);
        _line = state.line; // Save the current line.
        _pos = state.position;
        //
        // Explicit notation case. There are two separate blocks:
        // first for the key (denoted by "?") and second for the value (denoted by ":")
        //
        if ((ch === 0x3F /* ? */  || ch === 0x3A /* : */ ) && is_WS_OR_EOL(following)) {
            if (ch === 0x3F /* ? */ ) {
                if (atExplicitKey) {
                    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
                    keyTag = keyNode = valueNode = null;
                }
                detected = true;
                atExplicitKey = true;
                allowCompact = true;
            } else if (atExplicitKey) {
                // i.e. 0x3A/* : */ === character after the explicit key.
                atExplicitKey = false;
                allowCompact = true;
            } else {
                throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
            }
            state.position += 1;
            ch = following;
        //
        // Implicit notation case. Flow-style node as the key first, then ":", and the value.
        //
        } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
            if (state.line === _line) {
                ch = state.input.charCodeAt(state.position);
                while(is_WHITE_SPACE(ch)){
                    ch = state.input.charCodeAt(++state.position);
                }
                if (ch === 0x3A /* : */ ) {
                    ch = state.input.charCodeAt(++state.position);
                    if (!is_WS_OR_EOL(ch)) {
                        throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
                    }
                    if (atExplicitKey) {
                        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
                        keyTag = keyNode = valueNode = null;
                    }
                    detected = true;
                    atExplicitKey = false;
                    allowCompact = false;
                    keyTag = state.tag;
                    keyNode = state.result;
                } else if (detected) {
                    throwError(state, "can not read an implicit mapping pair; a colon is missed");
                } else {
                    state.tag = _tag;
                    state.anchor = _anchor;
                    return true; // Keep the result of `composeNode`.
                }
            } else if (detected) {
                throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
            } else {
                state.tag = _tag;
                state.anchor = _anchor;
                return true; // Keep the result of `composeNode`.
            }
        } else {
            break; // Reading is done. Go to the epilogue.
        }
        //
        // Common reading code for both explicit and implicit notations.
        //
        if (state.line === _line || state.lineIndent > nodeIndent) {
            if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
                if (atExplicitKey) {
                    keyNode = state.result;
                } else {
                    valueNode = state.result;
                }
            }
            if (!atExplicitKey) {
                storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
                keyTag = keyNode = valueNode = null;
            }
            skipSeparationSpace(state, true, -1);
            ch = state.input.charCodeAt(state.position);
        }
        if (state.lineIndent > nodeIndent && ch !== 0) {
            throwError(state, "bad indentation of a mapping entry");
        } else if (state.lineIndent < nodeIndent) {
            break;
        }
    }
    //
    // Epilogue.
    //
    // Special case: last mapping's node contains only the key in explicit notation.
    if (atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
    }
    // Expose the resulting mapping.
    if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "mapping";
        state.result = _result;
    }
    return detected;
}
function readTagProperty(state) {
    var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x21 /* ! */ ) return false;
    if (state.tag !== null) {
        throwError(state, "duplication of a tag property");
    }
    ch = state.input.charCodeAt(++state.position);
    if (ch === 0x3C /* < */ ) {
        isVerbatim = true;
        ch = state.input.charCodeAt(++state.position);
    } else if (ch === 0x21 /* ! */ ) {
        isNamed = true;
        tagHandle = "!!";
        ch = state.input.charCodeAt(++state.position);
    } else {
        tagHandle = "!";
    }
    _position = state.position;
    if (isVerbatim) {
        do {
            ch = state.input.charCodeAt(++state.position);
        }while (ch !== 0 && ch !== 0x3E /* > */ );
        if (state.position < state.length) {
            tagName = state.input.slice(_position, state.position);
            ch = state.input.charCodeAt(++state.position);
        } else {
            throwError(state, "unexpected end of the stream within a verbatim tag");
        }
    } else {
        while(ch !== 0 && !is_WS_OR_EOL(ch)){
            if (ch === 0x21 /* ! */ ) {
                if (!isNamed) {
                    tagHandle = state.input.slice(_position - 1, state.position + 1);
                    if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                        throwError(state, "named tag handle cannot contain such characters");
                    }
                    isNamed = true;
                    _position = state.position + 1;
                } else {
                    throwError(state, "tag suffix cannot contain exclamation marks");
                }
            }
            ch = state.input.charCodeAt(++state.position);
        }
        tagName = state.input.slice(_position, state.position);
        if (PATTERN_FLOW_INDICATORS.test(tagName)) {
            throwError(state, "tag suffix cannot contain flow indicator characters");
        }
    }
    if (tagName && !PATTERN_TAG_URI.test(tagName)) {
        throwError(state, "tag name cannot contain such characters: " + tagName);
    }
    if (isVerbatim) {
        state.tag = tagName;
    } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
        state.tag = state.tagMap[tagHandle] + tagName;
    } else if (tagHandle === "!") {
        state.tag = "!" + tagName;
    } else if (tagHandle === "!!") {
        state.tag = "tag:yaml.org,2002:" + tagName;
    } else {
        throwError(state, 'undeclared tag handle "' + tagHandle + '"');
    }
    return true;
}
function readAnchorProperty(state) {
    var _position, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x26 /* & */ ) return false;
    if (state.anchor !== null) {
        throwError(state, "duplication of an anchor property");
    }
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while(ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)){
        ch = state.input.charCodeAt(++state.position);
    }
    if (state.position === _position) {
        throwError(state, "name of an anchor node must contain at least one character");
    }
    state.anchor = state.input.slice(_position, state.position);
    return true;
}
function readAlias(state) {
    var _position, alias, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x2A /* * */ ) return false;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while(ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)){
        ch = state.input.charCodeAt(++state.position);
    }
    if (state.position === _position) {
        throwError(state, "name of an alias node must contain at least one character");
    }
    alias = state.input.slice(_position, state.position);
    if (!_hasOwnProperty.call(state.anchorMap, alias)) {
        throwError(state, 'unidentified alias "' + alias + '"');
    }
    state.result = state.anchorMap[alias];
    skipSeparationSpace(state, true, -1);
    return true;
}
function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
    var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, type, flowIndent, blockIndent;
    if (state.listener !== null) {
        state.listener("open", state);
    }
    state.tag = null;
    state.anchor = null;
    state.kind = null;
    state.result = null;
    allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
    if (allowToSeek) {
        if (skipSeparationSpace(state, true, -1)) {
            atNewLine = true;
            if (state.lineIndent > parentIndent) {
                indentStatus = 1;
            } else if (state.lineIndent === parentIndent) {
                indentStatus = 0;
            } else if (state.lineIndent < parentIndent) {
                indentStatus = -1;
            }
        }
    }
    if (indentStatus === 1) {
        while(readTagProperty(state) || readAnchorProperty(state)){
            if (skipSeparationSpace(state, true, -1)) {
                atNewLine = true;
                allowBlockCollections = allowBlockStyles;
                if (state.lineIndent > parentIndent) {
                    indentStatus = 1;
                } else if (state.lineIndent === parentIndent) {
                    indentStatus = 0;
                } else if (state.lineIndent < parentIndent) {
                    indentStatus = -1;
                }
            } else {
                allowBlockCollections = false;
            }
        }
    }
    if (allowBlockCollections) {
        allowBlockCollections = atNewLine || allowCompact;
    }
    if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
        if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
            flowIndent = parentIndent;
        } else {
            flowIndent = parentIndent + 1;
        }
        blockIndent = state.position - state.lineStart;
        if (indentStatus === 1) {
            if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
                hasContent = true;
            } else {
                if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
                    hasContent = true;
                } else if (readAlias(state)) {
                    hasContent = true;
                    if (state.tag !== null || state.anchor !== null) {
                        throwError(state, "alias node should not have any properties");
                    }
                } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
                    hasContent = true;
                    if (state.tag === null) {
                        state.tag = "?";
                    }
                }
                if (state.anchor !== null) {
                    state.anchorMap[state.anchor] = state.result;
                }
            }
        } else if (indentStatus === 0) {
            // Special case: block sequences are allowed to have same indentation level as the parent.
            // http://www.yaml.org/spec/1.2/spec.html#id2799784
            hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
        }
    }
    if (state.tag !== null && state.tag !== "!") {
        if (state.tag === "?") {
            // Implicit resolving is not allowed for non-scalar types, and '?'
            // non-specific tag is only automatically assigned to plain scalars.
            //
            // We only need to check kind conformity in case user explicitly assigns '?'
            // tag, for example like this: "!<?> [0]"
            //
            if (state.result !== null && state.kind !== "scalar") {
                throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
            }
            for(typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1){
                type = state.implicitTypes[typeIndex];
                if (type.resolve(state.result)) {
                    state.result = type.construct(state.result);
                    state.tag = type.tag;
                    if (state.anchor !== null) {
                        state.anchorMap[state.anchor] = state.result;
                    }
                    break;
                }
            }
        } else if (_hasOwnProperty.call(state.typeMap[state.kind || "fallback"], state.tag)) {
            type = state.typeMap[state.kind || "fallback"][state.tag];
            if (state.result !== null && type.kind !== state.kind) {
                throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
            }
            if (!type.resolve(state.result)) {
                throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
            } else {
                state.result = type.construct(state.result);
                if (state.anchor !== null) {
                    state.anchorMap[state.anchor] = state.result;
                }
            }
        } else {
            throwError(state, "unknown tag !<" + state.tag + ">");
        }
    }
    if (state.listener !== null) {
        state.listener("close", state);
    }
    return state.tag !== null || state.anchor !== null || hasContent;
}
function readDocument(state) {
    var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
    state.version = null;
    state.checkLineBreaks = state.legacy;
    state.tagMap = {};
    state.anchorMap = {};
    while((ch = state.input.charCodeAt(state.position)) !== 0){
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if (state.lineIndent > 0 || ch !== 0x25 /* % */ ) {
            break;
        }
        hasDirectives = true;
        ch = state.input.charCodeAt(++state.position);
        _position = state.position;
        while(ch !== 0 && !is_WS_OR_EOL(ch)){
            ch = state.input.charCodeAt(++state.position);
        }
        directiveName = state.input.slice(_position, state.position);
        directiveArgs = [];
        if (directiveName.length < 1) {
            throwError(state, "directive name must not be less than one character in length");
        }
        while(ch !== 0){
            while(is_WHITE_SPACE(ch)){
                ch = state.input.charCodeAt(++state.position);
            }
            if (ch === 0x23 /* # */ ) {
                do {
                    ch = state.input.charCodeAt(++state.position);
                }while (ch !== 0 && !is_EOL(ch));
                break;
            }
            if (is_EOL(ch)) break;
            _position = state.position;
            while(ch !== 0 && !is_WS_OR_EOL(ch)){
                ch = state.input.charCodeAt(++state.position);
            }
            directiveArgs.push(state.input.slice(_position, state.position));
        }
        if (ch !== 0) readLineBreak(state);
        if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
            directiveHandlers[directiveName](state, directiveName, directiveArgs);
        } else {
            throwWarning(state, 'unknown document directive "' + directiveName + '"');
        }
    }
    skipSeparationSpace(state, true, -1);
    if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 0x2D /* - */  && state.input.charCodeAt(state.position + 1) === 0x2D /* - */  && state.input.charCodeAt(state.position + 2) === 0x2D /* - */ ) {
        state.position += 3;
        skipSeparationSpace(state, true, -1);
    } else if (hasDirectives) {
        throwError(state, "directives end mark is expected");
    }
    composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
    skipSeparationSpace(state, true, -1);
    if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
        throwWarning(state, "non-ASCII line breaks are interpreted as content");
    }
    state.documents.push(state.result);
    if (state.position === state.lineStart && testDocumentSeparator(state)) {
        if (state.input.charCodeAt(state.position) === 0x2E /* . */ ) {
            state.position += 3;
            skipSeparationSpace(state, true, -1);
        }
        return;
    }
    if (state.position < state.length - 1) {
        throwError(state, "end of the stream or a document separator is expected");
    } else {
        return;
    }
}
function loadDocuments(input, options) {
    input = String(input);
    options = options || {};
    if (input.length !== 0) {
        // Add tailing `\n` if not exists
        if (input.charCodeAt(input.length - 1) !== 0x0A /* LF */  && input.charCodeAt(input.length - 1) !== 0x0D /* CR */ ) {
            input += "\n";
        }
        // Strip BOM
        if (input.charCodeAt(0) === 0xFEFF) {
            input = input.slice(1);
        }
    }
    var state = new State(input, options);
    var nullpos = input.indexOf("\x00");
    if (nullpos !== -1) {
        state.position = nullpos;
        throwError(state, "null byte is not allowed in input");
    }
    // Use 0 as string terminator. That significantly simplifies bounds check.
    state.input += "\x00";
    while(state.input.charCodeAt(state.position) === 0x20 /* Space */ ){
        state.lineIndent += 1;
        state.position += 1;
    }
    while(state.position < state.length - 1){
        readDocument(state);
    }
    return state.documents;
}
function loadAll(input, iterator, options) {
    if (iterator !== null && typeof iterator === "object" && typeof options === "undefined") {
        options = iterator;
        iterator = null;
    }
    var documents = loadDocuments(input, options);
    if (typeof iterator !== "function") {
        return documents;
    }
    for(var index = 0, length = documents.length; index < length; index += 1){
        iterator(documents[index]);
    }
}
function load(input, options) {
    var documents = loadDocuments(input, options);
    if (documents.length === 0) {
        /*eslint-disable no-undefined*/ return undefined;
    } else if (documents.length === 1) {
        return documents[0];
    }
    throw new YAMLException("expected a single document in the stream, but found more");
}
function safeLoadAll(input, iterator, options) {
    if (typeof iterator === "object" && iterator !== null && typeof options === "undefined") {
        options = iterator;
        iterator = null;
    }
    return loadAll(input, iterator, common.extend({
        schema: DEFAULT_SAFE_SCHEMA
    }, options));
}
function safeLoad(input, options) {
    return load(input, common.extend({
        schema: DEFAULT_SAFE_SCHEMA
    }, options));
}
module.exports.loadAll = loadAll;
module.exports.load = load;
module.exports.safeLoadAll = safeLoadAll;
module.exports.safeLoad = safeLoad;


/***/ }),

/***/ 587:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var common = __webpack_require__(420);
function Mark(name, buffer, position, line, column) {
    this.name = name;
    this.buffer = buffer;
    this.position = position;
    this.line = line;
    this.column = column;
}
Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
    var head, start, tail, end, snippet;
    if (!this.buffer) return null;
    indent = indent || 4;
    maxLength = maxLength || 75;
    head = "";
    start = this.position;
    while(start > 0 && "\x00\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(start - 1)) === -1){
        start -= 1;
        if (this.position - start > maxLength / 2 - 1) {
            head = " ... ";
            start += 5;
            break;
        }
    }
    tail = "";
    end = this.position;
    while(end < this.buffer.length && "\x00\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(end)) === -1){
        end += 1;
        if (end - this.position > maxLength / 2 - 1) {
            tail = " ... ";
            end -= 5;
            break;
        }
    }
    snippet = this.buffer.slice(start, end);
    return common.repeat(" ", indent) + head + snippet + tail + "\n" + common.repeat(" ", indent + this.position - start + head.length) + "^";
};
Mark.prototype.toString = function toString(compact) {
    var snippet, where = "";
    if (this.name) {
        where += 'in "' + this.name + '" ';
    }
    where += "at line " + (this.line + 1) + ", column " + (this.column + 1);
    if (!compact) {
        snippet = this.getSnippet();
        if (snippet) {
            where += ":\n" + snippet;
        }
    }
    return where;
};
module.exports = Mark;


/***/ }),

/***/ 8086:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/*eslint-disable max-len*/ var common = __webpack_require__(420);
var YAMLException = __webpack_require__(3136);
var Type = __webpack_require__(7432);
function compileList(schema, name, result) {
    var exclude = [];
    schema.include.forEach(function(includedSchema) {
        result = compileList(includedSchema, name, result);
    });
    schema[name].forEach(function(currentType) {
        result.forEach(function(previousType, previousIndex) {
            if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
                exclude.push(previousIndex);
            }
        });
        result.push(currentType);
    });
    return result.filter(function(type, index) {
        return exclude.indexOf(index) === -1;
    });
}
function compileMap() {
    var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {}
    }, index, length;
    function collectType(type) {
        result[type.kind][type.tag] = result["fallback"][type.tag] = type;
    }
    for(index = 0, length = arguments.length; index < length; index += 1){
        arguments[index].forEach(collectType);
    }
    return result;
}
function Schema(definition) {
    this.include = definition.include || [];
    this.implicit = definition.implicit || [];
    this.explicit = definition.explicit || [];
    this.implicit.forEach(function(type) {
        if (type.loadKind && type.loadKind !== "scalar") {
            throw new YAMLException("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
        }
    });
    this.compiledImplicit = compileList(this, "implicit", []);
    this.compiledExplicit = compileList(this, "explicit", []);
    this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
}
Schema.DEFAULT = null;
Schema.create = function createSchema() {
    var schemas, types;
    switch(arguments.length){
        case 1:
            schemas = Schema.DEFAULT;
            types = arguments[0];
            break;
        case 2:
            schemas = arguments[0];
            types = arguments[1];
            break;
        default:
            throw new YAMLException("Wrong number of arguments for Schema.create function");
    }
    schemas = common.toArray(schemas);
    types = common.toArray(types);
    if (!schemas.every(function(schema) {
        return schema instanceof Schema;
    })) {
        throw new YAMLException("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
    }
    if (!types.every(function(type) {
        return type instanceof Type;
    })) {
        throw new YAMLException("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    }
    return new Schema({
        include: schemas,
        explicit: types
    });
};
module.exports = Schema;


/***/ }),

/***/ 8412:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Standard YAML's Core schema.
// http://www.yaml.org/spec/1.2/spec.html#id2804923
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, Core schema has no distinctions from JSON schema is JS-YAML.

var Schema = __webpack_require__(8086);
module.exports = new Schema({
    include: [
        __webpack_require__(3727)
    ]
});


/***/ }),

/***/ 925:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// JS-YAML's default schema for `load` function.
// It is not described in the YAML specification.
//
// This schema is based on JS-YAML's default safe schema and includes
// JavaScript-specific types: !!js/undefined, !!js/regexp and !!js/function.
//
// Also this schema is used as default base schema at `Schema.create` function.

var Schema = __webpack_require__(8086);
module.exports = Schema.DEFAULT = new Schema({
    include: [
        __webpack_require__(1457)
    ],
    explicit: [
        __webpack_require__(9636),
        __webpack_require__(3533),
        __webpack_require__(2496)
    ]
});


/***/ }),

/***/ 1457:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// JS-YAML's default schema for `safeLoad` function.
// It is not described in the YAML specification.
//
// This schema is based on standard YAML's Core schema and includes most of
// extra types described at YAML tag repository. (http://yaml.org/type/)

var Schema = __webpack_require__(8086);
module.exports = new Schema({
    include: [
        __webpack_require__(8412)
    ],
    implicit: [
        __webpack_require__(1872),
        __webpack_require__(456)
    ],
    explicit: [
        __webpack_require__(716),
        __webpack_require__(391),
        __webpack_require__(4669),
        __webpack_require__(9866)
    ]
});


/***/ }),

/***/ 179:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Standard YAML's Failsafe schema.
// http://www.yaml.org/spec/1.2/spec.html#id2802346

var Schema = __webpack_require__(8086);
module.exports = new Schema({
    explicit: [
        __webpack_require__(6241),
        __webpack_require__(3468),
        __webpack_require__(2118)
    ]
});


/***/ }),

/***/ 3727:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Standard YAML's JSON schema.
// http://www.yaml.org/spec/1.2/spec.html#id2803231
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, this schema is not such strict as defined in the YAML specification.
// It allows numbers in binary notaion, use `Null` and `NULL` as `null`, etc.

var Schema = __webpack_require__(8086);
module.exports = new Schema({
    include: [
        __webpack_require__(179)
    ],
    implicit: [
        __webpack_require__(7161),
        __webpack_require__(3737),
        __webpack_require__(213),
        __webpack_require__(9632)
    ]
});


/***/ }),

/***/ 7432:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var YAMLException = __webpack_require__(3136);
var TYPE_CONSTRUCTOR_OPTIONS = [
    "kind",
    "resolve",
    "construct",
    "instanceOf",
    "predicate",
    "represent",
    "defaultStyle",
    "styleAliases"
];
var YAML_NODE_KINDS = [
    "scalar",
    "sequence",
    "mapping"
];
function compileStyleAliases(map) {
    var result = {};
    if (map !== null) {
        Object.keys(map).forEach(function(style) {
            map[style].forEach(function(alias) {
                result[String(alias)] = style;
            });
        });
    }
    return result;
}
function Type(tag, options) {
    options = options || {};
    Object.keys(options).forEach(function(name) {
        if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
            throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
        }
    });
    // TODO: Add tag format check.
    this.tag = tag;
    this.kind = options["kind"] || null;
    this.resolve = options["resolve"] || function() {
        return true;
    };
    this.construct = options["construct"] || function(data) {
        return data;
    };
    this.instanceOf = options["instanceOf"] || null;
    this.predicate = options["predicate"] || null;
    this.represent = options["represent"] || null;
    this.defaultStyle = options["defaultStyle"] || null;
    this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
    if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
        throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
    }
}
module.exports = Type;


/***/ }),

/***/ 716:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/*eslint-disable no-bitwise*/ var NodeBuffer;
try {
    // A trick for browserified version, to not include `Buffer` shim
    var _require = undefined;
    NodeBuffer = (__webpack_require__(4300).Buffer);
} catch (__) {}
var Type = __webpack_require__(7432);
// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
function resolveYamlBinary(data) {
    if (data === null) return false;
    var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;
    // Convert one by one.
    for(idx = 0; idx < max; idx++){
        code = map.indexOf(data.charAt(idx));
        // Skip CR/LF
        if (code > 64) continue;
        // Fail on illegal characters
        if (code < 0) return false;
        bitlen += 6;
    }
    // If there are any bits left, source was corrupted
    return bitlen % 8 === 0;
}
function constructYamlBinary(data) {
    var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map = BASE64_MAP, bits = 0, result = [];
    // Collect by 6*4 bits (3 bytes)
    for(idx = 0; idx < max; idx++){
        if (idx % 4 === 0 && idx) {
            result.push(bits >> 16 & 0xFF);
            result.push(bits >> 8 & 0xFF);
            result.push(bits & 0xFF);
        }
        bits = bits << 6 | map.indexOf(input.charAt(idx));
    }
    // Dump tail
    tailbits = max % 4 * 6;
    if (tailbits === 0) {
        result.push(bits >> 16 & 0xFF);
        result.push(bits >> 8 & 0xFF);
        result.push(bits & 0xFF);
    } else if (tailbits === 18) {
        result.push(bits >> 10 & 0xFF);
        result.push(bits >> 2 & 0xFF);
    } else if (tailbits === 12) {
        result.push(bits >> 4 & 0xFF);
    }
    // Wrap into Buffer for NodeJS and leave Array for browser
    if (NodeBuffer) {
        // Support node 6.+ Buffer API when available
        return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
    }
    return result;
}
function representYamlBinary(object /*, style*/ ) {
    var result = "", bits = 0, idx, tail, max = object.length, map = BASE64_MAP;
    // Convert every three bytes to 4 ASCII characters.
    for(idx = 0; idx < max; idx++){
        if (idx % 3 === 0 && idx) {
            result += map[bits >> 18 & 0x3F];
            result += map[bits >> 12 & 0x3F];
            result += map[bits >> 6 & 0x3F];
            result += map[bits & 0x3F];
        }
        bits = (bits << 8) + object[idx];
    }
    // Dump tail
    tail = max % 3;
    if (tail === 0) {
        result += map[bits >> 18 & 0x3F];
        result += map[bits >> 12 & 0x3F];
        result += map[bits >> 6 & 0x3F];
        result += map[bits & 0x3F];
    } else if (tail === 2) {
        result += map[bits >> 10 & 0x3F];
        result += map[bits >> 4 & 0x3F];
        result += map[bits << 2 & 0x3F];
        result += map[64];
    } else if (tail === 1) {
        result += map[bits >> 2 & 0x3F];
        result += map[bits << 4 & 0x3F];
        result += map[64];
        result += map[64];
    }
    return result;
}
function isBinary(object) {
    return NodeBuffer && NodeBuffer.isBuffer(object);
}
module.exports = new Type("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: resolveYamlBinary,
    construct: constructYamlBinary,
    predicate: isBinary,
    represent: representYamlBinary
});


/***/ }),

/***/ 3737:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var Type = __webpack_require__(7432);
function resolveYamlBoolean(data) {
    if (data === null) return false;
    var max = data.length;
    return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
}
function constructYamlBoolean(data) {
    return data === "true" || data === "True" || data === "TRUE";
}
function isBoolean(object) {
    return Object.prototype.toString.call(object) === "[object Boolean]";
}
module.exports = new Type("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: resolveYamlBoolean,
    construct: constructYamlBoolean,
    predicate: isBoolean,
    represent: {
        lowercase: function(object) {
            return object ? "true" : "false";
        },
        uppercase: function(object) {
            return object ? "TRUE" : "FALSE";
        },
        camelcase: function(object) {
            return object ? "True" : "False";
        }
    },
    defaultStyle: "lowercase"
});


/***/ }),

/***/ 9632:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var common = __webpack_require__(420);
var Type = __webpack_require__(7432);
var YAML_FLOAT_PATTERN = new RegExp(// 2.5e4, 2.5 and integers
"^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?" + // .2e4, .2
// special case, seems not from spec
"|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?" + // 20:59
"|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*" + // .inf
"|[-+]?\\.(?:inf|Inf|INF)" + // .nan
"|\\.(?:nan|NaN|NAN))$");
function resolveYamlFloat(data) {
    if (data === null) return false;
    if (!YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
    // Probably should update regexp & check speed
    data[data.length - 1] === "_") {
        return false;
    }
    return true;
}
function constructYamlFloat(data) {
    var value, sign, base, digits;
    value = data.replace(/_/g, "").toLowerCase();
    sign = value[0] === "-" ? -1 : 1;
    digits = [];
    if ("+-".indexOf(value[0]) >= 0) {
        value = value.slice(1);
    }
    if (value === ".inf") {
        return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    } else if (value === ".nan") {
        return NaN;
    } else if (value.indexOf(":") >= 0) {
        value.split(":").forEach(function(v) {
            digits.unshift(parseFloat(v, 10));
        });
        value = 0.0;
        base = 1;
        digits.forEach(function(d) {
            value += d * base;
            base *= 60;
        });
        return sign * value;
    }
    return sign * parseFloat(value, 10);
}
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(object, style) {
    var res;
    if (isNaN(object)) {
        switch(style){
            case "lowercase":
                return ".nan";
            case "uppercase":
                return ".NAN";
            case "camelcase":
                return ".NaN";
        }
    } else if (Number.POSITIVE_INFINITY === object) {
        switch(style){
            case "lowercase":
                return ".inf";
            case "uppercase":
                return ".INF";
            case "camelcase":
                return ".Inf";
        }
    } else if (Number.NEGATIVE_INFINITY === object) {
        switch(style){
            case "lowercase":
                return "-.inf";
            case "uppercase":
                return "-.INF";
            case "camelcase":
                return "-.Inf";
        }
    } else if (common.isNegativeZero(object)) {
        return "-0.0";
    }
    res = object.toString(10);
    // JS stringifier can build scientific format without dots: 5e-100,
    // while YAML requres dot: 5.e-100. Fix it with simple hack
    return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
}
function isFloat(object) {
    return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
}
module.exports = new Type("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: resolveYamlFloat,
    construct: constructYamlFloat,
    predicate: isFloat,
    represent: representYamlFloat,
    defaultStyle: "lowercase"
});


/***/ }),

/***/ 213:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var common = __webpack_require__(420);
var Type = __webpack_require__(7432);
function isHexCode(c) {
    return 0x30 /* 0 */  <= c && c <= 0x39 /* 9 */  || 0x41 /* A */  <= c && c <= 0x46 /* F */  || 0x61 /* a */  <= c && c <= 0x66 /* f */ ;
}
function isOctCode(c) {
    return 0x30 /* 0 */  <= c && c <= 0x37 /* 7 */ ;
}
function isDecCode(c) {
    return 0x30 /* 0 */  <= c && c <= 0x39 /* 9 */ ;
}
function resolveYamlInteger(data) {
    if (data === null) return false;
    var max = data.length, index = 0, hasDigits = false, ch;
    if (!max) return false;
    ch = data[index];
    // sign
    if (ch === "-" || ch === "+") {
        ch = data[++index];
    }
    if (ch === "0") {
        // 0
        if (index + 1 === max) return true;
        ch = data[++index];
        // base 2, base 8, base 16
        if (ch === "b") {
            // base 2
            index++;
            for(; index < max; index++){
                ch = data[index];
                if (ch === "_") continue;
                if (ch !== "0" && ch !== "1") return false;
                hasDigits = true;
            }
            return hasDigits && ch !== "_";
        }
        if (ch === "x") {
            // base 16
            index++;
            for(; index < max; index++){
                ch = data[index];
                if (ch === "_") continue;
                if (!isHexCode(data.charCodeAt(index))) return false;
                hasDigits = true;
            }
            return hasDigits && ch !== "_";
        }
        // base 8
        for(; index < max; index++){
            ch = data[index];
            if (ch === "_") continue;
            if (!isOctCode(data.charCodeAt(index))) return false;
            hasDigits = true;
        }
        return hasDigits && ch !== "_";
    }
    // base 10 (except 0) or base 60
    // value should not start with `_`;
    if (ch === "_") return false;
    for(; index < max; index++){
        ch = data[index];
        if (ch === "_") continue;
        if (ch === ":") break;
        if (!isDecCode(data.charCodeAt(index))) {
            return false;
        }
        hasDigits = true;
    }
    // Should have digits and should not end with `_`
    if (!hasDigits || ch === "_") return false;
    // if !base60 - done;
    if (ch !== ":") return true;
    // base60 almost not used, no needs to optimize
    return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
}
function constructYamlInteger(data) {
    var value = data, sign = 1, ch, base, digits = [];
    if (value.indexOf("_") !== -1) {
        value = value.replace(/_/g, "");
    }
    ch = value[0];
    if (ch === "-" || ch === "+") {
        if (ch === "-") sign = -1;
        value = value.slice(1);
        ch = value[0];
    }
    if (value === "0") return 0;
    if (ch === "0") {
        if (value[1] === "b") return sign * parseInt(value.slice(2), 2);
        if (value[1] === "x") return sign * parseInt(value, 16);
        return sign * parseInt(value, 8);
    }
    if (value.indexOf(":") !== -1) {
        value.split(":").forEach(function(v) {
            digits.unshift(parseInt(v, 10));
        });
        value = 0;
        base = 1;
        digits.forEach(function(d) {
            value += d * base;
            base *= 60;
        });
        return sign * value;
    }
    return sign * parseInt(value, 10);
}
function isInteger(object) {
    return Object.prototype.toString.call(object) === "[object Number]" && object % 1 === 0 && !common.isNegativeZero(object);
}
module.exports = new Type("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: resolveYamlInteger,
    construct: constructYamlInteger,
    predicate: isInteger,
    represent: {
        binary: function(obj) {
            return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
        },
        octal: function(obj) {
            return obj >= 0 ? "0" + obj.toString(8) : "-0" + obj.toString(8).slice(1);
        },
        decimal: function(obj) {
            return obj.toString(10);
        },
        /* eslint-disable max-len */ hexadecimal: function(obj) {
            return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
        }
    },
    defaultStyle: "decimal",
    styleAliases: {
        binary: [
            2,
            "bin"
        ],
        octal: [
            8,
            "oct"
        ],
        decimal: [
            10,
            "dec"
        ],
        hexadecimal: [
            16,
            "hex"
        ]
    }
});


/***/ }),

/***/ 2496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var esprima;
// Browserified version does not have esprima
//
// 1. For node.js just require module as deps
// 2. For browser try to require mudule via external AMD system.
//    If not found - try to fallback to window.esprima. If not
//    found too - then fail to parse.
//
try {
    // workaround to exclude package from browserify list.
    var _require = undefined;
    esprima = __webpack_require__(3916);
} catch (_) {
    /* eslint-disable no-redeclare */ /* global window */ if (false) {}
}
var Type = __webpack_require__(7432);
function resolveJavascriptFunction(data) {
    if (data === null) return false;
    try {
        var source = "(" + data + ")", ast = esprima.parse(source, {
            range: true
        });
        if (ast.type !== "Program" || ast.body.length !== 1 || ast.body[0].type !== "ExpressionStatement" || ast.body[0].expression.type !== "ArrowFunctionExpression" && ast.body[0].expression.type !== "FunctionExpression") {
            return false;
        }
        return true;
    } catch (err) {
        return false;
    }
}
function constructJavascriptFunction(data) {
    /*jslint evil:true*/ var source = "(" + data + ")", ast = esprima.parse(source, {
        range: true
    }), params = [], body;
    if (ast.type !== "Program" || ast.body.length !== 1 || ast.body[0].type !== "ExpressionStatement" || ast.body[0].expression.type !== "ArrowFunctionExpression" && ast.body[0].expression.type !== "FunctionExpression") {
        throw new Error("Failed to resolve function");
    }
    ast.body[0].expression.params.forEach(function(param) {
        params.push(param.name);
    });
    body = ast.body[0].expression.body.range;
    // Esprima's ranges include the first '{' and the last '}' characters on
    // function expressions. So cut them out.
    if (ast.body[0].expression.body.type === "BlockStatement") {
        /*eslint-disable no-new-func*/ return new Function(params, source.slice(body[0] + 1, body[1] - 1));
    }
    // ES6 arrow functions can omit the BlockStatement. In that case, just return
    // the body.
    /*eslint-disable no-new-func*/ return new Function(params, "return " + source.slice(body[0], body[1]));
}
function representJavascriptFunction(object /*, style*/ ) {
    return object.toString();
}
function isFunction(object) {
    return Object.prototype.toString.call(object) === "[object Function]";
}
module.exports = new Type("tag:yaml.org,2002:js/function", {
    kind: "scalar",
    resolve: resolveJavascriptFunction,
    construct: constructJavascriptFunction,
    predicate: isFunction,
    represent: representJavascriptFunction
});


/***/ }),

/***/ 3533:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var Type = __webpack_require__(7432);
function resolveJavascriptRegExp(data) {
    if (data === null) return false;
    if (data.length === 0) return false;
    var regexp = data, tail = /\/([gim]*)$/.exec(data), modifiers = "";
    // if regexp starts with '/' it can have modifiers and must be properly closed
    // `/foo/gim` - modifiers tail can be maximum 3 chars
    if (regexp[0] === "/") {
        if (tail) modifiers = tail[1];
        if (modifiers.length > 3) return false;
        // if expression starts with /, is should be properly terminated
        if (regexp[regexp.length - modifiers.length - 1] !== "/") return false;
    }
    return true;
}
function constructJavascriptRegExp(data) {
    var regexp = data, tail = /\/([gim]*)$/.exec(data), modifiers = "";
    // `/foo/gim` - tail can be maximum 4 chars
    if (regexp[0] === "/") {
        if (tail) modifiers = tail[1];
        regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
    }
    return new RegExp(regexp, modifiers);
}
function representJavascriptRegExp(object /*, style*/ ) {
    var result = "/" + object.source + "/";
    if (object.global) result += "g";
    if (object.multiline) result += "m";
    if (object.ignoreCase) result += "i";
    return result;
}
function isRegExp(object) {
    return Object.prototype.toString.call(object) === "[object RegExp]";
}
module.exports = new Type("tag:yaml.org,2002:js/regexp", {
    kind: "scalar",
    resolve: resolveJavascriptRegExp,
    construct: constructJavascriptRegExp,
    predicate: isRegExp,
    represent: representJavascriptRegExp
});


/***/ }),

/***/ 9636:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var Type = __webpack_require__(7432);
function resolveJavascriptUndefined() {
    return true;
}
function constructJavascriptUndefined() {
    /*eslint-disable no-undefined*/ return undefined;
}
function representJavascriptUndefined() {
    return "";
}
function isUndefined(object) {
    return typeof object === "undefined";
}
module.exports = new Type("tag:yaml.org,2002:js/undefined", {
    kind: "scalar",
    resolve: resolveJavascriptUndefined,
    construct: constructJavascriptUndefined,
    predicate: isUndefined,
    represent: representJavascriptUndefined
});


/***/ }),

/***/ 2118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var Type = __webpack_require__(7432);
module.exports = new Type("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: function(data) {
        return data !== null ? data : {};
    }
});


/***/ }),

/***/ 456:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var Type = __webpack_require__(7432);
function resolveYamlMerge(data) {
    return data === "<<" || data === null;
}
module.exports = new Type("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: resolveYamlMerge
});


/***/ }),

/***/ 7161:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var Type = __webpack_require__(7432);
function resolveYamlNull(data) {
    if (data === null) return true;
    var max = data.length;
    return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
}
function constructYamlNull() {
    return null;
}
function isNull(object) {
    return object === null;
}
module.exports = new Type("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: resolveYamlNull,
    construct: constructYamlNull,
    predicate: isNull,
    represent: {
        canonical: function() {
            return "~";
        },
        lowercase: function() {
            return "null";
        },
        uppercase: function() {
            return "NULL";
        },
        camelcase: function() {
            return "Null";
        }
    },
    defaultStyle: "lowercase"
});


/***/ }),

/***/ 391:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var Type = __webpack_require__(7432);
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _toString = Object.prototype.toString;
function resolveYamlOmap(data) {
    if (data === null) return true;
    var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
    for(index = 0, length = object.length; index < length; index += 1){
        pair = object[index];
        pairHasKey = false;
        if (_toString.call(pair) !== "[object Object]") return false;
        for(pairKey in pair){
            if (_hasOwnProperty.call(pair, pairKey)) {
                if (!pairHasKey) pairHasKey = true;
                else return false;
            }
        }
        if (!pairHasKey) return false;
        if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
        else return false;
    }
    return true;
}
function constructYamlOmap(data) {
    return data !== null ? data : [];
}
module.exports = new Type("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: resolveYamlOmap,
    construct: constructYamlOmap
});


/***/ }),

/***/ 4669:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var Type = __webpack_require__(7432);
var _toString = Object.prototype.toString;
function resolveYamlPairs(data) {
    if (data === null) return true;
    var index, length, pair, keys, result, object = data;
    result = new Array(object.length);
    for(index = 0, length = object.length; index < length; index += 1){
        pair = object[index];
        if (_toString.call(pair) !== "[object Object]") return false;
        keys = Object.keys(pair);
        if (keys.length !== 1) return false;
        result[index] = [
            keys[0],
            pair[keys[0]]
        ];
    }
    return true;
}
function constructYamlPairs(data) {
    if (data === null) return [];
    var index, length, pair, keys, result, object = data;
    result = new Array(object.length);
    for(index = 0, length = object.length; index < length; index += 1){
        pair = object[index];
        keys = Object.keys(pair);
        result[index] = [
            keys[0],
            pair[keys[0]]
        ];
    }
    return result;
}
module.exports = new Type("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: resolveYamlPairs,
    construct: constructYamlPairs
});


/***/ }),

/***/ 3468:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var Type = __webpack_require__(7432);
module.exports = new Type("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: function(data) {
        return data !== null ? data : [];
    }
});


/***/ }),

/***/ 9866:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var Type = __webpack_require__(7432);
var _hasOwnProperty = Object.prototype.hasOwnProperty;
function resolveYamlSet(data) {
    if (data === null) return true;
    var key, object = data;
    for(key in object){
        if (_hasOwnProperty.call(object, key)) {
            if (object[key] !== null) return false;
        }
    }
    return true;
}
function constructYamlSet(data) {
    return data !== null ? data : {};
}
module.exports = new Type("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: resolveYamlSet,
    construct: constructYamlSet
});


/***/ }),

/***/ 6241:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var Type = __webpack_require__(7432);
module.exports = new Type("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: function(data) {
        return data !== null ? data : "";
    }
});


/***/ }),

/***/ 1872:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var Type = __webpack_require__(7432);
var YAML_DATE_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])" + // [1] year
"-([0-9][0-9])" + // [2] month
"-([0-9][0-9])$"); // [3] day
var YAML_TIMESTAMP_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])" + // [1] year
"-([0-9][0-9]?)" + // [2] month
"-([0-9][0-9]?)" + // [3] day
"(?:[Tt]|[ \\t]+)" + // ...
"([0-9][0-9]?)" + // [4] hour
":([0-9][0-9])" + // [5] minute
":([0-9][0-9])" + // [6] second
"(?:\\.([0-9]*))?" + // [7] fraction
"(?:[ \\t]*(Z|([-+])([0-9][0-9]?)" + // [8] tz [9] tz_sign [10] tz_hour
"(?::([0-9][0-9]))?))?$"); // [11] tz_minute
function resolveYamlTimestamp(data) {
    if (data === null) return false;
    if (YAML_DATE_REGEXP.exec(data) !== null) return true;
    if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
    return false;
}
function constructYamlTimestamp(data) {
    var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
    match = YAML_DATE_REGEXP.exec(data);
    if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);
    if (match === null) throw new Error("Date resolve error");
    // match: [1] year [2] month [3] day
    year = +match[1];
    month = +match[2] - 1; // JS month starts with 0
    day = +match[3];
    if (!match[4]) {
        return new Date(Date.UTC(year, month, day));
    }
    // match: [4] hour [5] minute [6] second [7] fraction
    hour = +match[4];
    minute = +match[5];
    second = +match[6];
    if (match[7]) {
        fraction = match[7].slice(0, 3);
        while(fraction.length < 3){
            fraction += "0";
        }
        fraction = +fraction;
    }
    // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute
    if (match[9]) {
        tz_hour = +match[10];
        tz_minute = +(match[11] || 0);
        delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
        if (match[9] === "-") delta = -delta;
    }
    date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
    if (delta) date.setTime(date.getTime() - delta);
    return date;
}
function representYamlTimestamp(object /*, style*/ ) {
    return object.toISOString();
}
module.exports = new Type("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: resolveYamlTimestamp,
    construct: constructYamlTimestamp,
    instanceOf: Date,
    represent: representYamlTimestamp
});


/***/ }),

/***/ 5674:
/***/ ((module) => {

/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */ 
module.exports = function isExtendable(val) {
    return typeof val !== "undefined" && val !== null && (typeof val === "object" || typeof val === "function");
};


/***/ }),

/***/ 6111:
/***/ ((module) => {


var toString = Object.prototype.toString;
module.exports = function kindOf(val) {
    if (val === void 0) return "undefined";
    if (val === null) return "null";
    var type = typeof val;
    if (type === "boolean") return "boolean";
    if (type === "string") return "string";
    if (type === "number") return "number";
    if (type === "symbol") return "symbol";
    if (type === "function") {
        return isGeneratorFn(val) ? "generatorfunction" : "function";
    }
    if (isArray(val)) return "array";
    if (isBuffer(val)) return "buffer";
    if (isArguments(val)) return "arguments";
    if (isDate(val)) return "date";
    if (isError(val)) return "error";
    if (isRegexp(val)) return "regexp";
    switch(ctorName(val)){
        case "Symbol":
            return "symbol";
        case "Promise":
            return "promise";
        // Set, Map, WeakSet, WeakMap
        case "WeakMap":
            return "weakmap";
        case "WeakSet":
            return "weakset";
        case "Map":
            return "map";
        case "Set":
            return "set";
        // 8-bit typed arrays
        case "Int8Array":
            return "int8array";
        case "Uint8Array":
            return "uint8array";
        case "Uint8ClampedArray":
            return "uint8clampedarray";
        // 16-bit typed arrays
        case "Int16Array":
            return "int16array";
        case "Uint16Array":
            return "uint16array";
        // 32-bit typed arrays
        case "Int32Array":
            return "int32array";
        case "Uint32Array":
            return "uint32array";
        case "Float32Array":
            return "float32array";
        case "Float64Array":
            return "float64array";
    }
    if (isGeneratorObj(val)) {
        return "generator";
    }
    // Non-plain objects
    type = toString.call(val);
    switch(type){
        case "[object Object]":
            return "object";
        // iterators
        case "[object Map Iterator]":
            return "mapiterator";
        case "[object Set Iterator]":
            return "setiterator";
        case "[object String Iterator]":
            return "stringiterator";
        case "[object Array Iterator]":
            return "arrayiterator";
    }
    // other
    return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
};
function ctorName(val) {
    return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isArray(val) {
    if (Array.isArray) return Array.isArray(val);
    return val instanceof Array;
}
function isError(val) {
    return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
    if (val instanceof Date) return true;
    return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function isRegexp(val) {
    if (val instanceof RegExp) return true;
    return typeof val.flags === "string" && typeof val.ignoreCase === "boolean" && typeof val.multiline === "boolean" && typeof val.global === "boolean";
}
function isGeneratorFn(name, val) {
    return ctorName(name) === "GeneratorFunction";
}
function isGeneratorObj(val) {
    return typeof val.throw === "function" && typeof val.return === "function" && typeof val.next === "function";
}
function isArguments(val) {
    try {
        if (typeof val.length === "number" && typeof val.callee === "function") {
            return true;
        }
    } catch (err) {
        if (err.message.indexOf("callee") !== -1) {
            return true;
        }
    }
    return false;
}
/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */ function isBuffer(val) {
    if (val.constructor && typeof val.constructor.isBuffer === "function") {
        return val.constructor.isBuffer(val);
    }
    return false;
}


/***/ }),

/***/ 1313:
/***/ ((__unused_webpack_module, exports) => {

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Modified from https://github.com/facebook/react/blob/main/packages/react-server-dom-webpack/src/ReactFlightWebpackNodeRegister.js

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createProxy", ({
    enumerable: true,
    get: function() {
        return createProxy;
    }
}));
const CLIENT_REFERENCE = Symbol.for("react.client.reference");
const PROMISE_PROTOTYPE = Promise.prototype;
const deepProxyHandlers = {
    get: function(target, name, _receiver) {
        switch(name){
            // These names are read by the Flight runtime if you end up using the exports object.
            case "$$typeof":
                // These names are a little too common. We should probably have a way to
                // have the Flight runtime extract the inner target instead.
                return target.$$typeof;
            case "$$id":
                return target.$$id;
            case "$$async":
                return target.$$async;
            case "name":
                return target.name;
            case "displayName":
                return undefined;
            // We need to special case this because createElement reads it if we pass this
            // reference.
            case "defaultProps":
                return undefined;
            // Avoid this attempting to be serialized.
            case "toJSON":
                return undefined;
            case Symbol.toPrimitive.toString():
                // @ts-ignore
                return Object.prototype[Symbol.toPrimitive];
            case "Provider":
                throw new Error(`Cannot render a Client Context Provider on the Server. ` + `Instead, you can export a Client Component wrapper ` + `that itself renders a Client Context Provider.`);
            default:
                break;
        }
        const expression = String(target.name) + "." + String(name);
        throw new Error(`Cannot access ${expression} on the server. ` + "You cannot dot into a client module from a server component. " + "You can only pass the imported name through.");
    },
    set: function() {
        throw new Error("Cannot assign to a client module from a server module.");
    }
};
const proxyHandlers = {
    get: function(target, name, _receiver) {
        switch(name){
            // These names are read by the Flight runtime if you end up using the exports object.
            case "$$typeof":
                return target.$$typeof;
            case "$$id":
                return target.$$id;
            case "$$async":
                return target.$$async;
            case "name":
                return target.name;
            // We need to special case this because createElement reads it if we pass this
            // reference.
            case "defaultProps":
                return undefined;
            // Avoid this attempting to be serialized.
            case "toJSON":
                return undefined;
            case Symbol.toPrimitive.toString():
                // @ts-ignore
                return Object.prototype[Symbol.toPrimitive];
            case "__esModule":
                // Something is conditionally checking which export to use. We'll pretend to be
                // an ESM compat module but then we'll check again on the client.
                const moduleId = target.$$id;
                target.default = Object.defineProperties(function() {
                    throw new Error(`Attempted to call the default export of ${moduleId} from the server ` + `but it's on the client. It's not possible to invoke a client function from ` + `the server, it can only be rendered as a Component or passed to props of a ` + `Client Component.`);
                }, {
                    $$typeof: {
                        value: CLIENT_REFERENCE
                    },
                    // This a placeholder value that tells the client to conditionally use the
                    // whole object or just the default export.
                    $$id: {
                        value: target.$$id + "#"
                    },
                    $$async: {
                        value: target.$$async
                    }
                });
                return true;
            case "then":
                if (target.then) {
                    // Use a cached value
                    return target.then;
                }
                if (!target.$$async) {
                    // If this module is expected to return a Promise (such as an AsyncModule) then
                    // we should resolve that with a client reference that unwraps the Promise on
                    // the client.
                    const clientReference = Object.defineProperties({}, {
                        $$typeof: {
                            value: CLIENT_REFERENCE
                        },
                        $$id: {
                            value: target.$$id
                        },
                        $$async: {
                            value: true
                        }
                    });
                    const proxy = new Proxy(clientReference, proxyHandlers);
                    // Treat this as a resolved Promise for React's use()
                    target.status = "fulfilled";
                    target.value = proxy;
                    const then = target.then = Object.defineProperties(function then(resolve, _reject) {
                        // Expose to React.
                        return Promise.resolve(resolve(proxy));
                    }, // export then we should treat it as a reference to that name.
                    {
                        $$typeof: {
                            value: CLIENT_REFERENCE
                        },
                        $$id: {
                            value: target.$$id
                        },
                        $$async: {
                            value: false
                        }
                    });
                    return then;
                } else {
                    // Since typeof .then === 'function' is a feature test we'd continue recursing
                    // indefinitely if we return a function. Instead, we return an object reference
                    // if we check further.
                    return undefined;
                }
            default:
                break;
        }
        let cachedReference = target[name];
        if (!cachedReference) {
            const reference = Object.defineProperties(function() {
                throw new Error(`Attempted to call ${String(name)}() from the server but ${String(name)} is on the client. ` + `It's not possible to invoke a client function from the server, it can ` + `only be rendered as a Component or passed to props of a Client Component.`);
            }, {
                $$typeof: {
                    value: CLIENT_REFERENCE
                },
                $$id: {
                    value: target.$$id + "#" + name
                },
                $$async: {
                    value: target.$$async
                }
            });
            cachedReference = target[name] = new Proxy(reference, deepProxyHandlers);
        }
        return cachedReference;
    },
    getPrototypeOf (_target) {
        // Pretend to be a Promise in case anyone asks.
        return PROMISE_PROTOTYPE;
    },
    set: function() {
        throw new Error("Cannot assign to a client module from a server module.");
    }
};
function createProxy(moduleId) {
    const clientReference = Object.defineProperties({}, {
        $$typeof: {
            value: CLIENT_REFERENCE
        },
        // Represents the whole Module object instead of a particular import.
        $$id: {
            value: moduleId
        },
        $$async: {
            value: false
        }
    });
    return new Proxy(clientReference, proxyHandlers);
} //# sourceMappingURL=module-proxy.js.map


/***/ }),

/***/ 4592:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1313);
module.exports = createProxy("C:\\Users\\luksk\\Desktop\\Nextjs_mdx_blog\\node_modules\\next\\dist\\client\\components\\app-router.js");
 //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 2673:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1313);
module.exports = createProxy("C:\\Users\\luksk\\Desktop\\Nextjs_mdx_blog\\node_modules\\next\\dist\\client\\components\\error-boundary.js");
 //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 6301:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1313);
module.exports = createProxy("C:\\Users\\luksk\\Desktop\\Nextjs_mdx_blog\\node_modules\\next\\dist\\client\\components\\layout-router.js");
 //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 7431:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1313);
module.exports = createProxy("C:\\Users\\luksk\\Desktop\\Nextjs_mdx_blog\\node_modules\\next\\dist\\client\\components\\render-from-template-context.js");
 //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 2527:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createSearchParamsBailoutProxy", ({
    enumerable: true,
    get: function() {
        return createSearchParamsBailoutProxy;
    }
}));
const _staticgenerationbailout = __webpack_require__(5486);
function createSearchParamsBailoutProxy() {
    return new Proxy({}, {
        get (_target, prop) {
            // React adds some properties on the object when serializing for client components
            if (typeof prop === "string") {
                (0, _staticgenerationbailout.staticGenerationBailout)("searchParams." + prop);
            }
        }
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=searchparams-bailout-proxy.js.map


/***/ }),

/***/ 6404:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1313);
module.exports = createProxy("C:\\Users\\luksk\\Desktop\\Nextjs_mdx_blog\\node_modules\\next\\dist\\client\\components\\static-generation-searchparams-bailout-provider.js");
 //# sourceMappingURL=static-generation-searchparams-bailout-provider.js.map


/***/ }),

/***/ 273:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1313);
module.exports = createProxy("C:\\Users\\luksk\\Desktop\\Nextjs_mdx_blog\\node_modules\\next\\dist\\client\\link.js");
 //# sourceMappingURL=link.js.map


/***/ }),

/***/ 362:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react-dom-server-rendering-stub.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var d = {
    usingClientEntryPoint: !1,
    Events: null,
    Dispatcher: {
        current: null
    }
};
function e(c) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + c, a = 1; a < arguments.length; a++)b += "&args[]=" + encodeURIComponent(arguments[a]);
    return "Minified React error #" + c + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var f = d.Dispatcher;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d;
exports.createPortal = function() {
    throw Error(e(448));
};
exports.experimental_useFormStatus = function() {
    throw Error(e(248));
};
exports.flushSync = function() {
    throw Error(e(449));
};
exports.preconnect = function(c, b) {
    var a = f.current;
    a && a.preconnect(c, b);
};
exports.prefetchDNS = function(c) {
    var b = f.current;
    b && b.prefetchDNS(c);
};
exports.preinit = function(c, b) {
    var a = f.current;
    a && a.preinit(c, b);
};
exports.preload = function(c, b) {
    var a = f.current;
    a && a.preload(c, b);
};
exports.version = "18.3.0-canary-1cea38448-20230530";


/***/ }),

/***/ 6155:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


if (true) {
    module.exports = __webpack_require__(362);
} else {}


/***/ }),

/***/ 8387:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-server-dom-webpack-server.edge.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var aa = __webpack_require__(7887), ba = __webpack_require__(6155), l = null, m = 0;
function n(a, b) {
    if (0 !== b.length) if (512 < b.length) 0 < m && (a.enqueue(new Uint8Array(l.buffer, 0, m)), l = new Uint8Array(512), m = 0), a.enqueue(b);
    else {
        var d = l.length - m;
        d < b.length && (0 === d ? a.enqueue(l) : (l.set(b.subarray(0, d), m), a.enqueue(l), b = b.subarray(d)), l = new Uint8Array(512), m = 0);
        l.set(b, m);
        m += b.length;
    }
    return !0;
}
var p = new TextEncoder;
function ca(a, b) {
    "function" === typeof a.error ? a.error(b) : a.close();
}
var q = Symbol.for("react.client.reference"), da = Symbol.for("react.server.reference"), ja = {
    prefetchDNS: ea,
    preconnect: fa,
    preload: ha,
    preinit: ia
};
function ea(a, b) {
    if ("string" === typeof a) {
        var d = t();
        if (d) {
            var c = d.hints, e = "D" + a;
            c.has(e) || (c.add(e), b ? u(d, "D", [
                a,
                b
            ]) : u(d, "D", a), v(d));
        }
    }
}
function fa(a, b) {
    if ("string" === typeof a) {
        var d = t();
        if (d) {
            var c = d.hints, e = null == b || "string" !== typeof b.crossOrigin ? null : "use-credentials" === b.crossOrigin ? "use-credentials" : "";
            e = "C" + (null === e ? "null" : e) + "|" + a;
            c.has(e) || (c.add(e), b ? u(d, "C", [
                a,
                b
            ]) : u(d, "C", a), v(d));
        }
    }
}
function ha(a, b) {
    if ("string" === typeof a) {
        var d = t();
        if (d) {
            var c = d.hints, e = "L" + a;
            c.has(e) || (c.add(e), u(d, "L", [
                a,
                b
            ]), v(d));
        }
    }
}
function ia(a, b) {
    if ("string" === typeof a) {
        var d = t();
        if (d) {
            var c = d.hints, e = "I" + a;
            c.has(e) || (c.add(e), u(d, "I", [
                a,
                b
            ]), v(d));
        }
    }
}
var ka = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Dispatcher, A = "function" === typeof AsyncLocalStorage, ma = A ? new AsyncLocalStorage : null, B = Symbol.for("react.element"), na = Symbol.for("react.fragment"), oa = Symbol.for("react.provider"), pa = Symbol.for("react.server_context"), qa = Symbol.for("react.forward_ref"), ra = Symbol.for("react.suspense"), sa = Symbol.for("react.suspense_list"), ta = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), ua = Symbol.for("react.default_value"), va = Symbol.for("react.memo_cache_sentinel"), wa = Symbol.iterator, D = null;
function E(a, b) {
    if (a !== b) {
        a.context._currentValue = a.parentValue;
        a = a.parent;
        var d = b.parent;
        if (null === a) {
            if (null !== d) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
            if (null === d) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
            E(a, d);
            b.context._currentValue = b.value;
        }
    }
}
function xa(a) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    null !== a && xa(a);
}
function ya(a) {
    var b = a.parent;
    null !== b && ya(b);
    a.context._currentValue = a.value;
}
function za(a, b) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === b.depth ? E(a, b) : za(a, b);
}
function Aa(a, b) {
    var d = b.parent;
    if (null === d) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === d.depth ? E(a, d) : Aa(a, d);
    b.context._currentValue = b.value;
}
function F(a) {
    var b = D;
    b !== a && (null === b ? ya(a) : null === a ? xa(b) : b.depth === a.depth ? E(b, a) : b.depth > a.depth ? za(b, a) : Aa(b, a), D = a);
}
function Ba(a, b) {
    var d = a._currentValue;
    a._currentValue = b;
    var c = D;
    return D = a = {
        parent: c,
        depth: null === c ? 0 : c.depth + 1,
        context: a,
        parentValue: d,
        value: b
    };
}
var G = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`");
function Ca() {}
function Da(a, b, d) {
    d = a[d];
    void 0 === d ? a.push(b) : d !== b && (b.then(Ca, Ca), b = d);
    switch(b.status){
        case "fulfilled":
            return b.value;
        case "rejected":
            throw b.reason;
        default:
            if ("string" !== typeof b.status) switch(a = b, a.status = "pending", a.then(function(c) {
                if ("pending" === b.status) {
                    var e = b;
                    e.status = "fulfilled";
                    e.value = c;
                }
            }, function(c) {
                if ("pending" === b.status) {
                    var e = b;
                    e.status = "rejected";
                    e.reason = c;
                }
            }), b.status){
                case "fulfilled":
                    return b.value;
                case "rejected":
                    throw b.reason;
            }
            H = b;
            throw G;
    }
}
var H = null;
function Ea() {
    if (null === H) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
    var a = H;
    H = null;
    return a;
}
var I = null, J = 0, K = null;
function Fa() {
    var a = K;
    K = null;
    return a;
}
function Ga(a) {
    return a._currentValue;
}
var Ka = {
    useMemo: function(a) {
        return a();
    },
    useCallback: function(a) {
        return a;
    },
    useDebugValue: function() {},
    useDeferredValue: L,
    useTransition: L,
    readContext: Ga,
    useContext: Ga,
    useReducer: L,
    useRef: L,
    useState: L,
    useInsertionEffect: L,
    useLayoutEffect: L,
    useImperativeHandle: L,
    useEffect: L,
    useId: Ha,
    useMutableSource: L,
    useSyncExternalStore: L,
    useCacheRefresh: function() {
        return Ia;
    },
    useMemoCache: function(a) {
        for(var b = Array(a), d = 0; d < a; d++)b[d] = va;
        return b;
    },
    use: Ja
};
function L() {
    throw Error("This Hook is not supported in Server Components.");
}
function Ia() {
    throw Error("Refreshing the cache is not supported in Server Components.");
}
function Ha() {
    if (null === I) throw Error("useId can only be used while React is rendering");
    var a = I.identifierCount++;
    return ":" + I.identifierPrefix + "S" + a.toString(32) + ":";
}
function Ja(a) {
    if (null !== a && "object" === typeof a || "function" === typeof a) {
        if ("function" === typeof a.then) {
            var b = J;
            J += 1;
            null === K && (K = []);
            return Da(K, a, b);
        }
        if (a.$$typeof === pa) return a._currentValue;
    }
    throw Error("An unsupported type was passed to use(): " + String(a));
}
function La() {
    return (new AbortController).signal;
}
function Ma() {
    var a = t();
    return a ? a.cache : new Map;
}
var Na = {
    getCacheSignal: function() {
        var a = Ma(), b = a.get(La);
        void 0 === b && (b = La(), a.set(La, b));
        return b;
    },
    getCacheForType: function(a) {
        var b = Ma(), d = b.get(a);
        void 0 === d && (d = a(), b.set(a, d));
        return d;
    }
}, Oa = Array.isArray;
function Pa(a) {
    return Object.prototype.toString.call(a).replace(/^\[object (.*)\]$/, function(b, d) {
        return d;
    });
}
function Qa(a) {
    switch(typeof a){
        case "string":
            return JSON.stringify(10 >= a.length ? a : a.slice(0, 10) + "...");
        case "object":
            if (Oa(a)) return "[...]";
            a = Pa(a);
            return "Object" === a ? "{...}" : a;
        case "function":
            return "function";
        default:
            return String(a);
    }
}
function M(a) {
    if ("string" === typeof a) return a;
    switch(a){
        case ra:
            return "Suspense";
        case sa:
            return "SuspenseList";
    }
    if ("object" === typeof a) switch(a.$$typeof){
        case qa:
            return M(a.render);
        case ta:
            return M(a.type);
        case C:
            var b = a._payload;
            a = a._init;
            try {
                return M(a(b));
            } catch (d) {}
    }
    return "";
}
function N(a, b) {
    var d = Pa(a);
    if ("Object" !== d && "Array" !== d) return d;
    d = -1;
    var c = 0;
    if (Oa(a)) {
        var e = "[";
        for(var f = 0; f < a.length; f++){
            0 < f && (e += ", ");
            var g = a[f];
            g = "object" === typeof g && null !== g ? N(g) : Qa(g);
            "" + f === b ? (d = e.length, c = g.length, e += g) : e = 10 > g.length && 40 > e.length + g.length ? e + g : e + "...";
        }
        e += "]";
    } else if (a.$$typeof === B) e = "<" + M(a.type) + "/>";
    else {
        e = "{";
        f = Object.keys(a);
        for(g = 0; g < f.length; g++){
            0 < g && (e += ", ");
            var h = f[g], k = JSON.stringify(h);
            e += ('"' + h + '"' === k ? h : k) + ": ";
            k = a[h];
            k = "object" === typeof k && null !== k ? N(k) : Qa(k);
            h === b ? (d = e.length, c = k.length, e += k) : e = 10 > k.length && 40 > e.length + k.length ? e + k : e + "...";
        }
        e += "}";
    }
    return void 0 === b ? e : -1 < d && 0 < c ? (a = " ".repeat(d) + "^".repeat(c), "\n  " + e + "\n  " + a) : "\n  " + e;
}
var Ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Sa = Ra.ContextRegistry, O = JSON.stringify, Ta = Ra.ReactCurrentDispatcher, Ua = Ra.ReactCurrentCache;
function Va(a) {
    console.error(a);
}
function Wa(a, b, d, c, e) {
    if (null !== Ua.current && Ua.current !== Na) throw Error("Currently React only supports one RSC renderer at a time.");
    ka.current = ja;
    Ua.current = Na;
    var f = new Set, g = [], h = new Set, k = {
        status: 0,
        flushScheduled: !1,
        fatalError: null,
        destination: null,
        bundlerConfig: b,
        cache: new Map,
        nextChunkId: 0,
        pendingChunks: 0,
        hints: h,
        abortableTasks: f,
        pingedTasks: g,
        completedImportChunks: [],
        completedHintChunks: [],
        completedJSONChunks: [],
        completedErrorChunks: [],
        writtenSymbols: new Map,
        writtenClientReferences: new Map,
        writtenServerReferences: new Map,
        writtenProviders: new Map,
        identifierPrefix: e || "",
        identifierCount: 1,
        onError: void 0 === d ? Va : d,
        toJSON: function(r, w) {
            return Xa(k, this, r, w);
        }
    };
    k.pendingChunks++;
    b = Ya(c);
    a = Za(k, a, b, f);
    g.push(a);
    return k;
}
var P = null;
function t() {
    if (P) return P;
    if (A) {
        var a = ma.getStore();
        if (a) return a;
    }
    return null;
}
var $a = {};
function ab(a, b) {
    a.pendingChunks++;
    var d = Za(a, null, D, a.abortableTasks);
    switch(b.status){
        case "fulfilled":
            return d.model = b.value, bb(a, d), d.id;
        case "rejected":
            var c = Q(a, b.reason);
            R(a, d.id, c);
            return d.id;
        default:
            "string" !== typeof b.status && (b.status = "pending", b.then(function(e) {
                "pending" === b.status && (b.status = "fulfilled", b.value = e);
            }, function(e) {
                "pending" === b.status && (b.status = "rejected", b.reason = e);
            }));
    }
    b.then(function(e) {
        d.model = e;
        bb(a, d);
    }, function(e) {
        d.status = 4;
        e = Q(a, e);
        R(a, d.id, e);
        null !== a.destination && S(a, a.destination);
    });
    return d.id;
}
function cb(a) {
    if ("fulfilled" === a.status) return a.value;
    if ("rejected" === a.status) throw a.reason;
    throw a;
}
function db(a) {
    switch(a.status){
        case "fulfilled":
        case "rejected":
            break;
        default:
            "string" !== typeof a.status && (a.status = "pending", a.then(function(b) {
                "pending" === a.status && (a.status = "fulfilled", a.value = b);
            }, function(b) {
                "pending" === a.status && (a.status = "rejected", a.reason = b);
            }));
    }
    return {
        $$typeof: C,
        _payload: a,
        _init: cb
    };
}
function T(a, b, d, c, e, f) {
    if (null !== c && void 0 !== c) throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
    if ("function" === typeof b) {
        if (b.$$typeof === q) return [
            B,
            b,
            d,
            e
        ];
        J = 0;
        K = f;
        e = b(e);
        return "object" === typeof e && null !== e && "function" === typeof e.then ? "fulfilled" === e.status ? e.value : db(e) : e;
    }
    if ("string" === typeof b) return [
        B,
        b,
        d,
        e
    ];
    if ("symbol" === typeof b) return b === na ? e.children : [
        B,
        b,
        d,
        e
    ];
    if (null != b && "object" === typeof b) {
        if (b.$$typeof === q) return [
            B,
            b,
            d,
            e
        ];
        switch(b.$$typeof){
            case C:
                var g = b._init;
                b = g(b._payload);
                return T(a, b, d, c, e, f);
            case qa:
                return a = b.render, J = 0, K = f, a(e, void 0);
            case ta:
                return T(a, b.type, d, c, e, f);
            case oa:
                return Ba(b._context, e.value), [
                    B,
                    b,
                    d,
                    {
                        value: e.value,
                        children: e.children,
                        __pop: $a
                    }
                ];
        }
    }
    throw Error("Unsupported Server Component type: " + Qa(b));
}
function bb(a, b) {
    var d = a.pingedTasks;
    d.push(b);
    1 === d.length && (a.flushScheduled = null !== a.destination, setTimeout(function() {
        return eb(a);
    }, 0));
}
function Za(a, b, d, c) {
    var e = {
        id: a.nextChunkId++,
        status: 0,
        model: b,
        context: d,
        ping: function() {
            return bb(a, e);
        },
        thenableState: null
    };
    c.add(e);
    return e;
}
function fb(a, b, d, c) {
    var e = c.$$async ? c.$$id + "#async" : c.$$id, f = a.writtenClientReferences, g = f.get(e);
    if (void 0 !== g) return b[0] === B && "1" === d ? "$L" + g.toString(16) : "$" + g.toString(16);
    try {
        var h = a.bundlerConfig, k = c.$$id;
        g = "";
        var r = h[k];
        if (r) g = r.name;
        else {
            var w = k.lastIndexOf("#");
            -1 !== w && (g = k.slice(w + 1), r = h[k.slice(0, w)]);
            if (!r) throw Error('Could not find the module "' + k + '" in the React Client Manifest. This is probably a bug in the React Server Components bundler.');
        }
        var x = {
            id: r.id,
            chunks: r.chunks,
            name: g,
            async: !!c.$$async
        };
        a.pendingChunks++;
        var y = a.nextChunkId++, la = O(x), z = y.toString(16) + ":I" + la + "\n";
        var vb = p.encode(z);
        a.completedImportChunks.push(vb);
        f.set(e, y);
        return b[0] === B && "1" === d ? "$L" + y.toString(16) : "$" + y.toString(16);
    } catch (wb) {
        return a.pendingChunks++, b = a.nextChunkId++, d = Q(a, wb), R(a, b, d), "$" + b.toString(16);
    }
}
function Xa(a, b, d, c) {
    switch(c){
        case B:
            return "$";
    }
    for(; "object" === typeof c && null !== c && (c.$$typeof === B || c.$$typeof === C);)try {
        switch(c.$$typeof){
            case B:
                var e = c;
                c = T(a, e.type, e.key, e.ref, e.props, null);
                break;
            case C:
                var f = c._init;
                c = f(c._payload);
        }
    } catch (g) {
        d = g === G ? Ea() : g;
        if ("object" === typeof d && null !== d && "function" === typeof d.then) return a.pendingChunks++, a = Za(a, c, D, a.abortableTasks), c = a.ping, d.then(c, c), a.thenableState = Fa(), "$L" + a.id.toString(16);
        a.pendingChunks++;
        c = a.nextChunkId++;
        d = Q(a, d);
        R(a, c, d);
        return "$L" + c.toString(16);
    }
    if (null === c) return null;
    if ("object" === typeof c) {
        if (c.$$typeof === q) return fb(a, b, d, c);
        if ("function" === typeof c.then) return "$@" + ab(a, c).toString(16);
        if (c.$$typeof === oa) return c = c._context._globalName, b = a.writtenProviders, d = b.get(d), void 0 === d && (a.pendingChunks++, d = a.nextChunkId++, b.set(c, d), c = gb(a, d, "$P" + c), a.completedJSONChunks.push(c)), "$" + d.toString(16);
        if (c === $a) {
            a = D;
            if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
            c = a.parentValue;
            a.context._currentValue = c === ua ? a.context._defaultValue : c;
            D = a.parent;
            return;
        }
        return !Oa(c) && (null === c || "object" !== typeof c ? a = null : (a = wa && c[wa] || c["@@iterator"], a = "function" === typeof a ? a : null), a) ? Array.from(c) : c;
    }
    if ("string" === typeof c) {
        if ("Z" === c[c.length - 1] && b[d] instanceof Date) return "$D" + c;
        a = "$" === c[0] ? "$" + c : c;
        return a;
    }
    if ("boolean" === typeof c) return c;
    if ("number" === typeof c) return a = c, Number.isFinite(a) ? 0 === a && -Infinity === 1 / a ? "$-0" : a : Infinity === a ? "$Infinity" : -Infinity === a ? "$-Infinity" : "$NaN";
    if ("undefined" === typeof c) return "$undefined";
    if ("function" === typeof c) {
        if (c.$$typeof === q) return fb(a, b, d, c);
        if (c.$$typeof === da) return d = a.writtenServerReferences, b = d.get(c), void 0 !== b ? a = "$F" + b.toString(16) : (b = c.$$bound, e = {
            id: c.$$id,
            bound: b ? Promise.resolve(b) : null
        }, a.pendingChunks++, b = a.nextChunkId++, e = hb(a, b, e), a.completedJSONChunks.push(e), d.set(c, b), a = "$F" + b.toString(16)), a;
        if (/^on[A-Z]/.test(d)) throw Error("Event handlers cannot be passed to Client Component props." + N(b, d) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
        throw Error('Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server".' + N(b, d));
    }
    if ("symbol" === typeof c) {
        e = a.writtenSymbols;
        f = e.get(c);
        if (void 0 !== f) return "$" + f.toString(16);
        f = c.description;
        if (Symbol.for(f) !== c) throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + (c.description + ") cannot be found among global symbols.") + N(b, d));
        a.pendingChunks++;
        d = a.nextChunkId++;
        b = gb(a, d, "$S" + f);
        a.completedImportChunks.push(b);
        e.set(c, d);
        return "$" + d.toString(16);
    }
    if ("bigint" === typeof c) return "$n" + c.toString(10);
    throw Error("Type " + typeof c + " is not supported in Client Component props." + N(b, d));
}
function Q(a, b) {
    a = a.onError;
    b = a(b);
    if (null != b && "string" !== typeof b) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
    return b || "";
}
function ib(a, b) {
    null !== a.destination ? (a.status = 2, ca(a.destination, b)) : (a.status = 1, a.fatalError = b);
}
function R(a, b, d) {
    d = {
        digest: d
    };
    b = b.toString(16) + ":E" + O(d) + "\n";
    b = p.encode(b);
    a.completedErrorChunks.push(b);
}
function u(a, b, d) {
    var c = a.nextChunkId++;
    d = O(d);
    b = "H" + b;
    c = c.toString(16) + ":" + b;
    c = p.encode(c + d + "\n");
    a.completedHintChunks.push(c);
}
function eb(a) {
    var b = Ta.current;
    Ta.current = Ka;
    var d = P;
    I = P = a;
    try {
        var c = a.pingedTasks;
        a.pingedTasks = [];
        for(var e = 0; e < c.length; e++){
            var f = c[e];
            var g = a;
            if (0 === f.status) {
                F(f.context);
                try {
                    var h = f.model;
                    if ("object" === typeof h && null !== h && h.$$typeof === B) {
                        var k = h, r = f.thenableState;
                        f.model = h;
                        h = T(g, k.type, k.key, k.ref, k.props, r);
                        for(f.thenableState = null; "object" === typeof h && null !== h && h.$$typeof === B;)k = h, f.model = h, h = T(g, k.type, k.key, k.ref, k.props, null);
                    }
                    var w = hb(g, f.id, h);
                    g.completedJSONChunks.push(w);
                    g.abortableTasks.delete(f);
                    f.status = 1;
                } catch (z) {
                    var x = z === G ? Ea() : z;
                    if ("object" === typeof x && null !== x && "function" === typeof x.then) {
                        var y = f.ping;
                        x.then(y, y);
                        f.thenableState = Fa();
                    } else {
                        g.abortableTasks.delete(f);
                        f.status = 4;
                        var la = Q(g, x);
                        R(g, f.id, la);
                    }
                }
            }
        }
        null !== a.destination && S(a, a.destination);
    } catch (z) {
        Q(a, z), ib(a, z);
    } finally{
        Ta.current = b, I = null, P = d;
    }
}
function S(a, b) {
    l = new Uint8Array(512);
    m = 0;
    try {
        for(var d = a.completedImportChunks, c = 0; c < d.length; c++)a.pendingChunks--, n(b, d[c]);
        d.splice(0, c);
        var e = a.completedHintChunks;
        for(c = 0; c < e.length; c++)n(b, e[c]);
        e.splice(0, c);
        var f = a.completedJSONChunks;
        for(c = 0; c < f.length; c++)a.pendingChunks--, n(b, f[c]);
        f.splice(0, c);
        var g = a.completedErrorChunks;
        for(c = 0; c < g.length; c++)a.pendingChunks--, n(b, g[c]);
        g.splice(0, c);
    } finally{
        a.flushScheduled = !1, l && 0 < m && (b.enqueue(new Uint8Array(l.buffer, 0, m)), l = null, m = 0);
    }
    0 === a.pendingChunks && b.close();
}
function jb(a) {
    a.flushScheduled = null !== a.destination;
    A ? setTimeout(function() {
        return ma.run(a, eb, a);
    }, 0) : setTimeout(function() {
        return eb(a);
    }, 0);
}
function v(a) {
    if (!1 === a.flushScheduled && 0 === a.pingedTasks.length && null !== a.destination) {
        var b = a.destination;
        a.flushScheduled = !0;
        setTimeout(function() {
            return S(a, b);
        }, 0);
    }
}
function kb(a, b) {
    try {
        var d = a.abortableTasks;
        if (0 < d.size) {
            var c = Q(a, void 0 === b ? Error("The render was aborted by the server without a reason.") : b);
            a.pendingChunks++;
            var e = a.nextChunkId++;
            R(a, e, c);
            d.forEach(function(f) {
                f.status = 3;
                var g = "$" + e.toString(16);
                f = gb(a, f.id, g);
                a.completedErrorChunks.push(f);
            });
            d.clear();
        }
        null !== a.destination && S(a, a.destination);
    } catch (f) {
        Q(a, f), ib(a, f);
    }
}
function Ya(a) {
    if (a) {
        var b = D;
        F(null);
        for(var d = 0; d < a.length; d++){
            var c = a[d], e = c[0];
            c = c[1];
            Sa[e] || (Sa[e] = aa.createServerContext(e, ua));
            Ba(Sa[e], c);
        }
        a = D;
        F(b);
        return a;
    }
    return null;
}
function hb(a, b, d) {
    a = O(d, a.toJSON);
    b = b.toString(16) + ":" + a + "\n";
    return p.encode(b);
}
function gb(a, b, d) {
    a = O(d);
    b = b.toString(16) + ":" + a + "\n";
    return p.encode(b);
}
function lb(a, b) {
    var d = "", c = a[b];
    if (c) d = c.name;
    else {
        var e = b.lastIndexOf("#");
        -1 !== e && (d = b.slice(e + 1), c = a[b.slice(0, e)]);
        if (!c) throw Error('Could not find the module "' + b + '" in the React Server Manifest. This is probably a bug in the React Server Components bundler.');
    }
    return {
        id: c.id,
        chunks: c.chunks,
        name: d,
        async: !1
    };
}
var U = new Map, mb = new Map;
function nb() {}
function ob(a) {
    for(var b = a.chunks, d = [], c = 0; c < b.length; c++){
        var e = b[c], f = U.get(e);
        if (void 0 === f) {
            f = globalThis.__next_chunk_load__(e);
            d.push(f);
            var g = U.set.bind(U, e, null);
            f.then(g, nb);
            U.set(e, f);
        } else null !== f && d.push(f);
    }
    if (a.async) {
        if (b = mb.get(a.id)) return "fulfilled" === b.status ? null : b;
        var h = Promise.all(d).then(function() {
            return globalThis.__next_require__(a.id);
        });
        h.then(function(k) {
            h.status = "fulfilled";
            h.value = k;
        }, function(k) {
            h.status = "rejected";
            h.reason = k;
        });
        mb.set(a.id, h);
        return h;
    }
    return 0 < d.length ? Promise.all(d) : null;
}
function V(a) {
    if (a.async) {
        var b = mb.get(a.id);
        if ("fulfilled" === b.status) b = b.value;
        else throw b.reason;
    } else b = globalThis.__next_require__(a.id);
    return "*" === a.name ? b : "" === a.name ? b.__esModule ? b.default : b : b[a.name];
}
function W(a, b, d, c) {
    this.status = a;
    this.value = b;
    this.reason = d;
    this._response = c;
}
W.prototype = Object.create(Promise.prototype);
W.prototype.then = function(a, b) {
    switch(this.status){
        case "resolved_model":
            pb(this);
    }
    switch(this.status){
        case "fulfilled":
            a(this.value);
            break;
        case "pending":
        case "blocked":
            a && (null === this.value && (this.value = []), this.value.push(a));
            b && (null === this.reason && (this.reason = []), this.reason.push(b));
            break;
        default:
            b(this.reason);
    }
};
function qb(a, b) {
    for(var d = 0; d < a.length; d++)(0, a[d])(b);
}
function rb(a, b) {
    if ("pending" === a.status || "blocked" === a.status) {
        var d = a.reason;
        a.status = "rejected";
        a.reason = b;
        null !== d && qb(d, b);
    }
}
function sb(a, b, d, c, e, f) {
    var g = lb(a._bundlerConfig, b);
    a = ob(g);
    if (d) d = Promise.all([
        d,
        a
    ]).then(function(h) {
        h = h[0];
        var k = V(g);
        return k.bind.apply(k, [
            null
        ].concat(h));
    });
    else if (a) d = Promise.resolve(a).then(function() {
        return V(g);
    });
    else return V(g);
    d.then(tb(c, e, f), ub(c));
    return null;
}
var X = null, Y = null;
function pb(a) {
    var b = X, d = Y;
    X = a;
    Y = null;
    try {
        var c = JSON.parse(a.value, a._response._fromJSON);
        null !== Y && 0 < Y.deps ? (Y.value = c, a.status = "blocked", a.value = null, a.reason = null) : (a.status = "fulfilled", a.value = c);
    } catch (e) {
        a.status = "rejected", a.reason = e;
    } finally{
        X = b, Y = d;
    }
}
function xb(a, b) {
    a._chunks.forEach(function(d) {
        "pending" === d.status && rb(d, b);
    });
}
function Z(a, b) {
    var d = a._chunks, c = d.get(b);
    c || (c = a._formData.get(a._prefix + b), c = null != c ? new W("resolved_model", c, null, a) : new W("pending", null, null, a), d.set(b, c));
    return c;
}
function tb(a, b, d) {
    if (Y) {
        var c = Y;
        c.deps++;
    } else c = Y = {
        deps: 1,
        value: null
    };
    return function(e) {
        b[d] = e;
        c.deps--;
        0 === c.deps && "blocked" === a.status && (e = a.value, a.status = "fulfilled", a.value = c.value, null !== e && qb(e, c.value));
    };
}
function ub(a) {
    return function(b) {
        return rb(a, b);
    };
}
function yb(a, b, d, c) {
    if ("$" === c[0]) switch(c[1]){
        case "$":
            return c.slice(1);
        case "@":
            return b = parseInt(c.slice(2), 16), Z(a, b);
        case "S":
            return Symbol.for(c.slice(2));
        case "F":
            c = parseInt(c.slice(2), 16);
            c = Z(a, c);
            "resolved_model" === c.status && pb(c);
            if ("fulfilled" !== c.status) throw c.reason;
            c = c.value;
            return sb(a, c.id, c.bound, X, b, d);
        case "K":
            b = c.slice(2);
            var e = a._prefix + b + "_", f = new FormData;
            a._formData.forEach(function(g, h) {
                h.startsWith(e) && f.append(h.slice(e.length), g);
            });
            return f;
        case "I":
            return Infinity;
        case "-":
            return "$-0" === c ? -0 : -Infinity;
        case "N":
            return NaN;
        case "u":
            return;
        case "D":
            return new Date(Date.parse(c.slice(2)));
        case "n":
            return BigInt(c.slice(2));
        default:
            c = parseInt(c.slice(1), 16);
            a = Z(a, c);
            switch(a.status){
                case "resolved_model":
                    pb(a);
            }
            switch(a.status){
                case "fulfilled":
                    return a.value;
                case "pending":
                case "blocked":
                    return c = X, a.then(tb(c, b, d), ub(c)), null;
                default:
                    throw a.reason;
            }
    }
    return c;
}
function zb(a, b) {
    var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : new FormData, c = new Map, e = {
        _bundlerConfig: a,
        _prefix: b,
        _formData: d,
        _chunks: c,
        _fromJSON: function(f, g) {
            return "string" === typeof g ? yb(e, this, f, g) : g;
        }
    };
    return e;
}
function Ab(a) {
    xb(a, Error("Connection closed."));
}
function Bb(a, b, d) {
    var c = lb(a, b);
    a = ob(c);
    return d ? Promise.all([
        d,
        a
    ]).then(function(e) {
        e = e[0];
        var f = V(c);
        return f.bind.apply(f, [
            null
        ].concat(e));
    }) : a ? Promise.resolve(a).then(function() {
        return V(c);
    }) : Promise.resolve(V(c));
}
exports.decodeAction = function(a, b) {
    var d = new FormData, c = null;
    a.forEach(function(e, f) {
        if (f.startsWith("$ACTION_")) if (f.startsWith("$ACTION_REF_")) {
            e = "$ACTION_" + f.slice(12) + ":";
            e = zb(b, e, a);
            Ab(e);
            e = Z(e, 0);
            e.then(function() {});
            if ("fulfilled" !== e.status) throw e.reason;
            e = e.value;
            c = Bb(b, e.id, e.bound);
        } else f.startsWith("$ACTION_ID_") && (e = f.slice(11), c = Bb(b, e, null));
        else d.append(f, e);
    });
    return null === c ? null : c.then(function(e) {
        return e.bind(null, d);
    });
};
exports.decodeReply = function(a, b) {
    if ("string" === typeof a) {
        var d = new FormData;
        d.append("0", a);
        a = d;
    }
    a = zb(b, "", a);
    Ab(a);
    return Z(a, 0);
};
exports.renderToReadableStream = function(a, b, d) {
    var c = Wa(a, b, d ? d.onError : void 0, d ? d.context : void 0, d ? d.identifierPrefix : void 0);
    if (d && d.signal) {
        var e = d.signal;
        if (e.aborted) kb(c, e.reason);
        else {
            var f = function() {
                kb(c, e.reason);
                e.removeEventListener("abort", f);
            };
            e.addEventListener("abort", f);
        }
    }
    return new ReadableStream({
        type: "bytes",
        start: function() {
            jb(c);
        },
        pull: function(g) {
            if (1 === c.status) c.status = 2, ca(g, c.fatalError);
            else if (2 !== c.status && null === c.destination) {
                c.destination = g;
                try {
                    S(c, g);
                } catch (h) {
                    Q(c, h), ib(c, h);
                }
            }
        },
        cancel: function() {}
    }, {
        highWaterMark: 0
    });
};


/***/ }),

/***/ 7902:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


if (true) {
    module.exports = __webpack_require__(8387);
} else {}


/***/ }),

/***/ 7789:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.shared-subset.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var m = Object.assign, n = {
    current: null
};
function p() {
    return new Map;
}
if ("function" === typeof fetch) {
    var q = fetch, r = function(a, b) {
        var d = n.current;
        if (!d || b && b.signal && b.signal !== d.getCacheSignal()) return q(a, b);
        if ("string" !== typeof a || b) {
            var c = "string" === typeof a || a instanceof URL ? new Request(a, b) : a;
            if ("GET" !== c.method && "HEAD" !== c.method || c.keepalive) return q(a, b);
            var e = JSON.stringify([
                c.method,
                Array.from(c.headers.entries()),
                c.mode,
                c.redirect,
                c.credentials,
                c.referrer,
                c.referrerPolicy,
                c.integrity
            ]);
            c = c.url;
        } else e = '["GET",[],null,"follow",null,null,null,null]', c = a;
        var f = d.getCacheForType(p);
        d = f.get(c);
        if (void 0 === d) a = q(a, b), f.set(c, [
            e,
            a
        ]);
        else {
            c = 0;
            for(f = d.length; c < f; c += 2){
                var h = d[c + 1];
                if (d[c] === e) return a = h, a.then(function(g) {
                    return g.clone();
                });
            }
            a = q(a, b);
            d.push(e, a);
        }
        return a.then(function(g) {
            return g.clone();
        });
    };
    m(r, q);
    try {
        fetch = r;
    } catch (a) {
        try {
            globalThis.fetch = r;
        } catch (b) {
            console.warn("React was unable to patch the fetch() function in this environment. Suspensey APIs might not work correctly as a result.");
        }
    }
}
var t = Symbol.for("react.element"), u = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), z = Symbol.for("react.server_context"), A = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), aa = Symbol.for("react.lazy"), D = Symbol.for("react.default_value"), E = Symbol.iterator;
function ba(a) {
    if (null === a || "object" !== typeof a) return null;
    a = E && a[E] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
function F(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 1; d < arguments.length; d++)b += "&args[]=" + encodeURIComponent(arguments[d]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var G = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, H = {};
function I(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
I.prototype.isReactComponent = {};
I.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(F(85));
    this.updater.enqueueSetState(this, a, b, "setState");
};
I.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function J() {}
J.prototype = I.prototype;
function K(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
var L = K.prototype = new J;
L.constructor = K;
m(L, I.prototype);
L.isPureReactComponent = !0;
var M = Array.isArray, N = Object.prototype.hasOwnProperty, O = {
    current: null
}, P = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ca(a, b) {
    return {
        $$typeof: t,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function Q(a) {
    return "object" === typeof a && null !== a && a.$$typeof === t;
}
function escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(d) {
        return b[d];
    });
}
var R = /\/+/g;
function S(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function T(a, b, d, c, e) {
    var f = typeof a;
    if ("undefined" === f || "boolean" === f) a = null;
    var h = !1;
    if (null === a) h = !0;
    else switch(f){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case t:
                case u:
                    h = !0;
            }
    }
    if (h) return h = a, e = e(h), a = "" === c ? "." + S(h, 0) : c, M(e) ? (d = "", null != a && (d = a.replace(R, "$&/") + "/"), T(e, b, d, "", function(l) {
        return l;
    })) : null != e && (Q(e) && (e = ca(e, d + (!e.key || h && h.key === e.key ? "" : ("" + e.key).replace(R, "$&/") + "/") + a)), b.push(e)), 1;
    h = 0;
    c = "" === c ? "." : c + ":";
    if (M(a)) for(var g = 0; g < a.length; g++){
        f = a[g];
        var k = c + S(f, g);
        h += T(f, b, d, k, e);
    }
    else if (k = ba(a), "function" === typeof k) for(a = k.call(a), g = 0; !(f = a.next()).done;)f = f.value, k = c + S(f, g++), h += T(f, b, d, k, e);
    else if ("object" === f) throw b = String(a), Error(F(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
    return h;
}
function U(a, b, d) {
    if (null == a) return a;
    var c = [], e = 0;
    T(a, c, "", "", function(f) {
        return b.call(d, f, e++);
    });
    return c;
}
function da(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(d) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = d;
        }, function(d) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = d;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
function ea() {
    return new WeakMap;
}
function V() {
    return {
        s: 0,
        v: void 0,
        o: null,
        p: null
    };
}
var W = {
    current: null
}, X = {
    transition: null
}, Y = {
    ReactCurrentDispatcher: W,
    ReactCurrentCache: n,
    ReactCurrentBatchConfig: X,
    ReactCurrentOwner: O,
    ContextRegistry: {}
}, Z = Y.ContextRegistry;
exports.Children = {
    map: U,
    forEach: function(a, b, d) {
        U(a, function() {
            b.apply(this, arguments);
        }, d);
    },
    count: function(a) {
        var b = 0;
        U(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return U(a, function(b) {
            return b;
        }) || [];
    },
    only: function(a) {
        if (!Q(a)) throw Error(F(143));
        return a;
    }
};
exports.Fragment = v;
exports.Profiler = x;
exports.StrictMode = w;
exports.Suspense = B;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y;
exports.cache = function(a) {
    return function() {
        var b = n.current;
        if (!b) return a.apply(null, arguments);
        var d = b.getCacheForType(ea);
        b = d.get(a);
        void 0 === b && (b = V(), d.set(a, b));
        d = 0;
        for(var c = arguments.length; d < c; d++){
            var e = arguments[d];
            if ("function" === typeof e || "object" === typeof e && null !== e) {
                var f = b.o;
                null === f && (b.o = f = new WeakMap);
                b = f.get(e);
                void 0 === b && (b = V(), f.set(e, b));
            } else f = b.p, null === f && (b.p = f = new Map), b = f.get(e), void 0 === b && (b = V(), f.set(e, b));
        }
        if (1 === b.s) return b.v;
        if (2 === b.s) throw b.v;
        try {
            var h = a.apply(null, arguments);
            d = b;
            d.s = 1;
            return d.v = h;
        } catch (g) {
            throw h = b, h.s = 2, h.v = g, g;
        }
    };
};
exports.cloneElement = function(a, b, d) {
    if (null === a || void 0 === a) throw Error(F(267, a));
    var c = m({}, a.props), e = a.key, f = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (f = b.ref, h = O.current);
        void 0 !== b.key && (e = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(k in b)N.call(b, k) && !P.hasOwnProperty(k) && (c[k] = void 0 === b[k] && void 0 !== g ? g[k] : b[k]);
    }
    var k = arguments.length - 2;
    if (1 === k) c.children = d;
    else if (1 < k) {
        g = Array(k);
        for(var l = 0; l < k; l++)g[l] = arguments[l + 2];
        c.children = g;
    }
    return {
        $$typeof: t,
        type: a.type,
        key: e,
        ref: f,
        props: c,
        _owner: h
    };
};
exports.createElement = function(a, b, d) {
    var c, e = {}, f = null, h = null;
    if (null != b) for(c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (f = "" + b.key), b)N.call(b, c) && !P.hasOwnProperty(c) && (e[c] = b[c]);
    var g = arguments.length - 2;
    if (1 === g) e.children = d;
    else if (1 < g) {
        for(var k = Array(g), l = 0; l < g; l++)k[l] = arguments[l + 2];
        e.children = k;
    }
    if (a && a.defaultProps) for(c in g = a.defaultProps, g)void 0 === e[c] && (e[c] = g[c]);
    return {
        $$typeof: t,
        type: a,
        key: f,
        ref: h,
        props: e,
        _owner: O.current
    };
};
exports.createRef = function() {
    return {
        current: null
    };
};
exports.createServerContext = function(a, b) {
    var d = !0;
    if (!Z[a]) {
        d = !1;
        var c = {
            $$typeof: z,
            _currentValue: b,
            _currentValue2: b,
            _defaultValue: b,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _globalName: a
        };
        c.Provider = {
            $$typeof: y,
            _context: c
        };
        Z[a] = c;
    }
    c = Z[a];
    if (c._defaultValue === D) c._defaultValue = b, c._currentValue === D && (c._currentValue = b), c._currentValue2 === D && (c._currentValue2 = b);
    else if (d) throw Error(F(429, a));
    return c;
};
exports.forwardRef = function(a) {
    return {
        $$typeof: A,
        render: a
    };
};
exports.isValidElement = Q;
exports.lazy = function(a) {
    return {
        $$typeof: aa,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: da
    };
};
exports.memo = function(a, b) {
    return {
        $$typeof: C,
        type: a,
        compare: void 0 === b ? null : b
    };
};
exports.startTransition = function(a) {
    var b = X.transition;
    X.transition = {};
    try {
        a();
    } finally{
        X.transition = b;
    }
};
exports.use = function(a) {
    return W.current.use(a);
};
exports.useCallback = function(a, b) {
    return W.current.useCallback(a, b);
};
exports.useContext = function(a) {
    return W.current.useContext(a);
};
exports.useDebugValue = function() {};
exports.useId = function() {
    return W.current.useId();
};
exports.useMemo = function(a, b) {
    return W.current.useMemo(a, b);
};
exports.version = "18.3.0-canary-1cea38448-20230530";


/***/ }),

/***/ 7887:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


if (true) {
    module.exports = __webpack_require__(7789);
} else {}


/***/ }),

/***/ 3180:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fillMetadataSegment: function() {
        return fillMetadataSegment;
    },
    normalizeMetadataRoute: function() {
        return normalizeMetadataRoute;
    }
});
const _ismetadataroute = __webpack_require__(8865);
const _path = /*#__PURE__*/ _interop_require_default(__webpack_require__(2080));
const _serverutils = __webpack_require__(3160);
const _routeregex = __webpack_require__(9601);
const _hash = __webpack_require__(6230);
const _apppaths = __webpack_require__(8401);
const _normalizepathsep = __webpack_require__(9019);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/*
 * If there's special convention like (...) or @ in the page path,
 * Give it a unique hash suffix to avoid conflicts
 *
 * e.g.
 * /app/open-graph.tsx -> /open-graph/route
 * /app/(post)/open-graph.tsx -> /open-graph/route-[0-9a-z]{6}
 */ function getMetadataRouteSuffix(page) {
    let suffix = "";
    if (page.includes("(") && page.includes(")") || page.includes("@")) {
        suffix = (0, _hash.djb2Hash)(page).toString(36).slice(0, 6);
    }
    return suffix;
}
function fillMetadataSegment(segment, params, imageSegment) {
    const pathname = (0, _apppaths.normalizeAppPath)(segment);
    const routeRegex = (0, _routeregex.getNamedRouteRegex)(pathname, false);
    const route = (0, _serverutils.interpolateDynamicPath)(pathname, params, routeRegex);
    const suffix = getMetadataRouteSuffix(segment);
    const routeSuffix = suffix ? `-${suffix}` : "";
    const { name, ext } = _path.default.parse(imageSegment);
    return (0, _normalizepathsep.normalizePathSep)(_path.default.join(route, `${name}${routeSuffix}${ext}`));
}
function normalizeMetadataRoute(page) {
    if (!(0, _ismetadataroute.isMetadataRoute)(page)) {
        return page;
    }
    let route = page;
    let suffix = "";
    if (route === "/robots") {
        route += ".txt";
    } else if (route === "/manifest") {
        route += ".webmanifest";
    } else if (route.endsWith("/sitemap")) {
        route += ".xml";
    } else {
        // Remove the file extension, e.g. /route-path/robots.txt -> /route-path
        const pathnamePrefix = page.slice(0, -(_path.default.basename(page).length + 1));
        suffix = getMetadataRouteSuffix(pathnamePrefix);
    }
    // Support both /<metadata-route.ext> and custom routes /<metadata-route>/route.ts.
    // If it's a metadata file route, we need to append /[id]/route to the page.
    if (!route.endsWith("/route")) {
        const isStaticMetadataFile = (0, _ismetadataroute.isStaticMetadataRouteFile)(page);
        const { dir, name: baseName, ext } = _path.default.parse(route);
        const isStaticRoute = page.startsWith("/robots") || page.startsWith("/manifest") || isStaticMetadataFile;
        route = _path.default.posix.join(dir, `${baseName}${suffix ? `-${suffix}` : ""}${ext}`, isStaticRoute ? "" : "[[...__metadata_id__]]", "route");
    }
    return route;
} //# sourceMappingURL=get-metadata-route.js.map


/***/ }),

/***/ 8865:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    STATIC_METADATA_IMAGES: function() {
        return STATIC_METADATA_IMAGES;
    },
    isMetadataRouteFile: function() {
        return isMetadataRouteFile;
    },
    isStaticMetadataRouteFile: function() {
        return isStaticMetadataRouteFile;
    },
    isMetadataRoute: function() {
        return isMetadataRoute;
    }
});
const _normalizepathsep = __webpack_require__(9019);
const STATIC_METADATA_IMAGES = {
    icon: {
        filename: "icon",
        extensions: [
            "ico",
            "jpg",
            "jpeg",
            "png",
            "svg"
        ]
    },
    apple: {
        filename: "apple-icon",
        extensions: [
            "jpg",
            "jpeg",
            "png"
        ]
    },
    favicon: {
        filename: "favicon",
        extensions: [
            "ico"
        ]
    },
    openGraph: {
        filename: "opengraph-image",
        extensions: [
            "jpg",
            "jpeg",
            "png",
            "gif"
        ]
    },
    twitter: {
        filename: "twitter-image",
        extensions: [
            "jpg",
            "jpeg",
            "png",
            "gif"
        ]
    }
};
// Match routes that are metadata routes, e.g. /sitemap.xml, /favicon.<ext>, /<icon>.<ext>, etc.
// TODO-METADATA: support more metadata routes with more extensions
const defaultExtensions = [
    "js",
    "jsx",
    "ts",
    "tsx"
];
const getExtensionRegexString = (extensions)=>`(?:${extensions.join("|")})`;
function isMetadataRouteFile(appDirRelativePath, pageExtensions, withExtension) {
    const metadataRouteFilesRegex = [
        new RegExp(`^[\\\\/]robots${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat("txt"))}$` : ""}`),
        new RegExp(`^[\\\\/]manifest${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat("webmanifest", "json"))}$` : ""}`),
        new RegExp(`^[\\\\/]favicon\\.ico$`),
        new RegExp(`[\\\\/]sitemap${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat("xml"))}$` : ""}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.icon.filename}\\d?${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat(STATIC_METADATA_IMAGES.icon.extensions))}$` : ""}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.apple.filename}\\d?${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat(STATIC_METADATA_IMAGES.apple.extensions))}$` : ""}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.openGraph.filename}\\d?${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat(STATIC_METADATA_IMAGES.openGraph.extensions))}$` : ""}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.twitter.filename}\\d?${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat(STATIC_METADATA_IMAGES.twitter.extensions))}$` : ""}`)
    ];
    const normalizedAppDirRelativePath = (0, _normalizepathsep.normalizePathSep)(appDirRelativePath);
    return metadataRouteFilesRegex.some((r)=>r.test(normalizedAppDirRelativePath));
}
function isStaticMetadataRouteFile(appDirRelativePath) {
    return isMetadataRouteFile(appDirRelativePath, [], true);
}
function isMetadataRoute(route) {
    let page = route.replace(/^\/?app\//, "").replace(/\/route$/, "");
    if (page[0] !== "/") page = "/" + page;
    return !page.endsWith("/page") && isMetadataRouteFile(page, defaultExtensions, false);
} //# sourceMappingURL=is-metadata-route.js.map


/***/ }),

/***/ 2112:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "acceptLanguage", ({
    enumerable: true,
    get: function() {
        return acceptLanguage;
    }
}));
function parse(raw, preferences, options) {
    const lowers = new Map();
    const header = raw.replace(/[ \t]/g, "");
    if (preferences) {
        let pos = 0;
        for (const preference of preferences){
            const lower = preference.toLowerCase();
            lowers.set(lower, {
                orig: preference,
                pos: pos++
            });
            if (options.prefixMatch) {
                const parts = lower.split("-");
                while(parts.pop(), parts.length > 0){
                    const joined = parts.join("-");
                    if (!lowers.has(joined)) {
                        lowers.set(joined, {
                            orig: preference,
                            pos: pos++
                        });
                    }
                }
            }
        }
    }
    const parts = header.split(",");
    const selections = [];
    const map = new Set();
    for(let i = 0; i < parts.length; ++i){
        const part = parts[i];
        if (!part) {
            continue;
        }
        const params = part.split(";");
        if (params.length > 2) {
            throw new Error(`Invalid ${options.type} header`);
        }
        let token = params[0].toLowerCase();
        if (!token) {
            throw new Error(`Invalid ${options.type} header`);
        }
        const selection = {
            token,
            pos: i,
            q: 1
        };
        if (preferences && lowers.has(token)) {
            selection.pref = lowers.get(token).pos;
        }
        map.add(selection.token);
        if (params.length === 2) {
            const q = params[1];
            const [key, value] = q.split("=");
            if (!value || key !== "q" && key !== "Q") {
                throw new Error(`Invalid ${options.type} header`);
            }
            const score = parseFloat(value);
            if (score === 0) {
                continue;
            }
            if (Number.isFinite(score) && score <= 1 && score >= 0.001) {
                selection.q = score;
            }
        }
        selections.push(selection);
    }
    selections.sort((a, b)=>{
        if (b.q !== a.q) {
            return b.q - a.q;
        }
        if (b.pref !== a.pref) {
            if (a.pref === undefined) {
                return 1;
            }
            if (b.pref === undefined) {
                return -1;
            }
            return a.pref - b.pref;
        }
        return a.pos - b.pos;
    });
    const values = selections.map((selection)=>selection.token);
    if (!preferences || !preferences.length) {
        return values;
    }
    const preferred = [];
    for (const selection of values){
        if (selection === "*") {
            for (const [preference, value] of lowers){
                if (!map.has(preference)) {
                    preferred.push(value.orig);
                }
            }
        } else {
            const lower = selection.toLowerCase();
            if (lowers.has(lower)) {
                preferred.push(lowers.get(lower).orig);
            }
        }
    }
    return preferred;
}
function acceptLanguage(header = "", preferences) {
    return parse(header, preferences, {
        type: "accept-language",
        prefixMatch: true
    })[0] || "";
} //# sourceMappingURL=accept-header.js.map


/***/ }),

/***/ 3099:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*

Files in the rsc directory are meant to be packaged as part of the RSC graph using next-app-loader.

*/ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    preloadStyle: function() {
        return preloadStyle;
    },
    preloadFont: function() {
        return preloadFont;
    },
    preconnect: function() {
        return preconnect;
    }
});
const _reactdom = /*#__PURE__*/ _interop_require_default(__webpack_require__(6155));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const stylePreloadOptions = {
    as: "style"
};
function preloadStyle(href) {
    _reactdom.default.preload(href, stylePreloadOptions);
}
function preloadFont(href, type) {
    _reactdom.default.preload(href, {
        as: "font",
        type
    });
}
function preconnect(href, crossOrigin) {
    if (typeof crossOrigin === "string") {
        _reactdom.default.preconnect(href, {
            crossOrigin
        });
    } else {
        _reactdom.default.preconnect(href);
    }
} //# sourceMappingURL=preloads.js.map


/***/ }),

/***/ 3958:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
    },
    isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
    },
    extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
    }
});
const _apppaths = __webpack_require__(8401);
const INTERCEPTION_ROUTE_MARKERS = [
    "(..)(..)",
    "(.)",
    "(..)",
    "(...)"
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split("/").find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute, marker, interceptedRoute;
    for (const segment of path.split("/")){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
    }
    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case "(.)":
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === "/") {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + "/" + interceptedRoute;
            }
            break;
        case "(..)":
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === "/") {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`);
            }
            interceptedRoute = interceptingRoute.split("/").slice(0, -1).concat(interceptedRoute).join("/");
            break;
        case "(...)":
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = "/" + interceptedRoute;
            break;
        case "(..)(..)":
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split("/");
            if (splitInterceptingRoute.length <= 2) {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`);
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join("/");
            break;
        default:
            throw new Error("Invariant: unexpected marker");
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map


/***/ }),

/***/ 3271:
/***/ ((__unused_webpack_module, exports) => {

/* eslint-disable no-redeclare */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NEXT_REQUEST_META: function() {
        return NEXT_REQUEST_META;
    },
    getRequestMeta: function() {
        return getRequestMeta;
    },
    setRequestMeta: function() {
        return setRequestMeta;
    },
    addRequestMeta: function() {
        return addRequestMeta;
    },
    getNextInternalQuery: function() {
        return getNextInternalQuery;
    }
});
const NEXT_REQUEST_META = Symbol.for("NextInternalRequestMeta");
function getRequestMeta(req, key) {
    const meta = req[NEXT_REQUEST_META] || {};
    return typeof key === "string" ? meta[key] : meta;
}
function setRequestMeta(req, meta) {
    req[NEXT_REQUEST_META] = meta;
    return getRequestMeta(req);
}
function addRequestMeta(request, key, value) {
    const meta = getRequestMeta(request);
    meta[key] = value;
    return setRequestMeta(request, meta);
}
function getNextInternalQuery(query) {
    const keysToInclude = [
        "__nextDefaultLocale",
        "__nextFallback",
        "__nextLocale",
        "__nextSsgPath",
        "_nextBubbleNoFallback",
        "__nextDataReq",
        "__nextInferredLocaleFromDefault"
    ];
    const nextInternalQuery = {};
    for (const key of keysToInclude){
        if (key in query) {
            // @ts-ignore this can't be typed correctly
            nextInternalQuery[key] = query[key];
        }
    }
    return nextInternalQuery;
} //# sourceMappingURL=request-meta.js.map


/***/ }),

/***/ 3160:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    normalizeVercelUrl: function() {
        return normalizeVercelUrl;
    },
    interpolateDynamicPath: function() {
        return interpolateDynamicPath;
    },
    getUtils: function() {
        return getUtils;
    }
});
const _url = __webpack_require__(7310);
const _normalizelocalepath = __webpack_require__(9962);
const _pathmatch = __webpack_require__(247);
const _routeregex = __webpack_require__(9601);
const _routematcher = __webpack_require__(4060);
const _preparedestination = __webpack_require__(880);
const _acceptheader = __webpack_require__(2112);
const _detectlocalecookie = __webpack_require__(8090);
const _detectdomainlocale = __webpack_require__(2207);
const _denormalizepagepath = __webpack_require__(6115);
const _cookie = /*#__PURE__*/ _interop_require_default(__webpack_require__(252));
const _constants = __webpack_require__(2205);
const _requestmeta = __webpack_require__(3271);
const _removetrailingslash = __webpack_require__(465);
const _apppaths = __webpack_require__(8401);
const _constants1 = __webpack_require__(8537);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function normalizeVercelUrl(req, trustQuery, paramKeys, pageIsDynamic, defaultRouteRegex) {
    // make sure to normalize req.url on Vercel to strip dynamic params
    // from the query which are added during routing
    if (pageIsDynamic && trustQuery && defaultRouteRegex) {
        const _parsedUrl = (0, _url.parse)(req.url, true);
        delete _parsedUrl.search;
        for (const key of Object.keys(_parsedUrl.query)){
            if (key !== _constants1.NEXT_QUERY_PARAM_PREFIX && key.startsWith(_constants1.NEXT_QUERY_PARAM_PREFIX) || (paramKeys || Object.keys(defaultRouteRegex.groups)).includes(key)) {
                delete _parsedUrl.query[key];
            }
        }
        req.url = (0, _url.format)(_parsedUrl);
    }
}
function interpolateDynamicPath(pathname, params, defaultRouteRegex) {
    if (!defaultRouteRegex) return pathname;
    for (const param of Object.keys(defaultRouteRegex.groups)){
        const { optional, repeat } = defaultRouteRegex.groups[param];
        let builtParam = `[${repeat ? "..." : ""}${param}]`;
        if (optional) {
            builtParam = `[${builtParam}]`;
        }
        const paramIdx = pathname.indexOf(builtParam);
        if (paramIdx > -1) {
            let paramValue;
            const value = params[param];
            if (Array.isArray(value)) {
                paramValue = value.map((v)=>v && encodeURIComponent(v)).join("/");
            } else if (value) {
                paramValue = encodeURIComponent(value);
            } else {
                paramValue = "";
            }
            pathname = pathname.slice(0, paramIdx) + paramValue + pathname.slice(paramIdx + builtParam.length);
        }
    }
    return pathname;
}
function getUtils({ page, i18n, basePath, rewrites, pageIsDynamic, trailingSlash, caseSensitive }) {
    let defaultRouteRegex;
    let dynamicRouteMatcher;
    let defaultRouteMatches;
    if (pageIsDynamic) {
        defaultRouteRegex = (0, _routeregex.getNamedRouteRegex)(page, false);
        dynamicRouteMatcher = (0, _routematcher.getRouteMatcher)(defaultRouteRegex);
        defaultRouteMatches = dynamicRouteMatcher(page);
    }
    function handleRewrites(req, parsedUrl) {
        const rewriteParams = {};
        let fsPathname = parsedUrl.pathname;
        const matchesPage = ()=>{
            const fsPathnameNoSlash = (0, _removetrailingslash.removeTrailingSlash)(fsPathname || "");
            return fsPathnameNoSlash === (0, _removetrailingslash.removeTrailingSlash)(page) || (dynamicRouteMatcher == null ? void 0 : dynamicRouteMatcher(fsPathnameNoSlash));
        };
        const checkRewrite = (rewrite)=>{
            const matcher = (0, _pathmatch.getPathMatch)(rewrite.source + (trailingSlash ? "(/)?" : ""), {
                removeUnnamedParams: true,
                strict: true,
                sensitive: !!caseSensitive
            });
            let params = matcher(parsedUrl.pathname);
            if ((rewrite.has || rewrite.missing) && params) {
                const hasParams = (0, _preparedestination.matchHas)(req, parsedUrl.query, rewrite.has, rewrite.missing);
                if (hasParams) {
                    Object.assign(params, hasParams);
                } else {
                    params = false;
                }
            }
            if (params) {
                const { parsedDestination, destQuery } = (0, _preparedestination.prepareDestination)({
                    appendParamsToQuery: true,
                    destination: rewrite.destination,
                    params: params,
                    query: parsedUrl.query
                });
                // if the rewrite destination is external break rewrite chain
                if (parsedDestination.protocol) {
                    return true;
                }
                Object.assign(rewriteParams, destQuery, params);
                Object.assign(parsedUrl.query, parsedDestination.query);
                delete parsedDestination.query;
                Object.assign(parsedUrl, parsedDestination);
                fsPathname = parsedUrl.pathname;
                if (basePath) {
                    fsPathname = fsPathname.replace(new RegExp(`^${basePath}`), "") || "/";
                }
                if (i18n) {
                    const destLocalePathResult = (0, _normalizelocalepath.normalizeLocalePath)(fsPathname, i18n.locales);
                    fsPathname = destLocalePathResult.pathname;
                    parsedUrl.query.nextInternalLocale = destLocalePathResult.detectedLocale || params.nextInternalLocale;
                }
                if (fsPathname === page) {
                    return true;
                }
                if (pageIsDynamic && dynamicRouteMatcher) {
                    const dynamicParams = dynamicRouteMatcher(fsPathname);
                    if (dynamicParams) {
                        parsedUrl.query = {
                            ...parsedUrl.query,
                            ...dynamicParams
                        };
                        return true;
                    }
                }
            }
            return false;
        };
        for (const rewrite of rewrites.beforeFiles || []){
            checkRewrite(rewrite);
        }
        if (fsPathname !== page) {
            let finished = false;
            for (const rewrite of rewrites.afterFiles || []){
                finished = checkRewrite(rewrite);
                if (finished) break;
            }
            if (!finished && !matchesPage()) {
                for (const rewrite of rewrites.fallback || []){
                    finished = checkRewrite(rewrite);
                    if (finished) break;
                }
            }
        }
        return rewriteParams;
    }
    function handleBasePath(req, parsedUrl) {
        // always strip the basePath if configured since it is required
        req.url = req.url.replace(new RegExp(`^${basePath}`), "") || "/";
        parsedUrl.pathname = parsedUrl.pathname.replace(new RegExp(`^${basePath}`), "") || "/";
    }
    function getParamsFromRouteMatches(req, renderOpts, detectedLocale) {
        return (0, _routematcher.getRouteMatcher)(function() {
            const { groups, routeKeys } = defaultRouteRegex;
            return {
                re: {
                    // Simulate a RegExp match from the \`req.url\` input
                    exec: (str)=>{
                        const obj = Object.fromEntries(new URLSearchParams(str));
                        const matchesHasLocale = i18n && detectedLocale && obj["1"] === detectedLocale;
                        for (const key of Object.keys(obj)){
                            const value = obj[key];
                            if (key !== _constants1.NEXT_QUERY_PARAM_PREFIX && key.startsWith(_constants1.NEXT_QUERY_PARAM_PREFIX)) {
                                const normalizedKey = key.substring(_constants1.NEXT_QUERY_PARAM_PREFIX.length);
                                obj[normalizedKey] = value;
                                delete obj[key];
                            }
                        }
                        // favor named matches if available
                        const routeKeyNames = Object.keys(routeKeys || {});
                        const filterLocaleItem = (val)=>{
                            if (i18n) {
                                // locale items can be included in route-matches
                                // for fallback SSG pages so ensure they are
                                // filtered
                                const isCatchAll = Array.isArray(val);
                                const _val = isCatchAll ? val[0] : val;
                                if (typeof _val === "string" && i18n.locales.some((item)=>{
                                    if (item.toLowerCase() === _val.toLowerCase()) {
                                        detectedLocale = item;
                                        renderOpts.locale = detectedLocale;
                                        return true;
                                    }
                                    return false;
                                })) {
                                    // remove the locale item from the match
                                    if (isCatchAll) {
                                        val.splice(0, 1);
                                    }
                                    // the value is only a locale item and
                                    // shouldn't be added
                                    return isCatchAll ? val.length === 0 : true;
                                }
                            }
                            return false;
                        };
                        if (routeKeyNames.every((name)=>obj[name])) {
                            return routeKeyNames.reduce((prev, keyName)=>{
                                const paramName = routeKeys == null ? void 0 : routeKeys[keyName];
                                if (paramName && !filterLocaleItem(obj[keyName])) {
                                    prev[groups[paramName].pos] = obj[keyName];
                                }
                                return prev;
                            }, {});
                        }
                        return Object.keys(obj).reduce((prev, key)=>{
                            if (!filterLocaleItem(obj[key])) {
                                let normalizedKey = key;
                                if (matchesHasLocale) {
                                    normalizedKey = parseInt(key, 10) - 1 + "";
                                }
                                return Object.assign(prev, {
                                    [normalizedKey]: obj[key]
                                });
                            }
                            return prev;
                        }, {});
                    }
                },
                groups
            };
        }())(req.headers["x-now-route-matches"]);
    }
    function normalizeDynamicRouteParams(params, ignoreOptional) {
        let hasValidParams = true;
        if (!defaultRouteRegex) return {
            params,
            hasValidParams: false
        };
        params = Object.keys(defaultRouteRegex.groups).reduce((prev, key)=>{
            let value = params[key];
            if (typeof value === "string") {
                value = (0, _apppaths.normalizeRscPath)(value, true);
            }
            if (Array.isArray(value)) {
                value = value.map((val)=>{
                    if (typeof val === "string") {
                        val = (0, _apppaths.normalizeRscPath)(val, true);
                    }
                    return val;
                });
            }
            // if the value matches the default value we can't rely
            // on the parsed params, this is used to signal if we need
            // to parse x-now-route-matches or not
            const defaultValue = defaultRouteMatches[key];
            const isOptional = defaultRouteRegex.groups[key].optional;
            const isDefaultValue = Array.isArray(defaultValue) ? defaultValue.some((defaultVal)=>{
                return Array.isArray(value) ? value.some((val)=>val.includes(defaultVal)) : value == null ? void 0 : value.includes(defaultVal);
            }) : value == null ? void 0 : value.includes(defaultValue);
            if (isDefaultValue || typeof value === "undefined" && !(isOptional && ignoreOptional)) {
                hasValidParams = false;
            }
            // non-provided optional values should be undefined so normalize
            // them to undefined
            if (isOptional && (!value || Array.isArray(value) && value.length === 1 && // fallback optional catch-all SSG pages have
            // [[...paramName]] for the root path on Vercel
            (value[0] === "index" || value[0] === `[[...${key}]]`))) {
                value = undefined;
                delete params[key];
            }
            // query values from the proxy aren't already split into arrays
            // so make sure to normalize catch-all values
            if (value && typeof value === "string" && defaultRouteRegex.groups[key].repeat) {
                value = value.split("/");
            }
            if (value) {
                prev[key] = value;
            }
            return prev;
        }, {});
        return {
            params,
            hasValidParams
        };
    }
    function handleLocale(req, res, parsedUrl, routeNoAssetPath, shouldNotRedirect) {
        if (!i18n) return;
        const pathname = parsedUrl.pathname || "/";
        let defaultLocale = i18n.defaultLocale;
        let detectedLocale = (0, _detectlocalecookie.detectLocaleCookie)(req, i18n.locales);
        let acceptPreferredLocale;
        try {
            acceptPreferredLocale = i18n.localeDetection !== false ? (0, _acceptheader.acceptLanguage)(req.headers["accept-language"], i18n.locales) : detectedLocale;
        } catch (_) {
            acceptPreferredLocale = detectedLocale;
        }
        const { host } = req.headers || {};
        // remove port from host and remove port if present
        const hostname = host && host.split(":")[0].toLowerCase();
        const detectedDomain = (0, _detectdomainlocale.detectDomainLocale)(i18n.domains, hostname);
        if (detectedDomain) {
            defaultLocale = detectedDomain.defaultLocale;
            detectedLocale = defaultLocale;
            (0, _requestmeta.addRequestMeta)(req, "__nextIsLocaleDomain", true);
        }
        // if not domain specific locale use accept-language preferred
        detectedLocale = detectedLocale || acceptPreferredLocale;
        let localeDomainRedirect;
        const localePathResult = (0, _normalizelocalepath.normalizeLocalePath)(pathname, i18n.locales);
        routeNoAssetPath = (0, _normalizelocalepath.normalizeLocalePath)(routeNoAssetPath, i18n.locales).pathname;
        if (localePathResult.detectedLocale) {
            detectedLocale = localePathResult.detectedLocale;
            req.url = (0, _url.format)({
                ...parsedUrl,
                pathname: localePathResult.pathname
            });
            (0, _requestmeta.addRequestMeta)(req, "__nextStrippedLocale", true);
            parsedUrl.pathname = localePathResult.pathname;
        }
        // If a detected locale is a domain specific locale and we aren't already
        // on that domain and path prefix redirect to it to prevent duplicate
        // content from multiple domains
        if (detectedDomain) {
            const localeToCheck = localePathResult.detectedLocale ? detectedLocale : acceptPreferredLocale;
            const matchedDomain = (0, _detectdomainlocale.detectDomainLocale)(i18n.domains, undefined, localeToCheck);
            if (matchedDomain && matchedDomain.domain !== detectedDomain.domain) {
                localeDomainRedirect = `http${matchedDomain.http ? "" : "s"}://${matchedDomain.domain}/${localeToCheck === matchedDomain.defaultLocale ? "" : localeToCheck}`;
            }
        }
        const denormalizedPagePath = (0, _denormalizepagepath.denormalizePagePath)(pathname);
        const detectedDefaultLocale = !detectedLocale || detectedLocale.toLowerCase() === defaultLocale.toLowerCase();
        const shouldStripDefaultLocale = false;
        // detectedDefaultLocale &&
        // denormalizedPagePath.toLowerCase() === \`/\${i18n.defaultLocale.toLowerCase()}\`
        const shouldAddLocalePrefix = !detectedDefaultLocale && denormalizedPagePath === "/";
        detectedLocale = detectedLocale || i18n.defaultLocale;
        if (!shouldNotRedirect && !req.headers["x-vercel-id"] && i18n.localeDetection !== false && (localeDomainRedirect || shouldAddLocalePrefix || shouldStripDefaultLocale)) {
            // set the NEXT_LOCALE cookie when a user visits the default locale
            // with the locale prefix so that they aren't redirected back to
            // their accept-language preferred locale
            if (shouldStripDefaultLocale && acceptPreferredLocale !== defaultLocale) {
                const previous = res.getHeader("set-cookie");
                res.setHeader("set-cookie", [
                    ...typeof previous === "string" ? [
                        previous
                    ] : Array.isArray(previous) ? previous : [],
                    _cookie.default.serialize("NEXT_LOCALE", defaultLocale, {
                        httpOnly: true,
                        path: "/"
                    })
                ]);
            }
            res.setHeader("Location", (0, _url.format)({
                // make sure to include any query values when redirecting
                ...parsedUrl,
                pathname: localeDomainRedirect ? localeDomainRedirect : shouldStripDefaultLocale ? basePath || "/" : `${basePath}/${detectedLocale}`
            }));
            res.statusCode = _constants.TEMPORARY_REDIRECT_STATUS;
            res.end();
            return;
        }
        detectedLocale = localePathResult.detectedLocale || detectedDomain && detectedDomain.defaultLocale || defaultLocale;
        return {
            defaultLocale,
            detectedLocale,
            routeNoAssetPath
        };
    }
    return {
        handleLocale,
        handleRewrites,
        handleBasePath,
        defaultRouteRegex,
        dynamicRouteMatcher,
        defaultRouteMatches,
        getParamsFromRouteMatches,
        normalizeDynamicRouteParams,
        normalizeVercelUrl: (req, trustQuery, paramKeys)=>normalizeVercelUrl(req, trustQuery, paramKeys, pageIsDynamic, defaultRouteRegex),
        interpolateDynamicPath: (pathname, params)=>interpolateDynamicPath(pathname, params, defaultRouteRegex)
    };
} //# sourceMappingURL=server-utils.js.map


/***/ }),

/***/ 2205:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MODERN_BROWSERSLIST_TARGET: function() {
        return _modernbrowserslisttarget.default;
    },
    COMPILER_NAMES: function() {
        return COMPILER_NAMES;
    },
    COMPILER_INDEXES: function() {
        return COMPILER_INDEXES;
    },
    PHASE_EXPORT: function() {
        return PHASE_EXPORT;
    },
    PHASE_PRODUCTION_BUILD: function() {
        return PHASE_PRODUCTION_BUILD;
    },
    PHASE_PRODUCTION_SERVER: function() {
        return PHASE_PRODUCTION_SERVER;
    },
    PHASE_DEVELOPMENT_SERVER: function() {
        return PHASE_DEVELOPMENT_SERVER;
    },
    PHASE_TEST: function() {
        return PHASE_TEST;
    },
    PAGES_MANIFEST: function() {
        return PAGES_MANIFEST;
    },
    APP_PATHS_MANIFEST: function() {
        return APP_PATHS_MANIFEST;
    },
    APP_PATH_ROUTES_MANIFEST: function() {
        return APP_PATH_ROUTES_MANIFEST;
    },
    BUILD_MANIFEST: function() {
        return BUILD_MANIFEST;
    },
    APP_BUILD_MANIFEST: function() {
        return APP_BUILD_MANIFEST;
    },
    SUBRESOURCE_INTEGRITY_MANIFEST: function() {
        return SUBRESOURCE_INTEGRITY_MANIFEST;
    },
    NEXT_FONT_MANIFEST: function() {
        return NEXT_FONT_MANIFEST;
    },
    EXPORT_MARKER: function() {
        return EXPORT_MARKER;
    },
    EXPORT_DETAIL: function() {
        return EXPORT_DETAIL;
    },
    PRERENDER_MANIFEST: function() {
        return PRERENDER_MANIFEST;
    },
    ROUTES_MANIFEST: function() {
        return ROUTES_MANIFEST;
    },
    IMAGES_MANIFEST: function() {
        return IMAGES_MANIFEST;
    },
    SERVER_FILES_MANIFEST: function() {
        return SERVER_FILES_MANIFEST;
    },
    DEV_CLIENT_PAGES_MANIFEST: function() {
        return DEV_CLIENT_PAGES_MANIFEST;
    },
    MIDDLEWARE_MANIFEST: function() {
        return MIDDLEWARE_MANIFEST;
    },
    DEV_MIDDLEWARE_MANIFEST: function() {
        return DEV_MIDDLEWARE_MANIFEST;
    },
    REACT_LOADABLE_MANIFEST: function() {
        return REACT_LOADABLE_MANIFEST;
    },
    FONT_MANIFEST: function() {
        return FONT_MANIFEST;
    },
    SERVER_DIRECTORY: function() {
        return SERVER_DIRECTORY;
    },
    CONFIG_FILES: function() {
        return CONFIG_FILES;
    },
    BUILD_ID_FILE: function() {
        return BUILD_ID_FILE;
    },
    BLOCKED_PAGES: function() {
        return BLOCKED_PAGES;
    },
    CLIENT_PUBLIC_FILES_PATH: function() {
        return CLIENT_PUBLIC_FILES_PATH;
    },
    CLIENT_STATIC_FILES_PATH: function() {
        return CLIENT_STATIC_FILES_PATH;
    },
    CLIENT_STATIC_FILES_RUNTIME: function() {
        return CLIENT_STATIC_FILES_RUNTIME;
    },
    STRING_LITERAL_DROP_BUNDLE: function() {
        return STRING_LITERAL_DROP_BUNDLE;
    },
    NEXT_BUILTIN_DOCUMENT: function() {
        return NEXT_BUILTIN_DOCUMENT;
    },
    NEXT_CLIENT_SSR_ENTRY_SUFFIX: function() {
        return NEXT_CLIENT_SSR_ENTRY_SUFFIX;
    },
    CLIENT_REFERENCE_MANIFEST: function() {
        return CLIENT_REFERENCE_MANIFEST;
    },
    SERVER_REFERENCE_MANIFEST: function() {
        return SERVER_REFERENCE_MANIFEST;
    },
    MIDDLEWARE_BUILD_MANIFEST: function() {
        return MIDDLEWARE_BUILD_MANIFEST;
    },
    MIDDLEWARE_REACT_LOADABLE_MANIFEST: function() {
        return MIDDLEWARE_REACT_LOADABLE_MANIFEST;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN_APP;
    },
    APP_CLIENT_INTERNALS: function() {
        return APP_CLIENT_INTERNALS;
    },
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: function() {
        return CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH;
    },
    CLIENT_STATIC_FILES_RUNTIME_AMP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_AMP;
    },
    CLIENT_STATIC_FILES_RUNTIME_WEBPACK: function() {
        return CLIENT_STATIC_FILES_RUNTIME_WEBPACK;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL;
    },
    EDGE_RUNTIME_WEBPACK: function() {
        return EDGE_RUNTIME_WEBPACK;
    },
    TEMPORARY_REDIRECT_STATUS: function() {
        return TEMPORARY_REDIRECT_STATUS;
    },
    PERMANENT_REDIRECT_STATUS: function() {
        return PERMANENT_REDIRECT_STATUS;
    },
    STATIC_PROPS_ID: function() {
        return STATIC_PROPS_ID;
    },
    SERVER_PROPS_ID: function() {
        return SERVER_PROPS_ID;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    GOOGLE_FONT_PROVIDER: function() {
        return GOOGLE_FONT_PROVIDER;
    },
    OPTIMIZED_FONT_PROVIDERS: function() {
        return OPTIMIZED_FONT_PROVIDERS;
    },
    DEFAULT_SERIF_FONT: function() {
        return DEFAULT_SERIF_FONT;
    },
    DEFAULT_SANS_SERIF_FONT: function() {
        return DEFAULT_SANS_SERIF_FONT;
    },
    STATIC_STATUS_PAGES: function() {
        return STATIC_STATUS_PAGES;
    },
    TRACE_OUTPUT_VERSION: function() {
        return TRACE_OUTPUT_VERSION;
    },
    TURBO_TRACE_DEFAULT_MEMORY_LIMIT: function() {
        return TURBO_TRACE_DEFAULT_MEMORY_LIMIT;
    },
    RSC_MODULE_TYPES: function() {
        return RSC_MODULE_TYPES;
    },
    EDGE_UNSUPPORTED_NODE_APIS: function() {
        return EDGE_UNSUPPORTED_NODE_APIS;
    },
    SYSTEM_ENTRYPOINTS: function() {
        return SYSTEM_ENTRYPOINTS;
    }
});
const _interop_require_default = __webpack_require__(1550);
const _modernbrowserslisttarget = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2159));
const COMPILER_NAMES = {
    client: "client",
    server: "server",
    edgeServer: "edge-server"
};
const COMPILER_INDEXES = {
    [COMPILER_NAMES.client]: 0,
    [COMPILER_NAMES.server]: 1,
    [COMPILER_NAMES.edgeServer]: 2
};
const PHASE_EXPORT = "phase-export";
const PHASE_PRODUCTION_BUILD = "phase-production-build";
const PHASE_PRODUCTION_SERVER = "phase-production-server";
const PHASE_DEVELOPMENT_SERVER = "phase-development-server";
const PHASE_TEST = "phase-test";
const PAGES_MANIFEST = "pages-manifest.json";
const APP_PATHS_MANIFEST = "app-paths-manifest.json";
const APP_PATH_ROUTES_MANIFEST = "app-path-routes-manifest.json";
const BUILD_MANIFEST = "build-manifest.json";
const APP_BUILD_MANIFEST = "app-build-manifest.json";
const SUBRESOURCE_INTEGRITY_MANIFEST = "subresource-integrity-manifest";
const NEXT_FONT_MANIFEST = "next-font-manifest";
const EXPORT_MARKER = "export-marker.json";
const EXPORT_DETAIL = "export-detail.json";
const PRERENDER_MANIFEST = "prerender-manifest.json";
const ROUTES_MANIFEST = "routes-manifest.json";
const IMAGES_MANIFEST = "images-manifest.json";
const SERVER_FILES_MANIFEST = "required-server-files.json";
const DEV_CLIENT_PAGES_MANIFEST = "_devPagesManifest.json";
const MIDDLEWARE_MANIFEST = "middleware-manifest.json";
const DEV_MIDDLEWARE_MANIFEST = "_devMiddlewareManifest.json";
const REACT_LOADABLE_MANIFEST = "react-loadable-manifest.json";
const FONT_MANIFEST = "font-manifest.json";
const SERVER_DIRECTORY = "server";
const CONFIG_FILES = [
    "next.config.js",
    "next.config.mjs"
];
const BUILD_ID_FILE = "BUILD_ID";
const BLOCKED_PAGES = [
    "/_document",
    "/_app",
    "/_error"
];
const CLIENT_PUBLIC_FILES_PATH = "public";
const CLIENT_STATIC_FILES_PATH = "static";
const CLIENT_STATIC_FILES_RUNTIME = "runtime";
const STRING_LITERAL_DROP_BUNDLE = "__NEXT_DROP_CLIENT_FILE__";
const NEXT_BUILTIN_DOCUMENT = "__NEXT_BUILTIN_DOCUMENT__";
const NEXT_CLIENT_SSR_ENTRY_SUFFIX = ".__sc_client__";
const CLIENT_REFERENCE_MANIFEST = "client-reference-manifest";
const SERVER_REFERENCE_MANIFEST = "server-reference-manifest";
const MIDDLEWARE_BUILD_MANIFEST = "middleware-build-manifest";
const MIDDLEWARE_REACT_LOADABLE_MANIFEST = "middleware-react-loadable-manifest";
const CLIENT_STATIC_FILES_RUNTIME_MAIN = "main";
const CLIENT_STATIC_FILES_RUNTIME_MAIN_APP = "" + CLIENT_STATIC_FILES_RUNTIME_MAIN + "-app";
const APP_CLIENT_INTERNALS = "app-client-internals";
const CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = "react-refresh";
const CLIENT_STATIC_FILES_RUNTIME_AMP = "amp";
const CLIENT_STATIC_FILES_RUNTIME_WEBPACK = "webpack";
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = "polyfills";
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL = Symbol(CLIENT_STATIC_FILES_RUNTIME_POLYFILLS);
const EDGE_RUNTIME_WEBPACK = "edge-runtime-webpack";
const TEMPORARY_REDIRECT_STATUS = 307;
const PERMANENT_REDIRECT_STATUS = 308;
const STATIC_PROPS_ID = "__N_SSG";
const SERVER_PROPS_ID = "__N_SSP";
const PAGE_SEGMENT_KEY = "__PAGE__";
const GOOGLE_FONT_PROVIDER = "https://fonts.googleapis.com/";
const OPTIMIZED_FONT_PROVIDERS = [
    {
        url: GOOGLE_FONT_PROVIDER,
        preconnect: "https://fonts.gstatic.com"
    },
    {
        url: "https://use.typekit.net",
        preconnect: "https://use.typekit.net"
    }
];
const DEFAULT_SERIF_FONT = {
    name: "Times New Roman",
    xAvgCharWidth: 821,
    azAvgWidth: 854.3953488372093,
    unitsPerEm: 2048
};
const DEFAULT_SANS_SERIF_FONT = {
    name: "Arial",
    xAvgCharWidth: 904,
    azAvgWidth: 934.5116279069767,
    unitsPerEm: 2048
};
const STATIC_STATUS_PAGES = [
    "/500"
];
const TRACE_OUTPUT_VERSION = 1;
const TURBO_TRACE_DEFAULT_MEMORY_LIMIT = 6000;
const RSC_MODULE_TYPES = {
    client: "client",
    server: "server"
};
const EDGE_UNSUPPORTED_NODE_APIS = [
    "clearImmediate",
    "setImmediate",
    "BroadcastChannel",
    "ByteLengthQueuingStrategy",
    "CompressionStream",
    "CountQueuingStrategy",
    "DecompressionStream",
    "DomException",
    "MessageChannel",
    "MessageEvent",
    "MessagePort",
    "ReadableByteStreamController",
    "ReadableStreamBYOBRequest",
    "ReadableStreamDefaultController",
    "TransformStreamDefaultController",
    "WritableStreamDefaultController"
];
const SYSTEM_ENTRYPOINTS = new Set([
    CLIENT_STATIC_FILES_RUNTIME_MAIN,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH,
    CLIENT_STATIC_FILES_RUNTIME_AMP,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP
]);
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=constants.js.map


/***/ }),

/***/ 536:
/***/ ((__unused_webpack_module, exports) => {

// regexp is based on https://github.com/sindresorhus/escape-string-regexp

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "escapeStringRegexp", ({
    enumerable: true,
    get: function() {
        return escapeStringRegexp;
    }
}));
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, "\\$&");
    }
    return str;
} //# sourceMappingURL=escape-regexp.js.map


/***/ }),

/***/ 6230:
/***/ ((__unused_webpack_module, exports) => {

// http://www.cse.yorku.ca/~oz/hash.html

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    djb2Hash: function() {
        return djb2Hash;
    },
    hexHash: function() {
        return hexHash;
    }
});
function djb2Hash(str) {
    let hash = 5381;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) + hash + char;
    }
    return Math.abs(hash);
}
function hexHash(str) {
    return djb2Hash(str).toString(16).slice(0, 7);
} //# sourceMappingURL=hash.js.map


/***/ }),

/***/ 8090:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "detectLocaleCookie", ({
    enumerable: true,
    get: function() {
        return detectLocaleCookie;
    }
}));
function detectLocaleCookie(req, locales) {
    const { NEXT_LOCALE } = req.cookies || {};
    return NEXT_LOCALE ? locales.find((locale)=>NEXT_LOCALE.toLowerCase() === locale.toLowerCase()) : undefined;
} //# sourceMappingURL=detect-locale-cookie.js.map


/***/ }),

/***/ 2080:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * This module is for next.js server internal usage of path module.
 * It will use native path module for nodejs runtime.
 * It will use path-browserify polyfill for edge runtime.
 */ 
let path;
if (false) {} else {
    path = __webpack_require__(1017);
}
module.exports = path; //# sourceMappingURL=path.js.map


/***/ }),

/***/ 2159:
/***/ ((module) => {

// Note: This file is JS because it's used by the taskfile-swc.js file, which is JS.
// Keep file changes in sync with the corresponding `.d.ts` files.
/**
 * These are the browser versions that support all of the following:
 * static import: https://caniuse.com/es6-module
 * dynamic import: https://caniuse.com/es6-module-dynamic-import
 * import.meta: https://caniuse.com/mdn-javascript_operators_import_meta
 */ 
const MODERN_BROWSERSLIST_TARGET = [
    "chrome 64",
    "edge 79",
    "firefox 67",
    "opera 51",
    "safari 12"
];
module.exports = MODERN_BROWSERSLIST_TARGET; //# sourceMappingURL=modern-browserslist-target.js.map


/***/ }),

/***/ 6115:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "denormalizePagePath", ({
    enumerable: true,
    get: function() {
        return denormalizePagePath;
    }
}));
const _utils = __webpack_require__(9824);
const _normalizepathsep = __webpack_require__(9019);
function denormalizePagePath(page) {
    let _page = (0, _normalizepathsep.normalizePathSep)(page);
    return _page.startsWith("/index/") && !(0, _utils.isDynamicRoute)(_page) ? _page.slice(6) : _page !== "/index" ? _page : "/";
} //# sourceMappingURL=denormalize-page-path.js.map


/***/ }),

/***/ 6921:
/***/ ((__unused_webpack_module, exports) => {

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ensureLeadingSlash", ({
    enumerable: true,
    get: function() {
        return ensureLeadingSlash;
    }
}));
function ensureLeadingSlash(path) {
    return path.startsWith("/") ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map


/***/ }),

/***/ 9019:
/***/ ((__unused_webpack_module, exports) => {

/**
 * For a given page path, this function ensures that there is no backslash
 * escaping slashes in the path. Example:
 *  - `foo\/bar\/baz` -> `foo/bar/baz`
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePathSep", ({
    enumerable: true,
    get: function() {
        return normalizePathSep;
    }
}));
function normalizePathSep(path) {
    return path.replace(/\\/g, "/");
} //# sourceMappingURL=normalize-path-sep.js.map


/***/ }),

/***/ 8401:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    normalizeAppPath: function() {
        return normalizeAppPath;
    },
    normalizeRscPath: function() {
        return normalizeRscPath;
    }
});
const _ensureleadingslash = __webpack_require__(6921);
function normalizeAppPath(route) {
    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if (segment.startsWith("(") && segment.endsWith(")")) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment.startsWith("@")) {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
function normalizeRscPath(pathname, enabled) {
    return enabled ? pathname.replace(/\.rsc($|\?)/, "$1") : pathname;
} //# sourceMappingURL=app-paths.js.map


/***/ }),

/***/ 9824:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
    },
    isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
    }
});
const _sortedroutes = __webpack_require__(6262);
const _isdynamic = __webpack_require__(815); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 815:
/***/ ((__unused_webpack_module, exports) => {

// Identify /[param]/ in route string

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isDynamicRoute", ({
    enumerable: true,
    get: function() {
        return isDynamicRoute;
    }
}));
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
    return TEST_ROUTE.test(route);
} //# sourceMappingURL=is-dynamic.js.map


/***/ }),

/***/ 3767:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "parseRelativeUrl", ({
    enumerable: true,
    get: function() {
        return parseRelativeUrl;
    }
}));
const _utils = __webpack_require__(1265);
const _querystring = __webpack_require__(4557);
function parseRelativeUrl(url, base) {
    const globalBase = new URL( true ? "http://n" : 0);
    const resolvedBase = base ? new URL(base, globalBase) : url.startsWith(".") ? new URL( true ? "http://n" : 0) : globalBase;
    const { pathname, searchParams, search, hash, href, origin } = new URL(url, resolvedBase);
    if (origin !== globalBase.origin) {
        throw new Error("invariant: invalid relative URL, router received " + url);
    }
    return {
        pathname,
        query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
        search,
        hash,
        href: href.slice(globalBase.origin.length)
    };
} //# sourceMappingURL=parse-relative-url.js.map


/***/ }),

/***/ 429:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "parseUrl", ({
    enumerable: true,
    get: function() {
        return parseUrl;
    }
}));
const _querystring = __webpack_require__(4557);
const _parserelativeurl = __webpack_require__(3767);
function parseUrl(url) {
    if (url.startsWith("/")) {
        return (0, _parserelativeurl.parseRelativeUrl)(url);
    }
    const parsedURL = new URL(url);
    return {
        hash: parsedURL.hash,
        hostname: parsedURL.hostname,
        href: parsedURL.href,
        pathname: parsedURL.pathname,
        port: parsedURL.port,
        protocol: parsedURL.protocol,
        query: (0, _querystring.searchParamsToUrlQuery)(parsedURL.searchParams),
        search: parsedURL.search
    };
} //# sourceMappingURL=parse-url.js.map


/***/ }),

/***/ 247:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getPathMatch", ({
    enumerable: true,
    get: function() {
        return getPathMatch;
    }
}));
const _pathtoregexp = __webpack_require__(7999);
function getPathMatch(path, options) {
    const keys = [];
    const regexp = (0, _pathtoregexp.pathToRegexp)(path, keys, {
        delimiter: "/",
        sensitive: typeof (options == null ? void 0 : options.sensitive) === "boolean" ? options.sensitive : false,
        strict: options == null ? void 0 : options.strict
    });
    const matcher = (0, _pathtoregexp.regexpToFunction)((options == null ? void 0 : options.regexModifier) ? new RegExp(options.regexModifier(regexp.source), regexp.flags) : regexp, keys);
    /**
   * A matcher function that will check if a given pathname matches the path
   * given in the builder function. When the path does not match it will return
   * `false` but if it does it will return an object with the matched params
   * merged with the params provided in the second argument.
   */ return (pathname, params)=>{
        const res = pathname == null ? false : matcher(pathname);
        if (!res) {
            return false;
        }
        /**
     * If unnamed params are not allowed they must be removed from
     * the matched parameters. path-to-regexp uses "string" for named and
     * "number" for unnamed parameters.
     */ if (options == null ? void 0 : options.removeUnnamedParams) {
            for (const key of keys){
                if (typeof key.name === "number") {
                    delete res.params[key.name];
                }
            }
        }
        return {
            ...params,
            ...res.params
        };
    };
} //# sourceMappingURL=path-match.js.map


/***/ }),

/***/ 880:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    matchHas: function() {
        return matchHas;
    },
    compileNonPath: function() {
        return compileNonPath;
    },
    prepareDestination: function() {
        return prepareDestination;
    }
});
const _pathtoregexp = __webpack_require__(7999);
const _escaperegexp = __webpack_require__(536);
const _parseurl = __webpack_require__(429);
const _interceptionroutes = __webpack_require__(3958);
const _approuterheaders = __webpack_require__(42);
/**
 * Ensure only a-zA-Z are used for param names for proper interpolating
 * with path-to-regexp
 */ function getSafeParamName(paramName) {
    let newParamName = "";
    for(let i = 0; i < paramName.length; i++){
        const charCode = paramName.charCodeAt(i);
        if (charCode > 64 && charCode < 91 || // A-Z
        charCode > 96 && charCode < 123 // a-z
        ) {
            newParamName += paramName[i];
        }
    }
    return newParamName;
}
function escapeSegment(str, segmentName) {
    return str.replace(new RegExp(":" + (0, _escaperegexp.escapeStringRegexp)(segmentName), "g"), "__ESC_COLON_" + segmentName);
}
function unescapeSegments(str) {
    return str.replace(/__ESC_COLON_/gi, ":");
}
function matchHas(req, query, has, missing) {
    if (has === void 0) has = [];
    if (missing === void 0) missing = [];
    const params = {};
    const hasMatch = (hasItem)=>{
        let value;
        let key = hasItem.key;
        switch(hasItem.type){
            case "header":
                {
                    key = key.toLowerCase();
                    value = req.headers[key];
                    break;
                }
            case "cookie":
                {
                    value = req.cookies[hasItem.key];
                    break;
                }
            case "query":
                {
                    value = query[key];
                    break;
                }
            case "host":
                {
                    const { host } = (req == null ? void 0 : req.headers) || {};
                    // remove port from host if present
                    const hostname = host == null ? void 0 : host.split(":")[0].toLowerCase();
                    value = hostname;
                    break;
                }
            default:
                {
                    break;
                }
        }
        if (!hasItem.value && value) {
            params[getSafeParamName(key)] = value;
            return true;
        } else if (value) {
            const matcher = new RegExp("^" + hasItem.value + "$");
            const matches = Array.isArray(value) ? value.slice(-1)[0].match(matcher) : value.match(matcher);
            if (matches) {
                if (Array.isArray(matches)) {
                    if (matches.groups) {
                        Object.keys(matches.groups).forEach((groupKey)=>{
                            params[groupKey] = matches.groups[groupKey];
                        });
                    } else if (hasItem.type === "host" && matches[0]) {
                        params.host = matches[0];
                    }
                }
                return true;
            }
        }
        return false;
    };
    const allMatch = has.every((item)=>hasMatch(item)) && !missing.some((item)=>hasMatch(item));
    if (allMatch) {
        return params;
    }
    return false;
}
function compileNonPath(value, params) {
    if (!value.includes(":")) {
        return value;
    }
    for (const key of Object.keys(params)){
        if (value.includes(":" + key)) {
            value = value.replace(new RegExp(":" + key + "\\*", "g"), ":" + key + "--ESCAPED_PARAM_ASTERISKS").replace(new RegExp(":" + key + "\\?", "g"), ":" + key + "--ESCAPED_PARAM_QUESTION").replace(new RegExp(":" + key + "\\+", "g"), ":" + key + "--ESCAPED_PARAM_PLUS").replace(new RegExp(":" + key + "(?!\\w)", "g"), "--ESCAPED_PARAM_COLON" + key);
        }
    }
    value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, "\\$1").replace(/--ESCAPED_PARAM_PLUS/g, "+").replace(/--ESCAPED_PARAM_COLON/g, ":").replace(/--ESCAPED_PARAM_QUESTION/g, "?").replace(/--ESCAPED_PARAM_ASTERISKS/g, "*");
    // the value needs to start with a forward-slash to be compiled
    // correctly
    return (0, _pathtoregexp.compile)("/" + value, {
        validate: false
    })(params).slice(1);
}
function prepareDestination(args) {
    const query = Object.assign({}, args.query);
    delete query.__nextLocale;
    delete query.__nextDefaultLocale;
    delete query.__nextDataReq;
    delete query.__nextInferredLocaleFromDefault;
    delete query[_approuterheaders.NEXT_RSC_UNION_QUERY];
    let escapedDestination = args.destination;
    for (const param of Object.keys({
        ...args.params,
        ...query
    })){
        escapedDestination = escapeSegment(escapedDestination, param);
    }
    const parsedDestination = (0, _parseurl.parseUrl)(escapedDestination);
    const destQuery = parsedDestination.query;
    const destPath = unescapeSegments("" + parsedDestination.pathname + (parsedDestination.hash || ""));
    const destHostname = unescapeSegments(parsedDestination.hostname || "");
    const destPathParamKeys = [];
    const destHostnameParamKeys = [];
    (0, _pathtoregexp.pathToRegexp)(destPath, destPathParamKeys);
    (0, _pathtoregexp.pathToRegexp)(destHostname, destHostnameParamKeys);
    const destParams = [];
    destPathParamKeys.forEach((key)=>destParams.push(key.name));
    destHostnameParamKeys.forEach((key)=>destParams.push(key.name));
    const destPathCompiler = (0, _pathtoregexp.compile)(destPath, // have already validated before we got to this point and validating
    // breaks compiling destinations with named pattern params from the source
    // e.g. /something:hello(.*) -> /another/:hello is broken with validation
    // since compile validation is meant for reversing and not for inserting
    // params from a separate path-regex into another
    {
        validate: false
    });
    const destHostnameCompiler = (0, _pathtoregexp.compile)(destHostname, {
        validate: false
    });
    // update any params in query values
    for (const [key, strOrArray] of Object.entries(destQuery)){
        // the value needs to start with a forward-slash to be compiled
        // correctly
        if (Array.isArray(strOrArray)) {
            destQuery[key] = strOrArray.map((value)=>compileNonPath(unescapeSegments(value), args.params));
        } else if (typeof strOrArray === "string") {
            destQuery[key] = compileNonPath(unescapeSegments(strOrArray), args.params);
        }
    }
    // add path params to query if it's not a redirect and not
    // already defined in destination query or path
    let paramKeys = Object.keys(args.params).filter((name)=>name !== "nextInternalLocale");
    if (args.appendParamsToQuery && !paramKeys.some((key)=>destParams.includes(key))) {
        for (const key of paramKeys){
            if (!(key in destQuery)) {
                destQuery[key] = args.params[key];
            }
        }
    }
    let newUrl;
    // The compiler also that the interception route marker is an unnamed param, hence '0',
    // so we need to add it to the params object.
    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(destPath)) {
        for (const segment of destPath.split("/")){
            const marker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
            if (marker) {
                args.params["0"] = marker;
                break;
            }
        }
    }
    try {
        newUrl = destPathCompiler(args.params);
        const [pathname, hash] = newUrl.split("#");
        parsedDestination.hostname = destHostnameCompiler(args.params);
        parsedDestination.pathname = pathname;
        parsedDestination.hash = "" + (hash ? "#" : "") + (hash || "");
        delete parsedDestination.search;
    } catch (err) {
        if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
            throw new Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");
        }
        throw err;
    }
    // Query merge order lowest priority to highest
    // 1. initial URL query values
    // 2. path segment values
    // 3. destination specified query values
    parsedDestination.query = {
        ...query,
        ...parsedDestination.query
    };
    return {
        newUrl,
        destQuery,
        parsedDestination
    };
} //# sourceMappingURL=prepare-destination.js.map


/***/ }),

/***/ 4557:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    },
    assign: function() {
        return assign;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    searchParams.forEach((value, key)=>{
        if (typeof query[key] === "undefined") {
            query[key] = value;
        } else if (Array.isArray(query[key])) {
            query[key].push(value);
        } else {
            query[key] = [
                query[key],
                value
            ];
        }
    });
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === "string" || typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
    } else {
        return "";
    }
}
function urlQueryToSearchParams(urlQuery) {
    const result = new URLSearchParams();
    Object.entries(urlQuery).forEach((param)=>{
        let [key, value] = param;
        if (Array.isArray(value)) {
            value.forEach((item)=>result.append(key, stringifyUrlQueryParam(item)));
        } else {
            result.set(key, stringifyUrlQueryParam(value));
        }
    });
    return result;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    searchParamsList.forEach((searchParams)=>{
        Array.from(searchParams.keys()).forEach((key)=>target.delete(key));
        searchParams.forEach((value, key)=>target.append(key, value));
    });
    return target;
} //# sourceMappingURL=querystring.js.map


/***/ }),

/***/ 4060:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getRouteMatcher", ({
    enumerable: true,
    get: function() {
        return getRouteMatcher;
    }
}));
const _utils = __webpack_require__(1265);
function getRouteMatcher(param) {
    let { re, groups } = param;
    return (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) {
            return false;
        }
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch (_) {
                throw new _utils.DecodeError("failed to decode param");
            }
        };
        const params = {};
        Object.keys(groups).forEach((slugName)=>{
            const g = groups[slugName];
            const m = routeMatch[g.pos];
            if (m !== undefined) {
                params[slugName] = ~m.indexOf("/") ? m.split("/").map((entry)=>decode(entry)) : g.repeat ? [
                    decode(m)
                ] : decode(m);
            }
        });
        return params;
    };
} //# sourceMappingURL=route-matcher.js.map


/***/ }),

/***/ 9601:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRouteRegex: function() {
        return getRouteRegex;
    },
    getNamedRouteRegex: function() {
        return getNamedRouteRegex;
    },
    getNamedMiddlewareRegex: function() {
        return getNamedMiddlewareRegex;
    }
});
const _escaperegexp = __webpack_require__(536);
const _removetrailingslash = __webpack_require__(465);
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
/**
 * Parses a given parameter from a route to a data structure that can be used
 * to generate the parametrized route. Examples:
 *   - `[...slug]` -> `{ key: 'slug', repeat: true, optional: true }`
 *   - `...slug` -> `{ key: 'slug', repeat: true, optional: false }`
 *   - `[foo]` -> `{ key: 'foo', repeat: false, optional: true }`
 *   - `bar` -> `{ key: 'bar', repeat: false, optional: false }`
 */ function parseParameter(param) {
    const optional = param.startsWith("[") && param.endsWith("]");
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith("...");
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
}
function getParametrizedRoute(route) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const groups = {};
    let groupIndex = 1;
    return {
        parameterizedRoute: segments.map((segment)=>{
            if (segment.startsWith("[") && segment.endsWith("]")) {
                const { key, optional, repeat } = parseParameter(segment.slice(1, -1));
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        groups
    };
}
function getRouteRegex(normalizedRoute) {
    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute);
    return {
        re: new RegExp("^" + parameterizedRoute + "(?:/)?$"),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1;
    return ()=>{
        let routeKey = "";
        for(let i = 0; i < routeKeyCharLength; i++){
            routeKey += String.fromCharCode(routeKeyCharCode);
            routeKeyCharCode++;
            if (routeKeyCharCode > 122) {
                routeKeyCharLength++;
                routeKeyCharCode = 97;
            }
        }
        return routeKey;
    };
}
function getNamedParametrizedRoute(route, prefixRouteKeys) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    return {
        namedParameterizedRoute: segments.map((segment)=>{
            if (segment.startsWith("[") && segment.endsWith("]")) {
                const { key, optional, repeat } = parseParameter(segment.slice(1, -1));
                // replace any non-word characters since they can break
                // the named regex
                let cleanedKey = key.replace(/\W/g, "");
                if (prefixRouteKeys) {
                    cleanedKey = "" + NEXT_QUERY_PARAM_PREFIX + cleanedKey;
                }
                let invalidKey = false;
                // check if the key is still invalid and fallback to using a known
                // safe key
                if (cleanedKey.length === 0 || cleanedKey.length > 30) {
                    invalidKey = true;
                }
                if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
                    invalidKey = true;
                }
                if (invalidKey) {
                    cleanedKey = getSafeRouteKey();
                }
                if (prefixRouteKeys) {
                    routeKeys[cleanedKey] = "" + NEXT_QUERY_PARAM_PREFIX + key;
                } else {
                    routeKeys[cleanedKey] = "" + key;
                }
                return repeat ? optional ? "(?:/(?<" + cleanedKey + ">.+?))?" : "/(?<" + cleanedKey + ">.+?)" : "/(?<" + cleanedKey + ">[^/]+?)";
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        routeKeys
    };
}
function getNamedRouteRegex(normalizedRoute, prefixRouteKey) {
    const result = getNamedParametrizedRoute(normalizedRoute, prefixRouteKey);
    return {
        ...getRouteRegex(normalizedRoute),
        namedRegex: "^" + result.namedParameterizedRoute + "(?:/)?$",
        routeKeys: result.routeKeys
    };
}
function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute);
    const { catchAll = true } = options;
    if (parameterizedRoute === "/") {
        let catchAllRegex = catchAll ? ".*" : "";
        return {
            namedRegex: "^/" + catchAllRegex + "$"
        };
    }
    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false);
    let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
    return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
    };
} //# sourceMappingURL=route-regex.js.map


/***/ }),

/***/ 6262:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSortedRoutes", ({
    enumerable: true,
    get: function() {
        return getSortedRoutes;
    }
}));
class UrlNode {
    insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
    }
    smoosh() {
        return this._smoosh();
    }
    _smoosh(prefix) {
        if (prefix === void 0) prefix = "/";
        const childrenPaths = [
            ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        const routes = childrenPaths.map((c)=>this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr)=>[
                ...prev,
                ...curr
            ], []);
        if (this.slugName !== null) {
            routes.push(...this.children.get("[]")._smoosh(prefix + "[" + this.slugName + "]/"));
        }
        if (!this.placeholder) {
            const r = prefix === "/" ? "/" : prefix.slice(0, -1);
            if (this.optionalRestSlugName != null) {
                throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").');
            }
            routes.unshift(r);
        }
        if (this.restSlugName !== null) {
            routes.push(...this.children.get("[...]")._smoosh(prefix + "[..." + this.restSlugName + "]/"));
        }
        if (this.optionalRestSlugName !== null) {
            routes.push(...this.children.get("[[...]]")._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
        }
        return routes;
    }
    _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
            this.placeholder = false;
            return;
        }
        if (isCatchAll) {
            throw new Error("Catch-all must be the last part of the URL.");
        }
        // The next segment in the urlPaths list
        let nextSegment = urlPaths[0];
        // Check if the segment matches `[something]`
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
            // Strip `[` and `]`, leaving only `something`
            let segmentName = nextSegment.slice(1, -1);
            let isOptional = false;
            if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
                // Strip optional `[` and `]`, leaving only `something`
                segmentName = segmentName.slice(1, -1);
                isOptional = true;
            }
            if (segmentName.startsWith("...")) {
                // Strip `...`, leaving only `something`
                segmentName = segmentName.substring(3);
                isCatchAll = true;
            }
            if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
                throw new Error("Segment names may not start or end with extra brackets ('" + segmentName + "').");
            }
            if (segmentName.startsWith(".")) {
                throw new Error("Segment names may not start with erroneous periods ('" + segmentName + "').");
            }
            function handleSlug(previousSlug, nextSlug) {
                if (previousSlug !== null) {
                    // If the specific segment already has a slug but the slug is not `something`
                    // This prevents collisions like:
                    // pages/[post]/index.js
                    // pages/[id]/index.js
                    // Because currently multiple dynamic params on the same segment level are not supported
                    if (previousSlug !== nextSlug) {
                        // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
                        throw new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "').");
                    }
                }
                slugNames.forEach((slug)=>{
                    if (slug === nextSlug) {
                        throw new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path');
                    }
                    if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                        throw new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path');
                    }
                });
                slugNames.push(nextSlug);
            }
            if (isCatchAll) {
                if (isOptional) {
                    if (this.restSlugName != null) {
                        throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).');
                    }
                    handleSlug(this.optionalRestSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.optionalRestSlugName = segmentName;
                    // nextSegment is overwritten to [[...]] so that it can later be sorted specifically
                    nextSegment = "[[...]]";
                } else {
                    if (this.optionalRestSlugName != null) {
                        throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").');
                    }
                    handleSlug(this.restSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.restSlugName = segmentName;
                    // nextSegment is overwritten to [...] so that it can later be sorted specifically
                    nextSegment = "[...]";
                }
            } else {
                if (isOptional) {
                    throw new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").');
                }
                handleSlug(this.slugName, segmentName);
                // slugName is kept as it can only be one particular slugName
                this.slugName = segmentName;
                // nextSegment is overwritten to [] so that it can later be sorted specifically
                nextSegment = "[]";
            }
        }
        // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode
        if (!this.children.has(nextSegment)) {
            this.children.set(nextSegment, new UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
    }
    constructor(){
        this.placeholder = true;
        this.children = new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
    }
}
function getSortedRoutes(normalizedPages) {
    // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
    // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
    // Only 1 dynamic segment per nesting level
    // So in the case that is test/integration/dynamic-routing it'll be this:
    // pages/[post]/comments.js
    // pages/blog/[post]/comment/[id].js
    // Both are fine because `pages/[post]` and `pages/blog` are on the same level
    // So in this case `UrlNode` created here has `this.slugName === 'post'`
    // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
    // Instead what has to be passed through is the upwards path's dynamic names
    const root = new UrlNode();
    // Here the `root` gets injected multiple paths, and insert will break them up into sublevels
    normalizedPages.forEach((pagePath)=>root.insert(pagePath));
    // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority
    return root.smoosh();
} //# sourceMappingURL=sorted-routes.js.map


/***/ }),

/***/ 1265:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    isResSent: function() {
        return isResSent;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    DecodeError: function() {
        return DecodeError;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    }
});
const WEB_VITALS = [
    "CLS",
    "FCP",
    "FID",
    "INP",
    "LCP",
    "TTFB"
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ":" + port : "");
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split("?");
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? "?" + urlParts.slice(1).join("?") : "");
}
async function loadGetInitialProps(App, ctx) {
    if (false) { var _App_prototype; }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw new Error(message);
    }
    if (false) {}
    return props;
}
const SP = typeof performance !== "undefined";
const ST = SP && [
    "mark",
    "measure",
    "getEntriesByName"
].every((method)=>typeof performance[method] === "function");
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = "ENOENT";
        this.message = "Cannot find the middleware module";
    }
} //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 4834:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(273);


/***/ }),

/***/ 5482:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var typeOf = __webpack_require__(6111);
var extend = __webpack_require__(1306);
/**
 * Parse sections in `input` with the given `options`.
 *
 * ```js
 * var sections = require('{%= name %}');
 * var result = sections(input, options);
 * // { content: 'Content before sections', sections: [] }
 * ```
 * @param {String|Buffer|Object} `input` If input is an object, it's `content` property must be a string or buffer.
 * @param {Object} options
 * @return {Object} Returns an object with a `content` string and an array of `sections` objects.
 * @api public
 */ module.exports = function(input, options) {
    if (typeof options === "function") {
        options = {
            parse: options
        };
    }
    var file = toObject(input);
    var defaults = {
        section_delimiter: "---",
        parse: identity
    };
    var opts = extend({}, defaults, options);
    var delim = opts.section_delimiter;
    var lines = file.content.split(/\r?\n/);
    var sections = null;
    var section = createSection();
    var content = [];
    var stack = [];
    function initSections(val) {
        file.content = val;
        sections = [];
        content = [];
    }
    function closeSection(val) {
        if (stack.length) {
            section.key = getKey(stack[0], delim);
            section.content = val;
            opts.parse(section, sections);
            sections.push(section);
            section = createSection();
            content = [];
            stack = [];
        }
    }
    for(var i = 0; i < lines.length; i++){
        var line = lines[i];
        var len = stack.length;
        var ln = line.trim();
        if (isDelimiter(ln, delim)) {
            if (ln.length === 3 && i !== 0) {
                if (len === 0 || len === 2) {
                    content.push(line);
                    continue;
                }
                stack.push(ln);
                section.data = content.join("\n");
                content = [];
                continue;
            }
            if (sections === null) {
                initSections(content.join("\n"));
            }
            if (len === 2) {
                closeSection(content.join("\n"));
            }
            stack.push(ln);
            continue;
        }
        content.push(line);
    }
    if (sections === null) {
        initSections(content.join("\n"));
    } else {
        closeSection(content.join("\n"));
    }
    file.sections = sections;
    return file;
};
function isDelimiter(line, delim) {
    if (line.slice(0, delim.length) !== delim) {
        return false;
    }
    if (line.charAt(delim.length + 1) === delim.slice(-1)) {
        return false;
    }
    return true;
}
function toObject(input) {
    if (typeOf(input) !== "object") {
        input = {
            content: input
        };
    }
    if (typeof input.content !== "string" && !isBuffer(input.content)) {
        throw new TypeError("expected a buffer or string");
    }
    input.content = input.content.toString();
    input.sections = [];
    return input;
}
function getKey(val, delim) {
    return val ? val.slice(delim.length).trim() : "";
}
function createSection() {
    return {
        key: "",
        data: "",
        content: ""
    };
}
function identity(val) {
    return val;
}
function isBuffer(val) {
    if (val && val.constructor && typeof val.constructor.isBuffer === "function") {
        return val.constructor.isBuffer(val);
    }
    return false;
}


/***/ }),

/***/ 8997:
/***/ ((module) => {

/*!
 * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */ 
module.exports = function(str) {
    if (typeof str === "string" && str.charAt(0) === "\uFEFF") {
        return str.slice(1);
    }
    return str;
};


/***/ }),

/***/ 5967:
/***/ ((__unused_webpack_module, exports) => {



exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


/***/ }),

/***/ 1113:
/***/ ((__unused_webpack_module, exports) => {



function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();

    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
exports._ = exports._interop_require_wildcard = _interop_require_wildcard;
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) return cache.get(obj);

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }

    newObj.default = obj;

    if (cache) cache.set(obj, newObj);

    return newObj;
}


/***/ }),

/***/ 1550:
/***/ ((__unused_webpack_module, exports) => {


exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ })

};
;